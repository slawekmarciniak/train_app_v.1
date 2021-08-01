(this["webpackJsonptrain_app_v.1"]=this["webpackJsonptrain_app_v.1"]||[]).push([[0],{32:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(21),s=n.n(r),i=(n(32),n(22)),j=n(23),o=n(27),l=n(26),d=n(3),b=n(13),u=[{id:0,type:"bike",description:" bike intervals 3*5k hard, break - 2km slow.",date:"2021-09-03",minutes:45,hours:0,important:!0,finished:!1},{id:1,type:"running",description:"easy run",date:"2021-08-20",minutes:30,hours:1,important:!0,finished:!1},{id:2,type:"running",description:"easy run - enjoy workout",date:(new Date).toISOString().slice(0,10),minutes:30,hours:0,important:!0,finished:!1},{id:3,type:"swim",description:"crawl",date:"2021-08-20",minutes:30,hours:0,important:!0,finished:!1},{id:4,type:"running",description:"easy run",date:"2021-08-20",minutes:30,hours:0,important:!0,finished:!1},{id:5,type:"running",description:"easy run",date:"2021-08-20",minutes:30,hours:0,important:!0,finished:!1},{id:6,type:"running",description:"easy run",date:"2021-08-20",minutes:30,hours:0,important:!0,finished:!1},{id:7,type:"running",description:"easy run",date:"2021-08-01",minutes:30,hours:0,important:!0,finished:!0}],h=n(0),O=Object(c.createContext)(),m=function(e,t){switch(t.type){case"ADD":return console.log("add"),[].concat(Object(b.a)(e),[t.value]);case"EDIT":var n=e.filter((function(e){return e.id!==t.value.id}));return[].concat(Object(b.a)(n),[t.value]);case"DELETE":return console.log("delete"),e.filter((function(e){return e.id!==t.id}));case"COMPLETE":var c=e;return c.forEach((function(e){e.id!==t.id||(e.finished=!0)})),Object(b.a)(c);default:throw new Error("OOops something went wrong, action type ".concat(t.type))}},x=function(e){var t=e.children,n=Object(c.useReducer)(m,u),a=Object(d.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(!1),j=Object(d.a)(i,2),o=j[0],l=j[1],b=Object(c.useState)(""),x=Object(d.a)(b,2),p=x[0],f=x[1],g=Object(c.useState)(""),v=Object(d.a)(g,2),N=v[0],y=v[1],w=function(e){return f(e)};return Object(h.jsx)(O.Provider,{value:{isUserLogged:o,toggleLoggedState:function(e){w(e),l((function(e){return!e}))},userName:p,dispatch:s,state:r,handleEditButton:function(e){var t=r.filter((function(t){return t.id===e}));y(t[0])},editingWorkout:N},children:t})},p=n(8),f=(n(34),n(2)),g=n.p+"static/media/header1.b33b56a0.jpg",v=n.p+"static/media/header2.8d8dcc14.jpg",N=n.p+"static/media/header3.ba67b377.jpg",y=n.p+"static/media/header4.dac07ba5.jpg",w=n.p+"static/media/header5.c152dbd7.jpg",k=n.p+"static/media/header6.653d8563.jpg",C=(n(35),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(f.c,{children:[Object(h.jsx)(f.a,{path:"/",exact:!0,render:function(){return Object(h.jsx)("img",{src:k,alt:"sport"})}}),Object(h.jsx)(f.a,{path:"/add_workout",render:function(){return Object(h.jsx)("img",{src:N,alt:"sport"})}}),Object(h.jsx)(f.a,{path:"/training_list",render:function(){return Object(h.jsx)("img",{src:y,alt:"sport"})}}),Object(h.jsx)(f.a,{path:"/history",render:function(){return Object(h.jsx)("img",{src:w,alt:"sport"})}}),Object(h.jsx)(f.a,{path:"/contact",render:function(){return Object(h.jsx)("img",{src:g,alt:"sport"})}}),Object(h.jsx)(f.a,{path:"/admin",render:function(){return Object(h.jsx)("img",{src:v,alt:"sport"})}}),Object(h.jsx)(f.a,{path:"/edit_workout",render:function(){return Object(h.jsx)("img",{src:v,alt:"sport"})}}),Object(h.jsx)(f.a,{path:"/login",render:function(){return Object(h.jsx)("img",{src:v,alt:"sport"})}})]})})}),S=(n(41),function(){var e=Object(c.useContext)(O).isUserLogged,t=Object(c.useContext)(O).userName,n=e&&Object(h.jsxs)("span",{className:"login",children:[Object(h.jsx)("span",{children:"user:"})," ",Object(h.jsx)("span",{className:"user",children:t})]});return Object(h.jsxs)("div",{className:"path",children:[Object(h.jsx)(f.a,{path:"/",exact:!0,render:function(){return Object(h.jsx)("div",{className:"pathName",children:"home"})}}),Object(h.jsx)(f.a,{path:"/:page",exact:!0,render:function(e){return Object(h.jsxs)("div",{className:"pathName",children:["home ",">"," ",e.match.params.page]})}}),n]})}),D=(n(42),[{name:"home",path:"/",exact:!0},{name:"add workout",path:"/add_workout"},{name:"training list",path:"/training_list"},{name:"history",path:"/history"},{name:"login",path:"/login"}]),E=function(){var e=D.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(p.b,{to:e.path,exact:e.exact&&e.exact,children:e.name})},e.name)}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("nav",{className:"mainNav",children:Object(h.jsx)("ul",{children:e})})})},L=n(25),_=function(){var e=Object(c.useContext)(O).dispatch,t=(new Date).toISOString().slice(0,10);console.log(t);var n=Object(c.useState)(t),a=Object(d.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),j=Object(d.a)(i,2),o=j[0],l=j[1],b=Object(c.useState)(""),u=Object(d.a)(b,2),m=u[0],x=u[1],p=Object(c.useState)(""),f=Object(d.a)(p,2),g=f[0],v=f[1],N=Object(c.useState)(""),y=Object(d.a)(N,2),w=y[0],k=y[1],C=Object(c.useState)(""),S=Object(d.a)(C,2),D=S[0],E=S[1],_=function(e){var t=e.target.name,n=e.target.value;"important"===t?v((function(e){return!e})):"type"===t?E(n):"description"===t?l(n):"date"===t?s(n):"minutes"===t?k(n):"hours"===t&&x(n)},F=function(){if(D&&o&&w&&m)return!0};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h5",{className:"pageHeader",children:"new training"}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-6",children:Object(h.jsx)("input",{name:"type",onChange:_,type:"text",className:"form-control",placeholder:"workout type","aria-label":"workout type",value:D,required:!0})})}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-3",children:Object(h.jsx)("input",{name:"hours",type:"number",className:"form-control",placeholder:"hours","aria-label":"workout type",min:"0",value:m,onChange:_,required:!0})}),Object(h.jsx)("div",{className:"col-3",children:Object(h.jsx)("input",{name:"minutes",type:"number",className:"form-control",placeholder:"minutes","aria-label":"workout type",min:"0",max:"60",value:w,onChange:_,required:!0})})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-3",children:Object(h.jsx)("input",{name:"date",value:r,type:"date",className:"form-control","aria-label":"date",onChange:_})}),Object(h.jsxs)("div",{className:"form-check form-switch col-3",children:[Object(h.jsx)("input",{name:"important",value:g,className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onChange:_}),Object(h.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"important workout"})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"form-floating descriptionInput col-6",children:[Object(h.jsx)("textarea",{name:"description",value:o,className:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea",onChange:_,required:!0}),Object(h.jsx)("label",{className:"detailsLabel",htmlFor:"floatingTextarea",children:"training details"})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(n){n.preventDefault(),F&&(e({value:{id:Object(L.v4)(),type:D,description:o,date:r,minutes:w,hours:m,important:g,finished:!1},type:"ADD"}),E(""),l(""),s(t),k(""),x(""),v(""))},type:"submit",className:"btn btn-info",children:"add"})]}),Object(h.jsx)("br",{})]})},F=function(){var e=Object(c.useContext)(O),t=e.editingWorkout,n=e.dispatch,a=Object(c.useState)(t.date),r=Object(d.a)(a,2),s=r[0],i=r[1],j=Object(c.useState)(t.description),o=Object(d.a)(j,2),l=o[0],b=o[1],u=Object(c.useState)(t.hours),m=Object(d.a)(u,2),x=m[0],p=m[1],f=Object(c.useState)(t.important),g=Object(d.a)(f,2),v=g[0],N=g[1],y=Object(c.useState)(t.minutes),w=Object(d.a)(y,2),k=w[0],C=w[1],S=Object(c.useState)(t.type),D=Object(d.a)(S,2),E=D[0],L=D[1],_=function(e){var t=e.target.name,n=e.target.value;"important"===t?N((function(e){return!e})):"type"===t?L(n):"description"===t?b(n):"date"===t?i(n):"minutes"===t?C(n):"hours"===t&&p(n)},F=function(){if(E&&l&&k&&x)return!0};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h5",{className:"pageHeader",children:"EDIT WORKOUT"}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-6",children:Object(h.jsx)("input",{name:"type",onChange:_,type:"text",className:"form-control",placeholder:"workout type","aria-label":"workout type",value:E,required:!0})})}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-3",children:Object(h.jsx)("input",{name:"hours",type:"number",className:"form-control",placeholder:"hours","aria-label":"workout type",min:"0",value:x,onChange:_,required:!0})}),Object(h.jsx)("div",{className:"col-3",children:Object(h.jsx)("input",{name:"minutes",type:"number",className:"form-control",placeholder:"minutes","aria-label":"workout type",min:"0",max:"60",value:k,onChange:_,required:!0})})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-3",children:Object(h.jsx)("input",{name:"date",value:s,type:"date",className:"form-control","aria-label":"date",onChange:_})}),Object(h.jsxs)("div",{className:"form-check form-switch col-3",children:[Object(h.jsx)("input",{name:"important",value:v,className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onChange:_}),Object(h.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"important workout"})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"form-floating descriptionInput col-6",children:[Object(h.jsx)("textarea",{name:"description",value:l,className:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea",onChange:_,required:!0}),Object(h.jsx)("label",{className:"detailsLabel",htmlFor:"floatingTextarea",children:"training details"})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),F&&(n({value:{id:t.id,type:E,description:l,date:s,minutes:k,hours:x,important:v},type:"EDIT"}),L(""),b(""),i(""),C(""),p(""),N(""))},type:"submit",className:"btn btn-info",children:"save"})]}),Object(h.jsx)("br",{})]})},T=function(e){var t=Object(f.f)(),n=e.training,a=n.id,r=n.type,s=n.description,i=n.date,j=n.hours,o=n.minutes,l=Object(c.useContext)(O).dispatch,d=Object(c.useContext)(O).handleEditButton;return Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:r}),Object(h.jsx)("td",{children:s}),Object(h.jsx)("td",{children:j}),Object(h.jsx)("td",{children:o}),Object(h.jsx)("td",{children:i}),Object(h.jsx)("td",{className:"buttons",children:Object(h.jsx)("button",{onClick:function(){return l({id:a,type:"COMPLETE"})},className:"btn btn-primary btn-sm",children:"complete"})}),Object(h.jsx)("td",{className:"buttons",children:Object(h.jsx)("button",{onClick:function(){return l({id:a,type:"DELETE"})},className:"btn btn-danger btn-sm",children:"delete"})}),Object(h.jsx)("td",{className:"buttons",children:Object(h.jsx)("button",{onClick:function(){d(a),t.push("/edit_workout")},className:"btn btn-warning btn-sm",children:"Edit"})})]})})},I=function(e){var t=Object(c.useContext)(O).state.filter((function(e){return e.finished})).map((function(e){return Object(h.jsx)(T,{training:e},e.id)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h5",{className:"pageHeader",children:"finished workouts:"}),Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"type"}),Object(h.jsx)("th",{children:"description"}),Object(h.jsx)("th",{children:"h"}),Object(h.jsx)("th",{children:"m"}),Object(h.jsx)("th",{children:"date"}),Object(h.jsx)("th",{}),Object(h.jsx)("th",{}),Object(h.jsx)("th",{})]})}),t]})]})},q=function(){var e=Object(c.useContext)(O).state,t=(new Date).toISOString().slice(0,10),n=e.filter((function(e){return e.date===t&&!1===e.finished})),a=n.length>0?"todays workouts:":"no more workouts for today",r=n.map((function(e){return Object(h.jsx)(T,{training:e},e.id)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h5",{className:"pageHeader",children:a}),n.length>0&&Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"type"}),Object(h.jsx)("th",{children:"description"}),Object(h.jsx)("th",{children:"h"}),Object(h.jsx)("th",{children:"m"}),Object(h.jsx)("th",{children:"date"}),Object(h.jsx)("th",{}),Object(h.jsx)("th",{}),Object(h.jsx)("th",{})]})}),r]})]})},H=(n(45),function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useContext)(O).toggleLoggedState,s=Object(c.useContext)(O).isUserLogged,i=Object(c.useContext)(O).userName,j="".concat(i," click below for logout");return Object(h.jsxs)("div",{className:"loginContainer",children:[Object(h.jsx)("h5",{className:"loginInfo",children:s?j:"Login with name and password"}),!s&&function(e){return Object(h.jsxs)("div",{className:"inputsContainer",children:[Object(h.jsx)("input",{onChange:e,id:"name",name:"name",type:"text",placeholder:"name",value:n}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{name:"password",type:"password",placeholder:"password"}),Object(h.jsx)("label",{className:"testLabel",htmlFor:"password",children:'"test"'}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})}((function(e){a(e.target.value)})),s&&Object(h.jsx)("button",{className:"btn btn-primary btn-sm ",onClick:function(){r(""),a("")},children:"logout"}),!s&&Object(h.jsxs)("button",{className:"btn btn-primary btn-sm ",onClick:function(){r(n)},children:["login"," "]})]})}),P=function(){var e=Object(c.useContext)(O).state.filter((function(e){return!e.finished})).map((function(e){return Object(h.jsx)(T,{training:e},e.id)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h5",{className:"pageHeader",children:"coming workouts:"}),Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"type"}),Object(h.jsx)("th",{children:"description"}),Object(h.jsx)("th",{children:"h"}),Object(h.jsx)("th",{children:"m"}),Object(h.jsx)("th",{children:"date"}),Object(h.jsx)("th",{}),Object(h.jsx)("th",{}),Object(h.jsx)("th",{})]})}),e]})]})},U=(n(46),function(){return Object(h.jsx)("div",{className:"pagesContainer",children:Object(h.jsxs)(f.c,{children:[Object(h.jsx)(f.a,{path:"/",exact:!0,render:function(){return Object(h.jsx)(q,{})}}),Object(h.jsx)(f.a,{path:"/add_workout",exact:!0,render:function(){return Object(h.jsx)(_,{})}}),Object(h.jsx)(f.a,{path:"/edit_workout",exact:!0,render:function(){return Object(h.jsx)(F,{})}}),Object(h.jsx)(f.a,{path:"/training_list",exact:!0,render:function(){return Object(h.jsx)(P,{})}}),Object(h.jsx)(f.a,{path:"/history",exact:!0,render:function(){return Object(h.jsx)(I,{})}}),Object(h.jsx)(f.a,{path:"/login",exact:!0,render:function(){return Object(h.jsx)(H,{})}})]})})}),B=(n(47),function(){return Object(h.jsxs)("p",{children:["from Ultran with ",Object(h.jsx)("span",{className:"peace",children:"\u262e"})," "]})}),M=(n(48),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)(x,{children:Object(h.jsx)(p.a,{basename:"/train_app_v.1",children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("header",{children:Object(h.jsx)(C,{})}),Object(h.jsx)("section",{className:"path",children:Object(h.jsx)(S,{})}),Object(h.jsxs)("main",{children:[Object(h.jsx)("aside",{children:Object(h.jsx)(E,{})}),Object(h.jsx)("section",{className:"page",children:Object(h.jsx)(U,{})})]}),Object(h.jsx)("footer",{children:Object(h.jsx)(B,{})})]})})})}}]),n}(c.Component)),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),W()}},[[49,1,2]]]);
//# sourceMappingURL=main.0295ec0e.chunk.js.map