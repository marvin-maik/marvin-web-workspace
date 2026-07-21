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
  WhatsApp-Click (wa.me/491729718102) + tel:+491729718102 (Anzeige 0172 9718102). Formular spaeter via Cloudflare Pages Function.
- **Positionierung gegen Webflow (verbindlich)**: kein "statisch vs dynamisch"-Performance-Argument
  (Webflow published selbst statisch); echtes Argument = Fremdcode-Ballast (webflow.js, Telemetrie).
  "Faktor 2-3 schneller" gestrichen (unbelegt), nutzbar: LCP < 2,5 s. CMS-Vergleich ehrlich
  (Pflege ueber Betreuungspauschale, statische Seite hat kein CMS). Agentur-Rechnung NIE in
  Kundenkommunikation. Flux-Zertifikat ist KEIN offizielles Webflow-Zertifikat (Formulierung:
  Ausbildung/Masterclass). Vibe-Coding nur als Einwandbehandlung. DSGVO-Argument nur fuer Fonts/Skripte.
- **Fakten fuer Copy** (aus marvin-web live): Onepager **790 EUR** (Marvins Einstiegspreis-Entscheidung
  2026-07-21, vorher 990; steigt, sobald Referenzen da sind), Business-Site 1.990 EUR, Shop auf
  Anfrage, Betreuung ab 49 EUR/Monat (1. Monat inkl.), PageSpeed 98 (routenwerk) als Speed-Beweis,
  Kleinunternehmer Par. 19 UStG. Freigabe vor Bau, 1 Korrekturrunde, live erst nach Abnahme.
- **ALLE 7 LPs werden generiert**, nicht von Hand kopiert: `_lp/` (siehe unten). Seit
  2026-07-20 auch die kalten Ad-LPs. HTML-Dateien im Root NIE direkt editieren.
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
- [x] Copy-Inkonsistenzen angleichen: seit dem Cal-Swap (2026-07-20) sagen alle 7 Seiten "30 Minuten", Duz-CTA ist raus (geprueft 2026-07-20)
- [ ] "Gueltig 30 Tage" im Angebots-Briefkopf ist Claude-Zusatz -> bestaetigen oder raus
- [ ] Gruendungs-Abzug bewusst ohne feste Zahl (Chat-Verhandlung) -> so lassen?
- [ ] mutige Garantie ("zahlen erst bei Abnahme") nicht gesetzt = Marvins Cashflow-Entscheidung
- [ ] Umzugs-Prozess + Betreuungs-Umfang textlich noch duenn
- [x] **kalte Ad-LPs auf Generator umgestellt** (2026-07-20): `_lp/kalt.master.html` + `_lp/kalt.angles.mjs`, dabei Drift behoben ([MARKE]→MARVIN.WEB 14x, Footer-Rechtslinks →marvinwebdesign.de, DOMAIN-SWAP→marvin-web-lp.pages.dev)
- [ ] Vor Deploy der restlichen 6 LPs: nur noch Marvins Go (CF-Projekt existiert, CAL/DOMAIN-Swaps sind fest eingebaut; Staging-Kopie nach `_referenz/deploy.md`)
- [ ] Ads erst NACH LP-Freigabe texten (Message Match zur H1)

## Was ist JETZT relevant (Phase = Feinschliff/Freigabe)
- `_design.md` lesen (as-built), bevor irgendwas am Aussehen geaendert wird
- Warme LP aendern -> ueber `_lp/` generieren (nicht die HTML-Dateien direkt editieren)
- Geraete-/Verify-Fallen -> `_referenz/technik-patterns.md`
- Copy/Offer schaerfen -> Skills `cro`, `landing-page-copy`, `offers`; Frameworks Hormozi/Sanwarwala (`_referenz/hosting-referenz.md` 9.3c)
- Endkontrolle -> Agent `qa-polish`
- Vor Deploy -> `_referenz/deploy.md` + `_referenz/pflichtseiten-checkliste.md`

