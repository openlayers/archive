(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{243:function(n,t,e){"use strict";e.r(t);var a=e(3),r=e(2),o=e(86),u=e(151),i=e(85),c=.95047,s=1,h=1.08883,w=4/29,l=6/29,f=3*l*l,v=l*l*l,p=2*Math.PI;function b(n){var t=M(n[0]),e=M(n[1]),a=M(n[2]),r=d((.4124564*t+.3575761*e+.1804375*a)/c),o=d((.2126729*t+.7151522*e+.072175*a)/s),u=116*o-16,i=500*(r-o),w=200*(o-d((.0193339*t+.119192*e+.9503041*a)/h)),l=Math.sqrt(i*i+w*w),f=Math.atan2(w,i);return f<0&&(f+=p),n[0]=f,n[1]=l,n[2]=u,n}function m(n){var t=n[0],e=n[1],a=n[2],r=Math.cos(t)*e,o=Math.sin(t)*e,u=(a+16)/116,i=isNaN(r)?u:u+r/500,w=isNaN(o)?u:u-o/200;return u=s*g(u),i=c*g(i),w=h*g(w),n[0]=y(3.2404542*i-1.5371385*u-.4985314*w),n[1]=y(-.969266*i+1.8760108*u+.041556*w),n[2]=y(.0556434*i-.2040259*u+1.0572252*w),n}function d(n){return n>v?Math.pow(n,1/3):n/f+w}function g(n){return n>l?n*n*n:f*(n-w)}function M(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function y(n){return 255*(n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055)}var x=new u.a({sources:[new i.a({layer:"watercolor",transition:0})],operation:function(n,t){var e=b(n[0]),a=e[0]+Math.PI*t.hue/180;return a<0?a+=p:a>p&&(a-=p),e[0]=a,e[1]*=t.chroma/100,e[2]*=t.lightness/100,m(e)},lib:{rgb2hcl:b,hcl2rgb:m,rgb2xyz:M,lab2xyz:g,xyz2lab:d,xyz2rgb:y,Xn:c,Yn:s,Zn:h,t0:w,t1:l,t2:f,t3:v,twoPi:p}}),z={};x.on("beforeoperations",function(n){var t=n.data;for(var e in z)t[e]=Number(z[e].value)});new a.a({layers:[new o.a({source:x})],target:"map",view:new r.a({center:[0,25e5],zoom:2,maxZoom:18})});["hue","chroma","lightness"].forEach(function(n){var t=document.getElementById(n),e=document.getElementById(n+"Out");t.addEventListener("input",function(){e.innerText=t.value,x.changed()}),e.innerText=t.value,z[n]=t})}},[[243,0]]]);
//# sourceMappingURL=color-manipulation.js.map