# Status-Board

Eine Zeile pro Projekt. Bei jedem Phasenwechsel aktualisieren.
Phasen: Brief -> Design -> Freigabe -> Build -> QA -> Launch -> Live-Check & Report -> Live+Betreuung

| Projekt | Phase | Naechster Schritt | Wartet auf |
|---|---|---|---|
| marvin-web (Business-Site, 6 Seiten) | LIVE + DEPLOYED 2026-07-15 (c0e4f9a8, Kontakt-Seite live; davor 83d69515): OG-Bild + Twitter-Card, apple-touch/favicon-32, JSON-LD, danke.html + _next (CF Clean-URL /danke, Kette landet auf 200), WhatsApp (Float nur Logo + Kontakt-Button), CF Web Analytics Beacon (Token ...cc80, misst ab jetzt), UptimeRobot-Keyword-Monitor "MARVIN.WEB" (Up, 5-Min, Mail an comspiele@web.de); Datenschutz um WhatsApp + CF Web Analytics ergaenzt. Live verifiziert via Deployment-URL. | Offen: Test-Alarm-Mail (Postfach/Spam) pruefen; Formspree-Testsubmit real (DABEI pruefen: greift `_next`-Redirect auf danke.html? Custom-Redirect ist Formspree-Bezahl-Feature, im Free-Tarif landet der Absender sonst auf Formsprees Standardseite -> ggf. Tarif hochstufen oder Formular via CF Pages Function selbst verarbeiten); Datenschutz fachlich pruefen lassen; Domain; **AM DOMAIN-LAUNCH Formular von Formspree auf Cloudflare Pages Function umstellen** (Ablauf: integrations.md Abschnitt 1b, Weg A = Email Routing nativ; erledigt zugleich Formspree-AVV + vereinfacht Datenschutz); Geraete-Review; **Blinde-Fleck-To-dos (2026-07-15, Konto-Aktionen):** Google Unternehmensprofil anlegen (lokale Auffindbarkeit + Bewertungen), Instagram/LinkedIn + sameAs im Schema ergaenzen, Profi-Mail auf eigener Domain statt gmail (Impressum + JSON-LD), Formspree-Autoresponder einrichten (Tarif pruefen), Conversion messen (/danke- vs Startseiten-Aufrufe in CF Analytics), "Antwort am selben Tag" gegen Urlaub/Krankheit absichern | Marvin: Test-Mail + Domain-Entscheidung |
| POPTAIL | Idee | Brief anlegen (brief-builder), Stack: statisch + Shopify | Marvin: Rohmaterial + Prioritaet; Alkoholsteuer/Altersverifikation klaeren |
| LANDINGPAGES (eigenes Angebot, 3 Ad-LPs Kosten/Eigentum/Speed + warme Angebots-Seite) | GEBAUT 2026-07-16 (Feinschliff offen): kosten/eigentum/schnell/angebot.html + 404 + _headers(noindex) + Favicons + OG, Design = marvin-web Werkstatt-CD 1:1 GEERBT (Marvins Ansage "nicht mixen"; design-scout-Richtung B war gebaut und wurde ersetzt, bleibt als Abgrenzung in _design.md). Designakten NEU: landingpages/_design.md + marvin-web/_design.md (Skill /design-md). Inline-QA bestanden: 12 Kontrastpaare AA, 1 h1/Seite, 0 Gedankenstriche, Titles/Descs im Limit, schnell.html 56,8 KB inkl. Fonts, Rechtslinks auf marvin-web live (200), mobil 375px overflow-frei. Wireframe-Annahmen uebernommen: Sie-Form, marvin-web-Preise, WhatsApp+tel als CTAs (kein Formular). | Marvin: Feinschliff-Feedback + Geraete-Check (Count-up/Reveals/Balken; Browser-Pane pausiert IO/rAF) -> dann CF-Pages-Projekt anlegen + DOMAIN-SWAP + Deploy-Go. OFFEN aus Build: "Gueltig 30 Tage" im Angebots-Briefkopf ist Claude-Zusatz (bestaetigen); Gruendungs-Abzug bewusst ohne feste Zahl (Chat-Verhandlung); mutige Garantie ("zahlen erst bei Abnahme") nicht gesetzt = Marvins Cashflow-Entscheidung; formaler qa-polish-Lauf nach Session-Limit-Reset offen; Umzugs-Prozess + Betreuungs-Umfang textlich duenn. Ads erst NACH LP-Freigabe texten (Message Match H1). Dev-Server: launch.json "landingpages" Port 8743. | Marvin: Feinschliff + Deploy-Go |
| ^ Feinschliff-Runde 2026-07-17 (Sanwarwala + Hormozi) | Proof vor den Preis: "Wer baut das" (Portraet + Geraete-Showcase Desktop/Handy statisch + 4 Eckdaten-Kacheln) auf allen 3 Ad-LPs. Hormozi-Offer: voller Wert-Stack mit 9 belegbaren Ankern NUR auf angebot.html vor dem Preis, Dream Outcome hoch ("Damit Ihre Seite Kunden bringt"), Barrierefreiheit sichtbar, Design-Handout als Bonus. Freigabe-Garantie benannt + Gruendungsprojekte-Band (3 Plaetze, Referenz-Tausch statt 50%-Streichpreis, bewusst abgeraten). Wort "Code" komplett aus Kundentext (Marvins Ansage: klingt nach KI) nach Rollen-Schema, EINE HTML/CSS-Nennung in der KI-FAQ als Kompetenzbeweis. Bilder 382->226 KB, EXIF sauber. QA: 12 Kontrastpaare AA, 0 verbotene Floskeln, 375px overflow-frei. GEPRUEFT + verworfen: Live-iframe der Demo im Ad-Funnel (zieht 350-450 KB gegen 66 KB LP-Gewicht, schlaegt das Speed-Versprechen). | | |
| MARLOU (ECHTES Projekt Marvin+Louisa) | PAUSIERT — NICHT BEARBEITEN (Marvins Ansage 2026-07-11) | Ruht, bis Marvin+Louisa es aktiv reaktivieren; Design-Verbesserungen aus ROUTENWERK werden erst DANN zurueckgespielt | Marvin + Louisa |
| ROUTENWERK (Demo-Referenz fuer marvin-web, fiktives Studio) | LIVE+BETREUUNG: routenwerk.pages.dev · Deploy 2026-07-14: Bilder optimiert (2,3 MB -> 429 KB, Perf 98 live), CSP frame-ancestors statt X-Frame-Options (marvin-web darf einbetten), Timeline-Fix beratung.html | Startseiten-og:image + twitter:card DEPLOYED 2026-07-14 (14bcf3f8) -> leere Share-Vorschau gefixt, live verifiziert. Nachkontrolle 2026-07-28: Formular-Test, Customer-Feedback; Insights nach _fundus/; Timeline-Fix bei MARLOU-Reaktivierung zurueckspielen | erledigt |

