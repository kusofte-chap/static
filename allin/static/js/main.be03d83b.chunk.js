(this.webpackJsonputxo=this.webpackJsonputxo||[]).push([[0],{16:function(e,t,n){"use strict";var a=n(10),r=n(0),c=n.n(r),o=c.a.createContext(null),i=function(e){return function(t){return Object(r.forwardRef)((function(n,r){return c.a.createElement(o.Consumer,null,(function(o){var i=o.updateStore,u=Object(a.a)(o,["updateStore"]),l=Object.assign({},u);return"function"===typeof e&&(l=e(l)),c.a.createElement(t,Object.assign({},n,l,{updateStore:i,ref:r}))}))}))}};n(46);function u(){return c.a.createElement("div",{className:"c-loading"},"Loading...")}var l=n(14),s=n.n(l),d=(n(47),document.getElementById("root"));function f(){return s.a.createPortal(c.a.createElement("div",{className:"c-mask-loading"},c.a.createElement("div",{className:"c-mask-loading-card"},c.a.createElement("div",{className:"c-mask-loading-spin"}))),d)}n(48);n(8);function m(e){var t=e.value,n=void 0===t?"":t,r=e.placeholder,o=void 0===r?"":r,i=e.onClick,u=e.onChange,l=e.id,s=Object(a.a)(e,["value","placeholder","onClick","onChange","id"]);return c.a.createElement("input",Object.assign({id:l,value:n,placeholder:o,onClick:function(e){i&&i(e),window.demos.showKeyboard({value:n+"",placeholder:o,multiple:!0}).then((function(e){u(e)}))},onChange:u},s))}function p(e){var t=e.value,n=void 0===t?"":t,r=e.placeholder,o=void 0===r?"":r,i=e.onClick,u=e.onChange,l=e.id,s=Object(a.a)(e,["value","placeholder","onClick","onChange","id"]);return c.a.createElement("textarea",Object.assign({id:l,value:n,placeholder:o,onClick:function(e){i&&i(e),window.demos.showKeyboard({value:n+"",placeholder:o,multiple:!0}).then((function(e){u(e)}))},onChange:u},s))}n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"e",(function(){return p}))},21:function(e,t,n){},40:function(e,t,n){e.exports=n(71)},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),i=(n(21),n(9)),u=n.n(i),l=n(13),s=n(19),d=n(12),f=n(16),m=n(35),p=n(7),h=n(8),v=Object(h.b)((function(){return n.e(3).then(n.bind(null,73))})),b=function(e){e.children;return r.a.createElement(m.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:v})))))};var g=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(d.a)(t,2),r=n[0],c=n[1],o=Object(a.useCallback)((function(e){c((function(t){return Object(s.a)({},t,{},e)}))}),[]);return[r,o]}({address:""}),t=Object(d.a)(e,2),n=t[0],c=t[1],o=function(e){c(e)};Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,window.demos.getIdentity();case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,window.demos.getIdentity();case 8:e.t0=e.sent;case 9:t=e.t0,n=t.address,"DOS"===t.currency?(o({address:n}),i(n)):Object(h.c)("\u8bf7\u5207\u6362\u5230DOS\u94b1\u5305\u518d\u8bd5",6e4);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i=function(e){};return r.a.createElement(f.a.Provider,{value:Object(s.a)({},n,{updateStore:o,reloadData:i})},n.loadUtxo&&r.a.createElement(f.d,null),r.a.createElement(b,null))};!function(){var e=document.getElementsByTagName("html")[0],t=function(){e.style.fontSize=Math.min(document.body.clientWidth/7.5,100)+"px"};window.addEventListener("resize",t,!1),t()}(),o.a.render(r.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,n){"use strict";var a=function(e){return String(e).replace(/^(?=(\d))\1$/,"0$1")},r=n(9),c=n.n(r),o=n(13),i=n(31),u=n(32),l=n(38),s=n(33),d=n(39),f=n(0),m=n.n(f),p=function(e){return function(t){function n(e){var t;return Object(i.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).state={component:null},t}return Object(d.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(o.a)(c.a.mark((function t(){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,a=n.default,this.setState({component:a});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?m.a.createElement(e,this.props):null}}]),n}(m.a.Component)};"".concat("https://cdn.jsdelivr.net/gh/doschain/static/allin","/images"),n(12);var h=n(34),v=(n.n(h).a.create({timeout:1e4}),function(e,t){t=isNaN(t)?3e3:t;var n=document.createElement("div");n.innerHTML=e,n.style.cssText="max-width:80%;min-width: 80px;padding: 10px 14px;word-break: break-all;line-height:1.5;color: rgb(255, 255, 255);text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;",document.body.appendChild(n),setTimeout((function(){n.style.webkitTransition="-webkit-transform 0.5s ease-in, opacity 0.5s ease-in",n.style.opacity="0",setTimeout((function(){document.body.removeChild(n)}),500)}),t)});n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return v}))}},[[40,1,2]]]);