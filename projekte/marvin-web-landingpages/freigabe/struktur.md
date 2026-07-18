# Struktur & Texte zur Freigabe: 4 Landingpages

Projekt: landingpages (Markenname = Platzhalter [MARKE], Rebrand laeuft).
Stand: 2026-07-16. Wireframes: `freigabe/index.html` (Uebersicht) -> 4 Seiten.

Getroffene Arbeitsannahmen (alle im Wireframe gelb markiert, Marvin entscheidet):
- **Ansprache Sie** (Empfehlung wegen Arztpraxen; bestehende Site nutzt Du).
- **Preise wie marvin-web**: Onepager 990 EUR, Business-Site 1.990 EUR, Betreuung ab
  49 EUR/Monat (1. Monat inklusive), Aenderungsrunde 90 EUR.
- **Versprechen wie marvin-web**: 5 Werktage, Texte inklusive, Festpreis.
- **CTAs ohne Drittanbieter**: WhatsApp (wa.me/4915906453169) primaer + tel:. Formular
  erst spaeter via Cloudflare Pages Function (Zustellweg offen), im Wireframe nur als Slot.
- **routenwerk.pages.dev als Demo-Beleg** (PageSpeed 98, echt gemessen): Freigabe offen.

---

## Gemeinsames Skelett der 3 Ad-LPs (kalt, Social Ads)

Kein Menue, ein Ziel (WhatsApp/Anruf). Sektionen 4 bis 7 sind auf allen drei LPs identisch,
nur Hero + Problem + Beweis (1 bis 3) wechseln je Angle. Message Match: H1 muss spaeter den
Ad-Text spiegeln (Ads existieren noch nicht, beim Ad-Texten H1 gegenpruefen).

| # | Sektion | Job (Kundenfrage) | Hormozi-Hebel |
|---|---|---|---|
| 1 | HERO | Bin ich hier richtig, was gibt es, warum jetzt (5-Sek-Test) | Dream Outcome |
| 2 | PROBLEM | Erkennt mein Problem jemand (Angle-spezifisch) | Schmerz aktivieren |
| 3 | BEWEIS | Warum soll ich das glauben | Likelihood |
| 4 | PAKETE | Was kostet es konkret | Risiko runter (Festpreis) |
| 5 | ABLAUF | Wie viel Arbeit habe ich damit | Time Delay + Effort runter |
| 6 | FAQ | Meine Einwaende (4 Stueck, angle-passend sortiert) | Likelihood |
| 7 | CTA-BAND | Was tue ich jetzt (ein Klick) | |
| 8 | FOOTER-MINIMAL | Impressum + Datenschutz (Pflicht auch ohne Menue) | |

## LP 1: Kosten (`lp-kosten.html`)

- H1: **"Sie zahlen jeden Monat fuer eine Website, die sich nie aendert."**
  Subline: Einmal bezahlen, dauerhaft 0 EUR Plattformkosten. Handgebaut, zum Festpreis.
- Problem: Abo-Rechnung vorgerechnet (25 EUR/Monat = 600 EUR in 2 Jahren, Seite gehoert
  Ihnen trotzdem nicht). Ehrlichkeits-Anker direkt daneben: Domain 5 bis 15 EUR/Jahr
  bleibt, Pflege optional per Pauschale.
- Beweis: Ersparnis-Zahl "bis zu 552 EUR in 2 Jahren" als Beispielrechnung mit Fussnote
  (Webflow-Listenpreise 13.05.2026, USD, EUR gerundet).
- **Highlight-Kandidat (Fundus Muster 5, Stats-Band/Count-up):** die Ersparnis-Zahl
  zaehlt beim Scrollen hoch. Im Wireframe klickbar angedeutet.

## LP 2: Eigentum (`lp-eigentum.html`)

- H1: **"Ihre Website gehoert Ihnen nicht."**
  Subline: Beim Baukasten mieten Sie. Hier bekommen Sie den Code, komplett.
- Problem: Lock-in-Selbsttest (3 Fragen: Koennen Sie umziehen? Was kostet der Export?
  Was passiert bei Kuendigung?). Generisch "viele Baukaesten", kein Bashing.
