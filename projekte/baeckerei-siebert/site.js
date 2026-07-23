/* Bäckerei Siebert · site.js · alles progressiv, reduced-motion steigt früh aus */
(function(){
  "use strict";
  var reduziert = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.remove("no-js");
  if(!reduziert) document.documentElement.classList.add("js-motion");

  /* ---------- 1. Öffnungszeiten-Status (Europe/Berlin) ----------
     Mo Ruhetag · Di–Fr 6:00–18:30 · Sa 6:00–13:30 · So zu
     Sommer 20.07.–15.08.2026: Di–Fr nur bis 16:30 */
  function status(){
    try{
      var j = new Date(new Date().toLocaleString("en-US",{timeZone:"Europe/Berlin"}));
      var tag=j.getDay(), min=j.getHours()*60+j.getMinutes(), m=j.getMonth()+1, d=j.getDate();
      var sommer=(j.getFullYear()===2026)&&((m===7&&d>=20)||(m===8&&d<=15));
      var schluss=sommer?16*60+30:18*60+30;
      function bis(x){
        if(min<6*60) return {t:"Heute ab 6:00 geöffnet",offen:true};
        if(min<x){var h=Math.floor(x/60),mm=("0"+(x%60)).slice(-2);return {t:"Heute geöffnet bis "+h+":"+mm,offen:true};}
        return null;
      }
      var s;
      if(tag>=2&&tag<=5) s=bis(schluss);
      else if(tag===6) s=bis(13*60+30);
      if(!s){
        if(tag===1) s={t:"Montag: Ruhetag · öffnet Dienstag 6:00",offen:false};
        else if(tag===0) s={t:"Sonntag geschlossen · öffnet Dienstag 6:00",offen:false};
        else if(tag===6) s={t:"Heute geschlossen · Samstag ab 6:00",offen:false};
        else s={t:"Jetzt geschlossen · morgen ab 6:00",offen:false};
        if(tag===5&&min>=schluss) s={t:"Heute geschlossen · Samstag ab 6:00",offen:false};
      }
      return s;
    }catch(e){return null;}
  }
  var s=status();
  if(s) document.querySelectorAll("[data-status]").forEach(function(el){
    el.textContent=s.t; el.classList.toggle("zu",!s.offen);
  });

  /* ---------- 1b. Mobile-Navigation (Burger) ---------- */
  var burger=document.querySelector(".nav-burger"),navBox=document.getElementById("navLinks");
  if(burger&&navBox){
    function navZu(){navBox.classList.remove("offen");burger.setAttribute("aria-expanded","false");burger.setAttribute("aria-label","Menü öffnen");}
    burger.addEventListener("click",function(){
      var offen=navBox.classList.toggle("offen");
      burger.setAttribute("aria-expanded",offen?"true":"false");
      burger.setAttribute("aria-label",offen?"Menü schließen":"Menü öffnen");
    });
    navBox.addEventListener("click",function(e){if(e.target.closest("a"))navZu();});
    document.addEventListener("keydown",function(e){if(e.key==="Escape"&&navBox.classList.contains("offen")){navZu();burger.focus();}});
  }

  /* ---------- 2. Reveals (robust gegen Schnell-Scroll + Sweep-Netz) ---------- */
  function tsd(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,".");}
  function zahlen(scope){
    scope.querySelectorAll("[data-ziel]").forEach(function(el){
      if(el.dataset.fertig) return; el.dataset.fertig="1";
      var ziel=+el.dataset.ziel, start=+(el.dataset.start||0);
      if(reduziert){el.textContent=el.dataset.format==="tsd"?tsd(ziel):ziel;return;}
      var t0=null,dauer=950;
      function tick(t){if(!t0)t0=t;var p=Math.min((t-t0)/dauer,1);p=1-Math.pow(1-p,3);
        var w=Math.round(start+(ziel-start)*p);el.textContent=el.dataset.format==="tsd"?tsd(w):w;
        if(p<1)requestAnimationFrame(tick);}
      requestAnimationFrame(tick);
    });
  }
  var ziele=Array.prototype.slice.call(document.querySelectorAll("[data-rv]"));
  if(!reduziert&&"IntersectionObserver" in window){
    var offen=ziele.slice();
    function zeige(el){el.classList.add("in");zahlen(el);var k=offen.indexOf(el);if(k>-1)offen.splice(k,1);}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting||e.boundingClientRect.top<0){zeige(e.target);io.unobserve(e.target);}
    });},{threshold:.12,rootMargin:"9999px 0px -40px 0px"});
    ziele.forEach(function(el){io.observe(el);});
    function sweep(){for(var k=offen.length-1;k>=0;k--){if(offen[k].getBoundingClientRect().top<innerHeight-40)zeige(offen[k]);}
      if(!offen.length)removeEventListener("scroll",sweep);}
    addEventListener("scroll",sweep,{passive:true}); setTimeout(sweep,500);
  } else {
    document.querySelectorAll("[data-ziel]").forEach(function(el){el.textContent=el.dataset.format==="tsd"?tsd(+el.dataset.ziel):el.dataset.ziel;});
  }

  /* ---------- 3. Zeitband (Sticky-Scrolly, Desktop+Motion; sonst Liste) ---------- */
  var band=document.querySelector(".zeitband");
  if(band){
    var stationen=Array.prototype.slice.call(band.querySelectorAll(".zb-liste .st")).map(function(st){
      return {j:st.getAttribute("data-jahr"),t:st.querySelector("p").textContent,
        img:st.getAttribute("data-bild")||"",alt:st.getAttribute("data-alt")||""};
    });
    var scrolly=!reduziert&&matchMedia("(min-width:900px)").matches&&stationen.length;
    if(scrolly){
      band.classList.add("scrolly");
      var jahrEl=band.querySelector(".zb-jahr"),textEl=band.querySelector(".zb-text"),
          bildEl=band.querySelector(".zb-bild img"),wrap=band.querySelector(".zb-punkte"),
          live=document.createElement("span");
      live.className="sr-only";live.setAttribute("aria-live","polite");
      band.querySelector(".zb-buehne").appendChild(live);
      var aktiv=-1;
      stationen.forEach(function(st,i){
        var b=document.createElement("button");b.type="button";b.textContent=st.j;
        b.setAttribute("aria-label","Station "+st.j);
        b.addEventListener("click",function(){
          var ziel=band.getBoundingClientRect().top+scrollY+(band.offsetHeight-innerHeight)*(i/(stationen.length-1));
          window.scrollTo({top:ziel,behavior:"smooth"});
        });
        wrap.appendChild(b);
      });
      var punkte=wrap.querySelectorAll("button");
      function setze(i){
        if(i===aktiv)return; aktiv=i; var st=stationen[i];
        jahrEl.textContent=st.j; textEl.textContent=st.t;
        /* srcset MIT tauschen: steht ein altes srcset, ignoriert der Browser den src-Wechsel */
        if(st.img&&bildEl&&bildEl.getAttribute("src")!==st.img){bildEl.srcset=st.img.replace(/\.jpg$/,"-480.webp")+" 480w, "+st.img.replace(/\.jpg$/,"-720.webp")+" 720w, "+st.img+" 1400w";bildEl.src=st.img;bildEl.alt=st.alt;}
        punkte.forEach(function(b,bi){b.setAttribute("aria-current",bi===i?"true":"false");});
        live.textContent="Station "+(i+1)+" von "+stationen.length+": "+st.j;
      }
      function auf(){var r=band.getBoundingClientRect();
        var f=Math.min(1,Math.max(0,-r.top/(band.offsetHeight-innerHeight)));
        setze(Math.min(stationen.length-1,Math.floor(f*stationen.length)));}
      addEventListener("scroll",auf,{passive:true}); auf();
    }
  }
})();

