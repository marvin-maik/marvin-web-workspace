# baeckerei-siebert — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts. Nach jedem Meilenstein kurz mitziehen.

Stand: 2026-07-23 · Phase: **STAGING LIVE (noindex) auf Cloudflare Pages: https://baeckerei-siebert.pages.dev** — Breakpoint-Abnahme aller Seiten gruen, Deploy verifiziert. Naechster Schritt: Pitch-Material.

## Was & wo
- **Spekulations-Case / Kaltakquise**: unaufgefordert gebaute Vorschau fuer die Baeckerei & Konditorei
  Anke Siebert (Schoenfliesser Str. 12, 10439 Berlin). Ziel: Verkauf der neuen Website.
- Berlins aeltestes Baeckereigeschaeft, seit 1906, 5. Generation. **Jubilaeumsjahr 120 Jahre laeuft JETZT (2026)**
  und die Jubilaeumsseite der Alt-Site ist leer — das ist der Pitch-Aufhaenger.
- Fakten/Copy-Quelle: `product-marketing-context.md` (komplett aus Live-Crawl der Alt-Site belegt).
- Design-Dossier + Animationsplan: `freigabe/design-richtung.md`.

## Feste Entscheidungen (NICHT neu aufrollen)
- **Generationenfolge (KORRIGIERT 2026-07-23, Marvins Quellen museum-digital/tagesspiegel/bz):**
  1. Gustav (1865-1929, Gruender 1906) 2. **Otto Siebert (1897-1968, NEFFE, ab 1929 nach Gustavs
  Tod)** — NICHT "Albert" (das war ein Fehler frueher Recherche) 3. Bodo (geb. 1934, DDR) 4. Lars
  (1990-2021, ohne "Catrin" auf der Site) 5. Dr. Anke (seit 2021, Wirtschafts- UND Umweltwissenschaftlerin).
  B.Z. beschriftet das 1936er-Foto faelschlich mit "Gustav" (unmoeglich, 1929 tot).
  Details: product-marketing-context.md Abschnitt 0b.
- **Ein echtes Foto pro Generation eingebaut (Marvin 2026-07-23, Commit 60d7ca8):** `img/gen-1906.jpg`
  (Fein-Baeckerei-Front), `gen-1929-otto.jpg` (30-Jahr-Jubilaeum 1936, "Inhaber Otto Siebert"),
  `gen-ddr-bodo.jpg` (DDR-Verkauf), `gen-1990-lars.jpg` (Theke Wende-Zeit), `gen-2021-anke.jpg`
  (aktuelles Team Anke). Verwendet in index (Zeitband + Hero), geschichte (Der Ort + Familien-Foto),
  familie-varianten (alle 3 Varianten). `laden-front-historisch.jpg` dadurch entfernt.
- **Design-Richtung = C ("Aus der Tuete"), mit dem ECHTEN Marken-Look** (Marvin 2026-07-22):
  Baeckerei-Rot + Gold + Loewen-Brezel-Wappen + Schreibschrift, NICHT das v1-"Zeit-Haus"
  (Gruen/League Gothic) und NICHT die kraftbraune C-Urfassung. Marke ist bewusst "authentisch
  unperfekt". Feinentscheid C1 vs C2 vs Mix steht noch aus. ECHTES Wappen + neue Ladenfront-/
  Team-Fotos vom Kunden besorgen (SVG-Wappen ist nur Platzhalter).
- **Spekulations-Case-Schutz**: Vorschau IMMER mit noindex; keine Rechtstexte kopieren.
  Impressumsdaten nur als Platzhalter.
- **Echtes Logo vorhanden (Marvin, 2026-07-22):** `freigabe/konzepte/siebert-logo.svg` (762x762,
  ~205KB, Vollfarbe: rote Loewen #b42222, Krone, Brezel im Schild, "SIEBERT"). In D1b eingesetzt
  (Header/Tueten-Block/CTA/Footer als <img>). Ersetzt die SVG-Nachempfindung. Fuer den Build:
  auch nach `img/` + ggf. optimieren (SVGO), da 205KB und mehrfach referenziert.
- **Bilder (Marvin, 2026-07-22): Die Fotos der Baeckerei kommen in die Vorschau.** Appetit ist
  Gestaltungsprinzip (Waerme, Geruch, Gefuehl). Vertretbar, weil der Pitch an die Rechteinhaberin
  selbst geht und die Vorschau bis zum Deal privat/noindex bleibt. NICHT oeffentlich bewerben.
  Sichtungskopien 800px + Original-URLs (2600px): `_src/bilder-alt/` + MANIFEST.md.
  Zuordnung pro Seite/Sektion: `freigabe/bildkonzept.html`.
- Bestellungen laufen laut Alt-Site NUR telefonisch/im Laden -> Vorschau ohne echtes Formular
  (Torten-CTA = Telefon). Formular erst nach Kundengespraech.
- Referenz-Templates fuer Animationen (Marvin, 2026-07-22): Framer "Luna Rossa" (lunarossa.framer.website)
  + "Bakeat" (bakeat.framer.website). Analyse steht in `freigabe/design-richtung.md` — nicht neu ausleseen.
- KEIN Scroll-Hijacking/Smooth-Scroll-Wrapper wie in den Framer-Demos (Fundus-Regel: natives Scrollen
  nie kapern; sticky + IntersectionObserver stattdessen).

## Offene Punkte
- [x] **Zahlen-Band = 4D "Split-Regal" LIVE in index.html + styles.css** (Marvin "go", 2026-07-23).
  Portiert mit eigenen Klassen (`.zb-hell`/`.zahlen .zk`/`.zb-dunkel`/`.zb-rating`/`.zb-stars`/`.zb-chip`),
  `.zahlen-band{padding:0;overflow:hidden}` gegen globales section-Padding -> nahtlos Hero(Oat)/Zeitband(Crumb).
  Karten `.zk` statt `.z` -> **`.z`-Kollision behoben**. Count-up bleibt (1906/5/16; "2×" = `<span data-ziel=2>`
  + Text-×, ueberlebt). Inhalt: 4 Karten + Google 4,7 (SVG-Sterne, [live bestaetigen]) + Chips Publikumsliebling
  2026 / Goldene Brezel / 100-Punkte-Brotpruefung ([2 zu bestaetigen], TODO-Kommentar im HTML). _design.md
  mitgezogen (Komponenten-Zeile + Breakpoint 760 + Muster-3). Verifiziert LIVE @1280 (nahtlose Uebergaenge,
  Count-up laeuft, Sterne gold 94%, 0 Konsolenfehler) + @375 (2-spaltig, 0 Overflow, beide Nahtstellen 0).
  Count-up friert im Preview-Pane ein (bekannte rAF-Macke, kein Bug; Endwerte belegt 1906/5/16/2×). NICHT
  committet (unverwandte LP-Aenderungen im Working Tree). Historie (Wahl-Prozess V1-V4 -> 4A-4D -> 4D) unten.
- [~] **Zahlen-Band Varianten-Historie** (2026-07-23). Vergleichsblatt `freigabe/konzepte/zahlen-varianten.html` (intern, noindex,
  verlinkt echtes styles.css). V1 "Gravur" (Gold-Ziffern direkt aufs Band, Gold-Haarlinien-Trenner,
  doppelte Schild-Zierkante = design-systemtreu, MEINE EMPFEHLUNG) · V2 "Prägung" (jede Zahl auf
  geprägter Gold-Medaille, Auszeichnungs-Welt) · V3 "Preisschild" (die warmen Zettel absichtlich +
  richtig: EINE Lichtrichtung, Rotation ±2,5°, KONTRAST-FIX Labels dunkel statt tan) · V4 "Mit
  Vertrauen" (Gravur-Basis + Trust-Zeile: Google 4,7 mit echten SVG-Sternen + Auszeichnungs-Chips
  Goldenes Ticket/Publikumsliebling — passt unter jede der drei Basen). **BUG entdeckt:** im Live-Build
  kollidieren zwei `.z`-Klassen (Chronik-Zettel Z.246 + Zahlen-Zelle Z.160) -> die Statistik-Zahlen
  erben versehentlich den weissen Zettel-Look UND die Labels stehen tan #D9C7A3 auf weissem Papier
  (Kontrast bricht). Genau der Zustand auf Marvins Screenshot. Nach Wahl: Gewinner mit EIGENEM,
  namespaced Selektor (nicht `.z`) in styles.css portieren -> Kollision endgueltig weg; Google-Wert
  4,7 + Anzahl vor Launch live bestaetigen (steht schon offen unten); _design.md mitziehen.
  Verifiziert @1280 + @375: 0 Overflow, Sterne gold + 4,7-Teilfuellung korrekt, V3-Kontrast dunkel.
  **RUNDE 2 (Marvin-Wunsch 2026-07-23): 4 V4-Fassungen mit variierendem Hintergrund + V3-Karten
  eingewoben** -> `freigabe/konzepte/zahlen-v4-varianten.html`. 4A "Warme Wand" (Oat-Grund, weisse
  Karten, Trust auf EINER dunklen Gold-Plakette) · 4B "Rotes Plakat" (Marken-Rot-Grund, Creme-Zahlen,
  weisses V3-Ticket mit roten Sternen) · 4C "Kassenbon" (Papier-Grund, Fuehrungspunkt-Bon Muster 14,
  rote Sterne, GANZ hell) · 4D "Split-Regal" (Grund geteilt Oat/Crumb, Karten auf der Naht, Trust auf
  der dunklen Haelfte in Gold). Geloest: Gold-nur-auf-dunkel-Regel -> auf hell Sterne ROT bzw. dunkle
  Gold-Insel. Reuse: `.karte-fakt` (V3-Karte) + gemeinsame `.stars`-Komponente (SVG-Sprite, Teilfuellung
  via --pct-Breite; Farbe gold/rot per Modifier). Verifiziert @1280 + @375: 0 Overflow, Sternfarben +
  4,7-Teilfuellung korrekt. Wartet auf Marvins Richtungswahl (V-Reihe ODER 4A/B/C/D, Mischen moeglich).
  **ENTSCHIEDEN 2026-07-23: 4D "Split-Regal" gewaehlt** (Begruendung Marvin: die Section darunter
  = Zeitband ist auch braun -> nahtloser Uebergang). Finale Fassung `freigabe/konzepte/zahlen-4d-final.html`.
  Award-Set nach Marvins Wahl (Frage-Runde): Feinschmecker 2013/2017 + Publikumsliebling 2026 (beide
  belegt) + Goldene Brezel der Innung + 100-Punkte-Brotpruefung (beide [zu bestaetigen]); B.Z.-Leserwahl
  NICHT rein; **Goldenes Ticket RAUS** aus der Award-Reihe (ist die Jubilaeums-Verlosung, keine
  Praemierung). Feinschmecker-Karte OHNE "seit 2004" (Marvin per Element-Auswahl gestrichen). Google 4,7
  bleibt Rating-Star, [live bestaetigen]. Struktur final: heller Block (.hell, Oat, Karten mit neg.
  margin-bottom ueberlappen die Naht) + echter Dunkelblock (.dunkel, Crumb) als LETZTES Element ->
  stoesst buendig ans folgende dunkle Zeitband. **PORT-FALLE gelernt:** globales `section{padding-block:
  clamp(48,8vw,92)}` aus styles.css schlaegt auf JEDE `<section>` durch -> hier 92px oat oben/unten =
  Naht-Streifen; Fix `padding:0` auf die Band-Section (bzw. `<div>` statt `<section>` auf Konzeptblaettern).
  Naechster Schritt: 4D in echte index.html + styles.css portieren (namespaced Selektor, loest zugleich
  die `.z`-Kollision), 375/768/1280 testen, _design.md mitziehen; 3 [zu bestaetigen]-Punkte als
  Platzhalter markieren bis Live-Check (Google 4,7, Goldene Brezel, 100-Punkte-Pruefung).
