# Highlight-Elemente: projektuebergreifende Bibliothek

Devise (Marvin, 2026-07-11): Highlights sind Streusel auf dem Kuchen, nicht der Teig.
1-2 pro Seite, bewusst gewaehlt. Und: lieber bewusst GEGEN ein Element entscheiden als
aus Unwissenheit. Diese Liste existiert, damit wir bei jedem Projekt den vollen Katalog
auf dem Tisch haben.

Regel fuer Claude: Kein Muster als "zu fragil" aussortieren. Alles hier laesst sich
fehlerfrei bauen; wenn ein Muster heikel ist, steht hier WIE man es robust baut
(und nach dem ersten echten Einsatz: der erprobte Code in _referenz/technik-patterns.md).

Pflege: In jeder Design-/Wireframe-Phase diese Liste konsultieren und passende
Kandidaten anbieten. Neue Muster (aus Templates, 21st.dev, Awwwards, Kunden-Screenshots)
hier ergaenzen: Name, gesehen bei, Wirkung, robuste Konstruktion, wann passend.

---

## Scroll- und Interaktions-Highlights

### 1. Destination-/Routen-Rotator (Sticky Content-Wechsler)
- Gesehen bei: traavellio.framer.website (Sticky-Scroll-Destinations), "Top Destinations
  This Season"-Template (Karussell mit Punkte-Bogen), MARLOU v2.1 (erste eigene Fassung)
- Wirkung: Eine Sektion wird zur Buehne; Inhalte wechseln beim Scrollen, Bild + Text +
  Marquee synchron. Der staerkste "Erlebnis"-Moment einer Seite.
- Robuste Konstruktion: position:sticky auf dem Buehnen-Container, IntersectionObserver
  oder Scroll-Progress fuer den Zustandswechsel, Opacity-Crossfade statt Transform-Jacking.
  IMMER zusaetzlich Pfeile/Punkte als klickbarer Weg (Mobile + a11y), prefers-reduced-motion:
  statisch mit Pfeilen. NIE das native Scrollen kapern.
- Wann passend: 3-6 gleichartige Kern-Objekte (Produkte, Destinationen, Cases) auf der
  Startseite. Nicht bei nur 2 Objekten, nicht mehrfach pro Seite.
- Status: Wireframe-Fassung MARLOU (Klick-Mechanik). Scroll-Fassung im MARLOU-Build
  bauen + auf echten Geraeten testen, danach Code in technik-patterns.md.

### 2. Marquee / Running Text (mit Bildern oder Objekten zwischen den Woertern)
- Gesehen bei: traavellio (Laendernamen + Mini-Bilder), tourvia (Activities-Band),
  "Top Destinations"-Template (Laender + Landkarten-Shapes), 21st.dev (12+ Varianten:
  Infinite Text, Perspective, Gooey, Logo-Scroller)
- Wirkung: Bewegung als Trenner; transportiert Menge ("wir waren ueberall") ohne Platz.
- Robuste Konstruktion: CSS-Animation auf duplizierter Zeile (translateX -50 Prozent,
  linear infinite), pausiert bei hover, steht bei prefers-reduced-motion. Kein JS noetig.
- Wann passend: als Trenner vor CTA-Band, als Beleg-Band (Orte, Kunden, Leistungen).
  Mit Bildern zwischen den Woertern wird es vom Deko- zum Beleg-Element.
- Status: MARLOU v2.1 statisch mit Foto-Thumbs; animierte Fassung im Build.

### 3. Vorher/Nachher-Slider (Image Comparison)
- Gesehen bei: 21st.dev Kategorie "Comparisons" (Image Comparison Slider, 935 Likes),
  Standard bei Handwerk/Beauty/Renovierung
- Wirkung: Der Nutzen wird zieh-bar. Staerkstes Element, wenn "vorher schlecht,
  nachher gut" das Kernversprechen ist.
- Robuste Konstruktion: 2 uebereinanderliegende Bilder, clip-path ueber input[type=range]
  (nativ, touch-tauglich, a11y gratis), ~30 Zeilen. Griff als sichtbarer Button.
- Wann passend: Beratungsleistungen (Chaos vs. Plan), Handwerk, Redesigns.
  MARLOU-Kandidat: 40-Tabs-Recherche vs. fertiger Tagesplan (Beratungs-Seite).
- Status: Idee, noch nie gebaut. Beim ersten Einsatz Code in technik-patterns.md.

