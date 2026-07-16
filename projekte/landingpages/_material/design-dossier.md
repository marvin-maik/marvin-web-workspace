# Design-Dossier: landingpages (4 Seiten, eine Familie)

Projekt: 3 kalte Ad-LPs (Kosten / Eigentum / Speed) + 1 warme Angebots-Seite (WhatsApp-Versand).
Marke: [MARKE] (Rebrand laeuft, markenneutral bauen). Stand: 2026-07-16.
Zielgruppe: Inhaber Handwerksbetriebe, Arztpraxen, Selbststaendige, 35 bis 65, kalt von
Meta-Ads aufs Handy. Wirkung: Verlaesslichkeit, Kostenklarheit, Handschlag-Qualitaet.
Alle Kontrastwerte WCAG-berechnet (Ziel 4,5:1 Fliesstext, 3:1 grosse Typo/Grafik).

Gemeinsame Basis aller Richtungen (mobile-first):
- Breakpoints: Basis einspaltig (Design-Ziel 360 bis 430 px), ab 640 px Tabellen/Karten
  2-spaltig, ab 900 px Wrap 1080 px. Angebots-Seite: EINE Lesespalte max. 680 px auch am
  Desktop (Dokument-Charakter, kommt per WhatsApp).
- Ad-LPs ohne Menue, ein CTA-Typ dominant (WhatsApp), tel: sekundaer. Fonts werden immer
  selbst gehostet (woff2, font-display:swap), das ist hier sogar Produktargument.

---

## Richtung A: Werkstatt-Editorial, LP-Schnitt (Wiedererkennung zum Bestand)

- Herleitung aus Zielgruppe: Gleicher Absender wie marvin-web; die Werkstatt-Sprache
  (Massband, Mono-Labels, Papier) spricht Handwerker direkt an und ist bereits gebaut
  und erprobt.
- Referenzen:
  - `projekte/marvin-web/styles.css` (live): komplettes Token-System, Guides, .rule,
    Buttons mit Hard-Shadow. 1:1 uebernehmbar.
  - porto-template.framer.website (Fundus-verifiziert): Type-Scale-Spruenge 12 zu 397 px,
    full-height Rasterlinien, Mono-Meta-Zeile. Liefert den LP-tauglichen Groessen-Mut.
- Tokens (aus Bestand, gepruefte Kontraste auf --bg #F5F1E8):
  - --ink: #161412 (16,3:1) · --bg: #F5F1E8 · --signal: #E8440A (3,54:1, NUR grosse
    Typo/Grafik) · --signal-deep: #B53507 (5,36:1, Textlinks + Buttons; Weiss darauf 6,04:1)
    · --signal-tint: #FF9B78 (nur auf Ink-Flaechen) · --muted: #6D675A (4,98:1)
    · --line: #D8D2C2
  - Fonts: Clash Display 600/700 (Fontshare-Lizenz, woff2 liegen schon in
    projekte/marvin-web/fonts) / Body System-Stack / Labels ui-monospace.
  - Type-Scale mobil zuerst: 12,5 (Mono-Label) / 17 (Body) / 24 (h3) / 30 (h2) /
    H1 clamp(34px, 9vw, 76px) / Ersparnis-Zahl clamp(56px, 16vw, 104px).
- Signature-Element: die Massband-Linie (bestehende .rule, gestrichelt auf Voll-Linie).
- Konstruktions-Muster:
  - Spalten-Guides als 1px-Divs full-height (Bestand), mobil auf 1 Linie reduziert.
  - Sektions-Marker als Mono-Tag "// KOSTEN", "// ABLAUF" statt Menue-Ersatz.
  - Wireframe-Highlights in dieser Sprache: Count-up in Clash Display ueber Massband,
    Stempel in --signal-deep, Ladebalken-Rennen als zwei Massband-Streifen.
- Einordnung: sichert Wiedererkennung, aber Orange-Werkstatt zielt staerker auf Handwerk
  als auf Praxen; und das Rebrand macht den Look ohnehin verhandelbar.

## Richtung B: Beleg und Stempel (Quittungs-Klarheit) (Empfehlung)

