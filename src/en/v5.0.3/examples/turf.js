(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{274:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(2),o=r(28),s=r(29),u=r(5),w=r(4),c=r(13),d=r(6),i=new c.b;fetch("data/geojson/roads-seoul.geojson").then(function(e){return e.json()}).then(function(e){for(var t=new o.a,r=t.readFeatures(e)[0],n=t.writeFeatureObject(r),a=turf.lineDistance(n,"kilometers"),s=1;s<=a/.2;s++){var u=turf.along(n,.2*s,"kilometers"),w=t.readFeature(u);w.getGeometry().transform("EPSG:4326","EPSG:3857"),i.addFeature(w)}r.getGeometry().transform("EPSG:4326","EPSG:3857"),i.addFeature(r)});var f=new s.a({source:i}),m=new u.a({source:new d.b});new n.a({layers:[m,f],target:document.getElementById("map"),view:new a.a({center:Object(w.f)([126.980366,37.52654]),zoom:15})})}},[[274,0]]]);
//# sourceMappingURL=turf.js.map