(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{294:function(e,n,i){"use strict";i.r(n);var s=i(1),t=i(0),a=i(3),o=i(174),c=i(2),r=i(4),p=i(60);function bindInputs(e,n){var i=$(e+" input.visible");i.on("change",function(){n.setVisible(this.checked)}),i.prop("checked",n.getVisible());var s=$(e+" input.opacity");s.on("input change",function(){n.setOpacity(parseFloat(this.value))}),s.val(String(n.getOpacity()))}new s.a({layers:[new a.a({source:new r.b}),new o.a({layers:[new a.a({source:new p.a({url:"https://api.tiles.mapbox.com/v3/mapbox.20110804-hoa-foodinsecurity-3month.json?secure",crossOrigin:"anonymous"})}),new a.a({source:new p.a({url:"https://api.tiles.mapbox.com/v3/mapbox.world-borders-light.json?secure",crossOrigin:"anonymous"})})]})],target:"map",view:new t.a({center:Object(c.f)([37.4057,8.81566]),zoom:4})}).getLayers().forEach(function(e,n){bindInputs("#layer"+n,e),e instanceof o.a&&e.getLayers().forEach(function(e,i){bindInputs("#layer"+n+i,e)})}),$("#layertree li > span").click(function(){$(this).siblings("fieldset").toggle()}).siblings("fieldset").hide()}},[[294,0]]]);
//# sourceMappingURL=layer-group.js.map