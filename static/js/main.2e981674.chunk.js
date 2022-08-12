(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(3),s=n(1),r=n(0),i=Object(s.createContext)(),l=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(a.a)(n,2),l=c[0],o=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(r.jsx)(i.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://sinarafieefar.com",j="SR.",b="Sina Rafieefar",d="Full Stack Developer",h="I am a self-taught full stack web developer (leaning more towards front-end) who is extremely passionate and eager to learn more every day. I absolutely love solving problems, finding solutions, and creating new things.",u="./Sina_Rafieefar_Resume.pdf",m={linkedin:"https://www.linkedin.com/in/sinarafieefar/",github:"https://github.com/anisr95"},f=[{name:"Expense Tracker",description:"An Expense Tracker App that allows you to easily track and keep a record of all of your transactions so you could save more and spend less",stack:["MongoDB","Express","React","Node"],sourceCode:"https://github.com/anisr95/Expense_Tracker_Fullstack",livePreview:"https://expense-trackerv2.herokuapp.com/",image:"./src/images.All_Expenses.png"}],O=["HTML","CSS","JavaScript","React","Redux","MongoDB","Node","Express","REST API","Git/GitHub","Figma"],x="rafieefars@gmail.com",p=n(16),k=n.n(p),_=n(14),v=n.n(_),g=n(18),N=n.n(g),w=n(17),y=n.n(w),S=(n(27),function(){var e=Object(s.useContext)(i),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(s.useState)(!1),o=Object(a.a)(l,2),j=o[0],b=o[1],d=function(){return b(!j)};return Object(r.jsxs)("nav",{className:"center nav",children:[Object(r.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[f.length?Object(r.jsx)("li",{className:"nav__list-item",children:Object(r.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,O.length?Object(r.jsx)("li",{className:"nav__list-item",children:Object(r.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,x?Object(r.jsx)("li",{className:"nav__list-item",children:Object(r.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(r.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(r.jsx)(v.a,{}):Object(r.jsx)(k.a,{})}),Object(r.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(r.jsx)(y.a,{}):Object(r.jsx)(N.a,{})})]})}),C=(n(31),function(){var e=o,t=j;return Object(r.jsxs)("header",{className:"header center",children:[Object(r.jsx)("h3",{children:e?Object(r.jsx)("a",{href:e,className:"link",children:t}):t}),Object(r.jsx)(S,{})]})}),E=n(13),R=n.n(E),P=n(19),T=n.n(P),A=(n(32),function(){var e=b,t=d,n=h,c=u,a=m;return Object(r.jsxs)("div",{className:"about center",children:[e&&Object(r.jsxs)("h1",{children:["Hi, I am ",Object(r.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(r.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(r.jsx)("p",{className:"about__desc",children:n&&n}),Object(r.jsxs)("div",{className:"about__contact center",children:[c&&Object(r.jsx)("a",{href:"./Sina_Rafieefar_Resume.pdf",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(r.jsxs)(r.Fragment,{children:[a.github&&Object(r.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(R.a,{})}),a.linkedin&&Object(r.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(T.a,{})})]})]})]})}),I=n(7),L=n.n(I),F=(n(34),n.p+"static/media/All_Expenses.5c403d38.png"),M=function(e){var t=e.project;return Object(r.jsxs)("div",{className:"project",children:[Object(r.jsxs)("div",{className:"display",children:[Object(r.jsx)("h3",{children:t.name}),Object(r.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(r.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(r.jsx)("li",{className:"project__stack-item",children:e},L()())}))}),Object(r.jsxs)("div",{className:"project__actions",children:[t.sourceCode&&Object(r.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"git_code",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("span",{type:"button",className:"btn btn--outline",children:"Source Code"})}),t.livePreview&&Object(r.jsx)("a",{href:t.livePreview,"aria-label":"live preview",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("span",{type:"button",className:"btn btn--outline",children:"Live"})})]})]}),Object(r.jsx)("a",{href:t.livePreview,"aria-label":"live preview",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:F,alt:"nothing",className:"project__image"})})]})},B=(n(35),function(){return f.length?Object(r.jsxs)("section",{id:"projects",className:"section projects",children:[Object(r.jsx)("h2",{className:"section__title",children:"Projects"}),Object(r.jsx)("div",{className:"projects__grid",children:f.map((function(e){return Object(r.jsx)(M,{project:e},L()())}))})]}):null}),D=(n(36),function(){return O.length?Object(r.jsxs)("section",{className:"section skills",id:"skills",children:[Object(r.jsx)("h2",{className:"section__title",children:"Skills"}),Object(r.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(r.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),H=n(20),J=n.n(H),G=(n(37),function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(r.jsx)("div",{className:"scroll-top",children:Object(r.jsx)("a",{href:"#top",children:Object(r.jsx)(J.a,{fontSize:"large"})})}):null}),z=(n(38),function(){return x?Object(r.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(r.jsx)("h2",{className:"section__title",children:"Contact"}),Object(r.jsx)("a",{href:"mailto:".concat(x),children:Object(r.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Y=(n(39),function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("a",{href:"https://sinarafieefar.com",className:"link footer__link",children:"Sina Rafieefar"})})}),q=(n(40),function(){var e=Object(s.useContext)(i),t=Object(a.a)(e,1)[0].themeName;return Object(r.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(r.jsx)(C,{}),Object(r.jsxs)("main",{children:[Object(r.jsx)(A,{}),Object(r.jsx)(B,{}),Object(r.jsx)(D,{}),Object(r.jsx)(z,{})]}),Object(r.jsx)(G,{}),Object(r.jsx)(Y,{})]})});n(41);Object(c.render)(Object(r.jsx)(l,{children:Object(r.jsx)(q,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2e981674.chunk.js.map