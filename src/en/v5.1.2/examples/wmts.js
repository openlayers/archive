(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{380:function(e,r,t){"use strict";t.r(r);for(var a=t(3),i=t(2),s=t(387),o=t(1),n=t(4),c=t(6),p=t(7),w=t(100),l=t(145),g=Object(c.g)("EPSG:3857"),u=g.getExtent(),b=Object(o.E)(u)/256,m=new Array(14),y=new Array(14),S=0;S<14;++S)m[S]=b/Math.pow(2,S),y[S]=S;new a.a({layers:[new n.a({source:new p.b,opacity:.7}),new n.a({opacity:.7,source:new w.a({attributions:'Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>',url:"https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/",layer:"0",matrixSet:"EPSG:3857",format:"image/png",projection:g,tileGrid:new l.b({origin:Object(o.C)(u),resolutions:m,matrixIds:y}),style:"default",wrapX:!0})})],target:"map",controls:Object(s.a)({attributionOptions:{collapsible:!1}}),view:new i.a({center:[-11158582,4813697],zoom:4})})}},[[380,0]]]);
//# sourceMappingURL=wmts.js.map