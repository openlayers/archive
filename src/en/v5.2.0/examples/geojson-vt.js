(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{268:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),a=n(21),i=n(4),u=n(116),s=n(3),g=n(121),c=function(e,t){if(t.geometry){var n,o=t.type,r=t.geometry;return 1===o?(n="MultiPoint",1==r.length&&(n="Point",r=r[0])):2===o?(n="MultiLineString",1==r.length&&(n="LineString",r=r[0])):3===o&&(n="Polygon",r.length>1&&(n="MultiPolygon",r=[r])),{type:"Feature",geometry:{type:n,coordinates:r},properties:t.tags}}return t},l=new(n(64).a)({code:"TILE_PIXELS",units:"tile-pixels"}),w=new o.a({layers:[new s.a({source:new i.b})],target:"map",view:new r.a({center:[0,0],zoom:2})});fetch("data/geojson/countries.geojson").then(function(e){return e.json()}).then(function(e){var t=geojsonvt(e,{extent:4096,debug:1}),n=new u.a({format:new a.a,tileLoadFunction:function(e){var n=e.getFormat(),o=e.getTileCoord(),r=t.getTile(o[0],o[1],-o[2]-1),a=n.readFeatures(JSON.stringify({type:"FeatureCollection",features:r?r.features:[]},c));e.setLoader(function(){e.setFeatures(a),e.setProjection(l)})},url:"data:"}),o=new g.a({source:n});w.addLayer(o)})}},[[268,0]]]);
//# sourceMappingURL=geojson-vt.js.map