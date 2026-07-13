# Technik-Patterns (kampferprobt im marvin-web-Projekt, Juli 2026)

Wiederverwendbare Loesungen fuer alle kommenden Projekte. Jedes Pattern hat sich im
echten Build + QA bewaehrt. Bei neuen Builds: erst hier nachsehen, dann neu erfinden.

## Typografie

**Satzweises Umbrechen von Headlines** (Umbrueche an Satzgrenzen, voll responsiv):
```html
<h2><span class="satz">Drei Pakete.</span> <span class="satz">Ein Festpreis.</span></h2>
```
```css
.satz{display:inline-block}   /* bricht bevorzugt ZWISCHEN Saetzen, intern nur im Notfall */
h1,h2{text-wrap:pretty}       /* verhindert Waisen-Woerter */
```

**Riesen-Uppercase-Display (Porto-Rezept):** Weight 600-700 (nicht 900), line-height .92,
letter-spacing -0.012em, **word-spacing .16em** (Uppercase braucht mehr Wortabstand,
sonst schlechte Lesbarkeit). Type-Scale mit grossem Sprung: Labels 12px -> Display 10vw+.

**Lange deutsche Woerter in Headlines** ("ÜBERRASCHUNGEN."): `overflow-wrap:break-word;
hyphens:auto` als Sicherheitsnetz + Mobile-Floor der clamp() hoch genug (44px+) und real testen.

**Deutsche Anfuehrungszeichen:** `&bdquo;...&ldquo;` — nie gerade ASCII-Quotes in Copy.

## Layout

**Spalten-Guides ueber volle Seitenhoehe** (Werkstatt-Look): 1px-Divs, position absolute
inset 0. WICHTIG: Positionen auf die CONTENT-Box rechnen, sonst liegen sie neben den
Grid-Kanten der Sektionen (Doppellinien-Bug):
```css
.guides i:nth-child(1){left:calc(28px + (100% - 56px)*.25)}  /* 28px = wrap-padding */
```
Und: `position:relative;z-index:2` auf alles, was UEBER den Guides liegen soll (dunkle Banner).

**Spaltenuebergreifend ausgerichtete Karten** (Absaetze starten auf gleicher Hoehe,
egal wie die h3 umbricht) — CSS Subgrid mit Fallback:
```css
@supports(grid-template-rows:subgrid){
  .card{display:grid;grid-template-rows:subgrid;grid-row:span 3;align-content:start}
}
```

**Bilder nie beschneiden:** `img{display:block;width:100%;height:auto}` — Container folgt
dem Bild, nicht umgekehrt. object-fit:cover nur wenn Beschnitt explizit gewollt (wirkt
sonst "gezoomt", Kundenfeedback!).

**Mobile Meta-/Banner-Zeilen:** KEINE nbsp-Ketten zwischen Elementen, die umbrechen
koennen muessen. Muster: `<span style="white-space:nowrap">fixer Teil ·</span> <a>CTA</a>`
— genau EINE definierte Umbruchstelle, CTA bricht als Ganzes.

**Footer-Riesen-Wortmarke:** `white-space:nowrap` + clamp so, dass sie in den Container
passt (Text ragt sonst unsichtbar ueber die Box -> horizontaler Scroll, schwer zu finden;
Symptom: scrollWidth > innerWidth, aber kein Element im Rect-Scan). `overflow-x:clip` als Gurt.

## Scroll-getriebener Rotator (Sticky-Filmstreifen, kampferprobt ROUTENWERK)

Sticky-Buehne + horizontaler Track, den der Scroll durchschiebt (Island->Albanien->Jordanien):
- Sektion `height:300vh` (nur Desktop, `@media(min-width:861px)`), innere `.rot-buehne`
  `position:sticky;top:0;min-height:100vh;justify-content:center`.
- Track = flex-Row, Slides `flex:0 0 100%`, Fenster `.rot-slides{overflow:hidden}`.
- Scroll-Handler: `f = clamp(-rotator.getBoundingClientRect().top / (offsetHeight-innerHeight), 0,1)`,
  `pos = f*(n-1)`, `track.style.transform = translateX(-pos * slideWidth + "px")`.
  WICHTIG: translateX in PIXELN (pos*slideWidth), NICHT in `%` — `%` bezieht sich auf die
  Track-BOX-Breite (= Fensterbreite), nicht auf den Inhalt -> viel zu kleiner Weg.
