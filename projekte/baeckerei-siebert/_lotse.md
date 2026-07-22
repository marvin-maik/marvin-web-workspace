# baeckerei-siebert — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts. Nach jedem Meilenstein kurz mitziehen.

Stand: 2026-07-22 · Phase: **QA (Build v1 fertig, qa-polish laeuft)**

## Was & wo
- **Spekulations-Case / Kaltakquise**: unaufgefordert gebaute Vorschau fuer die Baeckerei & Konditorei
  Anke Siebert (Schoenfliesser Str. 12, 10439 Berlin). Ziel: Verkauf der neuen Website.
- Berlins aeltestes Baeckereigeschaeft, seit 1906, 5. Generation. **Jubilaeumsjahr 120 Jahre laeuft JETZT (2026)**
  und die Jubilaeumsseite der Alt-Site ist leer — das ist der Pitch-Aufhaenger.
- Fakten/Copy-Quelle: `product-marketing-context.md` (komplett aus Live-Crawl der Alt-Site belegt).
- Design-Dossier + Animationsplan: `freigabe/design-richtung.md`.

## Feste Entscheidungen (NICHT neu aufrollen)
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
- Build v1 steht (Commit fa6fe59). QA-Befunde abarbeiten, dann Marvins Sicht-Check im echten
  Browser (Dev-Server: preview_start "siebert", Port 8793, serve-nocache).
- Danach: Staging-Deploy (Cloudflare Pages, noindex aktiv) + Pitch-Material.
- Vor Kunden-Launch LIVE pruefen: Google-Sterne, "Feinschmecker seit 2004", OePNV-Fussweg,
  Ost-Schrippe-Naming, Fruehstuecks-Widerspruch, Foto-Freigabe + Bild von Anke Siebert.

## Log (Neuestes oben)
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