- [x] **Jubilaeums-Sektion (geschichte.html): LIVE gebaut** (Marvin "go", 2026-07-23). `.jub-*` aus
  `jubilaeum-final.html` in styles.css portiert (Block nach `.gewinner`) + in geschichte.html das alte
  einfache `.fascia`-Band ersetzt; _design.md mitgezogen. Live verifiziert @1280 (Headless-Render mit
  #jubilaeum + virtual-time -> Reveals feuern, Ticket + Kalender korrekt) + @375 (Pane: 0 Overflow, Ticket
  ->Spalte, Perforation horizontal, Wochen 2-spaltig): 1 h1, 0 doppelte IDs, kein verwaister `.gewinner`,
  Ticket-Rotation erhalten (data-rv NICHT aufs Ticket), Siegel 47px, Konsole leer. Historie/Detail unten
  im Log + `freigabe/konzepte/jubilaeum-final.html` (finale Vorlage) + `jubilaeum-varianten.html` (Archiv
  der 3 Ausgangs-Varianten). Offen bei Anke: exakte Wochenzahl (Kalender = 8 Platzhalter-Wochen) + dass
  Bekanntgabe der Nummern ueber IG/FB laeuft (nicht Website). Nicht committet (LP-Aenderungen im Working
  Tree). Historie zum Weg (3 Runden Feedback): erst 3 Varianten gebaut (`jubilaeum-varianten.html`:
  V1 "Jubilaeums-Fahrplan" 3-Phasen-Zeitstrahl / V2 "Goldenes Ticket" Ticket-Objekt / V3 "Fenster-Plakat"
  hell-typografisch). **WICHTIGE ENTSCHEIDUNG (Marvin): Die Website fuehrt KEINE Losnummern.** Woechentliches
  Nachtragen ist genau der Aufwand, den Instagram ueberfluessig macht -> alle Nummern/Ziehungen laufen ueber
  IG/FB, die Sektion erklaert nur die Aktion + schickt zum Folgen (der alte `.gewinner`-Platzhalter-Block UND
  der Satz "hier fuehren wir alle Nummern auf" sind RAUS). **Finale Fassung** = Marvins Wahl "V2-Ticket oben
  + Woche-fuer-Woche drunter": goldenes Ticket als Blickfang (Gold-Flaeche auf --crumb, dunkle Tinte,
  perforierter Abriss "Nr. — — —"/"Ziehung Oktober", Symbol nicht Pflegefeld) -> Ziehungs-Kalender "Der
  Ziehungs-Sommer" (Aug/Sep je 4 weisse Wochen-Zettel wie V3, roter Nadelstreifen oben, aktive Woche mit
  rotem Rahmen + "als Naechstes"; zeigt WANN + "120 Preise/Woche", KEINE Nummernfelder) -> Instagram/Facebook-
  Verweis. Karten in WEISS auf Marvins Wunsch (paper-Zettel auf dunklem Band); Akzent dort ROT (Gold darf
  nicht auf hell). Oktober-Hauptpreis braucht keinen eigenen Balken (steckt schon im Ticket-Abriss) -> Marvin
  fand den Gold-Stern-Finalbalken "haesslich", ist entfernt. Fixes beim Bauen: `.j2/.jf-seal` inline-span ->
  `display:block` (Logo brach sonst riesig aus); `.jf-wo .n` -> `display:block`, damit das "als Naechstes"-Tag
  UEBER "Woche 1" sitzt statt daneben. Verifiziert @1280 (Headless-Render) + @375 (Pane-Messung sauber:
  0 Overflow, Ticket->Spalte, Perforation horizontal, Wochen 2-spaltig); Kontraste system-treu (Gold nur auf
  --crumb, Rot einzige Signalfarbe auf hell). MERKE: Pane meldet zeitweise vw:0 (Messung unbrauchbar) + Chrome-
  headless erzwingt ~500px Mindestbreite (Mobile-Screenshot <500 taeuscht Row-Layout vor) -> Sicht-Check per
  Headless @1280 + Pixelspalten-Scan der dunklen Baender, Mobile-Layout per Pane-JS messen. Nach Marvins "go":
  `.jf-*` als `.jubi-*` in styles.css portieren, live in geschichte.html (ersetzt das aktuelle einfache
  Fascia-Band), _design.md mitziehen. Offen bei Anke: exakte Wochenzahl (Kalender = 8 Platzhalter-Wochen,
  passt sich an) + dass Bekanntgabe ueber IG/FB laeuft (nicht Website). Nicht committet (LP-Aenderungen im
  Working Tree). Dev: Port 8793.
- [x] **Sortiment-Layout = Konzept 1 "Editorial-Split" LIVE in sortiment.html + styles.css** (Marvin
  gewaehlt + "so lassen, jetzt live bauen", 2026-07-23). Neu in styles.css (Block "Sortiment: Editorial-
  Split" nach `.anker`): `.tafel-gruppe` ab 1024px Grid Foto\|Tafel, `.foto-rechts` spiegelt die Seite;
  Liste bekommt die BREITE Spalte (`0.9fr/1.1fr`, bei foto-rechts `1.1fr/0.9fr`) -> Award-Notiz bleibt
  1-zeilig (Site-`.wrap` ist nur 1090 -> Listenspalte sonst zu schmal); `.tafel`/Notiz dort max-width:none;
  `.tafel-foto` aspect 4/3 ab 1024. Global `.tz span:last-child{text-wrap:balance}`. Award-Notiz responsiv
  `.nz-voll`(>=640)/`.nz-kurz`"Publikumsliebling 2026"(<640). Markup sortiment.html: 3 Gruppen jetzt
  `.tafel-foto` + `.tafel-text`(h2/Sub/Liste), Kuchen-Foto von unten in die Spalte gezogen. Verifiziert
  LIVE @1280: 3 Gruppen Grid, Alternation L/R/L, Award-Notiz-Hoehe 24px=1 Zeile, Freisteller-Schnecke sauber
  im 4/3-Rahmen, 0 Overflow, Konsole leer; @390: gestapelt/block, KURZ-Notiz, 16/10-Foto, 0 Overflow;
  index.html gegengetestet: kein `.tafel-gruppe` -> `.tafel` 680px + `.anker` 21/9 unveraendert. _design.md
  mitgezogen. Konzepte 2 (Auslage-Raster) + 3 (Wandtafel) bleiben als Alternativen im Vergleichsblatt.
  NICHT committet (unverwandte LP-Aenderungen im Working Tree). Dev: Port 8793.
- [x] **Saison-Bereich LIVE in sortiment.html (V2 "Zur Saison aus dem Ofen")** (Marvin "go", 2026-07-23).
  Der alte Einzeiler ist ersetzt durch das Fascia-Spotlight: `.saison` (baut auf `.fascia auf-dunkel`)
  in styles.css nach dem `.fascia`-Block; Markup in sortiment.html zwischen Kuchen-Gruppe und cta-warm.
  EINE Fokus-Saison gross (Pinyon-h2 "Zur Saison" + Label + "Christstollen" + Notiz + "Als Naechstes"-Tag)
  neben schlankem Foto (brotschieber), darunter 2 Gold-Chips (Osterzopf/Ostern, Berliner/Silvester).
  Foto-Ratio je BP wie mit Marvin abgestimmt: mobil 16/10, Tablet 3/2 (Nativ 1200×800, kein Crop),
  Desktop 2/3 + Spalte clamp(240,26vw,320) = 300×450 (nicht mehr dominant). Verifiziert live @375/768/1280:
  Ratios exakt, 0 Overflow, 1 h1, Heading-Outline sauber (Brote/Broetchen/Kuchen/Zur Saison/Torten),
  Kontraste crumb AA+ (gold-l 6.01:1, paper 11.6:1, Notiz 9.78:1), Konsole leer. Reveal identisch zum
  Rest der Seite (Pane friert Reveals ein = bekannte Macke, kein Bug; per Vergleich mit bestehenden
  data-rv bestaetigt). _design.md mitgezogen (Komponente + Seiten-Inventar + Known Gap).
  **UPGRADE 2026-07-23 (Marvins Wunsch): Spotlight jetzt TABS mit Datums-Default.** Die 2 Chips sind
  jetzt 3 echte ARIA-Tabs (Ostern/Weihnachten/Silvester), je ein Panel mit eigenem Foto (zoepfe-blech/
  brotschieber/haende-kneten = Platzhalter). site.js (neues 4. IIFE) oeffnet per Monat die relevante
  Saison zuerst (Jan+27.-31.Dez=Silvester, Feb-Apr=Ostern, Mai-Dez26.=Weihnachten) und zeigt "Als
  Naechstes" nur dort. Progressive Enhancement ueber `.saison.tabs-an` (ohne JS alle 3 gestapelt, Tabs
  aus -> kein toter Button). Tastatur: Pfeile/Home/End + Roving-Tabindex. Verifiziert live @375/1280:
  Datums-Default heute=Weihnachten, Tab-Wechsel + Foto-Swap, Tastatur, Fallback (3 gestapelt), 0 Overflow,
  1 h1, aktiver Tab crumb-auf-gold-l 6.01:1, Konsole leer, node --check ok. (a) STATISCHER Fokus damit
  GELOEST. OFFEN vor Public-Launch: (b) konkrete Gebaecke (Stollen/Osterzopf/Berliner) + (c) die
  Saison-Fotos (Platzhalter, kein echtes Produktfoto je Saison, Silvester-Berliner hat gar keins) bei
  Anke bestaetigen; Desktop-2:3 croppt die Querformate hart -> echte Hochkant-Saisonfotos ideal.
  Nicht committet (LP-Aenderungen im Working Tree). Vergleichsblatt bleibt: `freigabe/konzepte/saisonal-varianten.html`
  (intern, noindex): V1 "Jahreslauf" (3 gleichrangige Saison-Karten, hell/typografisch, roter
  Nadelstreifen, wartungsfrei) · **V2 "Zur Saison aus dem Ofen" = Marvins Wahl** (dunkles Fascia-Band
  + Foto brotschieber, EINE Saison gross + 2 Gold-Chips, Fokus-Teil pro Saison umzustellen) · V3
  "Der Baecker-Kalender" (STATISCHES Jahresband, 3 Stationen, Motiv-Reim zum Zeitband ohne Scroll).
  V2-FOTO-FEEDBACK Marvin "Bild zu gross": Ratio jetzt je Breakpoint (mobil 16/10 wie die anderen
  Speisekarte-Bilder, Tablet 3/2 = Nativ-Ratio 1200x800 also kein Crop, Desktop 2/3 Hochformat +
  Bildspalte auf clamp(240,26vw,320) gedeckelt -> 300x450 statt vorher ~411x514). width/height auf
  echte 1200x800 korrigiert (war faelschlich 1500). Desktop-2:3 croppt das Querformat hart, sitzt
  aber (object-position 50% 38%, Hand+Schieber+Teigling im Bild). Tablet-Alt 19:6 waere 1-Zeilen-Swap.
  Verifiziert @375/768/1280 (Ratios exakt, 0 Overflow, Kontraste dunkel AA+ gold-l 6.01:1/Notiz 9.78:1),
  Konsole leer. WICHTIG: Belegt ist nur *dass* zu Weihnachten/Ostern/Silvester saisonal gebacken wird;
  konkrete Gebaecke (Stollen/Osterzopf/Berliner) sind Beispiele -> bei Anke bestaetigen. Nach Go: V2 in
  echte sortiment.html (ersetzt den Einzeiler), styles.css-Selektoren .s2-* portieren, dann _design.md
  mitziehen. Nicht committet (LP-Aenderungen im Working Tree).
