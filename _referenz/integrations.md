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

Optional Danke-Seite: `<input type="hidden" name="_next" value="https://DOMAIN/danke.html">`

## 2. Cal.com (Terminbuchung)

Einrichtung: cal.com -> Event Type (z.B. "analyse-30min") -> Link kopieren.
DSGVO-freundlichste Variante: schlichter Link/Button (kein Embed, kein externes Script vor Consent):

```html
<a href="https://cal.com/CAL_USERNAME/analyse-30min" target="_blank" rel="noopener" class="btn">
  Termin buchen
</a>
```

Inline-Embed (laedt externes Script -> nur NACH Consent oder mit Hinweis einsetzen):

```html
<div id="cal-inline" style="width:100%;height:640px;overflow:auto"></div>
<script src="https://app.cal.com/embed/embed.js" async
  onload='Cal("inline",{elementOrSelector:"#cal-inline",calLink:"CAL_USERNAME/analyse-30min"})'></script>
```

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
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='80' font-size='90'>&#9632;</text></svg>">
```

Favicon-Platzhalter vor Launch durch echtes ersetzen. `lang="de"` am html-Tag nicht vergessen.

## 6. Fonts selbst hosten (DSGVO-Pflicht vor Launch)

1. Font von fontshare.com / gwfh.mranftl.com (google-webfonts-helper) als woff2 laden
2. In `fonts/` neben die index.html, dann:

```css
@font-face{font-family:'FONTNAME';src:url('fonts/DATEI.woff2') format('woff2');
  font-weight:600;font-display:swap;}
```

Google-Fonts-CDN-Links (`fonts.googleapis.com`) duerfen NUR in Mockups vorkommen, nie live.
