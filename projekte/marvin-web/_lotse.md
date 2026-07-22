# marvin-web — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts: Stand, feste Entscheidungen, offene Punkte, was jetzt relevant ist.
Nach jedem Meilenstein kurz mitziehen. Detail-Quellen sind verlinkt.

Stand: 2026-07-19 · Phase: **LIVE** (Domain marvinwebdesign.de gelauncht)

## Was & wo
- Business-Site, 6 Seiten + Rechtsseiten. **Marvins eigene Marke** (das Studio selbst).
- Live: https://marvinwebdesign.de (Custom-Domain, apex; www→apex 301) + Fallback https://marvin-web.pages.dev
  (CF Pages, Direct Upload). Letzter Deploy **edf38d9d** (2026-07-22, Claude: Showcase-Caption bricht an Satzgrenzen); davor 2954efdf (Collage-Desktop + styles v20).
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
- Monitoring läuft still: CF Web Analytics (Token ...cc80) + UptimeRobot-Keyword "MARVIN.WEB" (5-Min, Mail an comspiele@web.de). **Monitor prüft seit 2026-07-19 marvinwebdesign.de** (vorher pages.dev).

## Offene Punkte (Stand 2026-07-19)
- [x] Domain-Entscheidung: **marvinwebdesign.de** (apex + www→apex 301, live).
- [x] Domain-Launch-Technik (2026-07-19, Deploy 1e4bdc50): Domain-Swap aller absoluten URLs
      (og:url/og:image/JSON-LD/`_next`) → marvinwebdesign.de; canonical je indexierbarer Seite
      (extensionslos — CF liefert `/pfad` ohne `.html`, `.html` macht 308); eigene robots.txt +
      sitemap.xml (nur die 6 indexierbaren Seiten; impressum/datenschutz sind noindex).
