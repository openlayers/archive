(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{247:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=n(386),i=n(3),c=n(17),s=n(4),b=new r.a({center:[0,0],zoom:2});new a.a({layers:[new i.a({source:new s.b})],target:"map",controls:Object(o.a)({attributionOptions:{collapsible:!1}}),view:b});function el(e){return document.getElementById(e)}var l=new GyroNorm;l.init().then(function(){l.start(function(e){var t=b.getCenter(),n=b.getResolution(),a=Object(c.j)(e.do.beta),r=Object(c.j)(e.do.beta),o=Object(c.j)(e.do.gamma);el("alpha").innerText=a+" [rad]",el("beta").innerText=r+" [rad]",el("gamma").innerText=o+" [rad]",t[0]-=n*o*25,t[1]+=n*r*25,b.setCenter(b.constrainCenter(t))})})}},[[247,0]]]);
//# sourceMappingURL=device-orientation.js.map