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

  /* ---------- Mobile-Navigation (Burger) ---------- */
  var burger = document.querySelector(".nav-burger");
  var navLinks = document.getElementById("navLinks");
  if (burger && navLinks){
    function navSchliessen(){ navLinks.classList.remove("offen"); burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", "Menü öffnen"); }
    burger.addEventListener("click", function(){
      var offen = navLinks.classList.toggle("offen");
      burger.setAttribute("aria-expanded", offen ? "true" : "false");
      burger.setAttribute("aria-label", offen ? "Menü schließen" : "Menü öffnen");
    });
    navLinks.addEventListener("click", function(e){ if (e.target.closest("a")) navSchliessen(); });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape" && navLinks.classList.contains("offen")){ navSchliessen(); burger.focus(); } });
  }

  /* ---------- Consent (Externe Inhalte) ----------
     Kein Cookie-Tool: die Seite setzt keine Cookies. Der Banner steuert nur das Laden
     externer Inhalte (aktuell: Karten-CDN auf der Team-Seite). Ablehnen ist gleichwertig,
     die Wahl liegt im localStorage (technisch notwendig, kein Consent noetig) und ist
     jederzeit ueber "Datenschutz-Einstellungen" im Footer aenderbar. */
  var CONSENT_KEY = "rw-consent-v1";
  function consentLesen(){ try { return JSON.parse(localStorage.getItem(CONSENT_KEY) || "null"); } catch(e){ return null; } }
  var bannerEl = null;
  function bannerWeg(){ if (bannerEl){ bannerEl.remove(); bannerEl = null; } }
  function bannerZeigen(fokus){
    if (bannerEl) return;
    bannerEl = document.createElement("div");
    bannerEl.className = "consent-banner";
    bannerEl.setAttribute("role", "region");
    bannerEl.setAttribute("aria-label", "Datenschutz-Einstellungen");
    bannerEl.innerHTML =
      '<div class="cb-inner">' +
      '<p class="cb-kicker">Datenschutz · Externe Inhalte</p>' +
      '<p class="cb-text">Diese Seite setzt keine Cookies. Nur die interaktive Weltkarte lädt Kartendaten von einem externen Server (jsDelivr CDN). Dabei wird eure IP-Adresse übertragen. <a href="datenschutz.html">Details in der Datenschutzerklärung</a></p>' +
      '<div class="cb-aktionen">' +
      '<button type="button" class="cb-btn" data-wahl="nein">Ablehnen</button>' +
      '<button type="button" class="cb-btn" data-wahl="ja">Erlauben</button>' +
      '</div></div>';
    bannerEl.addEventListener("click", function(e){
      var b = e.target.closest(".cb-btn");
      if (b) window.rwConsent.setzen(b.getAttribute("data-wahl") === "ja");
    });
    document.body.appendChild(bannerEl);
    // Bei nutzerausgeloester Einblendung Fokus in den Banner setzen (nicht beim Auto-Load)
    if (fokus){ var ersterBtn = bannerEl.querySelector(".cb-btn"); if (ersterBtn) ersterBtn.focus(); }
  }
  window.rwConsent = {
    hat: function(){ var c = consentLesen(); return !!(c && c.extern); },
    entschieden: function(){ return consentLesen() !== null; },
    setzen: function(erlaubt){
      try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ extern: !!erlaubt, zeit: new Date().toISOString() })); } catch(e){}
      bannerWeg();
      document.dispatchEvent(new CustomEvent("rw-consent", { detail: { extern: !!erlaubt } }));
    },
    zeigen: bannerZeigen
  };
  if (!window.rwConsent.entschieden()) bannerZeigen();
  /* Widerrufs-Link in jeden Footer (Pflicht: Entscheidung muss aenderbar bleiben) */
  document.querySelectorAll(".foot-legal").forEach(function(fl){
    var btn = document.createElement("button");
    btn.type = "button"; btn.className = "consent-link"; btn.textContent = "Datenschutz-Einstellungen";
    btn.addEventListener("click", function(){ bannerZeigen(true); });
    fl.insertBefore(btn, fl.querySelector("span.mono"));
  });

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
    var eggEl = document.getElementById("rotEgg");        // Easter-Egg-Karte hinter der letzten
    var swipeHint = document.getElementById("rotSwipeHint");
    var deckIdx = 0;                                       // Mobil-Stapelposition 0..n (n = Egg)
    if (scrolly){ rotator.classList.add("scrolly"); slides.forEach(function(s){ s.style.transition = "none"; }); }
    if (mobil){ rotator.classList.add("mobil"); }

    /* Kartenwechsel fuer Screenreader ansagen: inaktive Karten sind inert/aria-hidden,
       ohne Ansage bekommt AT vom Wechsel (Scroll, Pfeile, Bogen-Labels) nichts mit. */
    var ansage = document.createElement("p");
    ansage.className = "sr-only";
    ansage.setAttribute("aria-live", "polite");
    rotator.appendChild(ansage);

    /* 3 Koffer-Varianten (klassisch, mit Gurten, Trolley); Neigung je Variante im CSS */
    var kofferVarianten = [
      '<span class="koffer-ic kv1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8.5 7.5V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><line x1="12" y1="10.5" x2="12" y2="16.5"/></svg></span>',
      '<span class="koffer-ic kv2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8.5 7.5V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><line x1="8.5" y1="7.5" x2="8.5" y2="19.5"/><line x1="15.5" y1="7.5" x2="15.5" y2="19.5"/></svg></span>',
      '<span class="koffer-ic kv3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6.5" y="6" width="11" height="13" rx="1.8"/><path d="M9.5 6V3.5h5V6"/><line x1="12" y1="9" x2="12" y2="16"/><line x1="8" y1="19" x2="8" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></svg></span>'
    ];
    var kofferZaehler = 0;   // karten-uebergreifend -> alle 3 Varianten kommen vor
    function marqueeFuellen(idx){
      if (!marquee) return;
      var orte = slides[idx].getAttribute("data-orte").split("|");
      var teile = [];
      orte.forEach(function(o, i){
        // Koordinaten-Prefix entfernen, Ortsname bleibt vollstaendig (auch mehrwortig, z.B. "Wadi Rum")
        var kurz = o.replace(/^[NSEW]\s[\d.]+\s*\/\s*[NSEW]\s[\d.]+\s*/, "").trim();
        teile.push("<span>" + kurz + "</span>");
        if (i % 2 === 1) teile.push(kofferVarianten[kofferZaehler++ % kofferVarianten.length]);
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
      if (h){
        var hh = Math.round(h * kartSkala());
        rotSlides.style.height = hh + "px";
        if (eggEl) eggEl.style.minHeight = hh + "px";   // Egg fuellt die Deckflaeche wie eine echte Karte
      }
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
      var titel = slides[aktiv].querySelector("h3");
      ansage.textContent = "Guide " + (aktiv + 1) + " von " + n + (titel ? ": " + titel.textContent : "");
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
        var op = 1 - Math.pow(a, 1.5);           // stetig bis 0 bei ar>=1 -> kein ploetzliches Spawnen/Despawnen
        s.style.transform = "translate(-50%,-50%) translate(" + x + "%," + y + "%) rotate(" + rot + "deg) scale(" + sc + ")";
        s.style.opacity = op.toFixed(2);
        s.style.zIndex = String(100 - Math.round(ar * 10));
        s.style.pointerEvents = ar < 0.5 ? "auto" : "none";
        s.setAttribute("aria-hidden", ar >= 0.5 ? "true" : "false");
        s.inert = ar >= 0.5;                     // inaktive Karten aus Tab-Reihenfolge + A11y-Baum nehmen
      });
      aktualisiereAktiv(Math.round(pos));
    }

    /* Mobile: Karten als Stapel. Oberste Karte folgt dem Finger (dx px), darunterliegende
       ragen versetzt hervor; weggewischte Karten fliegen nach links raus. */
    /* Eine Karte im Stapel positionieren. rel = Kartenindex - deckIdx. */
    function stapelKarte(el, rel, dx){
      el.inert = rel !== 0;                     // nur die oberste Karte ist fokussierbar
      if (rel === 0){                          // oberste Karte folgt dem Finger
        el.style.transform = "translate(-50%,-50%) translate(" + dx + "px,0) rotate(" + (dx * 0.03) + "deg)";
        el.style.opacity = "1"; el.style.zIndex = "30"; el.style.pointerEvents = "auto";
        el.setAttribute("aria-hidden", "false");
      } else if (rel < 0){                     // weggewischt: nach links raus
        el.style.transform = "translate(-50%,-50%) translate(-130%,0) rotate(-12deg)";
        el.style.opacity = "0"; el.style.zIndex = "0"; el.style.pointerEvents = "none";
        el.setAttribute("aria-hidden", "true");
      } else if (rel <= 2){                    // dahinter: nach oben versetzt + schmaler + minimal geneigt (wie abgelegt)
        var neig = rel === 1 ? 1.5 : -2;
        el.style.transform = "translate(-50%,-50%) translate(0," + (rel * -30) + "px) rotate(" + neig + "deg) scale(" + (1 - rel * 0.02) + ")";
        el.style.opacity = "1"; el.style.zIndex = String(30 - rel * 10); el.style.pointerEvents = "none";
        el.setAttribute("aria-hidden", "true");
      } else {
        el.style.opacity = "0"; el.style.zIndex = "0"; el.style.pointerEvents = "none";
        el.setAttribute("aria-hidden", "true");
      }
    }
    function renderStack(dx){
      dx = dx || 0;
      slides.forEach(function(s, i){ stapelKarte(s, i - deckIdx, dx); });
      if (!eggEl) return;
      var eRel = n - deckIdx;
      eggEl.inert = eRel !== 0;   /* verstecktes Egg samt Link aus Tab-Reihenfolge + A11y-Baum */
      if (eRel === 0){                         // Egg ist oben (letzte Karte weggewischt)
        eggEl.style.transform = "translate(-50%,-50%) translate(" + dx + "px,0) rotate(" + (dx * 0.03) + "deg)";
        eggEl.style.opacity = "1"; eggEl.style.zIndex = "30"; eggEl.style.pointerEvents = "auto";
        eggEl.setAttribute("aria-hidden", "false");
      } else if (eRel === 1){                  // versteckt hinter der letzten Karte: taucht beim Ziehen nach links auf
        var fort = Math.min(1, Math.max(0, -dx / 150));
        eggEl.style.transform = "translate(-50%,-50%) scale(" + (0.94 + 0.06 * fort) + ")";
        eggEl.style.opacity = fort.toFixed(2); eggEl.style.zIndex = "5"; eggEl.style.pointerEvents = "none";
        eggEl.setAttribute("aria-hidden", "true");
      } else {
        eggEl.style.opacity = "0"; eggEl.style.zIndex = "0"; eggEl.style.pointerEvents = "none";
        eggEl.setAttribute("aria-hidden", "true");
      }
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
        deckIdx = Math.max(0, Math.min(n - 1, i));  // Pfeile/Labels: nur Routen, nicht das Egg
        slides.forEach(function(s){ s.style.transition = ""; });
        if (eggEl) eggEl.style.transition = "";
        aktualisiereAktiv(deckIdx);
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
      // oberstes Element im Deck (Karte 0..n-1 oder Egg an Position n)
      function obenEl(){ return deckIdx < n ? slides[deckIdx] : eggEl; }
      function transitionAus(an){
        var o = obenEl(); if (o) o.style.transition = an ? "none" : "";
        if (eggEl) eggEl.style.transition = an ? "none" : "";   // Egg taucht beim Ziehen fluessig auf
      }
      rotSlides.addEventListener("touchstart", function(e){
        if (e.touches.length !== 1) return;
        startX = e.touches[0].clientX; startY = e.touches[0].clientY;
        ziehen = true; drag = 0; horiz = false;
        transitionAus(true);
      }, { passive: true });
      rotSlides.addEventListener("touchmove", function(e){
        if (!ziehen) return;
        var dx = e.touches[0].clientX - startX, dy = e.touches[0].clientY - startY;
        if (!horiz){
          if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
          horiz = Math.abs(dx) > Math.abs(dy);
          if (!horiz){ ziehen = false; transitionAus(false); return; }
        }
        if ((deckIdx === 0 && dx > 0) || (deckIdx === n && dx < 0)) dx *= 0.3;   // Widerstand an den Enden
        drag = dx;
        e.preventDefault();
        renderStack(drag);
      }, { passive: false });
      function swipeEnde(){
        if (!ziehen) return; ziehen = false;
        transitionAus(false);
        if (drag < -55 && deckIdx < n){ deckIdx++; if (swipeHint) swipeHint.classList.add("weg"); }
        else if (drag > 55 && deckIdx > 0){ deckIdx--; if (swipeHint) swipeHint.classList.add("weg"); }
        if (deckIdx < n) aktualisiereAktiv(deckIdx);   // Egg (Pos n) laesst die letzte Route aktiv
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
        div.setAttribute("aria-hidden", "true");   /* Zeilen-Link traegt aria-label, Kacheln sind Deko */
        var voll = text.padEnd(breiten[spalte], " ");
        for (var i = 0; i < voll.length; i++){
          var b = document.createElement("b");
          /* i >= text.length ⇒ reine Auffuell-Kachel am Zeilenende (mobil ausgeblendet),
             sonst interner Wortabstand wie in "EUER PLAN" (bleibt sichtbar) */
          if (voll[i] === " "){ b.className = i >= text.length ? "leer pad" : "leer"; b.innerHTML = "&nbsp;"; }
          else b.textContent = voll[i];
          div.appendChild(b);
        }
        zeile.appendChild(div);
      });
    });
  });

  /* ---------- Abflugtafel: eigener Scroll-Indikator (iOS zeigt native Scrollbar nicht) ---------- */
  document.querySelectorAll(".tafel").forEach(function(tafel){
    var bar = document.createElement("div");
    bar.className = "tafel-scroll";
    var daumen = document.createElement("b");
    bar.appendChild(daumen);
    tafel.after(bar);
    function aktualisieren(){
      var scrollbar = tafel.scrollWidth - tafel.clientWidth;
      if (scrollbar <= 2){ bar.style.display = "none"; return; }
      bar.style.display = "block";
      var spur = bar.clientWidth;
      var breite = Math.max(36, spur * tafel.clientWidth / tafel.scrollWidth);
      var pos = (spur - breite) * (tafel.scrollLeft / scrollbar);
      daumen.style.width = breite + "px";
      daumen.style.transform = "translateX(" + pos + "px)";
    }
    tafel.addEventListener("scroll", aktualisieren, { passive: true });
    window.addEventListener("resize", aktualisieren);
    aktualisieren();
  });

  /* ---------- Formular-Botschutz: Honeypot + Zeit-Falle (unsichtbar, kein externer Dienst) ---------- */
  document.querySelectorAll("form:has([name='_gotcha'])").forEach(function(form){
    var geladen = Date.now();
    var MINDEST = 2500; /* ms bis zum ersten erlaubten Absenden: schneller = Bot */
    form.addEventListener("submit", function(e){
      var hp = form.querySelector("[name='_gotcha']");
      /* Honeypot ausgefuellt: sicher ein Bot, still blockieren */
      if (hp && hp.value){ e.preventDefault(); return; }
      /* Zu schnell abgeschickt: wahrscheinlich Bot. Echten Menschen einen Hinweis geben,
         der zweite Versuch liegt automatisch ueber der Schwelle und geht durch. */
      if (Date.now() - geladen < MINDEST){
        e.preventDefault();
        var hinweis = form.querySelector(".schutz-hinweis");
        if (!hinweis){
          hinweis = document.createElement("p");
          hinweis.className = "schutz-hinweis kleingedruckt";
          hinweis.setAttribute("role", "status");
          hinweis.textContent = "Einen Moment noch, bitte gleich erneut absenden.";
          form.appendChild(hinweis);
        }
      }
    });
  });

  /* ---------- Split-Flap-Buttons: Buchstaben klappen bei Hover/Fokus ---------- */
  var FLAP_POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  document.querySelectorAll(".btn-flap").forEach(function(btn){
    var basis = btn.dataset.text || btn.textContent.trim();
    var alt = btn.dataset.alt || basis;
    /* A11y: der Text wird gleich in Einzel-Kacheln zerlegt und beim Flip durch
       Zufallszeichen gewuerfelt. Fester Name ans Element, Kacheln raus aus dem
       A11y-Baum (display:contents haelt das Flex-Gap-Layout intakt). */
    btn.setAttribute("aria-label", btn.textContent.trim() || basis);
    var lang = Math.max(basis.length, alt.length);
    basis = basis.padEnd(lang, " "); alt = alt.padEnd(lang, " ");
    btn.textContent = "";
    var deck = document.createElement("span");
    deck.setAttribute("aria-hidden", "true");
    deck.style.display = "contents";
    for (var i = 0; i < lang; i++){
      var b = document.createElement("b");
      b.textContent = basis[i] === " " ? "\u00A0" : basis[i];
      deck.appendChild(b);
    }
    btn.appendChild(deck);
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

  /* ---------- Lade-Intro: Submark -> Wortmarke -> Zoom durchs Pin-Loch ----------
     Nur index.html (Weiche: Inline-Skript im <head> setzt html.intro-wartet, 1x pro
     Sitzung, nie bei reduced motion). Ablauf: R + Pin stehen mittig (Submark), Pin
     popped, Standort-Ping; die Buchstaben sliden mit 6-Grad-Tilt auf ihre Wortmarken-
     Plaetze; schneller Zoom auf den Pin, in dem sich ein transparentes Loch bis
     Vollbild oeffnet (SVG-Maske, roter Rand blendet aus). Gesamt ~3,8s.
     Wortmarken-Pfade 1:1 aus handoff/logo.svg (nie aus freigabe/, siehe _design.md). */
  (function(){
    var html = document.documentElement;
    if (!html.classList.contains("intro-wartet")) return;
    try {
    var VB = { x: 4.4, y: -69.3, w: 779, h: 90.3 };
    var PIN_X = 114.7, PIN_Y = -33.5;
    var R_PFAD = "M19.700-25.100L19.700 0L5.400 0L5.400-67L36.500-67Q47.900-67 54.750-61.700Q61.600-56.400 61.600-46.100Q61.600-37.500 56.400-32.650Q51.200-27.800 42.600-26.800Q46.300-25.800 48.750-23.550Q51.200-21.300 53.600-17.400L64.200 0L47.700 0L36.400-19Q34.400-22.400 31.850-23.750Q29.300-25.100 24.900-25.100L19.700-25.100M36-54.300L19.700-54.300L19.700-36.600L36-36.600Q46.600-36.600 46.600-45.400Q46.600-54.300 36-54.300";
    var TINTE_LB = [
      "M196.800 1Q182.600 1 175.600-6.400Q168.600-13.800 168.600-29.400L168.600-67L182.900-67L182.900-29.200Q182.900-20.600 186.250-16.700Q189.600-12.800 196.900-12.800Q204.300-12.800 207.550-16.650Q210.800-20.500 210.800-29.200L210.800-67L225.100-67L225.100-29.400Q225.100-13.700 218.150-6.350Q211.200 1 196.800 1",
      "M277.600-54.300L277.600 0L263.300 0L263.300-54.300L243.300-54.300L243.300-67L297.600-67L297.600-54.300",
      "M365.600-12.700L365.600 0L316.400 0L316.400-67L365.600-67L365.600-54.300L330.700-54.300L330.700-40.200L359.900-40.200L359.900-27.500L330.700-27.500L330.700-12.700",
      "M400.700-28.600L400.700 0L386.400 0L386.400-67L400.300-67L424.100-32L430.200-21.500L429.300-37.300L429.300-67L443.600-67L443.600 0L430 0L405.600-35.300L399.600-45.200"
    ];
    var ROT_LB = [
      "M506.100-35.100L497.400 0L478.100 0L462-67L478.500-67L485.600-30.400L488.100-10.100L491.600-28.800L500.300-67L519.200-67L527.800-28.800L531.200-10.100L533.800-30.400L541-67L557.400-67L541.200 0L521.900 0L513.300-35.100L509.700-56.800",
      "M625-12.700L625 0L575.800 0L575.800-67L625-67L625-54.300L590.100-54.300L590.100-40.200L619.300-40.200L619.300-27.500L590.100-27.500L590.100-12.700",
      "M660.100-25.100L660.100 0L645.800 0L645.800-67L676.900-67Q688.300-67 695.150-61.700Q702-56.400 702-46.100Q702-37.500 696.800-32.650Q691.600-27.800 683-26.800Q686.700-25.800 689.150-23.550Q691.600-21.300 694-17.400L704.600 0L688.100 0L676.800-19Q674.800-22.400 672.250-23.750Q669.700-25.100 665.300-25.100L660.100-25.100M676.400-54.300L660.100-54.300L660.100-36.600L676.400-36.600Q687-36.600 687-45.400Q687-54.300 676.400-54.300",
      "M737.600-18.800L737.600 0L723.300 0L723.300-67L737.600-67L737.600-48L737.200-35.400L746.500-46.800L764.600-67L781.400-67L758.100-40.500L782.400 0L765.900 0L748-30.100"
    ];
    function lbs(pfade){
      return pfade.map(function(d){ return '<path class="intro-lb" d="' + d + '"/>'; }).join("");
    }
    var huelle = document.createElement("div");
    huelle.className = "intro-huelle";
    huelle.setAttribute("aria-hidden", "true");
    huelle.innerHTML =
      '<svg class="intro-deck">' +
        '<defs><mask id="rwIntroLoch"><rect width="100%" height="100%" fill="#fff"/><circle class="intro-hole" r="0" fill="#000"/></mask></defs>' +
        '<g mask="url(#rwIntroLoch)">' +
          '<rect class="intro-vorhang" width="100%" height="100%"/>' +
          '<svg class="intro-wm" viewBox="' + VB.x + ' ' + VB.y + ' ' + VB.w + ' ' + VB.h + '">' +
            '<circle class="intro-ping" cx="114.7" cy="-33.5" r="34.7"/>' +
            '<g class="intro-tinte"><path class="intro-r" d="' + R_PFAD + '"/>' + lbs(TINTE_LB) + '</g>' +
            '<g class="intro-rot">' + lbs(ROT_LB) +
              '<g class="intro-ziel"><circle cx="114.7" cy="-33.5" r="34.7"/><path d="M114.7 20 86.2 -16.2h56.9z"/></g>' +
            '</g>' +
          '</svg>' +
        '</g>' +
        '<circle class="intro-rand" r="0" opacity="0"/>' +
      '</svg>';
    document.body.appendChild(huelle);
    html.classList.remove("intro-wartet"); /* ::before-Vorhang weg, Overlay uebernimmt */

    var deck = huelle.querySelector(".intro-deck");
    var wm = huelle.querySelector(".intro-wm");
    var hole = huelle.querySelector(".intro-hole");
    var rand = huelle.querySelector(".intro-rand");

    /* Wortmarke zentriert einpassen (68vw, mobil 86vw, max 900px) */
    var W = window.innerWidth, H = window.innerHeight;
    var wmW = Math.min(W * (W < 640 ? .86 : .68), 900);
    var wmH = wmW * VB.h / VB.w;
    var wmX = (W - wmW) / 2, wmY = (H - wmH) / 2;
    wm.setAttribute("x", wmX); wm.setAttribute("y", wmY);
    wm.setAttribute("width", wmW); wm.setAttribute("height", wmH);
    var skal = wmW / VB.w;
    var pinPx = { x: wmX + (PIN_X - VB.x) * skal, y: wmY + (PIN_Y - VB.y) * skal };

    /* Phase A: R + Pin mittig (Submark-Komposition), Rest folgt beim Recentre */
    var rpinMitteVB = (5.4 + 150) / 2;
    var versatz = W / 2 - (wmX + (rpinMitteVB - VB.x) * skal);
    wm.style.transform = "translateX(" + versatz + "px)";

    /* Buchstaben starten im Pin (--dx = Weg vom Pin zur Endposition) */
    wm.querySelectorAll(".intro-lb").forEach(function(p, i){
      var box = p.getBBox();
      p.style.setProperty("--dx", ((PIN_X - (box.x + box.width / 2)) * skal) + "px");
      p.style.setProperty("--dl", (i * .05) + "s");
    });

    /* Skip: Klick oder Escape beendet das Intro sofort (Wiederkehrer mit geblocktem
       sessionStorage sehen es sonst jedes Mal in voller Laenge) */
    function ende(){
      clearTimeout(notaus);
      document.removeEventListener("keydown", tasteSkip);
      huelle.remove();
    }
    function tasteSkip(e){ if (e.key === "Escape") ende(); }
    huelle.addEventListener("click", ende);
    document.addEventListener("keydown", tasteSkip);
    var notaus = setTimeout(ende, 7000); /* Sicherheitsgurt, falls eine Phase haengt */

    void wm.getBoundingClientRect();
    wm.classList.add("spielt");

    setTimeout(function(){                       /* Phase B: Tilt-Slide + Recentre */
      wm.style.transition = "transform .8s cubic-bezier(.22,.8,.3,1)";
      wm.style.transform = "translateX(0)";
      wm.classList.add("formt");
    }, 1250);

    setTimeout(function(){                       /* Phase C: Zoom durchs Loch */
      var ZOOM = 14, DAUER = 950;
      wm.classList.add("zoomt");                 /* Ping stoppen, sonst pingt es im Zoom */
      var dist = Math.hypot(Math.max(pinPx.x, W - pinPx.x), Math.max(pinPx.y, H - pinPx.y));
      var rEnde = dist / ZOOM + 10;
      hole.setAttribute("cx", pinPx.x); hole.setAttribute("cy", pinPx.y);
      rand.setAttribute("cx", pinPx.x); rand.setAttribute("cy", pinPx.y);
      deck.style.transformOrigin = pinPx.x + "px " + pinPx.y + "px";
      deck.animate([{ transform: "scale(1)" }, { transform: "scale(" + ZOOM + ")" }],
        { duration: DAUER, easing: "cubic-bezier(.55,0,.85,.4)", fill: "forwards" });
      hole.animate([{ r: "0px" }, { r: rEnde + "px" }],
        { duration: DAUER - 150, delay: 150, easing: "cubic-bezier(.55,0,.85,.4)", fill: "forwards" });
      rand.animate([{ r: "0px", opacity: .55 }, { r: rEnde + "px", opacity: 0 }],
        { duration: DAUER - 150, delay: 150, easing: "cubic-bezier(.55,0,.85,.4)", fill: "forwards" });
      setTimeout(function(){ ende(); }, DAUER + 80);
    }, 2750);
    } catch (e) {
      /* Intro darf die Seite NIE blockieren: Vorhang weg, Overlay weg, weiter */
      html.classList.remove("intro-wartet");
      var kaputt = document.querySelector(".intro-huelle");
      if (kaputt) kaputt.remove();
    }
  })();
})();
