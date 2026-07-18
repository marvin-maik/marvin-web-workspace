# Eigenes Hosting statt Baukasten: Referenz-Dokument

Stand: Juli 2026. Zusammenfassung aus Recherche und Planung (Marvin x Claude).
Kontext: Statische HTML-Websites (Claude-Workflow) selbst hosten und mit Business-Features erweitern, als Alternative oder Ergaenzung zu Wix / Wix Studio.

---

## 1. Grundprinzip

Statische HTML-Seiten brauchen keinen klassischen Server. Sie sind schnell, sicher, quasi kostenlos zu hosten und mit Claude in Minuten gebaut oder geaendert.

Die eine Grenze: **Statisches HTML kann sich nichts merken.** Kein Server, keine Datenbank, keine Sessions. Alles, was Daten zwischen zwei Besuchen speichern muss, braucht einen externen Dienst oder ein Backend.

---

## 2. Hosting-Optionen

| Option | Kosten | Vorteile | Nachteile |
|---|---|---|---|
| **Cloudflare Pages** | 0 EUR | Auto-Deploy per Git-Push, SSL, weltweites CDN, sehr schnell | GitHub-Grundkenntnisse noetig |
| **Netlify** | 0 EUR (Free Tier) | Wie Cloudflare, plus eingebaute Formulare (Netlify Forms) | Free-Tier-Limits bei viel Traffic |
| **GitHub Pages** | 0 EUR | Direkt aus dem Repo, null Setup | Nur statisch, keine Extras |
| **IONOS / all-inkl (DE)** | ab ~5 EUR/Monat | Klassisch deutsch, FTP, DE-Support | Manuelles Hochladen, kein Auto-Deploy |

**Domain:** ~10 EUR/Jahr (z.B. Namecheap, INWX, IONOS), in 5 Minuten mit dem Hosting verbunden.

**Standard-Workflow:** Dateien in GitHub-Repo -> Cloudflare Pages/Netlify verbinden -> jeder Push deployt automatisch. Startseite muss `index.html` heissen.

### GitHub-Upload (ohne Terminal)
1. github.com -> Account (kostenlos)
2. **+ -> New repository** -> Name vergeben -> **Public** -> Create
3. **Add file -> Upload files** -> HTML-Dateien reinziehen -> Commit (Desktop-Browser empfohlen)
4. Raw-Link einer Datei: Datei anklicken -> **Raw** -> URL kopieren
5. Live-Hosting: **Settings -> Pages -> Deploy from a branch -> main / (root)** -> nach 1-2 Min live unter `username.github.io/reponame`

---

## 3. Features nachruesten (statische Seite + Dienste)

### Formulare (Pflicht, HTML allein kann keine Mails senden)
- **Netlify Forms**: eingebaut, kostenlos, ein Attribut im Form-Tag
- **Formspree**: unabhaengig vom Hoster, Free Tier vorhanden

### Terminbuchung
- **Cal.com**: Open Source, kostenlos, Google-Kalender-Sync, Pufferzeiten, Erinnerungsmails, optional Bezahlung bei Buchung. Als Widget einbettbar. Kunde kann Termine per Mail-Link verwalten, ohne Login.
- **Calendly**: kommerzielle Alternative, gleiche Idee.
- Realitaet: funktioniert sehr gut, Standard bei Praxen und Dienstleistern.

### Shop / Bezahlung
| Weg | Geeignet fuer | Kosten | Hinweis |
|---|---|---|---|
| **Stripe Payment Links** | Wenige Produkte (z.B. 3 Sorten + Bundle) | Nur Transaktionsgebuehr | Kein Warenkorb-Code, Stripe-gehosteter Checkout, sehr zuverlaessig |
| **Snipcart** | Echter Warenkorb auf statischer Seite | ~20 USD/Monat oder 2% | Kanadischer Dienst, DE-Rechtskonformitaet selbst verantworten |
| **Shopify Buy Button / Headless** | Marketing-Seite statisch + Shopify-Checkout | Shopify-Abo | Beste Kombi aus Speed und rechtlich abgesichertem Backend |

