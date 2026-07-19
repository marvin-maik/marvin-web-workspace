---
projekt: marvin-web
stand: 2026-07-16
quellen: styles.css, index.html, product-marketing-context.md (Token-Abschnitt, Richtung "Werkstatt-Editorial")
live: https://marvinwebdesign.de (Fallback: https://marvin-web.pages.dev)
description: "Werkstatt-Editorial: warmes Werkstatt-Papier (#f5f1e8) als Grund, warme
  fast-schwarze Tinte (#161412), EIN Signal-Orange (#e8440a) als GO-Farbe fuer Marker
  und grosse Typo, als Lesetext immer die dunkle Stufe #b53507. Typo-Kontrast aus Clash
  Display (600/700, eng, uppercase-Headlines) gegen System-Sans-Body und Mono-Labels
  mit //-Prefix. Signature ist die Massband-Linie .rule. Alles eckig, harte Offset-
  Schatten, Hairline-Raster. Die Site ist bewusst KEINE weiche Agentur-Site: kein
  SaaS-Blau, keine Radien, keine Glas-Effekte, Betrieb statt Agentur."

colors:
  # 1:1 die Custom Properties aus :root von styles.css. Rolle UND Verbot je Zeile.
  ink: "#161412"          # --ink, Text, Headlines, dunkle Sektionen/Footer als Flaeche
  ink-soft: "#4a463f"     # --ink-soft, Fliesstext-Absaetze, Nav-Links (8.32:1 auf paper)
  paper: "#f5f1e8"        # --paper, Seitengrund. Auch Text auf ink-Flaechen.
  paper-deep: "#ece7da"   # --paper-deep, Offset-Schatten, thead, Garantie-Band-Grund
  line: "#d8d2c2"         # --line, Borders, Hairlines, dashed Trenner
  hair: "#ded8c8"         # --hair, nur die vertikalen Spalten-Guides (.guides)
  signal: "#e8440a"       # --signal, VERBOT ALS TEXT: nur 3.54:1 auf paper. Erlaubt
                          #   NUR fuer grosse Typo (h1 em, .foot-mark b, .step .big),
                          #   Grafik/Flaechen (.rule, Logo-b, Selection, Outlines, Dots)
                          #   und fette Deko-Glyphen (Haken). NIE fuer Lesetext.
  signal-deep: "#b53507"  # --signal-deep, DIE Text-Stufe des Orange (5.36:1 auf paper):
                          #   Links-Hover, .tag::before, Labels, Haken, btn-primary-Grund
  signal-press: "#8F2A05" # --signal-press, nur :hover von btn-primary und wa-float
  signal-tint: "#FF9B78"  # --signal-tint, Orange-Ersatz AUF DUNKEL (8.93:1 auf ink):
                          #   meta-row b, docket-foot b, featured-Preise. Nie auf hell.
  muted: "#6d675a"        # --muted, Meta, Captions, aux (4.98:1). Nie fuer Fliesstext.
  white: "#FFFFFF"        # --white, Kartengrund (docket, pkg, case, compare), CTA-Text
  dark-line: "#3A362F"    # --dark-line, Borders/Trenner auf ink-Flaechen
  dark-body: "#CFC9BA"    # --dark-body, Listen-Text auf dunkel (11.13:1)
  dark-soft: "#B7B1A2"    # --dark-soft, Ledes/Absaetze auf dunkel
  dark-muted: "#8A8476"   # --dark-muted, Meta auf dunkel (foot-row, alt-Zeilen)
  dark-for: "#A9A294"     # --dark-for, nur .pkg.featured .for
  # Kontrastpaare (WCAG, gerechnet): ink/paper 16.3:1, ink-soft/paper 8.32:1,
  # muted/paper 4.98:1, signal-deep/paper 5.36:1, white/signal-deep 6.04:1,
  # signal-tint/ink 8.93:1, dark-body/ink 11.13:1. signal/paper NUR 3.54:1.

typography:
  display:
    fontFamily: Clash Display        # fonts/clash-display-600.woff2 + -700.woff2,
    weights: 600, 700                # selbst gehostet (Fontshare-Lizenz), preload im head
    letterSpacing: -0.02em           # h1/h2/h3 Basis; Hero/Head -0.012em + word-spacing .16em
    lineHeight: 1.0                  # Hero .92, page-head .95, foot-mark/price-huge .85
    fallback: -apple-system,BlinkMacSystemFont,sans-serif   # --disp
  body:
    fontFamily: system-ui-Stack      # --body: -apple-system,...,Roboto,Helvetica,Arial
    size: 17px
    lineHeight: 1.55
  mono:
    fontFamily: ui-monospace-Stack   # --mono: 'SF Mono',SFMono-Regular,Menlo,Consolas
    size: 12px bis 13.5px
    letterSpacing: .04em bis .16em
    use: Labels (.tag mit //-Prefix), Meta-Zeilen, Nav-Links, Preise-small, uppercase
  scale: "12 -> 12.5 -> 13 -> 14.5 -> 15.5 -> 17 (Body) -> 19 -> 23 -> 28 ->
    clamp(36px,5.2vw,68px) (.h-lg) -> clamp(37px,7.5vw,92px) (page-head h1) ->
    clamp(44px,10.5vw,150px) (hero h1) -> clamp(96px,13vw,190px) (.price-huge)"

spacing:
  base: kein striktes Raster, wiederkehrend 4/8er-Naehe
  section: 100px 0 (.sec, .dark-sec), 72px 0 (.cta-band), Hero 80px 0 96px
  card: .pkg 40px 32px, .fact 30px 26px, .form-card/.book-card 36px
  wrap: 1200px (--wrap), Seitenpadding 28px

rounded:
  keine. Alles eckig, 0px ueberall. Einzige Ausnahme: 50%-Punkte (.shot-dots i,
  .live-cue b). Radien einzubauen ist ein Stilbruch.

breakpoints:
  960px (hero-grid, facts), 900px (Nav-Burger, pkg, steps, leistung), 860px (guides,
  contact), 820px (pain, values, abo, about, case-body), 700px (sec-head, live-stage),
  560px (steps, facts einspaltig), 520px (wa-float kompakt)
---

## Signature-Element

Die Massband-Linie `.rule`: 10px hohe hr-Flaeche aus zwei Layern, oben
`repeating-linear-gradient(90deg, var(--signal) 0 2px, transparent 2px 24px)` als
Teilstriche (8px hoch), unten eine 2px durchgehende signal-Basislinie. Steht direkt
unter jeder h1 (Hero max-width 640px, page-head 520px) und zeichnet sich beim Laden
per `drawRule` (clip-path, .9s, cubic-bezier(.77,0,.18,1)) von links auf. Nie als
generischer Trenner streuen, sie gehoert zur Headline.

## Komponenten (echte Selektoren aus styles.css)

| Selektor | Bauteil | Konstruktion (Kurzform) |
|---|---|---|
| `.rule` | Massband-Linie | siehe Signature, height 10px, Farbe --signal |
| `.tag` | Sektions-Label | Mono 12.5px, ls .16em, uppercase, `::before "// "` in --signal-deep |
| `.sec-head` | Sektions-Kopf | .tag + fuellende .line (1px --line) + .aux rechts (Mono, --muted) |
| `.btn-primary` | Primaer-CTA | Grund --signal-deep, Text --white, 2px Border, eckig, 16px 30px |
| `.btn-ghost` | Sekundaer-CTA | paper-Grund, ink-Border; auf dunkel transparent + paper-Border |
| `.trust-row` | Beleg-Zeile unter CTAs | Mono 12.5px, Haken `::before` in --signal-deep |
| `.meta-row` | Topbar | ink-Grund, Mono, b in --signal-tint |
| `.logo` | Wortmarke (Logo) | `img/logo.svg` im `<a>`, `.logo img{height:22px;width:auto}`; Tinte-Buchstaben + Orange-Quadrat-Punkt. Alte Text-Regel bleibt als Fallback |
| `.docket` | Auftragszettel (Hero) | white, 1.5px ink-Border, Schatten 8px 8px 0 --paper-deep, dashed Zeilen, ink-Fuss |
| `.pkg-grid` / `.pkg.featured` | Preiskarten | 3er-Grid in einem ink-Rahmen, featured invertiert (ink-Grund, dark-*-Serie) |
| `.stack` / `.stack-total` | Offer-Stack | white Rahmenkarte, dashed Zeilen, Total-Zeile invertiert, Wert in --signal-tint |
| `.guarantee-band` | Garantie | paper-deep-Grund, ink-Border, Mono-Icon in --signal-deep |
| `.compare` | Vergleichstabelle | white, ink-Rahmen, thead paper-deep; in `.table-scroll` wickeln |
| `.dark-sec` / `.cta-band` | dunkle Baender | ink-Grund, Text dark-soft/dark-body, 100px bzw. 72px Padding |
| `.steps` / `.step .big` | Ablauf 01-04 | Riesenziffer Clash 600, transparent + 1.5px text-stroke --signal, fuellt sich bei .rv.in |
| `.values` / `.value` | Werte-Spalten | Hairline-Grid ohne Gap, num in --signal-deep, subgrid-Zeilen |
| `.facts` / `.fact` | Eckdaten-Kacheln | 1.5px ink-Fugen (Grid-Gap auf ink-Grund), Reveal per Tinte-Cover `::after` |
| `.pains` / `.pain` | Problem-Liste | Zeilen-Grid 56px/1fr/1.2fr, x-Marker Mono --signal-deep |
| `.case` / `.artefakt` | Case-Karten | white, ink-Rahmen, Artefakt-K-Label --signal-deep |
| `.duo` / `.pull` | Ueber-mich | Bildrahmen ink-Border; Pull-Quote Clash clamp(28..48), em in --signal-deep |
| `.shot-window` / `.live-stage` | Live-Browserfenster | ink-Rahmen + Offset-Schatten, Geraete-Buttons aria-pressed, .live-cue Hinweis-Pille |
| `.blick-dialog` | Designfiles-Popup | nativer dialog, ink-Border, backdrop rgba(22,20,18,.75) |
| `.form-card` / `.book-card` | Kontakt-Duo | Formular auf paper-Karte, Buchung als dark-line-Rahmen im dunklen Band |
| `.hp-feld` | Honeypot | off-screen, Pflicht in jedem Formular (plus Zeit-Falle in site.js) |
| `details` / `summary` | FAQ | Hairline-Liste, Plus-Zeichen Mono --signal, dreht bei open 45deg |
| `.foot-mark` | Footer-Marke (Logo invers) | `img/logo-invers.svg`, `.foot-mark img{width:min(660px,88%)}`; Papier-Buchstaben + Orange-Quadrat auf Tinte (früher Riesen-Text) |
| `.wa-float` | WhatsApp-Button | fixed rechts unten, --signal-deep, einzige weiche Schatten der Site |
| `.guides` | Spalten-Guides | 3 vertikale 1px Hairlines (--hair, opacity .5) hinter dem Content |

Hover-Standard der Karten: `translate(-3px,-3px)` + groesserer Offset-Schatten.
Buttons: `translate(-2px,-2px)` + `4px 4px 0` Schatten (ink bzw. signal).

## Motion

Geschlossene Liste, alles andere ist verboten:
- Transitions nur background/color/transform/box-shadow/border-color, 150 bis 250ms, ease.
- Scroll-Reveal `.rv/.in`: opacity + translateY(16px), .55s, cubic-bezier(.22,1,.36,1).
- `drawRule` .9s auf Hero/Page-Head-.rule, `faqIn` .3s, Step-Ziffern-Fuellung .7s.
- `.fact`-Reveal: Tinte-Cover faellt nach unten (.95s), KEIN Opacity-Fade (schwarzer
  Durchschein-Bug, siehe CSS-Kommentar). `cuePuls` 1.6s infinite nur auf .live-cue b.
- prefers-reduced-motion: globales `transition:none/animation:none`, .rv sofort sichtbar.

## Konstruktions-Muster

1. Jede Sektion beginnt mit `.sec-head`: Mono-Tag mit //-Prefix, fuellende Hairline,
   optional .aux rechts. Danach `.h-lg`-Headline, dann `.lede` (max 600px).
2. Hell-Dunkel-Takt: Papier-Sektionen mit 1px --line getrennt, dazwischen ink-Baender
   (.dark-sec/.cta-band). Jede Unterseite endet mit .cta-band vor dem Footer.
3. Karten sind Papier auf Papier: white Grund, 1.5px ink-Border, harter Offset-Schatten
   in --paper-deep. Nie weiche Schatten, nie Radien (Ausnahme wa-float-Schatten).
4. Grids ohne Gap mit Hairline-Fugen (.values, .steps, .facts, .pkg-grid); subgrid
   haelt num/h3/p spaltenuebergreifend auf gleicher Hoehe.
5. Kein CTA ohne Beleg: unter jeder .hero-ctas/.case-ctas steht eine .trust-row.
6. h1 immer uppercase Clash 700 mit genau EINEM `em` in Orange; Saetze in `.satz`-Spans
   fuer sauberes Umbrechen.

## Do / Don't (projektspezifisch)

- Do: Oranger TEXT ist IMMER --signal-deep #b53507. #e8440a nur fuer grosse Typo,
  Grafik/Flaechen und fette Deko-Glyphen (steht so auch als Verbot bei colors).
- Do: Auf dunklem Grund die dark-*-Serie und --signal-tint verwenden, nie --muted,
  --ink-soft oder --signal-deep auf --ink.
- Do: uppercase nur fuer Mono-Labels und Display-Headlines, nie im Body.
- Do: `.h-lg` deckelt bei `max-width:820px` (gute Zeilenlaenge fuer laengere Headlines). Kurze
  Headlines, die dadurch grundlos umbrechen, bekommen den Modifier `.h-wide` (`max-width:none`,
  bleibt am Container-Cap 1200px). Bsp: index FAQ „Alles, was du wissen willst." (Desktop 1 Zeile,
  Mobil bricht weiterhin natuerlich um). Nicht auf lange Headlines anwenden.
- Don't: kein border-radius, keine Gradients (ausser den Linien-Tricks von .rule und
  Link-Underline), kein zweiter Akzent, kein reines Schwarz als Flaeche (--ink ist warm).
