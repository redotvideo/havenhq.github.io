"use strict";(self.webpackChunk_revideo_docs=self.webpackChunk_revideo_docs||[]).push([[4254],{657:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(4041),l=n(9058),c=n(9631);const r={container:"container_e12J",nav:"nav_rfgT",navlink:"navlink_gKa4",active:"active_Howy"};function s(e){let{to:t,children:n}=e;return a.createElement(c.A,{className:r.navlink,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)}function u(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(l.A,null,a.createElement("html",{lang:"en"}),a.createElement("title",null,"Docusaurus debug panel"),a.createElement("meta",{name:"robots",content:"noindex"})),a.createElement("div",null,a.createElement("nav",{className:r.nav},a.createElement(s,{to:"/__docusaurus/debug"},"Config"),a.createElement(s,{to:"/__docusaurus/debug/metadata"},"Metadata"),a.createElement(s,{to:"/__docusaurus/debug/registry"},"Registry"),a.createElement(s,{to:"/__docusaurus/debug/routes"},"Routes"),a.createElement(s,{to:"/__docusaurus/debug/content"},"Content"),a.createElement(s,{to:"/__docusaurus/debug/globalData"},"Global data")),a.createElement("main",{className:r.container},t)))}},2849:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(4041),l=n(396),c=n(657);const r={sectionTitle:"sectionTitle_KElH",listItem:"listItem_IwmO",version:"version_YwGz",name:"name_qKyK"};function s(){const{siteMetadata:e}=(0,l.A)();return a.createElement(c.A,null,a.createElement("h2",null,"Site Metadata"),a.createElement("div",null,"Docusaurus Version: ",a.createElement("code",null,e.docusaurusVersion)),a.createElement("div",null,"Site Version:"," ",a.createElement("code",null,e.siteVersion??"No version specified")),a.createElement("h3",{className:r.sectionTitle},"Plugins and themes"),a.createElement("ul",{className:"clean-list"},Object.entries(e.pluginVersions).map((e=>{let[t,n]=e;return a.createElement("li",{key:t,className:r.listItem},"package"===n.type&&n.version&&a.createElement("div",{className:r.version},a.createElement("code",null,n.version)),a.createElement("div",{className:r.name},t),a.createElement("div",null,"Type: ",n.type))}))))}}}]);