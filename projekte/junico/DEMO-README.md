# JUNICO: Demo-Referenzprojekt fuer MARVIN.WEB

Stand: 2026-07-11. Zweck: fiktive Kunden-Website als klickbare Referenz auf der
MARVIN.WEB-Seite ("so sieht ein Kundenprojekt aus").

## Herkunft und Abgrenzung

- 1:1-Kopie des MARLOU-Builds (Stand: QA bestanden, Commit 38b199a), umgeflaggt.
- MARLOU (projekte/marlou/) ist das ECHTE kuenftige Projekt von Marvin + Louisa.
  Diese Demo existiert, damit die echte Marke nicht als "Kundenprojekt" verbrannt wird.
- Aenderungen am Design-System bitte zuerst in MARLOU, dann hierher syncen (oder
  bewusst divergieren lassen, sobald MARLOU echt weiterentwickelt wird).

## Fiktive Identitaet (frei erfunden, keine echten Personen)

- Marke: JUNICO (Jule + Nico), Wortmarke JU|NICO
- Paar: Jule Sommer und Nico Brandt
- Impressum: Musterstrasse 12, 10115 Berlin, als Demo gekennzeichnet
- Domain im Text: junico.travel (nicht registriert)
- Demo-Kennzeichnung: Footer-Zeile "Demo-Projekt · Design: MARVIN.WEB" auf allen
  Hauptseiten + Hinweis im Impressum

## Umbenennen (falls anderer Name gewuenscht)

Ein Durchlauf mit Ersetzungen in *.html reicht:
JUNICO -> NEUERNAME, Junico -> Neuername, junico.travel -> domain,
JU<span>NICO</span> -> Silben-Split der neuen Wortmarke, Jule/Nico -> neue Vornamen.

## Naechste Schritte (nach Marvins Go)

1. Auf marvin-web projekte.html als Referenz verlinken (Screenshot + Beschreibung)
2. Deploy: GitHub-Repo marvin-maik/junico-demo + Cloudflare Pages (eigene URL)
3. Vorher: Platzhalter-Formulare entschaerfen (Demo soll nichts senden) und
   og-Tags auf die Demo-URL setzen
