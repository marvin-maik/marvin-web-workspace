# Barrierefreiheit-Checkliste (WCAG 2.1 AA)

Zielniveau fuer alle Projekte: **WCAG 2.1 AA** (das ist die BFSG-Anforderung ueber EN 301 549).
AAA (7:1-Kontrast, Leichte Sprache, Audiodeskription) ist NICHT Pflicht und wird nur auf
ausdruecklichen Wunsch angestrebt. "100% barrierefrei" ist realistisch nie dauerhaft erreichbar.

## Rechtlicher Rahmen (Stand 2026)
- BFSG seit 28.06.2025 in Kraft. Pflicht v.a. fuer B2C-E-Commerce und bestimmte Dienstleistungen.
- Shop-/Verkaufsseiten (digitale Produkte, Onlineshop) fallen klar drunter -> AA ist Pflicht.
- Reine Dienstleister-/Visitenkarten-Seiten oft nicht streng verpflichtet, aber AA = Verkaufsargument.
- Verbindliche Rechtstexte immer ueber Dieter/Anwalt. Ich bin kein Anwalt.

## Pruefen mit
- Rechnen statt schaetzen: Kontrast per Formel (getComputedStyle + WCAG-Ratio), nicht nach Augenmass.
- Browser-Pane: read_page (A11y-Baum), javascript_tool fuer Heading-Reihenfolge, Labels, doppelte IDs,
  Overflow bei 320px, aria-Zustaende.
- Extern (beim Kunden): Lighthouse, axe DevTools, WAVE.
- Agent `qa-polish` prueft das bei jedem Build mit.

## AA-Checkliste (POUR)

### Wahrnehmbar
- [ ] Informative `<img>` mit beschreibendem `alt` (kein "Bild von", kein Dateiname).
- [ ] Dekoratives Bild: `alt=""` ODER CSS-Hintergrund im `aria-hidden`-Container.
- [ ] Kontrast Fliesstext >= 4.5:1, grosser Text (>=24px oder >=18.66px bold) >= 3:1. REAL rechnen,
      auch kleine Mono-Labels/Preiszusaetze/Text ueber Fotos (dort dunkelsten Overlay-Punkt pruefen).
- [ ] Zoom 200% ohne Textverlust; Viewport-Meta ohne `user-scalable=no`/`maximum-scale`.
- [ ] Kein horizontaler Scroll bei 320px CSS-Breite (Reflow 1.4.10). `overflow-x:clip` verdeckt
      Ueberlauf nur -> Ursachen (feste min-width, inline max-width) beseitigen. Breite Tabellen
      duerfen im eigenen Container scrollen (overflow-x:auto + sichtbarer Indikator).
- [ ] Nicht-Text-Kontrast (Rahmen, Fokusring, aktive Zustaende) >= 3:1.

### Bedienbar
- [ ] Alles per Tastatur bedienbar, auch Custom-Widgets (Slider/Deck/Tabs/Burger). Native `<a>`/`<button>`
      bevorzugen; sonst `role`+`tabindex=0`+Key-Handler.
- [ ] Inaktive/ausgeblendete Slider-Karten mit `inert` aus Tab-Reihenfolge nehmen (nicht nur opacity:0).
- [ ] Fokus-Indikator sichtbar (`:focus-visible`, >=3:1), nie via `outline:none` entfernt.
- [ ] Fokus nicht dauerhaft von Sticky-Header verdeckt (WCAG 2.2 2.4.11): `html{scroll-padding-top:<Navhoehe>}`.
- [ ] Skip-Link zum `#main`.
- [ ] Keine Tastatur-Fallen (Overlays/Menu/Consent). Bei nutzerausgeloestem Overlay Fokus hineinsetzen.
- [ ] Auto-Aktualisierendes (Live-Uhr, Ticker) hinter `prefers-reduced-motion` gaten oder pausierbar (2.2.2).
- [ ] Kein Flackern > 3x/Sekunde.
- [ ] Eindeutige Linktexte (kein "hier klicken"), sonst `aria-label`.

### Verstaendlich
- [ ] `<html lang="de">`.
- [ ] Konsistente Navigation an gleicher Stelle je Seite.
- [ ] Formulare: sichtbares, verknuepftes `<label for>` je Feld; Pflichtfelder markiert (`*` + Legende
      oder `(optional)`-Konvention); Format-Hinweis per `aria-describedby` statt nur Placeholder.
