(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{394:function(t,i,e){"use strict";e.r(i);var o=e(1),r=e(0),s=e(35),n=e(80),a=e(41),h=e(52),l=e(8),d=e(43),u=e(11),g=e(17),p=e(99),_=e(184),c={VERTICAL:0,HORIZONTAL:1};function render(t){if(t.frameState){this.sliderInitialized_||this.initSlider_();var i=t.frameState.viewState.resolution;i!==this.currentResolution_&&(this.currentResolution_=i,this.setThumbPosition_(i))}}var m=function(t){function ZoomSlider(i){var e=i||{};t.call(this,{element:document.createElement("div"),render:e.render||render}),this.currentResolution_=void 0,this.direction_=c.VERTICAL,this.dragging_,this.heightLimit_=0,this.widthLimit_=0,this.previousX_,this.previousY_,this.thumbSize_=null,this.sliderInitialized_=!1,this.duration_=void 0!==e.duration?e.duration:200;var o=void 0!==e.className?e.className:"ol-zoomslider",r=document.createElement("button");r.setAttribute("type","button"),r.className=o+"-thumb "+a.e;var s=this.element;s.className=o+" "+a.e+" "+a.b,s.appendChild(r),this.dragger_=new _.a(s),Object(l.a)(this.dragger_,p.a.POINTERDOWN,this.handleDraggerStart_,this),Object(l.a)(this.dragger_,p.a.POINTERMOVE,this.handleDraggerDrag_,this),Object(l.a)(this.dragger_,p.a.POINTERUP,this.handleDraggerEnd_,this),Object(l.a)(s,u.a.CLICK,this.handleContainerClick_,this),Object(l.a)(r,u.a.CLICK,d.b)}return t&&(ZoomSlider.__proto__=t),ZoomSlider.prototype=Object.create(t&&t.prototype),ZoomSlider.prototype.constructor=ZoomSlider,ZoomSlider.prototype.disposeInternal=function(){this.dragger_.dispose(),t.prototype.disposeInternal.call(this)},ZoomSlider.prototype.setMap=function(i){t.prototype.setMap.call(this,i),i&&i.render()},ZoomSlider.prototype.initSlider_=function(){var t=this.element,i=t.offsetWidth,e=t.offsetHeight,o=t.firstElementChild,r=getComputedStyle(o),s=o.offsetWidth+parseFloat(r.marginRight)+parseFloat(r.marginLeft),n=o.offsetHeight+parseFloat(r.marginTop)+parseFloat(r.marginBottom);this.thumbSize_=[s,n],i>e?(this.direction_=c.HORIZONTAL,this.widthLimit_=i-s):(this.direction_=c.VERTICAL,this.heightLimit_=e-n),this.sliderInitialized_=!0},ZoomSlider.prototype.handleContainerClick_=function(t){var i=this.getMap().getView(),e=this.getRelativePosition_(t.offsetX-this.thumbSize_[0]/2,t.offsetY-this.thumbSize_[1]/2),o=this.getResolutionForPosition_(e);i.animate({resolution:i.constrainResolution(o),duration:this.duration_,easing:h.b})},ZoomSlider.prototype.handleDraggerStart_=function(t){this.dragging_||t.originalEvent.target!==this.element.firstElementChild||(this.getMap().getView().setHint(s.a.INTERACTING,1),this.previousX_=t.clientX,this.previousY_=t.clientY,this.dragging_=!0)},ZoomSlider.prototype.handleDraggerDrag_=function(t){if(this.dragging_){var i=this.element.firstElementChild,e=t.clientX-this.previousX_+parseInt(i.style.left,10),o=t.clientY-this.previousY_+parseInt(i.style.top,10),r=this.getRelativePosition_(e,o);this.currentResolution_=this.getResolutionForPosition_(r),this.getMap().getView().setResolution(this.currentResolution_),this.setThumbPosition_(this.currentResolution_),this.previousX_=t.clientX,this.previousY_=t.clientY}},ZoomSlider.prototype.handleDraggerEnd_=function(t){if(this.dragging_){var i=this.getMap().getView();i.setHint(s.a.INTERACTING,-1),i.animate({resolution:i.constrainResolution(this.currentResolution_),duration:this.duration_,easing:h.b}),this.dragging_=!1,this.previousX_=void 0,this.previousY_=void 0}},ZoomSlider.prototype.setThumbPosition_=function(t){var i=this.getPositionForResolution_(t),e=this.element.firstElementChild;this.direction_==c.HORIZONTAL?e.style.left=this.widthLimit_*i+"px":e.style.top=this.heightLimit_*i+"px"},ZoomSlider.prototype.getRelativePosition_=function(t,i){var e;return e=this.direction_===c.HORIZONTAL?t/this.widthLimit_:i/this.heightLimit_,Object(g.a)(e,0,1)},ZoomSlider.prototype.getResolutionForPosition_=function(t){return this.getMap().getView().getResolutionForValueFunction()(1-t)},ZoomSlider.prototype.getPositionForResolution_=function(t){return 1-this.getMap().getView().getValueForResolutionFunction()(t)},ZoomSlider}(n.a),f=e(3),v=e(4);function createMap(t){var i=new v.b,e=new f.a({source:i}),s=new o.a({layers:[e],target:t,view:new r.a({center:[0,0],zoom:2})}),n=new m;return s.addControl(n),s}createMap("map1"),createMap("map2"),createMap("map3")}},[[394,0]]]);
//# sourceMappingURL=zoomslider.js.map