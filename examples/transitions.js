import{H as p,h as d,a as S,a5 as w,M as m,m as E,j as r,w as T,R as v,V as x,b as R,c as b,s as z}from"./_virtual_settings-52524864.js";import{T as F}from"./Txt-d366a56c.js";import{c as y}from"./createRef-ad1ed90d.js";function D(n,e,l){e==null&&(e=()=>{});const t=p(),s=t.previous;t.previousOnTop=l??!1;const i=s==null?void 0:s.lifecycleEvents.onBeforeRender.subscribe(e),c=t.lifecycleEvents.onBeforeRender.subscribe(n);return t.enterInitial(),()=>{t.enterAfterTransitionIn(),i==null||i(),c()}}function*C(n=w.Top,e=.6){const t=p().getSize().getOriginOffset(n).scale(2),s=d.createSignal(),i=d.createSignal(t),c=D(f=>f.translate(i.x(),i.y()),f=>f.translate(s.x(),s.y()));yield*S(s(t.scale(-1),e),i(d.zero,e)),c()}let u;u??(u=new m("transitions",!1));u.loadData({version:0,shared:{background:null,range:[0,null],size:{x:1920,y:1080},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:2,colorSpace:"srgb",fileType:"image/png",quality:1}});const I=u;let g;g??(g=new m("transitions-first",!1));g.loadData({version:1,timeEvents:[],seed:2868148813});const j=g,a=E(function*(n){n.add(r(v,{width:"100%",height:"100%",fill:"lightseagreen",layout:!0,alignItems:"center",justifyContent:"center",children:r(F,{fontSize:160,fontWeight:700,fill:"#fff",fontFamily:'"JetBrains Mono", monospace',children:"FIRST SCENE"})})),yield*T(1)});a.name="transitions-first";j.attach(a.meta);a.onReplaced??(a.onReplaced=new x(a.config));let h;h??(h=new m("transitions-second",!1));h.loadData({version:1,timeEvents:[],seed:1065746214});const N=h,o=E(function*(n){const e=y(),l=y();n.add(r(v,{ref:e,width:"100%",height:"100%",fill:"lightcoral",layout:!0,alignItems:"center",justifyContent:"center",children:r(F,{ref:l,fontSize:160,fontWeight:700,fill:"#fff",fontFamily:'"JetBrains Mono", monospace',children:"SECOND SCENE"})})),yield*C(w.Left),yield*T(.4),yield*S(e().fill("lightseagreen",.6),l().text("FIRST SCENE",.6))});o.name="transitions-second";N.attach(o.meta);o.onReplaced??(o.onReplaced=new x(o.config));const O=R({scenes:[a,o]}),P=b("transitions",{core:"0.2.9",two:"0.2.9",ui:"0.2.9",vitePlugin:"0.2.9"},[],O,I,z);export{P as default};
