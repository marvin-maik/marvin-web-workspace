// Baut die 4 MARVIN.WEB-Logo-Konzepte (reine Pfade) + selbsttragendes Konzept-Sheet.
// Alle Logo-Formen sind Pfade/Primitive (schriftunabhaengig); nur die Sheet-UI nutzt Clash als Data-URI.
import { readFileSync, writeFileSync } from 'node:fs';

const SCRATCH = '/private/tmp/claude-501/-Users-marvinmuller-Documents/bf3057a7-1b0b-42eb-94aa-d19dd828eb1d/scratchpad';
const PROJEKT = '/Users/marvinmuller/Documents/03 Arbeit & Projekte/MARVIN.WEB/projekte/marvin-web';
const g = JSON.parse(readFileSync(`${PROJEKT}/_logo/glyphen.json`, 'utf8'));

const INK = '#161412', PAPER = '#f5f1e8', SIGNAL = '#e8440a';
const CAP = 67; // Versalhoehe Clash Display bei size 100

// ---- Paletten je Kontext ----
const P = {
  hell:   { letter: INK,   square: SIGNAL, ground: PAPER, frame: INK,   knock: PAPER },
  dunkel: { letter: PAPER, square: SIGNAL, ground: INK,   frame: PAPER, knock: INK   },
  mono:   { letter: INK,   square: INK,    ground: PAPER, frame: INK,   knock: PAPER },
};
// Signet ist eine KACHEL und invertiert entgegengesetzt zum Seitengrund (wie das bestehende
// Favicon: dunkle Kachel + helles M). Darum eigene Palette, nicht die Wortmarken-Palette P.
const SIG = {
  hell:   { ground: INK,   letter: PAPER, square: SIGNAL, knock: PAPER }, // dunkle Kachel auf Papier
  dunkel: { ground: PAPER, letter: INK,   square: SIGNAL, knock: INK   }, // helle Kachel auf Tinte
  mono:   { ground: INK,   letter: PAPER, square: PAPER,  knock: PAPER }, // 1 Farbe: M+Punkt ausgespart
};

// Zentriert eine Textzeile (Array von Glyph-d) auf cx, gegeben Versalhoehe + Baseline.
function place(lineData, cx, capH, baselineY) {
  const zs = lineData.zeichen;
  const s = capH / CAP;
  const inkL = zs[0].bbox[0];
  const inkR = zs[zs.length - 1].bbox[2];
  const inkW = (inkR - inkL) * s;
  const tx = (cx - inkW / 2) - inkL * s;
  return { s, tx, ty: baselineY, transform: `translate(${tx.toFixed(3)},${baselineY.toFixed(3)}) scale(${s.toFixed(5)})`, d: zs.map(z => z.d).join(' ') };
}

// ---- Wortmarke-A Innenmarkup (Buchstaben + Quadrat statt Punkt), lokale Koordinaten Baseline y=0 ----
// Quadrat sitzt im Punkt-Slot (417.1..441.5), 23x23 auf der Baseline.
const SQ = { x: 417.8, y: -23, s: 23 };
function wortmarkeAInner(pal) {
  const zs = g.wortmarke.zeichen;
  const letters = [0, 1, 2, 3, 4, 5, 7, 8, 9].map(i => zs[i].d).join(' ');
  return `<path d="${letters}" fill="${pal.letter}"/>` +
         `<rect x="${SQ.x}" y="${SQ.y}" width="${SQ.s}" height="${SQ.s}" fill="${pal.square}"/>`;
}

// ---- Konzept A: Wortmarke solo ----
function konzeptA(pal) {
  return `<svg viewBox="0 -67 689 67" xmlns="http://www.w3.org/2000/svg">${wortmarkeAInner(pal)}</svg>`;
}

// ---- Konzept B: Wortmarke auf Massband-Baseline ----
function konzeptB(pal) {
  const zs = g.wortmarke.zeichen;
  const letters = zs.map(z => z.d).join(' '); // inkl. normalem Punkt
  // Massband: durchgehende Basislinie + Teilstriche, jeder 4. laenger (Vermessung).
  const baseTop = 12, baseH = 2, x0 = 3, x1 = 686;
  const step = 30, tw = 3.5;
  let ticks = '';
  let n = 0;
  for (let x = 4; x <= x1 - tw; x += step, n++) {
    const h = (n % 4 === 0) ? 12 : 8;
    ticks += `<rect x="${x.toFixed(1)}" y="${(baseTop - h).toFixed(1)}" width="${tw}" height="${h}"/>`;
  }
  return `<svg viewBox="0 -67 689 81" xmlns="http://www.w3.org/2000/svg">` +
    `<path d="${letters}" fill="${pal.letter}"/>` +
    `<g fill="${pal.square}"><rect x="${x0}" y="${baseTop}" width="${x1 - x0}" height="${baseH}"/>${ticks}</g>` +
    `</svg>`;
}

