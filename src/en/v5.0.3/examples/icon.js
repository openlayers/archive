(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{349:function(e,n,t){"use strict";t.r(n);var o=t(20),a=t(3),r=t(96),i=t(2),s=t(24),p=t(29),c=t(5),l=t(62),g=t(13),u=t(73),m=t(162),w=new o.a({geometry:new s.a([0,0]),name:"Null Island",population:4e3,rainfall:500}),v=new u.c({image:new m.a({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:"data/icon.png"})});w.setStyle(v);var d=new g.b({features:[w]}),f=new p.a({source:d}),y=new c.a({source:new l.a({url:"https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure",crossOrigin:""})}),h=new a.a({layers:[y,f],target:document.getElementById("map"),view:new i.a({center:[0,0],zoom:3})}),x=document.getElementById("popup"),b=new r.a({element:x,positioning:"bottom-center",stopEvent:!1,offset:[0,-50]});h.addOverlay(b),h.on("click",function(e){var n=h.forEachFeatureAtPixel(e.pixel,function(e){return e});if(n){var t=n.getGeometry().getCoordinates();b.setPosition(t),$(x).popover({placement:"top",html:!0,content:n.get("name")}),$(x).popover("show")}else $(x).popover("destroy")}),h.on("pointermove",function(e){if(e.dragging)$(x).popover("destroy");else{var n=h.getEventPixel(e.originalEvent),t=h.hasFeatureAtPixel(n);h.getTarget().style.cursor=t?"pointer":""}})}},[[349,0]]]);
//# sourceMappingURL=icon.js.map