**Deutsches E-Commerce-Recht (der eigentliche Aufwand, nicht die Technik):**
- Button-Loesung ("zahlungspflichtig bestellen")
- Widerrufsbelehrung, AGB, Impressum, Datenschutz
- Rechnungsstellung
- Verpackungsgesetz / LUCID-Registrierung
- DSGVO
- Bei Stripe/Snipcart auf statischer Seite: alles selbst verantworten. Bei Shopify/Wix: fertige Rechtstext-Apps (Haendlerbund, IT-Recht Kanzlei).
- **POPTAIL-spezifisch:** Altersverifikation Pflicht + Alkoholsteuer bei Spirituosen-Mischgetraenken vor Shop-Launch steuerlich klaeren.

**Dieter Datenschutz (dieter-datenschutz.de), der gewaehlte DSGVO-Dienst:**
- Erstellt nach gefuehrtem Check-up alle DSGVO-Dokumente: Datenschutzerklaerung, Impressum, AVV, TOM; plus Prozesse fuer Betroffenenanfragen und Datenpannen; Cookie-Consent-Tool inklusive
- Automatische Aktualisierung der Rechtstexte bei Gesetzesaenderungen, keine juristischen Vorkenntnisse noetig
- Ab ~7 EUR/Monat (jaehrliche Zahlung)
- Statische Seiten: Live-Integration per Script-Snippet von deutschen Servern, aktualisiert sich selbst -> passt zum HTML-Workflow
- Auch als Wix-App und Shopify-App verfuegbar -> plattformuebergreifend beim selben Anbieter bleiben
- Agentur-Version: Dieter fuer alle Kunden zentral verwalten -> Baustein fuers Betreuungs-Abo
- **Abgrenzung:** Fokus auf Datenschutz, NICHT kompletter Shop-Rechtsschutz. Fuer Service-Seite (Kontaktformular, Buchung) reicht Dieter komplett. Fuer Shops (AGB, Widerruf, Button-Loesung, Abmahnschutz) zusaetzlich Haendlerbund oder IT-Recht Kanzlei, oder direkt ein Shop-Rechtspaket, das beides enthaelt.

### Kundenlogin / Mitgliederbereich
Ohne Zusatzdienst NICHT moeglich (braucht Datenbank + Sessions). Loesungen in 3 Stufen:

**Stufe 1: No-Code Login-as-a-Service (empfohlen fuer Kundenprojekte)**
- **Memberstack** (~29 USD/Monat): JS-Snippet -> Login, Registrierung, geschuetzte Bereiche, Profile, Stripe-Zahlungen. Gebaut fuer statische Seiten/Webflow.
- **Outseta**: Auth + Abrechnung + CRM + E-Mail in einem Tool. Fuer "Kunde loggt sich ein, sieht seine Sachen, zahlt Abo" die kompletteste Loesung.

**Stufe 2: Auth-Baukaesten (machbar mit Claude Code, danach eigener Betrieb)**
- **Clerk**: fertige Login-Komponenten, grosszuegiger Free Tier
- **Supabase**: Auth + echte Datenbank kostenlos -> damit auch eigene Logik (Projektstatus, Dokumente). Wochenendprojekt, aber: du bist danach der Support. Fuer eigene Projekte ok, fuer verkaufte Kundenseiten nicht empfohlen.

**Stufe 3: Vorher fragen, ob ueberhaupt noetig**
- Bestellhistorie -> liefert Shopify-Kundenkonto automatisch
- Termine verwalten -> Cal.com per Mail-Link ohne Login
- Eigenes Login lohnt erst bei eigenem Inhalt (Projektstatus, Dokumente, individueller Bereich)

### Trivial nachruestbar (kein Dienst noetig)
- Vorher/Nachher-Bildslider: ~30 Zeilen JS/CSS
- Google Maps: Iframe-Embed, eine Zeile
- Animationen, Mehrsprachigkeit, Blog (als generierte Seiten)

