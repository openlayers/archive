(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{246:function(t,e,o){"use strict";o.r(e);var r=o(5),a=o(4),i=o(24),n=o(3),s=o(11),g=o(7),p=o(98),w=o(159);const c=new r.a({target:"map",controls:Object(i.h)({attributionOptions:{collapsible:!1}}),view:new a.a({zoom:5,center:Object(g.g)([5,45])})}),l=[],b=[],m=Object(g.h)("EPSG:3857"),u=Object(n.E)(m.getExtent())/256;for(let t=0;t<18;t++)b[t]=t.toString(),l[t]=u/Math.pow(2,t);const h=new w.b({origin:[-20037508,20037508],resolutions:l,matrixIds:b}),f=new p.a({url:"https://wxs.ign.fr/2mqbg0z6cx7ube8gsou10nrt/wmts",layer:"GEOGRAPHICALGRIDSYSTEMS.MAPS",matrixSet:"PM",format:"image/jpeg",projection:"EPSG:3857",tileGrid:h,style:"normal",attributions:'<a href="http://www.geoportail.fr/" target="_blank"><img src="https://api.ign.fr/geoportail/api/js/latest/theme/geoportal/img/logo_gp.gif"></a>'}),S=new s.a({source:f});c.addLayer(S)}},[[246,0]]]);
//# sourceMappingURL=wmts-ign.js.map