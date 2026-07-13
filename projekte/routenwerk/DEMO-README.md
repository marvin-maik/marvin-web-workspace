# ROUTENWERK: Demo-Referenzprojekt fuer MARVIN.WEB

Stand: 2026-07-11. Zweck: fiktive Kunden-Website als klickbare Referenz auf der
MARVIN.WEB-Seite ("so sieht ein Kundenprojekt aus").

## Herkunft und Abgrenzung (WICHTIG)

- Technisch abgeleitet vom MARLOU-Build (Stand: QA bestanden), inhaltlich aber
  BEWUSST ENTKOPPELT: Auf Louisas Wunsch ist die Demo eine ORGANISATION (Studio),
  kein Paar, mit anderem Namen, anderer Story und generischen Blog-Routen.
  Grund: Die Demo soll die echte MARLOU-Idee nicht oeffentlich vorwegnehmen.
- MARLOU (projekte/marlou/) bleibt das echte kuenftige Projekt von Marvin + Louisa.
- In den OEFFENTLICHEN Dateien der Demo (HTML/CSS/JS) gibt es keinerlei
  MARLOU-/Marvin-/Louisa-Bezug (per grep verifiziert). Nur diese README nennt
  die Herkunft, und sie wird NICHT mit deployt (beim Deploy ausschliessen).

## Fiktive Identitaet (frei erfunden)

- Marke: ROUTENWERK, kleines Studio fuer Abenteuerreise-Planung, Berlin, "seit 2023"
- Team: "drei Leute, zusammen ueber zehn Jahre unterwegs auf vier Kontinenten",
  keine Personennamen auf der Site; Impressum: "Vertreten durch: Alex Muster (Demo)"
- Impressum: Musterstrasse 12, 10115 Berlin, als Demo gekennzeichnet
- Domain im Text: routenwerk.de (fiktiv, nicht registriert)
- Demo-Kennzeichnung: Footer-Zeile "Demo-Projekt · Design: MARVIN.WEB" + Impressum-Hinweis

## Platzhalter-Routen (Klassiker aus frei verfuegbaren Reiseblogs)

1. Island Ringstrasse, 12 Tage, 39 EUR (Reykjavik, Vík, Höfn)
2. Albanien: Riviera und Berge, 8 Tage, 29 EUR (Tirana, Himarë, Theth)
3. Jordanien: Wadi Rum und Petra, 7 Tage, 29 EUR (Amman, Petra, Wadi Rum)
Alle Nordhalbkugel (N-Koordinaten), bewusst andere Welt als die echten MARLOU-Routen.

## Sync-Regel

Design-System-Verbesserungen (styles.css, site.js, Muster) zuerst in MARLOU,
dann hierher uebernehmen. Copy und Routen bleiben getrennt.

## Naechste Schritte (nach Marvins Go)

1. Formulare entschaerfen (Demo darf nichts senden: action deaktivieren,
   Kauf-Buttons auf Hinweis-Anker)
2. Auf marvin-web projekte.html als Referenz verlinken (Screenshot + Beschreibung)
3. Deploy: GitHub-Repo marvin-maik/routenwerk-demo + Cloudflare Pages
   (DEMO-README.md UND handoff/ ausschliessen, og-Tags auf Demo-URL, d3 selbst hosten)

## Handoff (2026-07-13)

`handoff/` = internes CD-Handoff-Paket (nach _templates/cd-handoff-prompt-vorlage.md):
- `brand-guidelines.html`: 8 Seiten A4, Preset KOMPAKT, druckfaehig (Browser-Druckdialog -> PDF).
  INTERN-Block am Ende (offene Punkte + Inkonsistenzen) erscheint nicht im Druck.
- `routenwerk-bildmarke.svg`: neue Bildmarke (Startpunkt + Route + Zielmarke).
  Noch NICHT in die Website eingebaut — wartet auf Marvins Review.