- [x] **Besuch-Desktop = Variante A "Tuerschild" LIVE** (Marvin "definitiv A", 2026-07-23). In
  besuch.html + styles.css gebaut (Selektoren `.hero-split`/`.hero-split-foto`/`.zeiten-split`/
  `.zeiten-panel`/`.zeiten-neben`/`.kontakt-foto`, kommentierter Block "Besuch" in styles.css). Alles
  Neue NUR @media(min-width:960px); mobil byte-gleich zur alten Seite (verifiziert live 375: Hero-Foto
  aus, Tabelle Originalrahmen 540px, Kontakt-Foto 4:3, 0 Overflow, 1 h1). Hero-Foto team-gaerkoerbe
  als kontrollierter Crop `aspect-ratio:3/4` + object-fit cover (object-position center 42%; Ratio
  3:4 final gewaehlt statt 1:1, Marvin 2026-07-23). Interne _besuch-*.html geloescht. _design.md
  mitgezogen. Erledigt; kein Feinschliff offen.
- [ ] **Marvin: Design-Richtung freigeben** (`freigabe/design-richtung.md` + `freigabe/storyboard.html`)
- [ ] Hinweis: design-scout hat auch `_fundus/highlight-elemente.md` ergaenzt (Muster 12b
  Fascia-Baender). Fundus-Datei hat UNVERWANDTE offene Aenderungen aus der LP-Session ->
  nicht von hier aus committen, gehoert zum anderen Arbeitsstrang
- [ ] Build: restliche Alt-Site-Bilder sichten (64a7e-Serie komplett, picture-2600-Serie,
  P1170491_CMYK vor Web-Einsatz konvertieren) — Liste in MANIFEST.md
- [x] **Variante C freigegeben + LIVE in geschichte.html verdrahtet** (Marvin "go", 2026-07-23).
  Komponente in styles.css (`.iv`/`.gen`/`.medaille`/`.schwebe`/`.gen-modal`) + site.js (2. IIFE)
  portiert, statisches `<details>`-Akkordeon = No-JS/Mobile-Basis, Desktop-Upgrade hinter
  `html:not(.no-js)` + `@media hover:hover`. Reicher belegter Text je Generation (Verwandtschaft +
  Lebensdaten + Fakten) in data-* + `.inhalt`. _design.md mitgezogen. Verifiziert: Modal-Logik +
  Preload (JS-State), Mobile-/Desktop-Look (headless-Render), keine Konsolenfehler, node --check ok.
  Alte `.zettel gen-liste` ersetzt; grosse Anke-Schlussfigur bleibt. Historie zur Mechanik:
  Mobil bleibt Akkordeon (freigegeben),
  jetzt mit REICHEREM Text je Generation (Verwandtschaft + Lebensdaten + belegte Fakten).
  Desktop = Chronik-Index (Zeilen Jahr+Name+Verwandtschaft) + FREI SCHWEBENDES Foto (folgt
  Cursor, wechselt pro Zeile); roter Nadelstreifen-Wipe waechst in der Breite. NEU: KLICK auf
  eine Zeile oeffnet ein Detail-MODAL (grosses Foto + ganze Geschichte, wie mobil) — barrierefrei
  (role=dialog/aria-modal, Fokus-Falle, Esc, Backdrop-Klick, Fokus-Rueckgabe an die Zeile).
  Verwandtschaftskette (belegt, product-marketing-context 0b): Gruender Gustav -> Neffe Otto ->
  dessen Sohn Bodo -> dessen Sohn Lars -> dessen Tochter Dr. Anke (Ururenkelin Gustavs).
  Alle Copy in GENS-Array (voll/rolle/daten/lang), nur A/B nutzen weiter kurze text-Felder.
  Robustheit aus 3-Facetten-Recherche: Tastatur-Paritaet, @media hover:hover-Gate (Touch=Akkordeon),
  reduced-motion, position:fixed => null CLS, 5 Fotos vorab im DOM. Gebaut + verifiziert in
  `freigabe/konzepte/familie-varianten.html` (Logik per JS-State, Look per headless Forced-Desktop-Render;
  Browser-Pane-Screenshot im Sandbox liefert leere Frames -> nicht nutzbar).
- [ ] Foto-Luecken: aktuelles Ladenfront-Aussenfoto (Besuch + OG-Bild) besorgen; Torten-Mini-
  Shooting als Upsell notieren (Generationen-Fotos jetzt komplett echt, s.o.)
- [ ] Danach: Skill `struktur-wireframe` (Freigabe-Dokument + Lo-Fi-Wireframe), dann Build
- [ ] Lueckenliste fuers KUNDENGESPRAECH ist GESCHRUMPFT (Marvins Recherche 2026-07-22, Kontext
  Abschnitt 0b): Generationen + Jubilaeums-Mechanik + OePNV jetzt Presse-belegt, nur noch
  BESTAETIGEN. Weiter offen: Du/Sie, Tortenvorlauf, Bewerbungsweg, Englisch, Preise online,
  Fruehstuecks-WIDERSPRUCH (Alt-Site vs. Recherche), "Ost-Schrippe" als Tafel-Name
- [ ] Vor Build LIVE pruefen: Google-Sterne (4,7), "Feinschmecker seit 2004", OePNV-Fussweg
- [ ] Pitch-Material (Anschreiben/QR-Flow wie angebot-LP) erst NACH fertiger Vorschau

## Was ist JETZT relevant
- **BUILD v2 steht** (Commit 2e484d1): alle 6 Seiten + Pflichtseiten im Design "Warmes Regal" (D1b),
  echtes Wappen (img/siebert-logo.svg), Design-System in styles.css. Dev-Server: `python3 -m http.server`
  im Projektordner (kein launch.json-Eintrag noetig). qa-polish + design-md laufen -> Befunde einarbeiten.
- **STAGING LIVE: https://baeckerei-siebert.pages.dev** (noindex bleibt, URL privat halten). Bei
  Aenderungen: ?v bumpen + Deploy-Rezept siehe Log-Eintrag "Breakpoint-Abnahme + STAGING-DEPLOY".
  Naechster Schritt: Pitch-Material (Anschreiben/QR-Flow).
- Vor Kunden-Launch offen: echte Rechtstexte, aktuelles Ladenfront-Foto, Preise-auf-Tafel (ja/nein),
  Fruehstuecks-Widerspruch, Ost-Schrippe-Naming, Google-Sterne/Feinschmecker-Zahl live pruefen.
- Design-Historie (v1 Zeit-Haus verworfen, Konzepte A/B/C, C1/C2/C3, D1/D2, Sieger D1b) steht im
  Log unten + `freigabe/konzepte/uebersicht.html`. QA-v1-Befunde sind mit dem v2-Neubau groesstenteils
  gegenstandslos (Zeiten-scope, Bild-lazy, Tafel-Highlight jetzt korrekt); die aktuelle QA v2 laeuft.

