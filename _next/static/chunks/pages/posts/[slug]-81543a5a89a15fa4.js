(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return i},MDXProvider:function(){return m},mdx:function(){return b},useMDXComponents:function(){return f},withMDXComponents:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){return function(t){var n=f(t.components);return r.createElement(e,c({},t,{components:n}))}},f=function(e){var t=r.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=f(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=f(n),m=o,d=s["".concat(a,".").concat(m)]||s[m]||p[m]||c;return n?r.createElement(d,l(l({ref:t},i),{},{components:n})):r.createElement(d,l({ref:t},i))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"===typeof e?e:o,a[1]=l;for(var i=2;i<c;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8093:function(e,t,n){"use strict";var r=n(7294),o=n(3905);function c(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var l=c(r),u=a(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:n={},lazy:o}){const[c,a]=r.useState(!o||"undefined"===typeof window);r.useEffect((()=>{if(o){const e=window.requestIdleCallback((()=>{a(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const i=r.useMemo((()=>{const n=Object.assign({mdx:u.mdx,React:l.default},t),r=Object.keys(n),o=Object.values(n),c=Reflect.construct(Function,r.concat(`${e}; return MDXContent;`));return c.apply(c,o)}),[t,e]);if(!c)return l.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const s=l.default.createElement(u.MDXProvider,{components:n},l.default.createElement(i,null));return o?l.default.createElement("div",null,s):s}},9808:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(1752)}])},5828:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),o=n(1664),c=n(7059),a=function(){return(0,r.jsx)("nav",{className:"flex justify-between sticky top-0 z-50 space-x-4 py-2",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:"text-neutral-800 hover:text-neutral-600 md:text-xl font-bold mx-4 md:mx-6 my-1 md:my-2 p-2 ",children:c.Z.author})})})},l=n(4578),u=function(){return(0,r.jsxs)("footer",{className:"font-title py-4 sm:py-8 flex flex-col items-center text-neutral-600",children:[(0,r.jsx)("div",{className:"flex flex-row my-2",children:(0,r.jsxs)("div",{className:"flex items-center py-1",children:[(0,r.jsx)("a",{className:"m-2 ",href:c.Z.github,children:(0,r.jsx)(l.MG0,{className:"w-7 h-7"})}),(0,r.jsx)("a",{className:"m-2",href:"mailto:".concat(c.Z.email),children:(0,r.jsx)(l.cee,{className:"w-7 h-7"})})]})}),(0,r.jsxs)("span",{className:"text-sm md:text-base text-neutral-500",children:[c.Z.author," \xa9 ","".concat((new Date).getFullYear())]})]})},i=function(e){var t=e.children;return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,r.jsx)(a,{}),(0,r.jsx)("main",{className:"max-w-[820px] px-4 w-full mx-auto flex-grow font-body",children:t}),(0,r.jsx)(u,{})]})}},7059:function(e,t){"use strict";t.Z={title:"baek.jiyeon dev blog",description:"\ubc31\uc9c0\uc5f0\uc758 \uac1c\ubc1c \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4.",author:"baek.jiyeon",language:"ko-kr",theme:"system",email:"100.paperkite@gmail.com",github:"https://github.com/100paperkite"}},1752:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return p}});var r=n(5893),o=n(8093),c=n(5828),a=function(e){var t=e.title,n=e.date;e.tags;return(0,r.jsxs)("div",{className:"border-b border-1 pt-2 sm:pt-4 md:pt-6 border-dashed border-neutral-400",children:[(0,r.jsx)("small",{className:"mb-1 md:mb-2 pl-1 text-neutral-500",children:n}),(0,r.jsx)("h1",{className:"font-title",children:t})]})};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=function(e){var t=e.mdxSource,n=i(e,["mdxSource"]);return(0,r.jsx)(c.Z,{children:(0,r.jsxs)("article",{className:"max-w-none px-2 md:px-4 py-2 md:py-4 prose prose-neutral prose-sm sm:prose-base md:prose-md",children:[(0,r.jsx)(a,u({},n)),(0,r.jsx)(o.R,u({},t))]})})};function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=!0;function p(e){var t=e.frontMatter,n=e.mdxSource;return(0,r.jsx)(s,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}({mdxSource:n},t))}}},function(e){e.O(0,[876,949,774,888,179],(function(){return t=9808,e(e.s=t);var t}));var t=e.O();_N_E=t}]);