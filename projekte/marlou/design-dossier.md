# Design-Dossier: MARLOU (Travel Planning fuer Abenteuer-Paare, DACH)

Erstellt: 2026-07-10, design-scout. Quellen: lokale DESIGN.md-Sammlung (wired, nike, starbucks),
Fundus (Porto-Analyse), Live-Extraktion tourvia/traavellio/travelio.framer.website (curl),
jess.travel, travel.saltandwind.com. dembrandt nicht installiert, Tokens per curl+grep gezogen.

---

## Ehrliche Bewertung des CI-Vorschlags aus dem Erstgespraech

**Urteil: austauschbarer AI-Slop, nicht vertretbar in dieser Form.**

| Bestandteil | Befund |
|---|---|
| #F7F3EE Creme-BG + Serif + #C47A4A Terrakotta | Exakt der verbotene Default-Look Nr. 1. Kein Grenzfall, Volltreffer. |
| DM Serif Display + DM Sans | Das meistgenerierte AI-Font-Paar 2024-2026. Signalisiert "Template", nicht "radikal authentisch". |
| Caveat/Dancing Script fuer Zitate | Handschrift-Akzentfont ist Slop-Klischee Nr. 2 (jede AI-Wellness-Site hat ihn). |
| Dschungelgruen #2B4035 | Einzig verteidigbarer Teil. Die Herleitung (Dschungel, Natur) ist legitim, aber die Ausfuehrung (Gruen als Akzent auf Creme neben Terrakotta) findet sich tausendfach bei Coaching-/Boutique-Sites. |

Der Kern des Problems: Die Marke verkauft "das Gegenteil von dem, was jede KI anbieten kann"
(O-Ton Checkliste), sieht aber aus wie das, was jede KI generiert. Das ist ein Positionierungs-
Widerspruch, kein Geschmacksproblem. Das Gruen ist rettbar (siehe Richtung C), der Rest nicht.

---

## Richtung A: Expeditionslogbuch (Empfehlung)

- **Herleitung aus Zielgruppe:** Berufstaetige Abenteuer-Paare vertrauen Praezision und Beleg,
  nicht Fernweh-Prosa. Die visuelle Welt kommt aus Topo-Karten, GPS-Daten und Reiselogbuechern:
  "Wir waren dort" wird zum Gestaltungsprinzip, jedes Foto und jede Sektion traegt Koordinate,
  Ort und Jahr wie ein Feldprotokoll.
