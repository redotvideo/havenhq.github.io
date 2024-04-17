"use strict";(self.webpackChunk_revideo_docs=self.webpackChunk_revideo_docs||[]).push([[1485],{2247:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var o=t(4041);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return t?o.createElement(f,r(r({ref:n},d),{},{components:t})):o.createElement(f,r({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8621:(e,n,t)=>{t.d(n,{A:()=>m});var o=t(4041),a=t(2663),i=t(7473),r=t(9082);const l={admonition:"admonition_qNG0",admonitionHeading:"admonitionHeading_l909",admonitionIcon:"admonitionIcon_UNbs",admonitionContent:"admonitionContent_oUmQ"};const c={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},s={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=o.Children.toArray(e),t=n.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=o.createElement(o.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:a}}(e.children);return{...e,title:e.title??n,children:t}}function m(e){const{children:n,type:t,title:r,icon:m}=d(e),p=function(e){const n=s[e]??e,t=c[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),c.info)}(t),u=r??p.label,{iconComponent:f}=p,g=m??o.createElement(f,null);return o.createElement("div",{className:(0,a.A)(i.G.common.admonition,i.G.common.admonitionType(e.type),"alert",`alert--${p.infimaClassName}`,l.admonition)},o.createElement("div",{className:l.admonitionHeading},o.createElement("span",{className:l.admonitionIcon},g),u),o.createElement("div",{className:l.admonitionContent},n))}},7576:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(9631),a=t(9996),i=t(4041);function r(){return i.createElement(a.A,{type:"experimental"},"This is an ",i.createElement(o.A,{to:"/experimental"},"experimental feature"),". The behavior and API may change drastically between minor releases.")}},9996:(e,n,t)=>{t.d(n,{A:()=>p});var o=t(9575),a=t(4041);function i(e){let{width:n=24,height:t=24,...i}=e;return a.createElement("svg",(0,o.A)({viewBox:"0 0 24 24",width:n,height:t,"aria-hidden":!0,fill:"currentColor"},i),a.createElement("path",{d:"M19.8,18.4L14,10.67V6.5l1.35-1.69C15.61,4.48,15.38,4,14.96,4H9.04C8.62,4,8.39,4.48,8.65,4.81L10,6.5v4.17L4.2,18.4 C3.71,19.06,4.18,20,5,20h14C19.82,20,20.29,19.06,19.8,18.4z"}))}function r(e){return a.createElement("svg",(0,o.A)({viewBox:"0 0 24 24",fill:"currentColor"},e),a.createElement("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"}))}function l(e){return a.createElement("svg",(0,o.A)({viewBox:"0 0 24 24",fill:"currentColor"},e),a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}))}function c(e){return a.createElement("svg",(0,o.A)({viewBox:"0 0 24 24",fill:"currentColor"},e),a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}))}function s(e){return a.createElement("svg",(0,o.A)({viewBox:"0 0 24 24",fill:"currentColor"},e),a.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}))}var d=t(8621);const m={icon:"icon_Fw4I"};function p(e){let{title:n,type:t,...p}=e;const u=(0,a.useMemo)((()=>{switch(t){case"tip":return c;case"caution":return s;case"danger":return r;case"experimental":return i;default:return l}}),[t]);return"experimental"===t&&(n??="Experimental",t="caution"),a.createElement(a.Fragment,null,a.createElement(d.A,(0,o.A)({icon:a.createElement(u,{className:m.icon}),title:n,type:t},p)))}},7980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(9575),a=(t(4041),t(2247)),i=t(7576);const r={slug:"/plugins/editor",description:"Extend the editor interface with Preact.",sidebar_position:2},l="Editor",c={unversionedId:"advanced/plugins/editor",id:"advanced/plugins/editor",title:"Editor",description:"Extend the editor interface with Preact.",source:"@site/docs/advanced/plugins/editor.mdx",sourceDirName:"advanced/plugins",slug:"/plugins/editor",permalink:"/plugins/editor",draft:!1,editUrl:"https://github.com/havenhq/revideo/blob/main/packages/docs/docs/advanced/plugins/editor.mdx",tags:[],version:"current",lastUpdatedBy:"Justus Mattern",sidebarPosition:2,frontMatter:{slug:"/plugins/editor",description:"Extend the editor interface with Preact.",sidebar_position:2},sidebar:"docs",previous:{title:"Runtime",permalink:"/plugins/runtime"},next:{title:"Node.js",permalink:"/plugins/node"}},s={},d=[],m={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,o.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"editor"},"Editor"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Note: These docs were adopted from the original\n",(0,a.yg)("a",{parentName:"em",href:"https://motioncanvas.io/docs/"},"Motion Canvas")," docs")),(0,a.yg)("p",null,"Editor plugins are an extension of runtime plugins that include additional hooks\nfor extending the editor interface itself."),(0,a.yg)(i.A,{mdxType:"ExperimentalWarning"}),(0,a.yg)("p",null,"Let's update our plugin's entry point to export an editor plugin. The main\ndifference is that we're now using the ",(0,a.yg)("inlineCode",{parentName:"p"},"makeEditorPlugin")," function imported from\n",(0,a.yg)("inlineCode",{parentName:"p"},"@revideo/ui")," to define it:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/plugin.ts"',title:'"src/plugin.ts"'},"import {makeEditorPlugin} from '@revideo/ui';\nimport {CustomTabConfig} from './CustomTabConfig';\n\nexport default makeEditorPlugin({\n  name: 'editor-test',\n  tabs: [CustomTabConfig],\n});\n")),(0,a.yg)("p",null,"This gives us access to some additional hooks that we can use to extend the\ninterface. In the example above, we use ",(0,a.yg)("inlineCode",{parentName:"p"},"tabs")," to declare an array of custom\ntabs that will be added to the left sidebar."),(0,a.yg)("p",null,"The tab configuration is imported from a new file called ",(0,a.yg)("inlineCode",{parentName:"p"},"CustomTabConfig.tsx"),"\nthat we have yet to create. Let's take a look at how it may look like:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/CustomTabConfig.tsx"',title:'"src/CustomTabConfig.tsx"'},'/* @jsxImportSource preact */\n\nimport {\n  Pane,\n  PhotoCamera,\n  PluginTabConfig,\n  PluginTabProps,\n  Separator,\n  Tab,\n} from \'@revideo/ui\';\n\nfunction TabComponent({tab}: PluginTabProps) {\n  return (\n    <Tab title="My Tab" id="custom-tab" tab={tab}>\n      <PhotoCamera />\n    </Tab>\n  );\n}\n\nfunction PaneComponent() {\n  return (\n    <Pane title="My Pane" id="custom-pane">\n      <Separator size={1} />\n      Hello <strong>World</strong>!\n    </Pane>\n  );\n}\n\nexport const CustomTabConfig: PluginTabConfig = {\n  name: \'inspector\',\n  tabComponent: TabComponent,\n  paneComponent: PaneComponent,\n};\n')),(0,a.yg)("p",null,"First of all, the editor is built on top of ",(0,a.yg)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact"),".\nJust like Motion Canvas, Preact uses JSX to define components. This means that\nin ",(0,a.yg)("inlineCode",{parentName:"p"},"tsx")," files extending the editor, we need to let TypeScript know that it\nshould import the ",(0,a.yg)("inlineCode",{parentName:"p"},"jsx")," factory function from ",(0,a.yg)("inlineCode",{parentName:"p"},"preact")," and not ",(0,a.yg)("inlineCode",{parentName:"p"},"@revideo/2d"),".\nThis can be done in multiple different ways. In this simple example, we'll just\nuse a comment at the top of the file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"/* @jsxImportSource preact */\n")),(0,a.yg)("p",null,"Next, we define a component for the tab itself. This component will be rendered\nin the navigation bar on the left. We use the ",(0,a.yg)("inlineCode",{parentName:"p"},"Tab")," component from ",(0,a.yg)("inlineCode",{parentName:"p"},"@revideo/ui"),"\nto stay consistent with the rest of the editor. We also borrow the ",(0,a.yg)("inlineCode",{parentName:"p"},"PhotoCamera"),"\nicon and put it inside:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'function TabComponent({tab}: PluginTabProps) {\n  return (\n    <Tab title="My Tab" id="custom-tab" tab={tab}>\n      <PhotoCamera />\n    </Tab>\n  );\n}\n')),(0,a.yg)("p",null,"Similarly, we define a component for the pane that will be rendered when the tab\nis selected:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'function PaneComponent() {\n  return (\n    <Pane title="My Pane" id="custom-pane">\n      <Separator size={1} />\n      Hello <strong>World</strong>!\n    </Pane>\n  );\n}\n')),(0,a.yg)("p",null,"Lastly, we export the configuration object:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"export const CustomTabConfig: PluginTabConfig = {\n  name: 'inspector',\n  tabComponent: TabComponent,\n  paneComponent: PaneComponent,\n};\n")),(0,a.yg)("p",null,"Editor plugins are still experimental and the API is not yet properly documented\nbut if you want to play around with some other available hooks you can take a\nlook at ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/revideo/revideo/blob/main/packages/2d/src/editor/index.ts"},"this editor plugin")," provided by the ",(0,a.yg)("inlineCode",{parentName:"p"},"@revideo/2d"),"\npackage. It's responsible for displaying the inspector tab and drawing an\noverlay on top of the preview when clicking on different nodes."))}u.isMDXComponent=!0}}]);