(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{248:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t(0),r=t(219),i=t(21),c=t(220),l=t(105),w=t(173),f=t(205),g=t(47),s=t(3),u=t(18),d=t(40),m=t(13),p=t(70),b=t(218),h=t(74),v=t(73),y={Point:new p.c({image:new b.a({fill:new h.a({color:"rgba(255,255,0,0.5)"}),radius:5,stroke:new v.a({color:"#ff0",width:1})})}),LineString:new p.c({stroke:new v.a({color:"#f00",width:3})}),Polygon:new p.c({fill:new h.a({color:"rgba(0,255,255,0.5)"}),stroke:new v.a({color:"#0ff",width:1})}),MultiPoint:new p.c({image:new b.a({fill:new h.a({color:"rgba(255,0,255,0.5)"}),radius:5,stroke:new v.a({color:"#f0f",width:1})})}),MultiLineString:new p.c({stroke:new v.a({color:"#0f0",width:3})}),MultiPolygon:new p.c({fill:new h.a({color:"rgba(0,0,255,0.5)"}),stroke:new v.a({color:"#00f",width:1})})},k=function(e,n){var t=e.getStyleFunction();return t?t.call(e,n):y[e.getGeometry().getType()]},L=new f.a({formatConstructors:[r.a,i.a,c.a,l.a,w.a]}),M=new o.a({interactions:Object(g.a)().extend([L]),layers:[new s.a({source:new d.a({imagerySet:"Aerial",key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5"})})],target:"map",view:new a.a({center:[0,0],zoom:2})});L.on("addfeatures",function(e){var n=new m.b({features:e.features});M.addLayer(new u.a({renderMode:"image",source:n,style:k})),M.getView().fit(n.getExtent())});var P=function(e){var n=[];if(M.forEachFeatureAtPixel(e,function(e){n.push(e)}),n.length>0){var t,o,a=[];for(t=0,o=n.length;t<o;++t)a.push(n[t].get("name"));document.getElementById("info").innerHTML=a.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};M.on("pointermove",function(e){if(!e.dragging){var n=M.getEventPixel(e.originalEvent);P(n)}}),M.on("click",function(e){P(e.pixel)})}},[[248,0]]]);
//# sourceMappingURL=drag-and-drop-image-vector.js.map