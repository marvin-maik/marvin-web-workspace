# Pflichtseiten + Pflichtdateien (statische Projekte, DE)

Stand 2026-07-13. Vollstaendigkeits-Kontrolle vor jedem Launch, KEINE Rechtsberatung:
verbindliche Rechtstexte kommen von Dieter Datenschutz / Anwalt. Diese Liste stellt sicher,
dass nichts fehlt und nichts Totes drinsteht.

## Rechtsseiten (jede Seite, auch Visitenkarten-Projekte)
- [ ] Impressum (§ 5 DDG, seit 2024 statt TMG): von jeder Seite in max. 2 Klicks erreichbar (Footer).
- [ ] Datenschutzerklaerung (Art. 13 DSGVO): ALLE eingesetzten Dienste muessen drinstehen
      (Formspree, Cal.com, Stripe, MailerLite, Cloudflare als Hoster). Bei Dienst-Wechsel mitpflegen.
- [ ] Consent-Banner NUR wenn einwilligungspflichtige Dienste geladen werden (§ 25 TDDDG:
      externe Inhalte, Tracking, Karten). Ohne solche Dienste: weglassen, kein Alibi-Banner.
- [ ] Bildnachweise, wenn Lizenzen (Stock, CC) es verlangen — im Impressum oder eigener Abschnitt.

## Zusaetzlich bei Verkauf (Shop, digitale Produkte, bezahlte Buchung)
- [ ] Widerrufsbelehrung (Pflicht B2C im Fernabsatz) UND **Muster-Widerrufsformular**
      (Anlage 2 EGBGB — eigenstaendige Pflicht, wird am haeufigsten vergessen).
- [ ] Digitale Inhalte: Hinweis auf Erloeschen des Widerrufsrechts bei Sofort-Download,
      Zustimmung im Checkout einholen (Stripe-Checkout-Option aktivieren).
- [ ] AGB (nicht gesetzlich Pflicht, aber Standard bei Shop) — bei uns AGB + Widerruf eine Seite.
- [ ] Preisangaben: Endpreise inkl. MwSt. (PAngV); Kleinunternehmer nach § 19 UStG stattdessen
      mit Hinweis; Versandkosten falls physisch.
- [ ] Button-Loesung: Bestell-Button eindeutig "zahlungspflichtig bestellen" o.ae.
      (Stripe Checkout macht das korrekt, bei Eigenbau pruefen).
- [ ] Streitbeilegung: EU-ODR-Plattform ist seit 20.07.2025 ABGESCHALTET — den alten
      ec.europa.eu/consumers/odr-Link NIE mehr einbauen (toter Pflichtlink = Abmahnrisiko).
      VSBG-Hinweis (§§ 36/37) erst ab mehr als 10 Mitarbeitern Pflicht; der freiwillige Satz
      "weder bereit noch verpflichtet" schadet nicht.
- [ ] BFSG (seit 28.06.2025, B2C-Verkauf): WCAG 2.1 AA (siehe barrierefreiheit-checkliste.md)
      PLUS Informationspflicht: Erklaerung zur Barrierefreiheit (eigene Seite oder
      AGB-Abschnitt) — was ist barrierefrei umgesetzt, bekannte Luecken, Kontakt fuer
      Barriere-Meldungen.

## Technische Pflichtdateien (JEDES Projekt, auch Demos)
- [ ] **404.html** — Regel seit 2026-07-13: Ohne 404.html behandelt Cloudflare Pages das
      Projekt als SPA und liefert fuer jeden unbekannten Pfad die index.html mit Status 200
      (Soft-404, schlecht fuer SEO, verwirrend). Bauweise: Look der Seite, Wegweiser zu den
      Hauptseiten, `meta robots noindex`, und ALLE Pfade root-absolut (`/styles.css`), weil
      die Datei auch fuer tiefe Pfade wie /a/b/c ausgeliefert wird.
      Vorlage: `projekte/routenwerk/404.html`. Nach Deploy verifizieren: Fantasie-Pfad
      muss Status 404 liefern (curl, nicht Browser-Cache; Edge braucht ein paar Sekunden).
