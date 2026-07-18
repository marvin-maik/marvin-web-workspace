# Website-Glossar: Alle Qualitaetsfaktoren auf einen Blick

Stand: Juli 2026. Kompakte Referenz ueber alle Themenfelder einer Website (SEO, Performance,
Barrierefreiheit, UX, Recht, Sicherheit), analog zu Agentur-Glossaren wie sie auf Website-Audit-
Seiten ueblich sind.

Jede Tabelle hat eine Spalte **Gilt fuer**:
- **Immer** = trifft auf jede Website zu, egal wie klein/gross/welche Branche. Pflichtwissen,
  das jeder koennen sollte, der Websites baut — unabhaengig davon, ob es im konkreten Projekt
  gerade gebraucht wird.
- **Situativ** = nur relevant bei bestimmten Projekttypen (Shop, Login-Bereich, mehrsprachig,
  Content-lastig ...). Wichtig zu kennen, aber nicht bei jedem Projekt abzuarbeiten.

Barrierefreiheit ist hier NUR kurz verlinkt, Details in `_referenz/barrierefreiheit-checkliste.md`
(dort steht schon die volle WCAG-Checkliste inkl. Screenreader-Fallen).

**Wichtig zur Rollenteilung, damit hier nichts nur "gewusst" statt umgesetzt wird:**
Dieses Glossar ist ein Begriffs-Nachschlagewerk (was ist ein Meta-Title, was ein 301-Redirect).
Die tatsaechliche Abarbeitung vor Launch passiert in den Checklisten mit echten Checkboxen:
`pflichtseiten-checkliste.md` (Rechtstexte, technische Pflichtdateien, Launch-Schritte) und
`barrierefreiheit-checkliste.md` (WCAG). Taucht hier ein neuer Begriff auf, der vor Launch
tatsaechlich geprueft werden muss, gehoert er zusaetzlich als Checkbox in eine dieser beiden
Dateien — sonst bleibt er reines Wissen ohne Wirkung.

Diese Liste ist NICHT vollstaendig und wird es nie sein (SEO/Performance/Web-Standards
entwickeln sich staendig weiter). Neue Begriffe, auf die wir stossen, hier ergaenzen.

---

## Fundament: das absolute Pflichtwissen (bei jeder Website, ohne Ausnahme)

Diese sieben gehoeren in jedes Projekt, egal wie klein (Onepager, Visitenkarten-Seite, Shop):

1. **Meta-Title** — jede Seite hat einen einzigartigen, aussagekraeftigen `<title>`.
2. **Alt-Text** — jedes informative Bild hat einen beschreibenden `alt`, jedes dekorative `alt=""`.
3. **Bildgroesse/-format** — Bilder komprimiert und in der tatsaechlich benoetigten Groesse ausliefern.
4. **Genau eine H1** — pro Seite, danach H2/H3 ohne Ebenensprung.
5. **Kontrastverhaeltnis** — Text lesbar (AA = 4.5:1), nicht nach Augenmass, sondern gerechnet.
6. **HTTPS** — keine Website ohne SSL, heute Grundvoraussetzung, kein "Nice-to-have".
7. **Impressum + Datenschutzerklaerung** — Pflicht ab der ersten geschaeftlichen Seite in Deutschland.

Alles andere unten ist wichtig, aber gestaffelt: manches ist bei jeder Seite Pflicht (z.B.
Meta-Description, Fokus-Indikator), manches nur bei bestimmten Projekttypen (z.B. Schema fuer
Produkte, Widerrufsbelehrung nur bei Verkauf).

---

## 1. SEO (Sichtbarkeit in Suchmaschinen)

