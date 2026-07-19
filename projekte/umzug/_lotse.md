# umzug — Lotse (ZUERST lesen)

Das Gehirn dieses Projekts. Vor jeder Arbeit hier zuerst diese Datei lesen. Nach jedem
Arbeitsschritt kurz mitziehen.

Stand: 2026-07-19 · Phase: **LIVE als Subseite `marvinwebdesign.de/umzug` (noindex)**

## Was & wo
- Eine einzige Vollbild-Seite (100vw x 100vh, kein Scroll): sagt "diese Seite ist umgezogen"
  -> Button zur aktuellen Seite `marvinwebdesign.de`.
- **PIVOT 2026-07-19 (Marvin): liegt jetzt als Subseite IM marvin-web-Projekt, live unter
  `https://marvinwebdesign.de/umzug` (noindex) — NICHT als eigenes Deployment auf der alten Domain.**
  Deploy-Datei: `projekte/marvin-web/umzug.html` (Kopie dieser index.html, nur `og:image` auf
  `img/og-default.png` angepasst, weil marvin-web das OG-Bild in `img/` haelt). noindex doppelt:
  `<meta name="robots" content="noindex">` in der Seite + eigene `/umzug`-Regel in `marvin-web/_headers`
  (greift auch, wenn die site-weite `/*`-noindex-Zeile spaeter entfernt wird).
- WICHTIG (offener Punkt): diese neue Adresse faengt NICHT automatisch die alten
  FutureGrowth-Domain-Links aus dem Kundenportal — dafuer muesste die Seite auf der ALTEN Domain
  liegen (Custom-Domain-Weg, siehe Offene Punkte). `marvinwebdesign.de/umzug` ist die Adresse
  zum Selber-Weitergeben/Hinterlegen.
- Urspruenglicher Grund (weiter als Kontext gueltig): alte Adresse ist noch aus altem Kundenportal
  verlinkt, Verlinkung dort soll NICHT geaendert werden.
- Dieser Ordner `projekte/umzug/` ist Original/Quelle (selbst-enthalten, Inline-CSS, eigene Assets:
  `fonts/`, `favicon-32.png`, `apple-touch-icon.png`, `og-default.png`, `_headers`). Bleibt als
  Quelle liegen; deployt wird die Kopie in marvin-web.

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
- **Hosting (Marvin 2026-07-19): Subseite von marvin-web, KEIN eigenes Deployment.** Ein separates
  Pages-Projekt `marvin-web-umzug` war kurz angelegt und wurde wieder geloescht — Marvin wollte
  bewusst eine `marvinwebdesign.de`-URL. Deploy laeuft ueber den normalen marvin-web-Deploy (deploy.md).

## Offene Punkte (Marvin entscheidet)
- [x] **Deploy erledigt (2026-07-19)**: live als `marvin-web/umzug.html` unter `marvinwebdesign.de/umzug`.
- [x] **Ziel bestaetigt**: Button + Adress-Zeile -> Startseite `marvinwebdesign.de`.
- [ ] **Alte FutureGrowth-Domain (optional, nur Marvin)**: Sollen die alten Portal-Links AUTOMATISCH
  aufgefangen werden, muss die alte Domain als Custom-Domain an ein Pages-Projekt und dort die
  Umzugs-Seite zeigen. Der alte Domainname steht NIRGENDS in den Dateien — kennt nur Marvin.
- [ ] **Ton**: aktuell locker geduzt ("du bist da", "dein Lesezeichen"). Falls siezen: 3 Stellen (sub, addr, foot).
- [ ] Optional: OG-Bild ist marvin-webs generisches `img/og-default.png`. Eigenes Umzugs-OG? (Nice-to-have, weil noindex.)

## Verifiziert live (2026-07-19)
- `marvinwebdesign.de/umzug`: HTTP 200, `x-robots-tag: noindex`, Inhalt + Button korrekt,
  `img/og-default.png` -> 200, Startseite weiter 200. Browser-Pane-Screenshot sauber (Clash Display,
  Maszband-Signature, voller Viewport, kein Scroll). Deploy-Hash `e7f84315`.
- Zuvor 2026-07-18 (Quelle `projekte/umzug/index.html`): Desktop + Mobil (375x812) per Browser-Pane,
  ein Viewport, kein Ueberlauf, keine Konsolenfehler, drawRule zeichnet.

## NEBENFUND (eigenes Thema, nicht umzug): marvin-web site-weit noindex
- 2026-07-19 gemessen: `https://marvinwebdesign.de/` liefert `x-robots-tag: noindex`. In
  `marvin-web/_headers` steht die `/*`-noindex-Zeile mit dem Kommentar "beim Domain-Launch entfernen"
  — offenbar untergegangen. Heisst: die Business-Site ist aktuell nicht indexierbar. An Marvin gemeldet,
  Fix separat (Zeile entfernen + neu deployen). Die `/umzug`-Regel bleibt danach bestehen.
