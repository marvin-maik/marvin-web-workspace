# marvin-web — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts: Stand, feste Entscheidungen, offene Punkte, was jetzt relevant ist.
Nach jedem Meilenstein kurz mitziehen. Detail-Quellen sind verlinkt.

Stand: 2026-07-19 · Phase: **LIVE** (Domain marvinwebdesign.de gelauncht)

## Was & wo
- Business-Site, 6 Seiten + Rechtsseiten. **Marvins eigene Marke** (das Studio selbst).
- Live: https://marvinwebdesign.de (Custom-Domain, apex; www→apex 301) + Fallback https://marvin-web.pages.dev
  (CF Pages, Direct Upload). Letzter Deploy 1e4bdc50 (2026-07-19, Domain-Launch-Fix).
- Was-Quelle: `product-marketing-context.md` · Design (as-built): `_design.md`
- Deploy: `_referenz/deploy.md` (Staging-Kopie + Leak-Check, kein Direkt-Deploy aus dem Projektordner).
- Logo: Konzepte in Arbeit (logo-designer → `freigabe/logo-konzepte.html`), Marvin wählt Richtung.

## Feste Entscheidungen (NICHT neu aufrollen)
- **Name final: MARVIN.WEB bleibt.** Rebrand am 2026-07-19 von Marvin beendet (naming-report.md in
  `_rebrand/` ist damit Archiv, Konsens-Favorit TAKTFEST verworfen). Die frühere „kein Logo vor dem
  Kollisionscheck"-Sperre ist aufgehoben; Logo-Entwicklung läuft. Domain marvinwebdesign.de trägt den
  Namen beschreibend (Name + Leistung), siehe [[marvinwebdesign-domain]].
