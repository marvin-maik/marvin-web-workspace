---
projekt: baeckerei-siebert
stand: 2026-07-23
quellen: styles.css (Quelle der Wahrheit), index.html, site.js, freigabe/konzepte/uebersicht.html + design-richtung.md (Richtung "Warmes Regal" D1b)
live: noch nicht live (Vorschau baeckerei-siebert-vorschau.pages.dev, noindex Pflicht)
description: "Warmes Regal (D1b): Hafer-Warmweiss-Grund (--oat) mit Krustenbraun-Tinte,
  Marken-Rot (--red) als einzige Signalfarbe auf hell (CTA, Marker, Nadelstreifen, Links).
  Gold lebt NUR auf dunklem Krume-Grund (--crumb): Baender, Fascia, Zeitband, Footer.
  Typo-Kontrast rein aus Fraunces (Display-900-Serif gegen 400-Fliesstext) plus Shantell
  als Handschrift/Preisschild und Pinyon als Zeremonie ('seit 1906'). Signature: das
  Zeitband 1906-2026 als Sticky-Scrolly. Bewusst KEIN Creme+Terracotta-Template, KEINE
  dicke rot-weisse Markise, KEIN Gruen mehr (v1 'Zeit-Haus' komplett ersetzt)."

colors:
  # 1:1 aus :root in styles.css. Rolle + Verbot. Kontraste GERECHNET (WCAG, gegen den Grund).
  oat: "#EADFC9"      # --oat, Hafer-Warmweiss, Seitengrund (mit feinem SVG-Noise 0.04)
  paper: "#FBF6EB"    # --paper, fast-weiss: Karten, Marquee, Preistafel-Grund
  white: "#FFFFFF"    # --white, Foto-Passepartout (.bild/.zb-bild/.schwebe/.gm-x)
  crust: "#A9752F"    # --crust, Krustenbraun: NUR grosse Deko (.schritt .nr 46px), 3.02:1 -> nie Fliesstext
  crust-d: "#6B4A28"  # --crust-d, tiefes Krustenbraun: dunkle Buttons, Chip-/Status-Border. 6.03:1 auf oat
  crumb: "#43301D"    # --crumb, Krume-dunkel: ALLE dunklen Baender (Zeitband, Fascia, Zahlen, Footer, Jubi)
  ink: "#33271A"      # --ink, Textfarbe. 10.99:1 auf oat / 13.48:1 auf paper (AAA). Nie als Flaeche
  ink2: "#786246"     # --ink2, gedaempft: Lead, Captions, Meta. 4.37:1 auf oat -> nur grosse/Nebentexte
  red: "#B4241C"      # --red, Marken-Rot: CTA-fill, Marker, Nadelstreifen, Link-Hover. 4.95:1 auf oat. NIE als Flaeche unter Text
  red-d: "#8E1A14"    # --red-d, Rot-Hover (btn.fill, tel)
  gold: "#B98F3A"     # --gold, dunkles Gold: NUR Kanten/Borders auf crumb (jubi/zeitband/fascia). Einzige Text-Ausnahme .z em (2.76:1, dekorativ)
  gold-l: "#D8AE52"   # --gold-l, helles Gold: Text/Zeremonie NUR auf crumb (6.01:1). Auf hell VERBOTEN
  line: "#D9C7A3"     # --line, Roggen-Hairline: Borders, dotted Fuehrungspunkte
  # Kontrastpaare: paper/red (btn) 6.07:1 AA · red/paper 6.07:1 · gold-l/crumb 6.01:1 AA · EFE2CC/crumb 9.78:1
  # Nicht-Token-Hex im Code, alle auf crumb-Grund: #EFE2CC (zb-text, fascia-Text), #D9C9AC (Footer-Text),
  # #C9B79C (zb-liste em, fuss-unten), #5A452E + #7A6448 (Hairlines/Button-Border dunkel), #F7EFDE (c-tag-Text);
  # hell: #F1E7CF/#6B4F23 (.hinweis-offen)

