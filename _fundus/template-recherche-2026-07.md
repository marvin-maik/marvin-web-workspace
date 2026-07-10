# Template-Recherche Framer Marketplace (Juli 2026)

Via Chrome MCP live gesichtet, Kategorie Agency (framer.com/community/marketplace/templates/categories/agency/).

## Shortlist fuer MARVIN.WEB-Aesthetik (Werkstatt-Editorial)

| Template | Preis | Warum relevant | Link |
|---|---|---|---|
| **Porto (GREYO)** | Free | Staerkste Referenz. Vollbild-Wortmarke als Hero, Mono-Meta-Zeile (LOCAL/Uhrzeit + Kontakt-Pill), durchgezogene vertikale Rasterlinien ueber die GANZE Seite, Sektions-Marker "01 //APPROACH", Duotone-Bild in Signalfarbe | framer.com/community/marketplace/templates/porto/ · Demo: porto-template.framer.website |
| **Vertical** | $129 | Explizit "Editorial-Style Template", Wort ueber 3 Zeilen gebrochen (VER/TI/CAL), Neon-Akzent auf Dunkel | Marketplace Agency-Kategorie |
| **Spector** | $129 | Riesiges Display-Rot-Orange, Narrative Portfolio, Magazin-Look | Marketplace Agency-Kategorie |
| **Arpeggio** | $129 | Oversized Orange-Typo auf Bild, frech | Marketplace Agency-Kategorie |
| **Constantine** | $49 | Riesen-Wortmarke in Blau, heller Grund | Marketplace Agency-Kategorie |
| **Mattis** | $129 | Dunkel + Orange, Design/Development/Marketing-Slashes, Signatur-Element | Marketplace Agency-Kategorie |
| **Soren Vale** | ~$49 | Helles Serif-Editorial auf Papier (Gegenpol, Featured-Slot) | Marketplace Agency-Kategorie |

## Extrahierte Muster (auf marvin-web v3 anwendbar, Palette bleibt Papier+Orange)

1. **Vertikale Rasterlinien full-height** (Porto): Spalten-Guides als Hairlines durch alle
   Sektionen -> verstaerkt Datenblatt/Werkstatt-Charakter. Konsequenter als nur horizontale Lines.
2. **Mono-Meta-Zeile im Header** (Porto): "BERLIN / MO-FR 9-18" + Zeit o.ae. statt Announcement-Bar.
3. **Sektions-Marker-Zeile** (Porto): "01 //PAKETE" links, Zusatz rechts, Hairline dazwischen —
   deckt sich mit unserem tag+line, Nummern aber nur wo Sequenz.
4. **Duotone-Foto in Signalfarbe** (Porto): einziges Bild der Seite orange eingefaerbt statt
   Stock-Foto-Buffet. Fuer Marvin: 1 Portrait in Orange-Duotone im Ueber-mich.
5. **Wortmarke als Raumfueller** (Porto/Constantine): haben wir im Footer; Porto zeigt es als Hero.
6. **Logo-/Referenz-Wall in Karten-Slidern** (Porto): Platzhalter-tauglich fuer spaetere Referenzen.

## Porto: exakte Werte (per JS aus der Live-Demo extrahiert)

- **Fonts:** Clash Display (Display, kostenlos via Fontshare!) + Inter Display (Body)
- **Palette:** BG #161616, Karten #292929, Akzent #FF462E (Orange-Rot), Grau #808080
- **Der Wow-Mechanismus:** Type-Scale 12/13 → 18 → 24 → 34 → 48 → 88 → 120 → 276 → **397px**.
  Labels zu Wortmarke = 30x-Sprung. Wortmarke: Weight nur 600 (nicht 900!), line-height 0.8,
  letter-spacing -3px, uppercase, ~27vw breit (full-bleed).
- **Rasterlinien:** 3 schlichte 1px-Divs ueber die volle Dokumenthoehe (22.000px), Farbe knapp
  ueber BG. Kein Trick, nur Konsequenz.
- **Duotone-Bilder:** vorgefaerbte Assets, kein CSS-Filter. Fuer uns: CSS-Duotone
  (grayscale + mix-blend-mode overlay in --signal) oder Bild vorbearbeiten.
- Lizenz-Hinweis: Werte/Muster als Inspiration ok, Code/Design nicht klonen.

## Neue Quellen (von Marvin, Juli 2026)

- **getdesign.md**: 74 DESIGN.md-Briefings (Google-Spec) fuer AI-Coding-Agents — komplette
  Token-Systeme mit Begruendung. KOMPLETT LOKAL GEKLONT: `_referenz/awesome-design-md/design-md/`.
  Fuer MARVIN.WEB-Aesthetik relevant: **wired** (Paper-Editorial, Hairlines #e0e0e0, Serif-Display),
  **vodafone** (monumentale Uppercase + Kapitelbaender), **nike** (massive Uppercase, monochrom),
  **mastercard** (warmes Cream-Canvas). Workflow: DESIGN.md als Stil-Referenz ins Briefing geben.
- **A1 Gallery (AI-Kategorie)**: ~190 AI-Website-Designs. Achtung: Dark+Neon = Anti-Slop-verboten
  fuer MARVIN.WEB; als Pattern-Quelle fuer Tech-Kundenprojekte ok.
- **Figma Community AI Collection**: 100+ AI-Interfaces/Landingpage-Strukturen (Figma MCP nutzbar).
- **Lapa Ninja (AI-Tag)**: Landingpage-Galerie; blockt WebFetch, per Chrome MCP browsen.

## Learnings zur Recherche selbst
- Galerien (Framer/Webflow/Land-book) sind JS-gerendert -> WebFetch sieht nichts, Chrome MCP noetig.
- Framer-Demos liegen unter <slug>.framer.website, Link "Live Preview" auf der Template-Detailseite.
- Webflow-Kategorie-URLs aendern sich; ueber Suchlisten (victorflow, sitebuilderreport) einsteigen.
