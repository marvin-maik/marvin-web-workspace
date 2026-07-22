/* Baeckerei Siebert · site.js v1
   Alles progressiv: ohne JS ist nichts versteckt, reduced-motion steigt frueh aus. */
(function(){
  "use strict";
  var reduziert = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.remove("no-js");
  if(!reduziert) document.documentElement.classList.add("js-motion");

  /* ---------- 1. Oeffnungszeiten-Status (Europe/Berlin) ----------
     Mo zu · Di-Fr 6:00-18:30 · Sa 6:00-13:30 · So zu
     Sommer 20.07.-15.08.2026: Di-Fr nur bis 16:30 */
  function statusText(){
    try{
      var jetzt = new Date(new Date().toLocaleString("en-US",{timeZone:"Europe/Berlin"}));
      var tag = jetzt.getDay(); // 0 So .. 6 Sa
      var min = jetzt.getHours()*60 + jetzt.getMinutes();
      var m = jetzt.getMonth()+1, d = jetzt.getDate();
      var sommer = (jetzt.getFullYear()===2026) && ((m===7&&d>=20)||(m===8&&d<=15));
      var schluss = sommer ? 16*60+30 : 18*60+30;
      function offenBis(bis){
        if(min < 6*60) return {t:"Heute ab 6:00 geöffnet", offen:true};
        if(min < bis){
          var h=Math.floor(bis/60), mm=(bis%60+"0").slice(0,2);
          return {t:"Heute geöffnet bis "+h+":"+mm, offen:true};
        }
        return null;
      }
      var s;
      if(tag>=2 && tag<=5) s = offenBis(schluss);
      else if(tag===6)     s = offenBis(13*60+30);
      if(!s){
        var naechster = (tag===6||tag===0||tag===1) ? "Dienstag" : "morgen";
        if(tag===5 && min>=schluss) naechster = "Samstag";
        s = {t:"Heute geschlossen · öffnet "+naechster+" 6:00", offen:false};
        if(tag===1) s.t = "Montag: Ruhetag · öffnet Dienstag 6:00";
      }
      return s;
    }catch(e){ return null; }
  }
  var s = statusText();
  if(s) document.querySelectorAll("[data-status]").forEach(function(el){
    el.textContent = s.t;
    el.classList.toggle("zu", !s.offen);
  });

  /* ---------- 2. Scroll-Reveals (robust gegen Schnell-Scroll) ---------- */
  if(!reduziert && "IntersectionObserver" in window){
    var ziele = document.querySelectorAll("[data-rv]");
    ziele.forEach(function(el,i){
      el.classList.add("rv");
      if(el.dataset.rv==="links") el.classList.add("links");
      if(el.dataset.d) el.style.setProperty("--d", el.dataset.d);
    });
    var offen = Array.prototype.slice.call(ziele);
    function zeige(el){
      el.classList.add("in");
      starteZahlen(el);
      var k=offen.indexOf(el); if(k>-1) offen.splice(k,1);
    }
    var io = new IntersectionObserver(function(eintraege){
      eintraege.forEach(function(e){
        if(e.isIntersecting || e.boundingClientRect.top < 0){
          zeige(e.target);
          io.unobserve(e.target);
        }
      });
    },{threshold:.12, rootMargin:"9999px 0px -40px 0px"});
    ziele.forEach(function(el){ io.observe(el); });
    /* Sicherheitsnetz: falls IO haengt (alte Browser, eingefrorene Panes),
       raeumt ein passiver Sweep beim Scrollen nach. */
    function sweep(){
      for(var k=offen.length-1;k>=0;k--){
        if(offen[k].getBoundingClientRect().top < innerHeight-40) zeige(offen[k]);
      }
      if(!offen.length) removeEventListener("scroll", sweep);
    }
    addEventListener("scroll", sweep, {passive:true});
    setTimeout(sweep, 500);
  } else {
    document.querySelectorAll("[data-rv] .zahl[data-ziel], .zahl[data-ziel]").forEach(function(z){
      z.textContent = z.dataset.format==="tsd" ? tsd(+z.dataset.ziel) : z.dataset.ziel;
    });
  }

  /* ---------- 3. Count-up ---------- */
  function tsd(n){ return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,"."); }
  function starteZahlen(rahmen){
    rahmen.querySelectorAll(".zahl[data-ziel]").forEach(function(el){
      if(el.dataset.fertig) return;
      el.dataset.fertig = "1";
      var ziel = +el.dataset.ziel, start = +(el.dataset.start||0);
      var t0=null, dauer=950;
      function tick(t){
        if(!t0) t0=t;
        var p = Math.min((t-t0)/dauer,1); p = 1-Math.pow(1-p,3);
        var w = Math.round(start+(ziel-start)*p);
        el.textContent = el.dataset.format==="tsd" ? tsd(w) : w;
        if(p<1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  /* ---------- 4. Zeitband (Sticky-Scrolly, Desktop + Motion; sonst statische Liste) ---------- */
  var band = document.querySelector(".zeitband");
  if(band){
    var stationen = Array.prototype.slice.call(band.querySelectorAll(".zb-liste .st")).map(function(st){
      return {j:st.getAttribute("data-jahr"), t:st.querySelector("p").textContent,
              img:st.getAttribute("data-bild")||"", alt:st.getAttribute("data-alt")||""};
    });
    var scrolly = !reduziert && matchMedia("(min-width:960px)").matches && stationen.length;
    if(scrolly){
      band.classList.add("scrolly");
      var jahrEl = band.querySelector(".zb-jahr"),
          textEl = band.querySelector(".zb-text"),
          bildEl = band.querySelector(".zb-bild img"),
          punkteWrap = band.querySelector(".zb-punkte"),
          live = document.createElement("span");
      live.className="sr-only"; live.setAttribute("aria-live","polite");
      band.querySelector(".zb-buehne").appendChild(live);
      var aktiv = -1;
      stationen.forEach(function(st,i){
        var b=document.createElement("button");
        b.type="button"; b.textContent=st.j;
        b.setAttribute("aria-label","Station "+st.j);
        b.addEventListener("click",function(){
          var ziel = band.getBoundingClientRect().top + scrollY
                   + (band.offsetHeight - innerHeight) * (i/(stationen.length-1));
          window.scrollTo({top:ziel, behavior:"smooth"});
        });
        punkteWrap.appendChild(b);
      });
      var punkte = punkteWrap.querySelectorAll("button");
      function setze(i){
        if(i===aktiv) return;
        aktiv=i;
        var st=stationen[i];
        jahrEl.textContent=st.j;
        textEl.textContent=st.t;
        if(st.img && bildEl && bildEl.getAttribute("src")!==st.img){
          bildEl.src=st.img; bildEl.alt=st.alt;
        }
        punkte.forEach(function(b,bi){ b.setAttribute("aria-current", bi===i?"true":"false"); });
        live.textContent="Station "+(i+1)+" von "+stationen.length+": "+st.j;
      }
      function aufScroll(){
        var r=band.getBoundingClientRect();
        var f=Math.min(1,Math.max(0, -r.top/(band.offsetHeight-innerHeight)));
        setze(Math.min(stationen.length-1, Math.floor(f*stationen.length)));
      }
      addEventListener("scroll", aufScroll, {passive:true});
      aufScroll();
    }
  }
})();
