# MARLOU: Struktur & Texte zur Freigabe (v2)

Stand: 2026-07-11, v2 nach Marvins Feedback ("zu simpel, Reisen sind ein Erlebnis").
Mehrseitige Business-Site, 6 Content-Seiten plus Rechtsseiten. Klickbares Wireframe:
`freigabe/wireframe.html` (Graustufen mit Absicht, Design kommt nach Freigabe aus
Richtung A "Expeditionslogbuch").

---

## v2-Update: was sich gegenueber v1 geaendert hat

**Layout (aus Template-Analyse, Muster-Katalog in design-dossier.md):**
- Jede Sektion beginnt mit einer Logbuch-Marker-Zeile (Mono-Label + Koordinate + Hairline)
  statt monotonem H2-Einstieg. Koordinaten sind Platzhalter bis Marvins Liste steht.
- Breitenwechsel pro Seite: Full-bleed-Heros (Start, Ueber uns), graue Baender
  (Kostentransparenz, Preis-Einwand), dunkle CTA-Baender vor jedem Footer.
- Start: Foto-Hero mit Proof-Chips, Einwand als Display-Statement, Funnel-Etappen auf
  1px-Route (Etappe 03 bewusst leer), 3:4-Guide-Karten mit Koordinaten-Meta-Leiste,
  Koordinaten-Marquee, Lead Magnet als dunkles Band.
- Guides: Karten ragen in die Kopf-Flaeche (Overlap), 2:3-Produktkarten mit Kauf-Button
  in der Karte, "Was drinsteckt" als aufklappbares Accordion mit PDF-Preview-Flaeche,
  harter Fuer-wen-Split, FAQ zweispaltig.
- Beratung: asymmetrischer Split-Kopf, Komplettplanung doppelt breit mit grossem
  Rechenbeispiel (790 EUR), Kostentabelle als eigenes Band, 4 Schritte auf Route,
  O-Ton-Zitat, Cal.com im CTA-Band.
- Gruppenreisen: Riesen-Typo "BALD." statt Fake-Inhalt, leerer Dia-Rahmen
  ("N ?.???? / E ?.???? — Ziel in Arbeit"), nur 4 Sektionen.
- Ueber uns: Full-bleed-Foto, zwei versetzte Story-Splits mit Bild-Captions,
  Erlebnis-Fakten als grosses Zahlenband, Prinzipien auf Route, Zitat-Band.
- Kontakt: 60/40-Split Formular/Kompass-Karte, Koordinaten-Kopfzeile, Marquee statt CTA-Band.

