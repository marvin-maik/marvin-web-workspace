---
projekt: baeckerei-siebert
stand: 2026-07-22
quellen: styles.css, index.html, site.js, freigabe/design-richtung.md (Richtung "Zeit-Haus")
live: noch nicht live (Vorschau-Ziel baeckerei-siebert-vorschau.pages.dev, noindex Pflicht)
description: "Zeit-Haus: Mehlweiss-Grund mit Krustenbraun-Tinte, Ladengruen als einzige
  Signalfarbe auf hellem Grund. Gold existiert NUR auf dem tiefen Fascia-Gruen
  (Ladenschild-Logik um 1900). Typo-Kontrast: League Gothic Condensed-Caps (Schriftsippe
  von 1903, Gruendungszeit 1906) gegen ruhiges Source Sans 3. Signature: das Zeitband
  1906-2026 als Sticky-Scrollytelling. Die Site ist bewusst KEIN Creme+Terracotta-Template
  und KEIN Museum: Tradition als Qualitaetsbeweis, nicht als Nostalgie."

colors:
  # 1:1 aus :root in styles.css. Kontraste GERECHNET (design-richtung.md).
  bg: "#F7F2E9"       # --bg, Mehlweiss, Seitengrund
  ink: "#2B2118"      # --ink, Krustenbraun, Text/Headlines. 14.12:1 auf bg
  signal: "#1F4A38"   # --signal, Ladengruen: CTAs, Links-Unterstrich, Marker, Status. 8.99:1 auf bg
  deep: "#1E3932"     # --deep, Fascia-Gruen: NUR Flaeche (Baender, Zeitband, Footer, Jubi)
  gold: "#CBA258"     # --gold, NUR auf --deep (5.25:1 dort). Auf bg nur 2.70:1 -> VERBOTEN auf hell
  warm: "#C08A4E"     # --warm, Karamell: nur Flaechen/Deko (Schritt-Nr, Marquee-Punkte, Sommer-Border). NIE Textfarbe auf hell
  muted: "#6B5D4A"    # --muted, Meta/Labels/Captions. 5.72:1 auf bg. Nie fuer Fliesstext
  line: "#D8CFC0"     # --line, Roggen-Hairline, Borders, Fuehrungspunkte
  hell: "#FDFBF6"     # --hell, Kartengrund + Text auf --signal-Buttons
  # Nicht-Token-Hex im Code (auf deep-Grund): #EDE6D6 Fliesstext, #4A6558 Hairlines,
  # #5E7A6C Punkte-Border, #C9C0AE Fuss-Kleingedrucktes; #F1E7CF/#6B4F23 .offen-hinweis

typography:
  display:
    fontFamily: League Gothic        # fonts/league-gothic.woff2, nur weight 400
    transform: uppercase (.disp), letter-spacing .012em, word-spacing .12em
    lineHeight: 1.06 (.disp); Zeitband-Jahr .9
    hinweis: Caps-Umlaute als AE/OE/UE einplanen, hyphens manual + .satz-Spans (ganze Woerter)
  body:
    fontFamily: Source Sans 3        # woff2 regular/600/700
    size: 17px
    lineHeight: 1.6
  label: 600 12px, letter-spacing .14em, uppercase, --muted (.label); auf deep -> .label.auf-deep in Gold
  zahlen: font-variant-numeric tabular-nums (.zahl, .tafel-note, Zeiten-Spalte)
  scale: "12 -> 17 -> clamp(17px,2.2vw,20px) Lead -> 19 (h3) -> clamp(34px,5.4vw,64px) h2
    -> clamp(52px,9.6vw,118px) h1 -> clamp(88px,21vw,250px) Zeitband-Jahr"

spacing:
  wrap: 1180px (--wrap), padding-inline clamp(18px,4vw,32px) (--pad)
  section: clamp(52px,9vw,104px); section.eng clamp(34px,6vw,64px)
  card: 22px (.karte); Benefits 16px 18px