---

## 4. Was statisch NICHT geht (ohne Stufe-2-Backend)

- Kundenkonten mit Login (ohne Dienst wie Memberstack)
- Geschuetzte Mitgliederbereiche
- Eigene Datenbank-Logik (Kundenverwaltung, individuelle Preise, gespeicherte Konfigurationen)
- **Content-Pflege durch Nicht-Techniker**: jede Aenderung laeuft ueber dich. Fuer Kundenprojekte ein Geschaeftsmodell-Thema -> als Betreuungs-Abo verkaufen oder Plattform nutzen.

Was statisch sogar BESSER geht: Design-Freiheit, Ladezeit, SEO-Grundlagen, individuelle Layouts.

---

## 6. Empfohlene Stacks nach Anwendungsfall

### A) Eigene Service-Seite (Webdesign-Angebot)
Statisch selbst hosten: **GitHub + Cloudflare Pages + Formspree/Netlify Forms**. 0 EUR laufend, maximale Performance, Aenderungen via Claude in Minuten.

### B) POPTAIL (Shop mit Alkohol)
**Statische Marketing-Seite selbst hosten + Shopify fuer den Checkout.** Schnelle, frei gestaltbare Brand-Seite + rechtlich abgesichertes Shop-Backend (Rechtstext-Apps, Altersverifikation-Apps). Reines Static+Snipcart bei Alkohol nicht empfohlen (Compliance-Risiko allein getragen).

### C) Volle Feature-Liste ohne Plattform
Statisch + **Cal.com** (Buchung) + **Shopify/Stripe** (Shop) + **Memberstack** (Login). ~30-50 EUR/Monat, HTML-Workflow bleibt. Preis dafuer: drei Dienste statt ein Dashboard, DSGVO-Verkabelung selbst.

### D) Kundenprojekte mit Buchung + Shop + Kundenprofil in einem System
**Wix Studio**: ein Login, ein Dashboard, gepflegte Rechts-/Checkout-Flows, Kunde pflegt Inhalte selbst. Design-Workflow: HTML-Mockup mit Claude als Spec + Copy-Quelle -> Nachbau in Studio.

---

## 7. Der Produktions-Workflow (Kundenprojekte, Festpreis-Modell)

1. **Master-Template einmal in Studio bauen** (Site Styles zuerst: Tokens setzen, dann Sektionen als Grids/Stacks -> Responsive AI funktioniert)
2. **Pro Kunde:** Template duplizieren, Site Styles umstellen (Farben/Fonts), Inhalte tauschen -> aus Stunden werden ~45 Minuten
3. **Copy + Design-Varianten von Claude**: individuelles HTML-Mockup innerhalb 24h nach Erstgespraech (Kunde erlebt "komplett individuell", intern ~30 Min)
4. **Anpassungen dorthin verlagern, wo sie billig sind:** Aenderungen in Schritt "Struktur & Texte zur Freigabe" (am Mockup), BEVOR gebaut wird. Nach Freigabe: eine definierte Korrekturrunde inklusive, weitere kostenpflichtig (z.B. 90 EUR/Runde). In Angebot + FAQ festschreiben.
5. Wix-Abokosten sind Durchlaufposten: Kunde zahlt direkt oder via Betreuungs-Abo (ab 49 EUR/Monat, Hosting eingepreist, Marge bleibt)

**Nicht machen:** Studio-Editor per Chrome-Automation fernsteuern (zu fragil bei Drag-and-drop-Canvas).

---

## 9. Claude mit Wissen anreichern (Workflow-Setup)

Ziel: Claude soll Websites und Copy nicht generisch, sondern nach unserem Standard bauen. Drei Ebenen: Skills (Wie-Wissen), Kontext-Dateien (Was-Wissen), MCPs (Live-Zugriff). Laeuft am besten ueber Claude Code, Skills funktionieren aber auch in Claude.ai (SKILL.md als Custom Skill hochladen).

