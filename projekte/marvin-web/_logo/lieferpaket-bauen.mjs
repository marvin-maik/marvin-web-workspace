// Finales Lieferpaket MARVIN.WEB (Pick: A Wortmarke + C M.-Signet).
// Alle Marken sind reine Pfade/Primitive (kein <text>, kein Font-Fallback). W-Guard steckt schon
// in glyphen.json (siehe glyphen-daten.mjs). Schreibt SVGs nach img/, Favicon-PNGs ins Projekt-Root.
import { readFileSync, writeFileSync } from 'node:fs';

const PROJEKT = '/Users/marvinmuller/Documents/03 Arbeit & Projekte/MARVIN.WEB/projekte/marvin-web';
const IMG = `${PROJEKT}/img`;
const g = JSON.parse(readFileSync(`${PROJEKT}/_logo/glyphen.json`, 'utf8'));

const INK = '#161412', PAPER = '#f5f1e8', SIGNAL = '#e8440a';
const CAP = 67;
const svgHead = 'xmlns="http://www.w3.org/2000/svg"';

// ---------- Wortmarke A (Buchstaben + Orange-Quadrat statt Punkt) ----------
// Quadrat sitzt im Punkt-Slot (417.1..441.5), 23x23 auf der Baseline y=0.
const LETTERS = [0, 1, 2, 3, 4, 5, 7, 8, 9].map(i => g.wortmarke.zeichen[i].d).join(' ');
const SQ = { x: 417.8, y: -23, s: 23 };

function wortmarke(letterFill, squareFill) {
  return `<svg ${svgHead} viewBox="0 -67 689 67" width="689" height="67">
  <path d="${LETTERS}" fill="${letterFill}"/>
  <rect x="${SQ.x}" y="${SQ.y}" width="${SQ.s}" height="${SQ.s}" fill="${squareFill}"/>
</svg>
`;
}

// ---------- M.-Signet (Kachel + M + Quadrat-Punkt), canvas 100x100 ----------
const M = g.m_solo.zeichen[0];
const S = 46 / CAP;
const mInkW = (M.bbox[2] - M.bbox[0]) * S;
const DOT = 15.6, GAP = 5;
const left = (100 - (mInkW + GAP + DOT)) / 2;
const mTx = left - M.bbox[0] * S, mBase = 73;
const dotX = left + mInkW + GAP, dotY = mBase - DOT;
const mTransform = `translate(${mTx.toFixed(4)},${mBase}) scale(${S.toFixed(6)})`;

function signet(groundFill, mFill, dotFill) {
  return `<svg ${svgHead} viewBox="0 0 100 100" width="100" height="100">
  <rect x="0" y="0" width="100" height="100" fill="${groundFill}"/>
  <path d="${M.d}" fill="${mFill}" transform="${mTransform}"/>
  <rect x="${dotX.toFixed(3)}" y="${dotY.toFixed(3)}" width="${DOT}" height="${DOT}" fill="${dotFill}"/>
</svg>
`;
}

// Transform in Pfad-Koordinaten einbacken (fuer den einfarbigen Knockout-Stempel; affin, Punktpaare).
const fmt = v => String(+v.toFixed(3));
function bakeTransform(d, s, tx, ty) {
  const tokens = d.match(/[MLCQZ]|-?\d*\.?\d+/g) || [];
  const argc = { M: 2, L: 2, C: 6, Q: 4, Z: 0 };
  const out = [];
  for (let i = 0; i < tokens.length;) {
    const t = tokens[i];
    if (argc[t] !== undefined) {
      out.push(t); const n = argc[t]; i++;
      for (let k = 0; k + 1 < n; k += 2) { out.push(fmt(tx + s * parseFloat(tokens[i + k])), fmt(ty + s * parseFloat(tokens[i + k + 1]))); }
      i += n;
    } else i++;
  }
  return out.join(' ');
}
const bakedM = bakeTransform(M.d, S, mTx, mBase);
const tilePath = 'M0 0H100V100H0Z';
const dotPath = `M${fmt(dotX)} ${fmt(dotY)}H${fmt(dotX + DOT)}V${mBase}H${fmt(dotX)}Z`;
// Einfarbiger Stempel: Kachel mit M + Punkt als Aussparung (fill-rule evenodd), currentColor.
function signetMono() {
  return `<svg ${svgHead} viewBox="0 0 100 100" width="100" height="100">
  <path fill="currentColor" fill-rule="evenodd" d="${tilePath} ${bakedM} ${dotPath}"/>
</svg>
`;
}

