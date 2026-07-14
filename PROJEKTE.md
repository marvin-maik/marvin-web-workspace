# Status-Board

Eine Zeile pro Projekt. Bei jedem Phasenwechsel aktualisieren.
Phasen: Brief -> Design -> Freigabe -> Build -> QA -> Launch -> Live-Check & Report -> Live+Betreuung

| Projekt | Phase | Naechster Schritt | Wartet auf |
|---|---|---|---|
| marvin-web (Business-Site, 5 Seiten) | LIVE: marvin-web.pages.dev · 2026-07-14 lokal ergaenzt (noch NICHT deployed): OG-Bild + Twitter-Card, apple-touch/favicon-32, JSON-LD ProfessionalService, danke.html + Formspree-_next | Deploy-Go von Marvin (Staging-Excludes: `_*` inkl. _og-src/_icon-src/_schema). CF Web Analytics registriert + Beacon im Code (Daten ab Deploy); UptimeRobot-Keyword-Monitor "MARVIN.WEB" live (Up, 5-Min, Alarm an comspiele@web.de). Danach: Formular-Testsubmit, Datenschutz um WhatsApp + CF Web Analytics ergaenzen (Dieter), Geraete-Review, Domain, Formspree-AVV | Marvin: Deploy-Go + Test-Alarm-Mail im Postfach/Spam pruefen |
| POPTAIL | Idee | Brief anlegen (brief-builder), Stack: statisch + Shopify | Marvin: Rohmaterial + Prioritaet; Alkoholsteuer/Altersverifikation klaeren |
| MARLOU (ECHTES Projekt Marvin+Louisa) | PAUSIERT — NICHT BEARBEITEN (Marvins Ansage 2026-07-11) | Ruht, bis Marvin+Louisa es aktiv reaktivieren; Design-Verbesserungen aus ROUTENWERK werden erst DANN zurueckgespielt | Marvin + Louisa |
| ROUTENWERK (Demo-Referenz fuer marvin-web, fiktives Studio) | LIVE+BETREUUNG: routenwerk.pages.dev · Deploy 2026-07-14: Bilder optimiert (2,3 MB -> 429 KB, Perf 98 live), CSP frame-ancestors statt X-Frame-Options (marvin-web darf einbetten), Timeline-Fix beratung.html | Startseiten-og:image + twitter:card 2026-07-14 lokal nachgezogen (Bild existierte, nur Tag fehlte -> leere Share-Vorschau) -> **routenwerk neu deployen** (rw-deploy-Befehl); favicon-32 optional (noindex-Demo). Dann Nachkontrolle 2026-07-28: Formular-Test, Customer-Feedback; Insights nach _fundus/; Timeline-Fix bei MARLOU-Reaktivierung zurueckspielen | Marvin: routenwerk-Deploy-Go |

## Erledigt / Log
- 2026-07-14: UptimeRobot-Keyword-Monitor fuer marvin-web eingerichtet (via Chrome, Marvins
  Konto Marvin-Maik, GitHub-Login): Keyword "MARVIN.WEB" auf https://marvin-web.pages.dev,
  Alarm wenn Keyword FEHLT (faengt Ausfall + kaputten Deploy), 5-Min-Intervall (Free), Mail an
  comspiele@web.de. Monitor live + Up. Test-Mail ausgeloest -> Marvin muss Zustellung
  (Postfach/Spam bei web.de) gegenpruefen. Free reicht dauerhaft (1 von 50 Monitoren).
- 2026-07-14: Cloudflare Web Analytics fuer marvin-web eingerichtet (via Chrome, Marvins
  CF-Konto): Seite registriert (marvin-web.pages.dev), Beacon-Snippet Token 5fb6f7e7...cc80 in
  alle 9 Seiten vor </body> (cookielos, kein Consent). Learning: pages.dev ist keine CF-Zone ->
  keine Auto-Einbindung, Beacon Pflicht (integrations.md Abschnitt 9 korrigiert). Daten erst ab Deploy.
- 2026-07-14: marvin-web WhatsApp-Kontakt eingebaut (lokal, noch NICHT deployed): Float-Button
  auf allen 9 Seiten (nur Logo/icon-only auf Marvins Wunsch, 60x60, in Palette, kein WhatsApp-Gruen,
  aria-label bleibt fuer Screenreader, reduced-motion),
  WhatsApp-Primaerbutton im Kontakt-Bereich (neben Cal, gleiche Hoehe), Danke-Zeile fuehrt mit
  WhatsApp; wa.me/4915906453169 mit vorbefuelltem Text. OFFEN vor Launch: WhatsApp als Kontaktweg
  in die Datenschutzerklaerung (Meta/US) aufnehmen (Dieter).
- 2026-07-14: routenwerk Startseite og:image + twitter:card nachgezogen (Bild existierte schon,
  nur der Tag fehlte -> leere Share-Vorschau auf der von marvin-web verlinkten Case Study).
  Braucht routenwerk-Deploy. Checkliste-Statuszeilen + Header-Datum korrigiert; integrations.md
  Cal-Embed auf app.cal.eu vereinheitlicht.
- 2026-07-14: marvin-web "blinde Flecken" geschlossen (lokal, noch NICHT deployed): OG-Bild
  `img/og-default.png` (1200x630, Chrome-headless gerendert) + og/twitter-Tags auf 5 Seiten;
  echte `apple-touch-icon.png` (180) + `favicon-32.png` (die pflichtseiten-checkliste behauptete
  faelschlich, apple-touch sei vorhanden — war es nie); JSON-LD ProfessionalService auf der
  Startseite (valide, NAP aus Impressum, ohne Geo); `danke.html` (noindex, im Look) + Formspree
  `_next`. ALLE Regeln dauerhaft eingebaut: pflichtseiten-checkliste.md, CLAUDE.md, qa-polish.md,
  neues-projekt SKILL.md, integrations.md (Abschnitte 7-10: OG/Icon-Rezept, JSON-LD, CF Web
  Analytics, UptimeRobot). Offen als Konto-Aktionen Marvin: Analytics-Toggle + Uptime-Monitor.
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
