(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{291:function(e,t,a){"use strict";a.r(t);var r=a(146),o=a(0),n=a(386),i=a(10),c=a(3),s=a(4);if(i.o){var l=new c.a({source:new s.b}),E=(new r.a({layers:[l],target:"map",controls:Object(n.a)({attributionOptions:{collapsible:!1}}),view:new o.a({center:[0,0],zoom:2})}),["precision mediump float;","void main() {","}"].join("")),A=["attribute vec2 a_position;","void main() {","  gl_Position = vec4(a_position, 0, 1);","}"].join("");l.on("precompose",function(e){var t=e.glContext,a=t.getGL(),r=a.createProgram(),o=a.createShader(a.VERTEX_SHADER);a.shaderSource(o,A),a.compileShader(o),a.attachShader(r,o);var n=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(n,E),a.compileShader(n),a.attachShader(r,n),a.linkProgram(r),t.useProgram(r);var i=a.getAttribLocation(r,"a_position");a.enable(a.STENCIL_TEST),a.colorMask(!1,!1,!1,!1),a.stencilOp(a.KEEP,a.KEEP,a.REPLACE),a.stencilFunc(a.ALWAYS,1,255);var c=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,c),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,-.75,-1,-1,1,-1,1,-.75,-1,-.75,1,-.5,-1,-.25,-1,-.5,1,-.5,1,-.25,-1,-.25,1,0,-1,.25,-1,0,1,0,1,.25,-1,.25,1,.5,-1,.75,-1,.5,1,.5,1,.75,-1,.75,1]),a.STATIC_DRAW),a.enableVertexAttribArray(i),a.vertexAttribPointer(i,2,a.FLOAT,!1,0,0),a.drawArrays(a.TRIANGLES,0,24),a.bindBuffer(a.ARRAY_BUFFER,null),a.deleteBuffer(c),a.colorMask(!0,!0,!0,!0),a.stencilFunc(a.NOTEQUAL,0,255),a.stencilOp(a.KEEP,a.KEEP,a.KEEP)}),l.on("postcompose",function(e){var t=e.glContext.getGL();t.disable(t.STENCIL_TEST)})}else{document.getElementById("no-webgl").style.display=""}}},[[291,0]]]);
//# sourceMappingURL=layer-clipping-webgl.js.map