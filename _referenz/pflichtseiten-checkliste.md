# Pflichtseiten + Pflichtdateien (statische Projekte, DE)

Stand 2026-07-14. Vollstaendigkeits-Kontrolle vor jedem Launch, KEINE Rechtsberatung:
verbindliche Rechtstexte kommen von Dieter Datenschutz / Anwalt. Diese Liste stellt sicher,
dass nichts fehlt und nichts Totes drinsteht.

## Rechtsseiten (jede Seite, auch Visitenkarten-Projekte)
- [ ] Impressum (§ 5 DDG, seit 2024 statt TMG): von jeder Seite in max. 2 Klicks erreichbar (Footer).
- [ ] Datenschutzerklaerung (Art. 13 DSGVO): ALLE eingesetzten Dienste muessen drinstehen
      (Formspree, Cal.com/Cal.eu, Stripe, MailerLite, Cloudflare als Hoster, **WhatsApp** falls
      als Kontaktkanal verlinkt = Meta, US-Transfer). Bei Dienst-Wechsel mitpflegen. Merke: ein
      `wa.me`-Link uebertraegt erst beim Klick Daten, aber sobald jemand schreibt, verarbeitest
      du seine Daten ueber WhatsApp -> gehoert als Kontaktweg in die Erklaerung.
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
- [ ] Favicon-Serie, drei Teile, alle **root-absolut** verlinkt (`/apple-touch-icon.png`),
      damit auch die fuer Tiefpfade ausgelieferte 404.html sie findet:
      (1) SVG-data-URI-Icon `rel="icon"` (modern, scharf in jeder Groesse),
      (2) `apple-touch-icon.png` 180x180, deckend (iOS ignoriert SVG-Favicons am Homescreen —
          ohne diese Datei bleibt das Homescreen-Icon leer),
      (3) `favicon-32.png` als Raster-Fallback.
      **Datei-Existenz pruefen, nicht nur den Link** (`ls apple-touch-icon.png favicon-32.png`):
      Bis 2026-07-14 stand hier faelschlich "Standard vorhanden", real fehlte die Datei in
      jedem Projekt. Generierung: `_referenz/integrations.md` Abschnitt "OG-Bild + App-Icon".
- [ ] **danke.html** bei jedem Projekt MIT Formular: eigene Danke-Seite (noindex, im Look der
      Seite, Reaktionszeit-Versprechen + Spam-Ordner-Hinweis) statt Formspree-Standardseite;
      im Formular `<input type="hidden" name="_next" value="https://DOMAIN/danke.html">`.
      Ohne _next landet der Interessent im emotionalen Hoch-Moment auf einer fremden Seite.
- [ ] **OG-Bild `img/og-default.png` (1200x630)** + je Seite `og:image`/`og:url`/
      `og:image:width|height|alt` + `twitter:card=summary_large_image`. NICHT erst zum Launch:
      sonst zeigt jeder geteilte Link (WhatsApp/Mail/LinkedIn) eine leere Vorschau. Jetzt schon
      mit absoluter pages.dev-URL setzen, beim Domain-Umzug die absoluten URLs swappen.
- [ ] **JSON-LD Schema** auf der Startseite (`ProfessionalService`/`LocalBusiness`): NAP
      (Name/Adresse/Telefon) 1:1 aus dem Impressum, Oeffnungszeiten, Angebot/Preis. Bringt
      Google Rich Results und macht die Seite in AI-Suchen (ChatGPT, Perplexity) als Entitaet
      auffindbar. Valide pruefen (`json.loads`), nie nach Augenmass. Vorlage in integrations.md.
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
- [ ] **noindex ENTFERNEN + live NACHMESSEN (Vorfall marvin-web 2026-07-21):** Das
      `X-Robots-Tag: noindex` auf `/*` aus der Demo-Phase (siehe oben) gilt fuer ALLE
      Hostnamen des Pages-Projekts — beim Domain-Launch die Zeile aus `_headers` loeschen,
      sonst bleibt auch die Live-Domain unsichtbar fuer Google. Ein Kommentar in der Datei
      reicht NICHT als Erinnerung (wurde beim marvin-web-Launch 2 Tage lang uebersehen,
      erst per PageSpeed aufgefallen). Darum Pflicht-Gegenprobe nach dem Launch-Deploy:
      `curl -sI https://DOMAIN/ | grep -i x-robots` muss LEER sein (nur bewusste
      noindex-Pfade wie /umzug oder /danke duerfen ihn behalten. NB: Hash-Deployment-URLs
      `<hash>.*.pages.dev` zeigen IMMER noindex — setzt CF Pages automatisch fuer Previews,
      kein Fehler; die Gegenprobe gilt der Live-Domain). Danach in der Search
      Console Indexierung der Startseite anstossen. pages.dev muss danach nicht erneut
      genoindext werden: canonical zeigt auf die finale Domain.