- **Referenzen:**
  - `travelio.framer.website`: Editorial-Struktur mit 3 Prozess-Saeulen ("Edited Selection /
    Shaped Around You / Held While You Travel"), minimale Nav, Footer-CTA. Struktur-Vorbild.
  - `jess.travel`: Gruenderstory frueh, 4-Schritte-Prozess, Preis-Philosophie-Sektion
    (Planungsgebuehr vs. Reisekosten getrennt erklaert). Vertrauens-Dramaturgie uebernehmen.
  - DESIGN.md `wired`: belegtes Editorial-Token-System, Hairlines #e0e0e0, Meta-Sans zu
    Display-Kontrast, kaum Marketing-Chrome. Systemlogik-Vorbild.
- **Tokens:**
  - ink `#16130E` (Tinten-Schwarzbraun) / bg `#FAF9F5` (kuehles Papierweiss, bewusst KEIN Creme)
  - signal `#C2331F` (Kartenrot: Routenmarkierung auf Topo-Karten, Expeditionszelt-Rot;
    klar getrennt von mimio-Orange #E8763A und Off-The-Path-Teal/Gold)
  - muted `#6F6A60` / line `#E2DFD7`
  - Fonts: **Cabinet Grotesk** (Display, 700/800) + **General Sans** (Body) + **IBM Plex Mono**
    (Meta/Koordinaten, nur 400). Cabinet + General Sans via Fontshare, Plex Mono OFL, alle self-hostbar.
  - Type-Scale: 12 (Mono-Meta, uppercase, letter-spacing 0.08em) → 17 (Body) → 22 → 32 → 48 →
    clamp(64px, 9vw, 104px) Hero, line-height 0.95, letter-spacing -0.02em. Der 12→104-Sprung
    (Porto-Prinzip) ist der Wow-Mechanismus.
- **Signature-Element:** **Koordinaten-Marker.** Jede Sektion oeffnet mit einer Mono-Zeile aus
  echten GPS-Koordinaten bereister Orte plus Hairline: `S 22.9576 / E 18.4904 — SOSSUSVLEI, 2024`
  als Sektions-Marker, im Hero, unter jedem Foto. Beweist "selbst erlebt" ohne es zu behaupten.
- **Konstruktions-Muster:**
  1. Sektions-Marker-Zeile: Mono-Label links ("01 / GUIDES"), Koordinate rechts, 1px-Hairline dazwischen.
  2. Fotos immer mit Mono-Caption-Leiste darunter (Ort + Jahr + wer fotografiert hat), nie nackt.
  3. Produkt-Funnel (PDF → 1:1 → Gruppenreise) als nummerierte Etappen einer Route dargestellt,
     verbunden durch eine 1px-Linie (Upsell-Pfad sichtbar, Vorgabe aus Checkliste).
  4. Preissektion nach jess.travel-Logik: Planungsgebuehr vs. Reisekosten als Zwei-Spalten-Tabelle.

## Richtung B: Filmstill (bewusst anderer Pol: dunkel, cineastisch)

- **Herleitung aus Zielgruppe:** Die Paare konsumieren Reise-Doku-Content (YouTube, Netflix-Dokus)
  abends nach der Arbeit; die Site inszeniert MARLOU-Reisen wie Szenen eines Dokumentarfilms,
  in dem der Besucher die Hauptrolle uebernehmen kann. Dunkel wie ein Kinosaal, nicht wie ein Tech-Dashboard.
- **Referenzen:**
  - `tourvia.framer.website`: narrative Sektions-Dramaturgie ("— Welcome"-Labels, Stats,
    Destination-Karten mit grossem Bild). Extrahierte Basis: BG #070707, Text #FFFFFF, Grau #4D4D4D.
  - Fundus Porto-Analyse: Type-Scale-Spruenge bis 397px, Weight 600 statt 900, line-height 0.8,
    Duotone-Bild als Einzelstueck. Mechanik uebertragbar.
  - DESIGN.md `nike`: Uppercase-Display direkt in Campaign-Fotos gebrannt, monochromes Chrome,
    Farbe nur wo Signal. Vorbild fuer Text-auf-Bild-Disziplin.
- **Tokens:**
  - ink `#EFEAE1` (warmes Leinwand-Weiss) / bg `#131210` (warmes Charcoal, KEIN blaustichiges Dark-Mode-Grau)
  - signal `#E2542F` (Glutrot: Lagerfeuer-Ember; auf Near-Black voellig anders lesbar als
    mimios Pastell-Orange auf Weiss, trotzdem im Freigabetermin explizit gegen mimio abgrenzen)
  - muted `#8B857C` / line `#2A2824`
  - Fonts: **Tanker** (Display, Fontshare, ein Schnitt, Poster-Charakter) + **Switzer** (Body,
    Fontshare). Beide kostenlos self-hostbar. Kein Neon, keine Glass-Effekte: Anti-Slop-Grenze
    zu "Dark+Neon" ist die erdige Signalfarbe und das warme Weiss.
  - Type-Scale: 13 (Caps-Meta, letter-spacing 0.12em) → 18 (Body) → 28 → 44 → clamp(72px, 11vw, 128px)
    Hero uppercase, line-height 0.9.
- **Signature-Element:** **Letterbox mit Untertitel.** Hero und Schluesselbilder im 21:9-Kinoformat
  mit echten schwarzen Balken; Bildunterschriften als zentrierte Untertitel-Zeile im Balken
  ("Tag 4. Wir tauschen das Hotel gegen ein Langhaus am Fluss.").
- **Konstruktions-Muster:**
  1. Sektionen als nummerierte Szenen ("SZENE 02 — DIE GUIDES") mit Caps-Meta-Zeile.
  2. Produkte als Filmposter-Karten im 2:3-Hochformat (PDF-Guides wie eine Poster-Wand).
  3. Stats-Band nach Tourvia-Muster (Laender, Tage unterwegs, Meter Tiefe/Hoehe) statt
     generischer "Happy Customers".
- **Risiken:** Dunkle Sites konvertieren bei kaltem DACH-Traffic oft schlechter (Seriositaets-
  Skepsis, siehe Checkliste "Ist das serioes?"); braucht durchgehend starkes eigenes Fotomaterial,
  sonst kippt es. Nur waehlen, wenn die Foto-Sichtung (Materialliste Punkt 2) Kino-Qualitaet hergibt.

## Richtung C: Feldfuehrer (gerettete Variante des Erstgespraech-Vorschlags)

- **Herleitung aus Zielgruppe:** Behaelt die Dschungelgruen-Idee, dreht aber die Systemlogik um:
  Gruen ist nicht Akzent auf Creme, sondern die EINZIGE Tinte des gesamten Interfaces, wie ein
  botanischer Feldfuehrer oder ein Expeditions-Handbuch in Ein-Farben-Druck. Die Vollfarb-Fotos
  von Marvin + Louisa sind der einzige Fremdfarbraum und wirken dadurch doppelt.
- **Referenzen:**
  - `travel.saltandwind.com`: monochromes Text-System, Fotos tragen die gesamte Farbe;
    Shop (Guides) + Beratung in einer Navigation vereint. Direktes Struktur- und Farb-Logik-Vorbild.
  - DESIGN.md `starbucks`: belegtes Beispiel, dass ein Gruen-System ueber 4 kalibrierte Stufen
    mit Rollen funktioniert (#006241/#00754A/#1E3932) statt ueber einen einzelnen Akzent.
  - `traavellio.framer.website`: Conversion-Mechanik (Preis-Karten "ab X EUR", FAQ vor dem
    Kauf-CTA, wiederholte Zwillings-CTAs PDF/Gespraech).
- **Tokens:**
  - ink `#22362C` (dunkles Blattgruen ALS TEXTFARBE, ersetzt Schwarz komplett)
  - bg `#FCFBF7` (Papier, heller und kuehler als das Creme des Vorschlags)
  - signal `#2F5A43` (helleres Gruen fuer CTAs/Links, gleiche Familie), muted `#5F6B62`, line `#DDE0D6`
  - KEIN Terrakotta, KEIN Caveat. Gedeckte Systemwelt, Fotos liefern Waerme.
  - Fonts: **Sentient** (Display-Serif, Fontshare, Light/Regular, hat Charakter statt
    DM-Serif-Glaette) + **General Sans** (Body). Beide self-hostbar.
  - Type-Scale: 14 (Caps-Label) → 18 (Body) → 24 → 36 → clamp(48px, 7vw, 80px) Serif-Hero,
    line-height 1.05, keine Uppercase im Display (Serif traegt).
- **Signature-Element:** **Dia-Rahmen.** Alle Fotos in schmalen Rahmen mit Beschriftungsleiste
  unten (Ort + Jahr in Caps-Label), wie archivierte Diapositive einer Expeditions-Sammlung.
- **Konstruktions-Muster:**
  1. Ein-Tinten-Regel konsequent: Buttons, Hairlines, Icons, alles in Gruen-Stufen, nie Schwarz.
  2. Prozess als 3 Saeulen (Travelio-Muster) + FAQ direkt vor beiden Kauf-CTAs (Traavellio-Muster).
  3. Coming-Soon-Gruppenreisen als "leerer Dia-Rahmen" mit Wartelisten-Eintrag.
- **Einordnung:** Vertretbar und dem Kundenwunsch am naechsten, aber die schwaechste der drei
  Richtungen in Sachen Eigenstaendigkeit. Nur waehlen, wenn der Kunde am Gruen haengt.

---

## Empfehlung

**Richtung A (Expeditionslogbuch).** Sie uebersetzt die Kern-Positionierung (belegbare, selbst
erlebte Abenteuer statt KI-Aggregat) direkt in ein Gestaltungssystem, funktioniert auch mit
begrenztem Fotomaterial (Papier traegt, Fotos sind Belege statt Tapete), hebt sich klar von
mimio (bunt/Gen-Z), Off The Path (Teal/Gold-Blog) und dem gesamten Creme-Serif-Feld ab und
bleibt hell genug fuer kalten DACH-Traffic mit Seriositaets-Skepsis. B ist der starke Gegenpol
fuer den Fall, dass die Foto-Sichtung Kino-Material liefert. C als Rueckfallebene fuer den Kunden.

## Verworfen

- **Original-CI unveraendert:** Volltreffer auf verbotenen Default-Look Nr. 1 (Creme+Serif+
  Terrakotta, DM-Paar, Caveat); widerspricht der eigenen "kein KI-Plan"-Positionierung.
- **Orange/Teal-Ableitungen:** Verwechslungsgefahr mit mimio (#E8763A) und Off The Path (#41A4A9 + Gold).
- **Traavellio als Gesamt-Stilvorbild:** Live-Extraktion zeigt generisches Framer-Blau #0099FF
  und Standard-Inter, nur die Conversion-Mechanik (Preis-Karten, FAQ-Platzierung) ist verwertbar.
- **Handschrift-Font fuer Zitate:** Slop-Marker; Persoenlichkeit kommt aus O-Ton-Copy und
  Koordinaten/Untertiteln, nicht aus Fake-Handschrift.

---

## Sektions-Muster fuer Wireframe v2

Erstellt: 2026-07-11, design-scout. Anlass: Kunden-Feedback zum Lo-Fi-Wireframe ("zu simpel,
Reisen sind ein Erlebnis"). Quellen: SSR-HTML der drei Framer-Demos per curl
(Layer-Struktur via data-framer-name + Headings in Dokument-Reihenfolge), jess.travel und
travel.saltandwind.com per WebFetch, Porto-Analyse aus dem Fundus.

**Kern-Diagnose zum v1-Wireframe:** Alle 8 Sektionen der Startseite haben denselben Rhythmus
(H2 + Karten-Reihe, gleiche Containerbreite, gleiche Grauwerte, kein Bild dominiert je eine
Sektion). Das "Erlebnis" der Vorbilder entsteht zu ca. 70 Prozent aus Dingen, die ein
GRAUSTUFEN-Wireframe sehr wohl zeigen kann: Breitenwechsel (full-bleed vs. Container),
Groessenkontraste (Display-Zeile vs. Mono-Meta), Bildflaechen mit echten Proportionen,
Ueberlappungen und Asymmetrie. Nur ca. 30 Prozent sind Design-Sache (Farbe, Font, Animation).
Wireframe v2 muss also nicht "designter" werden, sondern im Layout dramatischer.

### 1. Sektions-Inventar der Vorbilder (Dokument-Reihenfolge)

**tourvia.framer.website** (dunkel, cineastisch):
1. Full-bleed-Hero: riesige Wortmarke "TOURVIA" als Hintergrund-Ebene, davor Eyebrow
   ("— Welcome to Tourvia"), H1, Buttons; Berg-Foto am unteren Rand angeschnitten
2. About: Eyebrow "— Who We Are" + kompletter Absatz als Display-H2 gesetzt
3. Stats-Band: Number-Counter (4000+ Happy Travelers, Prozentwert) neben grossem Bild
   ("Image & Funfact")
4. Destination-Karten: hohe Bildkarten, Land + Ortsname als Overlay, Meta-Zeile
   "05 Visited Place"
5. Why Choose Us: Review-Zitat links, rechts Feature-Liste mit auto-advance
   (Progress-Balken pro Feature)
6. Tour-Package-Karten: Bild + Meta-Icon-Zeile (Ort / "Start From $60-$100" / "5 Days")
7. Tour Activities: horizontales Band/Slider
8. Experiences: 4 Items als Laufband wiederholt (Marquee)
9. Testimonial-Sektion mit Quote, Person-Info, Nummern-Navigation 1-4
10. Blog-Reihe
11. Footer-CTA "Expedition Expertise at Your Service"

**traavellio.framer.website** (Conversion-Maschine):
1. Full-bleed-Hero: Foto, H1, Buttons, TRUST-INDICATORS DIREKT IM HERO
   (Google-Review-Badge + Traveller-Zahl + Instagram)
2. About: Tag-Label + Titel + ZWEI VERTIKAL VERSETZTE Bilder neben dem Text
3. Experience: Karten mit Bild oben UND Bild unten, Beschreibung dazwischen
   ("Exceptional Cards"), "View All"-Zeile mit Hairline
4. Destinations: Sticky-Scroll-Container mit 4 Umschalt-Zustaenden + Marquee-Zeile
   ("Runnning Text": Laendernamen mit eingestreuten kleinen Bildern zwischen den Woertern)
5. Tour-Karten: Days/Nights, Name + Preis
6. Why-Us-Karten mit Bild-Overlay (Culinary, Partnership, Culture)
7. Testimonials: Zitat + Rating + Vorschau-Thumbnails + Pfeile
8. Blog mit Datum
9. FAQ ZWEISPALTIG: Fragen links und rechts verteilt, Plus-Buttons
10. Travel Stories: Testimonial-Ticker (laufende Story-Karten)
11. Conversion-Band: grosse CTA-Zeile + Marquee-Zeile mit Leistungs-Stichworten
12. Footer

**travelio.framer.website** (hell, editorial, dem MARLOU-Ton am naechsten):
1. Hero: Statement-H1 als Studio-Definition ("Travalio is a travel design studio crafting...")
   ueber einem Cover-Bild, auf dessen Unterkante KARTEN AUFGELEGT sind (Ueberlappung)
2. Why to Choose Us
3. Prozess: 3 Saeulen ("How Your Journey is Designed")
4. Services als ACCORDION MIT BILDFLAECHE: offener Eintrag zeigt Bild, Progress-Bar
   laeuft mit (5 Services)
5. Popular Destinations
6. FAQ
7. Footer-CTA "Plan Your Trip"

**jess.travel** (Vertrauens-Dramaturgie): Story-Split frueh (Sektion 3 von 13), 4-Schritte-
Prozess, gestapelte Screenshot-Testimonials, Partner-Logos, "Pay less with Jess"-Vergleich,
6er-Kategorie-Grid. **travel.saltandwind.com**: Split-Value-Prop direkt nach Hero,
3 nummerierte Schritte, Presse-Logos, EIN featured Testimonial (statt Karussell),
Destination-Accordion, Schluss-CTA als Frage formuliert ("Does Vacation Planning Feel
Like Work?").

### 2. Muster-Katalog: Konstruktion + Wireframe-Einordnung

Legende: [W] = in Graustufen-Wireframe voll darstellbar. [W~] = statisch andeutbar,
Bewegung per Annotation. [D] = reine Design-/Build-Sache, im Wireframe nur als Notiz.

**M1 Full-bleed-Hero, Text auf Bild** (tourvia, traavellio, saltandwind) [W]
Bildflaeche 85-100vh ueber die volle Breite, Text unten links (nicht zentriert, wirkt
weniger nach Template), Proof-Zeile direkt am CTA. Erlebnishaft durch: das Bild ist die
Sektion, nicht Deko daneben. Wireframe: dunkelgraue Vollflaeche mit Bild-Platzhalter-Kreuz,
Textblock daraufgelegt.

**M2 Riesen-Typo als Raumfueller** (tourvia-Wortmarke, Porto 397px) [W]
Ein Wort oder eine Koordinate in 20-27vw, Weight moderat (600), line-height 0.8-0.95,
gern vom Rand angeschnitten oder hinter/unter dem Foto. Der 12-zu-104px-Sprung aus
Richtung A ist genau dieser Mechanismus. Wireframe: grosse graue Outline-Typo, Groesse zaehlt.

**M3 Sektions-Marker-Zeile** (tourvia "— Label", Porto "01 //") [W]
Mono-Label links ("01 / GUIDES"), Koordinate rechts, 1px-Hairline dazwischen. Ist bereits
Konstruktions-Muster 1 der Richtung A; im Wireframe v2 VOR JEDER SEKTION zeigen, denn er
ersetzt den monotonen H2-Einstieg und gibt der Seite Logbuch-Takt.

**M4 Statement-Absatz im Display-Grad** (tourvia About, travelio Hero) [W]
Ein kompletter Satz/Kurzabsatz auf 32-48px statt Body-Groesse, max. 14-16 Woerter pro
"Bild". Macht aus einer Copy-Sektion ein Ereignis. Wireframe: der Groessensprung selbst.

**M5 Stats-Band mit grossen Zahlen** (tourvia Counter; MARLOU Erlebnis-Fakten) [W]
3-4 Zahlen in Display-Groesse (48-104px), Label darunter in Mono 12px, Hairlines als
Trenner. Count-up-Animation ist [D], die Wirkung kommt aber aus dem Groessenkontrast.

**M6 Bild-Karten mit Meta-Leiste** (tourvia Destinations, traavellio Tours) [W]
Hochformat 3:4 oder 2:3, Bild fuellt die Karte, unten Mono-Zeile mit Fakten
(bei MARLOU: Ort + Jahr + Koordinate statt "5 Days / $60"). Hover-Zoom ist [D].
Deckt sich mit Richtung-A-Muster 2 (Fotos nie nackt).

**M7 Versetzte Bild-Duos / asymmetrischer Split** (traavellio About) [W]
Zwei Bilder unterschiedlicher Groesse, vertikal gegeneinander verschoben, Text in der
dritten Spalte. Bricht das 50/50-Split-Einerlei. Reine Layout-Sache, perfekt fuer Graustufen.

**M8 Ueberlappung Hero/Folge-Sektion** (travelio: Karten auf Cover-Unterkante) [W]
Karten oder Marker-Zeile ragen mit negativem Margin in die Hero-Bildflaeche hinein.
Verzahnt Sektionen, toetet den "Bloecke-Stapel"-Eindruck.

**M9 Marquee-Zeile** (traavellio Running Text + Conversion-Ticker, tourvia Activities) [W~]
Eine Zeile laeuft horizontal durch, links/rechts angeschnitten; bei traavellio mit kleinen
Bildern ZWISCHEN den Woertern. MARLOU-Fassung: Koordinaten + Ortsnamen bereister Orte als
Ticker (S 22.9576 / E 18.4904 SOSSUSVLEI ... AUSTRALIEN 2019-2023 ...). Wireframe: statische,
beidseitig angeschnittene Zeile + Annotation "laeuft langsam". Bewegung selbst ist [D].

**M10 Accordion mit Bildflaeche** (travelio Services, saltandwind Destinations) [W]
Liste geschlossener Eintraege, der offene zeigt rechts/darunter eine Bildflaeche;
Progress-Bar ist [D]. Stark fuer "Was in jedem Guide steckt" (offener Punkt zeigt
PDF-Seiten-Preview).

**M11 Nummerierter Etappen-Prozess mit Verbindungslinie** (travelio 3 Saeulen,
saltandwind 1-2-3, jess 4 Steps) [W]
Bei MARLOU doppelt belegt: Funnel-Etappen (Guide, Beratung, Gruppenreise) und
Beratungs-Ablauf. Konstruktion nach Richtung-A-Muster 3: Etappen auf einer 1px-Route
aufgereiht, Nummern in Mono, letzte Etappe ("bald") bewusst leerer gestaltet.

**M12 Zweispaltiges FAQ** (traavellio) [W]
Fragen auf zwei Spalten verteilt statt einer langen Liste; wirkt kompakter und
weniger nach Support-Seite.

**M13 Featured-Zitat-Band** (tourvia Review, saltandwind Einzel-Testimonial) [W]
EIN Zitat in Display-Groesse mit kleiner Quellenzeile statt Testimonial-Karussell.
MARLOU hat keine Kundenstimmen: Slot wird vom Visions-Satz bzw. O-Ton-Zitaten der
beiden besetzt, mit Ort+Jahr-Attribution wie ein Logbuch-Eintrag.

**M14 CTA-Band vor Footer** (alle drei Demos + saltandwind) [W]
Volle Breite, eigener Grauwert/Bild, eine grosse Zeile (gern als Frage, saltandwind-Muster),
1-2 Buttons, optional Marquee-Zeile darueber (traavellio). Fehlt im v1-Wireframe komplett
und ist der billigste Erlebnis-Gewinn: jede Seite endet mit einem Ereignis statt mit dem Footer.

**M15 Trust-Chips im Hero** (traavellio) [W]
Die Proof-Zeile ("Ab 29 EUR / Sofort-Download / Jede Route selbst gereist") nicht als
Fliesstext, sondern als 3 abgesetzte Mono-Chips direkt unter den CTAs.

**Bewusst NICHT uebernehmen:** Sticky-Scroll-Jacking der Destinations (traavellio):
technisch aufwaendig, auf Mobile fragil, reines [D] ohne Wireframe-Wert und fuer eine
6-Seiten-Business-Site ueberdimensioniert. Auto-advance-Feature-Progress (tourvia): nette
Mechanik, aber Animations-Chrome ohne Informationsgewinn; Emoji-Ticker (traavellio):
verstoesst gegen Anti-Slop (keine Emojis als Icons).

### 3. Empfehlung je MARLOU-Seite (Wireframe v2)

Grundtakt fuer ALLE Seiten: M3-Marker-Zeile vor jeder Sektion, Breitenwechsel mindestens
2x pro Seite (full-bleed vs. Container), M14-CTA-Band vor jedem Footer. Damit ist der
"Bloecke-Stapel" strukturell gebrochen, bevor irgendein Design drankommt.

**Start** (Funnel sichtbar machen):
1. M1+M15: Full-bleed-Hero mit Foto der beiden, H1 unten links, Koordinaten-Mono-Zeile
   oben im Bild, 3 Proof-Chips unter den CTAs.
2. M4: Einwand-Sektion "Klar koennt ihr das selbst googeln" als Display-Statement auf
   leerem Grund, keine Karte, kein Bild. Der Kontrast NACH dem vollen Hero ist der Effekt.
3. M11: Funnel-Etappen 01/02/03 auf einer 1px-Route, Etappe 03 als bewusst leere Karte
   mit "bald"-Marker (verzahnt mit Gruppenreisen-Seite).
4. M6: Guide-Teaser als drei 3:4-Bildkarten mit Mono-Meta-Leiste (Ort + Tage + Preis +
   "selbst gereist"-Zeile), erste Karte optional groesser.
5. M9+M14: Koordinaten-Marquee als Trenner vor dem CTA-Band ("Noch kein Ziel im Kopf?"
   Lead-Magnet als Band statt als Restsektion).

**Reise-Guides / Shop**:
1. Kopf kompakt (H1 + Sub), direkt darunter M8: die drei Guide-Karten ragen in die
   Kopf-Flaeche hinein, Shop-Charakter ab Sekunde 1.
2. M6 in gross: je Guide eine 2:3-Karte mit Bild, Preis-Tag, 3 Highlights, Mono-Zeile
   "8 Monate vor Ort gelebt". Alternativ eine Karte pro Zeile im Wechsel links/rechts (M7-Logik).
3. M10: "Was in jedem Guide steckt" als Accordion, offener Eintrag zeigt PDF-Seiten-Preview
   als Bildflaeche. Rechtfertigt den Preis visuell statt als Bullet-Liste.
4. Fuer wen / fuer wen nicht als harter Zwei-Spalten-Block mit Hairline in der Mitte
   (jess-Prinzip "was Jess NICHT ist").
5. M12+M14: FAQ zweispaltig, dann CTA-Band mit Zwillings-CTA (Guide kaufen / Mini-Guide holen).

**Beratung** (wichtigste Vertrauensseite):
1. M7: Kopf als asymmetrischer Split, Text + ein Foto aus einem echten Planungs-Kontext,
   kein Vollbild-Hero (die Seite argumentiert, sie inszeniert nicht).
2. Zwei Pakete mit GROESSENKONTRAST: Kompass-Gespraech als kompakte Karte, Komplettplanung
   als doppelt breite Karte mit Rechenbeispiel (10 Tage = 790 EUR gross gesetzt, M5-Mechanik).
3. Kostentransparenz als Zwei-Spalten-Tabelle mit Display-Spaltenkoepfen ("An uns" /
   "An Hotels und Airlines"), Hairline-Trennung; der jess-Baustein als eigenes Band, nicht
   als Fussnote.
4. M11: 4-Schritte-Ablauf horizontal auf der 1px-Route, Schritt 1 mit Cal.com-Hinweis.
5. M13+M14: EIN O-Ton-Satz der beiden als Zitat-Band, dann CTA-Band "Termin aussuchen".

**Gruppenreisen (Coming Soon)** (wenig Inhalt, also Typo-Buehne):
1. M2: "BALD." oder "GRUPPENREISEN" als Riesen-Typo-Hero ohne Bild, Mono-Zeile darunter
   ("Noch kein Termin, kein Preis. Aber ein Plan."). Ehrlichkeit als Inszenierung.
2. Leerer Bild-Rahmen als Signature-Gag: eine M6-Karte ohne Foto, Caption
   "N ?.???? / E ?.???? — ZIEL IN ARBEIT". Uebersetzt Richtung-C-Idee in die Logbuch-Welt.
3. M4: Visions-Copy ("Reisen, bei denen ihr nicht zuschaut...") als Display-Statement.
4. M14: Warteliste als CTA-Band mit einem einzigen E-Mail-Feld, Kleingedrucktes in Mono.
   Mehr braucht die Seite nicht; 4 Sektionen reichen, Leere ist hier das Konzept.

**Ueber uns** (Story-Seite, darf am staerksten "Logbuch" sein):
1. M1: Full-bleed-Foto der beiden mit Untertitel-Zeile im Bild (Ort + Jahr).
2. M7: Geschichte als zwei versetzte Split-Bloecke (Louisa/Durban, Marvin/Australien),
   Bilder unterschiedlich gross und vertikal verschoben, je mit Mono-Caption.
3. M5: Erlebnis-Fakten als Zahlenband (46 Monate / 8 Monate / 3 Guides) in Display-Groesse,
   Mono-Labels, Hairlines. Ersetzt Testimonials strukturell.
4. M11: die 3 Planungs-Prinzipien als nummerierte Saeulen (travelio-Muster).
5. M13: Visions-Satz als Zitat-Band, danach CTA-Band mit Zwillings-CTA.

**Kontakt** (kurz halten, 3 Muster genuegen):
1. Split 60/40: Formular links, rechts eine abgesetzte Karte "Oder direkt ein
   Kompass-Gespraech" (Zwillings-Pfad sichtbar, traavellio-Conversion-Logik).
2. M3 als Kopf: Mono-Meta-Zeile mit Standort-Koordinate + "Antwort innerhalb von
   2 Werktagen" statt generischem Kontakt-H1-Block.
3. M9 oder M14 als Abschluss: Koordinaten-Marquee ueber dem Footer, kein grosses CTA-Band
   (die Seite IST die Conversion).

**Prioritaet fuer den Umbau:** Erst M3-Takt + M14-Baender auf allen Seiten (globaler
Rhythmus), dann Start und Guides (Conversion-Pfade), dann Ueber uns, Beratung,
Gruppenreisen, Kontakt. Alles oben Genannte ausser M9-Bewegung, Hover-Zustaenden und
Count-ups ist in Graustufen baubar; das Wireframe v2 kann dem Kunden also fast das
gesamte "Erlebnis" zeigen, ohne dem Design vorzugreifen.
