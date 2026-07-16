---
projekt: marlou
stand: 2026-07-16
quellen: styles.css, index.html, site.js, design-dossier.md (gewaehlte Richtung A Expeditionslogbuch), product-marketing-context.md (Token-Abschnitt)
live: noch nicht live (in Arbeit)
description: "Expeditionslogbuch auf kuehlem Papierweiss #FAF9F5 mit Tinten-Schwarzbraun #16130E.
  Die EINE Signalfarbe ist Kartenrot #C2331F (CTAs, Links-Marker, Akzente, Globus-Pins),
  nie als Flaeche. Typo-Kontrast: Cabinet Grotesk Display (700/800, eng, riesige Spruenge
  bis 290px) gegen IBM Plex Mono 11-13px uppercase als Meta-Ebene; General Sans traegt den Body.
  Signature ist der Koordinaten-Marker: Mono-Zeile mit Hairline vor jeder Sektion, GPS-Koordinate
  plus Ort als Beleg 'selbst erlebt'. Die Site ist bewusst KEIN Creme-Serif-Terracotta-Reiseblog
  und KEIN dunkles Kino-Layout, alles kantig, radius 0, Schatten nur als harter Offset."

colors:
  ink: "#16130E"             # --ink, Text, Headlines, Hero-/Footer-/Band-Grund. Als Flaeche NUR in .band-ink/.hero/footer.
  bg: "#FAF9F5"              # --bg, Seitengrund, Kartengrund. Bewusst kuehl, KEIN Creme.
  signal: "#C2331F"          # --signal, CTAs (.btn-voll), Wortmarken-Span, Accordion-Plus, Fokus-Outline, Globus-Pins, ::selection. NIE als Sektions-Hintergrund.
  muted: "#6F6A60"           # --muted, Mono-Meta, Captions, gestrichelte Linien. Nie fuer Fliesstext.
  line: "#E2DFD7"            # --line, Hairlines, Karten-Borders, Tabellenlinien
  papier-tief: "#F2EFE8"     # --papier-tief, Foto-Platzhalter-Schraffur, .band, .kopfflaeche
  btn-text: "#fff"           # --btn-text, Text auf Signal-Buttons
  hero-schraffur-1: "#241F17"  # --hero-schraffur-1, dunkle Hero-Platzhalter-Schraffur
  hero-schraffur-2: "#2B251C"  # --hero-schraffur-2, zweiter Schraffur-Streifen
  # Kontrast (gerechnet, WCAG): ink/bg 17.6:1, #fff/signal 5.6:1, muted/bg 5.1:1, signal/bg 5.3:1.
  # Auf band-ink werden bg-Abstufungen per color-mix erzeugt (82%/72%/62%/55%/45%/35%/18%/14%), keine neuen Hex.

typography:
  display:
    fontFamily: Cabinet Grotesk        # fonts/cabinet-grotesk-700.woff2 + -800.woff2
    weights: 700, 800
    letterSpacing: -0.02em (h1), -0.015em (h2/statement/zitat)
    lineHeight: 0.98 (h1), 0.85 (.riesig), 0.9 (.foot-marke)
  body:
    fontFamily: General Sans           # fonts/general-sans-400/500/600.woff2
    size: 17px
    lineHeight: 1.55
    note: strong = 600, Nav-Links 15px/500, p max-width 640px
  mono:
    fontFamily: IBM Plex Mono          # fonts/ibm-plex-mono-400.woff2, nur 400
    size: 10.5-13px
    letterSpacing: 0.05-0.1em
    use: Marker, Captions, Chips, Labels, Stats-Labels, Kleingedrucktes, immer uppercase
  scale: "12 (.mono) -> 17 (body) -> 20 (summary/.preis) -> 22 (h3/.gcard h2) ->
    clamp(28px,4.2vw,52px) .statement -> clamp(30px,4vw,48px) h2 ->
    clamp(44px,7.5vw,96px) h1 -> clamp(52px,7vw,92px) .stat strong ->
    clamp(96px,21vw,290px) .riesig -> clamp(64px,17vw,220px) .foot-marke"

