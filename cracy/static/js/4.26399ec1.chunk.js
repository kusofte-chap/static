(this.webpackJsonpcracy=this.webpackJsonpcracy||[]).push([[4],{114:function(e,t,a){"use strict";a.r(t);a(9),a(13);var n=a(12),c=a(0),r=a.n(c),i=(a(84),a(6)),s=a(76),o=a(19),u=a(85);t.default=Object(o.g)()((function(e){var t=e.address,a=i.e.getQuery("invite")||"",l=Object(c.useState)(0),d=Object(n.a)(l,2),m=d[0],b=d[1],p=Object(c.useState)(""),f=Object(n.a)(p,2),v=f[0],j=f[1],O=Object(c.useState)(a),g=Object(n.a)(O,2),E=g[0],N=g[1],h=Object(c.useState)(0),y=Object(n.a)(h,2),w=y[0],S=y[1],C=Object(c.useState)(0),x=Object(n.a)(C,2),k=x[0],J=x[1],T=Object(c.useState)(!1),B=Object(n.a)(T,2),_=B[0],Q=B[1],R=Object(c.useState)(""),q=Object(n.a)(R,2),F=q[0],M=q[1],P=Object(c.useState)(-1),$=Object(n.a)(P,2),z=$[0],A=$[1];function D(){Object(s.a)(t).then((function(e){var t=e.data;if(t.ret){var a=t.data,n=a.balance,c=a.btclight,r=a.code,i=a.time,s=a.status;b(n),j(c),M(r),i&&A(void 0===s?1:s)}}))}function G(e){Object(s.d)(e||t).then((function(t){var a=t.data;a.ret?e?Object(i.f)("\u9080\u8bf7\u5730\u5740\u672a\u5f00\u901a"):(S(a.data.value),J(a.data.btcusdt)):"do not repeat opening"===a.data&&(e?H():A(1))}))}function H(){window.demos.contract("pay",v,[{type:"uint256",value:w},{type:"string",value:"[2]"}]).then((function(e){i.d.set(t,e),I(e)}),(function(e){Object(i.f)(JSON.stringify(e),3e3)}))}function I(e){Q(!0),Object(s.e)({address:t,addr:E,rawtx:e}).then((function(e){var a=e.data;Q(!1),i.d.remove(t),a.ret?(Object(i.f)("\u5f00\u901a\u6210\u529f"),A(0),D()):Object(i.f)(a.data)}),(function(e){Q(!1),Object(i.f)(JSON.stringify(e),3e3)}))}function K(e){N("string"===typeof e?e:e.target.value.trim())}function L(){window.demos.scanQRCode().then((function(e){var t=e;e.includes("invite=")&&(t=e.match(/invite=(\w+)/)[1]),N(t)}))}function U(){window.demos.openFundManager()}return Object(c.useEffect)((function(){if(t){D(),G();var e=i.d.get(t);e&&I(e)}}),[t]),r.a.createElement("div",{className:"p-home"},r.a.createElement("img",{src:"".concat(i.c.imgSrc,"/icon_btc.png"),alt:"btc",className:"coin-icon"}),r.a.createElement("p",{className:"balance"},"BTC\u4f59\u989d:",r.a.createElement("span",null,m/1e8)),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{className:"c-btn",onClick:U},"\u5145\u503c"),r.a.createElement("button",{className:"c-btn",onClick:U},"\u63d0\u73b0")),r.a.createElement("p",{className:"balance"},"BTC\u4ef7\u683c:",r.a.createElement("span",null,"$ ",k)),r.a.createElement("p",{className:"price"},"\u9700\u652f\u4ed8:",r.a.createElement("span",null,w/1e8," ",r.a.createElement("i",null,"BTC"))),r.a.createElement("p",{className:"notice"},"\u6ce8\u610f:BTC\u5145\u503c\u6709\u77ff\u5de5\u8d39\u7528"),-1!==z?r.a.createElement(o.a,{className:"invite"},"\u63a8\u8350\u5730\u5740: ",F||"\u7a7a"):a?r.a.createElement(o.a,{className:"invite"},"\u63a8\u8350\u5730\u5740: ",a):r.a.createElement("div",{className:"input"},r.a.createElement("div",{className:"input-wrapper"},r.a.createElement(o.c,{type:"text",placeholder:"\u63a8\u8350\u5730\u5740",onChange:K,value:E,id:"p-home-input"})),r.a.createElement("img",{src:"".concat(i.c.imgSrc,"/icon_scan.png"),alt:"scan",onClick:L})),_&&r.a.createElement(o.e,null),r.a.createElement("button",{className:"c-btn",onClick:function(){-1===z&&(w?m>=w?E?/^Sc.+/.test(E+"")?G(E):Object(i.f)("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u9080\u8bf7\u7801"):H():Object(i.f)("\u4f59\u989d\u4e0d\u8db3"):Object(i.f)("\u6b63\u5728\u83b7\u53d6\u8bc1\u4e66\u4ef7\u683c\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002"))},disabled:_},-1===z?_?"loading":"\u5f00\u901a":1===z?"\u5df2\u5f00\u901a":"\u5904\u7406\u4e2d"),r.a.createElement("div",{className:"package-json"},"version: ",u.version))}))},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return o}));var n=a(6),c=function(e){return n.b.get("/api/addr/".concat(e))},r=function(e){return n.b.post("/api/addr/".concat(e,"/opencert"),{})},i=function(e){var t=e.address,a=e.addr,c=e.rawtx;return n.b.post("/api/addr/".concat(t,"/opencert"),{addr:a,rawtx:c})},s=function(e){var t=e.address,a=e.page,c=void 0===a?1:a,r=e.limit,i=void 0===r?1e6:r;return n.b.get("/api/addr/".concat(t,"/gains?page=").concat(c,"&limit=").concat(i))},o=function(){return n.b.get("/api/funds")}},84:function(e,t,a){},85:function(e){e.exports=JSON.parse('{"name":"cracy","version":"1.0.6","private":true,"dependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","axios":"^0.19.2","node-sass":"^4.13.1","qrcode":"^1.4.4","react":"^16.12.0","react-dom":"^16.12.0","react-router-dom":"^5.1.2","react-scripts":"3.3.1","serve":"^11.3.0"},"scripts":{"start":"PORT=80 react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","serve":"serve build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"homepage":"/cracy"}')}}]);
//# sourceMappingURL=4.26399ec1.chunk.js.map