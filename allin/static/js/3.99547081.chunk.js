(this.webpackJsonputxo=this.webpackJsonputxo||[]).push([[3],{72:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return p}));var a=n(9),c=n.n(a),r=n(13),l="http://proxy-mainnet.doschain.org/insight",o="http://mainnet.doschain.org/insight";function u(){return(u=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(r.a)(c.a.mark((function e(n,a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:r=e.sent,n(JSON.parse(r)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}"games.doschain.org"!==window.location.host&&(l="http://35.220.198.141:8083",o="https://testnet.doschain.org/insight");var s=function(e){return window.demos.request({method:"GET",url:"".concat(l,"/api/").concat(e,"/state")})},i=function(e){return window.demos.request({method:"GET",url:"".concat(l,"/api/").concat(e,"/lastsettle")})},m=function(e,t,n){return function(e){return u.apply(this,arguments)}(window.demos.allin.submit(e,t-0,n,""))},d=function(e,t){return window.demos.request({method:"GET",url:"".concat(o,"/api/addr/").concat(e,"/token/").concat(t)})},p=function(e){return window.demos.request({method:"GET",url:"".concat(l,"/api/").concat(e,"/pull")})}},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a,c,r=n(17),l=n(11),o=n(0),u=n.n(o),s=(n(73),n(16)),i=n(20),m=n(8),d=n(72),p=0;t.default=Object(s.f)()((function(e){var t,n=e.address,f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o.useState)(e),n=Object(l.a)(t,2),a=n[0],c=n[1],u=Object(o.useCallback)((function(e){c((function(t){return Object(r.a)({},t,{},e)}))}),[]);return[a,u]}(null),b=Object(l.a)(f,2),v=b[0],E=b[1],h=Object(o.useState)(1),O=Object(l.a)(h,2),j=O[0],w=O[1],g=Object(o.useState)(!1),k=Object(l.a)(g,2),N=k[0],y=k[1],I=Object(o.useState)(0),x=Object(l.a)(I,2),S=x[0],C=x[1],q=Object(o.useState)(-1),G=Object(l.a)(q,2),T=G[0],J=G[1],K=Object(o.useState)(""),Y=Object(l.a)(K,2),D=Y[0],P=Y[1];function z(){Object(d.c)(n).then((function(e){e.ret&&(E(e.data),P(e.data.code||""),p=e.data.settle,Object(d.a)(n,e.data.token).then((function(e){J(e)})),function(){var e=parseInt(p-Date.now()/1e3);e>0&&(C(e),clearInterval(a),a=setInterval((function(){(e=parseInt(p-Date.now()/1e3))<=0&&(e=0),C(e)}),1e3))}(),clearInterval(c),c=setInterval((function(){Object(d.d)(n).then((function(e){e.ret&&(E(e.data),p=e.data.settle)}))}),2e3))}))}return Object(o.useEffect)((function(){if(n)return z(),function(){clearInterval(a),clearInterval(c)}}),[n]),v?u.a.createElement("div",{className:"p-home"},u.a.createElement("div",{className:"block1"},u.a.createElement("div",null,u.a.createElement("p",null,"\u5956\u6c60\u91d1\u989d"),u.a.createElement("strong",null,v.total/1e8)),u.a.createElement("div",null,u.a.createElement("p",null,"KEY\u5206\u7ea2"),u.a.createElement("strong",null,v.total*v["key-scale"]/100/1e8))),u.a.createElement("div",{className:"more"},u.a.createElement(i.b,{to:"/last-settle"},">>\u4e0a\u6b21\u7ed3\u7b97")),u.a.createElement("div",{className:"block2"},u.a.createElement("div",{className:"time"},(t=S,"".concat(Object(m.a)(parseInt(t/3600)),":").concat(Object(m.a)(parseInt(t/60)),":").concat(Object(m.a)(t%60)))),u.a.createElement("div",{className:"row row1"},u.a.createElement("p",null,"KEY\u4ef7\u683c: ",v.price/1e8),u.a.createElement("div",null,u.a.createElement("p",{onClick:function(){w(j+1)}},"\u52a01"),u.a.createElement("p",{onClick:function(){w(j+10)}},"\u52a010"))),u.a.createElement("div",{className:"row"},u.a.createElement("p",null,"\u6211\u7684KEY: ",v.keys)),u.a.createElement("div",{className:"row row3"},u.a.createElement("p",null,"\u6700\u540e\u4e00\u540d\u73a9\u5bb6:"),u.a.createElement("p",null,v["last-key"]||"\u65e0"))),u.a.createElement("div",{className:"block4"},u.a.createElement("p",null,"\u9080\u8bf7\u5730\u5740: ",u.a.createElement(s.e,{disabled:v.code,placeholder:"\u8bf7\u586b\u5199",onChange:function(e){var t="string"===typeof e?e:e.target.value;P(t)},value:D}))),u.a.createElement("div",{className:"block3"},u.a.createElement("p",null,"\u8d2d\u4e70\u6570\u91cf: ",u.a.createElement(s.b,{type:"text",onChange:function(e){var t="string"===typeof e?e:e.target.value;t>0||(t=1),w(t)},value:j})),u.a.createElement("button",{onClick:function(){if(n&&v)if(!v.status||S<=0)Object(m.c)("\u7ed3\u7b97\u4e2d\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");else{var e=v.price*j+v["price-step"]*(j-1)*j/2,t=D.trim();e>T?Object(m.c)("\u4f59\u989d\u4e0d\u8db3"):t?n.substring(0,2)===t.substring(0,2)&&t!==n?(y(!0),Object(d.e)(e,j,t).then((function(e){y(!1),e.ret?(Object(m.c)("\u8d2d\u4e70\u6210\u529f"),z()):Object(m.c)(e.data,6e3)}),(function(e){y(!1)}))):Object(m.c)("\u8bf7\u586b\u5199\u6b63\u786e\u7684\u9080\u8bf7\u5730\u5740"):Object(m.c)("\u8bf7\u586b\u5199\u9080\u8bf7\u5730\u5740")}},disabled:!v.status||S<=0||T<0},"\u8d2d\u4e70")),N&&u.a.createElement(s.d,null)):u.a.createElement("div",{className:"p-home"},u.a.createElement(s.c,null))}))}}]);