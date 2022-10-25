"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[29514,4972],{91262:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(72389);function o(e){let{children:t,fallback:n}=e;return(0,l.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):n??null}},86865:(e,t,n)=>{n.r(t),n.d(t,{default:()=>De});var a=n(67294),l=n(86010),o=n(10833),r=n(35281),c=n(53438),i=n(43320),s=n(74477),d=n(1116),m=n(50621),u=n(95999),b=n(12466),p=n(85936);const h="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function v(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=null==n?void 0:n.scrollY;r&&(o.current?o.current=!1:a>=r?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var f=n(16550),g=n(87524),_=n(86668),k=n(21327),I=n(87462);function C(e){return a.createElement("svg",(0,I.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function Z(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",N),onClick:t},a.createElement(C,{className:S}))}var x=n(59689),w=n(902);const y=Symbol("EmptyContext"),T=a.createContext(y);function P(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(T.Provider,{value:o},t)}var L=n(86043),A=n(48596),B=n(39960),F=n(72389);function M(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function D(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),v=function(e){const t=(0,F.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),f=(0,c._F)(t,o),g=(0,A.Mg)(h,o),{collapsed:k,setCollapsed:C}=(0,L.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:N,setExpandedItem:S}=function(){const e=(0,a.useContext)(T);if(e===y)throw new w.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!k),S(e?null:s),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,w.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:f,collapsed:k,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&N&&N!==s&&E&&C(!0)}),[b,N,s,C,E]),a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(B.Z,(0,I.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?e=>{null==n||n(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!k:void 0,href:b?v??"#":v},d),u),h&&b&&a.createElement(M,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(K,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:o,level:i+1})))}var H=n(13919),V=n(39471);const W="menuExternalLink_NmtK";function R(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{href:m,label:u,className:b}=t,p=(0,c._F)(t,o),h=(0,H.Z)(m);return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(B.Z,(0,I.Z)({className:(0,l.Z)("menu__link",!h&&W,{"menu__link--active":p}),"aria-current":p?"page":void 0,to:m},h&&{onClick:n?()=>n(t):void 0},d),u,!h&&a.createElement(V.Z,null)))}const z="menuHtmlItem_M9Kj";function O(e){let{item:t,level:n,index:o}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),i&&[z,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(D,(0,I.Z)({item:t},n));case"html":return a.createElement(O,(0,I.Z)({item:t},n));default:return a.createElement(R,(0,I.Z)({item:t},n))}}function G(e){let{items:t,...n}=e;return a.createElement(P,null,t.map(((e,t)=>a.createElement(U,(0,I.Z)({key:t,item:e,index:t},n)))))}const K=(0,a.memo)(G),Y="menu_SIkG",j="menuWithAnnouncementBar_GW3s";function q(e){let{path:t,sidebar:n,className:o}=e;const c=function(){const{isActive:e}=(0,x.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",Y,c&&j,o)},a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:n,activePath:t,level:1})))}const J="sidebar_mhZE",X="sidebarWithHideableNavbar__6UL",Q="sidebarHidden__LRd",$="sidebarLogo_F_0z",ee="sidebarVersionSwitch_EHpo";var te=n(577),ne=n(79705),ae=n(80143),le=n(60373);let oe=n(44908);const re=oe[0];oe=[{name:"current",label:"Next",path:"/docs/next"}].concat(oe.map((e=>({label:e,name:e,path:e==re?"/docs":"/docs/"+e})))).slice(0,5).concat({name:"others",label:"Others",path:"/versions"});function ce(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:l,dropdownItemsBefore:o,dropdownItemsAfter:r,...c}=e;const i=(0,ae.Iw)(n),s=((0,ae.gB)(n),(0,ae.yW)(n)),{preferredVersion:d,savePreferredVersionName:m}=(0,le.J)(n);const b=function(){const e=oe.map((e=>{const t={path:"/docs/"+(e.name==re?"":"current"==e.name?"next/":e.name+"/")+("about"==i.activeDoc.id?"":i.activeDoc.id)};return{isNavLink:!0,label:e.label,to:"",isActive:()=>e.name===i.activeVersion.name,onClick:()=>{m(e.name),window.location.href="others"==e.name?"/versions":t.path}}}));return[...o,...e,...r]}(),p=i.activeVersion??d??s,h=t&&b.length>1?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):p.label,E=t&&b.length>1?void 0:(v=p,v.docs.find((e=>e.id===v.mainDocId))).path;var v;return b.length<=1?a.createElement(te.Z,(0,I.Z)({},c,{mobile:t,label:h,to:E,isActive:l?()=>!1:void 0})):a.createElement(ne.Z,(0,I.Z)({},c,{mobile:t,label:h,to:E,items:b,isActive:l?()=>!1:void 0}))}function ie(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r,docsPluginId:c}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:s}}}=(0,_.L)();return a.createElement("div",{className:(0,l.Z)(J,i&&X,r&&Q)},i&&a.createElement(k.Z,{tabIndex:-1,className:$}),t.indexOf("/docs/")>-1?a.createElement(de,{docsPluginId:c}):a.createElement(a.Fragment,null),a.createElement(q,{path:t,sidebar:n}),s&&a.createElement(Z,{onClick:o}))}function se(e){return a.createElement("div",{className:ee},"Version:",a.createElement(ce,{docsPluginId:e.docsPluginId,dropdownItemsBefore:[],dropdownItemsAfter:[],items:[]}))}const de=a.memo(se),me=a.memo(ie);var ue=n(13102),be=n(72961);const pe="sidebarVersionSwitch_n00S";var he=n(91262);const Ee=e=>{let{sidebar:t,path:n,docsPluginId:o}=e;const c=(0,be.e)();return a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(_e,{docsPluginId:o}),a.createElement(K,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&c.toggle(),"link"===e.type&&c.toggle()},level:1}))};function ve(e){return a.createElement(ue.Zo,{component:Ee,props:e})}function fe(e){return a.createElement("div",{className:pe},"Version:",a.createElement(ce,{docsPluginId:e.docsPluginId,dropdownItemsBefore:[],dropdownItemsAfter:[],items:["Master","Legacy"]}))}const ge=a.memo(fe),_e=e=>a.createElement(he.Z,null,(()=>location.pathname.indexOf("/docs/")>-1?a.createElement(ge,{docsPluginId:e.docsPluginId}):a.createElement(a.Fragment,null))),ke=a.memo(ve);function Ie(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(me,e),l&&a.createElement(ke,e))}const Ce="expandButton_m80_",Ne="expandButtonIcon_BlDH";function Se(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:Ce,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:Ne}))}const Ze="docSidebarContainer_b6E3",xe="docSidebarContainerHidden_b3ry";function we(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:(null==n?void 0:n.name)??"noSidebar"},t)}function ye(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,f.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),o((e=>!e))}),[o,i]);return a.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,Ze,n&&xe),onTransitionEnd:e=>{e.currentTarget.classList.contains(Ze)&&n&&s(!0)}},a.createElement(we,null,a.createElement(Ie,{sidebar:t,path:c,onCollapse:d,isHidden:i})),i&&a.createElement(Se,{toggleSidebar:d}))}const Te={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Pe(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(Te.docMainContainer,(t||!o)&&Te.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",Te.docItemWrapper,t&&Te.docItemWrapperEnhanced)},n))}const Le="docPage__5DB",Ae="docsWrapper_BCFX";function Be(e){let{children:t}=e;const n=(0,d.V)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:Ae},a.createElement(v,null),a.createElement("div",{className:Le},n&&a.createElement(ye,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(Pe,{hiddenSidebarContainer:l},t)))}var Fe=n(4972),Me=n(90197);function De(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(Fe.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=n;return a.createElement(a.Fragment,null,a.createElement(Me.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:b},a.createElement(Be,null,m)))))}},4972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),l=n(95999),o=n(10833),r=n(50621);function c(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},74477:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>r});var a=n(67294),l=n(902);const o=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(o.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocsVersionProvider");return e}},44908:e=>{e.exports=JSON.parse('["2.10.x","2.9.x","2.8.x","2.7.5","2.7.4","2.7.3","2.7.2","2.7.1","2.7.0","2.6.4","2.6.3","2.6.2","2.6.1","2.6.0","2.5.2","2.5.1","2.5.0","2.4.2","2.4.1","2.4.0","2.3.2","2.3.1","2.3.0","2.2.1","2.2.0","2.1.1-incubating","2.1.0-incubating"]')}}]);