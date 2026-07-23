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
        if(st.img&&bildEl&&bildEl.getAttribute("src")!==st.img){bildEl.src=st.img;bildEl.alt=st.alt;}
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
