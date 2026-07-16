# Vorlage: _design.md (As-Built-Designakte pro Projekt)

Diese Vorlage nach `projekte/<name>/_design.md` kopieren und ausfuellen.
Format angelehnt an den DESIGN.md-Standard (Google Stitch / VoltAgent-Sammlung in
`_referenz/awesome-design-md/`), reduziert auf das, was fuer statische Single-File-Sites
mit Vanilla-CSS-Tokens gebraucht wird.

REGELN (nicht verhandelbar):
- `styles.css` ist die Quelle der Wahrheit. Diese Datei DOKUMENTIERT, sie definiert nicht.
  Jeder Hex-Wert, jede px-Angabe, jeder Font-Name hier muss wortgleich im Code vorkommen.
- Kompakt halten: Ziel unter 250 Zeilen. Das Ding wird bei jeder Design-Arbeit in den
  Kontext gelesen; Prosa-Romane verfehlen den Zweck.
- Komponenten nur als ECHTE Selektoren aus der Site-CSS auffuehren, nie erfundene
  (siehe CD-Guideline-Regel). Keine Komponente ohne Fundstelle.
- Bei jeder Design-Aenderung am Projekt: _design.md im SELBEN Commit mitziehen.

---

```markdown
---
projekt: <name>
stand: JJJJ-MM-TT
quellen: styles.css, index.html, ggf. design-dossier.md (gewaehlte Richtung X)
live: <URL oder "noch nicht live">
description: "3-5 Saetze Design-DNA: Grundflaeche + Tinte, die EINE Signalfarbe und ihre
  Rolle, Typo-Charakter (Fonts + was den Kontrast erzeugt), das Signature-Element,
  und ein Satz, was die Site bewusst NICHT ist."

colors:
  # 1:1 die Custom Properties aus :root. Pro Farbe: Rolle UND Verbot als Kommentar.
  # (Community-Erkenntnis: nackte Token-Dumps ergeben richtige Farben, aber falsche
  # Entscheidungen. Das Verbot ist der wertvollere Teil.)
  ink: "#16130E"      # --ink, Text + Headlines. Nie als Flaeche.
  bg: "#FAF9F5"       # --bg, Seitengrund
  signal: "#C2331F"   # --signal, CTAs, Links, Marker. NUR dort, nie als Hintergrund.
  muted: "#6F6A60"    # --muted, Meta, Captions. Nie fuer Fliesstext.
  line: "#E2DFD7"     # --line, Hairlines, Borders
  # Kontrastpaare (WCAG AA, gerechnet, nicht geschaetzt):
  # ink/bg = X.X:1, #fff/signal = X.X:1

typography:
  display:
    fontFamily: <Name>            # Datei in fonts/, Gewichte nennen
    weights: 700, 800
    letterSpacing: -0.02em
    lineHeight: 0.95
  body:
    fontFamily: <Name>
    size: 17px
    lineHeight: 1.6
  mono:                            # falls vorhanden
    fontFamily: <Name>
    size: 12px
    letterSpacing: 0.08em
    use: Meta-Zeilen, Labels, uppercase
  scale: "12 -> 17 -> 22 -> 32 -> 48 -> clamp(64px, 9vw, 104px)"

spacing:
  base: 4px oder 8px
  section: <Wert>                  # vertikaler Sektionsabstand
  card: <Wert>                     # Karten-Innenabstand

rounded:
  <nur die tatsaechlich genutzten Stufen, z.B. buttons: 8px, cards: 12px>

breakpoints:
  <die realen @media-Schwellen der Site, z.B. 1024px, 768px, 480px>
---

## Signature-Element

Das EINE Element, das die Site traegt (Anti-Slop-Regel: eins pro Seite). Wie es
konstruiert ist (Selektor, Aufbau) und wo es ueberall auftaucht.

## Komponenten (echte Selektoren aus styles.css)

| Selektor | Bauteil | Konstruktion (Kurzform) |
|---|---|---|
| `.btn` | Primaer-CTA | bg --signal, Text #fff, radius 8px, padding 12px 24px |
| `.karte` | ... | ... |

Nur Bauteile mit Fundstelle. Hover-/Fokus-Besonderheiten als Zeile darunter, wenn
sie vom Standard abweichen.

## Motion

Erlaubte Transitions als geschlossene Liste (Property, Dauer, Easing), z.B.
"nur opacity/transform, 150-300ms, ease-out". Alles andere ist verboten.
Reduced-Motion-Verhalten in einem Satz.

## Konstruktions-Muster

Die 3-6 wiederkehrenden Layout-Regeln der Site, nummeriert. Beispiele: Sektions-Marker-
Zeile vor jeder Sektion, Fotos nie ohne Caption-Leiste, Breitenwechsel 2x pro Seite,
CTA-Band vor jedem Footer. Das ist der Takt, den neue Sektionen einhalten muessen.

## Do / Don't (projektspezifisch)

Nur was DIESES Projekt betrifft, nicht die globalen Anti-Slop-Regeln wiederholen.
- Do: Signal-Rot nur auf CTA, Marker und Links.
- Don't: kein zweiter Akzent, keine Uppercase im Body, ...

## Abgrenzung / Verworfen

Warum die Site so aussieht und nicht anders: gewaehlte Dossier-Richtung, verworfene
Alternativen in je einem Satz, Wettbewerber-Farben, von denen Abstand gehalten wird
(mit Hex). Verhindert, dass ein spaeterer Redesign-Vorschlag Verworfenes wieder anschleppt.

## Seiten-Inventar

| Datei | Zweck | Besonderheit |
|---|---|---|
| index.html | Start | Full-bleed-Hero, Funnel-Etappen |
| ... | ... | ... |

## Known Gaps

Was (noch) nicht definiert ist: fehlende States, offene Entscheidungen, Platzhalter.
Ehrlich fuehren, sonst wird geraten.
```
