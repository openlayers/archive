(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{433:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r(2),o=r(14),s=r(24),i=r(40),c=r(116),l=r(20),u=r(34),w=r(26),d=r(33),g=r(12),f=r(4),b=r(0),p=[null],v=Object(b.q)(p,{nd:function(e,t){t[t.length-1].ndrefs.push(e.getAttribute("ref"))},tag:O}),h=Object(b.q)(p,{node:function(e,t){var r=t[0],a=t[t.length-1],n=e.getAttribute("id"),o=[parseFloat(e.getAttribute("lon")),parseFloat(e.getAttribute("lat"))];a.nodes[n]=o;var c=Object(b.t)({tags:{}},y,e,t);if(!Object(g.d)(c.tags)){var l=new w.a(o);Object(i.c)(l,!1,r);var u=new s.a(l);u.setId(n),u.setProperties(c.tags,!0),a.features.push(u)}},way:function(e,t){var r=e.getAttribute("id"),a=Object(b.t)({id:r,ndrefs:[],tags:{}},v,e,t);t[t.length-1].ways.push(a)}}),j=function(e){function t(){e.call(this),this.dataProjection=Object(f.i)("EPSG:4326")}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.readFeaturesFromNode=function(e,t){var r=this.getReadOptions(e,t);if("osm"==e.localName){for(var a=Object(b.t)({nodes:{},ways:[],features:[]},h,e,[r]),n=0;n<a.ways.length;n++){for(var c=a.ways[n],w=[],g=0,f=c.ndrefs.length;g<f;g++){var p=a.nodes[c.ndrefs[g]];Object(o.c)(w,p)}var v=void 0;v=c.ndrefs[0]==c.ndrefs[c.ndrefs.length-1]?new d.b(w,l.a.XY,[w.length]):new u.a(w,l.a.XY),Object(i.c)(v,!1,r);var j=new s.a(v);j.setId(c.id),j.setProperties(c.tags,!0),a.features.push(j)}if(a.features)return a.features}return[]},t}(c.a),y=Object(b.q)(p,{tag:O});function O(e,t){t[t.length-1].tags[e.getAttribute("k")]=e.getAttribute("v")}var m=j,k=r(23),A=r(5),P=r(115),q=r(41),F=r(10),E=r(11),I=r(18),L=r(22),S=r(48),_=null,x={amenity:{parking:new E.c({stroke:new I.a({color:"rgba(170, 170, 170, 1.0)",width:1}),fill:new L.a({color:"rgba(170, 170, 170, 0.3)"})})},building:{".*":new E.c({zIndex:100,stroke:new I.a({color:"rgba(246, 99, 79, 1.0)",width:1}),fill:new L.a({color:"rgba(246, 99, 79, 0.3)"})})},highway:{service:new E.c({stroke:new I.a({color:"rgba(255, 255, 255, 1.0)",width:2})}),".*":new E.c({stroke:new I.a({color:"rgba(255, 255, 255, 1.0)",width:3})})},landuse:{"forest|grass|allotments":new E.c({stroke:new I.a({color:"rgba(140, 208, 95, 1.0)",width:1}),fill:new L.a({color:"rgba(140, 208, 95, 0.3)"})})},natural:{tree:new E.c({image:new S.a({radius:2,fill:new L.a({color:"rgba(140, 208, 95, 1.0)"}),stroke:null})})}},R=new F.a({format:new m,loader:function(e,t,r){var a=Object(f.s)(e,r,"EPSG:4326"),n=new XMLHttpRequest;n.open("POST","https://overpass-api.de/api/interpreter"),n.addEventListener("load",function(){var e=(new m).readFeatures(n.responseText,{featureProjection:_.getView().getProjection()});R.addFeatures(e)});var o="(node("+a[1]+","+a[0]+","+a[3]+","+a[2]+");rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out meta;";n.send(o)},strategy:P.b}),z=new k.a({source:R,style:function(e){for(var t in x){var r=e.get(t);if(void 0!==r)for(var a in x[t])if(new RegExp(a).test(r))return x[t][a]}return null}}),J=new A.a({source:new q.a({imagerySet:"Aerial",key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5"})});_=new a.a({layers:[J,z],target:document.getElementById("map"),view:new n.a({center:[739218,5906096],maxZoom:19,zoom:17})})}},[[433,0]]]);
//# sourceMappingURL=vector-osm.js.map