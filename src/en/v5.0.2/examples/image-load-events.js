(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{345:function(t,e,o){"use strict";o.r(e);var i=o(3),d=o(2),n=o(80),s=o(126);function a(t){this.el=t,this.loading=0,this.loaded=0}a.prototype.addLoading=function(){0===this.loading&&this.show(),++this.loading,this.update()},a.prototype.addLoaded=function(){const t=this;setTimeout(function(){++t.loaded,t.update()},100)},a.prototype.update=function(){const t=(this.loaded/this.loading*100).toFixed(1)+"%";if(this.el.style.width=t,this.loading===this.loaded){this.loading=0,this.loaded=0;const t=this;setTimeout(function(){t.hide()},500)}},a.prototype.show=function(){this.el.style.visibility="visible"},a.prototype.hide=function(){this.loading===this.loaded&&(this.el.style.visibility="hidden",this.el.style.width=0)};const h=new a(document.getElementById("progress")),l=new s.a({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states"},serverType:"geoserver"});l.on("imageloadstart",function(){h.addLoading()}),l.on("imageloadend",function(){h.addLoaded()}),l.on("imageloaderror",function(){h.addLoaded()});new i.a({layers:[new n.a({source:l})],target:"map",view:new d.a({center:[-10997148,4569099],zoom:4})})}},[[345,0]]]);
//# sourceMappingURL=image-load-events.js.map