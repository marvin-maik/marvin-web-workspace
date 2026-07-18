# Standing Orders: MARVIN.WEB Workspace

Gilt fuer jede Arbeit in diesem Ordner. Kein Opt-out.

Diese Datei ist die EINZIGE immer-geltende Norm plus die Landkarte, welche Detail-Quelle wann zu
lesen ist. Eine Regel steht an GENAU EINEM Ort: entweder hier (immer gueltig, kurz) oder in genau
einer Referenzdatei (Detail on demand). Findest du dieselbe Regel doppelt, ist das ein Bug — sag Bescheid.

## Prozess
- Neue Projekte laufen nach dem Playbook-Skill `neues-projekt` (Phasen + Freigaben).
- Status-Board `PROJEKTE.md` bei jedem Phasenwechsel aktualisieren.
- Git: Commit nach jedem Meilenstein (Phase fertig, Version gebaut). Deutsch, praegnant.
  Danach `git push` — Backup-Remote: github.com/marvin-maik/marvin-web-workspace (privat).
- Erst Struktur-/Token-Plan zeigen, dann Code. Bei Aenderungen gezielt editieren, nie komplett neu generieren.
- Die `product-marketing-context.md` des Projekts ist die Was-Quelle: immer zuerst lesen.

## Anti-Slop (die EINE Quelle, immer gueltig)
Kanonisch. hosting-referenz.md 9.5 und die Anti-Slop-Memory verweisen hierher, statt zu doppeln.
- Copy: KEINE Gedankenstriche. Keine Floskeln ("massgeschneidert", "nahtlos", "Ihr Partner fuer",
  "revolutionaer", "in der heutigen digitalen Welt"). Konkret schlaegt clever. Zahlen nur belegt.
- Design: keine Default-AI-Looks (Creme+Serif+Terracotta / Dark+Neon / Lila-Gradient+Glassmorphism).
  Palette/Typo aus der Welt der Zielgruppe herleiten. EIN Signature-Element pro Seite. Keine Emojis als Icons.
  Nummerierte Marker (01/02/03) nur bei echter Sequenz (Ablauf ja, Feature-Liste nein).
- Code: Vanilla CSS mit Token-Custom-Properties, kein Tailwind in Single-Files, semantisches HTML,
  eine h1/Seite, Fokus-Zustaende, prefers-reduced-motion. Fonts fuer Launch IMMER selbst hosten (DSGVO).
- Barrierefreiheit: Zielniveau WCAG 2.1 AA (BFSG-Pflicht bei Shop/Verkauf, sonst Verkaufsargument).
  Kontrast IMMER rechnen, nie schaetzen. AAA nur auf Wunsch.

## Quellen-Karte: was wann lesen (jede Regel hat genau ein Zuhause)
| Wenn du ... | lies + pflege NUR |
|---|---|
| Design/Copy an einem BESTAND-Projekt machst | `projekte/<name>/_design.md` (fehlt/aelter als styles.css -> Skill `design-md` erzeugen; nach jeder Design-Aenderung im SELBEN Commit mitziehen, styles.css bleibt Quelle der Wahrheit) |
| baust (jede Seite) | `_referenz/technik-patterns.md` (kampferprobte Loesungen + Botschutz-Code — nicht neu erfinden) |
| Pflichtseiten + Pflichtdateien pruefst (schon im BUILD, erneut vor Launch) | `_referenz/pflichtseiten-checkliste.md` (404, _headers, Favicon-Serie, OG-Bild, JSON-LD, danke.html, robots/sitemap/canonical, Verkauf/Widerruf/PAngV/BFSG, Monitoring) |
| Barrierefreiheit vor Launch abnimmst | `_referenz/barrierefreiheit-checkliste.md` |
| Dienste einbaust (Formspree/Cal/Maps/OG-Icon-Rezept/Analytics/UptimeRobot) | `_referenz/integrations.md` |
| deployst | `_referenz/deploy.md` (Staging-Kopie + Leak-Check, pro-Projekt-Befehle) |
| Copy-/Offer-Frameworks brauchst (Hormozi Value Equation / Sanwarwala CRO) | `_referenz/hosting-referenz.md` Kap. 9.3c |
| ein Highlight-Element ueberlegst | `_fundus/highlight-elemente.md` — 1-2 passende anbieten (Streusel, nicht Teig); Devise: lieber bewusst dagegen als aus Unwissenheit; kein Muster als "zu fragil" verwerfen |
| Markt/Strategie/Stacks/Recht-Hintergrund brauchst | `_referenz/hosting-referenz.md` (ganzes Dokument, aber nur dafuer) |

## Build-Konventionen (kurz, nicht dupliziert)
- Single-File-Mockups (`index.html`). HTML-Seiten flach im Projekt-Root lassen (Ordner = URL-Pfad bei
  CF Pages -> NIE in Unterordner, sonst brechen Links/canonical/og:url).
- Assets in `img/`/`fonts/`/`downloads/`. Generator-/Quellvorlagen in `_src/`. `_`-Praefix = INTERN, nie deployed.
- Hosting: GitHub (`marvin-maik/<repo>`) + Cloudflare Pages.
- BOTSCHUTZ ist Pflicht auf JEDEM Formular (kein Opt-out): Honeypot + Zeit-Falle, unsichtbar, kein
  Fremddienst, kein Consent. NIEMALS Google reCAPTCHA (US-Transfer, Consent-pflichtig, Abmahn-Risiko).
  Wenn echtes CAPTCHA noetig: Cloudflare Turnstile + serverseitige Pruefung per Pages Function.
  Muster + Code: `_referenz/technik-patterns.md`.

## Agenten (delegieren statt selbst Kontext verbrennen)
- Recherche zu Design/Templates/Tokens -> **design-scout**
- Kundenmaterial zu Kontext-Datei -> **brief-builder**
- Fertige HTML-Datei pruefen -> **qa-polish** (aendert nichts, berichtet nur)
- Logo/Bildmarke/Monogramm -> **logo-designer** (Konzept-Sheet, Wortmarken als SVG-Pfade; Werkzeuge in `_tools/logo/`)
