// Einmal-Skript: Glyphen-Rohdaten fuer die ROUTENWERK-Logo-Konzepte.
import { readFileSync, writeFileSync } from 'node:fs';
import opentype from 'opentype.js';
import wawoff2 from 'wawoff2';

const fontPfad = '/Users/marvinmuller/Documents/03 Arbeit & Projekte/MARVIN.WEB/projekte/routenwerk/fonts/cabinet-grotesk-800.woff2';
let puffer = readFileSync(fontPfad);
puffer = Buffer.from(await wawoff2.decompress(puffer));
const font = opentype.parse(puffer.buffer.slice(puffer.byteOffset, puffer.byteOffset + puffer.byteLength));

function zeichenDaten(text, groesse, lsEm) {
  const skala = groesse / font.unitsPerEm;
  const spacing = (lsEm || 0) * groesse;
  let x = 0;
  const liste = [];
  for (const zeichen of text) {
    const glyph = font.charToGlyph(zeichen);
    const pfad = glyph.getPath(x, 0, groesse);
    const bb = pfad.getBoundingBox();
    liste.push({ zeichen, x: +x.toFixed(2), advance: +(glyph.advanceWidth * skala).toFixed(2),
      d: pfad.toPathData(3), bbox: [bb.x1, bb.y1, bb.x2, bb.y2].map(v => +v.toFixed(2)) });
    x += glyph.advanceWidth * skala + spacing;
  }
  return { zeichen: liste, gesamtBreite: +(x - spacing).toFixed(2) };
}

const daten = {
  wortmarke: zeichenDaten('ROUTENWERK', 100, 0.12),
  r_solo: zeichenDaten('R', 100, 0),
  rw: zeichenDaten('RW', 100, 0.04),
};
writeFileSync('/private/tmp/claude-501/-Users-marvinmuller-Documents/673cb9bd-813a-476b-8519-65adf963fe5e/scratchpad/glyphen.json', JSON.stringify(daten));
const o = daten.wortmarke.zeichen[1];
console.log('O: x=' + o.x + ' advance=' + o.advance + ' bbox=' + o.bbox.join(','));
console.log('R solo bbox=' + daten.r_solo.zeichen[0].bbox.join(',') + ' | RW breite=' + daten.rw.gesamtBreite);
console.log('Wortmarke gesamt=' + daten.wortmarke.gesamtBreite);
