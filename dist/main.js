(()=>{"use strict";var t={426:(t,n,e)=>{e.d(n,{Z:()=>c});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([t.id,"body{\n\t/*display: grid;\n\tgrid-template: 3fr 1fr/ 100%;\n\t*/\n\tfont-size: 16px;\n\tbackground-color: whitesmoke;\n}\n\n#body{\n\tdisplay: block;\n\twidth: 300px;\n\tmargin: 8rem auto;\n\tpadding: 11px;\n\tbackground-color: #fcd34d;\n\tborder-radius: 10px;\n\tbox-shadow: -30px 30px 15px hsla(0, 0%, 0%, 0.5);\n}\n\n#display{\n\theight: 75px;\n\tdisplay: grid;\n\tmargin: 4px 4px 11px 4px;\n\tgrid-template: 30px 45px / 100%;\n\t/*border: 1px solid black;*/\n\tborder-radius: 10px;\n\tbackground-color: black;\n}\n\n#temporal{\n\tcolor: white;\n\tfont-size: 35px;\n\ttext-align: right;\n\t/*vertical-align: middle;\n\tline-height: 40px;*/\n\tmargin: 0px 10px 10px 10px;\n}\n\n#current{\n\tcolor: white;\n\tfont-size: 20px;\n\ttext-align: right;\n\t/*vertical-align: middle;\n\tline-height: 35px;*/\n\tmargin: 10px 10px 5px 10px;\n}\n\n#buttons{\n\tdisplay: grid;\n\tmargin: 0;\n\tgrid-template: repeat(5,75px)/repeat(4,75px);\n\talign-items: center;\n\tjustify-items: center;\n\n}\n\n.numbers, .operators, .specials{\n\theight: 65px;\n\twidth: 65px;\n\tborder: 1px solid black;\n\tborder-radius:10px;\n\tmargin: auto;\n\tfont-size: 24px;\n\tcolor: white;\n\ttext-align: center;\n\tvertical-align: middle;\n\tline-height: 65px;\n\tbackground-color: black;\n\t\n}\n\n.clicked{\n\tfont-size: 23px;\n\tborder: 1px solid hsl(120, 0%, 30%);\n\tbox-shadow: inset 0px 0px 30px hsl(120, 0%, 30%);\n}\n\n#add{\n    grid-area: 4/4/6/5;\n    margin: auto;\n    height: 140px;\n    width: 65px;\n    line-height: 140px;\n}\n\n.unselectable {\n   -moz-user-select: -moz-none;\n   -khtml-user-select: none;\n   -webkit-user-select: none;\n   -ms-user-select: none;\n   user-select: none;\n}\n\nfooter{\n  display: grid;\n  grid-template: 100% / 1fr 1fr 1fr;\n  justify-content: space-evenly;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n}\n\nfooter h3 {\t\n    font-family: open-sans;\n    font-size: 24px;\n    font-weight: 500;\n    text-align: center;\n\tvertical-align: middle;\n\tline-height: 48px;\n}\n\nsocial img{\n\theight: 2.5rem;\n\twidth: 2.5rem;\n\tbackground: transparent;\n\tmargin: 6px;\n}\n\nsocial{\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}",""]);const c=a},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,p="".concat(l," ").concat(u);i[l]=u+1;var d=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=r(t,o),l=0;l<i.length;l++){var u=e(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),r=e(795),o=e.n(r),i=e(569),a=e.n(i),c=e(565),s=e.n(c),l=e(216),u=e.n(l),p=e(589),d=e.n(p),f=e(426),m={};m.styleTagTransform=d(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let h,g,x=[],v=[],b=!0;const y={add:(t,n)=>t+n,subtract:(t,n)=>t-n,multiply:(t,n)=>t*n,divide:(t,n)=>t/n,modulus:(t,n)=>t%n},w={dot:function(){const t=h?v:x;t.includes(".")||t.push(".")},backspace:function(){const t=v.length?v:h||(b?x:null);null!=t&&(t==h?h=void 0:t.pop())},equals:function(){k(h),h=void 0,b=!0},clear:function(){x=[],v=[],h=void 0,b=!0}},k=t=>{if(v.length){b=!1,g={num1:x,operator:h,num2:v};const t=Number(x.join("")),n=Number(v.join("")),e=y[h](t,n);x=String(e).split(""),v=[]}"."!=x[x.length-1]&&x.length&&(h=t)},S=t=>{var n;return g=void 0,t in y?k(t):t in w?(t=>{w[t]()})(t):(n=t,(h?v:x).push(n)),{num1:x,operator:h,num2:v,clear:b,previous:g}},j=e.p+"4e3be8851f2d198fe964.png",C=e.p+"925ec4b11c85b2d45ab7.png",T=e.p+"c5b9e44afe052374da65.png",E={add:"+",subtract:"-",multiply:"*",divide:"/",modulus:"%"},q=(t,n)=>{for(;t.length>n;)t.shift()},z=document.querySelector("#current"),M=document.querySelector("#temporal"),N=t=>{const{clear:n,previous:e}=t;if(n)return void(z.textContent="");if(null==e)return;let r;r=z.textContent?[E[e.operator],...e.num2]:[...e.num1,E[e.operator],...e.num2],e.num1.length&&e.num2.length&&(r=z.textContent.split("").concat(r),q(r,26),z.textContent=r.join(""))},A=t=>{const{num1:n,num2:e,operator:r}=t;let o=[...n,E[r],...e];q(o,13),M.textContent=o.join("")},I=document.querySelector("#buttons");I.addEventListener("click",(t=>{const n=t.target.id;if("buttons"==n)return;const e=S(n);N(e),A(e)})),document.addEventListener("keydown",(t=>{const n=I.querySelector(`div[data-key='${t.key}']`);if(!n)return;const e=n.id,r=S(e);N(r),A(r)}));const L=j;document.querySelector("#github").src=L;const P=C;document.querySelector("#linkedin").src=P;const Z=T;document.querySelector("#twitter").src=Z})()})();