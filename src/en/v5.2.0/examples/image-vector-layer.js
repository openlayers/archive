(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{285:function(e,n,t){"use strict";t.r(n);var o,r=t(1),a=t(0),i=t(21),c=t(18),w=t(13),u=t(70),g=t(74),l=t(73),s=t(86),d=new u.c({fill:new g.a({color:"rgba(255, 255, 255, 0.6)"}),stroke:new l.a({color:"#319FD3",width:1}),text:new s.a}),f=new r.a({layers:[new c.a({renderMode:"image",source:new w.b({url:"data/geojson/countries.geojson",format:new i.a}),style:function(e){return d.getText().setText(e.get("name")),d}})],target:"map",view:new a.a({center:[0,0],zoom:1})}),m=new c.a({source:new w.b,map:f,style:new u.c({stroke:new l.a({color:"#f00",width:1}),fill:new g.a({color:"rgba(255,0,0,0.1)"})})}),p=function(e){var n=f.forEachFeatureAtPixel(e,function(e){return e}),t=document.getElementById("info");t.innerHTML=n?n.getId()+": "+n.get("name"):"&nbsp;",n!==o&&(o&&m.getSource().removeFeature(o),n&&m.getSource().addFeature(n),o=n)};f.on("pointermove",function(e){if(!e.dragging){var n=f.getEventPixel(e.originalEvent);p(n)}}),f.on("click",function(e){p(e.pixel)})}},[[285,0]]]);
//# sourceMappingURL=image-vector-layer.js.map