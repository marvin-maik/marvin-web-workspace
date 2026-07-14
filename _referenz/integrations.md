# Integrations-Snippets (geprueft, projektuebergreifend)

Prinzip: Snippets passen zum Token-System (keine hartcodierten Farben — Klassen der jeweiligen
Seite nutzen). Platzhalter IMMER in GROSSBUCHSTABEN mit Unterstrich, damit qa-polish sie findet.

## 1. Formspree (Kontaktformular)

Einrichtung: formspree.io -> New Form -> ID kopieren (Format `mabcdefg`). Free: 50 Mails/Monat.

```html
<form action="https://formspree.io/f/FORMSPREE_ID" method="POST">
  <label for="name">Name</label>
  <input id="name" type="text" name="name" autocomplete="name" required>
  <label for="email">E-Mail</label>
  <input id="email" type="email" name="email" autocomplete="email" required>
  <label for="msg">Nachricht</label>
  <textarea id="msg" name="nachricht" required></textarea>
  <!-- Spam-Honeypot: fuer Menschen unsichtbar, Bots fuellen es aus -> Formspree verwirft -->
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
  <!-- Betreff in Marvins Postfach -->
  <input type="hidden" name="_subject" value="Anfrage ueber PROJEKTNAME">
  <button type="submit">Nachricht senden</button>
</form>
```

PFLICHT Danke-Seite (nicht optional): `<input type="hidden" name="_next" value="https://DOMAIN/danke.html">`.
Ohne `_next` landet der Interessent auf Formsprees Standardseite statt bei dir. `danke.html` im
Look der Seite bauen (noindex, Reaktionszeit-Versprechen + Spam-Ordner-Hinweis, Telefon fuer
Dringendes). Vor Domain-Launch die absolute URL swappen. Vorlage: `projekte/marvin-web/danke.html`.

## 2. Cal.eu (Terminbuchung) — bewusst die EU-Variante von Cal.com

Einrichtung: **app.cal.eu** (EU-Hosting, DSGVO-freundlicher als cal.com!) -> Event Type
anlegen -> Public-Link: `cal.eu/<username>/<slug>`. Praxis-Erfahrung marvin-web:
Event-Titel kundenfreundlich benennen ("Website-Analyse (30 Min)"), Profilname pruefen.
DSGVO-freundlichste Einbindung: schlichter Link/Button (kein Embed = kein Consent noetig,
Daten fliessen erst bei Klick):

```html
<a href="https://cal.eu/CAL_USERNAME/30min" target="_blank" rel="noopener" class="btn">
  Termin buchen
</a>
```

Inline-Embed (laedt externes Script -> nur NACH Consent oder mit Hinweis einsetzen):

```html
<div id="cal-inline" style="width:100%;height:640px;overflow:auto"></div>
<script src="https://app.cal.eu/embed/embed.js" async
  onload='Cal("inline",{elementOrSelector:"#cal-inline",calLink:"CAL_USERNAME/analyse-30min"})'></script>
```

Embed konsequent von **app.cal.eu** laden (nicht app.cal.com), damit es zur EU-Hosting-Begruendung
oben passt. Der schlichte Link-Button bleibt ohnehin die datensparsame Erstwahl.

## 3. Google Maps (Anfahrt)

Datensparsame Standard-Variante (kein Iframe = kein Google-Request vor Klick):

```html
<a href="https://www.google.com/maps/search/?api=1&query=FIRMA+STRASSE+PLZ+ORT"
   target="_blank" rel="noopener" class="btn">Route in Google Maps planen</a>
```

Iframe nur wenn Kunde es explizit will (Consent-pflichtig, hinter Dieter-Consent laden):

```html
<iframe src="https://www.google.com/maps?q=FIRMA+ADRESSE&output=embed"
  width="100%" height="380" style="border:0" loading="lazy"
  referrerpolicy="no-referrer-when-downgrade" title="Anfahrt zu FIRMA"></iframe>
```

## 4. Dieter Datenschutz (Rechtstexte + Consent)

