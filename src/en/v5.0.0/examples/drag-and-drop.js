(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{381:function(e,n,t){"use strict";t.r(n);var o=t(5),i=t(4),r=t(106),c=t(31),l=t(10),w=t(16),f=t(2);const a={Point:new f.g({image:new f.b({fill:new f.c({color:"rgba(255,255,0,0.5)"}),radius:5,stroke:new f.f({color:"#ff0",width:1})})}),LineString:new f.g({stroke:new f.f({color:"#f00",width:3})}),Polygon:new f.g({fill:new f.c({color:"rgba(0,255,255,0.5)"}),stroke:new f.f({color:"#0ff",width:1})}),MultiPoint:new f.g({image:new f.b({fill:new f.c({color:"rgba(255,0,255,0.5)"}),radius:5,stroke:new f.f({color:"#f0f",width:1})})}),MultiLineString:new f.g({stroke:new f.f({color:"#0f0",width:3})}),MultiPolygon:new f.g({fill:new f.c({color:"rgba(0,0,255,0.5)"}),stroke:new f.f({color:"#00f",width:1})})},s=function(e,n){const t=e.getStyleFunction();return t?t.call(e,n):a[e.getGeometry().getType()]},g=new c.a({formatConstructors:[r.a,r.b,r.c,r.d,r.e]}),u=new o.a({interactions:Object(c.l)().extend([g]),layers:[new l.d({source:new w.a({imagerySet:"Aerial",key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5"})})],target:"map",view:new i.a({center:[0,0],zoom:2})});g.on("addfeatures",function(e){const n=new w.n({features:e.features});u.addLayer(new l.e({source:n,style:s})),u.getView().fit(n.getExtent())});const d=function(e){const n=[];if(u.forEachFeatureAtPixel(e,function(e){n.push(e)}),n.length>0){const e=[];let t,o;for(t=0,o=n.length;t<o;++t)e.push(n[t].get("name"));document.getElementById("info").innerHTML=e.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};u.on("pointermove",function(e){if(e.dragging)return;const n=u.getEventPixel(e.originalEvent);d(n)}),u.on("click",function(e){d(e.pixel)})}},[[381,0]]]);
//# sourceMappingURL=drag-and-drop.js.map