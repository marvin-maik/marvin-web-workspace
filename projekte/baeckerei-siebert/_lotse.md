# baeckerei-siebert — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts. Nach jedem Meilenstein kurz mitziehen.

Stand: 2026-07-23 · Phase: **BUILD v2 fertig + QA gruen (D1b "Warmes Regal") -> wartet auf Marvins Sicht-Check**

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
  B.Z. beschriftet das 1936er-Foto faelschlich mit "Gustav" (unmoeglich, 1929 tot). Neues echtes
  Foto `img/laden-front-historisch.jpg` = Fein-Baeckerei-Front mit Schild "Otto Siebert Baeckermeister".
  Details: product-marketing-context.md Abschnitt 0b.
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
- [ ] **Marvin: Design-Richtung freigeben** (`freigabe/design-richtung.md` + `freigabe/storyboard.html`)
- [ ] Hinweis: design-scout hat auch `_fundus/highlight-elemente.md` ergaenzt (Muster 12b
  Fascia-Baender). Fundus-Datei hat UNVERWANDTE offene Aenderungen aus der LP-Session ->
  nicht von hier aus committen, gehoert zum anderen Arbeitsstrang
- [ ] Build: restliche Alt-Site-Bilder sichten (64a7e-Serie komplett, picture-2600-Serie,
  P1170491_CMYK vor Web-Einsatz konvertieren) — Liste in MANIFEST.md
- [ ] Foto-Luecken: aktuelles Ladenfront-Aussenfoto (Besuch + OG-Bild) besorgen; klaeren, ob
  team-baeckerin.jpg Anke Siebert zeigt; Torten-Mini-Shooting als Upsell notieren
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
- Danach: Marvins Sicht-Check, dann Staging-Deploy (Cloudflare Pages, noindex bleibt) + Pitch.
- Vor Kunden-Launch offen: echte Rechtstexte, aktuelles Ladenfront-Foto, Preise-auf-Tafel (ja/nein),
  Fruehstuecks-Widerspruch, Ost-Schrippe-Naming, Google-Sterne/Feinschmecker-Zahl live pruefen.
- Design-Historie (v1 Zeit-Haus verworfen, Konzepte A/B/C, C1/C2/C3, D1/D2, Sieger D1b) steht im
  Log unten + `freigabe/konzepte/uebersicht.html`. QA-v1-Befunde sind mit dem v2-Neubau groesstenteils
  gegenstandslos (Zeiten-scope, Bild-lazy, Tafel-Highlight jetzt korrekt); die aktuelle QA v2 laeuft.

## Log (Neuestes oben)
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
