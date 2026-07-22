# Struktur & Texte zur Freigabe: baeckerei-siebert

Stand: 2026-07-22. Quelle aller Fakten: product-marketing-context.md (Live-Crawl der Alt-Site).
Gelb markierte Punkte = offene Kundenfragen, blockieren die Vorschau nicht.

Wireframes: `wireframe.html` (Lo-Fi, alle Seiten) · `wireframe-viewer.html` (alle 3 Breakpoints
gleichzeitig, Seiten umschaltbar) · `bildkonzept.html` (echte Fotos der Baeckerei, Zuordnung
pro Sektion; Marvins Entscheidung 2026-07-22: Bestandsfotos kommen in die Vorschau).
Bild-Befund: Reportage-Serie Backstube in 2600px (stark), 16 Produkt-Freisteller auf Weiss,
historische Ladenfotos (beantwortet die Frage nach historischem Material: JA, vorhanden).
Schwach nur die Tortenfotos; Luecke: aktuelles Aussenfoto der Ladenfront.

---

## Seiten-Set (6 Inhaltsseiten + Pflicht)

| Seite | Job | Hauptzielgruppe |
|---|---|---|
| index.html (Start) | In 5 Sekunden: aelteste Baeckerei Berlins, offen?, wo? Dann der Beweis: Zeitband + Handwerk | Kiez + Touristen |
| geschichte.html | Die 120 Jahre thematisch erzaehlen (Ort, Familie, Auszeichnung, Jubilaeum) | Touristen, Presse, Pitch |
| sortiment.html | "Gibt es mein Brot?" Als Preistafel wie hinter der Theke | Kiez |
| torten.html | "Kriege ich die Torte rechtzeitig, wie bestelle ich?" | Vorbesteller |
| ausbildung.html | Benefits zeigen, Bewerbungshuerde senken | Azubi-Bewerber |
| besuch.html | Zeiten (inkl. Sommer!), Anfahrt, Kontakt | alle |
| Pflicht | impressum.html, datenschutz.html, 404.html (Build-Phase; Vorschau: Platzhalter) | |

Traditionsbetrieb-Fit (Auftrag Marvin): Tradition steckt in der STRUKTUR, nicht in Deko.
Preistafel statt Shop-Karten (wie die Tafel hinter der Theke), Zeitband statt "Ueber uns"-Prosa,
Fascia-Baender als Sektionskoepfe (im Build gruen/gold, Ladenschild-Logik), Geschichte thematisch
wie Boudin (Ort/Familie/Auszeichnung), Azubi-Seite nennt zuerst die 5-Tage-Woche. Kein Retro-Kitsch,
keine Jute-Optik, keine Sepia-Filter.

Hormozi-Abdeckung: Dream Outcome (Hero Start + Geschichte), Likelihood (Zahlenband, Feinschmecker,
Handwerk-Sequenz), Time/Effort (Status-Chip "heute geoeffnet", Besuch-Seite, Torten-Ablauf in 3
Schritten). Sanwarwala: Above-fold-Klarheit (Status + Adresse im Hero), Message-Match "aelteste
Baeckerei Berlins" woertlich im h1, Social Proof am CTA (Feinschmecker-Zeile an Torten- und
Sortiment-CTAs), Einwaende auf der Seite (Montag zu -> Status-Chip; "verstaubt" -> Handwerk-Beweise).

