(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{348:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(3),o=n(2),i=n(243),s=n(216),l=n(24),c=n(31),u=n(5),d=n(29),g=n(6),w=n(13),p=n(73),m=n(116),v=n(396),f=n(128),h={"Clement Latour":"rgba(0, 0, 255, 0.7)","Damien de Baesnt":"rgba(0, 215, 255, 0.7)","Sylvain Dhonneur":"rgba(0, 165, 255, 0.7)","Tom Payne":"rgba(0, 255, 255, 0.7)","Ulrich Prinz":"rgba(0, 215, 255, 0.7)"},y={},b=new w.b,C=["data/igc/Clement-Latour.igc","data/igc/Damien-de-Baenst.igc","data/igc/Sylvain-Dhonneur.igc","data/igc/Tom-Payne.igc","data/igc/Ulrich-Prinz.igc"];function T(e,t){var n=new XMLHttpRequest;n.open("GET",e),n.onload=function(){t(n.responseText)},n.send()}for(var L=new s.a,P=0;P<C.length;++P)T(C[P],function(e){var t=L.readFeatures(e,{featureProjection:"EPSG:3857"});b.addFeatures(t)});var E={start:1/0,stop:-1/0,duration:0};b.on("addfeature",function(e){var t=e.feature.getGeometry();E.start=Math.min(E.start,t.getFirstCoordinate()[2]),E.stop=Math.max(E.stop,t.getLastCoordinate()[2]),E.duration=E.stop-E.start});var G=new r.a({layers:[new u.a({source:new g.b({attributions:['All maps © <a href="https://www.opencyclemap.org/">OpenCycleMap</a>',g.a],url:"https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71"})}),new d.a({source:b,style:function(e){var t=h[e.get("PLT")],n=y[t];return n||(n=new p.c({stroke:new m.a({color:t,width:3})}),y[t]=n),n}})],target:"map",controls:Object(i.a)({attributionOptions:{collapsible:!1}}),view:new o.a({center:[703365.7089403362,5714629.865071137],zoom:9})}),k=null,M=null,F=function(e){var t=b.getClosestFeatureToCoordinate(e),n=document.getElementById("info");if(null===t)k=null,M=null,n.innerHTML="&nbsp;";else{var a=t.getGeometry().getClosestPoint(e);null===k?k=new l.a(a):k.setCoordinates(a);var r=new Date(1e3*a[2]);n.innerHTML=t.get("PLT")+" ("+r.toUTCString()+")";var o=[e,[a[0],a[1]]];null===M?M=new c.a(o):M.setCoordinates(o)}G.render()};G.on("pointermove",function(e){if(!e.dragging){var t=G.getEventCoordinate(e.originalEvent);F(t)}}),G.on("click",function(e){F(e.coordinate)});var S=new m.a({color:"rgba(255,0,0,0.9)",width:1}),D=new p.c({stroke:S,image:new v.a({radius:5,fill:null,stroke:S})});G.on("postcompose",function(e){var t=e.vectorContext;t.setStyle(D),null!==k&&t.drawGeometry(k),null!==M&&t.drawGeometry(M)});var x=new d.a({source:new w.b,map:G,style:new p.c({image:new v.a({radius:5,fill:new f.a({color:"rgba(255,0,0,0.9)"})})})});document.getElementById("time").addEventListener("input",function(){var e=parseInt(this.value,10)/100,t=E.start+E.duration*e;b.forEachFeature(function(e){var n=e.getGeometry().getCoordinateAtM(t,!0),r=e.get("highlight");void 0===r?(r=new a.a(new l.a(n)),e.set("highlight",r),x.getSource().addFeature(r)):r.getGeometry().setCoordinates(n)}),G.render()})}},[[348,0]]]);
//# sourceMappingURL=igc.js.map