// ---- Konzept C: M.-Signet (Innenmarkup, canvas 100x100) ----
function signetInner(pal, { knockout = false } = {}) {
  const m = g.m_solo.zeichen[0];
  const s = 46 / CAP;                 // M-Versalhoehe 46
  const mInkW = (m.bbox[2] - m.bbox[0]) * s; // 89.2*s
  const dot = 15.6, gap = 5;
  const unitW = mInkW + gap + dot;
  const left = (100 - unitW) / 2;
  const tx = left - m.bbox[0] * s;
  const baseline = 73;
  const dotX = left + mInkW + gap;
  const mFill = knockout ? pal.knock : pal.letter;
  const dotFill = knockout ? pal.knock : pal.square;
  return `<rect x="0" y="0" width="100" height="100" fill="${pal.ground}"/>` +
    `<path d="${m.d}" fill="${mFill}" transform="translate(${tx.toFixed(3)},${baseline}) scale(${s.toFixed(5)})"/>` +
    `<rect x="${dotX.toFixed(2)}" y="${(baseline - dot).toFixed(2)}" width="${dot}" height="${dot}" fill="${dotFill}"/>`;
}
function konzeptCsignet(pal, opts) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${signetInner(pal, opts)}</svg>`;
}
// Lockup: Signet (SIG-Palette, Kachel) + Wortmarke-A rechts (P-Palette). System aus C + A.
function konzeptClockup(ctx) {
  const sigPal = SIG[ctx], wortPal = P[ctx];
  const knock = ctx === 'mono';
  const w = 60 / CAP;                 // Wortmarke-Versalhoehe 60
  const tx = 116 - 3 * w;             // Ink-Left (3) auf x=116 (Signet 96 + Gap 20)
  const ty = 78;
  return `<svg viewBox="0 0 728 96" xmlns="http://www.w3.org/2000/svg">` +
    `<g transform="scale(0.96)">${signetInner(sigPal, { knockout: knock })}</g>` +
    `<g transform="translate(${tx.toFixed(3)},${ty}) scale(${w.toFixed(5)})">${wortmarkeAInner(wortPal)}</g>` +
    `</svg>`;
}

// ---- Konzept D: Betriebs-Stempel (canvas 120x120) ----
function konzeptD(pal) {
  const marvin = place(g.marvin, 60, 13.5, 52);
  const web = place(g.web, 60, 13.5, 84);
  const sqS = 11, sqX = 60 - sqS / 2, sqY = 61.25 - sqS / 2;
  return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">` +
    `<rect x="5" y="5" width="110" height="110" fill="none" stroke="${pal.frame}" stroke-width="3"/>` +
    `<rect x="10.5" y="10.5" width="99" height="99" fill="none" stroke="${pal.frame}" stroke-width="1"/>` +
    `<path d="${marvin.d}" fill="${pal.letter}" transform="${marvin.transform}"/>` +
    `<rect x="${sqX}" y="${sqY.toFixed(2)}" width="${sqS}" height="${sqS}" fill="${pal.square}"/>` +
    `<path d="${web.d}" fill="${pal.letter}" transform="${web.transform}"/>` +
    `</svg>`;
}

// ---------- Einzel-SVGs fuer den Raster-Check ----------
writeFileSync(`${SCRATCH}/signet.svg`, konzeptCsignet(SIG.hell));
writeFileSync(`${SCRATCH}/signet-mono.svg`, konzeptCsignet(SIG.mono, { knockout: true }));
writeFileSync(`${SCRATCH}/A-header.svg`, konzeptA(P.hell));
writeFileSync(`${SCRATCH}/B-header.svg`, konzeptB(P.hell));
writeFileSync(`${SCRATCH}/C-lockup.svg`, konzeptClockup('hell'));
writeFileSync(`${SCRATCH}/D-stempel.svg`, konzeptD(P.hell));

// ---------- Font als Data-URI (nur Sheet-UI) ----------
const clash = readFileSync(`${PROJEKT}/fonts/clash-display-700.woff2`).toString('base64');
const clash6 = readFileSync(`${PROJEKT}/fonts/clash-display-600.woff2`).toString('base64');

// ---------- Sheet-Bausteine ----------
function faviconRow(sig) {
  return [64, 32, 16].map(px =>
    `<span class="fav" style="width:${px}px;height:${px}px">${sig}</span><i>${px}</i>`).join('');
}

