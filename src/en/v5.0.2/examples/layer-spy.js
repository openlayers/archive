(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{335:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n(2),r=n(4),i=n(8),c=n(43);const s="As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5",u=new r.a({source:new c.a({key:s,imagerySet:"Road"})}),d=new r.a({source:new c.a({key:s,imagerySet:"Aerial"})}),l=document.getElementById("map"),w=new o.a({layers:[u,d],target:l,view:new a.a({center:Object(i.f)([-109,46.5]),zoom:6})});let m=75;document.addEventListener("keydown",function(e){38===e.which?(m=Math.min(m+5,150),w.render(),e.preventDefault()):40===e.which&&(m=Math.max(m-5,25),w.render(),e.preventDefault())});let p=null;l.addEventListener("mousemove",function(e){p=w.getEventPixel(e),w.render()}),l.addEventListener("mouseout",function(){p=null,w.render()}),d.on("precompose",function(e){const t=e.context,n=e.frameState.pixelRatio;t.save(),t.beginPath(),p&&(t.arc(p[0]*n,p[1]*n,m*n,0,2*Math.PI),t.lineWidth=5*n,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()),t.clip()}),d.on("postcompose",function(e){e.context.restore()})}},[[335,0]]]);
//# sourceMappingURL=layer-spy.js.map