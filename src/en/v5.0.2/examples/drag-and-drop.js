(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{380:function(e,n,t){"use strict";t.r(n);var o=t(3),i=t(2),a=t(217),r=t(28),c=t(216),l=t(105),w=t(178),s=t(50),f=t(212),u=t(4),g=t(29),d=t(43),p=t(13),b=t(76),h=t(402),m=t(122),y=t(117);const k={Point:new b.c({image:new h.a({fill:new m.a({color:"rgba(255,255,0,0.5)"}),radius:5,stroke:new y.a({color:"#ff0",width:1})})}),LineString:new b.c({stroke:new y.a({color:"#f00",width:3})}),Polygon:new b.c({fill:new m.a({color:"rgba(0,255,255,0.5)"}),stroke:new y.a({color:"#0ff",width:1})}),MultiPoint:new b.c({image:new h.a({fill:new m.a({color:"rgba(255,0,255,0.5)"}),radius:5,stroke:new y.a({color:"#f0f",width:1})})}),MultiLineString:new b.c({stroke:new y.a({color:"#0f0",width:3})}),MultiPolygon:new b.c({fill:new m.a({color:"rgba(0,0,255,0.5)"}),stroke:new y.a({color:"#00f",width:1})})},L=function(e,n){const t=e.getStyleFunction();return t?t.call(e,n):k[e.getGeometry().getType()]},P=new f.a({formatConstructors:[a.a,r.a,c.a,l.a,w.a]}),v=new o.a({interactions:Object(s.a)().extend([P]),layers:[new u.a({source:new d.a({imagerySet:"Aerial",key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5"})})],target:"map",view:new i.a({center:[0,0],zoom:2})});P.on("addfeatures",function(e){const n=new p.b({features:e.features});v.addLayer(new g.a({source:n,style:L})),v.getView().fit(n.getExtent())});const M=function(e){const n=[];if(v.forEachFeatureAtPixel(e,function(e){n.push(e)}),n.length>0){const e=[];let t,o;for(t=0,o=n.length;t<o;++t)e.push(n[t].get("name"));document.getElementById("info").innerHTML=e.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};v.on("pointermove",function(e){if(e.dragging)return;const n=v.getEventPixel(e.originalEvent);M(n)}),v.on("click",function(e){M(e.pixel)})}},[[380,0]]]);
//# sourceMappingURL=drag-and-drop.js.map