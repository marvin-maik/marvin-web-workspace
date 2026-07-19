# marvin-web — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts: Stand, feste Entscheidungen, offene Punkte, was jetzt relevant ist.
Nach jedem Meilenstein kurz mitziehen. Detail-Quellen sind verlinkt.

Stand: 2026-07-19 · Phase: **LIVE** (Domain marvinwebdesign.de gelauncht)

## Was & wo
- Business-Site, 6 Seiten + Rechtsseiten. **Marvins eigene Marke** (das Studio selbst).
- Live: https://marvinwebdesign.de (Custom-Domain, apex; www→apex 301) + Fallback https://marvin-web.pages.dev
  (CF Pages, Direct Upload). Letzter Deploy c3c5a4c2 (2026-07-19, Index-Freigabe: site-weites noindex entfernt); davor 375de9be (Profi-Mail info@).
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
- **Kontaktformular läuft über eigene CF Pages Function** (`functions/api/kontakt.js`) + Zoho ZeptoMail (EU),
  seit 2026-07-19 live (Deploy bbdc99e8). Kein US-Drittempfänger mehr, serverseitiger Botschutz, eigener
  Redirect /danke, Eingangsbestätigung an den Absender. Formspree ist abgelöst (Form kann stillgelegt werden).
- Kleinunternehmer §19 UStG: Preise sind Endpreise, PAngV-Hinweis an den Preisen, keine USt-IdNr.
- **Profi-Mail live: info@marvinwebdesign.de** (Zoho Mail, EU-DC). Seit 2026-07-19 überall eingebunden (Impressum, Datenschutz §2 + §7, index-JSON-LD) und sichtbar auf Start- und Kontaktseite; Gmail abgelöst.
- Monitoring läuft still: CF Web Analytics (Token ...cc80) + UptimeRobot-Keyword "MARVIN.WEB" (5-Min, Mail an comspiele@web.de).

## Offene Punkte (Stand 2026-07-19)
- [x] Domain-Entscheidung: **marvinwebdesign.de** (apex + www→apex 301, live).
- [x] Domain-Launch-Technik (2026-07-19, Deploy 1e4bdc50): Domain-Swap aller absoluten URLs
      (og:url/og:image/JSON-LD/`_next`) → marvinwebdesign.de; canonical je indexierbarer Seite
      (extensionslos — CF liefert `/pfad` ohne `.html`, `.html` macht 308); eigene robots.txt +
      sitemap.xml (nur die 6 indexierbaren Seiten; impressum/datenschutz sind noindex).
- [x] **Formular Formspree → CF Pages Function LIVE** (2026-07-19, Deploy bbdc99e8): `functions/api/kontakt.js` via Zoho ZeptoMail (EU), Domain in ZeptoMail verifiziert (DKIM-TXT `1914953._domainkey` + Bounce-CNAME `bounce-zem`→cluster89.zeptomail.eu, DNS-only). Flip: Formular-`action` → `/api/kontakt`, `_subject`/`_next` raus, `_ts`+site.js-Zeitstempel (Skew-Guard `>=0` in der Function), Datenschutz §4 + Copy §01 angepasst. End-to-end verifiziert: echter Submit → 303 /danke + Mail via ZeptoMail; Honeypot/Zeit-Falle/Validierung greifen; Live-Domain ok. **Deploy-Falle gefixt:** Functions kompilieren nur bei `wrangler pages deploy .` AUS dem Staging-Ordner (CWD), nicht `deploy /tmp/mw-deploy` aus dem Root — deploy.md aktualisiert. OFFEN: (a) Marvin: `ZEPTOMAIL_TOKEN` in CF von **Plaintext → Secret** umstellen (Wert war kurz sichtbar → ggf. Token in ZeptoMail rotieren); (b) 2 Test-Mails in info@ prüfen; (c) Formspree-Form stilllegen; (d) optional DMARC-TXT setzen.
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
- **Indexierung ist AN** (2026-07-19): site-weites noindex weg, die 6 Business-Seiten sind für Google frei. Nächster Schritt (Marvin, Konto): Search Console verifizieren + `sitemap.xml` einreichen / Indexierung anstoßen.
- Kontaktformular-Migration ist LIVE (siehe erledigten Punkt). Offen dort nur: `ZEPTOMAIL_TOKEN` → Secret, 2 Test-Mails in info@ prüfen, Formspree-Form stilllegen.
- AI-Crawler-Policy im CF-Dashboard entscheiden (siehe offenen Punkt).
- Design-Arbeit: `_design.md` lesen, styles.css bleibt Quelle der Wahrheit.

## Log (Neuestes oben, Kurzform; volle Historie in `PROJEKTE-log.md`)
- 2026-07-19: **Index-Freigabe live** (c3c5a4c2). Die beim Domain-Launch vergessene site-weite
  `X-Robots-Tag: noindex` im `/*`-Block von `_headers` entfernt (Kommentar dazu angepasst) → die 6
  Business-Seiten sind jetzt indexierbar. Entwarnt: die noindex-Seiten hängen NICHT an der site-weiten
  Zeile — impressum/datenschutz/danke/404 tragen je ihr eigenes `<meta name="robots" noindex>`, `/umzug`
  (Landing Page) zusätzlich seinen eigenen `_headers`-Block; alles unangetastet. Live-Domain verifiziert:
  `curl -I` auf `/` + alle 6 Business-Seiten → kein x-robots-tag; `/umzug` → noindex bleibt;
  impressum/datenschutz/danke/404 → Meta-noindex bleibt. (Hinweis: `*.pages.dev`-Hash-URLs liefern noindex
  IMMER — Cloudflare-Plattform, nicht unsere Datei; deshalb hier die Custom-Domain als maßgeblicher Check.)
  OFFEN (Marvin, Konto): Search Console verifizieren + sitemap einreichen.
