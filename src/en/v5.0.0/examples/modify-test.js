(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{318:function(e,t,o){"use strict";o.r(t);var n=o(5),r=o(4),i=o(44),l=o(31),g=o(36),c=o(22),y=o(2);const a=function(){const e={},t=new y.b({radius:5,fill:null,stroke:new y.f({color:"orange",width:2})});return e.Point=new y.g({image:t}),e.Polygon=new y.g({stroke:new y.f({color:"blue",width:3}),fill:new y.c({color:"rgba(0, 0, 255, 0.1)"})}),e.MultiLineString=new y.g({stroke:new y.f({color:"green",width:3})}),e.MultiPolygon=new y.g({stroke:new y.f({color:"yellow",width:1}),fill:new y.c({color:"rgba(255, 255, 0, 0.1)"})}),e.default=new y.g({stroke:new y.f({color:"red",width:3}),fill:new y.c({color:"rgba(255, 0, 0, 0.1)"}),image:t}),function(t){return e[t.getGeometry().getType()]||e.default}}(),w=new c.b({features:(new i.a).readFeatures({type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]}},{type:"Feature",geometry:{type:"MultiPoint",coordinates:[[-2e6,0],[0,-2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[9e6,2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[8e6,3e6]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,-1e6],[-4e6,1e6],[-3e6,-1e6],[-5e6,-1e6]],[[-45e5,-5e5],[-35e5,-5e5],[-4e6,5e5],[-45e5,-5e5]]]}},{type:"Feature",geometry:{type:"MultiLineString",coordinates:[[[-1e6,-75e4],[-1e6,75e4]],[[-1e6,-75e4],[-1e6,75e4],[-5e5,0],[-1e6,-75e4]],[[1e6,-75e4],[15e5,0],[15e5,0],[1e6,75e4]],[[-75e4,-1e6],[75e4,-1e6]],[[-75e4,1e6],[75e4,1e6]]]}},{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6],[-5e6,6e6]]],[[[-3e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6],[-3e6,6e6]]],[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6],[1e6,6e6]]]]}},{type:"Feature",geometry:{type:"GeometryCollection",geometries:[{type:"LineString",coordinates:[[-5e6,-5e6],[0,-5e6]]},{type:"Point",coordinates:[4e6,-5e6]},{type:"Polygon",coordinates:[[[1e6,-6e6],[2e6,-4e6],[3e6,-6e6],[1e6,-6e6]]]}]}}]})}),s=new g.a({source:w,style:a}),u=function(){const e={};return e.Polygon=[new y.g({fill:new y.c({color:[255,255,255,.5]})}),new y.g({stroke:new y.f({color:[255,255,255,1],width:5})}),new y.g({stroke:new y.f({color:[0,153,255,1],width:3})})],e.MultiPolygon=e.Polygon,e.LineString=[new y.g({stroke:new y.f({color:[255,255,255,1],width:5})}),new y.g({stroke:new y.f({color:[0,153,255,1],width:3})})],e.MultiLineString=e.LineString,e.Point=[new y.g({image:new y.b({radius:7,fill:new y.c({color:[0,153,255,1]}),stroke:new y.f({color:[255,255,255,.75],width:1.5})}),zIndex:1e5})],e.MultiPoint=e.Point,e.GeometryCollection=e.Polygon.concat(e.Point),function(t){return e[t.getGeometry().getType()]}}(),p=new l.i({style:u}),d=new l.e({features:p.getFeatures(),style:u,insertVertexCondition:function(){return!p.getFeatures().getArray().every(function(e){return e.getGeometry().getType().match(/Polygon/)})}});new n.a({interactions:Object(l.l)().extend([p,d]),layers:[s],target:"map",view:new r.a({center:[0,1e6],zoom:2})})}},[[318,0]]]);
//# sourceMappingURL=modify-test.js.map