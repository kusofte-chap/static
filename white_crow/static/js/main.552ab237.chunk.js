(this.webpackJsonputxo=this.webpackJsonputxo||[]).push([[0],{106:function(e,t,n){e.exports=n(219)},112:function(e,t){var n=document.getElementById("canvas"),a=n.getContext("2d"),r=n.width=window.innerWidth,i=n.height=window.innerHeight,c=[],o=0,s=document.createElement("canvas"),u=s.getContext("2d");s.width=100,s.height=100;var l=s.width/2,d=u.createRadialGradient(l,l,0,l,l,l);function m(e,t){if(arguments.length<2&&(t=e,e=0),e>t){var n=t;t=e,e=n}return Math.floor(Math.random()*(t-e+1))+e}d.addColorStop(.025,"#CCC"),d.addColorStop(.1,"hsl(217, 61%, 33%)"),d.addColorStop(.25,"hsl(217, 64%, 6%)"),d.addColorStop(1,"transparent"),u.fillStyle=d,u.beginPath(),u.arc(l,l,l,0,2*Math.PI),u.fill();var f=function(){this.orbitRadius=m(function(e,t){var n=Math.max(e,t);return Math.round(Math.sqrt(n*n+n*n))/2}(r,i)),this.radius=m(60,this.orbitRadius)/8,this.orbitX=r/2,this.orbitY=i/2,this.timePassed=m(0,800),this.speed=m(this.orbitRadius)/3e5,this.alpha=m(2,10)/10,o++,c[o]=this};f.prototype.draw=function(){var e=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,t=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,n=m(10);1===n&&this.alpha>0?this.alpha-=.05:2===n&&this.alpha<1&&(this.alpha+=.05),a.globalAlpha=this.alpha,a.drawImage(s,e-this.radius/2,t-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var h=0;h<800;h++)new f;!function e(){a.globalCompositeOperation="source-over",a.globalAlpha=.5,a.fillStyle="hsla(217, 64%, 6%, 2)",a.fillRect(0,0,r,i),a.globalCompositeOperation="lighter";for(var t=1,n=c.length;t<n;t++)c[t].draw();window.requestAnimationFrame(e)}()},130:function(e,t){},132:function(e,t){},143:function(e,t){},159:function(e,t){},178:function(e,t){},18:function(e,t,n){"use strict";var a=n(5),r=n.n(a),i=n(15),c=n(96),o=n(97),s=n(103),u=n(98),l=n(104),d=n(0),m=n.n(d),f=function(e){return function(t){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={component:null},t}return Object(l.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(r.a.mark((function t(){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,a=n.default,this.setState({component:a});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?m.a.createElement(e,this.props):null}}]),n}(m.a.Component)},h={imgSrc:"".concat("https://cdn.jsdelivr.net/gh/doschain/static/white_crow","/images")},p=n(13);var v={formatQuery:function(e){if(0===(t=e)||!t||!t.constructor||"Object"!==t.constructor.toString().match(/function\s*([^(]*)/)[1])return"";var t,n="";for(var a in e)n+="".concat(a,"=").concat(e[a],"&");return n.slice(0,-1)},getQuery:function(e){var t=window.location.search.slice(1);if(0===(t=t.split("&")).length)return null;var n={};return t.forEach((function(e){var t=e.split("="),a=Object(p.a)(t,2),r=a[0],i=a[1];n[r]=i})),e?n[e]||null:n}},b=n(99),g=(n.n(b).a.create({timeout:1e4}),function(e,t){t=isNaN(t)?3e3:t;var n=document.createElement("div");n.innerHTML=e,n.style.cssText="max-width:80%;min-width: 80px;padding: 10px 14px;word-break: break-all;line-height:1.5;color: rgb(255, 255, 255);text-align: center;border-radius: 4px;position: fixed;bottom: 15%;left: 50%;transform: translate(-50%, 0);z-index: 999999;background: rgba(24, 193, 229, 0.72);font-size: 16px;",document.body.appendChild(n),setTimeout((function(){n.style.webkitTransition="-webkit-transform 0.5s ease-in, opacity 0.5s ease-in",n.style.opacity="0",setTimeout((function(){document.body.removeChild(n)}),500)}),t)});var w=n(25),_={1001:"error_1001",1002:"error_1002",1003:"error_1003",1004:"error_1004",1005:"error_1005",1006:"error_1006"};var O=function(e,t){var n=_[e]||"error_0";g(w.a.getResource(w.a.language,"translation",n))};n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"d",(function(){return O}))},187:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(41),c=n.n(i),o=(n(58),n(40)),s=n(5),u=n.n(s),l=n(15),d=n(13),m=n(25),f=n(32),h=n(220),p=(n(112),n(113),n(56)),v=n(100),b=n(16),g=n(18),w=Object(g.a)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,257))})),_=Object(g.a)((function(){return n.e(4).then(n.bind(null,259))})),O=Object(g.a)((function(){return n.e(6).then(n.bind(null,258))})),y=function(e){e.children;return r.a.createElement(v.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:w}),r.a.createElement(b.a,{exact:!0,path:"/matrix",component:_}),r.a.createElement(b.a,{exact:!0,path:"/detail",component:O})))))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(d.a)(t,2),r=n[0],i=n[1],c=Object(a.useCallback)((function(e){i((function(t){return Object(o.a)({},t,{},e)}))}),[]);return[r,c]},j=(n(218),{en:{translation:{white_crow:"White Crow",home_info1:"All\nparticipants",home_info2:"joined\nin 24 hours",home_info3:"Participants\nhave earned DOS",home_info4:"Participants\nearned DOS in 24 hours",share:"share",buy:"buy",affiliate_link:"affiliate link",copy_address:"copy recommended ID",copy_success:"Copy successful",copy_failed:"Copy failed",recommended_id:"Recommended ID",recommended_hint:"Enter recommendation ID",submit:"submit",error_1001:"No user found",error_1002:"User is disabled",error_1003:"User not activated",error_1004:"Data operation exception",error_1005:"Parameter error",error_1006:"Invalid recommended ID",error_0:"Unknown error",active:"active",user_disabled:"disabled",address_hint:"Please open the link in the Demos Wallet"}},cn:{translation:{white_crow:"\u767d\u4e4c\u9e26",home_info1:"\u6240\u6709\n\u53c2\u4e0e\u8005",home_info2:"24\u5c0f\u65f6\n\u5185\u52a0\u5165",home_info3:"\u53c2\u4e0e\u8005\n\u5df2\u83b7\u5f97DOS",home_info4:"\u53c2\u4e0e\u800524\u5c0f\u65f6\n\u83b7\u5f97DOS",share:"\u5206\u4eab",buy:"\u8d2d\u4e70",affiliate_link:"\u5173\u8054\u94fe\u63a5",copy_address:"\u590d\u5236\u63a8\u8350\u7801",copy_success:"\u590d\u5236\u6210\u529f",copy_failed:"\u590d\u5236\u5931\u8d25",recommended_id:"\u63a8\u8350\u7801",recommended_hint:"\u8f93\u5165\u63a8\u8350\u7801",submit:"\u63d0\u4ea4",error_1001:"\u672a\u53d1\u73b0\u7528\u6237",error_1002:"\u7528\u6237\u88ab\u7981\u7528",error_1003:"\u7528\u6237\u672a\u6fc0\u6d3b",error_1004:"\u6570\u636e\u64cd\u4f5c\u5f02\u5e38",error_1005:"\u53c2\u6570\u9519\u8bef",error_1006:"\u9080\u8bf7\u7801\u65e0\u6548",error_0:"\u672a\u77e5\u9519\u8bef",active:"\u6fc0\u6d3b",user_disabled:"\u5df2\u7981\u7528",address_hint:"\u8bf7\u5728Demos\u94b1\u5305\u4e2d\u6253\u5f00\u94fe\u63a5"}}});m.a.use(f.e).init({resources:j,lng:"en",fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});var x=function(){var e=Object(h.a)().t,t=E({address:""}),n=Object(d.a)(t,2),i=n[0],c=n[1],s=function(e){c(e)};return Object(a.useEffect)((function(){function t(){return(t=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.demos.getIdentity();case 2:t=e.sent,n=t.address,"DOS"===t.currency?s({address:n}):Object(g.e)("\u8bf7\u5207\u6362\u5230DOS\u94b1\u5305\u518d\u8bd5",6e4);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var n=setTimeout((function(){Object(g.e)(e("address_hint"),3e5)}),2e3);(function(){return t.apply(this,arguments)})().then((function(){clearTimeout(n)})),"cn"===window.localStorage.white_crow_language&&m.a.changeLanguage("cn")}),[]),r.a.createElement(p.b.Provider,{value:Object(o.a)({},i,{updateStore:s,reloadData:function(e){},t:e})},r.a.createElement(y,null))};!function(){var e=document.getElementsByTagName("html")[0],t=function(){e.style.fontSize=Math.min(document.body.clientWidth/7.5,100)+"px"};window.addEventListener("resize",t,!1),t()}(),c.a.render(r.a.createElement(x,null),document.getElementById("root"))},56:function(e,t,n){"use strict";var a=n(42),r=n(0),i=n.n(r),c=i.a.createContext(null),o=function(e){return function(t){return Object(r.forwardRef)((function(n,r){return i.a.createElement(c.Consumer,null,(function(c){var o=c.updateStore,s=Object(a.a)(c,["updateStore"]),u=Object.assign({},s);return"function"===typeof e&&(u=e(u)),i.a.createElement(t,Object.assign({},n,u,{updateStore:o,ref:r}))}))}))}};n(187);function s(e){var t=e.children,n=e.className,r=void 0===n?"":n,c=Object(a.a)(e,["children","className"]);return i.a.createElement("div",Object.assign({className:"c-card ".concat(r)},c),t,i.a.createElement("i",null))}n(188);var u=n(41),l=n.n(u),d=(n(189),document.getElementById("root"));function m(){return l.a.createPortal(i.a.createElement("div",{className:"c-mask-loading"},i.a.createElement("div",{className:"c-mask-loading-card"},i.a.createElement("div",{className:"c-mask-loading-spin"}),i.a.createElement("p",null,"Loading..."))),d)}var f=n(13);n(190);function h(e){var t=e.children,n=e.className,a=void 0===n?"":n,c=e.visible,o=e.onCancel,s=e.showClose,u=void 0===s||s,l=Object(r.useState)(!1),d=Object(f.a)(l,2),m=d[0],h=d[1],p=Object(r.useState)(!0),v=Object(f.a)(p,2),b=v[0],g=v[1];return Object(r.useEffect)((function(){c?m||(h(!0),g(!0)):m&&(setTimeout((function(){h(!1)}),220),g(!1))}),[c]),m?i.a.createElement("div",{className:"c-modal-mask ".concat(b?"in":"out")},i.a.createElement("div",{className:"c-modal-content ".concat(b?"in":"out")},i.a.createElement("div",{className:"c-modal-body ".concat(a)},t),u&&i.a.createElement("div",{className:"c-modal-footer",onClick:function(){o&&o()}}))):null}n(191);var p=function(e){var t=e.title,n=e.history;return i.a.createElement("div",{className:"basic_layout"},i.a.createElement("div",{className:"basic_layout-header"},i.a.createElement("div",{className:"leading",onClick:function(){n.goBack()}},i.a.createElement("img",{src:"".concat("https://cdn.jsdelivr.net/gh/doschain/static/white_crow","/images/arrow_left.png"),alt:""})),i.a.createElement("div",{className:"title"},t),i.a.createElement("div",{className:"action"})))},v=n(5),b=n.n(v),g=n(15),w=(n(192),n(220));var _=function(e){var t=e.className,n=void 0===t?"":t,a=Object(w.a)().i18n,r=a.language;function c(e){return o.apply(this,arguments)}function o(){return(o=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.changeLanguage(t);case 2:window.localStorage.white_crow_language=t;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.createElement("div",{className:"c-languageSwitch ".concat(n)},i.a.createElement("div",{onClick:Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("en");case 2:case"end":return e.stop()}}),e)}))),className:"".concat("en"===r?"active":"")},"English"),i.a.createElement("div",{onClick:Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("cn");case 2:case"end":return e.stop()}}),e)}))),className:"".concat("cn"===r?"active":"")},"\u4e2d\u6587"))};n.d(t,"b",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return p})),n.d(t,"c",(function(){return _}))},58:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.552ab237.chunk.js.map