(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{270:function(e,t,n){"use strict";n.r(t);var o=n(5),r=n(4),a=n(44),s=n(10),c=n(7),u=n(16);const w=new u.n;fetch("data/geojson/roads-seoul.geojson").then(function(e){return e.json()}).then(function(e){const t=new a.a,n=t.readFeatures(e)[0],o=t.writeFeatureObject(n),r=turf.lineDistance(o,"kilometers");for(let e=1;e<=r/.2;e++){const n=turf.along(o,.2*e,"kilometers"),r=t.readFeature(n);r.getGeometry().transform("EPSG:4326","EPSG:3857"),w.addFeature(r)}n.getGeometry().transform("EPSG:4326","EPSG:3857"),w.addFeature(n)});const d=new s.e({source:w}),i=new s.d({source:new u.f});new o.a({layers:[i,d],target:document.getElementById("map"),view:new r.a({center:Object(c.g)([126.980366,37.52654]),zoom:15})})}},[[270,0]]]);
//# sourceMappingURL=turf.js.map