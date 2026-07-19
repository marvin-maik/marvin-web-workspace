// MARVIN.WEB — gemeinsames Script (Uhr, Mobile-Nav, Scroll-Reveals)

// Lokale Uhrzeit in der Meta-Zeile (rein dekorativ, kein externer Request)
(function () {
  var el = document.getElementById('clock');
  if (!el) return;
  function tick() { el.textContent = new Date().toLocaleTimeString('de-DE'); }
  tick();
  // WCAG 2.2.2: auto-aktualisierende Anzeige nur, wenn keine reduzierte Bewegung gewuenscht ist
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setInterval(tick, 1000);
})();

// Mobile-Navigation
(function () {
  var btn = document.querySelector('.burger');
  var nav = document.querySelector('nav');
  if (!btn || !nav) return;
  function setOpen(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Schließen' : 'Menü';
  }
  btn.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
  // Menue schliesst bei Link-Klick (wichtig fuer Anker-Links) und bei Escape
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) { setOpen(false); btn.focus(); }
  });
})();

// Scroll-Reveals: JS fuegt .rv erst hinzu — ohne JS/mit reduced-motion ist nichts versteckt
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;
  var els = document.querySelectorAll('.sec-head, .h-lg, .lede, .pain, .value, .pkg, .step, .docket, .ref-slot, .case, .stack, .guarantee-band, .fact, .case-ctas, .about-grid > *, .abo-grid > *, .contact-grid > *');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      // isIntersecting: normal. top<0: beim schnellen Scrollen vorbeigesprungen -> sofort zeigen
      if (e.isIntersecting || e.boundingClientRect.top < 0) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  // rootMargin oben riesig: uebersprungene Elemente gelten als "im Bereich" und werden gemeldet
  }, { threshold: 0.12, rootMargin: '9999px 0px -40px 0px' });
  els.forEach(function (el, i) {
    el.classList.add('rv');
    el.style.transitionDelay = (i % 4) * 70 + 'ms';
    io.observe(el);
  });
})();

// Formular-Botschutz: Honeypot + Zeit-Falle (unsichtbar, kein externer Dienst, DSGVO-clean)
(function () {
  document.querySelectorAll("form:has([name='_gotcha'])").forEach(function (form) {
    var geladen = Date.now();
    var tsFeld = form.querySelector("[name='_ts']");
    if (tsFeld) { tsFeld.value = String(geladen); } // Zeitstempel fuer serverseitige Zeit-Falle
    var MINDEST = 2500; // ms bis zum ersten erlaubten Absenden: schneller = Bot
    form.addEventListener('submit', function (e) {
      var hp = form.querySelector("[name='_gotcha']");
      // Honeypot ausgefuellt: sicher ein Bot, still blockieren
      if (hp && hp.value) { e.preventDefault(); return; }
      // Zu schnell abgeschickt: wahrscheinlich Bot. Echten Menschen einen Hinweis geben,
      // der zweite Versuch liegt automatisch ueber der Schwelle und geht durch.
      if (Date.now() - geladen < MINDEST) {
        e.preventDefault();
        var hinweis = form.querySelector('.schutz-hinweis');
        if (!hinweis) {
          hinweis = document.createElement('p');
          hinweis.className = 'schutz-hinweis';
          hinweis.setAttribute('role', 'status');
          hinweis.textContent = 'Einen Moment noch, bitte gleich erneut absenden.';
          form.appendChild(hinweis);
        }
      }
    });
  });
})();

// Designfiles-Popup (Case-Study): nativer <dialog>. Ohne JS oder ohne dialog-Support
// bleibt der Trigger ein normaler Link und oeffnet das Bild im neuen Tab.
(function () {
  var trigger = document.querySelector('.blick-trigger');
  var dialog = document.getElementById('blick-dialog');
  if (!trigger || !dialog || typeof dialog.showModal !== 'function') return;
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    dialog.showModal();
    document.documentElement.style.overflow = 'hidden'; // Seite hinter dem Popup nicht scrollen
  });
  dialog.querySelector('.blick-close').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close(); // Klick auf den Backdrop
  });
  dialog.addEventListener('close', function () {
    document.documentElement.style.overflow = '';
    trigger.focus(); // Fokus zurueck zum Ausloeser
  });
})();

