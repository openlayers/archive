(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{250:function(e,r,o){"use strict";o.r(r);var t=o(3),i=o(2),n=o(5),a=o(52),c="https://services.arcgisonline.com/arcgis/rest/services/ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}";new t.a({target:"map",layers:[new n.a({source:new a.a({attributions:"Copyright:© 2013 ESRI, i-cubed, GeoEye",maxZoom:16,projection:"EPSG:4326",tileSize:512,tileUrlFunction:function(e){return c.replace("{z}",(e[0]-1).toString()).replace("{x}",e[1].toString()).replace("{y}",(-e[2]-1).toString())},wrapX:!0})})],view:new i.a({center:[0,0],projection:"EPSG:4326",zoom:2,minZoom:2})})}},[[250,0]]]);
//# sourceMappingURL=xyz-esri-4326-512.js.map