/* Fuenf Generationen: frei schwebendes Foto (Cursor/Fokus) + Detail-Modal, nur Desktop mit Zeiger */
(function(){
  var iv=document.querySelector(".iv"); if(!iv) return;
  var schwebe=iv.querySelector(".schwebe");
  var fotos=schwebe?Array.prototype.slice.call(schwebe.querySelectorAll(".fotos img")):[];
  var cap=schwebe?schwebe.querySelector(".cap"):null;
  var dets=Array.prototype.slice.call(iv.querySelectorAll("details.gen"));
  var modal=iv.querySelector(".gen-modal");
  var mq=matchMedia("(hover:hover) and (min-width:820px)");
  var reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
  var cur=-1,tx=0,ty=0,cx=0,cy=0,raf=null,live=false,offX=195;

  /* nur Desktop: Generationen-Fotos vorab in den Cache holen (kein Erst-Hover-Flackern; mobil sparsam) */
  if(mq.matches) dets.forEach(function(d){ var pre=new Image(); pre.src=d.getAttribute("data-img"); });

  function daten(d){return {
    jahr:d.getAttribute("data-jahr"), voll:d.getAttribute("data-voll"),
    name:(d.querySelector("summary .name")||{}).textContent||"",
    rolle:d.getAttribute("data-rolle"), dat:d.getAttribute("data-daten"),
    img:d.getAttribute("data-img"), zeit:d.hasAttribute("data-zeitbild"),
    lang:(d.querySelector(".inhalt p")||{}).textContent||""};}

  function swap(i){ if(!schwebe) return;
    if(i!==cur){ cur=i; fotos.forEach(function(im,di){im.classList.toggle("zeig",di===i);});
      var g=daten(dets[i]); cap.textContent=g.jahr+" · "+g.name; }
    schwebe.classList.add("an"); }
  function weg(){ if(!schwebe) return; schwebe.classList.remove("an"); cur=-1; live=false; if(raf){cancelAnimationFrame(raf);raf=null;} }
  function loop(){ var e=reduce?1:0.16; cx+=(tx-cx)*e; cy+=(ty-cy)*e; schwebe.style.left=cx+"px"; schwebe.style.top=cy+"px"; if(live) raf=requestAnimationFrame(loop); }
  function starte(){ if(!live){ live=true; loop(); } }
  function ziel(px,py,snap){ var w=schwebe.offsetWidth||300,half=w/2; if(px+half>innerWidth-8)px=px-2*offX; if(px-half<8)px=half+8; tx=px; ty=Math.max(half*0.4+8,Math.min(py,innerHeight-8)); if(snap){cx=tx;cy=ty;schwebe.style.left=cx+"px";schwebe.style.top=cy+"px";} }

  var gm=modal?{img:modal.querySelector(".gm-bild img"),zb:modal.querySelector(".gm-bild .zb"),x:modal.querySelector(".gm-x"),jahr:modal.querySelector(".gm-txt .jahr"),name:modal.querySelector(".gm-txt .name"),rolle:modal.querySelector(".gm-txt .rolle"),p:modal.querySelector(".gm-txt p")}:null;
  var lastFocus=null;
  function onKey(e){ if(e.key==="Escape"){e.preventDefault();closeM();} else if(e.key==="Tab"){e.preventDefault();gm.x.focus();} }
  function openM(i,trigger){ if(!modal) return; var g=daten(dets[i]);
    gm.img.src=g.img; gm.img.alt=g.voll; gm.jahr.textContent=g.jahr; gm.name.textContent=g.voll;
    gm.rolle.textContent=g.rolle+" · "+g.dat; gm.p.textContent=g.lang; gm.zb.hidden=!g.zeit;
    lastFocus=trigger||document.activeElement; weg(); modal.hidden=false; document.body.classList.add("modal-offen");
    document.addEventListener("keydown",onKey); gm.x.focus(); }
  function closeM(){ if(!modal||modal.hidden) return; modal.hidden=true; document.body.classList.remove("modal-offen"); document.removeEventListener("keydown",onKey); if(lastFocus&&lastFocus.focus)lastFocus.focus(); }
  if(modal) modal.addEventListener("click",function(e){ if(e.target.hasAttribute("data-close")) closeM(); });

  dets.forEach(function(d,i){
    var s=d.querySelector("summary"); if(!s) return;
    s.addEventListener("mouseenter",function(ev){ if(!mq.matches) return; ziel(ev.clientX+offX,ev.clientY,!live); swap(i); starte(); });
    s.addEventListener("focus",function(){ if(!mq.matches) return; var r=s.getBoundingClientRect(); ziel(r.right+offX,r.top+r.height/2,true); swap(i); });
    s.addEventListener("click",function(e){ if(mq.matches){ e.preventDefault(); openM(i,s); } });
  });
  iv.addEventListener("mousemove",function(e){ if(!mq.matches) return; ziel(e.clientX+offX,e.clientY,reduce); });
  iv.addEventListener("mouseleave",function(){ if(mq.matches && modal && modal.hidden) weg(); });
  iv.addEventListener("focusout",function(e){ if(mq.matches && modal && modal.hidden && !iv.contains(e.relatedTarget)) weg(); });
})();