// Live-Vorschau (Case-Study): Geraete-Umschalter wie bei Template-Vorschauen.
// Der iframe bekommt echte Geraete-Breite und wird skaliert, wenn er nicht reinpasst.
(function () {
  var stage = document.querySelector('.live-stage');
  if (!stage) return;
  var frame = stage.querySelector('.live-frame');
  var knoepfe = document.querySelectorAll('.shot-geraete button');
  var BREITEN = { mac: 1440, tablet: 768, iphone: 375 };
  // Feste Geraete-Viewporthoehe fuer die iPhone-Ansicht: so wird im iframe 100dvh/100vh = echte
  // Handy-Hoehe und die Mobile-Layouts sehen aus wie auf einem realen Geraet (uebliche dvh-Proportion),
  // statt in den kurzen Buehnenausschnitt gestaucht. Dafuer wird die Ansicht minimal kleiner skaliert.
  // Ein Knopf zum Drehen: 812 = volles iPhone X, 740 = mit Browserleiste, 667 = iPhone SE.
  var HOEHEN = { iphone: 740 };
  // Routenwerk waehlt Desktop-Coverflow vs. Mobile-Kartenstapel EINMAL beim Laden (matchMedia
  // an der 861px-Grenze, ohne change-Listener). Damit die iPhone-/Tablet-Ansicht wirklich die
  // Mobile-Variante zeigt (statt das Desktop-Layout nur zu quetschen), laden wir den iframe neu,
  // sobald ein Geraete-Wechsel diese Grenze kreuzt -> die Demo bootet frisch in der richtigen Variante.
  var GRENZE = 860;
  function istMobil(dev) { return (BREITEN[dev] || 1440) <= GRENZE; }
  var geladenMobil = null; // in welcher Variante der iframe zuletzt gebootet hat (null = noch nie geladen)
  frame.addEventListener('load', function () { geladenMobil = istMobil(stage.dataset.device); });
  // Auf kleinen Screens direkt in der iPhone-Ansicht starten (Mac-Ansicht waere winzig)
  if (window.innerWidth <= 700) {
    stage.dataset.device = 'iphone';
    knoepfe.forEach(function (x) { x.setAttribute('aria-pressed', x.dataset.device === 'iphone' ? 'true' : 'false'); });
  }
  function layout() {
    var breite = BREITEN[stage.dataset.device] || 1440;
    var hoehe = HOEHEN[stage.dataset.device];
    if (hoehe) {
      // Mobile mit fester dvh-Hoehe: echtes Geraetefenster (Breite x Hoehe) proportional in die
      // Buehne einpassen und mittig zentrieren. Minimal kleiner skaliert, dafuer echte dvh im iframe.
      var scaleM = Math.min(stage.clientWidth / breite, stage.clientHeight / hoehe, 1);
      frame.style.width = breite + 'px';
      frame.style.height = hoehe + 'px';
      frame.style.transform = 'scale(' + scaleM + ')';
      frame.style.marginLeft = Math.max(0, (stage.clientWidth - breite * scaleM) / 2) + 'px';
      frame.style.marginTop = Math.max(0, (stage.clientHeight - hoehe * scaleM) / 2) + 'px';
    } else {
      // Desktop (Mac): Breite skaliert, Hoehe fuellt die Buehne (Ausschnitt der langen Startseite).
      var scaleD = Math.min(1, stage.clientWidth / breite);
      frame.style.width = breite + 'px';
      frame.style.height = Math.ceil(stage.clientHeight / scaleD) + 'px';
      frame.style.transform = 'scale(' + scaleD + ')';
      frame.style.marginLeft = Math.max(0, (stage.clientWidth - breite * scaleD) / 2) + 'px';
      frame.style.marginTop = '0px';
    }
  }
  knoepfe.forEach(function (b) {
    b.addEventListener('click', function () {
      knoepfe.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      stage.dataset.device = b.dataset.device;
      layout();
      // Wechsel kreuzt die Desktop/Mobile-Grenze? Dann iframe frisch booten lassen (cross-origin-
      // sicher ueber src-Neuzuweisung; contentWindow.reload() ist bei fremder Origin blockiert).
      if (geladenMobil !== null && istMobil(stage.dataset.device) !== geladenMobil) {
        frame.src = frame.src;
      }
    });
  });
  window.addEventListener('resize', layout, { passive: true });
  layout();

  // Live-Hinweis ausblenden, sobald der Nutzer das Fenster entdeckt hat:
  // Maus drueber, Klick in den iframe (Fokuswechsel) oder nach 8s Sichtbarkeit (Touch).
  var cue = stage.querySelector('.live-cue');
  function cueWeg() { if (cue) { cue.classList.add('weg'); cue = null; } }
  stage.addEventListener('pointerenter', cueWeg, { once: true });
  window.addEventListener('blur', function () {
    if (document.activeElement === frame) cueWeg();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (eintraege, io) {
      eintraege.forEach(function (e) {
        if (e.isIntersecting) { setTimeout(cueWeg, 8000); io.disconnect(); }
      });
    }, { threshold: 0.4 }).observe(stage);
  }
})();
