(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{327:function(e,n,t){"use strict";t.r(n);var o=t(3),r=t(2),c=t(1),a=t(4),i=t(6),u=t(113),l=t(7),s=t(90),f=t(63),g=new o.a({layers:[new a.a({source:new l.b})],target:"map",view:new r.a({projection:"EPSG:3857",center:[0,0],zoom:1})}),d=document.getElementById("epsg-query"),p=document.getElementById("epsg-search"),h=document.getElementById("epsg-result"),w=document.getElementById("render-edges");function v(e,n,t,o){if(null===e||null===n||null===t||null===o)return h.innerHTML="Nothing usable found, using EPSG:3857...",void g.setView(new r.a({projection:"EPSG:3857",center:[0,0],zoom:1}));h.innerHTML="("+e+") "+n;var a="EPSG:"+e;f.a.defs(a,t),Object(u.a)(f.a);var l=Object(i.g)(a),s=Object(i.i)("EPSG:4326",l),d=Object(c.a)([o[1],o[2],o[3],o[0]],s);l.setExtent(d);var p=new r.a({projection:l});g.setView(p),p.fit(d)}p.onclick=function(e){!function(e){h.innerHTML="Searching ...",fetch("https://epsg.io/?format=json&q="+e).then(function(e){return e.json()}).then(function(e){var n=e.results;if(n&&n.length>0)for(var t=0,o=n.length;t<o;t++){var r=n[t];if(r){var c=r.code,a=r.name,i=r.proj4,u=r.bbox;if(c&&c.length>0&&i&&i.length>0&&u&&4==u.length)return void v(c,a,i,u)}}v(null,null,null,null)})}(d.value),e.preventDefault()},w.onchange=function(){g.getLayers().forEach(function(e){if(e instanceof a.a){var n=e.getSource();n instanceof s.a&&n.setRenderReprojectionEdges(w.checked)}})}}},[[327,0]]]);
//# sourceMappingURL=reprojection-by-code.js.map