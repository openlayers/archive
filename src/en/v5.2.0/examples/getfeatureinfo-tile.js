(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{273:function(e,n,r){"use strict";r.r(n);var t=r(1),o=r(0),i=r(3),a=new(r(66).a)({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:ne",TILED:!0},serverType:"geoserver",crossOrigin:"anonymous"}),s=new i.a({source:a}),c=new o.a({center:[0,0],zoom:1}),g=new t.a({layers:[s],target:"map",view:c});g.on("singleclick",function(e){document.getElementById("info").innerHTML="";var n=c.getResolution(),r=a.getGetFeatureInfoUrl(e.coordinate,n,"EPSG:3857",{INFO_FORMAT:"text/html"});r&&(document.getElementById("info").innerHTML='<iframe seamless src="'+r+'"></iframe>')}),g.on("pointermove",function(e){if(!e.dragging){var n=g.getEventPixel(e.originalEvent),r=g.forEachLayerAtPixel(n,function(){return!0});g.getTargetElement().style.cursor=r?"pointer":""}})}},[[273,0]]]);
//# sourceMappingURL=getfeatureinfo-tile.js.map