# baeckerei-siebert — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts. Nach jedem Meilenstein kurz mitziehen.

Stand: 2026-07-22 · Phase: **Freigabe (Struktur + Design-Richtung liegen Marvin vor)**

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
- [ ] Lueckenliste aus product-marketing-context.md ist fuers KUNDENGESPRAECH (nicht blockierend fuer Vorschau):
  Jubilaeums-Aktion-Details, Du/Sie, Tortenvorlauf, Bewerbungsweg, Englisch-Version
- [ ] Pitch-Material (Anschreiben/QR-Flow wie angebot-LP) erst NACH fertiger Vorschau

## Was ist JETZT relevant
- Warten auf Marvins Freigabe: Design-Richtung + Struktur/Wireframes. Bis dahin NICHT bauen.
- Seiten-Set (festgelegt im Wireframe, 6 Seiten): index, geschichte, sortiment, torten,
  ausbildung, besuch + Pflichtseiten im Build.

## Log (Neuestes oben)
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