function karte(id, titel, herleitung, header, footer, mono, sigHell, status) {
  return `<section class="karte">
  <div class="kopf"><span class="kz">${id}</span><h2>${titel}</h2></div>
  <p class="herleitung">${herleitung}</p>
  <div class="grid">
    <figure class="feld paper"><div class="art">${header}</div><figcaption>Header · Papier</figcaption></figure>
    <figure class="feld ink"><div class="art">${footer}</div><figcaption>Footer invers · Tinte</figcaption></figure>
    <figure class="feld paper"><div class="art">${mono}</div><figcaption>Einfarbig (stempelbar)</figcaption></figure>
    <figure class="feld paper fav-feld"><div class="favrow">${faviconRow(sigHell)}</div><figcaption>Favicon 64/32/16 · M.-Signet</figcaption></figure>
  </div>
  <p class="status">${status}</p>
</section>`;
}

const html = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MARVIN.WEB — Logo-Konzepte</title>
<style>
@font-face{font-family:'Clash Display';src:url(data:font/woff2;base64,${clash}) format('woff2');font-weight:700;font-display:swap}
@font-face{font-family:'Clash Display';src:url(data:font/woff2;base64,${clash6}) format('woff2');font-weight:600;font-display:swap}
:root{--ink:${INK};--paper:${PAPER};--paper-deep:#ece7da;--line:#d8d2c2;--signal:${SIGNAL};--signal-deep:#b53507;--muted:#6d675a;
--disp:'Clash Display',-apple-system,sans-serif;--mono:ui-monospace,'SF Mono',Menlo,Consolas,monospace}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:var(--disp);background:var(--paper);color:var(--ink);padding:56px 28px 80px;-webkit-font-smoothing:antialiased}
main{max-width:1120px;margin:0 auto}
h1{font-weight:700;font-size:clamp(34px,6vw,66px);letter-spacing:-.02em;text-transform:uppercase;line-height:.95}
h1 b{color:var(--signal)}
.rule{height:10px;border:none;max-width:520px;margin:22px 0 10px;
  background:repeating-linear-gradient(90deg,var(--signal) 0 2px,transparent 2px 24px) bottom/100% 8px no-repeat,
  linear-gradient(var(--signal),var(--signal)) bottom/100% 2px no-repeat}
.unter{font-family:var(--mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);
  display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:44px}
.intro{max-width:760px;font-family:var(--mono);font-size:12.5px;line-height:1.75;letter-spacing:.02em;color:var(--ink);
  border-left:2px solid var(--signal);padding:4px 0 4px 18px;margin-bottom:48px}
