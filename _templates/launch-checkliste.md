# Launch-Checkliste (Gate 2: Live-URL)

> Direkt nach Go-Live auf der ECHTEN Domain abarbeiten. Vorher nach
> `projekte/<name>/launch/launch-checkliste.md` kopieren.
> Gate 1 (qa-polish auf der Datei) muss bestanden sein — diese Liste prueft
> nur, was NUR live pruefbar ist, plus Stichproben gegen Regressionen.
>
> **Eiserne Regel: Ein Haken ohne Beleg gilt als NICHT geprueft.**
> Beleg = Tool-Output, Messwert, Screenshot-Pfad oder curl-Auszug. Nie "sieht gut aus".
> Die Belege sind danach der Rohstoff fuer den Launch-Report (`_templates/launch-report-vorlage.md`).

Projekt: __________   Live-URL: __________   Datum: __________

## A. Erreichbarkeit & SSL

- [ ] https://-Aufruf laedt, Zertifikat gueltig. Beleg (curl -I): __________
- [ ] http:// leitet auf https:// um (301). Beleg: __________
- [ ] www/non-www: EINE Variante fuehrt, die andere leitet um. Beleg: __________
- [ ] 404-Verhalten geprueft (Fantasie-URL aufrufen). Beleg: __________
- [ ] Favicon + og:image laden auf der Live-URL (nicht nur lokal). Beleg: __________

## B. DSGVO (live)

- [ ] ALLE externen Requests der Live-Seite aufgelistet (Browser-Netzwerk-Tab /
      read_network_requests, alle Seiten durchklicken). Liste: __________
- [ ] Fonts laden vom eigenen Origin, kein fonts.googleapis/gstatic. Beleg: __________
- [ ] Impressum + Datenschutz erreichbar, final (Dieter), keine Platzhalter. Beleg: __________
- [ ] Formular-Endpoint = Produktiv-Endpoint (kein Test-/Platzhalter-Ziel), Formspree-AVV
      vorhanden. Beleg: __________
- [ ] Embeds (Cal/Maps): Consent-Loesung aktiv oder bewusst dokumentiert. Beleg: __________

## C. SEO (live)

- [ ] robots.txt erlaubt Indexierung — KEIN "Disallow: /" aus Staging uebrig. Beleg: __________
- [ ] sitemap.xml erreichbar; bei Google Search Console eingereicht. Beleg: __________
- [ ] title + meta description je Seite gesetzt (Live-Quelltext, nicht lokale Datei). Beleg: __________
- [ ] lang="de", canonical, OG-Tags im Live-Quelltext. Beleg: __________

## D. Funktion (echte Interaktion, nicht Sichtpruefung)

- [ ] Formular auf der Live-Domain ECHT abgesendet; Mail angekommen; Danke-Verhalten ok.
      Beleg (Zeitstempel Mail): __________
- [ ] Botschutz aktiv: Honeypot-Feld vorhanden, Zeit-Falle greift. Beleg: __________
- [ ] Cal-Link oeffnet den richtigen Kalender. Beleg: __________
- [ ] tel:/mailto-Links korrekt (Nummer stimmt!). Beleg: __________
- [ ] Alle internen Links + Bilder laden (keine 404 im Netzwerk-Tab). Beleg: __________

## E. Performance (live, mobil)

- [ ] Lighthouse auf Live-URL, MOBIL: Performance ___ / A11y ___ / Best Practices ___ / SEO ___
      Beleg (Report-Pfad oder PSI-Link): __________
- [ ] Startseiten-Gewicht (uebertragen laut Netzwerk-Tab): __________ KB

## F. Barrierefreiheit (Stichprobe — Tiefe war Gate 1)

- [ ] Tastatur-Durchgang auf der Live-Seite: alles erreichbar, Fokus sichtbar, Skip-Link. Beleg: __________
- [ ] Lighthouse-A11y-Score oben notiert; Befunde < 100 kurz bewerten. Beleg: __________
- [ ] Bei Abweichung zur QA-Phase: `_referenz/barrierefreiheit-checkliste.md` fuer den Punkt ziehen.

## G. Menschen-Check (Marvin, 5 Min, echtes Handy)

- [ ] Als Kunde durchgeklickt (nicht als Bauer): Startseite -> Leistung -> Kontakt.
- [ ] Telefonnummer im Header angerufen.
- [ ] Startseiten-Copy laut gelesen (stolpert nichts?).
- Auffaelligkeiten: __________

## Abschluss

1. Belege in `_templates/launch-report-vorlage.md` uebertragen -> Report an Kunden.
2. PROJEKTE.md aktualisieren.
3. **Nachkontrolle in 2-4 Wochen eintragen** (Datum: __________): site:-Abfrage bei Google,
   Formular-Testsubmit, Sichtpruefung ob Kunde etwas verschlimmbessert hat. Guter Anlass,
   sich zu melden (Wartungs-Gespraech).
