(this.webpackJsonpdemos_dapp=this.webpackJsonpdemos_dapp||[]).push([[7],{281:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return s}));var a="http://proxy-mainnet.doschain.org/insight";function r(t){var e=t.addr,n=t.state,r=t.page,c=t.limit,o=t.category,i="".concat(a,"/v1/api/apps/").concat(e,"/").concat(n,"/?page=").concat(r,"&limit=").concat(c);return o&&(i+="&category=".concat(o)),window.demos.request({method:"GET",url:i})}function c(){return window.demos.request({method:"GET",url:"".concat(a,"/v1/api/category")})}function o(){return window.demos.request({method:"GET",url:"".concat(a,"/v1/api/state")})}function i(t){return window.demos.request({method:"GET",url:"".concat(a,"/v1/api/app/").concat(t)})}function u(t){var e=t.addr,n=t.rawtx,r=t.id,c=t.gain,o=t.code,i=t.mail;return window.demos.request({method:"POST",url:"".concat(a,"/v1/api/app/").concat(e,"/pay"),data:{rawtx:n,id:r,gain:c,code:o,mail:i}})}"games.doschain.org"!==window.location.host&&(a="http://35.220.198.141:8088");var d=function(t){return window.demos.request({method:"GET",url:"".concat(a,"/v1/api/orders/").concat(t)})},s=function(t,e){return window.demos.request({method:"GET",url:"".concat(a,"/v1/api/order/").concat(t,"/").concat(e)})}},282:function(t,e,n){"use strict";var a=n(14),r=n(0);e.a=function(t,e){var n=Object(r.useState)(t),c=Object(a.a)(n,2),o=c[0],i=c[1];return[o,function(t){clearInterval(e),i(t),e=setInterval((function(){t++,i(t)}),1e3)}]}},323:function(t,e,n){t.exports={history_detail:"history_detail_history_detail__2-KGt",row:"history_detail_row__3L5dS"}},328:function(t,e,n){"use strict";n.r(e);var a=n(14),r=n(0),c=n.n(r),o=n(323),i=n.n(o),u=n(89),d=n(281),s=n(282);function l(t,e){return c.a.createElement("div",{className:i.a.row},c.a.createElement("div",null,t,":"),c.a.createElement("div",null,e))}e.default=function(t){var e=t.match,n=Object(r.useContext)(u.d).wallet_address,o=e.params.id,m=Object(r.useState)(null),h=Object(a.a)(m,2),f=h[0],p=h[1],v=Object(r.useState)(!1),w=Object(a.a)(v,2),g=w[0],E=w[1],_=Object(s.a)(0,void 0),b=Object(a.a)(_,2),y=b[0],O=b[1];function j(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&E(!0),Object(d.g)(n,o).then((function(e){t&&E(!1),e.ret&&(p(e.data),O(e.time))}))}return Object(r.useEffect)((function(){n&&o&&j()}),[n]),c.a.createElement(u.a,{title:"\u7533\u8d2d\u8be6\u60c5"},g?c.a.createElement("div",{style:{height:"100vh"}},c.a.createElement(u.f,null)):[function(){if(!n&&!o)return null;try{var t,e=f.name,a=f.logo,r=f.price,i=f.order_time,d=f.state;return 0===d?t=i>=0?0:1:1===d&&(t=2),c.a.createElement(u.c,{onCD:j,now:y,key:1,name:e,logo:a,price:r,time:i,status:t})}catch(s){return null}}(),f&&c.a.createElement("div",{className:i.a.history_detail,key:2},l("\u7533\u8d2dhash",f.hash),l("\u5408\u7ea6\u5730\u5740",f.gain),l("\u63a8\u8350\u5730\u5740",f.code),l("\u8054\u7cfb\u90ae\u7bb1",f.mail),l("\u56de\u9000hash",f.return))])}}}]);