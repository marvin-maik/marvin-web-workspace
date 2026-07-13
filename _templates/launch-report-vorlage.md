# Launch-Report — VORLAGE (kundentauglich)

> INTERN — vor Versand loeschen:
> - Nur mit Belegen aus der abgearbeiteten `launch-checkliste.md` fuellen. Kein Wert ohne Messung.
> - Nicht Gemessenes ehrlich weglassen oder unter "Empfehlungen" einordnen. NIE raten.
> - Anti-Slop gilt: keine Gedankenstriche, keine Floskeln, konkrete Zahlen.
> - Ansprache Sie (bei Du-Kunden anpassen). Als PDF ausgeben (1-2 Seiten), Dateiname:
>   `launch-report-<projekt>-<datum>.pdf`. Ablage: `projekte/<name>/launch/`.

---

# Launch-Report: [DOMAIN]

**Projekt:** [KUNDENNAME] — [PROJEKTBEZEICHNUNG]
**Geprüft am:** [DATUM] (Stand bei Übergabe)
**Geprüft von:** MARVIN.WEB

## Zusammenfassung

Ihre Website ist seit dem [LAUNCH-DATUM] unter [DOMAIN] erreichbar. Vor der Übergabe wurde
sie auf Technik, Datenschutz, Auffindbarkeit, Barrierefreiheit und Geschwindigkeit geprüft.
Dieses Dokument zeigt die Ergebnisse. Jeder Wert wurde am [DATUM] auf der Live-Website
gemessen, nicht geschätzt.

## Ergebnis-Überblick

| Bereich | Ergebnis | Messwert |
|---|---|---|
| Verschlüsselung (SSL) | [OK] | Zertifikat gültig, automatische Umleitung auf https |
| Datenschutz (DSGVO) | [OK] | [X] externe Verbindungen: [keine / Liste] |
| Auffindbarkeit (SEO-Grundlagen) | [OK] | Sitemap eingereicht, alle Seiten indexierbar |
| Barrierefreiheit | [OK] | Ziel WCAG 2.1 AA, Lighthouse [XX]/100 |
| Geschwindigkeit (mobil) | [OK] | Lighthouse Performance [XX]/100, Startseite [XX] KB |

## 1. Technik und Sicherheit

- Die Website ist ausschließlich verschlüsselt (https) erreichbar. Unverschlüsselte Aufrufe
  werden automatisch umgeleitet.
- [www/non-www-Regelung in einem Satz]
- Das Kontaktformular wurde am [DATUM] testweise abgesendet und ist angekommen. Es ist mit
  einem unsichtbaren Spam-Schutz ausgestattet, ohne Captcha und ohne externe Dienste.

**Was das für Sie bedeutet:** Besucher sehen keine Sicherheitswarnungen, und Anfragen über
das Formular kommen zuverlässig bei Ihnen an.

## 2. Datenschutz (DSGVO)

- Beim Aufruf der Website werden [keine] Daten an Drittserver übertragen. Schriften und alle
  Dateien liegen auf dem eigenen Hosting. [Falls Embeds: Ausnahme + Consent-Lösung nennen.]
- Impressum und Datenschutzerklärung sind von jeder Seite erreichbar (Quelle: [Dieter Datenschutz]).
- Formular-Daten laufen über [Formspree] mit Auftragsverarbeitungsvertrag.

**Was das für Sie bedeutet:** Die häufigste Abmahnfalle deutscher Websites (Google-Fonts vom
US-Server) ist bei Ihnen ausgeschlossen.

## 3. Auffindbarkeit (SEO-Grundlagen)

- Jede Seite hat einen eigenen Titel und eine Beschreibung für Google.
- Die Sitemap wurde bei der Google Search Console eingereicht am [DATUM].
- Die Website erlaubt Suchmaschinen die Aufnahme in den Index. [Hinweis: Indexierung dauert
  erfahrungsgemäß einige Tage bis Wochen, Nachkontrolle folgt.]

**Was das für Sie bedeutet:** Die technischen Voraussetzungen, damit Google Ihre Seite findet
und korrekt anzeigt, sind erfüllt.

## 4. Barrierefreiheit

- Geprüft gegen WCAG 2.1 AA (der Standard, den das Barrierefreiheitsstärkungsgesetz zugrunde legt).
- Alle Farbkontraste wurden rechnerisch geprüft, die Seite ist vollständig per Tastatur bedienbar,
  Bilder haben Alternativtexte.
- Lighthouse-Barrierefreiheit: [XX]/100. [Abweichungen kurz erklären.]

**Was das für Sie bedeutet:** Ihre Website schließt weniger Besucher aus als der Durchschnitt
und ist auf die geltenden Anforderungen vorbereitet.

## 5. Geschwindigkeit

- Lighthouse (Google-Messverfahren), mobil, gemessen am [DATUM]:
  Performance [XX]/100, Best Practices [XX]/100, SEO [XX]/100.
- Die Startseite überträgt [XX] KB. [Einordnung: typische Baukasten-Seiten liegen beim
  Zehnfachen — nur schreiben, wenn der eigene Wert das hergibt.]

**Was das für Sie bedeutet:** Kurze Ladezeiten halten Besucher auf der Seite, besonders
auf dem Handy, und Google bewertet schnelle Seiten besser.

## Empfehlungen und offene Punkte

- [Nur echte Punkte aus der Checkliste, z.B. "Google-Unternehmensprofil mit der neuen
  Domain verknüpfen". Keine kuenstlichen Punkte erfinden.]

## Geltungsbereich

Dieser Report ist eine Momentaufnahme vom [DATUM] und dokumentiert den Zustand bei Übergabe.
Spätere Änderungen an Inhalten oder Technik sind nicht abgedeckt. Die Angaben zum Datenschutz
sind eine technische Prüfung, keine Rechtsberatung. Wenn Sie möchten, dass diese Werte auch
in Zukunft regelmäßig geprüft werden, sprechen Sie mich auf die Website-Betreuung an.

**Kontakt:** [MARVIN KONTAKTDATEN]
