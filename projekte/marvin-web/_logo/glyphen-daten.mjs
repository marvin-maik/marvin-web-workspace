// Zieht die Glyphen-Rohdaten fuer die MARVIN.WEB-Logo-Konzepte aus Clash Display 700.
// Wortmarke bleibt reine Pfade (schriftunabhaengig). Output-JSON ins Scratchpad.
//
// opentype.js-FALLE (real, hier reproduziert): sobald ein Glyph EINMAL vollstaendig
// verarbeitet wurde (getPath/toPathData/getBoundingBox), liefert JEDER weitere Zugriff auf
// DASSELBE Glyph NaN-Koordinaten — betrifft in Clash Display 700 das 'W'. Das ist Modul-/Cache-
// Zustand, den auch ein frisch geparster Font nicht zuruecksetzt. Loesung: jedes Glyph GENAU
// EINMAL verarbeiten. Darum die volle Wortmarke ein einziges Mal ziehen und alle Teilzeichen
// (M solo, MARVIN, WEB) daraus ableiten, statt sie neu zu extrahieren.
import { readFileSync, writeFileSync } from 'node:fs';
import opentype from 'opentype.js';
import wawoff2 from 'wawoff2';

const FONT = '/Users/marvinmuller/Documents/03 Arbeit & Projekte/MARVIN.WEB/projekte/marvin-web/fonts/clash-display-700.woff2';
const OUT = '/Users/marvinmuller/Documents/03 Arbeit & Projekte/MARVIN.WEB/projekte/marvin-web/_logo/glyphen.json';

let puffer = readFileSync(FONT);
puffer = Buffer.from(await wawoff2.decompress(puffer));
// Zwei kombinierte Schutzmassnahmen gegen die opentype.js-NaN-Falle:
//  1) FRISCHER Font pro Glyph — verhindert, dass vorher verarbeitete Glyphen (M,A,..) das 'W'
//     ueber einen geteilten Font-Puffer vergiften.
//  2) Jedes Glyph nur EINMAL im Prozess anfassen (Teilzeichen werden abgeleitet, nicht neu gezogen).
function frischerFont() {
  const p = Buffer.from(puffer);
  return opentype.parse(p.buffer.slice(p.byteOffset, p.byteOffset + p.byteLength));
}
const einheitenProEm = frischerFont().unitsPerEm;

// opentype.js liefert (nicht-deterministisch) fuer das achsensymmetrische Clash-Display-700-'W'
// einzelne NaN-X-Koordinaten. Deterministisch reparieren: den kaputten Vertex aus seinem
// Spiegelpartner (gleiche Y-Koordinate, dessen Spiegel-X noch fehlt) an der Glyph-Mittelachse
// rekonstruieren. KEIN Augenmass — reine Achsensymmetrie des Buchstabens. Danach visuell gepr.
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

// bbox aus dem sauberen Pfad-String (getBoundingBox() nicht nutzen: korrumpiert die commands).
// Fuer Versalien exakt — Extrema liegen auf On-Curve-Punkten.
function bboxAusD(d) {
  const nums = (d.match(/-?\d*\.?\d+(?:e-?\d+)?/g) || []).map(Number);
  let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
  for (let i = 0; i + 1 < nums.length; i += 2) {
    const x = nums[i], y = nums[i + 1];
    if (x < x1) x1 = x; if (x > x2) x2 = x;
    if (y < y1) y1 = y; if (y > y2) y2 = y;
  }
  return [x1, y1, x2, y2].map(v => +v.toFixed(2));
}

// Volle Wortmarke EIN EINZIGES Mal ziehen (jedes Glyph genau einmal verarbeitet).
function ziehe(text, groesse, lsEm) {
  const skala = groesse / einheitenProEm;
  const spacing = (lsEm || 0) * groesse;
  let x = 0;
  const liste = [];
  for (const zeichen of text) {
    const glyph = frischerFont().charToGlyph(zeichen);   // frischer Font pro Glyph
    let d = glyph.getPath(x, 0, groesse).toPathData(3);
    if (d.includes('NaN')) { console.error(`  [repariert] NaN-Vertex in '${zeichen}' gespiegelt`); d = repariereD(d); }
    if (/NaN/.test(d)) throw new Error(`NaN in '${zeichen}' nach Reparatur — nicht rekonstruierbar`);
    liste.push({ zeichen, x: +x.toFixed(2), advance: +(glyph.advanceWidth * skala).toFixed(2), d, bbox: bboxAusD(d) });
    x += glyph.advanceWidth * skala + spacing;
  }
  return { zeichen: liste, gesamtBreite: +(x - spacing).toFixed(2) };
}

const wortmarke = ziehe('MARVIN.WEB', 100, -0.02); // Reihenfolge: M A R V I N . W E B
const zs = wortmarke.zeichen;

const alles = {
  wortmarke,
  // Abgeleitet (KEINE Neu-Extraktion): gleiche Glyph-d, place() im Build zentriert per Ink-bbox.
  marvin: { zeichen: zs.slice(0, 6) },   // M A R V I N
  web: { zeichen: zs.slice(7, 10) },     // W E B
  m_solo: { zeichen: [zs[0]] },          // M sitzt bei x=0
  cap: { top: zs[0].bbox[1], bottom: zs[0].bbox[3] }, // -67 / 0
};
writeFileSync(OUT, JSON.stringify(alles, null, 0));

console.log('OK, kein NaN. MARVIN.WEB Breite=' + wortmarke.gesamtBreite);
zs.forEach(z => console.log(`  '${z.zeichen}'  x=${z.x}  bbox=${z.bbox.join(',')}`));
console.log('M solo bbox=' + alles.m_solo.zeichen[0].bbox.join(','));
