(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{f:function(){return u},F:function(){return c}});var r=n(7294),o=n(9008);const i=(0,r.createContext)({setTheme:e=>{},themes:[]}),c=()=>(0,r.useContext)(i),s=["light","dark"],a="(prefers-color-scheme: dark)",u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:c="theme",themes:u=["light","dark"],defaultTheme:m=(n?"system":"light"),attribute:g="data-theme",value:p,children:v})=>{const[y,b]=(0,r.useState)((()=>f(c,m))),[w,T]=(0,r.useState)((()=>f(c))),C=p?Object.values(p):u,k=(0,r.useCallback)((t=>{const n=d(t);T(n),"system"!==y||e||A(n,!1)}),[y,e]),E=(0,r.useRef)(k);E.current=k;const A=(0,r.useCallback)(((e,r=!0,o=!0)=>{let i=(null==p?void 0:p[e])||e;const s=t&&o?h():null;if(r)try{localStorage.setItem(c,e)}catch(e){}if("system"===e&&n){const e=d();i=(null==p?void 0:p[e])||e}if(o){const e=document.documentElement;"class"===g?(e.classList.remove(...C),e.classList.add(i)):e.setAttribute(g,i),null==s||s()}}),[]);(0,r.useEffect)((()=>{const e=function(){return E.current(...[].slice.call(arguments))},t=window.matchMedia(a);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const O=(0,r.useCallback)((t=>{e?A(t,!0,!1):A(t),b(t)}),[e]);return(0,r.useEffect)((()=>{const e=e=>{e.key===c&&O(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[O]),(0,r.useEffect)((()=>{if(!o)return;let t=e&&s.includes(e)?e:y&&s.includes(y)?y:"system"===y&&w||null;document.documentElement.style.setProperty("color-scheme",t)}),[o,y,w,e]),r.createElement(i.Provider,{value:{theme:y,setTheme:O,forcedTheme:e,resolvedTheme:"system"===y?w:y,themes:n?[...u,"system"]:u,systemTheme:n?w:void 0}},r.createElement(l,{forcedTheme:e,storageKey:c,attribute:g,value:p,enableSystem:n,defaultTheme:m,attrs:C}),v)},l=(0,r.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,defaultTheme:c,value:s,attrs:u})=>{const l="class"===n?`var d=document.documentElement.classList;d.remove(${u.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",f=(e,t)=>{e=(null==s?void 0:s[e])||e;const r=t?e:`'${e}'`;return"class"===n?`d.add(${r})`:`d.setAttribute('${n}', ${r})`},h="system"===c;return r.createElement(o.default,null,r.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${l}${f(e)}}()`}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${l}var e=localStorage.getItem('${t}');${h?"":f(c)+";"}if("system"===e||(!e&&${h})){var t="${a}",m=window.matchMedia(t);m.media!==t||m.matches?${f("dark")}:${f("light")}}else if(e) ${s?`var x=${JSON.stringify(s)};`:""}${f(s?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${l}var e=localStorage.getItem("${t}");if(e){${s?`var x=${JSON.stringify(s)};`:""}${f(s?"x[e]":"e",!0)}}else{${f(c)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),f=(e,t)=>{if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},h=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},d=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},6014:function(e,t,n){"use strict";var r=n(6470),o=n.n(r),i=n(4155);t.Z={title:"ys memos",author:"ysuzuki19",description:"ysuzuki's memorandoms",url:"https://ysuzuki19.github.io",GA_MEASUREMENT_ID:"G-M22TSGCN18",keywords:["blog","nextjs","javascript","react"],social:{twitter:"ysuzuki191",github:"ysuzuki19",linkedin:"yuya-suzuki-2005a3178"},articlemeta:["date","description","slug","title","tags"],postperpage:10,frequentThreshold:3,path:{public:o().join(i.cwd(),"public"),posts:o().join(i.cwd(),"posts"),documents:o().join(i.cwd(),"documents"),licenses:o().join(i.cwd(),"documents/licenses"),dict:o().join(i.cwd(),"node_modules/kuromoji/dict")}}},3474:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(4942),o=n(7294),i=n(1163),c=n(425),s=(n(5831),n(2893),n(6014)),a=n(5893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.Component,n=e.pageProps,r=(0,i.useRouter)();return(0,o.useEffect)((function(){var e=function(e){!function(e){window.gtag("event",s.Z.GA_MEASUREMENT_ID,{page_path:e})}(e)};return r.events.on("routeChangeComplete",e),function(){r.events.off("routeChangeComplete",e)}}),[r.events]),(0,a.jsx)(c.f,{attribute:"class",enableSystem:!1,defaultTheme:"dark",children:(0,a.jsx)(t,l({},n))})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3474)}])},2893:function(){},5831:function(){},9008:function(e,t,n){e.exports=n(639)},1163:function(e,t,n){e.exports=n(4651)},6470:function(e,t,n){"use strict";var r=n(4155);function o(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var n,r="",o=0,i=-1,c=0,s=0;s<=e.length;++s){if(s<e.length)n=e.charCodeAt(s);else{if(47===n)break;n=47}if(47===n){if(i===s-1||1===c);else if(i!==s-1&&2===c){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var a=r.lastIndexOf("/");if(a!==r.length-1){-1===a?(r="",o=0):o=(r=r.slice(0,a)).length-1-r.lastIndexOf("/"),i=s,c=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=s,c=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,s):r=e.slice(i+1,s),o=s-i-1;i=s,c=0}else 46===n&&-1!==c?++c:c=-1}return r}var c={resolve:function(){for(var e,t="",n=!1,c=arguments.length-1;c>=-1&&!n;c--){var s;c>=0?s=arguments[c]:(void 0===e&&(e=r.cwd()),s=e),o(s),0!==s.length&&(t=s+"/"+t,n=47===s.charCodeAt(0))}return t=i(t,!n),n?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(o(e),0===e.length)return".";var t=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!t)).length||t||(e="."),e.length>0&&n&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return o(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];o(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":c.normalize(e)},relative:function(e,t){if(o(e),o(t),e===t)return"";if((e=c.resolve(e))===(t=c.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var r=e.length,i=r-n,s=1;s<t.length&&47===t.charCodeAt(s);++s);for(var a=t.length-s,u=i<a?i:a,l=-1,f=0;f<=u;++f){if(f===u){if(a>u){if(47===t.charCodeAt(s+f))return t.slice(s+f+1);if(0===f)return t.slice(s+f)}else i>u&&(47===e.charCodeAt(n+f)?l=f:0===f&&(l=0));break}var h=e.charCodeAt(n+f);if(h!==t.charCodeAt(s+f))break;47===h&&(l=f)}var d="";for(f=n+l+1;f<=r;++f)f!==r&&47!==e.charCodeAt(f)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(s+l):(s+=l,47===t.charCodeAt(s)&&++s,t.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(o(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,c=e.length-1;c>=1;--c)if(47===(t=e.charCodeAt(c))){if(!i){r=c;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"//":e.slice(0,r)},basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');o(e);var n,r=0,i=-1,c=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var s=t.length-1,a=-1;for(n=e.length-1;n>=0;--n){var u=e.charCodeAt(n);if(47===u){if(!c){r=n+1;break}}else-1===a&&(c=!1,a=n+1),s>=0&&(u===t.charCodeAt(s)?-1===--s&&(i=n):(s=-1,i=a))}return r===i?i=a:-1===i&&(i=e.length),e.slice(r,i)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!c){r=n+1;break}}else-1===i&&(c=!1,i=n+1);return-1===i?"":e.slice(r,i)},extname:function(e){o(e);for(var t=-1,n=0,r=-1,i=!0,c=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===t?t=s:1!==c&&(c=1):-1!==t&&(c=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===c||1===c&&t===r-1&&t===n+1?"":e.slice(t,r)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){o(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,r=e.charCodeAt(0),i=47===r;i?(t.root="/",n=1):n=0;for(var c=-1,s=0,a=-1,u=!0,l=e.length-1,f=0;l>=n;--l)if(47!==(r=e.charCodeAt(l)))-1===a&&(u=!1,a=l+1),46===r?-1===c?c=l:1!==f&&(f=1):-1!==c&&(f=-1);else if(!u){s=l+1;break}return-1===c||-1===a||0===f||1===f&&c===a-1&&c===s+1?-1!==a&&(t.base=t.name=0===s&&i?e.slice(1,a):e.slice(s,a)):(0===s&&i?(t.name=e.slice(1,c),t.base=e.slice(1,a)):(t.name=e.slice(s,c),t.base=e.slice(s,a)),t.ext=e.slice(c,a)),s>0?t.dir=e.slice(0,s-1):i&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};c.posix=c,e.exports=c},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,a=[],u=!1,l=-1;function f(){u&&s&&(u=!1,s.length?a=s.concat(a):l=-1,a.length&&h())}function h(){if(!u){var e=c(f);u=!0;for(var t=a.length;t;){for(s=a,a=[];++l<t;)s&&s[l].run();l=-1,t=a.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new d(e,t)),1!==a.length||u||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},4942:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);