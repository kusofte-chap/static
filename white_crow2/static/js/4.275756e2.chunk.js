/*! For license information please see 4.275756e2.chunk.js.LICENSE.txt */
(this.webpackJsonputxo=this.webpackJsonputxo||[]).push([[4],{225:function(e,a,t){"use strict";t.d(a,"e",(function(){return r})),t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return s})),t.d(a,"d",(function(){return i})),t.d(a,"c",(function(){return l}));t(5),t(15);var n="http://proxy-mainnet.doschain.org/insight";"games.doschain.org"!==window.location.host&&(n="http://35.220.198.141:8087");var r=function(e){return window.demos.request({method:"GET",url:"".concat(n,"/v1/api/user/").concat(e)})},c=function(e,a){return window.demos.request({method:"POST",url:"".concat(n,"/v1/api/user/").concat(e,"/bind"),data:{code:a}})},s=function(e,a){return window.demos.request({method:"POST",url:"".concat(n,"/v1/api/user/").concat(e,"/active"),data:{rawtx:a}})},i=function(e){var a=e.addr,t=e.type,r=void 0===t?0:t;return window.demos.request({method:"GET",url:"".concat(n,"/v1/api/matrix/").concat(a,"/").concat(r)})},l=function(e){var a=e.id,t=e.addr,r=e.type;return window.demos.request({method:"POST",url:"".concat(n,"/v1/api/matrix/").concat(t,"/").concat(r,"/").concat(a,"/pay")})}},232:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===c)for(var i in n)t.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},255:function(e,a,t){},256:function(e,a,t){},260:function(e,a,t){"use strict";t.r(a);t(5),t(40),t(15);function n(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r=t(13),c=t(0),s=t.n(c),i=t(232),l=t.n(i),o=t(56),u=t(59);t(255);function m(e){var a=e.No,t=e.price,n=void 0===t?0:t,r=e.status,c=void 0===r?1:r,i=e.children,o=e.className,m=e.onTap,d=void 0===m?function(){}:m;return s.a.createElement("div",{className:"x3-x4__matrix ".concat(o)},s.a.createElement("div",{className:l()(Object(u.a)({"x-button":1},"status_".concat(c),1)),onClick:d},s.a.createElement("span",{className:"No"},a),s.a.createElement("span",{className:"price"},n),s.a.createElement("span",{className:l()({cart:1,hide:2!==c})},"BUY"),s.a.createElement("i",{className:l()({lock:1,hide:1!==c})})),s.a.createElement("div",{className:"x3-children"},i.map((function(e,a){return s.a.createElement("div",{key:a.toString(),className:l()({"x-child":1,fill:e})})}))),s.a.createElement("div",{className:"x3-barnchs"},s.a.createElement("div",null,s.a.createElement("div",{className:"top"}),s.a.createElement("div",{className:"bottom"})),s.a.createElement("div",null),s.a.createElement("div",null,s.a.createElement("div",{className:"top"}),s.a.createElement("div",{className:"bottom"}))),s.a.createElement("div",{className:"x-info"},s.a.createElement("span",null,"0"),s.a.createElement("span",null,"0")))}function d(e){var a=e.No,t=e.children,n=e.status,r=void 0===n?1:n,c=e.price,i=void 0===c?0:c,o=e.className,m=e.onTap,d=void 0===m?function(){}:m;return s.a.createElement("div",{className:"x3-x4__matrix ".concat(o)},s.a.createElement("div",{className:l()(Object(u.a)({"x-button":1},"status_".concat(r),1)),onClick:d},s.a.createElement("span",{className:"No"},a),s.a.createElement("span",{className:"price"},i),s.a.createElement("span",{className:l()({cart:1,hide:2!==r})},"BUY"),s.a.createElement("i",{className:l()({lock:1,hide:2==r})})),s.a.createElement("div",{className:"x4-branchs-level1"},s.a.createElement("div",{className:"line"}),s.a.createElement("div",{className:"rect"})),s.a.createElement("div",{className:"x4-children__level1"},t.slice(0,2).map((function(e,a){return s.a.createElement("div",{key:a.toString(),className:l()({"x-child":1,fill:e})})}))),s.a.createElement("div",{className:"x4-branchs-level2"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)),s.a.createElement("div",{className:"x4-children__level2"},t.slice(1).map((function(e,a){return s.a.createElement("div",{key:a.toString(),className:l()({"x-child":1,fill:e})})}))),s.a.createElement("div",{className:"x-info"},s.a.createElement("span",null,"0"),s.a.createElement("span",null,"0")))}var h=[{id:1,No:1,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:2,No:2,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:3,No:3,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:4,No:4,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:5,No:5,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:6,No:6,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:7,No:7,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:8,No:8,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:9,No:9,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:10,No:10,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:11,No:11,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:12,No:12,status:1,children:[0,0,0],num:0,repeat:0,hash:""}],p=[{id:1,No:1,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:2,No:2,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:3,No:3,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:4,No:4,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:5,No:5,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:6,No:6,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:7,No:7,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:8,No:8,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:9,No:9,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:10,No:10,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:11,No:11,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:12,No:12,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""}];t(225),t(256);a.default=Object(o.h)()((function(e){Object(c.useContext)(o.c).address;var a=Object(c.useState)(0),t=Object(r.a)(a,2),i=t[0],u=t[1],v=Object(c.useState)(0),N=Object(r.a)(v,2),E=N[0],f=(N[1],Object(c.useState)((function(){return n(0===i?h:p)}))),b=Object(r.a)(f,2),x=b[0],y=b[1];Object(c.useEffect)((function(){var e=x.map((function(e,a){return e.price=.25*Math.pow(2,a),e}));y(e)}),[]);var g=function(e){e!==i&&u(e)};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"matrix-page"},s.a.createElement(o.g,Object.assign({title:"\u77e9\u9635\u5217\u8868"},e)),s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"tab"},s.a.createElement("button",{className:l()({active:0===i}),onClick:function(){return g(0)}},"X3"),s.a.createElement("button",{className:l()({active:1===i}),onClick:function(){return g(1)}},"X4")),s.a.createElement(o.a,{className:l()({"p-r-20 p-l-20":1==i})},s.a.createElement("div",{className:"info"},s.a.createElement("span",null,"FORSAGE"),s.a.createElement("span",null,0===i?"X3":"X4")),s.a.createElement("div",{className:"matrix-list"},x.map((function(e){return 0===i?s.a.createElement(m,Object.assign({key:e.id,className:"m-b-80 p-r-20 p-l-20"},e)):s.a.createElement(d,Object.assign({key:e.id,className:"m-b-80"},e))})))))),s.a.createElement(o.f,{visible:E,showClose:!0,className:"validatting"},s.a.createElement("div",{className:"text"},s.a.createElement("p",null,"HASH:dsssdsdsndishid "),s.a.createElement("p",null,"\u6821\u9a8c\u6821\u9a8chash\u6570")),s.a.createElement("div",{className:"bar"})))}))}}]);