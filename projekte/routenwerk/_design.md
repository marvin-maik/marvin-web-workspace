---
projekt: routenwerk
stand: 2026-07-16
quellen: styles.css (v=49), index.html, alle *.html, site.js, DEMO-README.md, handoff/brand-guidelines.html
live: https://routenwerk.pages.dev (Demo, noindex per _headers)
description: "Expeditionslogbuch auf Papiergrund: warmes Off-White (#FAF9F5) mit fast
  schwarzer Tinte (#16130E), EINE Signalfarbe Ziegelrot (#C2331F) fuer CTAs, Marker
  und Stempel. Typo-Kontrast aus Cabinet Grotesk (Display, eng, gross) gegen B612 Mono
  (Flughafen-Instrumente: Marker, Labels, Tafeln), General Sans traegt den Fliesstext.
  Signature ist die Koordinaten-Marker-Zeile vor jeder Sektion; das Themen-System
  darueber ist die Abflug-Welt (Split-Flap, Boarding-Pass, Gepaeckband). Bewusst KEIN
  Reiseblog-Look: keine Fotocollagen, keine Script-Fonts, kein Tuerkis/Sonnengelb-Kitsch."

colors:
  ink: "#16130E"          # --ink, Text, Headlines, dunkle Baender (.band-ink), Footer, Hero-Grund. Nie fuer Meta-Text.
  bg: "#FAF9F5"           # --bg, Seitengrund + Kartenflaechen. Auf Dunkel als Textfarbe.
  signal: "#C2331F"       # --signal, CTAs-Fokus, Links-Akzente, Stempel, Preise-Akzent, ::selection. NUR Akzent, nie Flaeche/Hintergrund.
  muted: "#6F6A60"        # --muted, Mono-Meta, Captions, sekundaere Borders. Nie fuer Fliesstext.
  line: "#E2DFD7"         # --line, Hairlines, Karten-Borders, Hard-Shadows (box-shadow 5px 5px 0)
  papier-tief: "#F2EFE8"  # --papier-tief, abgesetzte Baender (.band), Tafel, Foto-Platzhalter, Pass-Stub
  hero-schraffur-1: "#241F17"  # --hero-schraffur-1, dunkle Schraffur-Toene (Hero)
  hero-schraffur-2: "#2B251C"  # --hero-schraffur-2, dito; identisch mit --flap-hell
  solari: "#E8B84B"       # --solari, Anzeigetafel-Gelb. NUR auf dunklen Flaechen (Schalter-Schild, Consent, Tafel-Scroll, Fokus auf Dunkel). Nie auf hellem Grund.
  flap: "#211C15"         # --flap, Klapp-Kachel dunkel, Consent-Banner-Grund, Favicon-Grund
  flap-hell: "#2B251C"    # --flap-hell, Klapp-Kachel oben
  stempel-blau: "#2E4A6B" # --stempel-blau, ZWEITE Grenzstempel-Farbe, nur .stempel.blau. Kein allgemeiner Akzent.
  muted-dunkel: "#8F887B"    # --muted-dunkel, Muted-Text auf dunklem Band (Schalter-Schild, Buehne3d-Schild)
  line-dunkel: "#353026"     # --line-dunkel, Hairline auf dunklem Band
  feld-dunkel-bg: "#1D1912"  # --feld-dunkel-bg, E-Mail-Input-Grund auf band-ink
  feld-dunkel-rand: "#4A443A"# --feld-dunkel-rand, E-Mail-Input-Rand auf band-ink
  # Hardcoded (bewusst kein Token): #4a443a (Postkarten-Text .pk-links p, Hell-Kontext,
  # 9.15:1 auf bg). Dunkel-Kontext-Werte sind seit 2026-07-17 Tokens (siehe oben).
  # Kontrastpaare (gerechnet): ink/bg = 17.6:1, bg/signal = 5.3:1 (AA, ::selection),
  # muted/bg = 5.1:1 (AA fuer Meta), signal/bg (Akzent auf hell) = 5.3:1.

typography:
  display:
    fontFamily: Cabinet Grotesk      # fonts/cabinet-grotesk-700.woff2 + -800.woff2
    weights: 700, 800
    letterSpacing: -0.02em (h1), -0.015em (h2, statement, zitat)
    lineHeight: 0.98 (h1), 1.04 (h2), 0.85 (.riesig)
  body:
    fontFamily: General Sans         # fonts/general-sans-400/500/600.woff2
    weights: 400 (Fliesstext), 500 (Nav), 600 (strong, btn-sign)
    size: 17px
    lineHeight: 1.55
  mono:
    fontFamily: B612 Mono            # fonts/b612-mono-400.woff2 + -700.woff2
    size: 12px
    letterSpacing: 0.08em
    use: Marker, Labels, Chips, Tafel-Flaps, Captions, uppercase. Traegt die Flughafen-Welt.
  scale: "11 -> 12 -> 17 -> 22 -> clamp(30px,4vw,48px) -> clamp(44px,7.5vw,96px);
    Sonderstufen: statement clamp(28px,4.2vw,52px), zitat clamp(26px,3.8vw,46px),
    stat clamp(52px,7vw,92px), riesig clamp(96px,21vw,290px)"

spacing:
  base: kein striktes Raster, gaengige Werte 10/12/14/18/20/24/28
  section: 84px vertikal (60px unter 860px)
  card: 24px (.etappe), 28px (.paket), 22-26px (.pass-haupt)
  wrap: 1160px (--wrap), padding 24px (--pad)

rounded:
  meist eckig (Karten, Tafel-Zeilen, Chips, Inputs = 0)
  btn-flap: 8px (Kacheln innen 3px), btn-sign: 10px, cb-btn: 8px
  tafel / wegweiser / passport / buehne3d: 6px, stempel: 10px (rund: 50%)
  rot-nav Buttons: 50%

breakpoints:
  1100px (Etappen kippen vertikal), 860px (Nav-Burger, Rotator Mobil-Deck, Sektionspadding),
  720px (CTAs volle Breite, Pass/Vergleich stapeln), 640px (Consent), 560px (Passport,
  Postkarte, Wegweiser-Zeilen); min-width 861px = Scrolly-Rotator, dazu max-height 820px
---

## Logo-System (Quelle: handoff/brand-guidelines.html, Kap. 1.2)

GENAU drei Marken, alle teilen dasselbe R und dieselbe Zielmarke.
Marken-Assets NUR aus handoff/ ziehen, NIE aus freigabe/ (Zwischenstaende):

| Datei | Marke | Einsatz |
|---|---|---|
| handoff/logo.svg (+ -invers, -mono) | Wortmarke, Hauptlogo | immer erste Wahl; Site nutzt img/logo.svg |
| handoff/zeichen.svg | Submark: R + Zielmarke, Kachel #211C15 | Favicon, App, Avatar, ab 16px |
| handoff/zeichen-flap.svg | Flap-Kachel: R + Falz-Linie | verspielt, Loading, Marker; ersetzt nie das Hauptlogo |

NICHT Teil des Logo-Systems: freigabe/routenwerk-bildmarke.svg (Startpunkt/Route/Pin-
Grafik) und freigabe/zeichen-flap-verworfen.svg. Die Route-Grafik wurde 2x faelschlich
als Logo animiert/verwendet (zuletzt 2026-07-16), deshalb steht diese Tabelle hier.

## Signature-Element

Die Koordinaten-Marker-Zeile `.marker`: Mono-Zeile mit Hairline oben, links
Sektionsnummer + Logbuch-Titel ("02 / Der Einwand"), rechts echte Koordinate oder
Kurz-Claim in `<b>`. Steht vor JEDER Sektion auf jeder Seite und gibt der Site den
Logbuch-Takt. Auf dunklen Flaechen via `.hell .marker` invertiert (color-mix).
Darueber liegt als Themen-System die Abflug-Welt (Split-Flap-Buttons, Abflugtafel,
Boarding-Pass-Karten, Gepaeckband-Marquee), aber der Marker ist das eine Element,
das alles zusammenhaelt.

## Komponenten (echte Selektoren aus styles.css)

| Selektor | Bauteil | Konstruktion (Kurzform) |
|---|---|---|
| `.btn-flap` | Primaer-CTA (max 1-2/Seite) | Split-Flap: Rahmen 1.5px ink, radius 8px, Mono-Kacheln je Buchstabe, Grundlinie ::after; JS flippt data-text/data-alt. Mobil (<720px): Button volle Breite, aber Kacheln bleiben KOMPAKT/hoch-schmal (flex:0 0 auto, 1.5ch) + zentriert — NICHT auf die Breite strecken, sonst wirken sie quadratisch/fremd zur Abflugtafel |
| `.btn-sign` | Sekundaer-CTA | 2px Border ink, radius 10px, General Sans 600, Abflug-Flugzeug als Masken-Icon ::after; auf Dunkel Border/Text = bg |
| `.marker` | Sektions-Marker | Mono 12px uppercase, border-top --line, space-between |
| `.chip` / `.chips` | Fakten-Chips | Mono 11.5px, 1px Border currentColor, eckig |
| `.tafel` + `.brett` + `.flaps` | Abflugtafel | papier-tief, Buchstaben-Kacheln (JS baut aus data-zeile). Desktop: Grid 4 Spalten. Mobil (<720px): kein Querscroll mehr, sondern EINE grosse Flughafen-Tafel — kraeftiger Ink-Rahmen + Kopfband, `.brett` als Block mit Zeilen-Trennlinien + Zebra (nth-child even). Jede Zeile 2-zeilig: oben ZIEL gross + STATUS rechts (Signal), unten Detail + Preis. Trailing-Fuellkacheln (`b.pad`, von JS markiert) mobil ausgeblendet, interne Wortabstaende bleiben. Guard <=359px (engerer Gap). Scroll-Indikator .tafel-scroll nur Desktop |
| `.pass` (+ `.pass-haupt/-stub`, `.perfo`, `.barcode`) | Boarding-Pass-Karte | Border muted, Hard-Shadow 5px 5px 0 line, gestrichelte Perforation, Stub mit Foto via --stub-img |
| `.rotator` / `.rot-slide` / `.rot-arc` | Routen-Rotator | Desktop: Scrolly-Sticky (300vh) mit SVG-Bogen-Nav; Mobil: Swipe-Deck + Easter-Egg-Karte .rot-egg |
| `.marquee` + `.mini-tag` / `.koffer-ic` | Gepaeckband-Ticker | Endlos-Loop (2 Gruppen, JS-Dauer ~13px/s), Gepaeck-Anhaenger leicht rotiert. Das Band selbst (repeating-linear-gradient, 47px Slats) laeuft MIT im selben Tempo (`bandlauf` 3.615s = 47px/13px/s, background-position, links) -> wirkt wie ein echtes Foerderband. Slat-Periode + MARQUEE_PXPS muessen zur 3.615s passen |
| `.etappen` / `.etappe` | Ablauf-Route | Karten an Linie, Nummern-Label ::before (data-n); unter 1100px vertikale Timeline mit Knoten |
| `.stats` / `.stat` | Kennzahlen-Leiste | Border-Grid, Zahl Display 800 clamp(52-92px) |
| `.paket` / `.pakete` / `.preisgross` | Preis-Karten | Border line, Highlight .gross mit 2px ink |
| `.vergleich` | Kosten-Gegenueberstellung | 2 Spalten mit Trennlinie, mobil gestapelt |
| `.splithart` | harter 2er-Split mit Border | Listen-Vergleich, guides.html |
| `details`/`summary` | Accordion (guides) | Hairlines, +/- in Mono signal |
| `.zitat` + `.quelle` | Grosszitat | Display 700, em = signal |
| `.statement` | Grossaussage | Display 700 clamp(28-52px) |
| `.riesig` | Outline-Riesentypo | 800, text-stroke 2px muted, Fuellung bg (gruppenreisen BALD.) |
| `.stempel` (`.rund`, `.blau`) | Passport-Stempel | 3px double Border, Mono, Loecher via mask-image, rotiert ueber .s1-.s4 |
| `.passport` | Passport-Doppelseite | aspect-ratio 176/125, Falz-Schatten inset, Seitennummern |
| `.postkarte` | Postkarte (ueber-uns) | aspect-ratio 148/105, Marke + Stempelkreis, Adresslinien |
| `.briefmarke` + `.bm-fuss` | Foto-Rahmen | weisser Rand, drop-shadow 4px 5px 0 line, Wert-Ecke |
| `.wegweiser` / `.weg` | Gate-Wegweiser (kontakt, 404) | papier-tief Liste, Gate-Code signal, Pfeil rechts |
| `.globus-buehne` + `.globus-filter` | Logbuch-Globus (ueber-uns) | Canvas + d3 hinter Consent, Filter-Buttons Mono. Ortslabels mit Kollisions-Ausweichen (12 Kandidatenplaetze um den Pin, bg-Halo, gepunktete Fuehrungslinie muted bei Versatz), Zoom .8-6.4 |
| `.schalter-schild` | Check-in-Kopfzeile | Mono-Zeile, b = solari (dunkel) bzw. signal (hell via .band) |
| `.foto` + `.caption` | Foto-Platzhalter | Schraffur-Streifen, Label-Chip, Caption-Leiste immer drunter |
| `.hero` | Full-bleed-Hero | min-height 86vh, ink-Grund, Foto + Gradient-Overlay, Marker oben, Inhalt unten |
| `.band` / `.band-ink` | Sektions-Baender | papier-tief bzw. ink-invertiert |
| `.consent-banner` / `.cb-btn` | Consent (nur externe Inhalte) | flap-Grund, solari-Topline, Ablehnen/Erlauben GLEICH gestaltet |
| `.hp-feld` | Honeypot | off-screen, Feld _gotcha; Zeit-Falle 2500ms in site.js |

Hover-Muster durchgaengig: Karten `translateY(-3px)` + Hard-Shadow aus --line;
Buttons `translate(-2px,-2px)` + `box-shadow 3px 3px 0`. Nav-Links: Underline
waechst via background-size .25s.

## Motion

Erlaubt: transform/box-shadow/background/color .15s (Hover), background-size .25s
(Nav-Underline), Rotator-Karten .35s cubic-bezier(.4,0,.2,1), Reveals .rv
opacity+translateY .6s ease, Marquee linear endlos (JS-Dauer, ~13px/s, Hover pausiert),
hintWippen 1.8s (Scroll-Hinweis). Split-Flap-Buchstaben flippt site.js.
Reduced Motion: global alles aus (`*{transition:none!important;animation:none!important}`),
.rv bleibt sichtbar, scroll-behavior auto. Ohne JS ist nichts versteckt.
Lade-Intro (nur index.html, 1x pro Sitzung, seit 2026-07-16): Submark -> Wortmarke ->
Zoom durchs Pin-Loch, ~3,8s. Weiche als Inline-Skript im <head> (sessionStorage rwIntro
+ reduced-motion-Ausstieg), CSS-Abschnitt "Lade-Intro" in styles.css, Aufbau + Ablauf
in site.js (Ende der IIFE, Wortmarken-Pfade 1:1 aus handoff/logo.svg). Ohne JS existiert
nichts davon; Not-Aus-Timeouts in Weiche (6s) und site.js (7s).

## Konstruktions-Muster

1. Jede Sektion beginnt mit einer `.marker`-Zeile (Nummer / Titel links, Koordinate
   oder Claim rechts). Nummerierung pro Seite fortlaufend.
2. Rhythmus hell -> papier-tief (.band) -> hell -> ink (.band-ink/Footer); dunkle
   Baender sparsam, meist Check-in/Lead-Zone.
3. Karten sind eckig, 1px Border (line oder muted) + Hard-Shadow aus --line
   (kein Blur ausser Nav-Dropdown). Hover hebt 3px.
4. Genau ZWEI Button-Typen im ganzen System: .btn-flap (primaer, max 1-2 pro Seite)
   und .btn-sign (sekundaer). Keine dritten Buttons erfinden.
5. Bilder nie nackt: entweder .foto-Platzhalter mit .caption, .briefmarke mit
   .bm-fuss oder Pass-Stub mit Overlay-Gradient.
6. Mono (B612) ist das Meta-Register: alles uppercase-Kleingedruckte, Labels,
   Tafeln, Formulare-Labels. Fliesstext bleibt immer General Sans, nie uppercase.

## Do / Don't (projektspezifisch)

- Do: Signal-Rot nur als Akzent (CTA-Fokus, Stempel, Gate-Codes, em im Zitat, Preise-b).
- Do: Solari-Gelb ausschliesslich auf dunklen Flaechen (Tafel-Indikator, Schalter, Consent).
- Do: Koordinaten real halten (N/E/W-Format wie im Bestand), Flughafen-Codes 3-stellig.
- Don't: kein dritter Button-Typ, kein Blur-Schatten auf Karten, keine runden Karten.
- Don't: signal nie als Flaeche/Hintergrund, stempel-blau nie ausserhalb .stempel.blau.
- Don't: keine Emojis, keine Fotos ohne Rahmen/Caption, kein Uppercase im Fliesstext.
- Don't: keine MARLOU-/Marvin-/Louisa-Bezuege in oeffentlichen Dateien (Demo-Entkopplung).

## Abgrenzung / Verworfen

- Herkunft: technisch vom MARLOU-Build abgeleitet, inhaltlich bewusst entkoppelt
  (Studio statt Paar, fiktive Routen). Sync-Regel: System-Verbesserungen zuerst in
  MARLOU, dann hierher (DEMO-README.md).
- Abflug-Welt kam als Moodboard-Integration 2026-07-11 dazu (Kommentar styles.css).
  Dunkle Solari-Tafel als schwarzer Slab verworfen, Tafel ist hell auf papier-tief.
- Briefmarken-Perforations-Maske verworfen (riss echte Fotos in Loecher), jetzt
  sauberer Rahmen + Wert-Ecke (Kommentar .briefmarke).
- Flap-Zeichen-Variante des Logos verworfen (freigabe/zeichen-flap-verworfen.svg);
  Logo-/Submark-Konzepte liegen in freigabe/.
- Kein design-dossier.md vorhanden; Richtung entstand aus MARLOU-Basis + Moodboard.

## Seiten-Inventar

| Datei | Zweck | Besonderheit |
|---|---|---|
| index.html | Start | Hero full-bleed, Abflugtafel, Scrolly-Rotator mit Boarding-Paessen, Lead-Form |
| guides.html | Produktseite Guides | Kopfflaeche + .overlap, Pass-Karten, Accordion, splithart, Stempel |
| beratung.html | Beratungs-Angebot | Etappen-Route, Pakete + preisgross, Kostenvergleich, Zitat |
| gruppenreisen.html | Teaser/Warteliste | .riesig "BALD.", Warteliste-Form |
| ueber-uns.html | Studio-Seite | Hero, Stats, Globus (d3, Consent), Passport, Postkarte, Briefmarken |
| kontakt.html | Kontakt | Formspree-Form (Platzhalter-ID), Wegweiser, Gepaeckband-Marquee |
| danke.html | Form-Danke | noindex, btn-sign zurueck |
| 404.html | Fehlerseite | Gate-Metapher, Wegweiser, root-absolute Pfade (/styles.css) |
| agb/impressum/datenschutz.html | Rechtstexte | als Demo gekennzeichnet |

## Known Gaps

- Platzhalter offen: MAILERLITE_FORM_ACTION (index, guides, gruppenreisen),
  FORMSPREE_ID (kontakt), DIETER_SNIPPET_URL (Rechtstext-/Consent-Snippet),
  DOMAIN-SWAP der absoluten pages.dev-URLs + canonical vor Launch.
- Globus laedt d3/topojson/land-110m vom jsdelivr-CDN (hinter Consent-Banner);
  vor echtem Launch selbst hosten (Kommentar in ueber-uns.html).
- Tote CSS-Bloecke ohne HTML-Fundstelle: .gcard/.karten/.metaleiste (Guides nutzen
  stattdessen .pass) und .buehne3d/model-viewer (3D-Demos nur in freigabe/).
- Logo-Animation: Storyboard-Intro ist seit 2026-07-16 als Lade-Intro auf index.html
  verbaut (siehe Motion). Die 3 Einzel-Konzepte (Wortmarke/Submark/Flap-Kachel) liegen
  weiter als Sandbox im Scratchpad; MP4-Export fuer Social steht noch aus.
- Foto-Platzhalter (.foto-Schraffur) auf beratung.html + gruppenreisen.html noch
  ohne echte Bilder.
