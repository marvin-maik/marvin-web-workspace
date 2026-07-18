---
projekt: marvin-web-landingpages
mutterprojekt: marvin-web  # erbt CD 1:1; Bauteil-Quelle = projekte/marvin-web/styles.css
stand: 2026-07-18
quellen: styles.css, kosten.html, design-dossier.md (Richtung A per Marvins Ansage 2026-07-16)
live: noch nicht live (pages.dev-Projekt noch nicht angelegt, _headers mit noindex vorbereitet)
description: "Werkstatt-Editorial, geerbt 1:1 von marvin-web (gleicher Absender, gleiche CD):
  warmes Papier als Grundflaeche, fast-schwarze Tinte, Signal-Orange als einzige Farbe.
  Clash Display fuer Uppercase-Headlines, System-Stack im Body, Mono fuer Labels/Zahlen.
  Signature ist die Massband-Linie (.rule) im Hero jeder Seite; der Auftragszettel (.docket)
  traegt alle Rechen-Belege. Die Site ist bewusst KEIN eigenes Designsystem: jedes Bauteil
  stammt aus projekte/marvin-web/styles.css. Neue Bauteile zuerst dort denken, dann hier."

colors:
  # 1:1 marvin-web :root. Rollen + Verbote:
  ink: "#161412"          # --ink, Text/Headlines + dunkle Baender (docket-foot, cta-band, footer)
  ink-soft: "#4a463f"     # --ink-soft, Fliesstext-Absaetze (.sub, .lede, Karten-Listen)
  paper: "#f5f1e8"        # --paper, Seitengrund. Karten/Docket liegen als --white darauf.
  paper-deep: "#ece7da"   # --paper-deep, Hard-Shadows (8px 8px 0) + Balken-Spur
  line: "#d8d2c2"         # --line, Hairlines, dashed Trennlinien
  hair: "#ded8c8"         # --hair, UNGENUTZT (geerbt, 0 Treffer in styles.css)
  signal: "#e8440a"       # --signal, NUR grosse Typo/Grafik (h1 em, .rule, Step-Zahlen, Haken).
                          # VERBOT: nie als Text in Lesegroesse (nur 3,54:1 auf Papier)!
  signal-deep: "#b53507"  # --signal-deep, Textlinks/Buttons/Tag-Prefix (5,36:1; Weiss darauf 6,04:1)
  signal-press: "#8F2A05" # --signal-press, Button-Hover
  signal-tint: "#FF9B78"  # --signal-tint, Akzent NUR auf Ink-Flaechen (meta-row b, docket-foot b)
  muted: "#6d675a"        # --muted, Mono-Meta (4,98:1). Nie fuer Fliesstext.
  white: "#FFFFFF"        # --white, Karten/Docket/Pakete-Flaeche
  # Dark-Ableger fuer Ink-Flaechen: --dark-soft #B7B1A2 (cta-band lede/trust, Foot-Links),
  # --dark-muted #8A8476 (Footer-Meta). --dark-line #3A362F und --dark-body #CFC9BA
  # sind geerbt und UNGENUTZT (0 Treffer).
  # Kontraste (gerechnet): ink/paper 16,3:1 · signal-deep/paper 5,36:1 · muted/paper 4,98:1
  # dark-soft/ink 8,6:1 (Trust-Row im CTA-Band)

typography:
  display:
    fontFamily: Clash Display        # fonts/clash-display-600.woff2 + -700.woff2 (Fontshare)
    weights: 600, 700
    letterSpacing: -0.02em (Headlines) / -0.012em + word-spacing .16em (Uppercase-H1)
    lineHeight: 0.95 (H1) / 1.0 (h2/h3)
  body:
    fontFamily: System-Stack (-apple-system, Segoe UI, Roboto)
    size: 17px
    lineHeight: 1.55
  # Alle Ueberschriften (h1,h2,h3): overflow-wrap:break-word + hyphens:auto, damit lange
  # deutsche Komposita bei <=320px sauber trennen statt aus der Textspalte zu ragen (2026-07-18).
  # .hero h1 ueberschreibt bewusst mit hyphens:manual + overflow-wrap:anywhere.
  mono:
    fontFamily: ui-monospace Stack
    size: 12 bis 13px
    letterSpacing: .04 bis .16em
    use: .tag, .trust-row, .meta-row, docket-Betraege, .fussnote, .tier
  scale: "12.5 -> 15 -> 17 -> 19/21 -> 28 -> clamp(32px,4.8vw,60px) [h2] ->
    clamp(34px,7vw,84px) [LP-H1] -> clamp(72px,7vw,110px) [Step-Zahlen]"
  # LP-H1 ist BEWUSST kleiner als marvin-web-Hero (150px): lange Satz-Headlines.
  # Angebots-Seite (.dok): H1 clamp(32px,6vw,64px). Seit 2026-07-18 volle
  # --wrap-Breite (Marvins Ansage). PRINZIP (Referenz-Abgleich marvin-web live):
  # Listen-Objekte (stack, faq-list, eigentum-liste, compare, pkg-grid) laufen
  # VOLLE Breite; nur Lesetext ist gedeckelt (ol/guarantee/freie p 760,
  # Lede 600, Fussnote 620, FAQ-Antwort 760).

