(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1263:function(e,t,a){},1269:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(0),c=a.n(r),o=a(162),l=a.n(o),i=a(132),s=function(e){var t=e.input,a=e.label,n=e.tabIndex,r=e.options,o=e.meta,l=o.touched,i=o.error,s=o.warning,m=e.disabled;return c.a.createElement("div",{className:"input-with-error"},c.a.createElement("label",null,a),c.a.createElement("select",Object.assign({},t,{tabIndex:n,disabled:m}),r.map(function(e,t){return c.a.createElement("option",{key:"option-".concat(t)},e)})),c.a.createElement("div",{className:"input-subline"},l&&(i&&c.a.createElement("div",{className:"input-error"},i)||s&&c.a.createElement("div",{className:"input-warning"},s))))},m=a(339),u=a(330),d=a(51),p=a(218),h=a(27),g=a(565),f=a(24),b=a(572),E=function(e){var t=e.errors,a=Object(r.useState)(!1),o=Object(n.a)(a,2),l=o[0],i=o[1];return!!t.length&&c.a.createElement("div",{style:{paddingLeft:"5px"}},c.a.createElement("div",{style:{cursor:"pointer",color:"#bf4153",fontWeight:"bold",display:"flex"},onClick:function(){i(!l)}},c.a.createElement("span",null,"".concat(l?"Hide":"Display"," ").concat(t.length," validation errors")),c.a.createElement("span",{style:{marginLeft:"5px",position:"relative"}},"\u25be")),l&&c.a.createElement("ul",{style:{color:"#bf4153"}},t.map(function(e,t){return c.a.createElement("li",{key:"lineitem-error$-".concat(t)},e)})))},v=function(e){var t=e.input,a=t.onChange,n=t.value,r=void 0===n?[]:n,o=e.meta,l=o.error,i=void 0===l?[]:l,s=o.touched,m=Object(f.a)(e,["input","meta"]);return"string"==typeof r&&(r=[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,Object.assign({onChange:a,value:r},m)),s&&c.a.createElement(E,{errors:i}))},y=a(17),x=a(204),N=(a(1263),function(e){var t=e.errorTitle,a=e.errorMessage,n=e.onRetry;return c.a.createElement("div",{className:"retry-error"},c.a.createElement("div",{className:"retry-error_content"},c.a.createElement("span",{className:"retry-error_title"},t),c.a.createElement("span",{className:"retry-error_message"},a)),c.a.createElement("button",{className:"c-btn c-btn-primary button-small",onClick:n}," ","Retry"))}),w=function(e){var t=e.children,a=e.isLoading,n=e.loadingMessage,o=e.error,l=e.refreshTriggers,i=e.onFetch,s=e.style,m=void 0===s?{}:s,u=JSON.stringify(l);if(Object(r.useEffect)(function(){i()},[u,i]),o)throw o;return c.a.createElement("div",{style:m},a?c.a.createElement(c.a.Fragment,null,n,c.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin left-margin-5",style:{fontSize:"14px"}})):t)},C=function(e){var t=e.onFetch,a=e.isLoading,n=e.errorTitle,r=Object(f.a)(e,["onFetch","isLoading","errorTitle"]);return c.a.createElement(x.a,{displayError:!a,errorRenderer:function(e){return c.a.createElement(N,{errorTitle:n,errorMessage:"object"===typeof e?e.toString():e,onRetry:t})}},c.a.createElement(w,Object(y.a)({},r,{onFetch:t,isLoading:a})))},j=a(34),O=function(e){return e.reduce(function(e,t){return e+t},"")},k=function(e){var t=e.cmscontactsupportedchars,a=e.cmsnamelocationsupportedchars,n=e.maxlocationlength,r=e.minlocationlength,c=e.mincontactlength,o=e.maxcontactlength,l=e.minnamelength,i=e.maxnamelength,s=e.minlineitemcollength,m=e.maxlineitemcollength,u=e.invoicefieldsupportedchars;return"\n***Contractor Name:*** This is whatever name you identify yourself with the DHG, typically something beyond a mere handle or nick. \n   - Allowed chars: ".concat(O(a),"\n   - Min length: ").concat(l,"\n   - Max length: ").concat(i,"\n  \n***Contractor Location:*** This is the country you are currently located, or primarily residing.\n  - Allowed chars: ").concat(O(a),"\n  - Min length: ").concat(r,"\n  - Max length: ").concat(n,"\n  \n***Contractor Contact:*** Contact information in case an administrator would need to reach out to discuss something, typically an email address or chat nick.\n  - Allowed chars: ").concat(O(t),"\n  - Min length: ").concat(c,"\n  - Max length: ").concat(o,"\n  \n***Contractor Rate:*** This is the previously agreed upon rate you will be performing work.\n  \n***Payment Address:*** This is the DCR address where you would like to receive payment.  \n  \n***Line Items:***\n  * Type: Currently can be 1 (Labor), 2 (Expense), or 3 (Misc)\n  * Domain: The broad category of work performed/expenses spent (for example, Development, Marketing, Community etc).\n  * Subdomain: The specific project or program of which the work or expenses are related (for example, Demos, dos, NYC Event).\n  * Description: A thorough description of the work or expenses.\n  * Labor: The number of hours of work performed.\n  * Expenses: The cost of the line item (in USD).\n    \nLine items policy for domain, subdomain and description:\n  - Allowed chars: ").concat(O(u),"\n  - Min length: ").concat(s,"\n  - Max length: ").concat(m,"\n  ")},M=[2018,2019],T=[1,2,3,4,5,6,7,8,9,10,11,12];t.default=function(e){var t=e.isLoading,a=e.onSave,o=e.onCancel,f=e.submitting,b=e.handleSubmit,E=e.submitError,y=e.editingMode,x=e.month,N=e.year,w=e.onFetchExchangeRate,O=e.loadingExchangeRate,L=e.exchangeRate,S=e.exchangeRateError,A=e.change,D=e.policy,F=e.userCanExecuteActions,I=e.loggedInAsEmail,R=e.valid,z=e.pristine,q=e.onSaveInvoiceDraft,U=e.draftInvoiceById,W=e.isDraftSaving,B=e.draftButtonText,J=Object(r.useState)(T),_=Object(n.a)(J,2),H=_[0],P=_[1],Y=Object(r.useState)(0),G=Object(n.a)(Y,2),K=G[0],V=G[1];Object(r.useEffect)(function(){if(+N===Object(j.j)()){var e=T.slice(0,Object(j.i)()-1);P(e)}else P(T)},[N]);var X=I&&!f&&R&&(!z||U)&&!S&&!O,$=Object(r.useCallback)(function(){x&&N&&w(x,N)},[x,N,w]);return c.a.createElement("div",{className:"content",role:"main"},c.a.createElement("div",{className:"page submit-proposal-page"},c.a.createElement(l.a,{className:"submit-page"}),c.a.createElement("div",{className:"submit conztent warn-on-unload",id:"newlink"},E?c.a.createElement(h.a,{type:"error",header:"Error ".concat(y?"updating":"creating"," invoice"),body:E}):null,c.a.createElement("div",{className:"formtabs-content"},c.a.createElement("div",{className:"spacer"},c.a.createElement(g.a,{name:"global",component:function(e){return c.a.createElement(i.a,Object.assign({title:"Cannot submit invoice"},e))}}),c.a.createElement("div",{className:"roundfield",id:"title-field"},c.a.createElement("div",{className:"roundfield-content"},c.a.createElement("div",{style:{display:"flex",width:"100%",alignItems:"flex-end"}},c.a.createElement(g.a,{name:"month",component:s,options:H,tabIndex:1,disabled:y,label:"Month"}),c.a.createElement(g.a,{name:"year",component:s,tabIndex:1,type:"text",options:M,label:"Year",disabled:y,onChange:function(e,t){A("month",1),A("year",t)}}),c.a.createElement(C,{onFetch:$,refreshTriggers:[x,N],isLoading:O,error:S,errorTitle:"Failed to fetch exchange rate",loadingMessage:"Updating exchange rate...",style:{marginLeft:"10px",fontSize:"0.75em",maxWidth:"200px",paddingBottom:"10px"}},c.a.createElement("span",null,"Exchange Rate:"," ",c.a.createElement("b",null,"".concat(Object(j.g)(L)," USD"))))),c.a.createElement("div",{className:"usertext",style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("div",{style:{paddingRight:"20px"}},c.a.createElement(g.a,{name:"name",label:"Contractor name",type:"text",component:u.a}),c.a.createElement(g.a,{name:"location",label:"Contractor location",type:"text",component:u.a}),c.a.createElement(g.a,{name:"contact",label:"Contractor contact",type:"text",component:u.a}),c.a.createElement(g.a,{name:"rate",label:"Contractor rate (USD)",type:"number",component:u.a,onChange:function(e){return isNaN(e.target.valueAsNumber)?V(0):V(e.target.valueAsNumber)}}),c.a.createElement(g.a,{name:"address",label:"Payment address",type:"text",component:u.a})),c.a.createElement("div",null,D&&c.a.createElement(p.a,Object.assign({body:k(D),filterXss:!1,confirmWithModal:null,displayExternalLikWarning:!1},e)))),c.a.createElement("div",{className:"usertext"},c.a.createElement(g.a,{name:"lineitems",component:v,policy:D,userRate:K})),c.a.createElement("div",null,c.a.createElement(g.a,{name:"files",className:"attach-button greenprimary",component:m.a,userCanExecuteActions:F,placeholder:"Attach a file",policy:D,normalize:m.b})),c.a.createElement("div",{className:"submit-wrapper"},c.a.createElement(d.a,{className:"togglebutton access-required".concat(!X&&" not-active disabled"),name:"submit",type:"submit",value:"form",text:y?"update":"submit",onClick:b(a),isLoading:t}),c.a.createElement(d.a,{className:"togglebutton secondary access-required",name:"submit",type:"submit",value:"form",text:B,onClick:b(q),isLoading:W}),y?c.a.createElement(d.a,{className:"togglebutton access-required".concat(t&&" not-active disabled"),name:"cancel",text:"Cancel",onClick:o}):null,c.a.createElement("p",{style:{fontSize:"16px",display:"flex",paddingTop:"1em"}},c.a.createElement("b",null,"NOTE:\xa0")," Drafts are locally stored in the browser and will NOT be available across different browsers or devices.")))))))))}},328:function(e,t){e.exports=function(e){return void 0===e}},329:function(e,t,a){var n=a(139),r=a(147),c=a(84),o=a(37);e.exports=function(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),a=arguments[0],l=e;l--;)t[l-1]=arguments[l];return n(o(a)?c(a):[a],r(t,1))}},330:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.input,a=e.label,n=e.placeholder,c=e.tabIndex,o=e.type,l=e.meta,i=l.touched,s=l.error,m=l.warning;return r.a.createElement("div",{className:"input-with-error"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{tabIndex:c,placeholder:n,type:o})),r.a.createElement("div",{className:"input-subline"},i&&(s&&r.a.createElement("div",{className:"input-error"},s)||m&&r.a.createElement("div",{className:"input-warning"},m))))}},339:function(e,t,a){"use strict";var n=a(12),r=a(13),c=a(15),o=a(14),l=a(16),i=a(0),s=a.n(i),m=a(105),u=a.n(m),d=a(26),p=a(169),h=a(27),g=function(e){var t=e.errors;return s.a.createElement("div",null,t.map(function(e,t){return s.a.createElement(h.a,{key:t,body:e,type:"error"})}))},f=a(322),b=a(37),E=a.n(b),v=a(328),y=a.n(v),x=a(329),N=a.n(x),w=a(195),C=a.n(w);a.d(t,"a",function(){return j}),a.d(t,"b",function(){return O});var j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).handleFilesChange=function(e){var t=a.props,n=t.input,r=t.meta.dispatch,c=t.policy,o=Object(f.a)(e),l=n.value?o.concat(n.value):o,i=Object(f.c)(l,c),s=i.errors,m=i.files;return a.setState({policyErrors:s||[]}),i.errors.length>0?m.length>0?r(Object(d.a)("form/record","files",m)):void 0:r(Object(d.a)("form/record","files",l))},a.state={policyErrors:[]},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.placeholder,a=void 0===t?"Upload":t,n=e.input,r=e.touched,c=e.error,o=e.disabled,l=e.policy,i=e.userCanExecuteActions,m=this.state.policyErrors;return l&&s.a.createElement("div",{className:"attach-wrapper"},m.length>0&&s.a.createElement(g,{errors:m}),s.a.createElement("div",null,s.a.createElement(u.a,{base64:!0,multipleFiles:!0,fileTypes:l.validmimetypes,handleFiles:this.handleFilesChange},s.a.createElement("div",{className:"button-wrapper"},s.a.createElement("button",{className:"togglebutton access-required".concat(i?"":" not-active disabled"),style:{margin:0}},a),s.a.createElement("div",{className:"attach-requirements"},s.a.createElement("div",null," ","Max number of files: ",s.a.createElement("span",null,l.maximages,".")," "),s.a.createElement("div",null," ","Max file size:"," ",s.a.createElement("span",null,Math.floor(l.maximagesize/1024)," Kb."," ")," "),s.a.createElement("div",null," ","Valid MIME types:"," ",s.a.createElement("span",null,l.validmimetypes.join(", "))," "))))),r&&c&&!o&&s.a.createElement("span",{className:"error"},c),s.a.createElement(p.a,{files:n.value||[],onChange:n.onChange}))}}]),t}(s.a.Component),O=function(e,t){var a=[];return t&&E()(t)&&(a=C()(t)),y()(e.remove)||a.splice(e.remove,1),E()(e)&&(a=N()(a,e)),a}}}]);
//# sourceMappingURL=13.2237292e.chunk.js.map