import{a as Rt,b as tn,c as lt}from"../chunk.A7EFB3TN.js";var St=Object.create;var Tt=Object.getPrototypeOf,$t=Object.prototype.hasOwnProperty,_t=Object.getOwnPropertyNames,It=Object.getOwnPropertyDescriptor;var Bt=(n,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of _t(r))!$t.call(n,l)&&l!=="default"&&Rt(n,l,{get:()=>r[l],enumerable:!(o=It(r,l))||o.enumerable});return n},je=n=>n&&n.__esModule?n:Bt(tn(Rt(n!=null?St(Tt(n)):{},"default",{value:n,enumerable:!0})),n);var ut=lt((Ge,He)=>{(function(n,r){typeof Ge=="object"&&typeof He!="undefined"?He.exports=r():typeof define=="function"&&define.amd?define(r):(n=n||self).aoife=r()})(Ge,function(){"use strict";function n(){var p,m=this.parentNode,D=arguments.length;if(m)for(D||m.removeChild(this);D--;)typeof(p=arguments[D])!="object"?p=this.ownerDocument.createTextNode(p):p.parentNode&&p.parentNode.removeChild(p),D?m.insertBefore(p,this.nextSibling):m.replaceChild(p,this)}function r(p,m){if(p===m)return!0;if(p&&m&&typeof p=="object"&&typeof m=="object"){if(p.constructor!==m.constructor)return!1;var D,I,f=void 0;if(Array.isArray(p)){if((D=p.length)!=m.length)return!1;for(f=D;f--!=0;)if(!r(p[f],m[f]))return!1;return!0}if(p instanceof Map&&m instanceof Map){if(p.size!==m.size)return!1;for(var k=0,O=p.entries();k<O.length;k++)if(f=O[k],!m.has(f[0]))return!1;for(var W=0,R=p.entries();W<R.length;W++)if(!r((f=R[W])[1],m.get(f[0])))return!1;return!0}if(p instanceof Set&&m instanceof Set){if(p.size!==m.size)return!1;for(var x=0,B=p.entries();x<B.length;x++)if(f=B[x],!m.has(f[0]))return!1;return!0}if(ArrayBuffer.isView(p)&&ArrayBuffer.isView(m)){if((D=p.length)!=m.length)return!1;for(f=D;f--!=0;)if(p[f]!==m[f])return!1;return!0}if(p.constructor===RegExp)return p.source===m.source&&p.flags===m.flags;if(p.valueOf!==Object.prototype.valueOf)return p.valueOf()===m.valueOf();if(p.toString!==Object.prototype.toString)return p.toString()===m.toString();if((D=(I=Object.keys(p)).length)!==Object.keys(m).length)return!1;for(f=D;f--!=0;)if(!Object.prototype.hasOwnProperty.call(m,I[f]))return!1;for(f=D;f--!=0;){var H=I[f];if(!r(p[H],m[H]))return!1}return!0}return p!=p&&m!=m}HTMLElement.prototype.append===void 0&&(Element.prototype.append=function(){for(var p=this,m=[],D=0;D<arguments.length;D++)m[D]=arguments[D];m.forEach(function(I){p.prototype.appendChild(I)})}),HTMLElement.prototype.remove===void 0&&(Element.prototype.remove=function(){this.prototype.parentNode&&this.prototype.parentNode.removeChild(this)}),Element.prototype.replaceWith||(Element.prototype.replaceWith=n),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=n),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=n);var o=new Set;function l(p){var m=[];if(p)if(typeof p=="string"){var D="",I=p.split(", ");I.forEach(function(f,k){f=f.trim(),k===I.length-1?D+=f+"[aoife-next], "+f+" [aoife-next]":D+=f+"[aoife-next], "+f+" [aoife-next],"}),m=document.body.querySelectorAll(D)}else Object.prototype.toString.call(p)==="[object Array]"?(m=p.slice(),p.forEach(function(f){m.push.apply(m,f.querySelectorAll("*"))})):(m=[p]).push.apply(m,p.querySelectorAll("*"));return m}function g(p,m,D){p.__next||(p.setAttribute("aoife-next",""),p.__next=new Map),p.__next.set(m,D)}function v(p,m,D,I){return new(D=D||Promise)(function(f,k){function O(x){try{R(I.next(x))}catch(B){k(B)}}function W(x){try{R(I.throw(x))}catch(B){k(B)}}function R(x){x.done?f(x.value):new D(function(B){B(x.value)}).then(O,W)}R((I=I.apply(p,m||[])).next())})}function h(p,m){var D,I,f,k,O={label:0,sent:function(){if(1&f[0])throw f[1];return f[1]},trys:[],ops:[]};return k={next:W(0),throw:W(1),return:W(2)},typeof Symbol=="function"&&(k[Symbol.iterator]=function(){return this}),k;function W(R){return function(x){return function(B){if(D)throw new TypeError("Generator is already executing.");for(;O;)try{if(D=1,I&&(f=2&B[0]?I.return:B[0]?I.throw||((f=I.return)&&f.call(I),0):I.next)&&!(f=f.call(I,B[1])).done)return f;switch(I=0,f&&(B=[2&B[0],f.value]),B[0]){case 0:case 1:f=B;break;case 4:return O.label++,{value:B[1],done:!1};case 5:O.label++,I=B[1],B=[0];continue;case 7:B=O.ops.pop(),O.trys.pop();continue;default:if(!(f=0<(f=O.trys).length&&f[f.length-1])&&(B[0]===6||B[0]===2)){O=0;continue}if(B[0]===3&&(!f||B[1]>f[0]&&B[1]<f[3])){O.label=B[1];break}if(B[0]===6&&O.label<f[1]){O.label=f[1],f=B;break}if(f&&O.label<f[2]){O.label=f[2],O.ops.push(B);break}f[2]&&O.ops.pop(),O.trys.pop();continue}B=m.call(p,O)}catch(H){B=[6,H],I=0}finally{D=f=0}if(5&B[0])throw B[1];return{value:B[0]?B[1]:void 0,done:!0}}([R,x])}}}function T(p,m){m===void 0&&(m=500);var D=null;return function(){for(var I=[],f=0;f<arguments.length;f++)I[f]=arguments[f];D?(clearTimeout(D),D=null):p.apply(this,I),D=setTimeout(function(){D=null},m)}}function M(p,m){m===void 0&&(m=500);var D=0;return function(){for(var I=[],f=0;f<arguments.length;f++)I[f]=arguments[f];var k=Date.now();(D<1||m<k-D)&&(D=k,p.apply(this,I))}}var P={autofocus:!0,role:!0,viewBox:!0,flavor:!0,"flavor-ignore":!0},re={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};function oe(p,m){return typeof m=="function"?Promise.resolve(m(p)):m}function w(p,m,D){var I,f=this,k=D[m];return D.debounce&&typeof k=="function"&&-1<D.debounce.indexOf(m)?k=T(k,D.debounceTime):D.throttle&&typeof k=="function"&&-1<D.throttle.indexOf(m)&&(k=M(k,D.throttleTime)),/^on/.test(m)?(p[m]=k,null):/^listen/.test(m)?(p.addEventListener(m.replace("listen",""),k),null):((I=p.__isSvg||P[m]||/-/.test(m)?function(){return v(f,void 0,void 0,function(){var O;return h(this,function(W){switch(W.label){case 0:return[4,oe(p,k)];case 1:return O=W.sent(),p.getAttribute(m)!==O&&(O===!1?p.removeAttribute(m):p.setAttribute(m,O)),[2]}})})}:m==="style"?function(){return v(f,void 0,void 0,function(){var O;return h(this,function(W){switch(W.label){case 0:return[4,oe(p,k)];case 1:return(O=W.sent())&&(typeof O=="string"?p.style.cssText=O:Object.keys(O).forEach(function(R){if(/-/.test(R))p.style.setProperty(R,O[R]);else{var x=O[R];typeof x!="number"||re[R]||(x+="px"),p.style[R]=x}})),[2]}})})}:m==="className"?function(){return v(f,void 0,void 0,function(){var O;return h(this,function(W){switch(W.label){case 0:return[4,oe(p,k)];case 1:return O=W.sent(),Array.isArray(O)&&(O=O.join(" ")),p.className!==O&&(p.className=O),[2]}})})}:function(){return v(f,void 0,void 0,function(){var O;return h(this,function(W){switch(W.label){case 0:return[4,oe(p,k)];case 1:return O=W.sent(),p[m]!==O&&(p[m]=O),[2]}})})})(),typeof k!="function"?null:I)}var A={};function F(p){var m=Object.prototype.toString.call(p);if(m==="[object String]"||m==="[object Number]")return!0}function y(p){return 0<Object.prototype.toString.call(p).indexOf("lement")}function C(p,m){p.isEqualNode(m)||p.replaceWith(m)}function U(p,m){return m===void 0&&(m=5e3),new Promise(function(D,I){var f=0,k=function(){var O=p();O?D(O):f<m?(f++,setTimeout(k,20+f)):I()};k()})}function L(p){return U(typeof p=="string"?function(){return document.querySelector(p)}:function(){if(document.body.contains(p))return p})}var G=void 0,ie=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103,ce={svg:!0,rect:!0,circle:!0,ellipse:!0,line:!0,polyline:!0,polygon:!0,path:!0,animate:!0,animateColor:!0,animateMotion:!0,animateTransform:!0,clipPath:!0,"color-profile":!0,"definition-src":!0,defs:!0,desc:!0,filter:!0,font:!0,"font-face":!0,"font-face-format":!0,"font-face-name":!0,"font-face-src":!0,"font-face-uri":!0,g:!0,glyph:!0,hkern:!0,linearGradient:!0,marker:!0,mask:!0,view:!0},Ae={class:1,className:1,onsubmit:1,oncreate:1,onappend:1,child:1,children:1,length:1,memo:1,__memo:1,__memoLast:1,__memoSeted:1,__proxy:1,__proxyEle:1},pe=["className"],Q=function(p,m){for(var D=[],I=2;I<arguments.length;I++)D[I-2]=arguments[I];var f,k={};if(m&&(typeof m=="function"||F(m)||y(m)?D=[m].concat(D):Array.isArray(m)?D=m.concat(D):k=m),D=function(R){var x=[];return R.forEach(function(B){Array.isArray(B)?x=x.concat(B):x.push(B)}),x}(D),k.children&&k.children.length||(k.children=D.slice()),k.class&&(k.className=k.class,delete k.class),Array.isArray(p))return Q.apply(void 0,p);if(typeof p=="function"){if((f=p(k))&&typeof f.then=="function"){var O=document.createElement("span");return O.setAttribute("promise-span",""),f.then(function(R){O.replaceWith(R)}),O}return f}if(typeof p=="string")if(p==="template"&&k.children){var W="";k.children.forEach(function(R){typeof R!="string"&&typeof R!="number"||(W+=R)}),(f=document.createElement("template")).innerHTML=W}else{if(A[p])return f=function(R,x,B){x===void 0&&(x=[]);var H=B===void 0?{}:B,q=H.ref,se=H.loading,ue=H.defaultKey,le=ue===void 0?"default":ue;return se=se||document.createElement("input"),Promise.resolve(R.apply(void 0,x)).then(function(te){var de=te[le];de&&(te=de.apply(void 0,x)),typeof te=="function"&&(te=te.apply(void 0,x)),q&&q(te),se&&se.replaceWith(te)}),se}(A[p],[k].concat(D));ce[p]?(f=document.createElementNS("http://www.w3.org/2000/svg",p)).__isSvg=!0:f=document.createElement(p)}else y(p)&&(f=p);return k.memo&&(f.__memo=k.memo,f.__memoSeted=1,Promise.resolve(k.memo()).then(function(R){f.__memoLast=R})),k.onsubmit&&(f.onsubmit=function(R){R.preventDefault(),k.onsubmit&&k.onsubmit(R)}),typeof k.debounce=="string"&&(k.debounce=[k.debounce]),typeof k.throttle=="string"&&(k.throttle=[k.throttle]),pe.forEach(function(R){if(k[R]){var x=w(f,R,k);x&&g(f,R,x)}}),Object.keys(k).forEach(function(R){if(!Ae[R]){var x=w(f,R,k);x&&g(f,R,x)}}),function(R,x){var B=this;Array.isArray(R)&&R.filter(function(H){return H!=null}).forEach(function(H,q){if(F(H)){var se=document.createTextNode(H);se.key=q,x.append(se)}else if(typeof H=="function"){var ue=document.createTextNode("");x.append(ue);var le=function(){return v(B,void 0,void 0,function(){var J,N,$,he,we,fe,De;return h(this,function(Ce){switch(Ce.label){case 0:return[4,Promise.resolve(H())];case 1:return F(J=Ce.sent())?((N=document.createTextNode(J)).key=q,$=!1,x.childNodes.forEach(function(X){if(X.key===N.key){if(X.textContent===N.textContent)return void($=!0);C(X,N),$=!0}}),$||x.insertBefore(N,ue),[2,q]):Array.isArray(J)?(he={},we={},J.forEach(function(X,Ee){X.___forList=q,X.key||(X.key="fn("+q+")-list("+Ee+")"),we[X.key]=X}),fe=[],x.childNodes.forEach(function(X){X.___forList===q&&(we[X.key]?he[X.key]=X:fe.push(X))}),fe.forEach(function(X){X.remove()}),J.forEach(function(X){var Ee=he[X.key];Ee?Ee.isEqualNode(X)||C(Ee,X):X!==!1&&x.insertBefore(X,ue)}),[2,"for-list-"+q]):J?(J.key||(J.key=q),De=!1,x.childNodes.forEach(function(X){X.key===J.key&&(C(X,J),De=!0)}),De||x.insertBefore(J,ue),[2,J.key]):[2]}})})};le(),g(x,"children",le)}else if(y(H))x.append(H);else if(H!==!1)if(Object.prototype.toString.call(H)==="[object Array]"){for(var te=[],de=0;de<H.length;de++){var Z=H[de];Z!==!1&&te.push(Z)}x.append.apply(x,te)}else x.appendChild(H)})}(k.children,f),typeof k.oncreate=="function"&&k.oncreate(f),typeof k.onappend=="function"&&L(f).then(k.onappend),f};return Q.jsxFrag=function(p){return p&&p.children?Q.apply(void 0,["span",{style:{all:"unset"}}].concat(p.children)):""},Q.waitAppend=L,Q.subscribe=function(p){return o.add(p),function(){o.delete(p)}},Q.next=function(p,m){p=p||"*";for(var D=l(m),I=l(p),f=[],k=I.length,O=function(R){var x=I[R];if(x.__next&&document.body.contains(x)){if(D.length){for(var B=D.length,H=!1,q=0;q<B;q++){var se=D[q];if(se===x||se.contains(x)){H=!0;break}}if(H)return"continue"}x.__memo?Promise.resolve(x.__memo()).then(function(ue){var le=!r(x.__memoLast,ue);x.__memoLast=ue,le&&x.__next.forEach(function(te){te()})}):x.__next.forEach(function(ue){ue()}),f.push(x)}},W=0;W<k;W++)O(W);return o.forEach(function(R){return R()}),f},Q.events=o,Q.registerTag=function(p){Object.keys(p).forEach(function(m){A[m]=p[m]})},Q.propFn=function(p,m){return typeof p=="function"?function(){return m(p())}:m(p)},Q.waitValue=U,Q.memo=function(p){function m(){return v(G,void 0,void 0,function(){var I,f;return h(this,function(k){switch(k.label){case 0:return[4,Promise.resolve(p())];case 1:return I=k.sent(),D.fixed?(f=r(D.data,I),D.data=I,[2,!f]):(D.fixed=1,D.data=I,[2,!0])}})})}var D={fixed:0,data:null,value:null};return m(),function(I){return function(){return v(G,void 0,void 0,function(){var f;return h(this,function(k){switch(k.label){case 0:return[4,Promise.resolve(m())];case 1:return k.sent()?(f=D,[4,Promise.resolve(I())]):[3,3];case 2:f.value=k.sent(),k.label=3;case 3:return[2,D.value]}})})}}},Q.deepEqual=r,Q.deepMerge=function p(m,D){for(var I in D)D.hasOwnProperty(I)&&(m[I]&&function(k){return k&&typeof k=="object"}(f=I)&&!function(k){var O=Object.prototype.toString.call(k);return O==="[object RegExp]"||O==="[object Date]"||function(W){return W.$$typeof===ie}(k)}(f)?p(m[I],D[I]):m[I]=D[I]);var f;return m},Q.debounce=T,Q.throttle=M,window.aoife=Q})});var dt=lt((qe,Ze)=>{(function(n,r){typeof qe=="object"&&typeof Ze!="undefined"?Ze.exports=r():typeof define=="function"&&define.amd?define(r):(n=typeof globalThis!="undefined"?globalThis:n||self,n.marked=r())})(qe,function(){"use strict";function n(c,u){for(var d=0;d<u.length;d++){var e=u[d];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function r(c,u,d){return u&&n(c.prototype,u),d&&n(c,d),c}function o(c,u){if(!!c){if(typeof c=="string")return l(c,u);var d=Object.prototype.toString.call(c).slice(8,-1);if(d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set")return Array.from(c);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return l(c,u)}}function l(c,u){(u==null||u>c.length)&&(u=c.length);for(var d=0,e=new Array(u);d<u;d++)e[d]=c[d];return e}function g(c,u){var d;if(typeof Symbol=="undefined"||c[Symbol.iterator]==null){if(Array.isArray(c)||(d=o(c))||u&&c&&typeof c.length=="number"){d&&(c=d);var e=0;return function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return d=c[Symbol.iterator](),d.next.bind(d)}function v(c){var u={exports:{}};return c(u,u.exports),u.exports}var h=v(function(c){function u(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}function d(e){c.exports.defaults=e}c.exports={defaults:u(),getDefaults:u,changeDefaults:d}}),T=/[&<>"']/,M=/[&<>"']/g,P=/[<>"']|&(?!#?\w+;)/,re=/[<>"']|&(?!#?\w+;)/g,oe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},w=function(u){return oe[u]};function A(c,u){if(u){if(T.test(c))return c.replace(M,w)}else if(P.test(c))return c.replace(re,w);return c}var F=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function y(c){return c.replace(F,function(u,d){return d=d.toLowerCase(),d==="colon"?":":d.charAt(0)==="#"?d.charAt(1)==="x"?String.fromCharCode(parseInt(d.substring(2),16)):String.fromCharCode(+d.substring(1)):""})}var C=/(^|[^\[])\^/g;function U(c,u){c=c.source||c,u=u||"";var d={replace:function(t,a){return a=a.source||a,a=a.replace(C,"$1"),c=c.replace(t,a),d},getRegex:function(){return new RegExp(c,u)}};return d}var L=/[^\w:]/g,G=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function ie(c,u,d){if(c){var e;try{e=decodeURIComponent(y(d)).replace(L,"").toLowerCase()}catch(t){return null}if(e.indexOf("javascript:")===0||e.indexOf("vbscript:")===0||e.indexOf("data:")===0)return null}u&&!G.test(d)&&(d=p(u,d));try{d=encodeURI(d).replace(/%25/g,"%")}catch(t){return null}return d}var ce={},Ae=/^[^:]+:\/*[^/]*$/,pe=/^([^:]+:)[\s\S]*$/,Q=/^([^:]+:\/*[^/]*)[\s\S]*$/;function p(c,u){ce[" "+c]||(Ae.test(c)?ce[" "+c]=c+"/":ce[" "+c]=f(c,"/",!0)),c=ce[" "+c];var d=c.indexOf(":")===-1;return u.substring(0,2)==="//"?d?u:c.replace(pe,"$1")+u:u.charAt(0)==="/"?d?u:c.replace(Q,"$1")+u:c+u}var m={exec:function(){}};function D(c){for(var u=1,d,e;u<arguments.length;u++){d=arguments[u];for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(c[e]=d[e])}return c}function I(c,u){var d=c.replace(/\|/g,function(a,i,s){for(var S=!1,E=i;--E>=0&&s[E]==="\\";)S=!S;return S?"|":" |"}),e=d.split(/ \|/),t=0;if(e.length>u)e.splice(u);else for(;e.length<u;)e.push("");for(;t<e.length;t++)e[t]=e[t].trim().replace(/\\\|/g,"|");return e}function f(c,u,d){var e=c.length;if(e===0)return"";for(var t=0;t<e;){var a=c.charAt(e-t-1);if(a===u&&!d)t++;else if(a!==u&&d)t++;else break}return c.substr(0,e-t)}function k(c,u){if(c.indexOf(u[1])===-1)return-1;for(var d=c.length,e=0,t=0;t<d;t++)if(c[t]==="\\")t++;else if(c[t]===u[0])e++;else if(c[t]===u[1]&&(e--,e<0))return t;return-1}function O(c){c&&c.sanitize&&!c.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function W(c,u){if(u<1)return"";for(var d="";u>1;)u&1&&(d+=c),u>>=1,c+=c;return d+c}var R={escape:A,unescape:y,edit:U,cleanUrl:ie,resolveUrl:p,noopTest:m,merge:D,splitCells:I,rtrim:f,findClosingBracket:k,checkSanitizeDeprecation:O,repeatString:W},x=h.defaults,B=R.rtrim,H=R.splitCells,q=R.escape,se=R.findClosingBracket;function ue(c,u,d){var e=u.href,t=u.title?q(u.title):null,a=c[1].replace(/\\([\[\]])/g,"$1");return c[0].charAt(0)!=="!"?{type:"link",raw:d,href:e,title:t,text:a}:{type:"image",raw:d,href:e,title:t,text:q(a)}}function le(c,u){var d=c.match(/^(\s+)(?:```)/);if(d===null)return u;var e=d[1];return u.split(`
`).map(function(t){var a=t.match(/^\s+/);if(a===null)return t;var i=a[0];return i.length>=e.length?t.slice(e.length):t}).join(`
`)}var te=function(){function c(d){this.options=d||x}var u=c.prototype;return u.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:`
`}},u.code=function(e){var t=this.rules.block.code.exec(e);if(t){var a=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?a:B(a,`
`)}}},u.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var a=t[0],i=le(a,t[3]||"");return{type:"code",raw:a,lang:t[2]?t[2].trim():t[2],text:i}}},u.heading=function(e){var t=this.rules.block.heading.exec(e);if(t){var a=t[2].trim();if(/#$/.test(a)){var i=B(a,"#");(this.options.pedantic||!i||/ $/.test(i))&&(a=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:a}}},u.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var a={type:"table",header:H(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split(`
`):[],raw:t[0]};if(a.header.length===a.align.length){var i=a.align.length,s;for(s=0;s<i;s++)/^ *-+: *$/.test(a.align[s])?a.align[s]="right":/^ *:-+: *$/.test(a.align[s])?a.align[s]="center":/^ *:-+ *$/.test(a.align[s])?a.align[s]="left":a.align[s]=null;for(i=a.cells.length,s=0;s<i;s++)a.cells[s]=H(a.cells[s],a.header.length);return a}}},u.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},u.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var a=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:a}}},u.list=function(e){var t=this.rules.block.list.exec(e);if(t){var a=t[0],i=t[2],s=i.length>1,S={type:"list",raw:a,ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]},E=t[0].match(this.rules.block.item),_=!1,z,V,ne,K,j,be,Fe,ke,ve,ee=E.length;ne=this.rules.block.listItemStart.exec(E[0]);for(var ae=0;ae<ee;ae++){if(z=E[ae],a=z,this.options.pedantic||(ve=z.match(new RegExp("\\n\\s*\\n {0,"+(ne[0].length-1)+"}\\S")),ve&&(j=z.length-ve.index+E.slice(ae+1).join(`
`).length,S.raw=S.raw.substring(0,S.raw.length-j),z=z.substring(0,ve.index),a=z,ee=ae+1)),ae!==ee-1){if(K=this.rules.block.listItemStart.exec(E[ae+1]),this.options.pedantic?K[1].length>ne[1].length:K[1].length>=ne[0].length||K[1].length>3){E.splice(ae,2,E[ae]+(!this.options.pedantic&&K[1].length<ne[0].length&&!E[ae].match(/\n$/)?"":`
`)+E[ae+1]),ae--,ee--;continue}else(!this.options.pedantic||this.options.smartLists?K[2][K[2].length-1]!==i[i.length-1]:s===(K[2].length===1))&&(j=E.slice(ae+1).join(`
`).length,S.raw=S.raw.substring(0,S.raw.length-j),ae=ee-1);ne=K}V=z.length,z=z.replace(/^ *([*+-]|\d+[.)]) ?/,""),~z.indexOf(`
 `)&&(V-=z.length,z=this.options.pedantic?z.replace(/^ {1,4}/gm,""):z.replace(new RegExp("^ {1,"+V+"}","gm"),"")),z=B(z,`
`),ae!==ee-1&&(a=a+`
`),be=_||/\n\n(?!\s*$)/.test(a),ae!==ee-1&&(_=a.slice(-2)===`

`,be||(be=_)),be&&(S.loose=!0),this.options.gfm&&(Fe=/^\[[ xX]\] /.test(z),ke=void 0,Fe&&(ke=z[1]!==" ",z=z.replace(/^\[[ xX]\] +/,""))),S.items.push({type:"list_item",raw:a,task:Fe,checked:ke,loose:be,text:z})}return S}},u.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):q(t[0]):t[0]}},u.def=function(e){var t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));var a=t[1].toLowerCase().replace(/\s+/g," ");return{tag:a,raw:t[0],href:t[2],title:t[3]}}},u.table=function(e){var t=this.rules.block.table.exec(e);if(t){var a={type:"table",header:H(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split(`
`):[]};if(a.header.length===a.align.length){a.raw=t[0];var i=a.align.length,s;for(s=0;s<i;s++)/^ *-+: *$/.test(a.align[s])?a.align[s]="right":/^ *:-+: *$/.test(a.align[s])?a.align[s]="center":/^ *:-+ *$/.test(a.align[s])?a.align[s]="left":a.align[s]=null;for(i=a.cells.length,s=0;s<i;s++)a.cells[s]=H(a.cells[s].replace(/^ *\| *| *\| *$/g,""),a.header.length);return a}}},u.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1]}},u.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1]}},u.text=function(e){var t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0]}},u.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:q(t[1])}},u.tag=function(e,t,a){var i=this.rules.inline.tag.exec(e);if(i)return!t&&/^<a /i.test(i[0])?t=!0:t&&/^<\/a>/i.test(i[0])&&(t=!1),!a&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?a=!0:a&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(a=!1),{type:this.options.sanitize?"text":"html",raw:i[0],inLink:t,inRawBlock:a,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):q(i[0]):i[0]}},u.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var a=t[2].trim();if(!this.options.pedantic&&/^</.test(a)){if(!/>$/.test(a))return;var i=B(a.slice(0,-1),"\\");if((a.length-i.length)%2==0)return}else{var s=se(t[2],"()");if(s>-1){var S=t[0].indexOf("!")===0?5:4,E=S+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,E).trim(),t[3]=""}}var _=t[2],z="";if(this.options.pedantic){var V=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(_);V&&(_=V[1],z=V[3])}else z=t[3]?t[3].slice(1,-1):"";return _=_.trim(),/^</.test(_)&&(this.options.pedantic&&!/>$/.test(a)?_=_.slice(1):_=_.slice(1,-1)),ue(t,{href:_&&_.replace(this.rules.inline._escapes,"$1"),title:z&&z.replace(this.rules.inline._escapes,"$1")},t[0])}},u.reflink=function(e,t){var a;if((a=this.rules.inline.reflink.exec(e))||(a=this.rules.inline.nolink.exec(e))){var i=(a[2]||a[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i||!i.href){var s=a[0].charAt(0);return{type:"text",raw:s,text:s}}return ue(a,i,a[0])}},u.emStrong=function(e,t,a){a===void 0&&(a="");var i=this.rules.inline.emStrong.lDelim.exec(e);if(!!i&&!(i[3]&&a.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var s=i[1]||i[2]||"";if(!s||s&&(a===""||this.rules.inline.punctuation.exec(a))){var S=i[0].length-1,E,_,z=S,V=0,ne=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(ne.lastIndex=0,t=t.slice(-1*e.length+S);(i=ne.exec(t))!=null;)if(E=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!!E){if(_=E.length,i[3]||i[4]){z+=_;continue}else if((i[5]||i[6])&&S%3&&!((S+_)%3)){V+=_;continue}if(z-=_,!(z>0)){if(z+V-_<=0&&!t.slice(ne.lastIndex).match(ne)&&(_=Math.min(_,_+z+V)),Math.min(S,_)%2)return{type:"em",raw:e.slice(0,S+i.index+_+1),text:e.slice(1,S+i.index+_)};if(Math.min(S,_)%2==0)return{type:"strong",raw:e.slice(0,S+i.index+_+1),text:e.slice(2,S+i.index+_-1)}}}}}},u.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var a=t[2].replace(/\n/g," "),i=/[^ ]/.test(a),s=/^ /.test(a)&&/ $/.test(a);return i&&s&&(a=a.substring(1,a.length-1)),a=q(a,!0),{type:"codespan",raw:t[0],text:a}}},u.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},u.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}},u.autolink=function(e,t){var a=this.rules.inline.autolink.exec(e);if(a){var i,s;return a[2]==="@"?(i=q(this.options.mangle?t(a[1]):a[1]),s="mailto:"+i):(i=q(a[1]),s=i),{type:"link",raw:a[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}},u.url=function(e,t){var a;if(a=this.rules.inline.url.exec(e)){var i,s;if(a[2]==="@")i=q(this.options.mangle?t(a[0]):a[0]),s="mailto:"+i;else{var S;do S=a[0],a[0]=this.rules.inline._backpedal.exec(a[0])[0];while(S!==a[0]);i=q(a[0]),a[1]==="www."?s="http://"+i:s=i}return{type:"link",raw:a[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}},u.inlineText=function(e,t,a){var i=this.rules.inline.text.exec(e);if(i){var s;return t?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):q(i[0]):i[0]:s=q(this.options.smartypants?a(i[0]):i[0]),{type:"text",raw:i[0],text:s}}},c}(),de=R.noopTest,Z=R.edit,J=R.merge,N={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:de,table:de,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/};N._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,N._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,N.def=Z(N.def).replace("label",N._label).replace("title",N._title).getRegex(),N.bullet=/(?:[*+-]|\d{1,9}[.)])/,N.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,N.item=Z(N.item,"gm").replace(/bull/g,N.bullet).getRegex(),N.listItemStart=Z(/^( *)(bull) */).replace("bull",N.bullet).getRegex(),N.list=Z(N.list).replace(/bull/g,N.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+N.def.source+")").getRegex(),N._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",N._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,N.html=Z(N.html,"i").replace("comment",N._comment).replace("tag",N._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),N.paragraph=Z(N._paragraph).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",N._tag).getRegex(),N.blockquote=Z(N.blockquote).replace("paragraph",N.paragraph).getRegex(),N.normal=J({},N),N.gfm=J({},N.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),N.gfm.nptable=Z(N.gfm.nptable).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",N._tag).getRegex(),N.gfm.table=Z(N.gfm.table).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",N._tag).getRegex(),N.pedantic=J({},N.normal,{html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",N._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:de,paragraph:Z(N.normal._paragraph).replace("hr",N.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",N.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var $={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:de,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_]*?\*[^_]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^*]*?\_[^*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:de,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};$._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",$.punctuation=Z($.punctuation).replace(/punctuation/g,$._punctuation).getRegex(),$.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,$.escapedEmSt=/\\\*|\\_/g,$._comment=Z(N._comment).replace("(?:-->|$)","-->").getRegex(),$.emStrong.lDelim=Z($.emStrong.lDelim).replace(/punct/g,$._punctuation).getRegex(),$.emStrong.rDelimAst=Z($.emStrong.rDelimAst,"g").replace(/punct/g,$._punctuation).getRegex(),$.emStrong.rDelimUnd=Z($.emStrong.rDelimUnd,"g").replace(/punct/g,$._punctuation).getRegex(),$._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,$._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,$._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,$.autolink=Z($.autolink).replace("scheme",$._scheme).replace("email",$._email).getRegex(),$._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,$.tag=Z($.tag).replace("comment",$._comment).replace("attribute",$._attribute).getRegex(),$._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,$._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,$._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,$.link=Z($.link).replace("label",$._label).replace("href",$._href).replace("title",$._title).getRegex(),$.reflink=Z($.reflink).replace("label",$._label).getRegex(),$.reflinkSearch=Z($.reflinkSearch,"g").replace("reflink",$.reflink).replace("nolink",$.nolink).getRegex(),$.normal=J({},$),$.pedantic=J({},$.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Z(/^!?\[(label)\]\((.*?)\)/).replace("label",$._label).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",$._label).getRegex()}),$.gfm=J({},$.normal,{escape:Z($.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),$.gfm.url=Z($.gfm.url,"i").replace("email",$.gfm._extended_email).getRegex(),$.breaks=J({},$.gfm,{br:Z($.br).replace("{2,}","*").getRegex(),text:Z($.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var he={block:N,inline:$},we=h.defaults,fe=he.block,De=he.inline,Ce=R.repeatString;function X(c){return c.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Ee(c){var u="",d,e,t=c.length;for(d=0;d<t;d++)e=c.charCodeAt(d),Math.random()>.5&&(e="x"+e.toString(16)),u+="&#"+e+";";return u}var Se=function(){function c(d){this.tokens=[],this.tokens.links=Object.create(null),this.options=d||we,this.options.tokenizer=this.options.tokenizer||new te,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var e={block:fe.normal,inline:De.normal};this.options.pedantic?(e.block=fe.pedantic,e.inline=De.pedantic):this.options.gfm&&(e.block=fe.gfm,this.options.breaks?e.inline=De.breaks:e.inline=De.gfm),this.tokenizer.rules=e}c.lex=function(e,t){var a=new c(t);return a.lex(e)},c.lexInline=function(e,t){var a=new c(t);return a.inlineTokens(e)};var u=c.prototype;return u.lex=function(e){return e=e.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},u.blockTokens=function(e,t,a){t===void 0&&(t=[]),a===void 0&&(a=!0),this.options.pedantic&&(e=e.replace(/^ +$/gm,""));for(var i,s,S,E;e;){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.type&&t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),E=t[t.length-1],E&&E.type==="paragraph"?(E.raw+=`
`+i.raw,E.text+=`
`+i.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.nptable(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),i.tokens=this.blockTokens(i.text,[],a),t.push(i);continue}if(i=this.tokenizer.list(e)){for(e=e.substring(i.raw.length),S=i.items.length,s=0;s<S;s++)i.items[s].tokens=this.blockTokens(i.items[s].text,[],!1);t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(a&&(i=this.tokenizer.def(e))){e=e.substring(i.raw.length),this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(a&&(i=this.tokenizer.paragraph(e))){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),E=t[t.length-1],E&&E.type==="text"?(E.raw+=`
`+i.raw,E.text+=`
`+i.text):t.push(i);continue}if(e){var _="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(_);break}else throw new Error(_)}}return t},u.inline=function(e){var t,a,i,s,S,E,_=e.length;for(t=0;t<_;t++)switch(E=e[t],E.type){case"paragraph":case"text":case"heading":{E.tokens=[],this.inlineTokens(E.text,E.tokens);break}case"table":{for(E.tokens={header:[],cells:[]},s=E.header.length,a=0;a<s;a++)E.tokens.header[a]=[],this.inlineTokens(E.header[a],E.tokens.header[a]);for(s=E.cells.length,a=0;a<s;a++)for(S=E.cells[a],E.tokens.cells[a]=[],i=0;i<S.length;i++)E.tokens.cells[a][i]=[],this.inlineTokens(S[i],E.tokens.cells[a][i]);break}case"blockquote":{this.inline(E.tokens);break}case"list":{for(s=E.items.length,a=0;a<s;a++)this.inline(E.items[a].tokens);break}}return e},u.inlineTokens=function(e,t,a,i){t===void 0&&(t=[]),a===void 0&&(a=!1),i===void 0&&(i=!1);var s,S,E=e,_,z,V;if(this.tokens.links){var ne=Object.keys(this.tokens.links);if(ne.length>0)for(;(_=this.tokenizer.rules.inline.reflinkSearch.exec(E))!=null;)ne.includes(_[0].slice(_[0].lastIndexOf("[")+1,-1))&&(E=E.slice(0,_.index)+"["+Ce("a",_[0].length-2)+"]"+E.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(_=this.tokenizer.rules.inline.blockSkip.exec(E))!=null;)E=E.slice(0,_.index)+"["+Ce("a",_[0].length-2)+"]"+E.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(_=this.tokenizer.rules.inline.escapedEmSt.exec(E))!=null;)E=E.slice(0,_.index)+"++"+E.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;){if(z||(V=""),z=!1,s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(e,a,i)){e=e.substring(s.raw.length),a=s.inLink,i=s.inRawBlock;var K=t[t.length-1];K&&s.type==="text"&&K.type==="text"?(K.raw+=s.raw,K.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),s.type==="link"&&(s.tokens=this.inlineTokens(s.text,[],!0,i)),t.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length);var j=t[t.length-1];s.type==="link"?(s.tokens=this.inlineTokens(s.text,[],!0,i),t.push(s)):j&&s.type==="text"&&j.type==="text"?(j.raw+=s.raw,j.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(e,E,V)){e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],a,i),t.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(e)){e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],a,i),t.push(s);continue}if(s=this.tokenizer.autolink(e,Ee)){e=e.substring(s.raw.length),t.push(s);continue}if(!a&&(s=this.tokenizer.url(e,Ee))){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.inlineText(e,i,X)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(V=s.raw.slice(-1)),z=!0,S=t[t.length-1],S&&S.type==="text"?(S.raw+=s.raw,S.text+=s.text):t.push(s);continue}if(e){var be="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(be);break}else throw new Error(be)}}return t},r(c,null,[{key:"rules",get:function(){return{block:fe,inline:De}}}]),c}(),At=h.defaults,et=R.cleanUrl,Ie=R.escape,Ue=function(){function c(d){this.options=d||At}var u=c.prototype;return u.code=function(e,t,a){var i=(t||"").match(/\S*/)[0];if(this.options.highlight){var s=this.options.highlight(e,i);s!=null&&s!==e&&(a=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+Ie(i,!0)+'">'+(a?e:Ie(e,!0))+`</code></pre>
`:"<pre><code>"+(a?e:Ie(e,!0))+`</code></pre>
`},u.blockquote=function(e){return`<blockquote>
`+e+`</blockquote>
`},u.html=function(e){return e},u.heading=function(e,t,a,i){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+i.slug(a)+'">'+e+"</h"+t+`>
`:"<h"+t+">"+e+"</h"+t+`>
`},u.hr=function(){return this.options.xhtml?`<hr/>
`:`<hr>
`},u.list=function(e,t,a){var i=t?"ol":"ul",s=t&&a!==1?' start="'+a+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`},u.listitem=function(e){return"<li>"+e+`</li>
`},u.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},u.paragraph=function(e){return"<p>"+e+`</p>
`},u.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`},u.tablerow=function(e){return`<tr>
`+e+`</tr>
`},u.tablecell=function(e,t){var a=t.header?"th":"td",i=t.align?"<"+a+' align="'+t.align+'">':"<"+a+">";return i+e+"</"+a+`>
`},u.strong=function(e){return"<strong>"+e+"</strong>"},u.em=function(e){return"<em>"+e+"</em>"},u.codespan=function(e){return"<code>"+e+"</code>"},u.br=function(){return this.options.xhtml?"<br/>":"<br>"},u.del=function(e){return"<del>"+e+"</del>"},u.link=function(e,t,a){if(e=et(this.options.sanitize,this.options.baseUrl,e),e===null)return a;var i='<a href="'+Ie(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+a+"</a>",i},u.image=function(e,t,a){if(e=et(this.options.sanitize,this.options.baseUrl,e),e===null)return a;var i='<img src="'+e+'" alt="'+a+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">",i},u.text=function(e){return e},c}(),tt=function(){function c(){}var u=c.prototype;return u.strong=function(e){return e},u.em=function(e){return e},u.codespan=function(e){return e},u.del=function(e){return e},u.html=function(e){return e},u.text=function(e){return e},u.link=function(e,t,a){return""+a},u.image=function(e,t,a){return""+a},u.br=function(){return""},c}(),nt=function(){function c(){this.seen={}}var u=c.prototype;return u.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},u.getNextSafeSlug=function(e,t){var a=e,i=0;if(this.seen.hasOwnProperty(a)){i=this.seen[e];do i++,a=e+"-"+i;while(this.seen.hasOwnProperty(a))}return t||(this.seen[e]=i,this.seen[a]=0),a},u.slug=function(e,t){t===void 0&&(t={});var a=this.serialize(e);return this.getNextSafeSlug(a,t.dryrun)},c}(),wt=h.defaults,kt=R.unescape,Te=function(){function c(d){this.options=d||wt,this.options.renderer=this.options.renderer||new Ue,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new tt,this.slugger=new nt}c.parse=function(e,t){var a=new c(t);return a.parse(e)},c.parseInline=function(e,t){var a=new c(t);return a.parseInline(e)};var u=c.prototype;return u.parse=function(e,t){t===void 0&&(t=!0);var a="",i,s,S,E,_,z,V,ne,K,j,be,Fe,ke,ve,ee,ae,it,$e,ot=e.length;for(i=0;i<ot;i++)switch(j=e[i],j.type){case"space":continue;case"hr":{a+=this.renderer.hr();continue}case"heading":{a+=this.renderer.heading(this.parseInline(j.tokens),j.depth,kt(this.parseInline(j.tokens,this.textRenderer)),this.slugger);continue}case"code":{a+=this.renderer.code(j.text,j.lang,j.escaped);continue}case"table":{for(ne="",V="",E=j.header.length,s=0;s<E;s++)V+=this.renderer.tablecell(this.parseInline(j.tokens.header[s]),{header:!0,align:j.align[s]});for(ne+=this.renderer.tablerow(V),K="",E=j.cells.length,s=0;s<E;s++){for(z=j.tokens.cells[s],V="",_=z.length,S=0;S<_;S++)V+=this.renderer.tablecell(this.parseInline(z[S]),{header:!1,align:j.align[S]});K+=this.renderer.tablerow(V)}a+=this.renderer.table(ne,K);continue}case"blockquote":{K=this.parse(j.tokens),a+=this.renderer.blockquote(K);continue}case"list":{for(be=j.ordered,Fe=j.start,ke=j.loose,E=j.items.length,K="",s=0;s<E;s++)ee=j.items[s],ae=ee.checked,it=ee.task,ve="",ee.task&&($e=this.renderer.checkbox(ae),ke?ee.tokens.length>0&&ee.tokens[0].type==="text"?(ee.tokens[0].text=$e+" "+ee.tokens[0].text,ee.tokens[0].tokens&&ee.tokens[0].tokens.length>0&&ee.tokens[0].tokens[0].type==="text"&&(ee.tokens[0].tokens[0].text=$e+" "+ee.tokens[0].tokens[0].text)):ee.tokens.unshift({type:"text",text:$e}):ve+=$e),ve+=this.parse(ee.tokens,ke),K+=this.renderer.listitem(ve,it,ae);a+=this.renderer.list(K,be,Fe);continue}case"html":{a+=this.renderer.html(j.text);continue}case"paragraph":{a+=this.renderer.paragraph(this.parseInline(j.tokens));continue}case"text":{for(K=j.tokens?this.parseInline(j.tokens):j.text;i+1<ot&&e[i+1].type==="text";)j=e[++i],K+=`
`+(j.tokens?this.parseInline(j.tokens):j.text);a+=t?this.renderer.paragraph(K):K;continue}default:{var st='Token with "'+j.type+'" type was not found.';if(this.options.silent){console.error(st);return}else throw new Error(st)}}return a},u.parseInline=function(e,t){t=t||this.renderer;var a="",i,s,S=e.length;for(i=0;i<S;i++)switch(s=e[i],s.type){case"escape":{a+=t.text(s.text);break}case"html":{a+=t.html(s.text);break}case"link":{a+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{a+=t.image(s.href,s.title,s.text);break}case"strong":{a+=t.strong(this.parseInline(s.tokens,t));break}case"em":{a+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{a+=t.codespan(s.text);break}case"br":{a+=t.br();break}case"del":{a+=t.del(this.parseInline(s.tokens,t));break}case"text":{a+=t.text(s.text);break}default:{var E='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(E);return}else throw new Error(E)}}return a},c}(),Re=R.merge,at=R.checkSanitizeDeprecation,rt=R.escape,xt=h.getDefaults,yt=h.changeDefaults,Ft=h.defaults;function Y(c,u,d){if(typeof c=="undefined"||c===null)throw new Error("marked(): input parameter is undefined or null");if(typeof c!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(c)+", string expected");if(typeof u=="function"&&(d=u,u=null),u=Re({},Y.defaults,u||{}),at(u),d){var e=u.highlight,t;try{t=Se.lex(c,u)}catch(S){return d(S)}var a=function(E){var _;if(!E)try{_=Te.parse(t,u)}catch(z){E=z}return u.highlight=e,E?d(E):d(null,_)};if(!e||e.length<3||(delete u.highlight,!t.length))return a();var i=0;Y.walkTokens(t,function(S){S.type==="code"&&(i++,setTimeout(function(){e(S.text,S.lang,function(E,_){if(E)return a(E);_!=null&&_!==S.text&&(S.text=_,S.escaped=!0),i--,i===0&&a()})},0))}),i===0&&a();return}try{var s=Se.lex(c,u);return u.walkTokens&&Y.walkTokens(s,u.walkTokens),Te.parse(s,u)}catch(S){if(S.message+=`
Please report this to https://github.com/markedjs/marked.`,u.silent)return"<p>An error occurred:</p><pre>"+rt(S.message+"",!0)+"</pre>";throw S}}Y.options=Y.setOptions=function(c){return Re(Y.defaults,c),yt(Y.defaults),Y},Y.getDefaults=xt,Y.defaults=Ft,Y.use=function(c){var u=Re({},c);if(c.renderer&&function(){var e=Y.defaults.renderer||new Ue,t=function(s){var S=e[s];e[s]=function(){for(var E=arguments.length,_=new Array(E),z=0;z<E;z++)_[z]=arguments[z];var V=c.renderer[s].apply(e,_);return V===!1&&(V=S.apply(e,_)),V}};for(var a in c.renderer)t(a);u.renderer=e}(),c.tokenizer&&function(){var e=Y.defaults.tokenizer||new te,t=function(s){var S=e[s];e[s]=function(){for(var E=arguments.length,_=new Array(E),z=0;z<E;z++)_[z]=arguments[z];var V=c.tokenizer[s].apply(e,_);return V===!1&&(V=S.apply(e,_)),V}};for(var a in c.tokenizer)t(a);u.tokenizer=e}(),c.walkTokens){var d=Y.defaults.walkTokens;u.walkTokens=function(e){c.walkTokens(e),d&&d(e)}}Y.setOptions(u)},Y.walkTokens=function(c,u){for(var d=g(c),e;!(e=d()).done;){var t=e.value;switch(u(t),t.type){case"table":{for(var a=g(t.tokens.header),i;!(i=a()).done;){var s=i.value;Y.walkTokens(s,u)}for(var S=g(t.tokens.cells),E;!(E=S()).done;)for(var _=E.value,z=g(_),V;!(V=z()).done;){var ne=V.value;Y.walkTokens(ne,u)}break}case"list":{Y.walkTokens(t.items,u);break}default:t.tokens&&Y.walkTokens(t.tokens,u)}}},Y.parseInline=function(c,u){if(typeof c=="undefined"||c===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof c!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(c)+", string expected");u=Re({},Y.defaults,u||{}),at(u);try{var d=Se.lexInline(c,u);return u.walkTokens&&Y.walkTokens(d,u.walkTokens),Te.parseInline(d,u)}catch(e){if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,u.silent)return"<p>An error occurred:</p><pre>"+rt(e.message+"",!0)+"</pre>";throw e}},Y.Parser=Te,Y.parser=Te.parse,Y.Renderer=Ue,Y.TextRenderer=tt,Y.Lexer=Se,Y.lexer=Se.lex,Y.Tokenizer=te,Y.Slugger=nt,Y.parse=Y;var Ct=Y;return Ct})});var pt=lt((rn,Be)=>{var Wt=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{},b=function(n){var r=/\blang(?:uage)?-([\w-]+)\b/i,o=0,l={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function w(A){return A instanceof g?new g(A.type,w(A.content),A.alias):Array.isArray(A)?A.map(w):A.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(w){return Object.prototype.toString.call(w).slice(8,-1)},objId:function(w){return w.__id||Object.defineProperty(w,"__id",{value:++o}),w.__id},clone:function w(A,F){var y,C;switch(F=F||{},l.util.type(A)){case"Object":if(C=l.util.objId(A),F[C])return F[C];for(var U in y={},F[C]=y,A)A.hasOwnProperty(U)&&(y[U]=w(A[U],F));return y;case"Array":return C=l.util.objId(A),F[C]?F[C]:(y=[],F[C]=y,A.forEach(function(L,G){y[G]=w(L,F)}),y);default:return A}},getLanguage:function(w){for(;w&&!r.test(w.className);)w=w.parentElement;return w?(w.className.match(r)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(y){var w=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(y.stack)||[])[1];if(w){var A=document.getElementsByTagName("script");for(var F in A)if(A[F].src==w)return A[F]}return null}},isActive:function(w,A,F){for(var y="no-"+A;w;){var C=w.classList;if(C.contains(A))return!0;if(C.contains(y))return!1;w=w.parentElement}return!!F}},languages:{extend:function(w,A){var F=l.util.clone(l.languages[w]);for(var y in A)F[y]=A[y];return F},insertBefore:function(w,A,F,y){var C=(y=y||l.languages)[w],U={};for(var L in C)if(C.hasOwnProperty(L)){if(L==A)for(var G in F)F.hasOwnProperty(G)&&(U[G]=F[G]);F.hasOwnProperty(L)||(U[L]=C[L])}var ie=y[w];return y[w]=U,l.languages.DFS(l.languages,function(ce,Ae){Ae===ie&&ce!=w&&(this[ce]=U)}),U},DFS:function w(A,F,y,C){C=C||{};var U=l.util.objId;for(var L in A)if(A.hasOwnProperty(L)){F.call(A,L,A[L],y||L);var G=A[L],ie=l.util.type(G);ie!=="Object"||C[U(G)]?ie!=="Array"||C[U(G)]||(C[U(G)]=!0,w(G,F,L,C)):(C[U(G)]=!0,w(G,F,null,C))}}},plugins:{},highlightAll:function(w,A){l.highlightAllUnder(document,w,A)},highlightAllUnder:function(w,A,F){var y={callback:F,container:w,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),l.hooks.run("before-all-elements-highlight",y);for(var C,U=0;C=y.elements[U++];)l.highlightElement(C,A===!0,y.callback)},highlightElement:function(w,A,F){var y=l.util.getLanguage(w),C=l.languages[y];w.className=w.className.replace(r,"").replace(/\s+/g," ")+" language-"+y;var U=w.parentElement;U&&U.nodeName.toLowerCase()==="pre"&&(U.className=U.className.replace(r,"").replace(/\s+/g," ")+" language-"+y);var L={element:w,language:y,grammar:C,code:w.textContent};function G(ce){L.highlightedCode=ce,l.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,l.hooks.run("after-highlight",L),l.hooks.run("complete",L),F&&F.call(L.element)}if(l.hooks.run("before-sanity-check",L),!L.code)return l.hooks.run("complete",L),void(F&&F.call(L.element));if(l.hooks.run("before-highlight",L),L.grammar)if(A&&n.Worker){var ie=new Worker(l.filename);ie.onmessage=function(ce){G(ce.data)},ie.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else G(l.highlight(L.code,L.grammar,L.language));else G(l.util.encode(L.code))},highlight:function(w,A,F){var y={code:w,grammar:A,language:F};return l.hooks.run("before-tokenize",y),y.tokens=l.tokenize(y.code,y.grammar),l.hooks.run("after-tokenize",y),g.stringify(l.util.encode(y.tokens),y.language)},tokenize:function(w,A){var F=A.rest;if(F){for(var y in F)A[y]=F[y];delete A.rest}var C=new h;return T(C,C.head,w),function U(L,G,ie,ce,Ae,pe){for(var Q in ie)if(ie.hasOwnProperty(Q)&&ie[Q]){var p=ie[Q];p=Array.isArray(p)?p:[p];for(var m=0;m<p.length;++m){if(pe&&pe.cause==Q+","+m)return;var D=p[m],I=D.inside,f=!!D.lookbehind,k=!!D.greedy,O=D.alias;if(k&&!D.pattern.global){var W=D.pattern.toString().match(/[imsuy]*$/)[0];D.pattern=RegExp(D.pattern.source,W+"g")}for(var R=D.pattern||D,x=ce.next,B=Ae;x!==G.tail&&!(pe&&B>=pe.reach);B+=x.value.length,x=x.next){var H=x.value;if(G.length>L.length)return;if(!(H instanceof g)){var q,se=1;if(k){if(!(q=v(R,B,L,f)))break;var de=q.index,ue=q.index+q[0].length,le=B;for(le+=x.value.length;le<=de;)x=x.next,le+=x.value.length;if(le-=x.value.length,B=le,x.value instanceof g)continue;for(var te=x;te!==G.tail&&(le<ue||typeof te.value=="string");te=te.next)se++,le+=te.value.length;se--,H=L.slice(B,le),q.index-=B}else if(!(q=v(R,0,H,f)))continue;var de=q.index,Z=q[0],J=H.slice(0,de),N=H.slice(de+Z.length),$=B+H.length;pe&&$>pe.reach&&(pe.reach=$);var he=x.prev;J&&(he=T(G,he,J),B+=J.length),M(G,he,se);var we=new g(Q,I?l.tokenize(Z,I):Z,O,Z);if(x=T(G,he,we),N&&T(G,x,N),1<se){var fe={cause:Q+","+m,reach:$};U(L,G,ie,x.prev,B,fe),pe&&fe.reach>pe.reach&&(pe.reach=fe.reach)}}}}}}(w,C,A,C.head,0),function(U){for(var L=[],G=U.head.next;G!==U.tail;)L.push(G.value),G=G.next;return L}(C)},hooks:{all:{},add:function(w,A){var F=l.hooks.all;F[w]=F[w]||[],F[w].push(A)},run:function(w,A){var F=l.hooks.all[w];if(F&&F.length)for(var y,C=0;y=F[C++];)y(A)}},Token:g};function g(w,A,F,y){this.type=w,this.content=A,this.alias=F,this.length=0|(y||"").length}function v(w,A,F,y){w.lastIndex=A;var C=w.exec(F);if(C&&y&&C[1]){var U=C[1].length;C.index+=U,C[0]=C[0].slice(U)}return C}function h(){var w={value:null,prev:null,next:null},A={value:null,prev:w,next:null};w.next=A,this.head=w,this.tail=A,this.length=0}function T(w,A,F){var y=A.next,C={value:F,prev:A,next:y};return A.next=C,y.prev=C,w.length++,C}function M(w,A,F){for(var y=A.next,C=0;C<F&&y!==w.tail;C++)y=y.next;(A.next=y).prev=A,w.length-=C}if(n.Prism=l,g.stringify=function w(A,F){if(typeof A=="string")return A;if(Array.isArray(A)){var y="";return A.forEach(function(ie){y+=w(ie,F)}),y}var C={type:A.type,content:w(A.content,F),tag:"span",classes:["token",A.type],attributes:{},language:F},U=A.alias;U&&(Array.isArray(U)?Array.prototype.push.apply(C.classes,U):C.classes.push(U)),l.hooks.run("wrap",C);var L="";for(var G in C.attributes)L+=" "+G+'="'+(C.attributes[G]||"").replace(/"/g,"&quot;")+'"';return"<"+C.tag+' class="'+C.classes.join(" ")+'"'+L+">"+C.content+"</"+C.tag+">"},!n.document)return n.addEventListener&&(l.disableWorkerMessageHandler||n.addEventListener("message",function(w){var A=JSON.parse(w.data),F=A.language,y=A.code,C=A.immediateClose;n.postMessage(l.highlight(y,l.languages[F],F)),C&&n.close()},!1)),l;var P=l.util.currentScript();function re(){l.manual||l.highlightAll()}if(P&&(l.filename=P.src,P.hasAttribute("data-manual")&&(l.manual=!0)),!l.manual){var oe=document.readyState;oe==="loading"||oe==="interactive"&&P&&P.defer?document.addEventListener("DOMContentLoaded",re):window.requestAnimationFrame?window.requestAnimationFrame(re):window.setTimeout(re,16)}return l}(Wt);typeof Be!="undefined"&&Be.exports&&(Be.exports=b),typeof global!="undefined"&&(global.Prism=b);b.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},b.languages.markup.tag.inside["attr-value"].inside.entity=b.languages.markup.entity,b.languages.markup.doctype.inside["internal-subset"].inside=b.languages.markup,b.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(b.languages.markup.tag,"addInlined",{value:function(n,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:b.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};l["language-"+r]={pattern:/[\s\S]+/,inside:b.languages[r]};var g={};g[n]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:l},b.languages.insertBefore("markup","cdata",g)}}),b.languages.html=b.languages.markup,b.languages.mathml=b.languages.markup,b.languages.svg=b.languages.markup,b.languages.xml=b.languages.extend("markup",{}),b.languages.ssml=b.languages.xml,b.languages.atom=b.languages.xml,b.languages.rss=b.languages.xml;(function(n){var r=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:RegExp(`[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),string:{pattern:r,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var o=n.languages.markup;o&&(o.tag.addInlined("style","css"),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:n.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},o.tag))})(b);b.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};b.languages.javascript=b.languages.extend("clike",{"class-name":[b.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),b.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,b.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:b.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:b.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:b.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:b.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:b.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),b.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:b.languages.javascript}},string:/[\s\S]+/}}}),b.languages.markup&&b.languages.markup.tag.addInlined("script","javascript"),b.languages.js=b.languages.javascript;(function(n){var r="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:o,environment:{pattern:RegExp("\\$"+r),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+r),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+r),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,lookbehind:!0,greedy:!0,inside:l}],environment:{pattern:RegExp("\\$?"+r),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=n.languages.bash;for(var g=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],v=l.variable[1].inside,h=0;h<g.length;h++)v[g[h]]=n.languages.bash[g[h]];n.languages.shell=n.languages.bash})(b);b.languages.c=b.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,function:/[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),b.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},b.languages.c.string],comment:b.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:b.languages.c}}},constant:/\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/}),delete b.languages.c.boolean;(function(n){var r=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,o="\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g,function(){return r.source});n.languages.cpp=n.languages.extend("c",{"class-name":[{pattern:RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g,function(){return r.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:r,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:true|false)\b/}),n.languages.insertBefore("cpp","string",{module:{pattern:RegExp(`(\\b(?:module|import)\\s+)(?:"(?:\\\\(?:\r
|[^])|[^"\\\\\r
])*"|<[^<>\r
]*>|`+"<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g,function(){return o})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),n.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:n.languages.extend("cpp",{})}}),n.languages.insertBefore("inside","operator",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},n.languages.cpp["base-clause"])})(b);(function(n){var r,o=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;n.languages.css.selector={pattern:n.languages.css.selector,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+o.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[o,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},n.languages.css.atrule.inside["selector-function-argument"].inside=r,n.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var l={pattern:/(\b\d+)(?:%|[a-z]+\b)/,lookbehind:!0},g={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};n.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#(?:[\da-f]{1,2}){3,4}\b/i,alias:"color"},color:[/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,{pattern:/\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:l,number:g,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:l,number:g})})(b);(function(n){n.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var r={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(r).forEach(function(o){var l=r[o],g=[];/^\w+$/.test(o)||g.push(/\w+/.exec(o)[0]),o==="diff"&&g.push("bold"),n.languages.diff[o]={pattern:RegExp("^(?:["+l+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:g,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(o)[0]}}}}),Object.defineProperty(n.languages.diff,"PREFIXES",{value:r})})(b);(function(n){var r="(?:[ 	]+(?![ 	])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g,function(){return`\\\\[\r
](?:\\s|\\\\[\r
]|#.*(?!.))*(?![\\s#]|\\\\[\r
])`}),o=`"(?:[^"\\\\\r
]|\\\\(?:\r
|[^]))*"|'(?:[^'\\\\\r
]|\\\\(?:\r
|[^]))*'`,l=`--[\\w-]+=(?:<STR>|(?!["'])(?:[^\\s\\\\]|\\\\.)+)`.replace(/<STR>/g,function(){return o}),g={pattern:RegExp(o),greedy:!0},v={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function h(T,M){return T=T.replace(/<OPT>/g,function(){return l}).replace(/<SP>/g,function(){return r}),RegExp(T,M)}n.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:h("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*","i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[g,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:h("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b","i"),lookbehind:!0,greedy:!0},{pattern:h("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ 	\\\\]+<SP>)AS","i"),lookbehind:!0,greedy:!0},{pattern:h("(^ONBUILD<SP>)\\w+","i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:v,string:g,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:v},n.languages.dockerfile=n.languages.docker})(b);(function(n){function r(o,l){return"___"+o.toUpperCase()+l+"___"}Object.defineProperties(n.languages["markup-templating"]={},{buildPlaceholders:{value:function(o,l,g,v){if(o.language===l){var h=o.tokenStack=[];o.code=o.code.replace(g,function(T){if(typeof v=="function"&&!v(T))return T;for(var M,P=h.length;o.code.indexOf(M=r(l,P))!==-1;)++P;return h[P]=T,M}),o.grammar=n.languages.markup}}},tokenizePlaceholders:{value:function(o,l){if(o.language===l&&o.tokenStack){o.grammar=n.languages[l];var g=0,v=Object.keys(o.tokenStack);(function h(T){for(var M=0;M<T.length&&!(g>=v.length);M++){var P=T[M];if(typeof P=="string"||P.content&&typeof P.content=="string"){var re=v[g],oe=o.tokenStack[re],w=typeof P=="string"?P:P.content,A=r(l,re),F=w.indexOf(A);if(-1<F){++g;var y=w.substring(0,F),C=new n.Token(l,n.tokenize(oe,o.grammar),"language-"+l,oe),U=w.substring(F+A.length),L=[];y&&L.push.apply(L,h([y])),L.push(C),U&&L.push.apply(L,h([U])),typeof P=="string"?T.splice.apply(T,[M,1].concat(L)):P.content=L}}else P.content&&h(P.content)}return T})(o.tokens)}}}})})(b);(function(n){n.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:n.languages.javascript}},n.hooks.add("before-tokenize",function(r){n.languages["markup-templating"].buildPlaceholders(r,"ejs",/<%(?!%)[\s\S]+?%>/g)}),n.hooks.add("after-tokenize",function(r){n.languages["markup-templating"].tokenizePlaceholders(r,"ejs")}),n.languages.eta=n.languages.ejs})(b);b.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/m}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m};b.languages.go=b.languages.extend("clike",{string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|iota|nil|true|false)\b/,number:/(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/}),delete b.languages.go["class-name"];b.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:b.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:true|false)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,punctuation:/[!(){}\[\]:=,]/,constant:/\b(?!ID\b)[A-Z][A-Z_\d]*\b/};(function(n){n.languages.http={"request-line":{pattern:/^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*\sHTTP\/[0-9.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:n.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[0-9.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[0-9.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[0-9.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var r,o,l,g=n.languages,v={"application/javascript":g.javascript,"application/json":g.json||g.javascript,"application/xml":g.xml,"text/xml":g.xml,"text/html":g.html,"text/css":g.css},h={"application/json":!0,"application/xml":!0};for(var T in v)if(v[T]){r=r||{};var M=h[T]?(l=(o=T).replace(/^[a-z]+\//,""),"(?:"+o+"|\\w+/(?:[\\w.-]+\\+)+"+l+"(?![+\\w.-]))"):T;r[T.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+M+"(?:(?:\\r\\n?|\\n).+)*)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:v[T]}}r&&n.languages.insertBefore("http","header-name",r)})(b);(function(n){n.languages.ignore={comment:/^#.*/m,entry:{pattern:/\S(?:.*(?:(?:\\ )|\S))?/,alias:"string",inside:{operator:/^!|\*\*?|\?/,regex:{pattern:/(^|[^\\])\[[^\[\]]*\]/,lookbehind:!0},punctuation:/\//}}},n.languages.gitignore=n.languages.ignore,n.languages.hgignore=n.languages.ignore,n.languages.npmignore=n.languages.ignore})(b);(function(n){var r=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,o="(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",l={pattern:RegExp(o+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};n.languages.java=n.languages.extend("clike",{"class-name":[l,{pattern:RegExp(o+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=())])"),lookbehind:!0,inside:l.inside}],keyword:r,function:[n.languages.clike.function,{pattern:/(\:\:\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),n.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"}}),n.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":l,keyword:r,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,function(){return r.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(b);b.languages.less=b.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,operator:/[+\-*\/]/}),b.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}});(function(n){var r=["$eq","$gt","$gte","$in","$lt","$lte","$ne","$nin","$and","$not","$nor","$or","$exists","$type","$expr","$jsonSchema","$mod","$regex","$text","$where","$geoIntersects","$geoWithin","$near","$nearSphere","$all","$elemMatch","$size","$bitsAllClear","$bitsAllSet","$bitsAnyClear","$bitsAnySet","$comment","$elemMatch","$meta","$slice","$currentDate","$inc","$min","$max","$mul","$rename","$set","$setOnInsert","$unset","$addToSet","$pop","$pull","$push","$pullAll","$each","$position","$slice","$sort","$bit","$addFields","$bucket","$bucketAuto","$collStats","$count","$currentOp","$facet","$geoNear","$graphLookup","$group","$indexStats","$limit","$listLocalSessions","$listSessions","$lookup","$match","$merge","$out","$planCacheStats","$project","$redact","$replaceRoot","$replaceWith","$sample","$set","$skip","$sort","$sortByCount","$unionWith","$unset","$unwind","$abs","$accumulator","$acos","$acosh","$add","$addToSet","$allElementsTrue","$and","$anyElementTrue","$arrayElemAt","$arrayToObject","$asin","$asinh","$atan","$atan2","$atanh","$avg","$binarySize","$bsonSize","$ceil","$cmp","$concat","$concatArrays","$cond","$convert","$cos","$dateFromParts","$dateToParts","$dateFromString","$dateToString","$dayOfMonth","$dayOfWeek","$dayOfYear","$degreesToRadians","$divide","$eq","$exp","$filter","$first","$floor","$function","$gt","$gte","$hour","$ifNull","$in","$indexOfArray","$indexOfBytes","$indexOfCP","$isArray","$isNumber","$isoDayOfWeek","$isoWeek","$isoWeekYear","$last","$last","$let","$literal","$ln","$log","$log10","$lt","$lte","$ltrim","$map","$max","$mergeObjects","$meta","$min","$millisecond","$minute","$mod","$month","$multiply","$ne","$not","$objectToArray","$or","$pow","$push","$radiansToDegrees","$range","$reduce","$regexFind","$regexFindAll","$regexMatch","$replaceOne","$replaceAll","$reverseArray","$round","$rtrim","$second","$setDifference","$setEquals","$setIntersection","$setIsSubset","$setUnion","$size","$sin","$slice","$split","$sqrt","$stdDevPop","$stdDevSamp","$strcasecmp","$strLenBytes","$strLenCP","$substr","$substrBytes","$substrCP","$subtract","$sum","$switch","$tan","$toBool","$toDate","$toDecimal","$toDouble","$toInt","$toLong","$toObjectId","$toString","$toLower","$toUpper","$trim","$trunc","$type","$week","$year","$zip","$comment","$explain","$hint","$max","$maxTimeMS","$min","$orderby","$query","$returnKey","$showDiskLoc","$natural"],o="(?:"+(r=r.map(function(l){return l.replace("$","\\$")})).join("|")+")\\b";n.languages.mongodb=n.languages.extend("javascript",{}),n.languages.insertBefore("mongodb","string",{property:{pattern:/(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,greedy:!0,inside:{keyword:RegExp(`^(['"])?`+o+"(?:\\1)?$")}}}),n.languages.mongodb.string.inside={url:{pattern:/https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,greedy:!0},entity:{pattern:/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,greedy:!0}},n.languages.insertBefore("mongodb","constant",{builtin:{pattern:RegExp("\\b(?:"+["ObjectId","Code","BinData","DBRef","Timestamp","NumberLong","NumberDecimal","MaxKey","MinKey","RegExp","ISODate","UUID"].join("|")+")\\b"),alias:"keyword"}})})(b);b.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|IN|ILIKE|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};(function(n){var r=n.languages.plsql=n.languages.extend("sql",{comment:[/\/\*[\s\S]*?\*\//,/--.*/]}),o=r.keyword;Array.isArray(o)||(o=r.keyword=[o]),o.unshift(/\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i);var l=r.operator;Array.isArray(l)||(l=r.operator=[l]),l.unshift(/:=/)})(b);(function(n){n.languages.pug={comment:{pattern:/(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,lookbehind:!0},"multiline-script":{pattern:/(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:n.languages.javascript},filter:{pattern:/(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"}}},"multiline-plain-text":{pattern:/(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0},markup:{pattern:/(^[\t ]*)<.+/m,lookbehind:!0,inside:n.languages.markup},doctype:{pattern:/((?:^|\n)[\t ]*)doctype(?: .+)?/,lookbehind:!0},"flow-control":{pattern:/(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,lookbehind:!0,inside:{each:{pattern:/^each .+? in\b/,inside:{keyword:/\b(?:each|in)\b/,punctuation:/,/}},branch:{pattern:/^(?:if|unless|else|case|when|default|while)\b/,alias:"keyword"},rest:n.languages.javascript}},keyword:{pattern:/(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,lookbehind:!0},mixin:[{pattern:/(^[\t ]*)mixin .+/m,lookbehind:!0,inside:{keyword:/^mixin/,function:/\w+(?=\s*\(|\s*$)/,punctuation:/[(),.]/}},{pattern:/(^[\t ]*)\+.+/m,lookbehind:!0,inside:{name:{pattern:/^\+\w+/,alias:"function"},rest:n.languages.javascript}}],script:{pattern:/(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,lookbehind:!0,inside:n.languages.javascript},"plain-text":{pattern:/(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,lookbehind:!0},tag:{pattern:/(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,lookbehind:!0,inside:{attributes:[{pattern:/&[^(]+\([^)]+\)/,inside:n.languages.javascript},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,lookbehind:!0,inside:n.languages.javascript},"attr-name":/[\w-]+(?=\s*!?=|\s*[,)])/,punctuation:/[!=(),]+/}}],punctuation:/:/,"attr-id":/#[\w\-]+/,"attr-class":/\.[\w\-]+/}},code:[{pattern:/(^[\t ]*(?:-|!?=)).+/m,lookbehind:!0,inside:n.languages.javascript}],punctuation:/[.\-!=|]+/};for(var r=[{filter:"atpl",language:"twig"},{filter:"coffee",language:"coffeescript"},"ejs","handlebars","less","livescript","markdown",{filter:"sass",language:"scss"},"stylus"],o={},l=0,g=r.length;l<g;l++){var v=r[l];v=typeof v=="string"?{filter:v,language:v}:v,n.languages[v.language]&&(o["filter-"+v.filter]={pattern:RegExp(`(^([	 ]*)):{{filter_name}}(?:(?:\r?
|\r(?!
))(?:\\2[	 ].+|\\s*?(?=\r?
|\r)))+`.replace("{{filter_name}}",function(){return v.filter}),"m"),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"},rest:n.languages[v.language]}})}n.languages.insertBefore("pug","filter",o)})(b);b.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},b.languages.python["string-interpolation"].inside.interpolation.inside.rest=b.languages.python,b.languages.py=b.languages.python;(function(n){var r=n.util.clone(n.languages.javascript),o="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function l(h,T){return h=h.replace(/<S>/g,function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"}).replace(/<BRACES>/g,function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"}).replace(/<SPREAD>/g,function(){return o}),RegExp(h,T)}o=l(o).source,n.languages.jsx=n.languages.extend("markup",r),n.languages.jsx.tag.pattern=l(`</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=r.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:l("<SPREAD>"),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","attr-value",{script:{pattern:l("=<BRACES>"),inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:n.languages.jsx},alias:"language-javascript"}},n.languages.jsx.tag);var g=function(h){return h?typeof h=="string"?h:typeof h.content=="string"?h.content:h.content.map(g).join(""):""},v=function(h){for(var T=[],M=0;M<h.length;M++){var P=h[M],re=!1;if(typeof P!="string"&&(P.type==="tag"&&P.content[0]&&P.content[0].type==="tag"?P.content[0].content[0].content==="</"?0<T.length&&T[T.length-1].tagName===g(P.content[0].content[1])&&T.pop():P.content[P.content.length-1].content==="/>"||T.push({tagName:g(P.content[0].content[1]),openedBraces:0}):0<T.length&&P.type==="punctuation"&&P.content==="{"?T[T.length-1].openedBraces++:0<T.length&&0<T[T.length-1].openedBraces&&P.type==="punctuation"&&P.content==="}"?T[T.length-1].openedBraces--:re=!0),(re||typeof P=="string")&&0<T.length&&T[T.length-1].openedBraces===0){var oe=g(P);M<h.length-1&&(typeof h[M+1]=="string"||h[M+1].type==="plain-text")&&(oe+=g(h[M+1]),h.splice(M+1,1)),0<M&&(typeof h[M-1]=="string"||h[M-1].type==="plain-text")&&(oe=g(h[M-1])+oe,h.splice(M-1,1),M--),h[M]=new n.Token("plain-text",oe,null,oe)}P.content&&typeof P.content!="string"&&v(P.content)}};n.hooks.add("after-tokenize",function(h){h.language!=="jsx"&&h.language!=="tsx"||v(h.tokens)})})(b);(function(n){n.languages.typescript=n.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},keyword:/\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),delete n.languages.typescript.parameter;var r=n.languages.extend("typescript",{});delete r["class-name"],n.languages.typescript["class-name"].inside=r,n.languages.insertBefore("typescript","function",{"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:r}}}}),n.languages.ts=n.languages.typescript})(b);(function(n){var r=n.util.clone(n.languages.typescript);n.languages.tsx=n.languages.extend("jsx",r);var o=n.languages.tsx.tag;o.pattern=RegExp("(^|[^\\w$]|(?=</))(?:"+o.pattern.source+")",o.pattern.flags),o.lookbehind=!0})(b);(function(n){var r={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},o=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,l="(?:[^\\\\-]|"+o.source+")",g=RegExp(l+"-"+l),v={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};n.languages.regex={charset:{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"charset-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"charset-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:g,inside:{escape:o,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":r,charclass:{pattern:/\\[wsd]|\\p{[^{}]+}/i,alias:"class-name"},escape:o}},"special-escape":r,charclass:{pattern:/\.|\\[wsd]|\\p{[^{}]+}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":v}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:o,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":v}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(b);(function(n){n.languages.ruby=n.languages.extend("clike",{comment:[/#.*/,{pattern:/^=begin\s[\s\S]*?^=end/m,greedy:!0}],"class-name":{pattern:/(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/});var r={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:n.languages.ruby}};delete n.languages.ruby.function,n.languages.insertBefore("ruby","keyword",{regex:[{pattern:RegExp("%r(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1[gim]{0,3}","\\((?:[^()\\\\]|\\\\[^])*\\)[gim]{0,3}","\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}[gim]{0,3}","\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\][gim]{0,3}","<(?:[^<>\\\\]|\\\\[^])*>[gim]{0,3}"].join("|")+")"),greedy:!0,inside:{interpolation:r}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:{pattern:/(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,lookbehind:!0},"method-definition":{pattern:/(\bdef\s+)[\w.]+/,lookbehind:!0,inside:{function:/\w+$/,rest:n.languages.ruby}}}),n.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z]\w*(?:[?!]|\b)/}),n.languages.ruby.string=[{pattern:RegExp("%[qQiIwWxs]?(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1","\\((?:[^()\\\\]|\\\\[^])*\\)","\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}","\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]","<(?:[^<>\\\\]|\\\\[^])*>"].join("|")+")"),greedy:!0,inside:{interpolation:r}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:r}}],n.languages.rb=n.languages.ruby})(b);(function(n){for(var r="/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/",o=0;o<2;o++)r=r.replace(/<self>/g,function(){return r});r=r.replace(/<self>/g,function(){return"[^\\s\\S]"}),n.languages.rust={comment:[{pattern:RegExp("(^|[^\\\\])"+r),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0,alias:"string"},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},n.languages.rust["closure-params"].inside.rest=n.languages.rust,n.languages.rust.attribute.inside.string=n.languages.rust.string})(b);b.languages.scss=b.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),b.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),b.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),b.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|with|show|hide)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),b.languages.scss.atrule.inside.rest=b.languages.scss;b.languages.swift=b.languages.extend("clike",{string:{pattern:/("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[^(])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/\\\((?:[^()]|\([^)]+\))+\)/,inside:{delimiter:{pattern:/^\\\(|\)$/,alias:"variable"}}}}},keyword:/\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|some|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,constant:/\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,atrule:/@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,builtin:/\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/}),b.languages.swift.string.inside.interpolation.inside.rest=b.languages.swift;b.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/};(function(n){var r=/[*&][^\s[\]{},]+/,o=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,l="(?:"+o.source+"(?:[ 	]+"+r.source+")?|"+r.source+"(?:[ 	]+"+o.source+")?)",g="(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ 	]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g,function(){return"[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"}),v=`"(?:[^"\\\\\r
]|\\\\.)*"|'(?:[^'\\\\\r
]|\\\\.)*'`;function h(T,M){M=(M||"").replace(/m/g,"")+"m";var P=`([:\\-,[{]\\s*(?:\\s<<prop>>[ 	]+)?)(?:<<value>>)(?=[ 	]*(?:$|,|]|}|(?:[\r
]\\s*)?#))`.replace(/<<prop>>/g,function(){return l}).replace(/<<value>>/g,function(){return T});return RegExp(P,M)}n.languages.yaml={scalar:{pattern:RegExp(`([\\-:]\\s*(?:\\s<<prop>>[ 	]+)?[|>])[ 	]*(?:((?:\r?
|\r)[ 	]+)\\S[^\r
]*(?:\\2[^\r
]+)*)`.replace(/<<prop>>/g,function(){return l})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(`((?:^|[:\\-,[{\r
?])[ 	]*(?:<<prop>>[ 	]+)?)<<key>>(?=\\s*:\\s)`.replace(/<<prop>>/g,function(){return l}).replace(/<<key>>/g,function(){return"(?:"+g+"|"+v+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:h("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ 	]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),lookbehind:!0,alias:"number"},boolean:{pattern:h("true|false","i"),lookbehind:!0,alias:"important"},null:{pattern:h("null|~","i"),lookbehind:!0,alias:"important"},string:{pattern:h(v),lookbehind:!0,greedy:!0},number:{pattern:h("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.?\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)","i"),lookbehind:!0},tag:o,important:r,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},n.languages.yml=n.languages.yaml})(b)});var Gn=je(ut());var Ve=je(dt());var Ot=Object.create,We=Object.defineProperty,Nt=Object.getPrototypeOf,Lt=Object.prototype.hasOwnProperty,zt=Object.getOwnPropertyNames,Pt=Object.getOwnPropertyDescriptor,Mt=n=>We(n,"__esModule",{value:!0}),Ut=(n,r)=>()=>(r||(r={exports:{}},n(r.exports,r)),r.exports),jt=(n,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of zt(r))!Lt.call(n,l)&&l!=="default"&&We(n,l,{get:()=>r[l],enumerable:!(o=Pt(r,l))||o.enumerable});return n},Gt=n=>n&&n.__esModule?n:jt(Mt(We(n!=null?Ot(Nt(n)):{},"default",{value:n,enumerable:!0})),n),Ht=Ut((n,r)=>{(function(o,l){typeof n=="object"&&typeof r!="undefined"?r.exports=l():typeof define=="function"&&define.amd?define(l):(o=o||self).templateFn=l()})(n,function(){"use strict";return function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];if(1<o.length){var g=o[0],v=o.slice(1),h="";return g.forEach(function(T,M){h+=T,v[M]&&(h+=v[M])}),h}return typeof o[0]=="string"?o[0]:o[0]?o[0].join(""):""}})}),qt=Gt(Ht()),ct={};function Zt(...n){let r=qt.default(...n);if(ct[r])return;ct[r]=!0;let o=document.createElement("style");o.innerHTML=r,document.head.append(o)}var ge=Zt;ge`
  :root {
    --vmdb-header: 50px;
    --vmdb-radius: 6px;
    --vmdb-line: #ddeeee;
    --vmdb-menu-width: 240px;
    --vmdb-fm: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji;
  }
  .vmdb pre {
    border-radius: var(--vmdb-radius) !important;
  }
  .vmdb pre > code {
    white-space: break-spaces !important;
    word-break: break-all !important;
  }
  .vmdb {
    -moz-user-select: auto !important;
    -webkit-user-select: auto !important;
    -ms-user-select: auto !important;
    user-select: auto !important;
  }
  .vmdb .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }
  .vmdb .anchor {
    float: left;
    line-height: 1;
    margin-left: -20px;
    padding-right: 4px;
  }

  .vmdb .anchor:focus {
    outline: none;
  }

  .vmdb h1 .octicon-link,
  .vmdb h2 .octicon-link,
  .vmdb h3 .octicon-link,
  .vmdb h4 .octicon-link,
  .vmdb h5 .octicon-link,
  .vmdb h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
  }

  .vmdb h1:hover .anchor,
  .vmdb h2:hover .anchor,
  .vmdb h3:hover .anchor,
  .vmdb h4:hover .anchor,
  .vmdb h5:hover .anchor,
  .vmdb h6:hover .anchor {
    text-decoration: none;
  }

  .vmdb h1:hover .anchor .octicon-link,
  .vmdb h2:hover .anchor .octicon-link,
  .vmdb h3:hover .anchor .octicon-link,
  .vmdb h4:hover .anchor .octicon-link,
  .vmdb h5:hover .anchor .octicon-link,
  .vmdb h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  .vmdb h1:hover .anchor .octicon-link:before,
  .vmdb h2:hover .anchor .octicon-link:before,
  .vmdb h3:hover .anchor .octicon-link:before,
  .vmdb h4:hover .anchor .octicon-link:before,
  .vmdb h5:hover .anchor .octicon-link:before,
  .vmdb h6:hover .anchor .octicon-link:before {
    width: 16px;
    height: 16px;
    content: " ";
    display: inline-block;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E");
  }
  .vmdb {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    // color: #24292e;
    color: #3d454d;
    font-family: var(--vmdb-fm);
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .vmdb details {
    display: block;
  }

  .vmdb summary {
    display: list-item;
  }

  .vmdb a {
    background-color: initial;
  }

  .vmdb a:active,
  .vmdb a:hover {
    outline-width: 0;
  }

  .vmdb strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  .vmdb h1 {
    margin: 0.67em 0;
  }

  .vmdb img {
    border-style: none;
  }

  .vmdb code,
  .vmdb kbd,
  .vmdb pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  .vmdb hr {
    box-sizing: initial;
    height: 0;
    overflow: visible;
  }

  .vmdb input {
    font: inherit;
    margin: 0;
  }

  .vmdb input {
    overflow: visible;
  }

  .vmdb [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  .vmdb * {
    box-sizing: border-box;
  }

  .vmdb input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .vmdb a {
    color: #0366d6;
    text-decoration: none;
  }

  .vmdb a:hover {
    text-decoration: underline;
  }

  .vmdb strong {
    font-weight: 600;
  }

  .vmdb hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #dfe2e5;
  }

  .vmdb hr:after,
  .vmdb hr:before {
    display: table;
    content: "";
  }

  .vmdb hr:after {
    clear: both;
  }

  .vmdb table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  .vmdb td,
  .vmdb th {
    padding: 0;
  }

  .vmdb details summary {
    cursor: pointer;
  }

  .vmdb kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }

  .vmdb h1[data-moc-first] {
    margin: 0 0 !important;
    padding: 0.6em 0 !important;
    border-top: none !important;
  }

  .vmdb h1,
  .vmdb h2,
  .vmdb h3,
  .vmdb h4,
  .vmdb h5,
  .vmdb h6 {
    color: #000;
    margin-top: 0;
    margin-bottom: 0;
  }

  .vmdb h5,
  .vmdb h6 {
    font-weight: 600;
  }

  .vmdb h6 {
    font-size: 12px;
  }

  .vmdb p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .vmdb blockquote {
    margin: 0;
    background: hsl(220, 15%, 97%);
    border-radius: var(--vmdb-radius);
  }

  .vmdb ol,
  .vmdb ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .vmdb ol ol,
  .vmdb ul ol {
    list-style-type: lower-roman;
  }

  .vmdb ol ol ol,
  .vmdb ol ul ol,
  .vmdb ul ol ol,
  .vmdb ul ul ol {
    list-style-type: lower-alpha;
  }

  .vmdb dd {
    margin-left: 0;
  }

  .vmdb code,
  .vmdb pre {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
  }

  .vmdb pre {
    margin-top: 0;
    margin-bottom: 0;
  }

  .vmdb input::-webkit-inner-spin-button,
  .vmdb input::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  .vmdb :checked + .radio-label {
    position: relative;
    z-index: 1;
    border-color: #0366d6;
  }

  .vmdb .border {
    border: 1px solid #e1e4e8 !important;
  }

  .vmdb .border-0 {
    border: 0 !important;
  }

  .vmdb .border-bottom {
    border-bottom: 1px solid #e1e4e8 !important;
  }

  .vmdb .rounded-1 {
    border-radius: 3px !important;
  }

  .vmdb .bg-white {
    background-color: #fff !important;
  }

  .vmdb .bg-gray-light {
    background-color: #fafbfc !important;
  }

  .vmdb .text-gray-light {
    color: #6a737d !important;
  }

  .vmdb .mb-0 {
    margin-bottom: 0 !important;
  }

  .vmdb .my-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .vmdb .pl-0 {
    padding-left: 0 !important;
  }

  .vmdb .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .vmdb .pl-1 {
    padding-left: 4px !important;
  }

  .vmdb .pl-2 {
    padding-left: 8px !important;
  }

  .vmdb .py-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .vmdb .pl-3,
  .vmdb .px-3 {
    padding-left: 16px !important;
  }

  .vmdb .px-3 {
    padding-right: 16px !important;
  }

  .vmdb .pl-4 {
    padding-left: 24px !important;
  }

  .vmdb .pl-5 {
    padding-left: 32px !important;
  }

  .vmdb .pl-6 {
    padding-left: 40px !important;
  }

  .vmdb .f6 {
    font-size: 12px !important;
  }

  .vmdb .lh-condensed {
    line-height: 1.25 !important;
  }

  .vmdb .text-bold {
    font-weight: 600 !important;
  }

  .vmdb .pl-c {
    color: #6a737d;
  }

  .vmdb .pl-c1,
  .vmdb .pl-s .pl-v {
    color: #005cc5;
  }

  .vmdb .pl-e,
  .vmdb .pl-en {
    color: #6f42c1;
  }

  .vmdb .pl-s .pl-s1,
  .vmdb .pl-smi {
    color: #24292e;
  }

  .vmdb .pl-ent {
    color: #22863a;
  }

  .vmdb .pl-k {
    color: #d73a49;
  }

  .vmdb .pl-pds,
  .vmdb .pl-s,
  .vmdb .pl-s .pl-pse .pl-s1,
  .vmdb .pl-sr,
  .vmdb .pl-sr .pl-cce,
  .vmdb .pl-sr .pl-sra,
  .vmdb .pl-sr .pl-sre {
    color: #032f62;
  }

  .vmdb .pl-smw,
  .vmdb .pl-v {
    color: #e36209;
  }

  .vmdb .pl-bu {
    color: #b31d28;
  }

  .vmdb .pl-ii {
    color: #fafbfc;
    background-color: #b31d28;
  }

  .vmdb .pl-c2 {
    color: #fafbfc;
    background-color: #d73a49;
  }

  .vmdb .pl-c2:before {
    content: "^M";
  }

  .vmdb .pl-sr .pl-cce {
    font-weight: 700;
    color: #22863a;
  }

  .vmdb .pl-ml {
    color: #735c0f;
  }

  .vmdb .pl-mh,
  .vmdb .pl-mh .pl-en,
  .vmdb .pl-ms {
    font-weight: 700;
    color: #005cc5;
  }

  .vmdb .pl-mi {
    font-style: italic;
    color: #24292e;
  }

  .vmdb .pl-mb {
    font-weight: 700;
    color: #24292e;
  }

  .vmdb .pl-md {
    color: #b31d28;
    background-color: #ffeef0;
  }

  .vmdb .pl-mi1 {
    color: #22863a;
    background-color: #f0fff4;
  }

  .vmdb .pl-mc {
    color: #e36209;
    background-color: #ffebda;
  }

  .vmdb .pl-mi2 {
    color: #f6f8fa;
    background-color: #005cc5;
  }

  .vmdb .pl-mdr {
    font-weight: 700;
    color: #6f42c1;
  }

  .vmdb .pl-ba {
    color: #586069;
  }

  .vmdb .pl-sg {
    color: #959da5;
  }

  .vmdb .pl-corl {
    text-decoration: underline;
    color: #032f62;
  }

  .vmdb .mb-0 {
    margin-bottom: 0 !important;
  }

  .vmdb .my-2 {
    margin-bottom: 8px !important;
  }

  .vmdb .my-2 {
    margin-top: 8px !important;
  }

  .vmdb .pl-0 {
    padding-left: 0 !important;
  }

  .vmdb .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .vmdb .pl-1 {
    padding-left: 4px !important;
  }

  .vmdb .pl-2 {
    padding-left: 8px !important;
  }

  .vmdb .py-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .vmdb .pl-3 {
    padding-left: 16px !important;
  }

  .vmdb .pl-4 {
    padding-left: 24px !important;
  }

  .vmdb .pl-5 {
    padding-left: 32px !important;
  }

  .vmdb .pl-6 {
    padding-left: 40px !important;
  }

  .vmdb .pl-7 {
    padding-left: 48px !important;
  }

  .vmdb .pl-8 {
    padding-left: 64px !important;
  }

  .vmdb .pl-9 {
    padding-left: 80px !important;
  }

  .vmdb .pl-10 {
    padding-left: 96px !important;
  }

  .vmdb .pl-11 {
    padding-left: 112px !important;
  }

  .vmdb .pl-12 {
    padding-left: 128px !important;
  }

  .vmdb hr {
    border-bottom-color: #eee;
  }

  .vmdb kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }

  .vmdb:after,
  .vmdb:before {
    display: table;
    content: "";
  }

  .vmdb:after {
    clear: both;
  }

  .vmdb > :first-child {
    margin-top: 0 !important;
  }

  .vmdb > :last-child {
    margin-bottom: 0 !important;
  }

  .vmdb a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .vmdb blockquote,
  .vmdb details,
  .vmdb dl,
  .vmdb ol,
  .vmdb p,
  .vmdb pre,
  .vmdb table,
  .vmdb ul {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .vmdb hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  .vmdb blockquote {
    padding: 0.5em 1em;
    color: #6a737d;
    border-left: 0.4em solid #dfe2e5;
  }

  .vmdb blockquote > :first-child {
    margin-top: 0;
  }

  .vmdb blockquote > :last-child {
    margin-bottom: 0;
  }

  .vmdb h1,
  .vmdb h2,
  .vmdb h3,
  .vmdb h4,
  .vmdb h5,
  .vmdb h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  .vmdb pre {
    margin: 1.8em 0px !important;
  }

  .vmdb h1 {
    margin-top: 1.6em;
    padding-top: 1.6em;
    border-top: 1px solid var(--vmdb-line);
    font-size: 2.7em;
  }

  .vmdb h2 {
    margin-top: 1.6em;
    margin-bottom: 1.6em;
    font-size: 2em;
  }

  .vmdb h3 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.6em;
  }

  .vmdb h4 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.25em;
  }

  .vmdb h5 {
    margin-top: 0.6em;
    margin-bottom: 0.6em;
    font-size: 0.875em;
  }

  .vmdb h6 {
    margin-top: 0.6em;
    margin-bottom: 0.6em;
    font-size: 0.85em;
    color: #6a737d;
  }

  .vmdb ol,
  .vmdb ul {
    padding-left: 2em;
  }

  .vmdb ol ol,
  .vmdb ol ul,
  .vmdb ul ol,
  .vmdb ul ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .vmdb li {
    word-wrap: break-all;
  }

  .vmdb li > p {
    margin-top: 16px;
  }

  .vmdb li + li {
    margin-top: 0.25em;
  }

  .vmdb dl {
    padding: 0;
  }

  .vmdb dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  .vmdb dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .vmdb table {
    display: table;
    width: 100%;
    overflow: auto;
  }

  .vmdb table th {
    font-weight: 600;
    text-align: left;
    background: rgba(0, 0, 0, 0.015);
  }

  .vmdb table td,
  .vmdb table th {
    padding: 6px 13px;
    // border-bottom: 1px solid #dfe2e5;
  }

  .vmdb table tr {
    background-color: #fff;
    border-bottom: 1px solid var(--vmdb-line);
  }

  .vmdb table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  .vmdb img {
    max-width: 100%;
    box-sizing: initial;
    background-color: #fff;
  }

  .vmdb img[align="right"] {
    padding-left: 20px;
  }

  .vmdb img[align="left"] {
    padding-right: 20px;
  }

  .vmdb code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
  }

  .vmdb pre {
    word-wrap: normal;
  }

  .vmdb pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .vmdb .highlight {
    margin-bottom: 16px;
  }

  .vmdb .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .vmdb .highlight {
    font-size: 85%;
  }

  .vmdb .highlight pre,
  .vmdb pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }

  .vmdb pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: initial;
    border: 0;
  }

  .vmdb .commit-tease-sha {
    display: inline-block;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 90%;
    color: #444d56;
  }

  .vmdb .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5;
    border-color: #005cc5;
  }

  .vmdb .blob-wrapper {
    overflow-x: auto;
    overflow-y: hidden;
  }

  .vmdb .blob-wrapper-embedded {
    max-height: 240px;
    overflow-y: auto;
  }

  .vmdb .blob-num {
    width: 1%;
    min-width: 50px;
    padding-right: 10px;
    padding-left: 10px;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
    line-height: 20px;
    color: rgba(27, 31, 35, 0.3);
    text-align: right;
    white-space: nowrap;
    vertical-align: top;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .vmdb .blob-num:hover {
    color: rgba(27, 31, 35, 0.6);
  }

  .vmdb .blob-num:before {
    content: attr(data-line-number);
  }

  .vmdb .blob-code {
    position: relative;
    padding-right: 10px;
    padding-left: 10px;
    line-height: 20px;
    vertical-align: top;
  }

  .vmdb .blob-code-inner {
    overflow: visible;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
    color: #24292e;
    word-wrap: normal;
    white-space: pre;
  }

  .vmdb .pl-token.active,
  .vmdb .pl-token:hover {
    cursor: pointer;
    background: #ffea7f;
  }

  .vmdb .tab-size[data-tab-size="1"] {
    -moz-tab-size: 1;
    tab-size: 1;
  }

  .vmdb .tab-size[data-tab-size="2"] {
    -moz-tab-size: 2;
    tab-size: 2;
  }

  .vmdb .tab-size[data-tab-size="3"] {
    -moz-tab-size: 3;
    tab-size: 3;
  }

  .vmdb .tab-size[data-tab-size="4"] {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  .vmdb .tab-size[data-tab-size="5"] {
    -moz-tab-size: 5;
    tab-size: 5;
  }

  .vmdb .tab-size[data-tab-size="6"] {
    -moz-tab-size: 6;
    tab-size: 6;
  }

  .vmdb .tab-size[data-tab-size="7"] {
    -moz-tab-size: 7;
    tab-size: 7;
  }

  .vmdb .tab-size[data-tab-size="8"] {
    -moz-tab-size: 8;
    tab-size: 8;
  }

  .vmdb .tab-size[data-tab-size="9"] {
    -moz-tab-size: 9;
    tab-size: 9;
  }

  .vmdb .tab-size[data-tab-size="10"] {
    -moz-tab-size: 10;
    tab-size: 10;
  }

  .vmdb .tab-size[data-tab-size="11"] {
    -moz-tab-size: 11;
    tab-size: 11;
  }

  .vmdb .tab-size[data-tab-size="12"] {
    -moz-tab-size: 12;
    tab-size: 12;
  }

  .vmdb .task-list-item {
    list-style-type: none;
  }

  .vmdb .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .vmdb .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }
`;var sn=je(pt()),Ye=n=>{let r=({css:o})=>{let l=document.getElementById("prism-theme");if(l){l.textContent=o;return}let g=document.createElement("style");g.textContent=o,g.id="prism-theme",document.head.appendChild(g)};n==="gitbook"?import("./prism/theme/gitbook.js").then(r):n==="solarized"?import("./prism/theme/solarized.js").then(r):n==="tomorrow"?import("./prism/theme/tomorrow.js").then(r):n==="coy"?import("./prism/theme/coy.js").then(r):n==="dark"?import("./prism/theme/dark.js").then(r):n==="thin-dark"?import("./prism/theme/dark.js").then(r):n==="default"?import("./prism/theme/default.js").then(r):n==="okaidia"?import("./prism/theme/okaidia.js").then(r):n==="twilight"?import("./prism/theme/twilight.js").then(r):n==="darcula"&&import("./prism/theme/darcula.js").then(r)},gt=window.Prism;var Xe=new Ve.default.Renderer,mt={};function Yt(n){let r=document.createElement("div");r.textContent=n;let o=r.innerHTML;return r=null,o}Xe.code=function(n,r,o){if(n&&(r==="g"||r==="graph")){let g=mt[n];return g?`<div style="opacity: 1; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; border:0.6px solid var(--vmdb-line); border-radius:var(--vmdb-radius); margin:10px 0px;">${g}</div>`:(n=n.trim(),`<div data-code="${n}" style="opacity: 0; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; margin:10px 0px;" class="mermaid">${n}</div>`)}return`<pre><code class="line-numbers highlight language-${r}">${Yt(n)}</code></pre>`};import("../node_modules/mermaid/dist/mermaid.core.js");function Vt(n,r){let o=[];if(r){window.vmd_moc_click=h=>{o&&o[h]&&o[h].onClick&&o[h].onClick(o[h].index,o[h].line)};let g=[];n.split(`
`).forEach((h,T)=>(h[0]==="#"&&g.push(T),h));let v=-1;Xe.heading=(h,T,M,P)=>{v+=1,o.push({selector:".moc-"+v,text:h,raw:M,level:T,index:v,line:g[v]});let re="";return v===0&&(re='data-moc-first="1"'),`<h${T} ${re} data-moc="${v}" onclick="vmd_moc_click(${v})" class="moc-${v}">${h}</h${T}>`}}let l=document.createElement("div");return l.className="vmdb",l.style.overflowX="hidden",l.style.padding="20px 5% 60px 5%",l.innerHTML=Ve.default(n,{renderer:Xe,xhtml:!0}),l.moc=o,setTimeout(()=>{try{let g=l.querySelectorAll(".mermaid");g&&g.length&&import("../node_modules/mermaid/dist/mermaid.core.js").then(v=>{v.default.init(g),g.forEach(h=>{let T=h.getAttribute("data-code"),M=h.innerHTML.trim();T&&(mt[T]=M)}),g.forEach(h=>{h.style.opacity=1,h.style.minHeight="auto"})})}catch(g){console.warn("[mermaid]: ",g)}try{gt.highlightAll()}catch(g){console.warn(g)}},50),l}var Oe=Vt;var me={viewIndex:0,detail:!1,isScrollDown:!1};window.addEventListener("scroll",n=>{let r=document.body.querySelectorAll(".aoife-markdown h1[data-moc], .aoife-markdown h2[data-moc]"),o=9999;r.forEach(l=>{if(l.getBoundingClientRect().bottom>-50){let v=Number(l.getAttribute("data-moc"));v<o&&(o=v)}}),document.documentElement.scrollTop>100&&me.isScrollDown===!1&&(me.isScrollDown=!0,aoife.next(".js-aoife-markdown-header")),document.documentElement.scrollTop<100&&me.isScrollDown===!0&&(me.isScrollDown=!1,aoife.next(".js-aoife-markdown-header")),o!==me.viewIndex&&(me.viewIndex=o,aoife.next(".moc-real"))});var Ne=({text:n,footer:r})=>{let o=Oe(n,!0);return aoife("div",{class:"aoife-markdown"},aoife("div",{class:"aoife-markdown-content"},o,r&&r),aoife("div",{class:"moc"},aoife("div",{class:"moc-real"},aoife("div",{class:"moc-detail",onclick:()=>{me.detail=!me.detail,aoife.next(".moc-real")}},()=>me.detail?"Hidden detail":"Show detail"),o.moc.map(g=>aoife("div",{class:()=>["moc-titel-"+g.index,"moc-level-item","moc-level-"+g.level,!me.detail&&g.level>2&&"moc-level-none",me.viewIndex===g.index&&"moc-title-in-page"],onclick:()=>{let v=document.querySelector(g.selector);v&&document.documentElement.scrollTo({top:v.offsetTop-20,behavior:"smooth"})}},g.text)))))};ge`
  .aoife-markdown {
    display: grid;
    position: relative;
    grid-auto-flow: row;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .aoife-markdown-content {
    display: grid;
    padding-bottom: 60px;
    grid-auto-flow: row;
  }
  .aoife-markdown > .moc {
    position: relative;
    width: 100%;
    font-family: var(--vmdb-fm);
    margin-bottom: 30px;
  }

  @media (min-width: 640px) {
    .aoife-markdown {
      display: grid;
      grid-template-columns: 1fr var(--vmdb-menu-width);
      /* grid-auto-flow: column; */
    }
    .aoife-markdown > .moc {
      position: relative;
      font-family: var(--vmdb-fm);
    }
  }

  .aoife-markdown > .moc > .moc-real {
    position: sticky;
    top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    left: 0px;
    height: auto;
    max-height: calc(100% - 40px);
    overflow-y: auto;
    padding-right: 20px;
    line-height: 1.5;
    font-weight: 500;
    color: rgb(116, 129, 141);
    font-size: 12px;
    word-break: break-all;
    border-left: 1px solid var(--vmdb-line);
  }

  .aoife-markdown .moc-real .moc-level-none {
    display: none;
  }
  .aoife-markdown .moc-real .moc-level-item {
    cursor: pointer;
    margin-top: 10px;
  }
  .aoife-markdown .moc-real .moc-level-1 {
    padding-left: 16px;
  }
  .aoife-markdown .moc-real .moc-level-2 {
    padding-left: 30px;
  }
  .aoife-markdown .moc-real .moc-level-3 {
    padding-left: 40px;
    font-size: 10px;
  }
  .aoife-markdown .moc-real .moc-level-4 {
    padding-left: 50px;
    font-size: 10px;
  }
  .aoife-markdown .moc-real .moc-level-5 {
    padding-left: 56px;
    font-size: 10px;
  }
  .aoife-markdown .moc-real .moc-level-6 {
    padding-left: 62px;
    font-size: 10px;
  }
  .aoife-markdown .moc-real .moc-level-item:hover {
    color: hsl(220, 50%, 50%);
  }
  .aoife-markdown .moc-detail {
    cursor: pointer;
    padding: 2px 6px;
    font-size: 10px;
    border-radius: 4px;
    user-select: none;
    margin-left: 16px;
    margin-bottom: 16px;
    display: inline-block;
    border: 1px solid var(--vmdb-line);
  }
  .aoife-markdown .moc-level-item {
    /* color: hsl(220, 50%, 50%); */
    border-left: 4px solid hsl(220, 60%, 60%, 0);
  }
  .moc-title-in-page {
    color: hsl(220, 50%, 50%);
    border-left: 4px solid var(--vmdb-line) !important;
    /* background: hsl(220, 50%, 95%); */
  }
`;function Ke(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch(r){return null}}function Xt(n,r){if(!n)return null;let o=/([^=?&]+)=?([^&]*)/g,l={},g;for(;g=o.exec(n);){let v=Ke(g[1]),h=Ke(g[2]);v===null||h===null||v in l||(r||(h=isNaN(Number(h))?h:Number(h)),l[v]=h)}return l}function Kt(n,r=""){let o=[],l,g;typeof r!="string"&&(r="?");for(g in n)if(Object.prototype.hasOwnProperty.call(n,g)){if(l=n[g],!l&&(l==null||isNaN(l))&&(l=""),g=encodeURIComponent(g),l=encodeURIComponent(l),g===null||l===null)continue;o.push(`${g}=${l}`)}return o.length?r+o.join("&"):""}var Qt={parse:Xt,stringify:Kt,decode:Ke},_e=Qt,ft=[];["popstate","pushState","replaceState"].forEach(n=>{window.addEventListener(n,()=>{xe.state=_e.parse(location.search),ft.forEach(r=>r())})});function Qe(n){let r=document.createElement("span");return r.style.display="none",r.setAttribute("aoife-route",n),r}var ht=0,xe=({root:n,url:r,render:o,preload:l})=>{if(typeof o!="function")throw"AoifeRoute.render need a Function";ht+=1;let g=""+ht,v=()=>{if(l&&o(),typeof r=="function"){if(!r())return Qe(g)}else{let T=!1;if(n&&window.location.pathname==="/"&&(T=!0),!T&&_e.decode(window.location.pathname)!==r)return Qe(g)}let h=o();if(h.then){let T=Qe(g);return Promise.resolve(h).then(M=>{if(M.default){let P=document.querySelector(`[aoife-route="${g}"]`);if(!P)return;let re=M.default();re.setAttribute("aoife-route",g),P.replaceWith(re)}}),T}return h.setAttribute("aoife-route",g),h};return ft.push(()=>{let h=document.querySelector(`[aoife-route="${g}"]`);!h||h.replaceWith(v())}),v()};xe.state={};xe.queryString=_e;xe.push=(n,r,o)=>{r&&(n+="?"+_e.stringify(r)),history.pushState(r,"",n),window.dispatchEvent(new Event("pushState")),o||document.documentElement.scrollTo({top:0})};xe.replace=(n,r,o)=>{r&&(n+="?"+_e.stringify(r)),history.replaceState(r,"",n),window.dispatchEvent(new Event("replaceState")),o||document.documentElement.scrollTo({top:0})};xe.back=()=>{history.back()};var Le=xe;var ye={changeMobileMenuShow:(n,r)=>{n.showMobileMenu=r,aoife.next(".aoife-markdown-page .mobile-menu")},changeUrl:(n,r,o)=>{r.num=o,aoife.next("*"),Le.push(n)}};var ze=({state:n,title:r,version:o,data:l})=>aoife("div",{class:"menu"},aoife("div",{class:"menu-title"},r||"Aofie Document"),o&&aoife("div",{class:"menu-version"},o),aoife("div",{class:"menu-items"},l.map((g,v)=>aoife("div",{class:()=>[n.num===v&&"menu-item-selected","menu-item"],onclick:()=>{ye.changeUrl("/"+g.name,n,v)}},g.name))),aoife("div",{class:"menu-footer",onclick:()=>window.open("https://github.com/ymzuiku/aoife-doc")},"Powered by ",aoife("span",{class:"by-aoife-doc"},"Aoife-doc")));ge`
  .aoife-markdown-page .menu {
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 0px 20px 60px;
  }
  .aoife-markdown-page .menu-items {
    overflow: auto;
  }
  .aoife-markdown-page .menu-title {
    font-size: 20px;
    font-weight: 500;
    padding: 20px;
    padding-left: 12px;
  }
  .aoife-markdown-page .menu-version {
    font-size: 12px;
    font-weight: 500;
    padding: 4px;
    padding-bottom: 20px;
    padding-left: 12px;
    opacity: 0.4;
  }
  .aoife-markdown-page .menu-item {
    margin: 1px;
    margin-right: 0px;
    padding: 12px;
    cursor: pointer;
    border-top-left-radius: var(--vmdb-radius);
    border-bottom-left-radius: var(--vmdb-radius);
    font-size: 14px;
    color: rgb(59, 69, 78);
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .aoife-markdown-page .menu-item:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  .aoife-markdown-page .menu-item-selected {
    color: hsl(220, 69%, 50%);
    border: 1px solid var(--vmdb-line);
    background: #fff;
  }
  .aoife-markdown-page .menu-item-selected:hover {
    background: rgba(255, 255, 255, 0.8);
  }
  @media (min-width: 900px) {
    .aoife-markdown-page .menu {
      position: fixed;
      width: var(--vmdb-menu-width);
      height: 100vh;
      top: 0px;
      left: 0px;
    }
  }
  .aoife-markdown-page .menu-footer {
    cursor: pointer;
    font-size: 12px;
    opacity: 0.5;
    padding-top: 16px;
    padding-left: 16px;
    /* display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    place-items: center; */
  }
  .by-aoife-doc {
    font-size: 14px;
    font-family: monospace;
    background: hsl(210, 20%, 40%);
    color: hsl(210, 0%, 100%);
    padding: 2px 4px;
    border-radius: 4px;
  }
  .aoife-github {
    color: hsl(210, 20%, 40%);
    display: inline-block;
    line-height: 20px;
    font-size: 18px;
    transform: translate(4px, 3px);
  }
`;var bt='<svg t="1614770422406" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2063" width="1em" height="1em"><path d="M109.714 292.571h804.572c21.943 0 36.571-21.942 36.571-43.885 0-14.629-14.628-29.257-36.571-29.257H109.714c-21.943 0-36.571 14.628-36.571 36.571 0 14.629 14.628 36.571 36.571 36.571zM914.286 512H109.714c-21.943 0-36.571 14.629-36.571 36.571 0 14.629 14.628 36.572 36.571 36.572h804.572c21.943 0 36.571-21.943 36.571-43.886 0-14.628-14.628-29.257-36.571-29.257z m0 292.571H109.714c-21.943 0-36.571 14.629-36.571 36.572s14.628 36.571 36.571 36.571h804.572c21.943 0 36.571-21.943 36.571-36.571 0-21.943-14.628-36.572-36.571-36.572z" p-id="2064"></path></svg>';var Dt=({title:n,version:r,state:o,markdownState:l,data:g})=>aoife("div",{class:()=>["header js-aoife-markdown-header",l.isScrollDown&&"header-shadow"]},aoife("div",{class:"header-icon",innerHTML:bt,onclick:()=>{ye.changeMobileMenuShow(o,!0)}}),aoife("label",{class:"header-title"},n||"Aofie Document"),aoife("div",{class:()=>["mobile-menu",o.showMobileMenu&&"mobile-show"]},aoife("div",{class:"mobile-plan"},aoife(ze,{version:r,title:n,data:g,state:o})),aoife("div",{class:"mobile-mask",onclick:()=>{ye.changeMobileMenuShow(o,!1)}})));ge`
  .aoife-markdown-page .header {
    position: fixed;
    height: var(--vmdb-header);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
    width: 100vw;
    top: 0px;
    left: 0px;
    background: #fff;
    z-index: 1000;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-out;
    display: grid;
    grid-auto-flow: column;
    place-content: center start;
  }
  .aoife-markdown-page .header-title {
    font-size: 16px;
    display: grid;
    align-items: center;
  }
  .aoife-markdown-page .header-shadow {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
  }
  .aoife-markdown-page .header-icon {
    width: 40px;
    height: 40px;
    display: grid;
    margin: 0px 10px;
    border-radius: 4px;
    place-content: center;
  }
  .aoife-markdown-page .header-icon:active {
    background: rgba(0, 0, 0, 0.1);
  }
  @media (min-width: 900px) {
    .aoife-markdown-page .header {
      display: none;
    }
  }
  .aoife-markdown-page .mobile-menu {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    display: grid;
    background: rgba(0, 0, 0, 0);
    transition: all 0.3s ease-out;
    grid-template-columns: 1fr 100px;
  }
  .aoife-markdown-page .mobile-menu .mobile-plan {
    padding: 0px;
    margin: 0px;
    height: 100vh;
    background: #f5f7f9;
    border-right: 1px solid var(--vmdb-line);
  }

  /* 点击动画 */
  .aoife-markdown-page .mobile-menu > div {
    transition: all 0.2s ease-out;
    transform: translateX(-100vw);
  }
  .aoife-markdown-page .mobile-menu {
    pointer-events: none;
  }
  .aoife-markdown-page .mobile-show {
    pointer-events: auto;
    background: rgba(0, 0, 0, 0.5);
  }
  .aoife-markdown-page .mobile-show > div {
    transform: translateX(0px) !important;
  }
`;var Pe=()=>aoife("svg",{t:"1614958133927",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4404",width:"1.5em",height:"1.5em"},aoife("path",{d:"M866.92864 476.29312a35.84 35.84 0 1 1 0 71.68h-696.32a35.82976 35.82976 0 0 1-35.84-35.84c0-19.80416 16.03584-35.84 35.84-35.84h696.32z",fill:"currentColor","p-id":"4405"}),aoife("path",{d:"M221.2864 512.13312l213.59616-213.59616a35.84 35.84 0 0 0-50.67776-50.688l-238.9504 238.9504a35.84 35.84 0 0 0 0 50.67776l238.9504 238.9504a35.84 35.84 0 0 0 50.67776-50.688l-213.59616-213.6064z",fill:"currentColor","p-id":"4406"})),vt=({state:n,data:r,num:o})=>{let l=h=>{ye.changeUrl("/"+r[h].name,n,h)},g=()=>{!r[o-1]||l(o-1)},v=()=>{!r[o+1]||l(o+1)};return o===r.length-1?aoife("div",{class:"aoife-markdown-page-btn"},aoife("div",{class:"btn left",onclick:g},aoife("div",{class:"arrow arrow-left"},aoife(Pe,null)),aoife("div",{class:"title"},aoife("label",{class:"tip"},"Previous"),aoife("span",{class:"name"},r[o-1].name)))):o===0?aoife("div",{class:"aoife-markdown-page-btn"},aoife("div",{class:"btn right",onclick:v},aoife("div",{class:"title"},aoife("label",{class:"tip"},"Next"),aoife("span",{class:"name"},r[o+1].name)),aoife("div",{class:"arrow arrow-right"},aoife(Pe,null)))):aoife("div",{class:"aoife-markdown-page-btn double"},aoife("div",{class:"btn left",onclick:g},aoife("div",{class:"arrow arrow-left"},aoife(Pe,null)),aoife("div",{class:"title"},aoife("label",{class:"tip"},"Previous"),aoife("span",{class:"name"},r[o-1].name))),aoife("div",{class:"btn right",onclick:v},aoife("div",{class:"title"},aoife("label",{class:"tip"},"Next"),aoife("span",{class:"name"},r[o+1].name)),aoife("div",{class:"arrow arrow-right"},aoife(Pe,null))))};ge`
  .aoife-markdown-page-btn {
    padding: 20px 5% 20px;
    broder: 1px solid rgba(0, 0, 0, 0.2);
  }
  .aoife-markdown-page-btn.double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .aoife-markdown-page-btn > .btn {
    cursor: pointer;
    transition: all 0.2s ease-out;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    padding: 20px;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
  }
  @media (min-width: 640px) {
    .aoife-markdown-page-btn > .btn:hover {
      border: 1px solid hsl(210, 50%, 50%);
      color: hsl(210, 50%, 50%);
    }
    .aoife-markdown-page-btn > .btn:hover .arrow-left {
      transform: translate(-6px, 0px);
    }
    .aoife-markdown-page-btn > .btn:hover .arrow-right {
      transform: scaleX(-1) translate(-6px, 0px);
    }
  }
  .aoife-markdown-page-btn > .btn.left {
    grid-template-columns: 1fr auto;
  }
  .aoife-markdown-page-btn > .btn .arrow {
    grid-template-columns: 1fr auto;
  }
  .aoife-markdown-page-btn > .btn.right {
    grid-template-columns: auto 1fr;
  }
  .aoife-markdown-page-btn > .btn .title {
    display: grid;
    grid-auto-flow: row;
  }
  .aoife-markdown-page-btn > .btn .tip {
    font-size: 12px;
    color: hsl(210, 0%, 40%);
    margin-bottom: 10px;
  }
  .aoife-markdown-page-btn > .btn .name {
    font-size: 16px;
    color: hsl(210, 20%, 20%);
  }
  .aoife-markdown-page-btn > .btn .arrow-left {
    font-size: 16px;
    color: hsl(210, 20%, 20%);
    display: grid;
    transition: all 0.2s ease-out;
    place-content: center start;
  }
  .aoife-markdown-page-btn > .btn .arrow-right {
    font-size: 16px;
    color: hsl(210, 20%, 20%);
    display: grid;
    place-content: center start;
    transition: all 0.2s ease-out;
    transform: scaleX(-1);
  }
`;function Jt(){if(window.location.hash.length>1){let r=window.location.hash.replace("#/","");return decodeURI(r)}let n=window.location.pathname.replace("/","");return decodeURI(n)}function Et(n){let r=Jt();if(!r)return 0;let o=0;return n.forEach((l,g)=>{l.name===r&&(o=g)}),o}var Me=({version:n,title:r,data:o})=>{let l={num:Et(o),showMobileMenu:!1,showPcMenu:!0};return aoife("div",{class:"aoife-markdown-page"},aoife(Dt,{version:n,data:o,title:r,state:l,markdownState:me}),aoife("div",{class:"content"},aoife("div",{class:"menu-box"},aoife(ze,{version:n,title:r,state:l,data:o})),aoife("div",{class:"aoife-markdown-page-md"},o.map((g,v)=>aoife(Le,{root:v===0,url:"/"+g.name,render:()=>aoife(Ne,{footer:aoife(vt,{state:l,num:v,data:o}),text:o[v]&&o[v].text})})))))};ge`
  .aoife-markdown-page-md {
  }
  .aoife-markdown-page {
    min-height: 100vh;
    font-family: var(--vmdb-fm);
    display: grid;
  }
  .aoife-markdown-page .content {
    display: block;
    box-sizing: border-box;
    padding-top: var(--vmdb-header);
  }
  .aoife-markdown-page .menu-box {
    position: relative;
    display: none;
  }
  .aoife-markdown-page .menu-box {
    background: #f5f7f9;
    border-right: 1px solid var(--vmdb-line);
  }
  @media (min-width: 900px) {
    .aoife-markdown-page .menu-box {
      position: relative;
      display: grid;
    }
    .aoife-markdown-page .content {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: var(--vmdb-menu-width) 1fr;
      padding-top: 0px;
    }
  }
  @media (min-width: 900px) {
    .aoife-markdown-page {
      --vmdb-menu-width: 240px;
    }
  }
  @media (min-width: 1200px) {
    .aoife-markdown-page {
      --vmdb-menu-width: 300px;
    }
  }
  @media (min-width: 1700px) {
    .aoife-markdown-page {
      --vmdb-menu-width: 340px;
    }
  }
`;var Je=({url:n})=>{fetch(n+"?t="+Date.now()).then(o=>o.json()).then(o=>{let l=o.files.map(g=>(/\.md$/.test(g)||(g+=".md"),fetch(o.path+g+"?version="+o.version||"0.0.0").then(v=>v.text())));Promise.all(l).then(g=>{let v=[];g.forEach((h,T)=>{v.push({name:o.files[T],text:h})}),r.innerHTML="",o.list=v,r.replaceWith(aoife(Me,{data:v,...o}))})});let r=aoife("div",{class:"aoife-markdown-loading"},"Loading...");return r};ge`
  .aoife-markdown-loading {
    padding: 100px;
    opacity: 0.4;
    text-align: center;
    font-family: var(--vmdb-fm);
  }
`;Ye(window.aoifeMarkdownTheme||"gitbook");window.MarkdownBook=Je;export{Ne as Markdown,Je as MarkdownBook,Me as MarkdownPage,Oe as render,Ye as usePrismTheme};