spacing:
  base: 4px
  section: 88px (.sec, auch .dok seit 2026-07-18) / Hero 64-72px
  card: 28px (.karte) / 40px 32px (.pkg) / 26px 24px (.mess)

rounded:
  keine (0px ueberall; einzige Ausnahme .stempel 6px, Wireframe-Highlight eigentum.html)

breakpoints:
  # Responsive-Feinschliff 2026-07-18 (Tablet-Stufen ergaenzt, damit zw. Handy und Desktop
  # nichts luftig-leer oder aufgeblasen wirkt; alles verifiziert Mobile/Tablet/Desktop, 0 Overflow):
  1000/1001px (.dok-Pakete: ab 1001 dreispaltig; 701-1000 ZWEIspaltig mit Paket 3 ueber
    die volle Breite, so kein einsames Halbfeld und kein Streichpreis-Umbruch in schmaler Spalte)
  700px (kalte-LP-Pakete UND .dok-Pakete werden erst hier einspaltig; darueber zweispaltig,
    Spalte bleibt >=321px = Streichpreis einzeilig. Vorher stapelten kalte Pakete schon bei 900)
  860px (beweis-duo/karten-2 einspaltig; showcase-Bildunterschrift bekommt padding-right 160,
    damit keine Zeile hinter dem ueberlappenden Handy verschwindet -> 124 unter 560)
  640px (about-grid gestapelt UND .duo-Portraet auf max 300px gedeckelt; vorher stapelte es
    schon bei 820 und blies das Hochformat auf volle Breite = 712px-Riesenfoto auf Tablet)
  620px (karten-3/Selbsttest einspaltig; darueber dreispaltig = drei Fragen nebeneinander)
  560px (steps einspaltig, docket Label-ueber-Wert, compare als Bon-Muster, stack einspaltig)
---

## Signature-Element

Massband-Linie `.rule`: repeating-linear-gradient (2px Striche alle 24px) ueber
2px Volllinie, beides --signal. Sitzt im Hero jeder Seite unter der H1 (max-width
560px), zeichnet sich per @keyframes drawRule (clip-path) ein. Zweites Seiten-Highlight
NUR auf eigentum.html: der Passport-Stempel `.stempel` (double-border, rotate(-5deg),
mask-Fehlstelle, --signal-deep) als Eigentums-Zusage.

## Komponenten (echte Selektoren aus styles.css)

