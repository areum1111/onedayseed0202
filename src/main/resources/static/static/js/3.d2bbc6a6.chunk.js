"use strict";(self.webpackChunkonedayseedjs=self.webpackChunkonedayseedjs||[]).push([[3],{724:(e,a,s)=>{s.d(a,{Z:()=>c});var r=s(689),n=s(87),o=s(420),l=s(135),t=s(184);const c=()=>{const e=(0,r.s0)(),a=(0,o.I0)(),s=(0,o.v9)((e=>e.loginSlice));return{loginState:s,isLogin:!!s.userId,doLogin:async e=>(await a((0,l.ft)(e))).payload,doLogout:()=>{a((0,l.kS)())},moveToPath:a=>{e({pathname:a},{replace:!0})},moveToLogin:()=>{e({pathname:"/user/login"},{replace:!0})},moveToLoginReturn:()=>(0,t.jsx)(r.Fg,{replace:!0,to:"/user/login"}),exceptionHandle:a=>{console.log("Exception.........."),console.log(a);const s=a.response.data.error,r=(0,n.createSearchParams)({error:s}).toString();return"REQUIRE_LOGIN"===s?(alert("\ub85c\uadf8\uc778\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694!"),void e({pathname:"/user/login",search:r})):"ERROR_ACCESSDENIED"===a.response.data.error?(alert("\ud574\ub2f9 \uba54\ub274\ub97c \uc0ac\uc6a9\ud560 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),void e({pathname:"/user/login",search:r})):void 0}}}},119:(e,a,s)=>{s.d(a,{Z:()=>l});var r=s(420),n=s(724),o=s(184);const l=e=>{let{children:a}=e;const{doLogout:s,moveToPath:l}=(0,n.Z)(),t=(0,r.v9)((e=>e.loginSlice));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("nav",{className:"navbar navbar-expand-lg",id:"nav",children:(0,o.jsxs)("div",{className:"container-fluid",id:"nav-form",children:[(0,o.jsx)("a",{href:"/",className:"navbar-brand",id:"logo",children:"OnedaySeed"}),(0,o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,o.jsx)("span",{className:"navbar-toggler-icon"})}),(0,o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)("a",{href:"/about",className:"nav-link active","aria-current":"page",children:"About Us"})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)("a",{href:"/mypage",className:"nav-link",children:"My Page"})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)("a",{className:"nav-link",children:"Logout"})}),t.id?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("li",{class:"nav-item",children:(0,o.jsx)("a",{href:"/user/login",className:"nav-link disabled","aria-disabled":"true",children:"Login"})})})]}),(0,o.jsxs)("form",{className:"d-flex",role:"search",children:[(0,o.jsx)("input",{className:"form-control me-2 ",id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"}),(0,o.jsx)("button",{className:"btn btn-outline-success ",id:"search-btn",type:"submit",children:"Search"})]})]})]})}),(0,o.jsx)("hr",{})]}),(0,o.jsx)("main",{children:a}),(0,o.jsxs)("footer",{children:[(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"footer-body",children:[(0,o.jsxs)("span",{children:[(0,o.jsx)("b",{children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc"})," ",(0,o.jsx)("br",{}),(0,o.jsxs)("span",{className:"our-info",children:["\uc11c\uc6b8\uc2dc \uc885\ub85c\uad6c \uc778\uc0ac\ub3d9\uae38 12 15\uce35 ",(0,o.jsx)("br",{}),"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 135-87-***** | \ud1b5\uc2e0\ud310\ub9e4\uc5c5 : \uc2e0\uace0\ubc88\ud638 \uc81c2024-\uc11c\uc6b8\uc885\ub85c-987**\ud638  ",(0,o.jsx)("br",{})]})," ",(0,o.jsx)("br",{}),(0,o.jsx)("span",{className:"not-host",children:"(\uc8fc)\uc6d0\ub370\uc774\uc528\ub4dc\ub294 \ud1b5\uc2e0\ud310\ub9e4\uc911\uac1c\uc790\uc774\uba70, \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc0c1\ud488, \uc0c1\ud488\uc815\ubcf4, \uac70\ub798\uc5d0 \uad00\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})]})]})}},3:(e,a,s)=>{s.r(a),s.d(a,{default:()=>i});var r=s(119),n=s(791),o=(s(979),s(294)),l=s(855),t=s(689),c=s(184);const i=()=>{const[e,a]=(0,n.useState)({}),s=async()=>{try{const e=await o.Z.get("/api/userNew");a(e.data)}catch(e){console.log("Error fetching new user info : ",e)}};(0,n.useEffect)((()=>{s()}),[]);const i=(0,t.s0)(),d=e=>{const{name:s,value:r}=e.target;a((e=>({...e,[s]:r})))};return(0,c.jsx)(r.Z,{children:(0,c.jsxs)("div",{className:"loginBox",children:[(0,c.jsx)("h1",{children:(0,c.jsx)("b",{children:"\ud68c\uc6d0\uac00\uc785"})}),(0,c.jsxs)(l.Z,{onSubmit:async a=>{a.preventDefault(),console.log(e.userId),console.log(e.password),console.log(e.userName),console.log(e.phoneNum);try{const a=await o.Z.post("/api/userNew",{userId:e.userId,password:e.password,userName:e.userName,phoneNum:e.phoneNum});a.data.alertMessage&&alert(a.data.alertMessage),a.data.successMsg&&(console.log("Form submitted successfully:",a.data.successMessage),s(),i("user/login"),console.log("\uc774\ub3d9 \uc548\ub418\ub294\ub370"))}catch(r){r.response?console.error("Error submitting form:",r.response.data):r.request?console.error("Request error:",r.request):console.error("Unexpected error:",r.message)}},children:[(0,c.jsx)("span",{className:"formName",children:"\uc544\uc774\ub514"}),(0,c.jsx)("input",{className:"formInfo",type:"text",id:"id_val",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"userId",onChange:d,value:e.userId}),(0,c.jsx)("span",{className:"formName",children:"\ube44\ubc00\ubc88\ud638"}),(0,c.jsx)("input",{className:"formInfo",type:"password",id:"password_val",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"password",onChange:d,value:e.password}),(0,c.jsx)("span",{className:"formName",children:"\uc774\ub984"}),(0,c.jsx)("input",{className:"formInfo",type:"text",id:"name_val",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"userName",onChange:d,value:e.userName}),(0,c.jsx)("span",{className:"formName",children:"\uc804\ud654\ubc88\ud638"}),(0,c.jsx)("input",{className:"formInfo",type:"text",id:"phoneNum_val",placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",name:"phoneNum",onChange:d,value:e.phoneNum}),(0,c.jsx)("div",{className:"loginBtn",children:(0,c.jsx)("button",{type:"submit",children:"\ud68c\uc6d0\uac00\uc785"})})]})]})})}},979:()=>{}}]);
//# sourceMappingURL=3.d2bbc6a6.chunk.js.map