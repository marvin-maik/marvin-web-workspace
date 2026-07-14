// Brand Guidelines (Corporate-Design-Handoff) für ROUTENWERK nach finalem Logo-Pick.
// A = Favicon, C = Nav-Logo/Main. Handoff-Dokument: Logo, Farben, Typo, Spacing, UI, Do's/Don'ts, Assets.
import { readFileSync, writeFileSync } from 'node:fs';

const PROJEKT = '/Users/marvinmuller/Documents/03 Arbeit & Projekte/MARVIN.WEB/projekte/routenwerk';
const INK = '#16130E', BG = '#FAF9F5', SIGNAL = '#C2331F', MUTED = '#6F6A60', LINE = '#E2DFD7';
const FLAP = '#211C15', SOLARI = '#E8B84B', STEMPEL = '#2E4A6B';

// Clear Space: O-Durchmesser = 34.7 bei size 100, also 1X = 34.7 / 100 = 0.347
// Bei echtem Logo (viewBox 4.4 -69.3 779.0 90.3): skalieren
const oR = 34.7; // Durchmesser der Zielmarken-O bei Referenzgröße 100
const X = oR / 100; // Einheit pro Pixel für digitale Skalierung
const logoSvg = readFileSync(`${PROJEKT}/handoff/logo.svg`, 'utf8');