## Erledigt / Log
- 2026-07-15: NAMING-REPORT Rebrand MARVIN.WEB erstellt (projekte/marvin-web/_rebrand/naming-report.md):
  15 verifizierte Naming-Experten recherchiert (Watkins, Altman, Meyerson, Shore, Placek, Manning,
  Friedman, Miller, Neumeier, Ries, Airey, Flowers, Bell, Kircher/NOMEN, Leiblein/Namestorm),
  4 Experten-Raete simuliert (Strategie, Klang/Linguistik, Klartext/Namescape, Deutschland),
  69 Kandidaten bewertet, Shortlist Top 11: TAKTFEST (Konsens-Sieger), FUENFTAKT, RICHTFEST,
  WERKTAG, ZUSCHNITT, SATZBAU, KURZERHAND, AUFMASS (strittig: ss/Software-Markt), HANDSCHLAG
  (strittig: Belegung), FUENFWERK, Wildcard MARVIN MACHT DAS. Strategie-Fundament: ein Wort
  "fertig", Zag "Betrieb statt Agentur", Deskriptor-Pflicht "Websites in 5 Werktagen, zum
  Festpreis", Marvin raus aus dem Markennamen (bleibt Absender). OFFEN (Marvin): Favoriten
  waehlen -> 4-Ebenen-Kollisionscheck (DENIC/DPMA Kl.42+35/Google/Handelsregister) -> Domains
  sichern -> Telefontest-Woche. KEIN Logo vor dem Check.
- 2026-07-15: pakete-H1 mobil sauber getrennt, DEPLOYED (49e537e6). Auf Marvins Wunsch statt
  Schrift-Verkleinerung die groessere H1 behalten und das lange Wort am Silbenrand trennen:
  Soft-Hyphen `&shy;` nach "Ueber" in pakete.html -> mobil "KEINE UEBER-/RASCHUNGEN". `.page-head h1`
  Floor 30->37px (Desktop-Skalierung 7,5vw wieder wie im Original), `hyphens:manual` trennt NUR den
  gesetzten Punkt, `overflow-wrap:anywhere` bleibt Notnagel. Bei 375px verifiziert (pakete bricht
  wie gewuenscht, ueber-mich "CALLCENTER." ganz, kein Overflow); live: /pakete 200, `&shy;` in der
  Headline vorhanden, styles.css `clamp(37px,7.5vw,92px)` live.