- Herleitung aus Zielgruppe: Diese Leute unterschreiben Angebote, pruefen Rechnungen und
  stempeln Belege; eine Seite, die aussieht wie ein sauberer Beleg (Posten, Summe, Stempel),
  macht das Kernversprechen Kostenklarheit sichtbar statt es zu behaupten.
- Referenzen:
  - everlane.com ("Transparent Pricing"): Kostenaufschluesselung als Posten-Grafik ist das
    Vertrauens-Element schlechthin; uebernehmen: Rechnung als Beweis-Sektion, nicht als Tabelle.
  - gumroad.com (Token-verifiziert: #000000 dominiert, harte 1px-Rahmen): Schwarz auf Weiss,
    Preis als groesstes Element, keine Schatten; uebernehmen: 1px-Rahmen-Disziplin und
    Preis-Mut. Den Pink-Akzent ignorieren.
- Tokens (gepruefte Kontraste auf --bg #FDFCF9):
  - --ink: #1C1B18 (16,8:1) · --bg: #FDFCF9 (Thermopapier-Weiss, nicht Creme)
    · --signal: #2B4EA2 Stempelblau (7,54:1; Weiss darauf 7,74:1)
    · --signal-tint: #DCE7F7 (Flaechen, Ink-Text darauf bleibt AA)
    · --muted: #6B6860 (5,42:1) · --line: #E4E1DA
    · optional --alt: #C41E2F (5,73:1) NUR fuer durchgestrichene Alt-Abokosten, eine Stelle.
  - Begruendung Blau statt Orange/Rot: Stempelkissen- und Kontoauszug-Blau ist die Farbe
    der deutschen Buerowelt (Handschlag plus Amtlichkeit) und funktioniert fuer Handwerk
    UND Praxis; Rot bliebe frei fuer "das zahlen Sie heute".
  - Fonts (eine Familie, alle OFL via Google Fonts, self-host per woff2):
    IBM Plex Sans Condensed 600/700 (Headings, kompakt wie Beleg-Kopfzeilen) /
    IBM Plex Sans 400/600 (Body) / IBM Plex Mono (alle Zahlen und Labels; Monospace =
    Ziffern stehen tabellarisch wie auf dem Bon). Herleitung: Plex ist die Schrift des
    Konzerns, der Kassen- und Buchungssysteme gebaut hat; nuechtern, exzellente Ziffern.
  - Type-Scale mobil zuerst: 12 (Mono-Label) / 17 (Body) / 22 (h3) / 28 (h2) /
    H1 clamp(32px, 8.5vw, 64px) / Summen-Zahl clamp(56px, 15vw, 96px) in Mono.
- Signature-Element: der Beleg-Stempel (Fundus Muster 5e: border double, rotate(-6deg),
  Abdruck-Fehlstellen per mask). Genau EINE Stelle pro Seite, Wortlaut je Seite:
  LP1 "FESTPREIS." · LP2 "GEHOERT IHNEN. KOMPLETT." · LP3 "OHNE BALLAST." (oder
  "PAGESPEED 98", falls routenwerk freigegeben) · LP4 am Angebot "FESTPREIS. SCHRIFTLICH."
- Konstruktions-Muster:
  - Rechen-Sektionen als Bon: Posten links, Betrag rechts in Mono, gestrichelte Hairline
    (border-bottom dashed), Summenzeile fett mit Doppellinie oben. Der Count-up (LP1) ist
    die hochzaehlende Summenzeile, kein freischwebender Zahlen-Hero.
  - 1px-Rahmen statt Schatten ueberall (Karten, FAQ, Tabelle); Waerme kommt aus dem
    Papierton, nicht aus Radius/Schatten (Radius max 2px).
  - Ladebalken-Rennen (LP3) als zwei Bon-Zeilen "mit Ballast / ohne Ballast", Balken in
    --signal, reduced-motion: statisch mit Endwerten.
  - LP4 als Dokument: 680px-Spalte, Kopf mit Datum/Empfaenger-Zeile in Mono wie ein
    Angebots-Briefkopf.

## Richtung C: Typenschild (Pruefstand-Solidität)

- Herleitung aus Zielgruppe: Handwerker und Praxisinhaber vertrauen Geraeten mit
  Datenplakette und Pruefsiegel; die Website tritt auf wie eine Maschine mit Typenschild:
  Werte, Toleranzen, Garantie, nichts Dekoratives.
- Referenzen:
  - teenage.engineering (Token-verifiziert: Ink #231F20, Grau-Canvas, ein Rot #ED2024):
    Spec-Tabellen als Produktsprache; uebernehmen: Datenblatt-Aesthetik und Grau-Disziplin,
    NICHT die Thin-Typo (zu leise fuer 35 bis 65 auf dem Handy).
  - Lokal: `_referenz/awesome-design-md/design-md/uber/DESIGN.md`: Ein-Farb-Disziplin,
    utilitaere Hairlines, klare Weight-Hierarchie als System-Vorbild.
- Tokens (gepruefte Kontraste auf --bg #F2F2EF):
  - --ink: #171A1C (15,6:1) · --bg: #F2F2EF (Werkbank-Grau, kuehler als A)
    · --signal: #1C5E43 Maschinengruen (6,85:1; Weiss darauf 7,69:1)
    · --signal-tint: #DEEBE3 · --muted: #62676A (5,10:1) · --line: #D9D9D3
  - Begruendung Gruen: die Farbe von Pruefplaketten, "geprueft/frei"-Anzeigen und
    Werkzeug-Marken (Festool-Welt); serioes ohne Konzern-Blau, null Startup-Assoziation.
  - Fonts: Barlow Condensed 600 (Headings, uppercase; DIN-1451-Verwandtschaft =
    deutsche Beschilderungs-Heritage) / Barlow 400/600 (Body) / IBM Plex Mono
    (Plaketten-Werte). Alle OFL via Google Fonts, self-host.
  - Type-Scale mobil zuerst: 11 (Mono-Plaketten-Label, uppercase) / 17 (Body) / 28 (h2,
    condensed) / H1 clamp(36px, 10vw, 80px) condensed uppercase / Messwert-Zahl
    clamp(52px, 14vw, 92px).
- Signature-Element: die Datenplakette: Paket/Preis als genietetes Typenschild (1px-Rahmen,
  4 Punkt-Nieten in den Ecken per radial-gradient, Zeilen: PREIS / DAUER / EIGENTUM /
  PFLEGE in Mono). Count-up und Ladebalken werden darin zu Messwerten am Pruefstand.
- Konstruktions-Muster:
  - Spec-Tabellen mit Zeilen-Hairlines statt Fliesstext-Absaetzen (FAQ als Pruefprotokoll).
  - Sektions-Nummern wie Bauteil-Nummern ("POS 01 KOSTEN").
  - Buttons eckig, 2px-Border, keine Schatten; Hover invertiert (Ink-Flaeche).
- Einordnung: staerkste Handwerk-Passung, aber fuer Arztpraxen die kaelteste der drei
  Welten; Plakette und Bon-Stempel nicht mischen.

---

## Verworfen

- sipgate.de als Deutschland-Referenz: Live-Check 2026-07-16 zeigt Lila #8642FE + Neon
  #DEFF00, also exakt der verbotene Startup-Look.
- Creme+Serif-Editorial-Pol (Soren-Vale-Richtung): Default-AI-Look-Naehe (Anti-Slop-No-Go)
  und liest sich als Boutique/Studio, nicht als Festpreis-Verlaesslichkeit.
- Wise-Lime / 900er-Weights (DESIGN.md-Sammlung): Fintech-Startup-Signal, zu laut fuer
  die Zielgruppe 35 bis 65; Dark-Themes generell verworfen (kalte Handy-Besucher, helle
  Umgebung, Seriositaet, und die Speed-LP soll "leicht" wirken).

## Empfehlung

Richtung B (Beleg und Stempel). Kostenklarheit ist das Kernversprechen aller vier Seiten,
und die Beleg-Sprache beweist es visuell in jeder Sektion (Posten, Summe, Stempel), statt
es nur zu texten; sie traegt Handwerk UND Praxis. Zudem ist sie markenneutral genug, dem
laufenden Rebrand nicht vorzugreifen, waehrend Richtung A das alte Werkstatt-Orange
festschreiben wuerde; wenn Marvin maximale Wiedererkennung zum Bestand will, ist A der
fertige Fallback.
