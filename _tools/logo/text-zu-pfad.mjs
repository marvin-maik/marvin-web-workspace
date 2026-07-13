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
const font = opentype.parse(puffer.buffer.slice(puffer.byteOffset, puffer.byteOffset + puffer.byteLength));

const skala = groesse / font.unitsPerEm;
const spacing = lsEm * groesse;
let x = 0;
const teile = [];
for (const zeichen of text) {
  const glyph = font.charToGlyph(zeichen);
  const pfad = glyph.getPath(x, 0, groesse);
  const d = pfad.toPathData(3);
  if (d) teile.push(d);
  x += glyph.advanceWidth * skala + spacing;
}
console.log(JSON.stringify({
  d: teile.join(' '),
  breite: +(x - spacing).toFixed(2),
  ascender: +(font.ascender * skala).toFixed(2),
  descender: +(font.descender * skala).toFixed(2),
  hinweis: 'Baseline liegt bei y=0; fuer viewBox y = -ascender nehmen'
}));
