import{a as xt,b as Gt,c as rt}from"../chunk.A7EFB3TN.js";var vt=Object.create;var Et=Object.getPrototypeOf,At=Object.prototype.hasOwnProperty,kt=Object.getOwnPropertyNames,wt=Object.getOwnPropertyDescriptor;var yt=(n,u,c)=>{if(u&&typeof u=="object"||typeof u=="function")for(let l of kt(u))!At.call(n,l)&&l!=="default"&&xt(n,l,{get:()=>u[l],enumerable:!(c=wt(u,l))||c.enumerable});return n},ze=n=>n&&n.__esModule?n:yt(Gt(xt(n!=null?vt(Et(n)):{},"default",{value:n,enumerable:!0})),n);var at=rt((Pe,Me)=>{(function(n,u){typeof Pe=="object"&&typeof Me!="undefined"?Me.exports=u():typeof define=="function"&&define.amd?define(u):(n=n||self).aoife=u()})(Pe,function(){"use strict";function n(){var p,g=this.parentNode,D=arguments.length;if(g)for(D||g.removeChild(this);D--;)typeof(p=arguments[D])!="object"?p=this.ownerDocument.createTextNode(p):p.parentNode&&p.parentNode.removeChild(p),D?g.insertBefore(p,this.nextSibling):g.replaceChild(p,this)}function u(p,g){if(p===g)return!0;if(p&&g&&typeof p=="object"&&typeof g=="object"){if(p.constructor!==g.constructor)return!1;var D,I,m=void 0;if(Array.isArray(p)){if((D=p.length)!=g.length)return!1;for(m=D;m--!=0;)if(!u(p[m],g[m]))return!1;return!0}if(p instanceof Map&&g instanceof Map){if(p.size!==g.size)return!1;for(var k=0,O=p.entries();k<O.length;k++)if(m=O[k],!g.has(m[0]))return!1;for(var W=0,B=p.entries();W<B.length;W++)if(!u((m=B[W])[1],g.get(m[0])))return!1;return!0}if(p instanceof Set&&g instanceof Set){if(p.size!==g.size)return!1;for(var w=0,R=p.entries();w<R.length;w++)if(m=R[w],!g.has(m[0]))return!1;return!0}if(ArrayBuffer.isView(p)&&ArrayBuffer.isView(g)){if((D=p.length)!=g.length)return!1;for(m=D;m--!=0;)if(p[m]!==g[m])return!1;return!0}if(p.constructor===RegExp)return p.source===g.source&&p.flags===g.flags;if(p.valueOf!==Object.prototype.valueOf)return p.valueOf()===g.valueOf();if(p.toString!==Object.prototype.toString)return p.toString()===g.toString();if((D=(I=Object.keys(p)).length)!==Object.keys(g).length)return!1;for(m=D;m--!=0;)if(!Object.prototype.hasOwnProperty.call(g,I[m]))return!1;for(m=D;m--!=0;){var H=I[m];if(!u(p[H],g[H]))return!1}return!0}return p!=p&&g!=g}HTMLElement.prototype.append===void 0&&(Element.prototype.append=function(){for(var p=this,g=[],D=0;D<arguments.length;D++)g[D]=arguments[D];g.forEach(function(I){p.prototype.appendChild(I)})}),HTMLElement.prototype.remove===void 0&&(Element.prototype.remove=function(){this.prototype.parentNode&&this.prototype.parentNode.removeChild(this)}),Element.prototype.replaceWith||(Element.prototype.replaceWith=n),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=n),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=n);var c=new Set;function l(p){var g=[];if(p)if(typeof p=="string"){var D="",I=p.split(", ");I.forEach(function(m,k){m=m.trim(),k===I.length-1?D+=m+"[aoife-next], "+m+" [aoife-next]":D+=m+"[aoife-next], "+m+" [aoife-next],"}),g=document.body.querySelectorAll(D)}else Object.prototype.toString.call(p)==="[object Array]"?(g=p.slice(),p.forEach(function(m){g.push.apply(g,m.querySelectorAll("*"))})):(g=[p]).push.apply(g,p.querySelectorAll("*"));return g}function h(p,g,D){p.__next||(p.setAttribute("aoife-next",""),p.__next=new Map),p.__next.set(g,D)}function T(p,g,D,I){return new(D=D||Promise)(function(m,k){function O(w){try{B(I.next(w))}catch(R){k(R)}}function W(w){try{B(I.throw(w))}catch(R){k(R)}}function B(w){w.done?m(w.value):new D(function(R){R(w.value)}).then(O,W)}B((I=I.apply(p,g||[])).next())})}function b(p,g){var D,I,m,k,O={label:0,sent:function(){if(1&m[0])throw m[1];return m[1]},trys:[],ops:[]};return k={next:W(0),throw:W(1),return:W(2)},typeof Symbol=="function"&&(k[Symbol.iterator]=function(){return this}),k;function W(B){return function(w){return function(R){if(D)throw new TypeError("Generator is already executing.");for(;O;)try{if(D=1,I&&(m=2&R[0]?I.return:R[0]?I.throw||((m=I.return)&&m.call(I),0):I.next)&&!(m=m.call(I,R[1])).done)return m;switch(I=0,m&&(R=[2&R[0],m.value]),R[0]){case 0:case 1:m=R;break;case 4:return O.label++,{value:R[1],done:!1};case 5:O.label++,I=R[1],R=[0];continue;case 7:R=O.ops.pop(),O.trys.pop();continue;default:if(!(m=0<(m=O.trys).length&&m[m.length-1])&&(R[0]===6||R[0]===2)){O=0;continue}if(R[0]===3&&(!m||R[1]>m[0]&&R[1]<m[3])){O.label=R[1];break}if(R[0]===6&&O.label<m[1]){O.label=m[1],m=R;break}if(m&&O.label<m[2]){O.label=m[2],O.ops.push(R);break}m[2]&&O.ops.pop(),O.trys.pop();continue}R=g.call(p,O)}catch(H){R=[6,H],I=0}finally{D=m=0}if(5&R[0])throw R[1];return{value:R[0]?R[1]:void 0,done:!0}}([B,w])}}}function _(p,g){g===void 0&&(g=500);var D=null;return function(){for(var I=[],m=0;m<arguments.length;m++)I[m]=arguments[m];D?(clearTimeout(D),D=null):p.apply(this,I),D=setTimeout(function(){D=null},g)}}function M(p,g){g===void 0&&(g=500);var D=0;return function(){for(var I=[],m=0;m<arguments.length;m++)I[m]=arguments[m];var k=Date.now();(D<1||g<k-D)&&(D=k,p.apply(this,I))}}var P={autofocus:!0,role:!0,viewBox:!0,flavor:!0,"flavor-ignore":!0},pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};function ie(p,g){return typeof g=="function"?Promise.resolve(g(p)):g}function A(p,g,D){var I,m=this,k=D[g];return D.debounce&&typeof k=="function"&&-1<D.debounce.indexOf(g)?k=_(k,D.debounceTime):D.throttle&&typeof k=="function"&&-1<D.throttle.indexOf(g)&&(k=M(k,D.throttleTime)),/^on/.test(g)?(p[g]=k,null):/^listen/.test(g)?(p.addEventListener(g.replace("listen",""),k),null):((I=p.__isSvg||P[g]||/-/.test(g)?function(){return T(m,void 0,void 0,function(){var O;return b(this,function(W){switch(W.label){case 0:return[4,ie(p,k)];case 1:return O=W.sent(),p.getAttribute(g)!==O&&(O===!1?p.removeAttribute(g):p.setAttribute(g,O)),[2]}})})}:g==="style"?function(){return T(m,void 0,void 0,function(){var O;return b(this,function(W){switch(W.label){case 0:return[4,ie(p,k)];case 1:return(O=W.sent())&&(typeof O=="string"?p.style.cssText=O:Object.keys(O).forEach(function(B){if(/-/.test(B))p.style.setProperty(B,O[B]);else{var w=O[B];typeof w!="number"||pe[B]||(w+="px"),p.style[B]=w}})),[2]}})})}:g==="className"?function(){return T(m,void 0,void 0,function(){var O;return b(this,function(W){switch(W.label){case 0:return[4,ie(p,k)];case 1:return O=W.sent(),Array.isArray(O)&&(O=O.join(" ")),p.className!==O&&(p.className=O),[2]}})})}:function(){return T(m,void 0,void 0,function(){var O;return b(this,function(W){switch(W.label){case 0:return[4,ie(p,k)];case 1:return O=W.sent(),p[g]!==O&&(p[g]=O),[2]}})})})(),typeof k!="function"?null:I)}var E={};function y(p){var g=Object.prototype.toString.call(p);if(g==="[object String]"||g==="[object Number]")return!0}function x(p){return 0<Object.prototype.toString.call(p).indexOf("lement")}function F(p,g){p.isEqualNode(g)||p.replaceWith(g)}function U(p,g){return g===void 0&&(g=5e3),new Promise(function(D,I){var m=0,k=function(){var O=p();O?D(O):m<g?(m++,setTimeout(k,20+m)):I()};k()})}function L(p){return U(typeof p=="string"?function(){return document.querySelector(p)}:function(){if(document.body.contains(p))return p})}var G=void 0,re=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103,de={svg:!0,rect:!0,circle:!0,ellipse:!0,line:!0,polyline:!0,polygon:!0,path:!0,animate:!0,animateColor:!0,animateMotion:!0,animateTransform:!0,clipPath:!0,"color-profile":!0,"definition-src":!0,defs:!0,desc:!0,filter:!0,font:!0,"font-face":!0,"font-face-format":!0,"font-face-name":!0,"font-face-src":!0,"font-face-uri":!0,g:!0,glyph:!0,hkern:!0,linearGradient:!0,marker:!0,mask:!0,view:!0},Ae={class:1,className:1,onsubmit:1,oncreate:1,onappend:1,child:1,children:1,length:1,memo:1,__memo:1,__memoLast:1,__memoSeted:1,__proxy:1,__proxyEle:1},ce=["className"],Q=function(p,g){for(var D=[],I=2;I<arguments.length;I++)D[I-2]=arguments[I];var m,k={};if(g&&(typeof g=="function"||y(g)||x(g)?D=[g].concat(D):Array.isArray(g)?D=g.concat(D):k=g),D=function(B){var w=[];return B.forEach(function(R){Array.isArray(R)?w=w.concat(R):w.push(R)}),w}(D),k.children&&k.children.length||(k.children=D.slice()),k.class&&(k.className=k.class,delete k.class),Array.isArray(p))return Q.apply(void 0,p);if(typeof p=="function"){if((m=p(k))&&typeof m.then=="function"){var O=document.createElement("span");return O.setAttribute("promise-span",""),m.then(function(B){O.replaceWith(B)}),O}return m}if(typeof p=="string")if(p==="template"&&k.children){var W="";k.children.forEach(function(B){typeof B!="string"&&typeof B!="number"||(W+=B)}),(m=document.createElement("template")).innerHTML=W}else{if(E[p])return m=function(B,w,R){w===void 0&&(w=[]);var H=R===void 0?{}:R,q=H.ref,oe=H.loading,ue=H.defaultKey,se=ue===void 0?"default":ue;return oe=oe||document.createElement("input"),Promise.resolve(B.apply(void 0,w)).then(function(te){var le=te[se];le&&(te=le.apply(void 0,w)),typeof te=="function"&&(te=te.apply(void 0,w)),q&&q(te),oe&&oe.replaceWith(te)}),oe}(E[p],[k].concat(D));de[p]?(m=document.createElementNS("http://www.w3.org/2000/svg",p)).__isSvg=!0:m=document.createElement(p)}else x(p)&&(m=p);return k.memo&&(m.__memo=k.memo,m.__memoSeted=1,Promise.resolve(k.memo()).then(function(B){m.__memoLast=B})),k.onsubmit&&(m.onsubmit=function(B){B.preventDefault(),k.onsubmit&&k.onsubmit(B)}),typeof k.debounce=="string"&&(k.debounce=[k.debounce]),typeof k.throttle=="string"&&(k.throttle=[k.throttle]),ce.forEach(function(B){if(k[B]){var w=A(m,B,k);w&&h(m,B,w)}}),Object.keys(k).forEach(function(B){if(!Ae[B]){var w=A(m,B,k);w&&h(m,B,w)}}),function(B,w){var R=this;Array.isArray(B)&&B.filter(function(H){return H!=null}).forEach(function(H,q){if(y(H)){var oe=document.createTextNode(H);oe.key=q,w.append(oe)}else if(typeof H=="function"){var ue=document.createTextNode("");w.append(ue);var se=function(){return T(R,void 0,void 0,function(){var J,N,S,fe,ke,me,be;return b(this,function(ye){switch(ye.label){case 0:return[4,Promise.resolve(H())];case 1:return y(J=ye.sent())?((N=document.createTextNode(J)).key=q,S=!1,w.childNodes.forEach(function(X){if(X.key===N.key){if(X.textContent===N.textContent)return void(S=!0);F(X,N),S=!0}}),S||w.insertBefore(N,ue),[2,q]):Array.isArray(J)?(fe={},ke={},J.forEach(function(X,ve){X.___forList=q,X.key||(X.key="fn("+q+")-list("+ve+")"),ke[X.key]=X}),me=[],w.childNodes.forEach(function(X){X.___forList===q&&(ke[X.key]?fe[X.key]=X:me.push(X))}),me.forEach(function(X){X.remove()}),J.forEach(function(X){var ve=fe[X.key];ve?ve.isEqualNode(X)||F(ve,X):X!==!1&&w.insertBefore(X,ue)}),[2,"for-list-"+q]):J?(J.key||(J.key=q),be=!1,w.childNodes.forEach(function(X){X.key===J.key&&(F(X,J),be=!0)}),be||w.insertBefore(J,ue),[2,J.key]):[2]}})})};se(),h(w,"children",se)}else if(x(H))w.append(H);else if(H!==!1)if(Object.prototype.toString.call(H)==="[object Array]"){for(var te=[],le=0;le<H.length;le++){var Z=H[le];Z!==!1&&te.push(Z)}w.append.apply(w,te)}else w.appendChild(H)})}(k.children,m),typeof k.oncreate=="function"&&k.oncreate(m),typeof k.onappend=="function"&&L(m).then(k.onappend),m};return Q.jsxFrag=function(p){return p&&p.children?Q.apply(void 0,["span",{style:{all:"unset"}}].concat(p.children)):""},Q.waitAppend=L,Q.subscribe=function(p){return c.add(p),function(){c.delete(p)}},Q.next=function(p,g){p=p||"*";for(var D=l(g),I=l(p),m=[],k=I.length,O=function(B){var w=I[B];if(w.__next&&document.body.contains(w)){if(D.length){for(var R=D.length,H=!1,q=0;q<R;q++){var oe=D[q];if(oe===w||oe.contains(w)){H=!0;break}}if(H)return"continue"}w.__memo?Promise.resolve(w.__memo()).then(function(ue){var se=!u(w.__memoLast,ue);w.__memoLast=ue,se&&w.__next.forEach(function(te){te()})}):w.__next.forEach(function(ue){ue()}),m.push(w)}},W=0;W<k;W++)O(W);return c.forEach(function(B){return B()}),m},Q.events=c,Q.registerTag=function(p){Object.keys(p).forEach(function(g){E[g]=p[g]})},Q.propFn=function(p,g){return typeof p=="function"?function(){return g(p())}:g(p)},Q.waitValue=U,Q.memo=function(p){function g(){return T(G,void 0,void 0,function(){var I,m;return b(this,function(k){switch(k.label){case 0:return[4,Promise.resolve(p())];case 1:return I=k.sent(),D.fixed?(m=u(D.data,I),D.data=I,[2,!m]):(D.fixed=1,D.data=I,[2,!0])}})})}var D={fixed:0,data:null,value:null};return g(),function(I){return function(){return T(G,void 0,void 0,function(){var m;return b(this,function(k){switch(k.label){case 0:return[4,Promise.resolve(g())];case 1:return k.sent()?(m=D,[4,Promise.resolve(I())]):[3,3];case 2:m.value=k.sent(),k.label=3;case 3:return[2,D.value]}})})}}},Q.deepEqual=u,Q.deepMerge=function p(g,D){for(var I in D)D.hasOwnProperty(I)&&(g[I]&&function(k){return k&&typeof k=="object"}(m=I)&&!function(k){var O=Object.prototype.toString.call(k);return O==="[object RegExp]"||O==="[object Date]"||function(W){return W.$$typeof===re}(k)}(m)?p(g[I],D[I]):g[I]=D[I]);var m;return g},Q.debounce=_,Q.throttle=M,window.aoife=Q})});var it=rt((Ue,je)=>{(function(n,u){typeof Ue=="object"&&typeof je!="undefined"?je.exports=u():typeof define=="function"&&define.amd?define(u):(n=typeof globalThis!="undefined"?globalThis:n||self,n.marked=u())})(Ue,function(){"use strict";function n(d,o){for(var s=0;s<o.length;s++){var e=o[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(d,e.key,e)}}function u(d,o,s){return o&&n(d.prototype,o),s&&n(d,s),d}function c(d,o){if(!!d){if(typeof d=="string")return l(d,o);var s=Object.prototype.toString.call(d).slice(8,-1);if(s==="Object"&&d.constructor&&(s=d.constructor.name),s==="Map"||s==="Set")return Array.from(d);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return l(d,o)}}function l(d,o){(o==null||o>d.length)&&(o=d.length);for(var s=0,e=new Array(o);s<o;s++)e[s]=d[s];return e}function h(d,o){var s;if(typeof Symbol=="undefined"||d[Symbol.iterator]==null){if(Array.isArray(d)||(s=c(d))||o&&d&&typeof d.length=="number"){s&&(d=s);var e=0;return function(){return e>=d.length?{done:!0}:{done:!1,value:d[e++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return s=d[Symbol.iterator](),s.next.bind(s)}function T(d){var o={exports:{}};return d(o,o.exports),o.exports}var b=T(function(d){function o(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}function s(e){d.exports.defaults=e}d.exports={defaults:o(),getDefaults:o,changeDefaults:s}}),_=/[&<>"']/,M=/[&<>"']/g,P=/[<>"']|&(?!#?\w+;)/,pe=/[<>"']|&(?!#?\w+;)/g,ie={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},A=function(o){return ie[o]};function E(d,o){if(o){if(_.test(d))return d.replace(M,A)}else if(P.test(d))return d.replace(pe,A);return d}var y=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function x(d){return d.replace(y,function(o,s){return s=s.toLowerCase(),s==="colon"?":":s.charAt(0)==="#"?s.charAt(1)==="x"?String.fromCharCode(parseInt(s.substring(2),16)):String.fromCharCode(+s.substring(1)):""})}var F=/(^|[^\[])\^/g;function U(d,o){d=d.source||d,o=o||"";var s={replace:function(t,a){return a=a.source||a,a=a.replace(F,"$1"),d=d.replace(t,a),s},getRegex:function(){return new RegExp(d,o)}};return s}var L=/[^\w:]/g,G=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function re(d,o,s){if(d){var e;try{e=decodeURIComponent(x(s)).replace(L,"").toLowerCase()}catch(t){return null}if(e.indexOf("javascript:")===0||e.indexOf("vbscript:")===0||e.indexOf("data:")===0)return null}o&&!G.test(s)&&(s=p(o,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch(t){return null}return s}var de={},Ae=/^[^:]+:\/*[^/]*$/,ce=/^([^:]+:)[\s\S]*$/,Q=/^([^:]+:\/*[^/]*)[\s\S]*$/;function p(d,o){de[" "+d]||(Ae.test(d)?de[" "+d]=d+"/":de[" "+d]=m(d,"/",!0)),d=de[" "+d];var s=d.indexOf(":")===-1;return o.substring(0,2)==="//"?s?o:d.replace(ce,"$1")+o:o.charAt(0)==="/"?s?o:d.replace(Q,"$1")+o:d+o}var g={exec:function(){}};function D(d){for(var o=1,s,e;o<arguments.length;o++){s=arguments[o];for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(d[e]=s[e])}return d}function I(d,o){var s=d.replace(/\|/g,function(a,r,i){for(var C=!1,v=r;--v>=0&&i[v]==="\\";)C=!C;return C?"|":" |"}),e=s.split(/ \|/),t=0;if(e.length>o)e.splice(o);else for(;e.length<o;)e.push("");for(;t<e.length;t++)e[t]=e[t].trim().replace(/\\\|/g,"|");return e}function m(d,o,s){var e=d.length;if(e===0)return"";for(var t=0;t<e;){var a=d.charAt(e-t-1);if(a===o&&!s)t++;else if(a!==o&&s)t++;else break}return d.substr(0,e-t)}function k(d,o){if(d.indexOf(o[1])===-1)return-1;for(var s=d.length,e=0,t=0;t<s;t++)if(d[t]==="\\")t++;else if(d[t]===o[0])e++;else if(d[t]===o[1]&&(e--,e<0))return t;return-1}function O(d){d&&d.sanitize&&!d.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function W(d,o){if(o<1)return"";for(var s="";o>1;)o&1&&(s+=d),o>>=1,d+=d;return s+d}var B={escape:E,unescape:x,edit:U,cleanUrl:re,resolveUrl:p,noopTest:g,merge:D,splitCells:I,rtrim:m,findClosingBracket:k,checkSanitizeDeprecation:O,repeatString:W},w=b.defaults,R=B.rtrim,H=B.splitCells,q=B.escape,oe=B.findClosingBracket;function ue(d,o,s){var e=o.href,t=o.title?q(o.title):null,a=d[1].replace(/\\([\[\]])/g,"$1");return d[0].charAt(0)!=="!"?{type:"link",raw:s,href:e,title:t,text:a}:{type:"image",raw:s,href:e,title:t,text:q(a)}}function se(d,o){var s=d.match(/^(\s+)(?:```)/);if(s===null)return o;var e=s[1];return o.split(`
`).map(function(t){var a=t.match(/^\s+/);if(a===null)return t;var r=a[0];return r.length>=e.length?t.slice(e.length):t}).join(`
`)}var te=function(){function d(s){this.options=s||w}var o=d.prototype;return o.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:`
`}},o.code=function(e){var t=this.rules.block.code.exec(e);if(t){var a=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?a:R(a,`
`)}}},o.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var a=t[0],r=se(a,t[3]||"");return{type:"code",raw:a,lang:t[2]?t[2].trim():t[2],text:r}}},o.heading=function(e){var t=this.rules.block.heading.exec(e);if(t){var a=t[2].trim();if(/#$/.test(a)){var r=R(a,"#");(this.options.pedantic||!r||/ $/.test(r))&&(a=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:a}}},o.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var a={type:"table",header:H(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split(`
`):[],raw:t[0]};if(a.header.length===a.align.length){var r=a.align.length,i;for(i=0;i<r;i++)/^ *-+: *$/.test(a.align[i])?a.align[i]="right":/^ *:-+: *$/.test(a.align[i])?a.align[i]="center":/^ *:-+ *$/.test(a.align[i])?a.align[i]="left":a.align[i]=null;for(r=a.cells.length,i=0;i<r;i++)a.cells[i]=H(a.cells[i],a.header.length);return a}}},o.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},o.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var a=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:a}}},o.list=function(e){var t=this.rules.block.list.exec(e);if(t){var a=t[0],r=t[2],i=r.length>1,C={type:"list",raw:a,ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]},v=t[0].match(this.rules.block.item),$=!1,z,V,ne,K,j,he,xe,we,De,ee=v.length;ne=this.rules.block.listItemStart.exec(v[0]);for(var ae=0;ae<ee;ae++){if(z=v[ae],a=z,this.options.pedantic||(De=z.match(new RegExp("\\n\\s*\\n {0,"+(ne[0].length-1)+"}\\S")),De&&(j=z.length-De.index+v.slice(ae+1).join(`
`).length,C.raw=C.raw.substring(0,C.raw.length-j),z=z.substring(0,De.index),a=z,ee=ae+1)),ae!==ee-1){if(K=this.rules.block.listItemStart.exec(v[ae+1]),this.options.pedantic?K[1].length>ne[1].length:K[1].length>=ne[0].length||K[1].length>3){v.splice(ae,2,v[ae]+(!this.options.pedantic&&K[1].length<ne[0].length&&!v[ae].match(/\n$/)?"":`
`)+v[ae+1]),ae--,ee--;continue}else(!this.options.pedantic||this.options.smartLists?K[2][K[2].length-1]!==r[r.length-1]:i===(K[2].length===1))&&(j=v.slice(ae+1).join(`
`).length,C.raw=C.raw.substring(0,C.raw.length-j),ae=ee-1);ne=K}V=z.length,z=z.replace(/^ *([*+-]|\d+[.)]) ?/,""),~z.indexOf(`
 `)&&(V-=z.length,z=this.options.pedantic?z.replace(/^ {1,4}/gm,""):z.replace(new RegExp("^ {1,"+V+"}","gm"),"")),z=R(z,`
`),ae!==ee-1&&(a=a+`
`),he=$||/\n\n(?!\s*$)/.test(a),ae!==ee-1&&($=a.slice(-2)===`

`,he||(he=$)),he&&(C.loose=!0),this.options.gfm&&(xe=/^\[[ xX]\] /.test(z),we=void 0,xe&&(we=z[1]!==" ",z=z.replace(/^\[[ xX]\] +/,""))),C.items.push({type:"list_item",raw:a,task:xe,checked:we,loose:he,text:z})}return C}},o.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):q(t[0]):t[0]}},o.def=function(e){var t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));var a=t[1].toLowerCase().replace(/\s+/g," ");return{tag:a,raw:t[0],href:t[2],title:t[3]}}},o.table=function(e){var t=this.rules.block.table.exec(e);if(t){var a={type:"table",header:H(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split(`
`):[]};if(a.header.length===a.align.length){a.raw=t[0];var r=a.align.length,i;for(i=0;i<r;i++)/^ *-+: *$/.test(a.align[i])?a.align[i]="right":/^ *:-+: *$/.test(a.align[i])?a.align[i]="center":/^ *:-+ *$/.test(a.align[i])?a.align[i]="left":a.align[i]=null;for(r=a.cells.length,i=0;i<r;i++)a.cells[i]=H(a.cells[i].replace(/^ *\| *| *\| *$/g,""),a.header.length);return a}}},o.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1]}},o.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1]}},o.text=function(e){var t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0]}},o.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:q(t[1])}},o.tag=function(e,t,a){var r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!a&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?a=!0:a&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(a=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:a,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):q(r[0]):r[0]}},o.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var a=t[2].trim();if(!this.options.pedantic&&/^</.test(a)){if(!/>$/.test(a))return;var r=R(a.slice(0,-1),"\\");if((a.length-r.length)%2==0)return}else{var i=oe(t[2],"()");if(i>-1){var C=t[0].indexOf("!")===0?5:4,v=C+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,v).trim(),t[3]=""}}var $=t[2],z="";if(this.options.pedantic){var V=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec($);V&&($=V[1],z=V[3])}else z=t[3]?t[3].slice(1,-1):"";return $=$.trim(),/^</.test($)&&(this.options.pedantic&&!/>$/.test(a)?$=$.slice(1):$=$.slice(1,-1)),ue(t,{href:$&&$.replace(this.rules.inline._escapes,"$1"),title:z&&z.replace(this.rules.inline._escapes,"$1")},t[0])}},o.reflink=function(e,t){var a;if((a=this.rules.inline.reflink.exec(e))||(a=this.rules.inline.nolink.exec(e))){var r=(a[2]||a[1]).replace(/\s+/g," ");if(r=t[r.toLowerCase()],!r||!r.href){var i=a[0].charAt(0);return{type:"text",raw:i,text:i}}return ue(a,r,a[0])}},o.emStrong=function(e,t,a){a===void 0&&(a="");var r=this.rules.inline.emStrong.lDelim.exec(e);if(!!r&&!(r[3]&&a.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var i=r[1]||r[2]||"";if(!i||i&&(a===""||this.rules.inline.punctuation.exec(a))){var C=r[0].length-1,v,$,z=C,V=0,ne=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(ne.lastIndex=0,t=t.slice(-1*e.length+C);(r=ne.exec(t))!=null;)if(v=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!!v){if($=v.length,r[3]||r[4]){z+=$;continue}else if((r[5]||r[6])&&C%3&&!((C+$)%3)){V+=$;continue}if(z-=$,!(z>0)){if(z+V-$<=0&&!t.slice(ne.lastIndex).match(ne)&&($=Math.min($,$+z+V)),Math.min(C,$)%2)return{type:"em",raw:e.slice(0,C+r.index+$+1),text:e.slice(1,C+r.index+$)};if(Math.min(C,$)%2==0)return{type:"strong",raw:e.slice(0,C+r.index+$+1),text:e.slice(2,C+r.index+$-1)}}}}}},o.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var a=t[2].replace(/\n/g," "),r=/[^ ]/.test(a),i=/^ /.test(a)&&/ $/.test(a);return r&&i&&(a=a.substring(1,a.length-1)),a=q(a,!0),{type:"codespan",raw:t[0],text:a}}},o.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},o.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}},o.autolink=function(e,t){var a=this.rules.inline.autolink.exec(e);if(a){var r,i;return a[2]==="@"?(r=q(this.options.mangle?t(a[1]):a[1]),i="mailto:"+r):(r=q(a[1]),i=r),{type:"link",raw:a[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}},o.url=function(e,t){var a;if(a=this.rules.inline.url.exec(e)){var r,i;if(a[2]==="@")r=q(this.options.mangle?t(a[0]):a[0]),i="mailto:"+r;else{var C;do C=a[0],a[0]=this.rules.inline._backpedal.exec(a[0])[0];while(C!==a[0]);r=q(a[0]),a[1]==="www."?i="http://"+r:i=r}return{type:"link",raw:a[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}},o.inlineText=function(e,t,a){var r=this.rules.inline.text.exec(e);if(r){var i;return t?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):q(r[0]):r[0]:i=q(this.options.smartypants?a(r[0]):r[0]),{type:"text",raw:r[0],text:i}}},d}(),le=B.noopTest,Z=B.edit,J=B.merge,N={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:le,table:le,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/};N._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,N._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,N.def=Z(N.def).replace("label",N._label).replace("title",N._title).getRegex(),N.bullet=/(?:[*+-]|\d{1,9}[.)])/,N.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,N.item=Z(N.item,"gm").replace(/bull/g,N.bullet).getRegex(),N.listItemStart=Z(/^( *)(bull) */).replace("bull",N.bullet).getRegex(),N.list=Z(N.list).replace(/bull/g,N.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+N.def.source+")").getRegex(),N._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",N._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,N.html=Z(N.html,"i").replace("comment",N._comment).replace("tag",N._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),N.paragraph=Z(N._paragraph).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",N._tag).getRegex(),N.blockquote=Z(N.blockquote).replace("paragraph",N.paragraph).getRegex(),N.normal=J({},N),N.gfm=J({},N.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),N.gfm.nptable=Z(N.gfm.nptable).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",N._tag).getRegex(),N.gfm.table=Z(N.gfm.table).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",N._tag).getRegex(),N.pedantic=J({},N.normal,{html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",N._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:le,paragraph:Z(N.normal._paragraph).replace("hr",N.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",N.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var S={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:le,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_]*?\*[^_]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^*]*?\_[^*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:le,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};S._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",S.punctuation=Z(S.punctuation).replace(/punctuation/g,S._punctuation).getRegex(),S.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,S.escapedEmSt=/\\\*|\\_/g,S._comment=Z(N._comment).replace("(?:-->|$)","-->").getRegex(),S.emStrong.lDelim=Z(S.emStrong.lDelim).replace(/punct/g,S._punctuation).getRegex(),S.emStrong.rDelimAst=Z(S.emStrong.rDelimAst,"g").replace(/punct/g,S._punctuation).getRegex(),S.emStrong.rDelimUnd=Z(S.emStrong.rDelimUnd,"g").replace(/punct/g,S._punctuation).getRegex(),S._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,S._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,S._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,S.autolink=Z(S.autolink).replace("scheme",S._scheme).replace("email",S._email).getRegex(),S._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,S.tag=Z(S.tag).replace("comment",S._comment).replace("attribute",S._attribute).getRegex(),S._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,S._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,S._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,S.link=Z(S.link).replace("label",S._label).replace("href",S._href).replace("title",S._title).getRegex(),S.reflink=Z(S.reflink).replace("label",S._label).getRegex(),S.reflinkSearch=Z(S.reflinkSearch,"g").replace("reflink",S.reflink).replace("nolink",S.nolink).getRegex(),S.normal=J({},S),S.pedantic=J({},S.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Z(/^!?\[(label)\]\((.*?)\)/).replace("label",S._label).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",S._label).getRegex()}),S.gfm=J({},S.normal,{escape:Z(S.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),S.gfm.url=Z(S.gfm.url,"i").replace("email",S.gfm._extended_email).getRegex(),S.breaks=J({},S.gfm,{br:Z(S.br).replace("{2,}","*").getRegex(),text:Z(S.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var fe={block:N,inline:S},ke=b.defaults,me=fe.block,be=fe.inline,ye=B.repeatString;function X(d){return d.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function ve(d){var o="",s,e,t=d.length;for(s=0;s<t;s++)e=d.charCodeAt(s),Math.random()>.5&&(e="x"+e.toString(16)),o+="&#"+e+";";return o}var Fe=function(){function d(s){this.tokens=[],this.tokens.links=Object.create(null),this.options=s||ke,this.options.tokenizer=this.options.tokenizer||new te,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var e={block:me.normal,inline:be.normal};this.options.pedantic?(e.block=me.pedantic,e.inline=be.pedantic):this.options.gfm&&(e.block=me.gfm,this.options.breaks?e.inline=be.breaks:e.inline=be.gfm),this.tokenizer.rules=e}d.lex=function(e,t){var a=new d(t);return a.lex(e)},d.lexInline=function(e,t){var a=new d(t);return a.inlineTokens(e)};var o=d.prototype;return o.lex=function(e){return e=e.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},o.blockTokens=function(e,t,a){t===void 0&&(t=[]),a===void 0&&(a=!0),this.options.pedantic&&(e=e.replace(/^ +$/gm,""));for(var r,i,C,v;e;){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.type&&t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),v=t[t.length-1],v&&v.type==="paragraph"?(v.raw+=`
`+r.raw,v.text+=`
`+r.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.nptable(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],a),t.push(r);continue}if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),C=r.items.length,i=0;i<C;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(a&&(r=this.tokenizer.def(e))){e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(a&&(r=this.tokenizer.paragraph(e))){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),v=t[t.length-1],v&&v.type==="text"?(v.raw+=`
`+r.raw,v.text+=`
`+r.text):t.push(r);continue}if(e){var $="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error($);break}else throw new Error($)}}return t},o.inline=function(e){var t,a,r,i,C,v,$=e.length;for(t=0;t<$;t++)switch(v=e[t],v.type){case"paragraph":case"text":case"heading":{v.tokens=[],this.inlineTokens(v.text,v.tokens);break}case"table":{for(v.tokens={header:[],cells:[]},i=v.header.length,a=0;a<i;a++)v.tokens.header[a]=[],this.inlineTokens(v.header[a],v.tokens.header[a]);for(i=v.cells.length,a=0;a<i;a++)for(C=v.cells[a],v.tokens.cells[a]=[],r=0;r<C.length;r++)v.tokens.cells[a][r]=[],this.inlineTokens(C[r],v.tokens.cells[a][r]);break}case"blockquote":{this.inline(v.tokens);break}case"list":{for(i=v.items.length,a=0;a<i;a++)this.inline(v.items[a].tokens);break}}return e},o.inlineTokens=function(e,t,a,r){t===void 0&&(t=[]),a===void 0&&(a=!1),r===void 0&&(r=!1);var i,C,v=e,$,z,V;if(this.tokens.links){var ne=Object.keys(this.tokens.links);if(ne.length>0)for(;($=this.tokenizer.rules.inline.reflinkSearch.exec(v))!=null;)ne.includes($[0].slice($[0].lastIndexOf("[")+1,-1))&&(v=v.slice(0,$.index)+"["+ye("a",$[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;($=this.tokenizer.rules.inline.blockSkip.exec(v))!=null;)v=v.slice(0,$.index)+"["+ye("a",$[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;($=this.tokenizer.rules.inline.escapedEmSt.exec(v))!=null;)v=v.slice(0,$.index)+"++"+v.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;){if(z||(V=""),z=!1,i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.tag(e,a,r)){e=e.substring(i.raw.length),a=i.inLink,r=i.inRawBlock;var K=t[t.length-1];K&&i.type==="text"&&K.type==="text"?(K.raw+=i.raw,K.text+=i.text):t.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),i.type==="link"&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length);var j=t[t.length-1];i.type==="link"?(i.tokens=this.inlineTokens(i.text,[],!0,r),t.push(i)):j&&i.type==="text"&&j.type==="text"?(j.raw+=i.raw,j.text+=i.text):t.push(i);continue}if(i=this.tokenizer.emStrong(e,v,V)){e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],a,r),t.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],a,r),t.push(i);continue}if(i=this.tokenizer.autolink(e,ve)){e=e.substring(i.raw.length),t.push(i);continue}if(!a&&(i=this.tokenizer.url(e,ve))){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.inlineText(e,r,X)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(V=i.raw.slice(-1)),z=!0,C=t[t.length-1],C&&C.type==="text"?(C.raw+=i.raw,C.text+=i.text):t.push(i);continue}if(e){var he="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(he);break}else throw new Error(he)}}return t},u(d,null,[{key:"rules",get:function(){return{block:me,inline:be}}}]),d}(),pt=b.defaults,Ve=B.cleanUrl,$e=B.escape,Le=function(){function d(s){this.options=s||pt}var o=d.prototype;return o.code=function(e,t,a){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var i=this.options.highlight(e,r);i!=null&&i!==e&&(a=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+$e(r,!0)+'">'+(a?e:$e(e,!0))+`</code></pre>
`:"<pre><code>"+(a?e:$e(e,!0))+`</code></pre>
`},o.blockquote=function(e){return`<blockquote>
`+e+`</blockquote>
`},o.html=function(e){return e},o.heading=function(e,t,a,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(a)+'">'+e+"</h"+t+`>
`:"<h"+t+">"+e+"</h"+t+`>
`},o.hr=function(){return this.options.xhtml?`<hr/>
`:`<hr>
`},o.list=function(e,t,a){var r=t?"ol":"ul",i=t&&a!==1?' start="'+a+'"':"";return"<"+r+i+`>
`+e+"</"+r+`>
`},o.listitem=function(e){return"<li>"+e+`</li>
`},o.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},o.paragraph=function(e){return"<p>"+e+`</p>
`},o.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`},o.tablerow=function(e){return`<tr>
`+e+`</tr>
`},o.tablecell=function(e,t){var a=t.header?"th":"td",r=t.align?"<"+a+' align="'+t.align+'">':"<"+a+">";return r+e+"</"+a+`>
`},o.strong=function(e){return"<strong>"+e+"</strong>"},o.em=function(e){return"<em>"+e+"</em>"},o.codespan=function(e){return"<code>"+e+"</code>"},o.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.del=function(e){return"<del>"+e+"</del>"},o.link=function(e,t,a){if(e=Ve(this.options.sanitize,this.options.baseUrl,e),e===null)return a;var r='<a href="'+$e(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+a+"</a>",r},o.image=function(e,t,a){if(e=Ve(this.options.sanitize,this.options.baseUrl,e),e===null)return a;var r='<img src="'+e+'" alt="'+a+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r},o.text=function(e){return e},d}(),Xe=function(){function d(){}var o=d.prototype;return o.strong=function(e){return e},o.em=function(e){return e},o.codespan=function(e){return e},o.del=function(e){return e},o.html=function(e){return e},o.text=function(e){return e},o.link=function(e,t,a){return""+a},o.image=function(e,t,a){return""+a},o.br=function(){return""},d}(),Ke=function(){function d(){this.seen={}}var o=d.prototype;return o.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},o.getNextSafeSlug=function(e,t){var a=e,r=0;if(this.seen.hasOwnProperty(a)){r=this.seen[e];do r++,a=e+"-"+r;while(this.seen.hasOwnProperty(a))}return t||(this.seen[e]=r,this.seen[a]=0),a},o.slug=function(e,t){t===void 0&&(t={});var a=this.serialize(e);return this.getNextSafeSlug(a,t.dryrun)},d}(),gt=b.defaults,mt=B.unescape,Ce=function(){function d(s){this.options=s||gt,this.options.renderer=this.options.renderer||new Le,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Xe,this.slugger=new Ke}d.parse=function(e,t){var a=new d(t);return a.parse(e)},d.parseInline=function(e,t){var a=new d(t);return a.parseInline(e)};var o=d.prototype;return o.parse=function(e,t){t===void 0&&(t=!0);var a="",r,i,C,v,$,z,V,ne,K,j,he,xe,we,De,ee,ae,et,Se,tt=e.length;for(r=0;r<tt;r++)switch(j=e[r],j.type){case"space":continue;case"hr":{a+=this.renderer.hr();continue}case"heading":{a+=this.renderer.heading(this.parseInline(j.tokens),j.depth,mt(this.parseInline(j.tokens,this.textRenderer)),this.slugger);continue}case"code":{a+=this.renderer.code(j.text,j.lang,j.escaped);continue}case"table":{for(ne="",V="",v=j.header.length,i=0;i<v;i++)V+=this.renderer.tablecell(this.parseInline(j.tokens.header[i]),{header:!0,align:j.align[i]});for(ne+=this.renderer.tablerow(V),K="",v=j.cells.length,i=0;i<v;i++){for(z=j.tokens.cells[i],V="",$=z.length,C=0;C<$;C++)V+=this.renderer.tablecell(this.parseInline(z[C]),{header:!1,align:j.align[C]});K+=this.renderer.tablerow(V)}a+=this.renderer.table(ne,K);continue}case"blockquote":{K=this.parse(j.tokens),a+=this.renderer.blockquote(K);continue}case"list":{for(he=j.ordered,xe=j.start,we=j.loose,v=j.items.length,K="",i=0;i<v;i++)ee=j.items[i],ae=ee.checked,et=ee.task,De="",ee.task&&(Se=this.renderer.checkbox(ae),we?ee.tokens.length>0&&ee.tokens[0].type==="text"?(ee.tokens[0].text=Se+" "+ee.tokens[0].text,ee.tokens[0].tokens&&ee.tokens[0].tokens.length>0&&ee.tokens[0].tokens[0].type==="text"&&(ee.tokens[0].tokens[0].text=Se+" "+ee.tokens[0].tokens[0].text)):ee.tokens.unshift({type:"text",text:Se}):De+=Se),De+=this.parse(ee.tokens,we),K+=this.renderer.listitem(De,et,ae);a+=this.renderer.list(K,he,xe);continue}case"html":{a+=this.renderer.html(j.text);continue}case"paragraph":{a+=this.renderer.paragraph(this.parseInline(j.tokens));continue}case"text":{for(K=j.tokens?this.parseInline(j.tokens):j.text;r+1<tt&&e[r+1].type==="text";)j=e[++r],K+=`
`+(j.tokens?this.parseInline(j.tokens):j.text);a+=t?this.renderer.paragraph(K):K;continue}default:{var nt='Token with "'+j.type+'" type was not found.';if(this.options.silent){console.error(nt);return}else throw new Error(nt)}}return a},o.parseInline=function(e,t){t=t||this.renderer;var a="",r,i,C=e.length;for(r=0;r<C;r++)switch(i=e[r],i.type){case"escape":{a+=t.text(i.text);break}case"html":{a+=t.html(i.text);break}case"link":{a+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break}case"image":{a+=t.image(i.href,i.title,i.text);break}case"strong":{a+=t.strong(this.parseInline(i.tokens,t));break}case"em":{a+=t.em(this.parseInline(i.tokens,t));break}case"codespan":{a+=t.codespan(i.text);break}case"br":{a+=t.br();break}case"del":{a+=t.del(this.parseInline(i.tokens,t));break}case"text":{a+=t.text(i.text);break}default:{var v='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(v);return}else throw new Error(v)}}return a},d}(),_e=B.merge,Qe=B.checkSanitizeDeprecation,Je=B.escape,ft=b.getDefaults,ht=b.changeDefaults,bt=b.defaults;function Y(d,o,s){if(typeof d=="undefined"||d===null)throw new Error("marked(): input parameter is undefined or null");if(typeof d!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(d)+", string expected");if(typeof o=="function"&&(s=o,o=null),o=_e({},Y.defaults,o||{}),Qe(o),s){var e=o.highlight,t;try{t=Fe.lex(d,o)}catch(C){return s(C)}var a=function(v){var $;if(!v)try{$=Ce.parse(t,o)}catch(z){v=z}return o.highlight=e,v?s(v):s(null,$)};if(!e||e.length<3||(delete o.highlight,!t.length))return a();var r=0;Y.walkTokens(t,function(C){C.type==="code"&&(r++,setTimeout(function(){e(C.text,C.lang,function(v,$){if(v)return a(v);$!=null&&$!==C.text&&(C.text=$,C.escaped=!0),r--,r===0&&a()})},0))}),r===0&&a();return}try{var i=Fe.lex(d,o);return o.walkTokens&&Y.walkTokens(i,o.walkTokens),Ce.parse(i,o)}catch(C){if(C.message+=`
Please report this to https://github.com/markedjs/marked.`,o.silent)return"<p>An error occurred:</p><pre>"+Je(C.message+"",!0)+"</pre>";throw C}}Y.options=Y.setOptions=function(d){return _e(Y.defaults,d),ht(Y.defaults),Y},Y.getDefaults=ft,Y.defaults=bt,Y.use=function(d){var o=_e({},d);if(d.renderer&&function(){var e=Y.defaults.renderer||new Le,t=function(i){var C=e[i];e[i]=function(){for(var v=arguments.length,$=new Array(v),z=0;z<v;z++)$[z]=arguments[z];var V=d.renderer[i].apply(e,$);return V===!1&&(V=C.apply(e,$)),V}};for(var a in d.renderer)t(a);o.renderer=e}(),d.tokenizer&&function(){var e=Y.defaults.tokenizer||new te,t=function(i){var C=e[i];e[i]=function(){for(var v=arguments.length,$=new Array(v),z=0;z<v;z++)$[z]=arguments[z];var V=d.tokenizer[i].apply(e,$);return V===!1&&(V=C.apply(e,$)),V}};for(var a in d.tokenizer)t(a);o.tokenizer=e}(),d.walkTokens){var s=Y.defaults.walkTokens;o.walkTokens=function(e){d.walkTokens(e),s&&s(e)}}Y.setOptions(o)},Y.walkTokens=function(d,o){for(var s=h(d),e;!(e=s()).done;){var t=e.value;switch(o(t),t.type){case"table":{for(var a=h(t.tokens.header),r;!(r=a()).done;){var i=r.value;Y.walkTokens(i,o)}for(var C=h(t.tokens.cells),v;!(v=C()).done;)for(var $=v.value,z=h($),V;!(V=z()).done;){var ne=V.value;Y.walkTokens(ne,o)}break}case"list":{Y.walkTokens(t.items,o);break}default:t.tokens&&Y.walkTokens(t.tokens,o)}}},Y.parseInline=function(d,o){if(typeof d=="undefined"||d===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof d!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(d)+", string expected");o=_e({},Y.defaults,o||{}),Qe(o);try{var s=Fe.lexInline(d,o);return o.walkTokens&&Y.walkTokens(s,o.walkTokens),Ce.parseInline(s,o)}catch(e){if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,o.silent)return"<p>An error occurred:</p><pre>"+Je(e.message+"",!0)+"</pre>";throw e}},Y.Parser=Ce,Y.parser=Ce.parse,Y.Renderer=Le,Y.TextRenderer=Xe,Y.Lexer=Fe,Y.lexer=Fe.lex,Y.Tokenizer=te,Y.Slugger=Ke,Y.parse=Y;var Dt=Y;return Dt})});var ot=rt((qt,Ie)=>{var Ct=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{},f=function(n){var u=/\blang(?:uage)?-([\w-]+)\b/i,c=0,l={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function A(E){return E instanceof h?new h(E.type,A(E.content),E.alias):Array.isArray(E)?E.map(A):E.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(A){return Object.prototype.toString.call(A).slice(8,-1)},objId:function(A){return A.__id||Object.defineProperty(A,"__id",{value:++c}),A.__id},clone:function A(E,y){var x,F;switch(y=y||{},l.util.type(E)){case"Object":if(F=l.util.objId(E),y[F])return y[F];for(var U in x={},y[F]=x,E)E.hasOwnProperty(U)&&(x[U]=A(E[U],y));return x;case"Array":return F=l.util.objId(E),y[F]?y[F]:(x=[],y[F]=x,E.forEach(function(L,G){x[G]=A(L,y)}),x);default:return E}},getLanguage:function(A){for(;A&&!u.test(A.className);)A=A.parentElement;return A?(A.className.match(u)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(x){var A=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(x.stack)||[])[1];if(A){var E=document.getElementsByTagName("script");for(var y in E)if(E[y].src==A)return E[y]}return null}},isActive:function(A,E,y){for(var x="no-"+E;A;){var F=A.classList;if(F.contains(E))return!0;if(F.contains(x))return!1;A=A.parentElement}return!!y}},languages:{extend:function(A,E){var y=l.util.clone(l.languages[A]);for(var x in E)y[x]=E[x];return y},insertBefore:function(A,E,y,x){var F=(x=x||l.languages)[A],U={};for(var L in F)if(F.hasOwnProperty(L)){if(L==E)for(var G in y)y.hasOwnProperty(G)&&(U[G]=y[G]);y.hasOwnProperty(L)||(U[L]=F[L])}var re=x[A];return x[A]=U,l.languages.DFS(l.languages,function(de,Ae){Ae===re&&de!=A&&(this[de]=U)}),U},DFS:function A(E,y,x,F){F=F||{};var U=l.util.objId;for(var L in E)if(E.hasOwnProperty(L)){y.call(E,L,E[L],x||L);var G=E[L],re=l.util.type(G);re!=="Object"||F[U(G)]?re!=="Array"||F[U(G)]||(F[U(G)]=!0,A(G,y,L,F)):(F[U(G)]=!0,A(G,y,null,F))}}},plugins:{},highlightAll:function(A,E){l.highlightAllUnder(document,A,E)},highlightAllUnder:function(A,E,y){var x={callback:y,container:A,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",x),x.elements=Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)),l.hooks.run("before-all-elements-highlight",x);for(var F,U=0;F=x.elements[U++];)l.highlightElement(F,E===!0,x.callback)},highlightElement:function(A,E,y){var x=l.util.getLanguage(A),F=l.languages[x];A.className=A.className.replace(u,"").replace(/\s+/g," ")+" language-"+x;var U=A.parentElement;U&&U.nodeName.toLowerCase()==="pre"&&(U.className=U.className.replace(u,"").replace(/\s+/g," ")+" language-"+x);var L={element:A,language:x,grammar:F,code:A.textContent};function G(de){L.highlightedCode=de,l.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,l.hooks.run("after-highlight",L),l.hooks.run("complete",L),y&&y.call(L.element)}if(l.hooks.run("before-sanity-check",L),!L.code)return l.hooks.run("complete",L),void(y&&y.call(L.element));if(l.hooks.run("before-highlight",L),L.grammar)if(E&&n.Worker){var re=new Worker(l.filename);re.onmessage=function(de){G(de.data)},re.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else G(l.highlight(L.code,L.grammar,L.language));else G(l.util.encode(L.code))},highlight:function(A,E,y){var x={code:A,grammar:E,language:y};return l.hooks.run("before-tokenize",x),x.tokens=l.tokenize(x.code,x.grammar),l.hooks.run("after-tokenize",x),h.stringify(l.util.encode(x.tokens),x.language)},tokenize:function(A,E){var y=E.rest;if(y){for(var x in y)E[x]=y[x];delete E.rest}var F=new b;return _(F,F.head,A),function U(L,G,re,de,Ae,ce){for(var Q in re)if(re.hasOwnProperty(Q)&&re[Q]){var p=re[Q];p=Array.isArray(p)?p:[p];for(var g=0;g<p.length;++g){if(ce&&ce.cause==Q+","+g)return;var D=p[g],I=D.inside,m=!!D.lookbehind,k=!!D.greedy,O=D.alias;if(k&&!D.pattern.global){var W=D.pattern.toString().match(/[imsuy]*$/)[0];D.pattern=RegExp(D.pattern.source,W+"g")}for(var B=D.pattern||D,w=de.next,R=Ae;w!==G.tail&&!(ce&&R>=ce.reach);R+=w.value.length,w=w.next){var H=w.value;if(G.length>L.length)return;if(!(H instanceof h)){var q,oe=1;if(k){if(!(q=T(B,R,L,m)))break;var le=q.index,ue=q.index+q[0].length,se=R;for(se+=w.value.length;se<=le;)w=w.next,se+=w.value.length;if(se-=w.value.length,R=se,w.value instanceof h)continue;for(var te=w;te!==G.tail&&(se<ue||typeof te.value=="string");te=te.next)oe++,se+=te.value.length;oe--,H=L.slice(R,se),q.index-=R}else if(!(q=T(B,0,H,m)))continue;var le=q.index,Z=q[0],J=H.slice(0,le),N=H.slice(le+Z.length),S=R+H.length;ce&&S>ce.reach&&(ce.reach=S);var fe=w.prev;J&&(fe=_(G,fe,J),R+=J.length),M(G,fe,oe);var ke=new h(Q,I?l.tokenize(Z,I):Z,O,Z);if(w=_(G,fe,ke),N&&_(G,w,N),1<oe){var me={cause:Q+","+g,reach:S};U(L,G,re,w.prev,R,me),ce&&me.reach>ce.reach&&(ce.reach=me.reach)}}}}}}(A,F,E,F.head,0),function(U){for(var L=[],G=U.head.next;G!==U.tail;)L.push(G.value),G=G.next;return L}(F)},hooks:{all:{},add:function(A,E){var y=l.hooks.all;y[A]=y[A]||[],y[A].push(E)},run:function(A,E){var y=l.hooks.all[A];if(y&&y.length)for(var x,F=0;x=y[F++];)x(E)}},Token:h};function h(A,E,y,x){this.type=A,this.content=E,this.alias=y,this.length=0|(x||"").length}function T(A,E,y,x){A.lastIndex=E;var F=A.exec(y);if(F&&x&&F[1]){var U=F[1].length;F.index+=U,F[0]=F[0].slice(U)}return F}function b(){var A={value:null,prev:null,next:null},E={value:null,prev:A,next:null};A.next=E,this.head=A,this.tail=E,this.length=0}function _(A,E,y){var x=E.next,F={value:y,prev:E,next:x};return E.next=F,x.prev=F,A.length++,F}function M(A,E,y){for(var x=E.next,F=0;F<y&&x!==A.tail;F++)x=x.next;(E.next=x).prev=E,A.length-=F}if(n.Prism=l,h.stringify=function A(E,y){if(typeof E=="string")return E;if(Array.isArray(E)){var x="";return E.forEach(function(re){x+=A(re,y)}),x}var F={type:E.type,content:A(E.content,y),tag:"span",classes:["token",E.type],attributes:{},language:y},U=E.alias;U&&(Array.isArray(U)?Array.prototype.push.apply(F.classes,U):F.classes.push(U)),l.hooks.run("wrap",F);var L="";for(var G in F.attributes)L+=" "+G+'="'+(F.attributes[G]||"").replace(/"/g,"&quot;")+'"';return"<"+F.tag+' class="'+F.classes.join(" ")+'"'+L+">"+F.content+"</"+F.tag+">"},!n.document)return n.addEventListener&&(l.disableWorkerMessageHandler||n.addEventListener("message",function(A){var E=JSON.parse(A.data),y=E.language,x=E.code,F=E.immediateClose;n.postMessage(l.highlight(x,l.languages[y],y)),F&&n.close()},!1)),l;var P=l.util.currentScript();function pe(){l.manual||l.highlightAll()}if(P&&(l.filename=P.src,P.hasAttribute("data-manual")&&(l.manual=!0)),!l.manual){var ie=document.readyState;ie==="loading"||ie==="interactive"&&P&&P.defer?document.addEventListener("DOMContentLoaded",pe):window.requestAnimationFrame?window.requestAnimationFrame(pe):window.setTimeout(pe,16)}return l}(Ct);typeof Ie!="undefined"&&Ie.exports&&(Ie.exports=f),typeof global!="undefined"&&(global.Prism=f);f.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},f.languages.markup.tag.inside["attr-value"].inside.entity=f.languages.markup.entity,f.languages.markup.doctype.inside["internal-subset"].inside=f.languages.markup,f.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(f.languages.markup.tag,"addInlined",{value:function(n,u){var c={};c["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:f.languages[u]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};l["language-"+u]={pattern:/[\s\S]+/,inside:f.languages[u]};var h={};h[n]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:l},f.languages.insertBefore("markup","cdata",h)}}),f.languages.html=f.languages.markup,f.languages.mathml=f.languages.markup,f.languages.svg=f.languages.markup,f.languages.xml=f.languages.extend("markup",{}),f.languages.ssml=f.languages.xml,f.languages.atom=f.languages.xml,f.languages.rss=f.languages.xml;(function(n){var u=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:RegExp(`[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),string:{pattern:u,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var c=n.languages.markup;c&&(c.tag.addInlined("style","css"),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:n.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},c.tag))})(f);f.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};f.languages.javascript=f.languages.extend("clike",{"class-name":[f.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),f.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,f.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:f.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:f.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:f.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:f.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:f.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),f.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:f.languages.javascript}},string:/[\s\S]+/}}}),f.languages.markup&&f.languages.markup.tag.addInlined("script","javascript"),f.languages.js=f.languages.javascript;(function(n){var u="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",c={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:c,environment:{pattern:RegExp("\\$"+u),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+u),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+u),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:c}},{pattern:/(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,lookbehind:!0,greedy:!0,inside:l}],environment:{pattern:RegExp("\\$?"+u),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},c.inside=n.languages.bash;for(var h=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],T=l.variable[1].inside,b=0;b<h.length;b++)T[h[b]]=n.languages.bash[h[b]];n.languages.shell=n.languages.bash})(f);f.languages.c=f.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,function:/[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),f.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},f.languages.c.string],comment:f.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:f.languages.c}}},constant:/\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/}),delete f.languages.c.boolean;(function(n){var u=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,c="\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g,function(){return u.source});n.languages.cpp=n.languages.extend("c",{"class-name":[{pattern:RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g,function(){return u.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:u,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:true|false)\b/}),n.languages.insertBefore("cpp","string",{module:{pattern:RegExp(`(\\b(?:module|import)\\s+)(?:"(?:\\\\(?:\r
|[^])|[^"\\\\\r
])*"|<[^<>\r
]*>|`+"<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g,function(){return c})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),n.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:n.languages.extend("cpp",{})}}),n.languages.insertBefore("inside","operator",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},n.languages.cpp["base-clause"])})(f);(function(n){var u,c=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;n.languages.css.selector={pattern:n.languages.css.selector,inside:u={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+c.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[c,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},n.languages.css.atrule.inside["selector-function-argument"].inside=u,n.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var l={pattern:/(\b\d+)(?:%|[a-z]+\b)/,lookbehind:!0},h={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};n.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#(?:[\da-f]{1,2}){3,4}\b/i,alias:"color"},color:[/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,{pattern:/\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:l,number:h,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:l,number:h})})(f);(function(n){n.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var u={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(u).forEach(function(c){var l=u[c],h=[];/^\w+$/.test(c)||h.push(/\w+/.exec(c)[0]),c==="diff"&&h.push("bold"),n.languages.diff[c]={pattern:RegExp("^(?:["+l+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:h,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(c)[0]}}}}),Object.defineProperty(n.languages.diff,"PREFIXES",{value:u})})(f);(function(n){var u="(?:[ 	]+(?![ 	])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g,function(){return`\\\\[\r
](?:\\s|\\\\[\r
]|#.*(?!.))*(?![\\s#]|\\\\[\r
])`}),c=`"(?:[^"\\\\\r
]|\\\\(?:\r
|[^]))*"|'(?:[^'\\\\\r
]|\\\\(?:\r
|[^]))*'`,l=`--[\\w-]+=(?:<STR>|(?!["'])(?:[^\\s\\\\]|\\\\.)+)`.replace(/<STR>/g,function(){return c}),h={pattern:RegExp(c),greedy:!0},T={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function b(_,M){return _=_.replace(/<OPT>/g,function(){return l}).replace(/<SP>/g,function(){return u}),RegExp(_,M)}n.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:b("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*","i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[h,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:b("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b","i"),lookbehind:!0,greedy:!0},{pattern:b("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ 	\\\\]+<SP>)AS","i"),lookbehind:!0,greedy:!0},{pattern:b("(^ONBUILD<SP>)\\w+","i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:T,string:h,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:T},n.languages.dockerfile=n.languages.docker})(f);(function(n){function u(c,l){return"___"+c.toUpperCase()+l+"___"}Object.defineProperties(n.languages["markup-templating"]={},{buildPlaceholders:{value:function(c,l,h,T){if(c.language===l){var b=c.tokenStack=[];c.code=c.code.replace(h,function(_){if(typeof T=="function"&&!T(_))return _;for(var M,P=b.length;c.code.indexOf(M=u(l,P))!==-1;)++P;return b[P]=_,M}),c.grammar=n.languages.markup}}},tokenizePlaceholders:{value:function(c,l){if(c.language===l&&c.tokenStack){c.grammar=n.languages[l];var h=0,T=Object.keys(c.tokenStack);(function b(_){for(var M=0;M<_.length&&!(h>=T.length);M++){var P=_[M];if(typeof P=="string"||P.content&&typeof P.content=="string"){var pe=T[h],ie=c.tokenStack[pe],A=typeof P=="string"?P:P.content,E=u(l,pe),y=A.indexOf(E);if(-1<y){++h;var x=A.substring(0,y),F=new n.Token(l,n.tokenize(ie,c.grammar),"language-"+l,ie),U=A.substring(y+E.length),L=[];x&&L.push.apply(L,b([x])),L.push(F),U&&L.push.apply(L,b([U])),typeof P=="string"?_.splice.apply(_,[M,1].concat(L)):P.content=L}}else P.content&&b(P.content)}return _})(c.tokens)}}}})})(f);(function(n){n.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:n.languages.javascript}},n.hooks.add("before-tokenize",function(u){n.languages["markup-templating"].buildPlaceholders(u,"ejs",/<%(?!%)[\s\S]+?%>/g)}),n.hooks.add("after-tokenize",function(u){n.languages["markup-templating"].tokenizePlaceholders(u,"ejs")}),n.languages.eta=n.languages.ejs})(f);f.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/m}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m};f.languages.go=f.languages.extend("clike",{string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|iota|nil|true|false)\b/,number:/(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/}),delete f.languages.go["class-name"];f.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:f.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:true|false)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,punctuation:/[!(){}\[\]:=,]/,constant:/\b(?!ID\b)[A-Z][A-Z_\d]*\b/};(function(n){n.languages.http={"request-line":{pattern:/^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*\sHTTP\/[0-9.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:n.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[0-9.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[0-9.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[0-9.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var u,c,l,h=n.languages,T={"application/javascript":h.javascript,"application/json":h.json||h.javascript,"application/xml":h.xml,"text/xml":h.xml,"text/html":h.html,"text/css":h.css},b={"application/json":!0,"application/xml":!0};for(var _ in T)if(T[_]){u=u||{};var M=b[_]?(l=(c=_).replace(/^[a-z]+\//,""),"(?:"+c+"|\\w+/(?:[\\w.-]+\\+)+"+l+"(?![+\\w.-]))"):_;u[_.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+M+"(?:(?:\\r\\n?|\\n).+)*)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:T[_]}}u&&n.languages.insertBefore("http","header-name",u)})(f);(function(n){n.languages.ignore={comment:/^#.*/m,entry:{pattern:/\S(?:.*(?:(?:\\ )|\S))?/,alias:"string",inside:{operator:/^!|\*\*?|\?/,regex:{pattern:/(^|[^\\])\[[^\[\]]*\]/,lookbehind:!0},punctuation:/\//}}},n.languages.gitignore=n.languages.ignore,n.languages.hgignore=n.languages.ignore,n.languages.npmignore=n.languages.ignore})(f);(function(n){var u=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,c="(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",l={pattern:RegExp(c+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};n.languages.java=n.languages.extend("clike",{"class-name":[l,{pattern:RegExp(c+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=())])"),lookbehind:!0,inside:l.inside}],keyword:u,function:[n.languages.clike.function,{pattern:/(\:\:\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),n.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"}}),n.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":l,keyword:u,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,function(){return u.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(f);f.languages.less=f.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,operator:/[+\-*\/]/}),f.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}});(function(n){var u=["$eq","$gt","$gte","$in","$lt","$lte","$ne","$nin","$and","$not","$nor","$or","$exists","$type","$expr","$jsonSchema","$mod","$regex","$text","$where","$geoIntersects","$geoWithin","$near","$nearSphere","$all","$elemMatch","$size","$bitsAllClear","$bitsAllSet","$bitsAnyClear","$bitsAnySet","$comment","$elemMatch","$meta","$slice","$currentDate","$inc","$min","$max","$mul","$rename","$set","$setOnInsert","$unset","$addToSet","$pop","$pull","$push","$pullAll","$each","$position","$slice","$sort","$bit","$addFields","$bucket","$bucketAuto","$collStats","$count","$currentOp","$facet","$geoNear","$graphLookup","$group","$indexStats","$limit","$listLocalSessions","$listSessions","$lookup","$match","$merge","$out","$planCacheStats","$project","$redact","$replaceRoot","$replaceWith","$sample","$set","$skip","$sort","$sortByCount","$unionWith","$unset","$unwind","$abs","$accumulator","$acos","$acosh","$add","$addToSet","$allElementsTrue","$and","$anyElementTrue","$arrayElemAt","$arrayToObject","$asin","$asinh","$atan","$atan2","$atanh","$avg","$binarySize","$bsonSize","$ceil","$cmp","$concat","$concatArrays","$cond","$convert","$cos","$dateFromParts","$dateToParts","$dateFromString","$dateToString","$dayOfMonth","$dayOfWeek","$dayOfYear","$degreesToRadians","$divide","$eq","$exp","$filter","$first","$floor","$function","$gt","$gte","$hour","$ifNull","$in","$indexOfArray","$indexOfBytes","$indexOfCP","$isArray","$isNumber","$isoDayOfWeek","$isoWeek","$isoWeekYear","$last","$last","$let","$literal","$ln","$log","$log10","$lt","$lte","$ltrim","$map","$max","$mergeObjects","$meta","$min","$millisecond","$minute","$mod","$month","$multiply","$ne","$not","$objectToArray","$or","$pow","$push","$radiansToDegrees","$range","$reduce","$regexFind","$regexFindAll","$regexMatch","$replaceOne","$replaceAll","$reverseArray","$round","$rtrim","$second","$setDifference","$setEquals","$setIntersection","$setIsSubset","$setUnion","$size","$sin","$slice","$split","$sqrt","$stdDevPop","$stdDevSamp","$strcasecmp","$strLenBytes","$strLenCP","$substr","$substrBytes","$substrCP","$subtract","$sum","$switch","$tan","$toBool","$toDate","$toDecimal","$toDouble","$toInt","$toLong","$toObjectId","$toString","$toLower","$toUpper","$trim","$trunc","$type","$week","$year","$zip","$comment","$explain","$hint","$max","$maxTimeMS","$min","$orderby","$query","$returnKey","$showDiskLoc","$natural"],c="(?:"+(u=u.map(function(l){return l.replace("$","\\$")})).join("|")+")\\b";n.languages.mongodb=n.languages.extend("javascript",{}),n.languages.insertBefore("mongodb","string",{property:{pattern:/(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,greedy:!0,inside:{keyword:RegExp(`^(['"])?`+c+"(?:\\1)?$")}}}),n.languages.mongodb.string.inside={url:{pattern:/https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,greedy:!0},entity:{pattern:/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,greedy:!0}},n.languages.insertBefore("mongodb","constant",{builtin:{pattern:RegExp("\\b(?:"+["ObjectId","Code","BinData","DBRef","Timestamp","NumberLong","NumberDecimal","MaxKey","MinKey","RegExp","ISODate","UUID"].join("|")+")\\b"),alias:"keyword"}})})(f);f.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|IN|ILIKE|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};(function(n){var u=n.languages.plsql=n.languages.extend("sql",{comment:[/\/\*[\s\S]*?\*\//,/--.*/]}),c=u.keyword;Array.isArray(c)||(c=u.keyword=[c]),c.unshift(/\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i);var l=u.operator;Array.isArray(l)||(l=u.operator=[l]),l.unshift(/:=/)})(f);(function(n){n.languages.pug={comment:{pattern:/(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,lookbehind:!0},"multiline-script":{pattern:/(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:n.languages.javascript},filter:{pattern:/(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"}}},"multiline-plain-text":{pattern:/(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0},markup:{pattern:/(^[\t ]*)<.+/m,lookbehind:!0,inside:n.languages.markup},doctype:{pattern:/((?:^|\n)[\t ]*)doctype(?: .+)?/,lookbehind:!0},"flow-control":{pattern:/(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,lookbehind:!0,inside:{each:{pattern:/^each .+? in\b/,inside:{keyword:/\b(?:each|in)\b/,punctuation:/,/}},branch:{pattern:/^(?:if|unless|else|case|when|default|while)\b/,alias:"keyword"},rest:n.languages.javascript}},keyword:{pattern:/(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,lookbehind:!0},mixin:[{pattern:/(^[\t ]*)mixin .+/m,lookbehind:!0,inside:{keyword:/^mixin/,function:/\w+(?=\s*\(|\s*$)/,punctuation:/[(),.]/}},{pattern:/(^[\t ]*)\+.+/m,lookbehind:!0,inside:{name:{pattern:/^\+\w+/,alias:"function"},rest:n.languages.javascript}}],script:{pattern:/(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,lookbehind:!0,inside:n.languages.javascript},"plain-text":{pattern:/(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,lookbehind:!0},tag:{pattern:/(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,lookbehind:!0,inside:{attributes:[{pattern:/&[^(]+\([^)]+\)/,inside:n.languages.javascript},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,lookbehind:!0,inside:n.languages.javascript},"attr-name":/[\w-]+(?=\s*!?=|\s*[,)])/,punctuation:/[!=(),]+/}}],punctuation:/:/,"attr-id":/#[\w\-]+/,"attr-class":/\.[\w\-]+/}},code:[{pattern:/(^[\t ]*(?:-|!?=)).+/m,lookbehind:!0,inside:n.languages.javascript}],punctuation:/[.\-!=|]+/};for(var u=[{filter:"atpl",language:"twig"},{filter:"coffee",language:"coffeescript"},"ejs","handlebars","less","livescript","markdown",{filter:"sass",language:"scss"},"stylus"],c={},l=0,h=u.length;l<h;l++){var T=u[l];T=typeof T=="string"?{filter:T,language:T}:T,n.languages[T.language]&&(c["filter-"+T.filter]={pattern:RegExp(`(^([	 ]*)):{{filter_name}}(?:(?:\r?
|\r(?!
))(?:\\2[	 ].+|\\s*?(?=\r?
|\r)))+`.replace("{{filter_name}}",function(){return T.filter}),"m"),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"},rest:n.languages[T.language]}})}n.languages.insertBefore("pug","filter",c)})(f);f.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},f.languages.python["string-interpolation"].inside.interpolation.inside.rest=f.languages.python,f.languages.py=f.languages.python;(function(n){var u=n.util.clone(n.languages.javascript),c="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function l(b,_){return b=b.replace(/<S>/g,function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"}).replace(/<BRACES>/g,function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"}).replace(/<SPREAD>/g,function(){return c}),RegExp(b,_)}c=l(c).source,n.languages.jsx=n.languages.extend("markup",u),n.languages.jsx.tag.pattern=l(`</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=u.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:l("<SPREAD>"),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","attr-value",{script:{pattern:l("=<BRACES>"),inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:n.languages.jsx},alias:"language-javascript"}},n.languages.jsx.tag);var h=function(b){return b?typeof b=="string"?b:typeof b.content=="string"?b.content:b.content.map(h).join(""):""},T=function(b){for(var _=[],M=0;M<b.length;M++){var P=b[M],pe=!1;if(typeof P!="string"&&(P.type==="tag"&&P.content[0]&&P.content[0].type==="tag"?P.content[0].content[0].content==="</"?0<_.length&&_[_.length-1].tagName===h(P.content[0].content[1])&&_.pop():P.content[P.content.length-1].content==="/>"||_.push({tagName:h(P.content[0].content[1]),openedBraces:0}):0<_.length&&P.type==="punctuation"&&P.content==="{"?_[_.length-1].openedBraces++:0<_.length&&0<_[_.length-1].openedBraces&&P.type==="punctuation"&&P.content==="}"?_[_.length-1].openedBraces--:pe=!0),(pe||typeof P=="string")&&0<_.length&&_[_.length-1].openedBraces===0){var ie=h(P);M<b.length-1&&(typeof b[M+1]=="string"||b[M+1].type==="plain-text")&&(ie+=h(b[M+1]),b.splice(M+1,1)),0<M&&(typeof b[M-1]=="string"||b[M-1].type==="plain-text")&&(ie=h(b[M-1])+ie,b.splice(M-1,1),M--),b[M]=new n.Token("plain-text",ie,null,ie)}P.content&&typeof P.content!="string"&&T(P.content)}};n.hooks.add("after-tokenize",function(b){b.language!=="jsx"&&b.language!=="tsx"||T(b.tokens)})})(f);(function(n){n.languages.typescript=n.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},keyword:/\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),delete n.languages.typescript.parameter;var u=n.languages.extend("typescript",{});delete u["class-name"],n.languages.typescript["class-name"].inside=u,n.languages.insertBefore("typescript","function",{"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:u}}}}),n.languages.ts=n.languages.typescript})(f);(function(n){var u=n.util.clone(n.languages.typescript);n.languages.tsx=n.languages.extend("jsx",u);var c=n.languages.tsx.tag;c.pattern=RegExp("(^|[^\\w$]|(?=</))(?:"+c.pattern.source+")",c.pattern.flags),c.lookbehind=!0})(f);(function(n){var u={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},c=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,l="(?:[^\\\\-]|"+c.source+")",h=RegExp(l+"-"+l),T={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};n.languages.regex={charset:{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"charset-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"charset-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:h,inside:{escape:c,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":u,charclass:{pattern:/\\[wsd]|\\p{[^{}]+}/i,alias:"class-name"},escape:c}},"special-escape":u,charclass:{pattern:/\.|\\[wsd]|\\p{[^{}]+}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":T}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:c,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":T}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(f);(function(n){n.languages.ruby=n.languages.extend("clike",{comment:[/#.*/,{pattern:/^=begin\s[\s\S]*?^=end/m,greedy:!0}],"class-name":{pattern:/(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/});var u={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:n.languages.ruby}};delete n.languages.ruby.function,n.languages.insertBefore("ruby","keyword",{regex:[{pattern:RegExp("%r(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1[gim]{0,3}","\\((?:[^()\\\\]|\\\\[^])*\\)[gim]{0,3}","\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}[gim]{0,3}","\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\][gim]{0,3}","<(?:[^<>\\\\]|\\\\[^])*>[gim]{0,3}"].join("|")+")"),greedy:!0,inside:{interpolation:u}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:{pattern:/(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,lookbehind:!0},"method-definition":{pattern:/(\bdef\s+)[\w.]+/,lookbehind:!0,inside:{function:/\w+$/,rest:n.languages.ruby}}}),n.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z]\w*(?:[?!]|\b)/}),n.languages.ruby.string=[{pattern:RegExp("%[qQiIwWxs]?(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1","\\((?:[^()\\\\]|\\\\[^])*\\)","\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}","\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]","<(?:[^<>\\\\]|\\\\[^])*>"].join("|")+")"),greedy:!0,inside:{interpolation:u}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:u}}],n.languages.rb=n.languages.ruby})(f);(function(n){for(var u="/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/",c=0;c<2;c++)u=u.replace(/<self>/g,function(){return u});u=u.replace(/<self>/g,function(){return"[^\\s\\S]"}),n.languages.rust={comment:[{pattern:RegExp("(^|[^\\\\])"+u),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0,alias:"string"},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},n.languages.rust["closure-params"].inside.rest=n.languages.rust,n.languages.rust.attribute.inside.string=n.languages.rust.string})(f);f.languages.scss=f.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),f.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),f.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),f.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|with|show|hide)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),f.languages.scss.atrule.inside.rest=f.languages.scss;f.languages.swift=f.languages.extend("clike",{string:{pattern:/("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[^(])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/\\\((?:[^()]|\([^)]+\))+\)/,inside:{delimiter:{pattern:/^\\\(|\)$/,alias:"variable"}}}}},keyword:/\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|some|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,constant:/\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,atrule:/@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,builtin:/\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/}),f.languages.swift.string.inside.interpolation.inside.rest=f.languages.swift;f.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/};(function(n){var u=/[*&][^\s[\]{},]+/,c=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,l="(?:"+c.source+"(?:[ 	]+"+u.source+")?|"+u.source+"(?:[ 	]+"+c.source+")?)",h="(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ 	]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g,function(){return"[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"}),T=`"(?:[^"\\\\\r
]|\\\\.)*"|'(?:[^'\\\\\r
]|\\\\.)*'`;function b(_,M){M=(M||"").replace(/m/g,"")+"m";var P=`([:\\-,[{]\\s*(?:\\s<<prop>>[ 	]+)?)(?:<<value>>)(?=[ 	]*(?:$|,|]|}|(?:[\r
]\\s*)?#))`.replace(/<<prop>>/g,function(){return l}).replace(/<<value>>/g,function(){return _});return RegExp(P,M)}n.languages.yaml={scalar:{pattern:RegExp(`([\\-:]\\s*(?:\\s<<prop>>[ 	]+)?[|>])[ 	]*(?:((?:\r?
|\r)[ 	]+)\\S[^\r
]*(?:\\2[^\r
]+)*)`.replace(/<<prop>>/g,function(){return l})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(`((?:^|[:\\-,[{\r
?])[ 	]*(?:<<prop>>[ 	]+)?)<<key>>(?=\\s*:\\s)`.replace(/<<prop>>/g,function(){return l}).replace(/<<key>>/g,function(){return"(?:"+h+"|"+T+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:b("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ 	]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),lookbehind:!0,alias:"number"},boolean:{pattern:b("true|false","i"),lookbehind:!0,alias:"important"},null:{pattern:b("null|~","i"),lookbehind:!0,alias:"important"},string:{pattern:b(T),lookbehind:!0,greedy:!0},number:{pattern:b("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.?\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)","i"),lookbehind:!0},tag:c,important:u,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},n.languages.yml=n.languages.yaml})(f)});var An=ze(at());var qe=ze(it());var Ft=`
:root {
  --vmdb-header: 50px;
  --vmdb-radius: 6px;
  --vmdb-line: #ddeeee;
  --vmdb-menu-width: 240px;
  --vmdb-fm: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
}
.vmdb pre {
  border-radius: var(--vmdb-radius) !important;
}
.vmdb pre > code {
  white-space: break-spaces !important;
  word-break: break-all !important;
}
.vmdb {
  -moz-user-select:auto !important; 
  -webkit-user-select:auto !important;
  -ms-user-select:auto !important;
  user-select:auto !important;
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
  content: ' ';
  display: inline-block;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E");
}.vmdb {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  // color: #24292e;
  color: #3D454D;
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
  margin: .67em 0;
}

.vmdb img {
  border-style: none;
}

.vmdb code,
.vmdb kbd,
.vmdb pre {
  font-family: monospace,monospace;
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

.vmdb [type=checkbox] {
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
  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  line-height: 10px;
  color: #444d56;
  vertical-align: middle;
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #d1d5da;
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
  background: hsl(220,15%,97%);
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
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
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

.vmdb :checked+.radio-label {
  position: relative;
  z-index: 1;
  border-color: #0366d6;
}

.vmdb .border {
  border: 1px solid #e1e4e8!important;
}

.vmdb .border-0 {
  border: 0!important;
}

.vmdb .border-bottom {
  border-bottom: 1px solid #e1e4e8!important;
}

.vmdb .rounded-1 {
  border-radius: 3px!important;
}

.vmdb .bg-white {
  background-color: #fff!important;
}

.vmdb .bg-gray-light {
  background-color: #fafbfc!important;
}

.vmdb .text-gray-light {
  color: #6a737d!important;
}

.vmdb .mb-0 {
  margin-bottom: 0!important;
}

.vmdb .my-2 {
  margin-top: 8px!important;
  margin-bottom: 8px!important;
}

.vmdb .pl-0 {
  padding-left: 0!important;
}

.vmdb .py-0 {
  padding-top: 0!important;
  padding-bottom: 0!important;
}

.vmdb .pl-1 {
  padding-left: 4px!important;
}

.vmdb .pl-2 {
  padding-left: 8px!important;
}

.vmdb .py-2 {
  padding-top: 8px!important;
  padding-bottom: 8px!important;
}

.vmdb .pl-3,
.vmdb .px-3 {
  padding-left: 16px!important;
}

.vmdb .px-3 {
  padding-right: 16px!important;
}

.vmdb .pl-4 {
  padding-left: 24px!important;
}

.vmdb .pl-5 {
  padding-left: 32px!important;
}

.vmdb .pl-6 {
  padding-left: 40px!important;
}

.vmdb .f6 {
  font-size: 12px!important;
}

.vmdb .lh-condensed {
  line-height: 1.25!important;
}

.vmdb .text-bold {
  font-weight: 600!important;
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
  margin-bottom: 0!important;
}

.vmdb .my-2 {
  margin-bottom: 8px!important;
}

.vmdb .my-2 {
  margin-top: 8px!important;
}

.vmdb .pl-0 {
  padding-left: 0!important;
}

.vmdb .py-0 {
  padding-top: 0!important;
  padding-bottom: 0!important;
}

.vmdb .pl-1 {
  padding-left: 4px!important;
}

.vmdb .pl-2 {
  padding-left: 8px!important;
}

.vmdb .py-2 {
  padding-top: 8px!important;
  padding-bottom: 8px!important;
}

.vmdb .pl-3 {
  padding-left: 16px!important;
}

.vmdb .pl-4 {
  padding-left: 24px!important;
}

.vmdb .pl-5 {
  padding-left: 32px!important;
}

.vmdb .pl-6 {
  padding-left: 40px!important;
}

.vmdb .pl-7 {
  padding-left: 48px!important;
}

.vmdb .pl-8 {
  padding-left: 64px!important;
}

.vmdb .pl-9 {
  padding-left: 80px!important;
}

.vmdb .pl-10 {
  padding-left: 96px!important;
}

.vmdb .pl-11 {
  padding-left: 112px!important;
}

.vmdb .pl-12 {
  padding-left: 128px!important;
}

.vmdb hr {
  border-bottom-color: #eee;
}

.vmdb kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
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

.vmdb>:first-child {
  margin-top: 0!important;
}

.vmdb>:last-child {
  margin-bottom: 0!important;
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
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: #e1e4e8;
  border: 0;
}

.vmdb blockquote {
  padding: 0 1em;
  color: #6a737d;
  border-left: .4em solid #dfe2e5;
}

.vmdb blockquote>:first-child {
  margin-top: 0;
}

.vmdb blockquote>:last-child {
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
  margin-top: 2.5em;
  padding-top: 2em;
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
  font-size: .875em;
}

.vmdb h6 {
  margin-top: 0.6em;
  margin-bottom: 0.6em;
  font-size: .85em;
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

.vmdb li>p {
  margin-top: 16px;
}

.vmdb li+li {
  margin-top: .25em;
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
  background: rgba(0,0,0,0.015);
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

.vmdb img[align=right] {
  padding-left: 20px;
}

.vmdb img[align=left] {
  padding-right: 20px;
}

.vmdb code {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(27,31,35,.05);
  border-radius: 3px;
}

.vmdb pre {
  word-wrap: normal;
}

.vmdb pre>code {
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
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
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
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  font-size: 12px;
  line-height: 20px;
  color: rgba(27,31,35,.3);
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
  color: rgba(27,31,35,.6);
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
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
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

.vmdb .task-list-item+.task-list-item {
  margin-top: 3px;
}

.vmdb .task-list-item input {
  margin: 0 .2em .25em -1.6em;
  vertical-align: middle;
}
`,Ge=document.createElement("style");Ge.setAttribute("data-name","github-markdown");Ge.textContent=Ft;document.head.appendChild(Ge);var Wt=ze(ot()),He=n=>{let u=({css:c})=>{let l=document.getElementById("prism-theme");if(l){l.textContent=c;return}let h=document.createElement("style");h.textContent=c,h.id="prism-theme",document.head.appendChild(h)};n==="gitbook"?import("./prism/theme/gitbook.js").then(u):n==="solarized"?import("./prism/theme/solarized.js").then(u):n==="tomorrow"?import("./prism/theme/tomorrow.js").then(u):n==="coy"?import("./prism/theme/coy.js").then(u):n==="dark"?import("./prism/theme/dark.js").then(u):n==="thin-dark"?import("./prism/theme/dark.js").then(u):n==="default"?import("./prism/theme/default.js").then(u):n==="okaidia"?import("./prism/theme/okaidia.js").then(u):n==="twilight"?import("./prism/theme/twilight.js").then(u):n==="darcula"&&import("./prism/theme/darcula.js").then(u)},ut=window.Prism;var Ze=new qe.default.Renderer,st={};function St(n){let u=document.createElement("div");u.textContent=n;let c=u.innerHTML;return u=null,c}Ze.code=function(n,u,c){if(n&&(u==="g"||u==="graph")){let h=st[n];return h?`<div style="opacity: 1; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; border:0.6px solid var(--vmdb-line); border-radius:var(--vmdb-radius); margin:10px 0px;">${h}</div>`:(n=n.trim(),`<div data-code="${n}" style="opacity: 0; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; border:0.6px solid var(--vmdb-line); border-radius:var(--vmdb-radius); margin:10px 0px;" class="mermaid">${n}</div>`)}return`<pre><code class="line-numbers highlight language-${u}">${St(n)}</code></pre>`};function Tt(n,u){let c=[];if(u){window.vmd_moc_click=b=>{c&&c[b]&&c[b].onClick&&c[b].onClick(c[b].index,c[b].line)};let h=[];n.split(`
`).forEach((b,_)=>(b[0]==="#"&&h.push(_),b));let T=-1;Ze.heading=(b,_,M,P)=>(T+=1,c.push({selector:".moc-"+T,text:b,raw:M,level:_,index:T,line:h[T]}),`<h${_} data-moc="${T}" onclick="vmd_moc_click(${T})" class="moc-${T}">${b}</h${_}>`)}let l=document.createElement("div");return l.className="vmdb",l.style.overflowX="hidden",l.style.padding="20px 5% 60px 5%",l.innerHTML=qe.default(n,{renderer:Ze,xhtml:!0}),l.moc=c,setTimeout(()=>{try{let h=l.querySelectorAll(".mermaid");h&&h.length&&import("../node_modules/mermaid/dist/mermaid.core.js").then(T=>{T.default.init(h),h.forEach(b=>{let _=b.getAttribute("data-code"),M=b.innerHTML.trim();_&&(st[_]=M)}),h.forEach(b=>{b.style.opacity=1,b.style.minHeight="auto"})})}catch(h){console.warn("[mermaid]: ",h)}try{ut.highlightAll()}catch(h){console.warn(h)}},50),l}var Be=Tt;var $t=Object.create,We=Object.defineProperty,_t=Object.getPrototypeOf,It=Object.prototype.hasOwnProperty,Bt=Object.getOwnPropertyNames,Rt=Object.getOwnPropertyDescriptor,Ot=n=>We(n,"__esModule",{value:!0}),Nt=(n,u)=>()=>(u||(u={exports:{}},n(u.exports,u)),u.exports),Lt=(n,u,c)=>{if(u&&typeof u=="object"||typeof u=="function")for(let l of Bt(u))!It.call(n,l)&&l!=="default"&&We(n,l,{get:()=>u[l],enumerable:!(c=Rt(u,l))||c.enumerable});return n},zt=n=>n&&n.__esModule?n:Lt(Ot(We(n!=null?$t(_t(n)):{},"default",{value:n,enumerable:!0})),n),Pt=Nt((n,u)=>{(function(c,l){typeof n=="object"&&typeof u!="undefined"?u.exports=l():typeof define=="function"&&define.amd?define(l):(c=c||self).templateFn=l()})(n,function(){"use strict";return function(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];if(1<c.length){var h=c[0],T=c.slice(1),b="";return h.forEach(function(_,M){b+=_,T[M]&&(b+=T[M])}),b}return typeof c[0]=="string"?c[0]:c[0]?c[0].join(""):""}})}),Mt=zt(Pt()),lt={};function Ut(...n){let u=Mt.default(...n);if(lt[u])return;lt[u]=!0;let c=document.createElement("style");c.innerHTML=u,document.head.append(c)}var Ee=Ut;var ge={viewIndex:0,detail:!1,isScrollDown:!1};window.addEventListener("scroll",n=>{let u=document.body.querySelectorAll(".aoife-markdown h1[data-moc], .aoife-markdown h2[data-moc]"),c=9999;u.forEach(l=>{if(l.getBoundingClientRect().bottom>-50){let T=Number(l.getAttribute("data-moc"));T<c&&(c=T)}}),document.documentElement.scrollTop>100&&ge.isScrollDown===!1&&(ge.isScrollDown=!0,aoife.next(".js-aoife-markdown-header")),document.documentElement.scrollTop<100&&ge.isScrollDown===!0&&(ge.isScrollDown=!1,aoife.next(".js-aoife-markdown-header")),c!==ge.viewIndex&&(ge.viewIndex=c,aoife.next(".moc-real"))});var Re=({text:n})=>{let u=Be(n,!0);return aoife("div",{class:"aoife-markdown"},aoife("div",{class:"aoife-markdown-content"},u),aoife("div",{class:"moc"},aoife("div",{class:"moc-real"},aoife("div",{class:"moc-detail",onclick:()=>{ge.detail=!ge.detail,aoife.next(".moc-real")}},()=>ge.detail?"Hidden detail":"Show detail"),u.moc.map(l=>aoife("div",{class:()=>["moc-titel-"+l.index,"moc-level-item","moc-level-"+l.level,!ge.detail&&l.level>2&&"moc-level-none",ge.viewIndex===l.index&&"moc-title-in-page"],onclick:()=>{let h=document.querySelector(l.selector);h&&document.documentElement.scrollTo({top:h.offsetTop-20,behavior:"smooth"})}},l.text)))))};Ee`
  .aoife-markdown {
    display: grid;
    position: relative;
    grid-auto-flow: row;
  }
  .aoife-markdown-content {
    display: grid;
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
      width: 210px;
      font-family: var(--vmdb-fm);
    }
  }

  .aoife-markdown > .moc > .moc-real {
    position: sticky;
    top: 20px;
    left: 0px;
    height: calc(100vh - 40px);
    overflow-y: auto;
    padding-right: 20px;
    font-size: 12px;
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
    padding-left: 24px;
  }
  .aoife-markdown .moc-real .moc-level-3 {
    padding-left: 36px;
    font-size: 10px;
  }
  .aoife-markdown .moc-real .moc-level-4 {
    padding-left: 42px;
    font-size: 10px;
  }
  .aoife-markdown .moc-real .moc-level-5 {
    padding-left: 52px;
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
`;var Te={changeMobileMenuShow:(n,u)=>{n.showMobileMenu=u,aoife.next(".aoife-markdown-page .mobile-menu")}};var Oe=({state:n,title:u,data:c})=>aoife("div",{class:"menu"},aoife("div",{class:"menu-title"},u||"Aofie Document"),aoife("div",{class:"menu-items"},c.map((l,h)=>aoife("div",{class:()=>[n.num===h&&"menu-item-selected","menu-item"],onclick:()=>{Te.changeMobileMenuShow(n,!1),window.location.href="/#/"+h,setTimeout(()=>{document.documentElement.scrollTo({top:0}),n.num=h,aoife.next(".menu-item, .aoife-markdown-page-md")},50)}},l.name))),aoife("div",{class:"menu-footer",onclick:()=>window.open("https://github.com/ymzuiku/aoife-document")},"Powered by Aoife-doc"));Ee`
  .aoife-markdown-page .menu {
    display: grid;
    grid-template-rows: auto 1fr auto;
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
  }
`;var dt='<svg t="1614770422406" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2063" width="1em" height="1em"><path d="M109.714 292.571h804.572c21.943 0 36.571-21.942 36.571-43.885 0-14.629-14.628-29.257-36.571-29.257H109.714c-21.943 0-36.571 14.628-36.571 36.571 0 14.629 14.628 36.571 36.571 36.571zM914.286 512H109.714c-21.943 0-36.571 14.629-36.571 36.571 0 14.629 14.628 36.572 36.571 36.572h804.572c21.943 0 36.571-21.943 36.571-43.886 0-14.628-14.628-29.257-36.571-29.257z m0 292.571H109.714c-21.943 0-36.571 14.629-36.571 36.572s14.628 36.571 36.571 36.571h804.572c21.943 0 36.571-21.943 36.571-36.571 0-21.943-14.628-36.572-36.571-36.572z" p-id="2064"></path></svg>';var ct=({title:n,state:u,markdownState:c,data:l})=>aoife("div",{class:()=>["header js-aoife-markdown-header",c.isScrollDown&&"header-shadow"]},aoife("div",{class:"header-icon",innerHTML:dt,onclick:()=>{Te.changeMobileMenuShow(u,!0)}}),aoife("label",{class:"header-title"},n||"Aofie Document"),aoife("div",{class:()=>["mobile-menu",u.showMobileMenu&&"mobile-show"]},aoife("div",{class:"mobile-plan"},aoife(Oe,{title:n,data:l,state:u})),aoife("div",{class:"mobile-mask",onclick:()=>{Te.changeMobileMenuShow(u,!1)}})));Ee`
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
    grid-template-columns: 1fr minmax(20%, 150px);
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
`;var Ne=({title:n,data:u})=>{console.log(window.location.hash);let c=Number(window.location.hash.replace("#/","")),l={num:isNaN(c)?0:c,showMobileMenu:!1,showPcMenu:!0};return aoife("div",{class:"aoife-markdown-page"},aoife(ct,{data:u,title:n,state:l,markdownState:ge}),aoife("div",{class:"content"},aoife("div",{class:"menu-box"},aoife(Oe,{title:n,state:l,data:u})),aoife("div",{class:"aoife-markdown-page-md"},()=>aoife(Re,{text:u[l.num]&&u[l.num].text}))))};Ee`
  .aoife-markdown-page-md {
    padding: 20px 0px;
  }
  .aoife-markdown-page {
    font-family: var(--vmdb-fm);
    display: grid;
  }
  .aoife-markdown-page .content {
    display: block;
    margin-top: var(--vmdb-header);
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
      margin-top: 0px;
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
`;var Ye=({url:n})=>{fetch(n+"?t="+Date.now()).then(c=>c.json()).then(c=>{let l=c.files.map(h=>(/\.md$/.test(h)||(h+=".md"),fetch(c.path+h+"?version="+c.version||"0.0.0").then(T=>T.text())));Promise.all(l).then(h=>{let T=[];h.forEach((b,_)=>{T.push({name:c.files[_],text:b})}),u.innerHTML="",c.list=T,u.append(aoife(Ne,{data:T,...c}))})});let u=aoife("div",null,"Loading...");return u};He(window.aoifeMarkdownTheme||"gitbook");window.MarkdownBook=Ye;export{Re as Markdown,Ye as MarkdownBook,Ne as MarkdownPage,Be as render,He as usePrismTheme};