typography:
  display:
    fontFamily: Fraunces               # --disp, fonts/fraunces-*.woff2 (400/600/900/600italic), Fallback Georgia,serif
    weights: 400, 600, 900, 600italic
    use: h1/h2.disp weight 900, letter-spacing -.01em, line-height 1.0, text-wrap balance
  body:
    fontFamily: Fraunces               # gleiche Sippe: body ist 400 18px/1.62 var(--disp)
    size: 18px
    lineHeight: 1.62
  hand:
    fontFamily: Shantell               # --hand, fonts/shantell-600/700.woff2, weight 600
    use: Preisschilder, Captions (.bild figcaption), Notizen (.c-notiz), Sub-Labels, "fuer Sie"
  script:
    fontFamily: Pinyon                 # --script, fonts/pinyon.woff2, weight 400, line-height .85
    use: Zeremonie ("seit 1906" im Hero .s, .c-tag, .fascia .zeile)
  mono:
    stack: ui-monospace,'SF Mono',Menlo (KEINE Datei) # .mono/.label/table th, 11-12px, letter-spacing .12-.16em, uppercase
  scale: "11 mono -> 12 label -> 16 btn -> 18 body -> clamp(17,2.1vw,20) lead ->
    clamp(30,5vw,50) h2 -> clamp(40,6.4vw,72) h1 -> clamp(72,15vw,180) zb-jahr"

spacing:
  wrap: 1090px (--wrap); padding-inline clamp(18px,4vw,28px) (--pad)
  section: clamp(48px,8vw,92px); section.eng clamp(32px,5vw,60px)
  card: 22px (.karte); benefits 16px 18px

rounded:
  buttons_chips_status: 3px
  karten_bilder: 2-3px (bild 2px, karte 3px, cta-box 4px)
  fokus: 2px

breakpoints:
  # mobile-first (min-width), Ausnahmen max-width fuer Collage + Bild-Ratios
  640px: min -> karten.zwei 2-spaltig; max -> anker-Ratio 16/10
  700px: benefits 3-spaltig
  760px: karten 3-spaltig, footer-grid 4-spaltig, Zahlen-Karten .zk 4-spaltig (< 760: 2-spaltig)
  840px: handwerk-schritte 3-spaltig
  880px: min -> hero-grid 2-spaltig; max -> collage schrumpft
  640-879px: collage padding-bottom 72 + c-notiz/c-pfeil auf px-Anker (Streifen UNTER dem
    Foto; das 2deg-gedrehte c-haupt ragt sonst unten rechts ueber die Box und die
    Prozent-verankerte Notiz landet auf dem dunklen Brotfoto)
  639px max: c-klein bottom 20px statt 2% (Polaroid ein Mueh hoeher, mehr Luft zur Notiz)
  900px: zb-grid 2-spaltig + Zeitband-Scrolly aktiv (height 440vh, track sticky)
---

## Signature-Element