### 4. Accordion mit Bildflaeche (offener Eintrag zeigt Preview)
- Gesehen bei: travelio (Services mit Progress), saltandwind (Destinations)
- Wirkung: Liste wird zum Schaufenster; rechtfertigt Preise visuell (PDF-Preview).
- Robuste Konstruktion: native details/summary + CSS, Bildflaeche im offenen Eintrag.
  Progress-Bar/Auto-Advance weglassen (Chrome ohne Informationsgewinn).
- Status: MARLOU v2 Guides-Seite (Wireframe, funktioniert).

### 5. Stats-Band mit grossen Zahlen (Counter)
- Gesehen bei: tourvia (Counter), Porto-Fundus (Riesen-Typo-Mechanik)
- Wirkung: Beleg statt Behauptung; ersetzt fehlende Testimonials strukturell.
- Robuste Konstruktion: Groessenkontrast traegt (48-104px Zahl, Mono-Label 11px).
  Count-up-Animation optional via IntersectionObserver, einmalig, reduced-motion: statisch.
- Status: MARLOU v2 Ueber-uns (statisch). Count-up noch nie gebaut.

### 5b. Interaktiver Globus mit Routen-Pins (Marvins Idee, 2026-07-11)
- Gesehen bei: Marvins Konzept fuer MARLOU; verwandt: cobe-Globes auf 21st.dev,
  globe.gl-Landingpages
- Wirkung: Alle Reisen/Standorte auf einen Blick verortet; "wir waren wirklich dort"
  wird raeumlich erfahrbar. Auto-Rotation nach Load, Ziehen zum Drehen, Zoom
  (Scroll + Zwei-Finger-Pinch), Pins pro Ort, Routen als Grosskreis-Boegen, Filter.
- Robuste Konstruktion (erprobt in projekte/marlou/freigabe/demo-globus.html):
  d3-geo Orthographic auf Canvas (kein WebGL noetig, Line-Art passt zu Karten-Welten),
  world-atlas 110m (klein), Pointer-Events fuer Drag (scale-adjustierte Rotation,
  Lat-Klemme +-75), wheel + touch-Pinch fuer Zoom, d3.timer fuer Auto-Rotation.
  FALLEN: d3.timer/rAF pausiert in Hintergrund-Tabs (nicht als Bug jagen);
  Timer-Uhr vs. performance.now() nicht mischen (gleiche Zeitbasis verwenden!);
  prefers-reduced-motion: keine Auto-Rotation; touch-action:none auf der Buehne,
  sonst kaempft der Browser ums Scrollen. Launch: d3 (~90KB) + topojson selbst
  hosten (DSGVO), Alternative fuer Sparsamkeit: cobe (~5KB, aber ohne Zoom/Labels).
- Wann passend: Marken mit echter geografischer Story (Reisen, Import, Standorte).
  Nicht als Deko fuer Firmen ohne Orts-Bezug. Grosses Element: zaehlt als DAS
  Highlight seiner Seite.
- Status: Demo gebaut + funktional getestet (MARLOU). Nach Launch-Einsatz Code in
  technik-patterns.md.

### 5c. Split-Flap-Abflugtafel (Solari-Board) (Marvins Idee, 2026-07-11)
- Gesehen bei: alte Flughafen-/Bahnhofs-Anzeigetafeln; Marvins Konzept "der Urlaub
  beginnt auf der Website"
- Wirkung: Produkte/Angebote als Abfluege inszeniert; sofort erkennbare nostalgische
  Reise-Ikonografie, macht aus einer Liste ein Objekt.