| Selektor | Bauteil | Konstruktion (Kurzform) |
|---|---|---|
| `.meta-row` | Kopfzeile statt Menue | Ink-Band, Mono 12.5px, Marke links ([b] = tint), tel: rechts |
| `.tag` | Sektions-Marker | Mono uppercase, "// "-Prefix in --signal-deep |
| `.rule` | Massband-Linie | Gradient-Rezept, im Hero, drawRule-Animation |
| `.btn-primary` | Haupt-CTA | bg --signal-deep, weiss, 2px Border; Hover: press + translate(-2,-2) + 4px-Hard-Shadow ink |
| `.btn-ghost` | Zweit-CTA | Papier + 2px Ink-Border; Hover invertiert + Shadow signal |
| `.trust-row` | Beleg-Zeile unter CTAs | ul, Mono, Haken-Prefix --signal-deep (im CTA-Band: tint) |
| `.docket` | Auftragszettel/Beleg | Weiss, 1.5px Ink-Border, 8px-Hard-Shadow paper-deep; Head 1.5px-Border, Rows dashed, Foot = Ink-Band |
| `.docket-foot .gross` | Count-up-Zahl | Clash 700, clamp(34px,5vw,52px), tabular-nums, data-zaehler |
| `.karte` | Info-Karte | Weiss, 1.5px Ink-Border, Haken-Liste mit dashed Rows |
| `.pkg-grid` / `.pkg` | Paket-Karten | 1.5px-Ink-Rahmen, Trennsteg 1.5px, .tier Mono, .price Clash 44-60px. Kalt (2 Pakete): zweispaltig bis 700px. .dok (3 Pakete): 3sp >=1001, 2sp 701-1000 mit Paket 3 volle Breite (nth-child(3) grid-column 1/-1), 1sp <=700. PREIS im 3sp-Modus (>=1001): font clamp(44,4vw,54) + white-space:nowrap, weil "2.368 € 1.990 €" bei 60px (325px) in den ~316px Karten-Innenraum nicht passt und auf breiten Fenstern umbrach; nowrap NUR >=1001, sonst liefe der Preis in der schmalen Handy-Spalte ueber (2026-07-18) |
| `.steps` / `.step .big` | Ablauf | 3 Spalten mit Hairline-Stegen, Zahlen 01-03 als Orange-Stroke (text-stroke), fuellen sich bei .rv.in. .dok hat 4 Schritte: 4sp Desktop, 2x2 <=900 (dabei erste Spalte / ungerade Schritte ohne linke Kante + buendig links, sonst steht 03 versetzt unter 01 = Alt-Bug 2026-07-18 gefixt), 1sp <=560 |
| `.faq-list details` | FAQ | Hairline-Rows VOLLE Breite (820er-Deckel entfernt 2026-07-18, Referenz-Abgleich mit marvin-web live; gilt fuer ALLE LPs), summary Clash 18-23px, +/x-Marker --signal, Antwort in div.a (760 Lesetext) |
| `.mess` / `.mess-bahn` / `.mess-zeit` | Ladebalken-Rennen | Massband-SKALA jetzt in der leeren Spur (--muted repeating-gradient auf paper-deep), Fuellung satt --signal. BEIDE Bahnen fuellen auf 100% (beide werden fertig), nur die DAUER trennt sie: Ballast 3.2s linear, schlank .9s ease-out. Zeit-Wert (.mess-zeit, tabular-nums, min-width 58) blendet am Ende jeder Bahn ein (opacity-transition mit delay = Dauer). Zeit als BEREICH ("ueber 3 s" / "unter 1 s"), keine Punktwerte (Marvins Wahl 2026-07-18, keine Fake-Praezision ohne Messung); belegt ist PageSpeed 98 (Fussnote "Richtwerte, keine Laborzahlen"). scaleX = Compositor; Endzustand (kein JS/reduced-motion) = beide voll + Zeit sichtbar. Umbau Marvin 2026-07-18: Striche gehoeren in die leere Bar, nicht in den Balken; beide bis zum Ende; Zeit am Ende sichtbar |
| `.compare` + `.table-scroll` | Vergleichstabelle | 1.5px-Ink-Rahmen, thead paper-deep, overflow-x im Wrapper |
| `.cta-band` | Abschluss-Band | Ink-Flaeche, h-lg in paper, Ghost-Button invertiert |
| `.foot-row` | Footer | Ink-Band, Mono, Underline-Slide-Hover (background-size-Trick) |
| `.about-grid` / `.pull` / `.who` | Wer-baut-das-Block | Portraet in .duo-Rahmen + Pull-Quote (Clash 28-48px, em = signal-deep) + Mono-Absender. Bleibt bis 640px zweispaltig (Portraet + Text nebeneinander), erst darunter gestapelt mit .duo max-width 300px (sonst 712px-Riesenfoto auf Tablet, 2026-07-18 gefixt) |
| `.showcase` | Geraete-Showcase | Browserrahmen (.showcase-bar mit Dots + URL) + Desktop-Screenshot, davor .showcase-phone = freigestelltes iPhone-Foto-Mockup (Marvin 2026-07-18, Photoroom-Freistellung, scharfer routenwerk-Screenshot drin). Ausgeliefert als `<picture>`: transparentes AVIF (74KB, Hauptbild) + PNG-Fallback (468KB, nur alte Browser). CSS: 184px, `filter:drop-shadow` (weich, folgt der Alpha-Silhouette) statt CD-Hard-Shadow; KEINE border/radius/background mehr - das Foto-Geraet bringt den Rahmen selbst mit. Assets: img/showcase-phone-mockup.{avif,png}, Original in _src/mockup/. STATISCH, bewusst kein iframe. WICHTIG: unter 860px .showcase-cap padding-right (176/132), sonst haengt das Handy ueber der Bildunterschrift. HINWEIS: Browser-Pane rendert AVIF nicht (Headless), Verify nur ueber den PNG-Fallback moeglich; AVIF-Qualitaet per avif->png-Rueckwandlung geprueft |
| `.facts` / `.fact` | Eckdaten-Kacheln | 1.5px-Ink-Grid mit 1.5px-Stegen, Zahl Clash 38-56px, Label Mono signal-deep; Reveal = Tinte-Cover (::after faellt ab), NIE Opacity-Fade |
| `.guarantee-band` | Freigabe-Garantie am Preis | Ad-LPs: paper-deep-Kasten mit Haken-Icon. Auf .dok seit 2026-07-18 ENTKASTET (Marvins Ansage, Stempel-Variante verworfen): nur .tag + h3 28px + p, 760px, direkt unter .pkg-grid |
| `.gruendung` | Verknappung (der EINE laute Haken) | Ink-Flaeche, .plaetze Mono in signal-tint, h3 in paper; direkt unter der Garantie |
| `.stack` / `.stack-row` / `.stack-total` | Hormozi-Offer-Stack | angebot + warme Varianten (karte/whatsapp/instagram), NICHT kalte Ad-LPs: Weiss, 1.5px Ink, dashed Rows, .what fett + small-Nutzen, .val Mono-Anker rechts; .stack-total = Ink-Band mit Preis in signal-tint; IMMER einspaltig (Marvin 2026-07-18, Grid/2-Spalten verworfen), 760px. Auf dem Handy (<=560) rutscht .val unter die Beschreibung und steht RECHTSbuendig als Wert-Anker (Bon-Muster wie docket/compare), nicht links (2026-07-18) |
| `.sec-head` | Sektionskopf mit Linie | 1:1 aus marvin-web: .tag + durchziehende Hairline (flex:1) + Mono-.aux rechts; verankert Sektionen auf --wrap. Seit 2026-07-18 auf ALLEN LPs (warm 1:1 wie angebot, kalt als Sektionskoepfe mit optionalem .aux) |
| `.guides` | Raster-Linien VOLLE SEITE | 1:1 aus marvin-web/Porto (Fundus: "volle Dokumenthoehe, kein Trick, nur Konsequenz"): 3 vertikale Hairlines (--hair, damit erstmals genutzt) auf 25/50/75 Prozent, div direkt unter body (body position:relative noetig!), z-index 0; dunkle Baender und Weiss-Karten decken ab. Gegen den Baukasten-Eindruck (Marvin 2026-07-18). Seit 2026-07-18 auf ALLEN LPs, auch nicht-.dok (guides ist global, body position:relative) |
| `.hero-grid` / `.hero-side` | Hero zweispaltig | 1:1 aus marvin-web (1.5fr/1fr, gap 56): Intro+CTA links, Docket-Briefkopf rechts; <=900px gestapelt. angebot + warme Varianten; kalte Ad-LPs behalten Einspalten-Hero |

