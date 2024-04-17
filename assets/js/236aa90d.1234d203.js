"use strict";(self.webpackChunk_revideo_docs=self.webpackChunk_revideo_docs||[]).push([[3055],{2247:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>u});var t=a(4041);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=t.createContext({}),d=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),g=o,u=m["".concat(p,".").concat(g)]||m[g]||c[g]||r;return a?t.createElement(u,i(i({ref:n},s),{},{components:a})):t.createElement(u,i({ref:n},s))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1787:(e,n,a)=>{a.d(n,{x:()=>r});var t=a(9575),o=a(4041);function r(e){let{width:n=24,height:a=24,...r}=e;return o.createElement("svg",(0,t.A)({width:n,height:a,viewBox:"0 0 24 24",fill:"currentColor"},r),o.createElement("path",{d:"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"}))}},5906:(e,n,a)=>{a.d(n,{A:()=>m});var t=a(9531),o=a(53),r=a(4041),i=a(9631),l=a(9575);function p(e){let{width:n=24,height:a=24,...t}=e;return r.createElement("svg",(0,l.A)({viewBox:"0 0 24 24",width:n,height:a,"aria-hidden":!0},t),r.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"}))}const d={container:"container_lQCo",small:"small_As57",banner:"banner_A4QS",player:"player_tELG",link:"link_BTzN",icon:"icon_wSGd"};function s(e){let{name:n}=e;const a=`https://github.com/revideo/revideo/blob/main/packages/examples/src/scenes/${n}.tsx`;return r.createElement(i.A,{to:a,className:(0,o.A)("padding--sm",d.link)},r.createElement("span",null,"View source code"),r.createElement(p,{className:d.icon}))}function m(e){let{name:n,banner:a,small:t,link:i}=e;return r.createElement("div",{className:(0,o.A)(d.container,a&&d.banner,t&&d.small)},r.createElement("revideo-player",{class:d.player,src:`/examples/${n}.js`,auto:a}),r.createElement(s,{name:i||n}))}t.A.canUseDOM&&a.e(3980).then(a.bind(a,3980))},6696:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var t=a(9575),o=(a(4041),a(2247)),r=a(5906),i=a(1787);const l={sidebar_position:13,slug:"/media"},p="Media",d={unversionedId:"guide/media",id:"guide/media",title:"Media",description:"_Note: These docs were adopted from the original",source:"@site/docs/guide/media.mdx",sourceDirName:"guide",slug:"/media",permalink:"/media",draft:!1,editUrl:"https://github.com/havenhq/revideo/blob/main/packages/docs/docs/guide/media.mdx",tags:[],version:"current",lastUpdatedBy:"Justus Mattern",sidebarPosition:13,frontMatter:{sidebar_position:13,slug:"/media"},sidebar:"docs",previous:{title:"Logging",permalink:"/logging"},next:{title:"Rendering",permalink:"/rendering"}},s={},m=[{value:"Audio",id:"audio",level:2},{value:"Supported Formats",id:"supported-formats",level:3},{value:"Images",id:"images",level:2},{value:"Supported Formats",id:"supported-formats-1",level:3},{value:"Video",id:"video",level:2},{value:"Supported Formats",id:"supported-formats-2",level:3}],c={toc:m},g="wrapper";function u(e){let{components:n,...l}=e;return(0,o.yg)(g,(0,t.A)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"media"},"Media"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Note: These docs were adopted from the original\n",(0,o.yg)("a",{parentName:"em",href:"https://motioncanvas.io/docs/"},"Motion Canvas")," docs")),(0,o.yg)("p",null,"In this chapter we will take a look at all the different types of media Motion\nCanvas lets you add to your animations."),(0,o.yg)("h2",{id:"audio"},"Audio"),(0,o.yg)("p",null,"One type of media Motion Canvas supports is audio. To add an audio track to your\nanimation you need to edit your ",(0,o.yg)("inlineCode",{parentName:"p"},"project.ts")," file. First we need to import the\naudio file we want to use as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"// my-animation/\n// \u251c\u2500 audio/\n// \u2502  \u2514\u2500 voice.mp3\n// \u251c\u2500 src/\n// ...\nimport audio from '../audio/voice.mp3';\n")),(0,o.yg)("p",null,"Once imported we need to let Motion Canvas know that we want to use this audio\nfile. We can do this by specifying the ",(0,o.yg)("inlineCode",{parentName:"p"},"audio")," property in the project\nconfiguration:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"export default makeProject({\n  // ...\n  audio: audio,\n});\n")),(0,o.yg)("p",null,"If we open the editor now, we should see that your audio track has been added."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(6019).A,width:"1295",height:"269"})),(0,o.yg)("p",null,"However, it's not always ideal to start with the audio at the beginning.\nSometimes it's better to start with a bit of delay. After configuring the audio,\nyou can edit the offset in the Video Settings ",(0,o.yg)(i.x,{className:"icon-inline",alt:"Video Settings",title:"Video Settings",mdxType:"VideoSettings"})," tab. You can also hold ",(0,o.yg)("kbd",null,"SHIFT")," and drag the audio track left and\nright directly on the timeline."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(5294).A,width:"1288",height:"265"})),(0,o.yg)("h3",{id:"supported-formats"},"Supported Formats"),(0,o.yg)("p",null,"A list of supported file formats can be found\n",(0,o.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#common_codecs"},"here")),(0,o.yg)("h2",{id:"images"},"Images"),(0,o.yg)("p",null,"Another type of media Motion Canvas supports are images. To use an image in the\nanimation, we need to import the image:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"// my-animation/\n// \u251c\u2500 images/\n// \u2502  \u2514\u2500 example.png\n// \u251c\u2500 src/\n// ...\nimport examplePng from '../../images/example.png';\n")),(0,o.yg)("p",null,"Then we can use Motion Canvas ",(0,o.yg)("a",{parentName:"p",href:"/api/2d/components/Img"},(0,o.yg)("inlineCode",{parentName:"a"},"Img"))," component to\ndisplay the image:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"import {makeScene2D, Img} from '@revideo/2d';\n\nimport examplePng from '../../images/example.png';\n\nexport default makeScene2D(function* (view) {\n  view.add(<Img src={examplePng} />);\n});\n")),(0,o.yg)("p",null,"Images can also be animated like every other component in Motion Canvas. For\nthis, we need to create a ",(0,o.yg)("a",{parentName:"p",href:"/references"},(0,o.yg)("inlineCode",{parentName:"a"},"Reference"))," and pass that to the\n",(0,o.yg)("a",{parentName:"p",href:"/api/2d/components/Img"},(0,o.yg)("inlineCode",{parentName:"a"},"Img")),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"// ...\nimport {all, createRef} from '@revideo/core';\n\nexport default makeScene2D(function* (view) {\n  const imageRef = createRef<Img>();\n\n  view.add(<Img ref={imageRef} src={examplePng} scale={2} />);\n\n  yield* all(\n    imageRef().scale(2.5, 1.5).to(2, 1.5),\n    imageRef().absoluteRotation(90, 1.5).to(0, 1.5),\n  );\n});\n")),(0,o.yg)(r.A,{name:"media-image",small:!0,mdxType:"AnimationPlayer"}),(0,o.yg)("h3",{id:"supported-formats-1"},"Supported Formats"),(0,o.yg)("p",null,"A list of supported file formats can be found\n",(0,o.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"},"here")),(0,o.yg)("h2",{id:"video"},"Video"),(0,o.yg)("p",null,"Videos in Motion Canvas work similar to images. First, we need to import our\nvideo we want to display:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"// my-animation/\n// \u251c\u2500 videos/\n// \u2502  \u2514\u2500 example.mp4\n// \u251c\u2500 src/\n// ...\nimport exampleMp4 from '../../videos/example.mp4';\n")),(0,o.yg)("p",null,"Then we can use Motion Canvas ",(0,o.yg)("a",{parentName:"p",href:"/api/2d/components/Video"},(0,o.yg)("inlineCode",{parentName:"a"},"Video"))," component to\ndisplay the video as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"import {makeScene2D, Video} from '@revideo/2d';\n\nimport exampleMp4 from '../../videos/example.mp4';\n\nexport default makeScene2D(function* (view) {\n  view.add(<Video src={exampleMp4} />);\n});\n")),(0,o.yg)("p",null,"However this will only display the video and will not play it. In order to play\nthe video we need to create a ",(0,o.yg)("a",{parentName:"p",href:"/references"},(0,o.yg)("inlineCode",{parentName:"a"},"Reference"))," to the element."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"// ...\nimport {createRef} from '@revideo/core';\n\nexport default makeScene2D(function* (view) {\n  const videoRef = createRef<Video>();\n\n  view.add(<Video ref={videoRef} src={exampleMp4} />);\n});\n")),(0,o.yg)("p",null,"Now that we have a ",(0,o.yg)("a",{parentName:"p",href:"/references"},(0,o.yg)("inlineCode",{parentName:"a"},"Reference"))," to the\n",(0,o.yg)("a",{parentName:"p",href:"/api/2d/components/Video"},(0,o.yg)("inlineCode",{parentName:"a"},"Video"))," element, we can use it to animate the video,\nas well as ",(0,o.yg)("a",{parentName:"p",href:"/api/2d/components/Video#play"},(0,o.yg)("inlineCode",{parentName:"a"},"play"))," and\n",(0,o.yg)("a",{parentName:"p",href:"/api/2d/components/Video#pause"},(0,o.yg)("inlineCode",{parentName:"a"},"pause"))," it."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"export default makeScene2D(function* (view) {\n  // ...\n\n  videoRef().play();\n  yield* videoRef().scale(1.25, 1.5).to(1, 1.5);\n});\n")),(0,o.yg)("h3",{id:"supported-formats-2"},"Supported Formats"),(0,o.yg)("p",null,"A list of supported file formats can be found\n",(0,o.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers"},"here")))}u.isMDXComponent=!0},5294:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/editor-audio-track-delayed-91d2ab3d595b34d698739748b5485bca.png"},6019:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/editor-audio-track-74c67365a5ca60f2b4ce8395b403f514.png"}}]);