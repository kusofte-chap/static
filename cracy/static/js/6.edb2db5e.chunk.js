(this.webpackJsonpcracy=this.webpackJsonpcracy||[]).push([[6],{115:function(t,e,n){"use strict";n.r(e);var a=n(12),c=n(0),r=n.n(c),u=(n(86),n(76)),i=n(19);e.default=Object(i.g)()((function(t){var e=t.address,n=Object(c.useState)([]),o=Object(a.a)(n,2),d=o[0],s=o[1],l=Object(c.useState)(!1),f=Object(a.a)(l,2),p=f[0],b=f[1];return Object(c.useEffect)((function(){e&&(b(!0),Object(u.c)({address:e}).then((function(t){var e=t.data;e.ret&&s(e.data.list),b(!1)}),(function(){b(!1)})))}),[e]),r.a.createElement("div",{className:"p-records"},p&&r.a.createElement(i.d,null),d.map((function(t,e){var n,a=t.type,c=t.createtime,u=t.amount;switch(a){case 0:n="\u6c11\u4e3b\u8bc1\u4e66";break;case 1:n="\u521b\u4e16\u5151\u6362";break;default:n="type ".concat(a)}return r.a.createElement("div",{key:e,className:"list-item"},r.a.createElement("div",null,r.a.createElement("p",null,n),r.a.createElement("p",null,function(t){var e=new Date(1e3*t),n=e.getMonth()+1,a=e.getDate(),c=e.getHours(),r=e.getMinutes();return"".concat(n,"\u6708").concat(a,"\u65e5 ").concat(c,":").concat(r)}(c))),r.a.createElement("div",null,"+",u/1e8,"BTC"))})))}))},76:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return o}));var a=n(6),c=function(t){return a.b.get("/api/addr/".concat(t))},r=function(t){return a.b.post("/api/addr/".concat(t,"/opencert"),{})},u=function(t){var e=t.address,n=t.addr,c=t.rawtx;return a.b.post("/api/addr/".concat(e,"/opencert"),{addr:n,rawtx:c})},i=function(t){var e=t.address,n=t.page,c=void 0===n?1:n,r=t.limit,u=void 0===r?1e6:r;return a.b.get("/api/addr/".concat(e,"/gains?page=").concat(c,"&limit=").concat(u))},o=function(){return a.b.get("/api/funds")}},86:function(t,e,n){}}]);
//# sourceMappingURL=6.edb2db5e.chunk.js.map