### 9.1 Skills installieren (Wie-Wissen)
Skills sind Markdown-Dateien mit Frameworks und Regeln, die Claude bei passenden Aufgaben automatisch anwendet.

Empfohlene Pakete:
- **coreyhaines31/marketingskills**: CRO, Copywriting, SEO, E-Mail-Sequenzen. Install: `npx skillkit install coreyhaines31/marketingskills --skill cro copywriting`
- **robpalmer99/claude-code-copywriting-skills**: Direct-Response-Copy (Sales Pages, Landing Pages, Copy-Review), Frameworks von Schwartz/Ogilvy/Halbert
- **rampstackco/claude-skills**: kompletter Website-Lifecycle (Brand, Design, Content, SEO, Dev)

Ablageort: `.claude/skills/` (Claude Code) bzw. `.agents/skills/`.

### 9.2 Kontext-Dateien pflegen (Was-Wissen)
Wichtigstes Prinzip aus den Skill-Paketen: eine zentrale Kontext-Datei pro Projekt, die alle Skills zuerst lesen.

Anlegen als `product-marketing-context.md` je Projekt (MARVIN.WEB, POPTAIL, je Kunde):
- Produkt/Leistung in 2 Saetzen, Preise, USP
- Zielgruppe: wer, welcher Schmerz, welche Einwaende
- Tonalitaet: Du/Sie, Klartext-Level, verbotene Floskeln
- Design-Tokens (siehe Kapitel 8)
- 2-3 Referenzen mit Begruendung (was daran gut ist: Stimme, Struktur, CTA-Stil)

Dazu diese hosting-referenz.md in jedem relevanten Chat anhaengen. Neue Erkenntnisse landen hier, nicht in verstreuten Chats.

### 9.3 MCPs fuer Live-Referenzen
- **Mobbin MCP** (offiziell, ~10 USD/Monat Pro-Plan): 600.000+ echte UI-Patterns durchsuchen, Audit gegen Best-Practice-Landingpages
- **design-inspiration-mcp-server** (GitHub, YonasValentin): durchsucht Dribbble/Behance/Awwwards und extrahiert Design-Tokens (Farben, Fonts, Abstaende) von beliebigen Live-Websites
- **Context7**: aktuelle Framework-Doku in den Kontext (verhindert veraltete Syntax)
- **Chrome MCP / Playwright**: Live-Template-URL oeffnen und analysieren; gebaute Seiten visuell pruefen
- **Wix MCP / Shopify AI Toolkit**: direkte Store- und Site-Operationen

### 9.3b Nachschlage-Quellen (Templates + Wissen, kein Tool-Setup noetig)
Prinzip: URL an Claude geben ("analysiere Struktur/Tokens von X") oder als Referenz im Briefing nennen.

Template-Galerien (Struktur- und Pattern-Inspiration):
- **Land-book.com**: kuratierte Landingpages, filterbar nach Branche/Stil, stark fuer Conversion-Layouts
- **Landingfolio.com**: Landingpage-Beispiele + Komponenten-Patterns (Hero, Pricing, FAQ einzeln)
- **Lapa.ninja**: grosse Landingpage-Galerie mit Kategorien
- **Awwwards / SiteInspire**: High-End-Design, eher fuer mutige Einzelideen als fuer Konversion
- **21st.dev/community/templates**: Komponenten und Templates mit AI-ready Prompts
- **Wix Studio / Webflow / Framer Template-Galerien**: zeigen, was auf der Zielplattform machbar ist; gut zum Klauen von Sektions-Reihenfolgen

Copy-Nachschlagewerke:
- **Marketing Examples (marketingexamples.com)**: kurze, konkrete Copywriting-Fallstudien, ideal als Stil-Referenz "so schreiben"
- **Swipe Files / gute Ads und Landingpages als Screenshots sammeln**: eigener Swipe-Ordner schlaegt jede Galerie, weil kuratiert nach eigenem Geschmack