spacing:
  base: kein striktes Raster, gaengig 6/10/12/14/18/20/24/28
  section: 84px 0 (Desktop), 60px 0 unter 860px
  card: 24px (.etappe), 28px (.paket, .splithart>div), 30px (.stat)
  wrap: --wrap 1160px, --pad 24px

rounded:
  default: 0 ueberall (kantiges Logbuch, bewusste Entscheidung)
  ausnahmen: .rot-nav button und .legende-pin 50% (Kreise), :focus-visible 1px

breakpoints:
  860px: Sektions-Padding runter, Hero 74vh, FAQ einspaltig, splithart stapelt
  720px: Nav kompakt, Rotator-Foto stapelt, inline-form bricht um
  min-861px: Rotator wird sticky-scrolly (300vh), nur Desktop und ohne reduced-motion
---

## Signature-Element

Der Koordinaten-Marker `.marker`: Flex-Zeile in Mono 12px uppercase, links Zaehler-Label
("01 / Logbuch Marlou"), rechts in `b` die GPS-Koordinate plus Ort ("S 29.8587 / E 31.0218,
Durban"), darueber 1px Hairline (`border-top: var(--line)`), margin-bottom 34px.
Steht vor praktisch JEDER Sektion (index 8x, beratung/ueber-uns 7x, guides 6x, auch auf
Rechtsseiten 1x) und gibt der Site den Logbuch-Takt. Auf dunklem Grund (`.hell .marker`)
werden Border und Text per color-mix aus --bg abgeleitet. Derselbe Beweis-Mechanismus
wiederholt sich in `.caption` (Mono-Leiste unter Fotos) und im Koordinaten-Marquee.

## Komponenten (echte Selektoren aus styles.css)

| Selektor | Bauteil | Konstruktion (Kurzform) |
|---|---|---|
| `.btn` | Sekundaer-CTA | 2px Border --ink, transparent, radius 0, padding 13px 26px, General Sans 600/16px |
| `.btn-voll` | Primaer-CTA | bg --signal, Border --signal, Text #fff |
| `.btn:hover` | | translate(-2px,-2px) + harter Offset-Schatten 3px 3px 0 --ink (kein Blur!) |
| `.chip` / `.chips` | Trust-Chips im Hero | Mono 11.5px uppercase, 1px Border currentColor, padding 7px 13px |
| `.marker` | Koordinaten-Marker | siehe Signature-Element |
| `.foto` + `.caption` | Foto-Platzhalter + Pflicht-Caption | 45-Grad-Schraffur aus --papier-tief, 1px Border, Caption als Mono-Leiste darunter |
| `.hero` | Full-bleed-Hero | min-height 86vh, bg --ink, .foto-flaeche als Schraffur-Absolute, h1 max 15ch |
| `.etappen` / `.etappe` | Funnel-Etappen auf 1px-Route | Flex-Karten unter durchgehender 1px-Linie, Nummern-Tag via ::before attr(data-n) |
| `.etappe.leer` | Coming-Soon-Etappe | Border dashed, Text --muted |
| `.rotator` / `.rot-*` | Routen-Rotator (Highlight Start) | SVG-Bogen mit klickbaren Pins, Slides via grid-area 1/1 + opacity, ab 861px sticky 300vh |
| `.marquee` / `.marquee-track` | Koordinaten-Laufband | Mono-Zeile, animation lauf 46s linear, Hover pausiert, JS verdoppelt Inhalt |
| `.stats` / `.stat` | Zahlenband (Ueber uns) | Flex mit 1px Innen-Hairlines, Zahl Display 800 bis 92px, Label Mono |
| `details` / `summary` | FAQ-Accordion | Hairlines oben/unten, Plus-Zeichen in --signal via ::after, offen: Multiplikationskreuz |
| `.faq2` | Zweispaltiges FAQ | Grid 1fr 1fr, gap 14px 48px, unter 860px einspaltig |
| `.split` / `.splithart` | Text-Bild-Splits | Flex mit .gedreht (reverse), .versatz (+64px), splithart mit Mittel-Hairline |
| `.zitat` + `.quelle` | Featured-Zitat-Band | Display 700 bis 46px, em in --signal, Quelle Mono |
| `.statement` | Display-Absatz | Cabinet 700, clamp bis 52px, max-width 920px |
| `.pakete` / `.paket.gross` | Beratungs-Pakete | Groessenkontrast: .kompakt flex 1, .gross flex 1.7 + 2px Border --ink |
| `.preisgross` | Preis-Zahl | Display 800 bis 76px, small in Body-Font |
| `table` / `th, td` | Kostentransparenz-Tabelle | 1px --line Vollraster, th als Display bis 28px |
| `.kopfflaeche` + `.overlap` | Guides-Kopf mit Overlap | papier-tief-Flaeche padding-bottom 150px, Karten ragen -100px hinein |
| `.gcard` + `.metaleiste` | Guide-Produktkarten | Foto aspect-ratio 2/3, Mono-Metaleiste, Hover translateY(-3px) + 5px 5px 0 --line |
| `.riesig` | Riesen-Outline-Typo (Gruppenreisen) | bis 290px, Fuellung --bg, -webkit-text-stroke 2px --muted |
| `.globus-buehne` + `.globus-filter` | Logbuch-Globus (Ueber uns) | Canvas via d3/topojson, Filter-Buttons Mono, aktiv invertiert auf --ink |
| `.band` / `.band-ink` | Sektions-Baender | papier-tief bzw. ink-invertiert, Buttons/Text via color-mix angepasst |
| `label` + `input` + `.inline-form` | Formulare | Labels Mono uppercase, Inputs 1px --muted radius 0, Fokus 2px --signal |
| `.foot-marke` | Riesen-Wortmarke im Footer | bis 220px, 14% bg auf ink, user-select none |
| `.skip` + `:focus-visible` | A11y | Skip-Link auf ink, Fokus 2px --signal Offset 3px |

## Motion

Geschlossene Liste: transform/box-shadow/background/color 150ms (Hover Buttons/Karten),
Nav-Underline background-size 250ms, Rotator-Slides opacity/visibility 450ms,
Scroll-Reveals `.rv` opacity/translateY(18px) 600ms ease, Marquee 46s linear infinite,
Globus-Rotation per Canvas-RAF. Kein Parallax, kein Scroll-Jacking (Rotator-Sticky
laesst natives Scrollen unangetastet, site.js). Reduced Motion: alles aus per
`*{transition:none;animation:none}`, .rv sichtbar, Rotator faellt auf Pfeile/Punkte zurueck.
Reveals nur wenn JS `.rv` setzt, ohne JS ist nichts versteckt.

## Konstruktions-Muster

1. Marker-Takt: `.marker` mit Hairline vor JEDER Sektion, Zaehler links, Koordinate rechts.
2. Fotos nie nackt: jede Bildflaeche traegt `.caption` oder Mono-Span (Ort + Jahr + Quelle).
3. Breitenwechsel min. 2x pro Seite: full-bleed (.hero, .band, .band-ink, .marquee)
   gegen .wrap 1160px; Guides zusaetzlich mit Overlap (-100px in .kopfflaeche).
4. Funnel als Route: Etappen/Prozessschritte immer auf der 1px-Linie (`.etappen::before`),
   Nummern als Mono-Tag, Coming-Soon bewusst als `.leer` (dashed).
5. CTA-Band vor jedem Footer: .band oder .band-ink mit grosser Zeile + Zwillings-CTA
   (btn-voll + btn), auf Kontakt ersetzt der Marquee das Band.
6. Harte Schatten statt Weichzeichner: Hover immer als Offset `Npx Npx 0 <farbe>`, nie blur.

## Do / Don't (projektspezifisch)

- Do: Signal-Rot nur auf CTA-Fuellung, Wortmarken-Span, Accordion-Plus, em im Zitat,
  Fokus, Globus-Pins. Auf dunklen Baendern bleibt dieselbe Signal-Fuellung.
- Do: Zahlen und Orte als Beleg (46 Monate, 8 Monate, Koordinaten), nie runde Marketing-Zahlen.
- Do: neue Farbnuancen per color-mix aus bestehenden Tokens ableiten, keine neuen Hex.
- Don't: kein border-radius auf Flaechen/Buttons (nur die zwei Kreis-Ausnahmen).
- Don't: kein zweiter Akzent, kein Gruen/Terracotta/Teal, kein Serif, keine Handschrift.
- Don't: Uppercase nur in der Mono-Ebene, nie in Display oder Body.
- Don't: keine weichen Schatten, keine Gradients ausser den Schraffur-Platzhaltern
  (die verschwinden, sobald echte Fotos da sind).

## Abgrenzung / Verworfen

- Gebaut wurde Richtung A "Expeditionslogbuch" aus design-dossier.md (Header in styles.css
  bestaetigt das; Tokens beschlossen 2026-07-10). As-built weicht leicht ab: h1 ist
  clamp(44px,7.5vw,96px) statt der Dossier-Angabe clamp(64px,9vw,104px), line-height 0.98.
- Richtung B "Filmstill" (dunkel, #131210 + Glutrot #E2542F, Tanker/Switzer) verworfen:
  dunkle Sites schwaecher bei kaltem DACH-Traffic, braucht Kino-Fotomaterial.
- Richtung C "Feldfuehrer" (Ein-Tinten-Gruen #22362C/#2F5A43, Sentient-Serif) verworfen:
  schwaechste Eigenstaendigkeit, nur Rueckfallebene fuer Kundenwunsch Gruen.
- Original-Kunden-CI (Creme #F7F3EE + DM Serif + Terrakotta #C47A4A + Caveat) abgelehnt:
  verbotener Default-Look Nr. 1, widerspricht der "kein KI-Plan"-Positionierung.
- Wettbewerber-Abstand: mimio-Orange #E8763A, Off-The-Path-Teal #41A4A9 + Gold #D2954D,
  traavellio-Framer-Blau #0099FF. Kartenrot #C2331F haelt bewusst Distanz zu allen.
- Verworfen ausserdem: Sticky-Scroll-Jacking, Emoji-Ticker, Handschrift-Zitate.

## Seiten-Inventar

| Datei | Zweck | Besonderheit |
|---|---|---|
| index.html | Start, Funnel | Full-bleed-Hero, Etappen-Route, Routen-Rotator (sticky), Marquee, Lead-Magnet-Band |
| guides.html | Shop PDF-Guides | Kopfflaeche + Overlap-Karten, gcards 2/3, Accordion, splithart "fuer wen (nicht)" |
| beratung.html | Vertrauensseite | Pakete mit Groessenkontrast, Kostentransparenz-Tabelle, 4-Schritte-Route |
| gruppenreisen.html | Coming Soon | .riesig Outline-Typo "BALD.", leerer Dia-Rahmen, Wartelisten-inline-form |
| ueber-uns.html | Story | Stats-Band, versetzte Splits, interaktiver Canvas-Globus (d3), Zitat-Band |
| kontakt.html | Conversion | Formspree-Formular + Honeypot, Kompass-Gespraech-Karte, Marquee statt CTA-Band |
| impressum.html, datenschutz.html, agb.html | Recht | reduziert, je 1 Marker; AGB mit Widerruf |

## Known Gaps

- Alle 12 Bildflaechen sind Schraffur-Platzhalter ("Foto folgt"), echtes Fotomaterial fehlt.
- Formular-Platzhalter: Formspree-ID (`FORMSPREE_ID`, kontakt) und drei Newsletter-Forms
  mit `MAILERLITE_FORM_ACTION` (index, guides, gruppenreisen) sind nicht verdrahtet.
- Botschutz unvollstaendig: Honeypot nur auf kontakt.html, die drei inline-forms haben
  keinen; Zeit-Falle fehlt komplett in site.js (Workspace-Pflicht).
- ueber-uns.html laedt d3 + topojson-client von cdn.jsdelivr.net: externer Aussenkontakt,
  vor Launch selbst hosten (DSGVO-Regel wie bei Fonts).
- Pflichtdateien fehlen: 404.html, _headers, danke.html (noindex), apple-touch-icon.png,
  favicon-32.png, img/og-default.png; og:url/og:image/canonical laut HTML-Kommentar offen.
- Keine JSON-LD auf der Startseite (laut Workspace-Standard schon im Build faellig).
- Kein Dark Mode definiert (bewusst offen, Papier-Logik ist Light-only).
- .band-ink Link-/Fokus-Kontraste auf color-mix-Abstufungen nicht einzeln gerechnet.