- 2026-07-19: Case-Study Live-Vorschau, iPhone bekommt echte dvh-Hoehe. iPhone-iframe nicht mehr
  buehnenfuellend, sondern feste Geraetehoehe `HOEHEN.iphone=740` (100dvh im iframe = echte Handyhoehe),
  proportional eingepasst + zentriert (minimal kleiner skaliert). Knopf in site.js: 812=iPhone X, 740=mit
  Leiste, 667=SE. Mac/Tablet unveraendert. site.js v6→v7. Live verifiziert (Domain liefert HOEHEN/scaleM).
- 2026-07-19: **Case-Study Live-Vorschau: iPhone/Tablet zeigen jetzt die echte Mobile-Variante.** Routenwerk
  waehlt Desktop-Coverflow vs. Mobile-Kartenstapel EINMAL beim Laden (matchMedia an 861px, kein change-Listener);
  der Demo-iframe bootete in Mac-Breite und blieb beim Umschalten Desktop. Fix in `site.js`: iframe neu laden,
  wenn ein Geraete-Wechsel die 860px-Grenze kreuzt (Reload nur bei Grenzkreuzung, nicht Tablet↔iPhone). site.js
  v=5→v=6 in allen HTML. E2E per Ladeprotokoll verifiziert (load#1 mac/1440, load#2 iphone/375). `_design.md` mitgezogen.
- 2026-07-19: **Kontaktformular-Migration live** (bbdc99e8). Formspree abgelöst → eigene CF Pages Function `functions/api/kontakt.js` + Zoho ZeptoMail (EU). ZeptoMail-Domain verifiziert (DKIM-TXT + Bounce-CNAME DNS-only in CF, per dig geprüft), Token als CF-Env-Var. Flip: action /api/kontakt, `_ts`+site.js-Zeitstempel (Function-Skew-Guard), Datenschutz §4 + Copy §01 (kein „keine Empfangsbestätigung"-Widerspruch mehr). E2E verifiziert (Submit→303 /danke + Mail; Honeypot/Zeit-Falle/Validierung greifen). **Deploy-Falle gefixt:** Pages Functions kompilieren nur bei `wrangler pages deploy .` aus dem Staging-CWD (deploy.md aktualisiert). Rest: Token Plaintext→Secret, Formspree stilllegen.
- 2026-07-19: **Logo live** (ff45f0b5). Text-Wortmarke → gezeichnetes Logo, von Marvin gewählt (A+C, D verworfen): A „Signal-Quadrat" als `img/logo.svg` (Header) + `logo-invers.svg` (Footer), C M.-Signet als SVG-Favicon `img/zeichen.svg` + PNG 16/32/180/512. Header live + alle Assets 200 verifiziert (Footer-Bild lädt, Pane scrollte nicht — Sichtprüfung Footer per Konzept-Sheet). Clash-Outlines lizenzkonform (Fontshare FFL). Nebenfund: W-Glyph-NaN-Bug im geteilten `_tools/logo/text-zu-pfad.mjs` (Guard im `_logo/`, Task-Chip zum Nachziehen). `_design.md` mitgezogen.
- 2026-07-19: **Profi-Mail live.** Zoho MX/SPF/DKIM (EU) gesetzt + öffentlich verifiziert; info@marvinwebdesign.de löst Gmail überall ab (Impressum, Datenschutz §2 + §7=Zoho/EU, index-JSON-LD, sichtbare Kontaktzeile auf Start- + Kontaktseite aktiviert). Committet 5f47b4a, deployed 375de9be, auf Deployment-URL verifiziert (info@ auf allen Seiten, keine Gmail). DMARC optional (p=none-Vorlage im Zoho-Punkt), BIMI übersprungen.
- 2026-07-19: **Domain-Launch-Fix** deployed (1e4bdc50): alle pages.dev-URLs → marvinwebdesign.de, canonical (extensionslos) je Seite, eigene robots.txt + sitemap.xml, `_next` → /danke. Auf Deployment-URL verifiziert (canonical/og korrekt, sitemap 200, /danke 200, Fantasiepfad 404). **Rebrand beendet: MARVIN.WEB ist final** (Marvins Entscheidung), Logo-Konzepte beim logo-designer beauftragt. Datenschutz-DSGVO-Revision der Vorsession mit deployed.
- 2026-07-18: Datenschutz DSGVO-Vollcheck. Live-Compliance verifiziert (keine Cookies/Storage, nur deklarierte Hosts: eigene Domain + cloudflareinsights + routenwerk-Demo). Erklärung erweitert: Speicherfristen (§3/§4), Freiwilligkeit (§4), WhatsApp-DPF/SCC (§6), neu §7 E-Mail/Telefon, §8-Demo-Wording auf Interaktivität entschärft, neu §11 keine autom. Entscheidung. marvinwebdesign.de läuft per HTTPS.
- 2026-07-15: kontakt.html live (c0e4f9a8); pakete-H1 mobil sauber getrennt; Rechtstexte §19.
- 2026-07-14: OG-Bild + Icons + JSON-LD + danke.html; WhatsApp-Kontakt; CF Analytics + UptimeRobot eingerichtet.
- 2026-07-10: LIVE gegangen.