- Don't: Formulare nie ohne .hp-feld + Zeit-Falle; Fokus immer 3px --signal Outline.

## Abgrenzung / Verworfen

- Gewaehlte Richtung: "Werkstatt-Editorial" (product-marketing-context.md, Token-Stand
  v2 freigegeben). Zag: Betrieb statt Agentur, Auftragszettel-Sprache statt Portfolio.
- Bewusst verworfen: SaaS-Blau als Akzent (Begruendung im Kontext-Dokument: Orange =
  Tempo/Aktion), weiche Agentur-Looks, Baukasten-Aesthetik, Default-AI-Looks
  (Creme+Serif+Terracotta, Dark+Neon, Lila-Gradient+Glassmorphism).
- Name final: **MARVIN.WEB bleibt** (Rebrand 2026-07-19 von Marvin beendet, naming-report.md
  in _rebrand/ ist Archiv). **Gezeichnetes Logo eingebaut** (2026-07-19, Deploy ff45f0b5, ersetzt die
  Text-Wortmarke): Richtung **A** (Wortmarke „Signal-Quadrat", der Punkt = eckiges Orange-Quadrat)
  als `img/logo.svg` (Header) + `img/logo-invers.svg` (Footer, Papier-Buchstaben auf Tinte); Signet
  **C** (M.-Kachel) als `img/zeichen.svg` (SVG-Favicon) + PNG-Serie 16/32/180/512. Mono- und
  Lockup-Varianten liegen in `img/` bereit (nicht Default). Alles echte Pfade (kein `<text>`), Clash-
  Outlines lizenzkonform (Fontshare FFL). Konzepte: freigabe/logo-konzepte.html; Build re-runbar: `_logo/`.

## Seiten-Inventar

| Datei | Zweck | Besonderheit |
|---|---|---|
| index.html | Start | Hero + Docket, Pakete-Teaser, dark-sec Kontakt, FAQ mit JSON-LD (FAQPage + ProfessionalService) |
| pakete.html | Preise | pkg-Grid mit featured, Offer-Stack, compare-Tabelle, dark-sec Abo mit .price-huge |
| projekte.html | Prozess statt Portfolio | Case 001 (diese Site) + Case 002 Routenwerk, .case/.artefakt |
| projekt-routenwerk.html | Case-Study Demo | .shot-window mit Live-iframe + Geraete-Umschalter, .facts, .blick-dialog |
| ueber-mich.html | Person | about-grid mit .duo-Bild und .pull |
| kontakt.html | Analyse-Anfrage | dark-sec mit form-card (Formspree) + book-card (Cal.com), Botschutz |
| danke.html | Formular-Ziel | noindex |
| impressum.html / datenschutz.html | Recht | schlicht, page-head |
| 404.html | Fehlerseite | root-absolute Pfade (CF-Pages-Pflicht), drei Wege weiter |

## Known Gaps

- product-marketing-context.md nennt alte Token-Werte (--muted #7a7466, --hair #c9c2af);
  styles.css ist die Wahrheit (#6d675a, #ded8c8). Kontext-Doku nicht nachgezogen.
- Domain-Swap erledigt (2026-07-19, Deploy 1e4bdc50): canonical (extensionslos) je Seite,
  eigene robots.txt + sitemap.xml, alle absoluten URLs auf marvinwebdesign.de. DOMAIN-SWAP-
  Kommentare aus dem head entfernt.
- .ref-slot ist ein sichtbarer Platzhalter, bis echte Kundenreferenzen existieren.
- Kein design-dossier.md im Projektordner; Richtungs-Herkunft nur ueber den
  Token-Abschnitt im Kontext-Dokument belegt.
