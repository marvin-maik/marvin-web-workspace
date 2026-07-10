# product-marketing-context.md — MARVIN.WEB (eigene Service-Seite)

Projekt: MARVIN.WEB Service-Seite (Webdesign-Angebot)
Stand: Juli 2026

---

## 1. Produkt / Leistung
Was, in 2 Saetzen: Individuelle Website fuer kleine Unternehmen, schnell und zum Festpreis.
Kein Baukasten-Look, Texte inklusive, in wenigen Werktagen live.
Preise / Pakete: Festpreis. >>> KONKRETE ZAHL VON MARVIN <<<  (Aenderungsrunde extra: 90 EUR)
USP: Tempo (live in 5 Werktagen) + Festpreis (kein offenes Risiko) + Texte inklusive
(Aufwand runter). Individuell statt Vorlage.

## 2. Zielgruppe
Wer genau: Kleine Unternehmen allgemein (Inhaber/Selbststaendige), die noch keine oder
eine veraltete/Baukasten-Website haben.
Groesster Schmerz: Website wirkt teuer, langsam und kompliziert; keine Zeit, sich zu kuemmern.
Top-3-Einwaende:
1. "Zu teuer / unklare Kosten" -> Festpreis, eine Zahl.
2. "Dauert ewig / ich muss viel zuarbeiten" -> 5 Werktage, Texte inklusive, ein Gespraech reicht.
3. "Was ist mit laufenden Kosten / wem gehoert die Seite" -> FAQ klar beantworten.

## 3. Tonalitaet
Ansprache: Du
Klartext-Level: 4 (direkt, kein Agentur-Sprech)
Verbotene Floskeln: Standardliste (Kap. 9.5) + "Ihr Partner fuer", "massgeschneidert".
Erlaubte Signature: "In 5 Werktagen live." / "Ein Preis, keine Ueberraschungen."

## 4. Design-Tokens (Stand v2, freigegeben als Richtung "Werkstatt-Editorial")
Welt der Zielgruppe: verlaesslich, schnell, klar, kein Bullshit. Konzept: Auftragszettel/
technisches Datenblatt — Hairlines statt Karten-Boxen, Mono-Labels, riesige Editorial-Typo.

    --ink:    #161412   /* warmes fast-schwarz */
    --paper:  #f5f1e8   /* werkstatt-papier */
    --signal: #e8440a   /* signal-orange (GO) */     Begruendung: Tempo/Aktion, kein SaaS-Blau
    --muted:  #7a7466
    --line:   #d8d2c2 / --hair: #c9c2af (hairlines)

Fonts: Archivo (Display 900, uppercase Hero, kursives Highlight-Wort) + IBM Plex Mono
(Labels, Nummern, Zusaetze). Fuer Launch selbst hosten (DSGVO), Mockup nutzt Google CDN.
Signature-Element: Massband-Linie (orange Linie mit Teilstrichen), Hero + konsistent.
Weitere Merkmale: scharfe Kanten (keine Radien), Buttons mit Hard-Shadow-Hover,
Ablauf-Nummern als Outline-Ziffern, dunkle Full-Bleed-Sektionen (Abo, Kontakt), Riesen-
Wortmarke im Footer. Breakpoints: 960/900/860px, 560px.

## 5. Referenzen
>>> OFFEN: hat Marvin schon fertige Projekte / Testimonials? <<<
Wenn nein: keine Zahlen erfinden. Stattdessen ehrlich: Prozess-/Garantie-basierte Sicherheit
(Festpreis, Zufriedenheits-/Korrektur-Garantie) statt Fake-Social-Proof.

## 6. Pruefraster
- Hormozi Value Equation je Sektion: Time Delay (5 Tage), Risiko (Festpreis+Garantie),
  Aufwand (Texte inkl., 1 Gespraech), Likelihood (Ablauf transparent, Beispiele wenn vorhanden).
- Sanwarwala Above-the-fold: H1 = was/fuer wen/warum jetzt in 5 Sekunden. CTA + Trust nah beieinander.

## 7. Technisches
Hosting-Ziel: Cloudflare Pages (Repo marvin-maik/<repo>)
Features: Kontaktformular (Formspree) + Terminbuchung (Cal.com)  >>> Formspree-ID + Cal-Link offen <<<
Rechtstexte: Dieter Datenschutz (Impressum/Datenschutz), Footer-Links
Domain: offen
Single-File-Mockup zuerst, dann Push + Cloudflare.
