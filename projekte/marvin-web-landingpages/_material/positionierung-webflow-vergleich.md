# [MARKE]: Weiterbildung, Technologie-Entscheidung und Kostenvergleich

> Rohmaterial aus anderem Chat (erstellt 2026-07-15, abgelegt 2026-07-16).
> ACHTUNG, bereits identifizierte Schwaechen (Review 2026-07-16, in LPs NICHT uebernehmen):
> 1. "Statisch vs. dynamisch"-Performance-Argument passt nicht auf Webflow (Webflow published
>    selbst statisch auf CDN). Echtes Argument: Fremdcode-Ballast (webflow.js, Telemetrie).
>    "Faktor 2 bis 3"-Studienbehauptung streichen (unbelegt).
> 2. CMS-Kostenvergleich (Beispiel 2) hinkt: statische Seite hat kein CMS. Ehrlich formulieren:
>    Pflege ueber Betreuungspauschale statt Plattformgebuehr.
> 3. Beispiel 4 (Agentur-Rechnung) NICHT in Kundenkommunikation (das ist Marvins Ersparnis).
> 4. Flux-Zertifikat ist KEIN offizielles Webflow-Zertifikat, vorsichtig formulieren.
> 5. Vibe-Coding-Abschnitt nur als Einwandbehandlung, nicht proaktiv auf Kundenseiten.
> 6. DSGVO-Argument nur fuer Fonts/Skripte spielen (GitHub/Cloudflare sind selbst US-Anbieter).
> 7. GitHub Pages free nur fuer oeffentliche Repos; Standard-Hoster in Kommunikation: Cloudflare Pages.

---

Dieses Dokument fasst drei Themen zusammen: die absolvierte Weiterbildung an der Flux Academy, die bewusste Entscheidung gegen Webflow als Dauerplattform zugunsten eines schlankeren Setups, und einen belastbaren Kostenvergleich mit Beispielrechnungen. Es dient als internes Infoblatt und als Textgrundlage für Website und Kundengespräche. Alle Preise sind Stand Juli 2026 recherchiert. Webflow rechnet in US-Dollar ab; Euro-Werte sind kaufmännisch gerundete Näherungen (Kurs ca. 1 USD = 0,92 EUR).

## 1. Weiterbildung: Flux Academy Webflow Masterclass

### Was die Masterclass ist
Die Webflow Masterclass der Flux Academy (aktuell Version 5.1, 5. Auflage, vollständig für Webflow 2026 aktualisiert) ist ein projektbasierter Onlinekurs, der von den Grundlagen bis zum Aufbau kompletter, kundenfertiger Websites führt. Der Kurs kostet 695 US-Dollar (Einmalzahlung) oder drei Raten zu 278 US-Dollar. Es gibt eine Pro-Version für 1.195 US-Dollar mit zusätzlichen Geschäftsinhalten und ein Gesamtpaket "Web Career Ignite" für 3.495 US-Dollar. Auf alle Käufe gilt eine 30-Tage-Geld-zurück-Garantie.

### Aufbau und Kursumfang
Der Kurs ist in fünf aufeinander aufbauende Module plus ein Zertifizierungsprojekt gegliedert und deckt drei Leistungsstufen ab (Anfänger, Fortgeschrittene, Experten): Einführung in die Webflow-Oberfläche; Web-Design-Grundlagen (HTML/CSS, Box-Modell, Styling-System, Flexbox, Seitenstruktur, Maßeinheiten, Variablen); Projekt 1 (Website für einen Modefotografen, ca. 32 Lektionen inkl. CMS, Formulare, Responsivität, Barrierefreiheit, Datenschutz, SEO, Client-Übergabe); Projekt 2 Creative Development (Produkt-Landingpage mit Spline/GSAP, ca. 26 Lektionen); Projekt 3 Scaling Up (Client-First-Framework, Relume, Airtable-Import, Finsweet-Filter, ca. 21 Lektionen); Zertifizierungsprojekt mit persönlicher Mentoren-Bewertung. Dazu: acht Wochen Mentoring, wöchentliche Office Hours mit Ran Segall, lebenslanger Zugang, private Community.

### Reputation und Trust-Faktoren
Gründer Ran Segall: Webdesigner mit rund 20 Jahren Erfahrung, YouTube-Kanal "Flux" seit 2015 (Reichweite je nach Quelle 450k bis ~1 Mio; vorsichtig "mehrere hunderttausend Abonnenten" kommunizieren). Webflow-Awards-2022-Finalist "Community Educator of the Year", Sprecher Webflow Conf 2022. Beide Webflow-Mitgründer empfehlen die Masterclass; Bryant Chou: "Flux Academy's Webflow Masterclass is so effective that we've incorporated it into our new hire training program at Webflow." Externe Rankings (Flowninja, Flowout) fuehren sie als Testsieger. Presse: nur Forbes 2016 belegt. Teilnehmer: 7.000+ (an anderer Stelle 9.400+).

### Webflow als Plattform (Kennzahlen 2026)
3,5 Mio+ Nutzer in ~190 Laendern, 100.000+ zahlende Kunden. Referenzen: Dropbox, Rakuten, Upwork, Michael Kors, Dell, Discord, Zendesk, Spotify, Orangetheory. Bewertung ~4 Mrd. USD, Umsatz 2024: 212,5 Mio USD (+66 %). CEO Linda Tong. Marktanteil laut W3Techs (03/2026): ~0,8 % aller Websites, ~1,2 % CMS-Markt.

