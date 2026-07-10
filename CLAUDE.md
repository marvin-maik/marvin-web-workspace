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

## Agenten (delegieren statt selbst Kontext verbrennen)
- Recherche zu Design/Templates/Tokens -> **design-scout**
- Kundenmaterial zu Kontext-Datei -> **brief-builder**
- Fertige HTML-Datei pruefen -> **qa-polish** (aendert nichts, berichtet nur)

## Anti-Slop (verbindlich, Kurzfassung — Details in hosting-referenz.md Kap. 9.5)
- Copy: KEINE Gedankenstriche. Keine Floskeln ("massgeschneidert", "nahtlos", "Ihr Partner fuer",
  "revolutionaer", "in der heutigen digitalen Welt"). Konkret schlaegt clever. Zahlen nur belegt.
- Design: keine Default-AI-Looks (Creme+Serif+Terracotta / Dark+Neon / Lila-Gradient+Glassmorphism).
  EIN Signature-Element pro Seite. Keine Emojis als Icons.
- Code: Vanilla CSS mit Token-Custom-Properties, kein Tailwind in Single-Files, semantisches HTML,
  eine h1, Fokus-Zustaende, prefers-reduced-motion. Fonts fuer Launch IMMER selbst hosten (DSGVO).

## Technik-Defaults
- Single-File-Mockups (`index.html`), Hosting GitHub (`marvin-maik/<repo>`) + Cloudflare Pages.
- Formulare Formspree, Buchung Cal.com, Rechtstexte Dieter Datenschutz — Snippets in `_referenz/integrations.md`.
- Fertige Erkenntnisse/Muster nach Projektende in `_fundus/` ablegen.

## Deployment (Stand Launch 2026-07-10)
- LIVE auf Cloudflare Pages (Direct Upload via wrangler, Account comspiele@web.de):
  https://marvin-web.pages.dev
- Nach jedem Push zusaetzlich deployen:
  `npx wrangler pages deploy projekte/marvin-web --project-name marvin-web --branch main`
- Spaeter optional: Git-Integration im CF-Dashboard fuer Auto-Deploy bei Push.