/* ---------- Saison-Tabs: Datums-Default + barrierefreies Tab-Pattern (sortiment.html) ---------- */
(function(){
  var sec=document.querySelector(".saison"); if(!sec) return;
  var tabs=Array.prototype.slice.call(sec.querySelectorAll('[role="tab"]'));
  var panels=Array.prototype.slice.call(sec.querySelectorAll('[role="tabpanel"]'));
  var fotos=Array.prototype.slice.call(sec.querySelectorAll('.saison-foto'));
  if(tabs.length<2||!panels.length) return;

  /* Fotos aller Panels vorladen -> kein Aufploppen beim Wechsel */
  panels.forEach(function(p){ var im=p.querySelector("img"); if(im){ var pre=new Image(); pre.src=im.currentSrc||im.src; } });

  /* Datums-Logik: welche Saison ist jetzt relevant? (Monat, plus Silvester-Feintuning Ende Dez) */
  var t=new Date(), mo=t.getMonth(), dy=t.getDate();
  var jetzt = (mo===11&&dy>=27) ? "silvester"
            : (mo===0)          ? "silvester"
            : (mo>=1&&mo<=3)    ? "ostern"          /* Feb bis Apr */
            :                     "weihnachten";   /* Mai bis Dez(26.): naechstes grosses Fest */

  /* "Als Naechstes"-Tag nur im relevanten Panel */
  panels.forEach(function(p){ var tag=p.querySelector(".saison-tag"); if(tag) tag.hidden=(p.dataset.saison!==jetzt); });

  function aktivieren(key,fokus){
    tabs.forEach(function(tb){ var on=tb.dataset.saison===key; tb.setAttribute("aria-selected",on?"true":"false"); tb.tabIndex=on?0:-1; if(on&&fokus)tb.focus(); });
    panels.forEach(function(p){ p.classList.toggle("aktiv",p.dataset.saison===key); });
    fotos.forEach(function(f){ f.classList.toggle("aktiv",f.dataset.saison===key); });
  }
  tabs.forEach(function(tb,i){
    tb.addEventListener("click",function(){ aktivieren(tb.dataset.saison); });
    tb.addEventListener("keydown",function(e){
      var n=tabs.length, go=-1;
      if(e.key==="ArrowRight"||e.key==="ArrowDown") go=(i+1)%n;
      else if(e.key==="ArrowLeft"||e.key==="ArrowUp") go=(i-1+n)%n;
      else if(e.key==="Home") go=0;
      else if(e.key==="End") go=n-1;
      if(go>-1){ e.preventDefault(); aktivieren(tabs[go].dataset.saison,true); }
    });
  });

  sec.classList.add("tabs-an");   /* aktiviert die Tab-Darstellung; ohne diese Klasse alles gestapelt */
  aktivieren(jetzt);              /* Datums-Default: relevante Saison offen */
})();
