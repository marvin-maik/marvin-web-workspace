// MARVIN.WEB — gemeinsames Script (Uhr, Mobile-Nav, Scroll-Reveals)

// Lokale Uhrzeit in der Meta-Zeile (rein dekorativ, kein externer Request)
(function () {
  var el = document.getElementById('clock');
  if (!el) return;
  function tick() { el.textContent = new Date().toLocaleTimeString('de-DE'); }
  tick(); setInterval(tick, 1000);
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
  var els = document.querySelectorAll('.sec-head, .h-lg, .lede, .pain, .value, .pkg, .step, .docket, .ref-slot, .case, .stack, .guarantee-band, .about-grid > *, .abo-grid > *, .contact-grid > *');
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
