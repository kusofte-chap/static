(this.webpackJsonpdestroy=this.webpackJsonpdestroy||[]).push([[3],{69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(12),l=n.n(a),c=n(19),r=n(9),u=n(0),s=n.n(u),m=(n(69),n(16)),i=n(20),o=n.n(i),p=function(){return o.a.get("https://games.doschain.org/destroy.json")};t.default=Object(m.c)()((function(){var e=Object(u.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(u.useState)(!1),o=Object(r.a)(i,2),E=o[0],f=o[1],b=Object(u.useState)(""),h=Object(r.a)(b,2),d=h[0],j=h[1];return Object(u.useEffect)((function(){function e(){return(e=Object(c.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,p();case 3:t=e.sent,n=t.data,a(n),f(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),s.a.createElement(s.a.Fragment,null,!!n&&s.a.createElement("div",{className:"p-home"},s.a.createElement("div",{className:"home-top"},s.a.createElement("p",null,"DOS\u9500\u6bc1\u603b\u91cf"),s.a.createElement("br",null),s.a.createElement("strong",null,n.total)),n.list&&n.list.length&&s.a.createElement("div",{className:"home-container"},n.list.map((function(e,t){var n,a,l=e.hash,c=e.amount,r=e.time,u=e.type;return s.a.createElement("ul",{key:t},s.a.createElement("li",null,s.a.createElement("p",null,"\u5e8f\u53f7: ","LC"+(n=t+1,a=3,(Array(a).join("0")+n).slice(-a))),s.a.createElement("p",null,"\u7c7b\u578b: ",u)),s.a.createElement("li",null,s.a.createElement("p",null,"\u91d1\u989d"),s.a.createElement("p",null,c)),s.a.createElement("li",{onClick:function(){j("https://mainnet.doschain.org/tx/".concat(l))}},s.a.createElement("p",null,"\u54c8\u5e0c"),s.a.createElement("p",null,function(e){return"".concat(e.substr(0,10),"...").concat(e.substr(-10))}(l))),s.a.createElement("li",null,s.a.createElement("p",null,"\u65f6\u95f4"),s.a.createElement("p",null,r)))})))),!!d&&s.a.createElement("div",{className:"iframe"},s.a.createElement("div",null,s.a.createElement("p",null,"\u533a\u5757\u6d4f\u89c8\u5668"),s.a.createElement("button",{onClick:function(){j("")}})),s.a.createElement("iframe",{src:d,frameBorder:"0"})),E&&s.a.createElement(m.b,null))}))}}]);