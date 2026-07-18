# marvin-web — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts: Stand, feste Entscheidungen, offene Punkte, was jetzt relevant ist.
Nach jedem Meilenstein kurz mitziehen. Detail-Quellen sind verlinkt.

Stand: 2026-07-18 · Phase: **LIVE** (Domain-Launch offen)

## Was & wo
- Business-Site, 6 Seiten + Rechtsseiten. **Marvins eigene Marke** (das Studio selbst).
- Live: https://marvin-web.pages.dev (Cloudflare Pages, Direct Upload). Letzter Deploy c0e4f9a8 (2026-07-15, Kontakt-Seite).
- Was-Quelle: `product-marketing-context.md` · Design (as-built): `_design.md`
- Deploy: `_referenz/deploy.md` (Staging-Kopie + Leak-Check, kein Direkt-Deploy aus dem Projektordner).
- Rebrand läuft: `_rebrand/naming-report.md` (Shortlist Top 11, Konsens TAKTFEST). Marvins Favoriten-Wahl offen, KEIN Logo vor dem 4-Ebenen-Kollisionscheck.

## Feste Entscheidungen (NICHT neu aufrollen)
- **Marvins eigene Marke.** Das Werkstatt-CD (Clash Display, Papier #f5f1e8, Orange #e8440a) ist HIER
  das Original, von dem die Landingpages erben (siehe [[eigene-marke-cd-erben]]).
- **Formspree ist nur Staging-Notnagel.** Endlösung = Cloudflare Pages Function auf eigener Domain
  (kein US-Drittempfänger, eigener Redirect, serverseitiger Spamschutz). Migration bewusst auf den
  Domain-Launch gelegt, weil der saubere Mailweg (CF Email Routing, Weg A) die echte Domain braucht.
  Ablauf: `_referenz/integrations.md` Abschnitt 1b.
- Kleinunternehmer §19 UStG: Preise sind Endpreise, PAngV-Hinweis an den Preisen, keine USt-IdNr.
- E-Mail bewusst noch NICHT sichtbar (wartet auf Profi-Domain-Adresse).
- Monitoring läuft still: CF Web Analytics (Token ...cc80) + UptimeRobot-Keyword "MARVIN.WEB" (5-Min, Mail an comspiele@web.de).

## Offene Punkte (Stand 2026-07-18)
- [ ] **Marvin: Domain-Entscheidung** (Haupt-Blocker für alles Weitere)
- [ ] Marvin: Test-Alarm-Mail (UptimeRobot) im Postfach/Spam prüfen
- [ ] Formspree-Testsubmit real: greift `_next` → danke.html im Free-Tarif? (Custom-Redirect ist Bezahl-Feature; sonst Tarif hoch ODER CF Pages Function)
- [ ] **Am Domain-Launch:** Formular Formspree → CF Pages Function umstellen (integrations.md 1b) + Domain-Swap der absoluten URLs + robots.txt/sitemap.xml/canonical
- [ ] Datenschutz fachlich prüfen lassen (Dieter); Formspree-AVV + Cloudflare-DPA real abschließen
- [ ] Geräte-Review (iPhone + Android)
- [ ] Konto-Aktionen (Marvin): Google Unternehmensprofil anlegen; Instagram/LinkedIn + sameAs im Schema; Profi-Mail auf eigener Domain (Impressum + JSON-LD); Formspree-Autoresponder (Tarif prüfen); Conversion messen (/danke vs. Startseite in CF Analytics); "Antwort am selben Tag" gegen Urlaub/Krankheit absichern

## Was ist JETZT relevant (Phase = LIVE, Domain-Launch)
- Vor Domain-Launch: `_referenz/deploy.md` + `_referenz/pflichtseiten-checkliste.md` (robots/sitemap/canonical/Domain-Swap) + `_referenz/integrations.md` 1b (Formular-Migration).
- Design-Arbeit: `_design.md` lesen, styles.css bleibt Quelle der Wahrheit.

## Log (Neuestes oben, Kurzform; volle Historie in `PROJEKTE-log.md`)
- 2026-07-15: kontakt.html live (c0e4f9a8); pakete-H1 mobil sauber getrennt; Rechtstexte §19.
- 2026-07-14: OG-Bild + Icons + JSON-LD + danke.html; WhatsApp-Kontakt; CF Analytics + UptimeRobot eingerichtet.
- 2026-07-10: LIVE gegangen.
