"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[42945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"client-cpp-2.8.3",title:"Client CPP 2.8.3",sidebar_label:"Client CPP 2.8.3"},l=void 0,o={unversionedId:"versioned/client-cpp-2.8.3",id:"versioned/client-cpp-2.8.3",title:"Client CPP 2.8.3",description:"- Fix GCC compilation failure caused by warning macro 14402",source:"@site/release-notes/versioned/client-cpp-2.8.3.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.8.3",permalink:"/release-notes/versioned/client-cpp-2.8.3",draft:!1,tags:[],version:"current",frontMatter:{id:"client-cpp-2.8.3",title:"Client CPP 2.8.3",sidebar_label:"Client CPP 2.8.3"}},c={},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix GCC compilation failure caused by warning macro ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14402"},"14402")),(0,a.kt)("li",{parentName:"ul"},"Fix pulsar client cpp build fail in gcc-4.8.5 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14053"},"14053")),(0,a.kt)("li",{parentName:"ul"},"Fix hasMessageAvailable returns wrong value for last message ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13883"},"13883")),(0,a.kt)("li",{parentName:"ul"},"Fix Version.h not found when CMake binary directory is customized ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13324"},"13324")),(0,a.kt)("li",{parentName:"ul"},"Fix in macOS CMake might find error boost-python libs path ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13193"},"13193"))))}s.isMDXComponent=!0}}]);