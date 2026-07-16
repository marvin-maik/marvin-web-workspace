/* Landingpages: Reveals + Count-up + Ladebalken-Rennen. Kein Formular, kein externer Dienst. */
(function(){
  "use strict";
  var reduziert = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Scroll-Reveals: JS fuegt .rv erst hinzu (ohne JS nichts versteckt).
     rootMargin oben riesig: schnell uebersprungene Elemente gelten als sichtbar
     (IO feuert sonst ohne Threshold-Kreuzung nicht, siehe technik-patterns). */
  var revealbar = document.querySelectorAll("[data-rv]");
  if (!reduziert && "IntersectionObserver" in window && revealbar.length) {
    var io = new IntersectionObserver(function(eintraege){
      eintraege.forEach(function(e){
        if (e.isIntersecting || e.boundingClientRect.top < 0) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, {threshold:.12, rootMargin:"9999px 0px -40px 0px"});
    revealbar.forEach(function(el, i){
      el.classList.add("rv");
      el.style.transitionDelay = Math.min(i % 4 * 70, 210) + "ms";
      io.observe(el);
    });
  }

  /* Count-up: <span data-zaehler="552">552</span> — steht im HTML bereits auf dem
     Endwert (ohne JS/reduced-motion korrekt), zaehlt einmalig hoch, wenn sichtbar. */
  var zaehler = document.querySelectorAll("[data-zaehler]");
  if (!reduziert && "IntersectionObserver" in window && zaehler.length) {
    var ioZ = new IntersectionObserver(function(eintraege){
      eintraege.forEach(function(e){
        if (!e.isIntersecting) return;
        ioZ.unobserve(e.target);
        var el = e.target, ziel = parseInt(el.getAttribute("data-zaehler"), 10);
        if (!ziel) return;
        var start = null, dauer = 1100;
        function tick(ts){
          if (start === null) start = ts;
          var f = Math.min((ts - start) / dauer, 1);
          f = 1 - Math.pow(1 - f, 3); /* ease-out */
          el.textContent = Math.round(ziel * f);
          if (f < 1) requestAnimationFrame(tick);
        }
        el.textContent = "0";
        requestAnimationFrame(tick);
        /* Sicherheitsnetz: Endwert steht spaetestens nach dauer+500ms, egal was rAF tut */
        setTimeout(function(){ el.textContent = ziel; }, dauer + 500);
      });
    }, {threshold:.6});
    zaehler.forEach(function(el){ ioZ.observe(el); });
  }

  /* Ladebalken-Rennen (schnell.html): startet einmalig beim Sichtbarwerden.
     reduced-motion/ohne JS: CSS zeigt den Endzustand statisch. */
  var rennen = document.querySelector("[data-rennen]");
  if (rennen && !reduziert && "IntersectionObserver" in window) {
    var ioR = new IntersectionObserver(function(eintraege){
      eintraege.forEach(function(e){
        if (!e.isIntersecting) return;
        ioR.unobserve(e.target);
        e.target.classList.add("los");
      });
    }, {threshold:.5});
    ioR.observe(rennen);
  }
})();
