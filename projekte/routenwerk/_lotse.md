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
- 2026-07-19: Abflugtafel mobil neu gedacht (Demo-Case, Homepage). Statt Querscroll mit sichtbarem
  Indikator wird das 4-Spalten-Brett unter 720px zu EINER grossen Flughafen-Tafel: Ink-Rahmen + Kopfband,
  Zeilen mit Trennlinien + Zebra, pro Route oben ZIEL gross + STATUS rechts, unten Detail + Preis.
  (Zwischenstand „3 Einzelkarten" auf Marvins Wunsch zur zusammenhaengenden Tafel weiterentwickelt.)
  `.brett`→Block, `.flapzeile`→2-Zeilen-Grid, Trailing-Fuellkacheln (`b.pad`, in site.js markiert) mobil
  aus, Guard <=359px. 0px Overflow bis 320px verifiziert, Desktop unveraendert. styles.css (+site.js
  pad-Logik) → `?v` styles=53/site=51. **Noch nicht deployt** (rw-deploy).
- 2026-07-19: Live-Vorschau in der Case Study war „offline". Ursache: `frame-ancestors` erlaubte nur
  `marvin-web.pages.dev`, nicht die neue Live-Domain `marvinwebdesign.de` → Browser blockte das iframe.
  `marvinwebdesign.de` in die Allowlist ergänzt, deployt + live verifiziert.
- 2026-07-14: Bilder 2,3 MB → 429 KB (Perf 98 live), Startseiten-og:image + twitter:card, Timeline-Fix beratung.html.
