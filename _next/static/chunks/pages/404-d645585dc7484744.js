(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6141:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return o(7789)}])},7789:function(t,e,o){"use strict";o.r(e),o.d(e,{NotFound:function(){return c},__N_SSG:function(){return a}});var n=o(5893);o(7294);var r=o(5566),s=o(113),i=o(3100),a=!0;let c=t=>{let{alltags:e}=t;return(0,s.Lx)({title:"404 - ".concat(i.Z.title),description:"404ページです",image:"".concat(i.Z.url,"/images/site-preview.png"),type:"website",site_name:i.Z.title}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"404 Not Found"}),(0,n.jsx)("h2",{children:"興味のあるタグはありますか？"}),(0,n.jsx)(r.Z,{tags:e})]})};e.default=c},5566:function(t,e,o){"use strict";var n=o(5893),r=o(6625),s=o(9888),i=o(1151),a=o(5029),c=o(1163),u=o(7294),h=o(9477);let l=u.memo(t=>{let{tagpos:e,onClick:o}=t,s=(0,u.useRef)(void 0),[i,a]=(0,u.useState)(!1),c=e.baseColor||"#404040",h=e.hoverColor||"#111";return(0,n.jsx)("mesh",{onClick:o,ref:s,onPointerOver:()=>a(!0),onPointerOut:()=>a(!1),children:(0,n.jsx)(r.x,{color:i?h:c,fontSize:i?.4:.3,maxWidth:60,lineHeight:1,letterSpacing:-.06,textAlign:"left",font:"https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff",anchorX:"center",anchorY:"middle",position:e.pos,rotation:e.rot,children:e.tag})})}),g=u.memo(t=>{let{tags:e,router:o}=t,r=(0,u.useRef)(void 0),s=0,a=0,c=Math.PI/7,h=Math.PI/9,g=t=>t/(Math.PI/180),p=(t,e,o,n)=>t*e*Math.sin(o)*Math.cos(n),f=(t,e,o,n)=>t*e*Math.sin(o)*Math.sin(n),d=(t,e,o)=>t*e*Math.cos(o),m=t=>!(90<g(t)&&270>=g(t)),x=[];e.forEach(t=>{let e=p(.8,4,s,a),o=f(.8,4,s,a),n=d(.8,4,s);x.push({tag:t,pos:[e,o,n],rot:[0,m(a)?s:-s,m(s)?a:-a]}),(s+=c)>=Math.PI&&(s=c,(a+=h)>=2*Math.PI&&(a=h))}),s=Math.PI,a=0;let _=p(.8,4,s,a),w=f(.8,4,s,a),j=d(.8,4,s);return(0,i.A)(()=>r.current.rotation.y+=.002),(0,n.jsxs)("group",{ref:r,children:[x.map((t,e)=>(0,n.jsx)(l,{tagpos:t,onClick:()=>o.push("/tag/".concat(t.tag))},e)),(0,n.jsx)(l,{tagpos:{tag:"ysuzuki19",pos:[_,w,j],rot:[0,m(a)?s:-s,m(s)?a:-a],baseColor:"#000",hoverColor:"#000"},onClick:()=>window.open("https://github.com/ysuzuki19","norefferer")}),(0,n.jsx)(l,{tagpos:{tag:"Welcome to my blog",pos:[0,0,0],rot:[0,0,0],baseColor:"#060",hoverColor:"#060"},onClick:()=>o.push("/page/1")})]})});e.Z=u.memo(t=>{let{tags:e}=t,o=(0,c.useRouter)();return(0,n.jsxs)(a.Xz,{camera:{position:new h.Vector3(0,1,6)},style:{width:"100%",height:"700px",backgroundColor:"#bbb"},children:[(0,n.jsx)(s.z,{}),(0,n.jsx)("ambientLight",{}),(0,n.jsx)(g,{tags:e,router:o})]})})}},function(t){t.O(0,[737,674,774,888,179],function(){return t(t.s=6141)}),_N_E=t.O()}]);