.karte{border:1.5px solid var(--ink);background:#fff;box-shadow:8px 8px 0 var(--paper-deep);padding:30px;margin-bottom:44px}
.kopf{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}
.kz{font-family:var(--mono);font-size:13px;letter-spacing:.14em;color:#fff;background:var(--signal-deep);padding:4px 9px}
.karte h2{font-weight:700;font-size:26px;letter-spacing:-.01em;text-transform:uppercase}
.herleitung{max-width:720px;font-size:16px;line-height:1.5;margin:12px 0 22px;color:#2a2620}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.feld{border:1px solid var(--line);display:flex;flex-direction:column}
.feld .art{flex:1;display:flex;align-items:center;justify-content:center;min-height:150px;padding:26px}
.feld.paper{background:var(--paper)}
.feld.ink{background:var(--ink)}
.feld .art svg{max-width:100%;max-height:120px;height:auto}
.feld figcaption{font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);
  border-top:1px solid var(--line);padding:8px 12px}
.feld.ink figcaption{color:#8A8476;border-top-color:#3A362F}
.fav-feld .favrow{display:flex;align-items:flex-end;gap:8px;justify-content:center;flex-wrap:wrap;padding:22px 26px;flex:1}
.fav{display:inline-flex;box-shadow:0 0 0 1px var(--line)}
.fav svg{width:100%;height:100%;display:block}
.favrow i{font-family:var(--mono);font-size:9.5px;font-style:normal;color:var(--muted);align-self:flex-end;margin:0 8px 0 -4px}
.status{font-family:var(--mono);font-size:11px;letter-spacing:.05em;line-height:1.7;color:var(--muted);
  margin-top:20px;border-top:1px dashed var(--line);padding-top:14px}
.status b{color:var(--signal-deep)}
@media(max-width:820px){.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<main>
<h1>Logo-Konzepte <b>·</b> Marvin.Web</h1>
<hr class="rule">
<p class="unter"><span>4 Richtungen · Wortmarke als Pfade · logo-designer</span><span>Stand 07/2026 · nur Konzept, nicht final</span></p>

<p class="intro">// Alle Wortmarken sind ECHTE PFADE aus Clash Display 700 (kein &lt;text&gt;, kein Font-Fallback).<br>
// Zwei Farben aus den Tokens: Tinte ${INK} · Papier ${PAPER} · Signal-Orange ${SIGNAL}. Keine Radien, keine Gradients, keine Schatten in der Marke.<br>
// Jede Richtung: Header auf Papier · Footer invers auf Tinte · einfarbig (Stempel-Test) · Favicon-Reduktion aufs M.-Signet.<br>
// DNA-Anker: der bestehende Orange-Punkt in Marvin.Web + das M.-Favicon (dunkles M, oranger Quadrat-Punkt).</p>

${karte('A', 'Wortmarke · Signal-Quadrat',
  'Der Eigenname IST die Marke (Solo-Studio, David-Airey-Prinzip). Der Punkt in Marvin.Web wird zum soliden orangenen GO-Quadrat — der vorhandene Signal-Punkt, aber eckig statt rund, weil in diesem CD nichts Radien hat.',
  konzeptA(P.hell), konzeptA(P.dunkel), konzeptA(P.mono), konzeptCsignet(SIG.hell),
  'Header: trägt bis in kleine Nav-Höhen, der Quadrat-Punkt bleibt lesbar. <b>16px:</b> Wortmarke reduziert aufs M.-Signet (rechte Zelle). Einfarbig voll intakt (Quadrat wird Tinte). Empfehlung fürs Header-Wortzeichen.')}

${karte('B', 'Wortmarke · Massband',
  'Zitiert die Signatur der Site — die Massband-Linie .rule unter jeder H1. Die Wortmarke sitzt auf einer orangenen Vermessungs-Skala: Betrieb, Präzision, editorial. Der Punkt bleibt regulär, das Orange lebt ganz in der Skala.',
  konzeptB(P.hell), konzeptB(P.dunkel), konzeptB(P.mono), konzeptCsignet(SIG.hell),
  'Header/Brief/Footer stark. <b>Nav-Höhe (~24px):</b> Teilstriche verschwimmen → Reduktionsstufe = durchgehende Orange-Basislinie ohne Striche. <b>16px:</b> M.-Signet. Einfarbig intakt (Skala wird Tinte).')}

${karte('C', 'Signet M. + Lockup',
  'Formalisiert die bestehende Favicon-DNA (dunkles M, oranger Quadrat-Punkt) zum echten Vektor-Signet. Als Lockup ergibt Signet + Wortmarke-A EIN System. Das einzige Zeichen, das bei 16px ohne jede Reduktion trägt.',
  konzeptClockup('hell'), konzeptClockup('dunkel'), konzeptCsignet(SIG.mono, { knockout: true }), konzeptCsignet(SIG.hell),
  'Header als Lockup, Favicon/Avatar als Signet solo. <b>16px:</b> trägt roh — bold M + Quadrat-Punkt. Einfarbig: M + Punkt als Aussparung im Tinte-Quadrat. Empfehlung fürs Favicon/App-Icon; paart mit A.')}

${karte('D', 'Betriebs-Stempel',
  'Die Auftragszettel-/Betriebs-Welt als eckiges Siegel (kein rundes Roundel — alles eckig). Doppelrahmen wie ein Werkstatt-Stempel, MARVIN über WEB, das Orange-Quadrat als Siegel-Punkt dazwischen.',
  konzeptD(P.hell), konzeptD(P.dunkel), konzeptD(P.mono), konzeptCsignet(SIG.hell),
  'Für Sticker, Avatar, Rechnungs-Stempel, Footer-Siegel. <b>Unter ~40px:</b> zwei Textzeilen brechen → Reduktion aufs M.-Signet. <b>16px:</b> M.-Signet. Einfarbig voll stempelbar (das ist der Zweck).')}

<section class="karte">
  <div class="kopf"><span class="kz">i</span><h2>Schutzraum &amp; Mindestgrößen</h2></div>
  <p class="herleitung">Clear-Space-Einheit = die Kantenlänge des Orange-Quadrats (der „GO-Block"). Rundum mindestens 1× diese Einheit freihalten; im Signet ist es der Quadrat-Punkt neben dem M. Mindesthöhe Wortmarke: ca. 18px (darunter Signet). Signet: ab 16px. Finale Auslieferung: SVG mit Pfaden, Mono-SVG, Favicon-Serie 16/32/180/512, og-Grundfläche 1200×630.</p>
</section>

</main>
</body>
</html>`;

writeFileSync(`${PROJEKT}/freigabe/logo-konzepte.html`, html);
console.log('Sheet geschrieben:', `${PROJEKT}/freigabe/logo-konzepte.html`, `(${(html.length / 1024).toFixed(0)} KB)`);
console.log('Raster-SVGs im Scratchpad: signet, A-header, B-header, C-lockup, D-stempel');
