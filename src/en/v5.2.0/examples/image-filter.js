(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{283:function(a,e,n){"use strict";n.r(e);var r=n(1),t=n(0),o=n(3),i=n(2),m=n(40),s=new o.a({source:new m.a({key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5",imagerySet:"Aerial"})}),c=new r.a({layers:[s],target:"map",view:new t.a({center:Object(i.f)([-120,50]),zoom:6})}),l={none:[0,0,0,0,1,0,0,0,0],sharpen:[0,-1,0,-1,5,-1,0,-1,0],sharpenless:[0,-1,0,-1,10,-1,0,-1,0],blur:[1,1,1,1,1,1,1,1,1],shadow:[1,2,1,0,1,0,-1,-2,-1],emboss:[-2,1,0,-1,1,1,0,1,2],edge:[0,1,0,1,-4,1,0,1,0]};function normalize(a){var e,n=a.length,r=new Array(n),t=0;for(e=0;e<n;++e)t+=a[e];for(t<=0?(r.normalized=!1,t=1):r.normalized=!0,e=0;e<n;++e)r[e]=a[e]/t;return r}var h=document.getElementById("kernel"),u=normalize(l[h.value]);h.onchange=function(){u=normalize(l[h.value]),c.render()},s.on("postcompose",function(a){!function(a,e){for(var n=a.canvas,r=n.width,t=n.height,o=Math.sqrt(e.length),i=Math.floor(o/2),m=a.getImageData(0,0,r,t).data,s=a.createImageData(r,t),c=s.data,l=0;l<t;++l)for(var h=l*r,u=0;u<r;++u){for(var v=0,f=0,w=0,d=0,g=0;g<o;++g)for(var p=0;p<o;++p){var b=e[g*o+p],z=Math.min(t-1,Math.max(0,l+g-i)),M=Math.min(r-1,Math.max(0,u+p-i)),y=4*(z*r+M);v+=m[y]*b,f+=m[y+1]*b,w+=m[y+2]*b,d+=m[y+3]*b}var I=4*(h+u);c[I]=v,c[I+1]=f,c[I+2]=w,c[I+3]=e.normalized?d:255}a.putImageData(s,0,0)}(a.context,u)})}},[[283,0]]]);
//# sourceMappingURL=image-filter.js.map