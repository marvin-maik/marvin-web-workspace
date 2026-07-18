# umzug — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts. Vor jeder Arbeit hier zuerst diese Datei lesen. Nach jedem
Arbeitsschritt kurz mitziehen.

Stand: 2026-07-18 · Phase: **Gebaut, verifiziert, noch nicht live**

## Was & wo
- Eine einzige Vollbild-Seite (100vw x 100vh, kein Scroll), die auf Marvins **alter Domain**
  liegt und sagt: diese Seite ist umgezogen -> Button zur aktuellen Seite `marvinwebdesign.de`.
- Grund: Die alte Adresse ist noch aus einem alten Kundenportal verlinkt, die Verlinkung
  dort soll NICHT geaendert werden. Statt die URL zu aendern, bekommt die alte Adresse
  diese Umzugs-Notiz.
- Datei: `index.html` (selbst-enthalten, Inline-CSS). Assets: `fonts/` (Clash Display, selbst
  gehostet), `favicon-32.png`, `apple-touch-icon.png`, `og-default.png`. `_headers` = noindex + Security.
- Live: noch nicht. Eigenes Mini-Deployment (eigene Domain), Marvins Schritt (siehe unten).

## Feste Entscheidungen (bewusst so, nicht neu aufrollen)
- **Alter Name FutureGrowth = hier die EINE bewusste Ausnahme** (Marvin 2026-07-18): Der Ordner
  heisst neutral `umzug` (nicht nach dem Alt-Namen). Auf der Seite SELBST wird FutureGrowth aber
  AUSDRUECKLICH genannt ("Aus FutureGrowth ist MARVIN.WEB geworden"), weil genau das dem Besucher
  hilft, der von einem alten FutureGrowth-Link kommt: er ordnet den Umzug sofort zu. Die sonst
  geltende Nirgends-Regel (Marketing/LP-Copy/Marke, siehe marvin-web-landingpages-Lotse "Altlast") bleibt
  bestehen; diese Abschieds-Notiz ist die dokumentierte Ausnahme. NICHT bei einem kuenftigen
  Aufraeumen wieder rausstreichen.
- **Design erbt das marvin-web-CD 1:1** (Werkstatt-Editorial: Clash Display, Papier #f5f1e8,
  Signal-Orange #e8440a). Keine neue Richtung. Bauteile 1:1 aus marvin-web-landingpages/styles.css bzw.
  projekte/marvin-web: `.meta-row`, `.tag`, `.rule` (Maszband-Signature), Button (signal-deep),
  `.guides` (3 vertikale Hairlines als Textur). Kein separates `_design.md` (eine Seite, erbt alles).
- **100vh ist hier ABSICHT** (Marvins Vorgabe): Layout ist bewusst hoehen-abhaengig
  (`min-height:100dvh`, Flex-Spalte Kopf/Mitte/Fusz). Das ist der Unterschied zu den LPs,
  deren CSS bewusst keine vh nutzt.
- **Ziel des Buttons**: `https://marvinwebdesign.de` (Marvins aktuelle Live-Seite).
- **Kein Auto-Redirect**: die Seite soll den Umzug SICHTBAR sagen (Marvins Wortlaut), nicht
  still weiterleiten. Ein Klick-Button statt meta-refresh.
- **noindex**: duenne Seite, soll nicht ranken (Meta-Robots + X-Robots-Tag im `_headers`).

## Offene Punkte (Marvin entscheidet)
- [ ] **Deploy-Go + Domain**: eigenes Cloudflare-Pages-Projekt anlegen, die alte Domain als
  Custom-Domain dranhaengen (NS liegen schon bei Cloudflare? -> pruefen). Deploy erst nach Marvins Freigabe.
- [ ] **Ziel bestaetigen**: Startseite `marvinwebdesign.de` (Default) oder lieber eine bestimmte
  Landingpage? Zwei Stellen im HTML (Button-href + Adress-Zeile).
- [ ] **Ton**: aktuell locker geduzt ("du bist da", "dein Lesezeichen"). Falls siezen: 3 Stellen (sub, addr, foot).
- [ ] Optional: OG-Bild ist noch das generische Festpreis-Motiv aus marvin-web-landingpages. Eigenes Umzugs-OG? (Nice-to-have, weil noindex.)

## Verifiziert (2026-07-18)
- Desktop + Mobil (375x812) per Browser-Pane: fuellt exakt einen Viewport, KEIN Scroll,
  kein horizontaler Ueberlauf, keine Konsolenfehler. Clash Display laedt, Maszband-Signature
  zeichnet sich ein (drawRule), reduced-motion aus.

## Deploy (wenn Marvin Go gibt)
- Muster wie andere Projekte: GitHub-Repo + Cloudflare Pages (Direct Upload via wrangler oder
  Git-Anbindung). `_`-Dateien werden nicht deployed. Details/Befehle: `_referenz/deploy.md`.
- Danach die alte Domain als Pages-Custom-Domain zeigen lassen. `_headers` sorgt fuer noindex.
