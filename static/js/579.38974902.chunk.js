"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[579],{6579:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(9434),a=t(2791),i=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},s=function(e){return e.contacts.error},c=function(e){return e.filter},o=t(6052),u=t(3096),m=t(5264),d=t(3329),f=function(){var e=(0,r.I0)(),n=(0,r.v9)(i);return(0,d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.target,a=r.name.value,i=r.number.value;n.some((function(e){return e.name===a}))?m.Notify.failure("".concat(a," is already in contacts")):(e((0,o.uK)({name:a,number:i})),r.reset())},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,d.jsx)("input",{id:"name",name:"name",label:"Name",variant:"outlined",pattern:"^([A-Za-z-']{1,50})|([\u0410-\u042f\u0430-\u044f-']{1,50})$",title:"Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,sx:{mb:2}})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"tel",children:"Number:"}),(0,d.jsx)("input",{id:"tel",name:"number",label:"Number",variant:"outlined",title:"Please enter a valid phone number",required:!0,sx:{mb:2}})]}),(0,d.jsx)("button",{variant:"contained",type:"submit",sx:{mb:4,color:"#FFD700",fontWeight:"700",bgcolor:"#0057B8"},children:"Add contact"})]})},h=t(2134),x="ContactItem_item__gxreB",v=function(e){var n=e.contact,t=n.id,a=n.name,i=n.number,l=(0,r.I0)();return(0,d.jsxs)("li",{className:x,children:[(0,d.jsxs)("p",{children:[a,":"]}),(0,d.jsx)("p",{children:i}),(0,d.jsxs)("button",{"aria-label":"delete",onClick:function(){return l((0,o.GK)(t))},children:[" Delete",(0,d.jsx)(h.YK6,{})]})]})},b={},j=function(){var e=(0,r.v9)(i),n=(0,r.v9)(c),t=(null===e||void 0===e?void 0:e.length)>0;return(0,d.jsx)("ul",{className:b.list,children:t&&e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())})).map((function(e){return(0,d.jsx)(v,{contact:e},e.id)}))})},p=function(){var e=(0,r.I0)();return(0,d.jsx)("input",{id:"filter",label:"Filter",name:"filter",variant:"outlined",fullWidth:!0,onChange:function(n){return e((0,o.Tv)(n.target.value))}})},g=t(6952),C=function(){var e=(0,r.I0)(),n=(0,r.v9)(l),t=(0,r.v9)(s);return(0,a.useEffect)((function(){e((0,o.yF)())}),[e]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(u.Z,{className:"container",maxWidth:"sm",sx:{pt:2,pb:2},children:[(0,d.jsx)(f,{}),(0,d.jsx)("p",{children:"Contacts"}),(0,d.jsx)(p,{}),!t&&(0,d.jsx)(j,{}),n&&!t&&(0,d.jsx)(g.Z,{})]})})}}}]);
//# sourceMappingURL=579.38974902.chunk.js.map