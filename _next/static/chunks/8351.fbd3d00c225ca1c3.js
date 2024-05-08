"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8351],{2934:function(e,r,t){t.d(r,{B$:function(){return function e(r,t){let a=function(e){let r=JSON.stringify(e,d),t=h.get(r);return null==t&&h.set(r,t=++g),t}(t),p=s.get(r);if(p||s.set(r,p=Object.create(null)),p[a])return new p[a];let m=`_onBeforeCompile${a}`,b=function(e,n){r.onBeforeCompile.call(this,e,n);let o=this.customProgramCacheKey()+"|"+e.vertexShader+"|"+e.fragmentShader,s=u[o];if(!s){let r=function(e,{vertexShader:r,fragmentShader:t},n,a){let{vertexDefs:o,vertexMainIntro:l,vertexMainOutro:f,vertexTransform:s,fragmentDefs:u,fragmentMainIntro:c,fragmentMainOutro:d,fragmentColorTransform:g,customRewriter:h,timeUniform:p}=n;if(o=o||"",l=l||"",f=f||"",u=u||"",c=c||"",d=d||"",(s||h)&&(r=i(r)),(g||h)&&(t=i(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,"\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n"))),h){let e=h({vertexShader:r,fragmentShader:t});r=e.vertexShader,t=e.fragmentShader}if(g){let e=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,r=>(e.push(r),"")),d=`${g}
${e.join("\n")}
${d}`}if(p){let e=`
uniform float ${p};
`;o=e+o,u=e+u}return s&&(r=`vec3 troika_position_${a};
vec3 troika_normal_${a};
vec2 troika_uv_${a};
${r}
`,o=`${o}
void troikaVertexTransform${a}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${s}
}
`,l=`
troika_position_${a} = vec3(position);
troika_normal_${a} = vec3(normal);
troika_uv_${a} = vec2(uv);
troikaVertexTransform${a}(troika_position_${a}, troika_normal_${a}, troika_uv_${a});
${l}
`,r=r.replace(/\b(position|normal|uv)\b/g,(e,r,t,n)=>/\battribute\s+vec[23]\s+$/.test(n.substr(0,t))?r:`troika_${r}_${a}`),e.map&&e.map.channel>0||(r=r.replace(/\bMAP_UV\b/g,`troika_uv_${a}`))),{vertexShader:r=v(r,a,o,l,f),fragmentShader:t=v(t,a,u,c,d)}}(this,e,t,a);s=u[o]=r}e.vertexShader=s.vertexShader,e.fragmentShader=s.fragmentShader,l(e.uniforms,this.uniforms),t.timeUniform&&(e.uniforms[t.timeUniform]={get value(){return Date.now()-f}}),this[m]&&this[m](e)},_=function(){return y(t.chained?r:r.clone())},y=function(e){let n=Object.create(e,E);return Object.defineProperty(n,"baseMaterial",{value:r}),Object.defineProperty(n,"id",{value:c++}),n.uuid=function(){let e=4294967295*Math.random()|0,r=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(o[255&e]+o[e>>8&255]+o[e>>16&255]+o[e>>24&255]+"-"+o[255&r]+o[r>>8&255]+"-"+o[r>>16&15|64]+o[r>>24&255]+"-"+o[63&t|128]+o[t>>8&255]+"-"+o[t>>16&255]+o[t>>24&255]+o[255&n]+o[n>>8&255]+o[n>>16&255]+o[n>>24&255]).toUpperCase()}(),n.uniforms=l({},e.uniforms,t.uniforms),n.defines=l({},e.defines,t.defines),n.defines[`TROIKA_DERIVED_MATERIAL_${a}`]="",n.extensions=l({},e.extensions,t.extensions),n._listeners=void 0,n},E={constructor:{value:_},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return r.customProgramCacheKey()+"|"+a}},onBeforeCompile:{get:()=>b,set(e){this[m]=e}},copy:{writable:!0,configurable:!0,value:function(e){return r.copy.call(this,e),r.isShaderMaterial||r.isDerivedMaterial||(l(this.extensions,e.extensions),l(this.defines,e.defines),l(this.uniforms,n.UniformsUtils.clone(e.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){return y(new r.constructor).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let a=this._depthMaterial;return a||((a=this._depthMaterial=e(r.isDerivedMaterial?r.getDepthMaterial():new n.MeshDepthMaterial({depthPacking:n.RGBADepthPacking}),t)).defines.IS_DEPTH_MATERIAL="",a.uniforms=this.uniforms),a}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let a=this._distanceMaterial;return a||((a=this._distanceMaterial=e(r.isDerivedMaterial?r.getDistanceMaterial():new n.MeshDistanceMaterial,t)).defines.IS_DISTANCE_MATERIAL="",a.uniforms=this.uniforms),a}},dispose:{writable:!0,configurable:!0,value(){let{_depthMaterial:e,_distanceMaterial:t}=this;e&&e.dispose(),t&&t.dispose(),r.dispose.call(this)}}};return p[a]=_,new _}},MW:function(){return a}});var n=t(8718);let a=/\bvoid\s+main\s*\(\s*\)\s*{/g;function i(e){return e.replace(/^[ \t]*#include +<([\w\d./]+)>/gm,function(e,r){let t=n.ShaderChunk[r];return t?i(t):e})}let o=[];for(let e=0;e<256;e++)o[e]=(e<16?"0":"")+e.toString(16);let l=Object.assign||function(){let e=arguments[0];for(let r=1,t=arguments.length;r<t;r++){let t=arguments[r];if(t)for(let r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f=Date.now(),s=new WeakMap,u=new Map,c=1e10;function v(e,r,t,n,i){return(n||i||t)&&(e=e.replace(a,`
${t}
void troikaOrigMain${r}() {`)+`
void main() {
  ${n}
  troikaOrigMain${r}();
  ${i}
}`),e}function d(e,r){return"uniforms"===e?void 0:"function"==typeof r?r.toString():r}let g=0,h=new Map;n.DoubleSide},568:function(e,r,t){function n(){var e=Object.create(null);function r(e,r){var t=void 0;self.troikaDefine=function(e){return t=e};var n=URL.createObjectURL(new Blob(["/** "+e.replace(/\*/g,"")+" **/\n\ntroikaDefine(\n"+r+"\n)"],{type:"application/javascript"}));try{importScripts(n)}catch(e){console.error(e)}return URL.revokeObjectURL(n),delete self.troikaDefine,t}self.addEventListener("message",function(t){var n=t.data,a=n.messageId,i=n.action,o=n.data;try{"registerModule"===i&&function t(n,a){var i=n.id,o=n.name,l=n.dependencies;void 0===l&&(l=[]);var f=n.init;void 0===f&&(f=function(){});var s=n.getTransferables;if(void 0===s&&(s=null),!e[i])try{l=l.map(function(r){return r&&r.isWorkerModule&&(t(r,function(e){if(e instanceof Error)throw e}),r=e[r.id].value),r}),f=r("<"+o+">.init",f),s&&(s=r("<"+o+">.getTransferables",s));var u=null;"function"==typeof f?u=f.apply(void 0,l):console.error("worker module init function failed to rehydrate"),e[i]={id:i,value:u,getTransferables:s},a(u)}catch(e){e&&e.noLog||console.error(e),a(e)}}(o,function(e){e instanceof Error?postMessage({messageId:a,success:!1,error:e.message}):postMessage({messageId:a,success:!0,result:{isCallable:"function"==typeof e}})}),"callModule"===i&&function(r,t){var n,a=r.id,i=r.args;e[a]&&"function"==typeof e[a].value||t(Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var o=(n=e[a]).value.apply(n,i);o&&"function"==typeof o.then?o.then(l,function(e){return t(e instanceof Error?e:Error(""+e))}):l(o)}catch(e){t(e)}function l(r){try{var n=e[a].getTransferables&&e[a].getTransferables(r);n&&Array.isArray(n)&&n.length||(n=void 0),t(r,n)}catch(e){console.error(e),t(e)}}}(o,function(e,r){e instanceof Error?postMessage({messageId:a,success:!1,error:e.message}):postMessage({messageId:a,success:!0,result:e},r||void 0)})}catch(e){postMessage({messageId:a,success:!1,error:e.stack})}})}t.d(r,{Ae:function(){return c},Ch:function(){return function e(r){if((!r||"function"!=typeof r.init)&&!l)throw Error("requires `options.init` function");var t,n=r.dependencies,o=r.init,f=r.getTransferables,u=r.workerId;if(!a())return(t=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t._getInitResult().then(function(r){if("function"==typeof r)return r.apply(void 0,e);throw Error("Worker module function was called but `init` did not return a callable function")})})._getInitResult=function(){var e=r.dependencies,n=r.init,a=Promise.all(e=Array.isArray(e)?e.map(function(e){return e&&e._getInitResult?e._getInitResult():e}):[]).then(function(e){return n.apply(null,e)});return t._getInitResult=function(){return a},a},t;null==u&&(u="#default");var c="workerModule"+ ++i,g=r.name||c,h=null;function p(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];if(!h){h=d(u,"registerModule",p.workerModuleData);var t=function(){h=null,s[u].delete(t)};(s[u]||(s[u]=new Set)).add(t)}return h.then(function(r){if(r.isCallable)return d(u,"callModule",{id:c,args:e});throw Error("Worker module function was called but `init` did not return a callable function")})}return n=n&&n.map(function(r){return"function"!=typeof r||r.workerModuleData||(l=!0,r=e({workerId:u,name:"<"+g+"> function dependency: "+r.name,init:"function(){return (\n"+v(r)+"\n)}"}),l=!1),r&&r.workerModuleData&&(r=r.workerModuleData),r}),p.workerModuleData={isWorkerModule:!0,id:c,name:g,dependencies:n,init:v(o),getTransferables:f&&v(f)},p}}}),t(3454);var a=function(){var e=!1;if("undefined"!=typeof window&&void 0!==window.document)try{new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"}))).terminate(),e=!0}catch(e){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+e.message+"]")}return a=function(){return e},e},i=0,o=0,l=!1,f=Object.create(null),s=Object.create(null),u=Object.create(null);function c(e){s[e]&&s[e].forEach(function(e){e()}),f[e]&&(f[e].terminate(),delete f[e])}function v(e){var r=e.toString();return!/^function/.test(r)&&/^\w+\s*\(/.test(r)&&(r="function "+r),r}function d(e,r,t){return new Promise(function(a,i){var l=++o;u[l]=function(e){e.success?a(e.result):i(Error("Error in worker "+r+" call: "+e.error))},(function(e){var r=f[e];if(!r){var t=v(n);(r=f[e]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+e.replace(/\*/g,"")+" **/\n\n;("+t+")()"],{type:"application/javascript"})))).onmessage=function(e){var r=e.data,t=r.messageId,n=u[t];if(!n)throw Error("WorkerModule response with empty or unknown messageId");delete u[t],n(r)}}return r})(e).postMessage({messageId:l,action:r,data:t})})}},4103:function(e,r){r.Z=function(){return function(e){var r,t,n,a,i={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},o={},l={};o.L=1,l[1]="L",Object.keys(i).forEach(function(e,r){o[e]=1<<r+1,l[o[e]]=e}),Object.freeze(o);var f=o.LRI|o.RLI|o.FSI,s=o.L|o.R|o.AL,u=o.B|o.S|o.WS|o.ON|o.FSI|o.LRI|o.RLI|o.PDI,c=o.BN|o.RLE|o.LRE|o.RLO|o.LRO|o.PDF,v=o.S|o.WS|o.B|f|o.PDI|c,d=null;function g(e){return!function(){if(!d){d=new Map;var e=function(e){if(i.hasOwnProperty(e)){var r=0;i[e].split(",").forEach(function(t){var n=t.split("+"),a=n[0],i=n[1];a=parseInt(a,36),i=i?parseInt(i,36):0,d.set(r+=a,o[e]);for(var l=0;l<i;l++)d.set(++r,o[e])})}};for(var r in i)e(r)}}(),d.get(e.codePointAt(0))||o.L}var h={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function p(e,r){var t,n=0,a=new Map,i=r&&new Map;return e.split(",").forEach(function e(o){if(-1!==o.indexOf("+"))for(var l=+o;l--;)e(t);else{t=o;var f=o.split(">"),s=f[0],u=f[1];s=String.fromCodePoint(n+=parseInt(s,36)),u=String.fromCodePoint(n+=parseInt(u,36)),a.set(s,u),r&&i.set(u,s)}}),{map:a,reverseMap:i}}function m(){if(!r){var e=p(h.pairs,!0),a=e.map,i=e.reverseMap;r=a,t=i,n=p(h.canonical,!1).map}}function b(e){return m(),r.get(e)||null}function _(e){return m(),t.get(e)||null}function y(e){return m(),n.get(e)||null}var E=o.L,w=o.R,x=o.EN,k=o.ES,M=o.ET,R=o.AN,T=o.CS,A=o.B,D=o.S,L=o.ON,I=o.BN,S=o.NSM,U=o.AL,C=o.LRO,j=o.RLO,B=o.LRE,F=o.RLE,N=o.PDF,O=o.LRI,P=o.RLI,G=o.FSI,W=o.PDI;function q(e){return!function(){if(!a){var e=p("14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",!0),r=e.map;e.reverseMap.forEach(function(e,t){r.set(t,e)}),a=r}}(),a.get(e)||null}function $(e,r,t,n){var a=e.length;t=Math.max(0,null==t?0:+t),n=Math.min(a-1,null==n?a-1:+n);var i=[];return r.paragraphs.forEach(function(a){var o=Math.max(t,a.start),l=Math.min(n,a.end);if(o<l){for(var f=r.levels.slice(o,l+1),s=l;s>=o&&g(e[s])&v;s--)f[s]=a.level;for(var u=a.level,c=1/0,d=0;d<f.length;d++){var h=f[d];h>u&&(u=h),h<c&&(c=1|h)}for(var p=u;p>=c;p--)for(var m=0;m<f.length;m++)if(f[m]>=p){for(var b=m;m+1<f.length&&f[m+1]>=p;)m++;m>b&&i.push([b+o,m+o])}}}),i}function X(e,r,t,n){for(var a=$(e,r,t,n),i=[],o=0;o<e.length;o++)i[o]=o;return a.forEach(function(e){for(var r=e[0],t=e[1],n=i.slice(r,t+1),a=n.length;a--;)i[t-a]=n[a]}),i}return e.closingToOpeningBracket=_,e.getBidiCharType=g,e.getBidiCharTypeName=function(e){return l[g(e)]},e.getCanonicalBracket=y,e.getEmbeddingLevels=function(e,r){for(var t=new Uint32Array(e.length),n=0;n<e.length;n++)t[n]=g(e[n]);var a=new Map;function i(e,r){var n=t[e];t[e]=r,a.set(n,a.get(n)-1),n&u&&a.set(u,a.get(u)-1),a.set(r,(a.get(r)||0)+1),r&u&&a.set(u,(a.get(u)||0)+1)}for(var o=new Uint8Array(e.length),l=new Map,d=[],h=null,p=0;p<e.length;p++)h||d.push(h={start:p,end:e.length-1,level:"rtl"===r?1:"ltr"===r?0:rL(p,!1)}),t[p]&A&&(h.end=p,h=null);for(var m=F|B|j|C|f|W|N|A,q=function(e){return e+(1&e?1:2)},$=function(e){return e+(1&e?2:1)},X=0;X<d.length;X++){var z=[{_level:(h=d[X]).level,_override:0,_isolate:0}],V=void 0,Y=0,H=0,K=0;a.clear();for(var Z=h.start;Z<=h.end;Z++){var Q=t[Z];if(V=z[z.length-1],a.set(Q,(a.get(Q)||0)+1),Q&u&&a.set(u,(a.get(u)||0)+1),Q&m){if(Q&(F|B)){o[Z]=V._level;var J=(Q===F?$:q)(V._level);!(J<=125)||Y||H?!Y&&H++:z.push({_level:J,_override:0,_isolate:0})}else if(Q&(j|C)){o[Z]=V._level;var ee=(Q===j?$:q)(V._level);!(ee<=125)||Y||H?!Y&&H++:z.push({_level:ee,_override:Q&j?w:E,_isolate:0})}else if(Q&f){Q&G&&(Q=1===rL(Z+1,!0)?P:O),o[Z]=V._level,V._override&&i(Z,V._override);var er=(Q===P?$:q)(V._level);er<=125&&0===Y&&0===H?(K++,z.push({_level:er,_override:0,_isolate:1,_isolInitIndex:Z})):Y++}else if(Q&W){if(Y>0)Y--;else if(K>0){for(H=0;!z[z.length-1]._isolate;)z.pop();var et=z[z.length-1]._isolInitIndex;null!=et&&(l.set(et,Z),l.set(Z,et)),z.pop(),K--}V=z[z.length-1],o[Z]=V._level,V._override&&i(Z,V._override)}else Q&N?(0===Y&&(H>0?H--:!V._isolate&&z.length>1&&(z.pop(),V=z[z.length-1])),o[Z]=V._level):Q&A&&(o[Z]=h.level)}else o[Z]=V._level,V._override&&Q!==I&&i(Z,V._override)}for(var en=[],ea=null,ei=h.start;ei<=h.end;ei++){var eo=t[ei];if(!(eo&c)){var el=o[ei],ef=eo&f,es=eo===W;ea&&el===ea._level?(ea._end=ei,ea._endsWithIsolInit=ef):en.push(ea={_start:ei,_end:ei,_level:el,_startsWithPDI:es,_endsWithIsolInit:ef})}}for(var eu=[],ec=0;ec<en.length;ec++){var ev=en[ec];if(!ev._startsWithPDI||ev._startsWithPDI&&!l.has(ev._start)){for(var ed=[ea=ev],eg=void 0;ea&&ea._endsWithIsolInit&&null!=(eg=l.get(ea._end));)for(var eh=ec+1;eh<en.length;eh++)if(en[eh]._start===eg){ed.push(ea=en[eh]);break}for(var ep=[],em=0;em<ed.length;em++)for(var eb=ed[em],e_=eb._start;e_<=eb._end;e_++)ep.push(e_);for(var ey=o[ep[0]],eE=h.level,ew=ep[0]-1;ew>=0;ew--)if(!(t[ew]&c)){eE=o[ew];break}var ex=ep[ep.length-1],ek=o[ex],eM=h.level;if(!(t[ex]&f)){for(var eR=ex+1;eR<=h.end;eR++)if(!(t[eR]&c)){eM=o[eR];break}}eu.push({_seqIndices:ep,_sosType:Math.max(eE,ey)%2?w:E,_eosType:Math.max(eM,ek)%2?w:E})}}for(var eT=0;eT<eu.length;eT++){var eA=eu[eT],eD=eA._seqIndices,eL=eA._sosType,eI=eA._eosType,eS=1&o[eD[0]]?w:E;if(a.get(S))for(var eU=0;eU<eD.length;eU++){var eC=eD[eU];if(t[eC]&S){for(var ej=eL,eB=eU-1;eB>=0;eB--)if(!(t[eD[eB]]&c)){ej=t[eD[eB]];break}i(eC,ej&(f|W)?L:ej)}}if(a.get(x))for(var eF=0;eF<eD.length;eF++){var eN=eD[eF];if(t[eN]&x)for(var eO=eF-1;eO>=-1;eO--){var eP=-1===eO?eL:t[eD[eO]];if(eP&s){eP===U&&i(eN,R);break}}}if(a.get(U))for(var eG=0;eG<eD.length;eG++){var eW=eD[eG];t[eW]&U&&i(eW,w)}if(a.get(k)||a.get(T))for(var eq=1;eq<eD.length-1;eq++){var e$=eD[eq];if(t[e$]&(k|T)){for(var eX=0,ez=0,eV=eq-1;eV>=0&&(eX=t[eD[eV]])&c;eV--);for(var eY=eq+1;eY<eD.length&&(ez=t[eD[eY]])&c;eY++);eX===ez&&(t[e$]===k?eX===x:eX&(x|R))&&i(e$,eX)}}if(a.get(x)){for(var eH=0;eH<eD.length;eH++)if(t[eD[eH]]&x){for(var eK=eH-1;eK>=0&&t[eD[eK]]&(M|c);eK--)i(eD[eK],x);for(eH++;eH<eD.length&&t[eD[eH]]&(M|c|x);eH++)t[eD[eH]]!==x&&i(eD[eH],x)}}if(a.get(M)||a.get(k)||a.get(T))for(var eZ=0;eZ<eD.length;eZ++){var eQ=eD[eZ];if(t[eQ]&(M|k|T)){i(eQ,L);for(var eJ=eZ-1;eJ>=0&&t[eD[eJ]]&c;eJ--)i(eD[eJ],L);for(var e1=eZ+1;e1<eD.length&&t[eD[e1]]&c;e1++)i(eD[e1],L)}}if(a.get(x))for(var e2=0,e0=eL;e2<eD.length;e2++){var e3=eD[e2],e4=t[e3];e4&x?e0===E&&i(e3,E):e4&s&&(e0=e4)}if(a.get(u)){for(var e5=w|x|R,e6=e5|E,e7=[],e9=[],e8=0;e8<eD.length;e8++)if(t[eD[e8]]&u){var re=e[eD[e8]],rr=void 0;if(null!==b(re)){if(e9.length<63)e9.push({char:re,seqIndex:e8});else break}else if(null!==(rr=_(re)))for(var rt=e9.length-1;rt>=0;rt--){var rn=e9[rt].char;if(rn===rr||rn===_(y(re))||b(y(rn))===re){e7.push([e9[rt].seqIndex,e8]),e9.length=rt;break}}}e7.sort(function(e,r){return e[0]-r[0]});for(var ra=0;ra<e7.length;ra++){for(var ri=e7[ra],ro=ri[0],rl=ri[1],rf=!1,rs=0,ru=ro+1;ru<rl;ru++){var rc=eD[ru];if(t[rc]&e6){rf=!0;var rv=t[rc]&e5?w:E;if(rv===eS){rs=rv;break}}}if(rf&&!rs){rs=eL;for(var rd=ro-1;rd>=0;rd--){var rg=eD[rd];if(t[rg]&e6){var rh=t[rg]&e5?w:E;rs=rh!==eS?rh:eS;break}}}if(rs){if(t[eD[ro]]=t[eD[rl]]=rs,rs!==eS){for(var rp=ro+1;rp<eD.length;rp++)if(!(t[eD[rp]]&c)){g(e[eD[rp]])&S&&(t[eD[rp]]=rs);break}}if(rs!==eS){for(var rm=rl+1;rm<eD.length;rm++)if(!(t[eD[rm]]&c)){g(e[eD[rm]])&S&&(t[eD[rm]]=rs);break}}}}for(var rb=0;rb<eD.length;rb++)if(t[eD[rb]]&u){for(var r_=rb,ry=rb,rE=eL,rw=rb-1;rw>=0;rw--)if(t[eD[rw]]&c)r_=rw;else{rE=t[eD[rw]]&e5?w:E;break}for(var rx=eI,rk=rb+1;rk<eD.length;rk++)if(t[eD[rk]]&(u|c))ry=rk;else{rx=t[eD[rk]]&e5?w:E;break}for(var rM=r_;rM<=ry;rM++)t[eD[rM]]=rE===rx?rE:eS;rb=ry}}}for(var rR=h.start;rR<=h.end;rR++){var rT=o[rR],rA=t[rR];if(1&rT?rA&(E|x|R)&&o[rR]++:rA&w?o[rR]++:rA&(R|x)&&(o[rR]+=2),rA&c&&(o[rR]=0===rR?h.level:o[rR-1]),rR===h.end||g(e[rR])&(D|A))for(var rD=rR;rD>=0&&g(e[rD])&v;rD--)o[rD]=h.level}}return{levels:o,paragraphs:d};function rL(r,n){for(var a=r;a<e.length;a++){var i=t[a];if(i&(w|U))return 1;if(i&(A|E)||n&&i===W)break;if(i&f){var o=function(r){for(var n=1,a=r+1;a<e.length;a++){var i=t[a];if(i&A)break;if(i&W){if(0==--n)return a}else i&f&&n++}return -1}(a);a=-1===o?e.length:o}}return 0}},e.getMirroredCharacter=q,e.getMirroredCharactersMap=function(e,r,t,n){var a=e.length;t=Math.max(0,null==t?0:+t),n=Math.min(a-1,null==n?a-1:+n);for(var i=new Map,o=t;o<=n;o++)if(1&r[o]){var l=q(e[o]);null!==l&&i.set(o,l)}return i},e.getReorderSegments=$,e.getReorderedIndices=X,e.getReorderedString=function(e,r,t,n){var a=X(e,r,t,n),i=[].concat(e);return a.forEach(function(t,n){i[n]=(1&r.levels[t]?q(e[t]):null)||e[t]}),i.join("")},e.openingToClosingBracket=b,Object.defineProperty(e,"__esModule",{value:!0}),e}({})}},2368:function(e,r,t){t.d(r,{Z:function(){return n}});function n(){return function(e){function r(e,r){for(var t,n,a,i,o,l=/([MLQCZ])([^MLQCZ]*)/g;t=l.exec(e);){var f=t[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(e){return parseFloat(e)});switch(t[1]){case"M":i=n=f[0],o=a=f[1];break;case"L":(f[0]!==i||f[1]!==o)&&r("L",i,o,i=f[0],o=f[1]);break;case"Q":r("Q",i,o,i=f[2],o=f[3],f[0],f[1]);break;case"C":r("C",i,o,i=f[4],o=f[5],f[0],f[1],f[2],f[3]);break;case"Z":(i!==n||o!==a)&&r("L",i,o,n,a)}}}function t(e,t,n){void 0===n&&(n=16);var a={x:0,y:0};r(e,function(e,r,i,o,l,f,s,u,c){switch(e){case"L":t(r,i,o,l);break;case"Q":for(var v=r,d=i,g=1;g<n;g++)!function(e,r,t,n,a,i,o,l){var f=1-o;l.x=f*f*e+2*f*o*t+o*o*a,l.y=f*f*r+2*f*o*n+o*o*i}(r,i,f,s,o,l,g/(n-1),a),t(v,d,a.x,a.y),v=a.x,d=a.y;break;case"C":for(var h=r,p=i,m=1;m<n;m++)!function(e,r,t,n,a,i,o,l,f,s){var u=1-f;s.x=u*u*u*e+3*u*u*f*t+3*u*f*f*a+f*f*f*o,s.y=u*u*u*r+3*u*u*f*n+3*u*f*f*i+f*f*f*l}(r,i,f,s,u,c,o,l,m/(n-1),a),t(h,p,a.x,a.y),h=a.x,p=a.y}})}var n="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a=new WeakMap,i={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function o(e,r){var t=e.getContext?e.getContext("webgl",i):e,n=a.get(t);if(!n){var o="undefined"!=typeof WebGL2RenderingContext&&t instanceof WebGL2RenderingContext,l={},f={},s={},u=-1,c=[];function v(e){var r=l[e];if(!r&&!(r=l[e]=t.getExtension(e)))throw Error(e+" not supported");return r}function d(e,r){var n=t.createShader(r);return t.shaderSource(n,e),t.compileShader(n),n}function g(){l={},f={},s={},u=-1,c.length=0}t.canvas.addEventListener("webglcontextlost",function(e){g(),e.preventDefault()},!1),a.set(t,n={gl:t,isWebGL2:o,getExtension:v,withProgram:function(e,r,n,a){if(!f[e]){var i={},l={},s=t.createProgram();t.attachShader(s,d(r,t.VERTEX_SHADER)),t.attachShader(s,d(n,t.FRAGMENT_SHADER)),t.linkProgram(s),f[e]={program:s,transaction:function(e){t.useProgram(s),e({setUniform:function(e,r){for(var n=[],a=arguments.length-2;a-- >0;)n[a]=arguments[a+2];var i=l[r]||(l[r]=t.getUniformLocation(s,r));t["uniform"+e].apply(t,[i].concat(n))},setAttribute:function(e,r,n,a,l){var f=i[e];f||(f=i[e]={buf:t.createBuffer(),loc:t.getAttribLocation(s,e),data:null}),t.bindBuffer(t.ARRAY_BUFFER,f.buf),t.vertexAttribPointer(f.loc,r,t.FLOAT,!1,0,0),t.enableVertexAttribArray(f.loc),o?t.vertexAttribDivisor(f.loc,a):v("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(f.loc,a),l!==f.data&&(t.bufferData(t.ARRAY_BUFFER,l,n),f.data=l)}})}}}f[e].transaction(a)},withTexture:function(e,r){u++;try{t.activeTexture(t.TEXTURE0+u);var n=s[e];n||(n=s[e]=t.createTexture(),t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST)),t.bindTexture(t.TEXTURE_2D,n),r(n,u)}finally{u--}},withTextureFramebuffer:function(e,r,n){var a=t.createFramebuffer();c.push(a),t.bindFramebuffer(t.FRAMEBUFFER,a),t.activeTexture(t.TEXTURE0+r),t.bindTexture(t.TEXTURE_2D,e),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0);try{n(a)}finally{t.deleteFramebuffer(a),t.bindFramebuffer(t.FRAMEBUFFER,c[--c.length-1]||null)}},handleContextLoss:g})}r(n)}function l(e,r,t,a,i,l,f,s){void 0===f&&(f=15),void 0===s&&(s=null),o(e,function(e){var o=e.gl,u=e.withProgram;(0,e.withTexture)("copy",function(e,c){o.texImage2D(o.TEXTURE_2D,0,o.RGBA,i,l,0,o.RGBA,o.UNSIGNED_BYTE,r),u("copy",n,"precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",function(e){var r=e.setUniform;(0,e.setAttribute)("aUV",2,o.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),r("1i","image",c),o.bindFramebuffer(o.FRAMEBUFFER,s||null),o.disable(o.BLEND),o.colorMask(8&f,4&f,2&f,1&f),o.viewport(t,a,i,l),o.scissor(t,a,i,l),o.drawArrays(o.TRIANGLES,0,3)})})})}var f=Object.freeze({__proto__:null,withWebGLContext:o,renderImageData:l,resizeWebGLCanvasWithoutClearing:function(e,r,t){var n=e.width,a=e.height;o(e,function(i){var o=i.gl,f=new Uint8Array(n*a*4);o.readPixels(0,0,n,a,o.RGBA,o.UNSIGNED_BYTE,f),e.width=r,e.height=t,l(o,f,0,0,n,a)})}});function s(e,r,n,a,i,o){void 0===o&&(o=1);var l=new Uint8Array(e*r),f=a[2]-a[0],s=a[3]-a[1],u=[];t(n,function(e,r,t,n){u.push({x1:e,y1:r,x2:t,y2:n,minX:Math.min(e,t),minY:Math.min(r,n),maxX:Math.max(e,t),maxY:Math.max(r,n)})}),u.sort(function(e,r){return e.maxX-r.maxX});for(var c=0;c<e;c++)for(var v=0;v<r;v++){var d=function(e,r){for(var t=1/0,n=1/0,a=u.length;a--;){var i=u[a];if(i.maxX+n<=e)break;if(e+n>i.minX&&r-n<i.maxY&&r+n>i.minY){var o=function(e,r,t,n,a,i){var o=a-t,l=i-n,f=o*o+l*l,s=f?Math.max(0,Math.min(1,((e-t)*o+(r-n)*l)/f)):0,u=e-(t+s*o),c=r-(n+s*l);return u*u+c*c}(e,r,i.x1,i.y1,i.x2,i.y2);o<t&&(n=Math.sqrt(t=o))}}return function(e,r){for(var t=0,n=u.length;n--;){var a=u[n];if(a.maxX<=e)break;a.y1>r!=a.y2>r&&e<(a.x2-a.x1)*(r-a.y1)/(a.y2-a.y1)+a.x1&&(t+=a.y1<a.y2?1:-1)}return 0!==t}(e,r)&&(n=-n),n}(a[0]+f*(c+.5)/e,a[1]+s*(v+.5)/r),g=Math.pow(1-Math.abs(d)/i,o)/2;d<0&&(g=1-g),g=Math.max(0,Math.min(255,Math.round(255*g))),l[v*e+c]=g}return l}function u(e,r,t,n,a,i,o,l,f,s){void 0===i&&(i=1),void 0===l&&(l=0),void 0===f&&(f=0),void 0===s&&(s=0),c(e,r,t,n,a,i,o,null,l,f,s)}function c(e,r,t,n,a,i,o,f,u,c,v){void 0===i&&(i=1),void 0===u&&(u=0),void 0===c&&(c=0),void 0===v&&(v=0);for(var d=s(e,r,t,n,a,i),g=new Uint8Array(4*d.length),h=0;h<d.length;h++)g[4*h+v]=d[h];l(o,g,u,c,e,r,1<<3-v,f)}var v=Object.freeze({__proto__:null,generate:s,generateIntoCanvas:u,generateIntoFramebuffer:c}),d=new Float32Array([0,0,2,0,0,2]),g=null,h=!1,p={},m=new WeakMap;function b(e){if(!h&&!w(e))throw Error("WebGL generation not supported")}function _(e,r,t,n,a,i,l){if(void 0===i&&(i=1),void 0===l&&(l=null),!l&&!(l=g)){var f="function"==typeof OffscreenCanvas?new OffscreenCanvas(1,1):"undefined"!=typeof document?document.createElement("canvas"):null;if(!f)throw Error("OffscreenCanvas or DOM canvas not supported");l=g=f.getContext("webgl",{depth:!1})}b(l);var s=new Uint8Array(e*r*4);o(l,function(o){var l=o.gl,f=o.withTexture,u=o.withTextureFramebuffer;f("readable",function(o,f){l.texImage2D(l.TEXTURE_2D,0,l.RGBA,e,r,0,l.RGBA,l.UNSIGNED_BYTE,null),u(o,f,function(o){E(e,r,t,n,a,i,l,o,0,0,0),l.readPixels(0,0,e,r,l.RGBA,l.UNSIGNED_BYTE,s)})})});for(var u=new Uint8Array(e*r),c=0,v=0;c<s.length;c+=4)u[v++]=s[c];return u}function y(e,r,t,n,a,i,o,l,f,s){void 0===i&&(i=1),void 0===l&&(l=0),void 0===f&&(f=0),void 0===s&&(s=0),E(e,r,t,n,a,i,o,null,l,f,s)}function E(e,r,a,i,l,f,s,u,c,v,g){void 0===f&&(f=1),void 0===c&&(c=0),void 0===v&&(v=0),void 0===g&&(g=0),b(s);var h=[];t(a,function(e,r,t,n){h.push(e,r,t,n)}),h=new Float32Array(h),o(s,function(t){var a=t.gl,o=t.isWebGL2,s=t.getExtension,p=t.withProgram,m=t.withTexture,b=t.withTextureFramebuffer,_=t.handleContextLoss;if(m("rawDistances",function(t,m){(e!==t._lastWidth||r!==t._lastHeight)&&a.texImage2D(a.TEXTURE_2D,0,a.RGBA,t._lastWidth=e,t._lastHeight=r,0,a.RGBA,a.UNSIGNED_BYTE,null),p("main","precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}","precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",function(n){var u=n.setAttribute,c=n.setUniform,v=!o&&s("ANGLE_instanced_arrays"),g=!o&&s("EXT_blend_minmax");u("aUV",2,a.STATIC_DRAW,0,d),u("aLineSegment",4,a.DYNAMIC_DRAW,1,h),c.apply(void 0,["4f","uGlyphBounds"].concat(i)),c("1f","uMaxDistance",l),c("1f","uExponent",f),b(t,m,function(t){a.enable(a.BLEND),a.colorMask(!0,!0,!0,!0),a.viewport(0,0,e,r),a.scissor(0,0,e,r),a.blendFunc(a.ONE,a.ONE),a.blendEquationSeparate(a.FUNC_ADD,o?a.MAX:g.MAX_EXT),a.clear(a.COLOR_BUFFER_BIT),o?a.drawArraysInstanced(a.TRIANGLES,0,3,h.length/4):v.drawArraysInstancedANGLE(a.TRIANGLES,0,3,h.length/4)})}),p("post",n,"precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",function(t){t.setAttribute("aUV",2,a.STATIC_DRAW,0,d),t.setUniform("1i","tex",m),a.bindFramebuffer(a.FRAMEBUFFER,u),a.disable(a.BLEND),a.colorMask(0===g,1===g,2===g,3===g),a.viewport(c,v,e,r),a.scissor(c,v,e,r),a.drawArrays(a.TRIANGLES,0,3)})}),a.isContextLost())throw _(),Error("webgl context lost")})}function w(e){var r=e&&e!==g?e.canvas||e:p,t=m.get(r);if(void 0===t){h=!0;var n=null;try{var a=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],i=_(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,e);(t=i&&a.length===i.length&&i.every(function(e,r){return e===a[r]}))||(n="bad trial run results",console.info(a,i))}catch(e){t=!1,n=e.message}n&&console.warn("WebGL SDF generation not supported:",n),h=!1,m.set(r,t)}return t}var x=Object.freeze({__proto__:null,generate:_,generateIntoCanvas:y,generateIntoFramebuffer:E,isSupported:w});return e.forEachPathCommand=r,e.generate=function(e,r,t,n,a,i){void 0===a&&(a=Math.max(n[2]-n[0],n[3]-n[1])/2),void 0===i&&(i=1);try{return _.apply(x,arguments)}catch(e){return console.info("WebGL SDF generation failed, falling back to JS",e),s.apply(v,arguments)}},e.generateIntoCanvas=function(e,r,t,n,a,i,o,l,f,s){void 0===a&&(a=Math.max(n[2]-n[0],n[3]-n[1])/2),void 0===i&&(i=1),void 0===l&&(l=0),void 0===f&&(f=0),void 0===s&&(s=0);try{return y.apply(x,arguments)}catch(e){return console.info("WebGL SDF generation failed, falling back to JS",e),u.apply(v,arguments)}},e.javascript=v,e.pathToLineSegments=t,e.webgl=x,e.webglUtils=f,Object.defineProperty(e,"__esModule",{value:!0}),e}({})}}}]);