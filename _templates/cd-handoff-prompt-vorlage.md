# Corporate-Design-Handoff-Generator (allgemeine Prompt-Vorlage)

Zweck: nach Fertigstellung einer Website automatisiert ein Corporate-Design-
Handoff-Dokument ("Brand Guidelines") für den Kunden erzeugen.
Projektunabhängig, kann als Baustein/Input an einen weiteren Agenten
(z.B. Dokument-Layout-Agent) weitergegeben werden.

Hinweis zum Namen: Richtung Kunde immer "Corporate-Design-Handoff" oder
"Brand Guidelines" nennen, nicht "CI/CD" (wird im Tech-Kontext als
Continuous Integration/Deployment gelesen).

Abgrenzung: Der technische Qualitäts-Report (SEO, DSGVO, Barrierefreiheit,
Performance) ist bewusst NICHT Teil dieses Dokuments. Das ist ein separates
Deliverable mit eigenem Lebenszyklus (Momentaufnahme zum Launch), die
Brand Guidelines sind eine zeitlose Referenz. Beides zusammen als
Launch-Paket übergeben.

## Wie einsetzen

1. Pflicht-Inputs bereitstellen (Checkliste unten)
2. Prompt unten mit KI ausführen (Claude, Langdock-Agent, etc.)
3. Rohtext-Output an nachgelagerten Agenten übergeben, der daraus das
   finale Dokument (PDF/Word/Figma) layoutet
4. Alle als OFFEN markierten Punkte selbst prüfen und füllen, BEVOR das
   Dokument zum Kunden geht

### Pflicht-Inputs (Checkliste)

- [ ] HTML/CSS-Dateien der fertigen Website (oder Live-URL)
- [ ] Logo als Originaldatei (SVG bevorzugt), alle vorhandenen Varianten
- [ ] Screenshots der Custom-Elemente (Icons, Illustrationen, Grafiken)
- [ ] Schriftquellen + Lizenzinfo (Google Fonts? Gekaufte Lizenz?
      Web-only oder auch Print?)
- [ ] Preset-Wahl: KOMPAKT oder PREMIUM (siehe Teil D im Prompt)

Ohne Logo-Originaldatei kann der Clear Space nur näherungsweise hergeleitet
werden. Ohne Lizenzinfo bleibt das Kapitel "Assets & Lizenzen" offen.

---

## PROMPT

