(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{272:function(e,r,n){"use strict";n.r(r);var t=n(3),o=n(2),a=n(200),i=n(29),s=n(5),c=n(131),l=n(4),u=n(13),g=n(52),w=n(73),p=n(128),d=n(116),f=n(63),m=new a.a,v={ABANDONED:new w.c({fill:new p.a({color:"rgba(225, 225, 225, 255)"}),stroke:new d.a({color:"rgba(0, 0, 0, 255)",width:.4})}),GAS:new w.c({fill:new p.a({color:"rgba(255, 0, 0, 255)"}),stroke:new d.a({color:"rgba(110, 110, 110, 255)",width:.4})}),OIL:new w.c({fill:new p.a({color:"rgba(56, 168, 0, 255)"}),stroke:new d.a({color:"rgba(110, 110, 110, 255)",width:0})}),OILGAS:new w.c({fill:new p.a({color:"rgba(168, 112, 0, 255)"}),stroke:new d.a({color:"rgba(110, 110, 110, 255)",width:.4})})},y=new u.b({loader:function(e,r,n){var t="https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Petroleum/KSFields/FeatureServer/0/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry="+encodeURIComponent('{"xmin":'+e[0]+',"ymin":'+e[1]+',"xmax":'+e[2]+',"ymax":'+e[3]+',"spatialReference":{"wkid":102100}}')+"&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100";$.ajax({url:t,dataType:"jsonp",success:function(e){if(e.error)alert(e.error.message+"\n"+e.error.details.join("\n"));else{var r=m.readFeatures(e,{featureProjection:n});r.length>0&&y.addFeatures(r)}}})},strategy:Object(c.c)(Object(f.b)({tileSize:512}))}),b=new i.a({source:y,style:function(e){var r=e.get("activeprod");return v[r]}}),h=new s.a({source:new g.a({attributions:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})}),S=new t.a({layers:[h,b],target:document.getElementById("map"),view:new o.a({center:Object(l.f)([-97.6114,38.8403]),zoom:7})}),I=function(e){var r=[];if(S.forEachFeatureAtPixel(e,function(e){r.push(e)}),r.length>0){var n,t,o=[];for(n=0,t=r.length;n<t;++n)o.push(r[n].get("field_name"));document.getElementById("info").innerHTML=o.join(", ")||"(unknown)",S.getTarget().style.cursor="pointer"}else document.getElementById("info").innerHTML="&nbsp;",S.getTarget().style.cursor=""};S.on("pointermove",function(e){if(!e.dragging){var r=S.getEventPixel(e.originalEvent);I(r)}}),S.on("click",function(e){I(e.pixel)})}},[[272,0]]]);
//# sourceMappingURL=vector-esri.js.map