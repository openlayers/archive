(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{288:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a(0),i=a(105),r=a(18),l=a(3),c=a(71),w=a(13),s=a(70),p=a(218),u=a(74),g=a(73),f={},m=new r.a({source:new w.b({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new i.a({extractStyles:!1})}),style:function(t){var e=t.get("name"),a=5+20*(parseFloat(e.substr(2))-5),n=f[a];return n||(n=new s.c({image:new p.a({radius:a,fill:new u.a({color:"rgba(255, 153, 0, 0.4)"}),stroke:new g.a({color:"rgba(255, 204, 0, 0.2)",width:1})})}),f[a]=n),n}}),d=new l.a({source:new c.a({layer:"toner"})}),h=new n.a({layers:[d,m],target:"map",view:new o.a({center:[0,0],zoom:2})}),v=$("#info");v.tooltip({animation:!1,trigger:"manual"});var k=function(t){v.css({left:t[0]+"px",top:t[1]-15+"px"});var e=h.forEachFeatureAtPixel(t,function(t){return t});e?v.tooltip("hide").attr("data-original-title",e.get("name")).tooltip("fixTitle").tooltip("show"):v.tooltip("hide")};h.on("pointermove",function(t){t.dragging?v.tooltip("hide"):k(h.getEventPixel(t.originalEvent))}),h.on("click",function(t){k(t.pixel)})}},[[288,0]]]);
//# sourceMappingURL=kml-earthquakes.js.map