(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{378:function(t,e,a){"use strict";a.r(e);for(var o=a(3),r=a(2),i=a(387),n=a(1),s=a(4),g=a(6),p=a(100),w=a(145),l=new o.a({target:"map",controls:Object(i.a)({attributionOptions:{collapsible:!1}}),view:new r.a({zoom:5,center:Object(g.f)([5,45])})}),c=[],b=[],m=Object(g.g)("EPSG:3857"),u=Object(n.E)(m.getExtent())/256,f=0;f<18;f++)b[f]=f.toString(),c[f]=u/Math.pow(2,f);var S=new w.b({origin:[-20037508,20037508],resolutions:c,matrixIds:b}),h=new p.a({url:"https://wxs.ign.fr/2mqbg0z6cx7ube8gsou10nrt/wmts",layer:"GEOGRAPHICALGRIDSYSTEMS.MAPS",matrixSet:"PM",format:"image/jpeg",projection:"EPSG:3857",tileGrid:S,style:"normal",attributions:'<a href="http://www.geoportail.fr/" target="_blank"><img src="https://api.ign.fr/geoportail/api/js/latest/theme/geoportal/img/logo_gp.gif"></a>'}),j=new s.a({source:h});l.addLayer(j)}},[[378,0]]]);
//# sourceMappingURL=wmts-ign.js.map