- Nachbarkarten dimmen/skalieren nach `dist=|i-pos|` (Coverflow-Gefuehl).
- Scrolly-Modus: `track.style.transition="none"` (sonst schmiert der Scroll). Mobile/reduced-motion:
  NICHT scrolly -> CSS-Transition am Track lassen, Pfeile/Punkte setzen den Index direkt.
- Punkt-Klick: zur Scroll-Position springen via `docTop = getBoundingClientRect().top + scrollY`
  (NICHT offsetTop, das ist bei verschachtelten Sektionen ungenau).
- TEST-FALLE: `html{scroll-behavior:smooth}` laesst JEDEN window.scrollTo sanft animieren ->
  Messungen direkt nach scrollTo lesen Zwischenzustaende. Zum Testen `behavior:'instant'`
  oder scroll-behavior temporaer auf `auto`.

## Micro-Animations (Vanilla, kein GSAP unter ~50KB-Seiten)

**Scroll-Reveals, robust:** JS fuegt .rv erst hinzu (ohne JS nichts versteckt), reduced-motion
steigt vorher aus. KRITISCH gegen Schnell-Scroll-Bug (Elemente springen am Viewport vorbei
und bleiben unsichtbar — IO feuert ohne Threshold-Kreuzung NICHT):
```js
new IntersectionObserver(cb, {threshold:.12, rootMargin:'9999px 0px -40px 0px'})
// riesiger rootMargin oben: uebersprungene Elemente gelten als sichtbar
// zusaetzlich im Callback: if (e.isIntersecting || e.boundingClientRect.top < 0) reveal
```

**Massband-Linie zeichnen:** `@keyframes drawRule{from{clip-path:inset(0 100% 0 0)}...}`

**Hover-Set diszipliniert:** Karten-Lift (translate -3px + Hard-Shadow), Nav-Underline-Slide
(background-size 0->100%), Akzent-Farbwechsel auf EINEM Element pro Karte. KEIN Zoom auf
Personen-Fotos (Kundenfeedback: unangenehm).

## Bild-Pipeline (macOS, ohne externe Tools)

1. Crop: `sips -c <hoehe> <breite> --cropOffset <y> <x> original.jpg --out out.jpg`
2. Resize: `sips --resampleWidth 900 out.jpg --out out.jpg`
3. **EXIF strippen — ACHTUNG: sips schleppt EXIF sogar durch PNG-Roundtrips mit!**
   Zuverlaessig nur via AppKit-Reencode (osascript JXA):
   NSImage -> TIFFRepresentation -> NSBitmapImageRep -> representationUsingType JPEG.
   Check: `strings bild.jpg | grep -i "snapseed\|GPS\|20..:"`
4. Originale NIE im Deploy-Ordner lassen (werden mitveroeffentlicht, inkl. Metadaten) —
   nach `_fundus/fotos/`.

## Verifikation im Browser (Claude-Workflow)

- **Hintergrund-Tabs pausieren IntersectionObserver + rAF** — Messungen in nicht-sichtbaren
  Tabs zeigen faelschlich "Animation kaputt". Erst Screenshot erzwingen (rendert einen Frame)
  oder Tab sichtbar machen.
- **Chrome cached CSS/Bilder aggressiv beim einfachen Reload** — bei "Aenderung wirkt nicht":
  erst Cache pruefen (`link.href='styles.css?v='+Date.now()`), nicht Code debuggen.
- **Cache-Falle auch fuers HTML-Dokument** (nicht nur Assets): `python3 -m http.server`
  schickt keine no-cache-Header, Chrome zeigt dann alte Seiten trotz geaenderter Datei.
  DAUERHAFTE LOESUNG: Dev-Server mit no-store-Header nutzen statt `-m http.server` ->
  `_referenz/serve-nocache.py <port> <dir>` (in launch.json eintragen). Danach ist jeder
  Reload frisch. ACHTUNG: bereits gecachte Seiten brauchen EINMAL Cmd+Shift+R, dann greift no-store.
  Asset-Versionierung (`styles.css?v=N`) bleibt trotzdem gute Praxis fuer den Launch.
