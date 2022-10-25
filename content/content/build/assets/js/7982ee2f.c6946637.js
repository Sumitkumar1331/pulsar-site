"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[91719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,h=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"client-java-2.6.3",title:"Client Java 2.6.3",sidebar_label:"Client Java 2.6.3"},l=void 0,o={unversionedId:"versioned/client-java-2.6.3",id:"versioned/client-java-2.6.3",title:"Client Java 2.6.3",description:"- Fix the connection leak #6524",source:"@site/release-notes/versioned/client-java-2.6.3.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.6.3",permalink:"/release-notes/versioned/client-java-2.6.3",draft:!1,tags:[],version:"current",frontMatter:{id:"client-java-2.6.3",title:"Client Java 2.6.3",sidebar_label:"Client Java 2.6.3"}},p={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix the connection leak ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6524"},"#6524")),(0,a.kt)("li",{parentName:"ul"},"Cancel the sendtimeout task for the producer after creation failure ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8497"},"#8497")),(0,a.kt)("li",{parentName:"ul"},"Fix the typo in ",(0,a.kt)("inlineCode",{parentName:"li"},"pulsar-client-all")," module's pom.xml file ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8543"},"#8543")),(0,a.kt)("li",{parentName:"ul"},"Add more information in send timeout exception ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8931"},"#8931")),(0,a.kt)("li",{parentName:"ul"},"Fix the unavailable hash range condition ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9041"},"#9041")),(0,a.kt)("li",{parentName:"ul"},"Fix NPE when ",(0,a.kt)("inlineCode",{parentName:"li"},"MultiTopicsConsumerImpl")," receives null-value messages ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9113"},"#9113")),(0,a.kt)("li",{parentName:"ul"},"Fix the issue with the incoming message size that is introduced by issue #9113 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9182"},"#9182"))))}s.isMDXComponent=!0}}]);