(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{308:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(2),r=n(5),i=n(75),s=n(44),l=n(159);function u(e){var t=e[0]/255,n=e[1]/255,a=e[2]/255;return(2*n-t-a)/(2*n+t+a)}function c(e,t){var n=t.min,a=t.max,o=t.values.length;if(e<n);else if(e>=a)t.values[o-1]+=1;else{var r=Math.floor((e-n)/t.delta);t.values[r]+=1}}var d=new s.a({key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5",imagerySet:"Aerial"}),v=new l.a({sources:[d],operation:function(e,t){var n=e[0],a=u(n);return c(a,t.counts),a>=t.threshold?(n[0]=0,n[1]=255,n[2]=0,n[3]=128):n[3]=0,n},lib:{vgi:u,summarize:c}});v.set("threshold",.1),v.on("beforeoperations",function(e){e.data.counts=function(e,t,n){for(var a=new Array(n),o=0;o<n;++o)a[o]=0;return{min:e,max:t,values:a,delta:(t-e)/n}}(0,.25,10),e.data.threshold=v.get("threshold")}),v.on("afteroperations",function(e){!function(e,t,n){h&&(clearTimeout(h),h=null);h=setTimeout(function(e,t,n){var a=d3.scaleLinear().domain([0,d3.max(t.values)]).range([0,m]),o=p.selectAll("rect").data(t.values);o.enter().append("rect"),o.attr("class",function(e,a){var o=t.min+a*t.delta;return"bar"+(o>=n?" selected":"")}).attr("width",f-2),o.transition().attr("transform",function(e,t){return"translate("+t*f+", "+(m-a(e))+")"}).attr("height",a),o.on("mousemove",function(e,n){var a=t.min+n*t.delta;v.get("threshold")!==a&&(v.set("threshold",a),v.changed())}),o.on("mouseover",function(n,a){for(var o=0,r=t.values.length-1;r>=a;--r)o+=e*e*t.values[r];w.html(function(e,t){return(t/4046.86).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,",")+" acres at<br>"+e.toFixed(2)+" VGI or above"}(t.min+a*t.delta,o)),w.style("display","block"),w.transition().style({left:g.left+a*f+f/2+"px",top:d3.event.y-60+"px",opacity:1})}),o.on("mouseout",function(){w.transition().style("opacity",0).each("end",function(){w.style("display","none")})})}.bind(null,e,t,n),1e3/60)}(e.resolution,e.data.counts,e.data.threshold)});new a.a({layers:[new r.a({source:d}),new i.a({source:v})],target:"map",view:new o.a({center:[-9651695,4937351],zoom:13,minZoom:12,maxZoom:19})});var h=null;var f=15,m=150,p=d3.select("#plot").append("svg").attr("width",10*f).attr("height",m),g=p.node().getBoundingClientRect(),w=d3.select(document.body).append("div").attr("class","tip")}},[[308,0]]]);
//# sourceMappingURL=raster.js.map