- **Marvins eigene Marke.** Das Werkstatt-CD (Clash Display, Papier #f5f1e8, Orange #e8440a) ist HIER
  das Original, von dem die Landingpages erben (siehe [[eigene-marke-cd-erben]]).
- **Formspree ist nur Staging-Notnagel.** Endlösung = Cloudflare Pages Function auf eigener Domain
  (kein US-Drittempfänger, eigener Redirect, serverseitiger Spamschutz). Domain-Launch erfolgte OHNE die
  Migration — Formular läuft aktuell noch über Formspree. Ablauf: `_referenz/integrations.md` Abschnitt 1b.
- Kleinunternehmer §19 UStG: Preise sind Endpreise, PAngV-Hinweis an den Preisen, keine USt-IdNr.
- E-Mail bewusst noch NICHT sichtbar (wartet auf Profi-Domain-Adresse, siehe Zoho-Punkt unten).
- Monitoring läuft still: CF Web Analytics (Token ...cc80) + UptimeRobot-Keyword "MARVIN.WEB" (5-Min, Mail an comspiele@web.de).

## Offene Punkte (Stand 2026-07-19)
- [x] Domain-Entscheidung: **marvinwebdesign.de** (apex + www→apex 301, live).
- [x] Domain-Launch-Technik (2026-07-19, Deploy 1e4bdc50): Domain-Swap aller absoluten URLs
      (og:url/og:image/JSON-LD/`_next`) → marvinwebdesign.de; canonical je indexierbarer Seite
      (extensionslos — CF liefert `/pfad` ohne `.html`, `.html` macht 308); eigene robots.txt +
      sitemap.xml (nur die 6 indexierbaren Seiten; impressum/datenschutz sind noindex).
- [ ] **Formular Formspree → CF Pages Function** umstellen (integrations.md 1b) — steht noch aus.
- [ ] Formspree-Testsubmit real: greift `_next` → /danke im Free-Tarif? (Custom-Redirect ist Bezahl-Feature; sonst Tarif hoch ODER CF Pages Function)
- [ ] Marvin: Test-Alarm-Mail (UptimeRobot) im Postfach/Spam prüfen; UptimeRobot-Monitor ggf. von pages.dev auf marvinwebdesign.de umhängen.
- [ ] **Logo:** Richtung aus `freigabe/logo-konzepte.html` wählen → Finalisierung (Header-SVG +
      Footer-invers + Favicon-Serie), dann Text-Wortmarke `.logo`/`.foot-mark` durch das Logo ersetzen
      (Muster: routenwerk logo.svg/logo-invers.svg). `_design.md` im selben Commit mitziehen.
- [ ] Datenschutz fachlich prüfen lassen (Dieter); **Formspree-AVV + Cloudflare-DPA real abschließen** (die Erklärung behauptet beide — im jeweiligen Dashboard tatsächlich akzeptieren, sonst Text-Realitäts-Lücke)
- [ ] **Zoho-Mail scharfstellen:** MX + SPF + DKIM für marvinwebdesign.de in Cloudflare-DNS setzen (aktuell nur TXT-Verify, .zoho.eu = EU-DC, aber KEINE MX → info@ empfängt noch nichts). Danach Test-Mail; DANN Impressum + Datenschutz-Kontaktmail Gmail→info@ umstellen und Datenschutz §7 „externer E-Mail-Dienst" → Zoho (EU, AVV) konkretisieren. Bis dahin bleibt Gmail (Consumer-Gmail = US, kein AVV — bewusst provisorisch).
- [ ] Live robots.txt auf marvinwebdesign.de gegenprüfen: liefert die Zone die deployte robots.txt (mit Sitemap-Zeile) oder den CF-managed „content signals"-Default? Auf der pages.dev-Deployment-URL war die eigene Datei korrekt; auf der Zone hing kurz der Default (Edge-Cache). Sitemap notfalls direkt in der Search Console einreichen.
- [ ] Geräte-Review (iPhone + Android)
- [ ] Konto-Aktionen (Marvin): Google Unternehmensprofil anlegen; Instagram/LinkedIn + sameAs im Schema; Profi-Mail auf eigener Domain (Impressum + JSON-LD); Formspree-Autoresponder (Tarif prüfen); Conversion messen (/danke vs. Startseite in CF Analytics); "Antwort am selben Tag" gegen Urlaub/Krankheit absichern; Search Console + Sitemap einreichen.

## Was ist JETZT relevant
- **Logo:** `freigabe/logo-konzepte.html` mit Marvin durchgehen, Richtung wählen, finalisieren, einbauen.
- **Formular-Migration** Formspree → CF Pages Function (`_referenz/integrations.md` 1b) als nächster Technik-Schritt.
- Design-Arbeit: `_design.md` lesen, styles.css bleibt Quelle der Wahrheit.

## Log (Neuestes oben, Kurzform; volle Historie in `PROJEKTE-log.md`)
- 2026-07-19: **Domain-Launch-Fix** deployed (1e4bdc50): alle pages.dev-URLs → marvinwebdesign.de, canonical (extensionslos) je Seite, eigene robots.txt + sitemap.xml, `_next` → /danke. Auf Deployment-URL verifiziert (canonical/og korrekt, sitemap 200, /danke 200, Fantasiepfad 404). **Rebrand beendet: MARVIN.WEB ist final** (Marvins Entscheidung), Logo-Konzepte beim logo-designer beauftragt. Datenschutz-DSGVO-Revision der Vorsession mit deployed.
- 2026-07-18: Datenschutz DSGVO-Vollcheck. Live-Compliance verifiziert (keine Cookies/Storage, nur deklarierte Hosts: eigene Domain + cloudflareinsights + routenwerk-Demo). Erklärung erweitert: Speicherfristen (§3/§4), Freiwilligkeit (§4), WhatsApp-DPF/SCC (§6), neu §7 E-Mail/Telefon, §8-Demo-Wording auf Interaktivität entschärft, neu §11 keine autom. Entscheidung. marvinwebdesign.de läuft per HTTPS.
- 2026-07-15: kontakt.html live (c0e4f9a8); pakete-H1 mobil sauber getrennt; Rechtstexte §19.
- 2026-07-14: OG-Bild + Icons + JSON-LD + danke.html; WhatsApp-Kontakt; CF Analytics + UptimeRobot eingerichtet.
- 2026-07-10: LIVE gegangen.
