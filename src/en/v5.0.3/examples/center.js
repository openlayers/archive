(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{392:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n(2),r=n(243),i=n(28),s=n(29),d=n(5),c=n(13),l=n(6),g=n(73),u=n(128),w=n(116),m=n(396),f=new c.b({url:"data/geojson/switzerland.geojson",format:new i.a}),p=new g.c({fill:new u.a({color:"rgba(255, 255, 255, 0.6)"}),stroke:new w.a({color:"#319FD3",width:1}),image:new m.a({radius:5,fill:new u.a({color:"rgba(255, 255, 255, 0.6)"}),stroke:new w.a({color:"#319FD3",width:1})})}),v=new s.a({source:f,style:p}),y=new a.a({center:[0,0],zoom:1}),b=new o.a({layers:[new d.a({source:new l.b}),v],target:"map",controls:Object(r.a)({attributionOptions:{collapsible:!1}}),view:y});document.getElementById("zoomtoswitzerlandbest").addEventListener("click",function(){var e=f.getFeatures()[0].getGeometry();y.fit(e,{padding:[170,50,30,150],constrainResolution:!1})},!1),document.getElementById("zoomtoswitzerlandconstrained").addEventListener("click",function(){var e=f.getFeatures()[0].getGeometry();y.fit(e,{padding:[170,50,30,150]})},!1),document.getElementById("zoomtoswitzerlandnearest").addEventListener("click",function(){var e=f.getFeatures()[0].getGeometry();y.fit(e,{padding:[170,50,30,150],nearest:!0})},!1),document.getElementById("zoomtolausanne").addEventListener("click",function(){var e=f.getFeatures()[1].getGeometry();y.fit(e,{padding:[170,50,30,150],minResolution:50})},!1),document.getElementById("centerlausanne").addEventListener("click",function(){var e=f.getFeatures()[1].getGeometry(),t=b.getSize();y.centerOn(e.getCoordinates(),t,[570,500])},!1)}},[[392,0]]]);
//# sourceMappingURL=center.js.map