(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{395:function(e,n,t){"use strict";t.r(n);var o=t(3),a=t(2),r=t(35),c=t(28),i=t(100),u=t(173),s=t(5),w=t(29),d=t(13),g=t(6),f=new d.b({url:"data/geojson/countries.geojson",format:new c.a}),m=new o.a({layers:[new s.a({source:new g.b}),new w.a({source:f})],target:"map",view:new a.a({center:[0,0],zoom:2})}),p=new i.a;m.addInteraction(p);var v=p.getFeatures(),b=new u.a({condition:r.j});m.addInteraction(b),b.on("boxend",function(){var e=b.getGeometry().getExtent();f.forEachFeatureIntersectingExtent(e,function(e){v.push(e)})}),b.on("boxstart",function(){v.clear()});var l=document.getElementById("info");v.on(["add","remove"],function(){var e=v.getArray().map(function(e){return e.get("name")});e.length>0?l.innerHTML=e.join(", "):l.innerHTML="No countries selected"})}},[[395,0]]]);
//# sourceMappingURL=box-selection.js.map