Nach Check-up im Dieter-Dashboard: Integrations-Snippet kopieren (laedt von DE-Servern,
aktualisiert sich selbst). Einbau vor `</body>`; Impressum/Datenschutz als eigene Seiten
oder Dieter-Hosted-Links im Footer verlinken. Merken: Dieter = Datenschutz, NICHT Shop-Recht
(AGB/Widerruf bei Shops -> Haendlerbund/IT-Recht Kanzlei).

```html
<!-- Dieter Consent + Rechtstexte: Snippet aus Dashboard einfuegen -->
<script src="DIETER_SNIPPET_URL" async></script>
```

## 5. Standard-<head> (jede Seite)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FIRMA · NUTZENVERSPRECHEN · ORT</title>
<meta name="description" content="MAX 155 ZEICHEN, konkreter Nutzen + Ort.">
<meta property="og:title" content="FIRMA · NUTZENVERSPRECHEN">
<meta property="og:description" content="WIE META DESCRIPTION">
<meta property="og:type" content="website">
<meta property="og:url" content="https://DOMAIN/PFAD">
<meta property="og:site_name" content="FIRMA">
<meta property="og:locale" content="de_DE">
<meta property="og:image" content="https://DOMAIN/img/og-default.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="FIRMA, NUTZENVERSPRECHEN">
<meta name="twitter:card" content="summary_large_image">
<!-- DOMAIN-SWAP vor Launch: absolute pages.dev-URLs (og:url, og:image, JSON-LD) -> finale Domain; canonical ergaenzen -->
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23161412'/><rect y='78' width='100' height='22' fill='%23e8440a'/></svg>">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

Icon-PNGs root-absolut (`/...`), damit die fuer Tiefpfade ausgelieferte 404.html sie findet.
`og:image`/`og:url` absolut mit pages.dev-URL setzen (nicht relativ — Crawler brauchen absolute
URLs), beim Domain-Umzug swappen. JSON-LD zusaetzlich vor `</head>` (Abschnitt 8). `lang="de"`
am html-Tag nicht vergessen.

## 6. Fonts selbst hosten (DSGVO-Pflicht vor Launch)

1. Font von fontshare.com / gwfh.mranftl.com (google-webfonts-helper) als woff2 laden
2. In `fonts/` neben die index.html, dann:

```css
@font-face{font-family:'FONTNAME';src:url('fonts/DATEI.woff2') format('woff2');
  font-weight:600;font-display:swap;}
```

Google-Fonts-CDN-Links (`fonts.googleapis.com`) duerfen NUR in Mockups vorkommen, nie live.

## 7. OG-Bild + App-Icon generieren (Chrome headless + sips)

Warum echt rendern: resvg (svg-zu-png.mjs) laedt keine Custom-Fonts -> Clash Display fehlt.
Darum die Bild-Quelle als HTML mit den echten woff2 bauen und mit headless Chrome schiessen.
Quellen in den Projektordner mit `_`-Praefix legen (`_og-src.html`, `_icon-src.html` -> nie deployed).

OG-Bild = ink-Grund, orange gestrichelte Baseline als Signature (aus styles.css), Wortmarke +
eine konkrete Headline (kein Floskel-Claim). App-Icon = ink-Quadrat, "M." in Clash Display,
orange Baseline (konsistent zum Favicon), DECKEND (kein Alpha, iOS legt es auf eine Kachel).

```bash
cd projekte/<name>
python3 -m http.server 8791 >/dev/null 2>&1 &     # damit die Schrift laedt
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
# OG-Bild 1200x630 (2x rendern, dann exakt runterskalieren = schaerfere Kanten)
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1200,630 --screenshot=/tmp/og-2x.png http://localhost:8791/_og-src.html
sips -z 630 1200 /tmp/og-2x.png --out img/og-default.png
# App-Icon: 512er-Quelle -> apple-touch-icon 180 + favicon-32
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=512,512 --screenshot=/tmp/icon-2x.png http://localhost:8791/_icon-src.html
sips -z 180 180 /tmp/icon-2x.png --out apple-touch-icon.png
sips -z 32 32 /tmp/icon-2x.png --out favicon-32.png
# gegenpruefen (kein Augenmass):
sips -g pixelWidth -g pixelHeight img/og-default.png apple-touch-icon.png
```

