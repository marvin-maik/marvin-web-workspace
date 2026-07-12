/* ROUTENWERK (Demo) site.js: Reveals, Routen-Rotator, Marquee. Vanilla, kein Framework. */
(function(){
  "use strict";
  var ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Nahtloses Endlos-Marquee: Basis-Sequenz so oft wiederholen, dass EINE Gruppe mindestens
     Container-Breite fuellt (sonst wandert bei der -100%-Schleife eine Luecke durch, sobald
     der Inhalt schmaler als der Viewport ist). Dann zwei identische Gruppen. Tempo bleibt
     konstant, weil die Dauer proportional zur Gruppenbreite gesetzt wird (~13 px/s). */
  var MARQUEE_GAP = 26, MARQUEE_PXPS = 13;
  function baueMarquee(el, basisHTML){
    if (!el) return;
    el.innerHTML = '<div class="marquee-group">' + basisHTML + '</div>';
    var einheit = el.firstChild ? el.firstChild.getBoundingClientRect().width : 0;
    var breite = el.getBoundingClientRect().width;
    var wdh = (einheit > 0 && breite > 0) ? Math.max(1, Math.ceil(breite / einheit) + 1) : 4;
    var gruppe = "";
    for (var k = 0; k < wdh; k++) gruppe += basisHTML;
    el.innerHTML = '<div class="marquee-group">' + gruppe + '</div><div class="marquee-group" aria-hidden="true">' + gruppe + "</div>";
    var g = el.querySelectorAll(".marquee-group");
    var gw = g[0] ? g[0].getBoundingClientRect().width : 0;
    if (gw > 0){
      var dauer = (gw + MARQUEE_GAP) / MARQUEE_PXPS;
      g[0].style.animationDuration = dauer + "s";
      g[1].style.animationDuration = dauer + "s";
    }
  }

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

  /* ---------- Routen-Rotator (Highlight 1, nur Startseite) ----------
     Kurven-Coverflow: die Buehne bleibt sticky stehen; der Scroll fuehrt die Karten
     entlang der Bogenlinie durch (naechste kommt von oben rechts, aktive zentriert).
     Bewegung erst, wenn die Sektion voll steht (Dead-Zones), und endet vor dem Verlassen. */
  var rotator = document.getElementById("rotator");
  if (rotator){
    var slides = rotator.querySelectorAll(".rot-slide");
    var rotSlides = rotator.querySelector(".rot-slides");
    var rotHint = rotator.querySelector(".rot-hint");
    var n = slides.length;
    var aktiv = -1;
    var marquee = document.getElementById("rotMarquee");
    var scrolly = window.matchMedia("(min-width: 861px)").matches && !ruhig;
    var mobil = window.matchMedia("(max-width: 860px)").matches;
    var ctaMobil = document.getElementById("rotCta");
    var swipeHint = document.getElementById("rotSwipeHint");
    if (scrolly){ rotator.classList.add("scrolly"); slides.forEach(function(s){ s.style.transition = "none"; }); }
    if (mobil){ rotator.classList.add("mobil"); }

    var kofferIcon = '<span class="koffer-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8.5 7.5V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><line x1="12" y1="10.5" x2="12" y2="16.5"/></svg></span>';
    function marqueeFuellen(idx){
      if (!marquee) return;
      var orte = slides[idx].getAttribute("data-orte").split("|");
      var teile = [];
      orte.forEach(function(o, i){
        // Koordinaten-Prefix entfernen, Ortsname bleibt vollstaendig (auch mehrwortig, z.B. "Wadi Rum")
        var kurz = o.replace(/^[NSEW]\s[\d.]+\s*\/\s*[NSEW]\s[\d.]+\s*/, "").trim();
        teile.push("<span>" + kurz + "</span>");
        if (i % 2 === 1) teile.push(kofferIcon);
      });
      baueMarquee(marquee, teile.join(""));
    }

    /* Auf kurzen Viewports (Laptops) Karten proportional verkleinern, damit Karten + Ticker
       ohne Ueberlappung und ohne Abschneiden in die gepinnte Buehne passen. */
    function kartSkala(){ var h = window.innerHeight; if (!scrolly || h >= 840) return 1; return Math.max(0.72, (h - 250) / 590); }
    /* Buehnenhoehe = groesste Karte * Skala (Karten sind absolut, sonst kollabiert die Buehne) */
    function buehneHoehe(){
      var h = 0;
      slides.forEach(function(s){ h = Math.max(h, s.offsetHeight); });
      if (h) rotSlides.style.height = Math.round(h * kartSkala()) + "px";
    }

    /* Aktive Karte wechseln: Punkte/Labels/Marquee nachziehen; auf Mobil den CTA nach der
       letzten Karte einblenden. */
    function aktualisiereAktiv(idx){
      if (idx === aktiv) return;
      aktiv = idx;
      for (var i = 0; i < n; i++){
        var dot = document.getElementById("rotdot" + i);
        var lab = document.getElementById("rotlab" + i);
        if (dot){
          dot.setAttribute("r", i === aktiv ? 11 : 6.5);
          dot.setAttribute("fill", i === aktiv ? "var(--signal)" : "var(--bg)");
          dot.setAttribute("stroke", i === aktiv ? "var(--signal)" : "var(--muted)");
        }
        if (lab){ lab.classList.toggle("aktiv", i === aktiv); lab.setAttribute("aria-current", i === aktiv ? "true" : "false"); }
      }
      marqueeFuellen(aktiv);
      if (ctaMobil) ctaMobil.classList.toggle("sichtbar", aktiv === n - 1);
    }

    /* Desktop-Coverflow: pos 0..n-1 kontinuierlich. Jede Karte liegt nach ihrer Distanz zur
       aktiven Position auf der Bogenlinie: rel>0 -> oben rechts, rel<0 -> oben links. */
    function render(pos){
      slides.forEach(function(s, i){
        var rel = i - pos;
        var ar = Math.abs(rel);
        var a = Math.min(1, ar);
        var x = rel * 96;                 // % Kartenbreite: grosser Abstand -> keine Ueberlappung
        var y = -a * 20;                  // % hoch: folgt dem Bogen (Raender hoeher)
        var rot = rel * 8;                // Neigung entlang der Kurve
        var sc = (1 - a * 0.16) * kartSkala();
        var op = ar >= 1 ? 0 : (1 - a * 0.55);   // nur direkte Nachbarkarte sichtbar
        s.style.transform = "translate(-50%,-50%) translate(" + x + "%," + y + "%) rotate(" + rot + "deg) scale(" + sc + ")";
        s.style.opacity = op.toFixed(2);
        s.style.zIndex = String(100 - Math.round(ar * 10));
        s.style.pointerEvents = ar < 0.5 ? "auto" : "none";
        s.setAttribute("aria-hidden", ar >= 0.5 ? "true" : "false");
      });
      aktualisiereAktiv(Math.round(pos));
    }

    /* Mobile: Karten als Stapel. Oberste Karte folgt dem Finger (dx px), darunterliegende
       ragen versetzt hervor; weggewischte Karten fliegen nach links raus. */
    function renderStack(dx){
      dx = dx || 0;
      slides.forEach(function(s, i){
        var rel = i - aktiv;
        if (rel < 0){
          // weggewischt: nach links raus
          s.style.transform = "translate(-50%,-50%) translate(-130%,0) rotate(-12deg)";
          s.style.opacity = "0"; s.style.zIndex = "0"; s.style.pointerEvents = "none";
          s.setAttribute("aria-hidden", "true");
        } else if (rel === 0){
          // oberste Karte folgt dem Finger
          s.style.transform = "translate(-50%,-50%) translate(" + dx + "px,0) rotate(" + (dx * 0.03) + "deg)";
          s.style.opacity = "1"; s.style.zIndex = "30"; s.style.pointerEvents = "auto";
          s.setAttribute("aria-hidden", "false");
        } else if (rel <= 2){
          // dahinterliegende Karten: nach OBEN versetzt (Versatz > Skalen-Verkuerzung) + leicht
          // schmaler -> Stapel schaut als Streifen oben hervor
          s.style.transform = "translate(-50%,-50%) translate(0," + (rel * -30) + "px) scale(" + (1 - rel * 0.02) + ")";
          s.style.opacity = "1"; s.style.zIndex = String(30 - rel * 10); s.style.pointerEvents = "none";
          s.setAttribute("aria-hidden", "true");
        } else {
          s.style.opacity = "0"; s.style.zIndex = "0"; s.style.pointerEvents = "none";
          s.setAttribute("aria-hidden", "true");
        }
      });
    }

    /* Dead-Zones: erste + letzte LEAD des Scroll-Wegs stehen still (Karte "angekommen",
       bevor sie sich bewegt / bevor die Sektion losgelassen wird). */
    var LEAD = 0.18;
    var manuellBis = 0;
    /* Sanftes Nachziehen (Lerp): istPos gleitet weich auf zielPos zu, statt 1:1 dem
       Scroll zu folgen -> geschmeidigere Kartenbewegung. */
    var zielPos = 0, istPos = 0, animAktiv = false;
    function easeLoop(){
      var diff = zielPos - istPos;
      if (Math.abs(diff) < 0.0015){ istPos = zielPos; render(istPos); animAktiv = false; return; }
      istPos += diff * 0.13;
      render(istPos);
      requestAnimationFrame(easeLoop);
    }
    function starteEase(){ if (!animAktiv){ animAktiv = true; requestAnimationFrame(easeLoop); } }
    if (scrolly){
      window.addEventListener("scroll", function(){
        if (performance.now() < manuellBis) return;
        var r = rotator.getBoundingClientRect();
        var spanne = r.height - window.innerHeight;
        if (spanne <= 0) return;
        var fRaw = Math.min(1, Math.max(0, -r.top / spanne));
        var f = Math.min(1, Math.max(0, (fRaw - LEAD) / (1 - 2 * LEAD)));
        zielPos = f * (n - 1);
        if (rotHint){ rotHint.style.opacity = f < 0.8 ? "1" : Math.max(0, (1 - f) / 0.2).toFixed(2); }
        starteEase();
      }, {passive:true});
    }

    /* Punkte/Pfeile: im Scroll-Modus zur passenden Scroll-Position springen (Dead-Zone
       einrechnen), sonst (Mobile/reduced-motion) direkt die Karte setzen. */
    window.rotZeige = function(i){
      if (scrolly){
        i = (i + n) % n;
        var docTop = rotator.getBoundingClientRect().top + window.scrollY;
        var spanne = rotator.offsetHeight - window.innerHeight;
        var fRaw = LEAD + (i / (n - 1)) * (1 - 2 * LEAD);
        window.scrollTo({ top: docTop + fRaw * spanne, behavior: "smooth" });
      } else if (mobil){
        i = Math.max(0, Math.min(n - 1, i));       // Deck: clampen statt umlaufen
        slides.forEach(function(s){ s.style.transition = ""; });
        aktualisiereAktiv(i);
        renderStack(0);
      } else {
        i = (i + n) % n;
        render(i);
        manuellBis = performance.now() + 1000;
      }
    };
    window.rotBlaettern = function(richtung){ window.rotZeige((aktiv < 0 ? 0 : aktiv) + richtung); };

    /* Bogen-Labels per Tastatur bedienbar (Enter/Space): sie ersetzen die im Scroll-Modus
       ausgeblendeten Pfeil-Buttons als fokussierbare Navigation. */
    slides.forEach(function(_, i){
      var lab = document.getElementById("rotlab" + i);
      if (lab) lab.addEventListener("keydown", function(e){
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar"){ e.preventDefault(); window.rotZeige(i); }
      });
    });

    /* Mobile: Deck per Finger durchwischen. Oberste Karte folgt horizontal; ab Schwelle
       blaettern (weiter/zurueck), sonst zurueckschnappen. Vertikales Wischen = Seiten-Scroll. */
    if (mobil){
      var startX = 0, startY = 0, ziehen = false, drag = 0, horiz = false;
      rotSlides.addEventListener("touchstart", function(e){
        if (e.touches.length !== 1) return;
        startX = e.touches[0].clientX; startY = e.touches[0].clientY;
        ziehen = true; drag = 0; horiz = false;
        if (slides[aktiv]) slides[aktiv].style.transition = "none";
      }, { passive: true });
      rotSlides.addEventListener("touchmove", function(e){
        if (!ziehen) return;
        var dx = e.touches[0].clientX - startX, dy = e.touches[0].clientY - startY;
        if (!horiz){
          if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
          horiz = Math.abs(dx) > Math.abs(dy);
          if (!horiz){ ziehen = false; if (slides[aktiv]) slides[aktiv].style.transition = ""; return; }
        }
        if ((aktiv === 0 && dx > 0) || (aktiv === n - 1 && dx < 0)) dx *= 0.3;   // Widerstand am Ende
        drag = dx;
        e.preventDefault();
        renderStack(drag);
      }, { passive: false });
      function swipeEnde(){
        if (!ziehen) return; ziehen = false;
        if (slides[aktiv]) slides[aktiv].style.transition = "";
        if (drag < -55 && aktiv < n - 1){ aktualisiereAktiv(aktiv + 1); if (swipeHint) swipeHint.classList.add("weg"); }
        else if (drag > 55 && aktiv > 0){ aktualisiereAktiv(aktiv - 1); if (swipeHint) swipeHint.classList.add("weg"); }
        drag = 0;
        renderStack(0);
      }
      rotSlides.addEventListener("touchend", swipeEnde, { passive: true });
      rotSlides.addEventListener("touchcancel", swipeEnde, { passive: true });
    }

    buehneHoehe();
    var rotResizeT;
    window.addEventListener("resize", function(){
      buehneHoehe();
      if (mobil){ renderStack(0); }
      else if (aktiv >= 0){ render(istPos); }
      clearTimeout(rotResizeT);
      rotResizeT = setTimeout(function(){ if (aktiv >= 0) marqueeFuellen(aktiv); }, 200);
    });
    if (mobil){ aktualisiereAktiv(0); renderStack(0); }
    else { render(0); }
    // Nach dem Laden der Mono-Schrift neu vermessen (Wortbreiten aendern sich)
    if (document.fonts && document.fonts.ready){ document.fonts.ready.then(function(){ if (aktiv >= 0) marqueeFuellen(aktiv); }); }
  }

  /* ---------- Statische Marquees (data-marquee): nahtlos, breiten-adaptiv ---------- */
  var statischeMarquees = [];
  document.querySelectorAll("[data-marquee]").forEach(function(m){
    statischeMarquees.push({ el: m, basis: m.innerHTML });
    baueMarquee(m, m.innerHTML);
  });
  if (statischeMarquees.length){
    function statischeNeu(){ statischeMarquees.forEach(function(s){ baueMarquee(s.el, s.basis); }); }
    var statT;
    window.addEventListener("resize", function(){ clearTimeout(statT); statT = setTimeout(statischeNeu, 200); });
    if (document.fonts && document.fonts.ready){ document.fonts.ready.then(statischeNeu); }
  }

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
    var laeuft = false, pending = null;
    function setzen(ziel){
      kacheln.forEach(function(k, i){ k.textContent = ziel[i] === " " ? "\u00A0" : ziel[i]; });
    }
    /* Laeuft ein Flip, wird das neue Ziel gemerkt (pending) statt abgebrochen \u2014
       so klappt die Animation IMMER bis 100% durch, auch bei kurzem Hover. */
    function flip(ziel){
      if (ruhig){ setzen(ziel); return; }
      if (laeuft){ pending = ziel; return; }
      laeuft = true;
      var fertig = 0;
      kacheln.forEach(function(k, i){
        var schritte = 3 + (i % 4), n = 0;
        var iv = setInterval(function(){
          n++;
          if (n >= schritte){
            k.textContent = ziel[i] === " " ? "\u00A0" : ziel[i];
            clearInterval(iv);
            if (++fertig === kacheln.length){
              laeuft = false;
              if (pending !== null && pending !== ziel){ var p = pending; pending = null; flip(p); }
              else pending = null;
            }
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
