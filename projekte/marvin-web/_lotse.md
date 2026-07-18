# marvin-web — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts: Stand, feste Entscheidungen, offene Punkte, was jetzt relevant ist.
Nach jedem Meilenstein kurz mitziehen. Detail-Quellen sind verlinkt.

Stand: 2026-07-19 · Phase: **LIVE** (Domain marvinwebdesign.de gelauncht)

## Was & wo
- Business-Site, 6 Seiten + Rechtsseiten. **Marvins eigene Marke** (das Studio selbst).
- Live: https://marvinwebdesign.de (Custom-Domain, apex; www→apex 301) + Fallback https://marvin-web.pages.dev
  (CF Pages, Direct Upload). Letzter Deploy 375de9be (2026-07-19, Profi-Mail info@); davor 1e4bdc50 (Domain-Launch-Fix).
- Was-Quelle: `product-marketing-context.md` · Design (as-built): `_design.md`
- Deploy: `_referenz/deploy.md` (Staging-Kopie + Leak-Check, kein Direkt-Deploy aus dem Projektordner).
- Logo: **eingebaut** (2026-07-19, A Wortmarke + C Signet). Assets in `img/`, Konzepte in `freigabe/logo-konzepte.html`.

## Feste Entscheidungen (NICHT neu aufrollen)
- **Name final: MARVIN.WEB bleibt.** Rebrand am 2026-07-19 von Marvin beendet (naming-report.md in
  `_rebrand/` ist damit Archiv, Konsens-Favorit TAKTFEST verworfen). Die frühere „kein Logo vor dem
  Kollisionscheck"-Sperre ist aufgehoben; Logo eingebaut (2026-07-19, Richtung A+C). Domain marvinwebdesign.de trägt den
  Namen beschreibend (Name + Leistung), siehe [[marvinwebdesign-domain]].