- [x] **Formular Formspree → CF Pages Function LIVE** (2026-07-19, Deploy bbdc99e8): `functions/api/kontakt.js` via Zoho ZeptoMail (EU), Domain in ZeptoMail verifiziert (DKIM-TXT `1914953._domainkey` + Bounce-CNAME `bounce-zem`→cluster89.zeptomail.eu, DNS-only). Flip: Formular-`action` → `/api/kontakt`, `_subject`/`_next` raus, `_ts`+site.js-Zeitstempel (Skew-Guard `>=0` in der Function), Datenschutz §4 + Copy §01 angepasst. End-to-end verifiziert: echter Submit → 303 /danke + Mail via ZeptoMail; Honeypot/Zeit-Falle/Validierung greifen; Live-Domain ok. **Deploy-Falle gefixt:** Functions kompilieren nur bei `wrangler pages deploy .` AUS dem Staging-Ordner (CWD), nicht `deploy /tmp/mw-deploy` aus dem Root — deploy.md aktualisiert. **Token-Migration ABGESCHLOSSEN (2026-07-19):** Token in ZeptoMail rotiert (alter gelöscht), in CF als **Secret** hinterlegt (Dashboard zeigt „Value encrypted"), Redeploy **c8fd8754** (der alte Deploy 971b609e trug noch den gelöschten Token → Formular war kurz kaputt, bis der Redeploy den neuen Token einbackte — Merke: CF Pages zieht geänderte Vars NUR beim nächsten Deploy). End-to-End verifiziert: echter Submit → 303 /danke + Mail in info@ und comspiele@web.de angekommen (Marvin bestätigt). OFFEN dazu nur noch: (d) optional DMARC-TXT setzen. (Formspree-Form am 2026-07-19 von Marvin stillgelegt — Migration damit vollständig.)
- [x] **UptimeRobot-Monitor auf marvinwebdesign.de umgehängt** (2026-07-19, url + friendlyName via MCP; Keyword „MARVIN.WEB", 5-Min, 2xx/3xx, Alert-Kontakte unverändert; per list-monitors gegengeprüft). OFFEN: Marvin prüft die Test-Alarm-Mail im Postfach/Spam.
- [x] **Logo eingebaut** (2026-07-19, Deploy ff45f0b5): Richtung A (Wortmarke „Signal-Quadrat") als
      `img/logo.svg` (Header) + `img/logo-invers.svg` (Footer), C (M.-Signet) als `img/zeichen.svg`
      SVG-Favicon + PNG 16/32/180/512. `.logo img`/`.foot-mark img`-Regeln, `_design.md` mitgezogen,
      Header live verifiziert. Optional/offen: Footer-Marke ggf. größer (Geschmack, aktuell
      `min(660px,88%)`); Mono- + Lockup-Assets liegen in `img/` bereit. **W-Glyph-NaN-Bug im geteilten
      `_tools/logo/text-zu-pfad.mjs` gefixt** (2026-07-19: frischer Font pro Glyph + Achsen-Reparatur
      `repariereD()` aus `_logo/glyphen-daten.mjs` portiert; gegen Clash Display 700 mit „MARVIN.WEB"
      und „WWWWW" verifiziert, kein NaN im Pfad). Der offene Task-Chip dazu kann weg.
- [ ] Datenschutz fachlich prüfen lassen (Dieter). **Cloudflare-DPA gilt AUTOMATISCH** (in die Self-Serve Subscription Agreement einbezogen — 2026-07-19 unter Configurations geprüft, kein Klick nötig; optional „Review"-PDF für die Akte sichern). Formspree-AVV ist mit der Stilllegung hinfällig.
- [x] **Zoho-Mail live** (2026-07-19): MX (mx/mx2/mx3.zoho.eu) + SPF (include:zohomail.eu) + DKIM (zmail._domainkey) in Cloudflare gesetzt und öffentlich verifiziert; info@ empfängt. Adresse überall eingebunden, Datenschutz §7 auf „Zoho Mail, EU" konkretisiert. OFFEN dazu: (a) Marvin: Test-Mail von extern an info@ zur finalen Empfangsbestätigung; (b) hinfällig (Formspree stillgelegt); (c) **Zoho-DPA: kein Dashboard-Klick — per Mail an `legal@zohocorp.com` (EU/zoho.eu) angefordert; Mail von Marvin am 2026-07-19 gesendet, DPA-Rückmeldung abwarten und gegenzeichnen/ablegen**; (d) **DMARC-TXT `_dmarc` = `v=DMARC1; p=none; rua=mailto:info@marvinwebdesign.de` GESETZT** (2026-07-19, von Claude via Chrome in CF-DNS). BIMI bewusst übersprungen (VMC-Zertifikat zu teuer).
- [x] **AI-Crawler-Policy ENTSCHIEDEN (Marvin, 2026-07-19): so lassen, nichts geändert.** Live-Stand: „Managed robots.txt" ist AN → `Content-Signal: search=yes,ai-train=no,use=reference`; Such-/Antwort-Crawler (Google, Bing, Apple, ChatGPT-Browsing, Perplexity) erlaubt, reine Trainings-Crawler (GPTBot, ClaudeBot, CCBot, Google-Extended, Bytespider, Amazonbot, Applebot-Extended, meta-externalagent) per `Disallow: /` geblockt. Ziel (KI-Such-Auffindbarkeit ChatGPT/Perplexity) damit erfüllt, Inhalte vorm Training geschützt. Umschalten ginge über CF Dashboard → AI Crawl Control → „Managed robots.txt" aus.
- [ ] Geräte-Review (iPhone + Android)
- [ ] Konto-Aktionen (Marvin): **Search Console + Sitemap = ERLEDIGT** (Property verifiziert, sitemap.xml „Erfolgreich", 6 Seiten, 2026-07-19). **Instagram-`sameAs` LIVE** (index.html JSON-LD, `https://www.instagram.com/marvinwebdesign.de/`, Deploy 483189da, live geprüft auf Domain + Deployment-URL). Noch offen: Google Unternehmensprofil anlegen (dann in `sameAs` ergänzen); LinkedIn (falls gewünscht); Conversion messen (/danke vs. Startseite in CF Analytics); „Antwort am selben Tag" gegen Urlaub/Krankheit absichern.

## Was ist JETZT relevant
- **noindex-Vorfall behoben + ALLES deployt (2026-07-21):** Live-Domain war seit Launch per
  X-Robots-Tag aus dem Google-Index gesperrt (Details im Log). Fix deployt; mitgegangen sind die
  wartenden Commits: Nummer-Wechsel, Preis 790, styles v17, site.js v11, angebot.html (/angebot,
  noindex — Marvins Sicht-Freigabe der Live-Seite steht noch aus). Nachzug Marvin: Search Console
  -> Startseite "Indexierung beantragen".
- Kontaktformular-Migration VOLLSTÄNDIG abgeschlossen: Token als Secret + verifiziert, Formspree-Form stillgelegt (Marvin, 2026-07-19).
- Nur-Marvin-Nachzügler übrig: **sameAs-Deploy von index.html** (Instagram drin), Zoho-DPA per Mail an legal@zohocorp.com anfordern, Google Unternehmensprofil, Geräte-Check, Datenschutz-Abnahme (Dieter).
- Design-Arbeit: `_design.md` lesen, styles.css bleibt Quelle der Wahrheit.

## Log (Neuestes oben, Kurzform; volle Historie in `PROJEKTE-log.md`)
- 2026-07-22: **Showcase-Caption-Umbruch (DEPLOYT edf38d9d)** — Marvins Wunsch: die Bildunterschrift
  neben dem Handy (mobil) soll an Satzgrenzen brechen statt ragged. Feste `<br>` je Nebensatz +
  geschuetzter Bindestrich in „Demo&#8209;Projekt". Reines HTML (kein ?v-Bump). Sweep 320-900px: 0
  Overflow, kein Text unterm Handy; bei 768 genau 5 Klausel-Zeilen. Live verifiziert (/angebot noindex).
- 2026-07-22: **DEPLOYT (Hash 2954efdf)** — Collage + v20 + alle Runden dieser Session live. Von Claude
  via deploy.md-Einzeiler (Staging + Leak-Check: keine Leaks, `_varianten-desktop.html`/`_test-sweep.html`
  live 404). Functions-Bundle mit hoch (Kontaktformular). Verifiziert auf Deployment-URL UND Live-Domain:
  `/angebot` 200 + noindex-Meta + styles v20 + `class="collage"` + 790 EUR; nicht in sitemap; Belege-Bilder
  200; Kernseiten + Rechtsseiten 200; **Gegenprobe noindex-Vorfall:** /angebot noindex, Startseite
  indexierbar (kein robots-meta, kein x-robots-tag). Siehe [[launch-noindex-gegenprobe]].
- 2026-07-22: **angebot-LP Desktop-Beleg = Diagonale Collage** (Marvins Wahl aus 5 Varianten, die ich
  in `_varianten-desktop.html` intern gerendert habe: Pruefprotokoll/Zahlenwand/Collage/Messgeraet/
  dunkle Galerie). Collage `#belege .collage` NUR ab 901px, ersetzt showcase+facts; mobil komplett
  unveraendert (showcase+facts). Gekipptes Fenster + iPhone davor + Riesen-Outline-98 + 4 Mono-Beleg-
  Chips. Bewusster leichter Bruch mit der Orthogonale, von Marvin abgesegnet. styles.css v19->v20
  (Collage-Regeln alle `#belege`-gescopt, da .showcase/.facts auch anderswo). Sweep 30 Breiten inkl.
  Umschaltgrenze 899/900/901: 0 Overflow; mobil 375 + Desktop 1280 abgenommen. `_varianten-desktop.html`
  bleibt als internes Muster liegen (die 4 nicht gewaehlten Richtungen koennten spaeter auf projekte/
  pakete wandern). **Deploy offen.**
- 2026-07-22: **angebot-LP: Projekt-Blick v2 = LP-Showcase portiert** (Marvins Review: einzelnes
  Handy neben den Facts "sieht verloren aus", Wunsch: auf grossen Screens Desktop mit zeigen).
  `.showcase*`-Bauteil 1:1 aus der LP-Kollektion uebernommen (Browserfenster mit Desktop-Screenshot
  `img/demo-routenwerk.jpg` neu kopiert + ueberlappendes iPhone), Facts wieder volle Breite,
  `.belege-grid`/`.projekt-blick` (v18) restlos entfernt. styles.css v18->v19, ?v ueberall.
  Sweep 32 Breiten 320-2560: 0 Overflow; mobil 375 + Desktop 1280 per Screenshot abgenommen.
  **Deploy offen.**
- 2026-07-21: **angebot-LP: Projekt-Blick eingebaut** (Marvin: "beim Ueberfliegen soll klar sein,
  dass hier ein Projekt zu entdecken ist"). Freigestelltes iPhone-Mockup mit Routenwerk-Screenshot
  (`img/showcase-phone-mockup.{avif,png}`, aus der LP-Kollektion kopiert, AVIF 49KB) in der
  Belege-Sektion: neue Bauteile `.belege-grid`/`.projekt-blick` in styles.css (v17->v18, ?v in
  allen 9 HTML gebumpt), mobil unter den Facts, ab 901px neben 2x2-Facts, Bild verlinkt auf die
  Live-Demo. Sweep 31 Breiten 320-2560: 0 Overflow. Mobil + Desktop 1280 per Screenshot abgenommen.
  **Deploy dieser Runde offen** (v18 + Bild + Preis-Sweep-Nachzuegler, falls noch nicht deployt).
- 2026-07-21: **KRITISCH-Fix: Live-Domain war auf noindex.** PageSpeed-Fund (SEO 69, "Seite ist
  von Indexierung ausgeschlossen"): das `X-Robots-Tag: noindex` auf `/*` aus der pages.dev-Demo-
  Phase stand seit dem Domain-Launch (10.07.) noch in `_headers` — der Warnkommentar in der Datei
  wurde beim Launch uebersehen, marvinwebdesign.de war dadurch fuer Google gesperrt. Zeile
  entfernt (/umzug bleibt bewusst noindex). Dauerhaft verankert (Marvins Auftrag "dringend
  merken"): neuer ERSTER Punkt in `pflichtseiten-checkliste.md` "Launch auf finaler Domain"
  (noindex loeschen + Pflicht-Gegenprobe `curl -sI | grep -i x-robots` leer) + Memory
  `launch-noindex-gegenprobe`. Deploy schob zugleich die wartenden Commits live: Nummer-Wechsel
  0172 9718102, Preis 790, styles.css v17 (.cta-band .tag-Fix), site.js v11 (Live-Viewer),
  angebot.html (/angebot, noindex). Nachzug: Search Console Startseiten-Indexierung anstossen.
- 2026-07-21: **Onepager-Preis 990 -> 790 EUR site-weit** (Marvins Entscheidung: ehrlicher
  Einstiegspreis solange Referenzen fehlen; steigt spaeter wieder). Ersetzt in index (Meta-Desc,
  JSON-LD priceRange + makesOffer, FAQ-Schema + sichtbares FAQ, Teaser-Karte, trust-row), pakete
  (Title/OG/Meta-Desc, Karte), angebot (Meta-Desc, trust-row, Karte), projekt-routenwerk (Stack-val,
  trust-row), projekte (trust-row). Business 1.990 unveraendert. Plus **"Impressum & Datenschutz
  inklusive"** in S+M-Listen, Offer-Stack-Zeile und Vergleichstabelle (pakete + angebot; Marvins
  Wunsch "rechtsrelevante Seiten immer inklusive"). LP-Kollektion: Generator-Quellen auf 790
  nachgezogen (siehe deren Lotse; dort unkommittet wegen fremdem WIP). Nische: Marvin denkt ueber
  Nischen-Positionierung nach -> eigene Runde, NICHT nebenbei (feste Zielgruppen-Entscheidung
  im LP-Lotse waere betroffen). **Deploy weiter offen.**
- 2026-07-21: **Neue WhatsApp-Landingpage `angebot.html` im Hauptprojekt gebaut** (Marvins Neustart-
  Entscheidung: die alte whatsapp.html aus `marvin-web-landingpages` war ihm zu schlecht responsive/
  Design-Drift -> Neubau HIER, erbt styles.css 1:1 statt CSS-Kopie). Zweck: Link zum Hinterlegen bei
  WhatsApp nach persoenlichem Gespraech. WICHTIG (Marvins Korrektur 2026-07-21): Flow ist QR-Code ->
  WhatsApp-Business-Profil -> Besucher schreibt ZUERST (Marvin hat NICHT angeschrieben) -> Copy sagt
  ueberall "schreib mir" / "Per WhatsApp schreiben", NIE "antworte auf meine Nachricht".
  Proof zuerst (Hormozi/Sanwarwala): Hero "Reden kann jeder.
  Hier sind die Belege." + Gespraechsnotiz-Docket, .facts-Belege (PageSpeed 98, 0 Baukasten-Skripte,
  AA, 100% Eigentum) mit "Selbst nachmessen bei Google"-Link, Vorteile (Tempo/Preis/Barrierefreiheit),
  Pakete + Offer-Stack + Garantie (1:1 pakete.html-Copy), Ablauf, Einwand-FAQ, CTA "Du hast meine
  Nummer schon." (WhatsApp/Anruf/Cal). Kein Menue (nur Logo + CTA), noindex, NICHT in sitemap.xml.
  Mobile-first gebaut, dann Sweep 320-2560px (29 Breiten, `_test-sweep.html`, wiederverwendbar): 0
  Overflow. Zwei Funde dabei gefixt: (1) **styles.css: `.cta-band .tag` war Tinte-auf-Tinte unsichtbar**
  (betraf auch pakete/projekte/ueber-mich/projekt-routenwerk live!) -> `color:var(--paper)`, v16->v17
  in allen HTML; (2) "Kleingedrucktes." ragte bei 320px 2px raus -> `Klein&shy;gedrucktes.` (Muster
  wie "Über&shy;raschungen"), auch auf index.html (gleiche Headline). Desktop 1280/1440 per Screenshot
  abgenommen. Merke fuers Pane-Testen: scrollTo NUR mit behavior:'instant' (scroll-behavior:smooth
  + pausierte rAF = Scroll haengt), Reveals per JS forcieren. **Deploy offen** (Marvin, deploy.md).
  Dev-Server neu: `.claude/launch.json` Workspace-Root, Config "marvin-web" Port 8745.
- 2026-07-21: **Telefon/WhatsApp-Nummer site-weit gewechselt** auf die neue WhatsApp-Business-Nummer
  **0172 9718102** (+49 172 9718102). Marvins Entscheidung: neue Nummer wird Hauptnummer, alte
  **0159 06453169 komplett raus**. Ersetzt in allen deploybaren Dateien: wa.me-Links + `.wa-float`,
  `tel:`-Anruflinks, Header-Meta-Zeile (`TEL 0172 9718102`), „Anrufen"-Buttons (Start + Kontakt),
  **Impressum-Telefonzeile** (impressum.html:61 — steckte durch `&nbsp;`-Trennung im ersten Grep versteckt),
  JSON-LD `telephone` (index), danke.html, Auto-Antwort-Mail + Fehlerseite in `functions/api/kontakt.js`.
  Per Grep verifiziert: 0 Alt-Treffer, neue Nummer in allen Formaten korrekt (wa.me/491729718102,
  tel:+491729718102). Kein `?v`-Bump nötig (CSS/JS unverändert). **Deploy noch offen** — Marvin deployt
  via deploy.md-Einzeiler (Function ist dabei, muss aus dem Staging-CWD laufen). Nummer-Merker: [[marvin-whatsapp-business]].
- 2026-07-20: **Live-Viewer-Bug (Case Routenwerk) gefixt, DEPLOY WEITER OFFEN.** Zwei Runden:
  (1) Mac-Modus bekam hochgerechnete Buehnenhoehe als Viewport (Hochkant-Mac) -> HOEHEN.mac=900
  (echtes 16:10). (2) Marvins zweiter Fund: auf Handy stand das kleine Mac-Fenster (284x177) in
  einer 455px hohen Buehne = 278px leeres Letterbox-Feld ("skaliert falsch auf mobile"). Fix:
  layout() setzt die Buehnenhoehe pro Geraet — Formate mit fester Hoehe (Mac/iPhone) SCHRUMPFEN
  die Buehne auf die tatsaechliche Fensterhoehe (Mac mobil jetzt 178px statt 455px, leerRaum 1px),
  Tablet fuellt weiter. `stage.style.height=''` -> CSS-Max responsiv neu gelesen. Verifiziert:
  mobil Mac 284x177/kompakt, Tablet 284x455, iPhone 231x455; Desktop Mac 845x528, alle leerRaum 0.
  site.js?v=11 in allen HTML. **wrangler-Deploy vom Permission-System geblockt -> Marvin deployt
  selbst (Befehl unten) oder gibt die Bash-Permission `npx wrangler pages deploy` frei.**
- 2026-07-20: **„Werktage" → „Arbeitstage" ueberall** (Marvins Entscheidung: rechtlich sind Werktage
  Mo–Sa, Arbeitstage eindeutig Mo–Fr → Wochenende bleibt stiller Puffer). Alle Live-Texte, JSON-LD,
  Schema-FAQ, kontakt.js-Autoreply („innerhalb von einem Arbeitstag") + OG-Bild neu gerendert
  (Rezept integrations.md Kap. 7, verifiziert 1200x630, „Arbeitstagen" im Bild). Archiv (`_rebrand/`)
  und `freigabe/`-Schnappschuesse bewusst NICHT angefasst. Commit 1341220. **Deployed 704fa811**
  (Marvins Go, dokumentierter Einzeiler; NB: der wrangler-Befehl ALLEIN wird vom Classifier geblockt,
  nur der komplette deploy.md-Einzeiler ist allowlisted). Verifiziert auf Deployment-URL: alle
  Kernseiten 200, 0 „Werktag"-Treffer, neues OG-Bild byte-identisch; Live-Domain zeigt neue Texte.
- 2026-07-19: **sameAs live + Legal-Vollständigkeitscheck.** Instagram-`sameAs` deployt (**483189da**, live
  auf Domain + Deployment-URL geprüft; Deploy lief diesmal durch → Marvins Allowlist lässt die mw-Segmente
  jetzt zu). Zoho-DPA-Mail von Marvin gesendet. Legal-Kontrolle gegen `pflichtseiten-checkliste.md` (KEINE
  Rechtsberatung, Abnahme = Dieter): Impressum vollständig (§5 DDG, §18 MStV, §19 UStG; von allen 6 Seiten
  verlinkt); Datenschutz nennt alle aktuellen Verarbeiter (Cloudflare/Zoho/ZeptoMail/WhatsApp/Cal.eu),
  Formspree raus, keine Cookies, cookieloses Analytics, kein Consent-Banner nötig; **kein toter EU-ODR-Link**
  (seit 20.07.2025 abgeschaltet); DMARC/SPF/DKIM stehen. Offen: Zoho-DPA-Rücklauf gegenzeichnen; für Dieter:
  Widerruf/AGB in B2C-Kundenverträgen + BFSG-Anwendbarkeit + finale Wort-Abnahme.
- 2026-07-19: **Nachzügler-Runde per Chrome-Takeover (Marvin eingeloggt, Claude klickt).** Entdeckt: Search
  Console + Sitemap war schon fertig (Property verifiziert, sitemap.xml „Erfolgreich", 6 Seiten). In CF via
  Chrome erledigt: (a) DMARC-TXT `_dmarc` gesetzt (p=none, rua info@); (b) AI Crawl Control geprüft und auf
  Marvins Entscheidung UNVERÄNDERT gelassen (Managed robots.txt an: KI-Suche erlaubt, Training geblockt);
  (c) Cloudflare-DPA als automatisch einbezogen bestätigt (Configurations → nichts zu klicken). Zoho-DPA:
  kein Klick, per Mail an legal@zohocorp.com (EU-DC) anzufordern — Entwurf an Marvin. `sameAs` (Instagram
  @marvinwebdesign.de, Profil live geprüft) in index.html JSON-LD eingebaut + beide LD-Blöcke validiert —
  **Deploy noch offen** (nur HTML, kein `?v`-Bump nötig). Formspree stillgelegt (Marvin). Grenzen gewahrt:
  keine Passwort-/Token-Eingabe, keinen finalen DPA-/Legal-Klick durch Claude.
- 2026-07-19: **ZEPTOMAIL_TOKEN sicher rotiert + Danke-Seite 2-zeilig.** (1) Token in ZeptoMail neu
  erzeugt (alter gelöscht), in CF Pages als **Secret** hinterlegt (Marvin), Redeploy **c8fd8754** von
  Marvin im Terminal (Deploy-Befehl ist bei Claude classifier-geblockt, mw-Segmente noch nicht in der
  Allowlist). Zwischenfall: nach dem Setzen der Var, aber VOR dem Redeploy, war das Formular kurz kaputt
  (live lief noch 971b609e mit dem gelöschten Token) → Test lieferte die Fehlerseite; nach dem Redeploy
  Test grün (303 /danke, Mail in info@ + comspiele@web.de). Lehre steht im Formspree-Punkt: **CF Pages
  aktiviert geänderte Env-Vars erst beim nächsten Deploy.** (2) `danke.html`: WhatsApp/Telefon-Zeile auf
  Marvins Wunsch zweizeilig (` · ` → Komma + `<br>`). Committet und **live via Deploy d6ad5827** (verifiziert: Live-/danke liefert `,<br>oder ruf an`).
- 2026-07-19: **Aufräum-Check „ist noch was offen": zwei machbare Punkte erledigt.** (1) UptimeRobot-Monitor
  803511381 von `marvin-web.pages.dev` auf `https://marvinwebdesign.de` umgehängt (url + friendlyName via MCP,
  Keyword/Intervall/Codes/Alert-Kontakte unangetastet; per list-monitors bestätigt). (2) W-Glyph-NaN-Bug im
  geteilten `_tools/logo/text-zu-pfad.mjs` behoben: frischer Font pro Glyph + `repariereD()`-Achsenreparatur aus
  `_logo/glyphen-daten.mjs` portiert; gegen Clash Display 700 mit „MARVIN.WEB" (breite 687) und „WWWWW" getestet,
  Pfad NaN-frei. Restliche offene Punkte hängen an Marvins Konten/Recht/Postfach (Token→Secret, Formspree
  stilllegen, DPAs, AI-Crawler-Policy, Search Console, Geräte-Review) — nicht von Claude ausführbar.
- 2026-07-19: **Fix Doppel-Animation bei Anker-Links** (Marvin-Fund): Klick auf `index.html#kontakt` / `#faq` von
  einer Unterseite loeste Seiten-Uebergang UND Sprung/Scroll zum Abschnitt gleichzeitig aus (Wirrwarr, durch die
  grosse Geste verstaerkt). Fix: site.js `pageswap`-Guard ruft `e.viewTransition.skipTransition()`, wenn das Ziel
  einen `#anker` hat -> Anker-Navigationen springen sauber ohne Uebergang, volle Seitenwechsel behalten die Geste.
  Keine Link-Ziele geaendert. site.js v8->v9 (nur site.js). Deployed 971b609e, verifiziert (Guard live, keine
  Konsolenfehler). Nicht per Automation fuehlbar (VT feuert nur im sichtbaren Vordergrund-Tab) -> Marvin klickt gegen.
- 2026-07-19: **Transition = grosse verspielte Geste** (Marvin im Voll-Tuner gewaehlt, "das geil"): alt 0.44s
  (blur19 + translateY 129 + scale .69 + rotate 12deg) / neu 1.16s ease (translateY -129 + scale 1.33 + rotate
  -15deg, von oben herein). Chrome wieder komplett fest verankert: `.meta-row` (mw-meta, NEU - im echten DOM ist
  der Banner ein eigenes Element, muss separat verankert werden, sonst rotiert er am Scroll-Top hinter der Nav)
  + `nav` (mw-nav) + `.wa-float` (mw-wa). styles.css v15->v16. Deployed 6b7ae500, verifiziert. reduced-motion
  schaltet die Geste weiterhin komplett ab. NB: bewusst showy, gegen den sonst sachlichen Ton - Marvins Wahl.
  Voll-Tuner mit allen Reglern: `_tools/transition-tuner.html` (Commit c091828).
- 2026-07-19: **Bewegungsrichtung gedreht** (Marvin): jetzt nach unten statt hoch. alt translateY -33->+33,
  neu translateY 33->-33 (kommt von oben herab). styles.css v14->v15, Tuner-Vorzeichen mitgedreht. Deployed
  c06267d3, verifiziert.
- 2026-07-19: **Nav + Banner laufen jetzt mit** (Marvin-Wunsch): `view-transition-name` vom `nav` entfernt,
  die ganze Seite bewegt sich als ein Stueck (Kopf slidet/dissolved mit); nur `.wa-float` bleibt fester
  Floating-Anker (mw-wa). styles.css v13->v14, Tuner-Header-Anker mitgezogen. Deployed 65ae3018, verifiziert
  (mw-nav weg, mw-wa da, Kernseiten 200).
- 2026-07-19: **Transition final via Live-Tuner** (`_tools/transition-tuner.html`, neues wiederverwendbares
  Werkzeug mit Reglern + Live-CSS-Ausgabe, `_`-Praefix = nie deployed). Marvin hat live eingestellt:
  langsamer Slide-Dissolve, alt 0.32s cubic-bezier(.4,0,1,1) (blur13px + translateY -33px) / neu 0.90s ease
  (translateY 33px->0, kein Blur). **Bewegung diesmal bewusst DRIN** (33px) — die fruehere No-Movement-Regel
  bezog sich auf blindes Tuning; live getestet gefaellt der langsame Slide. styles.css v12->v13. Deployed
  3575ff90, verifiziert (Werte im Live-CSS, Kernseiten 200). Offen: mw-Deploy-Segmente (`rm -rf /tmp/mw-deploy`
  + mw-rsync) fehlen noch in `~/Documents/.claude/settings.local.json` allow — Marvin traegt selbst nach,
  Claude darf die eigene Allowlist nicht setzen (Classifier blockt Selbst-Freigabe, korrekt).
- 2026-07-19: **Transition getunt** (Marvin: langsamer + mehr Weichzeichner). Werte: alt .20s->.28s / neu .34s->.46s;
  Blur alt 3px->8px; neu jetzt mit Fokus-Zug (blur 6px->0), damit der Weichzeichner ueberhaupt sichtbar ist (neue Seite
  liegt ueber der alten, deren Blur wird sonst verdeckt). styles.css v11->v12 (nur styles.css geaendert). `_design.md`
  mitgezogen. Deployed **c234c74b**, verifiziert (Werte im Live-CSS, Kernseiten 200). Commit-Historie unten.
- 2026-07-19: **Page-Transitions eingebaut** (native View Transitions, kein Framework). styles.css:
  `@view-transition{navigation:auto}` + verfeinerter Cross-Dissolve (alt .20s opacity+blur3px / neu .34s
  ease-out), Nav + .wa-float feste Anker via `view-transition-name` (mw-nav/mw-wa), reduced-motion-Abschaltung.
  site.js: `pagereveal`-Guard zeigt sichtbare `.rv` sofort (kein leerer Schnappschuss). `?v=` gebumpt
  (styles.css v10->v11, site.js v7->v8, in 8 HTML). `_design.md`-Motion mitgezogen. Marvin-Feedback im Bau:
  Push/Zoom wirkte wie Ladefehler -> auf reinen, weichen Dissolve zurueck. In Staging verifiziert (Opt-in-Regel
  als CSSViewTransitionRule erkannt, keine Konsolenfehler). Merke: **VT feuert nur im sichtbaren Vordergrund-Tab**
  (Chrome skippt bei visibility:hidden), daher nicht per Automation/Preview zeigbar. **Deployed `d86f62e3`**
  (aus /tmp/mw-deploy-CWD wegen functions/; `Compiled Worker successfully` + Functions bundle ok). Auf Deployment-URL
  verifiziert: styles.css?v=11 + site.js?v=8 ausgeliefert, `@view-transition` + `pagereveal` im Live-Code, Kernseiten 200,
  umzug weiter noindex. Commit 866c52a (sauber auf parallele Session gerebast, die nur deploy.md aenderte).
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
