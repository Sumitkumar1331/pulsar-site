"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[39172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={id:"functions-worker-for-geo-replication",title:"Configure function workers for geo-replicated clusters",sidebar_label:"Configure function workers for geo-replicated clusters"},a=void 0,s={unversionedId:"functions-worker-for-geo-replication",id:"functions-worker-for-geo-replication",title:"Configure function workers for geo-replicated clusters",description:"When running multiple clusters tied together with geo replication, you need to use a different function namespace for each cluster. Otherwise, all functions share one namespace and potentially schedule assignments across clusters.",source:"@site/docs/functions-worker-for-geo-replication.md",sourceDirName:".",slug:"/functions-worker-for-geo-replication",permalink:"/docs/next/functions-worker-for-geo-replication",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-worker-for-geo-replication.md",tags:[],version:"current",frontMatter:{id:"functions-worker-for-geo-replication",title:"Configure function workers for geo-replicated clusters",sidebar_label:"Configure function workers for geo-replicated clusters"},sidebar:"docsSidebar",previous:{title:"Enable stateful functions",permalink:"/docs/next/functions-worker-stateful"},next:{title:"Troubleshooting",permalink:"/docs/next/functions-worker-troubleshooting"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When running multiple clusters tied together with ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/concepts-replication"},"geo replication"),", you need to use a different function namespace for each cluster. Otherwise, all functions share one namespace and potentially schedule assignments across clusters."),(0,o.kt)("p",null,"For example, if you have two clusters: ",(0,o.kt)("inlineCode",{parentName:"p"},"east-1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"west-1"),", you can configure the function workers for ",(0,o.kt)("inlineCode",{parentName:"p"},"east-1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"west-1")," respectively in the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file. This ensures the two different function workers use distinct sets of topics for their internal coordination."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"pulsarFunctionsCluster: east-1\npulsarFunctionsNamespace: public/functions-east-1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"pulsarFunctionsCluster: west-1\npulsarFunctionsNamespace: public/functions-west-1\n")))}p.isMDXComponent=!0}}]);