## 2. Warum [MARKE] nicht mehr auf Webflow setzt

Wechsel zu KI-gestuetzter Erstellung (Claude Code) + kostenlosem statischem Hosting (Cloudflare Pages / GitHub Pages) ist bewusste, fachlich begruendete Entscheidung, kein Sparzwang.

- **Keine laufenden Plattformgebuehren.** Webflow: je Site ein Site-Abo, plus Workspace-Abo, plus Sitzplaetze. Statisches Hosting: dauerhaft kostenlos.
- **Kein Plattformzwang.** Webflow: proprietaeres System, Code-Export an bezahltes Workspace-Abo gebunden, laesst CMS/Formulare/Suche/Mitgliederbereiche/Mehrsprachigkeit zurueck. Statisch: Code gehoert vollstaendig dem Kunden, jederzeit umziehbar.
- **Kein unnoetiger Fremdcode.** Webflow laedt auch bei einfachen Projekten webflow.js, Normalisierungs-CSS, Telemetrie. Handgebaute statische Seite: nur der Code, der gebraucht wird.
- **Bessere Ladezeiten.** (Argument ueber Fremdcode-Ballast fuehren, s. Review-Hinweis 1.) Faustregel LCP < 2,5 s; schlanke statische Seiten erreichen das von Haus aus.
- **Features ohne Aufpreise.** Webflow: Mehrsprachigkeit ab 9 $/Sprache/Monat, A/B-Testing (Optimize) ab 299 $/Monat, Analyse ab 9 $/Monat, KI-Guthaben-System seit Mai 2026.
- **Datenschutz.** Fonts/Skripte selbst gehostet, keine externe Telemetrie (s. Review-Hinweis 6).

### Positionierung: serioes statt "Vibe Coder" (nur Einwandbehandlung)
Vibe Coding (Karpathy, 02/2025): generierten Code uebernehmen ohne Pruefung/Verstaendnis. Kritik (Simon Willison): riskant fuer Production. Abgrenzung [MARKE]: (1) klassische Route gelernt (Flux-Academy-Ausbildung, Fundamente HTML/CSS/SEO/Barrierefreiheit/Client-Workflow), (2) KI ist Werkzeug mit menschlicher Kontrolle und Verantwortung, nicht Autopilot, (3) Entscheidung bewusst getroffen, weil das Ergebnis fuer den Kunden besser ist: schneller, guenstiger, unabhaengiger.

## 3. Kostenvergleich (Webflow-Preise nach Umstellung 13.05.2026)

Site Plans: Starter free (nur webflow.io); Basic ~15 $/Mo jaehrlich (180 $/Jahr), kein CMS; Premium ~25 $/Mo jaehrlich (300 $/Jahr), CMS, 50 GB; Team ab 2.500 $/Mo. Workspace: Freelancer ~16 $/Mo, Agency ~35 $/Mo, Full Seat 39 $/Mo. Der Preisseiten-Betrag ist selten der Endbetrag (Site + Workspace + Seats + Add-ons addieren sich).

Cloudflare Pages: dauerhaft kostenlos, unbegrenzte Bandbreite (Fair Use), 500 Builds/Monat, bis 100 Domains/Projekt, SSL. GitHub Pages: kostenlos fuer OEFFENTLICHE Repos, ~100 GB/Monat weich, 1 GB Site, nur statisch.

Domain (~5-15 EUR/Jahr) faellt in beiden Welten an, im Vergleich neutral.

**Beispielrechnungen ueber 2 Jahre (nur Plattformkosten):**
- Beispiel 1, Handwerksfirma, Visitenkarten-Site ohne CMS: Webflow Basic ~360 $ (~331 EUR) vs. 0 EUR. Ersparnis ~331 EUR.
- Beispiel 2, Arztpraxis mit Content-Pflege: Webflow Premium ~600 $ (~552 EUR) vs. 0 EUR Plattformkosten (Pflege ueber Betreuungspauschale ehrlich benennen, s. Review-Hinweis 2).
- Beispiel 3, Selbststaendiger mit Portfolio: Basic ~331 EUR bzw. Premium ~552 EUR vs. 0 EUR.
- Beispiel 4, Agentur-Perspektive 5 Kundenseiten: ~3.533 EUR/2 Jahre. NUR INTERN (Review-Hinweis 3).

## 4. Kernbotschaft
Websites, die schnell laden, dem Kunden vollstaendig gehoeren und dauerhaft ohne Plattform-Abogebuehren auskommen. Kein "gut gegen schlecht" gegenueber Webflow; fuer Handwerksbetriebe, Arztpraxen und Selbststaendige mit weitgehend statischen Websites ueberwiegen die Vorteile des freien Setups deutlich.

## Aktualitaet / offene Punkte
- Webflow-Preise Stand Umstellung 13.05.2026, USD, EUR-Naeherungen (Kurs ~0,92).
- YouTube-Reichweite Segall unsicher, zurueckhaltend formulieren.
- Presse-Nennungen ausser Forbes 2016 nicht belegt.
- Pages-Grenzen sind weiche/Fair-Use-Grenzen, fuer kleine Business-Sites irrelevant.