- **Marvins eigene Marke.** Das Werkstatt-CD (Clash Display, Papier #f5f1e8, Orange #e8440a) ist HIER
  das Original, von dem die Landingpages erben (siehe [[eigene-marke-cd-erben]]).
- **Formspree ist nur Staging-Notnagel.** Endlösung = Cloudflare Pages Function auf eigener Domain
  (kein US-Drittempfänger, eigener Redirect, serverseitiger Spamschutz). Domain-Launch erfolgte OHNE die
  Migration — Formular läuft aktuell noch über Formspree. Ablauf: `_referenz/integrations.md` Abschnitt 1b.
- Kleinunternehmer §19 UStG: Preise sind Endpreise, PAngV-Hinweis an den Preisen, keine USt-IdNr.
- **Profi-Mail live: info@marvinwebdesign.de** (Zoho Mail, EU-DC). Seit 2026-07-19 überall eingebunden (Impressum, Datenschutz §2 + §7, index-JSON-LD) und sichtbar auf Start- und Kontaktseite; Gmail abgelöst.
- Monitoring läuft still: CF Web Analytics (Token ...cc80) + UptimeRobot-Keyword "MARVIN.WEB" (5-Min, Mail an comspiele@web.de).

## Offene Punkte (Stand 2026-07-19)
- [x] Domain-Entscheidung: **marvinwebdesign.de** (apex + www→apex 301, live).
- [x] Domain-Launch-Technik (2026-07-19, Deploy 1e4bdc50): Domain-Swap aller absoluten URLs
      (og:url/og:image/JSON-LD/`_next`) → marvinwebdesign.de; canonical je indexierbarer Seite
      (extensionslos — CF liefert `/pfad` ohne `.html`, `.html` macht 308); eigene robots.txt +
      sitemap.xml (nur die 6 indexierbaren Seiten; impressum/datenschutz sind noindex).
- [~] **Formular Formspree → CF Pages Function** (integrations.md 1b): Function gebaut in `functions/api/kontakt.js` (serverseitig Honeypot + Zeit-Falle, Validierung, Redirect /danke, eigene Fehlerseite). Versand via **Zoho ZeptoMail (EU)** entschieden (Marvin will Danke-Mail an Kunden; ZeptoMail = gleicher Anbieter wie Mail, kein Fremd-Branding, faktisch gratis). WARTET auf Marvin: ZeptoMail-Konto freischalten (zeptomail.zoho.eu) + Domain verifizieren (DKIM/SPF-Include in CF, EINE SPF-Zeile mergen) + Sendetoken als CF-Env-Var `ZEPTOMAIL_TOKEN` (Pages-Projekt marvin-web, Secret). DANN Flip durch Claude: Formular-`action` → `/api/kontakt`, `_subject`/`_next` raus, `_ts`-Feld + site.js-Zeitstempel rein, Copy „Was danach passiert" (kontakt.html §01) + Datenschutz §4 (Formspree/USA raus, ZeptoMail/EU rein), deploy, echter Test-Submit. Bis Flip bleibt Formspree aktiv (Working Tree unverändert am Formular).
- [ ] Formspree-Testsubmit real: greift `_next` → /danke im Free-Tarif? (Custom-Redirect ist Bezahl-Feature; sonst Tarif hoch ODER CF Pages Function)
- [ ] Marvin: Test-Alarm-Mail (UptimeRobot) im Postfach/Spam prüfen; UptimeRobot-Monitor ggf. von pages.dev auf marvinwebdesign.de umhängen.
- [x] **Logo eingebaut** (2026-07-19, Deploy ff45f0b5): Richtung A (Wortmarke „Signal-Quadrat") als
      `img/logo.svg` (Header) + `img/logo-invers.svg` (Footer), C (M.-Signet) als `img/zeichen.svg`
      SVG-Favicon + PNG 16/32/180/512. `.logo img`/`.foot-mark img`-Regeln, `_design.md` mitgezogen,
      Header live verifiziert. Optional/offen: Footer-Marke ggf. größer (Geschmack, aktuell
      `min(660px,88%)`); Mono- + Lockup-Assets liegen in `img/` bereit. W-Bug im geteilten
      `_tools/logo/text-zu-pfad.mjs` → Task-Chip zum Fix.
- [ ] Datenschutz fachlich prüfen lassen (Dieter); **Formspree-AVV + Cloudflare-DPA real abschließen** (die Erklärung behauptet beide — im jeweiligen Dashboard tatsächlich akzeptieren, sonst Text-Realitäts-Lücke)
- [x] **Zoho-Mail live** (2026-07-19): MX (mx/mx2/mx3.zoho.eu) + SPF (include:zohomail.eu) + DKIM (zmail._domainkey) in Cloudflare gesetzt und öffentlich verifiziert; info@ empfängt. Adresse überall eingebunden, Datenschutz §7 auf „Zoho Mail, EU" konkretisiert. OFFEN dazu: (a) Marvin: Test-Mail von extern an info@ zur finalen Empfangsbestätigung; (b) Formspree-Zieladresse auf info@ (oder Alias kontakt@) umstellen; (c) Zoho-DPA bestätigen/sichern (Datenschutz nennt Zoho als Auftragsverarbeiter); (d) optional DMARC-TXT `_dmarc` = `v=DMARC1; p=none; rua=mailto:info@marvinwebdesign.de` in Cloudflare. BIMI bewusst übersprungen (VMC-Zertifikat zu teuer).
- [ ] **AI-Crawler-Policy (CF-Zone):** Die Zone merged Cloudflares managed robots.txt mit der deployten. Live geprüft (2026-07-19): `search=yes` + `User-agent: * Allow: /` (Google/Bing crawlen), meine `Sitemap:`-Zeile ist drin — SEO ok. ABER CF blockt per Default AI-Crawler (GPTBot, ClaudeBot, Google-Extended, CCBot, Bytespider, Amazonbot, Applebot-Extended, meta-externalagent → `Disallow: /`). Entscheidung Marvin: weiter blocken ODER AI-Search-/Reference-Crawler zulassen (CF Dashboard → AI Crawl Control) — die eigene Checkliste nennt AI-Such-Auffindbarkeit (ChatGPT/Perplexity) als Ziel.
- [ ] Geräte-Review (iPhone + Android)
- [ ] Konto-Aktionen (Marvin): Google Unternehmensprofil anlegen; Instagram/LinkedIn + sameAs im Schema; Profi-Mail auf eigener Domain (Impressum + JSON-LD); Formspree-Autoresponder (Tarif prüfen); Conversion messen (/danke vs. Startseite in CF Analytics); "Antwort am selben Tag" gegen Urlaub/Krankheit absichern; Search Console + Sitemap einreichen.

## Was ist JETZT relevant
- **Formular-Migration** Formspree → CF Pages Function (`_referenz/integrations.md` 1b) als nächster Technik-Schritt.
- AI-Crawler-Policy im CF-Dashboard entscheiden (siehe offenen Punkt).
- Design-Arbeit: `_design.md` lesen, styles.css bleibt Quelle der Wahrheit.

## Log (Neuestes oben, Kurzform; volle Historie in `PROJEKTE-log.md`)
- 2026-07-19: **Logo live** (ff45f0b5). Text-Wortmarke → gezeichnetes Logo, von Marvin gewählt (A+C, D verworfen): A „Signal-Quadrat" als `img/logo.svg` (Header) + `logo-invers.svg` (Footer), C M.-Signet als SVG-Favicon `img/zeichen.svg` + PNG 16/32/180/512. Header live + alle Assets 200 verifiziert (Footer-Bild lädt, Pane scrollte nicht — Sichtprüfung Footer per Konzept-Sheet). Clash-Outlines lizenzkonform (Fontshare FFL). Nebenfund: W-Glyph-NaN-Bug im geteilten `_tools/logo/text-zu-pfad.mjs` (Guard im `_logo/`, Task-Chip zum Nachziehen). `_design.md` mitgezogen.
- 2026-07-19: **Profi-Mail live.** Zoho MX/SPF/DKIM (EU) gesetzt + öffentlich verifiziert; info@marvinwebdesign.de löst Gmail überall ab (Impressum, Datenschutz §2 + §7=Zoho/EU, index-JSON-LD, sichtbare Kontaktzeile auf Start- + Kontaktseite aktiviert). Committet 5f47b4a, deployed 375de9be, auf Deployment-URL verifiziert (info@ auf allen Seiten, keine Gmail). DMARC optional (p=none-Vorlage im Zoho-Punkt), BIMI übersprungen.
- 2026-07-19: **Domain-Launch-Fix** deployed (1e4bdc50): alle pages.dev-URLs → marvinwebdesign.de, canonical (extensionslos) je Seite, eigene robots.txt + sitemap.xml, `_next` → /danke. Auf Deployment-URL verifiziert (canonical/og korrekt, sitemap 200, /danke 200, Fantasiepfad 404). **Rebrand beendet: MARVIN.WEB ist final** (Marvins Entscheidung), Logo-Konzepte beim logo-designer beauftragt. Datenschutz-DSGVO-Revision der Vorsession mit deployed.
- 2026-07-18: Datenschutz DSGVO-Vollcheck. Live-Compliance verifiziert (keine Cookies/Storage, nur deklarierte Hosts: eigene Domain + cloudflareinsights + routenwerk-Demo). Erklärung erweitert: Speicherfristen (§3/§4), Freiwilligkeit (§4), WhatsApp-DPF/SCC (§6), neu §7 E-Mail/Telefon, §8-Demo-Wording auf Interaktivität entschärft, neu §11 keine autom. Entscheidung. marvinwebdesign.de läuft per HTTPS.
- 2026-07-15: kontakt.html live (c0e4f9a8); pakete-H1 mobil sauber getrennt; Rechtstexte §19.
- 2026-07-14: OG-Bild + Icons + JSON-LD + danke.html; WhatsApp-Kontakt; CF Analytics + UptimeRobot eingerichtet.
- 2026-07-10: LIVE gegangen.