Das Zeitband 1906-2026 (`.zeitband`, nur index.html): 120 Jahre in sechs Stationen
(1906, 1920, DDR, 1990, 2021, 2026) auf --crumb mit border-block 2px --gold.
Zwei Betriebsarten, gesteuert von site.js:
- Default (kein JS, mobil unter 900px, reduced-motion): statische Liste `.zb-liste`
  (Jahr in Gold-Display + Generation in Shantell + Text, Hairlines #5A452E).
  Die `.zb-buehne` ist display:none. UNTER 900px sind die Text-Absaetze zusaetzlich aus
  (`.st p{display:none}`, Zeilen enger) -> kompakte Jahres-Leiter; die volle Story steht
  auf geschichte.html. No-JS-Desktop (>=900) zeigt die Langtexte weiterhin.
  Jede Zeile traegt eine Verwandtschafts-Zeile `.st .wer` (Mono-Caps 11.5px #C9B79C,
  Labels identisch zu geschichte.html: Der Gruender/Gustavs Neffe/Ottos Sohn/Bodos Sohn/
  Lars' Tochter; 2026 ohne). site.js liest fuer die Scrolly-Stage NUR `.st p`.
- site.js setzt `.scrolly` NUR bei min-width:900px UND erlaubter Motion: Band wird
  440vh hoch, `.zb-track` sticky (100vh), Buehne mit Riesen-Jahr (`.zb-jahr` clamp bis 180px,
  Gold-hell), Text + Bildwechsel aus Scroll-Fortschritt. `.zb-punkte`-Buttons (aus der
  Liste generiert) als klickbarer Zweitweg, aria-current + aria-live "Station x von 6".
  Liste wird dann versteckt.
Nie einen Smooth-Scroll-Wrapper davorsetzen; natives Scrollen bleibt unangetastet.

## Komponenten (echte Selektoren aus styles.css)

| Selektor | Bauteil | Konstruktion (Kurzform) |
|---|---|---|
| `.nadel` | roter Nadelstreifen (Schuerzen-Borduere) | 5px repeating-linear-gradient --red 1.5px/7px; feine Zierkante, nie dick |
| `.jubi` | Jubilaeums-Leiste, TEMPORAER bis Okt 2026 | bg --crumb, Text/Link --gold-l, border-bottom 1px --gold |
| `header.kopf` | Sticky-Header | sticky top 0, bg --oat, border-bottom 1px --line |
| `.marke` | Wortmarke | Logo 52px + "SIEBERT" Fraunces-900 in --red + Shantell-Zeile in --ink2 |
| `nav.haupt a` | Nav-Link | border-bottom 2px transparent -> --red bei Hover/aria-current |
| `.status` | Offen-Status-Pille | 1.5px Border --crust-d; site.js schreibt Text, `.zu` -> --ink2 |
| `.btn` | Button-Familie | radius 3px; Hover -2px translateY. fill=--red/paper, dark=--crust-d, line=--ink, gold=--gold-l (auf dunkel) |
| `.alt-banner` | Autoritaets-Zeile | Fraunces-900 clamp(22-34px) in --red, em kursiv ("aelteste") |
| `.bild` | Foto aufgelegt | --white-Passepartout, radius 2px, ECHTE Doppel-Schatten; figcaption in Shantell |
| `.maske` | Zoom-Reveal | overflow hidden; js-motion: img scale 1.12 -> 1, 1.05s cubic-bezier(.16,1,.3,1) |
| `.collage` (`.c-haupt/.c-klein/.c-tag/.c-notiz/.c-pfeil`) | Hero-Collage | 2 Fotos ueberlappend+gedreht (rotate 2/-5deg), rotes Pinyon-Tag, Shantell-Notiz, roter SVG-Pfeil |
| `.hero-foto` | Einzelfoto (Unterseiten) | rotate 1.6deg |
| `.zahlen-band` / `.zahlen .zk` / `.zb-hell` / `.zb-dunkel` / `.zb-stars` / `.zb-chip` | Zahlen-Band "Split-Regal" (4D) | Zweigeteilt: `.zb-hell` (Oat) traegt die 4 Papier-Karten `.zk` (V3-Look: --paper, border-top 4px --red, knappe Rotation, Ziffern Fraunces-900 **--red** count-up + tabular-nums, Labels mono --crust-d). `.zahlen` neg. margin-bottom -> Karten ueberlappen die Naht (Regalbrett). `.zb-dunkel` (--crumb, LETZTES Element -> stoesst buendig ans Zeitband) traegt `.zb-rating` (Google 4,7 --gold-l + `.zb-stars`: SVG-Sprite `#st`, 5 `<use>`, Teilfuellung via `--pct`-Breite des `.vollwrap`; fill/stroke am `<svg>` wg. `<use>`-Shadow-Grenze) + `.zb-chip` Gold-Outline-Chips (Publikumsliebling/Goldene Brezel/100-Punkte). `.zahlen-band{padding:0;overflow:hidden}` neutralisiert das globale section-Padding -> nahtlos Hero(Oat) oben / Zeitband(Crumb) unten. Karten heissen `.zk` (NICHT `.z`) = alte Chronik-Zettel-Kollision behoben. "2×" = `<b><span data-ziel="2">2</span>×</b>` (× ueberlebt den Count-up) |
| `.zeitband` / `.zb-*` | SIGNATURE (s.o.) | bg --crumb, 2px --gold-Kante; Scrolly vs. Liste |
| `.tafel` / `.tz` | Preistafel (Speisekarte) | **Unter 640px GESTAPELT**: Name (`b`) als Block, Notiz linksbuendig darunter, Fuehrungslinie `.f` aus -> ruhig lesbar, keine kollidierenden Spalten auf schmal. **Ab 640px** zweispaltig: `.tz` flex, `.f` sichtbar (dotted Fuehrungslinie --line), Notiz rechtsbuendig. `.best` in --red; Sub in Shantell; Notiz `text-wrap:balance`. Lange Award-Notiz responsiv: `.nz-voll` (>=640px) / `.nz-kurz` "Publikumsliebling 2026" (<640px). WICHTIG: alle Notiz-Regeln ueber **`.tz>span:last-child`** (Kind-Kombinator), sonst matcht `.tz span:last-child` auch die geschachtelte `.nz-kurz` (letztes Kind von `.best`) und zeigt die Award-Notiz doppelt |
| `.tafel-gruppe` (+`.foto-rechts`) / `.tafel-foto` / `.tafel-text` | Sortiment "Editorial-Split" | Ab 1024px Grid Foto\|Tafel, Seiten alternieren pro Gruppe. Liste bekommt die BREITE Spalte (0.9fr/1.1fr, bei foto-rechts gespiegelt) -> lange Notiz 1-zeilig; `.tafel` dort max-width:none, Notiz max-width:none (Praefix schlaegt Basis 54%). Foto `.tafel-foto` = `.anker maske bild`, ab 1024px aspect 4/3. Bis 1024px gestapelt (Foto oben, dann h2/Sub/Liste) = wie bisher. Der Zweispalter-vs-Stack der EINZELNEN Zeilen ist getrennt geregelt (`.tz` bei 640px, s.o.). NUR .tafel-gruppe-Grid -> index.html-Preistafel unberuehrt (die `.tz`-Zeilen-Regeln gelten aber sitewide, also stapelt auch die Startseiten-Preistafel unter 640px) |
| `.anker` | Breitbild | aspect-ratio 21/9 (mobil 16/10); in `.tafel-gruppe` ab 1024px auf 4/3. ACHTUNG: die aspect-ratio sitzt auf `.anker img`, nicht auf `.anker` — Ratio-Overrides daher per `.<kontext> .anker img{aspect-ratio:...}` (hoehere Spezifitaet als `.anker img`), nicht auf den Div |
| `.sortiment-split` | Sortiment-Teaser (index) Bild+Tafel | Bild `img/auslage-regal.jpg` (Wand aus Brot, Hochformat-Datei) in `.anker maske bild`. RESPONSIVE Ratio via CSS (nicht inline): **mobil & tablet <1000px = 16:9-Band volle Breite, gestapelt** (`object-position:50% 50%`); **ab 1000px = Grid `520px 1fr`** Bild links `aspect-ratio:4/3` (`object-position:50% 60%`; 2026-07-23 von 3/4 auf 4/3 geflacht, Marvin: weniger Hoehe -> 520x390 statt 520x693, Bild+Tafel jetzt fast gleich hoch) + Preistafel/CTA rechts (`align-items:center`). Loest das hohe Foto: kompakt auf klein, flaches Regalband auf gross |
| `.schritte` / `.schritt .nr` | Handwerk-Sequenz | 01/02/03 Fraunces-900 46px in --crust (echte Sequenz, daher legitim) |
| `.karte` / `.karten(.zwei)` | Karte | bg --paper, 1px --line, radius 3px, weicher Schatten; benefits erste Karte in --red |
| `.zettel` / `.z` | Chronik-Zettel | --paper, border-top 4px --red, ueberlappt (margin -8px) + nth-child-Rotation (gen-liste auf geschichte durch `.iv` ersetzt) |
| `.iv` / `.gen` / `.medaille` | Fuenf-Generationen-Index | Mobil: `<details name=fam>`-Akkordeon (Medaillon + Jahr/Name, .inhalt = Foto+`.rolle-in`+Fakten). Desktop (`html:not(.no-js)` + hover:hover): schlanker Zeilen-Index (Jahr Fraunces clamp 34-50, Name Shantell --red, Verwandtschaft rechts --ink2), roter Nadelstreifen-Wipe via clip-path. `data-*` je Generation (jahr/voll/rolle/daten/img/zeitbild) speist Schwebe+Modal aus dem DOM |
| `.schwebe` / `.rahmen/.fotos/.cap` | frei schwebendes Foto (Desktop) | position:fixed Fotoabzug (--white-Rahmen, rotate -3.5deg), 5 Fotos gestapelt opacity-Crossfade; folgt Cursor mit rAF-Lerp bzw. heftet bei :focus an feste Stelle; nur mit Zeiger, kein CLS |
| `.gen-modal` / `.gm-*` | Detail-Modal (Desktop-Klick) | role=dialog/aria-modal, Backdrop rgba(--crumb), .gm-box --paper max 560px; grosses Foto (Zeitbild-Tag) + Jahr/Name/Verwandtschaft + Fakten; Fokus-Falle, Esc, Backdrop-Klick, `body.modal-offen` sperrt Scroll |
| `table.zeiten` / `.sommer` | Oeffnungszeiten | 1px --line-Zellen, `tr.heute` fett in --red; Sommer-Box 1.5px --crust |
| `.gewinner` | Wochenziehungs-Block (LEGACY) | tabular-nums, Zeilen dotted, Los-Nr in --red-Display. NICHT mehr im Markup (Jubilaeum nutzt jetzt `.jub`), CSS bleibt als Baustein |
| `.jub` (`.jub-ticket/-main/-seal/-stub/-losnr` · `.jub-kal/-mon/-weeks/-wo` · `.jub-foot`) | Jubilaeum: Goldenes Ticket + Ziehungs-Kalender (TEMPORAER bis Okt 2026, geschichte.html #jubilaeum) | Dunkles Band (bg --crumb, 2px --gold). **Ticket** = Gold-Flaeche (linear-gradient #E9C86D->#C29A41) auf Dunkel mit dunkler Krume-Tinte (Blickfang + Symbol "noch im Lostopf", Losnr "— — —", KEIN Pflegefeld); perforierter Abriss `.jub-stub` (2px dashed + Halbkreis-Kerben via crumb-::before/::after), Drehung rotate(-1.2deg), Doppel-Schatten; mobil <480px klappt zu Spalte (Perforation horizontal). Wappen-Siegel `.jub-seal` MUSS `display:block` haben (inline-span -> Logo bricht riesig aus). **Kalender** `.jub-kal` = weisse Wochen-Zettel `.jub-wo` (bg --paper, roter Nadelstreifen-::before, 2/4-spaltig) zeigen WANN + "120 Preise/Woche", aktive Woche `.jub-wo.jetzt` mit rotem Rahmen + `.jub-tag` "als Naechstes"; KEINE Losnummern (laufen ueber Instagram). Regel: Gold nur auf dem dunklen Band, Rot auf den hellen Karten. Klasse `.jub` NICHT `.jubi` (das ist das sitewide Banner). `data-rv` NIE aufs Ticket (Reveal-translateY wuerde die rotate ueberschreiben) |
| `.fascia` | dunkles Zeremonie-Band | bg --crumb, 2px --gold-Kante, Pinyon-Zeile in --gold-l |
| `.saison` (+`.saison-stage/-tabs/-chip/-panel/-foto/-cer/-label/-back/-note/-tag`) | Saison-Tabs (Fascia-Familie, sortiment.html) | Baut auf `.fascia auf-dunkel`. **FLACHE Struktur** (seit 2026-07-23): ALLES liegt als GESCHWISTER in `.saison-stage` — `.saison-cer` (Pinyon h2 "Zur Saison"), je Saison ein `figure.saison-foto[data-saison]` UND ein `.saison-panel[data-saison]` role=tabpanel (nur Text: `.saison-label` mono gold-l, `.saison-back` Fraunces-900 paper, `.saison-note` #EFE2CC, `.saison-tag` "Als Naechstes" nur im Datums-Panel), zuletzt `.saison-tabs` (role=tablist, 3 `.saison-chip` role=tab, aktiv = `[aria-selected=true]` gold-l gefuellt/crumb). Foto raus aus dem Panel (frueher `.saison-grid` im Panel — entfernt). **Warum flach:** erhaelt No-JS-Paarung (Titel, dann Foto+Text je Saison gestapelt) UND Mobil-Reihenfolge Titel->Foto->Text->Tabs UND erlaubt die Desktop-Anordnung. **Desktop (>=960px, nur `.tabs-an`):** `.saison-stage` = Grid `auto minmax(0,1fr)` x Zeilen `1fr auto auto auto 1fr`; aktives Foto links (`grid-row:1/-1`, gibt Hoehe vor), rechts die Gruppe **Titel (Zeile 2) -> aktiver Text (Zeile 3) -> Tabs (Zeile 4)**, die beiden 1fr-Spacer zentrieren die Gruppe vertikal zum Foto. (Marvin 2026-07-23: Titel oben statt Tabs, Tabs unter die Notiz.) Foto-Ratio je BP: mobil 16/10, Tablet 3/2, Desktop 2/3 + Spalte `clamp(240,26vw,320)`. **PE**: site.js setzt `.saison.tabs-an` (dann nur aktives Foto+Panel + Tabs sichtbar) und toggelt `.aktiv` SYNCHRON auf `.saison-foto` UND `.saison-panel` per `data-saison`; ohne JS alle 3 Paare gestapelt, Tabs aus. **Datums-Default** (site.js, `new Date().getMonth()`): Jan+27.-31.Dez -> Silvester, Feb-Apr -> Ostern, Mai-Dez(26.) -> Weihnachten. Tastatur: Pfeile/Home/End + Roving-Tabindex. Panel-Fade `@keyframes saisonEin` (nur no-preference). Kontraste crumb AA+: gold-l 6.01:1 / paper 11.6:1 / Notiz 9.78:1 |
| `.cta-warm` / `.tel` | warmer CTA | --paper-Box mit Nadel + Logo; `.tel` Fraunces-900 clamp bis 52px in --red |
| `.marquee` | Sortiment-Laufband | Fraunces-900 uppercase auf --paper, --line-Kanten, Trenner-`i` in --red; Hover pausiert |
| `footer.fuss` | Footer | bg --crumb, Text #D9C9AC, Links Hover --gold-l, `.fuss-marke` Riesen-Wortmarke in --gold-l |
| `.hinweis-offen` / `.sr-only` / `.skip` | Kleinkram | Vorschau-Hinweis (#F1E7CF/#6B4F23), Screenreader-only, Skip-Link (Gold auf --crumb) |

Fokus global: 3px outline --red, offset 3px; auf dunklem Grund `.auf-dunkel :focus-visible` in --gold-l.

## Motion

Geschlossene Liste, alles via `.js-motion` auf html (site.js, entfaellt bei reduced-motion):
- Reveals `[data-rv]/.in`: opacity + translateY 24px (Variante `="links"`: translateX 60px),
  .6/.7s ease bzw. cubic-bezier(.16,1,.3,1), Stagger per `--d` aus data-d. Einmalig.
- Masken-Zoom: img scale 1.12 -> 1, 1.05s cubic-bezier(.16,1,.3,1).
- Count-up: 950ms ease-out-cubic, einmalig (data-ziel/data-start).
- Marquee `.lauf`: translateX-Loop 30s linear, Hover pausiert.
- Mikro: Buttons transform+box-shadow .16s; Nav-Unterstrich border-bottom-color.
- Zeitband-Scrolly (nur min-width:900 + Motion, s.o.).
- Generationen-Schwebefoto (site.js, nur hover:hover + min-width:820): rAF-Lerp folgt Cursor
  (Faktor .16), Foto-Crossfade .35s, Nadelstreifen-Wipe clip-path .55s; reduced-motion = Snap
  ohne Nachlauf/Zoom, Modal ohne gmIn-Animation. Desktop-only Foto-Preload gegen Erst-Hover-Flackern.
Reduced-Motion: alles statisch (Reveals sichtbar, kein Zoom, kein Marquee, keine Button-
Transition, scroll-behavior auto); Zahlen zeigen sofort den Zielwert.

## Konstruktions-Muster

1. Sektions-Kopf als Paar: `.label` (mono, uppercase, --red) + `h2.disp` (Fraunces-900).
2. Farb-Hierarchie strikt: --red ist die EINZIGE Signalfarbe auf hell; Gold (gold/gold-l)
   ist die Aktiv-/Zierfarbe NUR auf dunklem --crumb-Grund. Nie mischen, nie tauschen.
3. Dunkle Baender als Hoehepunkte: --crumb-Flaechen mit 2px --gold-Kante (Zeitband,
   Fascia, Footer) rhythmisieren die helle Seite. Etwa 2x pro Seite. Das Zahlen-Band 4D
   ist nur zur unteren Haelfte --crumb (Split) und geht dort nahtlos ins Zeitband ueber.
4. Fotos nie nackt: entweder `.bild` (weisses Passepartout + Schatten + leichte Drehung)
   oder `.maske` (Border/Radius + Zoom-Reveal); Breitformate als `.anker` mit aspect-ratio.
5. Tiefe kommt aus Schatten + Drehung, NIE aus Klebeband/Washi/Markise (verworfen).
6. Zahlen/Preise/Jahre immer tabular-nums; Status-Texte nur ueber [data-status] aus site.js.
7. Headlines nur zwischen ganzen Woertern umbrechen (text-wrap balance, Marvins Regel).
8. Fliesstext bricht nach SINNEINHEITEN (Marvins Regel 2026-07-23): global `p{text-wrap:pretty}`
   (keine Einzelwort-Waisen) + Utility `.wg{display:inline-block}` um zusammengehoerige
   Wortgruppen in Leads/`.tafel-sub`/`.saison-note` (alle 7 Seiten). `.wg` bricht nur ZWISCHEN
   Gruppen; passt eine Gruppe nicht in die Zeile (320px), bricht sie intern -> kein Overflow.
   Beispiel geschichte-Lead: "Fuenf Generationen Familie Siebert. / Eine Adresse:
   Schoenfliesser Strasse 12, / Prenzlauer Berg." Neue Copy: Sinneinheiten gleich in .wg setzen.

## Do / Don't (projektspezifisch)

- Do: Gold (--gold Kanten, --gold-l Text) ausschliesslich auf --crumb. Jede neue Gold-
  Nutzung braucht crumb-Hintergrund im selben Selektorpfad.
- Do: Bilder IMMER `height:auto` lassen. Mit width/height-Attributen im HTML PLUS
  aspect-ratio im CSS hebeln die Attribute sonst die Ratio aus und verzerren -> globales
  `img{max-width:100%;height:auto}` ist die Absicherung, nicht optional.
- Do: --red nur fuer CTA-fill, Marker, Nadelstreifen, aktive Links, Preis-Highlights.
- Don't: Nadelstreifen bleibt fein (5px); nie zur dicken Markise aufblasen (das war C3).
- Don't: --gold-l/--gold nie als Text auf hell (Kontrast bricht: gold-l unlesbar,
  gold nur 2.76:1). Einzige geduldete Ausnahme: dekoratives `.z em` auf --paper.
- Don't: --crust (#A9752F) nie als Fliesstext (3.02:1), nur grosse Deko (.schritt .nr).
- Don't: kein zweites Scrollytelling; das Zeitband ist das eine Signature-Element.
- Don't: Nummern-Marker nur bei echter Sequenz (.schritt .nr), nie an Feature-Listen.
- Don't: `.jubi` ist temporaer (bis Okt 2026); nichts dauerhaft daran aufhaengen.

## Abgrenzung / Verworfen

Gewaehlt: "Warmes Regal" (D1b, "mehr Rot"), nach mehreren Feedback-Runden aus 9 Konzepten
(freigabe/konzepte/uebersicht.html). Brot-/Krustentoene + Weiss, Rot als Akzent, Gold nur auf Dunkel.
- KOMPLETT ERSETZT: v1 "Zeit-Haus" (Ladengruen #1F4A38 + Gold-auf-Gruen + League Gothic).
  Diese Akte loest die gruene v1-Fassung ab; Gruen und League Gothic sind raus.
- Verworfen C3 (dicke rot-weisse Markise + Klebestreifen): zu laut, unruhig.
- Verworfen reine kraftbraune C-Urfassung (C-tuete): zu monoton/braun.
- Nicht gewaehlte Nachbar-Konzepte in freigabe/konzepte/: A (Chronik/Zeitung),
  B (Ost-Moderne/Plakat), D2 (weisses Papier). Bei Redesign-Ideen nicht wieder anschleppen.
- Abstand halten von Creme+Terracotta (AI-Default) und vom fruehen Gruen.

## Seiten-Inventar

| Datei | Zweck | Besonderheit |
|---|---|---|
| index.html | Start/Onepager | Collage-Hero, Zahlenband, Zeitband (Signature), Sortiment-Teaser (Foto `laden-theke.jpg` = Auslage/Theke, NICHT brotregal wie im Hero -> kein Doppel-Foto), Handwerk-Schritte, CTA-warm, JSON-LD Bakery. (Tueten-Aufdruck `.tuete` 2026-07-23 entfernt: doppelte Hero/Handwerk-Copy + zweite zentrierte Wappen-Karte direkt vor CTA-warm) |
| geschichte.html | 120 Jahre, 5 Generationen | Fuenf-Generationen-Index (.iv: Akkordeon mobil / Schwebe-Foto + Klick-Modal Desktop); Jubilaeums-Sektion `.jub` (Goldenes Ticket + Woche-fuer-Woche-Kalender, Instagram-Verweis, KEINE Losnummern auf der Seite), Anker #jubilaeum |
| sortiment.html | Sortiment | Editorial-Split (.tafel-gruppe: Foto\|Tafel ab 1024px, alternierend), Preistafel-Muster (.tafel, Fuehrungspunkte), responsive Award-Notiz, Saison-Tabs (.saison: Fascia-Band, 3 Tabs Ostern/Weihnachten/Silvester, Datums-Default per Monat, a11y Tab-Muster) |
| torten.html | Torten auf Bestellung | CTA = Telefon (.tel), keine Formulare |
| ausbildung.html | Ausbildung | .benefits, erste Karte (So+Mo frei) in --red |
| besuch.html | Zeiten + Anfahrt | table.zeiten, .sommer-Box, Anfahrt ohne Maps-Embed. Desktop-Layout „Tuerschild" (Variante A) NUR ab 960px: Hero-Split (`.hero-split` Text\|Foto, `.hero-split-foto` mit team-gaerkoerbe als aspect-ratio-Crop 3:4), Zeiten als gerahmtes Papier-Panel (`.zeiten-panel` + Nadelstreifen, Ledger nur Horizontal-Linien, Zeiten rechtsbuendig) neben `.zeiten-neben`; `.kontakt-foto` auf Desktop aus (Foto lebt im Hero). Mobil = alter Einspalter unveraendert |
| impressum.html / datenschutz.html | Pflichtseiten | Platzhalter (Spekulations-Case) |
| 404.html | Fehlerseite | reduziertes Hero-Muster |

Intern (nie deployen): _icon-src.html, _og-src.html, _src/, freigabe/.
Echtes Logo: `img/siebert-logo.svg` (Kundenwappen, rote Loewen/Krone/Brezel; ersetzt frueheren SVG-Platzhalter).

## Known Gaps

- --gold (#B98F3A) als Text bei `.z em` auf --paper = nur 2.76:1. Dekoratives Shantell-
  Label, kein Fliesstext, aber die einzige Gold-auf-hell-Stelle. Sonst gilt Gold-nur-auf-dunkel.
- --ink2 (#786246) auf --oat = 4.37:1, knapp unter AA-normal (4.5). Ok fuer Lead (gross)
  und Captions, fuer kleinen Fliesstext meiden.
- pages.dev-URLs in og:url/og:image/JSON-LD sind Vorschau-Werte; DOMAIN-SWAP-Kommentar
  im head, canonical fehlt noch (kommt mit finaler Domain).
- .jubi-Leiste UND .jub-Sektion (geschichte.html #jubilaeum) sind TEMPORAER bis Okt 2026;
  Rueckbau nirgends automatisiert -> manuell entfernen. `.jub`/`.gewinner`-CSS dann aus styles.css raus.
- .jub-Kalender: 8 Wochen-Zettel sind ein Platzhalter-Raster; exakte Wochenzahl + dass die gezogenen
  Nummern ueber Instagram/Facebook laufen (nicht die Website) bei Anke bestaetigen.
- Kein Formular auf der Site (Bestellweg nur Telefon/Laden). Kommt eins: Botschutz-Pflicht
  nach technik-patterns.md.
- Foto-Luecken (siehe _lotse): Ladenfront aussen, Torten-Shooting.
- Saison-Tabs (.saison, sortiment.html): Datums-Default jetzt AUTOMATISCH per Monat (site.js) -> statischer
  Fokus geloest. OFFEN: konkrete Gebaecke (Christstollen/Osterzopf/Berliner) UND die Saison-Fotos
  (zoepfe-blech Ostern / brotschieber Weihnachten / teiglinge-ofen Silvester sind atmosphaerische
  PLATZHALTER, kein echtes Produktfoto je Saison) bei Anke bestaetigen. Desktop-2:3 croppt die Querformat-
  Fotos hart -> echte Hochkant-Saisonfotos waeren ideal. Silvester = `teiglinge-ofen.jpg` (runde Teiglinge
  am Ofen, Marvins Wahl 2026-07-23; ersetzt haende-kneten) — thematisch rund/dampfend, aber KEINE
  fertigen frittierten Berliner -> echtes Pfannkuchen-Produktfoto bleibt der Wunsch.
- Kein Dark-Mode, keine Print-Styles (bewusst offen).
