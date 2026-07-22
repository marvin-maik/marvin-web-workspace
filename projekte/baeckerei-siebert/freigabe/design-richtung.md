# Design-Richtung: baeckerei-siebert (zur Freigabe)

Stand: 2026-07-22. Grundlage: product-marketing-context.md + Live-Analyse der beiden
Framer-Referenzen (DOM-Auslese im Browser, nicht nur Screenshots).

---

## 1. Was die Referenz-Templates technisch machen (ausgelesen)

### Luna Rossa (lunarossa.framer.website) — "der warme Auftritt"
Typo: Koulen (Condensed-Caps-Display, 132px) + Poppins. Palette: Creme #FFF0DD,
Karamell #B27647, dunkles Beerenrot als CTA. Freisteller-Food-Fotos, schraeg rotiert,
mit handgezeichneten Pfeilen + Notizen ("100% wheat").

Animations-Inventar (aus Initial-Transforms im DOM):
- **Appear/Fade-up**: Karten und Bloecke starten bei `translateY(60px)` + Opacity 0,
  federn beim Insichtkommen hoch (Products 8x, Process 4x, ueberall).
- **Bild-Slide-in**: "Animated Frame"-Wrapper starten bei `translateX(1000px)` —
  Bilder schieben sich seitlich rein (Process-Sektion 4x).
- **Count-up-Zahlenband**: 10K+ / 99% / 500+ zaehlen beim Insichtkommen hoch.
- **Sticky-Scrollytelling**: Service-Sektion ist 7900px hoch mit EINEM sticky Element —
  4 Karten (`translateY(-50%)`) schieben sich nacheinander ueber die Buehne.
- **Marquee**: Testimonial-Zeile startet bei `translateX(-1400px)` (horizontales Band).
- **Blog-Reveal**: Bilder starten bei `scale(1.2)` und zoomen auf 1 zurueck.
- Hero: rotierte Freisteller (rotate -15deg etc.), Announcement-Bar, Pill-Nav.
- Smooth-Scroll-Wrapper (Lerp) ueber allem — fuehlt sich weich an, kapert aber das
  native Scrollen (hat in der Analyse sogar den Browser aufgehaengt).

### Bakeat (bakeat.framer.website) — "der editoriale Auftritt"
Typo: Inter Display 700, 150px, Letterspacing -4px + DM Sans. Palette: Elfenbein #FCF7EB,
Tinte #141415, EIN Terracotta-Akzent im Logo/Wortanfang. Sehr viel Weissraum, Hero nur
aus Typo + einem Satz.

Animations-Inventar:
- **Riesiges Sticky-Scrollytelling**: "Hero & Steps" = 8080px mit 3 sticky Elementen;
  "Behind the dough" = 5786px, darin 3 Bild-Panels a 1820px, die an einem gepinnten
  Text vorbeiziehen. Die halbe Seite IST die Scroll-Erzaehlung.
- **3D-Kartenstapel**: About-Sektion 3785px, sticky, 8 Elemente mit `perspective(1200px)` —
  Karten kippen/stapeln beim Scrollen.
- **Zoom-out-Reveal**: Bilder starten bei `scale(1.2)` (Artisans, News 3x).
- **Marquee** bei den Artisans (translateX-Ticker).

### Uebernehmen vs. bewusst weglassen
UEBERNEHMEN (alles vanilla robust baubar, IntersectionObserver + position:sticky + CSS):
Fade-up-Appear, Bild-Slide-in, Count-up-Band, EIN Sticky-Scrollytelling, Zoom-out-Reveal,
Marquee als Trenner, handgezeichnete Annotationen am Hero-Freisteller.
WEGLASSEN: Smooth-Scroll-Wrapper (Scroll-Hijacking, Fundus-Regel + a11y; hat die Demo
selbst zum Haengen gebracht), 3D-Perspective-Kartenstapel (zweites Scrollytelling waere
Streusel-Ueberdosis), Announcement-Bar (kein Shop).
Alle Animationen: einmalig, `prefers-reduced-motion` -> statisch, mobile-first ab 375px.

---

## 2. Richtung fuer Siebert: "Das Zeit-Haus" (Arbeitstitel)

Kernidee: Die Seite erzaehlt EINE Sache — **Zeit als Zutat**. 120 Jahre am selben Ort,
16 Stunden Sauerteig. Bakeats editoriale Ruhe als Grundgeruest, Luna Rossas Waerme
(Freisteller, Annotationen, Counter) als Wuerze. Kein Museums-Look: die Seite muss
beweisen, dass Tradition hier Qualitaetsbeweis ist, nicht Nostalgie.

Anti-Slop-Wache: Creme+Terracotta ist Default-AI-Look UND die Palette beider Templates —
wir uebernehmen die MECHANIK der Templates, nicht ihre Farben.