- 2026-07-15: kontakt.html DEPLOYED (c0e4f9a8) + qa-polish bestanden. Eigene Kontakt-Seite live,
  Menuepunkt + Footer site-weit, H1-Overflow-Fix (`.page-head h1` clamp(30px,8vw,92px) +
  `overflow-wrap:anywhere`; lange Versalwoerter wie UEBERRASCHUNGEN liefen bei 375px raus, weil
  `.satz` inline-block ist und break-word die min-content-Breite nicht senkt), styles.css-Cache
  site-weit v=9. QA-Blocker behoben: `.trust-row` im dunklen Block war `--muted` (3,27:1) -> jetzt
  `.dark-sec .trust-row` = `--dark-soft` (8,6:1 AA), Deko-Haken `--signal-tint`; SR-Deko-Pfeil
  (`&rarr;`) in pkg-note-Links via `aria-hidden` gekapselt (kontakt/ueber-mich/index). Live
  verifiziert: /kontakt Clean-URL 200 (kontakt.html -> 308 -> /kontakt), H1 + ContactPage-Schema +
  aktive Nav vorhanden, Kontakt-Nav auf Startseite, styles.css enthaelt alle Fixes (must-revalidate).
  Deploy ueber Staging-Kopie, Leak-Check bestanden (nur `_headers` als erlaubte Ausnahme).
  OFFEN (Marvin, Netz/Konto): cal.eu/marvin.web/30min + wa.me + tel: 0159 06453169 einmal im
  Browser gegenpruefen (toter Buchungslink = verlorener Lead); QA-Nice-to-haves site-weit bei
  Gelegenheit (Mittelpunkt-Trenner `·` + Pflichtfeld-Markierung `*` im Formular).
- 2026-07-15: H1-Feinschliff + Cache-Konsistenz (lokal, noch NICHT deployed). `.page-head h1` von
  `hyphens:auto` auf `manual` (styles.css:115): Unterseiten-Ueberschriften trennen deutsche Woerter
  nicht mehr mit Bindestrich, ganze Woerter brechen um (`overflow-wrap:break-word` bleibt als
  Overflow-Notnagel). Bei 375px im Browser verifiziert (kontakt „WERKTAG.", ueber-mich „CALLCENTER."
  ganz, kein Horizontal-Overflow). styles.css-Cache-Version site-weit auf `?v=9` vereinheitlicht
  (war gemischt: index/404/danke/kontakt/pakete/ueber-mich v=3, projekte/projekt-routenwerk v=8 ->
  ohne Bump saehe ein wiederkehrender Besucher nach Deploy die alte CSS). impressum/datenschutz
  nutzen inline `<style>`, nicht betroffen.
- 2026-07-15: Eigene Kontakt-Seite `kontakt.html` gebaut (lokal, noch NICHT deployed). Entscheidung
  via marketing-council (Hormozi/Brunson/Sutherland + Nachschlag Neil Patel/Arsh Sanwarwala): eigene
  Seite JA, aber als echte Vertrauens- + Conversion-Seite, nicht als nacktes Formular; die inline
  `#kontakt`-Section auf der Startseite BLEIBT fuer den warmen Scroll-Pfad. Aufbau: page-head +
  dark-sec (Formspree-Formular identisch, Honeypot/_next, Berlin+Oeffnungszeiten+Anschrift-Link) +
  trust-row + "Was danach passiert" (3 Schritte) + Kontakt-FAQ (4 Einwaende). ContactPage-JSON-LD
  referenziert #business. Menuepunkt "Kontakt" + Footer-Link site-weit ergaenzt (index/pakete/
  projekte/ueber-mich/projekt-routenwerk/404, FAQ im Nav ueberall behalten). Seiten-CTAs auf
  kontakt.html zeigen lokal auf `#kontakt` (Formular liegt auf der Seite). Botschutz greift ohne
  Zusatzcode: site.js Zeile 54 `form:has([name='_gotcha'])`. E-Mail bewusst weiter NICHT sichtbar
  (wartet auf Profi-Domain-Adresse, wie To-do). Statisch verifiziert (1 h1, 0 Em-Dashes, je 1
  Nav+Footer-Link/Seite). OFFEN: visueller Geraete-Review + qa-polish, dann Deploy (Marvins Freigabe).
