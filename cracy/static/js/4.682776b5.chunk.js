(this.webpackJsonpcracy=this.webpackJsonpcracy||[]).push([[4],{114:function(e,t,a){"use strict";a.r(t);a(9),a(13);var n=a(12),c=a(0),r=a.n(c),i=(a(84),a(6)),s=a(76),o=a(19),u=a(85),l=0;t.default=Object(o.g)()((function(e){var t=e.address,a=i.f.getQuery("invite")||"",d=Object(c.useState)(0),b=Object(n.a)(d,2),m=b[0],p=b[1],f=Object(c.useState)(""),v=Object(n.a)(f,2),g=v[0],j=v[1],O=Object(c.useState)(a),E=Object(n.a)(O,2),h=E[0],w=E[1],N=Object(c.useState)(-1),y=Object(n.a)(N,2),S=y[0],x=y[1],C=Object(c.useState)(0),k=Object(n.a)(C,2),T=k[0],B=k[1],J=Object(c.useState)(!1),_=Object(n.a)(J,2),Q=_[0],R=_[1],q=Object(c.useState)(""),F=Object(n.a)(q,2),M=F[0],P=F[1],$=Object(c.useState)(-1),z=Object(n.a)($,2),A=z[0],D=z[1],G=Object(c.useState)(""),H=Object(n.a)(G,2),I=H[0],K=H[1],L=Object(c.useState)(""),U=Object(n.a)(L,2),V=U[0],W=U[1];function X(e){R(!0),Object(s.a)(e||t).then((function(a){var n=a.data;if(R(!1),n.ret){var c=n.data,r=c.balance,o=c.btclight,u=c.code,l=c.status,d=c.remark;if(e)1===l?V?Y(V,e):window.demos.contract("pay",g,[{type:"uint256",value:S},{type:"string",value:"[2]"}]).then((function(e){Y(e),i.e.set(t,e),i.d.set(t,h)}),(function(e){Object(i.g)(e.toString(),3e3)})):Object(i.g)("\u9080\u8bf7\u5730\u5740\u672a\u5f00\u901a");else if(p(r),j(o),P(u),K(d),void 0!==l)D(l);else i.e.get(t)||Object(s.b)(t).then((function(e){var a=e.data;if(a.ret&&a.data&&a.data.rawtx){W(a.data.rawtx);var n=i.d.get(t);n&&w(n)}}))}else e&&Object(i.g)("\u9080\u8bf7\u5730\u5740\u672a\u5f00\u901a")}),(function(){R(!1)}))}function Y(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;function n(){0===l?(Y(e,a),l+=1):Object(i.g)("\u5f00\u901a\u5931\u8d25\uff0c\u8bf7\u53cd\u9988\u6216\u7a0d\u540e\u518d\u8bd5",5e3)}R(!0),Object(s.f)({address:t,addr:a,rawtx:e}).then((function(e){var a=e.data;R(!1),i.e.remove(t),i.d.remove(t),a.ret?(Object(i.g)("\u64cd\u4f5c\u6210\u529f"),D(0),X()):Object(i.g)(a.data)}),(function(e){R(!1),n()}))}function Z(e){w("string"===typeof e?e:e.target.value.trim())}function ee(){window.demos.scanQRCode().then((function(e){var t=e;e.includes("invite=")&&(t=e.match(/invite=(\w+)/)[1]),w(t)}))}function te(){window.demos.openFundManager()}return Object(c.useEffect)((function(){if(t){var e=i.e.get(t),a=i.d.get(t);e&&a&&Y(e,a),X(),Object(s.e)(t).then((function(e){var t=e.data;t.ret&&(x(t.data.value),B(t.data.btcusdt))}))}}),[t]),r.a.createElement("div",{className:"p-home"},r.a.createElement("img",{src:"".concat(i.c.imgSrc,"/icon_btc.png"),alt:"btc",className:"coin-icon"}),r.a.createElement("p",{className:"balance"},"BTC\u4f59\u989d:",r.a.createElement("span",null,m/1e8)),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{className:"c-btn",onClick:te},"\u5145\u503c"),r.a.createElement("button",{className:"c-btn",onClick:te},"\u63d0\u73b0")),r.a.createElement("p",{className:"balance"},"BTC\u4ef7\u683c:",r.a.createElement("span",null,"$ ",T)),r.a.createElement("p",{className:"price"},"\u9700\u652f\u4ed8:",r.a.createElement("span",null,S>=0?S/1e8:"--"," ",r.a.createElement("i",null,"BTC"))),r.a.createElement("p",{className:"notice"},"\u6ce8\u610f:BTC\u5145\u503c\u6709\u77ff\u5de5\u8d39\u7528"),-1!==A?r.a.createElement(o.a,{className:"invite"},"\u63a8\u8350\u5730\u5740: ",M||h||"\u7a7a"):a?r.a.createElement(o.a,{className:"invite"},"\u63a8\u8350\u5730\u5740: ",a):r.a.createElement("div",{className:"input"},r.a.createElement("div",{className:"input-wrapper"},r.a.createElement(o.c,{type:"text",placeholder:"\u63a8\u8350\u5730\u5740",onChange:Z,value:h,id:"p-home-input"})),r.a.createElement("img",{src:"".concat(i.c.imgSrc,"/icon_scan.png"),alt:"scan",onClick:ee})),Q&&r.a.createElement(o.e,null),r.a.createElement("button",{className:"c-btn",onClick:function(){if(-1===A){if(!V){if(S<0)return void Object(i.g)("\u6b63\u5728\u83b7\u53d6\u8bc1\u4e66\u4ef7\u683c\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002");if(!(m>=S))return void Object(i.g)("\u4f59\u989d\u4e0d\u8db3")}h?t.substring(0,2)===(h+"").substring(0,2)?X(h):Object(i.g)("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u9080\u8bf7\u7801"):Object(i.g)("\u8bf7\u8f93\u5165\u9080\u8bf7\u7801")}},disabled:Q},-1===A?Q?"loading":"\u5f00\u901a":function(){var e="";switch(A){case 0:e="\u5904\u7406\u4e2d";break;case 1:e="\u5df2\u5f00\u901a";break;case 2:e="\u5f00\u901a\u5931\u8d25"}return e}()),!!I&&r.a.createElement("p",{style:{color:"rgb(255, 45, 45)"}},I),r.a.createElement("div",{className:"package-json"},"version: ",u.version))}))},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"e",(function(){return r})),a.d(t,"f",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a(6),c=function(e){return n.b.get("/api/addr/".concat(e))},r=function(e){return n.b.post("/api/addr/".concat(e,"/opencert"),{})},i=function(e){var t=e.address,a=e.addr,c=e.rawtx;return n.b.post("/api/addr/".concat(t,"/opencert"),{addr:a,rawtx:c})},s=function(e){var t=e.address,a=e.page,c=void 0===a?1:a,r=e.limit,i=void 0===r?1e6:r;return n.b.get("/api/addr/".concat(t,"/gains?page=").concat(c,"&limit=").concat(i))},o=function(){return n.b.get("/api/funds")},u=function(e){return n.b.get("/api/".concat(e,"/certtx"))}},84:function(e,t,a){},85:function(e){e.exports=JSON.parse('{"name":"cracy","version":"1.0.14","private":true,"dependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","axios":"^0.19.2","node-sass":"^4.13.1","qrcode":"^1.4.4","react":"^16.12.0","react-dom":"^16.12.0","react-router-dom":"^5.1.2","react-scripts":"3.3.1","serve":"^11.3.0"},"scripts":{"start":"PORT=80 react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","serve":"serve build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"homepage":"/cracy"}')}}]);
//# sourceMappingURL=4.682776b5.chunk.js.map