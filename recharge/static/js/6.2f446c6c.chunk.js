(this.webpackJsonprecharge=this.webpackJsonprecharge||[]).push([[6],{114:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(0),l=a.n(c),r=a(22),i=(a(114),a(2)),s=a(13);t.default=Object(r.g)()((function(e){var t=e.address,a=e.stop,u=e.blackHole,o=e.getIdentity,d=Object(c.useState)([]),f=Object(n.a)(d,2),b=f[0],m=f[1],O=Object(c.useState)(!1),E=Object(n.a)(O,2),j=E[0],v=E[1],h=Object(c.useState)(!1),p=Object(n.a)(h,2),g=p[0],k=p[1];function w(){t&&(v(!0),Object(s.f)({address:t}).then((function(e){var t=e.data;t.ret&&m(t.data.list),v(!1)}),(function(){v(!1)})))}return Object(c.useEffect)((function(){w()}),[t]),l.a.createElement("div",{className:"p-return"},l.a.createElement("div",{className:"circle"},l.a.createElement("div",null,l.a.createElement("p",{className:"p1"},"\u8ddd\u79bb\u505c\u76d8\u53d1\u653e\u8fd8\u5269"),l.a.createElement("p",{className:"p2"},a/1e8," ",l.a.createElement("i",null,"DOS")))),l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,l.a.createElement("div",null,"\u65e5\u671f"),l.a.createElement("div",null,"DOS"),l.a.createElement("div",null,"BTC"),l.a.createElement("div",null,"\xa0")),b.map((function(e){var a,n=e.createtime,c=e.dos,r=e.btc,d=e.status,f=e.repent,b=e.id;if(f)a="\u5df2\u56de\u9000";else switch(d){case 0:a="\u672a\u5230\u8d26";break;case 1:a=l.a.createElement("button",{onClick:function(){!function(e,a){u?g?Object(i.f)("\u56de\u9000\u4e2d\uff0c\u8bf7\u7a0d\u540e"):window.demos.transfer(u,a/1e8).then((function(a){var n=a.transactionHash;n?(k(!0),Object(s.h)({address:t,id:e,rawtx:n}).then((function(e){var a=e.data;k(!1),a.ret?(Object(i.f)("\u56de\u9000\u6210\u529f"),w(),o(t)):Object(i.f)(a.data)}),(function(e){k(!1),Object(i.f)(e.toString())}))):Object(i.f)("\u83b7\u53d6\u4ea4\u6613hash\u5931\u8d25")}),(function(e){Object(i.f)(e.toString())})):Object(i.f)("\u6570\u636e\u83b7\u53d6\u4e2d\uff0c\u8bf7\u7a0d\u540e")}(b,c)}},"\u56de\u9000");break;case 2:a="\u5f02\u5e38";break;default:a="status:".concat(d)}return l.a.createElement("li",null,l.a.createElement("div",null,function(e){var t=new Date(1e3*e),a=t.getFullYear(),n=t.getMonth()+1,c=t.getDate();return"".concat(a,"-").concat(Object(i.a)(n),"-").concat(Object(i.a)(c))}(n)),l.a.createElement("div",null,c/1e8),l.a.createElement("div",null,r/1e8),l.a.createElement("div",null,a))})),j&&l.a.createElement(r.d,null)))}))}}]);
//# sourceMappingURL=6.2f446c6c.chunk.js.map