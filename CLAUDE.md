# Standing Orders: MARVIN.WEB Workspace

Gilt fuer jede Arbeit in diesem Ordner. Kein Opt-out.

## Prozess
- Neue Projekte laufen nach dem Playbook-Skill `neues-projekt` (Phasen + Freigaben).
- Status-Board `PROJEKTE.md` bei jedem Phasenwechsel aktualisieren.
- Git: Commit nach jedem Meilenstein (Phase abgeschlossen, Version gebaut). Deutsch, praegnant.
  Danach `git push` — Backup-Remote: github.com/marvin-maik/marvin-web-workspace (privat).
- Erst Struktur-/Token-Plan zeigen, dann Code. Bei Aenderungen gezielt editieren, nie komplett neu generieren.
- Vor Design-/Copy-Arbeit lesen: `_referenz/hosting-referenz.md` + `projekte/<name>/product-marketing-context.md`.
- Vor jedem Build lesen: `_referenz/technik-patterns.md` (kampferprobte Loesungen — nicht neu erfinden).
- In jeder Design-/Wireframe-Phase: `_fundus/highlight-elemente.md` konsultieren und 1-2
  passende Highlights anbieten (Streusel, nicht Teig). Devise: lieber bewusst dagegen
  entscheiden als aus Unwissenheit. Neue Muster aus Templates/Screenshots dort ablegen.
  Kein Muster als "zu fragil" verwerfen — robust bauen, testen, Code danach in
  technik-patterns.md sichern.

## Agenten (delegieren statt selbst Kontext verbrennen)
- Recherche zu Design/Templates/Tokens -> **design-scout**
- Kundenmaterial zu Kontext-Datei -> **brief-builder**
- Fertige HTML-Datei pruefen -> **qa-polish** (aendert nichts, berichtet nur)
- Logo/Bildmarke/Monogramm entwickeln -> **logo-designer** (Konzept-Sheet, Wortmarken als SVG-Pfade; Werkzeuge in _tools/logo/)

## Anti-Slop (verbindlich, Kurzfassung — Details in hosting-referenz.md Kap. 9.5)
- Copy: KEINE Gedankenstriche. Keine Floskeln ("massgeschneidert", "nahtlos", "Ihr Partner fuer",
  "revolutionaer", "in der heutigen digitalen Welt"). Konkret schlaegt clever. Zahlen nur belegt.
- Design: keine Default-AI-Looks (Creme+Serif+Terracotta / Dark+Neon / Lila-Gradient+Glassmorphism).
  EIN Signature-Element pro Seite. Keine Emojis als Icons.
- Code: Vanilla CSS mit Token-Custom-Properties, kein Tailwind in Single-Files, semantisches HTML,
  eine h1, Fokus-Zustaende, prefers-reduced-motion. Fonts fuer Launch IMMER selbst hosten (DSGVO).
- BARRIEREFREIHEIT: Zielniveau WCAG 2.1 AA (BFSG-Pflicht bei Shop/Verkauf, sonst Verkaufsargument).
  Checkliste + kampferprobte Muster in `_referenz/barrierefreiheit-checkliste.md` -> VOR Launch abarbeiten.
  AAA (7:1, Leichte Sprache, Audiodeskription) ist optional, nur auf Wunsch. Kontrast IMMER rechnen.

## Technik-Defaults
- Single-File-Mockups (`index.html`), Hosting GitHub (`marvin-maik/<repo>`) + Cloudflare Pages.
- PROJEKT-STRUKTUR: HTML-Seiten flach im Projekt-Root lassen (Ordner = URL-Pfad bei CF Pages,
  also NIE in einen Unterordner packen, sonst brechen Links/canonical/og:url und URLs werden
  haesslich). Assets in `img/`/`fonts/`/`downloads/`. Generator-/Quellvorlagen (Icon-/OG-/
  Schema-Src) in `_src/` -> nur Werkzeug, keine Seite; `_`-Praefix = INTERN, wird eh nie deployed.