## Motion

Nur opacity/transform: Reveals (.rv 550ms ease/cubic), Button-Lift 150ms, Step-Zahl-
Fuellung 700ms, drawRule 900ms (clip-path), Balken scaleX 800ms/3.2s, FAQ-faqIn 300ms.
KEINE width/height/layout-Transitions (pausieren in Hintergrund-Tabs, ruckeln).
Reduced-Motion: alles aus per Media-Query, .rv sichtbar, Balken/Zahl stehen auf Endwert.
Count-up: rAF + setTimeout-Sicherheitsnetz auf Endwert (site.js).

## Konstruktions-Muster

1. Jede Sektion beginnt mit `.tag` (// Marker), dann `.h-lg`, dann max. 600px Lede.
2. Ad-LPs teilen ein Skelett: Hero -> Angle-Problem -> Angle-Beweis -> Wer-baut-das
   (Sanwarwala-Proof: Portraet + .showcase + facts, identisch) -> Pakete (+ Freigabe-Garantie
   + .gruendung + Startpreis-Absatz) -> Ablauf (identisch) -> FAQ (Reihenfolge je Angle) -> CTA-Band.
3. KANAL-VARIANTEN (Marvin 2026-07-17): Der Sinn mehrerer LPs ist die individuelle
   Verknuepfung je Kanal, NICHT eine neutrale Seite fuer alle. Kalte Seiten variieren nach
   ANGLE (kosten/eigentum/schnell), warme nach KANAL (karte/whatsapp/angebot). Je Kanal
   unterscheiden sich NUR: H1, Hero-Sub, CTA-Ueberschrift + Lede, wa.me-Prefill, og:url,
   title. Der Koerper (Stack, Pakete, Garantie, Gruendung, Vergleich, Ablauf, Eigentum, FAQ)
   bleibt IDENTISCH und muss bei Aenderungen in allen dreien nachgezogen werden.
   Neuer Kanal = angebot.html kopieren und genau diese 7 Stellen tauschen.
4. HORMOZI-PLATZIERUNG: Der volle Wert-Stack (.stack) steht auf angebot.html und den warmen Varianten (karte/whatsapp/instagram) und dort
   VOR dem Preis (erst Wert bauen, dann Preis zeigen). Kalte Ad-LPs bleiben knapp: Pakete
   statt Stack, sonst erschlaegt die Wand den 5-Sekunden-Scan.
5. Rechen-/Beleg-Inhalte IMMER als .docket (Kopf/Rows/Ink-Fuss), Betraege Mono rechts.
6. Ein CTA-Paar pro Block: btn-primary (WhatsApp, mit vorbefuelltem ?text= je Angle)
   + btn-ghost (tel:). Darunter immer .trust-row.
7. Seitenrhythmus hell: Papier -> Weiss-Karten; dunkel nur docket-foot, cta-band, footer.
8. Angebots-Seite = .dok (Body-Klasse): seit 2026-07-18 volle --wrap-Breite mit
   sec-head-Linien und hero-grid (Docket als Briefkopf rechts); Text-Bloecke im
   760px-Lesemass, pkg-grid 3-spaltig (.dok-Override). Ablauf seit 2026-07-18 als
   .steps mit Riesen-Zahlen 01-04 (4 Spalten via .dok-Override, statt ol;
   gegen Baukasten-Monotonie). Mobil: Docket
   Label-ueber-Wert, CTAs volle Breite, .compare als Bon-Muster (Label links,
   Betrag rechts, data-label-Attribute in den td noetig).
## Do / Don't (projektspezifisch)

- Do: Markenname IMMER als Platzhalter [MARKE] (Rebrand laeuft, Alt-Name ist verboten
  und darf nirgends auftauchen).
- Do: neue Bauteile zuerst gegen projekte/marvin-web/styles.css pruefen und von dort
  uebernehmen; nur LP-Spezifisches (mess, dok, erledigt, stempel) lebt nur hier.
- Do: wa.me-Links mit vorbefuelltem Text je Angle (Kosten/Eigentum/Speed-Check/Angebot).
- Don't: kein Menue und keine internen Links auf den Ad-LPs (ein Ziel pro Seite).
- Don't: kein Formular, kein Formspree, kein Drittanbieter-Snippet (Positionierung
  "kein Fremdcode"; Formular spaeter nur als CF Pages Function).
