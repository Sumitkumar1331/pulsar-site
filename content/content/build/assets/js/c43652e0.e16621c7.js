"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35860],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22331:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={id:"pulsar-cs-1.0.2",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},s=void 0,i={unversionedId:"versioned/pulsar-cs-1.0.2",id:"versioned/pulsar-cs-1.0.2",title:"Pulsar DotPulsar",description:"Fixed",source:"@site/release-notes/versioned/pulsar-cs-1.0.2.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-1.0.2",permalink:"/release-notes/versioned/pulsar-cs-1.0.2",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-cs-1.0.2",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},l={},c=[{value:"Fixed",id:"fixed",level:2}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"fixed"},"Fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Closing a consumer or reader while the broker is streaming messages could take down the connection causing other consumers, readers, and producers of the connection to reconnect"),(0,o.kt)("li",{parentName:"ul"},"In some circumstances, the protocol bytes could be misread leading to wrong message parsing")))}p.isMDXComponent=!0}}]);