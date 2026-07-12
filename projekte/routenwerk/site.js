/* ROUTENWERK (Demo) site.js: Reveals, Routen-Rotator, Marquee. Vanilla, kein Framework. */
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

    var kofferIcon = '<span class="koffer-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8.5 7.5V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><line x1="12" y1="10.5" x2="12" y2="16.5"/></svg></span>';
    function marqueeFuellen(idx){
      if (!marquee) return;
      var orte = slides[idx].getAttribute("data-orte").split("|");
      var teile = [];
      orte.forEach(function(o, i){
        // Koordinaten-Eintraege auf den Ortsnamen kuerzen (weniger Text, Feedback Marvin)
        var kurz = /^[NSEW]\s/.test(o) ? o.trim().split(" ").pop() : o;
        teile.push("<span>" + kurz + "</span>");
        if (i % 2 === 1) teile.push(kofferIcon);
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

  /* ---------- Abflugtafel: Zeilen aus data-Attributen in Klapp-Kacheln zerlegen ---------- */
  document.querySelectorAll("[data-tafel]").forEach(function(brett){
    var breiten = [13, 13, 5, 9];
    brett.querySelectorAll("[data-zeile]").forEach(function(zeile){
      var werte = zeile.getAttribute("data-zeile").split("|");
      werte.forEach(function(text, spalte){
        var div = document.createElement("div");
        div.className = "flaps" + (spalte === 3 ? " st" : "");
        var voll = text.padEnd(breiten[spalte], " ");
        for (var i = 0; i < voll.length; i++){
          var b = document.createElement("b");
          if (voll[i] === " "){ b.className = "leer"; b.innerHTML = "&nbsp;"; }
          else b.textContent = voll[i];
          div.appendChild(b);
        }
        zeile.appendChild(div);
      });
    });
  });

  /* ---------- Split-Flap-Buttons: Buchstaben klappen bei Hover/Fokus ---------- */
  var FLAP_POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  document.querySelectorAll(".btn-flap").forEach(function(btn){
    var basis = btn.dataset.text || btn.textContent.trim();
    var alt = btn.dataset.alt || basis;
    var lang = Math.max(basis.length, alt.length);
    basis = basis.padEnd(lang, " "); alt = alt.padEnd(lang, " ");
    btn.textContent = "";
    for (var i = 0; i < lang; i++){
      var b = document.createElement("b");
      b.textContent = basis[i] === " " ? "\u00A0" : basis[i];
      btn.appendChild(b);
    }
    var kacheln = btn.querySelectorAll("b");
    var laeuft = false;
    function setzen(ziel){
      kacheln.forEach(function(k, i){ k.textContent = ziel[i] === " " ? "\u00A0" : ziel[i]; });
    }
    function flip(ziel){
      if (ruhig || laeuft){ setzen(ziel); return; }
      laeuft = true;
      var fertig = 0;
      kacheln.forEach(function(k, i){
        var schritte = 3 + (i % 4), n = 0;
        var iv = setInterval(function(){
          n++;
          if (n >= schritte){
            k.textContent = ziel[i] === " " ? "\u00A0" : ziel[i];
            clearInterval(iv);
            if (++fertig === kacheln.length) laeuft = false;
          } else {
            k.textContent = FLAP_POOL[Math.floor(Math.random() * FLAP_POOL.length)];
          }
        }, 65 + i * 6);
      });
    }
    btn.addEventListener("mouseenter", function(){ flip(alt); });
    btn.addEventListener("mouseleave", function(){ flip(basis); });
    btn.addEventListener("focus", function(){ flip(alt); });
    btn.addEventListener("blur", function(){ flip(basis); });
  });
})();
