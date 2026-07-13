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
- PFLICHTDATEIEN je Projekt (Details + Status-Tabelle: `_referenz/pflichtseiten-checkliste.md`):
  404.html (Pfade root-absolut, sonst SPA-Fallback/Soft-404 auf CF Pages; Vorlage routenwerk),
  _headers mit Security-Headern, Favicon-Serie. Demos auf pages.dev: noindex per _headers.
  Launch auf finaler Domain: robots.txt + sitemap.xml + canonical/og:image.
  Bei Verkauf: Widerruf inkl. Muster-Widerrufsformular, PAngV-Preise, BFSG-Info.
  KEIN ODR-Link mehr (Plattform seit 07/2025 abgeschaltet).
- Formulare Formspree, Buchung Cal.com, Rechtstexte Dieter Datenschutz — Snippets in `_referenz/integrations.md`.
- Fertige Erkenntnisse/Muster nach Projektende in `_fundus/` ablegen.
- BOTSCHUTZ PFLICHT auf JEDEM Formular (kein Opt-out): Honeypot (off-screen `.hp-feld`,
  Feld `_gotcha`) + Zeit-Falle in site.js (<2,5s = Bot). Unsichtbar, kein externer Dienst,
  kein Consent noetig. Muster + Code in `_referenz/technik-patterns.md`.
  NIEMALS Google reCAPTCHA (Werbe-Profiling, US-Transfer, Consent-pflichtig, Abmahn-Risiko).
  Wenn echtes CAPTCHA noetig: Cloudflare Turnstile + serverseitige Pruefung per Pages Function
  (Secret als CF-Env-Var). Cloudflare ist eh schon Hoster -> kein neuer Datenempfaenger, kein Cookie.

## Deployment (Stand Launch 2026-07-10)
- LIVE auf Cloudflare Pages (Direct Upload via wrangler, Account comspiele@web.de):
  https://marvin-web.pages.dev
- Nach jedem Push zusaetzlich deployen:
  `npx wrangler pages deploy projekte/marvin-web --project-name marvin-web --branch main`
- ROUTENWERK-Demo LIVE (seit 2026-07-12, fuer Shop-Test + Portfolio): https://routenwerk.pages.dev
  Deploy NIE direkt aus dem Projektordner (DEMO-README.md + handoff/ + freigabe/ sind intern,
  Leak-Vorfall 2026-07-13; freigabe/ nachtraeglich in Excludes seit 2026-07-13)! Immer ueber
  Staging-Kopie, /tmp/rw-deploy vorher loeschen (rsync ohne --delete laesst Altlasten drin):
  `rm -rf /tmp/rw-deploy && rsync -a --exclude 'DEMO-README.md' --exclude 'handoff' --exclude 'freigabe' --exclude '.DS_Store' projekte/routenwerk/ /tmp/rw-deploy/ && npx wrangler pages deploy /tmp/rw-deploy --project-name routenwerk --branch main`
- Spaeter optional: Git-Integration im CF-Dashboard fuer Auto-Deploy bei Push.