// ---------- Lockup (Signet + Wortmarke), viewBox 0 0 728 96 ----------
const w = 60 / CAP, wTx = 116 - 3 * w, wBase = 78;
function signetInner(groundFill, mFill, dotFill) {
  return `<rect x="0" y="0" width="100" height="100" fill="${groundFill}"/>` +
    `<path d="${M.d}" fill="${mFill}" transform="${mTransform}"/>` +
    `<rect x="${dotX.toFixed(3)}" y="${dotY.toFixed(3)}" width="${DOT}" height="${DOT}" fill="${dotFill}"/>`;
}
function lockup(groundFill, mFill, dotFill, letterFill, squareFill) {
  return `<svg ${svgHead} viewBox="0 0 728 96" width="728" height="96">
  <g transform="scale(0.96)">${signetInner(groundFill, mFill, dotFill)}</g>
  <g transform="translate(${wTx.toFixed(4)},${wBase}) scale(${w.toFixed(6)})">
    <path d="${LETTERS}" fill="${letterFill}"/><rect x="${SQ.x}" y="${SQ.y}" width="${SQ.s}" height="${SQ.s}" fill="${squareFill}"/>
  </g>
</svg>
`;
}
function lockupMono() {
  return `<svg ${svgHead} viewBox="0 0 728 96" width="728" height="96">
  <g transform="scale(0.96)"><path fill="currentColor" fill-rule="evenodd" d="${tilePath} ${bakedM} ${dotPath}"/></g>
  <g transform="translate(${wTx.toFixed(4)},${wBase}) scale(${w.toFixed(6)})" fill="currentColor">
    <path d="${LETTERS}"/><rect x="${SQ.x}" y="${SQ.y}" width="${SQ.s}" height="${SQ.s}"/>
  </g>
</svg>
`;
}

// ---------- Schreiben ----------
const dateien = {
  // A — Wortmarke
  'img/logo.svg': wortmarke(INK, SIGNAL),            // Header (Papier): Tinte-Buchstaben + Orange-Punkt
  'img/logo-invers.svg': wortmarke(PAPER, SIGNAL),   // Footer (Tinte): Papier-Buchstaben + Orange-Punkt
  'img/logo-mono.svg': wortmarke('currentColor', 'currentColor'), // einfarbig, currentColor
  // C — Signet
  'img/zeichen.svg': signet(INK, PAPER, SIGNAL),     // dunkle Kachel + helles M + Orange-Punkt
  'img/zeichen-invers.svg': signet(PAPER, INK, SIGNAL), // helle Kachel (auf Tinte-Grund)
  'img/zeichen-mono.svg': signetMono(),              // einfarbiger Stempel, currentColor
  // Optional — Lockup
  'img/logo-lockup.svg': lockup(INK, PAPER, SIGNAL, INK, SIGNAL),
  'img/logo-lockup-invers.svg': lockup(PAPER, INK, SIGNAL, PAPER, SIGNAL),
  'img/logo-lockup-mono.svg': lockupMono(),
};
for (const [rel, inhalt] of Object.entries(dateien)) writeFileSync(`${PROJEKT}/${rel}`, inhalt);

// Signet-Quelle fuer die Favicon-PNGs (Look wie im Sheet: dunkle Kachel + M + Orange-Punkt)
writeFileSync(`${PROJEKT}/_logo/_favicon-src.svg`, signet(INK, PAPER, SIGNAL));

console.log('SVGs geschrieben:');
Object.keys(dateien).forEach(k => console.log('  ' + k));
console.log('Favicon-Quelle: _logo/_favicon-src.svg');
console.log('Signet-Masse: M scale=' + S.toFixed(4) + ' tx=' + mTx.toFixed(2) + ' | Punkt x=' + dotX.toFixed(2) + ' y=' + dotY.toFixed(2));
