(this["webpackJsonptrain_app_v.1"]=this["webpackJsonptrain_app_v.1"]||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),i=n.n(r),s=(n(29),n(20)),j=n(21),o=n(24),d=n(23),l=n(8),b=(n(30),n(2)),u=n.p+"static/media/header1.b33b56a0.jpg",h=n.p+"static/media/header2.8d8dcc14.jpg",p=n.p+"static/media/header3.ba67b377.jpg",m=n.p+"static/media/header4.dac07ba5.jpg",O=n.p+"static/media/header5.c152dbd7.jpg",x=n.p+"static/media/header6.653d8563.jpg",f=(n(31),n(0)),v=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"/train_app_v.1/",exact:!0,render:function(){return Object(f.jsx)("img",{src:x,alt:"sport"})}}),Object(f.jsx)(b.a,{path:"/train_app_v.1/add_workout",render:function(){return Object(f.jsx)("img",{src:p,alt:"sport"})}}),Object(f.jsx)(b.a,{path:"/train_app_v.1/training_list",render:function(){return Object(f.jsx)("img",{src:m,alt:"sport"})}}),Object(f.jsx)(b.a,{path:"/train_app_v.1/history",render:function(){return Object(f.jsx)("img",{src:O,alt:"sport"})}}),Object(f.jsx)(b.a,{path:"/train_app_v.1/contact",render:function(){return Object(f.jsx)("img",{src:u,alt:"sport"})}}),Object(f.jsx)(b.a,{path:"/train_app_v.1/admin",render:function(){return Object(f.jsx)("img",{src:h,alt:"sport"})}}),Object(f.jsx)(b.a,{path:"/train_app_v.1/edit_workout",render:function(){return Object(f.jsx)("img",{src:h,alt:"sport"})}})]})})},g=(n(38),function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(b.a,{path:"/train_app_v.1/",exact:!0,render:function(){return Object(f.jsx)("p",{children:"home"})}}),Object(f.jsx)(b.a,{path:"/train_app_v.1/:page",exact:!0,render:function(e){return Object(f.jsxs)("p",{children:["home ",">"," ",e.match.params.page]})}})]})}),N=(n(39),[{name:"home",path:"/train_app_v.1/",exact:!0},{name:"add workout",path:"/train_app_v.1/add_workout"},{name:"training list",path:"/train_app_v.1/training_list"},{name:"history",path:"/train_app_v.1/history"},{name:"contact",path:"/train_app_v.1/contact"},{name:"admin",path:"/train_app_v.1/admin"}]),y=function(){var e=N.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(l.b,{to:e.path,exact:e.exact&&e.exact,children:e.name})},e.name)}));return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("nav",{className:"mainNav",children:Object(f.jsx)("ul",{children:e})})})},_=n(10),w=n(4),k=function(e){var t=e.addNewTraining,n=(new Date).toISOString().slice(0,10),a=Object(c.useState)(n),r=Object(w.a)(a,2),i=r[0],s=r[1],j=Object(c.useState)(""),o=Object(w.a)(j,2),d=o[0],l=o[1],b=Object(c.useState)(""),u=Object(w.a)(b,2),h=u[0],p=u[1],m=Object(c.useState)(""),O=Object(w.a)(m,2),x=O[0],v=O[1],g=Object(c.useState)(""),N=Object(w.a)(g,2),y=N[0],_=N[1],k=Object(c.useState)(""),S=Object(w.a)(k,2),C=S[0],F=S[1],D=function(e){var t=e.target.name,n=e.target.value;"important"===t?v((function(e){return!e})):"type"===t?F(n):"description"===t?l(n):"date"===t?s(n):"minutes"===t?_(n):"hours"===t&&p(n)},T=function(){if(C&&d&&y&&h)return!0};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h5",{className:"pageHeader",children:"new training"}),Object(f.jsx)("br",{}),Object(f.jsxs)("form",{children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-6",children:Object(f.jsx)("input",{name:"type",onChange:D,type:"text",className:"form-control",placeholder:"workout type","aria-label":"workout type",value:C,required:!0})})}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("input",{name:"hours",type:"number",className:"form-control",placeholder:"hours","aria-label":"workout type",min:"0",value:h,onChange:D,required:!0})}),Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("input",{name:"minutes",type:"number",className:"form-control",placeholder:"minutes","aria-label":"workout type",min:"0",max:"60",value:y,onChange:D,required:!0})})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("input",{name:"date",value:i,type:"date",className:"form-control","aria-label":"date",onChange:D})}),Object(f.jsxs)("div",{className:"form-check form-switch col-3",children:[Object(f.jsx)("input",{name:"important",value:x,className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onChange:D}),Object(f.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"important workout"})]})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"form-floating descriptionInput col-6",children:[Object(f.jsx)("textarea",{name:"description",value:d,className:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea",onChange:D,required:!0}),Object(f.jsx)("label",{className:"detailsLabel",htmlFor:"floatingTextarea",children:"training details"})]})}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{onClick:function(){T&&(!0===t({type:C,description:d,date:i,minutes:y,hours:h,important:x})&&(F(""),l(""),s(n),_(""),p(""),v("")))},type:"submit",className:"btn btn-info",children:"add"})]}),Object(f.jsx)("br",{})]})},S=[{id:0,type:"bike",description:" bike intervals 3*5k hard, break - 2km slow.",date:"2021-09-03",minutes:45,hours:0,important:!0,finished:!1},{id:1,type:"running",description:"easy run",date:"2021-08-20",minutes:30,hours:1,important:!0,finished:!1},{id:2,type:"running",description:"easy run - enjoy workout",date:(new Date).toISOString().slice(0,10),minutes:30,hours:0,important:!0,finished:!1},{id:3,type:"swim",description:"crawl",date:"2021-08-20",minutes:30,hours:0,important:!0,finished:!1},{id:4,type:"running",description:"easy run",date:"2021-08-20",minutes:30,hours:0,important:!0,finished:!1},{id:5,type:"running",description:"easy run",date:"2021-08-20",minutes:30,hours:0,important:!0,finished:!1},{id:6,type:"running",description:"easy run",date:"2021-08-20",minutes:30,hours:0,important:!0,finished:!1}],C=function(e){var t=e.editedWorkout,n=e.saveEdit,a=Object(c.useState)(t.date),r=Object(w.a)(a,2),i=r[0],s=r[1],j=Object(c.useState)(t.description),o=Object(w.a)(j,2),d=o[0],l=o[1],b=Object(c.useState)(t.hours),u=Object(w.a)(b,2),h=u[0],p=u[1],m=Object(c.useState)(t.important),O=Object(w.a)(m,2),x=O[0],v=O[1],g=Object(c.useState)(t.minutes),N=Object(w.a)(g,2),y=N[0],_=N[1],k=Object(c.useState)(t.type),S=Object(w.a)(k,2),C=S[0],F=S[1],D=function(e){var t=e.target.name,n=e.target.value;"important"===t?v((function(e){return!e})):"type"===t?F(n):"description"===t?l(n):"date"===t?s(n):"minutes"===t?_(n):"hours"===t&&p(n)},T=function(){if(C&&d&&y&&h)return!0};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h5",{className:"pageHeader",children:"EDIT WORKOUT"}),Object(f.jsx)("br",{}),Object(f.jsxs)("form",{children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-6",children:Object(f.jsx)("input",{name:"type",onChange:D,type:"text",className:"form-control",placeholder:"workout type","aria-label":"workout type",value:C,required:!0})})}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("input",{name:"hours",type:"number",className:"form-control",placeholder:"hours","aria-label":"workout type",min:"0",value:h,onChange:D,required:!0})}),Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("input",{name:"minutes",type:"number",className:"form-control",placeholder:"minutes","aria-label":"workout type",min:"0",max:"60",value:y,onChange:D,required:!0})})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("input",{name:"date",value:i,type:"date",className:"form-control","aria-label":"date",onChange:D})}),Object(f.jsxs)("div",{className:"form-check form-switch col-3",children:[Object(f.jsx)("input",{name:"important",value:x,className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onChange:D}),Object(f.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"important workout"})]})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"form-floating descriptionInput col-6",children:[Object(f.jsx)("textarea",{name:"description",value:d,className:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea",onChange:D,required:!0}),Object(f.jsx)("label",{className:"detailsLabel",htmlFor:"floatingTextarea",children:"training details"})]})}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{onClick:function(e){(e.preventDefault(),T)&&(!0===n({id:t.id,type:C,description:d,date:i,minutes:y,hours:h,important:x})&&(F(""),l(""),s(""),_(""),p(""),v("")))},type:"submit",className:"btn btn-info",children:"save"})]}),Object(f.jsx)("br",{})]})},F=function(e){var t=e.training,n=t.id,c=t.type,a=t.description,r=t.date,i=t.hours,s=t.minutes;return Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:c}),Object(f.jsx)("td",{children:a}),Object(f.jsx)("td",{children:i}),Object(f.jsx)("td",{children:s}),Object(f.jsx)("td",{children:r}),Object(f.jsx)("td",{className:"buttons",children:Object(f.jsx)("button",{onClick:function(){return e.complete(n)},className:"btn btn-primary btn-sm",children:"complete"})}),Object(f.jsx)("td",{className:"buttons",children:Object(f.jsx)("button",{onClick:function(){return e.delete(n)},className:"btn btn-danger btn-sm",children:"delete"})}),Object(f.jsx)("td",{className:"buttons",children:Object(f.jsx)("button",{onClick:function(){return e.edit(n)},className:"btn btn-warning btn-sm",children:"Edit"})})]})})},D=function(e){var t=e.list.filter((function(e){return e.finished})).map((function(t){return Object(f.jsx)(F,{training:t,complete:e.complete,delete:e.delete,edit:e.edit},t.id)}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h5",{className:"pageHeader",children:"finished workouts:"}),Object(f.jsxs)("table",{className:"table table-hover",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"type"}),Object(f.jsx)("th",{children:"description"}),Object(f.jsx)("th",{children:"h"}),Object(f.jsx)("th",{children:"m"}),Object(f.jsx)("th",{children:"date"}),Object(f.jsx)("th",{}),Object(f.jsx)("th",{}),Object(f.jsx)("th",{})]})}),t]})]})},T=function(e){var t=(new Date).toISOString().slice(0,10),n=e.list.filter((function(e){return e.date===t&&!1===e.finished})),c=n.map((function(t){return Object(f.jsx)(F,{training:t,complete:e.complete,delete:e.delete,edit:e.edit},t.id)}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{className:"quote",children:'\u201cIf you don\u2019t find the time, if you don\u2019t do the work, you don\u2019t get the results.\u201d \u2013 Arnold Schwarzenegger"'}),Object(f.jsx)("h5",{className:"pageHeader",children:n.length>0?"todays workouts:":"no more workouts for today"}),n.length>0&&Object(f.jsxs)("table",{className:"table table-hover",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"type"}),Object(f.jsx)("th",{children:"description"}),Object(f.jsx)("th",{children:"h"}),Object(f.jsx)("th",{children:"m"}),Object(f.jsx)("th",{children:"date"}),Object(f.jsx)("th",{}),Object(f.jsx)("th",{}),Object(f.jsx)("th",{})]})}),c]})]})},q=function(e){var t=e.list.filter((function(e){return!e.finished})).map((function(t){return Object(f.jsx)(F,{training:t,complete:e.complete,delete:e.delete,edit:e.edit},t.id)}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h5",{className:"pageHeader",children:"coming workouts:"}),Object(f.jsxs)("table",{className:"table table-hover",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"type"}),Object(f.jsx)("th",{children:"description"}),Object(f.jsx)("th",{children:"h"}),Object(f.jsx)("th",{children:"m"}),Object(f.jsx)("th",{children:"date"}),Object(f.jsx)("th",{}),Object(f.jsx)("th",{}),Object(f.jsx)("th",{})]})}),t]})]})},I=(n(40),function(){var e=Object(b.f)(),t=Object(c.useState)(S),n=Object(w.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)("a"),s=Object(w.a)(i,2),j=s[0],o=s[1],d=10,l=function(e){var t=e.type,n=e.description,c=e.date,a=e.minutes,i=e.hours,s=e.important,j={id:d,type:t,description:n,date:c,duration:"".concat(i," h : ").concat(a," m"),important:s,finished:!1};return r((function(e){return[].concat(Object(_.a)(e),[j])})),d++,!0},u=function(e){var t=a;t.forEach((function(t){t.id!==e||(t.finished=!0)})),r(Object(_.a)(t))},h=function(e){var t=a;t=t.filter((function(t){return t.id!==e})),r(Object(_.a)(t))},p=function(t){var n=a.filter((function(e){return e.id===t}));o(n[0]),e.push("/train_app_v.1/edit_workout")},m=function(e){var t=a;return t=t.filter((function(t){return t.id!==e.id})),r(Object(_.a)(t)),r((function(t){return[].concat(Object(_.a)(t),[e])})),!0};return Object(f.jsx)("div",{className:"pagesContainer",children:Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"/train_app_v.1/",exact:!0,render:function(){return Object(f.jsx)(T,{list:a,complete:u,delete:h,edit:p})}}),Object(f.jsx)(b.a,{path:"/train_app_v.1/add_workout",exact:!0,render:function(){return Object(f.jsx)(k,{addNewTraining:l})}}),Object(f.jsx)(b.a,{path:"/train_app_v.1/edit_workout",exact:!0,render:function(){return Object(f.jsx)(C,{editedWorkout:j,saveEdit:m})}}),Object(f.jsx)(b.a,{path:"/train_app_v.1/training_list",exact:!0,render:function(){return Object(f.jsx)(q,{list:a,complete:u,delete:h,edit:p})}}),Object(f.jsx)(b.a,{path:"/train_app_v.1/history",exact:!0,render:function(){return Object(f.jsx)(D,{list:a,complete:u,delete:h,edit:p})}})]})})}),E=(n(41),function(){return Object(f.jsxs)("p",{children:["from Ultran with ",Object(f.jsx)("span",{className:"peace",children:"\u262e"})]})}),L=(n(42),function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsx)(l.a,{children:Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("header",{children:Object(f.jsx)(v,{})}),Object(f.jsx)("section",{className:"path",children:Object(f.jsx)(g,{})}),Object(f.jsxs)("main",{children:[Object(f.jsx)("aside",{children:Object(f.jsx)(y,{})}),Object(f.jsx)("section",{className:"page",children:Object(f.jsx)(I,{})})]}),Object(f.jsx)("footer",{children:Object(f.jsx)(E,{})})]})})}}]),n}(c.Component)),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),H()}},[[43,1,2]]]);
//# sourceMappingURL=main.cab9fa1d.chunk.js.map