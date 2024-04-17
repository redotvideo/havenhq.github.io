"use strict";(self.webpackChunk_revideo_docs=self.webpackChunk_revideo_docs||[]).push([[2908],{2247:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>y});var t=r(4041);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),d=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),g=o,y=c["".concat(p,".").concat(g)]||c[g]||u[g]||a;return r?t.createElement(y,i(i({ref:n},s),{},{components:r})):t.createElement(y,i({ref:n},s))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7650:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=r(9575),o=(r(4041),r(2247));const a={sidebar_position:2,slug:"/render-endpoint"},i="Deploy a Revideo Project",l={unversionedId:"webapps/rendering-endpoint",id:"webapps/rendering-endpoint",title:"Deploy a Revideo Project",description:"You can use our CLI to deploy your revideo project, which will expose a web",source:"@site/docs/webapps/rendering-endpoint.mdx",sourceDirName:"webapps",slug:"/render-endpoint",permalink:"/render-endpoint",draft:!1,editUrl:"https://github.com/havenhq/revideo/blob/main/packages/docs/docs/webapps/rendering-endpoint.mdx",tags:[],version:"current",lastUpdatedBy:"Justus Mattern",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/render-endpoint"},sidebar:"docs",previous:{title:"Player for Preview & Editing",permalink:"/preview-with-player"},next:{title:"Code Examples",permalink:"/category/code-examples"}},p={},d=[{value:"Starting a render job",id:"starting-a-render-job",level:3},{value:"Downloading rendered videos",id:"downloading-rendered-videos",level:3}],s={toc:d},c="wrapper";function u(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"deploy-a-revideo-project"},"Deploy a Revideo Project"),(0,o.yg)("p",null,"You can use our CLI to deploy your revideo project, which will expose a web\nserver with endpoints for rendering videos and downloading rendered videos as\nmp4. An application example of this can be found in our\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/redotvideo/revideo-saas-template/tree/main"},"Saas template"),"."),(0,o.yg)("p",null,"To deploy a Revideo project, run the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npx revideo serve --projectFile vite.config.ts --port 3000\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"--port")," parameter is optional. By default, the service will use port 4000."),(0,o.yg)("h3",{id:"starting-a-render-job"},"Starting a render job"),(0,o.yg)("p",null,"Once your Revideo project is deployed, you can render videos using the ",(0,o.yg)("inlineCode",{parentName:"p"},"/render"),"\nendpoint with parameters ",(0,o.yg)("inlineCode",{parentName:"p"},"variables")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"callbackUrl"),". This endpoint will\ntrigger a render process on the server, and respond to a callback url after the\nrendering process is done."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example request:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://your-revideo-service.com/render \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "variables": {\n      "image": "some-image.png",\n      "color": "red"\n    },\n    "callbackUrl": "http://your-callback-url.com/render-status"\n  }\'\n')),(0,o.yg)("p",null,"In this request, ",(0,o.yg)("inlineCode",{parentName:"p"},"variables")," refer to the variables passed to your video, and\n",(0,o.yg)("inlineCode",{parentName:"p"},"callbackUrl")," is the url that will receive an update when the rendering process\nhas finished. The immediate response to the request will contain a ",(0,o.yg)("inlineCode",{parentName:"p"},"jobId")," that\nlets the client distinguish between status updates from different rendering\njobs."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example response:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "123e4567-e89b-12d3-a456-426614174000"\n}\n')),(0,o.yg)("h3",{id:"downloading-rendered-videos"},"Downloading rendered videos"),(0,o.yg)("p",null,"Once the render job is finished or has failed, the revideo servide will send an\nupdate to the specified callback url via a POST request. The response will\ncontain a download link from which you can download the exported video."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example Callback Response (success):")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X POST <callbackUrl> \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "jobId": "123e4567-e89b-12d3-a456-426614174000",\n  "status": "success",\n  "downloadLink": "http://your-revideo-service.com/download/42078492-fbb9-4570-a329-785e87456618.mp4"\n}\'\n')),(0,o.yg)("p",null,"You can now download the file using the download link:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"GET http://your-revideo-service.com/download/42078492-fbb9-4570-a329-785e87456618.mp4\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," You should not use this link as a method of permanently serving files\n(for example to provide a download link to your users). Instead, it should only\nbe used to download the file once, and afterwards the file should be stored on a\npermanent storage solution like a bucket. By default, the file will be deleted\n10 minutes after the success callback."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example Callback Response (error):")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X POST <callbackUrl> \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "jobId": "123e4567-e89b-12d3-a456-426614174000",\n  "status": "error",\n  "error": "<error message>"\n}\'\n')))}u.isMDXComponent=!0}}]);