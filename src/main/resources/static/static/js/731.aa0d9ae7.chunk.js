"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[731],{724:(e,s,a)=>{a.d(s,{Z:()=>c});var r=a(689),n=a(87),l=a(420),o=a(135),t=a(184);const c=()=>{const e=(0,r.s0)(),s=(0,l.I0)(),a=(0,l.v9)((e=>e.loginSlice));return{loginState:a,isLogin:!!a.userId,doLogin:async e=>(await s((0,o.ft)(e))).payload,doLogout:()=>{s((0,o.kS)())},moveToPath:s=>{e({pathname:s},{replace:!0})},moveToLogin:()=>{e({pathname:"/user/login"},{replace:!0})},moveToLoginReturn:()=>(0,t.jsx)(r.Fg,{replace:!0,to:"/user/login"}),exceptionHandle:s=>{console.log("Exception.........."),console.log(s);const a=s.response.data.error,r=(0,n.createSearchParams)({error:a}).toString();return"REQUIRE_LOGIN"===a?(alert("\ub85c\uadf8\uc778\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694!"),void e({pathname:"/user/login",search:r})):"ERROR_ACCESSDENIED"===s.response.data.error?(alert("\ud574\ub2f9 \uba54\ub274\ub97c \uc0ac\uc6a9\ud560 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),void e({pathname:"/user/login",search:r})):void 0}}}},732:(e,s,a)=>{a.d(s,{Z:()=>o});var r=a(184);var n=a(420),l=a(724);const o=e=>{let{children:s}=e;const{doLogout:a,moveToPath:o}=(0,l.Z)(),t=(0,n.v9)((e=>e.loginSlice));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("header",{children:[(0,r.jsx)("nav",{className:"navbar navbar-expand-lg",id:"nav",children:(0,r.jsxs)("div",{className:"container-fluid",id:"nav-form",children:[(0,r.jsx)("a",{href:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"/about",className:"nav-link active","aria-current":"page",children:"About Us"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"/mypage",className:"nav-link",children:"My Page"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link",children:"Logout"})}),t.id?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{class:"nav-item",children:(0,r.jsx)("a",{href:"/user/login",className:"nav-link disabled","aria-disabled":"true",children:"Login"})})})]}),(0,r.jsxs)("form",{className:"d-flex",role:"search",children:[(0,r.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,r.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,r.jsx)("hr",{})]}),(0,r.jsx)("main",{children:s}),(0,r.jsxs)("footer",{children:[(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"footer-body",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,r.jsx)("br",{}),(0,r.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,r.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,r.jsx)("br",{})]})," ",(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})]})]})}},731:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});var r=a(87),n=a(732),l=(a(979),a(791)),o=(a(135),a(855)),t=a(294),c=(a(724),a(184));const i=()=>{const[e,s]=(0,l.useState)({}),a=async()=>{try{const e=await t.Z.get("/api/userLogin");s(e.data)}catch(e){console.log("ERROR FETCHING USER LOGIN : ",e)}};(0,l.useEffect)((()=>{a()}),[]);const i=e=>{s({[e.target.name]:e.target.value}),console.log(s)};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.Z,{children:(0,c.jsxs)("div",{className:"loginBox",children:[(0,c.jsx)("h1",{children:(0,c.jsx)("b",{children:"\ub85c\uadf8\uc778"})}),(0,c.jsxs)(o.Z,{onSubmit:async r=>{r.preventDefault();try{const r=await t.Z.post("/api/userLogin",{userId:e.userId,password:e.password});r.data.alertMessage&&alert(r.data.alertMessage),r.data.successMessage&&(console.log("Form submitted successfully:",r.data.successMessage),a(),s({}))}catch(n){n.response?console.error("Error submitting form:",n.response.data):n.request?console.error("Request error:",n.request):console.error("Unexpected error:",n.message)}},children:[(0,c.jsx)("span",{className:"formName",children:"\uc544\uc774\ub514"}),(0,c.jsx)("input",{className:"formInfo",type:"text",id:"id_val",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"userId",value:e.userId,onChange:i}),(0,c.jsx)("span",{className:"formName",children:"\ube44\ubc00\ubc88\ud638"}),(0,c.jsx)("input",{className:"formInfo",type:"password",id:"password_val",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"password",value:e.password,onChange:i}),(0,c.jsx)("div",{className:"loginBtn",children:(0,c.jsx)("button",{className:"s_bt",type:"submit",children:"\ub85c\uadf8\uc778"})})]}),(0,c.jsx)(r.Link,{to:"/host",className:"another-login",children:"\ud638\uc2a4\ud2b8\ub85c \ub85c\uadf8\uc778\ud558\uae30"}),(0,c.jsx)("span",{className:"choiceNewmember",children:"\uc544\uc9c1 \ud68c\uc6d0\uc774 \uc544\ub2c8\uc2e0\uac00\uc694?"}),(0,c.jsxs)("div",{className:"newmember",children:[(0,c.jsx)("button",{className:"another-btn",children:(0,c.jsx)(r.Link,{to:"/newHost",children:"\ud638\uc2a4\ud2b8 \ud68c\uc6d0\uac00\uc785"})}),(0,c.jsx)("button",{className:"another-btn",children:(0,c.jsx)(r.Link,{to:"/newUser",children:"\uac8c\uc2a4\ud2b8 \ud68c\uc6d0\uac00\uc785"})})]})]})})})}},979:()=>{}}]);
//# sourceMappingURL=731.aa0d9ae7.chunk.js.map