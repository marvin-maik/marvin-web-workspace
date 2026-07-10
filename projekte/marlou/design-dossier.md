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