rounded:
  buttons_chips_status: 3px
  karten_bilder_sommer: 6px (Karten-Maske innen 4px)
  fokus: 2px

breakpoints:
  # mobile-first, min-width; Ausnahme max-width 700px fuer Bild-Ratios
  700px: Karten 3-spaltig / zweier 2-spaltig, Benefits 3-spaltig; darunter Appetit 4/3, Anker 16/10
  760px: Zahlenband 4-spaltig, Footer-Grid 4-spaltig
  860px: Handwerk-Schritte 3-spaltig
  960px: Hero-Grid 1.15fr/.85fr, Zeitband-Grid 2-spaltig + Scrolly-Hoehe 420vh
---

## Signature-Element

Das Zeitband 1906-2026 (`.zeitband`, nur index.html): 120 Jahre in sechs Stationen
(1906, 1920, DDR, 1990, 2021, 2026) auf --deep mit 3px double Gold-Border.
Zwei Betriebsarten, gesteuert von site.js:
- Default (kein JS, mobil unter 960px, reduced-motion): statische Liste `.zb-liste`
  (Jahreszahl in Gold-Display + Text, Hairlines #4A6558). Buehne ist display:none.
- site.js setzt `.scrolly` NUR bei Desktop (min-width 960px) UND erlaubter Motion:
  Band wird 420vh hoch, `.zb-track` sticky (100vh), Buehne mit Riesen-Jahreszahl
  (`.zb-jahr`, Gold), Text, Bildwechsel; Stationswahl aus Scroll-Fortschritt.
  `.zb-punkte`-Buttons (aus der Liste generiert) als klickbarer Zweitweg,
  aria-current + aria-live "Station x von 6". Liste wird dann versteckt.
NIE einen Smooth-Scroll-Wrapper davorsetzen; natives Scrollen bleibt unangetastet.

## Komponenten (echte Selektoren aus styles.css)

| Selektor | Bauteil | Konstruktion (Kurzform) |
|---|---|---|
| `.jubi` | Jubilaeums-Leiste, TEMPORAER bis Okt 2026 | bg --deep, Text/Link Gold, border-bottom 2px Gold; Link-Hover #fff |
| `header.kopf` | Sticky-Header | sticky top 0, bg --bg, border-bottom 1.5px --ink |
| `.marke` | Wortmarke | League Gothic 24px + small-Zeile 10.5px in --signal |
| `nav.haupt a` | Nav-Link | Unterstrich als background-size-Animation in --signal; aria-current voll |
| `.status` | Offen-Status-Pille | 1.5px Border --signal; site.js schreibt Text, `.zu` -> --muted |
| `.btn` | Ghost-CTA | 2px Border --signal, radius 3px; Hover -2px + 3px Schatten-Kante |
| `.btn.voll` | Primaer-CTA | bg --signal, Text --hell |
| `.btn.auf-deep` | CTA auf deep | Border/Text Gold |
| `.fascia` | Ladenschild-Band | bg --deep, border-block 3px double Gold, Headline Gold, Lead #EDE6D6 |
| `.chip` / `.chip.gruen` | Fakten-Chip | 1.5px Border --ink bzw. --signal, radius 3px |
| `.hero-bild img` | Polaroid-Foto | weisser Rahmen, padding unten 44px, rotate -4deg, Schatten |
| `.notiz` | Handnotiz am Hero | Georgia italic, --signal, rotate -5deg, Pfeil per ::before |
| `.zahlen` | Count-up-Band | Display-Ziffern in --signal, Labels uppercase --muted; JS-Count-up |
| `.tafel` / `.tz` | Preistafel | Fuehrungspunkte 2px dotted --line, `.neu` in --signal |
| `.anker` / `.appetit` | Breitbilder | 21/9 bzw. 21/8, Appetit full-bleed mit --ink-Border-Block |
| `.maske` | Zoom-out-Reveal | overflow hidden; js-motion: img scale 1.14 -> 1, 1.1s |
| `.schritte` / `.schritt .nr` | Handwerk-Sequenz | 01/02/03 in --warm (echte Sequenz, daher legitim) |
| `.karte` / `.karten(.zweier)` | Karte | bg --hell, 1.5px --line, radius 6px; Hover -3px + Kante |
| `.benefits` | Ausbildungs-Vorteile | Karten fett; erste Karte in --signal hervorgehoben |
| `.marquee` | Sortiment-Laufband | League Gothic auf --hell, --ink-Border-Block, Punkte --warm; Hover pausiert |
| `table.zeiten` | Oeffnungszeiten | 1px --line-Zellen, `tr.heute` fett in --signal |
| `.sommer` | Sommerzeiten-Box | 1.5px Border --warm auf --hell |
| `.gewinner` | Wochenziehungs-Block | tabular-nums, Wochen-Zeilen dotted, Los in --signal-Display |
| `.tel` | Riesen-Telefon-CTA | League Gothic clamp(38..68px) in Gold auf Fascia; Hover #fff |
| `footer.fuss` | Footer | bg --deep, border-top 3px double Gold, `.fuss-marke` als Riesen-Wortmarke |
| `.offen-hinweis` | Inline-Hinweis | bg #F1E7CF, Border --warm, Text #6B4F23 |
| `.uebersprung` | Skip-Link | offscreen, Fokus: Gold auf --deep |

Fokus global: 3px outline --signal, offset 3px; auf deep-Grund Gold (`.auf-deep :focus-visible`).

## Motion

Geschlossene Liste, alles via `.js-motion` auf html (site.js, entfaellt bei reduced-motion):
- Reveals `.rv/.in`: opacity + translateY 26px (Variante `.links`: translateX 70px),
  .6/.7s ease bzw. cubic-bezier(.16,1,.3,1), Stagger per `--d` aus data-d. Einmalig.
- Masken-Zoom: img scale 1.14 -> 1, 1.1s cubic-bezier(.16,1,.3,1).
- Count-up: 950ms, ease-out-cubic, einmalig (data-ziel/data-start/data-format).
- Marquee: translateX-Loop 28s linear, Hover pausiert.
- Mikro: Buttons/Karten transform+box-shadow .18s, Nav-Unterstrich .25s.
- Zeitband-Scrolly (nur Desktop+Motion, s.o.).
Reduced-Motion: alles statisch (Reveals sichtbar, kein Zoom, kein Marquee-Lauf,
keine Button-Transition, scroll-behavior auto); Zahlen zeigen sofort den Zielwert.

## Konstruktions-Muster

1. Sektions-Kopf immer als Paar: `.label` (uppercase, --muted) + `h2.disp`. Auf
   Fascia/deep-Grund stattdessen `.label.auf-deep` in Gold.
2. Fascia-Baender als Sektions-Hoehepunkte: pro Seite 1-2 vollflaechige --deep-Baender
   mit 3px double Gold-Kante (Ladenschild-Zitat). Zeitband und Footer nutzen dieselbe Logik.
3. Farb-Hierarchie strikt: --signal ist die EINZIGE Aktivfarbe auf hell; Gold ist die
   Aktivfarbe auf deep. Nie mischen, nie tauschen.
4. Fotos nur in Rahmen: entweder `.maske` mit Border/Radius oder Polaroid (`.hero-bild`);
   Breitformate als `.anker`/`.appetit` mit festen aspect-ratios. Nie nacktes Bild.
5. Breitenwechsel als Rhythmus: wrap-Sektion -> full-bleed-Band (Appetit, Marquee,
   Fascia) -> wrap-Sektion. Etwa 2x pro Seite.
6. Headlines in `.satz`-Spans zerlegen: Zeilenumbruch nur zwischen ganzen Saetzen/Woertern
   (hyphens manual, Marvins Regel).

## Do / Don't (projektspezifisch)

- Do: Gold ausschliesslich auf --deep (#1E3932). Jede neue Gold-Verwendung braucht
  deep-Hintergrund im selben Selektorpfad.
- Do: Oeffnungszeiten/Jahreszahlen immer tabular-nums; Status-Texte nur ueber
  [data-status] von site.js befuellen (Sommerzeit-Logik 20.07.-15.08.2026 steckt dort).
- Do: neue Scroll-Elemente ueber data-rv/data-d anschliessen, nie eigene Observer bauen.
- Don't: --warm nie als Textfarbe auf hellem Grund (2.70:1). Nur Flaechen, Borders, Deko.
- Don't: kein zweites Scrollytelling. Das Zeitband ist das eine Signature-Element.
- Don't: keine Nummern-Marker ausserhalb echter Sequenzen (nur .schritt .nr).
- Don't: `.jubi` ist temporaer (bis Oktober 2026); nichts dauerhaft daran aufhaengen.
- Merken: html hat scroll-behavior smooth; reduced-motion setzt es auf auto.

## Abgrenzung / Verworfen

Gewaehlte Richtung: "Zeit-Haus" (freigabe/design-richtung.md). Mechanik der beiden
Framer-Referenzen uebernommen, ihre Aesthetik NICHT:
- Verworfen: Smooth-Scroll-Wrapper/Lerp (Scroll-Hijacking, a11y; hat in der Analyse
  den Browser aufgehaengt). Natives Scrollen bleibt.
- Verworfen: 3D-Perspective-Kartenstapel a la Bakeat (zweites Scrollytelling = Ueberdosis).
- Verworfen: Creme+Terracotta-Palette der Vorlagen (Default-AI-Look): Luna Rossa
  #FFF0DD/#B27647, Bakeat #FCF7EB. Abstand halten, auch bei Redesign-Ideen.
- Verworfen: Vorher/Nachher-Slider und Globus (kein Material bzw. kein Raum-Thema);
  Announcement-Bar-Muster (kein Shop), stattdessen die temporaere .jubi.
- Plan B "Backstuben-Protokoll" (Mono-Zeitstempel, #8A5A28 statt Gruen) liegt im
  Dossier, nur falls Gruen im Kundengespraech faellt.

## Seiten-Inventar

| Datei | Zweck | Besonderheit |
|---|---|---|
| index.html | Start/Onepager | Zeitband (Signature), Zahlenband, Marquee, Polaroid-Hero, JSON-LD Bakery |
| geschichte.html | 120 Jahre, 5 Generationen | .gewinner Wochenziehungs-Block, Anker #jubilaeum, zb-liste statisch |
| sortiment.html | Sortiment | Preistafel-Muster (.tafel, Fuehrungspunkte) statt Karten |
| torten.html | Torten auf Bestellung | CTA = Telefon (.tel), keine Formulare |
| ausbildung.html | Ausbildung | .benefits, erste Karte (So+Mo frei) in --signal |
| besuch.html | Zeiten + Anfahrt | table.zeiten, .sommer-Box, Anfahrt ohne Maps-Embed |
| impressum.html / datenschutz.html | Pflichtseiten | Platzhalter (Spekulations-Case, keine kopierten Rechtstexte) |
| 404.html | Fehlerseite | Hero-Muster reduziert |

Intern (nie deployen): _icon-src.html, _og-src.html, _src/.

## Known Gaps

- Kein Formular auf der ganzen Site (Bestellweg laut Alt-Site nur Telefon/Laden).
  Falls spaeter eines kommt: Botschutz-Pflicht nach technik-patterns.md.
- pages.dev-URLs in og:url/og:image/JSON-LD sind Vorschau-Werte; DOMAIN-SWAP-Kommentar
  im head, canonical fehlt noch (kommt mit finaler Domain).
- .jubi-Rueckbau nach Oktober 2026 nirgends automatisiert; manuell entfernen.
- Foto-Luecken (siehe _lotse): Ladenfront aussen, Torten-Shooting, Klaerung team-baeckerin.jpg.
- Kein Dark-Mode, keine Print-Styles definiert (bewusst offen).