| Begriff | Was es ist | Gilt fuer |
|---|---|---|
| **Meta-Title** | `<title>`-Tag, 50-60 Zeichen, erscheint als blauer Link in Google | Immer |
| **Meta-Description** | `<meta name="description">`, ~150-160 Zeichen, steuert Klickrate | Immer |
| **H1-Struktur** | Genau eine H1 pro Seite, danach H2/H3 ohne Ebenensprung | Immer |
| **Alt-Text** | Beschreibender Alternativtext bei `<img>` | Immer |
| **URL-Struktur** | Sprechende, kurze URLs (`/leistungen/webdesign`) | Immer |
| **robots.txt** | Steuert, was Crawler duerfen | Immer (ab Launch auf finaler Domain) |
| **sitemap.xml** | Liste aller indexierbaren URLs | Immer (ab Launch, auch bei 1 Seite) |
| **301-Redirect** | Permanente Weiterleitung alter URL -> neue URL, uebertraegt Ranking/Linkjuice | Situativ (immer Pflicht bei Relaunch/URL-Aenderung/Domain-Wechsel; siehe pflichtseiten-checkliste.md) |
| **302-Redirect** | Temporaere Weiterleitung, ueberträgt KEIN Ranking | Situativ (nur fuer echte Temporaerfaelle, z.B. A/B-Test, Wartungsseite) |
| **Canonical-Tag** | `<link rel="canonical">` zeigt auf die "echte" URL-Version | Situativ (relevant ab mehreren aehnlichen/duplizierten URLs) |
| **hreflang** | Kennzeichnet Sprach-/Laendervarianten einer Seite | Situativ (nur bei mehrsprachigen/mehrere-Laender-Projekten) |
| **Strukturierte Daten / Schema** | JSON-LD (LocalBusiness, FAQ, Product, Breadcrumb) | Situativ (LocalBusiness fast immer sinnvoll, Product/FAQ nur wenn zutreffend) |
| **Backlinks** | Externe Links auf die eigene Seite | Situativ (Offpage-Strategie, kein Baustein der Seite selbst) |

## 2. Performance (Ladegeschwindigkeit)

| Begriff | Was es ist | Gilt fuer |
|---|---|---|
| **Bildgroesse/-format** | Kompression, richtige Groesse, moderne Formate (WebP/AVIF) | Immer |
| **CLS-Vermeidung** | Bild-`width`/`height` immer setzen, damit Layout nicht springt | Immer |
| **Self-Hosted Fonts** | Eigene Fonts statt Google Fonts CDN | Immer (bei uns Standard, siehe hosting-referenz.md) |
| **HTTPS/CDN** | Verschluesselt + ueber Edge-Server ausgeliefert | Immer (Cloudflare Pages liefert das automatisch) |
| **Core Web Vitals** (LCP/CLS/INP) | Googles drei Kern-Messwerte | Immer im Blick, aber vor allem bei content-/bildlastigen Seiten pruefbar relevant |
| **Lazy Loading** | Bilder ausserhalb des Viewports spaeter laden | Situativ (nur bei Seiten mit vielen Bildern unterhalb des Folds; nie beim LCP-Bild) |
| **Render-Blocking Resources** | CSS/JS, das den ersten Seitenaufbau blockiert | Situativ (relevant bei groesseren JS/CSS-Bundles, bei schlanken Single-Files kaum ein Thema) |

## 3. Barrierefreiheit (Accessibility)

Volle Checkliste: [`barrierefreiheit-checkliste.md`](barrierefreiheit-checkliste.md).
Kurzreferenz der Begriffe:

| Begriff | Was es ist | Gilt fuer |
|---|---|---|
| **Alt-Text / ARIA-Label** | Textalternative fuer Bilder bzw. nicht-textliche Elemente | Immer |
| **Kontrastverhaeltnis** | AA = 4.5:1 Fliesstext, 3:1 grosser Text/Nicht-Text | Immer |
| **Fokus-Indikator** | Sichtbarer Rahmen bei Tastaturnavigation | Immer |
| **Semantisches HTML** | `<nav>/<main>/<footer>`, echte Buttons/Links statt `<div onclick>` | Immer |
| **Skip-Link** | Versteckter Link "zum Inhalt springen" | Immer |
| **Reflow** | Nutzbar bei 320px Breite/200% Zoom ohne horizontales Scrollen | Immer |
| **WCAG / BFSG** | Standard bzw. deutsches Gesetz, das AA einfordert | Immer als Zielniveau; BFSG rechtlich verpflichtend vor allem bei B2C-Verkauf |
| **Custom-Widget-Tastaturbedienung** (Slider, Tabs, Burger) | ARIA-Rollen + Key-Handler fuer Nicht-Standard-Elemente | Situativ (nur wenn solche Elemente ueberhaupt verbaut sind) |

