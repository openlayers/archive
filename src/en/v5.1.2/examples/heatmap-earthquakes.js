(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{396:function(t,e,a){"use strict";a.r(e);var r=a(3),i=a(2),n=a(103),s=a(8),h=a(33),o=a(25),d=a(29),u=a(18),l=a(12),c=a(71),g=a(186),p=a(84),f={BLUR:"blur",GRADIENT:"gradient",RADIUS:"radius"},w=["#00f","#0ff","#0f0","#ff0","#f00"];var y=function(t){function e(e){var a=e||{},r=Object(l.a)({},a);delete r.gradient,delete r.radius,delete r.blur,delete r.shadow,delete r.weight,t.call(this,r),this.gradient_=null,this.shadow_=void 0!==a.shadow?a.shadow:250,this.circleImage_=void 0,this.styleCache_=null,Object(s.a)(this,Object(h.b)(f.GRADIENT),this.handleGradientChanged_,this),this.setGradient(a.gradient?a.gradient:w),this.setBlur(void 0!==a.blur?a.blur:15),this.setRadius(void 0!==a.radius?a.radius:8),Object(s.a)(this,Object(h.b)(f.BLUR),this.handleStyleChanged_,this),Object(s.a)(this,Object(h.b)(f.RADIUS),this.handleStyleChanged_,this),this.handleStyleChanged_();var i,n=a.weight?a.weight:"weight";i="string"==typeof n?function(t){return t.get(n)}:n,this.setStyle(function(t,e){var a=i(t),r=void 0!==a?Object(u.a)(a,0,1):1,n=255*r|0,s=this.styleCache_[n];return s||(s=[new p.c({image:new g.a({opacity:r,src:this.circleImage_})})],this.styleCache_[n]=s),s}.bind(this)),this.setRenderOrder(null),Object(s.a)(this,c.a.RENDER,this.handleRender_,this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createCircle_=function(){var t=this.getRadius(),e=this.getBlur(),a=t+e+1,r=2*a,i=Object(o.a)(r,r);i.shadowOffsetX=i.shadowOffsetY=this.shadow_,i.shadowBlur=e,i.shadowColor="#000",i.beginPath();var n=a-this.shadow_;return i.arc(n,n,t,0,2*Math.PI,!0),i.fill(),i.canvas.toDataURL()},e.prototype.getBlur=function(){return this.get(f.BLUR)},e.prototype.getGradient=function(){return this.get(f.GRADIENT)},e.prototype.getRadius=function(){return this.get(f.RADIUS)},e.prototype.handleGradientChanged_=function(){this.gradient_=function(t){for(var e=Object(o.a)(1,256),a=e.createLinearGradient(0,0,1,256),r=1/(t.length-1),i=0,n=t.length;i<n;++i)a.addColorStop(i*r,t[i]);return e.fillStyle=a,e.fillRect(0,0,1,256),e.getImageData(0,0,1,256).data}(this.getGradient())},e.prototype.handleStyleChanged_=function(){this.circleImage_=this.createCircle_(),this.styleCache_=new Array(256),this.changed()},e.prototype.handleRender_=function(t){for(var e=t.context,a=e.canvas,r=e.getImageData(0,0,a.width,a.height),i=r.data,n=0,s=i.length;n<s;n+=4){var h=4*i[n+3];h&&(i[n]=this.gradient_[h],i[n+1]=this.gradient_[h+1],i[n+2]=this.gradient_[h+2])}e.putImageData(r,0,0)},e.prototype.setBlur=function(t){this.set(f.BLUR,t)},e.prototype.setGradient=function(t){this.set(f.GRADIENT,t)},e.prototype.setRadius=function(t){this.set(f.RADIUS,t)},e}(d.a),_=a(4),b=a(85),v=a(13),R=document.getElementById("blur"),I=document.getElementById("radius"),m=new y({source:new v.b({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new n.a({extractStyles:!1})}),blur:parseInt(R.value,10),radius:parseInt(I.value,10)});m.getSource().on("addfeature",function(t){var e=t.feature.get("name"),a=parseFloat(e.substr(2));t.feature.set("weight",a-5)});var O=new _.a({source:new b.a({layer:"toner"})});new r.a({layers:[O,m],target:"map",view:new i.a({center:[0,0],zoom:2})});R.addEventListener("input",function(){m.setBlur(parseInt(R.value,10))}),I.addEventListener("input",function(){m.setRadius(parseInt(I.value,10))})}},[[396,0]]]);
//# sourceMappingURL=heatmap-earthquakes.js.map