(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{314:function(t,e,a){"use strict";a.r(e);var n=a(3),o=a(2),i=a(100),r=a(23),l=a(5),c=a(64),w=a(10),s=a(11),p=a(48),u=a(22),g=a(18),f={},m=new r.a({source:new w.a({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new i.a({extractStyles:!1})}),style:function(t){var e=t.get("name"),a=5+20*(parseFloat(e.substr(2))-5),n=f[a];return n||(n=new s.c({image:new p.a({radius:a,fill:new u.a({color:"rgba(255, 153, 0, 0.4)"}),stroke:new g.a({color:"rgba(255, 204, 0, 0.2)",width:1})})}),f[a]=n),n}}),d=new l.a({source:new c.a({layer:"toner"})}),h=new n.a({layers:[d,m],target:"map",view:new o.a({center:[0,0],zoom:2})}),v=$("#info");v.tooltip({animation:!1,trigger:"manual"});var k=function(t){v.css({left:t[0]+"px",top:t[1]-15+"px"});var e=h.forEachFeatureAtPixel(t,function(t){return t});e?v.tooltip("hide").attr("data-original-title",e.get("name")).tooltip("fixTitle").tooltip("show"):v.tooltip("hide")};h.on("pointermove",function(t){t.dragging?v.tooltip("hide"):k(h.getEventPixel(t.originalEvent))}),h.on("click",function(t){k(t.pixel)})}},[[314,0]]]);
//# sourceMappingURL=kml-earthquakes.js.map