## Log (Neuestes oben)
- 2026-07-23: **Zeilenumbrueche nach Sinneinheiten, sitewide** (Marvin am Staging-Screenshot:
  "check all breakpoints, wrap better", mit konkreten Wunsch-Umbruechen). Loesung statt fester
  `<br>`: Utility `.wg{display:inline-block}` in styles.css — haelt eine Wortgruppe zusammen,
  Umbruch faellt nur ZWISCHEN Gruppen; passt eine Gruppe nicht in die Zeile, bricht sie intern
  (kein Overflow-Risiko, funktioniert auf JEDEM Breakpoint ohne Media-Queries). Dazu global
  `p{text-wrap:pretty}` gegen Einzelwort-Waisen. In Sinneinheiten gesetzt: Leads aller 7 Seiten
  (index/geschichte/sortiment/besuch/torten/ausbildung/404), beide `.tafel-sub` (Brote/Broetchen),
  alle 3 `.saison-note`, geschichte-CTA-Adresszeile. `?v=5` sitewide (styles.css geaendert).
  Verifiziert live @320/375/768/1280: 0 Overflow ueberall, keine Gruppe muss intern brechen,
  geschichte-Lead bricht exakt wie von Marvin gewuenscht ("Fuenf Generationen Familie Siebert. /
  Eine Adresse: Schoenfliesser Strasse 12, / Prenzlauer Berg."), sortiment-Lead + Subs ebenso.
  Design-Regel als Konstruktions-Muster 8 in _design.md. **DEPLOY OFFEN:** wrangler-Aufruf vom
  Permission-Classifier blockiert — Staging-Kopie liegt geleakcheckt bereit, Marvin muss den
  Deploy-Befehl aus deploy.md selbst ausfuehren (zieht dann auch die Bild-Diaet mit hoch).
- 2026-07-23: **Bild-Diaet: JEDES ausgelieferte Bild < 200 KB** (Marvin nach PageSpeed-Report Mobil 78,
  LCP 4,6s, "1.324 KiB Einsparung"): alle 18 Dateien > 195 KB in `img/` per Pillow neu encodiert
  (progressive, EXIF-frei, adaptiv q80->q60; Skript-Muster im Scratchpad `shrink.py`). Nur 2 mussten
  zusaetzlich skaliert werden: brotregal.jpg 1600->1360px (489->185 KB, war mit 501 KB der LCP-Bremser)
  + auslage-regal.jpg 1120->1000px (238->176 KB, q68 statt Notnagel-q60 nachgebessert); width/height-
  Attribute in index.html (2x) + sortiment.html (1x) nachgezogen. Rest unveraendert in den Massen
  (gen-Serie, schlingen-hand, zoepfe-blech, goldene-brezel-gruppe, team-*, laden-*, broetchen-blech
  usw., auch die 4 aktuell unreferenzierten, weil img/ komplett deployed wird). Groesste verbleibende
  Datei: haende-kneten.jpg 192 KB. Originale gesichert im Session-Scratchpad `img-backup/` (fluechtig;
  echte Quellen weiter in `_src/`). Verifiziert: alle 16 referenzierten JPEGs dekodieren im Browser
  (createImageBitmap-Sweep), brotregal laedt mit 1360x907 = Attribut-Match, Sichtcheck Sortiment ok
  (Pane-Scroll fror ein = bekannte Macke). KEIN ?v-Bump noetig (styles/site unveraendert). PSI-Kontext:
  SEO 66 = noindex-Absicht; CLS 0,133 (Font-Swap) + Render-Blocking offen, falls Marvin >90 will.
  NOCH NICHT deployed — CF-Staging zeigt weiter die dicken Bilder, bis neu deployt wird (Rezept s.u.).
- 2026-07-23: **Breakpoint-Abnahme ALLER Seiten + STAGING-DEPLOY auf Cloudflare Pages** (Marvin:
  "Pruefe alle Seiten auf alle Breakpoints, Home zuletzt, dann Cloudflare frei"). Alle 9 Seiten
  (ausbildung/besuch/geschichte/sortiment/torten/404/impressum/datenschutz/index) live @375/768/1280
  geprueft: 0 Overflow, keine kaputten Bilder (gen-* in zugeklappten details = lazy, korrekt),
  1 h1/Seite, Konsole leer; Saison-Tabs, Gen-Modal (Klick + Esc), Editorial-Split-Alternation und
  Zahlen-Band-Naht funktionieren. EIN Fix dabei: `a[href^="tel:"]{white-space:nowrap}` in styles.css
  (Telefonnummer brach auf torten.html Schritt 01 mitten in der Nummer um); auf allen Seiten
  gegengetestet. Danach `?v=4` SITEWEIT vereinheitlicht (war 2/3 gemischt). Deploy: CF-Projekt
  `baeckerei-siebert` angelegt, Staging-Kopie in Scratchpad per rsync (INTERN-Excludes wie deploy.md),
  Leak-Check ok (nur _headers als _-Ausnahme drin), 56 Dateien deployed. Verifiziert ueber
  Deployment-URL https://69e587d0.baeckerei-siebert.pages.dev + Prod-URL: GET / -> 200 mit
  `x-robots-tag: noindex` ✓ (curl-Gegenprobe; HEAD liefert dort irrefuehrende Header, GET nutzen),
  ?v=4 im HTML ✓, _lotse/_design/product-marketing-context/freigabe/_src -> alle 404 ✓, .html-URLs
  -> 308 Clean-URL-Redirect (CF-Standard, ok). Live: **https://baeckerei-siebert.pages.dev** (privat
  halten, noindex bleibt bis Deal). MERKE: Browser-Pane cachte styles.css ueber Parallel-Session-
  Edits hinweg -> vor Messungen force-reload, sonst Geister-Overflow (alte Grid-Regel @768).
- 2026-07-23: **Sortiment-Teaser-Bild jetzt responsive Ratio** (Marvin: "mobile & tablet 16:9 ratio").
  Das Hochformat-Regal war auf klein zu dominant (fuellte fast den Viewport). Loesung: Ratio + Split
  ueber CSS (Inline entfernt) -> `.sortiment-split .anker img{aspect-ratio:16/9}` (mobil+tablet, volle
  Breite, gestapelt), ab **1000px** `aspect-ratio:3/4` + Grid `520px 1fr` (Split). Split-Breakpoint von
  760 auf 1000 gehoben, damit Tablets (auch quer <1000) das kompakte 16:9-Band bekommen statt Split.
  Verifiziert @390 (16:9), @768 (16:9 volle Breite), @1280 (3:4-Split), 0 Overflow. _design.md mitgezogen.
