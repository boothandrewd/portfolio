parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L4bL":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}document.addEventListener("DOMContentLoaded",function(){var e=new n;setInterval(e.render,1e3)});var n=function(){function t(){e(this,t),this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.foreground=document.window,this.cellSize=15,this.seedRatio=.15,this.colorMap={dead:"white",reviving:"whitesmoke",alive:"black",dying:"gray"},this.first=!0,this.cells=[]}return i(t,[{key:"randState",value:function(){return Math.random<this.seedRatio?"alive":"dead"}},{key:"deadState",value:function(){return"dead"}},{key:"render",value:function(){this.stretch(),this.cells=this.newCells(),this.paint(),this.first=!1}},{key:"stretch",value:function(){var e=this,t=this.foreground.innerWidth,i=this.foreground.innerHeight;this.canvas.width=t,this.canvas.height=i;for(var n=Math.ceil(t/this.cellSize),l=Math.ceil(i/this.cellSize);this.cells.length<n;)this.cells.push([]);for(;this.cells.length>n;)this.cells.pop();for(;((null===(h=this.cells[0])||void 0===h?void 0:h.length)||0)<l;){var h;this.cells.forEach(function(t){return t.push((e.first?e.randState:e.deadState)())})}for(;((null===(s=this.cells[0])||void 0===s?void 0:s.length)||0)>l;){var s;this.cells.forEach(function(e){return e.pop()})}}},{key:"newCells",value:function(){for(var e=[],t=0;t<this.width;t++){for(var i=this.cells[t],n=[],l=0;l<this.height();l++){var h=i[l],s=this.neighborsOf(t,l),r=["alive","dying"].includes(h),a=s.reduce(function(e,t){return e+Number(["alive","dying"].includes(t))},0),c=void 0;c=r?2===a||3===a?"alive":"dying":3===a?"reviving":"dead",n.push(c)}e.push(n)}return e}},{key:"paint",value:function(){this.wipe();for(var e=0;e<this.width;e++)for(var t=this.cells[e],i=0;i<this.height;i++){var n=t[i];this.drawCell(e,i,this.colorMap[n])}}},{key:"drawCell",value:function(e,t,i){this.ctx.fillStyle=i,this.ctx.fillRect(e*this.cellSize,t*this.cellSize,this.cellSize,this.cellSize)}},{key:"wipe",value:function(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.width,this.height)}},{key:"neighborsOf",value:function(e,t){for(var i=[],n=-1;n<=1;n++)for(var h=-1;h<=1;h++)0===n&&0===h||i.push(this.cells[l(e+n,this.width)][l(t+h,this.height)]);return i}},{key:"width",get:function(){return this.cells.length}},{key:"height",get:function(){var e;return(null===(e=this.cells[0])||void 0===e?void 0:e.length)||0}}]),t}(),l=function(e,t){return e<0?(t+e)%t:e%t};
},{}]},{},["L4bL"], null)