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

### 10. Featured-Zitat-Band mit Attribution
- Gesehen bei: saltandwind (EIN Testimonial statt Karussell), tourvia
- MARLOU-Dreh: O-Ton der Gruender mit Ort+Jahr wie ein Logbuch-Eintrag, solange
  keine Kundenstimmen existieren.

---

Basis-Sektionsmuster (M1-M15 mit Konstruktionsdetails): projekte/marlou/design-dossier.md,
Abschnitt "Sektions-Muster fuer Wireframe v2". Bei Gelegenheit hierher generalisieren.