- PFLICHTDATEIEN je Projekt (Details + Status-Tabelle: `_referenz/pflichtseiten-checkliste.md`):
  404.html (Pfade root-absolut, sonst SPA-Fallback/Soft-404 auf CF Pages; Vorlage routenwerk),
  _headers mit Security-Headern. Favicon-Serie = SVG-data-URI + **echte** `apple-touch-icon.png`
  (180) + `favicon-32.png`, root-absolut verlinkt (Datei-EXISTENZ pruefen, nicht nur Link —
  stand lange faelschlich als "vorhanden" drin, real fehlte apple-touch). OG-Bild
  `img/og-default.png` (1200x630) + og/twitter-Tags je Seite und JSON-LD `ProfessionalService`
  auf der Startseite gehoeren schon in den BUILD (nicht erst zum Launch), mit absoluter
  pages.dev-URL + `DOMAIN-SWAP`-Kommentar. Bei Formular-Projekten: `danke.html` (noindex) +
  Formspree `_next`. Demos auf pages.dev: noindex per _headers.
  Launch auf finaler Domain: robots.txt + sitemap.xml + canonical + Domain-Swap der absoluten URLs.
  Bei Verkauf: Widerruf inkl. Muster-Widerrufsformular, PAngV-Preise, BFSG-Info.
  KEIN ODR-Link mehr (Plattform seit 07/2025 abgeschaltet).
- MONITORING nach Launch (Default, still im Hintergrund): Cloudflare Web Analytics (cookielos,
  kein Consent, im CF-Dashboard aktivieren) + UptimeRobot Keyword-Monitor (prueft Marker-Phrase
  im HTML -> faengt auch kaputte Deploys). Beides Konto-Aktionen von Marvin. Setup: integrations.md.
- Formulare Formspree, Buchung Cal.com, Rechtstexte Dieter Datenschutz — Snippets in `_referenz/integrations.md`.
- Fertige Erkenntnisse/Muster nach Projektende in `_fundus/` ablegen.
- BOTSCHUTZ PFLICHT auf JEDEM Formular (kein Opt-out): Honeypot (off-screen `.hp-feld`,
  Feld `_gotcha`) + Zeit-Falle in site.js (<2,5s = Bot). Unsichtbar, kein externer Dienst,
  kein Consent noetig. Muster + Code in `_referenz/technik-patterns.md`.
  NIEMALS Google reCAPTCHA (Werbe-Profiling, US-Transfer, Consent-pflichtig, Abmahn-Risiko).
  Wenn echtes CAPTCHA noetig: Cloudflare Turnstile + serverseitige Pruefung per Pages Function
  (Secret als CF-Env-Var). Cloudflare ist eh schon Hoster -> kein neuer Datenempfaenger, kein Cookie.

## Deployment (Stand Launch 2026-07-10)
- GRUNDREGEL: Ordner/Dateien mit `_`-Praefix (z.B. `_archiv/`) sowie DEMO-README.md, handoff/,
  freigabe/ sind INTERN und werden NIE deployed. Deploy deshalb NIE direkt aus dem
  Projektordner (Leak-Vorfall 2026-07-13), sondern IMMER ueber eine Staging-Kopie.
  Staging-Ordner vorher loeschen (rsync ohne --delete laesst Altlasten drin).
- LIVE auf Cloudflare Pages (Direct Upload via wrangler, Account comspiele@web.de):
  https://marvin-web.pages.dev
- Nach jedem Push zusaetzlich deployen (Staging-Kopie, siehe Grundregel):
  `rm -rf /tmp/mw-deploy && rsync -a --include '_headers' --include '_redirects' --exclude '_*' --exclude 'freigabe' --exclude 'handoff' --exclude 'product-marketing-context.md' --exclude 'DEMO-README.md' --exclude '.DS_Store' projekte/marvin-web/ /tmp/mw-deploy/ && npx wrangler pages deploy /tmp/mw-deploy --project-name marvin-web --branch main`
  (`_headers`/`_redirects` sind CF-Pages-Konfig und die Ausnahme vom `_`-Praefix — die
  --include-Regeln VOR dem --exclude '_*' lassen genau sie durch.)
- NACH JEDEM DEPLOY: `ls` der Staging-Kopie gegen die INTERN-Liste pruefen, BEVOR
  wrangler laeuft (Beinahe-Leak 2026-07-14: marvin-web-Befehl schloss freigabe/ und
  product-marketing-context.md nicht aus; geleakte Deployment-URL musste geloescht
  werden via `npx wrangler pages deployment delete <id> --project-name <p> --force`).
- ROUTENWERK-Demo LIVE (seit 2026-07-12, fuer Shop-Test + Portfolio): https://routenwerk.pages.dev
  `rm -rf /tmp/rw-deploy && rsync -a --include '_headers' --include '_redirects' --exclude 'DEMO-README.md' --exclude 'handoff' --exclude 'freigabe' --exclude '_*' --exclude '.DS_Store' projekte/routenwerk/ /tmp/rw-deploy/ && npx wrangler pages deploy /tmp/rw-deploy --project-name routenwerk --branch main`
- Spaeter optional: Git-Integration im CF-Dashboard fuer Auto-Deploy bei Push.