### Token-Vorschlag (Herleitung aus der Siebert-Welt, Kontraste beim Build rechnen)
    --bg:     Mehlweiss, warmes Off-White (Richtung #F7F2E9)
    --ink:    Krustenbraun, fast schwarz (Richtung #2B2118)
    --signal: Ladengruen, dunkles Flaschengruen wie alte Berliner Ladenfronten
              (Richtung #1F4A38) — bewusst KEIN Terracotta
    --warm:   Krusten-Karamell fuer Flaechen/Illustration (Richtung #C08A4E)
    --line:   Roggen-Grau (Richtung #D8CFC0)
Herleitung: Mehl, Kruste, die gruene Ladenfront-Tradition Berliner Handwerksgeschaefte
mit Goldschrift. Das Gruen unterscheidet uns von jedem AI-Baeckerei-Klon.

Fonts (selbst hosten, DSGVO): Display = Condensed-Caps im Geist historischer
Ladenbeschriftung (Kandidaten: Oswald oder Anton; Umlaute pruefen!). Body = ruhige
humanistische Sans (Kandidaten: Source Sans 3 oder Figtree). Ziffern gross und
praesent (Jahreszahlen sind Hauptdarsteller).

### Signature-Element (genau EINES) + Fundus-Abgleich
**Das Zeitband 1906-2026**: EIN Sticky-Scrollytelling (Fundus-Muster #1,
Sticky Content-Wechsler) durch fuenf Generationen. Links gepinnt: riesige Jahreszahl
+ Generation (Gustav Siebert 1906 -> ... -> Anke Siebert 2021), rechts ziehen
Panels vorbei. Endet im Jubilaeums-Panel "120 Jahre. 2026." — genau die Seite, die
auf der Alt-Site leer ist (Pitch-Moment!). Robust: position:sticky + IO,
Punkte-Navigation als klickbarer Zweitweg, reduced-motion: statische Liste.
Zweiter Fundus-Kandidat (bewusst als Ergaenzung, kleiner): #5 Stats-Band mit
Count-up (1906 / 5 Generationen / 2x Feinschmecker / 16 h Sauerteig).
Bewusst DAGEGEN entschieden: Vorher/Nachher-Slider (#3, kein Vorher-Material),
Globus (#5b, kein Raum-Thema), zweites Scrollytelling a la Bakeat (Ueberdosis).

### Sektionsplan (Onepager index.html) mit Animations-Zuordnung
1. **Hero** — "Berlins aelteste Baeckerei. Seit 1906." + Sofort-Status "Heute geoeffnet
   bis 18:30" + Adresse. Freisteller-Brot mit handgezeichneter Annotation
   ("Sauerteig. 16 Stunden.") im Luna-Rossa-Stil. Message-Match fuer Touristen-Suche
   "aelteste Baeckerei Berlins". [Appear: Headline-Zeilen fade-up gestaffelt]
2. **Zahlenband** — 1906 · 5 Generationen · 2x DER FEINSCHMECKER · 16 h Sauerteig
   [Count-up einmalig bei Insicht]
3. **Zeitband 1906-2026** — SIGNATURE (s.o.) [Sticky-Scrollytelling]
4. **Sortiment** — Karten: Brote / Broetchen (Steinplatte!) / Kuchen & Feingebaeck /
   Torten. Konkrete Namen statt Kategorien-Blabla: Splitterbroetchen, Spritzkuchen,
   Bienenstich. [Fade-up gestaffelt, Bilder Zoom-out-Reveal]
5. **Handwerk "Unsere wichtigste Zutat ist Zeit"** — 3 echte Sequenz-Schritte (Abend:
   Sauerteig ansetzen -> Nacht: 12-16 h Reife -> Morgen: von Hand backen), nummerierte
   Marker hier LEGITIM (echte Sequenz). Keine Teiglinge, keine Vormischungen,
   Rohstoffe aus Berlin/Brandenburg. [Bild-Slide-ins]
6. **Torten auf Bestellung** — Frankfurter Kranz, Schwarzwaelder, Hochzeit/Firmenfeier;
   CTA = Telefon (Bestellweg laut Alt-Site). [Zoom-out-Reveal]
7. **Ausbildung** — Benefits, allen voran "5-Tage-Woche, Sonntag UND Montag frei",
   unbefristet. [Fade-up]
8. **Besuch** — Oeffnungszeiten (inkl. Sommerzeiten-Mechanik!), Anfahrt OHNE
   Google-Embed, NAP, JSON-LD Bakery. [statisch — hier zaehlt nur Klarheit]
9. Footer + Pflichtseiten. Dazwischen ggf. EIN Marquee-Trenner (Sortiment-Namen als Band).

Botschutz entfaellt vorerst (kein Formular in der Vorschau). noindex Pflicht.

---

## 3. Entscheidung Marvin
- [ ] Richtung "Zeit-Haus" so bauen? (Tokens, Signature, Sektionsplan)
- [ ] Ladengruen als Signalfarbe ok, oder lieber in der Karamell-Welt der Templates bleiben?
- [ ] Bild-Strategie Vorschau: neutrale Platzhalter vs. Alt-Site-Fotos nur im privaten Pitch
