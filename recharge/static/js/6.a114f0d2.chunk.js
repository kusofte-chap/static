(this.webpackJsonprecharge=this.webpackJsonprecharge||[]).push([[6],{114:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(17),c=a(12),l=a(0),r=a.n(l),u=a(22),i=(a(114),a(7)),s=a(14);t.default=Object(u.g)()((function(e){var t=e.address,a=e.stop,o=(e.blackHole,e.getIdentity,Object(l.useState)([])),d=Object(c.a)(o,2),m=d[0],f=d[1],b=Object(l.useState)(!1),E=Object(c.a)(b,2),v=E[0],O=E[1],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(l.useState)(e),a=Object(c.a)(t,2),r=a[0],u=a[1],i=Object(l.useCallback)((function(e){u((function(t){return Object(n.a)({},t,{},e)}))}),[]);return[r,i]}({}),j=Object(c.a)(h,2),p=(j[0],j[1]);function g(e){t&&(O(!0),Object(s.f)({address:t}).then((function(a){var n=a.data;n.ret&&(f(n.data.list),e&&function(e){var a=[];e.forEach((function(e){var n=e.id,c=i.e.get(t,n);c&&a.push(new Promise((function(e){p({id:!0}),Object(s.h)({address:t,id:n,rawtx:c.toString()}).then((function(){p({id:!1}),e(n)}),(function(){p({id:!1}),e(null)}))})))})),Promise.all(a).then((function(e){e.forEach((function(e){e&&i.e.remove(t,e)})),e.length&&g()}))}(n.data.list)),O(!1)}),(function(){O(!1)})))}return Object(l.useEffect)((function(){g(!0)}),[t]),r.a.createElement("div",{className:"p-return"},r.a.createElement("div",{className:"circle"},r.a.createElement("div",null,r.a.createElement("p",{className:"p1"},"\u8ddd\u79bb\u505c\u76d8\u53d1\u653e\u8fd8\u5269"),r.a.createElement("p",{className:"p2"},a/1e8," ",r.a.createElement("i",null,"DOS")))),r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,r.a.createElement("div",null,"\u65e5\u671f"),r.a.createElement("div",null,"DOS"),r.a.createElement("div",null,"BTC"),r.a.createElement("div",null,"\xa0")),m.map((function(e){var t,a=e.createtime,n=e.dos,c=e.btc,l=e.status,u=e.repent,s=e.id;switch(l){case 0:t="\u672a\u5230\u8d26";break;case 1:t=u?"\u5df2\u56de\u9000":r.a.createElement("button",null,"\u56de\u9000");break;case 2:t="\u5f02\u5e38";break;default:t="status:".concat(l)}return r.a.createElement("li",{key:s},r.a.createElement("div",null,function(e){var t=new Date(1e3*e),a=t.getFullYear(),n=t.getMonth()+1,c=t.getDate();return"".concat(a,"-").concat(Object(i.a)(n),"-").concat(Object(i.a)(c))}(a)),r.a.createElement("div",null,n/1e8),r.a.createElement("div",null,c/1e8),r.a.createElement("div",null,t))})),v&&r.a.createElement(u.d,null)))}))}}]);