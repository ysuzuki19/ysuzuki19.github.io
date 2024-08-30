"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6779],{6060:function(e,n,t){t.d(n,{c:function(){return d}});var r=t(4279),i=t(9753),a=t(4917);function d(e){var n={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:a.Z(e.nodes(),function(n){var t=e.node(n),i=e.parent(n),a={v:n};return r.Z(t)||(a.value=t),r.Z(i)||(a.parent=i),a}),edges:a.Z(e.edges(),function(n){var t=e.edge(n),i={v:n.v,w:n.w};return r.Z(n.name)||(i.name=n.name),r.Z(t)||(i.value=t),i})};return r.Z(e.graph())||(n.value=i.Z(e.graph())),n}t(6960)},6779:function(e,n,t){t.r(n),t.d(n,{render:function(){return C}});var r=t(5100),i=t(5673);t(3066),t(7932);var a=t(3556),d=t(265),c=t(6060),o=t(5625),s=new Map,l=new Map,g=new Map,f=(0,a.eW)(()=>{l.clear(),g.clear(),s.clear()},"clear"),h=(0,a.eW)((e,n)=>{let t=l.get(n)||[];return a.cM.trace("In isDescendant",n," ",e," = ",t.includes(e)),t.includes(e)},"isDescendant"),u=(0,a.eW)((e,n)=>{let t=l.get(n)||[];return a.cM.info("Descendants of ",n," is ",t),a.cM.info("Edge is ",e),e.v!==n&&e.w!==n&&(t?t.includes(e.v)||h(e.v,n)||h(e.w,n)||t.includes(e.w):(a.cM.debug("Tilt, ",n,",not in descendants"),!1))},"edgeInCluster"),p=(0,a.eW)((e,n,t,r)=>{a.cM.warn("Copying children of ",e,"root",r,"data",n.node(e),r);let i=n.children(e)||[];e!==r&&i.push(e),a.cM.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach(i=>{if(n.children(i).length>0)p(i,n,t,r);else{let d=n.node(i);a.cM.info("cp ",i," to ",r," with parent ",e),t.setNode(i,d),r!==n.parent(i)&&(a.cM.warn("Setting parent",i,n.parent(i)),t.setParent(i,n.parent(i))),e!==r&&i!==e?(a.cM.debug("Setting parent",i,e),t.setParent(i,e)):(a.cM.info("In copy ",e,"root",r,"data",n.node(e),r),a.cM.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));let c=n.edges(i);a.cM.debug("Copying Edges",c),c.forEach(i=>{a.cM.info("Edge",i);let d=n.edge(i.v,i.w,i.name);a.cM.info("Edge data",d,r);try{u(i,r)?(a.cM.info("Copying as ",i.v,i.w,d,i.name),t.setEdge(i.v,i.w,d,i.name),a.cM.info("newGraph edges ",t.edges(),t.edge(t.edges()[0]))):a.cM.info("Skipping copy of edge ",i.v,"-->",i.w," rootId: ",r," clusterId:",e)}catch(e){a.cM.error(e)}})}a.cM.debug("Removing node",i),n.removeNode(i)})},"copy"),w=(0,a.eW)((e,n)=>{let t=n.children(e),r=[...t];for(let i of t)g.set(i,e),r=[...r,...w(i,n)];return r},"extractDescendants"),M=(0,a.eW)((e,n,t)=>{let r=e.edges().filter(e=>e.v===n||e.w===n),i=e.edges().filter(e=>e.v===t||e.w===t),a=r.map(e=>({v:e.v===n?t:e.v,w:e.w===n?n:e.w})),d=i.map(e=>({v:e.v,w:e.w}));return a.filter(e=>d.some(n=>e.v===n.v&&e.w===n.w))},"findCommonEdges"),v=(0,a.eW)((e,n,t)=>{let r;let i=n.children(e);if(a.cM.trace("Searching children of id ",e,i),i.length<1)return e;for(let e of i){let i=v(e,n,t),a=M(n,t,i);if(i){if(!(a.length>0))return i;r=i}}return r},"findNonClusterChild"),m=(0,a.eW)(e=>s.has(e)&&s.get(e).externalConnections&&s.has(e)?s.get(e).id:e,"getAnchorId"),y=(0,a.eW)((e,n)=>{if(!e||n>10){a.cM.debug("Opting out, no graph ");return}for(let n of(a.cM.debug("Opting in, graph "),e.nodes().forEach(function(n){e.children(n).length>0&&(a.cM.warn("Cluster identified",n," Replacement id in edges: ",v(n,e,n)),l.set(n,w(n,e)),s.set(n,{id:v(n,e,n),clusterData:e.node(n)}))}),e.nodes().forEach(function(n){let t=e.children(n),r=e.edges();t.length>0?(a.cM.debug("Cluster identified",n,l),r.forEach(e=>{h(e.v,n)^h(e.w,n)&&(a.cM.warn("Edge: ",e," leaves cluster ",n),a.cM.warn("Descendants of XXX ",n,": ",l.get(n)),s.get(n).externalConnections=!0)})):a.cM.debug("Not a cluster ",n,l)}),s.keys())){let t=s.get(n).id,r=e.parent(t);r!==n&&s.has(r)&&!s.get(r).externalConnections&&(s.get(n).id=r)}e.edges().forEach(function(n){let t=e.edge(n);a.cM.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),a.cM.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let r=n.v,i=n.w;if(a.cM.warn("Fix XXX",s,"ids:",n.v,n.w,"Translating: ",s.get(n.v)," --- ",s.get(n.w)),s.get(n.v)&&s.get(n.w)&&s.get(n.v)===s.get(n.w)){a.cM.warn("Fixing and trying link to self - removing XXX",n.v,n.w,n.name),a.cM.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),r=m(n.v),i=m(n.w),e.removeEdge(n.v,n.w,n.name);let d=n.w+"---"+n.v+"---1",c=n.w+"---"+n.v+"---2";e.setNode(d,{domId:d,id:d,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),e.setNode(c,{domId:c,id:c,labelStyle:"",padding:0,shape:"labelRect",style:"",width:10,height:10});let o=structuredClone(t),s=structuredClone(t),l=structuredClone(t);o.label="",o.arrowTypeEnd="none",o.id=n.name+"-cyclic-special-1",s.arrowTypeEnd="none",s.id=n.name+"-cyclic-special-mid",l.label="",o.fromCluster=n.v,l.toCluster=n.v,l.id=n.name+"-cyclic-special-2",e.setEdge(r,d,o,n.name+"-cyclic-special-0"),e.setEdge(d,c,s,n.name+"-cyclic-special-1"),e.setEdge(c,i,l,n.name+"-cyclic-special-2")}else if(s.get(n.v)||s.get(n.w)){if(a.cM.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),r=m(n.v),i=m(n.w),e.removeEdge(n.v,n.w,n.name),r!==n.v){let i=e.parent(r);s.get(i).externalConnections=!0,t.fromCluster=n.v}if(i!==n.w){let r=e.parent(i);s.get(r).externalConnections=!0,t.toCluster=n.w}a.cM.warn("Fix Replacing with XXX",r,i,n.name),e.setEdge(r,i,t,n.name)}}),a.cM.warn("Adjusted Graph",c.c(e)),X(e,0),a.cM.trace(s)},"adjustClustersAndEdges"),X=(0,a.eW)((e,n)=>{if(a.cM.warn("extractor - ",n,c.c(e),e.children("D")),n>10){a.cM.error("Bailing out");return}let t=e.nodes(),r=!1;for(let n of t){let t=e.children(n);r=r||t.length>0}if(!r){a.cM.debug("Done, no node has children",e.nodes());return}for(let r of(a.cM.debug("Nodes = ",t,n),t))if(a.cM.debug("Extracting node",r,s,s.has(r)&&!s.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",n),s.has(r)){if(!s.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){a.cM.warn("Cluster without external connections, without a parent and with children",r,n);let t="TB"===e.graph().rankdir?"LR":"TB";s.get(r)?.clusterData?.dir&&(t=s.get(r).clusterData.dir,a.cM.warn("Fixing dir",s.get(r).clusterData.dir,t));let i=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:t,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});a.cM.warn("Old graph before copy",c.c(e)),p(r,e,i,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:s.get(r).clusterData,label:s.get(r).label,graph:i}),a.cM.warn("New graph after copy node: (",r,")",c.c(i)),a.cM.debug("Old graph after copy",c.c(e))}else a.cM.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!s.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),n),a.cM.debug(s)}else a.cM.debug("Not a cluster",r,n);for(let r of(t=e.nodes(),a.cM.warn("New list of nodes",t),t)){let t=e.node(r);a.cM.warn(" Now next level",r,t),t.clusterNode&&X(t.graph,n+1)}},"extractor"),E=(0,a.eW)((e,n)=>{if(0===n.length)return[];let t=Object.assign([],n);return n.forEach(n=>{let r=e.children(n),i=E(e,r);t=[...t,...i]}),t},"sorter"),N=(0,a.eW)(e=>E(e,e.children()),"sortNodesByHierarchy"),b=(0,a.eW)(async(e,n,t,o,l,g)=>{a.cM.info("Graph in recursive render: XXX",c.c(n),l);let f=n.graph().rankdir;a.cM.trace("Dir in recursive render - dir:",f);let h=e.insert("g").attr("class","root");n.nodes()?a.cM.info("Recursive render XXX",n.nodes()):a.cM.info("No nodes found for",n),n.edges().length>0&&a.cM.info("Recursive edges",n.edge(n.edges()[0]));let u=h.insert("g").attr("class","clusters"),p=h.insert("g").attr("class","edgePaths"),w=h.insert("g").attr("class","edgeLabels"),M=h.insert("g").attr("class","nodes");await Promise.all(n.nodes().map(async function(e){let i=n.node(e);if(void 0!==l){let t=JSON.parse(JSON.stringify(l.clusterData));a.cM.trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",t.height,"\nParent cluster",l.height),n.setNode(l.id,t),n.parent(e)||(a.cM.trace("Setting parent",e,l.id),n.setParent(e,l.id,t))}if(a.cM.info("(Insert) Node XXX"+e+": "+JSON.stringify(n.node(e))),i?.clusterNode){a.cM.info("Cluster identified XBX",e,i.width,n.node(e));let{ranksep:d,nodesep:c}=n.graph();i.graph.setGraph({...i.graph.graph(),ranksep:d+25,nodesep:c});let s=await b(M,i.graph,t,o,n.node(e),g),l=s.elem;(0,r.jr)(i,l),i.diff=s.diff||0,a.cM.info("New compound node after recursive render XAX",e,"width",i.width,"height",i.height),(0,r.Yn)(l,i)}else n.children(e).length>0?(a.cM.info("Cluster - the non recursive path XBX",e,i.id,i,i.width,"Graph:",n),a.cM.info(v(i.id,n)),s.set(i.id,{id:v(i.id,n),node:i})):(a.cM.trace("Node - the non recursive path XAX",e,i.id,i),await (0,r.Lf)(M,n.node(e),f))}));let m=(0,a.eW)(async()=>{let e=n.edges().map(async function(e){let t=n.edge(e.v,e.w,e.name);a.cM.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),a.cM.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(n.edge(e))),a.cM.info("Fix",s,"ids:",e.v,e.w,"Translating: ",s.get(e.v),s.get(e.w)),await (0,r.I_)(w,t)});await Promise.all(e)},"processEdges");await m(),a.cM.info("Graph before layout:",JSON.stringify(c.c(n))),a.cM.info("############################################# XXX"),a.cM.info("###                Layout                 ### XXX"),a.cM.info("############################################# XXX"),(0,d.bK)(n),a.cM.info("Graph after layout:",JSON.stringify(c.c(n)));let y=0,{subGraphTitleTotalMargin:X}=(0,i.L)(g);return await Promise.all(N(n).map(async function(e){let t=n.node(e);if(a.cM.info("Position XBX => "+e+": ("+t.x,","+t.y,") width: ",t.width," height: ",t.height),t?.clusterNode)t.y+=X,a.cM.info("A tainted cluster node XBX1",e,t.id,t.width,t.height,t.x,t.y,n.parent(e)),s.get(t.id).node=t,(0,r.aH)(t);else if(n.children(e).length>0){a.cM.info("A pure cluster node XBX1",e,t.id,t.x,t.y,t.width,t.height,n.parent(e)),t.height+=X,n.node(t.parentId);let i=t?.padding/2||0,d=t?.labelBBox?.height||0;a.cM.debug("OffsetY",d-i||0,"labelHeight",d,"halfPadding",i),await (0,r.us)(u,t),s.get(t.id).node=t}else{let e=n.node(t.parentId);t.y+=X/2,a.cM.info("A regular node XBX1 - using the padding",t.id,"parent",t.parentId,t.width,t.height,t.x,t.y,"offsetY",t.offsetY,"parent",e,e?.offsetY,t),(0,r.aH)(t)}})),n.edges().forEach(function(e){let i=n.edge(e);a.cM.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(i),i),i.points.forEach(e=>e.y+=X/2);let d=n.node(e.v);var c=n.node(e.w);let l=(0,r.QP)(p,i,s,t,d,c,o);(0,r.Jj)(i,l)}),n.nodes().forEach(function(e){let t=n.node(e);a.cM.info(e,t.type,t.diff),t.isGroup&&(y=t.diff)}),a.cM.warn("Returning from recursive render XAX",h,y),{elem:h,diff:y}},"recursiveRender"),C=(0,a.eW)(async(e,n)=>{let t=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),i=n.select("g");(0,r.DQ)(i,e.markers,e.type,e.diagramId),(0,r.eT)(),(0,r.gU)(),(0,r.ZH)(),f(),e.nodes.forEach(e=>{t.setNode(e.id,{...e}),e.parentId&&t.setParent(e.id,e.parentId)}),a.cM.debug("Edges:",e.edges),e.edges.forEach(e=>{t.setEdge(e.start,e.end,{...e},e.id)}),a.cM.warn("Graph at first:",JSON.stringify(c.c(t))),y(t),a.cM.warn("Graph after:",JSON.stringify(c.c(t)));let d=(0,a.nV)();await b(i,t,e.type,e.diagramId,void 0,d)},"render")},9753:function(e,n,t){var r=t(1990);n.Z=function(e){return(0,r.Z)(e,4)}}}]);