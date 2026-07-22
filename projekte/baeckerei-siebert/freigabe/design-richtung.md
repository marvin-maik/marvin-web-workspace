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

### Tokens (design-scout 2026-07-22: Kontraste GERECHNET, nicht geschaetzt)
    --bg:          #F7F2E9   Mehlweiss
    --ink:         #2B2118   Krustenbraun (14.12:1 auf bg, AAA)
    --signal:      #1F4A38   Ladengruen (8.99:1 auf bg, traegt als Textfarbe, AAA)
    --signal-deep: #1E3932   tiefes Fascia-Gruen fuer Baender/Footer (11:1+ auf bg)
    --gold:        #CBA258   Goldocker, NUR auf signal-deep (dort 5.25:1, AA)
    --warm:        #C08A4E   Karamell, nur Flaechen/Illustration, NIE Text auf hell
                             (auf Mehlweiss nur 2.70:1!)
    --muted:       #6B5D4A   (5.72:1 auf bg, AA)
    --line:        #D8CFC0   Roggen-Hairline
Herleitung + Realwelt-Beleg (Scout): An echten Ladenfronten um 1900 sass Goldschrift
IMMER auf der dunklen Fascia, nie auf der Hauswand (UK-Konservierungs-Leitfaeden,
Berliner Periodenfotos epilog.de 1900-1910). Systembeweis Dunkelgruen+Gold+Creme als
Food-Marke: Starbucks (House Green #1E3932, Gold strikt als Zeremonien-Farbe).
CSS-Konvention im Build: --gold existiert nur in Selektoren mit signal-deep-Hintergrund.

Fonts (selbst hosten, DSGVO; Subsets per gwfh-API verifiziert, latin-ext = Umlaute ok):
- Display: **League Gothic** (OFL). Revival von Alternate Gothic No. 1, Morris Fuller
  Benton, **1903** — die reale Schriftsippe der Ladenschilder exakt aus der Gruenderzeit
  (Baeckerei: 1906). Bessere Story als Oswald (verbraucht) oder Anton (Plakat-brutal).
  Achtung Caps-Zeilen: Luft fuer AE/OE/UE ("BAECKEREI"), line-height nicht unter 1.05.
- Body: **Source Sans 3** (variable) — gleiche Gothic-DNA, `font-variant-numeric:
  tabular-nums` fuer Jahreszahlen und Oeffnungszeiten (Ziffern sind Hauptdarsteller).
- Type-Scale mobile-first: 13 / 17 / 24 / 40 / 64 (Hero mobil) -> Desktop 104;
  Zeitband-Jahreszahl clamp(88px, 22vw, 260px).

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
Ergaenzung aus dem Scout-Dossier (LEGO-History-Muster): Jahres-Anker 1906/.../2021/2026
als klickbare Sprungliste = Zweitweg fuers Zeitband; bei reduced-motion IST diese
Liste die komplette Darstellung. Storyboard-Demo: `freigabe/storyboard.html`, Szene 03.

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

## 3. Referenzen + Zusatz-Muster (design-scout, live verifiziert)

1. **boudinbakery.com/our-story** — SF-Baeckerei seit 1849, gleiche Positionierung
   ("oldest continuously operating"). Mechanik uebernehmen: Geschichte THEMATISCH statt
   nur chronologisch erzaehlen und Bildstrategie "Handwerk im Jetzt statt Archivvitrine":
   **Anke Siebert als lebende 5. Generation zeigen, nicht Gustav als Gemaelde.**
   Palette NICHT uebernehmen (Creme+Braun = AI-Default-Naehe).
2. **oefferl.bio** (Wien) — Beweis, dass Sauerteig-Tradition modern-minimal geht:
   Tradition als Werte-Sektion NACH dem Produkt, Ton "Brote mit Charakter" =
   unser Klartext-Level 2.
3. **lego.com/en-us/history** — robusteste lebende Heritage-Timeline: Dekaden-Anker,
   progressive disclosure. Quelle fuer den Zeitband-Zweitweg (s.o.).

Lehre + PITCH-ARGUMENT: Die Awwwards-praemierten Jubilaeums-Scrollytellings sind fast
alle TOT (Hema-Quebec offline, Lavazza/120 = 404). Jubilaeums-MICROSITES sterben nach
dem Jubilaeumsjahr — das Zeitband gehoert in die Hauptseite integriert. Fuer den Pitch:
"Eine Jubilaeumsseite, die nach 2026 nicht stirbt, sondern zur Geschichte der
Hauptseite wird."

Neue Konstruktions-Muster (auch im Fundus, Muster 12b):
- **Ladenfront-Fascia-Baender**: 2-3 Sektionskoepfe als vollflaechige signal-deep-Baender,
  League-Gothic-Caps in Gold, feine Doppellinie als Schild-Zierkante. Tradition als
  Material, nicht als Behauptung.
- **Sortiment als Preistafel** (Fundus #14, Fuehrungspunkte): Fallback, falls die
  Sortiment-Karten zu Template-nah geraten ("Splitterbroetchen ......... Steinplatte").

Plan B (nur falls Gruen im Kundengespraech faellt): "Backstuben-Protokoll" —
dokumentarisch, Mono-Zeitstempel der Backnacht (22:00 Sauerteig / 02:30 Ofen an /
06:00 Ladentuer auf) als Ordnungssystem, signal = dunkles Roggen-Karamell #8A5A28,
kein Gruen/Gold. Ehrlich: schwaecher, weil es die Touristen-Suchintention
"aelteste Baeckerei Berlins" schlechter bedient.

---

## 4. Entscheidung Marvin
- [ ] Richtung "Zeit-Haus" so bauen? (Tokens, Signature, Sektionsplan; Storyboard liegt bei)
- [ ] Ladengruen + Gold-auf-Gruen ok? (Kontraste gerechnet, Realwelt-Belege im Dossier;
      Alternative waere Plan B "Backstuben-Protokoll", bewertet: schwaecher)
- [ ] Bild-Strategie Vorschau: neutrale Platzhalter vs. Alt-Site-Fotos nur im privaten Pitch