Technik-Referenzen:
- **MDN (developer.mozilla.org)**: der Standard fuer HTML/CSS/JS, immer aktuell
- **web.dev**: Google-Guides zu Performance, SEO-Grundlagen, Core Web Vitals
- **Refactoring UI (Buch/Site)**: Design-Regeln fuer Nicht-Designer (Hierarchie, Spacing, Farben), deckt sich mit unseren Anti-Slop-Regeln

Eigener Fundus (wichtigste Quelle langfristig): Ordner mit fertigen eigenen Projekten (HTML-Dateien) + Screenshots gelungener Referenzen. Bei jedem neuen Projekt anhaengen: "orientiere dich an Struktur von Projekt X". Eigene erprobte Vorlagen schlagen fremde Templates.

### 9.3c Landing-Page-Frameworks: Hormozi + Sanwarwala
Zwei Quellen, deren Prinzipien als Pruefraster fuer jede Landingpage dienen.

**Alex Hormozi (Acquisition.com, "100M Offers"/"100M Leads"):**
- **Value Equation**: Wert = (Dream Outcome x wahrgenommene Erfolgswahrscheinlichkeit) / (Zeitverzoegerung x Aufwand). Jede Sektion muss mind. einen der 4 Hebel bedienen. Beispiel MARVIN.WEB: "In 5 Tagen live" = Time Delay runter, "Festpreis" = Risiko runter, "Texte inklusive" = Aufwand runter, Referenzen mit Zahlen = Likelihood hoch.
- **Grand Slam Offer**: Angebot so stapeln (Kernleistung + Boni + Garantie + Verknappung + Naming), dass Nein-Sagen schwerer faellt als Ja-Sagen. Auf der Page: Lead-Magnet und Pakete als Offer-Stack denken, nicht als Leistungsliste.
- **Testing-Disziplin**: EIN Split-Test pro Woche, zuerst above the fold (Headline + Bild), denn dort entsteht der groesste Hebel.
- Quellen: Buecher, kostenlose Kurse auf Acquisition.com. WICHTIG: eigene Hormozi-Framework-Extraktionen aus frueherem Projekt als Kontext-Datei wiederverwenden (bereits vorhanden, siehe eigener Fundus).

**Arsh Sanwarwala (ThrillX, Ecom-Landingpages + CRO):**
- Datengetriebene CRO statt Redesign: Heatmaps, User-Testing, A/B-Tests; die 3-4 groessten Hebel fixen statt alles neu
- Above-the-fold entscheidet: 5-Sekunden-Klarheit (was, fuer wen, warum jetzt), Message Match zwischen Ad/Quelle und H1
- Social Proof nahe an jedem CTA, konkrete Zahlen statt "Great product!"
- Friction reduzieren: kurze Formulare, klare naechste Schritte, Einwaende AUF der Seite beantworten (FAQ, Garantien)
- Persuasion Architecture: Seite gegen Kaufpsychologie-Prinzipien scoren, nicht gegen Geschmack
- Quellen (keine zentrale Wissensdatenbank, aber ergiebig): YouTube-Kanaele "Arsh Sanwarwala | ThrillX" und "@arshecommerce" (Teardown-Videos, Frameworks von Pages mit 20-40% CR), LinkedIn-Posts, thrillxdesign.com
- Workflow-Tipp: Teardown-Video-Transkripte oder LinkedIn-Frameworks als Text an Claude geben -> als Pruefraster auf eigene Page anwenden ("score diese Seite nach Sanwarwala-Kriterien")

