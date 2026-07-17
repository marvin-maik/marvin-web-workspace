---
projekt: landingpages
stand: 2026-07-17
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
  mono:
    fontFamily: ui-monospace Stack
    size: 12 bis 13px
    letterSpacing: .04 bis .16em
    use: .tag, .trust-row, .meta-row, docket-Betraege, .fussnote, .tier, .erledigt
  scale: "12.5 -> 15 -> 17 -> 19/21 -> 28 -> clamp(32px,4.8vw,60px) [h2] ->
    clamp(34px,7vw,84px) [LP-H1] -> clamp(72px,7vw,110px) [Step-Zahlen]"
  # LP-H1 ist BEWUSST kleiner als marvin-web-Hero (150px): lange Satz-Headlines.
  # Angebots-Seite (.dok): H1 clamp(32px,6vw,64px), Lesespalte 760px.

spacing:
  base: 4px
  section: 88px (.sec) / 64px (.dok .sec) / Hero 64-72px
  card: 28px (.karte) / 40px 32px (.pkg) / 26px 24px (.mess)

rounded:
  keine (0px ueberall; einzige Ausnahme .stempel 6px, Wireframe-Highlight eigentum.html)

breakpoints:
  900px (pkg-grid einspaltig), 860px (beweis-duo/karten einspaltig), 560px (steps einspaltig)
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
| `.pkg-grid` / `.pkg` | Paket-Karten | 1.5px-Ink-Rahmen, Trennsteg 1.5px, .tier Mono, .price Clash 44-60px |
| `.steps` / `.step .big` | Ablauf | 3 Spalten mit Hairline-Stegen, Zahlen 01-03 als Orange-Stroke (text-stroke), fuellen sich bei .rv.in |
| `.faq-list details` | FAQ | Hairline-Rows, summary Clash 18-23px, +/x-Marker --signal, Antwort in div.a |
| `.mess` / `.mess-spur i` | Ladebalken-Rennen | Massband-Gradient als Fuellung, scaleX-Transition (Compositor!), Endzustand ist CSS-Default |
| `.compare` + `.table-scroll` | Vergleichstabelle | 1.5px-Ink-Rahmen, thead paper-deep, overflow-x im Wrapper |
| `.cta-band` | Abschluss-Band | Ink-Flaeche, h-lg in paper, Ghost-Button invertiert |
| `.erledigt` | Status-Badge | Mono uppercase, weiss auf --signal-deep (6,04:1) |
| `.foot-row` | Footer | Ink-Band, Mono, Underline-Slide-Hover (background-size-Trick) |
| `.about-grid` / `.pull` / `.who` | Wer-baut-das-Block | Portraet in .duo-Rahmen + Pull-Quote (Clash 28-48px, em = signal-deep) + Mono-Absender |
| `.showcase` | Geraete-Showcase | Browserrahmen (.showcase-bar mit Dots + URL) + Desktop-Screenshot, davor .showcase-phone (132px, border-radius 26px = physisches Geraet) mit Mobil-Screenshot; STATISCH, bewusst kein iframe |
| `.facts` / `.fact` | Eckdaten-Kacheln | 1.5px-Ink-Grid mit 1.5px-Stegen, Zahl Clash 38-56px, Label Mono signal-deep; Reveal = Tinte-Cover (::after faellt ab), NIE Opacity-Fade |
| `.guarantee-band` | Freigabe-Garantie am Preis | paper-deep-Flaeche, 1.5px Ink-Border, Haken-Icon signal-deep, .tag als Garantie-Name, direkt unter .pkg-grid |
| `.gruendung` | Verknappung (der EINE laute Haken) | Ink-Flaeche, .plaetze Mono in signal-tint, h3 in paper; direkt unter der Garantie |
| `.stack` / `.stack-row` / `.stack-total` | Hormozi-Offer-Stack | NUR angebot.html: Weiss, 1.5px Ink, dashed Rows, .what fett + small-Nutzen, .val Mono-Anker rechts; .stack-total = Ink-Band mit Preis in signal-tint; mobil einspaltig |

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
7. HORMOZI-PLATZIERUNG: Der volle Wert-Stack (.stack) steht NUR auf angebot.html und dort
   VOR dem Preis (erst Wert bauen, dann Preis zeigen). Kalte Ad-LPs bleiben knapp: Pakete
   statt Stack, sonst erschlaegt die Wand den 5-Sekunden-Scan.
3. Rechen-/Beleg-Inhalte IMMER als .docket (Kopf/Rows/Ink-Fuss), Betraege Mono rechts.
4. Ein CTA-Paar pro Block: btn-primary (WhatsApp, mit vorbefuelltem ?text= je Angle)
   + btn-ghost (tel:). Darunter immer .trust-row.
5. Seitenrhythmus hell: Papier -> Weiss-Karten; dunkel nur docket-foot, cta-band, footer.
6. Angebots-Seite = .dok (Body-Klasse): 760px-Spalte, Docket als Briefkopf, ol-Ablauf.

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
  Zeile". "HTML und CSS" ist KEIN Ersatz (fuer Handwerker/Praxen noch mehr Jargon):
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
| angebot.html | warme Angebots-Seite (WhatsApp-Versand) | .dok, Docket-Briefkopf, .compare, KI-FAQ nur hier |
| 404.html | Fehlerseite | root-absolute Pfade, Wegweiser auf die 3 Ad-LPs |

## Known Gaps

- Markenname/Domain offen (Rebrand): [MARKE]-Platzhalter, OG-URLs mit DOMAIN-SWAP,
  Footer-Rechtslinks zeigen auf marvin-web.pages.dev. Kein foot-mark bis Name steht.
- ERLEDIGT 2026-07-17 (Marvins Korrektur): Die Angebots-Seite wird nach dem ERSTKONTAKT
  verschickt, NICHT nach dem Gespraech. Das Gespraech ist Schritt 2 und steht noch aus.
  Copy entsprechend: "Danke fuer Ihre Nachricht", Ablauf-Schritt 1 = Erstkontakt [Erledigt],
  Schritt 2 = Gespraech, Briefkopf "Naechster Schritt: 30 Minuten Gespraech". Die erfundene
  Zeile "Gueltig 30 Tage" ist raus (bei Festpreisen vor dem Scoping ohnehin sinnlos).
  MERKE: Reihenfolge ist Erstkontakt -> Angebots-Seite -> Gespraech -> Freigabe -> Bau.
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
