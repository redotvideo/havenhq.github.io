"use strict";(self.webpackChunk_revideo_docs=self.webpackChunk_revideo_docs||[]).push([[7461],{2247:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var n=r(4041);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(9575),o=(r(4041),r(2247));const a={sidebar_position:-1,slug:"/updating"},i="Update Guide",p={unversionedId:"migration/updating",id:"migration/updating",title:"Update Guide",description:"_Note: These docs were adopted from the original",source:"@site/docs/migration/updating.mdx",sourceDirName:"migration",slug:"/updating",permalink:"/updating",draft:!1,editUrl:"https://github.com/havenhq/revideo/blob/main/packages/docs/docs/migration/updating.mdx",tags:[],version:"current",lastUpdatedBy:"Justus Mattern",sidebarPosition:-1,frontMatter:{sidebar_position:-1,slug:"/updating"},sidebar:"docs",previous:{title:"Migration",permalink:"/category/migration"},next:{title:"Version 3",permalink:"/migrating-to-3.0.0"}},l={},s=[{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"update-guide"},"Update Guide"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Note: These docs were adopted from the original\n",(0,o.yg)("a",{parentName:"em",href:"https://motioncanvas.io/docs/"},"Motion Canvas")," docs")),(0,o.yg)("p",null,"The latest patch notes can be found\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/revideo/revideo/releases"},"here"),"."),(0,o.yg)("p",null,"To update all the ",(0,o.yg)("inlineCode",{parentName:"p"},"@revideo")," packages to the latest version use the following:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm update --save @revideo/2d @revideo/core @revideo/ui @revideo/vite-plugin\n")),(0,o.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("p",null,"If you get any errors, try removing ",(0,o.yg)("inlineCode",{parentName:"p"},"package-lock.json")," and the ",(0,o.yg)("inlineCode",{parentName:"p"},"node_modules"),"\nfolder, then run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm install")," again."))}d.isMDXComponent=!0}}]);