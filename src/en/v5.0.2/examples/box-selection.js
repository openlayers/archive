(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{394:function(n,e,t){"use strict";t.r(e);var o=t(3),a=t(2),r=t(35),c=t(28),s=(t(50),t(100)),i=t(172),u=t(4),w=t(29),d=t(13),g=t(5);const f=new d.b({url:"data/geojson/countries.geojson",format:new c.a}),m=new o.a({layers:[new u.a({source:new g.b}),new w.a({source:f})],target:"map",view:new a.a({center:[0,0],zoom:2})}),p=new s.a;m.addInteraction(p);const b=p.getFeatures(),l=new i.a({condition:r.j});m.addInteraction(l),l.on("boxend",function(){const n=l.getGeometry().getExtent();f.forEachFeatureIntersectingExtent(n,function(n){b.push(n)})}),l.on("boxstart",function(){b.clear()});const h=document.getElementById("info");b.on(["add","remove"],function(){const n=b.getArray().map(function(n){return n.get("name")});n.length>0?h.innerHTML=n.join(", "):h.innerHTML="No countries selected"})}},[[394,0]]]);
//# sourceMappingURL=box-selection.js.map