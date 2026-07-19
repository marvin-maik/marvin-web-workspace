#!/usr/bin/env node
// Wandelt Text in echte SVG-Pfade (schriftunabhaengig, Grundbaustein fuer Wortmarken).
// Nutzung: node text-zu-pfad.mjs <font.woff2|ttf|otf> "TEXT" <fontsize-px> [letterspacing-em]
// Output: JSON {d, breite, hoehe, ascender, descender} — d ist der SVG-Pfad, Baseline bei y=0.
import { readFileSync } from 'node:fs';
import opentype from 'opentype.js';
import wawoff2 from 'wawoff2';

const [fontPfad, text, groesseArg, lsArg] = process.argv.slice(2);
if (!fontPfad || !text) {
  console.error('Nutzung: node text-zu-pfad.mjs <font> "TEXT" <fontsize> [letterspacing-em]');
  process.exit(1);
}
const groesse = Number(groesseArg || 100);
const lsEm = Number(lsArg || 0);

let puffer = readFileSync(fontPfad);
if (fontPfad.endsWith('.woff2')) puffer = Buffer.from(await wawoff2.decompress(puffer));

// opentype.js-NaN-Falle (real, in Clash Display 700 am 'W' reproduziert): sobald EIN Glyph einmal
// vollstaendig verarbeitet wurde, liefert der geteilte Font bei DEMSELBEN Glyph NaN-Koordinaten
// (Modul-/Cache-Zustand). Zwei kombinierte Gegenmittel, wie im Schwester-Skript _logo/glyphen-daten.mjs:
//  1) FRISCHER Font pro Glyph — so vergiftet kein vorher gezogenes Glyph das naechste.
//  2) Reicht das nicht (opentype.js liefert fuer achsensymmetrische Versalien vereinzelt weiter NaN-X),
//     rekonstruiert repariereD() den kaputten Vertex deterministisch aus seinem Spiegelpartner.
function frischerFont() {
  const p = Buffer.from(puffer);
  return opentype.parse(p.buffer.slice(p.byteOffset, p.byteOffset + p.byteLength));
}

// Deterministische Reparatur: den NaN-X-Vertex aus seinem Spiegelpartner (gleiche Y, dessen Spiegel-X
// noch fehlt) an der Glyph-Mittelachse rekonstruieren. KEIN Augenmass — reine Achsensymmetrie.
// Greift nur, wenn wirklich ein NaN im Pfad steht; sonst unveraendert durch.
function repariereD(d) {
  if (!d.includes('NaN')) return d;
  const tokens = d.match(/[MLCQZ]|-?\d*\.?\d+|NaN/g) || [];
  const argc = { M: 2, L: 2, C: 6, Q: 4, Z: 0 };
  const pts = [];
  for (let i = 0; i < tokens.length;) {
    const t = tokens[i];
    if (argc[t] !== undefined) {
      const n = argc[t]; i++;
      for (let k = 0; k + 1 < n; k += 2) pts.push({ xi: i + k, yi: i + k + 1, x: parseFloat(tokens[i + k]), y: parseFloat(tokens[i + k + 1]) });
      i += n;
    } else i++;
  }
  const validX = pts.filter(p => !Number.isNaN(p.x)).map(p => p.x);
  const cx = (Math.min(...validX) + Math.max(...validX)) / 2;
  for (const p of pts) {
    if (Number.isNaN(p.x) && !Number.isNaN(p.y)) {
      const sameY = pts.filter(q => !Number.isNaN(q.x) && Math.abs(q.y - p.y) < 0.6);
      let mir = null;
      for (const q of sameY) { const m = 2 * cx - q.x; if (!sameY.some(r => Math.abs(r.x - m) < 0.9)) { mir = m; break; } }
      if (mir == null && sameY.length) mir = 2 * cx - sameY[0].x;
      tokens[p.xi] = String(+mir.toFixed(3));
    }
  }
  return tokens.join(' ');
}

// Metrik-Werte sind Font-Ebene (nicht Glyph-Cache-betroffen) — einmal aus frischem Font reicht.
const metrikFont = frischerFont();
const skala = groesse / metrikFont.unitsPerEm;
const spacing = lsEm * groesse;
let x = 0;
const teile = [];
for (const zeichen of text) {
  const glyph = frischerFont().charToGlyph(zeichen);   // frischer Font pro Glyph (Gegenmittel 1)
  let d = glyph.getPath(x, 0, groesse).toPathData(3);
  if (d.includes('NaN')) { console.error(`  [repariert] NaN-Vertex in '${zeichen}' gespiegelt`); d = repariereD(d); }
  if (/NaN/.test(d)) throw new Error(`NaN in '${zeichen}' nach Reparatur — nicht rekonstruierbar`);
  if (d) teile.push(d);
  x += glyph.advanceWidth * skala + spacing;
}
console.log(JSON.stringify({
  d: teile.join(' '),
  breite: +(x - spacing).toFixed(2),
  ascender: +(metrikFont.ascender * skala).toFixed(2),
  descender: +(metrikFont.descender * skala).toFixed(2),
  hinweis: 'Baseline liegt bei y=0; fuer viewBox y = -ascender nehmen'
}));