- **Kaputtes Bild (naturalWidth 0) rendert keine Transforms** — wirkt wie CSS-Bug, ist Laden.
- **python http.server ist single-threaded** — parallele Requests hakeln; Messung nach
  Reload 1-2s warten. Server-Tod zeigt sich als "alles laedt aus Cache".
- Messen schlaegt Anschauen: getBoundingClientRect, Kontrast rechnen, getComputedStyle.

## Cloudflare Pages Deploy (wrangler)

- Login: `npx wrangler login` laeuft ueber Browser-OAuth auf localhost:8976 — **zuegig
  klicken** (Timeout!) und immer die FRISCHE Consent-Seite nutzen (alter Tab -> state-mismatch).
- `npx wrangler pages project create <name> --production-branch main`
- `npx wrangler pages deploy <ordner> --project-name <name> --branch main`
- Pages macht automatisch Pretty URLs: /seite.html -> 308 -> /seite. Interne .html-Links
  funktionieren (Redirect), fuer lokale file://-Kompatibilitaet drin lassen.

## Dienste-Erfahrungen

- **Cal.eu statt cal.com**: EU-Hosting, DSGVO-freundlichste Variante. Public-Link:
  cal.eu/<username>/<slug>. Als schlichter Link einbinden = kein Consent noetig.
- **Formspree**: Formular erst im Dashboard anlegen (Add New -> New Form), Endpoint-Format
  formspree.io/f/<id>. AVV/DPA gesondert abschliessen (Datenschutzerklaerung verspricht es).
- **Fontshare**: woff2 direkt vom CDN ziehen und selbst hosten (Lizenz erlaubt kommerziell).

## Consent-Gate fuer externe Inhalte (ohne Cookie-Tool)
Stand: Routenwerk v43. Wenn eine statische Seite KEINE Cookies setzt und nur einzelne
externe Ladungen hat (CDN-Scripts, Embeds), braucht es kein Cookie-Tool: ein eigener
Banner steuert das Nachladen. Kernpunkte, die es DSGVO-fest machen:
- Externe <script src>-Tags entfernen; Laden erst nach Zustimmung dynamisch
  (`document.createElement("script")` in Promise-Kette), Init-Code als `window.__xInit`.
- Ablehnen und Erlauben GLEICH gestaltet (gleiche Groesse/Farbe), Banner blockiert nicht.
- Wahl in localStorage (technisch notwendig, selbst consent-frei) + CustomEvent
  (`rw-consent`), auf das Seiten-Scripts hoeren.
- Widerruf: Button "Datenschutz-Einstellungen" wird per JS in jeden `.foot-legal` injiziert.
- Ohne Zustimmung: Platzhalter mit eigenem "Laden und zustimmen"-Button (Zwei-Klick-Muster
  wie bei YouTube-Embeds).
- Beweis beim Testen: `typeof d3 === "undefined"` + 0 CDN-Requests VOR Klick, geladen danach.
Code: projekte/routenwerk/site.js (Consent-Block) + ueber-uns.html (Globus-Gate).

## Sichtbarer Scroll-Indikator fuer horizontal scrollbare Boxen (Mobile)
Problem: `overflow-x:auto` scrollt zwar, aber iOS Safari rendert `::-webkit-scrollbar`
NICHT (Overlay-Scrollbar erscheint nur waehrend des Wischens). Ergebnis: die Box wirkt
rechts abgeschnitten statt scrollbar, niemand ahnt, dass man wischen kann.
Loesung: native Scrollbar aus (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`),
eigener Balken als Sibling darunter. JS setzt Daumen-Breite = sichtbarer Anteil
(spur*clientWidth/scrollWidth, min 36px) und Position = scrollLeft-Ratio per translateX;
Listener auf scroll (passive) + resize. Blendet sich aus, wenn nicht ueberlaufend (Desktop).
Farbe im Seiten-Look (hier Solari-Gold auf Linien-Grau).
Code: projekte/routenwerk/site.js (".tafel"-Block) + styles.css (.tafel-scroll).
