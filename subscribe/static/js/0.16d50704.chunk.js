(this.webpackJsonpdemos_dapp=this.webpackJsonpdemos_dapp||[]).push([[0],{280:function(e,t,n){"use strict";var r=n(290),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return"undefined"===typeof e}function s(e){return null!==e&&"object"===typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]="object"===typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},283:function(e,t,n){"use strict";n(93),n(139),n(300)},284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(138)),o=c(n(55)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),a=c(n(324)),s=c(n(109));function c(e){return e&&e.__esModule?e:{default:e}}var u={duration:3,mask:!0},f=void 0,l=void 0;function p(e,t){var n;a.default.newInstance({prefixCls:"am-toast",style:{},transitionName:"am-fade",className:(0,o.default)((n={},(0,r.default)(n,"am-toast-mask",e),(0,r.default)(n,"am-toast-nomask",!e),n))},(function(e){return t&&t(e)}))}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.duration,r=arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:u.mask,a={info:"",success:"success",fail:"fail",offline:"dislike",loading:"loading"},c=a[t];l=!1,p(o,(function(t){if(t){if(f&&(f.destroy(),f=null),l)return t.destroy(),void(l=!1);f=t,t.notice({duration:n,style:{},content:c?i.createElement("div",{className:"am-toast-text am-toast-text-icon",role:"alert","aria-live":"assertive"},i.createElement(s.default,{type:c,size:"lg"}),i.createElement("div",{className:"am-toast-text-info"},e)):i.createElement("div",{className:"am-toast-text",role:"alert","aria-live":"assertive"},i.createElement("div",null,e)),closable:!0,onClose:function(){r&&r(),t.destroy(),t=null,f=null}})}}))}t.default={SHORT:3,LONG:8,show:function(e,t,n){return d(e,"info",t,(function(){}),n)},info:function(e,t,n,r){return d(e,"info",t,n,r)},success:function(e,t,n,r){return d(e,"success",t,n,r)},fail:function(e,t,n,r){return d(e,"fail",t,n,r)},offline:function(e,t,n,r){return d(e,"offline",t,n,r)},loading:function(e,t,n,r){return d(e,"loading",t,n,r)},hide:function(){f?(f.destroy(),f=null):l=!0},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.duration,n=void 0===t?3:t,r=e.mask;u.duration=n,!1===r&&(u.mask=!1)}},e.exports=t.default},286:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},287:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},288:function(e,t){e.exports=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}},289:function(e,t,n){e.exports=n(303)},290:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},291:function(e,t,n){"use strict";var r=n(280);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},292:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},293:function(e,t,n){"use strict";(function(t){var r=n(280),o=n(308),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s={adapter:function(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n(294)),e}(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){s.headers[e]=r.merge(i)})),e.exports=s}).call(this,n(32))},294:function(e,t,n){"use strict";var r=n(280),o=n(309),i=n(291),a=n(311),s=n(314),c=n(315),u=n(295);e.exports=function(e){return new Promise((function(t,f){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(h+":"+m)}var v=a(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,f,r),d=null}},d.onabort=function(){d&&(f(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){f(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(u(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(316),E=(e.withCredentials||c(v))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;E&&(p[e.xsrfHeaderName]=E)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(g){if("json"!==e.responseType)throw g}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),f(e),d=null)})),void 0===l&&(l=null),d.send(l)}))}},295:function(e,t,n){"use strict";var r=n(310);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},296:function(e,t,n){"use strict";var r=n(280);e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])})),r.forEach(i,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])})),r.forEach(a,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}));var s=o.concat(i).concat(a),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(c,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])})),n}},297:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},298:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return function(){var t,n=r(e);if(o()){var i=r(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return a(this,t)}}n.d(t,"a",(function(){return s}))},299:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},300:function(e,t,n){},301:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},302:function(e,t,n){try{var r=n(288)}catch(s){r=n(288)}var o=/\s+/,i=Object.prototype.toString;function a(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}e.exports=function(e){return new a(e)},a.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return~r(t,e)||t.push(e),this.el.className=t.join(" "),this},a.prototype.remove=function(e){if("[object RegExp]"==i.call(e))return this.removeMatching(e);if(this.list)return this.list.remove(e),this;var t=this.array(),n=r(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this},a.prototype.removeMatching=function(e){for(var t=this.array(),n=0;n<t.length;n++)e.test(t[n])&&this.remove(t[n]);return this},a.prototype.toggle=function(e,t){return this.list?("undefined"!==typeof t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):("undefined"!==typeof t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},a.prototype.array=function(){var e=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(o);return""===e[0]&&e.shift(),e},a.prototype.has=a.prototype.contains=function(e){return this.list?this.list.contains(e):!!~r(this.array(),e)}},303:function(e,t,n){"use strict";var r=n(280),o=n(290),i=n(304),a=n(296);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n(293));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(297),c.CancelToken=n(317),c.isCancel=n(292),c.all=function(e){return Promise.all(e)},c.spread=n(318),e.exports=c,e.exports.default=c},304:function(e,t,n){"use strict";var r=n(280),o=n(291),i=n(305),a=n(306),s=n(296);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},305:function(e,t,n){"use strict";var r=n(280);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},306:function(e,t,n){"use strict";var r=n(280),o=n(307),i=n(292),a=n(293);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},307:function(e,t,n){"use strict";var r=n(280);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},308:function(e,t,n){"use strict";var r=n(280);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},309:function(e,t,n){"use strict";var r=n(295);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},310:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},311:function(e,t,n){"use strict";var r=n(312),o=n(313);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},312:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},313:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},314:function(e,t,n){"use strict";var r=n(280),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},315:function(e,t,n){"use strict";var r=n(280);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},316:function(e,t,n){"use strict";var r=n(280);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},317:function(e,t,n){"use strict";var r=n(297);function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},318:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},324:function(e,t,n){"use strict";n.r(t);var r=n(301),o=n.n(r),i=n(138),a=n.n(i),s=n(91),c=n.n(s),u=n(56),f=n.n(u),l=n(57),p=n.n(l),d=n(58),h=n.n(d),m=n(59),v=n.n(m),y=n(0),E=n.n(y),g=n(31),b=n.n(g),w=n(92),T=n.n(w),k=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");return"function"!==typeof t.componentWillReceiveProps?e:E.a.Profiler?(t.UNSAFE_componentWillReceiveProps=t.componentWillReceiveProps,delete t.componentWillReceiveProps,e):e};function A(e){var t=[];return E.a.Children.forEach(e,(function(e){t.push(e)})),t}function x(e,t){var n=null;return e&&e.forEach((function(e){n||e&&e.key===t&&(n=e)})),n}function C(e,t,n){var r=null;return e&&e.forEach((function(e){if(e&&e.key===t&&e.props[n]){if(r)throw new Error("two child with same key for <rc-animate> children");r=e}})),r}var L=n(94),S=n.n(L),O={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},N={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},j=[],R=[];function P(e,t,n){e.addEventListener(t,n,!1)}function _(e,t,n){e.removeEventListener(t,n,!1)}"undefined"!==typeof window&&"undefined"!==typeof document&&function(){var e=document.createElement("div").style;function t(t,n){for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];for(var i in o)if(i in e){n.push(o[i]);break}}}"AnimationEvent"in window||(delete O.animationstart.animation,delete N.animationend.animation),"TransitionEvent"in window||(delete O.transitionstart.transition,delete N.transitionend.transition),t(O,j),t(N,R)}();var D={startEvents:j,addStartEventListener:function(e,t){0!==j.length?j.forEach((function(n){P(e,n,t)})):window.setTimeout(t,0)},removeStartEventListener:function(e,t){0!==j.length&&j.forEach((function(n){_(e,n,t)}))},endEvents:R,addEndEventListener:function(e,t){0!==R.length?R.forEach((function(n){P(e,n,t)})):window.setTimeout(t,0)},removeEndEventListener:function(e,t){0!==R.length&&R.forEach((function(n){_(e,n,t)}))}},M=n(302),B=n.n(M),U=0!==D.endEvents.length,q=["Webkit","Moz","O","ms"],z=["-webkit-","-moz-","-o-","ms-",""];function W(e,t){for(var n=window.getComputedStyle(e,null),r="",o=0;o<z.length&&!(r=n.getPropertyValue(z[o]+t));o++);return r}function F(e){if(U){var t=parseFloat(W(e,"transition-delay"))||0,n=parseFloat(W(e,"transition-duration"))||0,r=parseFloat(W(e,"animation-delay"))||0,o=parseFloat(W(e,"animation-duration"))||0,i=Math.max(n+t,o+r);e.rcEndAnimTimeout=setTimeout((function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()}),1e3*i+200)}}function K(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}var H=function(e,t,n){var r="object"===("undefined"===typeof t?"undefined":S()(t)),o=r?t.name:t,i=r?t.active:t+"-active",a=n,s=void 0,c=void 0,u=B()(e);return n&&"[object Object]"===Object.prototype.toString.call(n)&&(a=n.end,s=n.start,c=n.active),e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),K(e),u.remove(o),u.remove(i),D.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,a&&a())},D.addEndEventListener(e,e.rcEndListener),s&&s(),u.add(o),e.rcAnimTimeout=setTimeout((function(){e.rcAnimTimeout=null,u.add(i),c&&setTimeout(c,0),F(e)}),30),{stop:function(){e.rcEndListener&&e.rcEndListener()}}};H.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),K(e),D.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},D.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout((function(){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n]);e.rcAnimTimeout=null,F(e)}),0)},H.setTransition=function(e,t,n){var r=t,o=n;void 0===n&&(o=r,r=""),r=r||"",q.forEach((function(t){e.style[t+"Transition"+r]=o}))},H.isCssAnimationSupported=U;var I=H,V={isAppearSupported:function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},isEnterSupported:function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},isLeaveSupported:function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},allowAppearCallback:function(e){return e.transitionAppear||e.animation.appear},allowEnterCallback:function(e){return e.transitionEnter||e.animation.enter},allowLeaveCallback:function(e){return e.transitionLeave||e.animation.leave}},J={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},X=function(e){function t(){return f()(this,t),h()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v()(t,e),p()(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(e){V.isEnterSupported(this.props)?this.transition("enter",e):e()}},{key:"componentWillAppear",value:function(e){V.isAppearSupported(this.props)?this.transition("appear",e):e()}},{key:"componentWillLeave",value:function(e){V.isLeaveSupported(this.props)?this.transition("leave",e):e()}},{key:"transition",value:function(e,t){var n=this,r=T.a.findDOMNode(this),o=this.props,i=o.transitionName,a="object"===typeof i;this.stop();var s=function(){n.stopper=null,t()};if((U||!o.animation[e])&&i&&o[J[e]]){var c=a?i[e]:i+"-"+e,u=c+"-active";a&&i[e+"Active"]&&(u=i[e+"Active"]),this.stopper=I(r,{name:c,active:u},s)}else this.stopper=o.animation[e](r,s)}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(E.a.Component);X.propTypes={children:b.a.any,animation:b.a.any,transitionName:b.a.any};var $=X,G="rc_animate_"+Date.now();function Q(e){var t=e.children;return E.a.isValidElement(t)&&!t.key?E.a.cloneElement(t,{key:G}):t}function Y(){}var Z=function(e){function t(e){f()(this,t);var n=h()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return ee.call(n),n.currentlyAnimatingKeys={},n.keysToEnter=[],n.keysToLeave=[],n.state={children:A(Q(e))},n.childrenRefs={},n}return v()(t,e),p()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.showProp,n=this.state.children;t&&(n=n.filter((function(e){return!!e.props[t]}))),n.forEach((function(t){t&&e.performAppear(t.key)}))}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.nextProps=e;var n=A(Q(e)),r=this.props;r.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach((function(e){t.stop(e)}));var o=r.showProp,i=this.currentlyAnimatingKeys,s=r.exclusive?A(Q(r)):this.state.children,c=[];o?(s.forEach((function(e){var t=e&&x(n,e.key),r=void 0;(r=t&&t.props[o]||!e.props[o]?t:E.a.cloneElement(t||e,a()({},o,!0)))&&c.push(r)})),n.forEach((function(e){e&&x(s,e.key)||c.push(e)}))):c=function(e,t){var n=[],r={},o=[];return e.forEach((function(e){e&&x(t,e.key)?o.length&&(r[e.key]=o,o=[]):o.push(e)})),t.forEach((function(e){e&&Object.prototype.hasOwnProperty.call(r,e.key)&&(n=n.concat(r[e.key])),n.push(e)})),n=n.concat(o)}(s,n),this.setState({children:c}),n.forEach((function(e){var n=e&&e.key;if(!e||!i[n]){var r=e&&x(s,n);if(o){var a=e.props[o];if(r)!C(s,n,o)&&a&&t.keysToEnter.push(n);else a&&t.keysToEnter.push(n)}else r||t.keysToEnter.push(n)}})),s.forEach((function(e){var r=e&&e.key;if(!e||!i[r]){var a=e&&x(n,r);if(o){var s=e.props[o];if(a)!C(n,r,o)&&s&&t.keysToLeave.push(r);else s&&t.keysToLeave.push(r)}else a||t.keysToLeave.push(r)}}))}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(e,t){var n=this.props.showProp;return n?C(e,t,n):x(e,t)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var t=this.childrenRefs[e];t&&t.stop()}},{key:"render",value:function(){var e=this,t=this.props;this.nextProps=t;var n=this.state.children,r=null;n&&(r=n.map((function(n){if(null===n||void 0===n)return n;if(!n.key)throw new Error("must set key for <rc-animate> children");return E.a.createElement($,{key:n.key,ref:function(t){e.childrenRefs[n.key]=t},animation:t.animation,transitionName:t.transitionName,transitionEnter:t.transitionEnter,transitionAppear:t.transitionAppear,transitionLeave:t.transitionLeave},n)})));var o=t.component;if(o){var i=t;return"string"===typeof o&&(i=c()({className:t.className,style:t.style},t.componentProps)),E.a.createElement(o,i,r)}return r[0]||null}}]),t}(E.a.Component);Z.isAnimate=!0,Z.propTypes={className:b.a.string,style:b.a.object,component:b.a.any,componentProps:b.a.object,animation:b.a.object,transitionName:b.a.oneOfType([b.a.string,b.a.object]),transitionEnter:b.a.bool,transitionAppear:b.a.bool,exclusive:b.a.bool,transitionLeave:b.a.bool,onEnd:b.a.func,onEnter:b.a.func,onLeave:b.a.func,onAppear:b.a.func,showProp:b.a.string,children:b.a.node},Z.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:Y,onEnter:Y,onLeave:Y,onAppear:Y};var ee=function(){var e=this;this.performEnter=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e,t,"enter")))},this.performAppear=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e,t,"appear")))},this.handleDoneAdding=function(t,n){var r=e.props;if(delete e.currentlyAnimatingKeys[t],!r.exclusive||r===e.nextProps){var o=A(Q(r));e.isValidChildByKey(o,t)?"appear"===n?V.allowAppearCallback(r)&&(r.onAppear(t),r.onEnd(t,!0)):V.allowEnterCallback(r)&&(r.onEnter(t),r.onEnd(t,!0)):e.performLeave(t)}},this.performLeave=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e,t)))},this.handleDoneLeaving=function(t){var n=e.props;if(delete e.currentlyAnimatingKeys[t],!n.exclusive||n===e.nextProps){var r=A(Q(n));if(e.isValidChildByKey(r,t))e.performEnter(t);else{var o=function(){V.allowLeaveCallback(n)&&(n.onLeave(t),n.onEnd(t,!1))};!function(e,t,n){var r=e.length===t.length;return r&&e.forEach((function(e,o){var i=t[o];e&&i&&(e&&!i||!e&&i||e.key!==i.key||n&&e.props[n]!==i.props[n])&&(r=!1)})),r}(e.state.children,r,n.showProp)?e.setState({children:r},o):o()}}}},te=k(Z);var ne=n(55),re=n.n(ne),oe=function(e){function t(){var e,n,r,o;f()(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=r=h()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.close=function(){r.clearCloseTimer(),r.props.onClose()},r.startCloseTimer=function(){r.props.duration&&(r.closeTimer=setTimeout((function(){r.close()}),1e3*r.props.duration))},r.clearCloseTimer=function(){r.closeTimer&&(clearTimeout(r.closeTimer),r.closeTimer=null)},o=n,h()(r,o)}return v()(t,e),p()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",r=(e={},a()(e,""+n,1),a()(e,n+"-closable",t.closable),a()(e,t.className,!!t.className),e);return E.a.createElement("div",{className:re()(r),style:t.style},E.a.createElement("div",{className:n+"-content"},t.children),t.closable?E.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},E.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(y.Component);oe.propTypes={duration:b.a.number,onClose:b.a.func,children:b.a.any},oe.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var ie=oe,ae=0,se=Date.now();function ce(){return"rcNotification_"+se+"_"+ae++}var ue=function(e){function t(){var e,n,r,o;f()(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=r=h()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={notices:[]},r.add=function(e){var t=e.key=e.key||ce();r.setState((function(n){var r=n.notices;if(!r.filter((function(e){return e.key===t})).length)return{notices:r.concat(e)}}))},r.remove=function(e){r.setState((function(t){return{notices:t.notices.filter((function(t){return t.key!==e}))}}))},o=n,h()(r,o)}return v()(t,e),p()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,r=this.state.notices.map((function(e){var r=function(){var e=[].slice.call(arguments,0);return 1===e.length?e[0]:function(){for(var t=0;t<e.length;t++)e[t]&&e[t].apply&&e[t].apply(this,arguments)}}(t.remove.bind(t,e.key),e.onClose);return E.a.createElement(ie,c()({prefixCls:n.prefixCls},e,{onClose:r}),e.content)})),o=(e={},a()(e,n.prefixCls,1),a()(e,n.className,!!n.className),e);return E.a.createElement("div",{className:re()(o),style:n.style},E.a.createElement(te,{transitionName:this.getTransitionName()},r))}}]),t}(y.Component);ue.propTypes={prefixCls:b.a.string,transitionName:b.a.string,animation:b.a.oneOfType([b.a.string,b.a.object]),style:b.a.object},ue.defaultProps={prefixCls:"rmc-notification",animation:"fade",style:{top:65,left:"50%"}},ue.newInstance=function(e,t){var n=e||{},r=n.getContainer,i=o()(n,["getContainer"]),a=void 0;r?a=r():(a=document.createElement("div"),document.body.appendChild(a));var s=!1;T.a.render(E.a.createElement(ue,c()({},i,{ref:function(e){s||(s=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){T.a.unmountComponentAtNode(a),r||document.body.removeChild(a)}}))}})),a)};var fe=ue;t.default=fe}}]);