Highlights je Seite (Fundus konsultiert): Start = Zeitband (#1) + Count-up-Band (#5).
Sortiment = Preistafel (#14). Andere Seiten bewusst OHNE Highlight (Streusel-Regel).
Bewusst dagegen: Vorher/Nachher (#3, kein Material), Globus (#5b, kein Raumthema),
Accordion mit Bildflaeche (#4, Sortiment ist tafel-, nicht listengetrieben).

Ansprache (Empfehlung aus Brief, offen beim Kunden): Kiez-Du auf Start/Sortiment/Geschichte/
Besuch, Sie auf Torten + Ausbildung.

Copy-Prinzip (Marvin, 2026-07-22): Zielmix aus Funnel-Klarheit UND Traditions-Charme.
Ueberschriften nie Verwaltungsdeutsch ("Der Ort", "Die Familie"), sondern konkret mit Waerme:
"Immer Schoenfliesser Strasse 12", "Von Gustav bis Anke: fuenf Generationen", "2026 wird dieses
Haus 120", "Heute noch frisches Brot?". Charme entsteht durch Konkretheit, nicht durch Blumigkeit
(Anti-Slop bleibt). Jede Seite: EIN klarer CTA + Social-Proof-Zeile (Feinschmecker) am CTA.

---

## index.html (Start)

1. **HERO** (Job: 5-Sekunden-Klarheit + Message-Match Touristen-Suche)
   - h1: "Berlins aelteste Baeckerei. Seit 1906. Immer Schoenfliesser Strasse 12."
   - Sub: "Handwerk in fuenfter Generation im Prenzlauer Berg. Ohne Tiefkuehlteiglinge,
     ohne Backmischungen. Unsere Sauerteige reifen 12 bis 16 Stunden."
   - Status-Chip: "Heute geoeffnet bis 18:30" / "Montag: Ruhetag" (JS nach Wochentag,
     Sommerzeiten-Logik) + Adresse.
   - CTA: "Unser Sortiment" (primaer), "Anfahrt & Zeiten"
   - Bild-Slot: Brot-Freisteller, handschriftliche Annotation "Sauerteig. 16 Stunden."
2. **ZAHLENBAND** (Job: Beleg statt Behauptung; Count-up) — 1906 gegruendet · 5 Generationen ·
   16 h Sauerteigreife · 5.000 Schrippen an starken Samstagen [VERIFY]
3. **ZEITBAND 1906-2026** (SIGNATURE; Stationen KOMPLETT dank Recherche 2026-07-22,
   Presse-belegt, im Kundengespraech bestaetigen)
   - 1906 Gustav (aus Schoenfliess/Ostpreussen -> Schoenfliesser Strasse; Konditorraum war
     Wohnzimmer) · 1920er Albert (Inflation, Weltkriege) · DDR Bodo (Mangelwirtschaft,
     Verstaatlichungsdruck) · 1990 Lars + Catrin (Ost-Schrippen-Retter) · 2021 Dr. Anke
     Siebert · 2026 "120 Jahre. Und ein Goldenes Ticket." -> Link geschichte.html
4. **SORTIMENT-TEASER** (Job: "gibt es mein Brot?"; Preistafel-Auszug, 6 Zeilen) -> sortiment.html
5. **HANDWERK "Unsere wichtigste Zutat ist Zeit"** (Job: Einwand "verstaubt/teuer" entkraeften;
   echte Sequenz, nummeriert 01-03): Abends angesetzt / 12 bis 16 Stunden Reife / Morgens von
   Hand gebacken. Zeile: "Rohstoffe fast ausschliesslich aus Berlin und Brandenburg."
6. **TORTEN-CTA-BAND** (Job: Vorbesteller abholen; im Build Fascia-Band): "Torten fuer Hochzeit,
   Geburtstag, Firmenfeier. Bestellung telefonisch: 030 4457576." + Feinschmecker-Zeile
7. **BESUCH KOMPAKT** (Job: Zeiten + Weg ohne Klick) + Footer

## geschichte.html

1. HERO: "Seit 1906 hinter derselben Ladentuer." Sub: Schoenfliesser Strasse 12, fuenf
   Generationen Familie Siebert.
2. "Immer Schoenfliesser Strasse 12" (Job: der Ort): seit Gruendung dieselbe Adresse.
   Bilder: historische Ladenfotos VORHANDEN (Laden70er, Siebert5659; siehe bildkonzept.html).
3. "Von Gustav bis Anke: fuenf Generationen" (Job: die Familie; = Zeitband-Zweitweg,
   KOMPLETT): Gustav (1906, aus Schoenfliess) -> Albert (Weltkriege) -> Bodo (DDR) ->
   Lars + Catrin (Wende, Ost-Schrippen-Retter, bis 2021) -> Dr. Anke Siebert (mit Ulrich
   Kienzl). Presse-belegt, beim Kunden bestaetigen. Bild: team-baeckerin.jpg [OFFEN: Anke?].
4. "Die Waende haengen voller Urkunden" (Job: Qualitaet belegen): FEINSCHMECKER (2013/2017
   explizit, "regelmaessig seit 2004" [VERIFY]), Goldene Brezeln [VERIFY],
   Publikumsliebling-Roggenmischbrot Mai 2026 (Presse-belegt).
5. "2026 wird dieses Haus 120. Es gibt ein Goldenes Ticket." (Job: der Moment; Presse-belegt
   Berliner Zeitung): Gutschein 10 Euro im Laden = Losnummer, Verkauf bis 31.07.; ab August
   woechentliche Preise, Oktober Ziehung Goldenes Ticket (lebenslang taeglich bis 10 Euro
   gratis). Sektion lebt mit der Aktion (nach 31.07. umbauen auf Gewinner-News).
   Auszeichnungs-Sektion ergaenzt: Goldene Brezeln, Publikumsliebling-Roggenmischbrot Mai 2026
   (Presse-belegt), "Waende voller Urkunden".
6. CTA-BAND: "Am besten probieren Sie selbst. Heute bis 18:30 geoeffnet." -> besuch.html

## sortiment.html

1. HERO kurz: "Was heute in der Auslage liegt." Sub: alles taeglich von Hand, keine Teiglinge.
   WICHTIG (Marvin): Alt-Site-Sortimentsseite hat NULL Bilder -> jede Warengruppe bekommt bei
   uns ein Gruppen-Anker-Bild (Appetit!) + Charme-Unterzeile ("ueber Nacht gereift, morgens im
   Regal"). Sichtbarster Vorher/Nachher-Punkt fuer den Pitch.
2. PREISTAFEL BROTE: Roggenmischbrot ... "Publikumsliebling der Berliner Brotwahl 2026"
   (Presse-belegt!) · Vollkornbrot ... Quellstueck, 16 Stunden · Weizen- und Mischbrote ·
   Spezialbrote [OFFEN: Preise online?]
3. PREISTAFEL BROETCHEN: **Ost-Schrippe** (DDR-Rezept, kompakt, kruemelt kaum [VERIFY Name auf
   der Tafel]) · Splitterbroetchen ... "samstags oft vor Mittag weg" (ehrliche Knappheit als
   Conversion-Element) · Koernersorten · Croissants · Kaese-/Dinkelsprossenbroetchen
   (Steinplatten) · belegte Broetchen
4. PREISTAFEL KUCHEN & FEINGEBAECK: Pfannkuchen (von Hand gespritzt, siedendes Fett) ·
   **Kameruner** + Spritzkuchen ("Fettgebaeck wie vor 50 Jahren") · **Mohnzopf** ("Geheimtipp
   der Stammkunden") · Streuselkuchen/Obstplunder/Apfelzimtschnecke · Bienenstich, Donauwelle
5. SAISONALES: Weihnachten/Ostern/Silvester. Fruehstueck/Kaffee RAUS bis Widerspruch geklaert
   (Alt-Site sagt Fruehstueckslokal, Recherche sagt reiner Strassenverkauf; siehe Kontext 0b).
6. CTA-BAND: Torten-Verweis + Status-Chip.

## torten.html (Sie-Ansprache)

1. HERO: "Torten mit Vorlauf. Gebacken wie seit 1906."
2. ANLAESSE (3 Karten): Hochzeit / Geburtstag / Firmenfeier. Klassiker: Frankfurter Kranz,
   Schwarzwaelder, Aprikosentorte.
3. ABLAUF (echte Sequenz 01-03): Anrufen (030 4457576) / Besprechen (Groesse, Geschmack,
   Termin) / Abholen im Laden. [OFFEN: Vorlaufzeit; Lieferung?]
4. CTA-BAND: Telefonnummer gross + Ladenzeiten als Telefonzeiten + Feinschmecker-Zeile.

## ausbildung.html (Sie-Ansprache laut Brief-Empfehlung [OFFEN: Azubis eher Du?])

1. HERO: "Ausbildung, bei der Sonntag UND Montag frei sind." Sub: aelteste familiengefuehrte
   Baeckerei Berlins, unbefristete Vertraege nach der Ausbildung.
2. ZWEI BERUFE (Karten): Baecker/in (Herstellen von Hand, Rohstoffe, Backstube) /
   Fachverkaeufer/in (Warenkunde, Beratung, Snacks).
3. BENEFITS-LISTE: 5-Tage-Woche mit So+Mo frei · unbefristet · Weihnachts- und Urlaubsgeld ·
   Praemien · kostenlose Verpflegung · Mitarbeiterrabatt · Verkuerzung moeglich.
4. BEWERBUNG: [OFFEN: Weg + Ansprechpartner; Vorschau: "Rufen Sie an oder kommen Sie vorbei."]

## besuch.html

1. HERO kurz + Status-Chip gross.
2. OEFFNUNGSZEITEN-TAFEL: Mo geschlossen · Di-Fr 6:00-18:30 · Sa 6:00-13:30 · So/Feiertag
   geschlossen. SOMMER-BLOCK (20.07.-15.08.2026): Di-Fr nur bis 16:30. (Mechanik fuer
   Sonderzeiten vorsehen, [OFFEN: wer pflegt kuenftig?])
3. ANFAHRT: Karten-Slot OHNE Google-Embed (integrations.md-Loesung). OePNV GELOEST (Recherche,
   vor Build auf Karte gegenpruefen): S+U Schoenhauser Allee (U2/S41/S42/S8), 5-7 min Fussweg
   ueber Schivelbeiner Str.; Tram M1/M13. Dazu Schlangen-Charme-Zeile ("Samstags steht man hier
   Schlange, seit 120 Jahren") + Timing-Tipp Di-Fr spaeter Vormittag. [OFFEN: Parken]
4. KONTAKT: Telefon, E-Mail, Adresse. Kein Formular (Bestellweg laut Alt-Site).

---

## Freigabe

Pro Seite/Sektion Feedback, danach Build. Eine Korrekturrunde nach Umsetzung inklusive,
weitere kostenpflichtig.
