(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6430)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),c=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=l.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var x=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,g=o(u.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],k=l.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);l.default.useEffect((function(){var e=w&&r&&i.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,w,b,r,n]);var O={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:l}))}(e,n,d,p,m,v,y,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:n&&n.locale,N=n&&n.isLocaleDomain&&i.getDomainLocale(p,E,n&&n.locales,n&&n.domainLocales);O.href=N||i.addBasePath(i.addLocale(p,E,n&&n.defaultLocale))}return l.default.cloneElement(t,O)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,u=a.useRef(),s=o(a.useState(!1),2),f=s[0],d=s[1],p=o(a.useState(t?t.current:null),2),h=p[0],m=p[1],v=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:r}))}),[n,h,r,f]);return a.useEffect((function(){if(!i&&!f){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&m(t.current)}),[t]),[v,f]};var a=r(7294),l=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},6430:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),o=(r(906),r(9008)),a=r(1664),l={title:"baek.jiyeon dev blog",description:"\ubc31\uc9c0\uc5f0\uc758 \uac1c\ubc1c \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4.",author:"baek.jiyeon",language:"ko-kr",theme:"system",email:"100.paperkite@gmail.com",github:"https://github.com/100paperkite"},i=function(){return(0,n.jsx)("nav",{className:"flex bg-gradient-to-t from-neutral-100/90 to-neutral-100/100 border-neutral-200 border-b justify-between sticky top-0 z-50 space-x-4 w-full",children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:"font-title text-neutral-800 md:text-lg lg:text-xl font-bold pl-5 md:px-8 py-3 md:py-4 hover:text-neutral-600",children:l.author})})})},c=r(7294),u={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=c.createContext&&c.createContext(u),f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function p(e){return e&&e.map((function(e,t){return c.createElement(e.tag,f({key:t},e.attr),p(e.child))}))}function h(e){return function(t){return c.createElement(m,f({attr:f({},e.attr)},t),p(e.child))}}function m(e){var t=function(t){var r,n=e.attr,o=e.size,a=e.title,l=d(e,["attr","size","title"]),i=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),c.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:r,style:f(f({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),a&&c.createElement("title",null,a),e.children)};return void 0!==s?c.createElement(s.Consumer,null,(function(e){return t(e)})):t(u)}function v(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(e)}function y(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}var b=function(){return(0,n.jsxs)("footer",{className:"font-title mt-16 mb-4 flex flex-col items-center text-sm md:text-base",children:[(0,n.jsxs)("div",{className:"mb-3 flex space-x-4",children:[(0,n.jsx)(a.default,{href:"mailto:".concat(l.email),children:(0,n.jsx)("a",{children:(0,n.jsx)(y,{size:"20",className:"text-neutral-600"})})}),(0,n.jsx)(a.default,{href:l.github,children:(0,n.jsx)("a",{children:(0,n.jsx)(v,{size:"20",className:"text-neutral-600"})})})]}),(0,n.jsxs)("div",{className:"mt-1 mb-3 flex space-x-2 text-neutral-500",children:[(0,n.jsx)("div",{children:l.author}),(0,n.jsx)("div",{children:" \u2022 "}),(0,n.jsx)("div",{children:"\xa9 ".concat((new Date).getFullYear())}),(0,n.jsx)("div",{children:" \u2022 "}),(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{children:l.title})})]})]})};function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){x(e,t,r[t])}))}return e}var j=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsx)(i,{}),(0,n.jsx)("main",{className:"flex-grow max-w-screen-md w-full mx-auto",children:(0,n.jsx)(t,g({className:"flex"},r))}),(0,n.jsx)(b,{})]})]})}},906:function(){},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var r=e.O();_N_E=r}]);