- Beweis: Uebergabe-Liste (alle Dateien, Bilder, Texte, Zugaenge; laeuft bei jedem Hoster;
  jeder Entwickler kann uebernehmen) + Sektion "Wenn es [MARKE] morgen nicht mehr gibt"
  (Einwand positiv gewendet: Seite laeuft weiter).
- **Highlight-Kandidat (Fundus Muster 5e, Beleg-Stempel):** "GEHOERT IHNEN. KOMPLETT."
  als gestempelter Abdruck an der Uebergabe-Liste. EINE Stelle.

## LP 3: Speed (`lp-speed.html`)

- H1: **"Diese Seite war fertig, bevor Sie geblinzelt haben."**
  Subline: Ohne Baukasten-Ballast laedt eine Website sofort. Ihre kann das auch.
- Problem: Warum viele Seiten langsam sind: Baukaesten laden System-Skripte, Zusatz-CSS
  und Telemetrie, auch bei einfachen Seiten. (VERBOTEN: Faktor-Claims, statisch vs. dynamisch.)
- Beweis: "Nur der Code, der gebraucht wird" + Google-Kontext weich (Ladezeit ist
  Ranking-Faktor, Richtwert LCP unter 2,5 s) + PageSpeed 98 an echtem Projekt gemessen
  (routenwerk, Freigabe offen).
- **Highlight-Kandidat (neues Muster, Ladebalken-Rennen):** zwei Balken laufen auf Klick
  los, "mit Ballast" vs. "ohne Ballast". CSS-Animation, reduced-motion: statisch.
  Im Wireframe klickbar.

## LP 4: Angebots-Seite (`angebot.html`, warm, WhatsApp-Versand, mobile-first)

| # | Sektion | Job |
|---|---|---|
| 1 | KOPF persoenlich | Danke fuers Gespraech, hier steht alles schwarz auf weiss. Foto-Slot Marvin |
| 2 | ANGEBOT AUF EINEN BLICK | Pakete + Preise (990 / 1.990 / Shop auf Anfrage) + Betreuung 49 |
| 3 | KOSTENVERGLEICH | Tabelle Beispiele 1 bis 3 (NUR diese), Fussnote Stand/Kurs, Zeile "Pflege" ehrlich als Pauschale |
| 4 | ABLAUF | 5 Schritte inkl. Zufriedenheits-Mechanik (Freigabe vor Bau, 1 Korrekturrunde, live erst nach Abnahme) |
| 5 | WAS IHNEN GEHOERT | Eigentums-Zusage als Liste |
| 6 | FAQ | 6 Einwaende, inkl. KI-Frage (NUR hier, reaktiv) und Umzugs-Frage (Prozess offen) |
| 7 | CTA | Einfach hier antworten (WhatsApp) + Anruf |
| 8 | FOOTER-MINIMAL | Impressum + Datenschutz |

---

## Offene Fragen an Marvin (gelb im Wireframe)

1. Sie oder Du?
2. Preise/Versprechen von marvin-web uebernehmen (990 / 1.990 / 49 / 90 / 5 Werktage / Texte inklusive)?
3. routenwerk als Beleg zeigen (Speed-LP + Angebots-Seite)?
4. Umzugs-/Abloese-Prozess definieren (Domain-Transfer, Inhalte, Kuendigungshilfe): wichtigster offener Einwand.
5. "Der Code gehoert Ihnen" als vertragliche Zusage ins Angebot?
6. Formular ja/nein (Zustellweg der Pages Function), oder nur WhatsApp + Telefon?
7. Angebots-Seite generisch oder je Interessent personalisiert?
8. Highlights: Count-up (Kosten), Stempel (Eigentum), Ladebalken-Rennen (Speed): welche ja/nein?
9. Domain-Strategie (Subpfade vs. eigene LP-Domains) haengt am Rebrand, blockiert Wireframes nicht.

Naechster Schritt nach Freigabe: design-scout (Tokens, eine Familie fuer 4 Seiten), dann Build.