## _lp/ Generator (ALLE 7 Seiten)
Zwei Quellen, sieben Ausgaben. Warm: `_lp/warm.master.html` (Koerper) + `_lp/warm.channels.mjs`
(Kanal-Texte) -> angebot/karte/whatsapp/instagram.html. Kalt: `_lp/kalt.master.html` (Koerper) +
`_lp/kalt.angles.mjs` (Angle-Texte, inkl. der 2 Angle-Sektionen + FAQ als HTML-Bloecke) ->
kosten/eigentum/schnell.html. Bauen: `node _lp/build.mjs`. og:title folgt zwingend dem Titel,
geteilte Bauteile (Meta-Row, Wer-baut-das, Pakete, Ablauf, Footer) koennen nicht mehr driften.
Die HTML-Dateien im Root sind BUILD-ARTEFAKTE: nie direkt editieren, immer ueber `_lp/`.

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
- 2026-07-21: **Onepager-Preis 990 -> 790** in den Generator-Quellen (_lp Master + channels/angles)
  nachgezogen + `node _lp/build.mjs`; Streichpreis-Anker 1.178 EUR bewusst gelassen (Story "regulaerer
  Preis spaeter", jetzt groesserer Abzug -> bei der LP-Freigabe pruefen, ob der Anker so bleibt).
  NICHT committet, weil der Arbeitsbaum hier unkommittete WIP-Aenderungen einer anderen Session traegt
  (styles/site.js/404, neue _breakpoints/_varianten.html) - Preis-Aenderung liegt im selben WIP-Stand.
- 2026-07-21: **WhatsApp-Rolle abgegeben**: Marvin war mit der LP-Kollektion (Responsive/Design-
  Uebernahme) unzufrieden -> die Seite fuer den WhatsApp-Anwendungsfall wurde KOMPLETT NEU im
  Hauptprojekt gebaut: `projekte/marvin-web/angebot.html` (marvinwebdesign.de/angebot, erbt die
  echte styles.css). Die hiesige whatsapp.html ist fuer diesen Zweck ueberholt; Rest des 7er-Sets
  unveraendert in Freigabe-Warteschleife.
- 2026-07-21: **Kontaktnummer in den LPs nachgezogen** (der "site-weit"-Commit 17d7e55 hatte NUR
  projekte/marvin-web umgestellt, die LPs sind eine eigene Deploy-Einheit und blieben auf der alten
  0159 06453169 haengen). Alte Nummer -> neue Hauptnummer **0172 9718102** (Links wa.me/491729718102 +
  tel:+491729718102) in den editierbaren Quellen `_lp/warm.master.html` (3), `_lp/kalt.master.html` (5)
  und `404.html` (3), dann `node _lp/build.mjs` -> alle 7 LPs neu. `freigabe/` (Altlast, nicht deployed)
  bewusst NICHT angefasst -> traegt weiter die alte Nummer. Kein ?v-Bump (nur Text, CSS/JS unveraendert).
  karte.html im Browser gegengecheckt (Meta-Zeile + WhatsApp- + Anruf-Button = neue Nummer). Restliche
  6 Seiten per grep verifiziert (warm 3 / kalt 5 / 404 3 Treffer je Seite, keine alte Nummer mehr ausser freigabe/).
- 2026-07-20: **Pull-Quote-Umbruch mobil gefixt** (Marvins Review): "Ich baue Ihre Seite selbst.
  Von Hand, jede Zeile." brach bei 375px mitten im orangen Teilsatz ("... jede | Zeile." =
  Witwe). Fix: `.pull em` white-space:nowrap, der Teilsatz (156px) rutscht als Ganzes in
  Zeile 2, passt bis runter zu 320px. Nur kalte LPs betroffen (.pull existiert nur dort).
  styles.css v28->v29, mobil 375 verifiziert (Zeilen exakt gemessen, kein Ueberlauf).
