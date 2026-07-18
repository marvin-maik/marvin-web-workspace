# Deployment (Cloudflare Pages, Direct Upload via wrangler)

Kanonische Quelle fuer alle Deploy-Ablaeufe. Konto comspiele@web.de, wrangler eingeloggt.
Nur beim Deployen lesen (CLAUDE.md verweist hierher).

## Grundregel (Leak-Schutz, hart)
- Ordner/Dateien mit `_`-Praefix (z.B. `_archiv/`, `_material/`, `_src/`) sowie DEMO-README.md,
  `handoff/`, `freigabe/`, `product-marketing-context.md` sind INTERN und werden NIE deployed.
- Deploy deshalb NIE direkt aus dem Projektordner (Leak-Vorfall 2026-07-13), sondern IMMER ueber
  eine Staging-Kopie. Staging-Ordner vorher loeschen (rsync ohne --delete laesst Altlasten drin).
- NACH JEDEM DEPLOY, BEVOR wrangler laeuft: `ls` der Staging-Kopie gegen die INTERN-Liste pruefen
  (Beinahe-Leak 2026-07-14: Befehl schloss freigabe/ + product-marketing-context.md nicht aus).
- `_headers`/`_redirects` sind CF-Pages-Konfig und die Ausnahme vom `_`-Praefix — die
  `--include`-Regeln VOR `--exclude '_*'` lassen genau sie durch.
- Verifikation nach Deploy NIE ueber die Hauptdomain (faengt den alten Edge-Cache), IMMER ueber die
  Deployment-URL `https://<hash>.<projekt>.pages.dev`. styles.css & ersetzte Dateien mit `?v=N` hochziehen.
- Falls doch etwas rausging: altes Deployment loeschen mit
  `npx wrangler pages deployment delete <id> --project-name <p> --force` (Hash-URLs bleiben sonst
  ewig erreichbar); geleakte URLs NICHT anpingen (waermt den Edge-Cache).

## marvin-web (LIVE seit 2026-07-10: https://marvin-web.pages.dev)
```
rm -rf /tmp/mw-deploy && rsync -a --include '_headers' --include '_redirects' --exclude '_*' --exclude 'freigabe' --exclude 'handoff' --exclude 'product-marketing-context.md' --exclude 'DEMO-README.md' --exclude '.DS_Store' projekte/marvin-web/ /tmp/mw-deploy/ && npx wrangler pages deploy /tmp/mw-deploy --project-name marvin-web --branch main
```

## routenwerk (Demo LIVE seit 2026-07-12: https://routenwerk.pages.dev)
```
rm -rf /tmp/rw-deploy && rsync -a --include '_headers' --include '_redirects' --exclude 'DEMO-README.md' --exclude 'handoff' --exclude 'freigabe' --exclude '_*' --exclude '.DS_Store' projekte/routenwerk/ /tmp/rw-deploy/ && npx wrangler pages deploy /tmp/rw-deploy --project-name routenwerk --branch main
```

## Neues Projekt: Deploy-Befehl ableiten
Muster wie oben, Projektnamen tauschen, INTERN-Excludes IMMER uebernehmen (`_*`, `freigabe`,
`handoff`, `product-marketing-context.md`, `DEMO-README.md`, `.DS_Store`), `_headers`/`_redirects`
per `--include` davor durchlassen. Deploy-Exclude-Listen sind pro Projekt zu pruefen.

Spaeter optional: Git-Integration im CF-Dashboard fuer Auto-Deploy bei Push.
