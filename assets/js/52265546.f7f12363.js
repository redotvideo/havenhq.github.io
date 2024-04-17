"use strict";(self.webpackChunk_revideo_docs=self.webpackChunk_revideo_docs||[]).push([[1118],{2247:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var a=t(4041);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),g=r,u=d["".concat(o,".").concat(g)]||d[g]||f[g]||i;return t?a.createElement(u,l(l({ref:n},p),{},{components:t})):a.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=t(9575),r=(t(4041),t(2247));const i={sidebar_position:7,slug:"/references"},l="References",c={unversionedId:"guide/references",id:"guide/references",title:"References",description:"_Note: These docs were adopted from the original",source:"@site/docs/guide/references.mdx",sourceDirName:"guide",slug:"/references",permalink:"/references",draft:!1,editUrl:"https://github.com/havenhq/revideo/blob/main/packages/docs/docs/guide/references.mdx",tags:[],version:"current",lastUpdatedBy:"Justus Mattern",sidebarPosition:7,frontMatter:{sidebar_position:7,slug:"/references"},sidebar:"docs",previous:{title:"Signals",permalink:"/signals"},next:{title:"Tweening",permalink:"/tweening"}},o={},s=[{value:"<code>ref</code> property",id:"ref-property",level:2},{value:"<code>createRef()</code> function",id:"createref-function",level:2},{value:"<code>makeRef()</code> function",id:"makeref-function",level:2},{value:"Array of references",id:"array-of-references",level:3},{value:"Custom functions",id:"custom-functions",level:3},{value:"<code>createRefMap()</code> function",id:"createrefmap-function",level:2},{value:"<code>makeRefs()</code> function",id:"makerefs-function",level:2}],p={toc:s},d="wrapper";function f(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"references"},"References"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note: These docs were adopted from the original\n",(0,r.yg)("a",{parentName:"em",href:"https://motioncanvas.io/docs/"},"Motion Canvas")," docs")),(0,r.yg)("p",null,"Usually, when creating a node, we want to store a reference to it, so we can\nanimate it later. One way to do that is by assigning it to a variable first, and\nthen adding it to the scene:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const circle = <Circle />;\nview.add(circle);\n\n// we can now animate our circle:\nyield * circle.scale(2, 0.3);\n")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"If you're used to libraries such as React, the above example may seem strange.\nIn Motion Canvas, the JSX components immediately create and return an instance\nof the given class. It's completely valid to store it as a reference and use it\nthroughout the animation.")),(0,r.yg)("p",null,"But this approach doesn't scale well. The more nodes we add, the harder it gets\nto see the overall structure of our scene. Consider the following example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const rectA = <Rect />;\nconst rectB = <Rect />;\nconst circle = <Circle>{rectA}</Circle>;\nview.add(\n  <Layout>\n    {circle}\n    {rectB}\n  </Layout>,\n);\n")),(0,r.yg)("p",null,"And now compare it to a version that doesn't store any references:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"view.add(\n  <Layout>\n    <Circle>\n      <Rect />\n    </Circle>\n    <Rect />\n  </Layout>,\n);\n")),(0,r.yg)("p",null,"If you find the latter example more readable, this guide is for you."),(0,r.yg)("h2",{id:"ref-property"},(0,r.yg)("inlineCode",{parentName:"h2"},"ref")," property"),(0,r.yg)("p",null,"Each node in Motion Canvas has a property called ",(0,r.yg)("inlineCode",{parentName:"p"},"ref")," that allows you to create\na reference to said node. It accepts a callback that will be invoked right after\nthe node has been created, with the first argument being the newly created\ninstance."),(0,r.yg)("p",null,"With this in mind, we can rewrite the initial example as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"let circle: Circle;\nview.add(\n  <Circle\n    ref={instance => {\n      circle = instance;\n    }}\n  />,\n);\n\nyield * circle.scale(2, 0.3);\n")),(0,r.yg)("p",null,"Using the ",(0,r.yg)("inlineCode",{parentName:"p"},"ref")," property in this way is not really practical, and we wouldn't\nrecommend it. But it's crucial to understand how it works because all the\nupcoming methods use this property as a base."),(0,r.yg)("h2",{id:"createref-function"},(0,r.yg)("inlineCode",{parentName:"h2"},"createRef()")," function"),(0,r.yg)("p",null,"The preferred way of using the ",(0,r.yg)("inlineCode",{parentName:"p"},"ref")," property is in conjunction with the\n",(0,r.yg)("a",{parentName:"p",href:"/api/core/utils#createRef"},(0,r.yg)("inlineCode",{parentName:"a"},"createRef()"))," function. Continuing with our\nexample, we can rewrite it as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import {createRef} from '@revideo/core';\n\n// ...\n\nconst circle = createRef<Circle>();\nview.add(<Circle ref={circle} />);\n\nyield * circle().scale(2, 0.3);\n")),(0,r.yg)("p",null,"Notice that ",(0,r.yg)("inlineCode",{parentName:"p"},"circle")," is no longer just a variable that points to our circle.\nInstead, it's a ",(0,r.yg)("a",{parentName:"p",href:"/signals"},"signal-like")," function that can be used to access it.\nInvoking it without any arguments (",(0,r.yg)("inlineCode",{parentName:"p"},"circle()"),") returns our instance."),(0,r.yg)("p",null,"Going back to the example with the more complex scene, we can now rewrite it as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const rectA = createRef<Rect>();\nconst rectB = createRef<Rect>();\nconst circle = createRef<Circle>();\nview.add(\n  <Layout>\n    <Circle ref={circle}>\n      <Rect ref={rectA} />\n    </Circle>\n    <Rect ref={rectB} />\n  </Layout>,\n);\n")),(0,r.yg)("h2",{id:"makeref-function"},(0,r.yg)("inlineCode",{parentName:"h2"},"makeRef()")," function"),(0,r.yg)("p",null,"Another common use case of the ",(0,r.yg)("inlineCode",{parentName:"p"},"ref")," property is to assign the newly created\ninstance to a property of some object. In the following example, we assign our\ncircle to ",(0,r.yg)("inlineCode",{parentName:"p"},"circle.instance")," (We'll talk about why this may be useful in a bit):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const circle = {instance: null as Circle};\nview.add(\n  <Circle\n    // highlight-start\n    ref={instance => {\n      circle.instance = instance;\n    }}\n    // highlight-end\n  />,\n);\n")),(0,r.yg)("p",null,"We can use the ",(0,r.yg)("a",{parentName:"p",href:"/api/core/utils#makeRef"},(0,r.yg)("inlineCode",{parentName:"a"},"makeRef()"))," function to simplify this\nprocess:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import {makeRef} from '@revideo/core';\n\n// ...\n\nconst circle = {instance: null as Circle};\nview.add(\n  // highlight-next-line\n  <Circle ref={makeRef(circle, 'instance')} />,\n);\n")),(0,r.yg)("h3",{id:"array-of-references"},"Array of references"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"makeRef()")," can be particularly useful when we create an array of nodes and want\nto grab references to all of them:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const circles: Circle[] = [];\nview.add(\n  <Layout>\n    {range(10).map(index => (\n      // highlight-next-line\n      <Circle ref={makeRef(circles, index)} />\n    ))}\n  </Layout>,\n);\n")),(0,r.yg)("p",null,"In JavaScript, arrays are objects whose properties are their indices. So\n",(0,r.yg)("inlineCode",{parentName:"p"},"makeRef(circles, index)")," will set the nth element of our array to the created\ncircle. As a result, we end up with an array of size ",(0,r.yg)("inlineCode",{parentName:"p"},"10")," filled with circles\nthat we can use to animate all of them."),(0,r.yg)("p",null,"You can also use the ",(0,r.yg)("a",{parentName:"p",href:"/api/core/utils#createRefArray"},(0,r.yg)("inlineCode",{parentName:"a"},"createRefArray()"))," helper\nfunction to achieve the same result:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import {createRefArray, range} from '@revideo/core';\n\n// ...\n\nconst circles = createRefArray<Circle>();\nview.add(\n  <Layout>\n    {range(10).map(() => (\n      <Circle ref={circles} />\n    ))}\n  </Layout>,\n);\n")),(0,r.yg)("p",null,"This time we don't specify the index. Whenever we pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"circles")," array to\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"ref")," property, the newly created circle will be appended to our array."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Check out ",(0,r.yg)("a",{parentName:"p",href:"/flow#looping"},"the looping section in the flow guide")," to see how an\narray of references can be used to orchestrate animations.")),(0,r.yg)("h3",{id:"custom-functions"},"Custom functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"makeRef()")," can also be used to return more than one reference from a custom\nfunction component:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"function Label({\n  refs,\n  children,\n}: {\n  refs: {rect: Rect; text: Txt};\n  children: string;\n}) {\n  return (\n    // highlight-next-line\n    <Rect ref={makeRef(refs, 'rect')}>\n      // highlight-next-line\n      <Txt ref={makeRef(refs, 'text')}>{children}</Txt>\n    </Rect>\n  );\n}\n\nconst label = {rect: null as Rect, text: null as Txt};\nview.add(<Label refs={label}>HELLO</Label>);\n\n// we can now animate both the Rect and the Text of our label:\nyield * label.rect.opacity(2, 0.3);\nyield * label.text.fontSize(24, 0.3);\n")),(0,r.yg)("p",null,"In this example, we define a function component called ",(0,r.yg)("inlineCode",{parentName:"p"},"Label")," consisting of a\nrectangle with some text inside. When using the component, we use the ",(0,r.yg)("inlineCode",{parentName:"p"},"refs"),"\nproperty to pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"label")," object created by us. ",(0,r.yg)("inlineCode",{parentName:"p"},"makeRef()")," is then used to\nfill this object with all the necessary references."),(0,r.yg)("h2",{id:"createrefmap-function"},(0,r.yg)("inlineCode",{parentName:"h2"},"createRefMap()")," function"),(0,r.yg)("p",null,"As the scene grows in complexity, declaring a reference for each node can become\ntedious. The ",(0,r.yg)("a",{parentName:"p",href:"/api/core/utils#createRefMap"},(0,r.yg)("inlineCode",{parentName:"a"},"createRefMap()"))," helper function\nlets us group references together based on the type of the node:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import {createRefMap} from '@revideo/core';\n\n// ...\n\nconst labels = createRefMap<Txt>();\nview.add(\n  <>\n    <Txt ref={labels.a}>A</Txt>\n    <Txt ref={labels.b}>B</Txt>\n    <Txt ref={labels.c}>C</Txt>\n  </>,\n);\n")),(0,r.yg)("p",null,"The returned object is a map that can store however many references we need. In\nthe above example, we assign three ",(0,r.yg)("inlineCode",{parentName:"p"},"Txt")," references under the keys ",(0,r.yg)("inlineCode",{parentName:"p"},"a"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"b"),", and\n",(0,r.yg)("inlineCode",{parentName:"p"},"c"),". Simply accessing a property of the map, like ",(0,r.yg)("inlineCode",{parentName:"p"},"labels.a")," will create a\nreference for us. The names of the properties are arbitrary and can be anything\nwe want."),(0,r.yg)("p",null,"Later on, we can retrieve the references using the same keys:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"yield * labels.a().text('A changes', 0.3);\nyield * labels.b().text('B changes', 0.3);\nyield * labels.c().text('C changes', 0.3);\n")),(0,r.yg)("p",null,"To check if a reference exists, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"in")," operator. This will avoid\ncreating a reference:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"if ('d' in labels) {\n  yield * labels.d().text('D changes', 0.3);\n}\n")),(0,r.yg)("p",null,"The returned object comes with a ",(0,r.yg)("inlineCode",{parentName:"p"},"mapRefs")," method that lets us map over all\nreferences in the map. It's similar to the ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"Array.prototype.map"),"\nfunction:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"yield * all(...labels.mapRefs(label => label.fill('white', 0.3)));\n")),(0,r.yg)("h2",{id:"makerefs-function"},(0,r.yg)("inlineCode",{parentName:"h2"},"makeRefs()")," function"),(0,r.yg)("p",null,"Looking at the previous example, you may notice that we had to define the ",(0,r.yg)("inlineCode",{parentName:"p"},"refs"),"\ntype twice. First in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Label")," declaration and then again when creating the\n",(0,r.yg)("inlineCode",{parentName:"p"},"label")," object:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"function Label({\n  refs,\n  children,\n}: {\n  // highlight-next-line\n  refs: {rect: Rect; text: Txt};\n  children: string;\n}) {\n  return (\n    <Rect ref={makeRef(refs, 'rect')}>\n      <Txt ref={makeRef(refs, 'text')}>{children}</Txt>\n    </Rect>\n  );\n}\n\n// highlight-next-line\nconst label = {rect: null as Rect, text: null as Txt};\nview.add(<Label refs={label}>HELLO</Label>);\n")),(0,r.yg)("p",null,"We can use ",(0,r.yg)("a",{parentName:"p",href:"/api/core/utils#makeRefs"},(0,r.yg)("inlineCode",{parentName:"a"},"makeRefs()"))," to eliminate this\nredundancy. It can extract the type from the ",(0,r.yg)("inlineCode",{parentName:"p"},"Label")," declaration and create an\nempty object matching it:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import {makeRef, makeRefs} from '@revideo/core';\n\n// ...\n\nfunction Label({\n  refs,\n  children,\n}: {\n  // highlight-next-line\n  refs: {rect: Rect; text: Txt};\n  children: string;\n}) {\n  return (\n    <Rect ref={makeRef(refs, 'rect')}>\n      <Txt ref={makeRef(refs, 'text')}>{children}</Txt>\n    </Rect>\n  );\n}\n\n// highlight-next-line\nconst label = makeRefs<typeof Label>();\nview.add(<Label refs={label}>HELLO</Label>);\n")))}f.isMDXComponent=!0}}]);