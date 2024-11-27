"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[428],{1904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7e3),o=n(7472);const i={sidebar_position:2,description:"The different ways to get started"},s="Deployment",l={id:"getting-started/using-tillywork",title:"Deployment",description:"The different ways to get started",source:"@site/docs/getting-started/using-tillywork.md",sourceDirName:"getting-started",slug:"/getting-started/using-tillywork",permalink:"/getting-started/using-tillywork",draft:!1,unlisted:!1,editUrl:"https://github.com/tillywork/tillywork/tree/main/packages/docs/docs/getting-started/using-tillywork.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"The different ways to get started"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"General Concepts",permalink:"/getting-started/concepts"}},a={},c=[{value:"Cloud",id:"cloud",level:2},{value:"Docker Hub",id:"docker-hub",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Create a Postgres Database",id:"1-create-a-postgres-database",level:3},{value:"2. Run tillywork",id:"2-run-tillywork",level:3},{value:"3. Create an account",id:"3-create-an-account",level:3},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"1. Clone the repository",id:"1-clone-the-repository",level:3},{value:"2. Create environment variables",id:"2-create-environment-variables",level:3},{value:"3. Run tillywork",id:"3-run-tillywork",level:3},{value:"4. Create an account",id:"4-create-an-account",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"deployment",children:"Deployment"}),"\n",(0,r.jsx)(t.p,{children:"To get started using tillywork, choose how you're going to use our application."}),"\n",(0,r.jsx)(t.h2,{id:"cloud",children:"Cloud"}),"\n",(0,r.jsxs)(t.p,{children:["The easiest way is signing up to our cloud deployment at ",(0,r.jsx)(t.a,{href:"https://tilly.work",children:"https://tilly.work"})," which will enable you to get started immediately."]}),"\n",(0,r.jsx)(t.h2,{id:"docker-hub",children:"Docker Hub"}),"\n",(0,r.jsx)(t.p,{children:"For personal use or testing purposes, you can run the application through our Docker image released on Docker Hub."}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"You need to have Docker installed and the Docker engine running."}),"\n",(0,r.jsx)(t.h3,{id:"1-create-a-postgres-database",children:"1. Create a Postgres Database"}),"\n",(0,r.jsx)(t.p,{children:"To run tillywork, you need a Postgres database to connect to. The easiest way is running a Postgres docker image."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"docker run --name tillywork-db -e POSTGRES_DB=tillywork -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=12345678 -p 5432:5432 -d postgres:16.3-bullseye\n"})}),"\n",(0,r.jsx)(t.h3,{id:"2-run-tillywork",children:"2. Run tillywork"}),"\n",(0,r.jsx)(t.p,{children:"Run the image from Docker Hub passing in the database information:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"docker run --name tillywork -e TW_DB_HOST=host.docker.internal -e TW_DB_NAME=tillywork -e TW_DB_USERNAME=postgres -e TW_DB_PASSWORD=12345678 -e TW_SECRET_KEY=tillywork -d -p 80:80 tillywork/tillywork:latest\n"})}),"\n",(0,r.jsx)(t.h3,{id:"3-create-an-account",children:"3. Create an account"}),"\n",(0,r.jsxs)(t.p,{children:["Go to ",(0,r.jsx)(t.code,{children:"/register"})," on your instance to create an account. For example, ",(0,r.jsx)(t.code,{children:"http://localhost/register"})]}),"\n",(0,r.jsx)(t.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,r.jsx)(t.p,{children:"For companies and production use, use Docker compose to get set up."}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"You need to have Git and Docker installed and the Docker engine running."}),"\n",(0,r.jsx)(t.h3,{id:"1-clone-the-repository",children:"1. Clone the repository"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"git clone https://github.com/tillywork/tillywork.git\n"})}),"\n",(0,r.jsx)(t.h3,{id:"2-create-environment-variables",children:"2. Create environment variables"}),"\n",(0,r.jsx)(t.p,{children:"Create a copy of the .env.example file in the project root and rename it to .env:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"cp .env.example .env\n"})}),"\n",(0,r.jsx)(t.h3,{id:"3-run-tillywork",children:"3. Run tillywork"}),"\n",(0,r.jsx)(t.p,{children:"Run the Docker compose file:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"docker compose -p tillywork up -d\n"})}),"\n",(0,r.jsx)(t.h3,{id:"4-create-an-account",children:"4. Create an account"}),"\n",(0,r.jsxs)(t.p,{children:["Go to ",(0,r.jsx)(t.code,{children:"/register"})," on your instance to create an account. For example, ",(0,r.jsx)(t.code,{children:"http://localhost/register"})]})]})}function u(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7472:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>s});var r=n(5668);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);