Danach die Tags aus Abschnitt 5 setzen. Marker-Regel aus den Learnings: synthetische Renders
haben kein EXIF, aber echte Fotos NIE in den Deploy-Ordner (werden mitveroeffentlicht).

## 8. JSON-LD Schema (Startseite, ProfessionalService/LocalBusiness)

Vor `</head>` der Startseite. NAP (Name/Adresse/Telefon) 1:1 aus dem Impressum, sonst
straft Google Inkonsistenz ab. Keine erfundenen Geo-Koordinaten (falscher Pin) — Adresse
reicht, Google geokodiert. Nach dem Einbau valide pruefen (`json.loads`, nie nur grep).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://DOMAIN/#business",
  "name": "FIRMA",
  "description": "KONKRETES NUTZENVERSPRECHEN, keine Floskel.",
  "url": "https://DOMAIN/",
  "image": "https://DOMAIN/img/og-default.png",
  "telephone": "+49 ...",
  "email": "KONTAKT@DOMAIN",
  "priceRange": "ab X €",
  "address": { "@type": "PostalAddress", "streetAddress": "STRASSE HNR",
    "postalCode": "PLZ", "addressLocality": "ORT", "addressCountry": "DE" },
  "areaServed": [{ "@type": "City", "name": "ORT" }],
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00", "closes": "18:00" }],
  "sameAs": ["PROFIL-URLS falls vorhanden (LinkedIn/Instagram) — staerkt die Entitaet fuer AI-Suche"]
}
</script>
```

`sameAs` mit echten Profil-URLs fuellen, sobald vorhanden (wichtig fuer AI-Auffindbarkeit,
siehe auch die ai-seo-Skill). Volle Vorlage: `projekte/marvin-web/_schema-index.jsonld`.

## 9. Cloudflare Web Analytics (cookielos, kein Consent noetig)

Beste Wahl fuer unseren Stack: kein Cookie, keine US-Uebertragung (Cloudflare ist eh Hoster),
darum KEIN Consent-Banner noetig. Ohne Zaehler baut man blind. Dashboard bestaetigt selbst:
"Cloudflare does not track individual visitors."

**WICHTIG (Praxis 2026-07-14): eine `*.pages.dev`-Subdomain ist KEINE Cloudflare-Zone.** Beim
Hinzufuegen sagt das Dashboard "does not belong to Cloudflare websites" -> es gibt KEINE
Auto-Einbindung, das Beacon-Snippet ist Pflicht. Auto-Injektion (kein Code) klappt nur bei einer
echten, orange-proxied Domain (also spaeter auf der Kundendomain). Ablauf:
Dashboard -> Analytics -> Web analytics -> Add a site -> Hostname eintragen ->
"use ... which does not belong to Cloudflare websites" -> Snippet + Token kopieren.

Beacon vor `</body>` auf JEDER Seite (Token ist an genau diesen Hostnamen gebunden, misst auf
localhost bewusst nicht, Daten kommen erst nach Deploy):
```html
<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js"
  data-cf-beacon='{"token":"CF_BEACON_TOKEN"}'></script>
```
Token gehoert in den HTML-Code (kein Geheimnis), NICHT zu einer Auto-Injektion doppeln.
Cookielos, trotzdem als Verarbeitung kurz in die Datenschutzerklaerung (Cloudflare-Abschnitt).

## 10. Uptime-/Deploy-Monitor (UptimeRobot, free)

uptimerobot.com -> Konto -> **Keyword-Monitor** (nicht nur HTTP-Ping): "Keyword exists" mit
einer Marker-Phrase, die im HTML steht (z.B. der Firmenname oder `<title>`). So schlaegt der
Monitor auch bei einem kaputten/leeren Deploy an, nicht nur beim Totalausfall. Intervall 5 Min,
Mail-Alert an Marvins Postfach. Kostenlos bis 50 Monitore. Konto-Aktion Marvin (kein Code).
