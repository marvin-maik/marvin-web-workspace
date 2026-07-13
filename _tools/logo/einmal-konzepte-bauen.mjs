// Einmal-Skript: baut die drei ROUTENWERK-Logo-Konzepte + Konzept-Sheet (HTML).
// Alle Logo-Formen sind reine Pfade (schriftunabhaengig); nur Beschriftungen nutzen Webfonts.
import { readFileSync, writeFileSync } from 'node:fs';

const SCRATCH = '/private/tmp/claude-501/-Users-marvinmuller-Documents/673cb9bd-813a-476b-8519-65adf963fe5e/scratchpad';
const PROJEKT = '/Users/marvinmuller/Documents/03 Arbeit & Projekte/MARVIN.WEB/projekte/routenwerk';
const g = JSON.parse(readFileSync(`${SCRATCH}/glyphen.json`, 'utf8'));

const INK = '#16130E', BG = '#FAF9F5', SIGNAL = '#C2331F', FLAP = '#211C15', SOLARI = '#E8B84B';

// ---------- Konzept A: Split-Flap-Monogramm (viewBox 0 0 96 96) ----------
function flapMonogramm(rFarbe) {
  const r = g.r_solo.zeichen[0];
  const [x1, y1, x2, y2] = r.bbox;                 // bei size 100: 5.4,-67 .. 64.2,0
  const s = 52 / (y2 - y1);                        // R auf 52 Einheiten Kapitalhoehe
  const tx = 48 - ((x1 + x2) / 2) * s;
  const ty = 48 - ((y1 + y2) / 2) * s;
  return `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="4" width="88" height="88" rx="10" fill="${FLAP}"/>
  <g transform="translate(${tx.toFixed(2)},${ty.toFixed(2)}) scale(${s.toFixed(4)})"><path d="${r.d}" fill="${rFarbe}"/></g>
  <line x1="10" y1="48" x2="86" y2="48" stroke="${BG}" stroke-opacity=".28" stroke-width="2.5"/>
</svg>`;
}

// ---------- Konzept B: Grenzstempel-Roundel (viewBox 0 0 96 96) ----------
function stempelRoundel() {
  const breite = g.rw.gesamtBreite;                 // 166.9 bei size 100
  const s = 48 / breite;                            // RW auf 48 Einheiten Breite
  const pfade = g.rw.zeichen.map(z => `<path d="${z.d}"/>`).join('');
  const tx = 48 - (breite / 2) * s;
  const ty = 58;                                    // Baseline der RW-Zeile
  return `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
  <circle cx="48" cy="48" r="44" fill="none" stroke="${INK}" stroke-width="3.5"/>
  <circle cx="48" cy="48" r="36.5" fill="none" stroke="${INK}" stroke-width="1"/>
  <circle cx="48" cy="24.5" r="4.5" fill="${SIGNAL}"/>
  <g transform="translate(${tx.toFixed(2)},${ty}) scale(${s.toFixed(4)})" fill="${INK}">${pfade}</g>
  <path d="M31 68 Q48 75 65 68" fill="none" stroke="${INK}" stroke-width="2.2" stroke-dasharray="3 4.5"/>
</svg>`;
}

// ---------- Konzept C: Wortmarke mit Zielmarken-O (viewBox knapp um die Marke) ----------
function zielmarkenWortmarke(hell) {
  const grund = hell ? BG : INK;
  const zs = g.wortmarke.zeichen;
  const o = zs[1];
  const oCx = (o.bbox[0] + o.bbox[2]) / 2;          // 114.7
  const oCy = (o.bbox[1] + o.bbox[3]) / 2;          // ~ -33.6
  const oR = (o.bbox[2] - o.bbox[0]) / 2 + 1;      // optischer Ueberhang +1
  const tipY = 20;                                  // Spitze unter der Baseline (Descender-Job)
  const baseY = oCy + oR * 0.5;
  const baseHalb = oR * 0.82;
  const routenPfade = [0, 2, 3, 4, 5].map(i => `<path d="${zs[i].d}"/>`).join('');
  const werkPfade = [6, 7, 8, 9].map(i => `<path d="${zs[i].d}"/>`).join('');
  return `<svg viewBox="-8 -80 800 112" xmlns="http://www.w3.org/2000/svg">
  <g fill="${grund}">${routenPfade}</g>
  <g fill="${SIGNAL}">
    <circle cx="${oCx.toFixed(1)}" cy="${oCy.toFixed(1)}" r="${oR.toFixed(1)}"/>
    <path d="M${oCx.toFixed(1)} ${tipY} ${(oCx - baseHalb).toFixed(1)} ${baseY.toFixed(1)}h${(baseHalb * 2).toFixed(1)}z"/>
    ${werkPfade}
  </g>
</svg>`;
}

// ---------- Bestand: Route + Pin (Referenz) ----------
const bestand = readFileSync(`${PROJEKT}/handoff/routenwerk-bildmarke.svg`, 'utf8')
  .replace('<svg ', '<svg width="100%" height="100%" ');

// ---------- Fonts (Data-URIs) aus den Guidelines wiederverwenden ----------
const gl = readFileSync(`${PROJEKT}/handoff/brand-guidelines.html`, 'utf8');
const fontZeilen = gl.split('\n').filter(z => z.startsWith('@font-face') &&
  (z.includes('cabinet-grotesk') || z.includes("weight:400") || z.includes("weight:700"))).join('\n');
// obige Heuristik greift nicht auf Data-URIs — stattdessen alle @font-face-Zeilen nehmen:
const alleFonts = gl.split('\n').filter(z => z.startsWith('@font-face')).join('\n');