- [ ] Favicon-Serie: SVG-data-URI-Icon + apple-touch-icon.png (Standard vorhanden).
- [ ] **_headers** (Projektwurzel, Cloudflare Pages liest sie beim Deploy):
      ```
      /*
        X-Content-Type-Options: nosniff
        Referrer-Policy: strict-origin-when-cross-origin
        X-Frame-Options: DENY
        Permissions-Policy: camera=(), microphone=(), geolocation=()
      /fonts/*
        Cache-Control: public, max-age=31536000, immutable
      ```
      CSP nur mit Bedacht: Single-File-Mockups haben Inline-JS/CSS, ein strikter CSP
      bricht sie. HSTS uebers Cloudflare-Dashboard, nicht per Header-Datei.
- [ ] Demos auf pages.dev: `X-Robots-Tag: noindex` in _headers auf `/*` — Demos sollen
      nicht in Google landen und spaeter nicht gegen die Kundendomain ranken.

## Launch auf finaler Domain (zusaetzlich zu oben)
- [ ] robots.txt mit `Sitemap:`-Zeile (absolute URL).
- [ ] sitemap.xml: nur indexierbare Seiten, absolute URLs der finalen Domain
      (danke.html, 404.html und noindex-Seiten raus).
- [ ] Je Seite: canonical, og:url, og:image (1200x630) — die TODO-Kommentare dafuer
      stehen schon in den Builds, vor Launch aufloesen.
- [ ] Custom Domain: www-auf-Apex-Redirect (CF-Dashboard/Bulk Redirects), HSTS aktivieren.
- [ ] Optional, 2 Minuten, wirkt professionell: `/.well-known/security.txt`.

## Bewusst KEINE Pflicht (nicht aufblasen)
- webmanifest/PWA, humans.txt, RSS: nur bei echtem Bedarf.
- Cookie-Banner ohne einwilligungspflichtige Dienste: weglassen ist die bessere Loesung.

## Status Bestandsprojekte (Stand 2026-07-14)
| Punkt                      | routenwerk (Demo)             | marvin-web (live)        |
|----------------------------|-------------------------------|--------------------------|
| 404.html                   | JA (2026-07-13)               | JA (2026-07-14)          |
| _headers                   | JA (2026-07-14)               | JA (2026-07-14)          |
| noindex (Demo)             | JA (2026-07-14, X-Robots-Tag) | entfaellt (echte Seite)  |
| robots.txt + sitemap.xml   | vorhanden, via noindex moot   | FEHLT (Gap 5, offen)     |
| Muster-Widerrufsformular   | FEHLT in Demo-AGB             | entfaellt (kein Shop)    |
| og:image/canonical         | TODO-Kommentare offen         | pruefen                  |

Live verifiziert 2026-07-14 (curl mit Cache-Buster): marvin-web Deploy 97d495ac, routenwerk Deploy fb533d2e.
- Security-Header (nosniff, Referrer-Policy, X-Frame-Options: DENY, Permissions-Policy) auf beiden Seiten aktiv; /fonts/* immutable, max-age 1 Jahr.
- Tiefer Fantasie-Pfad liefert echten Status 404 + eigene 404-Seite (Soft-404 weg) auf beiden Seiten.
- routenwerk: X-Robots-Tag noindex auf allen Antworten (auch 404). Leak-Gegenprobe handoff/DEMO-README/freigabe -> alle 404 (nicht deployt, Staging-Excludes greifen).
- Offen (bewusst nicht Teil dieses Durchgangs): Gap 5 = robots.txt + sitemap.xml fuer marvin-web (Domain-Frage: pages.dev vs. finale Domain vor dem Anlegen klaeren).
