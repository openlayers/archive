(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{347:function(e,t,n){"use strict";n.r(t);var o=n(23),i=n(136),a=n(4),r=n(28),s=n(36),c=n(22),l=n(2);const f=[{offset:[0,0],opacity:1,rotateWithView:!0,rotation:0,scale:1,size:[55,55]},{offset:[110,86],opacity:.75,rotateWithView:!1,rotation:Math.PI/2,scale:1.25,size:[55,55]},{offset:[55,0],opacity:.5,rotateWithView:!0,rotation:Math.PI/3,scale:1.5,size:[55,86]},{offset:[212,0],opacity:1,rotateWithView:!0,rotation:0,scale:1,size:[44,44]}];let u;const w=f.length,h=new Array(w);for(u=0;u<w;++u){const e=f[u];h[u]=new l.d({offset:e.offset,opacity:e.opacity,rotateWithView:e.rotateWithView,rotation:e.rotation,scale:e.scale,size:e.size,crossOrigin:"anonymous",src:"data/Butterfly.png"})}const g=new Array(5e4);let y,p;const d=25e6;for(u=0;u<5e4;++u)p=new r.a([5e7*Math.random()-d,5e7*Math.random()-d]),(y=new o.a(p)).setStyle(new l.g({image:h[u%(w-1)]})),g[u]=y;const m=new c.b({features:g}),b=new s.a({source:m}),M=new i.a({layers:[b],target:document.getElementById("map"),view:new a.a({center:[0,0],zoom:5})}),z=[];for(u=0;u<5e4;u+=30){const e=g[u].clone();e.setStyle(null),z.push(e)}new s.a({map:M,source:new c.b({features:z}),style:new l.g({image:h[w-1]})}),M.on("click",function(e){const t=document.getElementById("info");t.innerHTML="Hold on a second, while I catch those butterflies for you ...",window.setTimeout(function(){const n=[];M.forEachFeatureAtPixel(e.pixel,function(e){return n.push(e),!1}),1===n.length?t.innerHTML="Got one butterfly":n.length>1?t.innerHTML="Got "+n.length+" butterflies":t.innerHTML="Couldn't catch a single butterfly"},1)}),M.on("pointermove",function(e){if(e.dragging)return;const t=M.getEventPixel(e.originalEvent),n=M.hasFeatureAtPixel(t);M.getTarget().style.cursor=n?"pointer":""})}},[[347,0]]]);
//# sourceMappingURL=icon-sprite-webgl.js.map