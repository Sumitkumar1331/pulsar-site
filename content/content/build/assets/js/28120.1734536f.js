/*! For license information please see 28120.1734536f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[28120],{52924:(e,o,t)=>{t.d(o,{Z:()=>b});var r=t(87462),n=t(63366),l=t(67294),s=t(78987),i=t(94780),a=t(34867);function c(e){return(0,a.Z)("TabPanelUnstyled",e)}(0,t(1588).Z)("TabPanelUnstyled",["root","hidden"]);var u=t(12474);const d=e=>{const{value:o}=e,t=(0,u._i)();if(null===t)throw new Error("No TabContext provided");const r=o!==t.value,n=(0,u.uU)(t,o),l=(0,u.pQ)(t,o);return{hidden:r,getRootProps:()=>({"aria-labelledby":null!=l?l:void 0,hidden:r,id:null!=n?n:void 0})}};var f=t(85893);const p=["children","value","components","componentsProps","component"],b=l.forwardRef((function(e,o){var t;const{children:l,components:a={},componentsProps:u={},component:b}=e,v=(0,n.Z)(e,p),{hidden:m,getRootProps:y}=d(e),h=(0,r.Z)({},e,{hidden:m}),Z=(e=>{const{hidden:o}=e,t={root:["root",o&&"hidden"]};return(0,i.Z)(t,c,{})})(h),P=null!=(t=null!=b?b:a.Root)?t:"div",w=(0,s.Z)({elementType:P,getSlotProps:y,externalSlotProps:u.root,externalForwardedProps:v,additionalProps:{role:"tabpanel",ref:o},ownerState:h,className:Z.root});return(0,f.jsx)(P,(0,r.Z)({},w,{children:!m&&l}))}))},54441:(e,o,t)=>{t.d(o,{Z:()=>y});var r=t(87462),n=t(63366),l=t(67294),s=t(30067),i=t(94780),a=t(34867);function c(e){return(0,a.Z)("TabUnstyled",e)}(0,t(1588).Z)("TabUnstyled",["root","selected","disabled"]);var u=t(12474),d=t(95286);const f=["getRootProps"],p=e=>{var o,t;const{value:l,onChange:s,onClick:i,onFocus:a}=e,c=(0,d.Z)(e),{getRootProps:p}=c,b=(0,n.Z)(c,f),v=(0,u._i)();if(null===v)throw new Error("No TabContext provided");const m=null!=l?l:0,y=v.value===m,h=v.selectionFollowsFocus,Z={role:"tab","aria-controls":null!=(o=(0,u.uU)(v,m))?o:void 0,id:null!=(t=(0,u.pQ)(v,m))?t:void 0,"aria-selected":y,disabled:b.disabled},P=e=>o=>{var t;null==(t=e.onFocus)||t.call(e,o),o.defaultPrevented||(h&&!y&&(s&&s(o,m),v.onSelected(o,m)),a&&a(o))},w=e=>o=>{var t;null==(t=e.onClick)||t.call(e,o),o.defaultPrevented||(y||(s&&s(o,m),v.onSelected(o,m)),i&&i(o))};return(0,r.Z)({getRootProps:(e={})=>{const o=p((0,r.Z)({},e,{onClick:w(e),onFocus:P(e)}));return(0,r.Z)({},o,Z)}},b,{selected:y})};var b=t(78987),v=t(85893);const m=["action","children","value","disabled","onChange","onClick","onFocus","component","components","componentsProps"],y=l.forwardRef((function(e,o){var t;const{action:a,children:u,disabled:d=!1,component:f,components:y={},componentsProps:h={}}=e,Z=(0,n.Z)(e,m),P=l.useRef(),w=(0,s.Z)(P,o),{active:x,focusVisible:S,setFocusVisible:C,selected:g,getRootProps:R}=p((0,r.Z)({},e,{ref:w}));l.useImperativeHandle(a,(()=>({focusVisible:()=>{C(!0),P.current.focus()}})),[C]);const $=(0,r.Z)({},e,{active:x,focusVisible:S,disabled:d,selected:g}),_=(e=>{const{selected:o,disabled:t}=e,r={root:["root",o&&"selected",t&&"disabled"]};return(0,i.Z)(r,c,{})})($),F=null!=(t=null!=f?f:y.Root)?t:"button",E=(0,b.Z)({elementType:F,getSlotProps:R,externalSlotProps:h.root,externalForwardedProps:Z,additionalProps:{ref:o},ownerState:$,className:_.root});return(0,v.jsx)(F,(0,r.Z)({},E,{children:u}))}))},37934:(e,o,t)=>{t.d(o,{Z:()=>P});var r=t(87462),n=t(63366),l=t(67294),s=t(94780),i=t(78987),a=t(34867);function c(e){return(0,a.Z)("TabsListUnstyled",e)}(0,t(1588).Z)("TabsListUnstyled",["root","horizontal","vertical"]);var u=t(30067),d=t(57094),f=(t(59864),t(12474)),p=t(30437);const b=(e,o)=>e?e===o?e.firstChild:o&&o.nextElementSibling?o.nextElementSibling:e.firstChild:null,v=(e,o)=>e?e===o?e.lastChild:o&&o.previousElementSibling?o.previousElementSibling:e.lastChild:null,m=(e,o,t)=>{let r=!1,n=t(e,o);for(;e&&n;){if(n===e.firstChild){if(r)return;r=!0}const o=n.disabled||"true"===n.getAttribute("aria-disabled");if(n.hasAttribute("tabindex")&&!o)return void n.focus();n=t(e,n)}},y=e=>{const{"aria-label":o,"aria-labelledby":t,children:n,ref:s}=e,i=l.createRef(),a=(0,u.Z)(i,s),c=(0,f._i)();if(null===c)throw new Error("No TabContext provided");const{value:y,orientation:h="horizontal",direction:Z="ltr"}=c,P="rtl"===Z,w=e=>o=>{var t;(e=>{const o=i.current,t=(0,d.Z)(o).activeElement;if("tab"!==(null==t?void 0:t.getAttribute("role")))return;let r="horizontal"===h?"ArrowLeft":"ArrowUp",n="horizontal"===h?"ArrowRight":"ArrowDown";switch("horizontal"===h&&P&&(r="ArrowRight",n="ArrowLeft"),e.key){case r:e.preventDefault(),m(o,t,v);break;case n:e.preventDefault(),m(o,t,b);break;case"Home":e.preventDefault(),m(o,null,b);break;case"End":e.preventDefault(),m(o,null,v)}})(o),null==(t=e.onKeyDown)||t.call(e,o)},x=l.useCallback((()=>{const e=new Map;let o=0;return l.Children.map(n,(t=>{if(!l.isValidElement(t))return null;const n=void 0===t.props.value?o:t.props.value;return e.set(n,o),o+=1,l.cloneElement(t,(0,r.Z)({value:n},1===o&&!1===y&&!t.props.tabIndex||y===n?{tabIndex:0}:{tabIndex:-1}))}))}),[n,y]);return{isRtl:P,orientation:h,value:y,processChildren:x,getRootProps:(n={})=>{const l=(0,p.Z)(e),s=(0,r.Z)({},l,n),i={onKeyDown:w(s)},c=(0,r.Z)({},s,i);return(0,r.Z)({"aria-label":o,"aria-labelledby":t,"aria-orientation":"vertical"===h?"vertical":void 0,role:"tablist",ref:a},c)}}};var h=t(85893);const Z=["children","component","components","componentsProps"],P=l.forwardRef(((e,o)=>{var t;const{component:l,components:a={},componentsProps:u={}}=e,d=(0,n.Z)(e,Z),{isRtl:f,orientation:p,getRootProps:b,processChildren:v}=y((0,r.Z)({},e,{ref:o})),m=(0,r.Z)({},e,{isRtl:f,orientation:p}),P=(e=>{const{orientation:o}=e,t={root:["root",o]};return(0,s.Z)(t,c,{})})(m),w=null!=(t=null!=l?l:a.Root)?t:"div",x=(0,i.Z)({elementType:w,getSlotProps:b,externalSlotProps:u.root,externalForwardedProps:d,ownerState:m,className:P.root}),S=v();return(0,h.jsx)(w,(0,r.Z)({},x,{children:S}))}))},12474:(e,o,t)=>{t.d(o,{ZP:()=>a,_i:()=>l,pQ:()=>i,uU:()=>s});var r=t(67294);const n=r.createContext(null);function l(){return r.useContext(n)}function s(e,o){const{idPrefix:t}=e;return null===t?null:`${e.idPrefix}-P-${o}`}function i(e,o){const{idPrefix:t}=e;return null===t?null:`${e.idPrefix}-T-${o}`}const a=n},73584:(e,o,t)=>{t.d(o,{Z:()=>m});var r=t(87462),n=t(63366),l=t(67294),s=t(78987),i=t(94780),a=t(34867);function c(e){return(0,a.Z)("TabsUnstyled",e)}(0,t(1588).Z)("TabsUnstyled",["root","horizontal","vertical"]);var u=t(8925),d=t(57579);const f=e=>{const{value:o,defaultValue:t,onChange:r,orientation:n,direction:s,selectionFollowsFocus:i}=e,[a,c]=(0,u.Z)({controlled:o,default:t,name:"Tabs",state:"value"}),f=(0,d.Z)(),p=l.useCallback(((e,o)=>{c(o),r&&r(e,o)}),[r,c]);return{tabsContextValue:l.useMemo((()=>({idPrefix:f,value:a,onSelected:p,orientation:n,direction:s,selectionFollowsFocus:i})),[f,a,p,n,s,i])}};var p=t(12474),b=t(85893);const v=["children","value","defaultValue","orientation","direction","component","components","componentsProps","onChange","selectionFollowsFocus"],m=l.forwardRef(((e,o)=>{var t;const{children:l,orientation:a="horizontal",direction:u="ltr",component:d,components:m={},componentsProps:y={}}=e,h=(0,n.Z)(e,v),{tabsContextValue:Z}=f(e),P=(0,r.Z)({},e,{orientation:a,direction:u}),w=(e=>{const{orientation:o}=e,t={root:["root",o]};return(0,i.Z)(t,c,{})})(P),x=null!=(t=null!=d?d:m.Root)?t:"div",S=(0,s.Z)({elementType:x,externalSlotProps:y.root,externalForwardedProps:h,additionalProps:{ref:o},ownerState:P,className:w.root});return(0,b.jsx)(x,(0,r.Z)({},S,{children:(0,b.jsx)(p.ZP.Provider,{value:Z,children:l})}))}))},37078:(e,o,t)=>{t.d(o,{Z:()=>n});const r=e=>e,n=(()=>{let e=r;return{configure(o){e=o},generate:o=>e(o),reset(){e=r}}})()},94780:(e,o,t)=>{function r(e,o,t){const r={};return Object.keys(e).forEach((n=>{r[n]=e[n].reduce(((e,r)=>(r&&(e.push(o(r)),t&&t[r]&&e.push(t[r])),e)),[]).join(" ")})),r}t.d(o,{Z:()=>r})},34867:(e,o,t)=>{t.d(o,{Z:()=>l});var r=t(37078);const n={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function l(e,o,t="Mui"){const l=n[o];return l?`${t}-${l}`:`${r.Z.generate(e)}-${o}`}},1588:(e,o,t)=>{t.d(o,{Z:()=>n});var r=t(34867);function n(e,o,t="Mui"){const n={};return o.forEach((o=>{n[o]=(0,r.Z)(e,o,t)})),n}},69921:(e,o)=>{var t,r=Symbol.for("react.element"),n=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen");function y(e){if("object"==typeof e&&null!==e){var o=e.$$typeof;switch(o){case r:switch(e=e.type){case l:case i:case s:case f:case p:return e;default:switch(e=e&&e.$$typeof){case u:case c:case d:case v:case b:case a:return e;default:return o}}case n:return o}}}t=Symbol.for("react.module.reference"),o.ContextConsumer=c,o.ContextProvider=a,o.Element=r,o.ForwardRef=d,o.Fragment=l,o.Lazy=v,o.Memo=b,o.Portal=n,o.Profiler=i,o.StrictMode=s,o.Suspense=f,o.SuspenseList=p,o.isAsyncMode=function(){return!1},o.isConcurrentMode=function(){return!1},o.isContextConsumer=function(e){return y(e)===c},o.isContextProvider=function(e){return y(e)===a},o.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},o.isForwardRef=function(e){return y(e)===d},o.isFragment=function(e){return y(e)===l},o.isLazy=function(e){return y(e)===v},o.isMemo=function(e){return y(e)===b},o.isPortal=function(e){return y(e)===n},o.isProfiler=function(e){return y(e)===i},o.isStrictMode=function(e){return y(e)===s},o.isSuspense=function(e){return y(e)===f},o.isSuspenseList=function(e){return y(e)===p},o.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===i||e===s||e===f||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===a||e.$$typeof===c||e.$$typeof===d||e.$$typeof===t||void 0!==e.getModuleId)},o.typeOf=y},59864:(e,o,t)=>{e.exports=t(69921)},75251:(e,o,t)=>{t(27418);var r=t(67294),n=60103;if(o.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;n=l("react.element"),o.Fragment=l("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,t){var r,l={},c=null,u=null;for(r in void 0!==t&&(c=""+t),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(u=o.ref),o)i.call(o,r)&&!a.hasOwnProperty(r)&&(l[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===l[r]&&(l[r]=o[r]);return{$$typeof:n,type:e,key:c,ref:u,props:l,_owner:s.current}}o.jsx=c,o.jsxs=c},85893:(e,o,t)=>{e.exports=t(75251)}}]);