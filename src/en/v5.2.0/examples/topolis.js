(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{354:function(e,t,o){"use strict";o.r(t);var n=o(20),r=o(1),a=o(0),d=o(30),i=o(26),c=o(34),w=o(67),g=o(182),l=o(3),u=o(18),s=o(4),f=o(13),m=o(70),v=o(218),y=o(74),h=o(73),p=o(86),b=o(208),F=new l.a({source:new s.b}),E=new f.b({wrapX:!1}),I=new u.a({source:E,style:function(e){return[new m.c({image:new v.a({radius:8,fill:new y.a({color:"rgba(255, 0, 0, 0.2)"}),stroke:new h.a({color:"red",width:1})}),text:new p.a({text:e.get("node").id.toString(),fill:new y.a({color:"red"}),stroke:new h.a({color:"white",width:3})})})]}}),N=new f.b({wrapX:!1}),k=new u.a({source:N,style:function(e){return[new m.c({stroke:new h.a({color:"blue",width:1}),text:new p.a({text:e.get("edge").id.toString(),fill:new y.a({color:"blue"}),stroke:new h.a({color:"white",width:2})})})]}}),B=new f.b({wrapX:!1}),x=new u.a({source:B,style:function(e){return[new m.c({stroke:new h.a({color:"black",width:1}),fill:new y.a({color:"rgba(0, 255, 0, 0.2)"}),text:new p.a({font:"bold 12px sans-serif",text:e.get("face").id.toString(),fill:new y.a({color:"green"}),stroke:new h.a({color:"white",width:2})})})]}}),S=new r.a({layers:[F,x,k,I],target:"map",view:new a.a({center:[-11e6,46e5],zoom:16})}),P=topolis.createTopology();function removeElementFeature(e,t){var o=e.getFeatureById(t.id);e.removeFeature(o)}function createNode(e,t){var o=e.getEdgeByPoint(t,5)[0];return o?e.modEdgeSplit(o,t):e.addIsoNode(t)}P.on("addnode",function(e){var t=new n.a({geometry:new i.a(e.coordinate),node:e});t.setId(e.id),E.addFeature(t)}),P.on("removenode",function(e){removeElementFeature(E,e)}),P.on("addedge",function(e){var t=new n.a({geometry:new d.a(e.coordinates),edge:e});t.setId(e.id),N.addFeature(t)}),P.on("modedge",function(e){N.getFeatureById(e.id).setGeometry(new d.a(e.coordinates))}),P.on("removeedge",function(e){removeElementFeature(N,e)}),P.on("addface",function(e){var t=P.getFaceGeometry(e),o=new n.a({geometry:new c.b(t),face:e});o.setId(e.id),B.addFeature(o)}),P.on("removeface",function(e){removeElementFeature(B,e)});var G=new w.c({type:"LineString"});G.on("drawend",function(e){var t,o,n=e.feature.getGeometry().getCoordinates(),r=n[0],a=n[n.length-1];try{t=P.getNodeByPoint(r),o=P.getNodeByPoint(a);var d=P.getEdgeByPoint(r,5),i=P.getEdgeByPoint(a,5),c=P.getEdgesByLine(n);if(1===c.length&&!t&&!o&&0===d.length&&0===i.length)return P.remEdgeNewFace(c[0]),(t=c[0].start).face&&P.removeIsoNode(t),void((o=c[0].end).face&&P.removeIsoNode(o));t||(t=createNode(P,r),n[0]=t.coordinate),o||(o=createNode(P,a),n[n.length-1]=o.coordinate),P.addEdgeNewFaces(t,o,n)}catch(e){toastr.warning(e.toString())}}),S.addInteraction(G);var X=new g.a({source:N});S.addInteraction(X),S.addControl(new b.a)}},[[354,0]]]);
//# sourceMappingURL=topolis.js.map