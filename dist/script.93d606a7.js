parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L4bL":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}document.addEventListener("DOMContentLoaded",function(){(new n).render()});var n=function(){function t(){e(this,t),this.canvas=document.getElementById("canvas"),this.foreground=document.getElementById("foreground"),this.stepHz=10,this.cellSize=14,this.seedRatio=.15,this.colorMap={dead:"#ffffff",reviving:"#fbfbfb",dying:"#f7f7f7",alive:"#f3f3f3"},this.first=!0,this.cells=[];for(var i=0,n=["render","stretch"];i<n.length;i++){var s=n[i];this[s]=this[s].bind(this)}this.init()}return i(t,[{key:"init",value:function(){this.stretch(),this.seed(),this.updateCells(),this.paint()}},{key:"seed",value:function(){for(var e=0;e<this.width;e++)for(var t=0;t<this.height;t++)Math.random()<this.seedRatio&&(this.cells[e][t]="alive")}},{key:"render",value:function(){var e=this;this.stretch(),this.updateCells(),this.paint(),setTimeout(function(){return requestAnimationFrame(e.render)},1e3/this.stepHz)}},{key:"stretch",value:function(){var e=this.foreground.offsetWidth,t=this.foreground.offsetHeight;this.canvas.width=e,this.canvas.height=t;for(var i=Math.ceil(e/this.cellSize),n=Math.ceil(t/this.cellSize);this.cells.length<i;)this.cells.push([]);for(;this.cells.length>i;)this.cells.pop();for(;((null===(s=this.cells[0])||void 0===s?void 0:s.length)||0)<n;){var s;this.cells.forEach(function(e){return e.push("dead")})}for(;((null===(r=this.cells[0])||void 0===r?void 0:r.length)||0)>n;){var r;this.cells.forEach(function(e){return e.pop()})}}},{key:"updateCells",value:function(){this.cells=this.newCells()}},{key:"newCells",value:function(){for(var e=[],t=0;t<this.width;t++){for(var i=this.cells[t],n=[],r=0;r<this.height;r++){var l=i[r],h=["alive","dying"].includes(l),a=s(this.cells,t,r).reduce(function(e,t){return e+Number(["alive","dying"].includes(t))},0),o=void 0;o=h?2===a||3===a?"alive":"dead":3===a?"alive":"dead",n.push(o)}e.push(n)}for(var c=0;c<this.width;c++)for(var u=e[c],f=0;f<this.height;f++){var d=u[f],v=s(e,c,f).reduce(function(e,t){return e+Number(["alive","dying"].includes(t))},0);"alive"===d&&2!==v&&3!==v?u[f]="dying":"dead"===d&&3===v&&(u[f]="reviving")}return e}},{key:"neighborsOf",value:function(e,t){for(var i=[],n=-1;n<=1;n++)for(var s=-1;s<=1;s++)0===n&&0===s||i.push(this.cells[r(e+n,this.width)][r(t+s,this.height)]);return i}},{key:"paint",value:function(){for(var e=0;e<this.width;e++)for(var t=this.cells[e],i=0;i<this.height;i++){var n=t[i];this.drawCell(e,i,this.colorMap[n])}}},{key:"drawCell",value:function(e,t,i){this.ctx.strokeStyle=i,this.ctx.fillStyle=i,this.ctx.fillRect(e*this.cellSize,t*this.cellSize,this.cellSize,this.cellSize)}},{key:"ctx",get:function(){return this.canvas.getContext("2d")}},{key:"width",get:function(){return this.cells.length}},{key:"height",get:function(){var e;return(null===(e=this.cells[0])||void 0===e?void 0:e.length)||0}}]),t}(),s=function(e,t,i){for(var n,s=e.length,l=(null===(n=e[0])||void 0===n?void 0:n.length)||0,h=[],a=-1;a<=1;a++)for(var o=-1;o<=1;o++)0===a&&0===o||h.push(e[r(t+a,s)][r(i+o,l)]);return h},r=function(e,t){return e<0?(t+e)%t:e%t};
},{}]},{},["L4bL"], null)
//# sourceMappingURL=/dist/script.93d606a7.js.map