# Status-Board

Eine Zeile pro Projekt. Bei jedem Phasenwechsel aktualisieren.
Phasen: Brief -> Design -> Freigabe -> Build -> QA -> Launch -> Live-Check & Report -> Live+Betreuung

| Projekt | Phase | Naechster Schritt | Wartet auf |
|---|---|---|---|
| marvin-web (Business-Site, 5 Seiten) | LIVE: marvin-web.pages.dev · Case Study projekt-routenwerk deployed 2026-07-14 (Live-iframe mit Geraete-Umschalter, Abhak-Liste, Eckdaten live gemessen, PDF-Handout) | Marvins Geraete-Review (iPhone/Android) der Case Study; danach Formular-Testsubmit, Domain, og:image, Danke-Seite, Dieter, Formspree-AVV | Marvin: Geraete-Review |
| POPTAIL | Idee | Brief anlegen (brief-builder), Stack: statisch + Shopify | Marvin: Rohmaterial + Prioritaet; Alkoholsteuer/Altersverifikation klaeren |
| MARLOU (ECHTES Projekt Marvin+Louisa) | PAUSIERT — NICHT BEARBEITEN (Marvins Ansage 2026-07-11) | Ruht, bis Marvin+Louisa es aktiv reaktivieren; Design-Verbesserungen aus ROUTENWERK werden erst DANN zurueckgespielt | Marvin + Louisa |
| ROUTENWERK (Demo-Referenz fuer marvin-web, fiktives Studio) | LIVE+BETREUUNG: routenwerk.pages.dev · Deploy 2026-07-14: Bilder optimiert (2,3 MB -> 429 KB, Perf 98 live), CSP frame-ancestors statt X-Frame-Options (marvin-web darf einbetten), Timeline-Fix beratung.html | Nachkontrolle 2026-07-28: Formular-Test, Customer-Feedback; Insights nach _fundus/; Timeline-Fix bei MARLOU-Reaktivierung zurueckspielen | erledigt |

## Erledigt / Log
- 2026-07-14: marvin-web Rechtstexte nachgezogen (committet 35d48e5, noch NICHT deployed):
  Kleinunternehmer-Hinweis § 19 UStG an den Preisen (pakete.html, PAngV) + USt-Abschnitt im
  Impressum; Datenschutz Abschnitt 6 um eingebettete Routenwerk-Demo ergaenzt (IP an Cloudflare,
  kein neuer Drittanbieter) und Pauschalaussage in der Einleitung entschaerft. OFFEN rechtlich:
  Formspree-AVV + Cloudflare-DPA real abschliessen (Datenschutz behauptet AVV bereits);
  Widerruf/Muster-Widerrufsformular nur falls B2C-Verkauf.
- 2026-07-14: ROUTENWERK Brand-Guidelines v2 (14 Doppelseiten A4 quer) gebaut: 3 Logo-Marken
  (+ neue zeichen-flap.svg), Airport-Idee-Seite, Reise-Elemente + Buttons jetzt 1:1 aus
  routenwerk/styles.css (nicht mehr erfunden), Invers-Logo auf Weiss. Als PDF-Handout in
  projekte/marvin-web/downloads/routenwerk-brand-guidelines.pdf integriert (ersetzt v1 lokal,
  gleicher Dateiname -> Case-Study-Link unveraendert). v1 gesichert in
  projekte/routenwerk/_archiv/brand-guidelines-v1-2026-07-14/. OFFEN: Live-Deploy von marvin-web
  (Working-Dir hat weitere uncommittete Aenderungen index.html/ueber-mich.html -> Marvins Deploy-Go noetig).
- 2026-07-10: Onepager-Final als Tag `onepager-final` + Kopie in _fundus/onepager-final/ gesichert.
- 2026-07-10: Workspace, GitHub (SSH aktiv, User marvin-maik), 36 Skills, 4 MCPs, 3 Agenten,
  Playbook-Skill, marvin-web v1+v2 gebaut, Porto-Tokens extrahiert, DESIGN.md-Sammlung (74) geklont.
