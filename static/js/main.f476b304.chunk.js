(this["webpackJsonptrain_app_v.1"]=this["webpackJsonptrain_app_v.1"]||[]).push([[0],{26:function(t,n,e){},27:function(t,n,e){},34:function(t,n,e){},35:function(t,n,e){},36:function(t,n,e){},37:function(t,n,e){"use strict";e.r(n);var a=e(1),i=e.n(a),r=e(15),c=e.n(r),s=(e(26),e(19)),d=e(16),p=e(17),o=e(21),j=e(20),u=e(8),h=e(2),b=e.p+"static/media/header1.b33b56a0.jpg",m=e.p+"static/media/header2.8d8dcc14.jpg",l=e.p+"static/media/header3.ba67b377.jpg",x=e.p+"static/media/header4.dac07ba5.jpg",f=e.p+"static/media/header5.c152dbd7.jpg",O=e.p+"static/media/header6.653d8563.jpg",g=(e(27),e(0)),_=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(h.c,{children:[Object(g.jsx)(h.a,{path:"/train_app_v.1/",exact:!0,render:function(){return Object(g.jsx)("img",{src:b,alt:"sport"})}}),Object(g.jsx)(h.a,{path:"/train_app_v.1/add_workout",render:function(){return Object(g.jsx)("img",{src:l,alt:"sport"})}}),Object(g.jsx)(h.a,{path:"/train_app_v.1/training_list",render:function(){return Object(g.jsx)("img",{src:x,alt:"sport"})}}),Object(g.jsx)(h.a,{path:"/train_app_v.1/history",render:function(){return Object(g.jsx)("img",{src:f,alt:"sport"})}}),Object(g.jsx)(h.a,{path:"/train_app_v.1/contact",render:function(){return Object(g.jsx)("img",{src:O,alt:"sport"})}}),Object(g.jsx)(h.a,{path:"/train_app_v.1/admin",render:function(){return Object(g.jsx)("img",{src:m,alt:"sport"})}})]})})},v=(e(34),function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(h.a,{path:"/train_app_v.1/",exact:!0,render:function(){return Object(g.jsx)("p",{children:"home"})}}),Object(g.jsx)(h.a,{path:"/train_app_v.1/:page",exact:!0,render:function(t){return Object(g.jsxs)("p",{children:["home ",">"," ",t.match.params.page]})}})]})}),y=(e(35),[{name:"home",path:"/train_app_v.1/",exact:!0},{name:"add workout",path:"/train_app_v.1/add_workout"},{name:"training list",path:"/train_app_v.1/training_list"},{name:"history",path:"/train_app_v.1/history"},{name:"contact",path:"/train_app_v.1/contact"},{name:"admin",path:"/train_app_v.1/admin"}]),N=function(){var t=y.map((function(t){return Object(g.jsx)("li",{children:Object(g.jsx)(u.b,{to:t.path,exact:t.exact&&t.exact,children:t.name})},t.name)}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("nav",{className:"mainNav",children:Object(g.jsx)("ul",{children:t})})})},k=function(){return Object(g.jsx)("p",{children:"page"})},w=function(){return Object(g.jsx)("p",{children:"footer"})},F=(e(36),function(t){Object(o.a)(e,t);var n=Object(j.a)(e);function e(){var t;Object(d.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=n.call.apply(n,[this].concat(i))).idNumber=10,t.state={trainings:[{id:0,type:"running",description:"easy run",date:"2021-08-20",duration:100,importand:!0,finished:!1},{id:1,type:"running",description:"easy run",date:"2021-08-20",duration:100,importand:!0,finished:!1},{id:2,type:"running",description:"easy run",date:"2021-08-20",duration:100,importand:!0,finished:!1},{id:3,type:"running",description:"easy run",date:"2021-08-20",duration:100,importand:!0,finished:!1},{id:4,type:"running",description:"easy run",date:"2021-08-20",duration:100,importand:!0,finished:!1},{id:5,type:"running",description:"easy run",date:"2021-08-20",duration:100,importand:!0,finished:!1},{id:6,type:"running",description:"easy run",date:"2021-08-20",duration:100,importand:!0,finished:!1}]},t.addTraining=function(n){var e=n.type,a=n.description,i=n.date,r=n.minutes,c=n.hours,d=n.important,p={id:t.idNumber,type:e,description:a,date:i,duration:"".concat(c," h : ").concat(r," m"),important:d,finished:!1};return t.setState((function(t){return{trainings:[].concat(Object(s.a)(t.trainings),[p])}})),t.idNumber++,!0},t.handleCompleteButton=function(n){var e=t.state.trainings;e.forEach((function(t){t.id!==n||(t.finished=!0)})),t.setState({trainings:e})},t.handleDeleteButton=function(n){var e=t.state.trainings;e=e.filter((function(t){return t.id!==n})),t.setState({trainings:e})},t}return Object(p.a)(e,[{key:"render",value:function(){return Object(g.jsx)(u.a,{children:Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)("header",{children:Object(g.jsx)(_,{})}),Object(g.jsx)("section",{className:"path",children:Object(g.jsx)(v,{})}),Object(g.jsxs)("main",{children:[Object(g.jsx)("aside",{children:Object(g.jsx)(N,{})}),Object(g.jsx)("section",{className:"page",children:Object(g.jsx)(k,{})})]}),Object(g.jsx)("footer",{children:Object(g.jsx)(w,{})})]})})}}]),e}(a.Component)),C=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,38)).then((function(n){var e=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;e(t),a(t),i(t),r(t),c(t)}))};c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.f476b304.chunk.js.map