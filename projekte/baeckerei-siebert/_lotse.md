# baeckerei-siebert — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts. Nach jedem Meilenstein kurz mitziehen.

Stand: 2026-07-22 · Phase: **Design-Richtung offen (Favoriten D1/D2, warm+collage nach Recherche)**

## Was & wo
- **Spekulations-Case / Kaltakquise**: unaufgefordert gebaute Vorschau fuer die Baeckerei & Konditorei
  Anke Siebert (Schoenfliesser Str. 12, 10439 Berlin). Ziel: Verkauf der neuen Website.
- Berlins aeltestes Baeckereigeschaeft, seit 1906, 5. Generation. **Jubilaeumsjahr 120 Jahre laeuft JETZT (2026)**
  und die Jubilaeumsseite der Alt-Site ist leer — das ist der Pitch-Aufhaenger.
- Fakten/Copy-Quelle: `product-marketing-context.md` (komplett aus Live-Crawl der Alt-Site belegt).
- Design-Dossier + Animationsplan: `freigabe/design-richtung.md`.

## Feste Entscheidungen (NICHT neu aufrollen)
- **Design-Richtung = C ("Aus der Tuete"), mit dem ECHTEN Marken-Look** (Marvin 2026-07-22):
  Baeckerei-Rot + Gold + Loewen-Brezel-Wappen + Schreibschrift, NICHT das v1-"Zeit-Haus"
  (Gruen/League Gothic) und NICHT die kraftbraune C-Urfassung. Marke ist bewusst "authentisch
  unperfekt". Feinentscheid C1 vs C2 vs Mix steht noch aus. ECHTES Wappen + neue Ladenfront-/
  Team-Fotos vom Kunden besorgen (SVG-Wappen ist nur Platzhalter).
- **Spekulations-Case-Schutz**: Vorschau IMMER mit noindex; keine Rechtstexte kopieren.
  Impressumsdaten nur als Platzhalter.
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
- **Marvin hat v1 ("Zeit-Haus") als zu generisch/AI-Slop kritisiert** (Weg des geringsten
  Widerstands: Condensed-Caps + warmes Off-White + Sticky-Timeline = ausgetretener Premium-Pfad).
  3 grundverschiedene Alternativen gebaut, warten auf Marvins Feedback:
  `freigabe/konzepte/uebersicht.html` (Hub) -> A-chronik / B-ost-moderne / C-tuete.
  A = Zeitungs-Broadsheet (Playfair/Source Serif, Spalten, s/w). B = Ost-Moderne Poster
  (Archivo, Ziegelrot/Senf, Farbbloecke). C = Aus der Tuete (Fraunces, Kraftpapier, Stempel,
  getapte Fotos). Jeweils nur Hero+Geschichte+Sortiment; Gewinner wird voll ausgebaut.
  Konzept-Fonts in konzepte/fonts/ (nicht die Build-fonts/).
- Danach: gewaehlte/gemischte Richtung ausbauen, QA-Fixes einarbeiten, Staging-Deploy, Pitch.
- **QA v1 offen (a8f690bc-Bericht, gilt sinngemaess fuer die Gewinner-Richtung):**
  BLOCKER Fokus-Outline-Selektor `.auf-deep :focus-visible` (Deszendent trifft nie ->
  Gold-Fokus auf dunklen Flaechen fehlt, 1.24:1); WICHTIG `.tz span:last-child` schlaegt
  `.tz .neu` (Publikumsliebling-Zeile grau statt gruen); scroll-padding-top fehlt (Sticky);
  Schritt-Nr #C08A4E nur 2.70:1; Nav-Touch-Targets; Bilder gross (brotregal 490 KB, sortiment
  ohne lazy); Zeiten-Tabellen ohne scope; freigabe/ + context-md beim Deploy exkludieren.
- Vor Kunden-Launch LIVE pruefen: Google-Sterne, "Feinschmecker seit 2004", OePNV-Fussweg,
  Ost-Schrippe-Naming, Fruehstuecks-Widerspruch, Foto-Freigabe + Bild von Anke Siebert.

## Log (Neuestes oben)
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