- 2026-07-23: **Zeitband mobil auf kompakte Jahres-Leiter eingedampft** (Marvin: "auf Mobile kann
  die geschichte viel kuerzer, haben dafuer ja die richtige unterseite"). Unter 900px (statische
  `.zb-liste`, kein Scrolly) sind die Fliesstext-Absaetze jetzt aus (`.zb-liste .st p{display:none}`)
  + Zeilen enger (padding 13px, b-Groesse gedeckelt 34px) -> Sektion @375 von ~1150px auf 440px
  (6x Jahr+Name + "Die ganze Geschichte"-Button, der zur geschichte.html fuehrt). CSS-only, gilt
  auch Tablet <900 (gleiche Listen-Ansicht). Desktop unberuehrt: Scrolly liest die p-Texte weiter
  per JS (verifiziert @1280: scrolly aktiv, Stage-Text voll, 6 Punkte), No-JS-Desktop (>=900)
  behaelt die Langtexte. Konsole leer. _design.md mitgezogen. Nicht committet.
  NACHTRAG (Marvin): Jahres-Leiter um kleine Verwandtschafts-Zeile ergaenzt — neuer
  `<span class="wer">` je Generation in index.html (Labels 1:1 von geschichte.html: Der Gruender /
  Gustavs Neffe / Ottos Sohn / Bodos Sohn / Lars' Tochter; 2026 "heute" bewusst ohne). CSS
  `.zb-liste .st .wer` = Mono-Caps 11.5px #C9B79C (Stil wie Zahlen-Karten-Labels). site.js liest
  fuer den Scrolly nur `.st p` -> Stage-Text bleibt sauber (verifiziert @1280, kein Label-Leak).
  @375: 6 Zeilen Jahr+Name+Rolle, Sektion 551px (vorher 440, mit Langtexten ~1150). Zeigt sich
  auch im No-JS-Desktop ueber dem Absatz — passt (kleine Einordnung ueber dem Text).
- 2026-07-23: **Index-Hero-Collage: Notiz-auf-Foto-Bug 640-879px gefixt** (Marvin: "hero auf jedem
  VW checken, teils broken, text rutscht uebers bild"). Sicht-Check 320/375/480/640/768/860/900/1280:
  broken war NUR die Ein-Spalten-Zone ~660-879px — das 2deg-gedrehte `.c-haupt` waechst dort so hoch,
  dass seine untere rechte Ecke unter die Collage-Box ragt und die Prozent-verankerte Notiz
  "frisch aus dem Ofen" (bottom:-4%) MITTEN auf dem dunklen Brotfoto lag (dunkel auf dunkel,
  unlesbar); Pfeil ebenso. Fix in styles.css nach dem Collage-Block: `@media(min-width:640px) and
  (max-width:879px){.collage{padding-bottom:72px}.c-notiz{bottom:8px}.c-pfeil{bottom:78px}}` —
  reservierter Streifen UNTER dem Foto statt Prozent-Anker. Verifiziert live @640/768/860 (Notiz
  14-15px unter Fotokante, auf Oat, Pfeilspitze zeigt weiter aufs Brot) + Regression @375 (unveraendert,
  Fix greift dort nicht; >=880 ebenfalls untouched, @900/@1280 vorher sauber gesichtet), 0 Overflow,
  Konsole leer. @320 bleibt eine Kleinigkeit (Notiz kuesst die weisse Polaroid-Ecke von `.c-klein`,
  lesbar dunkel-auf-weiss — toleriert). _design.md mitgezogen (Breakpoint-Zeile 640-879).
  Nicht committet (LP-Aenderungen im Working Tree). Dev: bestehender Server 8793.
  NACHTRAG (Marvin am Handy-Screenshot, iPhone+Android): Polaroid `.c-klein` auf Phone "ein Mueh"
  hoeher -> `@media(max-width:639px){.collage .c-klein{bottom:20px}}` (statt 2% ~7px, +13px).
  Verifiziert @320/375/412: Polaroid hoeher, mehr Luft zur Notiz — loest nebenbei auch die
  320er-Kleinigkeit (Notiz kuesst Polaroid-Ecke nicht mehr). _design.md mitgezogen.
- 2026-07-23: **Sortiment-Teaser (index.html): Bild getauscht + Layout auf Split** (Marvin: altes Foto
  ist "aus der Geschichte" -> erst Hoernchen gewaehlt, dann "das doch besser!" = das volle Brotregal).
  Der Anker unter "Was heute in der Auslage liegt" zeigte `laden-theke.jpg` (historische Ladentheke) —
  passte nicht zum "heute" + doppelte den Geschichte-Kontext. Ersetzt durch `img/auslage-regal.jpg`
  (Wand aus Brotregalen, 1903-Reportage 00866, Hochformat 2:3). Pillow-optimiert 1120x1680 q73
  progressive, EXIF gestrippt, 244KB. Zwischenschritt `hoernchen-blech.jpg` (01060) wieder verworfen +
  geloescht. Weil Hochformat NICHT in den breiten 21:9-Anker passt: neuer Baustein `.sortiment-split`
  (styles.css) = ab 760px Grid `520px 1fr` (Bild links, Preistafel+CTA rechts, vertikal zentriert),
  darunter gestapelt. WICHTIG gelernt: die aspect-ratio sitzt auf `.anker img` (nicht auf `.anker`) ->
  Hochformat per `aspect-ratio:3/4` INLINE aufs `<img>` (erst faelschlich auf den Div = weisser Rest).
  object-position 50% 60% (trimmt oben Wand, zeigt die dichten unteren Stapel). `laden-theke.jpg` bleibt
  NUR auf geschichte.html ("Die alte Ladentheke"). Verifiziert @1280 (Split, Tafel-Spalte 470px) + @390
  (gestapelt), 0 Overflow. _design.md mitgezogen. Nicht committet.
- 2026-07-23: **Zahlen-Band 4D Mobile-Overlap gefixt** (Marvin-Befund am Screenshot: "achtung wegen
  overlap"). Auf Mobile (2 Kartenreihen) straddelte nur die UNTERE Reihe die Naht -> untere 2 Karten
  wirkten halb im Dunkel versenkt, obere schwebten auf Hell (asymmetrisch, wie Bug). Ursache: der
  Regalbrett-Overlap (`.zahlen` neg. margin-bottom) ist nur bei EINER Reihe (Desktop) sinnvoll. Fix:
  mobil `margin-bottom:18px` (Karten ganz auf Oat, Naht sauber darunter) + `.zb-dunkel` padding-top
  klein; Overlap (-60/-40) + grosses Dark-Padding (96/74) nur noch ab 760px (1 Reihe). Verifiziert:
  @390 alle 4 Karten auf Oat (Screenshot), @1280 Straddle intakt (4 Spalten, -60px, Padding 96px).
  MERKE (Mobile-first): haette ich beim Port zuerst auf 375 pruefen sollen.
- 2026-07-23: **index.html aufgeraeumt: Tueten-Block raus + Sortiment-Doppelfoto gefixt** (Marvin
  "can we improve" -> Wahl "Streichen" + "Doppel-Foto fixen"). Befund: der `.tuete`-Block ("fuer Sie
  im Prenzlauer Berg") doppelte den Hero-Lead wortgleich (eigene Herstellung/Steinplatten) UND das
  Handwerk-Band, war eine zweite zentrierte Wappen-Karte DIREKT vor der CTA-warm-Wappen-Karte (auf 375px
  zwei Logo-gekroente Textwaende am Stueck) und wiederholte die Telefonnummer (3x im unteren Drittel:
  Tuete/CTA/Footer). Entfernt: Section aus index.html + `.tuete`-Regeln aus styles.css (nur hier benutzt,
  kein Fremdverweis). Flow jetzt Hero->Zahlen->Zeitband->Sortiment->Handwerk->Torten-CTA->Zeiten, Wappen
  im unteren Teil nur noch 1x. Zweitens: Sortiment-Teaser-Foto war `brotregal.jpg` = GLEICHES Bild wie
  im Hero-Collage -> getauscht auf `img/laden-theke.jpg` (Verkaeuferin an der Theke, Auslage/Glaskasten,
  Siebert-Tuete, Preisschilder; passt woertlich zu "Was heute in der Auslage liegt"). object-position
  50% 40%, width/height 1200x801. Verifiziert live @1280 + @375: Tuete weg, Handwerk->CTA-Naht sauber,
  laden-theke-Crop 21/9 (Desktop) + 16/10 (Mobil) mit Gesichtern intakt, Bild laedt (kein 404), Footer
  intakt. `_design.md` mitgezogen (Komponenten-Tabelle + index-Inventar + --white-Kommentar). Banner-Text
  "Gewinne & Losnummern" auf Marvins Wunsch NICHT geaendert. Nicht committet. Server: 8793 (andere Session).
  MERKE: Browser-Pane meldete wieder vw:0/innerWidth:0 -> JS-Overflow-Messung unbrauchbar (Screenshots
  ok); Scroll klemmt am unteren Anschlag -> Sektionen per `body`-transform ins Bild ziehen, nach jedem
  Reload frisch (sonst stapelt Scroll+Transform -> leere Frames).
- 2026-07-23: **Jubi-Banner: Link "Gewinne & Losnummern" bricht nicht mehr mittendrin** (Marvin per
  Element-Auswahl). Beim Umbruch des sitewide `.jubi`-Bandes trennte sich "Gewinne &" / "Losnummern"
  ueber zwei Zeilen. Fix in styles.css: `.jubi a{...white-space:nowrap}` -> der Link wandert als Ganzes
  in Zeile 2. Gilt fuer ALLE Seiten (sitewide Banner). Verifiziert @375: Link 1 Zeile, 0 Overflow. Nicht committet.
- 2026-07-23: **Zahlen-Band 4D LIVE portiert** (index.html + styles.css). 4D "Split-Regal" in die echte
  Startseite: heller Karten-Block + dunkler Trust-Block, nahtlose Uebergaenge (padding:0 gegen globales
  section-Padding), `.zk` statt `.z` loest die alte Kollision, Count-up erhalten (× ueberlebt via inner-
  span), Google 4,7 SVG-Sterne + 3 Award-Chips. _design.md mitgezogen. Verifiziert live @1280 + @375
  (0 Overflow, Nahtstellen 0, 0 Konsolenfehler; Count-up-Pane-Freeze = bekannte Macke, Endwerte belegt).
  Vergleichsblaetter bleiben intern liegen. Nicht committet (LP-Strang im Working Tree).
- 2026-07-23: **Saison-Silvester-Foto getauscht** (Marvin per Element-Auswahl: "fuer pfannkuchen
  tauschen"). Altes `haende-kneten.jpg` (knetende Haende) passte nicht zu "Berliner Pfannkuchen".
  Neu: `img/teiglinge-ofen.jpg` = runde Teiglinge dampfend auf dem Blech am Ofen (aus Roh-Serie
  `_src/baecker-bilder/1903_01_BÄCKEREI_SIEBERT_01024.jpg`, das von Marvin angehaengte Bild). Web-
  optimiert 1200x800 (3:2 wie die anderen Saison-Bilder), EXIF-frei/sRGB, 66 KB (Pillow ImageOps.fit).
  NUR die Silvester-Kachel in sortiment.html umgeleitet + ehrlicher Alt ("Frische Teiglinge dampfend
  auf dem Blech am Backofen"). `haende-kneten.jpg` bleibt (wird auf index.html Handwerk-Sektion gebraucht).
  Verifiziert @1200 (2:3-Crop: Ofen/Hand/Dampf oben, Teiglinge unten) + @375 (16/10 ganze Szene), 0 Overflow.
  WICHTIG: es sind runde Teiglinge, KEINE fertigen frittierten Berliner -> echtes Pfannkuchen-Produktfoto
  bleibt offen bei Anke. `_design.md` mitgezogen. Nicht committet. Dev: 8795.
- 2026-07-23: **Ausbildung-Hero: Tablet jetzt echtes Grid (statt riesigem Vollbild-Foto)** (Marvin-
  Screenshot ~768-820px zeigte das Hero-Portraet randlos ueber die volle Breite, ueber 1500px hoch).
  Ursache: `.hero-grid` wird erst ab `min-width:880px` zweispaltig; darunter bekam `.hero-foto`
  (2:3-Portraet) die volle Container-Breite ohne Deckel -> auf Tablet explodiert die Bildhoehe. Bug
  war NICHT neu durch die Foto-Aenderung, bestand latent schon vorher (gleiches Seitenverhaeltnis bei
  team-muetze.jpg). Loesung (Marvins Wunsch "als Grid auf Tablet"): eigener Modifier `.hero-solo` auf
  der ausbildung-Hero-`.hero-grid` (index-Collage-Hero bleibt so unberuehrt). CSS nach `.hero-foto`:
  Phone `<640px` -> zentrierte gedeckelte Karte im **1:1-Crop** (Marvin-Wunsch, spart Hoehe ggue.
  2:3): `.hero-foto{max-width:clamp(280px,80vw,380px)}` + `.hero-foto img{aspect-ratio:1/1;object-fit:
  cover;object-position:center 15%}` (Kopf mit Headroom oben, Gesicht + Brot im Bild, Hose unten weg-
  croppt; erst 30% probiert -> schnitt den Kopf oben an, Marvin-Korrektur "kopf nicht abschneiden" ->
  15%); Tablet `640-879px`
  -> `.hero-solo{grid-template-columns:1.05fr .95fr}` + `.hero-solo .hero-foto{max-width:none;margin:0}`
  (Portraet fuellt seine Spalte wie auf Desktop); `>=880px` faellt auf das bestehende `.hero-grid` 1fr 1fr
  zurueck -> Desktop unveraendert. Verifiziert: @375 Karte 280x280 (1:1-Crop, Gesicht+Brot im Bild) /
  @768 Grid 353+319, Foto 319x471 (native 2:3, kein 1:1 mehr) / @1000 Grid 452+452 = original Desktop;
  alle 0 Overflow. besuch.html
  (`.hero-foto` im `.hero-split-foto`, erst ab 960px sichtbar) + index.html (Collage, kein `.hero-solo`)
  nicht betroffen. Nicht committet. (Der zwischenzeitliche reine Karten-Fix ist damit ueberholt.)
- 2026-07-23: **Ausbildung-Seite: 3 neue Fotos mit echter Personen-Vielfalt (Nachtrag: Karten getauscht)**
  Marvin wollte das Fachverkäufer/in-Foto (Mohnzopf-Baeckerin) auf Bäcker/in tauschen und hat fuer
  Fachverkäufer/in selbst ein Foto gewaehlt: `img/baecker-croissants-blech.jpg` (Baecker praesentiert
  laechelnd ein Blech Croissants, aus `picture-2600 (10).jpeg` zugeschnitten auf Gesicht+Blech, 1000x750,
  EXIF-frei). Finaler Stand: Hero=baeckerin-brotlaib.jpg (Frau), Bäcker/in=baeckerin-mohnzopf.jpg (Frau),
  Fachverkäufer/in=baecker-croissants-blech.jpg (Mann). Verworfener Zwischenstand baecker-teiglinge-
  formen.jpg (Mann mit Kochmuetze) wieder geloescht (kein Verwender mehr). Verifiziert per naturalWidth/
  Height + 0 Overflow (Pane-Screenshot fror an dieser Stelle ein, bekannte Macke). Nicht committet.
- 2026-07-23: **Saison-Spotlight: Reihenfolge in der Gruppe gedreht** (Marvin per Element-Auswahl:
  "Zur Saison" dorthin wo die Buttons sind, Buttons unter die Notiz). Rechte Gruppe jetzt von oben:
  **Titel "Zur Saison" -> Als-Naechstes/Christstollen/Notiz -> Tabs (unten)**. Umsetzung: h2 aus der
  Position ueber der Stage IN die `.saison-stage` gezogen (erstes Kind), Tabs ans ENDE (letztes Kind).
  Desktop-Grid jetzt 5 Zeilen `1fr auto auto auto 1fr` -> Foto links spannt alle, rechts Titel(Z2)/
  Text(Z3)/Tabs(Z4), 1fr-Spacer zentrieren die Gruppe mittig zum Foto. Tabs-Margin von unten auf oben
  gedreht (Abstand zur Notiz). Verifiziert @1200 (Reihenfolge Titel<Text<Tabs, Foto links, mittig
  Delta 24px, 0 Overflow), Tab-Klick (Foto+Text wechseln, Tabs bleiben unter Notiz), @375 (Titel->Foto->
  Text->Tabs), No-JS (Titel + 3 gepaarte Saisons, Tabs aus). Kein neuer Cache-Bump noetig (`?v=3` steht
  schon; Dev-Server revalidiert per Last-Modified). `_design.md` mitgezogen. Nicht committet. Dev: 8795.
- 2026-07-23: **Ausbildung-Seite: 3 neue Fotos mit echter Personen-Vielfalt** (Marvin liefert 42 neue
  Rohbilder in `img/bäcker bilder/`). Ausgewählt + zugeschnitten (Python/Pillow, EXIF-frei, sRGB):
  `img/baeckerin-brotlaib.jpg` (junge Baeckerin haelt Brotlaib, HERO 900x1350), `img/baeckerin-
  mohnzopf.jpg` (junge Baeckerin praesentiert laechelnd Mohnzoepfe, BÄCKER/IN-Karte 1000x750, nach
  Marvins Tausch-Wunsch von Fachverkäufer/in dorthin verschoben), `img/baecker-croissants-blech.jpg`
  (Bäcker praesentiert laechelnd ein Blech Croissants, FACHVERKÄUFER/IN-Karte 1000x750, Marvins
  eigene Bildwahl aus dem Ordner). Ersetzen team-muetze.jpg/schlingen-formen.jpg/team-brotlaib.jpg auf
  der Seite. 3 verschiedene Personen, Geschlecht alterniert (Frau/Frau/Mann), alle mit Alt-Text.
  NEBENAUFRAEUMUNG: die 34MB Rohbilder-Lieferung lag versehentlich in `img/` (waere live mitdeployt
  worden, EXIF + Rohformat) -> nach `_src/baecker-bilder/` verschoben (Konvention wie `_src/bilder-
  alt/`). Verifiziert live @1280/@375: alle 3 Bilder laden (naturalWidth/Height ok), 0 Overflow,
  Konsole leer, Kontraste/Layout unveraendert. Ein erster Bäcker/in-Kandidat (baecker-teiglinge-
  formen.jpg, Mann mit Kochmuetze) wurde nach dem Tausch wieder verworfen (kein Verwender mehr) und
  geloescht. team-muetze.jpg/team-brotlaib.jpg bleiben ungenutzt im Ordner (noch referenziert von
  archivierten `freigabe/konzepte/*`-Vergleichsblaettern). Nicht committet.
- 2026-07-23: **Saison-Spotlight (sortiment.html): Desktop-Anordnung + flache Struktur** (Marvin per
  Element-Auswahl: Tabs+Textblock zusammen, `align center zum bild`). Vorher hingen die Tabs oben ueber
  allem und der Text schwebte vertikal-mittig allein neben dem Foto (grosse Leerflaeche). Umbau auf FLACHE
  Struktur: `.saison-cer` (h2) + `.saison-stage` mit Tabs und je Saison `figure.saison-foto[data-saison]`
  + `.saison-panel[data-saison]` (Text) als GESCHWISTER (Foto raus aus dem Panel, `.saison-grid` entfernt).
  Desktop >=960 (nur `.tabs-an`): `.saison-stage` Grid `auto minmax(0,1fr)` x Zeilen `1fr auto auto 1fr` ->
  Foto links (spannt alle Zeilen, gibt Hoehe vor), Tabs+aktiver Text rechts, 1fr-Spacer zentrieren die
  Gruppe mittig zum Foto. site.js: `aktivieren()` toggelt `.aktiv` jetzt SYNCHRON auf Foto UND Panel
  (neues `fotos`-Array). Erhalten: No-JS-Paarung (Foto+Text je Saison gestapelt, Tabs aus) + Mobil-
  Reihenfolge Tabs->Foto->Text. Verifiziert @1200 (Foto links, Gruppe mittig, Delta 17px, 0 Overflow),
  Tab-Klick (Foto+Text wechseln synchron, aria-selected), @375 (Tabs->Foto->Text, 0 Overflow), No-JS
  (3 Paare gestapelt, Tabs aus). **Cache:** styles.css+site.js geaendert -> in sortiment.html `?v=2`->`?v=3`
  gezogen (sonst laedt der Browser das alte site.js ohne Foto-Toggle). ZU TUN beim Deploy: `?v` SITEWEIT
  bumpen (styles.css enthaelt auch den frueheren `.tz`-Tafel-Fix, den index.html sonst nicht frisch bekommt).
  `_design.md` mitgezogen. Nicht committet (LP-Aenderungen im Tree). Dev: Port 8795.
- 2026-07-23: **Grosse Anke-Schlussfigur in geschichte.html entfernt** (Marvin "unnoetig", freistehendes
  760px-Foto+Caption nach dem Fuenf-Generationen-Index). Redundant: dasselbe Foto steckt schon im
  Akkordeon-Inhalt/Modal der Generation 2021. Verifiziert: 0 Overflow, 1 h1, Konsole leer. Nicht committet
  (LP-Aenderungen im Working Tree).
- 2026-07-23: **Jubilaeums-Sektion LIVE in geschichte.html** (Marvin "go"). Nach 3 Feedback-Runden
  konvergiert auf: goldenes Ticket als Blickfang (Gold-Flaeche auf --crumb, dunkle Tinte, perforierter
  Abriss "Nr. — — —"/"Ziehung Oktober" als Symbol) + Woche-fuer-Woche-Kalender "Der Ziehungs-Sommer"
  (weisse Wochen-Zettel wie V3, roter Nadelstreifen, aktive Woche rot "als Naechstes", zeigt WANN +
  120 Preise/Woche) + Instagram/Facebook-Verweis. **Kern-Entscheidung Marvin: KEINE Losnummern auf der
  Website** (woechentl. Nachtragen ist genau der Aufwand, den IG ueberfluessig macht) -> alter `.gewinner`-
  Platzhalter + "hier fuehren wir alle Nummern auf" RAUS. Zwischenschritte: 3 Varianten (Fahrplan/Ticket/
  Fenster-Plakat) -> Marvin waehlt "V2-Ticket + V3-Woche-fuer-Woche" -> Karten in WEISS (Wunsch, Akzent
  dann rot weil Gold nicht auf hell) -> Gold-Stern-Finalbalken als "haesslich" entfernt (Oktober steckt
  schon im Ticket). Selbst-Bugs gefixt: `.jub-seal` inline-span -> display:block (Logo brach riesig aus);
  `.jub-wo .n` -> display:block (Tag "als Naechstes" ueber statt neben "Woche 1"). Portiert `.jub-*` in
  styles.css (nach `.gewinner`), Sektion in geschichte.html ersetzt, _design.md mitgezogen. Verifiziert
  live @1280 (Headless #jubilaeum + virtual-time) + @375 (Pane): 0 Overflow, 1 h1, 0 doppelte IDs,
  Ticket-Rotation erhalten, Konsole leer. Vorlagen: `freigabe/konzepte/jubilaeum-final.html` (final) +
  `jubilaeum-varianten.html` (Archiv). MERKE: Chrome-headless erzwingt ~500px Mindestbreite -> Mobile-
  Screenshot <500 taeuscht Row-Layout vor (Mobile per Pane-JS messen); Pane meldet zeitweise vw:0. Offen
  bei Anke: exakte Wochenzahl (8 = Platzhalter) + Nummern-Bekanntgabe via IG/FB. Nicht committet
  (LP-Aenderungen im Working Tree). Dev: Port 8793.
- 2026-07-23: **Jubilaeums-Sektion: 3 Design-Varianten gebaut** (`freigabe/konzepte/jubilaeum-varianten.html`,
  intern/noindex, echtes styles.css). Marvin: 3 neue Designs fuer die Sektion "Das Jubilaeum" (geschichte.html).
  Geliefert V1 "Der Jubilaeums-Fahrplan" (dunkler 3-Phasen-Zeitstrahl mit Status + "als Naechstes"-Marker) /
  V2 "Das Goldene Ticket" (Ticket als Objekt, Gold-Flaeche auf Dunkel + perforierter Abriss "Nr. — — —") /
  V3 "Die Ziehungstafel" (heller Aushang, Wochen-Zettel fuellen sich = Betreuungs-Argument, Oktober als
  Gold-Insel). Selbst-Bug gefixt (`.j2-seal` inline-span -> `display:block`, sonst Logo riesig). Verifiziert
  @1280+@375 (0 Overflow, mobile Umbrueche korrekt, Konsole leer), Kontraste system-treu (Gold nur auf crumb,
  Rot einzige Signalfarbe auf hell). Wartet auf Marvins Wahl (Detail im Offene-Punkte-Block). Nicht committet
  (LP-Aenderungen im Working Tree). Dev: Port 8793.
- 2026-07-23: **Zahlen-Band: 4D "Split-Regal" gewaehlt + finalisiert** (`freigabe/konzepte/zahlen-4d-final.html`).
  Marvin waehlt 4D (Uebergang ins braune Zeitband nahtlos). Award-Set kuratiert (Frage-Runde): Feinschmecker
  2013/2017 + Publikumsliebling 2026 belegt, Goldene Brezel + 100-Punkte-Brotpruefung [zu bestaetigen],
  B.Z.-Leserwahl raus, Goldenes Ticket raus (Verlosung, keine Praemierung). "seit 2004" auf Marvins
  Zuruf gestrichen. Struktur auf .hell/.dunkel umgebaut (Karten ueberlappen Naht, Dunkelblock = letztes
  Element -> buendig ans folgende dunkle Band). Bug gefunden+gefixt: globales `section{padding-block}`
  aus styles.css gab 92px oat oben/unten -> `padding:0`. Verifiziert @1200 + @375: 0 Overflow, beide
  Nahtstellen 0, Karten-Overlap ~55px, Sterne gold 4,7. Nicht committet. Dev: 8793.
- 2026-07-23: **Zahlen-Band Runde 2: 4 V4-Fassungen mit variierendem Hintergrund**
  (`freigabe/konzepte/zahlen-v4-varianten.html`). Marvin: von V4 nochmal 4 ganz unterschiedliche, je
  ANDERER Hintergrund (nicht alles Braun), V3-Karten mischen, "ueberrasche mich". Geliefert 4A Warme
  Wand (Oat) / 4B Rotes Plakat (Rot) / 4C Kassenbon (Papier, Bon Muster 14) / 4D Split-Regal (Grund
  geteilt Oat+Crumb, Karten auf der Naht). Design-Zwang "Gold nur auf dunkel" zur Idee gemacht: auf hell
  Sterne rot bzw. dunkle Gold-Insel. Wiederverwendet: V3-Karte + gemeinsame SVG-Stern-Komponente
  (Teilfuellung via --pct). Verifiziert @1280+@375 (0 Overflow, Sternfarben+4,7 korrekt); 4A/4D-Rating
  bricht auf schmal sauber um (Fix). Nicht committet (LP-Aenderungen im Working Tree). Dev: Port 8793.
- 2026-07-23: **Zahlen-Band: 4 Design-Varianten gebaut** (`freigabe/konzepte/zahlen-varianten.html`,
  intern/noindex). Marvin: 3 Stil-Ideen fuer die Info-Zahlen, plus eine mit Auszeichnung/Google-
  Bewertung als direktem Trust. Geliefert: V1 Gravur (Empfehlung), V2 Praegung (Gold-Medaillen),
  V3 Preisschild (warme Zettel richtig gebaut), V4 Mit Vertrauen (Google 4,7 SVG-Sterne + Chips).
  Beim Bauen den Live-BUG gefunden: `.z` doppelt belegt (Chronik-Zettel + Zahlen-Zelle) -> Statistik
  erbt weissen Zettel-Look + Labels tan-auf-weiss (Kontrast bricht) = Marvins Screenshot. Fix beim
  Port: namespaced Selektor statt `.z`. Zwei Selbst-Bugs beim Bauen gefixt (dieselbe `.z`-Kollision
  in den Varianten -> Zellen auf `.zc` umbenannt; SVG-Sterne dunkel weil `<use>`-Shadow-Grenze ->
  fill/stroke aufs `<svg>` gehoben). Verifiziert @1280+@375 (0 Overflow, Sterne gold 4,7-Teilfuellung,
  V3-Kontrast dunkel). Wartet auf Marvins Wahl (Detail im Offene-Punkte-Block oben). Nicht committet
  (unverwandte LP-Aenderungen im Working Tree). Dev: Port 8793.
- 2026-07-23: **Sortiment: Speisekarte-Zeilen mobil GESTAPELT** (Marvin-Befund: "unruhig, fast
  durcheinander, schwer lesbar"). Ursache: `.tz` war auf ALLEN Breiten ein Zweispalter (Name links,
  Notiz rechtsbuendig, Fuehrungslinie dazwischen). Auf 375px brechen lange Namen (Kaese-und-
  Dinkelsprossenbroetchen) UND lange Notizen um und laufen ineinander -> ragged, ungleiche Zeilenhoehen.
  Fix in styles.css (Block "Preistafel"): unter 640px stapeln (Name-Block + Notiz linksbuendig darunter,
  `.f`/Fuehrungslinie aus, `:empty`-Notiz weg); ab 640px kehrt der Zweispalter mit Fuehrungslinie zurueck
  (Seam deckt sich mit `.nz`/`.anker`, Tablet/Desktop unveraendert). NEBENBUG entdeckt+gefixt: `.tz
  span:last-child` matcht per Nachfahren auch die geschachtelte `.nz-kurz` (letztes Kind von `.best`);
  mein neues display:inline haette die Award-Notiz ab 640px DOPPELT gezeigt -> alle Notiz-Regeln auf
  Kind-Kombinator `.tz>span:last-child` umgestellt. Verifiziert per Messung @375/639/640/768/1024/1280:
  STACK<640 / ROW>=640, Award nie doppelt, 0 Overlap, 0 Overflow-X, Konsole leer; index.html-Preistafel
  gegengetestet (stapelt mit, keine Doppel-Notiz). `_design.md` mitgezogen. NICHT committet (unverwandte
  LP-Aenderungen im Working Tree, wie gehabt). Dev: Port 8795 (8793 gehoert anderer Session).
  NACHTRAG (Marvin): (a) "Dinkelsprossenbroetchen" mit weichen Trennstellen `&shy;` an den Fugen
  Dinkel-sprossen-broetchen (passt zu hyphens:manual; Strich nur im Ernstfall, per Zoom @150px
  verifiziert -> bricht sauber "Dinkelsprossen-/broetchen", nie mitten in der Silbe). (b) Leere Notiz
  bei "Streuselkuchen, Obstplunder, Apfelzimtschnecke" gefuellt: **"taeglich frisch vom Blech"**
  (deskriptiv, konsistent mit "Alles taeglich von Hand"; konkrete Backfrequenz bei Anke BESTAETIGEN).
- 2026-07-23: **Besuch: 2 Desktop-Design-Alternativen gebaut** (intern, Live-besuch.html unberuehrt).
  Marvin: mobil ist gut, nur Desktop neu denken. Loesung ohne Risiko fuers Mobile: beide Varianten
  sind exakte Klone der Live-Seite, das neue Layout haengt komplett an `@media(min-width:960px)`;
  darunter Rueckfall auf den heutigen Stack (DOM-Reihenfolge erhalten, Desktop-Only-Fotos <960px aus,
  verschobene Fotos per Breakpoint ein-/ausgeblendet statt dupliziert). `_besuch-a.html` "Tuerschild"
  (asymmetrischer Editorial-Split: Hero Text|Foto, Zeiten als gerahmtes Papier-Panel mit Nadelstreifen
  neben Sommer/Tipp) vs. `_besuch-b.html` "Aushang" (poster-symmetrisch: Hero zentriert ohne Foto,
  Zeiten als zentrale Board-Buehne, Anfahrt 3-spaltig inkl. neuer Karte "Bester Zeitpunkt", vollflaech.
  brotregal-Foto-Band vor der Fascia). Verifiziert im Browser (Server siebert:8793): 1280 = neues
  Design je Variante, 375 = deckungsgleich mit Live (per getComputedStyle geprueft: Desktop-Zusaetze
  aus, Original-Tabelle/Foto/Reihenfolge an); 0 Overflow-X, 1 h1, 0 Konsolenfehler, keine neuen
  Tokens/Farben (Warmes Regal eingehalten). Wartet auf Marvins Pick -> dann in live + styles.css.
- 2026-07-23: **Mobile-Nav = Burger-Menü.** Marvin-Befund: Nav-Bar nicht mobilfreundlich. Ursache:
  Header war reines `flex-wrap:wrap` ohne Toggle -> auf 375px brachen die 6 Links mehrzeilig um, das
  nowrap-Status-Badge verwaiste, der `sticky` Header wurde ~484px hoch (halbes Viewport, blieb beim
  Scrollen gepinnt). Fix: Burger-Toggle nach dem routenwerk-Muster (aria-expanded/-controls, Escape +
  Link-Klick schliessen) auf allen 6 Hauptseiten; Nav+Status in `<div class="kopf-nav" id="navLinks">`
  gewrappt. Desktop `display:contents` -> pixelgleich zu vorher (verifiziert 1280: inline, Burger aus).
  Ab `max-width:820px` klappt die Nav hinter den Burger (max-height-Transition, vertikale Liste mit
  Hairline-Trennern, 44px-Tap-Ziel). Collapse nur bei aktivem JS (`html:not(.no-js)`), reduced-motion
  schaltet Transition ab. Header geschlossen jetzt 87px. Verifiziert (375+1280): 0 Overflow-X, 0
  Konsolenfehler, aria-current je Seite korrekt (Start/Sortiment geprueft), elementFromPoint bestaetigt
  Button frei klickbar (echte Pane-Klicks flaky = bekannte Pane-Macke, Handler per .click() korrekt).
- 2026-07-23: **QA v2 + Designakte** (8659ac3 / 8042b69). design-md-Agent hat `_design.md` auf
  "Warmes Regal" neu geschrieben (205 Z., Hex/Fonts gegen styles.css verifiziert). qa-polish-Agent
  am Session-Limit abgebrochen, aber Kernbefund geliefert + selbst-QA gemacht: BLOCKER Fokusring
  Rot auf Krume 1.91:1 -> jetzt Gold-l 6.01:1 auf jubi/zeitband/fascia/footer/zahlenband;
  Generationen-Namen `.z em` Gold-auf-hell 2.76:1 -> Krustenbraun 7.39:1; `--ink2` #786246 4.37:1
  -> #6A5030 5.67:1 (AA). Verifiziert: Fokus-Outline live gold auf dunkel, alle 9 Seiten 1x h1 /
  0 doppelte IDs, JSON-LD valide, reduced-motion vorhanden, Status-Logik am Tageswechsel korrekt
  (Sommerzeit "bis 16:30"). Kontraste alle gerechnet, nicht geschaetzt.
- 2026-07-22: **BUILD v2 komplett** (2e484d1) im Design D1b "Warmes Regal". Marvin: D1b ist der
  Gewinner, plus Feinschliffe (Strichlinie unter "aelteste" weg, doppeltes 1906 entschlackt,
  2. Eyebrow raus) + echtes Wappen geliefert (siebert-logo.svg). Umgesetzt: canonical styles.css
  + site.js als Design-System; Start-Seite als Referenz; die 5 Unterseiten per Workflow
  (5 Build- + 5 Verify-Agenten, 0 Fehler) auf dem System neu gebaut; Pflichtseiten (404/impressum/
  datenschutz) + OG-Bild + Favicon-Serie im neuen Look; alte v1-Fonts (League Gothic/Source Sans 3)
  entfernt. Auszeichnungs-Zahl recherchiert: Feinschmecker 2x (2013/2017) belegt, keine "6x"-Zahl
  erfindbar -> Zahlenband bleibt "2x DER FEINSCHMECKER", Goldene Brezel/Publikumsliebling auf
  Geschichte-Seite. WICHTIGER FIX + neues Pattern: img-Attribute width/height hebeln CSS aspect-ratio
  aus -> `img{height:auto}` global noetig (sonst Bilder in natuerlicher Hoehe statt Band/4:3).
  Verifiziert im Browser: alle 6 Seiten 0 Overflow (Desktop+375), Zeitband-Scrolly mappt, Reveals
  feuern, Count-up 1906/5/16/2, Status-Logik korrekt, je 1 h1, Nav-aria-current, keine Konsolenfehler,
  Bild-Ratios korrekt. qa-polish + design-md delegiert.
- 2026-07-22: **D1b** (e2209e9) = D1 mit Marvins Wuenschen: echtes Wappen (siebert-logo.svg) statt
  SVG-Nachempfindung, MEHR ROT (grosse rote Autoritaets-Zeile "Berlins *aelteste* Baeckerei" mit
  feinem rotem Unterstrich als Qualitaetssignal ggue. anderen Baeckereien; "seit 1906" (Script +
  Brot-Schild) rot; CTA-Telefonnummer rot), kleiner roter Hand-Pfeil von "frisch aus dem Ofen" zum
  Brot. Zwei Hero-Fotos + Handschrift + Gold-Zahlenband bleiben. = aktueller Favorit. Offen:
  D1b-Vollausbau vs. noch D2-Elemente einmischen (Gold-Fascia).
- 2026-07-22: **2. Design-Feedback + Heritage-Recherche -> D-Runde.** Marvin: C3 hat Charme verloren;
  gewollt ist verspielt-aber-warm/ruhig, kreuz-und-quer-aber-stimmig (wie Brot voll im Regal),
  Ebenen mit Tiefe. WEG: falsche Klebestreifen (zu kuenstlich), dicke Streifen, laute rote Flaechen,
  uebergrosser Hero. Palette: **Brot-/Krustentoene + Weiss (ihre Tueten) als Basis, Rot NUR dezent +
  als feine Nadelstreifen (Schuerzen-Borduere, nicht dick), Gold als Akzent (Fensterschrift +
  Goldenes Ticket; Gold-Zahlen gefielen)**. design-scout-Dossier (ab8fa89) eingeholt:
  Koenigsreferenzen **Zingerman's Deli** (handgemalte Sign-Painter-Welt = verspielt+stimmig durch
  EINE Hand+EINE Farbwelt), **Rose Bakery** (echte Objekt-Texturen drucken statt Skeuomorphe faken),
  **Balthazar** (Gold nur in Headern), **Joseph Brot Wien** (Ton). 5 Collage-Regeln: geteilte
  Grundflaeche + eine Lichtrichtung; Rotation ±2-4°, pro Viewport nur EIN Objekt schief; Tiefe durch
  Ueberlappung echten Inhalts; gerichteter Schatten (2 gestaffelte box-shadow); Fotorand = weisser
  Abzugsrand NIE Klebeband. Palette-Sets mit gerechneten Kontrasten (Set1 "Krume&Kruste" #FAF6EF/
  #2B1D12/#9E2B1E/Gold #C9A24B nur auf #2E2013). Font-Tipp: Fraunces behalten, Caveat -> **Shantell
  Sans** (frischer, latin-ext), Pinyon nur Zeremonie; Gochi Hand hat KEINE Umlaute. Scout hat
  `_fundus` Muster #16 ergaenzt (NICHT von hier committen, LP-Strang offen) + agent-memory.
  -> Gebaut (e8cfe07): **D1 "Warmes Regal"** (Hafer/Krustentoene, Gold-Zahlen auf Krumen-Band,
  ueberlappende Foto-Collage + Zettel, feiner roter Nadelstreifen, kleiner collagierter Hero
  Backstube+Brotregal) + **D2 "Weisses Papier"** (Tueten-Weiss, dunkle Gold-Fascia traegt "seit 1906"-
  Zeremonie, handgemalter Brush-Schwung, EIN Foto gedreht, editorial). Warten auf Marvins Wahl D1/D2/Mix.
- 2026-07-22: **C3 finale Tuete-Fassung** (f53455e) nach Marvins Feedback zu C1/C2: "Aus der Tuete
  hat am meisten Charme, nur Farben anpassen + rot-weisse Streifen + anderes Hero (Baeckerei +
  Tradition zeigen)". Umgesetzt: Tueten-Charme (getapte Fotos/Stempel/Caveat-Handschrift) behalten,
  Palette auf echtes kraeftiges Rot #C4171C + Weiss + Creme + Gold; **rot-weisse Baeckerei-Markise**
  mit Bogenkante (repeating-linear-gradient + radial-scallop) oben + duenne Streifen-Divider +
  Streifen im CTA; Hero jetzt grosses Backstuben-Foto (team-brotlaib) + kleines getaptes
  historisches Ladenfoto (laden-70er, "derselbe Laden, frueher") + Wappen-Siegel. overflow-x:clip
  als Gurt fuer die rotierten/absoluten Hero-Fotos (0 Overflow verifiziert). = aktueller Favorit.
- 2026-07-22: **Marvin waehlt Richtung C** + liefert die ECHTE Markenidentitaet (Google/Fotos):
  kraeftiges Baeckerei-Rot + Gold, Loewen-Brezel-Wappen mit Krone, verschnoerkelte Schreibschrift,
  weinrote Markise mit Goldschrift, rote Papiertueten mit Original-Copy ("fuer Sie im Prenzlauer
  Berg", "Bestellung im Geschaeft oder unter 4457576", "ausschliesslich eigene Herstellung...
  auf Steinplatten gebacken"). Wichtig: Marke ist "authentisch unperfekt", NICHT durchgestylt.
  -> 2 C-Varianten gebaut (457e1ae): **C1 "weisse Tuete"** (Cremeweiss, Rot-Druck, Tueten-Aufdruck-
  Block mit Original-Copy, Wappen, Caveat-Handschrift-Akzente, Pinyon-Script "seit 1906") +
  **C2 "Markise"** (weinrote Streifen-Markise mit Bogenkante, goldene Pinyon-Fensterschrift
  "Baeckerei & Cafe Siebert", waermer). Wappen als SVG nachempfunden (Krone/Brezel/gekreuzte
  Schieber/Banner) -> ECHTES Wappen des Kunden bei Uebergabe einsetzen. Neue Fonts:
  Caveat (Handschrift, Preisschilder), Pinyon Script (Fenster-Gold). Uebersicht-Hub hebt C1/C2
  hervor. Empfehlung an Marvin: C1 als Startpunkt (naeher an Tuete+Logo), C2s Markise als Option.
- 2026-07-22: **3 alternative Design-Richtungen** (2999e1f) nach Marvins Slop-Kritik an v1.
  Je Konzept-Startseite (Hero+Geschichte+Sortiment) mit echten Fotos + echter Copy, bewusst
  maximal verschieden: A Berliner Chronik (Zeitung), B Ost-Moderne (Plakat), C Aus der Tuete
  (Kraftpapier/analog). 12 Konzept-Fonts geladen (Playfair/Source Serif/Archivo/Fraunces).
  Uebersicht-Hub mit Screenshot-Thumbs + Stärke/Risiko je Richtung. Headless verifiziert.
  qa-polish-Bericht zu v1 eingegangen (Befunde im Abschnitt "Was ist JETZT relevant").
- 2026-07-22: **BUILD v1** (fa6fe59). 6 Seiten + 404/_headers(noindex)/Rechts-Platzhalter,
  Tokens wie freigegeben, League Gothic + Source Sans 3 self-hosted (Umlaute per fontTools
  verifiziert), 22 Bilder web-optimiert + EXIF-frei (JPEG-Segment-Stripper, neues Pattern in
  technik-patterns.md), OG-Bild + Icon-Serie per Chrome-headless-Rezept, JSON-LD Bakery valide.
  Verifiziert: alle 9 Seiten 200, 0 Overflow-X auf 375 (alle Seiten), Zeitband-Scrolly auf 1280
  gemessen (sticky + 6 Stationen + Punkte korrekt), Count-up mit Tausenderpunkt, Status-Chip
  rechnet Sommerzeiten korrekt ("bis 16:30" am Mi im Sommerfenster). NEU in site.js:
  Scroll-Sweep als Sicherheitsnetz falls IntersectionObserver haengt (Pane-Macke bestaetigt:
  IO friert nach programmatischem Scroll ein, Sweep-Fallback macht Reveals trotzdem).
  Hero-Freisteller als Fotoabzug-Look gerahmt (weisser Studiogrund wirkte sonst als Rechteck).
  Dev-Server: launch.json "siebert" (serve-nocache, 8793). design-md + qa-polish delegiert.
- 2026-07-22: **Jubilaeum auf August-Phase umgestellt** (Marvins Entscheidung: 31.07.-Frist nicht
  mehr live erreichbar -> Gutschein-Verkauf als abgeschlossen erzaehlen, Fokus Wochenziehungen +
  Ticket-Oktober). NEU: sitewide Jubilaeums-Leiste (temporaer, im Build Fascia-Gruen),
  Gewinner-Losnummern-Block (Site spiegelt IG/FB-Bekanntgaben, Pflege = Betreuungs-Argument),
  Social als Link-out ohne Meta-Embed (DSGVO). Instagram verifiziert: @baeckerei_siebert
  (laeuft unter Anke Siebert); Facebook noch unter "Lars Siebert" -> Umbenennung empfehlen.
- 2026-07-22: **Marvins Vertiefungs-Recherche eingearbeitet** (Kontext 0b + Wireframe + struktur).
  Kern-Claims per WebSearch verifiziert: Goldenes Ticket (Berliner Zeitung) + Publikumsliebling-
  Roggenmischbrot (Baeckerinnung Mai 2026). Zeitband-Stationen KOMPLETT (Gustav/Albert/Bodo/
  Lars+Catrin/Dr. Anke), Jubilaeums-Sektion konkret (Gutschein bis 31.07., Goldenes Ticket
  Oktober — Sektion muss mit der Aktion mitleben!), Zahlenband neu (5.000 Samstags-Schrippen),
  Preistafel-Schaetze (Ost-Schrippe, Kameruner, Mohnzopf, Knappheits-Zeile Splitterbroetchen),
  OePNV geloest. NEU entdeckter WIDERSPRUCH: Fruehstueck vor Ort (Alt-Site) vs. reiner
  Strassenverkauf (Presse) -> nicht mit Fruehstueck werben bis geklaert.
- 2026-07-22: **Bildkonzept erstellt** (`freigabe/bildkonzept.html`). Alt-Site-Bilder inventarisiert
  (~60 Stueck, cm4all: Original via URL-Suffix `/picture-2600` in 2600px abrufbar, curl -L noetig).
  Befund: starke Reportage-Serie Backstube ("1903_01_..."), 16 Freisteller auf Weiss, historische
  Ladenfotos (Laden70er, Siebert5659), Torten schwach. 22 Sichtungskopien 800px + MANIFEST in
  `_src/bilder-alt/`. Appetit-Prinzipien definiert (Textur gross, warmes Licht bewahren, Haende,
  EIN Full-bleed-Band pro Seite, Freisteller fuer Hero/Sortiment).
- 2026-07-22: **Struktur + Wireframes gebaut** (`freigabe/struktur.md`, `freigabe/wireframe.html`,
  `freigabe/wireframe-viewer.html`). Viewer zeigt alle 3 Breakpoints (375/768/1280 als skalierte
  iframes) gleichzeitig, Leiste schaltet alle Seiten synchron um. Gefixt: .row-Flex-Overflow auf
  375 (flex-basis 220 statt basis 0 + min-width). Verifiziert: Live-Messung 375 ohne Overflow-X,
  Headless-Renders Viewer/Geschichte-1280/Ausbildung-768. MERKE: Chrome headless erzwingt
  Mindest-Fensterbreite (~500px) und croppt Screenshots bei --window-size=375 -> schmale
  Breakpoints headless NICHT direkt screenshotten, stattdessen iframe-Konstruktion (Viewer)
  oder Live-Messung im Browser.
- 2026-07-22: **Scroll-Storyboard gebaut + verifiziert** (`freigabe/storyboard.html`): 9 Szenen mit
  Animations-Spezifikation und echten Vanilla-Mini-Demos (Fade-up, Count-up, Sticky-Zeitband,
  Slide-in, Zoom-out-Reveal, Marquee). Funktional geprueft per JS (Zeitband: alle 5 Stationen
  mappen korrekt, Punkte klickbar mit aria-current; 375px ohne Overflow-X, Buehne stapelt) +
  Chrome-headless-Vollrender. MERKE Pane-Macke bestaetigt: file://-Renders im Preview-Pane sind
  statische Snapshots, nach Scroll kein Repaint + rAF eingefroren -> Sicht-Checks per Chrome
  headless machen (wie hier), nicht im Pane jagen. design-scout fuer Zusatz-Inspiration laeuft.
- 2026-07-22: Projekt angelegt. Brief via brief-builder aus Live-Crawl der Alt-Site (alle Unterseiten).
  Framer-Templates Luna Rossa + Bakeat im Browser ausgelesen (DOM-Analyse der Animationsmechanik,
  Sektionsaufbau, Typo/Farben) -> `freigabe/design-richtung.md`. Wartet auf: Design-Freigabe Marvin.
