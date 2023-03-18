"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[127],{5127:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r=t(2791),a=t(9434),u=t(6907),o=t(3634),i=t(2297),c=t(9439),s=t(9146),l="NOT_FOUND";var f=function(e,n){return e===n};function d(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?f:r,u=t.maxSize,o=void 0===u?1:u,i=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),s=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:l},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return l}return{get:r,put:function(n,a){r(n)===l&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,c);function d(){var n=s.get(arguments);if(n===l){if(n=e.apply(null,arguments),i){var t=s.getEntries(),r=t.find((function(e){return i(e.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return d.clearCache=function(){return s.clear()},d}function p(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function h(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i,l=s.memoizeOptions,f=void 0===l?t:l,d=Array.isArray(f)?f:[f],h=p(r),v=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(d)),m=e((function(){for(var e=[],n=h.length,t=0;t<n;t++)e.push(h[t].apply(null,arguments));return u=v.apply(null,e)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:v,dependencies:h,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),m};return a}var v=h(d),m=function(e){return e.contacts.items},y=function(e){return e.contacts.isLoading},x=function(e){return e.contacts.error},b=function(e){return e.filter},g=v([m,b],(function(e,n){if(!n)return e;var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),j="ContactForm_form__zqkUM",_=t(3329);function C(){var e=(0,r.useState)(""),n=(0,c.Z)(e,2),t=n[0],u=n[1],i=(0,r.useState)(""),l=(0,c.Z)(i,2),f=l[0],d=l[1],p=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":u(r);break;case"number":d(r)}},h=(0,a.v9)(m),v=(0,a.I0)(),y=function(){u(""),d("")};return(0,_.jsxs)("form",{className:j,onSubmit:function(e){e.preventDefault();var n=t.toLowerCase();if(h.some((function(e){return e.name.toLowerCase()===n})))alert("".concat(t," is already in contacts"));else if(h.some((function(e){return e.number===f})))alert("This phone number already exists");else{var r={name:t,number:f};v((0,o.uK)(r)),y()}},children:[(0,_.jsxs)("label",{children:["Name",(0,_.jsx)("input",{type:"text",name:"name",value:t,placeholder:"enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p})]}),(0,_.jsxs)("label",{children:["Phone number",(0,_.jsx)("input",{type:"tel",name:"number",value:f,placeholder:"enter phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p})]}),(0,_.jsx)(s.Z,{text:"Add contact"})]})}var w="ContactList_contactList__lfyFV",k="ContactList_name__r7wZR",A="ContactList_number__NuB-u",Z=function(){var e=(0,a.v9)(g),n=(0,a.I0)();return(0,_.jsx)("ul",{className:w,children:e.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,_.jsxs)("li",{children:[(0,_.jsx)("span",{className:k,children:r}),(0,_.jsx)("span",{className:A,children:a}),(0,_.jsx)("button",{type:"button",onClick:function(){return n((0,o.GK)(t))},children:"delete"})]},t)}))})},N=t(4808),z="Filter_filter__asygT",F=function(){var e=(0,a.v9)(b),n=(0,a.I0)();return(0,_.jsxs)("label",{className:z,children:["Filter",(0,_.jsx)("input",{type:"text",name:"filter",placeholder:"add a filter to sort contacts",value:e,onChange:function(e){n((0,N.M6)(e.target.value))}})]})};function L(){var e=(0,a.I0)(),n=(0,a.v9)(y),t=(0,a.v9)(m),c=(0,a.v9)(x);return(0,r.useEffect)((function(){e((0,o.yF)())}),[e]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u.ql,{children:(0,_.jsx)("title",{children:"Your contacts"})}),(0,_.jsx)(i.Z,{title:"Add new contact",level:"2",children:(0,_.jsx)(C,{})}),(0,_.jsxs)(i.Z,{title:"Contacts",level:"2",children:[n&&!c&&(0,_.jsx)("b",{children:"Request in progress..."}),!n&&t.length>0&&(0,_.jsx)(F,{}),!n&&0===t.length&&(0,_.jsx)("p",{children:"There are no contacts yet"}),(0,_.jsx)(Z,{})]})]})}},9146:function(e,n,t){t.d(n,{Z:function(){return u}});var r="Button_formButton__VvZgm",a=t(3329),u=function(e){var n=e.text;return(0,a.jsx)("button",{className:r,type:"submit",children:n})}},2297:function(e,n,t){t.d(n,{Z:function(){return u}});var r="Section_section__zZBw+",a=t(3329),u=function(e){var n=e.title,t=e.level,u=void 0===t?"1":t,o=e.children,i="h".concat(u);return(0,a.jsxs)("section",{className:r,children:[(0,a.jsx)(i,{children:n}),o]})}}}]);
//# sourceMappingURL=127.75604f28.chunk.js.map