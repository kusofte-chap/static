/*! For license information please see 5.1deff2ef.chunk.js.LICENSE.txt */
(this.webpackJsonputxo=this.webpackJsonputxo||[]).push([[5],{225:function(e,t,a){"use strict";a.d(t,"g",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"f",(function(){return u}));var n="http://proxy-mainnet.doschain.org/insight";"games.doschain.org"!==window.location.host&&(n="http://35.220.198.141:8087");var r=function(e){return window.demos.request({method:"GET",url:"".concat(n,"/v1/api/user/").concat(e)})},c=function(e,t){return window.demos.request({method:"POST",url:"".concat(n,"/v1/api/user/").concat(e,"/bind"),data:{code:t}})},s=function(e,t){return window.demos.request({method:"POST",url:"".concat(n,"/v1/api/user/").concat(e,"/active"),data:{rawtx:t}})},i=function(e){var t=e.addr,a=e.type,r=void 0===a?0:a;return window.demos.request({method:"GET",url:"".concat(n,"/v1/api/matrix/").concat(t,"/").concat(r)})},l=function(e){var t=e.id,a=e.addr,r=e.type,c=e.rawtx;return window.demos.request({method:"POST",url:"".concat(n,"/v1/api/matrix/").concat(a,"/").concat(r,"/").concat(t,"/pay"),data:{rawtx:c}})},o=function(e){var t=e.addr,a=e.type,r=e.id;return window.demos.request({method:"GET",url:"".concat(n,"/v1/api/matrix/").concat(t,"/").concat(a,"/").concat(r)})},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,c=arguments.length>4?arguments[4]:void 0;return window.demos.request({method:"GET",url:"".concat(n,"/v1/api/matrix/").concat(e,"/").concat(t,"/").concat(a,"/orders?page=").concat(r,"&limit=").concat(c)})}},226:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===c)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n=[{id:1,No:1,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:2,No:2,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:3,No:3,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:4,No:4,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:5,No:5,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:6,No:6,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:7,No:7,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:8,No:8,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:9,No:9,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:10,No:10,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:11,No:11,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:12,No:12,status:1,children:[0,0,0],num:0,repeat:0,hash:""}],r=[{id:1,No:1,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:2,No:2,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:3,No:3,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:4,No:4,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:5,No:5,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:6,No:6,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:7,No:7,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:8,No:8,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:9,No:9,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:10,No:10,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:11,No:11,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:12,No:12,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""}]},230:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return n}))},257:function(e,t,a){},258:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),c=a(40),s=a(15),i=a(12),l=a(230),o=a(0),u=a.n(o),d=a(226),m=a.n(d),h=a(56),p=a(18),f=a(57),v=a(93);a(257);function N(e){var t=e.id,a=e.No,n=e.num,r=e.repeat,c=e.price,s=void 0===c?0:c,i=e.status,l=void 0===i?1:i,o=e.children,d=e.className,h=e.onTap,p=void 0===h?function(){}:h;return u.a.createElement("div",{className:"x3-x4__matrix ".concat(d)},u.a.createElement(v.b,{to:"/detail/".concat(t,"/0"),className:m()(Object(f.a)({"x-button":1},"status_".concat(l),1))},u.a.createElement("span",{className:"No"},a),u.a.createElement("span",{className:"price"},s),u.a.createElement("span",{className:m()({cart:1,"show-inlineBlock":2===l||4===l}),onClick:p},u.a.createElement("span",null,"\u8d2d\u4e70")),u.a.createElement("i",{className:m()({lock:1,"show-inlineBlock":1==l})})),u.a.createElement("div",{className:"x3-children"},u.a.createElement("div",{className:m()({"x-child":1,fill:o[0]})}),u.a.createElement("div",{className:m()({"x-child":1,fill:o[1]})}),u.a.createElement("div",{className:m()({"x-child":1,fill:o[2]})})),u.a.createElement("div",{className:"x3-barnchs"},u.a.createElement("div",null,u.a.createElement("div",{className:"top"}),u.a.createElement("div",{className:"bottom"})),u.a.createElement("div",null),u.a.createElement("div",null,u.a.createElement("div",{className:"top"}),u.a.createElement("div",{className:"bottom"}))),u.a.createElement("div",{className:"x-info"},u.a.createElement("span",null,n),u.a.createElement("span",null,r)))}function E(e){var t=e.id,a=e.No,n=e.num,r=e.repeat,c=e.children,s=e.status,i=void 0===s?1:s,l=e.price,o=void 0===l?0:l,d=e.className,h=e.onTap,p=void 0===h?function(){}:h;return u.a.createElement("div",{className:"x3-x4__matrix ".concat(d)},u.a.createElement(v.b,{to:"/detail/".concat(t,"/1"),className:m()(Object(f.a)({"x-button":1},"status_".concat(i),1))},u.a.createElement("span",{className:"No"},a),u.a.createElement("span",{className:"price"},o),u.a.createElement("span",{className:m()({cart:1,hide:2!==i}),onClick:p},"BUY"),u.a.createElement("i",{className:m()({lock:1,hide:1!==i})})),u.a.createElement("div",{className:"x4-branchs-level1"},u.a.createElement("div",{className:"line"}),u.a.createElement("div",{className:"rect"})),u.a.createElement("div",{className:"x4-children__level1"},u.a.createElement("div",{className:m()({"x-child":1,fill:c[0]})}),u.a.createElement("div",{className:m()({"x-child":1,fill:c[1]})})),u.a.createElement("div",{className:"x4-branchs-level2"},u.a.createElement("div",null),u.a.createElement("div",null),u.a.createElement("div",null),u.a.createElement("div",null)),u.a.createElement("div",{className:"x4-children__level2"},u.a.createElement("div",{className:m()({"x-child":1,fill:c[2]})}),u.a.createElement("div",{className:m()({"x-child":1,fill:c[3]})}),u.a.createElement("div",{className:m()({"x-child":1,fill:c[4]})}),u.a.createElement("div",{className:m()({"x-child":1,fill:c[5]})})),u.a.createElement("div",{className:"x-info"},u.a.createElement("span",null,n),u.a.createElement("span",null,r)))}var b=a(229),x=a(225),w=(a(258),function(e,t){for(var a=new Array(e).fill(0),n=0;n<e;n++)a[n]=n<t?1:0;return a}),O=function(e,t){var a=0===e?Object(l.a)(b.a):Object(l.a)(b.b);return a=a.map((function(e,a){return e.price=t*Math.pow(2,a),e}))};t.default=Object(h.h)()((function(e){var t=Object(o.useContext)(h.c).address,a=Object(o.useState)(""),n=Object(i.a)(a,2),l=n[0],d=n[1],f=Object(o.useState)(0),v=Object(i.a)(f,2),b=v[0],j=v[1],g=Object(o.useState)(!1),y=Object(i.a)(g,2),k=y[0],T=y[1],_="",S="",A="",q=sessionStorage["white_crow_".concat(t)];q&&(q=JSON.parse(q),_=q.address,A=q.qoute,S=q.price/1e8);var C=Object(o.useState)(O(0,S)),G=Object(i.a)(C,2),P=G[0],X=G[1];Object(o.useEffect)((function(){t&&B(0)}),[t]);var B=function(){var e=Object(s.a)(r.a.mark((function e(a){var n,s,i,l,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)({addr:t,type:a});case 2:if(n=e.sent,s=n.code,i=n.data,l=void 0===i?[]:i,console.log("matrix",a),console.log("list",l),o=l.length,u=O(a,S),200===s&&0!==o){e.next=13;break}return X(u),e.abrupt("return");case 13:if(12!==o){e.next=17;break}return u=u.map((function(e,t){return e.status=t<11?3:l[11].hash?4:3,e.children=w(0===b?3:6,l[t].index),e})),X(u),e.abrupt("return");case 17:u.forEach((function(e,t){var a=l.find((function(t){return t.id===e.id}));a?(u[t].status=a.hash?4:3,u[t]=Object(c.a)({},u[t],{},a),u[t].children=w(0===b?3:6,a.index)):(t===o?(console.log("len",o),u[t].status=l[o-1].hash?1:3):u[t].status=1,u[t].children=w(0===b?3:6,0))})),X(u);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){e!==b&&(B(e),j(e))},F=function(){var e=Object(s.a)(r.a.mark((function e(a,n){var c,s,i,l,o,u,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.stopPropagation(),n.preventDefault(),c=a.id,1!==(s=a.status)&&3!==s){e.next=5;break}return e.abrupt("return");case 5:if(4!==s){e.next=10;break}return d(a.hash),T(!0),R(a.hash),e.abrupt("return");case 10:return e.next=12,window.demos.balance("dos");case 12:if(!(e.sent<a.price)){e.next=16;break}return Object(p.d)(1010),e.abrupt("return");case 16:if(!window["".concat(a.id,"_lock")]){e.next=18;break}return e.abrupt("return");case 18:return window["".concat(a.id,"_lock")]=!0,e.next=21,window.demos.contractRaw("send",A,[{type:"address",value:_},{type:"uint256",value:1e8*a.price}]).catch((function(e){console.error(e),window["".concat(a.id,"_lock")]=null}));case 21:return i=e.sent,l={addr:t,type:b,id:c,rawtx:i},e.next=25,Object(x.c)(l);case 25:o=e.sent,u=o.code,m=o.data,200===u?(d(m),T(!0),R(m)):Object(p.d)(u),window["".concat(a.id,"_lock")]=null;case 30:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(e){if(e){var t=null;try{var a=function(){var n=Object(s.a)(r.a.mark((function n(){var c,s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.demos.dosdata.expand.transaction(e).catch((function(e){console.log("err",e)}));case 2:c=n.sent,(s=c.confirmations)&&s>=1?(Object(p.e)("\u8d2d\u4e70\u6210\u529f"),clearTimeout(t),T(!1),B(b)):t=setTimeout(a,2e3);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();clearTimeout(t),t=setTimeout(a,2e3)}catch(n){console.error(n)}}};return console.log(P),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"matrix-page"},u.a.createElement(h.g,Object.assign({title:"\u77e9\u9635\u5217\u8868"},e)),u.a.createElement("div",{className:"main"},u.a.createElement("div",{className:"tab"},u.a.createElement("button",{className:m()({active:0===b}),onClick:function(){return J(0)}},"X3"),u.a.createElement("button",{className:m()({active:1===b}),onClick:function(){return J(1)}},"X4")),u.a.createElement(h.a,{className:m()({"p-r-20 p-l-20":1==b})},u.a.createElement("div",{className:"info"},u.a.createElement("span",null,"FORSAGE"),u.a.createElement("span",null,0===b?"X3":"X4")),u.a.createElement("div",{className:"matrix-list"},P.map((function(e){return 0===b?u.a.createElement(N,Object.assign({key:e.id,className:"m-b-80 p-r-20 p-l-20",onTap:function(t){return F(e,t)}},e)):u.a.createElement(E,Object.assign({key:e.id,className:"m-b-80",onTap:function(t){return F(e,t)}},e))})))))),u.a.createElement(h.b,{hash:l,visible:k,onCancel:function(){T(!1)}}))}))}}]);