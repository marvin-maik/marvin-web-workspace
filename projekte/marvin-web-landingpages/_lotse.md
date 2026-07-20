# marvin-web-landingpages — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts. Vor jeder Arbeit hier zuerst diese Datei lesen: Stand, feste
Entscheidungen, offene Punkte, was gerade relevant ist. Nach jedem Arbeitsschritt/Phasenwechsel
kurz mitziehen. Detail-Quellen sind verlinkt, hier steht nur der Wegweiser.

Stand: 2026-07-20 · Phase: **TEIL-LIVE** (instagram.html live auf https://marvin-web-lp.pages.dev/instagram als Bio-Link; restliche 6 LPs weiter in Feinschliff/Freigabe, NICHT deployed)

## Was & wo
- Landingpages fuer Marvins EIGENES Web-Angebot. 3 kalte Ad-LPs (Angles Kosten/Eigentum/Speed,
  kein Menue, ein CTA) + 1 warme Angebots-Seite + 3 warme Kanal-Varianten (Karte/WhatsApp/Instagram).
- Was-Quelle (Copy/Zielgruppe/Fakten): `product-marketing-context.md`
- Design (as-built): `_design.md` (vor Design-Arbeit lesen, danach im selben Commit mitziehen)
- Positionierungs-Rohmaterial: `_material/positionierung-webflow-vergleich.md` (mit verbindlichen Review-Hinweisen im Kopf)
- Live: noch nicht (CF-Pages-Projekt noch anzulegen). Dev-Server: launch.json "marvin-web-landingpages" Port 8743.

## Feste Entscheidungen (NICHT neu aufrollen, sind bewusst so)
- **Ordnername = `marvin-web-landingpages`** (Marvin 2026-07-18): LPs gehoeren zum Mutterprojekt
  `marvin-web` (eigenes Web-Angebot), nicht zu Kunden. Konvention: LPs sind eine EIGENE Deploy-Einheit
  (eigenes Repo/CF-Pages, noindex, "stehen fuer sich"), leben aber als benannter Geschwister-Ordner
  `<mutterprojekt>-landingpages` NEBEN dem Mutterprojekt (nicht verschachtelt, sonst Bruch der
  "HTML flach im Root"-Regel). Kuenftige LP-Sets analog, z.B. `routenwerk-landingpages`.
- **Zielgruppe**: Start-ups, Selbststaendige, kleine bis mittlere Betriebe. NICHT nur Handwerker,
  KEINE Handwerker-Bilderwelt (Baustelle/Wartezimmer/Oeffnungszeiten) in Copy oder Ads.
- **Design erbt das marvin-web-CD 1:1** (Werkstatt-Editorial: Clash Display, Papier #f5f1e8,
  Orange #e8440a). Nicht mixen, keine neue Richtung erfinden. Marvins Ansage 2026-07-16.
- **Markenname = Platzhalter `[MARKE]`** (Rebrand von MARVIN.WEB laeuft parallel). Kein Markenname hart eingebaut.
- **CTA-Strategie: KEIN Formspree, kein Drittanbieter** (Positionierung "kein Fremdcode").
  WhatsApp-Click (wa.me/4915906453169) + tel:. Formular spaeter via Cloudflare Pages Function.
- **Positionierung gegen Webflow (verbindlich)**: kein "statisch vs dynamisch"-Performance-Argument
  (Webflow published selbst statisch); echtes Argument = Fremdcode-Ballast (webflow.js, Telemetrie).
  "Faktor 2-3 schneller" gestrichen (unbelegt), nutzbar: LCP < 2,5 s. CMS-Vergleich ehrlich
  (Pflege ueber Betreuungspauschale, statische Seite hat kein CMS). Agentur-Rechnung NIE in
  Kundenkommunikation. Flux-Zertifikat ist KEIN offizielles Webflow-Zertifikat (Formulierung:
  Ausbildung/Masterclass). Vibe-Coding nur als Einwandbehandlung. DSGVO-Argument nur fuer Fonts/Skripte.
- **Fakten fuer Copy** (aus marvin-web live): Onepager 990 EUR, Business-Site 1.990 EUR, Shop auf
  Anfrage, Betreuung ab 49 EUR/Monat (1. Monat inkl.), PageSpeed 98 (routenwerk) als Speed-Beweis,
  Kleinunternehmer Par. 19 UStG. Freigabe vor Bau, 1 Korrekturrunde, live erst nach Abnahme.
- **Warme LPs werden generiert**, nicht von Hand kopiert: `_lp/` (siehe unten).
- **Alle LPs bleiben noindex** (Marvin 2026-07-18, feste Entscheidung): Sie stehen fuer sich und
  gehoeren nicht streng zur Hauptseite. Gilt fuer alle 7 LPs + 404 (robots-Meta ist ueberall
  gesetzt, dazu `_headers` X-Robots-Tag). Der fruehere "am Domain-Launch pruefen"-Vorbehalt in den
  kalten Ad-LPs ist damit erledigt (Kommentare aktualisiert).

## Offene Punkte (Stand 2026-07-20)
- [x] OG-Bild neu gerendert (MARVIN.WEB + „Arbeitstagen", 1200x630, 2026-07-20). Markenname ueberall
      eingesetzt ([MARKE] → MARVIN.WEB in Master/Channels/og.html/404.html; Platzhalter-Entscheidung
      war seit Rebrand-Ende ueberholt).
- [x] **instagram.html LIVE** (2026-07-20, Marvins Go): eigenes CF-Pages-Projekt **marvin-web-lp**
      (Direct Upload, Deploy 56a5f44f), SELEKTIVES Staging `/tmp/mwlp-deploy` (nur instagram.html +
      404.html + styles.css/site.js + img/fonts + _headers + neue `_redirects` mit `/ /instagram 302`;
      unfreigegebene LPs + unreferenzierte Photoroom-Arbeitsdatei bewusst draussen). Swaps erledigt:
      CAL-SWAP → `https://cal.eu/marvin.web/30min` (der 20min-Platzhalter existierte nicht als Event;
      Copy einheitlich auf „30 Minuten"), DOMAIN-SWAP → marvin-web-lp.pages.dev, Rechtslinks →
      marvinwebdesign.de. qa-polish gelaufen: P1 (404.html-Platzhalter) gefixt, P2 gefixt (En-Dash
      Z.253, CTA „30-Minuten-Gespräch buchen" statt Duz-CTA, Meta-Row-Tel-Padding 10→13px Touch-Ziel,
      ?v einheitlich auf 25 gebumpt). Live verifiziert: 200/302/404 korrekt, noindex-Header, og-Bild,
      cal.eu-Link. **Offen aus QA (Konto/spaeter):** CF-Web-Analytics-Beacon fuer pages.dev +
      UptimeRobot-Monitor; Cal.eu-Eventname eindeutschen; P3-Reste (Zahlenrundung 330/331, `·` fuer
      Screenreader, th scope=row, Inline-Styles).
- [ ] Spaeter optional: Custom-Subdomain (z.B. start.marvinwebdesign.de) statt pages.dev auf das
      Projekt legen; og:url/og:image im Master dann mitziehen.
- [ ] **Marvin: Design-Freigabe der 7 LPs** (Haupt-Blocker)
- [ ] Geraete-Check: Count-up/Reveals/Balken auf echtem iPhone+Android (Browser-Pane pausiert IntersectionObserver/rAF, siehe technik-patterns.md)
- [ ] formaler qa-polish-Lauf ueber alle 7 Seiten
- [ ] Copy-Inkonsistenzen angleichen: kalte Ad-LPs sagen im Ablauf noch "30 Minuten" vs. 20 auf warm; Hero-CTA "Buch dir" duzt vs. sonst Sie
- [ ] "Gueltig 30 Tage" im Angebots-Briefkopf ist Claude-Zusatz -> bestaetigen oder raus
- [ ] Gruendungs-Abzug bewusst ohne feste Zahl (Chat-Verhandlung) -> so lassen?
- [ ] mutige Garantie ("zahlen erst bei Abnahme") nicht gesetzt = Marvins Cashflow-Entscheidung
- [ ] Umzugs-Prozess + Betreuungs-Umfang textlich noch duenn
- [ ] **kalte Ad-LPs (kosten/eigentum/schnell) noch NICHT auf Generator umgestellt** (eigener Master offen)
- [ ] Vor Deploy: CF-Pages-Projekt anlegen, CAL-SWAP (Cal.com-Link) + DOMAIN-SWAP (absolute URLs), Deploy-Go von Marvin
- [ ] Ads erst NACH LP-Freigabe texten (Message Match zur H1)

## Was ist JETZT relevant (Phase = Feinschliff/Freigabe)
- `_design.md` lesen (as-built), bevor irgendwas am Aussehen geaendert wird
- Warme LP aendern -> ueber `_lp/` generieren (nicht die HTML-Dateien direkt editieren)
- Geraete-/Verify-Fallen -> `_referenz/technik-patterns.md`
- Copy/Offer schaerfen -> Skills `cro`, `landing-page-copy`, `offers`; Frameworks Hormozi/Sanwarwala (`_referenz/hosting-referenz.md` 9.3c)
- Endkontrolle -> Agent `qa-polish`
- Vor Deploy -> `_referenz/deploy.md` + `_referenz/pflichtseiten-checkliste.md`

## _lp/ Generator (warme Seiten)
Eine Quelle, vier Ausgaben. Aendere `_lp/warm.master.html` (gemeinsamer Koerper) oder
`_lp/warm.channels.mjs` (Kanal-Texte), dann `node _lp/build.mjs`. Erzeugt angebot/karte/whatsapp/
instagram.html neu. og:title folgt zwingend dem Titel (kann nicht mehr driften). Kalte LPs folgen noch.

## Altlast / nie anfassen
- Der alte Arbeitsname **"FutureGrowth" bleibt aus Marketing/LP-Copy/Marke draussen** (Dateien, Copy,
  Ordner, Gespraech). AUSNAHME (Marvin 2026-07-18): die Umzugs-Seite `projekte/umzug/` auf der alten
  Domain nennt ihn ABSICHTLICH ("Aus FutureGrowth ist MARVIN.WEB geworden"), damit Besucher des alten
  Links den Umzug zuordnen. Also: ueberall verboten AUSSER in dieser einen Abschieds-Notiz.
- `_material/design-dossier.md` (Richtung B "Beleg und Stempel", IBM Plex + Stempelblau) ist
  VERWORFEN, liegt nur noch als Abgrenzungs-Doku. Nicht als Referenz nehmen.
- `freigabe/` enthaelt einen aelteren Build-Stand mit altem Namensschema (lp-kosten, warm-v2 ...).
  Nicht die aktuelle Wahrheit; wird nicht deployed. Kandidat zum Aufraeumen.

## Log (Neuestes oben)
- 2026-07-20: **Showcase-Mockup v2 (Button-Fix)**: Marvins neues Photoroom-Bild (1000x750) exakt wie
  v1 zugeschnitten und 1:1 ersetzt: Handy per Alpha-Bbox freigestellt, auf identisches 500x973-Canvas
  gesetzt (Handy-Bbox x31/y42 wie v1, dafuer 1,58x hochskaliert, Quelle war halb so gross wie v1) ->
  img/showcase-phone-mockup.{png,avif} neu (376KB/49KB, AVIF via sips, Qualitaet per avif->png-Check).
  Quelle archiviert: _src/mockup/routenwerk-iphone-photoroom-v2-button-fix.png. HTML/CSS unveraendert
  (kosten/eigentum/schnell). Im Pane verifiziert (mobil). Falls auf echtem Retina zu weich:
  Photoroom-Export in hoeherer Aufloesung nachfordern. NEBENBEFUND: kalte Ad-LPs tragen noch
  [MARKE]-Platzhalter (kosten 4x, eigentum 6x, schnell 4x) - der "ueberall eingesetzt"-Eintrag oben
  galt nur fuer Master/Channels/og/404.
- 2026-07-18: **Handy im Showcase aufgewertet** (Marvin, styles.css v23->v24). Der simulierte
  border-radius-Rahmen (.showcase-phone) ist ersetzt durch ein freigestelltes iPhone-Foto-Mockup:
  Marvin hat das Silhouette-PSD-Mockup mit Photoroom freigestellt (transparent) und einen scharfen
  routenwerk-Screenshot eingesetzt (Lizenz kommerziell frei, Marvin bestaetigt). Ausgeliefert als
  `<picture>` AVIF (74KB) + PNG-Fallback (468KB); AVIF via sips erzeugt (kein ImageMagick/PIL da),
  Qualitaet per avif->png-Check verifiziert. CSS entdekoriert (kein border/radius/bg), 184px,
  weicher drop-shadow. Auf allen 3 kalten Ad-LPs (kosten/eigentum/schnell). Alter 320px-Screenshot
  war zu niedrig aufgeloest -> nach _src/mockup/ archiviert. NUR Mobile im Pane verifizierbar
  (Pane bleibt schmal + zeigt kein AVIF); Desktop-Groesse nach CSS-Logik, Marvin auf echtem Monitor
  gegenchecken. _design.md mitgezogen.
- 2026-07-18: **Ladebalken-Rennen (.mess) neu gedacht** (Marvin, styles.css v21->v22). Marvins Ansage:
  (1) Massband-Striche gehoeren in die LEERE Bar, nicht in die Fuellung; (2) BEIDE Bahnen fuellen bis
  100% (beide werden fertig), nur die Dauer trennt sie; (3) am Ende steht die ZEIT. Umgesetzt: Skala
  (--muted repeating-gradient) im Track, Fuellung satt --signal, neue `.mess-bahn` (spur flex:1 + Zeit
  rechts), `.mess-zeit` blendet am Ende jeder Bahn ein (opacity-delay = Dauer). Verifiziert: fillW==spurW
  (deckt bis zum Ende), Skala im leeren Teil sichtbar, keine Konsolenfehler. BELEG (erledigt, Marvins Wahl):
  Zeit als BEREICH "ueber 3 s" / "unter 1 s" statt Punktwerten (keine Fake-Praezision ohne Messung),
  kein "Beispiel"-Label mehr, Fussnote "Richtwerte, keine Laborzahlen" + belegter PageSpeed 98.
  min-width der .mess-zeit 58->76 (Bereiche breiter, beide Bahnen gleich lang). _design.md mitgezogen.
- 2026-07-18: **noindex als feste Entscheidung bestaetigt** (Marvin): alle 7 LPs + 404 bleiben
  noindex (stehen fuer sich, nicht Teil der Hauptseite). robots-Meta war ueberall schon gesetzt;
  nur die "am Domain-Launch pruefen"-Kommentare in kosten/eigentum/schnell auf "feste Entscheidung"
  aktualisiert. Zusatz: neues Schwester-Projekt `projekte/umzug/` (Umzugs-Notiz auf der alten
  Domain) darf FutureGrowth als EINZIGE Stelle namentlich nennen (Marvins Freigabe), siehe Altlast.
- 2026-07-18: **Preis-Umbruch auf breiten Desktops gefixt** (styles.css v19->v21). Marvin sah im sehr
  breiten Fenster (file://): Paket-02-Preis "2.368 € 1.990 €" brach zweizeilig um, Paket 01 nicht.
  Ursache exakt gemessen: NICHT die Spaltenbreite, sondern der Karten-Innenraum (~316px); bei >=~1462px
  wächst die Schrift auf 60px, "1.990 €" (Extra-Ziffer ggü 990) braucht dann 325px. Tritt erst >1280px
  auf -> in früheren Tests unsichtbar. Fix: `.dok .pkg .price` im 3-Spalten-Modus (>=1001px) auf
  clamp(44,4vw,54) + nowrap. WICHTIG: erst versucht global -> Sweep fing sofort eine Regression (nowrap
  ließ den Preis bei 320px in der schmalen 1-Spalte 13px überlaufen) -> deshalb nowrap NUR >=1001px.
  Neu verifiziert: 52 Kombinationen 320-2560px, 0 Probleme. Merke: bei Preis-Layout immer die BREITEN
  Fenster (>=1600px) mittesten, nicht nur bis 1280. LEARNING Cache/file://: Versionsnummer IMMER bumpen,
  sonst zieht die file://-Ansicht die alte CSS (Marvin sah mehrfach alten Stand).
- 2026-07-18: **Dichter Breakpoint-Sweep (VW/VH) auf Marvins Wunsch** (styles.css v18->v19). Per iframe
  alle 7 Seiten x 24 Breiten (320-1440px) = 168 Kombinationen geprüft: 0 Layout-Overflow, 0 Randüberlauf.
  Einziger echter Fund: bei 320px ragten die langen Wörter "Überraschungen" (.h-lg) und "Gründungsprojekte"
  (.gruendung h3) aus der Textspalte (h2/h3 brechen Wörter nicht). Fix: `h1,h2,h3{overflow-wrap:break-word;
  hyphens:auto}` -> saubere deutsche Silbentrennung nur bei Bedarf (.hero h1 behält hyphens:manual/anywhere).
  Nachweislich harmlos: SUMMARY-scrollWidth +8px ist ein flex/gap-Messquirk (kein sichtbarer Überlauf),
  sr-only 334>1 ist gewollt. CSS nutzt KEINE vh-Einheiten -> Layout ist höhen-unabhängig.
- 2026-07-18: **Zwei Nachträge aus Marvins Review** (styles.css v17->v18). (1) Ablauf-Bug: im
  2x2-Tablet-Layout hatte Schritt 03 eine verirrte linke Kante + 28px Einzug, stand versetzt
  unter 01 -> erste Spalte (ungerade Schritte) jetzt ohne linke Kante, bündig links (Alt-Bug,
  nicht aus dem v17-Feinschliff). (2) Stack-Werte (.val) rutschen auf dem Handy unter die
  Beschreibung -> jetzt RECHTSbündig als Wert-Anker (Bon-Muster wie docket/compare) statt links
  unterzugehen; Marvin: "entscheide selbst". Beide live verifiziert.
- 2026-07-18: **Responsive-Feinschliff Mobile/Tablet/Desktop** (styles.css v16->v17, alle Seiten). Zwei
  echte Fehler behoben: (1) About-Porträt blies sich auf Tablet auf volle Breite auf (712px-Riesenfoto)
  -> about-grid bleibt bis 640px zweispaltig, .duo danach max 300px; (2) Showcase-Bildunterschrift lief
  hinter das überlappende Handy -> padding-right unter 860px. Plus Tablet-Stufen ergänzt: karten-3
  (Selbsttest) bleibt dreispaltig bis 620px statt bei 860 zu stapeln; kalte Pakete zweispaltig bis 700
  statt 900; .dok-Pakete 701-1000 zweispaltig mit Paket 3 über volle Breite (statt Sprung 3sp->1sp).
  Verifiziert per Browser an allen Breakpoint-Grenzen (390/701/768/1000/1001/1280), 0 Overflow. _design.md mitgezogen.
- 2026-07-18: og:title-Bug auf 3 Kanal-Seiten gefixt; warme LPs auf `_lp/`-Generator umgestellt (regressionsfrei bewiesen).
- 2026-07-18: Design-Sync (angebot-Refresh auf alle LPs). Details im PROJEKTE-Log.
- 2026-07-17: Feinschliff-Runde (Sanwarwala + Hormozi): Proof vor Preis, Offer-Stack auf angebot.
- 2026-07-16: gebaut, Design = marvin-web-CD 1:1 geerbt (Richtung B ersetzt).