### 9.4 Tech-Vokabular (damit Briefings praezise sind)
- **HTML**: Struktur/Inhalt. Semantisch schreiben: `<section>`, `<nav>`, `<footer>`, Ueberschriften-Hierarchie h1 > h2 > h3 (wichtig fuer SEO + Accessibility)
- **CSS**: Gestaltung. Unsere Seiten nutzen **Vanilla CSS mit Custom Properties** (`--ink`, `--signal` etc.) = Design-Tokens im Code. Eine Stelle aendern, alles erbt (gleiche Logik wie Wix Studio Site Styles)
- **Tailwind** (nicht "windtail"): Utility-CSS-Framework, Klassen wie `flex gap-4 text-xl` direkt im HTML. Wird bei React-Artifacts und Framework-Projekten genutzt. Fuer unsere Single-File-Seiten bewusst NICHT verwendet, Vanilla + Tokens ist dort lesbarer und portabler
- **Flexbox/Grid**: CSS-Layoutsysteme (Reihen/Spalten bzw. Raster). Grid-basiert bauen = sauberes Responsive, auch in Wix Studio
- **Responsive/Breakpoints**: Layout-Umbruchpunkte (z.B. 860px, 720px). Media Queries = die CSS-Regeln dafuer
- **Single-File**: alles (HTML+CSS+JS) in einer Datei, ideal fuer Mockups, Import-Tools und Weitergabe

Briefing-Beispiele: "3-Spalten-Grid, mobil 1 Spalte" / "Token --signal fuer alle CTAs" / "Breakpoint bei 720px" / "semantische Sections, eine h1 pro Seite".

### 9.5 Anti-Slop-Regeln (verbindlich fuer alle Projekte)
> Die BINDENDE Regel-Liste lebt jetzt in `CLAUDE.md`, Abschnitt "Anti-Slop" (dort pflegen, damit
> nichts driftet). Dieser Abschnitt bleibt als Begruendung + Beispiele erhalten, ist aber NICHT
> normativ: bei Widerspruch gewinnt CLAUDE.md.

Design:
- KEINE Default-AI-Looks: Creme-Hintergrund + Serif + Terracotta; Dark Mode + Neon-Akzent; Lila/Blau-Gradients mit Glassmorphism
- Palette und Typo aus der Welt der Zielgruppe herleiten (Beispiel MARVIN.WEB: Arbeitsblau + Signalgelb = Handwerker-Bildsprache), Entscheidung begruenden koennen
- EIN Signature-Element pro Seite (z.B. Gelb-Highlight im Hero), Rest diszipliniert. Nicht drei Gimmicks
- Keine Emojis als Icon-Ersatz, keine Dekoration ohne Funktion
- Nummerierte Marker (01/02/03) nur, wenn Inhalt wirklich eine Sequenz ist (Ablauf ja, Feature-Liste nein)

Copy:
- KEINE Gedankenstriche (feste Regel)
- Konkret schlaegt clever: "Live in 5 Werktagen" statt "Blitzschnell zu Ihrer Traumwebsite"
- Keine Floskeln: "in der heutigen digitalen Welt", "massgeschneiderte Loesungen", "Ihr Partner fuer", "revolutionaer", "nahtlos"
- Nutzenformulierung aus Kundensicht, aktive Verben, ein Job pro Element (Label labelt, CTA sagt exakt was passiert)
- Jede Zahl/Behauptung muss belegbar sein oder als Beispiel markiert werden

Code:
- CSS-Tokens statt hartcodierter Werte, konsistente Klassennamen, kein toter Code
- Barrierefreiheit als Standard: Kontraste, Fokus-Zustaende, reduced-motion respektieren (WCAG-Wissen aus Webflow-Zertifizierung anwenden)
- Erst Struktur-Plan, dann Code. Bei Aenderungen gezielt editieren statt neu generieren

### 9.6 Iterations-Workflow
1. Briefing mit Kontext-Datei + dieser Referenz
2. Claude liefert Struktur-/Design-Plan (Tokens, Sektionen) VOR dem Code
3. Erster Build als Single-File-Mockup
4. Feedback in Runden, gezielt pro Sektion ("Hero-Subline schaerfer", "Pakete-Karten enger"), nicht "alles nochmal"
5. Finale Version -> GitHub -> Hosting/Import (Kapitel 2/5)