- 2026-07-15: Entscheidung Formular-Strategie (mit Marvin): Formspree ist nur Staging-Notnagel,
  Endloesung ist Cloudflare Pages Function auf eigener Domain (kein US-Drittempfaenger, eigener
  Redirect, serverseitiger Spamschutz). Migration bewusst auf den Domain-Launch gelegt, weil der
  saubere Mailweg (Cloudflare Email Routing, Weg A) die echte Domain braucht und ohnehin in denselben
  Schritt wie der URL-Domain-Swap gehoert. Formspree bis dahin stehen lassen. Vollstaendiger Ablauf +
  A/B-Mailweg als wiederverwendbarer Standard in integrations.md Abschnitt 1b. OFFENE Detail-
  Entscheidung: Kunden-Auto-Antwort gewuenscht? Wenn nein -> reines Cloudflare (Weg A); wenn ja ->
  Resend (Weg B, ein kontrollierter Drittanbieter). Empfehlung: erst Weg A, danke.html ist die
  Sofort-Bestaetigung, Resend nur bei echtem Bedarf nachruesten.
- 2026-07-15: Wissen gesichert (Marvin-Hinweis + an der Quelle verifiziert): Formspree-Free-Tarif
  hat KEINEN eigenen Danke-Redirect (`_next` ist Bezahl-Feature, ~15 $/Monat), keine Absender-Auto-
  Antwort, kein Datei-Upload, keine bessere Spam-Filterung, keine Plugins/API. Free -> Absender landet
  auf Formsprees gebrandeter Standardseite. Konsequenz marvin-web: `_next` -> danke.html greift im Free
  evtl. nicht -> beim realen Testsubmit pruefen (Alternativen: Tarif hoch ODER Formular via CF Pages
  Function selbst). Dauerhaft dokumentiert in `_referenz/integrations.md` Abschnitt 1 (fuer Kundenprojekte).
- 2026-07-15: marvin-web blinde Flecken Teil 2 (lokal, noch NICHT deployed): (1) Click-to-Call
  site-weit: `tel:`-Link in der Meta-Zeile aller 4 Hauptseiten (index/pakete/ueber-mich/projekte)
  + "Anrufen: 0159 06453169" als Primaer-CTA im Kontakt-Block (WhatsApp + Termin daneben als Ghost;
  auf Wunsch zuruecktauschbar). (2) Datenschutz-Hinweis + Link zur Datenschutzerklaerung direkt am
  Anfrage-Formular. FALLE: `--ink-soft` wird in `.dark-sec` heller ueberschrieben, `.dark-sec p`
  ist spezifischer als `.form-privacy` -> Hinweis rendert erst mit 1,9:1 (Fail). Fix ueber
  `.form-card .form-privacy`-Spezifitaet, danach Text 8,3:1 / Link 16,3:1 (Browser gerechnet).
  (3) FAQPage-JSON-LD: index (6 Fragen) + pakete (5 Fragen), Texte 1:1 aus sichtbarem FAQ; beide
  Bloecke parsen valide. Hinweis: klassische Google-FAQ-Rich-Results sind seit 2023 auf wenige
  Seitentypen beschraenkt, der Nutzen liegt jetzt bei AI-/Answer-Engines + Semantik. (4) sameAs-
  Platzhalter-Kommentar im index-Schema (echte URLs sobald Profile existieren). Browser-verifiziert:
  Mobil 375px kein Horizontal-Overflow, tel-Link tappbar. OFFEN = Konto-Aktionen Marvin (siehe
  Status-Zeile). Autoresponder bewusst NICHT gemacht: lebt im Formspree-Dashboard (Login), kein Code.
- 2026-07-14: DEPLOYED. marvin-web (83d69515) + routenwerk (14bcf3f8) live ueber Staging-Kopie
  (Leak-Kontrolle bestanden, MARLOU bewusst nicht committet/deployt). Commit 9434058 + gepusht.
  Live via Deployment-URL verifiziert: alle Icons/OG/Beacon/Schema/WhatsApp 200 + vorhanden,
  Danke-Kette /danke.html -> 308 -> /danke -> 200, noindex aktiv (pages.dev). Datenschutz war
  ohne Dieter direkt ergaenzt (WhatsApp + CF Web Analytics) -> bei Gelegenheit fachlich pruefen lassen.
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
