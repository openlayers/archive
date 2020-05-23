(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{430:function(t,e,n){"use strict";n.r(e);var i=n(3),o=n(2),a=n(100),r=n(35),u=n(29),s=n(23),d=n(17),l=n(12),f=n(218),_={BLUR:"blur",GRADIENT:"gradient",RADIUS:"radius"},v=["#00f","#0ff","#0f0","#ff0","#f00"];var c=function(t){function e(e){var n=e||{},i=Object(l.a)({},n);delete i.gradient,delete i.radius,delete i.blur,delete i.weight,t.call(this,i),this.gradient_=null,this.addEventListener(Object(r.b)(_.GRADIENT),this.handleGradientChanged_),this.setGradient(n.gradient?n.gradient:v),this.setBlur(void 0!==n.blur?n.blur:15),this.setRadius(void 0!==n.radius?n.radius:8);var o=n.weight?n.weight:"weight";this.weightFunction_="string"==typeof o?function(t){return t.get(o)}:o,this.setRenderOrder(null)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getBlur=function(){return this.get(_.BLUR)},e.prototype.getGradient=function(){return this.get(_.GRADIENT)},e.prototype.getRadius=function(){return this.get(_.RADIUS)},e.prototype.handleGradientChanged_=function(){this.gradient_=function(t){for(var e=Object(u.a)(1,256),n=e.createLinearGradient(0,0,1,256),i=1/(t.length-1),o=0,a=t.length;o<a;++o)n.addColorStop(o*i,t[o]);return e.fillStyle=n,e.fillRect(0,0,1,256),e.canvas}(this.getGradient())},e.prototype.setBlur=function(t){this.set(_.BLUR,t)},e.prototype.setGradient=function(t){this.set(_.GRADIENT,t)},e.prototype.setRadius=function(t){this.set(_.RADIUS,t)},e.prototype.createRenderer=function(){return new f.a(this,{attributes:[{name:"weight",callback:function(t){var e=this.weightFunction_(t);return void 0!==e?Object(d.a)(e,0,1):1}.bind(this)}],vertexShader:"\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_weight = a_weight;\n        }",fragmentShader:"\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          gl_FragColor = vec4(alpha, alpha, alpha, alpha);\n        }",hitVertexShader:"\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n        attribute vec4 a_hitColor;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_hitColor = a_hitColor;\n          v_weight = a_weight;\n        }",hitFragmentShader:"\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          if (alpha < 0.05) {\n            discard;\n          }\n\n          gl_FragColor = v_hitColor;\n        }",uniforms:{u_size:function(){return 2*(this.get(_.RADIUS)+this.get(_.BLUR))}.bind(this),u_blurSlope:function(){return this.get(_.RADIUS)/Math.max(1,this.get(_.BLUR))}.bind(this)},postProcesses:[{fragmentShader:"\n            precision mediump float;\n\n            uniform sampler2D u_image;\n            uniform sampler2D u_gradientTexture;\n\n            varying vec2 v_texCoord;\n\n            void main() {\n              vec4 color = texture2D(u_image, v_texCoord);\n              gl_FragColor.a = color.a;\n              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;\n              gl_FragColor.rgb *= gl_FragColor.a;\n            }",uniforms:{u_gradientTexture:this.gradient_}}]})},e}(s.a),g=n(5),h=n(64),p=n(10),x=document.getElementById("blur"),m=document.getElementById("radius"),b=new c({source:new p.a({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new a.a({extractStyles:!1})}),blur:parseInt(x.value,10),radius:parseInt(m.value,10),weight:function(t){var e=t.get("name");return parseFloat(e.substr(2))-5}}),w=new g.a({source:new h.a({layer:"toner"})});new i.a({layers:[w,b],target:"map",view:new o.a({center:[0,0],zoom:2})});var C=function(){b.setBlur(parseInt(x.value,10))};x.addEventListener("input",C),x.addEventListener("change",C);var y=function(){b.setRadius(parseInt(m.value,10))};m.addEventListener("input",y),m.addEventListener("change",y)}},[[430,0]]]);
//# sourceMappingURL=heatmap-earthquakes.js.map