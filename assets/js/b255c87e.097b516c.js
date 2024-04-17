"use strict";(self.webpackChunk_revideo_docs=self.webpackChunk_revideo_docs||[]).push([[972],{5906:(e,t,a)=>{a.d(t,{A:()=>c});var i=a(9531),s=a(53),o=a(4041),r=a(9631),n=a(9575);function l(e){let{width:t=24,height:a=24,...i}=e;return o.createElement("svg",(0,n.A)({viewBox:"0 0 24 24",width:t,height:a,"aria-hidden":!0},i),o.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"}))}const d={container:"container_lQCo",small:"small_As57",banner:"banner_A4QS",player:"player_tELG",link:"link_BTzN",icon:"icon_wSGd"};function p(e){let{name:t}=e;const a=`https://github.com/revideo/revideo/blob/main/packages/examples/src/scenes/${t}.tsx`;return o.createElement(r.A,{to:a,className:(0,s.A)("padding--sm",d.link)},o.createElement("span",null,"View source code"),o.createElement(l,{className:d.icon}))}function c(e){let{name:t,banner:a,small:i,link:r}=e;return o.createElement("div",{className:(0,s.A)(d.container,a&&d.banner,i&&d.small)},o.createElement("revideo-player",{class:d.player,src:`/examples/${t}.js`,auto:a}),o.createElement(p,{name:r||t}))}i.A.canUseDOM&&a.e(3980).then(a.bind(a,3980))},2789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>d});var i=a(9575),s=(a(4041),a(2247));a(5906),a(154);const o={sidebar_position:1,slug:"/revideo-saas-template"},r="Revideo Saas Template",n={unversionedId:"examples/saas",id:"examples/saas",title:"Revideo Saas Template",description:"The Revideo Saas Template",source:"@site/docs/examples/saas.mdx",sourceDirName:"examples",slug:"/revideo-saas-template",permalink:"/revideo-saas-template",draft:!1,editUrl:"https://github.com/havenhq/revideo/blob/main/packages/docs/docs/examples/saas.mdx",tags:[],version:"current",lastUpdatedBy:"Justus Mattern",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/revideo-saas-template"},sidebar:"docs",previous:{title:"Reddit Post Reader",permalink:"/reddit-post-reader"},next:{title:"Guide",permalink:"/category/guide"}},l={},d=[{value:"Project Structure",id:"project-structure",level:2},{value:"<code>/ui</code>:",id:"ui",level:3},{value:"<code>/revideo</code>:",id:"revideo",level:3},{value:"<code>/websocket-server</code>:",id:"websocket-server",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,s.yg)(c,(0,i.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"revideo-saas-template"},"Revideo Saas Template"),(0,s.yg)("p",null,"The Revideo Saas Template\n(",(0,s.yg)("a",{parentName:"p",href:"https://github.com/redotvideo/revideo-saas-template/tree/main"},"Github"),") is a\nminimal example of a web app built with Revideo. This example application lets\nusers generate Youtube Shorts from a text description."),(0,s.yg)("video",{width:"889",height:"500",controls:!0},(0,s.yg)("source",{src:"https://revideo-example-assets.s3.amazonaws.com/saas-template-github.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),(0,s.yg)("h2",{id:"project-structure"},"Project Structure"),(0,s.yg)("p",null,"The Saas Template consists of three main components:"),(0,s.yg)("h3",{id:"ui"},(0,s.yg)("inlineCode",{parentName:"h3"},"/ui"),":"),(0,s.yg)("p",null,"This folder contains the frontend code of our project, built as a NextJS project\nwith the ",(0,s.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/app"},"NextJS App Router"),". It lets users define\ninputs such as a description of the video and communicates with the backend in\n",(0,s.yg)("inlineCode",{parentName:"p"},"/websocket-server")," to trigger actions such as the final export of the video."),(0,s.yg)("p",null,"Notably, the UI also uses the ",(0,s.yg)("inlineCode",{parentName:"p"},"@revideo/player")," package to let users preview the\nvideo and make edits before exporting the video."),(0,s.yg)("h3",{id:"revideo"},(0,s.yg)("inlineCode",{parentName:"h3"},"/revideo"),":"),(0,s.yg)("p",null,"This folder contains a revideo project that defines a template for Youtube\nShorts. The template accepts the following variables:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"a list of background images (we use Dall-E generated images)"),(0,s.yg)("li",{parentName:"ul"},"an audio file containing a voiceover"),(0,s.yg)("li",{parentName:"ul"},"timestamps for each word in the voiceover to display subtitles")),(0,s.yg)("p",null,"A web endpoint for rendering is exposed by running\n",(0,s.yg)("inlineCode",{parentName:"p"},"npx revideo serve --projectFile vite.config.ts"),"."),(0,s.yg)("h3",{id:"websocket-server"},(0,s.yg)("inlineCode",{parentName:"h3"},"/websocket-server"),":"),(0,s.yg)("p",null,"This folder contains the main backend logic of our project. It has two main\nfunctionalities:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"When a user submits a description of their Youtube Short, the backend uses\nseveral AI services to generate assets (e.g. it writes a script with GPT-4 and\ngenerates background images with Dall-E). These assets are uploaded to an AWS\nbucket, as well as a json file containing the variables of the revideo\nproject."),(0,s.yg)("li",{parentName:"ul"},"When a user triggers a video export, the server redirects this request to the\nrevideo service and uploads the finished video to the AWS bucket.")),(0,s.yg)("p",null,"For more information and instructions on how to run the app, check out its\n",(0,s.yg)("a",{parentName:"p",href:"https://github.com/redotvideo/revideo-saas-template/tree/main"},"repository"),"."))}u.isMDXComponent=!0}}]);