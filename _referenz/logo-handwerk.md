# Logo-Handwerk (Referenz fuer logo-designer + /logo)

Destillat aus Community-Skills (rknall/svg-logo-designer, neonwatty/logo-designer-skill,
gesichtet 2026-07-13, in eigenen Worten) + eigenen Learnings. Anti-Slop gilt immer.

## Logo-Typen (pro Projekt bewusst waehlen, im Sheet mischen)

| Typ | Beispiel-Logik | Wann fuer unsere Kunden |
|---|---|---|
| Wortmarke | Name als gestaltete Type | Name kurz + einpraegsam, Budget klein |
| Monogramm/Lettermark | 1-3 Initialen | Name lang (Handwerksbetriebe!), Icon-Bedarf gross |
| Bildmarke | eigenstaendiges Zeichen | nur wenn Marke das Zeichen aufladen kann |
| Abstraktes Zeichen | geometrische Form | selten; braucht Wiederholung ueber viele Kontakte |
| Emblem/Roundel | Text/Zeichen im Ring | Siegel-Wirkung, Sticker, Zunft-Gefuehl |
| Kombi (Lockup) | Zeichen + Wortmarke | Standard-Empfehlung: deckt alles ab |

## Lockup-Pflichtprogramm

Jede finale Marke braucht mindestens: horizontales Lockup, Zeichen solo,
und eine Antwort auf "quadratischer Avatar" (Social/App). Gestapelt nur bei Bedarf.

## Reduktionsstufen (der 16px-Test entscheidet)

- Jedes Konzept bei 16/32/64px rastern (svg-zu-png) und ANSCHAUEN, nicht raten.
- Was bei 16px zerfaellt, bekommt eine definierte Reduktionsstufe: Details WEGLASSEN
  (Route weg, Ring weg, nur Kernzeichen), nie kleinquetschen.
- Die Stufen im Handoff dokumentieren ("unter 24px: Variante X verwenden").

## Technik-Pflichten

- Wortmarken IMMER als Pfade (text-zu-pfad.mjs), nie <text> mit font-family.
  Grund: Schrift-Fallback zerstoert Marke UND vermessene Schutzraeume (Vorfall 2026-07-13).
- Stempelbarkeit: max 2 Farben aus den Projekt-Tokens, keine Gradients/Schatten/Filter.
  Einfarbige Variante von Anfang an mitdenken.
- Optische Korrekturen: runde Formen 1-2% ueberhaengen lassen; optische Mitte liegt
  leicht ueber der geometrischen; Ausrichtung an optischen Kanten, nicht an Bounding-Boxen.
- Clear Space aus einem Element der Marke ableiten (Methodik: _templates/cd-handoff-prompt-vorlage.md).
- ViewBox knapp um die Marke (kein Luft-Padding in der Datei); ganze Zahlen/einfache Verhaeltnisse.

## Lieferpaket-Checkliste (nach dem Pick)

- [ ] logo.svg (Lockup, Pfade) + zeichen.svg (solo)
- [ ] logo-mono.svg (einfarbig Tinte) + invers-Variante geprueft
- [ ] favicon-16/32/180/512.png (svg-zu-png, mit Reduktionsstufe!)
- [ ] og-Grundflaeche 1200x630
- [ ] Schriftlizenz geklaert und im Handoff notiert (Print erlaubt?)
- [ ] Clear-Space-Einheit + Mindestgroessen dokumentiert (CD-Handoff)

## Anti-Slop fuer Logos

- Herleitung immer aus der Marken-Welt des Projekts, nie aus Branchen-Klischee-Tabellen
  ("Blau = Vertrauen" ist verboten als Begruendung).
- Branchen-Klischees VOR dem Entwerfen auflisten, dann meiden oder bewusst brechen.
- Keine Emojis, keine Standard-KI-Aesthetik (Gradient-Hexagon, Swoosh, abstrakter Vogel).
