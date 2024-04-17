"use strict";(self.webpackChunk_revideo_docs=self.webpackChunk_revideo_docs||[]).push([[8294,9956],{8294:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(4041),o=n(2663),l=n(1918),r=n(7473),c=n(7789),i=n(268),s=n(6738),d=n(7186),m=n(3108),u=n(9082),b=n(1034),p=n(9404);const h={backToTopButton:"backToTopButton_z1FD",backToTopButtonShow:"backToTopButtonShow_w1wE"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.gk)();return(0,b.Mq)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.$)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",r.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(2631),g=n(6090),v=n(1187),_=n(2520),A=n(1631),C=n(232);const k={collapseSidebarButton:"collapseSidebarButton_Ftvb",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_c4WT"};function S(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",k.collapseSidebarButton),onClick:t},a.createElement(C.A,{className:k.collapseSidebarButtonIcon}))}var T=n(9303),I=n(9575),N=n(1786);const x=Symbol("EmptyContext"),B=a.createContext(x);function w(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(B.Provider,{value:l},t)}var y=n(6476),L=n(4271),M=n(9631),H=n(213);function P(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.p)(),f=function(e){const t=(0,H.A)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i._o)(e):void 0),[e,t])}(t),g=(0,i.w8)(t,l),v=(0,L.ys)(h,l),{collapsed:A,setCollapsed:C}=(0,y.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:k,setExpandedItem:S}=function(){const e=(0,a.useContext)(B);if(e===x)throw new N.dV("DocSidebarItemsExpandedStateProvider");return e}(),T=function(e){void 0===e&&(e=!A),S(e?null:s),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,N.ZC)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:g,collapsed:A,updateCollapsed:T}),(0,a.useEffect)((()=>{b&&null!=k&&k!==s&&E&&C(!0)}),[b,k,s,C,E]),a.createElement("li",{className:(0,o.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":A},p)},a.createElement("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(M.A,(0,I.A)({className:(0,o.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?T(!1):(e.preventDefault(),T())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!A:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),T()}})),a.createElement(y.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:A},a.createElement(z,{items:m,tabIndex:A?-1:0,onItemClick:n,activePath:l,level:c+1})))}var G=n(5436),W=n(6423);const D={menuExternalLink:"menuExternalLink_xK2O"};function q(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i.w8)(t,l),E=(0,G.A)(m);return a.createElement("li",{className:(0,o.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(M.A,(0,I.A)({className:(0,o.A)("menu__link",!E&&D.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(W.A,null)))}const R={menuHtmlItem:"menuHtmlItem_anEq"};function O(e){let{item:t,level:n,index:l}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),i&&[R.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(F,(0,I.A)({item:t},n));case"html":return a.createElement(O,(0,I.A)({item:t},n));default:return a.createElement(q,(0,I.A)({item:t},n))}}function V(e){let{items:t,...n}=e;return a.createElement(w,null,t.map(((e,t)=>a.createElement(U,(0,I.A)({key:t,item:e,index:t},n)))))}const z=(0,a.memo)(V),K={menu:"menu_qiME",menuWithAnnouncementBar:"menuWithAnnouncementBar_hRfJ"};function Y(e){let{path:t,sidebar:n,className:l}=e;const c=function(){const{isActive:e}=(0,T.Mj)(),[t,n]=(0,a.useState)(e);return(0,b.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",K.menu,c&&K.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(z,{items:n,activePath:t,level:1})))}const J="sidebar_vJCc",X="sidebarWithHideableNavbar_Fo4g",j="sidebarHidden_vBKa",Q="sidebarLogo_nlll";function Z(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,_.p)();return a.createElement("div",{className:(0,o.A)(J,c&&X,r&&j)},c&&a.createElement(A.A,{tabIndex:-1,className:Q}),a.createElement(Y,{path:t,sidebar:n}),i&&a.createElement(S,{onClick:l}))}const $=a.memo(Z);var ee=n(7226),te=n(5271);const ne=e=>{let{sidebar:t,path:n}=e;const l=(0,te.M)();return a.createElement("ul",{className:(0,o.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ae(e){return a.createElement(ee.GX,{component:ne,props:e})}const oe=a.memo(ae);function le(e){const t=(0,v.l)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement($,e),o&&a.createElement(oe,e))}const re={expandButton:"expandButton_qIqc",expandButtonIcon:"expandButtonIcon_aOpf"};function ce(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:re.expandButton,title:(0,u.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C.A,{className:re.expandButtonIcon}))}const ie={docSidebarContainer:"docSidebarContainer_aIKW",docSidebarContainerHidden:"docSidebarContainerHidden_UIq3",sidebarViewport:"sidebarViewport_DwR9"};function se(e){let{children:t}=e;const n=(0,d.t)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function de(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:c}=(0,g.zy)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),!i&&(0,f.O)()&&s(!0),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.A)(r.G.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&s(!0)}},a.createElement(se,null,a.createElement("div",{className:(0,o.A)(ie.sidebarViewport,i&&ie.sidebarViewportHidden)},a.createElement(le,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(ce,{toggleSidebar:d}))))}const me={docMainContainer:"docMainContainer_fv3b",docMainContainerEnhanced:"docMainContainerEnhanced_wOQt",docItemWrapperEnhanced:"docItemWrapperEnhanced_DUiu"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.t)();return a.createElement("main",{className:(0,o.A)(me.docMainContainer,(t||!l)&&me.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced)},n))}const be={docPage:"docPage_pOTq",docsWrapper:"docsWrapper_BqXd","themedComponent--light":"themedComponent--light_HcOG"};function pe(e){let{children:t}=e;const n=(0,d.t)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.A,{wrapperClassName:be.docsWrapper},a.createElement(E,null),a.createElement("div",{className:be.docPage},n&&a.createElement(de,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(ue,{hiddenSidebarContainer:o},t)))}var he=n(9956),Ee=n(6613);function fe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Ee.A,{version:t.version,tag:(0,c.tU)(t.pluginId,t.version)}),a.createElement(l.be,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ge(e){const{versionMetadata:t}=e,n=(0,i.mz)(e);if(!n)return a.createElement(he.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(fe,e),a.createElement(l.e3,{className:(0,o.A)(r.G.wrapper.docsPages,r.G.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.n,{version:t},a.createElement(d.V,{name:m,items:u},a.createElement(pe,null,c)))))}},9956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(4041),o=n(9082),l=n(1918),r=n(3108);function c(){return a.createElement(a.Fragment,null,a.createElement(l.be,{title:(0,o.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.A,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);