**Copy (Kritik durch Hormozi/Sanwarwala/mimio, Details in material/copy-kritik-experten.md):**
- Hero-H1 traegt jetzt das Ergebnis: "Abenteuer zu zweit, von denen ihr noch Jahre erzaehlt."
- Je Guide ein Moment-Satz (z.B. "Der Abend, an dem ihr allein am Wasserloch sitzt und
  die Elefanten kommen.") statt reiner Ortsliste.
- Neue Sektion auf Guides: "Warum nicht ein 5-Euro-Template?" (Etsy-Preis-Einwand).
- Vorschlag Geld-zurueck-Garantie fuer Guides (OFFEN, Marvin entscheidet).
- Vorschlag: Kompass-Gebuehr 149 EUR auf Komplettplanung anrechenbar (OFFEN).
- Wertanker Beratung: "spart euch drei Wochenenden Recherche".
- O-Ton-Zitat Marvin (Pandemie/Australien) auf der Beratungs-Seite.
- Visions-Satz jetzt auch auf der Startseite als Zitat-Band.
- Warteliste mit Grund JETZT: Erstzugriff auf die wenigen Plaetze.
- Kontakt-H1: "Erzaehlt uns, was ihr vorhabt."

Die vollstaendige v2-Copy steht im Wireframe selbst (verbindliche Fassung fuer die
Freigabe). Die Sektions-Jobs und die v1-Basis-Copy unten gelten weiter, wo v2 nichts
anderes sagt.

## v2.1: Highlight-Elemente (Marvins Template-Screenshots + 21st.dev)

**Highlight 1: Routen-Rotator auf der Startseite (eingebaut, im Wireframe klickbar).**
Nach dem Vorbild traavellio-Sticky-Destinations + "Top Destinations"-Karussell:
gestrichelte Routen-Linie mit 3 Koordinaten-Punkten (statt Flaggen: Logbuch-Welt),
aktiver Punkt gross, grosse Guide-Karte wechselt (Foto, Moment-Satz, Preis, CTA),
die Koordinaten-Marquee-Zeile darunter wechselt synchron die Orte, mit Foto-Thumbs
zwischen den Woertern (traavellio Running-Text). Im Build: Wechsel beim Scrollen via
position:sticky + sanfte Ueberblendung, KEIN Scroll-Jacking (robust auf Mobile),
Pfeile/Punkte als zweiter Weg, prefers-reduced-motion respektiert.

**Highlight 2: Foto-Marquee (eingebaut).** Die Marquee-Zeile ist jetzt Teil des
Rotators und traegt kleine Bild-Thumbs zwischen den Ortsnamen.

**Ideenspeicher (aus 21st.dev, nicht eingebaut, Marvin entscheidet):**
- Vorher/Nachher-Slider (Image Comparison): auf der Beratungs-Seite denkbar als
  "40 Recherche-Tabs vs. euer fertiger Tagesplan" (Screenshot-Chaos links, Plan-PDF
  rechts, Griff zum Ziehen). Passt zum Einwand "kann ich selbst googeln".
- Briefmarken-Zackenkante als Sektions-Trenner (aus Marvins Screenshot): passt zur
  Logbuch-Welt, waere aber ein ZWEITES Deko-System neben dem Koordinaten-Marker.
  Anti-Slop-Regel sagt ein Signature-Element. Nur nehmen, wenn dafuer etwas anderes
  fliegt.

Freigabe-Regel: Hier sind Aenderungen billig. Nach Freigabe gilt: eine Korrekturrunde
nach Umsetzung inklusive, weitere kostenpflichtig.

Gelb markierte Punkte = offene Fragen an Marvin/Kunde.

---

## Sitemap

1. **Start** (`index.html`): Einstieg, beide Conversion-Pfade, Funnel sichtbar
2. **Reise-Guides** (`guides.html`): Shop-Seite, Pfad 1 (kalter Traffic)
3. **Beratung** (`beratung.html`): Angebots-Seite, Pfad 2, Preistransparenz
4. **Gruppenreisen** (`gruppenreisen.html`): Coming Soon + Warteliste
5. **Ueber uns** (`ueber-uns.html`): Story, Erlebnis-Fakten, Vertrauen
6. **Kontakt** (`kontakt.html`): Formular + Direkt-Termin
7. Rechtsseiten: Impressum, Datenschutz, AGB/Widerruf (via Dieter + Shop-Rechtspaket,
   nicht Teil dieser Freigabe)

Funnel-Logik ueberall: Guide (ab 29 EUR) -> Beratung -> Gruppenreise (Warteliste).

---

## Seite 1: Start

### 1.1 Hero
Job: 5-Sekunden-Klarheit (was, fuer wen, warum jetzt). Hormozi: Dream Outcome + Likelihood.
Sanwarwala: Social Proof direkt am CTA.

- H1: **Abenteuerreisen fuer Paare. Selbst erlebt, fuer euch geplant.**
- Sub: MARLOU plant Reisen fuer Paare, die mehr wollen als Strand und Hotelbuffet.
  Fertige Guides zum Sofort-Download oder eine Planung im Gespraech. Alles aus eigener
  Erfahrung: 46 Monate Australien, 8 Monate Suedafrika, Brasilien und einige Umwege.
- CTA primaer: Reise-Guides ansehen. CTA sekundaer: Beratung ansehen.
- Proof-Zeile am CTA: Ab 29 EUR. Sofort-Download. Jede Route selbst gereist.
- Bild-Slot: echtes Foto Marvin + Louisa unterwegs.

### 1.2 Einwand "Kann ich googeln"
Job: groessten Einwand sofort entkraeften. Hormozi: Aufwand runter.

- H2: **Klar koennt ihr das selbst googeln.**
- Copy: 40 Tabs, drei Blogs, die voneinander abschreiben, und am Ende der gleiche Plan,
  den alle haben. Eine gute Abenteuerreise scheitert selten am Ziel. Sie scheitert an
  drei Wochenenden Recherche, die keiner von euch hat. Wir haben die Recherche schon
  gemacht. Vor Ort.

### 1.3 Der Weg (Funnel als Etappen)
Job: Upsell-Pfad sichtbar machen (Vorgabe aus Erstgespraech). Nummerierung ok, echte Sequenz.

- H2: **Von der Idee zur Abreise, in Etappen**
- Etappe 01, Reise-Guide (ab 29 EUR): Fertige Route zum Sofort-Download. Tagesplan,
  Unterkuenfte, Erlebnisse, Packliste. Der risikoarme Einstieg.
- Etappe 02, Beratung (ab 149 EUR): Euer eigener Trip, im Gespraech geplant. Kompass-
  Gespraech oder Komplettplanung Tag fuer Tag.
- Etappe 03, Gruppenreise (bald): Kleine, handverlesene Gruppen. Warteliste ist offen.

### 1.4 Guides-Teaser
Job: Conversion-Pfad 1. Hormozi: Time Delay runter (sofort), Risiko runter (Preis).

- H2: **Die Guides**
- Karte 1: Suedafrika ab Durban. 12 Tage Drakensberg, Wild Coast, Safari. 39 EUR.
  Zeile: Louisas Revier, 8 Monate vor Ort gelebt.
- Karte 2: Australien Ostkueste. 14 Tage abseits des Backpacker-Trails. 39 EUR.
  Zeile: Marvins Revier, 46 Monate im Land.
- Karte 3: Brasilien. 10 Tage Regenwald statt Copacabana. 29 EUR.
  Zeile: Von Louisa bereist.
- CTA: Alle Guides ansehen.
- OFFEN: Preise und Tage-Zuschnitt final? (29 EUR bis 10 Tage, 39 EUR ab 12 Tage)

### 1.5 Beratung-Teaser
Job: Conversion-Pfad 2, Preis-Skepsis vorwegnehmen (Salt-&-Wind-Prinzip).

- H2: **Wenn es euer eigener Trip werden soll**
- Copy: Kompass-Gespraech: 60 Minuten, 149 EUR, danach kennt ihr Ziel, Route und
  Budgetrahmen. Komplettplanung: 79 EUR pro Reisetag, wir schreiben euren Plan Tag fuer
  Tag. Ihr zahlt uns die Planung. Hotels und Fluege bucht ihr selbst, zu euren Preisen.
- CTA: So laeuft die Beratung.

### 1.6 Ueber-uns-Teaser
Job: Einwand "Ist das serioes?", Gesichter zeigen. Hormozi: Likelihood.

- H2: **Wer hier plant**
- Copy: Louisa hat acht Monate in Durban gelebt und Suedafrika von dort aus bereist.
  Marvin hat fast vier Jahre in Australien gelebt, mittendrin die Pandemie: dichte
  Grenzen, gestrichene Fluege, Plaene, die alle zwei Wochen neu geschrieben wurden.
  Dabei haben wir gemerkt, was wir koennen: Reisen planen, die funktionieren. Und ruhig
  bleiben, wenn nichts mehr funktioniert.
- 2 Bild-Slots (Marvin, Louisa). CTA: Unsere Geschichte.

### 1.7 Lead Magnet
Job: E-Mail-Liste als strategisches Asset (unabhaengig vom Algorithmus).

- H2: **Noch kein Ziel im Kopf?**
- Copy: Der kostenlose Mini-Guide: Die 5 besten Abenteuer-Destinations fuer Paare.
  Mit Budgetrahmen, bester Reisezeit und dem einen Erlebnis pro Ziel, das den Trip traegt.
- E-Mail-Feld + Button: Mini-Guide holen. Kleingedruckt: Kein Spam. Abmeldung jederzeit.

### 1.8 FAQ kurz (3 Fragen)
Job: Einwaende auf der Seite beantworten (Sanwarwala).

- Bucht ihr auch Hotels und Fluege? -> Nein, wir planen. Ihr bucht selbst ueber die
  Links im Plan. So bleibt ihr flexibel und zahlt keine versteckte Marge.
- Fuer wen ist MARLOU nichts? -> Fuer Pauschalurlaub mit Liege am Pool. Und fuer
  Backpacker, die drei Monate Zeit fuer die eigene Recherche haben.
- Warum nicht einfach eine KI fragen? -> Koennt ihr. Ihr bekommt den Durchschnitt aus
  allen Reiseblogs. Wir waren da.
- OFFEN: Geld-zurueck-Garantie fuer Guides anbieten? (Hormozi-Hebel Risiko, nicht entschieden)

### 1.9 Footer
Nav, hallo@marlou.travel, Impressum / Datenschutz / AGB + Widerruf (Platzhalter bis Launch).

---

## Seite 2: Reise-Guides

### 2.1 Kopf
Job: Klarheit was hier gekauft wird. Hormozi: Time Delay + Aufwand runter.

- H1: **Reise-Guides. Fertige Abenteuer zum Sofort-Download.**
- Sub: Jeder Guide ist eine Route, die wir selbst gereist sind. Kein Aggregat aus
  Blogs, keine KI-Liste. Kaufen, runterladen, losplanen.

### 2.2 Die drei Guides (Detail-Karten)
Je Karte: Titel, Tage, Preis, 3 Inhalts-Highlights, Selbst-erlebt-Zeile, Kauf-Button.

- Suedafrika ab Durban, 12 Tage, 39 EUR: Drakensberg, Wild Coast, Safari. Highlights:
  Route ab Flughafen Durban, Unterkuenfte von Backpacker-Lodge bis Farmstay, Safari
  ohne Touristen-Konvoi. Zeile: 8 Monate vor Ort gelebt, nicht nur durchgereist.
- Australien Ostkueste, 14 Tage, 39 EUR: abseits des Backpacker-Trails. Highlights:
  die Kuestenroute mit Van oder Mietwagen, Tauch- und Skydiving-Spots mit Buchungsinfo,
  was ihr auslassen koennt (und warum).
  Zeile: 46 Monate im Land, inklusive Pandemie-Umplanung.
- Brasilien, 10 Tage, 29 EUR: Regenwald statt Copacabana. Highlights: Atlantik-
  Regenwald, Tagesetappen ohne Gewaltmaersche, Sicherheit ehrlich eingeordnet.
  Zeile: Von Louisa bereist.
- Kauf-Buttons: Guide kaufen. OFFEN: Digistore24-Produktlinks folgen vor Launch.

### 2.3 Was in jedem Guide steckt
Job: Kaufinhalt konkret machen, Preis rechtfertigen.

- Tag-fuer-Tag-Plan mit Fahrzeiten und Alternativen
- Konkrete Unterkuenfte mit Links
- Must-do-Erlebnisse mit Buchungsinfo und Kontakten
- Praxis-Teil: Visum, Budget, beste Reisezeit, Packliste
- Insider-Abschnitt mit dem, was in keinem Blog steht

### 2.4 Fuer wen / fuer wen nicht
Job: Selbstqualifikation, spart Support und Fehlkaeufe.

- Fuer euch, wenn: ihr zu zweit reist, Erlebnisse wollt statt Sehenswuerdigkeiten
  abhaken, und eure Zeit zu schade fuer 40 Recherche-Tabs ist.
- Nichts fuer euch, wenn: ihr All-inclusive sucht, eine Gruppenreise mit Reiseleitung
  erwartet (die kommt spaeter), oder alles selbst recherchieren wollt.

### 2.5 FAQ Guides
- Wie bekomme ich den Guide? -> Direkt nach dem Kauf als PDF-Download, dazu ein
  Download-Link per E-Mail.
- Was ist mit Widerruf? -> Beim Sofort-Download stimmt ihr zu, dass der Widerruf mit
  dem Download erlischt. Steht klar vor dem Kauf-Button. (Standard bei digitalen Produkten)
- Sind Links im Guide Werbung? -> Manche Unterkunfts- und Erlebnis-Links sind
  Affiliate-Links. Das steht im Guide auf Seite 1 und kostet euch nichts.
- OFFEN: Bekommen Kaeufer spaetere Guide-Updates kostenlos?

### 2.6 Lead Magnet kurz + Footer

---

## Seite 3: Beratung

### 3.1 Kopf
- H1: **Beratung. Euer Trip, von uns geplant.**
- Sub: Fuer Paare, die einen eigenen Plan wollen, aber keine drei Wochenenden Recherche.
  Ihr redet, wir planen, ihr reist.

### 3.2 Zwei Pakete
Job: klares Angebot, zwei Einstiegstiefen. Hormozi: Aufwand runter, Risiko klein halten.

- Kompass-Gespraech, 149 EUR: 60 Minuten Videocall zu zweit mit uns. Danach kennt ihr
  Ziel, Reisezeit, Routenidee und Budgetrahmen, schriftlich zusammengefasst.
  OFFEN: Frist fuer die Zusammenfassung festlegen (Vorschlag: 48 Stunden).
- Komplettplanung, 79 EUR pro Reisetag: Beispiel: 10 Tage sind 790 EUR. Erst der
  60-Minuten-Call, dann euer Plan Tag fuer Tag als PDF, innerhalb von 5 Werktagen.
  Eine Ueberarbeitungsrunde inklusive. Rueckfragen per E-Mail bis zur Abreise.

### 3.3 Kostentransparenz (Zwei-Spalten-Tabelle, jess.travel-Logik)
Job: Preis-Skepsis entkraeften. Der wichtigste Vertrauensbaustein der Seite.

- Spalte A, was ihr an uns zahlt: die Planungsgebuehr. Fix, vorher bekannt, einmalig.
- Spalte B, was ihr an Hotels und Airlines zahlt: eure Buchungen, eure Preise, direkt
  bei den Anbietern. Wir verdienen daran nichts mit.

### 3.4 Ablauf in 4 Schritten
1. Termin aussuchen (Online-Kalender)
2. 60-Minuten-Videocall: ihr erzaehlt, wir fragen
3. Euer Plan kommt innerhalb von 5 Werktagen als PDF
4. Eine Ueberarbeitungsrunde, dann Rueckfragen per E-Mail bis zur Abreise

### 3.5 FAQ Beratung
- Bucht ihr fuer uns? -> Nein. Ihr bucht selbst ueber die Links im Plan. Wenn ihr beim
  Buchen Begleitung wollt, machen wir das gemeinsam im Call.
- Was, wenn uns der Plan nicht gefaellt? -> Eine Ueberarbeitungsrunde ist inklusive.
  Weitere Runden kosten extra, das sagen wir vorher.
- Fuer welche Ziele koennt ihr planen? -> Am staerksten sind wir in Australien,
  Suedafrika und Brasilien. Andere Ziele auf Anfrage. Wenn wir ein Ziel nicht gut genug
  kennen, sagen wir das ehrlich.

### 3.6 CTA-Block
- Termin aussuchen (Cal.com-Einbettung). OFFEN: Cal.com-Account + Link folgen vor Launch.

---

## Seite 4: Gruppenreisen (Coming Soon)

### 4.1 Kopf
Job: ehrliche Ankuendigung, kein Fake-Angebot (radikale Authentizitaet ist Vision,
nicht Bestand).

- H1: **Gruppenreisen. Bald.**
- Sub: Noch kein Termin, kein Preis, keine Hochglanzbroschuere. Aber ein Plan.

### 4.2 Wohin wir wollen
Job: Vision als Zukunft formulieren, Dream Outcome zeigen, Warteliste aufladen.

- Copy: Reisen, bei denen ihr nicht zuschaut, sondern teilnehmt. Kleine Gruppen,
  wenige Paare, Orte, an denen wir Menschen kennen statt Sehenswuerdigkeiten. Solche
  Reisen brauchen Vertrauen vor Ort, und das baut man nicht per E-Mail auf. Genau
  daran arbeiten wir gerade. Deshalb gibt es hier noch nichts zu kaufen.

### 4.3 Warteliste
- H2: **Wenn die erste Reise steht, erfahrt ihr es zuerst.**
- E-Mail-Feld + Button: Auf die Warteliste. Kleingedruckt: Nur Nachricht zur ersten
  Reise, sonst nichts.

---

## Seite 5: Ueber uns

### 5.1 Kopf
- H1: **Wir sind Marvin und Louisa.**
- Bild-Slot: beide zusammen, echtes Foto.

### 5.2 Die Geschichte
Job: Ursprungsmoment + Verletzlichkeit (mimio-Prinzipien), nur echte Fakten.

- Copy: Louisa hat acht Monate in Durban gelebt und Suedafrika von dort aus bereist:
  die Drakensberge, die Wild Coast, die Safari-Parks, dazu Brasilien. Marvin hat fast
  vier Jahre in Australien gelebt, mittendrin die Pandemie: dichte Grenzen, gestrichene
  Fluege, Plaene, die alle zwei Wochen neu geschrieben wurden.
  Dabei haben wir gemerkt, was wir koennen: Reisen planen, die funktionieren. Und ruhig
  bleiben, wenn nichts mehr funktioniert.
  MARLOU ist daraus entstanden. Wir planen die Reisen, die wir selbst machen wuerden,
  fuer Paare, die dafuer keine drei Wochenenden Recherche uebrig haben.

### 5.3 Erlebnis-Fakten (statt Testimonials)
Job: Seriositaet belegen ohne Fake-Proof (noch keine Kundenstimmen vorhanden).

- 46 Monate Australien / 8 Monate Suedafrika / Van Life, Skydiving, Cage Diving,
  Speerfischen, Tauchen / 3 Guides, jede Route selbst gereist
- OFFEN: Koordinaten-Liste bereister Orte sammeln (wird im Design das Signature-Element).

### 5.4 Wie wir planen (3 Prinzipien)
1. Nur Ziele, die wir kennen. Sonst sagen wir es.
2. Planung getrennt von Buchung. Ihr seht genau, wofuer ihr zahlt.
3. Ein Plan muss auch Plan B koennen.

### 5.5 Visions-Satz (Zitat-Block)
- **Ihr kommt nicht mit Fotos nach Hause. Ihr kommt mit einer Geschichte zurueck, die
  nur euch gehoert.**

### 5.6 CTA: Guides ansehen / Beratung ansehen

---

## Seite 6: Kontakt

### 6.1 Kopf + Formular
- H1: **Kontakt**
- Sub: Schreibt uns, was ihr vorhabt. Wir antworten innerhalb von 2 Werktagen.
  OFFEN: Antwortzeit bestaetigen.
- Formular: Name, E-Mail, Nachricht. Button: Nachricht senden.
  OFFEN: Formspree-Endpoint folgt vor Launch.
- Alternative daneben: Oder bucht direkt ein Kompass-Gespraech (Link Beratung).
- E-Mail: hallo@marlou.travel

---

## Offene Fragen (gesammelt, gelb im Wireframe)

1. Guide-Preise und Tage-Zuschnitt final (29 EUR bis 10 Tage, 39 EUR ab 12 Tage)?
2. Geld-zurueck-Garantie fuer Guides ja/nein? ("Wenn ihr nach dem Lesen nicht losplanen
   wollt: Geld zurueck.")
3. Kompass-Gebuehr (149 EUR) auf die Komplettplanung anrechenbar? (Hormozi-Empfehlung:
   macht den Einstieg risikofrei und die Upsell-Bruecke stark)
4. Frist fuer Kompass-Zusammenfassung (48 Stunden)?
5. Guide-Updates fuer Kaeufer kostenlos?
6. Antwortzeit Kontakt (2 Werktage)?
7. Koordinaten-Liste bereister Orte (alle Koordinaten im Wireframe sind Platzhalter)
8. Vor Launch: Digistore24-Links, Cal.com-Link, Formspree-Endpoint, Dieter, AGB-Paket
