/* MARLOU site.js: Reveals, Routen-Rotator, Marquee. Vanilla, kein Framework. */
(function(){
  "use strict";
  var ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Scroll-Reveals (Pattern aus technik-patterns.md, Schnell-Scroll-sicher) ---------- */
  if (!ruhig && "IntersectionObserver" in window){
    var ziele = document.querySelectorAll("[data-rv]");
    ziele.forEach(function(el){ el.classList.add("rv"); });
    var io = new IntersectionObserver(function(eintraege){
      eintraege.forEach(function(e){
        if (e.isIntersecting || e.boundingClientRect.top < 0){
          e.target.classList.add("sichtbar");
          io.unobserve(e.target);
        }
      });
    }, {threshold:.12, rootMargin:"9999px 0px -40px 0px"});
    ziele.forEach(function(el){ io.observe(el); });
  }

  /* ---------- Routen-Rotator (Highlight 1, nur Startseite) ---------- */
  var rotator = document.getElementById("rotator");
  if (rotator){
    var slides = rotator.querySelectorAll(".rot-slide");
    var n = slides.length;
    var aktiv = 0;
    var marquee = document.getElementById("rotMarquee");
    var scrolly = window.matchMedia("(min-width: 861px)").matches && !ruhig;
    if (scrolly) rotator.classList.add("scrolly");

    function marqueeFuellen(idx){
      if (!marquee) return;
      var orte = slides[idx].getAttribute("data-orte").split("|");
      var teile = [];
      orte.forEach(function(o){
        teile.push("<span>" + o + "</span>");
        teile.push('<span class="thumb" aria-hidden="true"></span>');
      });
      var track = '<div class="marquee-track">' + teile.join("") + teile.join("") + "</div>";
      marquee.innerHTML = track;
    }

    function setAktiv(idx){
      aktiv = (idx + n) % n;
      slides.forEach(function(s, i){ s.classList.toggle("aktiv", i === aktiv); });
      for (var i = 0; i < n; i++){
        var dot = document.getElementById("rotdot" + i);
        var lab = document.getElementById("rotlab" + i);
        if (dot){
          dot.setAttribute("r", i === aktiv ? 11 : 6.5);
          dot.setAttribute("fill", i === aktiv ? "var(--signal)" : "var(--bg)");
          dot.setAttribute("stroke", i === aktiv ? "var(--signal)" : "var(--muted)");
        }
        if (lab) lab.classList.toggle("aktiv", i === aktiv);
      }
      marqueeFuellen(aktiv);
    }

    /* Scroll-Steuerung: sticky Buehne, Fortschritt bestimmt die aktive Route.
       Kein Scroll-Jacking: natives Scrollen bleibt unangetastet. */
    var manuellBis = 0;
    if (scrolly){
      var tick = false;
      window.addEventListener("scroll", function(){
        if (tick) return;
        tick = true;
        requestAnimationFrame(function(){
          tick = false;
          if (performance.now() < manuellBis) return;
          var r = rotator.getBoundingClientRect();
          var spanne = r.height - window.innerHeight;
          if (spanne <= 0) return;
          var f = Math.min(.999, Math.max(0, -r.top / spanne));
          var idx = Math.floor(f * n);
          if (idx !== aktiv) setAktiv(idx);
        });
      }, {passive:true});
    }

    /* Pfeile + Punkte: immer verfuegbar (Mobile, reduced-motion, Ungeduld) */
    window.rotZeige = function(i){
      setAktiv(i);
      manuellBis = performance.now() + 1200; /* Scroll-Handler kurz zurueckhalten */
    };
    window.rotBlaettern = function(richtung){ window.rotZeige(aktiv + richtung); };

    setAktiv(0);
  }

  /* ---------- Statische Marquees (data-marquee: Inhalt verdoppeln) ---------- */
  document.querySelectorAll("[data-marquee]").forEach(function(m){
    var inhalt = m.innerHTML;
    m.innerHTML = '<div class="marquee-track">' + inhalt + inhalt + "</div>";
  });
})();
