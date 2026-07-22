# baeckerei-siebert — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts. Nach jedem Meilenstein kurz mitziehen.

Stand: 2026-07-22 · Phase: **Design-Richtung (Brief fertig, wartet auf Marvins Freigabe)**

## Was & wo
- **Spekulations-Case / Kaltakquise**: unaufgefordert gebaute Vorschau fuer die Baeckerei & Konditorei
  Anke Siebert (Schoenfliesser Str. 12, 10439 Berlin). Ziel: Verkauf der neuen Website.
- Berlins aeltestes Baeckereigeschaeft, seit 1906, 5. Generation. **Jubilaeumsjahr 120 Jahre laeuft JETZT (2026)**
  und die Jubilaeumsseite der Alt-Site ist leer — das ist der Pitch-Aufhaenger.
- Fakten/Copy-Quelle: `product-marketing-context.md` (komplett aus Live-Crawl der Alt-Site belegt).
- Design-Dossier + Animationsplan: `freigabe/design-richtung.md`.

## Feste Entscheidungen (NICHT neu aufrollen)
- **Spekulations-Case-Schutz**: Vorschau IMMER mit noindex; KEINE Fotos der Alt-Site uebernehmen
  (Rechte unklar), keine Rechtstexte kopieren. Impressumsdaten nur als Platzhalter.
- Bestellungen laufen laut Alt-Site NUR telefonisch/im Laden -> Vorschau ohne echtes Formular
  (Torten-CTA = Telefon). Formular erst nach Kundengespraech.
- Referenz-Templates fuer Animationen (Marvin, 2026-07-22): Framer "Luna Rossa" (lunarossa.framer.website)
  + "Bakeat" (bakeat.framer.website). Analyse steht in `freigabe/design-richtung.md` — nicht neu ausleseen.
- KEIN Scroll-Hijacking/Smooth-Scroll-Wrapper wie in den Framer-Demos (Fundus-Regel: natives Scrollen
  nie kapern; sticky + IntersectionObserver stattdessen).

## Offene Punkte
- [ ] **Marvin: Design-Richtung freigeben** (`freigabe/design-richtung.md`: Tokens, Signature, Sektionsplan)
- [ ] Marvin: Bild-Strategie fuer die Vorschau entscheiden (Platzhalter/eigene Fotos vs. Alt-Site-Fotos
  nur im privaten Pitch zeigen — Rechte!)
- [ ] Danach: Skill `struktur-wireframe` (Freigabe-Dokument + Lo-Fi-Wireframe), dann Build
- [ ] Lueckenliste aus product-marketing-context.md ist fuers KUNDENGESPRAECH (nicht blockierend fuer Vorschau):
  Jubilaeums-Aktion-Details, Du/Sie, Tortenvorlauf, Bewerbungsweg, Englisch-Version
- [ ] Pitch-Material (Anschreiben/QR-Flow wie angebot-LP) erst NACH fertiger Vorschau

## Was ist JETZT relevant
- Warten auf Marvins Freigabe der Design-Richtung. Bis dahin NICHT bauen.

## Log (Neuestes oben)
- 2026-07-22: Projekt angelegt. Brief via brief-builder aus Live-Crawl der Alt-Site (alle Unterseiten).
  Framer-Templates Luna Rossa + Bakeat im Browser ausgelesen (DOM-Analyse der Animationsmechanik,
  Sektionsaufbau, Typo/Farben) -> `freigabe/design-richtung.md`. Wartet auf: Design-Freigabe Marvin.
