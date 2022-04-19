var e=Object.assign;function t(){let e,t=this.parentNode,n=arguments.length;if(t)for(n||t.removeChild(this);n--;)e=arguments[n],"object"!=typeof e?e=this.ownerDocument.createTextNode(e):e.parentNode&&e.parentNode.removeChild(e),n?t.insertBefore(e,this.nextSibling):t.replaceChild(e,this)}function n(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let a,r,i;if(Array.isArray(e)){if(a=e.length,a!=t.length)return!1;for(r=a;0!=r--;)if(!n(e[r],t[r]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(r of e.entries())if(!t.has(r[0]))return!1;for(r of e.entries())if(!n(r[1],t.get(r[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(r of e.entries())if(!t.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(a=e.length,a!=t.length)return!1;for(r=a;0!=r--;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),a=i.length,a!==Object.keys(t).length)return!1;for(r=a;0!=r--;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=a;0!=r--;){let a=i[r];if(!n(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}void 0===HTMLElement.prototype.append&&(Element.prototype.append=function(...e){e.forEach((e=>{this.prototype.appendChild(e)}))}),void 0===HTMLElement.prototype.remove&&(Element.prototype.remove=function(){this.prototype.parentNode&&this.prototype.parentNode.removeChild(this)}),Element.prototype.replaceWith||(Element.prototype.replaceWith=t),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=t),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=t);const a=new Set;function r(e){let t=[];if(e)if("string"==typeof e){let n="";const a=e.split(", ");a.forEach(((e,t)=>{e=e.trim(),t===a.length-1?n+=`${e}[aoife-next], ${e} [aoife-next]`:n+=`${e}[aoife-next], ${e} [aoife-next],`})),t=document.body.querySelectorAll(n)}else"[object Array]"===Object.prototype.toString.call(e)?(t=[...e],e.forEach((e=>{t.push(...e.querySelectorAll("*"))}))):(t=[e],t.push(...e.querySelectorAll("*")));return t}const i=(e,t,n)=>{e.__next||(e.setAttribute("aoife-next",""),e.__next=new Map),e.__next.set(t,n)};function o(e,t=500){let n=null;return function(...a){const r=this;n?(clearTimeout(n),n=null):e.apply(r,a),n=setTimeout((function(){n=null}),t)}}function s(e,t=500){let n=0;return function(...a){const r=this,i=Date.now();(n<1||i-n>t)&&(n=i,e.apply(r,a))}}const l={autofocus:!0,role:!0,viewBox:!0,flavor:!0,"flavor-ignore":!0},u={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};function d(e,t){return"function"==typeof t?Promise.resolve(t(e)):t}function c(e,t,n){let a,r=n[t];return n.debounce&&"function"==typeof r&&n.debounce.indexOf(t)>-1?r=o(r,n.debounceTime):n.throttle&&"function"==typeof r&&n.throttle.indexOf(t)>-1&&(r=s(r,n.throttleTime)),/^on/.test(t)?(e[t]=r,null):/^listen/.test(t)?(e.addEventListener(t.replace("listen",""),r),null):(a=e.__isSvg||l[t]||/-/.test(t)?async()=>{const n=await d(e,r);e.getAttribute(t)!==n&&(!1===n?e.removeAttribute(t):e.setAttribute(t,n))}:"style"===t?async()=>{const t=await d(e,r);t&&("string"!=typeof t?Object.keys(t).forEach((n=>{if(/-/.test(n))e.style.setProperty(n,t[n]);else{let a=t[n];"number"!=typeof a||u[n]||(a+="px"),e.style[n]=a}})):e.style.cssText=t)}:"className"===t?async()=>{let t=await d(e,r);Array.isArray(t)&&(t=t.join(" ")),e.className!==t&&(e.className=t)}:async()=>{const n=await d(e,r);e[t]!==n&&(e[t]=n)},a(),"function"!=typeof r?null:a)}const p={};function g(e){const t=Object.prototype.toString.call(e);if("[object String]"===t||"[object Number]"===t)return!0}function m(e){return Object.prototype.toString.call(e).indexOf("lement")>0}function f(e,t){e.isEqualNode(t)||e.replaceWith(t)}function h(e,t=5e3){const n=Date.now();return new Promise(((a,r)=>{const i=()=>{const o=e();o?a(o):n+t>Date.now()?window.requestAnimationFrame?window.requestAnimationFrame(i):setTimeout(i,20):r("waitValue is timeout: \n"+e.toString())};i()}))}function b(e,t=5e3){let n;return n="string"==typeof e?()=>document.querySelector(e):()=>{if(document.body.contains(e))return e},h(n,t)}const D=[],E={svg:!0,rect:!0,circle:!0,ellipse:!0,line:!0,polyline:!0,polygon:!0,path:!0,animate:!0,animateColor:!0,animateMotion:!0,animateTransform:!0,clipPath:!0,"color-profile":!0,"definition-src":!0,defs:!0,desc:!0,filter:!0,font:!0,"font-face":!0,"font-face-format":!0,"font-face-name":!0,"font-face-src":!0,"font-face-uri":!0,g:!0,glyph:!0,hkern:!0,linearGradient:!0,marker:!0,mask:!0,view:!0},v={class:1,className:1,onsubmit:1,oncreate:1,onappend:1,child:1,children:1,length:1,memo:1,__memo:1,__memoLast:1,__memoSeted:1,__proxy:1,__proxyEle:1},A=["className"],k=(e,t,...n)=>{let a,r={};if(t&&("function"==typeof t||g(t)||m(t)?n=[t,...n]:Array.isArray(t)?n=[...t,...n]:r=t),n=(e=>{let t=[];return e.forEach((e=>{Array.isArray(e)?t=t.concat(e):t.push(e)})),t})(n),r.children&&r.children.length||(r.children=[...n]),r.class&&(r.className=r.class,delete r.class),Array.isArray(e))return k(...e);if("function"==typeof e){if(a=e(r),a&&"function"==typeof a.then){const e=document.createElement("span");return e.setAttribute("promise-span",""),a.then((t=>{e.replaceWith(t)})),e}return a}if("string"==typeof e)if("template"===e&&r.children){let e="";r.children.forEach((t=>{"string"!=typeof t&&"number"!=typeof t||(e+=t)})),a=document.createElement("template"),a.innerHTML=e}else{if(p[e])return a=function(e,t=[],{ref:n,loading:a,defaultKey:r="default"}={}){return a||(a=document.createElement("input")),Promise.resolve(e(...t)).then((e=>{const i=e[r];i&&(e=i(...t)),"function"==typeof e&&(e=e(...t)),n&&n(e),a&&a.replaceWith(e)})),a}(p[e],[r,...n]),a;E[e]?(a=document.createElementNS("http://www.w3.org/2000/svg",e),a.__isSvg=!0):a=document.createElement(e)}else m(e)&&(a=e);return r.memo&&(a.__memo=r.memo,a.__memoSeted=1,Promise.resolve(r.memo()).then((e=>{a.__memoLast=e}))),r.onsubmit&&(a.onsubmit=e=>{e.preventDefault(),r.onsubmit&&r.onsubmit(e)}),"string"==typeof r.debounce&&(r.debounce=[r.debounce]),"string"==typeof r.throttle&&(r.throttle=[r.throttle]),A.forEach((e=>{if(r[e]){const t=c(a,e,r);t&&i(a,e,t)}})),Object.keys(r).forEach((e=>{if(v[e])return;const t=c(a,e,r);t&&i(a,e,t)})),function(e,t){if(!Array.isArray(e))return;e.filter((e=>null!=e)).forEach(((e,n)=>{if(g(e)){const a=document.createTextNode(e);a.key=n,t.append(a)}else if("function"==typeof e){const a=document.createTextNode("");t.append(a);const r=async()=>{const r=await Promise.resolve(e());if(g(r)){const e=document.createTextNode(r);e.key=n;let i=!1;return t.childNodes.forEach((t=>{if(t.key===e.key){if(t.textContent===e.textContent)return void(i=!0);f(t,e),i=!0}})),i||t.insertBefore(e,a),n}if(Array.isArray(r)){const e={},i={};r.forEach(((e,t)=>{e.___forList=n,e.key||(e.key=`fn(${n})-list(${t})`),i[e.key]=e}));const o=[];return t.childNodes.forEach((t=>{t.___forList===n&&(i[t.key]?e[t.key]=t:o.push(t))})),o.forEach((e=>{e.remove()})),r.forEach((n=>{const r=e[n.key];r?r.isEqualNode(n)||f(r,n):!1!==n&&t.insertBefore(n,a)})),"for-list-"+n}if(r){r.key||(r.key=n);let e=!1;return t.childNodes.forEach((t=>{t.key===r.key&&(f(t,r),e=!0)})),e||t.insertBefore(r,a),r.key}};r(),i(t,"children",r)}else if(m(e))t.append(e);else if(!1!==e)if("[object Array]"===Object.prototype.toString.call(e)){const n=[];for(let t=0;t<e.length;t++){const a=e[t];!1!==a&&n.push(a)}t.append(...n)}else t.appendChild(e)}))}(r.children,a),"function"==typeof r.oncreate&&r.oncreate(a),"function"==typeof r.onappend&&b(a).then(r.onappend),D.length&&D.forEach((e=>{e(a,r)})),a};k.jsxFrag=e=>e&&e.children?k("span",{style:{all:"unset"}},...e.children):"",k.waitAppend=b,k.subscribe=e=>(a.add(e),()=>{a.delete(e)}),k.next=(e,t)=>{if(!e)return void console.error("aoife.next() need target");const i=r(t),o=r(e),s=[],l=o.length;for(let a=0;a<l;a++){const e=o[a];if(e.__next&&document.body.contains(e)){if(i.length){const t=i.length;let n=!1;for(let a=0;a<t;a++){const t=i[a];if(t===e||t.contains(e)){n=!0;break}}if(n)continue}e.__memo?Promise.resolve(e.__memo()).then((t=>{const a=!n(e.__memoLast,t);e.__memoLast=t,a&&e.__next.forEach((e=>{e()}))})):e.__next.forEach((e=>{e()})),s.push(e)}}return a.forEach((e=>e())),s},k.registerTag=function(e){Object.keys(e).forEach((t=>{p[t]=e[t]}))},k.waitValue=h,k.memo=e=>{const t={fixed:0,data:null,value:null},a=async()=>{const a=await Promise.resolve(e());if(!t.fixed)return t.fixed=1,t.data=a,!0;const r=n(t.data,a);return t.data=a,!r};return a(),e=>async()=>(await Promise.resolve(a())&&(t.value=await Promise.resolve(e())),t.value)},k.deepEqual=n,k.debounce=o,k.throttle=s,k.attributeKeys=l,k.use=e=>{D.push(e)},window.aoife=k;var w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function x(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function y(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})})),t}function F(e){var t={exports:{}};return e(t,t.exports),t.exports}function C(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.')}var S,_,T=F((function(e,t){e.exports=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}function n(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=n(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function i(e){var t={exports:{}};return e(t,t.exports),t.exports}var o=i((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}function n(t){e.exports.defaults=t}e.exports={defaults:t(),getDefaults:t,changeDefaults:n}})),s=/[&<>"']/,l=/[&<>"']/g,u=/[<>"']|&(?!#?\w+;)/,d=/[<>"']|&(?!#?\w+;)/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p=function(e){return c[e]};function g(e,t){if(t){if(s.test(e))return e.replace(l,p)}else if(u.test(e))return e.replace(d,p);return e}var m=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function f(e){return e.replace(m,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var h=/(^|[^\[])\^/g;function b(e,t){e=e.source||e,t=t||"";var n={replace:function(t,a){return a=(a=a.source||a).replace(h,"$1"),e=e.replace(t,a),n},getRegex:function(){return new RegExp(e,t)}};return n}var D=/[^\w:]/g,E=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function v(e,t,n){if(e){var a;try{a=decodeURIComponent(f(n)).replace(D,"").toLowerCase()}catch(_){return null}if(0===a.indexOf("javascript:")||0===a.indexOf("vbscript:")||0===a.indexOf("data:"))return null}t&&!E.test(n)&&(n=y(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(_){return null}return n}var A={},k=/^[^:]+:\/*[^/]*$/,w=/^([^:]+:)[\s\S]*$/,x=/^([^:]+:\/*[^/]*)[\s\S]*$/;function y(e,t){A[" "+e]||(k.test(e)?A[" "+e]=e+"/":A[" "+e]=S(e,"/",!0));var n=-1===(e=A[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(w,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(x,"$1")+t:e+t}function F(e){for(var t,n,a=1;a<arguments.length;a++)for(n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function C(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var a=!1,r=t;--r>=0&&"\\"===n[r];)a=!a;return a?"|":" |"})).split(/ \|/),a=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;a<n.length;a++)n[a]=n[a].trim().replace(/\\\|/g,"|");return n}function S(e,t,n){var a=e.length;if(0===a)return"";for(var r=0;r<a;){var i=e.charAt(a-r-1);if(i!==t||n){if(i===t||!n)break;r++}else r++}return e.substr(0,a-r)}function T(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,a=0,r=0;r<n;r++)if("\\"===e[r])r++;else if(e[r]===t[0])a++;else if(e[r]===t[1]&&--a<0)return r;return-1}function $(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function R(e,t){if(t<1)return"";for(var n="";t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}var I={escape:g,unescape:f,edit:b,cleanUrl:v,resolveUrl:y,noopTest:{exec:function(){}},merge:F,splitCells:C,rtrim:S,findClosingBracket:T,checkSanitizeDeprecation:$,repeatString:R},B=o.defaults,O=I.rtrim,N=I.splitCells,L=I.escape,z=I.findClosingBracket;function P(e,t,n){var a=t.href,r=t.title?L(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:a,title:r,text:i}:{type:"image",raw:n,href:a,title:r,text:L(i)}}function M(e,t){var n=e.match(/^(\s+)(?:```)/);if(null===n)return t;var a=n[1];return t.split("\n").map((function(e){var t=e.match(/^\s+/);return null===t?e:t[0].length>=a.length?e.slice(a.length):e})).join("\n")}var U=function(){function e(e){this.options=e||B}var t=e.prototype;return t.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}},t.code=function(e){var t=this.rules.block.code.exec(e);if(t){var n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:O(n,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],a=M(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:a}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t){var n=t[2].trim();if(/#$/.test(n)){var a=O(n,"#");this.options.pedantic?n=a.trim():a&&!/ $/.test(a)||(n=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n}}},t.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var n={type:"table",header:N(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(n.header.length===n.align.length){var a,r=n.align.length;for(a=0;a<r;a++)/^ *-+: *$/.test(n.align[a])?n.align[a]="right":/^ *:-+: *$/.test(n.align[a])?n.align[a]="center":/^ *:-+ *$/.test(n.align[a])?n.align[a]="left":n.align[a]=null;for(r=n.cells.length,a=0;a<r;a++)n.cells[a]=N(n.cells[a],n.header.length);return n}}},t.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var n=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:n}}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){var n,a,r,i,o,s,l,u,d,c=t[0],p=t[2],g=p.length>1,m={type:"list",raw:c,ordered:g,start:g?+p.slice(0,-1):"",loose:!1,items:[]},f=t[0].match(this.rules.block.item),h=!1,b=f.length;r=this.rules.block.listItemStart.exec(f[0]);for(var D=0;D<b;D++){if(c=n=f[D],this.options.pedantic||(d=n.match(new RegExp("\\n\\s*\\n {0,"+(r[0].length-1)+"}\\S")))&&(o=n.length-d.index+f.slice(D+1).join("\n").length,m.raw=m.raw.substring(0,m.raw.length-o),c=n=n.substring(0,d.index),b=D+1),D!==b-1){if(i=this.rules.block.listItemStart.exec(f[D+1]),this.options.pedantic?i[1].length>r[1].length:i[1].length>=r[0].length||i[1].length>3){f.splice(D,2,f[D]+(!this.options.pedantic&&i[1].length<r[0].length&&!f[D].match(/\n$/)?"":"\n")+f[D+1]),D--,b--;continue}(!this.options.pedantic||this.options.smartLists?i[2][i[2].length-1]!==p[p.length-1]:g===(1===i[2].length))&&(o=f.slice(D+1).join("\n").length,m.raw=m.raw.substring(0,m.raw.length-o),D=b-1),r=i}a=n.length,~(n=n.replace(/^ *([*+-]|\d+[.)]) ?/,"")).indexOf("\n ")&&(a-=n.length,n=this.options.pedantic?n.replace(/^ {1,4}/gm,""):n.replace(new RegExp("^ {1,"+a+"}","gm"),"")),n=O(n,"\n"),D!==b-1&&(c+="\n"),s=h||/\n\n(?!\s*$)/.test(c),D!==b-1&&(h="\n\n"===c.slice(-2),s||(s=h)),s&&(m.loose=!0),this.options.gfm&&(u=void 0,(l=/^\[[ xX]\] /.test(n))&&(u=" "!==n[1],n=n.replace(/^\[[ xX]\] +/,""))),m.items.push({type:"list_item",raw:c,task:l,checked:u,loose:s,text:n})}return m}},t.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):L(t[0]):t[0]}},t.def=function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},t.table=function(e){var t=this.rules.block.table.exec(e);if(t){var n={type:"table",header:N(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(n.header.length===n.align.length){n.raw=t[0];var a,r=n.align.length;for(a=0;a<r;a++)/^ *-+: *$/.test(n.align[a])?n.align[a]="right":/^ *:-+: *$/.test(n.align[a])?n.align[a]="center":/^ *:-+ *$/.test(n.align[a])?n.align[a]="left":n.align[a]=null;for(r=n.cells.length,a=0;a<r;a++)n.cells[a]=N(n.cells[a].replace(/^ *\| *| *\| *$/g,""),n.header.length);return n}}},t.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}},t.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}},t.text=function(e){var t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0]}},t.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:L(t[1])}},t.tag=function(e,t,n){var a=this.rules.inline.tag.exec(e);if(a)return!t&&/^<a /i.test(a[0])?t=!0:t&&/^<\/a>/i.test(a[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:a[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):L(a[0]):a[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;var a=O(n.slice(0,-1),"\\");if((n.length-a.length)%2==0)return}else{var r=z(t[2],"()");if(r>-1){var i=(0===t[0].indexOf("!")?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,i).trim(),t[3]=""}}var o=t[2],s="";if(this.options.pedantic){var l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],s=l[3])}else s=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(o=this.options.pedantic&&!/>$/.test(n)?o.slice(1):o.slice(1,-1)),P(t,{href:o?o.replace(this.rules.inline._escapes,"$1"):o,title:s?s.replace(this.rules.inline._escapes,"$1"):s},t[0])}},t.reflink=function(e,t){var n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var a=(n[2]||n[1]).replace(/\s+/g," ");if(!(a=t[a.toLowerCase()])||!a.href){var r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return P(n,a,n[0])}},t.emStrong=function(e,t,n){void 0===n&&(n="");var a=this.rules.inline.emStrong.lDelim.exec(e);if(a&&(!a[3]||!n.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var r=a[1]||a[2]||"";if(!r||r&&(""===n||this.rules.inline.punctuation.exec(n))){var i,o,s=a[0].length-1,l=s,u=0,d="*"===a[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+s);null!=(a=d.exec(t));)if(i=a[1]||a[2]||a[3]||a[4]||a[5]||a[6])if(o=i.length,a[3]||a[4])l+=o;else if(!((a[5]||a[6])&&s%3)||(s+o)%3){if(!((l-=o)>0)){if(l+u-o<=0&&!t.slice(d.lastIndex).match(d)&&(o=Math.min(o,o+l+u)),Math.min(s,o)%2)return{type:"em",raw:e.slice(0,s+a.index+o+1),text:e.slice(1,s+a.index+o)};if(Math.min(s,o)%2==0)return{type:"strong",raw:e.slice(0,s+a.index+o+1),text:e.slice(2,s+a.index+o-1)}}}else u+=o}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),a=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return a&&r&&(n=n.substring(1,n.length-1)),n=L(n,!0),{type:"codespan",raw:t[0],text:n}}},t.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}},t.autolink=function(e,t){var n,a,r=this.rules.inline.autolink.exec(e);if(r)return a="@"===r[2]?"mailto:"+(n=L(this.options.mangle?t(r[1]):r[1])):n=L(r[1]),{type:"link",raw:r[0],text:n,href:a,tokens:[{type:"text",raw:n,text:n}]}},t.url=function(e,t){var n;if(n=this.rules.inline.url.exec(e)){var a,r;if("@"===n[2])r="mailto:"+(a=L(this.options.mangle?t(n[0]):n[0]));else{var i;do{i=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(i!==n[0]);a=L(n[0]),r="www."===n[1]?"http://"+a:a}return{type:"link",raw:n[0],text:a,href:r,tokens:[{type:"text",raw:a,text:a}]}}},t.inlineText=function(e,t,n){var a,r=this.rules.inline.text.exec(e);if(r)return a=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):L(r[0]):r[0]:L(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:a}},e}(),j=I.noopTest,G=I.edit,H=I.merge,q={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:j,table:j,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};q.def=G(q.def).replace("label",q._label).replace("title",q._title).getRegex(),q.bullet=/(?:[*+-]|\d{1,9}[.)])/,q.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,q.item=G(q.item,"gm").replace(/bull/g,q.bullet).getRegex(),q.listItemStart=G(/^( *)(bull) */).replace("bull",q.bullet).getRegex(),q.list=G(q.list).replace(/bull/g,q.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+q.def.source+")").getRegex(),q._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",q._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,q.html=G(q.html,"i").replace("comment",q._comment).replace("tag",q._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),q.paragraph=G(q._paragraph).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",q._tag).getRegex(),q.blockquote=G(q.blockquote).replace("paragraph",q.paragraph).getRegex(),q.normal=H({},q),q.gfm=H({},q.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),q.gfm.nptable=G(q.gfm.nptable).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",q._tag).getRegex(),q.gfm.table=G(q.gfm.table).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",q._tag).getRegex(),q.pedantic=H({},q.normal,{html:G("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",q._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:j,paragraph:G(q.normal._paragraph).replace("hr",q.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",q.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var Z={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:j,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_]*?\*[^_]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^*]*?\_[^*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:j,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};Z.punctuation=G(Z.punctuation).replace(/punctuation/g,Z._punctuation).getRegex(),Z.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,Z.escapedEmSt=/\\\*|\\_/g,Z._comment=G(q._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),Z.emStrong.lDelim=G(Z.emStrong.lDelim).replace(/punct/g,Z._punctuation).getRegex(),Z.emStrong.rDelimAst=G(Z.emStrong.rDelimAst,"g").replace(/punct/g,Z._punctuation).getRegex(),Z.emStrong.rDelimUnd=G(Z.emStrong.rDelimUnd,"g").replace(/punct/g,Z._punctuation).getRegex(),Z._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Z._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Z._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Z.autolink=G(Z.autolink).replace("scheme",Z._scheme).replace("email",Z._email).getRegex(),Z._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Z.tag=G(Z.tag).replace("comment",Z._comment).replace("attribute",Z._attribute).getRegex(),Z._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Z._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Z._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Z.link=G(Z.link).replace("label",Z._label).replace("href",Z._href).replace("title",Z._title).getRegex(),Z.reflink=G(Z.reflink).replace("label",Z._label).getRegex(),Z.reflinkSearch=G(Z.reflinkSearch,"g").replace("reflink",Z.reflink).replace("nolink",Z.nolink).getRegex(),Z.normal=H({},Z),Z.pedantic=H({},Z.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:G(/^!?\[(label)\]\((.*?)\)/).replace("label",Z._label).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Z._label).getRegex()}),Z.gfm=H({},Z.normal,{escape:G(Z.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),Z.gfm.url=G(Z.gfm.url,"i").replace("email",Z.gfm._extended_email).getRegex(),Z.breaks=H({},Z.gfm,{br:G(Z.br).replace("{2,}","*").getRegex(),text:G(Z.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var V={block:q,inline:Z},W=o.defaults,Y=V.block,X=V.inline,K=I.repeatString;function Q(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function J(e){var t,n,a="",r=e.length;for(t=0;t<r;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),a+="&#"+n+";";return a}var ee=function(){function e(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||W,this.options.tokenizer=this.options.tokenizer||new U,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var t={block:Y.normal,inline:X.normal};this.options.pedantic?(t.block=Y.pedantic,t.inline=X.pedantic):this.options.gfm&&(t.block=Y.gfm,this.options.breaks?t.inline=X.breaks:t.inline=X.gfm),this.tokenizer.rules=t}e.lex=function(t,n){return new e(n).lex(t)},e.lexInline=function(t,n){return new e(n).inlineTokens(t)};var n=e.prototype;return n.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},n.blockTokens=function(e,t,n){var a,r,i,o;for(void 0===t&&(t=[]),void 0===n&&(n=!0),this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(a=this.tokenizer.space(e))e=e.substring(a.raw.length),a.type&&t.push(a);else if(a=this.tokenizer.code(e))e=e.substring(a.raw.length),(o=t[t.length-1])&&"paragraph"===o.type?(o.raw+="\n"+a.raw,o.text+="\n"+a.text):t.push(a);else if(a=this.tokenizer.fences(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.heading(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.nptable(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.hr(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.blockquote(e))e=e.substring(a.raw.length),a.tokens=this.blockTokens(a.text,[],n),t.push(a);else if(a=this.tokenizer.list(e)){for(e=e.substring(a.raw.length),i=a.items.length,r=0;r<i;r++)a.items[r].tokens=this.blockTokens(a.items[r].text,[],!1);t.push(a)}else if(a=this.tokenizer.html(e))e=e.substring(a.raw.length),t.push(a);else if(n&&(a=this.tokenizer.def(e)))e=e.substring(a.raw.length),this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});else if(a=this.tokenizer.table(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.lheading(e))e=e.substring(a.raw.length),t.push(a);else if(n&&(a=this.tokenizer.paragraph(e)))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.text(e))e=e.substring(a.raw.length),(o=t[t.length-1])&&"text"===o.type?(o.raw+="\n"+a.raw,o.text+="\n"+a.text):t.push(a);else if(e){var s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}throw new Error(s)}return t},n.inline=function(e){var t,n,a,r,i,o,s=e.length;for(t=0;t<s;t++)switch((o=e[t]).type){case"paragraph":case"text":case"heading":o.tokens=[],this.inlineTokens(o.text,o.tokens);break;case"table":for(o.tokens={header:[],cells:[]},r=o.header.length,n=0;n<r;n++)o.tokens.header[n]=[],this.inlineTokens(o.header[n],o.tokens.header[n]);for(r=o.cells.length,n=0;n<r;n++)for(i=o.cells[n],o.tokens.cells[n]=[],a=0;a<i.length;a++)o.tokens.cells[n][a]=[],this.inlineTokens(i[a],o.tokens.cells[n][a]);break;case"blockquote":this.inline(o.tokens);break;case"list":for(r=o.items.length,n=0;n<r;n++)this.inline(o.items[n].tokens)}return e},n.inlineTokens=function(e,t,n,a){var r,i;void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===a&&(a=!1);var o,s,l,u=e;if(this.tokens.links){var d=Object.keys(this.tokens.links);if(d.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(u));)d.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(u=u.slice(0,o.index)+"["+K("a",o[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(u));)u=u.slice(0,o.index)+"["+K("a",o[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(o=this.tokenizer.rules.inline.escapedEmSt.exec(u));)u=u.slice(0,o.index)+"++"+u.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(s||(l=""),s=!1,r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e,n,a)){e=e.substring(r.raw.length),n=r.inLink,a=r.inRawBlock;var c=t[t.length-1];c&&"text"===r.type&&"text"===c.type?(c.raw+=r.raw,c.text+=r.text):t.push(r)}else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,a)),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);var p=t[t.length-1];"link"===r.type?(r.tokens=this.inlineTokens(r.text,[],!0,a),t.push(r)):p&&"text"===r.type&&"text"===p.type?(p.raw+=r.raw,p.text+=r.text):t.push(r)}else if(r=this.tokenizer.emStrong(e,u,l))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],n,a),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],n,a),t.push(r);else if(r=this.tokenizer.autolink(e,J))e=e.substring(r.raw.length),t.push(r);else if(n||!(r=this.tokenizer.url(e,J))){if(r=this.tokenizer.inlineText(e,a,Q))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(l=r.raw.slice(-1)),s=!0,(i=t[t.length-1])&&"text"===i.type?(i.raw+=r.raw,i.text+=r.text):t.push(r);else if(e){var g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}throw new Error(g)}}else e=e.substring(r.raw.length),t.push(r);return t},t(e,null,[{key:"rules",get:function(){return{block:Y,inline:X}}}]),e}(),te=o.defaults,ne=I.cleanUrl,ae=I.escape,re=function(){function e(e){this.options=e||te}var t=e.prototype;return t.code=function(e,t,n){var a=(t||"").match(/\S*/)[0];if(this.options.highlight){var r=this.options.highlight(e,a);null!=r&&r!==e&&(n=!0,e=r)}return e=e.replace(/\n$/,"")+"\n",a?'<pre><code class="'+this.options.langPrefix+ae(a,!0)+'">'+(n?e:ae(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:ae(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,a){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+a.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var a=t?"ol":"ul";return"<"+a+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+a+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){if(null===(e=ne(this.options.sanitize,this.options.baseUrl,e)))return n;var a='<a href="'+ae(e)+'"';return t&&(a+=' title="'+t+'"'),a+=">"+n+"</a>"},t.image=function(e,t,n){if(null===(e=ne(this.options.sanitize,this.options.baseUrl,e)))return n;var a='<img src="'+e+'" alt="'+n+'"';return t&&(a+=' title="'+t+'"'),a+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),ie=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),oe=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var n=e,a=0;if(this.seen.hasOwnProperty(n)){a=this.seen[e];do{n=e+"-"+ ++a}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=a,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={});var n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)},e}(),se=o.defaults,le=I.unescape,ue=function(){function e(e){this.options=e||se,this.options.renderer=this.options.renderer||new re,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ie,this.slugger=new oe}e.parse=function(t,n){return new e(n).parse(t)},e.parseInline=function(t,n){return new e(n).parseInline(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);var n,a,r,i,o,s,l,u,d,c,p,g,m,f,h,b,D,E,v="",A=e.length;for(n=0;n<A;n++)switch((c=e[n]).type){case"space":continue;case"hr":v+=this.renderer.hr();continue;case"heading":v+=this.renderer.heading(this.parseInline(c.tokens),c.depth,le(this.parseInline(c.tokens,this.textRenderer)),this.slugger);continue;case"code":v+=this.renderer.code(c.text,c.lang,c.escaped);continue;case"table":for(u="",l="",i=c.header.length,a=0;a<i;a++)l+=this.renderer.tablecell(this.parseInline(c.tokens.header[a]),{header:!0,align:c.align[a]});for(u+=this.renderer.tablerow(l),d="",i=c.cells.length,a=0;a<i;a++){for(l="",o=(s=c.tokens.cells[a]).length,r=0;r<o;r++)l+=this.renderer.tablecell(this.parseInline(s[r]),{header:!1,align:c.align[r]});d+=this.renderer.tablerow(l)}v+=this.renderer.table(u,d);continue;case"blockquote":d=this.parse(c.tokens),v+=this.renderer.blockquote(d);continue;case"list":for(p=c.ordered,g=c.start,m=c.loose,i=c.items.length,d="",a=0;a<i;a++)b=(h=c.items[a]).checked,D=h.task,f="",h.task&&(E=this.renderer.checkbox(b),m?h.tokens.length>0&&"text"===h.tokens[0].type?(h.tokens[0].text=E+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&"text"===h.tokens[0].tokens[0].type&&(h.tokens[0].tokens[0].text=E+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:E}):f+=E),f+=this.parse(h.tokens,m),d+=this.renderer.listitem(f,D,b);v+=this.renderer.list(d,p,g);continue;case"html":v+=this.renderer.html(c.text);continue;case"paragraph":v+=this.renderer.paragraph(this.parseInline(c.tokens));continue;case"text":for(d=c.tokens?this.parseInline(c.tokens):c.text;n+1<A&&"text"===e[n+1].type;)d+="\n"+((c=e[++n]).tokens?this.parseInline(c.tokens):c.text);v+=t?this.renderer.paragraph(d):d;continue;default:var k='Token with "'+c.type+'" type was not found.';if(this.options.silent)return void console.error(k);throw new Error(k)}return v},t.parseInline=function(e,t){t=t||this.renderer;var n,a,r="",i=e.length;for(n=0;n<i;n++)switch((a=e[n]).type){case"escape":r+=t.text(a.text);break;case"html":r+=t.html(a.text);break;case"link":r+=t.link(a.href,a.title,this.parseInline(a.tokens,t));break;case"image":r+=t.image(a.href,a.title,a.text);break;case"strong":r+=t.strong(this.parseInline(a.tokens,t));break;case"em":r+=t.em(this.parseInline(a.tokens,t));break;case"codespan":r+=t.codespan(a.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(a.tokens,t));break;case"text":r+=t.text(a.text);break;default:var o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return void console.error(o);throw new Error(o)}return r},e}(),de=I.merge,ce=I.checkSanitizeDeprecation,pe=I.escape,ge=o.getDefaults,me=o.changeDefaults,fe=o.defaults;function he(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),t=de({},he.defaults,t||{}),ce(t),n){var a,r=t.highlight;try{a=ee.lex(e,t)}catch(_){return n(_)}var i=function(e){var i;if(!e)try{i=ue.parse(a,t)}catch(_){e=_}return t.highlight=r,e?n(e):n(null,i)};if(!r||r.length<3)return i();if(delete t.highlight,!a.length)return i();var o=0;return he.walkTokens(a,(function(e){"code"===e.type&&(o++,setTimeout((function(){r(e.text,e.lang,(function(t,n){if(t)return i(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),0==--o&&i()}))}),0))})),void(0===o&&i())}try{var s=ee.lex(e,t);return t.walkTokens&&he.walkTokens(s,t.walkTokens),ue.parse(s,t)}catch(_){if(_.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+pe(_.message+"",!0)+"</pre>";throw _}}return he.options=he.setOptions=function(e){return de(he.defaults,e),me(he.defaults),he},he.getDefaults=ge,he.defaults=fe,he.use=function(e){var t=de({},e);if(e.renderer&&function(){var n=he.defaults.renderer||new re,a=function(t){var a=n[t];n[t]=function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=e.renderer[t].apply(n,i);return!1===s&&(s=a.apply(n,i)),s}};for(var r in e.renderer)a(r);t.renderer=n}(),e.tokenizer&&function(){var n=he.defaults.tokenizer||new U,a=function(t){var a=n[t];n[t]=function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=e.tokenizer[t].apply(n,i);return!1===s&&(s=a.apply(n,i)),s}};for(var r in e.tokenizer)a(r);t.tokenizer=n}(),e.walkTokens){var n=he.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens(t),n&&n(t)}}he.setOptions(t)},he.walkTokens=function(e,t){for(var n,a=r(e);!(n=a()).done;){var i=n.value;switch(t(i),i.type){case"table":for(var o,s=r(i.tokens.header);!(o=s()).done;){var l=o.value;he.walkTokens(l,t)}for(var u,d=r(i.tokens.cells);!(u=d()).done;)for(var c,p=r(u.value);!(c=p()).done;){var g=c.value;he.walkTokens(g,t)}break;case"list":he.walkTokens(i.items,t);break;default:i.tokens&&he.walkTokens(i.tokens,t)}}},he.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=de({},he.defaults,t||{}),ce(t);try{var n=ee.lexInline(e,t);return t.walkTokens&&he.walkTokens(n,t.walkTokens),ue.parseInline(n,t)}catch(_){if(_.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+pe(_.message+"",!0)+"</pre>";throw _}},he.Parser=ue,he.parser=ue.parse,he.Renderer=re,he.TextRenderer=ie,he.Lexer=ee,he.lexer=ee.lex,he.Tokenizer=U,he.Slugger=oe,he.parse=he,he}()})),$=Object.create,R=Object.defineProperty,I=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty,O=Object.getOwnPropertyNames,N=Object.getOwnPropertyDescriptor,L=(e=>e&&e.__esModule?e:((e,t,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of O(t))!B.call(e,a)&&"default"!==a&&R(e,a,{get:()=>t[a],enumerable:!(n=N(t,a))||n.enumerable});return e})((e=>R(e,"__esModule",{value:!0}))(R(null!=e?$(I(e)):{},"default",{value:e,enumerable:!0})),e))((S=(e,t)=>{var n,a;n=e,a=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(1<e.length){var n=e[0],a=e.slice(1),r="";return n.forEach((function(e,t){r+=e,a[t]&&(r+=a[t])})),r}return"string"==typeof e[0]?e[0]:e[0]?e[0].join(""):""}},"object"==typeof e&&void 0!==t?t.exports=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(1<e.length){var n=e[0],a=e.slice(1),r="";return n.forEach((function(e,t){r+=e,a[t]&&(r+=a[t])})),r}return"string"==typeof e[0]?e[0]:e[0]?e[0].join(""):""}:"function"==typeof define&&define.amd?define(a):(n=n||self).templateFn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(1<e.length){var n=e[0],a=e.slice(1),r="";return n.forEach((function(e,t){r+=e,a[t]&&(r+=a[t])})),r}return"string"==typeof e[0]?e[0]:e[0]?e[0].join(""):""}},()=>(_||S((_={exports:{}}).exports,_),_.exports))()),z={};var P=function(...e){let t=L.default(...e);if(z[t])return;z[t]=!0;let n=document.createElement("style");n.innerHTML=t,document.head.append(n)};let M="";[["white","255,255,255"],["black","0,0,0"]].forEach((function(e){const[t,n]=e;M+=`--${t}-0:rgba(${n},0); --${t}-5:rgba(${n},0.05);`;for(var a=0;a<=99;a+=5)a>5&&(M+=`--${t}-${a}:rgba(${n},0.${a}); `);M+=`--${t}:rgba(${n},1); `})),P`
  :root {
    ${M};
    --bg-weak: #fafbfd;
    --bg: #fff;
    --bg-deep: #dbdbdc;

    --light-weak: #fafbfd;
    --light: #fff;
    --light-deep: #dbdbdc;

    --dark-weak: #5b6169;
    --dark: #333a44;
    --dark-deep: #000;

    --gray-weak: #f8fafc;
    --gray: #eff2f6;
    --gray-deep: #e7ebf1;

    --title-weak: #7f848a;
    --title: #6f757d;
    --title-deep: #3c4246;

    --text-weak: #82878e;
    --text: #6f757d;
    --text-deep: #595f63;

    --label-weak: #b9bec1;
    --label: #9ea8ae;
    --label-deep: #8c969c;

    --primary-weak: #d9dbfd;
    --primary: #747cec;
    --primary-deep: #6269c9;

    --secondary-weak: #cbf3e0;
    --secondary: #5fcc9b;
    --secondary-deep: #50ac83;

    --active-weak: rgba(196, 206, 236, 0.1);
    --active: rgba(196, 206, 236, 0.3);
    --active-deep: rgba(196, 206, 236, 0.5);

    --warn-weak: #fdf1d0;
    --warn: #d4c396;
    --warn-deep: #937224;

    --error-weak: #ffcfcf;
    --error: #ffaeae;
    --error-deep: #cc3f3f;

    --info-weak: #f1f3f9;
    --info: #c0c6d8;
    --info-deep: #6e757c;

    --disable-weak: #dfe1e5;
    --disable: #afb1b5;
    --disable-deep: #677388;

    --vmdb-header: 50px;
    --vmdb-radius: 6px;
    --vmdb-line: #ddeeee;
    --vmdb-menu-width: 240px;
    --vmdb-fm: system-ui, -apple-system, "SF Pro SC", "PingFang SC", "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI", Roboto, "Noto Sans";
  }
  .vmdb pre {
    border-radius: var(--vmdb-radius) !important;
  }
  /* .vmdb pre > code {
    white-space: break-spaces !important;
    word-break: break-all !important;
  } */
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

  .vmdb h1,
  .vmdb h2 {
    color: #000;
    margin: 1.2em 0;
  }

  .vmdb h3,
  .vmdb h4,
  .vmdb h5,
  .vmdb h6 {
    color: #000;
    margin: 0.8em 0;
  }

  .vmdb h1 {
    font-size: 32px;
  }

  .vmdb h1,
  .vmdb h2 {
    font-weight: 600;
  }

  .vmdb h2 {
    font-size: 24px;
  }

  .vmdb h3 {
    font-size: 20px;
  }

  .vmdb h3,
  .vmdb h4 {
    font-weight: 600;
  }

  .vmdb h4 {
    font-size: 16px;
  }

  .vmdb h5 {
    font-size: 14px;
  }

  .vmdb h6 {
    font-size: 12px;
  }

  .vmdb h5,
  .vmdb h6 {
    font-weight: 600;
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

  /* .vmdb > :first-child {
    margin-top: 20px !important;
  } */

  /* 
  .vmdb > :last-child {
    margin-bottom: 0 !important;
  } */

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

  .vmdb pre {
    margin: 1.8em 0px !important;
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
`;const U=new T.Renderer;let j;const G={},H=function(e,t){if(!t)return e();if(void 0===j){const e=document.createElement("link").relList;j=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in G)return;G[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":j,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},q={};var Z=F((function(e,t){!function(e){function t(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return null}}function n(e){try{return encodeURIComponent(e)}catch(t){return null}}function a(e,n){if(!e)return null;for(var a,r=/([^=?&]+)=?([^&]*)/g,i={};a=r.exec(e);){var o=t(a[1]),s=t(a[2]);if(null!==o&&null!==s&&!(o in i))if(n||"string"!=typeof s)i[o]=s;else{var l=Number(s),u=isNaN(l)?s:l;i[o]=s==u.toString()?u:s}}return i}function r(e,t){void 0===t&&(t="");var n,a,r=[];for(a in"string"!=typeof t&&(t="?"),e)if(Object.prototype.hasOwnProperty.call(e,a)){if((n=e[a])||null!=n&&!isNaN(n)||(n=""),a=encodeURIComponent(a),n=encodeURIComponent(n),null===a||null===n)continue;r.push(a+"="+n)}return r.length?t+r.join("&"):""}var i={parse:a,stringify:r,decode:t,encode:n};e.decode=t,e.default=i,e.encode=n,e.parse=a,e.stringify=r,Object.defineProperty(e,"__esModule",{value:!0})}(t)})),V=x(Z);function W(e){const t=function(){if(window.location.hash.length>1){const e=window.location.hash.replace("#/","");return decodeURI(e)}const e=window.location.pathname.replace("/","");return decodeURI(e)}();if(!t)return 0;let n=0;return e.forEach(((e,a)=>{e.name===t&&(n=a)})),n}const Y=(X=[{render:async e=>{await aoife.waitAppend(e),H((()=>Promise.resolve().then((function(){return xe}))),void 0).then((({Prism:e})=>{try{e.highlightAll()}catch(t){console.warn(t)}}))}},{language:"graph",htmlCreator:e=>{const t=q[e];return t?`<div style="opacity: 1; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; border:0.6px solid var(--vmdb-line); border-radius:var(--vmdb-radius); margin:10px 0px;">${t}</div>`:`<div data-code="${e=e.trim()}" style="opacity: 0; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; margin:10px 0px;" class="mermaid">${e}</div>`},render:async e=>{await aoife.waitAppend(e);try{const t=e.querySelectorAll(".mermaid");t&&t.length>0&&((await H((()=>import("./mermaid.core.js").then((function(e){return e.m}))),void 0).then((e=>e.default))).init(t),t.forEach((e=>{const t=e.getAttribute("data-code"),n=e.innerHTML.trim();t&&(q[t]=n)})),t.forEach((e=>{e.style.opacity=1,e.style.minHeight="auto"})))}catch(t){console.warn("[mermaid]: ",t)}}},{language:"video",htmlCreator:e=>`<div id="vid-${Math.random().toString().replace(".","")}" class="md-video videoWrapper" data-code="${Z.encode(e)}" style="border-radius:var(--vmdb-radius); overflow:hidden" ></div>`,render:async t=>{await aoife.waitAppend(t);const n=t.querySelectorAll(".md-video");n&&n.length>0&&H((()=>import("./index2.js").then((function(e){return e.i}))),void 0).then((t=>{const a=t.default;n.forEach((t=>{const n=t.getAttribute("data-code");if(n){const r=function(e){const t=e.split("\n"),n={};return t.forEach((e=>{const[t,...a]=e.split(":").map((e=>e.trim()));n[t]=a.join(":"),"false"===n[t]?n[t]=!1:"true"===n[t]&&(n[t]=!0)})),n}(Z.decode(n));new a(e({id:t.id,autoplay:!1,volume:1,url:n,playsinline:!0,height:400,width:"100%"},r))}}))}))}},{language:"chart",htmlCreator:e=>{let t=Z.encode(e);return`<div id="vid-${Math.random().toString().replace(".","")}" class="md-chart" data-code="${t}" ></div> `},render:async e=>{await aoife.waitAppend(e);const t=e.querySelectorAll(".md-chart");if(t){const e=await H((()=>import("./apexcharts.common.js").then((function(e){return e.a}))),void 0).then((e=>e.default));t.forEach((t=>{const n=t.getAttribute("data-code");if(n)try{const a=JSON.parse(Z.decode(n));new e(t,a).render()}catch(a){console.error(a)}}))}}}],U.code=function(e,t,n){if(e&&t){t=t.trim();for(let n=0;n<X.length;n++){const a=X[n];if(a.language&&a.htmlCreator&&new RegExp(a.language).test(t))return a.htmlCreator(e)}}return`<pre><code class="line-numbers highlight language-${t}">${function(e){let t=document.createElement("div");t.textContent=e;const n=t.innerHTML;return t=null,n}(e)}</code></pre>`},function(e,t){const n=[];if(t){window.vmd_moc_click=e=>{n&&n[e]&&n[e].onClick&&n[e].onClick(n[e].index,n[e].line)};const t=[];e.split("\n").forEach(((e,n)=>("#"===e[0]&&t.push(n),e)));let a=-1;U.heading=(e,r,i,o)=>{a+=1,n.push({selector:".moc-"+a,text:e,raw:i,level:r,index:a,line:t[a]});let s="";return 0===a&&(s='data-moc-first="1"'),`<h${r} ${s} data-moc="${a}" onclick="vmd_moc_click(${a})" class="moc-${a}">${e}</h${r}>`}}const a=document.createElement("div");return a.className="vmdb",a.style.overflowX="hidden",a.style.padding="5px 5% 60px 5%",a.innerHTML=T(e,{renderer:U,xhtml:!0}),a.moc=n,X.forEach((e=>{e.render(a)})),a});var X;const K=navigator.userAgent.toLocaleLowerCase(),Q=/(?:iphone)/.test(K),J=/micromessenger/.test(K),ee={},te=[];function ne(e){const t=document.createElement("span");return t.style.display="none",t.setAttribute("aoife-route",e),t.setAttribute("aoife-route-empty",e),t}function ae(e){return"function"==typeof e?e():V.decode(window.location.pathname)===e}["popstate","pushState","replaceState","backState"].forEach((e=>{window.addEventListener(e,(()=>{le.state=V.parse(location.search),"popstate"!==e&&"backState"!==e||delete ee[ie],te.forEach((e=>e())),"popstate"===e&&oe.pop()}))}));let re=0,ie="";const oe=[],se={},le=({url:e,render:t,preload:n,keep:a})=>{if("function"!=typeof t)throw"AoifeRoute.render need a Function";n||"string"!=typeof e||(se[e]=t),re+=1;const r=""+re,i=()=>{if(n){setTimeout((()=>{t()}),"number"==typeof n?n:50)}const i=ee[e];if("string"==typeof e&&i){const t=document.querySelector(`[aoife-route="${i}"]`);return t.__display||(t.__display=window.getComputedStyle?window.getComputedStyle(t).display:"block"),ae(e)?t.style.display=t.__display:t.style.display="none",t}if(!ae(e))return ne(r);const o=a&&"string"==typeof e,s=t();if(s.then){const t=ne(r);return Promise.resolve(s).then((t=>{if(t.default){const n=document.querySelector(`[aoife-route="${r}"]`);if(!n)return;const a=t.default();a.setAttribute("aoife-route",r),o&&(ee[e]=r),n.replaceWith(a)}})),t}return s.setAttribute("aoife-route",r),o&&(ee[e]=r),s};return te.push((()=>{const e=document.querySelector(`[aoife-route="${r}"]`);if(!e)return;const t=i();t.getAttribute("aoife-route-empty")&&e.getAttribute("aoife-route-empty")||t!==e&&e.replaceWith(t)})),i()};le.onlyReplace=J&&Q,le.preload=e=>{const t=se[e];"function"==typeof t&&(t(),se[e]=!0)},le.state={},le.queryString=V,le.push=(e,t)=>{le.onlyReplace?le.replace(e,t):(oe.push({state:t,url:e}),t&&(e+="?"+V.stringify(t)),window.scrollTo&&window.scrollTo({top:0}),setTimeout((()=>{history.pushState(t,"",e),window.dispatchEvent(new Event("pushState"))})))},le.replace=(e,t)=>{oe.push({state:t,url:e}),t&&(e+="?"+V.stringify(t)),window.scrollTo&&window.scrollTo({top:0}),setTimeout((()=>{history.replaceState(t,"",e),window.dispatchEvent(new Event("replaceState"))}))};const ue=(e=1,t)=>{e<=0?t&&setTimeout((()=>{t()})):(e-=1,(()=>{if(ie=location.pathname,0===oe.length)return history.replaceState({},"","/"),void window.dispatchEvent(new Event("backState"));if(le.onlyReplace){if(oe.pop(),0===oe.length)history.replaceState({},"","/");else{const{state:e,url:t}=oe[oe.length-1];history.replaceState(e,"",t)}window.dispatchEvent(new Event("backState"))}else history.back()})(),setTimeout((()=>{ue(e,t)})))};le.back=(e=1)=>new Promise((t=>{ue(e,t)})),le.rootURL="/";const de={viewIndex:0,detail:!1,isScrollDown:!1};window.addEventListener("scroll",(e=>{const t=document.body.querySelectorAll(".aoife-markdown h1[data-moc], .aoife-markdown h2[data-moc]");let n=9999;t.forEach((e=>{if(e.getBoundingClientRect().bottom>-50){const t=Number(e.getAttribute("data-moc"));t<n&&(n=t)}})),document.documentElement.scrollTop>100&&!1===de.isScrollDown&&(de.isScrollDown=!0,aoife.next(".js-aoife-markdown-header")),document.documentElement.scrollTop<100&&!0===de.isScrollDown&&(de.isScrollDown=!1,aoife.next(".js-aoife-markdown-header")),n!==de.viewIndex&&(de.viewIndex=n,aoife.next(".moc-real"))}));const ce=({text:e,footer:t})=>{const n=Y(e,!0);return aoife("div",{class:"aoife-markdown"},aoife("div",{class:"aoife-markdown-content"},n,t&&t),aoife("div",{class:"moc"},aoife("div",{class:"moc-real"},aoife("div",{class:"moc-detail",onclick:()=>{de.detail=!de.detail,aoife.next(".moc-real")}},(()=>de.detail?"Hidden detail":"Show detail")),n.moc.map((e=>aoife("div",{class:()=>["moc-titel-"+e.index,"moc-level-item","moc-level-"+e.level,!de.detail&&e.level>2&&"moc-level-none",de.viewIndex===e.index&&"moc-title-in-page"],onclick:()=>{const t=document.querySelector(e.selector);t&&window.scrollTo({top:t.offsetTop-20,behavior:"auto"})}},e.raw))))))};P`
  .aoife-markdown {
    display: grid;
    grid-template-areas: "moc" "content";
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .aoife-markdown-content {
    display: grid;
    grid-area: content;
    padding-bottom: 60px;
    grid-auto-flow: row;
  }
  .aoife-markdown > .moc {
    grid-area: moc;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    max-width: 320px;
    font-family: var(--vmdb-fm);
    padding: 20px;
    padding-bottom: 0px;
  }

  @media (min-width: 640px) {
    .aoife-markdown {
      grid-template-areas: "content moc";
    }
    .aoife-markdown > .moc {
      position: relative;
      margin-bottom: 30px;
      font-family: var(--vmdb-fm);
    }
  }

  .aoife-markdown > .moc > .moc-real {
    position: static;
    top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    left: 0px;
    height: auto;
    max-height: calc(100% - 20px);
    padding-right: 20px;
    line-height: 1.5;
    font-weight: 500;
    color: rgb(116, 129, 141);
    font-size: 12px;
    word-break: break-all;
    border-left: 1px solid var(--vmdb-line);
  }

  @media (min-width: 640px) {
    .aoife-markdown > .moc > .moc-real {
      position: sticky;
    }
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
`;const pe=(e,t)=>{e.showMobileMenu=t,aoife.next(".aoife-markdown-page .mobile-menu")},ge=(e,t,n)=>{t.showMobileMenu=!1,t.num=n,aoife.next("*"),le.push(e)},me=({state:e,title:t,version:n,data:a,homepage:r})=>aoife("div",{class:"menu"},aoife("div",{class:["menu-title",r&&"menu-have-home-page"],onclick:()=>{r&&window.open(r)}},t||"Aofie Document"),n&&aoife("div",{class:"menu-version"},n),aoife("div",{class:"menu-items"},a.map(((t,n)=>aoife("div",{class:()=>[e.num===n&&"menu-item-selected","menu-item"],onclick:()=>{ge("/"+t.name,e,n)}},t.name)))),aoife("div",{class:"menu-footer",onclick:()=>window.open("https://github.com/ymzuiku/aoife-doc")},"Powered by ",aoife("span",{class:"by-aoife-doc"},"Aoife-doc")));P`
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
  .aoife-markdown-page .menu-have-home-page {
    color: hsl(210, 60%, 50%);
    cursor: pointer;
    border-radius: 10px;
    margin-right: 6px;
  }
  .aoife-markdown-page .menu-have-home-page:hover {
    background: hsla(210, 20%, 40%, 0.1);
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
    zoom: 0.8;
  }
  @media (min-width: 1200px) {
    .aoife-markdown-page .menu-footer {
      zoom: 1;
    }
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
`;const fe=({title:e,version:t,state:n,markdownState:a,data:r,homepage:i})=>aoife("div",{class:()=>["header js-aoife-markdown-header",a.isScrollDown&&"header-shadow"]},aoife("div",{class:"header-icon",innerHTML:'<svg t="1614770422406" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2063" width="1em" height="1em"><path d="M109.714 292.571h804.572c21.943 0 36.571-21.942 36.571-43.885 0-14.629-14.628-29.257-36.571-29.257H109.714c-21.943 0-36.571 14.628-36.571 36.571 0 14.629 14.628 36.571 36.571 36.571zM914.286 512H109.714c-21.943 0-36.571 14.629-36.571 36.571 0 14.629 14.628 36.572 36.571 36.572h804.572c21.943 0 36.571-21.943 36.571-43.886 0-14.628-14.628-29.257-36.571-29.257z m0 292.571H109.714c-21.943 0-36.571 14.629-36.571 36.572s14.628 36.571 36.571 36.571h804.572c21.943 0 36.571-21.943 36.571-36.571 0-21.943-14.628-36.572-36.571-36.572z" p-id="2064"></path></svg>',onclick:()=>{pe(n,!0)}}),aoife("label",{class:["header-title",i&&"header-have-home-page"],onclick:()=>{i&&window.open(i)}},e||"Aofie Document"),aoife("span",null),aoife("span",{class:"header-info",onclick:()=>{window.scrollTo({top:0,behavior:"auto"})}},(()=>n&&r&&r[n.num]&&r[n.num].name)),aoife("span",{class:"header-arrow",onclick:()=>{window.scrollTo({top:0,behavior:"auto"})}},aoife("svg",{t:"1617685881508",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1921",width:"1em",height:"1em"},aoife("path",{d:"M329.745 562.745c-12.497 12.497-12.497 32.758 0 45.255 12.372 12.372 32.354 12.496 44.878 0.371L375 608l126.059-126.059c6.248-6.248 16.379-6.248 22.627 0L649.746 608c12.371 12.372 32.353 12.496 44.877 0.371L695 608c12.372-12.372 12.496-32.354 0.371-44.878l-0.371-0.377-137.373-137.372c-24.743-24.744-64.707-24.991-89.755-0.743l-0.754 0.743-137.373 137.372z","p-id":"1922"}))),aoife("div",{class:()=>["mobile-menu",n.showMobileMenu&&"mobile-show"]},aoife("div",{class:"mobile-plan"},aoife(me,{version:t,title:e,data:r,state:n,homepage:i})),aoife("div",{class:"mobile-mask",onclick:()=>{pe(n,!1)}})));P`
  .aoife-markdown-page .header {
    position: fixed;
    height: var(--vmdb-header);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
    width: 100vw;
    top: 0px;
    left: 0px;
    background: #fff;
    z-index: 1000;
    border-bottom: 0px solid rgba(0, 0, 0, 0);
    display: grid;
    grid-template-columns: auto auto 1fr auto auto;
    place-content: center start;
  }
  .aoife-markdown-page .header-title {
    font-size: 16px;
    display: grid;
    font-weight: bold;
    align-items: center;
  }
  .aoife-markdown-page .header-info {
    font-size: 12px;
    display: grid;
    align-items: center;
    margin-right: 4px;
  }
  .aoife-markdown-page .header-arrow {
    display: grid;
    align-items: center;
    margin-right: 10px;
  }
  .aoife-markdown-page .header-have-home-page {
    color: hsl(210, 60%, 50%);
    padding: 2px 4px;
    font-weight: bold;
    border-radius: 10px;
  }
  .aoife-markdown-page .header-have-home-page:active {
    background: hsla(210, 20%, 40%, 0.1);
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
`;const he=()=>aoife("svg",{t:"1614958133927",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4404",width:"1.5em",height:"1.5em"},aoife("path",{d:"M866.92864 476.29312a35.84 35.84 0 1 1 0 71.68h-696.32a35.82976 35.82976 0 0 1-35.84-35.84c0-19.80416 16.03584-35.84 35.84-35.84h696.32z",fill:"currentColor","p-id":"4405"}),aoife("path",{d:"M221.2864 512.13312l213.59616-213.59616a35.84 35.84 0 0 0-50.67776-50.688l-238.9504 238.9504a35.84 35.84 0 0 0 0 50.67776l238.9504 238.9504a35.84 35.84 0 0 0 50.67776-50.688l-213.59616-213.6064z",fill:"currentColor","p-id":"4406"})),be=({state:e,data:t,num:n})=>{if(!t||t.length<2)return aoife("div",null);const a=n=>{ge("/"+t[n].name,e,n)},r=()=>{t[n-1]&&a(n-1)},i=()=>{t[n+1]&&a(n+1)};return n===t.length-1?aoife("div",{class:"aoife-markdown-page-btn"},aoife("div",{class:"btn left",onclick:r},aoife("div",{class:"arrow arrow-left"},aoife(he,null)),aoife("div",{class:"title"},aoife("label",{class:"tip"},"Previous"),aoife("span",{class:"name"},t[n-1]&&t[n-1].name)))):0===n?aoife("div",{class:"aoife-markdown-page-btn"},aoife("div",{class:"btn right",onclick:i},aoife("div",{class:"title"},aoife("label",{class:"tip"},"Next"),aoife("span",{class:"name"},t[n+1].name)),aoife("div",{class:"arrow arrow-right"},aoife(he,null)))):aoife("div",{class:"aoife-markdown-page-btn double"},aoife("div",{class:"btn left",onclick:r},aoife("div",{class:"arrow arrow-left"},aoife(he,null)),aoife("div",{class:"title"},aoife("label",{class:"tip"},"Previous"),aoife("span",{class:"name"},t[n-1].name))),aoife("div",{class:"btn right",onclick:i},aoife("div",{class:"title"},aoife("label",{class:"tip"},"Next"),aoife("span",{class:"name"},t[n+1].name)),aoife("div",{class:"arrow arrow-right"},aoife(he,null))))};P`
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
`;const De=({version:e,title:t,data:n,homepage:a})=>{const r={num:W(n),showMobileMenu:!1,showPcMenu:!0};return aoife("div",{class:"aoife-markdown-page"},aoife(fe,{version:e,data:n,title:t,state:r,homepage:a,markdownState:de}),aoife("div",{class:"content"},aoife("div",{class:"menu-box"},aoife(me,{version:e,title:t,state:r,data:n,homepage:a})),aoife("div",{class:"aoife-markdown-page-md"},n.map(((e,t)=>aoife(le,{keep:!0,url:"/"+e.name,render:()=>aoife(ce,{footer:aoife(be,{state:r,num:t,data:n}),text:n[t]&&n[t].text})}))))))};P`
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
`;const Ee=({url:t})=>{fetch(t+"?t="+Date.now()).then((e=>e.json())).then((t=>{const a=t.files.map((e=>"object"==typeof e?fetch(e.url).then((e=>e.text())):(/\.md$/.test(e)||(e+=".md"),fetch(t.path+e+"?version="+t.version||"0.0.0").then((e=>e.text())))));Promise.all(a).then((a=>{const r=[];a.forEach(((e,n)=>{const a=t.files[n];"object"==typeof a?r.push({name:a.name,text:e}):r.push({name:t.files[n],text:e})})),n.innerHTML="",t.list=r,t.title&&(document.title=t.title),"/"===location.pathname&&r[0]&&le.push(r[0].name),n.replaceWith(aoife(De,e({data:r},t)))}))}));const n=aoife("div",{class:"aoife-markdown-loading"},"Loading...");return n};P`
  .aoife-markdown-loading {
    padding: 100px;
    opacity: 0.4;
    text-align: center;
    font-family: var(--vmdb-fm);
  }
`;var ve,Ae=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i;switch(n=n||{},a.util.type(t)){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var o in r={},n[i]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(o[l]=n[l]);n.hasOwnProperty(s)||(o[s]=i[s])}var u=r[e];return r[e]=o,a.languages.DFS(a.languages,(function(t,n){n===u&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,r,i){i=i||{};var o=a.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var l=t[s],u=a.util.type(l);"Object"!==u||i[o(l)]?"Array"!==u||i[o(l)]||(i[o(l)]=!0,e(l,n,s,i)):(i[o(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,o=0;i=r.elements[o++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){var o=a.util.getLanguage(n),s=a.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var u={element:n,language:o,grammar:s,code:n.textContent};function d(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),i&&i.call(u.element)}if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void(i&&i.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){d(e.data)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else d(a.highlight(u.code,u.grammar,u.language));else d(a.util.encode(u.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var u in n)t[u]=n[u];delete t.rest}var d=new o;return s(d,d.head,e),function e(t,n,o,u,d,c){for(var p in o)if(o.hasOwnProperty(p)&&o[p]){var g=o[p];g=Array.isArray(g)?g:[g];for(var m=0;m<g.length;++m){if(c&&c.cause==p+","+m)return;var f=g[m],h=f.inside,b=!!f.lookbehind,D=!!f.greedy,E=f.alias;if(D&&!f.pattern.global){var v=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,v+"g")}for(var A=f.pattern||f,k=u.next,w=d;k!==n.tail&&!(c&&w>=c.reach);w+=k.value.length,k=k.next){var x=k.value;if(n.length>t.length)return;if(!(x instanceof r)){var y,F=1;if(D){if(!(y=i(A,w,t,b)))break;var C=y.index,S=y.index+y[0].length,_=w;for(_+=k.value.length;_<=C;)_+=(k=k.next).value.length;if(w=_-=k.value.length,k.value instanceof r)continue;for(var T=k;T!==n.tail&&(_<S||"string"==typeof T.value);T=T.next)F++,_+=T.value.length;F--,x=t.slice(w,_),y.index-=w}else if(!(y=i(A,0,x,b)))continue;C=y.index;var $=y[0],R=x.slice(0,C),I=x.slice(C+$.length),B=w+x.length;c&&B>c.reach&&(c.reach=B);var O=k.prev;if(R&&(O=s(n,O,R),w+=R.length),l(n,O,F),k=s(n,O,new r(p,h?a.tokenize($,h):$,E,$)),I&&s(n,k,I),1<F){var N={cause:p+","+m,reach:B};e(t,n,o,k.prev,w,N),c&&N.reach>c.reach&&(c.reach=N.reach)}}}}}}(e,d,t,d.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(d)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:r};function r(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function i(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var i=r[1].length;r.index+=i,r[0]=r[0].slice(i)}return r}function o(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function s(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function l(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;(t.next=a).prev=t,e.length-=r}if(e.Prism=a,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),a.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener&&(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,o=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),o&&e.close()}),!1)),a;var u=a.util.currentScript();function d(){a.manual||a.highlightAll()}if(u&&(a.filename=u.src,u.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var c=document.readyState;"loading"===c||"interactive"===c&&u&&u.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});"undefined"!=typeof module&&module.exports&&(module.exports=Ae),"undefined"!=typeof global&&(global.Prism=Ae),Ae.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Ae.languages.markup.tag.inside["attr-value"].inside.entity=Ae.languages.markup.entity,Ae.languages.markup.doctype.inside["internal-subset"].inside=Ae.languages.markup,Ae.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(Ae.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Ae.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Ae.languages[t]};var r={};r[e]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:a},Ae.languages.insertBefore("markup","cdata",r)}}),Ae.languages.html=Ae.languages.markup,Ae.languages.mathml=Ae.languages.markup,Ae.languages.svg=Ae.languages.markup,Ae.languages.xml=Ae.languages.extend("markup",{}),Ae.languages.ssml=Ae.languages.xml,Ae.languages.atom=Ae.languages.xml,Ae.languages.rss=Ae.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},n.tag))}(Ae),Ae.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Ae.languages.javascript=Ae.languages.extend("clike",{"class-name":[Ae.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Ae.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Ae.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Ae.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Ae.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:Ae.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Ae.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Ae.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Ae.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Ae.languages.javascript}},string:/[\s\S]+/}}}),Ae.languages.markup&&Ae.languages.markup.tag.addInlined("script","javascript"),Ae.languages.js=Ae.languages.javascript,function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,lookbehind:!0,greedy:!0,inside:a}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,o=0;o<r.length;o++)i[r[o]]=e.languages.bash[r[o]];e.languages.shell=e.languages.bash}(Ae),Ae.languages.c=Ae.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,function:/[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Ae.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Ae.languages.c.string],comment:Ae.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Ae.languages.c}}},constant:/\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/}),delete Ae.languages.c.boolean,function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n="\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g,(function(){return t.source}));e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:true|false)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp('(\\b(?:module|import)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|'+"<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g,(function(){return n}))+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","operator",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])}(Ae),function(e){var t,n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css.selector={pattern:e.languages.css.selector,inside:t={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp("\\[(?:[^[\\]\"']|"+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=t,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var a={pattern:/(\b\d+)(?:%|[a-z]+\b)/,lookbehind:!0},r={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#(?:[\da-f]{1,2}){3,4}\b/i,alias:"color"},color:[/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,{pattern:/\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:a,number:r,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:a,number:r})}(Ae),function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var t={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(t).forEach((function(n){var a=t[n],r=[];/^\w+$/.test(n)||r.push(/\w+/.exec(n)[0]),"diff"===n&&r.push("bold"),e.languages.diff[n]={pattern:RegExp("^(?:["+a+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:r,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(n)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:t})}(Ae),function(e){var t="(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g,(function(){return"\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])"})),n="\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",a="--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(/<STR>/g,(function(){return n})),r={pattern:RegExp(n),greedy:!0},i={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function o(e,n){return e=e.replace(/<OPT>/g,(function(){return a})).replace(/<SP>/g,(function(){return t})),RegExp(e,n)}e.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:o("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*","i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[r,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:o("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b","i"),lookbehind:!0,greedy:!0},{pattern:o("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS","i"),lookbehind:!0,greedy:!0},{pattern:o("(^ONBUILD<SP>)\\w+","i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:i,string:r,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:i},e.languages.dockerfile=e.languages.docker}(Ae),function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,r,i){if(n.language===a){var o=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"==typeof i&&!i(e))return e;for(var r,s=o.length;-1!==n.code.indexOf(r=t(a,s));)++s;return o[s]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var r=0,i=Object.keys(n.tokenStack);!function o(s){for(var l=0;l<s.length&&!(r>=i.length);l++){var u=s[l];if("string"==typeof u||u.content&&"string"==typeof u.content){var d=i[r],c=n.tokenStack[d],p="string"==typeof u?u:u.content,g=t(a,d),m=p.indexOf(g);if(-1<m){++r;var f=p.substring(0,m),h=new e.Token(a,e.tokenize(c,n.grammar),"language-"+a,c),b=p.substring(m+g.length),D=[];f&&D.push.apply(D,o([f])),D.push(h),b&&D.push.apply(D,o([b])),"string"==typeof u?s.splice.apply(s,[l,1].concat(D)):u.content=D}}else u.content&&o(u.content)}return s}(n.tokens)}}}})}(Ae),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(t){e.languages["markup-templating"].buildPlaceholders(t,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"ejs")})),e.languages.eta=e.languages.ejs}(Ae),Ae.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/m}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m},Ae.languages.go=Ae.languages.extend("clike",{string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|iota|nil|true|false)\b/,number:/(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/}),delete Ae.languages.go["class-name"],Ae.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:Ae.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:true|false)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,punctuation:/[!(){}\[\]:=,]/,constant:/\b(?!ID\b)[A-Z][A-Z_\d]*\b/},function(e){e.languages.http={"request-line":{pattern:/^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*\sHTTP\/[0-9.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[0-9.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[0-9.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[0-9.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var t,n,a,r=e.languages,i={"application/javascript":r.javascript,"application/json":r.json||r.javascript,"application/xml":r.xml,"text/xml":r.xml,"text/html":r.html,"text/css":r.css},o={"application/json":!0,"application/xml":!0};for(var s in i)if(i[s]){t=t||{};var l=o[s]?(a=(n=s).replace(/^[a-z]+\//,""),"(?:"+n+"|\\w+/(?:[\\w.-]+\\+)+"+a+"(?![+\\w.-]))"):s;t[s.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+l+"(?:(?:\\r\\n?|\\n).+)*)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:i[s]}}t&&e.languages.insertBefore("http","header-name",t)}(Ae),(ve=Ae).languages.ignore={comment:/^#.*/m,entry:{pattern:/\S(?:.*(?:(?:\\ )|\S))?/,alias:"string",inside:{operator:/^!|\*\*?|\?/,regex:{pattern:/(^|[^\\])\[[^\[\]]*\]/,lookbehind:!0},punctuation:/\//}}},ve.languages.gitignore=ve.languages.ignore,ve.languages.hgignore=ve.languages.ignore,ve.languages.npmignore=ve.languages.ignore,function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n="(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",a={pattern:RegExp(n+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{"class-name":[a,{pattern:RegExp(n+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=())])"),lookbehind:!0,inside:a.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(\:\:\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":a,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Ae),Ae.languages.less=Ae.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,operator:/[+\-*\/]/}),Ae.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}}),function(e){var t=["$eq","$gt","$gte","$in","$lt","$lte","$ne","$nin","$and","$not","$nor","$or","$exists","$type","$expr","$jsonSchema","$mod","$regex","$text","$where","$geoIntersects","$geoWithin","$near","$nearSphere","$all","$elemMatch","$size","$bitsAllClear","$bitsAllSet","$bitsAnyClear","$bitsAnySet","$comment","$elemMatch","$meta","$slice","$currentDate","$inc","$min","$max","$mul","$rename","$set","$setOnInsert","$unset","$addToSet","$pop","$pull","$push","$pullAll","$each","$position","$slice","$sort","$bit","$addFields","$bucket","$bucketAuto","$collStats","$count","$currentOp","$facet","$geoNear","$graphLookup","$group","$indexStats","$limit","$listLocalSessions","$listSessions","$lookup","$match","$merge","$out","$planCacheStats","$project","$redact","$replaceRoot","$replaceWith","$sample","$set","$skip","$sort","$sortByCount","$unionWith","$unset","$unwind","$abs","$accumulator","$acos","$acosh","$add","$addToSet","$allElementsTrue","$and","$anyElementTrue","$arrayElemAt","$arrayToObject","$asin","$asinh","$atan","$atan2","$atanh","$avg","$binarySize","$bsonSize","$ceil","$cmp","$concat","$concatArrays","$cond","$convert","$cos","$dateFromParts","$dateToParts","$dateFromString","$dateToString","$dayOfMonth","$dayOfWeek","$dayOfYear","$degreesToRadians","$divide","$eq","$exp","$filter","$first","$floor","$function","$gt","$gte","$hour","$ifNull","$in","$indexOfArray","$indexOfBytes","$indexOfCP","$isArray","$isNumber","$isoDayOfWeek","$isoWeek","$isoWeekYear","$last","$last","$let","$literal","$ln","$log","$log10","$lt","$lte","$ltrim","$map","$max","$mergeObjects","$meta","$min","$millisecond","$minute","$mod","$month","$multiply","$ne","$not","$objectToArray","$or","$pow","$push","$radiansToDegrees","$range","$reduce","$regexFind","$regexFindAll","$regexMatch","$replaceOne","$replaceAll","$reverseArray","$round","$rtrim","$second","$setDifference","$setEquals","$setIntersection","$setIsSubset","$setUnion","$size","$sin","$slice","$split","$sqrt","$stdDevPop","$stdDevSamp","$strcasecmp","$strLenBytes","$strLenCP","$substr","$substrBytes","$substrCP","$subtract","$sum","$switch","$tan","$toBool","$toDate","$toDecimal","$toDouble","$toInt","$toLong","$toObjectId","$toString","$toLower","$toUpper","$trim","$trunc","$type","$week","$year","$zip","$comment","$explain","$hint","$max","$maxTimeMS","$min","$orderby","$query","$returnKey","$showDiskLoc","$natural"],n="(?:"+(t=t.map((function(e){return e.replace("$","\\$")}))).join("|")+")\\b";e.languages.mongodb=e.languages.extend("javascript",{}),e.languages.insertBefore("mongodb","string",{property:{pattern:/(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,greedy:!0,inside:{keyword:RegExp("^(['\"])?"+n+"(?:\\1)?$")}}}),e.languages.mongodb.string.inside={url:{pattern:/https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,greedy:!0},entity:{pattern:/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,greedy:!0}},e.languages.insertBefore("mongodb","constant",{builtin:{pattern:RegExp("\\b(?:"+["ObjectId","Code","BinData","DBRef","Timestamp","NumberLong","NumberDecimal","MaxKey","MinKey","RegExp","ISODate","UUID"].join("|")+")\\b"),alias:"keyword"}})}(Ae),Ae.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|IN|ILIKE|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(e){var t=e.languages.plsql=e.languages.extend("sql",{comment:[/\/\*[\s\S]*?\*\//,/--.*/]}),n=t.keyword;Array.isArray(n)||(n=t.keyword=[n]),n.unshift(/\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i);var a=t.operator;Array.isArray(a)||(a=t.operator=[a]),a.unshift(/:=/)}(Ae),function(e){e.languages.pug={comment:{pattern:/(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,lookbehind:!0},"multiline-script":{pattern:/(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:e.languages.javascript},filter:{pattern:/(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"}}},"multiline-plain-text":{pattern:/(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0},markup:{pattern:/(^[\t ]*)<.+/m,lookbehind:!0,inside:e.languages.markup},doctype:{pattern:/((?:^|\n)[\t ]*)doctype(?: .+)?/,lookbehind:!0},"flow-control":{pattern:/(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,lookbehind:!0,inside:{each:{pattern:/^each .+? in\b/,inside:{keyword:/\b(?:each|in)\b/,punctuation:/,/}},branch:{pattern:/^(?:if|unless|else|case|when|default|while)\b/,alias:"keyword"},rest:e.languages.javascript}},keyword:{pattern:/(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,lookbehind:!0},mixin:[{pattern:/(^[\t ]*)mixin .+/m,lookbehind:!0,inside:{keyword:/^mixin/,function:/\w+(?=\s*\(|\s*$)/,punctuation:/[(),.]/}},{pattern:/(^[\t ]*)\+.+/m,lookbehind:!0,inside:{name:{pattern:/^\+\w+/,alias:"function"},rest:e.languages.javascript}}],script:{pattern:/(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,lookbehind:!0,inside:e.languages.javascript},"plain-text":{pattern:/(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,lookbehind:!0},tag:{pattern:/(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,lookbehind:!0,inside:{attributes:[{pattern:/&[^(]+\([^)]+\)/,inside:e.languages.javascript},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,lookbehind:!0,inside:e.languages.javascript},"attr-name":/[\w-]+(?=\s*!?=|\s*[,)])/,punctuation:/[!=(),]+/}}],punctuation:/:/,"attr-id":/#[\w\-]+/,"attr-class":/\.[\w\-]+/}},code:[{pattern:/(^[\t ]*(?:-|!?=)).+/m,lookbehind:!0,inside:e.languages.javascript}],punctuation:/[.\-!=|]+/};for(var t=[{filter:"atpl",language:"twig"},{filter:"coffee",language:"coffeescript"},"ejs","handlebars","less","livescript","markdown",{filter:"sass",language:"scss"},"stylus"],n={},a=0,r=t.length;a<r;a++){var i=t[a];i="string"==typeof i?{filter:i,language:i}:i,e.languages[i.language]&&(n["filter-"+i.filter]={pattern:RegExp("(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\\2[\t ].+|\\s*?(?=\r?\n|\r)))+".replace("{{filter_name}}",(function(){return i.filter})),"m"),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"},rest:e.languages[i.language]}})}e.languages.insertBefore("pug","filter",n)}(Ae),Ae.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Ae.languages.python["string-interpolation"].inside.interpolation.inside.rest=Ae.languages.python,Ae.languages.py=Ae.languages.python,function(e){var t=e.util.clone(e.languages.javascript),n="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function a(e,t){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return n})),RegExp(e,t)}n=a(n).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=a("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:a("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:a("=<BRACES>"),inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var r=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(r).join(""):""},i=function(t){for(var n=[],a=0;a<t.length;a++){var o=t[a],s=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?0<n.length&&n[n.length-1].tagName===r(o.content[0].content[1])&&n.pop():"/>"===o.content[o.content.length-1].content||n.push({tagName:r(o.content[0].content[1]),openedBraces:0}):0<n.length&&"punctuation"===o.type&&"{"===o.content?n[n.length-1].openedBraces++:0<n.length&&0<n[n.length-1].openedBraces&&"punctuation"===o.type&&"}"===o.content?n[n.length-1].openedBraces--:s=!0),(s||"string"==typeof o)&&0<n.length&&0===n[n.length-1].openedBraces){var l=r(o);a<t.length-1&&("string"==typeof t[a+1]||"plain-text"===t[a+1].type)&&(l+=r(t[a+1]),t.splice(a+1,1)),0<a&&("string"==typeof t[a-1]||"plain-text"===t[a-1].type)&&(l=r(t[a-1])+l,t.splice(a-1,1),a--),t[a]=new e.Token("plain-text",l,null,l)}o.content&&"string"!=typeof o.content&&i(o.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||i(e.tokens)}))}(Ae),function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},keyword:/\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),delete e.languages.typescript.parameter;var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(Ae),function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t);var n=e.languages.tsx.tag;n.pattern=RegExp("(^|[^\\w$]|(?=</))(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0}(Ae),function(e){var t={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},n=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,a="(?:[^\\\\-]|"+n.source+")",r=RegExp(a+"-"+a),i={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};e.languages.regex={charset:{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"charset-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"charset-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:r,inside:{escape:n,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":t,charclass:{pattern:/\\[wsd]|\\p{[^{}]+}/i,alias:"class-name"},escape:n}},"special-escape":t,charclass:{pattern:/\.|\\[wsd]|\\p{[^{}]+}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":i}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:n,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":i}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(Ae),function(e){e.languages.ruby=e.languages.extend("clike",{comment:[/#.*/,{pattern:/^=begin\s[\s\S]*?^=end/m,greedy:!0}],"class-name":{pattern:/(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/});var t={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.languages.ruby}};delete e.languages.ruby.function,e.languages.insertBefore("ruby","keyword",{regex:[{pattern:RegExp("%r(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1[gim]{0,3}","\\((?:[^()\\\\]|\\\\[^])*\\)[gim]{0,3}","\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}[gim]{0,3}","\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\][gim]{0,3}","<(?:[^<>\\\\]|\\\\[^])*>[gim]{0,3}"].join("|")+")"),greedy:!0,inside:{interpolation:t}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:{pattern:/(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,lookbehind:!0},"method-definition":{pattern:/(\bdef\s+)[\w.]+/,lookbehind:!0,inside:{function:/\w+$/,rest:e.languages.ruby}}}),e.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z]\w*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:RegExp("%[qQiIwWxs]?(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1","\\((?:[^()\\\\]|\\\\[^])*\\)","\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}","\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]","<(?:[^<>\\\\]|\\\\[^])*>"].join("|")+")"),greedy:!0,inside:{interpolation:t}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:t}}],e.languages.rb=e.languages.ruby}(Ae),function(e){for(var t="/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/",n=0;n<2;n++)t=t.replace(/<self>/g,(function(){return t}));t=t.replace(/<self>/g,(function(){return"[^\\s\\S]"})),e.languages.rust={comment:[{pattern:RegExp("(^|[^\\\\])"+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0,alias:"string"},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(Ae),Ae.languages.scss=Ae.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Ae.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Ae.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Ae.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|with|show|hide)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Ae.languages.scss.atrule.inside.rest=Ae.languages.scss,Ae.languages.swift=Ae.languages.extend("clike",{string:{pattern:/("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[^(])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/\\\((?:[^()]|\([^)]+\))+\)/,inside:{delimiter:{pattern:/^\\\(|\)$/,alias:"variable"}}}}},keyword:/\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|some|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,constant:/\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,atrule:/@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,builtin:/\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/}),Ae.languages.swift.string.inside.interpolation.inside.rest=Ae.languages.swift,Ae.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/},function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+n.source+"(?:[ \t]+"+t.source+")?|"+t.source+"(?:[ \t]+"+n.source+")?)",r="(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g,(function(){return"[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"})),i="\"(?:[^\"\\\\\r\n]|\\\\.)*\"|'(?:[^'\\\\\r\n]|\\\\.)*'";function o(e,t){t=(t||"").replace(/m/g,"")+"m";var n="([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\\s*)?#))".replace(/<<prop>>/g,(function(){return a})).replace(/<<value>>/g,(function(){return e}));return RegExp(n,t)}e.languages.yaml={scalar:{pattern:RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g,(function(){return a}))),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp("((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)".replace(/<<prop>>/g,(function(){return a})).replace(/<<key>>/g,(function(){return"(?:"+r+"|"+i+")"}))),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:o("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),lookbehind:!0,alias:"number"},boolean:{pattern:o("true|false","i"),lookbehind:!0,alias:"important"},null:{pattern:o("null|~","i"),lookbehind:!0,alias:"important"},string:{pattern:o(i),lookbehind:!0,greedy:!0},number:{pattern:o("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.?\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)","i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(Ae);const ke=e=>{const t=({css:e})=>{const t=document.getElementById("prism-theme");if(t)return void(t.textContent=e);const n=document.createElement("style");n.textContent=e,n.id="prism-theme",document.head.appendChild(n)};"gitbook"===e?H((()=>import("./gitbook.js")),void 0).then(t):"solarized"===e?H((()=>import("./solarized.js")),void 0).then(t):"tomorrow"===e?H((()=>import("./tomorrow.js")),void 0).then(t):"coy"===e?H((()=>import("./coy.js")),void 0).then(t):"dark"===e||"thin-dark"===e?H((()=>import("./dark.js")),void 0).then(t):"default"===e?H((()=>import("./default.js")),void 0).then(t):"okaidia"===e?H((()=>import("./okaidia.js")),void 0).then(t):"twilight"===e?H((()=>import("./twilight.js")),void 0).then(t):"darcula"===e&&H((()=>import("./darcula.js")),void 0).then(t)},we=window.Prism;var xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",usePrismTheme:ke,Prism:we});ke(window.aoifeMarkdownTheme||"gitbook"),window.MarkdownBook=Ee;export{Ee as M,Y as V,F as a,C as b,w as c,x as d,De as e,ce as f,y as g,ke as u};