```
Du bist ein Design-Systemanalyst. Ich gebe dir den Code (HTML/CSS) und/oder
Screenshots einer fertiggestellten Website. Erzeuge daraus ein
Corporate-Design-Handoff-Dokument für den Kunden [KUNDENNAME],
Branche: [BRANCHE]. Gewähltes Preset: [KOMPAKT / PREMIUM]

Der Prompt hat vier Teile. Teil A und B sind Arbeitsanweisungen für dich
und erscheinen NIEMALS im Output. Teil C ist deine Analyse-Checkliste.
Teil D definiert das einzige Ausgabeformat.

=== TEIL A: GLOBALE REGELN (Anweisung, kein Output) ===

1. Erfinde keine Werte. Wenn eine Information aus dem Material nicht
   ableitbar ist (z.B. Print-Mindestgröße in mm, Lizenzumfang einer
   Schrift, fehlende Logo-Varianten), schreibe an der Stelle
   "OFFEN: [was fehlt]" und sammle den Punkt zusätzlich am Ende unter
   "Offene Punkte". Rate niemals.
2. Dokumentiere nur wiederkehrende, offensichtlich beabsichtigte Werte.
   Einmalige Ausreißer (z.B. ein padding-Wert, der nur an einer Stelle
   vorkommt) sind keine Design-Regel. Liste sie am Ende separat unter
   "Gefundene Inkonsistenzen".
3. Kontrastprüfungen (WCAG AA): Jedes Fail als konkrete Handlungsempfehlung
   ausweisen (z.B. "Kombination Ozean-Blau auf Hellgrau besteht AA nicht,
   nur für großen Text ab 24px verwenden"), nie als reine Tabellenzeile
   ohne Konsequenz.
4. Schreibe auf Deutsch, professionell, für einen Kunden ohne
   Design-Hintergrund verständlich. Tabellen für Werte (Farben, Spacing,
   Typografie), kurze Fließtexte für Kontext.

=== TEIL B: CLEAR-SPACE-METHODIK (Anweisung, kein Output) ===

Clear Space (Schutzraum um das Logo) wird NIE als fester Pixelwert
angegeben, sondern immer als Verhältnis zu einem Element aus dem Logo
selbst. Ein fixer Wert (z.B. 20px) sieht bei einem großen Logo passend
aus, nimmt aber bei einem kleinen Favicon fast die ganze Fläche ein.
Die Einheit muss mitskalieren.

Einheit ("X") bestimmen, zwei Methoden:

1. Element aus dem Logo selbst: Ein Bestandteil der Bildmarke/des Icons
   wird zur Maßeinheit "X" (z.B. Breite eines Icon-Segments). Bekannte
   Beispiele: Google nutzt die Höhe des "G", PayPal die Höhe des "P".
2. Bruchteil der Gesamthöhe: Wenn kein eindeutiges Einzelelement
   vorhanden ist, die halbe Logohöhe (0,5x) oder ein Viertel der Höhe
   als Einheit nehmen.

Faustregel: Bei Logomarks (Icon + Wortmarke) ein Maß aus der Bildmarke
selbst nehmen, nicht aus der Schrift, da die Bildmarke die verlässlichste,
immer vorhandene Referenzgröße ist.

Technische Konstruktion (Ghost-Copy-Methode):

1. Logo auswählen, Bounding Box prüfen
2. Einheit "X" festlegen
3. Ein Rechteck zeichnen, das die Bounding Box auf allen vier Seiten um
   genau "X" erweitert
4. Fläche ohne Füllung, nur dünner Konstruktionsstrich (0,25-0,5pt)
5. Diese Fläche ist die Clear-Space-Zone, dort darf nichts anderes rein

Zusätzlich immer beachten:

- Minimum Size getrennt für Print (mm) und Digital (px). Der Digital-Wert
  ist aus dem Code/Screenshot ableitbar, der Print-Wert in der Regel
  NICHT: dann als OFFEN markieren (siehe Teil A, Regel 1)
- Nur EINE "X"-Einheit konsequent verwenden, nicht je nach Kontext wechseln
- Ganze Zahlen/einfache Verhältnisse (1x, 1,5x), keine krummen Werte

=== TEIL C: ANALYSE-UMFANG (Checkliste, keine Output-Gliederung) ===

Analysiere systematisch die folgenden Themen. Die Gliederung des Outputs
steht ausschließlich in Teil D.

1. Logo & Markenzeichen
   - Alle gefundenen Logo-Varianten beschreiben
   - Clear Space nach der Methodik aus Teil B herleiten
   - Mindestgröße Digital (px) ermitteln, Print (mm) nur wenn ableitbar
   - Falls nur ein Logo vorhanden: fehlende Varianten als Empfehlung listen

2. Farbpalette
   - ALLE genutzten Farben aus dem CSS extrahieren (HEX-Werte)
   - Gruppieren in: Primärfarbe(n), Sekundärfarbe(n), Neutrale/Graustufen
   - Kontrastwerte der Text/Hintergrund-Kombinationen prüfen (WCAG AA,
     Regel 3 aus Teil A anwenden)
   - Jeder Farbe einen sprechenden Namen geben (z.B. "Ozean-Blau #1E5F8C")

3. Typografie
   - Genutzte Schriftfamilien identifizieren (font-family)
   - Alle genutzten Schriftgrößen mit Verwendungszweck (H1, H2, Body, Caption)
   - Zeilenhöhe und Schriftschnitte dokumentieren

4. Spacing-System
   - Wiederkehrende Abstandswerte (padding/margin) extrahieren
   - Zugrundeliegendes Raster erkennen (z.B. 8px-System)
   - Standard-Abstände zwischen Sektionen dokumentieren
   - Ausreißer nach Regel 2 aus Teil A behandeln

5. UI-Elemente & Custom Assets
   - Alle Custom-Elemente listen (Icons, Illustrationen, Grafiken)
   - Für jedes Element: Verwendungszweck, Farbvarianten, Mindestgröße
   - Buttons: alle States (Default, Hover, Active) mit exakten Werten
   - Border-Radius-Werte für Buttons/Cards/Bilder

6. Bildsprache
   - Stil der genutzten Bilder beschreiben (Verhältnis, Bearbeitung, Look)
   - Falls Custom-Illustrationen: Stilmerkmale benennen (z.B. "Flat Design,
     zwei Farbtöne, abgerundete Formen")

7. Copy/Tonalität
   - Website-Text analysieren: Du/Sie-Ansprache
   - Tonalität einordnen (seriös/verspielt/direkt)
   - Wiederkehrende Begriffe/Formulierungen identifizieren
   - CTA-Sprachmuster dokumentieren

8. Assets & Lizenzen
   - Welche Dateien der Kunde erhält (Logo als SVG/PNG, welche Varianten,
     Icons, Illustrationen)
   - Schriftquellen und Lizenzumfang (Web, Print, Social Media). Wenn
     keine Lizenzinfo mitgeliefert wurde: als OFFEN markieren, NICHT raten.
     Das ist die Frage, die Kunden später am häufigsten stellen.

9. Nutzungsregeln (Do's & Don'ts)
   - 5-8 konkrete Regeln, basierend auf dem, was du gesehen hast
     (z.B. "Logo nie auf Hintergrundfarben unter 40% Kontrast platzieren")

=== TEIL D: AUSGABEFORMAT (das einzige Output-Format) ===

Gib den kompletten Inhalt AUSSCHLIESSLICH als Seitenstruktur aus, jede
Seite mit vollständigem Inhalt. Keine separate Zusammenfassung davor oder
danach. Jede Seite mit Präfix "SEITE X:", damit der nachgelagerte
Layout-Agent die Struktur eindeutig übernehmen kann.

Kennzeichnung [LAYOUT-AGENT]: Seiten, deren Inhalt der Layout-Agent
gestalten oder als Mockup erzeugen muss, markierst du mit [LAYOUT-AGENT].
Auf diesen Seiten beschreibst du nur, WAS gezeigt werden soll. Erfinde
keine Anwendungen, die nicht existieren.

--- PRESET KOMPAKT (Standard, 8 Seiten) ---

SEITE 1: Cover (Markenname, "Brand Guidelines")
SEITE 2: Logo (Vollversion + vorhandene Varianten)
SEITE 3: Logo Clear Space + Mindestgröße
SEITE 4: Farbpalette (Primär, Sekundär, Neutral, inkl. Kontrast-Empfehlungen)
SEITE 5: Typografie (Schriften, Größen, Anwendung)
SEITE 6: UI-Elemente & Bildsprache (Buttons, Icons, Spacing-Raster, Bildstil)
SEITE 7: Sprache & Tonalität + Do's & Don'ts
SEITE 8: Assets & Lizenzen + Kontakt

--- PRESET PREMIUM (23 Seiten) ---

SEITE 1: Cover (Markenname, "Brand Guidelines")
SEITE 2: Welcome/Intro (kurzer Markentext, 2-3 Sätze)
SEITE 3: Inhaltsverzeichnis
SEITE 4: Sektionsteiler "01 Logo" (Vollfarbfläche)
SEITE 5: Logo, Vollversion
SEITE 6: Logo, Clear Space / Schutzraum
SEITE 7: Logo, Varianten (Farbversionen auf verschiedenen Hintergründen)
SEITE 8: Logo, Größe & Scale / Mindestgröße
SEITE 9: Logo, Don't Use (No-Gos)
SEITE 10: Sektionsteiler "02 Farbe"
SEITE 11: Farbpalette Primär (große Flächen + Codes)
SEITE 12: Farbpalette Sekundär/Neutral + Tints/Shades
SEITE 13: Sektionsteiler "03 Typografie"
SEITE 14: Primärschrift (großes AaBbCc-Specimen)
SEITE 15: Sekundärschrift + Anwendungsbeispiele (Headline/Body)
SEITE 16: Sektionsteiler "04 UI-Elemente & Custom Assets"
SEITE 17: Icons/Illustrationen im Raster
SEITE 18: Buttons & States + Spacing-Raster
SEITE 19: Sprache & Tonalität (Ansprache, wiederkehrende Begriffe,
          CTA-Muster)
SEITE 20: Sektionsteiler "05 Anwendungen" [LAYOUT-AGENT]
          (Visitenkarte, Briefpapier, Social-Media-Post, Website-Mockup
          im Browser-Frame; nur beschreiben, was gezeigt werden soll)
SEITE 21: Bildsprache/Moodboard [LAYOUT-AGENT]
SEITE 22: Assets & Lizenzen (Dateiliste, Schriftlizenzen)
SEITE 23: Abschluss ("Thank You" + Kontaktdaten)

--- NACH DER LETZTEN SEITE (interne Blöcke, nicht Teil des Kundendokuments) ---

OFFENE PUNKTE: alle Stellen, die du als OFFEN markiert hast, gesammelt
GEFUNDENE INKONSISTENZEN: einmalige Ausreißer im Code (Regel 2, Teil A)

[HIER: Code/Screenshots/Logo-Dateien einfügen]
```

---

## Hinweis

Dieser Prompt liefert reinen Analyse-Output (strukturierter Text/Tabellen
in Seitenform). Layout, Branding und finale Formatierung sind bewusst
nicht Teil davon, das übernimmt der nachgelagerte Agent, dem du diesen
Output gibst.

Die Blöcke "Offene Punkte" und "Gefundene Inkonsistenzen" am Ende sind
für dich: Offene Punkte vor Kundenübergabe füllen, Inkonsistenzen sind
nebenbei eine kostenlose QA-Liste für die Website selbst.
