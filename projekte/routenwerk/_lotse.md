# routenwerk — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts. Nach jedem Meilenstein kurz mitziehen.

Stand: 2026-07-18 · Phase: **LIVE + Betreuung**

## Was & wo
- Demo-Referenz für marvin-web: ein **fiktives** Studio, dient als Portfolio-Case + Shop-/Einbett-Test.
- Live: https://routenwerk.pages.dev (Cloudflare Pages).
- Design (as-built): `_design.md` · Deploy: `_referenz/deploy.md` (rw-deploy-Befehl).

## Feste Entscheidungen (NICHT neu aufrollen)
- **Eigenes fiktives Studio-CD, NICHT das marvin-web-CD.** Es ist die Demo, die zeigt, was Marvin baut,
  nicht Marvins eigene Marke.
- CSP `frame-ancestors` statt X-Frame-Options, damit die MARVIN.WEB-Site die Demo einbetten darf.
  Allowlist enthält BEIDE Hosts: `marvinwebdesign.de` (Live-Domain) + `marvin-web.pages.dev` (alt).
  MERKE: Wechselt die einbettende Domain, muss diese Liste mit — sonst blockt der Browser das iframe.

## Offene Punkte
- [ ] **Nachkontrolle 2026-07-28: Formular-Test + Customer-Feedback** (datierter Termin)
- [ ] Insights nach Projektende → `_fundus/` sichern
- [ ] Timeline-Fix (beratung.html) bei MARLOU-Reaktivierung dorthin zurückspielen

## Was ist JETZT relevant
- Läuft und wird betreut. Bei Änderungen: `_design.md` lesen; Deploy über `_referenz/deploy.md` (rw-deploy).

## Log (Neuestes oben; volle Historie in `PROJEKTE-log.md`)
- 2026-07-19: Live-Vorschau in der Case Study war „offline". Ursache: `frame-ancestors` erlaubte nur
  `marvin-web.pages.dev`, nicht die neue Live-Domain `marvinwebdesign.de` → Browser blockte das iframe.
  `marvinwebdesign.de` in die Allowlist ergänzt, deployt + live verifiziert.
- 2026-07-14: Bilder 2,3 MB → 429 KB (Perf 98 live), Startseiten-og:image + twitter:card, Timeline-Fix beratung.html.