function karte(titel, herleitung, svgHell, svgDunkel, statusZeile) {
  const groessen = [64, 32, 16].map(px =>
    `<span class="probe" style="width:${px}px;height:${px}px" title="${px}px">${svgHell}</span><i>${px}</i>`).join('');
  return `<section class="karte">
  <h2>${titel}</h2>
  <p class="herleitung">${herleitung}</p>
  <div class="reihe">
    <div class="feld hell">${svgHell}</div>
    <div class="feld dunkel">${svgDunkel}</div>
  </div>
  <div class="groessen">${groessen}</div>
  <p class="status">${statusZeile}</p>
</section>`;
}

const html = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ROUTENWERK · Logo-Konzepte</title>
<style>
${alleFonts}
:root{--ink:${INK};--bg:${BG};--signal:${SIGNAL};--muted:#6F6A60;--line:#E2DFD7}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'General Sans',sans-serif;background:var(--bg);color:var(--ink);padding:48px 24px;font-size:16px;line-height:1.5}
main{max-width:1060px;margin:0 auto}
h1{font-family:'Cabinet Grotesk',sans-serif;font-weight:800;font-size:clamp(30px,5vw,54px);letter-spacing:-.015em}
.unter{font-family:'B612 Mono',monospace;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);border-top:1px solid var(--line);padding-top:10px;margin:6px 0 40px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px}
.karte{border:1px solid var(--line);padding:26px;margin-bottom:34px;background:#fff8}
.karte h2{font-family:'Cabinet Grotesk',sans-serif;font-weight:700;font-size:24px;margin-bottom:4px}
.herleitung{max-width:640px;color:var(--ink)}
.reihe{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:18px 0}
.feld{display:flex;align-items:center;justify-content:center;min-height:190px;padding:26px;border:1px solid var(--line)}
.feld svg{max-width:min(420px,100%);max-height:150px}
.feld.hell{background:var(--bg)}
.feld.dunkel{background:var(--ink)}
.feld.dunkel svg [fill="${INK}"]{fill:var(--bg)}
.feld.dunkel svg [stroke="${INK}"]{stroke:var(--bg)}
.groessen{display:flex;align-items:flex-end;gap:6px;padding:14px;border:1px solid var(--line);background:var(--bg)}
.groessen .probe{display:inline-flex}
.groessen .probe svg{width:100%;height:100%}
.groessen i{font-family:'B612 Mono',monospace;font-size:10px;font-style:normal;color:var(--muted);margin-right:14px}
.status{font-family:'B612 Mono',monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-top:10px}
@media(max-width:700px){.reihe{grid-template-columns:1fr}}
</style>
</head>
<body>
<main>
<h1>Logo-Konzepte <span style="color:var(--signal)">ROUTENWERK</span></h1>
<p class="unter"><span>3 Alternativen + Bestand · alle Formen als Pfade</span><span>logo-designer · 07/2026</span></p>

${karte('A · Split-Flap-Monogramm',
  'Die Abflugtafel ist DAS Signature-Element der Website. Das Monogramm ist eine einzelne Flap-Kachel: dunkle Kachel, R, horizontale Klapp-Fuge. Funktioniert als App-Icon/Favicon ohne jede Reduktion.',
  flapMonogramm(BG), flapMonogramm(SOLARI),
  'Variante dunkel: R in Solari-Gelb (Tafel-Logik). 16px: Fuge + R bleiben lesbar.')}

${karte('B · Grenzstempel-Roundel',
  'Die Boarding-Pass- und Stempel-Welt als Emblem: Doppelring wie ein Grenzstempel, RW-Monogramm, roter Zielpunkt oben, gestrichelte Route unten. Wirkt offiziell und sammelbar (Sticker, Siegel, Stempel).',
  stempelRoundel(), stempelRoundel(),
  'Ab 32px stark; bei 16px Reduktionsstufe noetig (nur Ring + Zielpunkt). Einfarbig problemlos.')}

${karte('C · Wortmarke mit Zielmarken-O',
  'Kein separates Zeichen: Die Marke steckt im Namen. Das O von ROUTEN ist die rote Zielmarke mit Pin-Spitze, WERK bleibt Signal-Rot. Staerkster Wiedererkennungswert in Textumgebungen (Briefkopf, Rechnung, Social-Handle).',
  zielmarkenWortmarke(false), zielmarkenWortmarke(true),
  'Braucht Breite; als Favicon nur das Zielmarken-O verwenden. Pfad-Datei, kein Font noetig.')}

${karte('Bestand · Route + Pin (11.7. / heute)',
  'Zum Vergleich: die aktuelle Bildmarke aus dem CD-Handoff. Startpunkt, gestrichelte Route, Zielmarke.',
  bestand, bestand,
  'Referenz. Clear-Space-System dazu steht im CD-Handoff.')}

</main>
</body>
</html>`;

writeFileSync(`${PROJEKT}/handoff/logo-konzepte.html`, html);
console.log('geschrieben:', `${PROJEKT}/handoff/logo-konzepte.html`, `(${(html.length / 1024).toFixed(0)} KB)`);

// Einzel-SVGs fuer den 16px-Raster-Check
writeFileSync(`${SCRATCH}/konzept-a.svg`, flapMonogramm(BG));
writeFileSync(`${SCRATCH}/konzept-b.svg`, stempelRoundel());
writeFileSync(`${SCRATCH}/konzept-c.svg`, zielmarkenWortmarke(false));
console.log('einzel-svgs im scratchpad');