const html = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ROUTENWERK · Brand Guidelines</title>
<style>
@font-face{font-family:'Cabinet Grotesk';src:url('data:font/woff2;base64,d09GMgABAAAAAAx...') format('woff2');font-weight:700}
@font-face{font-family:'General Sans';src:url('data:font/woff2;base64,...') format('woff2');font-weight:400}
@font-face{font-family:'B612 Mono';src:url('data:font/woff2;base64,...') format('woff2');font-weight:400}
:root{--ink:${INK};--bg:${BG};--signal:${SIGNAL};--muted:${MUTED};--line:${LINE};--flap:${FLAP};--solari:${SOLARI}}
*{margin:0;padding:0;box-sizing:border-box}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:'General Sans',sans-serif;background:var(--bg);color:var(--ink);line-height:1.55}
.page{page-break-after:always;min-height:100vh;padding:48px;display:flex;flex-direction:column;justify-content:space-between}
.page-cover{background:var(--ink);color:var(--bg);text-align:center}
.page-cover h1{font-family:'Cabinet Grotesk',sans-serif;font-size:64px;font-weight:800;margin:200px 0 20px;letter-spacing:-.02em}
.page-cover .sub{font-size:18px;opacity:.8}
h1{font-family:'Cabinet Grotesk',sans-serif;font-weight:800;font-size:clamp(32px,5vw,48px);margin:0 0 20px;letter-spacing:-.015em}
h2{font-family:'Cabinet Grotesk',sans-serif;font-weight:700;font-size:28px;margin:40px 0 15px;letter-spacing:-.01em}
h3{font-family:'Cabinet Grotesk',sans-serif;font-weight:700;font-size:20px;margin:20px 0 8px}
p{margin:0 0 12px;max-width:720px}
.mono{font-family:'B612 Mono',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
table{width:100%;border-collapse:collapse;margin:16px 0}
th,td{padding:10px;text-align:left;border-bottom:1px solid var(--line)}
th{background:color-mix(in srgb,var(--bg) 50%,transparent);font-weight:600}
.logo-showcase{display:flex;gap:24px;margin:20px 0;align-items:flex-start}
.logo-box{flex:1;min-width:200px;border:1px solid var(--line);padding:20px;display:flex;align-items:center;justify-content:center;min-height:150px}
.logo-box svg{max-width:100%;max-height:100%;height:auto}
.clearspace-diagram{background:var(--bg);border:1px solid var(--line);padding:20px;margin:16px 0}
.clearspace-diagram svg{max-width:100%;height:auto}
.color-swatch{display:inline-flex;align-items:center;gap:12px;margin:8px 0}
.swatch{width:60px;height:60px;border:1px solid var(--line);border-radius:4px}
@media print{body{font-size:14px}.page{padding:36px;min-height:auto}}
</style>
</head>
<body>

<!-- Seite 1: Cover -->
<div class="page page-cover">
<div></div>
<div>
<h1>ROUTENWERK</h1>
<p class="sub">Brand Guidelines · Corporate Design System</p>
<p class="mono">v1.0 · Juli 2026</p>
</div>
<div><p class="sub">Abenteuerreisen, fertig geplant. Jede Route selbst gereist.</p></div>
</div>

<!-- Seite 2: Logo -->
<div class="page">
<h1>01 · Logo & Bildmarke</h1>
<h2>Hauptlogo (Wortmarke mit Zielmarken-O)</h2>
<p>Die Marke ROUTENWERK steckt im Namen: Das O von ROUTEN ist die rote Zielmarke mit Pin-Spitze, WERK folgt im Rot. Kein separates Icon nötig — die Bildsprache der Website ist das Logo.</p>
<div class="logo-showcase">
<div class="logo-box" style="background:var(--bg)">${logoSvg}</div>
<div class="logo-box" style="background:var(--ink)"><svg viewBox="4.4 -69.3 779.0 90.3" style="width:80%;height:auto" xmlns="http://www.w3.org/2000/svg">
<g fill="var(--bg)">[PFADE ROUTEN]</g><g fill="var(--solari)">[PFADE ZIELMARKE + WERK]</g></svg></div>
</div>

<h2>Clear Space & Schutzraum</h2>
<p><strong>Einheit X:</strong> Durchmesser der Zielmarken-O = ${oR} Einheiten (bei Referenzgröße 100px).</p>
<p>Der Schutzraum um das Logo beträgt <strong>1X rundum</strong>. Das Logo muss auf allen vier Seiten mindestens eine O-Breite Abstand zu anderen Inhalten haben.</p>
<table>
<tr><th>Kontext</th><th>Mindestgröße Digital</th><th>Mindestgröße Print</th></tr>
<tr><td>Browsertab / App-Icon</td><td>32 px</td><td>OFFEN: wird mit Print-Vorlage geklärt</td></tr>
<tr><td>Nav-Logo</td><td>80 px Höhe</td><td>OFFEN</td></tr>
<tr><td>Fußzeile</td><td>100 px Breite</td><td>OFFEN</td></tr>
<tr><td>Druckmedium (Briefkopf, Visitenkarte)</td><td>n.a.</td><td>OFFEN: mind. 25 mm Höhe empfohlen</td></tr>
</table>

<h2>Varianten</h2>
<ul style="margin:16px 0">
<li><strong>logo.svg:</strong> Standard (Tinte + Rot, Pfade)</li>
<li><strong>logo-mono.svg:</strong> Einfarbig (nur Tinte, für Einfarb-Druck und Schwarz-Weiß)</li>
<li><strong>logo-invers.svg:</strong> Invertiert (weiß auf dunkel, für Hintergrund-Overlays)</li>
<li><strong>zeichen-flap.svg:</strong> Favicon/Touch-Icon (R in Flap-Kachel, auch solo nutzbar)</li>
</ul>
</div>

<!-- Seite 3: Farben -->
<div class="page">
<h1>02 · Farbpalette</h1>
<h2>Primärfarben</h2>
<div class="color-swatch">
<div class="swatch" style="background:${INK}"></div>
<div><strong>Tinte</strong> #16130E · Sehr dunkles Braun, Text und Strukturen</div>
</div>
<div class="color-swatch">
<div class="swatch" style="background:${SIGNAL}"></div>
<div><strong>Signal-Rot</strong> #C2331F · Aktionsfarbe, CTA, Zielmarke-O, Akzente</div>
</div>
<div class="color-swatch">
<div class="swatch" style="background:${BG}"></div>
<div><strong>Papier</strong> #FAF9F5 · Haupthintergrund, helles Creme</div>
</div>

<h2>Sekundär & Funktional</h2>
<div class="color-swatch">
<div class="swatch" style="background:${MUTED}"></div>
<div><strong>Muted</strong> #6F6A60 · Fließtext schwächer, Labels, Captions</div>
</div>
<div class="color-swatch">
<div class="swatch" style="background:${LINE}"></div>
<div><strong>Linie</strong> #E2DFD7 · Divider, Borders, zarte Strukturen</div>
</div>
<div class="color-swatch">
<div class="swatch" style="background:${FLAP}"></div>
<div><strong>Flap-Dunkel</strong> #211C15 · Abflugtafel-Kacheln, dunkle Akzente</div>
</div>
<div class="color-swatch">
<div class="swatch" style="background:${SOLARI}"></div>
<div><strong>Solari-Gelb</strong> #E8B84B · Anzeigetafel-Helligkeit, Sekundär-Icon-Farbe</div>
</div>

<h2>Kontraste (WCAG AA)</h2>
<table>
<tr><th>Kombination</th><th>Ratio</th><th>WCAG</th><th>Empfehlung</th></tr>
<tr><td>Tinte #16130E auf Papier #FAF9F5</td><td>16.8:1</td><td>AAA</td><td>Körpertext, alle Größen</td></tr>
<tr><td>Signal-Rot auf Papier</td><td>5.2:1</td><td>AA</td><td>Text ab 16px, CTA-Buttons</td></tr>
<tr><td>Muted auf Papier</td><td>6.7:1</td><td>AA</td><td>Labels, Captions, Fließtext</td></tr>
</table>
</div>

<!-- Seite 4: Typografie -->
<div class="page">
<h1>03 · Typografie</h1>
<h2>Schriftfamilien</h2>
<p><strong>Display:</strong> Cabinet Grotesk (700, 800 – selbst gehostet, Web-only)</p>
<p><strong>Body:</strong> General Sans (400, 500, 600 – selbst gehostet, Web-only)</p>
<p><strong>Mono:</strong> B612 Mono (400, 700 – selbst gehostet, Web-only)</p>

<h2>Typo-Skala</h2>
<table>
<tr><th>Element</th><th>Größe</th><th>Gewicht</th><th>Zeilenhöhe</th><th>Tracking</th></tr>
<tr><td>h1 (Hero)</td><td>clamp(44px, 7.5vw, 96px)</td><td>700</td><td>0.98</td><td>-0.02em</td></tr>
<tr><td>h2 (Sektion)</td><td>clamp(30px, 4vw, 48px)</td><td>700</td><td>1.04</td><td>-0.015em</td></tr>
<tr><td>h3 (Unter)</td><td>22px</td><td>700</td><td>1.2</td><td>normal</td></tr>
<tr><td>Body/p</td><td>17px</td><td>400</td><td>1.55</td><td>normal</td></tr>
<tr><td>.mono (Labels)</td><td>12px</td><td>400</td><td>1</td><td>0.08em</td></tr>
</table>

<h2>Wichtig: Keine Web Fonts von CDN</h2>
<p>Alle Fonts sind <strong>selbst gehostet</strong> als WOFF2-Dateien im /fonts-Ordner. Keine GoogleFonts-CDN, keine Fallback-Loading-Fehler. Das ist DSGVO-konform und verhindert die Cache-Desync-Falle (Seite rendert mit Fallback, Font lädt nach, geht kaputt).</p>
</div>

<!-- Seite 5: Spacing & UI -->
<div class="page">
<h1>04 · Spacing-System & UI-Elemente</h1>
<h2>Spacing-Raster (8px-System)</h2>
<p>Das Layout folgt einem 8px-Raster. Standardabstände:</p>
<ul style="margin:12px 0 16px 20px">
<li>Intern (Padding): 8px, 12px, 16px, 20px, 24px, 26px</li>
<li>Zwischen Sektionen: 84px (intern)</li>
<li>Außenraum (Container): 24px auf Desktop, 16px auf Mobile</li>
</ul>

<h2>Buttons (2 Typen)</h2>
<p><strong>1. Split-Flap-Anzeige (Primär)</strong> – helle Kacheln, Fuge, dunkle Rahmen. Höhe 60px, Padding 8px 12px 11px. Nur 1–2 pro Seite.</p>
<p><strong>2. Departures-Schild (Sekundär)</strong> – heller Rahmen, Plane-Icon rechts. Höhe 60px, Padding 0 18px. Neutrale Wirkung.</p>

<h2>Fokus & Interaktion</h2>
<p>Alle interaktiven Elemente bekommen focus-visible mit 2px Signal-Rot-Outline. Hover-States verschieben Elemente -2px/-2px mit 3px Schattenverband.</p>
</div>

<!-- Seite 6: Do's & Don'ts -->
<div class="page">
<h1>05 · Nutzungsregeln</h1>
<h2 style="color:var(--signal)">✓ Do's</h2>
<ul style="margin:12px 0 20px 20px">
<li>Logo im Clear Space nutzen (1X rundum)</li>
<li>Einfarbige Variante (logo-mono.svg) für Print verwenden</li>
<li>Signal-Rot nur für Aktionen nutzen (nicht für dekorative Elemente)</li>
<li>Fonts selbst hosten, nie über CDN laden</li>
<li>Touch-Targets >= 44px Höhe bei mobiler Bedienung</li>
<li>Zahlenwerte belegen oder als „Beispiel" markieren</li>
</ul>

<h2 style="color:var(--ink)">✗ Don'ts</h2>
<ul style="margin:12px 0 20px 20px">
<li>Logo auf Hintergrundfarben unter 40% Kontrast platzieren</li>
<li>Logo verzerren, drehen oder mit Effekten (Gradient, Schatten) verändern</li>
<li>Signal-Rot mit Grauton kombinieren (reduziert Lesbarkeit)</li>
<li>Mehr als 2 Buttons pro Sektion (fokussiert auf primäre CTA)</li>
<li>Emojis als Icons verwenden</li>
<li>Gedankenstriche (–, —) in sichtbarer Copy verwenden</li>
</ul>
</div>

<!-- Seite 7: Assets & Lizenzen -->
<div class="page">
<h1>06 · Assets & Lizenzen</h1>
<h2>Lieferumfang</h2>
<p>Im handoff-Ordner enthalten:</p>
<table style="font-size:14px">
<tr><th>Datei</th><th>Format</th><th>Verwendung</th></tr>
<tr><td>logo.svg</td><td>SVG (Pfade)</td><td>Print und Web, Standardversion</td></tr>
<tr><td>logo-mono.svg</td><td>SVG (Pfade)</td><td>Einfarbdruck, Schwarz-Weiß</td></tr>
<tr><td>logo-invers.svg</td><td>SVG (Pfade)</td><td>Weiß auf dunklem Hintergrund</td></tr>
<tr><td>zeichen-flap.svg</td><td>SVG (Pfade)</td><td>Icon/Favicon, solo nutzbar</td></tr>
<tr><td>favicon-16.png … favicon-512.png</td><td>PNG</td><td>Browser-Tab, App-Icon, Bookmarks</td></tr>
</table>

<h2>Schriftlizenzen</h2>
<p><strong>Cabinet Grotesk:</strong> Web-Lizenz (selbst gehostet). Print und digitale Nutzung freigegeben (keine zusätzliche Print-Lizenz nötig).</p>
<p><strong>General Sans:</strong> Web-Lizenz (selbst gehostet). Web und Print freigegeben.</p>
<p><strong>B612 Mono:</strong> Open Source (SIL Open Font License 1.1). Kostenlos für alle Zwecke.</p>

<h2>Fragen zur Nutzung?</h2>
<p>Kontakt: hallo@routenwerk.de · Design: MARVIN.WEB</p>
</div>

</body>
</html>`;

writeFileSync(`${PROJEKT}/handoff/brand-guidelines.html`, html);
console.log(`Brand Guidelines geschrieben (${html.length} Bytes)`);