- [ ] (AAA, optional) `<abbr title>` fuer DSGVO/MStV/SSL; Leichte-Sprache-Fassung.

### Robust
- [ ] Valides HTML: saubere Verschachtelung (Tag-Balance pruefen), keine doppelten `id` je Seite.
- [ ] Semantik: `<nav>/<main id="main">/<footer>`, genau EINE `<h1>`, Heading-Reihenfolge ohne Sprung
      (h1 -> h2 -> h3). Fehlt eine sichtbare Ebene: `<h2 class="sr-only">`.
- [ ] Datentabellen: `<th scope="col">` im thead, `<th scope="row">` als Zeilenkopf; reine Glyph-Zellen
      (Haken/Strich) mit `aria-hidden` + `<span class="sr-only">` Textalternative. tbody-th optisch wie td
      stylen (`.compare tbody th{font-weight:400}`), damit kein Uppercase/Fett.
- [ ] ARIA nur wo natives HTML nicht reicht: `aria-expanded` (Burger), `aria-current` (aktive Seite),
      `aria-pressed`/`aria-selected` (Single-Select-Filter, im Handler mittoggeln).
- [ ] Statusmeldungen via `aria-live`/`role="status"` (Formular-Hinweis, dynamische Updates).

## Utility-Klasse (immer vorhanden)
```css
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
```

## Screenreader-Fallen (Audit routenwerk 2026-07-13, echter SR-Testlauf)
Diese vier Fehler hat der automatische Check NICHT gefunden, erst der Screenreader-Test:
- [ ] **JS darf Button-/Linktext nie ersatzlos zerlegen.** Jeder Text-Effekt, der textContent
      in Einzel-Elemente splittet (Split-Flap, Typewriter, Scramble, Letter-Reveal), loescht den
      zugaenglichen Namen -> SR sagt nur "Link"/"Schalter". Pflicht-Muster: VOR dem Zerlegen
      `aria-label` mit dem Originaltext setzen, Kacheln in `<span aria-hidden="true"
      style="display:contents">` (display:contents haelt Flex/Grid-Layout intakt). Trifft
      ausgerechnet die Haupt-CTAs, weil die die Effekte bekommen. Code: technik-patterns.md.
- [ ] **Karussell/Deck: Wechsel ansagen.** Inaktive Karten sind (korrekt) inert/aria-hidden,
      aber dann bekommt AT vom Kartenwechsel nichts mit -> `aria-live="polite"`-Element
      ("Guide 2 von 3: Albanien..."), per JS beim Wechsel fuellen. Auch versteckte
      Zusatz-Karten (Easter Egg) brauchen `inert`, nicht nur aria-hidden/opacity.
- [ ] **Deko-Glyphen verstecken.** Pfeile/Dreiecke/Trenner als Text (&#9656;, ·, ->) liest
      der SR woertlich vor ("schwarzes Dreieck nach rechts") -> in
      `<span aria-hidden="true">` wickeln.
- [ ] **Echte Umlaute in aria-label.** "auswaehlen" wird "aus-wa-ehlen" ausgesprochen.
      ae/oe/ue-Schreibweise ist nur fuer Code-Kommentare ok, nie fuer vorgelesene Attribute.

## Kampferprobter Stand (routenwerk + marvin-web, Audit 2026-07)
Beide Seiten auf AA gebracht: Alt-Texte, Kontrast (Fliesstext 16-17:1, Buttons 6:1, Eyebrow ueber Foto
voll deckend), Reflow bis 320px, Tastatur inkl. inert auf Slider-Karten, Fokus sichtbar + scroll-padding,
Landmarks + eine h1 + Heading-Ordnung, Tabelle mit th/scope, aria-pressed auf Filtern, Uhr reduced-motion,
Honeypot barrierefrei (KEIN aria-hidden am fokussierbaren Feld; dass der SR "Bitte dieses Feld
frei lassen" vorliest, ist Absicht, kein Bug). Nachtrag 2026-07-13 (SR-Testlauf Marvin): Split-Flap-CTAs
ohne Namen, Deck-Wechsel ohne Ansage, Deko-Glyphen, ae-Umlaute in aria-label -> alles gefixt,
Muster oben unter "Screenreader-Fallen". Restlich offen: nur AAA (freiwillig) + bekannte Eigenheit:
.satz-Spans (inline-block gegen Satz-Umbruch) lassen VoiceOver die h1 in zwei Haeppchen lesen — akzeptiert.
