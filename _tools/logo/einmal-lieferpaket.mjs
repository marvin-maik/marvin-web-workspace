// Einmal-Skript: finales ROUTENWERK-Lieferpaket nach Marvins Pick (2026-07-13).
// A (Flap-Kachel-R) -> Webicon/Favicon; C (Wortmarke mit Zielmarken-O) -> Logo.
import { readFileSync, writeFileSync } from 'node:fs';
import opentype from 'opentype.js';
import wawoff2 from 'wawoff2';

const SCRATCH = '/private/tmp/claude-501/-Users-marvinmuller-Documents/673cb9bd-813a-476b-8519-65adf963fe5e/scratchpad';
const PROJEKT = '/Users/marvinmuller/Documents/03 Arbeit & Projekte/MARVIN.WEB/projekte/routenwerk';
const g = JSON.parse(readFileSync(`${SCRATCH}/glyphen.json`, 'utf8'));

const INK = '#16130E', BG = '#FAF9F5', SIGNAL = '#C2331F', FLAP = '#211C15', MUTED = '#6F6A60';

// ---------- Logo (Konzept C), knappe viewBox aus echten BBoxen ----------
const zs = g.wortmarke.zeichen;
const o = zs[1];
const oCx = (o.bbox[0] + o.bbox[2]) / 2, oCy = (o.bbox[1] + o.bbox[3]) / 2;
const oR = (o.bbox[2] - o.bbox[0]) / 2 + 1;
const tipY = 20, baseY = oCy + oR * 0.5, baseHalb = oR * 0.82;
const minX = Math.min(...zs.filter((_, i) => i !== 1).map(z => z.bbox[0]), oCx - oR);
const maxX = Math.max(...zs.filter((_, i) => i !== 1).map(z => z.bbox[2]), oCx + oR);
const minY = Math.min(...zs.map(z => z.bbox[1]), oCy - oR);
const vb = `${(minX - 1).toFixed(1)} ${(minY - 1).toFixed(1)} ${(maxX - minX + 2).toFixed(1)} ${(tipY - minY + 2).toFixed(1)}`;

function logoSvg(textFarbe, akzentFarbe) {
  const routen = [0, 2, 3, 4, 5].map(i => `<path d="${zs[i].d}"/>`).join('');
  const werk = [6, 7, 8, 9].map(i => `<path d="${zs[i].d}"/>`).join('');
  return `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">
<g fill="${textFarbe}">${routen}</g>
<g fill="${akzentFarbe}"><circle cx="${oCx.toFixed(1)}" cy="${oCy.toFixed(1)}" r="${oR.toFixed(1)}"/><path d="M${oCx.toFixed(1)} ${tipY} ${(oCx - baseHalb).toFixed(1)} ${baseY.toFixed(1)}h${(baseHalb * 2).toFixed(1)}z"/>${werk}</g>
</svg>`;
}
writeFileSync(`${PROJEKT}/handoff/logo.svg`, logoSvg(INK, SIGNAL));
writeFileSync(`${PROJEKT}/handoff/logo-invers.svg`, logoSvg(BG, SIGNAL));
writeFileSync(`${PROJEKT}/handoff/logo-mono.svg`, logoSvg(INK, INK));
writeFileSync(`${PROJEKT}/img/logo.svg`, logoSvg(INK, SIGNAL));   // fuer die Nav

// ---------- Webicon (Konzept A) ----------
const r = g.r_solo.zeichen[0];
const [x1, y1, x2, y2] = r.bbox;
const s = 52 / (y2 - y1);
const tx = 48 - ((x1 + x2) / 2) * s, ty = 48 - ((y1 + y2) / 2) * s;
const zeichen = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="88" height="88" rx="10" fill="${FLAP}"/><g transform="translate(${tx.toFixed(2)},${ty.toFixed(2)}) scale(${s.toFixed(4)})"><path d="${r.d}" fill="${BG}"/></g><line x1="10" y1="48" x2="86" y2="48" stroke="${BG}" stroke-opacity=".28" stroke-width="2.5"/></svg>`;
writeFileSync(`${PROJEKT}/handoff/zeichen-flap.svg`, zeichen);
writeFileSync(`${SCRATCH}/zeichen-flap.svg`, zeichen);
const dataUri = 'data:image/svg+xml,' + zeichen.replace(/#/g, '%23').replace(/"/g, "'").replace(/</g, '%3C').replace(/>/g, '%3E');
writeFileSync(`${SCRATCH}/favicon-datauri.txt`, dataUri);

// ---------- og:image-Grundflaeche (SVG; Raster macht svg-zu-png) ----------
// Koordinaten-Zeile als Pfade (B612 Mono), damit nichts von Fonts abhaengt.
async function textPfad(fontDatei, text, groesse, lsEm) {
  let p = readFileSync(`${PROJEKT}/fonts/${fontDatei}`);
  p = Buffer.from(await wawoff2.decompress(p));
  const font = opentype.parse(p.buffer.slice(p.byteOffset, p.byteOffset + p.byteLength));
  const spacing = (lsEm || 0) * groesse;
  let x = 0; const teile = [];
  for (const zch of text) {
    const gl = font.charToGlyph(zch);
    const d = gl.getPath(x, 0, groesse).toPathData(3);
    if (d) teile.push(d);
    x += gl.advanceWidth * (groesse / font.unitsPerEm) + spacing;
  }
  return { d: teile.join(' '), breite: x - spacing };
}
const zeile = await textPfad('b612-mono-400.woff2', 'N 52.5496 / E 13.4234 · BERLIN · ROUTENWERK.DE', 22, 0.08);
// Marker-Komposition wie auf der Site: Linie, Koordinaten-Zeile, darunter das Logo.
const logoBreite = 760;
const sk = logoBreite / (maxX - minX + 2);                       // Skalierung viewBox -> Pixel
const logoHoehe = (tipY - minY + 2) * sk;
const logoX = (1200 - logoBreite) / 2;
const linieY = 235, zeileY = 272, logoTop = 320;
const logoPfade = `<g transform="translate(${(logoX - (minX - 1) * sk).toFixed(1)},${(logoTop - (minY - 1) * sk).toFixed(1)}) scale(${sk.toFixed(4)})">
<g fill="${INK}">${[0, 2, 3, 4, 5].map(i => `<path d="${zs[i].d}"/>`).join('')}</g>
<g fill="${SIGNAL}"><circle cx="${oCx.toFixed(1)}" cy="${oCy.toFixed(1)}" r="${oR.toFixed(1)}"/><path d="M${oCx.toFixed(1)} ${tipY} ${(oCx - baseHalb).toFixed(1)} ${baseY.toFixed(1)}h${(baseHalb * 2).toFixed(1)}z"/>${[6, 7, 8, 9].map(i => `<path d="${zs[i].d}"/>`).join('')}</g>
</g>`;
const og = `<svg viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="630" fill="${BG}"/>
<line x1="${logoX}" y1="${linieY}" x2="${logoX + logoBreite}" y2="${linieY}" stroke="#E2DFD7" stroke-width="2"/>
<g transform="translate(${logoX},${zeileY})" fill="${MUTED}"><path d="${zeile.d}"/></g>
${logoPfade}
</svg>`;
console.log('og-Layout: Logo', logoBreite, 'x', logoHoehe.toFixed(0), '@ y', logoTop, '(unten', (logoTop + logoHoehe).toFixed(0) + ')');
writeFileSync(`${SCRATCH}/og-image.svg`, og);
console.log('SVGs geschrieben. viewBox Logo:', vb, '| Data-URI:', dataUri.length, 'Zeichen');