- Don't: Orange #e8440a nie als Lesetext; Text-Orange ist immer #b53507.
- Don't: kein zweiter Stempel, kein Stempel ausserhalb eigentum.html.
- Don't: das Wort "Code" NICHT in Kundentext (Marvin 2026-07-17: klingt nach KI, davon
  will er sich abgrenzen). Rollen-Schema stattdessen: Eigentum -> "Ihre Website / alle
  Dateien / die Seite"; Tempo -> "Ballast / das Noetige"; Handwerk -> "von Hand, jede
  Zeile". "HTML und CSS" ist KEIN Ersatz (fuer die Zielgruppe noch mehr Jargon):
  genau EINE bewusste Nennung in der KI-FAQ (angebot.html) als Kompetenzbeweis.
- Don't: keine erfundenen oder halbwahren Anker in .stack .val. Nur belegbare
  ("Baukasten: 330 bis 550 € / 2 Jahre", "PageSpeed 98, gemessen"). Fantasie-Werte sind
  dasselbe Vertrauensproblem wie Streichpreise. GELERNT 2026-07-17 (Marvins Korrektur):
  "Schrift-Dienste kosten monatlich" war so ein halbwahrer Anker und ist RAUS. Google Fonts
  sind kostenlos, Schriften kosten nur AUSSERHALB davon. Schriften stehen jetzt als BONUS
  ("Eine Schrift, die nicht jeder hat": kein Baukasten-Look, ohne Lizenzgrenzen, ohne
  Seitenaufruf-Limit); der Datenschutz-Vorteil des Selbst-Hostens traegt die DSGVO-Zeile.
