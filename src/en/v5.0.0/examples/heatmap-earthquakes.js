(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{352:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(4),u=n(107),s=n(10),o=n(87),c=n(22);const d=document.getElementById("blur"),i=document.getElementById("radius"),l=new s.b({source:new c.b({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new u.a({extractStyles:!1})}),blur:parseInt(d.value,10),radius:parseInt(i.value,10)});l.getSource().on("addfeature",function(e){const t=e.feature.get("name"),n=parseFloat(t.substr(2));e.feature.set("weight",n-5)});const w=new s.d({source:new o.a({layer:"toner"})});new a.a({layers:[w,l],target:"map",view:new r.a({center:[0,0],zoom:2})});d.addEventListener("input",function(){l.setBlur(parseInt(d.value,10))}),i.addEventListener("input",function(){l.setRadius(parseInt(i.value,10))})}},[[352,0]]]);
//# sourceMappingURL=heatmap-earthquakes.js.map