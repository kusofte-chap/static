/*! For license information please see 4.f3cdaea2.chunk.js.LICENSE.txt */
(this.webpackJsonputxo=this.webpackJsonputxo||[]).push([[4],{225:function(e,a,t){"use strict";t.d(a,"g",(function(){return c})),t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return l})),t.d(a,"e",(function(){return s})),t.d(a,"c",(function(){return i})),t.d(a,"d",(function(){return o})),t.d(a,"f",(function(){return u}));var n="http://proxy-mainnet.doschain.org/insight";"games.doschain.org"!==window.location.host&&(n="http://35.220.198.141:8087");var c=function(e){return window.demos.request({method:"GET",url:"".concat(n,"/v1/api/user/").concat(e)})},r=function(e,a){return window.demos.request({method:"POST",url:"".concat(n,"/v1/api/user/").concat(e,"/bind"),data:{code:a}})},l=function(e,a){return window.demos.request({method:"POST",url:"".concat(n,"/v1/api/user/").concat(e,"/active"),data:{rawtx:a}})},s=function(e){var a=e.addr,t=e.type,c=void 0===t?0:t;return window.demos.request({method:"GET",url:"".concat(n,"/v1/api/matrix/").concat(a,"/").concat(c)})},i=function(e){var a=e.id,t=e.addr,c=e.type,r=e.rawtx;return window.demos.request({method:"POST",url:"".concat(n,"/v1/api/matrix/").concat(t,"/").concat(c,"/").concat(a,"/pay"),data:{rawtx:r}})},o=function(e){var a=e.addr,t=e.type,c=e.id;return window.demos.request({method:"GET",url:"".concat(n,"/v1/api/matrix/").concat(a,"/").concat(t,"/").concat(c)})},u=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0,c=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;return window.demos.request({method:"GET",url:"".concat(n,"/v1/api/matrix/").concat(e,"/").concat(a,"/").concat(t,"/orders?page=").concat(c,"&limit=").concat(r)})}},226:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function c(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var l=c.apply(null,n);l&&e.push(l)}else if("object"===r)for(var s in n)t.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(a,[]))||(e.exports=n)}()},229:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return c}));var n=[{id:1,No:1,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:2,No:2,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:3,No:3,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:4,No:4,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:5,No:5,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:6,No:6,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:7,No:7,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:8,No:8,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:9,No:9,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:10,No:10,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:11,No:11,status:1,children:[0,0,0],num:0,repeat:0,hash:""},{id:12,No:12,status:1,children:[0,0,0],num:0,repeat:0,hash:""}],c=[{id:1,No:1,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:2,No:2,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:3,No:3,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:4,No:4,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:5,No:5,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:6,No:6,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:7,No:7,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:8,No:8,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:9,No:9,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:10,No:10,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:11,No:11,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""},{id:12,No:12,status:1,children:[0,0,0,0,0,0],num:0,repeat:0,hash:""}]},230:function(e,a,t){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.d(a,"a",(function(){return n}))},259:function(e,a,t){},260:function(e,a,t){},263:function(e,a,t){"use strict";t.r(a);var n=t(4),c=t.n(n),r=t(13),l=t(10),s=t(230),i=t(0),o=t.n(i),u=t(18),m=t(57),d=t(226),h=t.n(d);t(259);function p(e){var a=e.No,t=(e.num,e.nums),n=e.price,c=void 0===n?0:n,r=e.status,l=void 0===r?1:r,s=e.children,i=void 0===s?[0,0,0]:s,u=e.className;return o.a.createElement("div",{className:"x3-x4__matrix-detail ".concat(u)},o.a.createElement("a",{className:h()(Object(m.a)({"x-button":1},"status_".concat(l),1))},o.a.createElement("span",{className:h()({No:1,scale:a>9})},a),o.a.createElement("span",{className:h()({price:1,scale:c.toString().length>=6})},c),o.a.createElement("i",{className:h()({lock:1,"show-inlineBlock":1==l})})),o.a.createElement("div",{className:"x3-children"},o.a.createElement("div",{className:h()({"x-child":1,fill:i[0]})}),o.a.createElement("div",{className:h()({"x-child":1,fill:i[1]})}),o.a.createElement("div",{className:h()({"x-child":1,fill:i[2]})})),o.a.createElement("div",{className:"x3-barnchs"},o.a.createElement("div",null,o.a.createElement("div",{className:"top"}),o.a.createElement("div",{className:"bottom"})),o.a.createElement("div",null),o.a.createElement("div",null,o.a.createElement("div",{className:"top"}),o.a.createElement("div",{className:"bottom"}))),o.a.createElement("div",{className:"x-info"},o.a.createElement("span",null,t[0]),o.a.createElement("span",null,t[1]),o.a.createElement("span",null,t[2])))}function v(e){var a=e.No,t=e.nums,n=e.price,c=void 0===n?0:n,r=e.status,l=void 0===r?0:r,s=e.children,i=void 0===s?[0,0,0,0,0,0]:s,u=e.className;return o.a.createElement("div",{className:"x3-x4__matrix-detail ".concat(u)},o.a.createElement("div",{className:h()(Object(m.a)({"x-button x4":1},"status_".concat(l),1))},o.a.createElement("span",{className:h()({No:1,scale:a>9})},a),o.a.createElement("span",{className:h()({price:1,scale:c.toString().length>=6})},c),o.a.createElement("i",{className:h()({lock:1,"show-inlineBlock":1==l})})),o.a.createElement("div",{className:"x4-branchs-level1"},o.a.createElement("div",{className:"line"}),o.a.createElement("div",{className:"rect"})),o.a.createElement("div",{className:"x4-children__level1"},o.a.createElement("div",{className:h()({"x-child":1,fill:i[0]})}),o.a.createElement("div",{className:h()({"x-child":1,fill:i[1]})}),o.a.createElement("span",null,t[0]),o.a.createElement("span",null,t[1])),o.a.createElement("div",{className:"x4-branchs-level2"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement("div",{className:"x4-children__level2"},o.a.createElement("div",{className:h()({"x-child":1,fill:i[2]})}),o.a.createElement("div",{className:h()({"x-child":1,fill:i[3]})}),o.a.createElement("div",{className:h()({"x-child":1,fill:i[4]})}),o.a.createElement("div",{className:h()({"x-child":1,fill:i[5]})})),o.a.createElement("div",{className:"x-info x4"},o.a.createElement("span",null,t[2]),o.a.createElement("span",null,t[3]),o.a.createElement("span",null,t[4]),o.a.createElement("span",null,t[5])))}var f=t(225),E=t(56),N=t(229);t(260);var b=function(e){return 0===e?N.a:N.b},x=function(e,a){for(var t=new Array(e).fill(0),n=0;n<e;n++)t[n]=n<a?1:0;return t};a.default=function(e){var a=Object(i.useRef)(null),t=(e.history,e.match.params),n=t.id,m=t.matrix;n=parseInt(n),m=parseInt(m);var d=Object(i.useState)(!1),h=Object(l.a)(d,2),N=h[0],g=h[1],O=Object(i.useContext)(E.c),j=O.address,w=O.t,y=Object(i.useState)(n),_=Object(l.a)(y,2),S=_[0],k=_[1],A=Object(i.useState)(1),C=Object(l.a)(A,2),T=C[0],I=C[1],q=Object(i.useState)(0),D=Object(l.a)(q,2),B=D[0],G=D[1],P=Object(i.useState)(null),F=Object(l.a)(P,2),H=F[0],J=F[1],M=Object(i.useState)(!1),L=Object(l.a)(M,2),X=L[0],R=L[1],U=Object(i.useState)(0),Y=Object(l.a)(U,2),z=Y[0],K=Y[1],Q=null,V=sessionStorage["white_crow_".concat(j)];V&&(V=JSON.parse(V),Q=V.price/1e8);var W=Object(i.useState)({id:n,No:"-",num:0,index:0,repeat:0,uid:2,pid:1,nums:[],value:0,status:1}),Z=Object(l.a)(W,2),$=Z[0],ee=Z[1];Object(i.useEffect)((function(){j&&(ae(S),I(1),G(0),J(null),K(z+1))}),[S,j]),Object(i.useEffect)((function(){te()}),[z]);var ae=function(){var e=Object(r.a)(c.a.mark((function e(a){var t,n,r,l,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,Object(f.d)({addr:j,id:a,type:m});case 3:t=e.sent,n=t.code,r=t.data,g(!1),200===n?(l=b(m),(s=l.findIndex((function(e){return e.id===r.id})))>-1&&(r.No=s+1,r.children=x(0==m?3:6,r.index),r.price=Q*Math.pow(2,s),r.status=3-r.state,ee(r))):Object(u.e)(n);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;X||(R(!0),Object(f.f)(j,m,S,e,10).then((function(e){if(R(!1),200===e.code){var a=e.data,t=a.list,n=a.total,c=a.page;G(n),I(c),J(null===H?t:[].concat(Object(s.a)(H),Object(s.a)(t)))}else Object(u.e)(e.code)})))}function ne(e){var a=b(m),t=a.length,n=a.findIndex((function(e){return e.id===S}));if(n<0)return 0;if("prev"===e){var c=n-1;k(c<0?a[t-1].id:a[c].id)}else{var r=n+1;k(r>=t?a[0].id:a[r].id)}}var ce=$.pid,re=$.num,le=$.No,se=$.value,ie=$.miss_value,oe=void 0===ie?0:ie;return o.a.createElement("div",{className:"p-detail"},o.a.createElement(E.g,Object.assign({title:w("matrix_detail")},e,{onClickLeft:function(){e.history.push({pathname:"/matrix",state:{tab:m}})}})),o.a.createElement("div",{className:"wrapper",ref:a,onScroll:function(e){var t=a.current,n=t.scrollHeight,c=t.clientHeight;e.target.scrollTop+1>=n-c&&H&&H.length<B&&te(T+1)}},o.a.createElement("div",{className:"matrix-detail"},o.a.createElement(E.a,null,o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"info-name"},o.a.createElement("span",null,w("white_crow")),o.a.createElement("span",null,"".concat(se/1e8," dos"))),o.a.createElement("div",{className:"info-num"},o.a.createElement("span",null,0===m?"X3":"X4"),o.a.createElement("span",{className:"miss-dos"},"".concat(oe/1e8," dos")),o.a.createElement("span",{className:"invite-num"},o.a.createElement("img",{src:"".concat(u.c.imgSrc,"/icon_group.png"),alt:"/"}),o.a.createElement("span",null,re)))),o.a.createElement("div",{className:"matrix"},o.a.createElement("div",{className:"parent-id"},o.a.createElement("img",{src:"".concat(u.c.imgSrc,"/icon_arrow_right.png")}),o.a.createElement("span",null,"ID ".concat(function(e,a){if(!e)return"--";var t=e.toString().split("");if(t.length<a){var n=new Array(a-t.length).fill("0");return(t=[].concat(Object(s.a)(n),Object(s.a)(t))).join("")}return e}(ce,6)))),o.a.createElement("div",{className:"matrix-c"},o.a.createElement("a",{className:"left",onClick:function(){return ne("prev")}},o.a.createElement("i",null),o.a.createElement("span",null,"12")),o.a.createElement("div",{className:"center"},0===m?o.a.createElement(p,$):o.a.createElement(v,$)),o.a.createElement("a",{className:"right",onClick:function(){return ne("next")}},o.a.createElement("span",null,le),o.a.createElement("i",null))))),o.a.createElement("div",{className:"record"},o.a.createElement("div",{className:"fixed-header"},o.a.createElement("span",{className:"id"},"ID"),o.a.createElement("span",{className:"date"},w("date")),o.a.createElement("span",{className:"dos-usd"},"DOS/USD"),o.a.createElement("span",{className:"wallet"},w("hash"))))),o.a.createElement("div",{className:"list"},o.a.createElement("ul",null,H&&H.map((function(e){var a,t=e.state,n=e.uid,c=e.time,r=e.value,l=e.tx_hash,s=e.id,i="".concat(l.substr(0,5),"...").concat(l.substr(-5));switch(t){case 0:a=r/1e8;break;case 1:a=o.a.createElement("span",{style:{color:"#4FB6A2"}},w("reopen"));break;case 2:a=o.a.createElement("span",{style:{color:"#FD87A9"}},r/1e8+" "+w("miss"));break;case 3:a=o.a.createElement("span",{style:{color:"#BC74E7"}},w("upper"))}return o.a.createElement("li",{key:s},o.a.createElement("span",{className:"id"},n),o.a.createElement("span",{className:"date"},function(e){var a=new Date(1e3*e),t=a.getFullYear(),n=a.getMonth()+1,c=a.getDate(),r=a.getHours(),l=a.getMinutes();return"".concat(t,"/").concat(Object(u.a)(n),"/").concat(Object(u.a)(c)," ").concat(Object(u.a)(r),":").concat(Object(u.a)(l))}(c)),o.a.createElement("span",{className:"dos-usd"},a),o.a.createElement("span",{className:"wallet"},o.a.createElement("span",{onClick:function(){try{document.getElementById("order_hash_".concat(n)).select(),document.execCommand("Copy"),Object(u.f)(w("copy_success"))}catch(e){Object(u.f)(w("copy_failed"))}}},i),o.a.createElement("a",null,"copy")),o.a.createElement("input",{type:"text",value:l,readOnly:!0,id:"order_hash_".concat(n),style:{border:0,padding:0,position:"fixed",left:"-100%"},onChange:function(){}}))}))),X&&o.a.createElement("div",{className:"loading-orders"},"Loading..."),!X&&H&&0===H.length&&o.a.createElement("div",{className:"empty-orders"},w("no_data")))),N&&o.a.createElement(E.e,null))}}}]);