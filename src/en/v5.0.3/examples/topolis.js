(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{276:function(e,t,n){"use strict";n.r(t);var o=n(20),r=n(3),a=n(2),d=n(31),i=n(24),w=n(36),c=n(72),g=n(189),s=n(5),l=n(29),u=n(6),f=n(13),y=n(73),m=n(396),v=n(128),h=n(116),p=n(88),b=n(202),I=new s.a({source:new u.b}),k=new f.b({wrapX:!1}),F=new l.a({source:k,style:function(e){return[new y.c({image:new m.a({radius:8,fill:new v.a({color:"rgba(255, 0, 0, 0.2)"}),stroke:new h.a({color:"red",width:1})}),text:new p.a({text:e.get("node").id.toString(),fill:new v.a({color:"red"}),stroke:new h.a({color:"white",width:3})})})]}}),B=new f.b({wrapX:!1}),x=new l.a({source:B,style:function(e){return[new y.c({stroke:new h.a({color:"blue",width:1}),text:new p.a({text:e.get("edge").id.toString(),fill:new v.a({color:"blue"}),stroke:new h.a({color:"white",width:2})})})]}}),E=new f.b({wrapX:!1}),N=new l.a({source:E,style:function(e){return[new y.c({stroke:new h.a({color:"black",width:1}),fill:new v.a({color:"rgba(0, 255, 0, 0.2)"}),text:new p.a({font:"bold 12px sans-serif",text:e.get("face").id.toString(),fill:new v.a({color:"green"}),stroke:new h.a({color:"white",width:2})})})]}}),S=new r.a({layers:[I,N,x,F],target:"map",view:new a.a({center:[-11e6,46e5],zoom:16})}),P=topolis.createTopology();function G(e,t){var n=e.getFeatureById(t.id);e.removeFeature(n)}function X(e,t){var n=e.getEdgeByPoint(t,5)[0];return n?e.modEdgeSplit(n,t):e.addIsoNode(t)}P.on("addnode",function(e){var t=new o.a({geometry:new i.a(e.coordinate),node:e});t.setId(e.id),k.addFeature(t)}),P.on("removenode",function(e){G(k,e)}),P.on("addedge",function(e){var t=new o.a({geometry:new d.a(e.coordinates),edge:e});t.setId(e.id),B.addFeature(t)}),P.on("modedge",function(e){B.getFeatureById(e.id).setGeometry(new d.a(e.coordinates))}),P.on("removeedge",function(e){G(B,e)}),P.on("addface",function(e){var t=P.getFaceGeometry(e),n=new o.a({geometry:new w.b(t),face:e});n.setId(e.id),E.addFeature(n)}),P.on("removeface",function(e){G(E,e)});var C=new c.c({type:"LineString"});C.on("drawend",function(e){var t,n,o=e.feature.getGeometry().getCoordinates(),r=o[0],a=o[o.length-1];try{t=P.getNodeByPoint(r),n=P.getNodeByPoint(a);var d=P.getEdgeByPoint(r,5),i=P.getEdgeByPoint(a,5),w=P.getEdgesByLine(o);if(1===w.length&&!t&&!n&&0===d.length&&0===i.length)return P.remEdgeNewFace(w[0]),(t=w[0].start).face&&P.removeIsoNode(t),void((n=w[0].end).face&&P.removeIsoNode(n));t||(t=X(P,r),o[0]=t.coordinate),n||(n=X(P,a),o[o.length-1]=n.coordinate),P.addEdgeNewFaces(t,n,o)}catch(e){toastr.warning(e.toString())}}),S.addInteraction(C);var J=new g.a({source:B});S.addInteraction(J),S.addControl(new b.a)}},[[276,0]]]);
//# sourceMappingURL=topolis.js.map