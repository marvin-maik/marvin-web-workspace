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
- [ ] deploy.md-rsync um `--exclude '.wrangler'` (+ ggf. `.git`) ergaenzen — lokaler Cache landet sonst
  im Deploy (bei diesem Deploy manuell entfernt). Betrifft ALLE Projekt-Deploy-Befehle.
- [ ] **Nachkontrolle 2026-07-28: Formular-Test + Customer-Feedback** (datierter Termin)
- [ ] Insights nach Projektende → `_fundus/` sichern
- [ ] Timeline-Fix (beratung.html) bei MARLOU-Reaktivierung dorthin zurückspielen

## Was ist JETZT relevant
- Läuft und wird betreut. Bei Änderungen: `_design.md` lesen; Deploy über `_referenz/deploy.md` (rw-deploy).

## Log (Neuestes oben; volle Historie in `PROJEKTE-log.md`)
- 2026-07-20: Globus-Labels entzerrt (Marvins Fund: Ortsnamen ueberlappten bei nahen Pins, z.B.
  Vík/Höfn, Tirana/Theth). Jedes Label sucht jetzt in fester Reihenfolge den ersten freien Platz
  aus 12 Kandidaten um den Pin (Canvas-Rand zaehlt als belegt -> kein Abschneiden mehr), verschobene
  Labels bekommen eine gepunktete Fuehrungslinie zum Pin, dazu bg-Halo unter der Schrift. Max-Zoom
  von 3,2 auf 6,4 verdoppelt. Alles im Inline-Script von ueber-uns.html (kein ?v-Bump noetig).
  Verifiziert im Browser: Island-Cluster, Jordanien gezoomt, Mobil 375px — alle Labels lesbar.
  **DEPLOYT + live verifiziert** (Deployment 2e4f22c7 + Prod-Domain; Achtung beim curl-Check:
  `/ueber-uns.html` antwortet 308 auf die Clean-URL `/ueber-uns`, ohne -L wirkt die Seite leer).
- 2026-07-19: **DEPLOY LIVE.** Die drei Mobil-Verbesserungen (grosse Abflugtafel, kompakte Split-Flap-
  Button-Kacheln, mitlaufendes Gepaeckband) sind auf https://routenwerk.pages.dev live. Verifiziert
  ueber Deployment-URL (4dbbef16) + Produktions-Domain: styles.css?v=55 / site.js?v=51, `bandlauf`
  vorhanden, Tafel-Overflow 0, Kernseiten 200. Hinweis: `.wrangler/` (lokaler Cache) landete in der
  Staging-Kopie, vor dem Deploy manuell entfernt → deploy.md-rsync koennte `--exclude '.wrangler'`
  bekommen (siehe offener Punkt).
- 2026-07-19: Gepaeckband (Marquee) laeuft jetzt MIT. Vorher statischer Band-Hintergrund, nur Inhalt
  bewegt. Jetzt animiert der repeating-linear-gradient (47px Slats) per `bandlauf` 3.615s
  (= 47px / 13px/s = MARQUEE_PXPS) die background-position nach links -> selbes Tempo wie Koffer +
  Schrift, wirkt wie ein echtes Foerderband. Verifiziert: Band + Inhalt beide 13,00 px/s. Hover
  pausiert beides, reduced-motion stoppt beides (globaler *{animation:none}). styles.css?v=55.
  **Noch nicht deployt** (rw-deploy).
- 2026-07-19: `.btn-flap` mobil korrigiert. Kacheln wurden auf die Buttonbreite gestreckt (flex:1 1 0)
  → wirkten quadratisch/fremd zur Abflugtafel. Jetzt kompakt/hoch-schmal (flex:0 0 auto, 1.5ch),
  zentriert im weiterhin vollbreiten Button. Verhaeltnis B/H 0,39 = wie Tafel/Desktop. 320px 1-zeilig,
  0px Overflow. styles.css?v=54. **Noch nicht deployt** (rw-deploy).
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
