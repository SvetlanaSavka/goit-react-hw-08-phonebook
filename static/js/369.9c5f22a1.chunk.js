"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[369],{3369:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,a,i,c,o,s,u,l=t(2791),d=t(5705),p=t(3284),f=t(5984),m=t(9434),x=t(168),h=t(6031),g=(0,h.ZP)(d.l0)(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n  width: 470px;\n  border-radius: 2px;\n  margin-bottom: 6px;\n"]))),b=h.ZP.label(a||(a=(0,x.Z)(["\n  display: inline-block;\n  margin-left: 20px;\n  font-size: 14px;\n  font-family: sans-serif;\n  cursor: pointer;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryShade2})),v=h.ZP.button(i||(i=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 20px;\n  margin-top: 20px;\n  padding: 4px 18px;\n  width: 120px;\n  border-radius: 4px;\n  background-color: lightblue;\n  :hover {\n    background-color: lightgrey;\n  }\n"]))),Z=(0,h.ZP)(d.gN)(c||(c=(0,x.Z)(["\n  margin-left: 20px;\n  display: inline-block;\n  border-width: 2px;\n  border-radius: 4px;\n  height: 26px;\n"]))),y=function(n){return n.contacts.contacts},w=function(n){return n.contacts.filter},j={getContacts:y,getFilter:w,getIsLoading:function(n){return n.contacts.isLoading},getVisibleContacts:(0,t(6916).P1)([y,w],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}))},k=t(5861),C=t(7757),_=t.n(C),P=t(3112),F=function(n){return P.Z.post("/contacts",n)},z=function(n){return P.Z.delete("/contacts/".concat(n))},A=t(5142),L=t(184),I=p.Ry().shape({name:p.Z_().required().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),number:p.Z_().required().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})}),N=function(){var n=(0,m.v9)(j.getContacts),e=(0,m.I0)(),t=function(t){var r=function(e){return n.find((function(n){return n.name===e.name}))}(t);if(r)alert("".concat(t.name," \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"));else{var a={id:(0,f.x0)(),name:t.name,number:t.number};e(function(n){return function(){var e=(0,k.Z)(_().mark((function e(t){var r,a;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((0,A.md)()),e.prev=1,e.next=4,F(n);case 4:r=e.sent,a=r.data,t((0,A.ff)(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t((0,A.xZ)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}()}(a))}};return(0,L.jsx)(d.J9,{initialValues:{number:"",name:""},validationSchema:I,onSubmit:function(n,e){var r=e.resetForm;t(n),r()},children:(0,L.jsxs)(g,{autoComplete:"off",children:[(0,L.jsx)(b,{htmlFor:"user-name",children:"Name"}),(0,L.jsx)(Z,{type:"text",name:"name",id:"user-name"}),(0,L.jsx)(d.Bc,{name:"name"}),(0,L.jsx)(b,{htmlFor:"number",children:"Number"}),(0,L.jsx)(Z,{type:"tel",name:"number"}),(0,L.jsx)(d.Bc,{name:"number"}),(0,L.jsx)(v,{type:"submit",children:"Add contact"})]})})},B=h.ZP.button(o||(o=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px 18px;\n  width: 70px;\n  border-radius: 4px;\n  background-color: lightblue;\n  :hover {\n    background-color: lightgrey;\n  }\n"]))),S=h.ZP.li(s||(s=(0,x.Z)(["\n  margin-bottom: 15px;\n  max-width: 400px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  margin-left: 30px;\n  font-family: 'Helvetica';\n  padding-right: 200px;\n  list-style: none;\n"]))),q=h.ZP.span(u||(u=(0,x.Z)(["\n  margin-right: 30px;\n"]))),E=function(){var n=(0,m.v9)(j.getContacts),e=(0,m.v9)(j.getFilter),t=(0,m.I0)();(0,l.useEffect)((function(){t(function(){var n=(0,k.Z)(_().mark((function n(e){var t,r;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e((0,A.$0)()),n.prev=1,n.next=4,P.Z.get("/contacts");case 4:t=n.sent,r=t.data,e((0,A.v2)(r)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),e((0,A.I7)(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}())}),[t]);var r=function(n){t(function(n){return function(){var e=(0,k.Z)(_().mark((function e(t){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t((0,A.us)()),z(n).then((function(){return t((0,A.uv)(n))})).catch((function(n){return t((0,A.EF)(n.message))}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}(n))};return(0,L.jsx)("ul",{children:function(){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}().map((function(n){var e=n.id,t=n.name,a=n.number;return(0,L.jsxs)(S,{children:[(0,L.jsx)(q,{children:t+": "+a}),(0,L.jsx)(B,{type:"button",onClick:function(){return r(e)},children:"Delete"})]},e)}))})},J=function(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(N,{}),(0,L.jsx)(E,{})]})}}}]);
//# sourceMappingURL=369.9c5f22a1.chunk.js.map