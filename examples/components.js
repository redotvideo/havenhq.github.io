import{M as w,i as O,e as C,a3 as P,N as y,k as S,E as d,j as l,R as b,a as x,t as m,g,m as D,w as u,V as _,b as j,c as F,s as R}from"./_virtual_settings-52524864.js";import{c}from"./createRef-ad1ed90d.js";import{C as z}from"./Circle-75176642.js";let f;f??(f=new w("components",!1));f.loadData({version:0,shared:{background:null,range:[0,null],size:{x:960,y:540},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:2,colorSpace:"srgb",fileType:"image/png",quality:1}});const E=f;let h;h??(h=new w("components",!1));h.loadData({version:0,timeEvents:[],seed:1216764715});const M=h;var N=Object.defineProperty,V=Object.getOwnPropertyDescriptor,v=(a,t,s,i)=>{for(var e=i>1?void 0:i?V(t,s):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(e=(i?r(t,s,e):r(e))||e);return i&&e&&N(t,s,e),e};class p extends y{constructor(t){super({...t}),this.indicatorPosition=S(0),this.offColor=new d("#242424"),this.indicator=c(),this.container=c(),this.isOn=this.initialState(),this.indicatorPosition(this.isOn?50:-50),this.add(l(b,{ref:this.container,fill:this.isOn?this.accent():this.offColor,size:[200,100],radius:100,children:l(z,{x:()=>this.indicatorPosition(),ref:this.indicator,size:[80,80],fill:"#ffffff"})}))}*toggle(t){yield*x(m(t,s=>{const i=this.isOn?this.accent():this.offColor,e=this.isOn?this.offColor:this.accent();this.container().fill(d.lerp(i,e,g(s)))}),m(t,s=>{const i=this.indicator().position();this.indicatorPosition(g(s,i.x,this.isOn?-50:50))})),this.isOn=!this.isOn}}v([O(!1),C()],p.prototype,"initialState",2);v([O("#68ABDF"),P()],p.prototype,"accent",2);const o=D(function*(a){const t=c();a.add(l(p,{ref:t,initialState:!0})),yield*t().toggle(.6),yield*u(1),yield*t().toggle(.6),yield*u(1)});o.name="components";M.attach(o.meta);o.onReplaced??(o.onReplaced=new _(o.config));const $=j({scenes:[o]}),I=F("components",{core:"0.2.9",two:"0.2.9",ui:"0.2.9",vitePlugin:"0.2.9"},[],$,E,R);export{I as default};
