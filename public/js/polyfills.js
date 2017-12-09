Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){"use strict";if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,r=Object(this),n=r.length>>>0,i=arguments[1],s=0;s<n;s++)if(t=r[s],e.call(i,t,s,r))return t}}),Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},r=Math.pow(2,53)-1,n=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),r)};return function(e){var r=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,s=arguments.length>1?arguments[1]:void 0;if(void 0!==s){if(!t(s))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}for(var o,a=n(r.length),c=t(this)?Object(new this(a)):new Array(a),u=0;u<a;)o=r[u],c[u]=s?void 0===i?s(o,u):s.call(i,o,u):o,u+=1;return c.length=a,c}}());var objectFitImages=function(){"use strict";function e(t,i){if(!t[r].parsingSrcset){var o=function(e){for(var t,r=getComputedStyle(e).fontFamily,i={};null!==(t=n.exec(r));)i[t[1]]=t[2];return i}(t);if(o["object-fit"]=o["object-fit"]||"fill",!t[r].s){if("fill"===o["object-fit"])return;if(!t[r].skipTest&&s&&!o["object-position"])return}var u=t[r].ios7src||t.currentSrc||t.src;if(i)u=i;else if(t.srcset&&!a&&window.picturefill){var l=window.picturefill._.ns;t[r].parsingSrcset=!0,t[l]&&t[l].evaled||window.picturefill._.fillImg(t,{reselect:!0}),t[l].curSrc||(t[l].supported=!1,window.picturefill._.fillImg(t,{reselect:!0})),delete t[r].parsingSrcset,u=t[l].curSrc||u}if(t[r].s)t[r].s=u,i&&(t[r].srcAttr=i);else{t[r]={s:u,srcAttr:i||c.call(t,"src"),srcsetAttr:t.srcset},t.src=r;try{t.srcset&&(t.srcset="",Object.defineProperty(t,"srcset",{value:t[r].srcsetAttr})),function(t){var n={get:function(){return t[r].s},set:function(n){return delete t[r].i,e(t,n),n}};Object.defineProperty(t,"src",n),Object.defineProperty(t,"currentSrc",{get:n.get})}(t)}catch(e){t[r].ios7src=u}}t.style.backgroundImage='url("'+u+'")',t.style.backgroundPosition=o["object-position"]||"center",t.style.backgroundRepeat="no-repeat",/scale-down/.test(o["object-fit"])?(t[r].i||(t[r].i=new Image,t[r].i.src=u),function e(){return t[r].i.naturalWidth?void(t[r].i.naturalWidth>t.width||t[r].i.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"):void setTimeout(e,100)}()):t.style.backgroundSize=o["object-fit"].replace("none","auto").replace("fill","100% 100%")}}function t(n,i){var s=!l&&!n;if(i=i||{},n=n||"img",o&&!i.skipTest)return!1;"string"==typeof n?n=document.querySelectorAll("img"):n.length||(n=[n]);for(var a=0;a<n.length;a++)n[a][r]=n[a][r]||i,e(n[a]);s&&(document.body.addEventListener("load",function(e){"IMG"===e.target.tagName&&t(e.target,{skipTest:i.skipTest})},!0),l=!0,n="img"),i.watchMQ&&window.addEventListener("resize",t.bind(null,n,{skipTest:i.skipTest}))}var r="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",n=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,i=new Image,s="object-fit"in i.style,o="object-position"in i.style,a="string"==typeof i.currentSrc,c=i.getAttribute,u=i.setAttribute,l=!1;return t.supportsObjectFit=s,t.supportsObjectPosition=o,o||(HTMLImageElement.prototype.getAttribute=function(e){return!this[r]||"src"!==e&&"srcset"!==e?c.call(this,e):this[r][e+"Attr"]},HTMLImageElement.prototype.setAttribute=function(e,t){!this[r]||"src"!==e&&"srcset"!==e?u.call(this,e,t):this["src"===e?"src":e+"Attr"]=String(t)}),t}();"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?function(){"use strict";var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var r,n=arguments.length;for(r=0;r<n;r++)e=arguments[r],t.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var r=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:r.call(this,e)}}e=null}():function(e){"use strict";if("Element"in e){var t="classList",r="prototype",n=e.Element[r],i=Object,s=String[r].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[r].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1},a=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},c=function(e,t){if(""===t)throw new a("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new a("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(e,t)},u=function(e){for(var t=s.call(e.getAttribute("class")||""),r=t?t.split(/\s+/):[],n=0,i=r.length;n<i;n++)this.push(r[n]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},l=u[r]=[],f=function(){return new u(this)};if(a[r]=Error[r],l.item=function(e){return this[e]||null},l.contains=function(e){return e+="",-1!==c(this,e)},l.add=function(){var e,t=arguments,r=0,n=t.length,i=!1;do{e=t[r]+"",-1===c(this,e)&&(this.push(e),i=!0)}while(++r<n);i&&this._updateClassName()},l.remove=function(){var e,t,r=arguments,n=0,i=r.length,s=!1;do{for(e=r[n]+"",t=c(this,e);-1!==t;)this.splice(t,1),s=!0,t=c(this,e)}while(++n<i);s&&this._updateClassName()},l.toggle=function(e,t){e+="";var r=this.contains(e),n=r?!0!==t&&"remove":!1!==t&&"add";return n&&this[n](e),!0===t||!1===t?t:!r},l.toString=function(){return this.join(" ")},i.defineProperty){var d={get:f,enumerable:!0,configurable:!0};try{i.defineProperty(n,t,d)}catch(e){-2146823252===e.number&&(d.enumerable=!1,i.defineProperty(n,t,d))}}else i[r].__defineGetter__&&n.__defineGetter__(t,f)}}(self)),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;--r>=0&&t.item(r)!==this;);return r>-1}),function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return h.iterable&&(t[Symbol.iterator]=function(){return t}),t}function i(e){this.map={},e instanceof i?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function s(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function o(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function a(e){var t=new FileReader,r=o(t);return t.readAsArrayBuffer(e),r}function c(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function u(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(h.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(h.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(h.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(h.arrayBuffer&&h.blob&&m(e))this._bodyArrayBuffer=c(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!h.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!y(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):h.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},h.blob&&(this.blob=function(){var e=s(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var e=s(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=o(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},h.formData&&(this.formData=function(){return this.text().then(f)}),this.json=function(){return this.text().then(JSON.parse)},this}function l(e,t){var r=(t=t||{}).body;if(e instanceof l){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new i(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new i(t.headers)),this.method=function(e){var t=e.toUpperCase();return g.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function f(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),i=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(i))}}),t}function d(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new i(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var h={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(h.arrayBuffer)var p=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],m=function(e){return e&&DataView.prototype.isPrototypeOf(e)},y=ArrayBuffer.isView||function(e){return e&&p.indexOf(Object.prototype.toString.call(e))>-1};i.prototype.append=function(e,n){e=t(e),n=r(n);var i=this.map[e];this.map[e]=i?i+","+n:n},i.prototype.delete=function(e){delete this.map[t(e)]},i.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},i.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},i.prototype.set=function(e,n){this.map[t(e)]=r(n)},i.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},i.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},i.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},i.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},h.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this,{body:this._bodyInit})},u.call(l.prototype),u.call(d.prototype),d.prototype.clone=function(){return new d(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},d.error=function(){var e=new d(null,{status:0,statusText:""});return e.type="error",e};var v=[301,302,303,307,308];d.redirect=function(e,t){if(-1===v.indexOf(t))throw new RangeError("Invalid status code");return new d(null,{status:t,headers:{location:e}})},e.Headers=i,e.Request=l,e.Response=d,e.fetch=function(e,t){return new Promise(function(r,n){var s=new l(e,t),o=new XMLHttpRequest;o.onload=function(){var e={status:o.status,statusText:o.statusText,headers:function(e){var t=new i;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var i=r.join(":").trim();t.append(n,i)}}),t}(o.getAllResponseHeaders()||"")};e.url="responseURL"in o?o.responseURL:e.headers.get("X-Request-URL");var t="response"in o?o.response:o.responseText;r(new d(t,e))},o.onerror=function(){n(new TypeError("Network request failed"))},o.ontimeout=function(){n(new TypeError("Network request failed"))},o.open(s.method,s.url,!0),"include"===s.credentials?o.withCredentials=!0:"omit"===s.credentials&&(o.withCredentials=!1),"responseType"in o&&h.blob&&(o.responseType="blob"),s.headers.forEach(function(e,t){o.setRequestHeader(t,e)}),o.send(void 0===s._bodyInit?null:s._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),function(e){"use strict";function t(t,r){var n=e.createEvent("Event");n.initEvent(t,!0,!1),r.dispatchEvent(n)}function r(t){return function(r,i){function s(){r(),e.removeEventListener(n.events.change,s,!1)}function a(){i(new TypeError),e.removeEventListener(n.events.error,a,!1)}t!==o.exit||e[n.element]?(e.addEventListener(n.events.change,s,!1),e.addEventListener(n.events.error,a,!1)):setTimeout(function(){i(new TypeError)},1)}}var n,i,s={w3:{enabled:"fullscreenEnabled",element:"fullscreenElement",request:"requestFullscreen",exit:"exitFullscreen",events:{change:"fullscreenchange",error:"fullscreenerror"}},webkit:{enabled:"webkitFullscreenEnabled",element:"webkitCurrentFullScreenElement",request:"webkitRequestFullscreen",exit:"webkitExitFullscreen",events:{change:"webkitfullscreenchange",error:"webkitfullscreenerror"}},moz:{enabled:"mozFullScreenEnabled",element:"mozFullScreenElement",request:"mozRequestFullScreen",exit:"mozCancelFullScreen",events:{change:"mozfullscreenchange",error:"mozfullscreenerror"}},ms:{enabled:"msFullscreenEnabled",element:"msFullscreenElement",request:"msRequestFullscreen",exit:"msExitFullscreen",events:{change:"MSFullscreenChange",error:"MSFullscreenError"}}},o=s.w3;for(i in s)if(s[i].enabled in e){n=s[i];break}o.enabled in e||!n||(e.addEventListener(n.events.change,function(r){r.stopPropagation(),r.stopImmediatePropagation(),e[o.enabled]=e[n.enabled],e[o.element]=e[n.element],t(o.events.change,r.target)},!1),e.addEventListener(n.events.error,function(e){t(o.events.error,e.target)},!1),e[o.enabled]=e[n.enabled],e[o.element]=e[n.element],e[o.exit]=function(){var t=e[n.exit]();return!t&&window.Promise?new Promise(r(o.exit)):t},Element.prototype[o.request]=function(){var e=this[n.request].apply(this,arguments);return!e&&window.Promise?new Promise(r(o.request)):e})}(document),function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,r=document.createElement("source"),n=function(e){var t,n,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=r.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},o=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){s(),o&&o.addListener&&o.addListener(s)};return r.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),s}())}(window),function(e,t,r){"use strict";function n(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function i(e,t,r,n){var i,s,o;return"saveData"===A.algorithm?e>2.7?o=r+1:(s=(t-r)*(i=Math.pow(e-.6,1.5)),n&&(s+=.1*i),o=e+s):o=r>1?Math.sqrt(e*t):e,o>r}function s(e,t){return e.res-t.res}function o(e,t){var r,n,i;if(e&&t)for(i=l.parseSet(t),e=l.makeUrl(e),r=0;r<i.length;r++)if(e===l.makeUrl(i[r].url)){n=i[r];break}return n}t.createElement("picture");var a,c,u,l={},f=!1,d=function(){},h=t.createElement("img"),p=h.getAttribute,m=h.setAttribute,y=h.removeAttribute,g=t.documentElement,v={},A={algorithm:""},b="data-pfsrc",w=b+"set",E=navigator.userAgent,S=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,_="currentSrc",T=/\s+\+?\d+(e\d+)?w/,x=/(\([^)]+\))?\s*(.+)/,P=e.picturefillCFG,j="font-size:100%!important;",R=!0,B={},L={},F=e.devicePixelRatio,I={px:1,in:96},C=t.createElement("a"),O=!1,M=/^[ \t\n\r\u000c]+/,z=/^[, \t\n\r\u000c]+/,k=/^[^ \t\n\r\u000c]+/,D=/[,]+$/,U=/^\d+$/,q=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,N=function(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n||!1):e.attachEvent&&e.attachEvent("on"+t,r)},H=function(e){var t={};return function(r){return r in t||(t[r]=e(r)),t[r]}},$=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=H(function(e){return"return "+function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(r,n){var i;if(!(r in B))if(B[r]=!1,n&&(i=r.match(e)))B[r]=i[1]*I[i[2]];else try{B[r]=new Function("e",t(r))(I)}catch(e){}return B[r]}}(),G=function(e,t){return e.w?(e.cWidth=l.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},W=function(e){if(f){var r,n,i,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),r=s.elements||l.qsa(s.context||t,s.reevaluate||s.reselect?l.sel:l.selShort),i=r.length){for(l.setupRun(s),O=!0,n=0;n<i;n++)l.fillImg(r[n],s);l.teardownRun(s)}}};e.console&&console.warn,_ in h||(_="src"),v["image/jpeg"]=!0,v["image/gif"]=!0,v["image/png"]=!0,v["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),l.ns=("pf"+(new Date).getTime()).substr(0,9),l.supSrcset="srcset"in h,l.supSizes="sizes"in h,l.supPicture=!!e.HTMLPictureElement,l.supSrcset&&l.supPicture&&!l.supSizes&&function(e){h.srcset="data:,a",e.src="data:,a",l.supSrcset=h.complete===e.complete,l.supPicture=l.supSrcset&&l.supPicture}(t.createElement("img")),l.supSrcset&&!l.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",r=t.createElement("img"),n=function(){2===r.width&&(l.supSizes=!0),c=l.supSrcset&&!l.supSizes,f=!0,setTimeout(W)};r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",r.src=e}():f=!0,l.selShort="picture>img,img[srcset]",l.sel=l.selShort,l.cfg=A,l.DPR=F||1,l.u=I,l.types=v,l.setSize=d,l.makeUrl=H(function(e){return C.href=e,C.href}),l.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},l.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?l.matchesMedia=function(e){return!e||matchMedia(e).matches}:l.matchesMedia=l.mMQ,l.matchesMedia.apply(this,arguments)},l.mMQ=function(e){return!e||$(e)},l.calcLength=function(e){var t=$(e,!0)||!1;return t<0&&(t=!1),t},l.supportsType=function(e){return!e||v[e]},l.parseSize=H(function(e){var t=(e||"").match(x);return{media:t&&t[1],length:t&&t[2]}}),l.parseSet=function(e){return e.cands||(e.cands=function(e,t){function r(t){var r,n=t.exec(e.substring(d));if(n)return r=n[0],d+=r.length,r}function i(){var e,r,n,i,s,c,u,l,f,d=!1,p={};for(i=0;i<a.length;i++)c=(s=a[i])[s.length-1],u=s.substring(0,s.length-1),l=parseInt(u,10),f=parseFloat(u),U.test(u)&&"w"===c?((e||r)&&(d=!0),0===l?d=!0:e=l):q.test(u)&&"x"===c?((e||r||n)&&(d=!0),f<0?d=!0:r=f):U.test(u)&&"h"===c?((n||r)&&(d=!0),0===l?d=!0:n=l):d=!0;d||(p.url=o,e&&(p.w=e),r&&(p.d=r),n&&(p.h=n),n||r||e||(p.d=1),1===p.d&&(t.has1x=!0),p.set=t,h.push(p))}function s(){for(r(M),c="",u="in descriptor";;){if(l=e.charAt(d),"in descriptor"===u)if(n(l))c&&(a.push(c),c="",u="after descriptor");else{if(","===l)return d+=1,c&&a.push(c),void i();if("("===l)c+=l,u="in parens";else{if(""===l)return c&&a.push(c),void i();c+=l}}else if("in parens"===u)if(")"===l)c+=l,u="in descriptor";else{if(""===l)return a.push(c),void i();c+=l}else if("after descriptor"===u)if(n(l));else{if(""===l)return void i();u="in descriptor",d-=1}d+=1}}for(var o,a,c,u,l,f=e.length,d=0,h=[];;){if(r(z),d>=f)return h;o=r(k),a=[],","===o.slice(-1)?(o=o.replace(D,""),i()):s()}}(e.srcset,e)),e.cands},l.getEmValue=function(){var e;if(!a&&(e=t.body)){var r=t.createElement("div"),n=g.style.cssText,i=e.style.cssText;r.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",g.style.cssText=j,e.style.cssText=j,e.appendChild(r),a=r.offsetWidth,e.removeChild(r),a=parseFloat(a,10),g.style.cssText=n,e.style.cssText=i}return a||16},l.calcListLength=function(e){if(!(e in L)||A.uT){var t=l.calcLength(function(e){function t(e){return!!(u.test(e)&&parseFloat(e)>=0)||!!f.test(e)||"0"===e||"-0"===e||"+0"===e}var r,i,s,o,a,c,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,f=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(s=(i=function(e){function t(){s&&(o.push(s),s="")}function r(){o[0]&&(a.push(o),o=[])}for(var i,s="",o=[],a=[],c=0,u=0,l=!1;;){if(""===(i=e.charAt(u)))return t(),r(),a;if(l){if("*"===i&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(n(i)){if(e.charAt(u-1)&&n(e.charAt(u-1))||!s){u+=1;continue}if(0===c){t(),u+=1;continue}i=" "}else if("("===i)c+=1;else if(")"===i)c-=1;else{if(","===i){t(),r(),u+=1;continue}if("/"===i&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}s+=i,u+=1}}}(e)).length,r=0;r<s;r++)if(o=i[r],a=o[o.length-1],t(a)){if(c=a,o.pop(),0===o.length)return c;if(o=o.join(" "),l.matchesMedia(o))return c}return"100vw"}(e));L[e]=t||I.width}return L[e]},l.setRes=function(e){var t;if(e)for(var r=0,n=(t=l.parseSet(e)).length;r<n;r++)G(t[r],e.sizes);return t},l.setRes.res=G,l.applySetCandidate=function(e,t){if(e.length){var r,n,a,c,u,f,d,h,p,m=t[l.ns],y=l.DPR;if(f=m.curSrc||t[_],(d=m.curCan||function(e,t,r){var n;return!r&&t&&(r=(r=e[l.ns].sets)&&r[r.length-1]),(n=o(t,r))&&(t=l.makeUrl(t),e[l.ns].curSrc=t,e[l.ns].curCan=n,n.res||G(n,n.set.sizes)),n}(t,f,e[0].set))&&d.set===e[0].set&&((p=S&&!t.complete&&d.res-.1>y)||(d.cached=!0,d.res>=y&&(u=d))),!u)for(e.sort(s),u=e[(c=e.length)-1],n=0;n<c;n++)if((r=e[n]).res>=y){u=e[a=n-1]&&(p||f!==l.makeUrl(r.url))&&i(e[a].res,r.res,y,e[a].cached)?e[a]:r;break}u&&(h=l.makeUrl(u.url),m.curSrc=h,m.curCan=u,h!==f&&l.setSrc(t,u),l.setSize(t))}},l.setSrc=function(e,t){var r;e.src=t.url,"image/svg+xml"===t.set.type&&(r=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=r))},l.getSet=function(e){var t,r,n,i=!1,s=e[l.ns].sets;for(t=0;t<s.length&&!i;t++)if((r=s[t]).srcset&&l.matchesMedia(r.media)&&(n=l.supportsType(r.type))){"pending"===n&&(r=n),i=r;break}return i},l.parseSets=function(e,t,r){var n,i,s,a,u=t&&"PICTURE"===t.nodeName.toUpperCase(),f=e[l.ns];(void 0===f.src||r.src)&&(f.src=p.call(e,"src"),f.src?m.call(e,b,f.src):y.call(e,b)),(void 0===f.srcset||r.srcset||!l.supSrcset||e.srcset)&&(n=p.call(e,"srcset"),f.srcset=n,a=!0),f.sets=[],u&&(f.pic=!0,function(e,t){var r,n,i,s,o=e.getElementsByTagName("source");for(r=0,n=o.length;r<n;r++)(i=o[r])[l.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,f.sets)),f.srcset?(i={srcset:f.srcset,sizes:p.call(e,"sizes")},f.sets.push(i),(s=(c||f.src)&&T.test(f.srcset||""))||!f.src||o(f.src,i)||i.has1x||(i.srcset+=", "+f.src,i.cands.push({url:f.src,d:1,set:i}))):f.src&&f.sets.push({srcset:f.src,sizes:null}),f.curCan=null,f.curSrc=void 0,f.supported=!(u||i&&!l.supSrcset||s&&!l.supSizes),a&&l.supSrcset&&!f.supported&&(n?(m.call(e,w,n),e.srcset=""):y.call(e,w)),f.supported&&!f.srcset&&(!f.src&&e.src||e.src!==l.makeUrl(f.src))&&(null===f.src?e.removeAttribute("src"):e.src=f.src),f.parsed=!0},l.fillImg=function(e,t){var r,n=t.reselect||t.reevaluate;e[l.ns]||(e[l.ns]={}),r=e[l.ns],(n||r.evaled!==u)&&(r.parsed&&!t.reevaluate||l.parseSets(e,e.parentNode,t),r.supported?r.evaled=u:function(e){var t,r=l.getSet(e),n=!1;"pending"!==r&&(n=u,r&&(t=l.setRes(r),l.applySetCandidate(t,e))),e[l.ns].evaled=n}(e))},l.setupRun=function(){O&&!R&&F===e.devicePixelRatio||(R=!1,F=e.devicePixelRatio,B={},L={},l.DPR=F||1,I.width=Math.max(e.innerWidth||0,g.clientWidth),I.height=Math.max(e.innerHeight||0,g.clientHeight),I.vw=I.width/100,I.vh=I.height/100,u=[I.height,I.width,F].join("-"),I.em=l.getEmValue(),I.rem=I.em)},l.supPicture?(W=d,l.fillImg=d):function(){var r,n=e.attachEvent?/d$|^c/:/d$|^c|^i/,i=function(){var e=t.readyState||"";s=setTimeout(i,"loading"===e?200:999),t.body&&(l.fillImgs(),(r=r||n.test(e))&&clearTimeout(s))},s=setTimeout(i,t.body?9:99),o=g.clientHeight;N(e,"resize",function(e,t){var r,n,i=function(){var s=new Date-n;s<t?r=setTimeout(i,t-s):(r=null,e())};return function(){n=new Date,r||(r=setTimeout(i,t))}}(function(){R=Math.max(e.innerWidth||0,g.clientWidth)!==I.width||g.clientHeight!==o,o=g.clientHeight,R&&l.fillImgs()},99)),N(t,"readystatechange",i)}(),l.picturefill=W,l.fillImgs=W,l.teardownRun=d,W._=l,e.picturefillCFG={pf:l,push:function(e){var t=e.shift();"function"==typeof l[t]?l[t].apply(l,e):(A[t]=e[0],O&&l.fillImgs({reselect:!0}))}};for(;P&&P.length;)e.picturefillCFG.push(P.shift());e.picturefill=W,"object"==typeof module&&"object"==typeof module.exports?module.exports=W:"function"==typeof define&&define.amd&&define("picturefill",function(){return W}),l.supPicture||(v["image/webp"]=function(t,r){var n=new e.Image;return n.onerror=function(){v[t]=!1,W()},n.onload=function(){v[t]=1===n.width,W()},n.src=r,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),function(e){function t(){}function r(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],a(e,this)}function n(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,r._immediateFn(function(){var r=1===e._state?t.onFulfilled:t.onRejected;if(null!==r){var n;try{n=r(e._value)}catch(e){return void s(t.promise,e)}i(t.promise,n)}else(1===e._state?i:s)(t.promise,e._value)})):e._deferreds.push(t)}function i(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void o(e);if("function"==typeof n)return void a(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,o(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,o(e)}function o(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,i=e._deferreds.length;t<i;t++)n(e,e._deferreds[t]);e._deferreds=null}function a(e,t){var r=!1;try{e(function(e){r||(r=!0,i(t,e))},function(e){r||(r=!0,s(t,e))})}catch(e){if(r)return;r=!0,s(t,e)}}var c=setTimeout;r.prototype.catch=function(e){return this.then(null,e)},r.prototype.then=function(e,r){var i=new this.constructor(t);return n(this,new function(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}(e,r,i)),i},r.all=function(e){var t=Array.prototype.slice.call(e);return new r(function(e,r){function n(s,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var a=o.then;if("function"==typeof a)return void a.call(o,function(e){n(s,e)},r)}t[s]=o,0==--i&&e(t)}catch(e){r(e)}}if(0===t.length)return e([]);for(var i=t.length,s=0;s<t.length;s++)n(s,t[s])})},r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,r){r(e)})},r.race=function(e){return new r(function(t,r){for(var n=0,i=e.length;n<i;n++)e[n].then(t,r)})},r._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){c(e,0)},r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},r._setImmediateFn=function(e){r._immediateFn=e},r._setUnhandledRejectionFn=function(e){r._unhandledRejectionFn=e},"undefined"!=typeof module&&module.exports?module.exports=r:e.Promise||(e.Promise=r)}(this),function(e,t){"use strict";function r(e){return c[a]=n.apply(t,e),a++}function n(e){var r=[].slice.call(arguments,1);return function(){"function"==typeof e?e.apply(t,r):new Function(""+e)()}}function i(e){if(u)setTimeout(n(i,e),0);else{var t=c[e];if(t){u=!0;try{t()}finally{s(e),u=!1}}}}function s(e){delete c[e]}if(!e.setImmediate){var o,a=1,c={},u=!1,l=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(){var e=r(arguments);return process.nextTick(n(i,e)),e}:function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(r){r.source===e&&"string"==typeof r.data&&0===r.data.indexOf(t)&&i(+r.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),o=function(){var n=r(arguments);return e.postMessage(t+n,"*"),n}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){i(e.data)},o=function(){var t=r(arguments);return e.port2.postMessage(t),t}}():l&&"onreadystatechange"in l.createElement("script")?function(){var e=l.documentElement;o=function(){var t=r(arguments),n=l.createElement("script");return n.onreadystatechange=function(){i(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n),t}}():o=function(){var e=r(arguments);return setTimeout(n(i,e),0),e},f.setImmediate=o,f.clearImmediate=s}}("undefined"==typeof self?"undefined"==typeof global?this:global:self),String.prototype.includes||(String.prototype.includes=function(e,t){"use strict";return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)});