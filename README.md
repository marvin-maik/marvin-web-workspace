# MARVIN.WEB — Workspace & Setup

Zentraler Git-Workspace fuer statische Website-Projekte (Claude-Workflow).
Eingerichtet: Juli 2026. Siehe `_referenz/hosting-referenz.md` fuer die volle Strategie.

## Ordnerstruktur

    MARVIN.WEB/
    ├── README.md            → diese Datei (Setup-Stand + Workflow)
    ├── _referenz/           → hosting-referenz.md (immer an Chats anhaengen)
    ├── _templates/          → product-marketing-context.md (pro Projekt kopieren)
    ├── _fundus/             → eigene fertige Projekte + Referenz-Screenshots (waechst mit)
    └── projekte/            → ein Unterordner je Projekt/Kunde
        └── <projekt>/
            ├── index.html
            └── product-marketing-context.md

## Neues Projekt starten

1. `projekte/<name>/` anlegen.
2. `_templates/product-marketing-context.md` dorthin kopieren und ausfuellen.
3. Im Chat anhaengen: die ausgefuellte Kontext-Datei + `_referenz/hosting-referenz.md`.
4. Claude liefert erst Struktur-/Token-Plan, dann Single-File-Mockup (Kap. 9.6).

---

## Was in dieser Session eingerichtet wurde

### Skills (global, `~/.claude/skills/`) — 36 Stueck
Werden von Claude Code automatisch nach Beschreibung getriggert. Kuratiert (nicht alle
150 aus den Repos) fuer: statische Business-Websites + Marketing-Copy.

- **Marketing/CRO/SEO** (coreyhaines31/marketingskills): cro, copywriting, copy-editing,
  product-marketing, offers, pricing, lead-magnets, marketing-psychology, ai-seo,
  seo-audit, content-strategy, site-architecture, customer-research, launch, marketing-council
- **Web-Build/Design/Dev** (rampstackco/claude-skills): design-system, design-standards,
  accessibility-audit, code-review-web, frontend-component-build, performance-optimization,
  information-architecture, brand-voice, brand-style-guide, form-strategy,
  multi-step-form-design, scheduler-and-booking-design, usability-testing, seo-technical,
  seo-onpage, creative-brief
- **Direct-Response-Copy** (robpalmer99, Schwartz/Ogilvy/Halbert): direct-response-copy,
  copychief, ad-copy, compliance-checker, landing-page-copy

Nachziehen (voller Katalog): `npx skillkit install <repo> --list` dann
`npx skillkit install <repo> --skill=name1,name2 --global --force`.

### MCPs (global, `~/.claude.json` — NICHT settings.json, die wird fuer MCPs ignoriert!)
- **magic** (21st.dev) — schon vorhanden
- **gsap-master** — schon vorhanden
- **context7** — aktuelle Framework-Doku. Laeuft sofort, kein Key. (Optional Gratis-Key
  fuer hoehere Limits: context7.com/dashboard → als `CONTEXT7_API_KEY` eintragen.)
- **design-inspiration** — Dribbble/Behance/Awwwards-Suche + Design-Token-Extraktion von
  Live-Websites. Gebaut nach `~/.claude/mcp-servers/design-inspiration-mcp-server/`.
  **BRAUCHT NOCH GRATIS-KEY** → siehe „Offene Schritte" unten.

### Git
- Identitaet gesetzt: Marvin Mueller / comspiele@web.de
- SSH-Key erzeugt (ed25519) fuer GitHub-Push ohne Passwort. **Muss noch bei GitHub
  hinterlegt werden** → siehe „Offene Schritte".

---

## Offene Schritte (kurz, einmalig)

### 1. SSH-Key bei GitHub hinterlegen (fuer Push per Terminal)
Public Key (steht auch in `~/.ssh/id_ed25519.pub`):
- GitHub → Settings → SSH and GPG keys → New SSH key → Titel „MacBook Marvin" → Key einfuegen.
- Test: `ssh -T git@github.com` (sollte „Hi <username>!" zeigen).

### 2. Gratis Serper-Key fuer Design-Inspiration MCP
- serper.dev → kostenlos anmelden → API-Key kopieren (2.500 Gratis-Suchen).
- In `~/.claude/settings.json` bei `design-inspiration` → `env.SERPER_API_KEY` einfuegen.
- Claude Code neu starten. Ohne Key warnt der Server nur, blockiert aber nichts.

### 3. (Optional) GitHub CLI `gh`
Nicht noetig fuer den Push-Workflow (SSH reicht). Falls gewuenscht spaeter:
Homebrew installieren, dann `brew install gh` und `gh auth login`.

---

## GitHub → Live-Hosting Workflow (Cloudflare Pages)

Pro Projekt einmalig:

    cd projekte/<name>
    git init && git add -A && git commit -m "init"
    # Repo auf github.com anlegen (leer, Public/Private egal), dann:
    git remote add origin git@github.com:marvin-maik/<repo>.git
    git branch -M main && git push -u origin main

Dann auf dash.cloudflare.com → Pages → Connect to Git → Repo waehlen → Deploy.
Ab da: jeder `git push` deployt automatisch. Startseite muss `index.html` heissen.

Danach Aenderungen:

    git add -A && git commit -m "..." && git push