- Don't: kein zweiter lauter Dringlichkeits-Hebel. .gruendung ist laut, der Startpreis-
  Absatz bleibt leise. Kein Streichpreis, kein Countdown, keine Live-Platzzaehler
  ("noch 2 frei" waere ein Pflege- und Ehrlichkeitsrisiko).
- Don't: kein Live-iframe der Demo in den Ad-Funnel (geprueft 2026-07-17: routenwerk
  zieht ca. 350 bis 450 KB, die LP wiegt 66 KB; das Gewicht schlaegt genau das
  Speed-Versprechen. Das Live-Fenster bleibt auf marvin-web).

## Abgrenzung / Verworfen

Dossier 2026-07-16 (design-dossier.md) schlug B "Beleg und Stempel" (Thermopapier
#FDFCF9, Stempelblau #2B4EA2, IBM Plex) vor; B wurde GEBAUT und auf Marvins Ansage
("das Design von marvin-web nehmen, nicht mixen") am selben Tag durch Richtung A ersetzt.
Merksatz daraus: Marvins eigene Projekte erben das marvin-web-CD, design-scout-Richtungen
sind fuer Kundenprojekte. Ebenfalls verworfen: C "Typenschild" (#F2F2EF/#1C5E43, Barlow),
sipgate-Look (Lila #8642FE + Neon #DEFF00, Anti-Slop), Creme+Serif-Editorial.

## Seiten-Inventar

| Datei | Zweck | Besonderheit |
|---|---|---|
| kosten.html | Ad-LP Angle Kosten | 2 Dockets (Abo-Rechnung, Ersparnis mit Count-up 552) |
| eigentum.html | Ad-LP Angle Eigentum | Selbsttest-Karten, Uebergabe-Liste + .stempel |
| schnell.html | Ad-LP Angle Speed | .mess Ladebalken-Rennen + PageSpeed-Wert 98/100 |
| angebot.html | warme Seite, KANAL: generisch (Mail-Signatur, nach Telefonat) | .dok, Docket-Briefkopf, .stack, .compare, KI-FAQ; Koerper = Vorlage aller warmen Varianten |
| karte.html | warme Seite, KANAL: QR auf der Visitenkarte (nach persoenlichem Treffen) | Koerper identisch mit angebot.html; H1 "Schoen, dass wir uns getroffen haben" |
| whatsapp.html | warme Seite, KANAL: Link im WhatsApp-Business-Profil | Koerper identisch mit angebot.html; CTA "Antworten Sie einfach hier in WhatsApp" |
| instagram.html | warme Seite, KANAL: Link in der Instagram-Bio | Koerper identisch mit angebot.html; H1 "Sie haben die Arbeit gesehen" ANNAHME: Profil zeigt Arbeit. Bei leerem Profil H1 tauschen. |
| 404.html | Fehlerseite | root-absolute Pfade, Wegweiser auf die 3 Ad-LPs |

## Known Gaps

- SYNC ERLEDIGT (2026-07-18): karte/whatsapp/instagram sind 1:1 auf das neue
  angebot-Design gezogen (cp angebot.html + nur die 7 Kanal-Stellen getauscht:
  Kommentar, title, og:url, H1, Hero-Sub, CTA-Band-H2, wa.me-Prefill). Koerper
  byte-identisch zu angebot (per diff geprueft). Muster 3 wieder erfuellt. Der
  Hero-CTA ist bei allen der Cal-20-Min-Button (CAL-SWAP offen), der WhatsApp-CTA
  sitzt im CTA-Band.
- KALTE AD-LPs visuell aufgefrischt (2026-07-18, Marvins Wahl "visuell mit-auffrischen"):
  kosten/eigentum/schnell haben jetzt .guides + .sec-head-Sektionslinien + Streichpreise
  (1.178/2.368) mit "einmalig*"-Fussnote. Bewusst NICHT uebernommen (Muster 4): .stack,
  .hero-grid, .dok-Body-Klasse, entkastete Garantie. Garantie bleibt Kasten, Angle-Beweise
  (Rechnung/Selbsttest/Mess) unveraendert.
- OFFEN Copy-Divergenz Gespraechsdauer: angebot + warme Seiten sagen "20 Minuten"
  (Ablauf-Schritt, Docket, Hero-CTA), kalte Ad-LPs sagen im Ablauf-Schritt noch
  "30 Minuten". Bewusst nicht angefasst (kalt = nur visuelle Auffrischung). Bei
  Bedarf angleichen (eine Stelle je kalter Seite).
- OFFEN Hero-CTA du/Sie: der angebot-Hero-CTA lautet "Buch dir ein 20-Minuten-Gespraech"
  (Duzen), der Rest siezt. 1:1 auf die warmen Varianten uebernommen. Wenn angeglichen
  werden soll: eine Stelle in angebot + den 3 warmen Varianten.
- STREICHPREIS-ENTSCHEIDUNG (Marvin 2026-07-17): del-Preis 1.178/2.368 vor dem
  Startpreis, als echter Zukunftspreis (990/1.990 x 1,19). Steht bewusst im
  Spannungsfeld zur aelteren Kein-Streichpreis-Regel weiter unten; Marvins Ansage
  sticht. PAngV-Blick vor Launch trotzdem empfohlen (kein frueher verlangter Preis).
- CAL-SWAP: Hero-CTA verlinkt cal.com/CAL-SWAP/20min, echter Cal.com-Link fehlt noch.
- Markenname/Domain offen (Rebrand): [MARKE]-Platzhalter, OG-URLs mit DOMAIN-SWAP,
  Footer-Rechtslinks zeigen auf marvin-web.pages.dev. Kein foot-mark bis Name steht.
- ERLEDIGT 2026-07-17 (Marvin, zweite Korrektur): angebot.html hat MEHRERE Zugaenge und
  muss deshalb ZUGANGS-NEUTRAL sein. Wege laut Marvin: QR-Code auf der Visitenkarte (nach
  einem persoenlichen Treffen, also OHNE Nachricht), die Ad (kalt, gar kein Kontakt),
  das WhatsApp-Profil. Jede Begruessung, die einen Weg unterstellt, ist fuer die anderen
  falsch. Ich lag zweimal daneben ("Danke fuer das Gespraech", dann "Danke fuer Ihre
  Nachricht"). REGEL: keine Danksagung fuer eine bestimmte Handlung, kein [Erledigt]-Badge
  im Ablauf. H1 ist jetzt "Ihre Website, schwarz auf weiss", der Ablauf startet neutral bei
  Schritt 1 = Gespraech (das steht bei JEDEM Zugang noch aus, auch nach dem Handschlag).
  Der .erledigt-Baustein ist deshalb ersatzlos entfernt (CSS mit).
- routenwerk ist seit 2026-07-17 mit Marvins Freigabe SICHTBAR als "Demo-Projekt
  (fiktives Reisebuero als Anschauungsprojekt)" gelabelt (demo-blick + facts-Kachel);
  NIE als Kundenreferenz ausgeben. Ablosen, sobald echte Case Study existiert
  (Aluman wird verkauft statt migriert, Marvin 2026-07-17).
- Startpreis-Mechanik (Hormozi, ECHTE Urgency): Par. 19 UStG gilt nur in der Startphase,
  spaeter +19 % USt und Wartezeiten; konkrete Zukunftszahl 1.178 EUR (= 990 x 1,19).
  KEINE Streichpreise/Countdown erfinden (PAngV + Vertrauen).
- Betreuungs-Umfang (Anzahl Aenderungen, Reaktionszeit) und Umzugs-Prozess textlich
  noch duenn (offene Marvin-Entscheidungen aus struktur.md).
- Gruendungsprojekte: Der konkrete Abzug steht BEWUSST nicht in der Copy (wird im
  WhatsApp-Gespraech verhandelt). Marvins Wunsch war "50 % Streichpreis", davon abgeraten
  (halbiert Marge, signalisiert weichen Preis, zweite Dringlichkeit); Gegenvorschlag
  Referenz-Tausch wurde gebaut. Falls Marvin doch eine feste Zahl will: eine Stelle je Seite.
- Garantie: gebaut ist die sichere Freigabe-Garantie. Die mutigere Hormozi-Variante
  ("Sie zahlen erst bei Abnahme") ist bewusst NICHT gesetzt, das ist Marvins
  Cashflow-Entscheidung (Einzeiler im .guarantee-band).
- Design-Handout ist als BONUS im Stack gesetzt (Hormozi: Wert draufpacken statt Preis
  senken). Falls es Upsell bleiben soll: eine Zeile in angebot.html.
- iOS zeigt im .table-scroll keinen Scrollbalken (bekanntes Muster, Indikator-Rezept
  in technik-patterns.md); Nice-to-have.
- Count-up/Reveals brauchen einen echten Geraete-Check (Browser-Pane pausiert IO/rAF).
- Ungenutzte geerbte Tokens in :root: --hair, --dark-line, --dark-body (0 Treffer in
  styles.css); beim naechsten Umbau nutzen oder streichen.

## Kanal-Karte (Stand 2026-07-17, Marvins 4 Kanaele)

| Kanal | Seite | Zustand |
|---|---|---|
| Social Ad | kosten.html / eigentum.html / schnell.html | je Angle eine; Creative existiert noch nicht, H1 beim Ad-Texten gegenpruefen (Message Match) |
| WhatsApp-Business-Profil | whatsapp.html | fertig |
| Instagram-Bio | instagram.html | fertig (H1-Annahme: Profil zeigt Arbeit) |
| Visitenkarte (QR) | karte.html | fertig |
| Fallback (Mail-Signatur, nach Telefonat) | angebot.html | fertig, nicht einer von Marvins 4 Kanaelen, aber die Quelle aller warmen Varianten |

## Zielgruppe (KORRIGIERT, Marvin 2026-07-17)

Start-ups, Selbststaendige und kleine bis mittlere Betriebe. NICHT nur Handwerker,
das war eine zu enge Uebernahme aus dem Rohmaterial und ist aus Copy + Beispielen
entfernt (keine Baustellen-/Wartezimmer-/Oeffnungszeiten-Bilder als Zielgruppen-Marker,
Vergleichstabelle jetzt: Kleiner Betrieb / Firma / Start-up). Bei neuen Sektionen und
Ads: Bilderwelt neutral-geschaeftlich halten; "das Handwerk gelernt" bleibt als
Redewendung in der KI-FAQ erlaubt (Craft-Aussage, kein Zielgruppen-Marker).

## Sprache: verständlich für einen Zehnjährigen (Marvins Regel, 2026-07-17)

Kernregel für ALLE Kundentexte: "So simpel, dass es ein Zehnjähriger versteht. Nicht
kindlich, aber dumbed down." Je mehr der Leser mitdenken muss, desto mehr springen ab,
weil sie keine Motivation haben, sich reinzudenken. Fachwörter sind Denk-Hürden.

Uebersetzungs-Tabelle (verbindlich, sichtbarer Verkaufstext):
- Plattform / Plattformkosten -> "monatliche Gebühr", "pro Monat", "der Baukasten"
- "System / Skripte / Mess-Technik mitladen" -> "der Baukasten schleppt seinen ganzen
  Werkzeugkasten mit" (Marvins Beispiel-Satz, der zuvor unverstaendlich war)
- Hosting / Hoster -> "der Platz für Ihre Seite im Netz", "Anbieter"
- Domain -> "Ihre Internet-Adresse" / "die Adresse" (Domain nur noch in Fussnoten)
- Ranking -> "zeigt sie weiter oben"; "Hauptinhalt" -> "eine Seite"
- PageSpeed -> "Tempo-Wert von Google"
- Fremdcode -> "unnötiger Ballast"; US-Standardserver -> "fremde Server"
- WCAG 2.1 AA -> "für alle bedienbar, auch für Ältere"; das Kuerzel NUR in Klammern als
  Kompetenz-Nachweis ("Fachleute nennen das WCAG 2.1 AA"), genau EINMAL (angebot.html).

AUSNAHME: Fussnoten (.fussnote) duerfen praezise/fachlich bleiben (Webflow-Listenpreise,
Kurs, Stand). Ein Zehnjaehriger liest kein Kleingedrucktes; dort zaehlt Korrektheit.
Beim naechsten Copy-Change gegenpruefen: grep sichtbaren Text gegen diese Liste.