- [ ] robots.txt mit `Sitemap:`-Zeile (absolute URL). **CF-Zone-Falle (verifiziert marvin-web
      2026-07-19):** Auf einer Cloudflare-**Zone** (Custom-Domain) MERGT Cloudflare seine
      managed/AI-robots.txt mit der deployten Datei — die eigene `Sitemap:`-Zeile + `Allow: /`
      kommen durch, ABER CF setzt per Default `Disallow: /` fuer AI-Crawler (GPTBot, ClaudeBot,
      Google-Extended, CCBot, Bytespider, Amazonbot, Applebot-Extended, meta-externalagent).
      Auf `*.pages.dev` (keine Zone) wird nur die deployte Datei ausgeliefert. Also IMMER die
      Zone-Ausgabe pruefen (`curl https://DOMAIN/robots.txt`), nicht nur die Deployment-URL; und
      die AI-Crawler-Policy bewusst im CF-Dashboard (AI Crawl Control) entscheiden — Blocken kann
      der AI-Such-Auffindbarkeit (ChatGPT/Perplexity) widersprechen, die JSON-LD gerade anstrebt.
- [ ] sitemap.xml: nur indexierbare Seiten, absolute URLs der finalen Domain
      (danke.html, 404.html und noindex-Seiten raus).
- [ ] Je Seite: canonical ergaenzen; og:url/og:image + JSON-LD stehen schon aus dem Build,
      aber mit absoluter pages.dev-URL — beim Domain-Umzug auf die finale Domain swappen
      (im Build steht dafuer ein `DOMAIN-SWAP`-Kommentar). Auch `_next` im Formular umstellen.
- [ ] Custom Domain: www-auf-Apex-Redirect (CF-Dashboard/Bulk Redirects) als echter
      **301** (permanent), nicht 302 — sonst wird Linkjuice/Ranking nicht auf die
      kanonische Domain uebertragen. HSTS aktivieren.
- [ ] **301-Redirects bei Relaunch/URL-Aenderung**: wenn sich bei einem bestehenden
      Projekt Pfade aendern (Domain-Wechsel pages.dev -> Kundendomain mit neuer
      Sitemap-Struktur, Seiten umbenannt/zusammengelegt), alte URL -> neue URL per
      301 in `_redirects` (Cloudflare-Pages-Syntax: `/alter-pfad /neuer-pfad 301`)
      weiterleiten. Sonst verlieren indexierte alte URLs Ranking + Nutzer landen auf 404.
- [ ] Optional, 2 Minuten, wirkt professionell: `/.well-known/security.txt`.

## Betrieb / Monitoring (direkt nach Launch einrichten, dann laeuft es still)
- [ ] **Analytics: Cloudflare Web Analytics** (cookielos, kein Consent-Banner noetig, keine
      US-Uebertragung). ACHTUNG: `*.pages.dev` ist keine CF-Zone -> keine Auto-Einbindung,
      Beacon-Snippet + Token noetig (auf jeder Seite vor `</body>`); Auto-Injektion erst auf
      der echten Kundendomain. Ohne Zaehler baut man blind. Setup: `_referenz/integrations.md`.
- [ ] **Uptime-/Deploy-Monitor** (UptimeRobot free, 5-Min-Intervall, Mail-Alert). WICHTIG als
      **Keyword-Monitor**: prueft, ob eine Marker-Phrase (z.B. der `<title>` oder Firmenname)
      im HTML steht — faengt so auch einen kaputten/leeren Deploy, nicht nur den Totalausfall.
      Ein stiller Ausfall ist fuer ein Studio, das Verfuegbarkeit verkauft, peinlich. Setup: integrations.md.

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
| Favicon-Serie (echte Datei)| apple-touch DA+verlinkt, favicon-32 fehlt | JA (2026-07-14: apple-touch-icon.png 180 + favicon-32.png) |
| og:image (1200x630)        | Unterseiten JA; Startseite 2026-07-14 nachgezogen (Deploy offen) | JA (2026-07-14: og-default.png + og/twitter auf 5 Seiten) |
| danke.html + _next         | entfaellt (kein Formular hier)| JA (2026-07-14)          |
| JSON-LD Schema             | FEHLT                         | JA (2026-07-14: ProfessionalService, Startseite) |
| canonical                  | offen                         | offen (Domain-Swap)      |
| Analytics (CF Web Analytics)| offen                        | JA (2026-07-14: registriert + Beacon im Code, Daten ab Deploy) |
| Uptime-Monitor             | offen                         | JA (2026-07-14: UptimeRobot Keyword-Monitor "MARVIN.WEB", 5-Min, live) |

Live verifiziert 2026-07-14 (curl mit Cache-Buster): marvin-web Deploy 97d495ac, routenwerk Deploy fb533d2e.
- Security-Header (nosniff, Referrer-Policy, X-Frame-Options: DENY, Permissions-Policy) auf beiden Seiten aktiv; /fonts/* immutable, max-age 1 Jahr.
- Tiefer Fantasie-Pfad liefert echten Status 404 + eigene 404-Seite (Soft-404 weg) auf beiden Seiten.
- routenwerk: X-Robots-Tag noindex auf allen Antworten (auch 404). Leak-Gegenprobe handoff/DEMO-README/freigabe -> alle 404 (nicht deployt, Staging-Excludes greifen).
- Offen (bewusst nicht Teil dieses Durchgangs): Gap 5 = robots.txt + sitemap.xml fuer marvin-web (Domain-Frage: pages.dev vs. finale Domain vor dem Anlegen klaeren).