- Robuste Konstruktion (Design-Probe: projekte/marlou/freigabe/demo-boarding.html):
  Grid mit Mono-Kacheln, jeder Buchstabe ein span mit linear-gradient (Mittellinie =
  Klappkante), Status-Spalte in Solari-Gelb (#E8B84B auf Ink). Font: B612 Mono
  (Airbus-Cockpit-Font, OFL, self-hostbar, gwfh). Klapp-ANIMATION spaeter als Schicht:
  Buchstaben-Rotation per CSS 3D oder Zeichen-Durchlauf per JS, reduced-motion: statisch.
  Mobile: overflow-x auf der Tafel, Mindestbreite halten (Tafel darf scrollen, ist ein Objekt).
- Wann passend: Reise/Transport/Event-Marken. Die Tafel ist DAS Signature-Element
  ihrer Seite; nicht mit anderen Grossobjekten (Globus, Rotator) auf derselben Seite stapeln.
- Status: Design-Probe gebaut. Animation noch nie gebaut.

### 5d. Boarding-Pass- / Ticket-Karte (Marvins Idee, 2026-07-11)
- Gesehen bei: klassische Bordkarten/Plane-Tickets; verwandt: Ticket-UIs auf Dribbble
- Wirkung: Produktkarte wird zum Reisedokument: Perforations-Kante, Abriss-Stub,
  Barcode, Flughafen-Codes (BER -> DUR), Meta-Daten als Ticket-Felder. Der Kauf fuehlt
  sich wie Einchecken an.
- Robuste Konstruktion: flex mit .haupt + .perfo (0-Breite, dashed border-left,
  Halbkreis-Kerben via radial-gradient in ::before/::after) + .stub (abgesetzter
  Hintergrund, Barcode als repeating-linear-gradient). Kein Bild noetig. Mobile:
  Stub bricht unter die Karte (flex-wrap), Perforation wird horizontal.
- Wann passend: alles mit Ziel/Termin/Zutritt (Reisen, Events, Kurse). Stark in
  Kombination mit 5c (gleiche Welt).
- Status: Design-Probe gebaut (demo-boarding.html), Responsive-Feinschliff beim Einbau.

### 5c2. Split-Flap-Button (Marvins Richtung, 2026-07-11)
- Der Button IST eine Mini-Anzeigetafel: jeder Buchstabe eine Solari-Kachel (Gelb auf
  Dunkel), bei Hover/Fokus klappen die Buchstaben mehrfach durch (Zufallszeichen) und
  landen auf dem Text oder einem Alternativtext ("GUIDE KAUFEN" -> "ABFLUG 39 €").
- Konstruktion (gebaut + getestet, demo-boarding.html Sektion 3): JS zerlegt data-text
  in Kachel-spans; setInterval je Kachel mit gestaffeltem Tempo, laeuft-Flag gegen
  Doppel-Trigger, mouseleave/blur klappt zurueck, reduced-motion: sofort setzen.
  FALLE: setInterval wird in Hintergrund-Tabs auf 1s gedrosselt (nicht als Bug jagen).
- Nur fuer 1-2 Haupt-CTAs pro Seite; Sekundaer-Buttons bleiben ruhig.

### 5f. Reise-Ephemera-Familie: Postkarte, Briefmarke, Koffer-Scan, Flugroute (2026-07-11)
- Postkarte (A6-Proportion 148:105): Kundenstimmen als Urlaubsgruss (Marke, runder
  Poststempel, Adresslinien) statt Testimonial-Karussell.
- Briefmarken-Fotorahmen: Fotos mit Zackenrand per CSS-Maske (radial-gradient
  mask-size Trick), Wert-Ecke = Preis. Macht Fotos zu Objekten der Welt.
- Koffer-Scan: Produktinhalt als Roentgenbild (dunkles Panel, Kofferumriss,
  transparente beschriftete Flaechen). Ersetzt Feature-Listen.
- Flugroute: gestrichelte Kurve + Papierflieger-SVG (kein Emoji) als Trenner;
  Animation spaeter via offset-path, auf dem Globus als Umlaufbahn.
- Alle in demo-boarding.html (ROUTENWERK) gebaut; Passport-Doppelseite dort im
  echten Pass-Format (2x 88x125 mm, Falz mit Schatten).

### 5e. Passport-Stempel als Beleg-Marker
- Wirkung: Zusagen (Garantie, "selbst gereist") als gestempelter Abdruck statt Behauptung.
- Konstruktion: border double + border-radius, rotate(-6deg), mask-image mit
  radial-gradient-Fehlstellen fuer den Abdruck-Look. Mono-Font, EINE Stelle pro Seite.
- Verwandt mit Muster 9 (Zackenkante), gleiche Anti-Slop-Warnung: sparsam, sonst Deko.

## Layout-Highlights (statisch, sofort einsetzbar)

### 6. Riesen-Typo als Raumfueller (Outline oder angeschnitten)
- Gesehen bei: tourvia-Wortmarke, Porto (397px), MARLOU "BALD."
- Wann passend: Seiten mit wenig Inhalt (Coming Soon, 404, Kapitel-Trenner).

### 7. Ueberlappung (Karten ragen in die Kopf-/Hero-Flaeche)
- Gesehen bei: travelio (Karten auf Cover-Unterkante)
- Konstruktion: negatives margin-top + z-index. Toetet den Bloecke-Stapel-Eindruck.

### 8. Versetzte Bild-Duos / asymmetrische Splits
- Gesehen bei: traavellio (About). Zwei Bilder ungleich gross, vertikal verschoben.

### 9. Zacken-/Stempelkante als Sektions-Trenner
- Gesehen bei: "Top Destinations"-Template (Briefmarken-Rand), Passport-Aesthetik
- Konstruktion: CSS mask oder radial-gradient-Kette, eine Zeile, kein Bild.
- ACHTUNG: eigenstaendiges Deko-System. Nur wenn es DAS Signature-Element ist,
  nicht zusaetzlich zu einem anderen (Anti-Slop: eines pro Seite).

### 10. Ladebalken-Rennen (Vergleichs-Demo)
- Gesehen bei: Wireframe marvin-web-landingpages LP3 (Speed-Angle, 2026-07); verwandt mit
  PageSpeed-Balken-Grafiken in Performance-Tools
- Wirkung: Der Geschwindigkeits-Unterschied wird zuschaubar statt behauptet: zwei Balken
  starten auf Klick, "mit Ballast" vs. "ohne Ballast", einer ist frueher fertig.
- Robuste Konstruktion: zwei divs mit CSS-Transition auf width/transform (scaleX),
  Start per Klick-Klasse (Button, kein Scroll-Trigger noetig), Dauer-Verhaeltnis
  hart kodiert (kein Fake-Messwert kommunizieren, Labels ehrlich als Schema).
  prefers-reduced-motion: Balken statisch mit Endwerten. Kein JS-Framework noetig.
- Wann passend: wenn "schneller/leichter" das Kernversprechen ist und ein ehrlicher
  Beleg (echte Messung) daneben steht. Nicht als Deko-Animation ohne Aussage.
- Status: Wireframe klickbar; nach erstem Build Code in technik-patterns.md.

### 11. Typenschild / Datenplakette (Spec-Plate)
- Gesehen bei: teenage.engineering (Spec-Tabellen als Produktsprache; Token-Check
  2026-07-16: Ink #231F20, Grau-Canvas, ein Rot #ED2024), klassische Maschinen-Plaketten
- Wirkung: Preis/Paket tritt auf wie ein gepruftes Geraet: Werte statt Adjektive
  (PREIS / DAUER / EIGENTUM als Plaketten-Zeilen). Ersetzt Pricing-Card-Einerlei.
- Robuste Konstruktion: 1px-Rahmen, 4 "Nieten" als radial-gradient-Punkte in den Ecken
  (::before/::after oder background mit 4 Positionen), Zeilen als Mono-Tabelle mit
  Hairlines. Reines CSS, kein Bild.
- Wann passend: Handwerk/Technik/Industrie-Zielgruppen, Festpreis-Angebote,
  Datenblatt-Aesthetik. Zaehlt als DAS Signature-Element seiner Seite (nicht mit
  Stempel 5e mischen).
- Status: Idee aus design-scout-Recherche marvin-web-landingpages (Richtung C), noch nie gebaut.

### 12. Bon-Rechnung (Posten-Summen-Block als Beweis-Sektion)
- Gesehen bei: everlane.com "Transparent Pricing" (Kostenaufschluesselung als
  Vertrauens-Grafik), Kassenbon-Aesthetik
- Wirkung: Kostenklarheit wird sichtbar: Posten links, Betrag rechts in Mono,
  gestrichelte Hairlines, Summenzeile fett mit Doppellinie. Rechnung als Argument.
- Robuste Konstruktion: dl/table, border-bottom:1px dashed je Zeile, Zahlen in
  Monospace (stehen automatisch tabellarisch), Summe mit border-top:3px double.
  Count-up der Summe optional via IntersectionObserver (vgl. Muster 5).
- Wann passend: Preisvergleiche, Ersparnis-Argumente, Festpreis-Kommunikation.
  Kombiniert gut mit Stempel 5e (gleiche Beleg-Welt).
- Status: Idee aus design-scout-Recherche marvin-web-landingpages (Richtung B), noch nie gebaut.

### 13. Featured-Zitat-Band mit Attribution
- Gesehen bei: saltandwind (EIN Testimonial statt Karussell), tourvia
- MARLOU-Dreh: O-Ton der Gruender mit Ort+Jahr wie ein Logbuch-Eintrag, solange
  keine Kundenstimmen existieren.

---

Basis-Sektionsmuster (M1-M15 mit Konstruktionsdetails): projekte/marlou/design-dossier.md,
Abschnitt "Sektions-Muster fuer Wireframe v2". Bei Gelegenheit hierher generalisieren.