## 4. UX / Conversion (Nutzerfuehrung)

| Begriff | Was es ist | Gilt fuer |
|---|---|---|
| **Above the Fold** | Sichtbarer Bereich ohne Scrollen, sollte Kernbotschaft zeigen | Immer |
| **CTA** (Call to Action) | Handlungsaufforderung, Ziel: eine klare pro Screen | Immer |
| **Mobile-First** | Design zuerst fuer kleine Screens, dann erweitern | Immer |
| **Trust-Signale** | Referenzen, echte Fotos, Impressum sichtbar | Immer |
| **Formular-Abbruchrate** | Anteil Nutzer, die ein Formular beginnen aber nicht abschicken | Situativ (nur relevant, wenn Formulare/Checkout vorhanden sind) |
| **F-Pattern / Z-Pattern** | Typische Blickverlaeufe beim Scannen | Situativ (Layout-Hilfsmittel, kein Pruefpunkt) |
| **Ladezeit-Wahrnehmung** | Skeleton-Screens/Progressbars bei laengeren Ladezeiten | Situativ (nur bei Seiten mit spuerbaren Ladezeiten, z.B. viele API-Calls) |

## 5. Recht & Datenschutz (Deutschland)

| Begriff | Was es ist | Gilt fuer |
|---|---|---|
| **Impressumspflicht** | § 5 DDG | Immer (jede geschaeftliche Seite) |
| **Datenschutzerklaerung** | DSGVO-Pflicht, alle Datenverarbeitungen auflisten | Immer |
| **Cookie-Consent** | Einwilligung vor nicht-essenziellen Cookies/Trackern | Immer, sobald ueberhaupt ein nicht-essenzieller Dienst eingebunden ist (Analytics, Fonts-CDN, Video-Embed) |
| **AVV** | Auftragsverarbeitungsvertrag mit Dienstleistern | Immer, sobald ein externer Dienst Daten verarbeitet (Formspree, Hosting-Analytics etc.) |
| **Widerrufsbelehrung + Muster-Widerrufsformular** | Pflicht bei Fernabsatzvertraegen | Situativ (nur Onlineshops/Verkauf) |
| **PAngV** | Preisangabenverordnung: Endpreise, Versandkosten transparent | Situativ (nur wenn Preise/Produkte angezeigt werden) |

## 6. Sicherheit & Technik

| Begriff | Was es ist | Gilt fuer |
|---|---|---|
| **HTTPS/SSL** | Verschluesselte Verbindung | Immer |
| **Security-Headers** | `_headers`-Datei: CSP, X-Frame-Options, Referrer-Policy etc. | Immer |
| **404-Seite** | Eigene Fehlerseite statt generischer Hosting-Meldung | Immer |
| **Backup / Versionierung** | Git-Historie als Backup | Immer |
| **Honeypot** | Verstecktes Formularfeld gegen Bots | Situativ (nur wenn ein Formular vorhanden ist — dann aber Pflicht, siehe CLAUDE.md) |

---

## Woher diese Zusammenstellung kommt

Es gibt kein einzelnes offizielles "Alles-in-einem"-Glossar. Diese Datei ist eine eigene
Zusammenstellung aus mehreren Fachquellen, analog zu dem, was Agenturen auf ihren
Content-Marketing-Seiten machen:
- SEO-Begriffe: OnPage-Optimierung.de-Glossar, seokratie.de
- Performance/Core Web Vitals: web.dev (Google), corewebvitals.io
- Barrierefreiheit: WCAG (W3C) + eigene Checkliste
- Audit-Gesamtsicht: gaengige "Website Audit Checklist"-Artikel (SEO+Speed+UX+A11y kombiniert)

Die "Gilt fuer"-Einordnung (Immer/Situativ) ist keine externe Norm, sondern eigene Einschaetzung
aus der Praxis der bisherigen Projekte (marvin-web, routenwerk). Bei Bedarf ergaenzen, wenn neue
Begriffe in Kundengespraechen oder Recherche auftauchen.
