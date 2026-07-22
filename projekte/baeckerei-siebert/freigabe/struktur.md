# Struktur & Texte zur Freigabe: baeckerei-siebert

Stand: 2026-07-22. Quelle aller Fakten: product-marketing-context.md (Live-Crawl der Alt-Site).
Gelb markierte Punkte = offene Kundenfragen, blockieren die Vorschau nicht.

Wireframes: `wireframe.html` (Lo-Fi, alle Seiten) · `wireframe-viewer.html` (alle 3 Breakpoints
gleichzeitig, Seiten umschaltbar).

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
   2x DER FEINSCHMECKER · 16 h Sauerteigreife
3. **ZEITBAND 1906-2026** (SIGNATURE, Job: die 120 Jahre erlebbar; Sticky-Wechsler)
   - Stationen: 1906 Gustav Siebert eroeffnet · [OFFEN: 2./3. Generation, Namen + Jahre]
     · 1990er Lars Siebert, vierte Generation · 2021 Anke Siebert uebernimmt in fuenfter
     Generation · 2026 "120 Jahre. Ein Ort. Eine Familie." -> Link geschichte.html
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
2. DER ORT: seit Gruendung dieselbe Adresse. Bild-Slot Ladenfront. [OFFEN: historisches Foto?]
3. DIE FAMILIE: Generationenliste (= Zeitband-Zweitweg, statisch): Gustav (Gruender) ->
   [OFFEN: 2./3. Gen] -> Lars (4.) -> Anke (seit 2021, 5.). Bild-Slot: Anke in der Backstube
   (lebende Generation zeigen, nicht Gemaelde).
4. DIE AUSZEICHNUNG: DER FEINSCHMECKER 2013 und 2017 unter den besten Baeckern Deutschlands.
   Alte Originalrezepte, taegliche Herstellung von Hand.
5. DAS JUBILAEUM: "120 Jahre im Jahr 2026." [OFFEN: Aktion + 10-Euro-Gutschein, Bedingungen]
6. CTA-BAND: "Am besten probieren Sie selbst. Heute bis 18:30 geoeffnet." -> besuch.html

## sortiment.html

1. HERO kurz: "Was heute in der Auslage liegt." Sub: alles taeglich von Hand, keine Teiglinge.
2. PREISTAFEL BROTE: Roggenmischbrot ... 70 % Roggen, 30 % Weizen · Vollkornbrot ... Quellstueck,
   16 Stunden · Weizen- und Mischbrote · Spezialbrote [OFFEN: Preise online?]
3. PREISTAFEL BROETCHEN: auf Steinplatten gebacken · Splitterbroetchen ("beliebt bei Kindern") ·
   Koernersorten (Mohn, Sesam, Kuerbis, Sonnenblume) · Croissants (Butter, Wuerstchen) ·
   Kaese-, Dinkelsprossenbroetchen · belegte Broetchen (Mett, Ei, Kaese, Salami, Schinken)
4. PREISTAFEL KUCHEN & FEINGEBAECK: Pfannkuchen · Spritzkuchen · Streuselkuchen · Obstplunder ·
   Apfelzimtschnecke · Bienenstich · Donauwelle
5. SAISONALES + VOR ORT: Weihnachten/Ostern/Silvester; Fruehstueck und Kaffee im Laden.
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
3. ANFAHRT: Karten-Slot OHNE Google-Embed (integrations.md-Loesung). [OFFEN: OePNV/Parken]
4. KONTAKT: Telefon, E-Mail, Adresse. Kein Formular (Bestellweg laut Alt-Site).

---

## Freigabe

Pro Seite/Sektion Feedback, danach Build. Eine Korrekturrunde nach Umsetzung inklusive,
weitere kostenpflichtig.