- 2026-07-20: **"Wer baut das" in zwei Sektionen geteilt** (Marvins Review: "das sind mind. 2
  sections" - Portraet/About und Routenwerk-Showcase klebten ohne eigenen Kopf aneinander,
  DAS war die Spacing-Kritik). Kalt-Master: neue Sektion "Die Arbeitsprobe" (aux "Demo-Projekt
  Routenwerk", H2 "So sieht handgebaut aus.") mit .showcase + .facts; "Wer baut das" behaelt
  nur Portraet + About-Text. Nur kalte 3 betroffen (+7 Zeilen je Seite, warme unveraendert),
  im Pane verifiziert. Konstruktions-Muster in _design.md nachgezogen (Skelett + Generator-Hinweis).
- 2026-07-20: **Selbsttest auf eigentum ueberarbeitet** (Marvins Review: Fragen besser formulieren,
  Antwort-Satz "nein, nur gegen Aufpreis, nichts" grammatisch unverstaendlich). Die versteckte
  1:1-Zuordnung Satz->Fragen aufgeloest: jede Karte traegt ihre ehrliche Antwort jetzt SELBST
  (neues Bauteil .karte .antwort, dashed Trenner + Mono-Label + Wert in signal-deep, siehe
  _design.md). Fragen gestrafft (u.a. "Duerfen Sie ... umziehen?"), Lede unter den Karten
  entsprechend gekuerzt. Antworten fluchten ueber alle 3 Karten (flex + min-height), mobil
  geprueft (375). styles.css v26->v28 (v27 war ein Zwischenstand, Cache-Bump-Regel beachtet).
  OFFEN aus Marvins Review: "zwischen gewissen Elementen gar kein Spacing" - Messung ueber
  alle Sektionen (390/1280 per iframe) fand keine 0px-Stelle ausser gewollten Trennlinien-
  Listen (FAQ); Verdacht war die dichte Selbsttest-Karte (jetzt umgebaut). Marvin fragen,
  wo genau, falls es noch auftritt.
- 2026-07-20: **Kalte Ad-LPs auf den Generator umgestellt** (Marvins Ansage: eine Seite perfekt,
  Bauteile 1:1 kopieren statt driften lassen). Neu: `_lp/kalt.master.html` + `_lp/kalt.angles.mjs`,
  `build.mjs` baut jetzt beide Master. Roundtrip bewiesen: warme 4 byte-identisch, kalte 3 aendern
  sich NUR an den beabsichtigten Stellen: [MARKE]→MARVIN.WEB (14 Stellen, darunter der sichtbare
  Platzhalter im eigentum-Herotext), Footer-Rechtslinks marvin-web.pages.dev→marvinwebdesign.de,
  og:url/og:image DOMAIN-SWAP→marvin-web-lp.pages.dev. Browser-Check eigentum: rendert sauber,
  keine Konsolenfehler. Vorher belegte Drift-Analyse: geteilte Bloecke (Showcase/Pakete/Ablauf/
  Footer) waren zwischen den 3 kalten Seiten schon fast identisch, Drift sass in Marke/Links/og.
  _design.md: 4 ueberholte OFFEN-Eintraege auf ERLEDIGT gesetzt (Cal-Swap, 20/30 Min, du/Sie, Marke).
- 2026-07-20: **Showcase-Browser-Leiste auf Mobile verkleinert** (Marvin: "sieht oben echt gross aus",
  styles.css v25->v26): unter 560px bar-padding 11/16->7/10, Dots 10->8px, URL 12,5->11px (Hoehe ~56->42px);
  Desktop unveraendert. ?v ueberall einheitlich auf 26 (styles+site.js, inkl. _lp-Master). Mobil im Pane
  verifiziert. Live-instagram bleibt auf altem Stand (kein Showcase dort, naechster Deploy nimmt v26 mit).
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
