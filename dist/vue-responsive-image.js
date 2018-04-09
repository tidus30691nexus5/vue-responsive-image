!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("vue-responsive-image",[],n):"object"==typeof exports?exports["vue-responsive-image"]=n():e["vue-responsive-image"]=n()}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";function r(e,n){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):t.push(r[s]={id:s,parts:[a]})}return t}t.r(n),t.d(n,"default",function(){return h});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,d=!1,c=function(){},f=null,l="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,n,t,o){d=t,f=o||{};var s=r(e,n);return v(s),function(n){for(var t=[],o=0;o<s.length;o++){var a=s[o];(u=i[a.id]).refs--,t.push(u)}n?v(s=r(e,n)):s=[];for(o=0;o<t.length;o++){var u;if(0===(u=t[o]).refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete i[u.id]}}}}function v(e){for(var n=0;n<e.length;n++){var t=e[n],r=i[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(m(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{var s=[];for(o=0;o<t.parts.length;o++)s.push(m(t.parts[o]));i[t.id]={id:t.id,refs:1,parts:s}}}}function g(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var n,t,r=document.querySelector("style["+l+'~="'+e.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(p){var o=u++;r=a||(a=g()),n=_.bind(null,r,o,!1),t=_.bind(null,r,o,!0)}else r=g(),n=function(e,n){var t=n.css,r=n.media,o=n.sourceMap;r&&e.setAttribute("media",r);f.ssrId&&e.setAttribute(l,n.id);o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}var y,b=(y=[],function(e,n){return y[e]=n,y.filter(Boolean).join("\n")});function _(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}},function(e,n,t){"use strict";t.r(n);var r={name:"vue-responsive-image",data:()=>({widthPlaceholder:"%width%",heightPlaceholder:"%height%",baseResolutions:{desktop:[1920,1600,1440,1366,1024,768],"tablet-portrait":[1600,1024,768],smartphone:[818,768,640]},defaultWidth:1600}),props:{imageUrl:{type:String,required:!0},widthOnScreen:{type:Number,default:100},imageRatio:{type:Number,default:16/9}},computed:{test:()=>"test",defaultImage(){let e=this.getWidthAdaptedToWidthOnScreen(this.defaultWidth);return this.getImageUrlWithWidthAndHeight(e,this.getHeightFromWidth(e))}},methods:{getHeightFromWidth(e){return Math.abs(e/this.imageRatio)},getWidthAdaptedToWidthOnScreen(e){return 100===this.widthOnScreen?e:Math.abs(e/100*this.widthOnScreen)},getImageUrlWithWidthAndHeight(e,n){return this.imageUrl.replace(this.widthPlaceholder,e).replace(this.heightPlaceholder,n)}}},o=function(){var e=this.$createElement;return(this._self._c||e)("img",{attrs:{src:this.defaultImage}})};o._withStripped=!0;var i=!1;var s=function(e,n,t,r,o,i,s,a){var u=typeof(e=e||{}).default;"object"!==u&&"function"!==u||(e=e.default);var d,c="function"==typeof e?e.options:e;if(n&&(c.render=n,c.staticRenderFns=t,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i),s?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=d):o&&(d=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),d)if(c.functional){c._injectStyles=d;var f=c.render;c.render=function(e,n){return d.call(n),f(e,n)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,d):[d]}return{exports:e,options:c}}(r,o,[],!1,function(e){i||t(4)},"data-v-1d35c19e",null);s.options.__file="src/ResponsiveImage.vue";n.default=s.exports},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var s;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},function(e,n,t){var r=t(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t(0).default)("5901b420",r,!1,{})}])});