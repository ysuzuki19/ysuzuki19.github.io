"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3880],{3349:function(e,t,r){r.d(t,{a:function(){return addHtmlLabel}});var a=r(6225);function addHtmlLabel(e,t){var r=e.append("foreignObject").attr("width","100000"),n=r.append("xhtml:div");n.attr("xmlns","http://www.w3.org/1999/xhtml");var l=t.label;switch(typeof l){case"function":n.insert(l);break;case"object":n.insert(function(){return l});break;default:n.html(l)}a.bg(n,t.labelStyle),n.style("display","inline-block"),n.style("white-space","nowrap");var i=n.node().getBoundingClientRect();return r.attr("width",i.width).attr("height",i.height),r}},6225:function(e,t,r){r.d(t,{$p:function(){return applyClass},O1:function(){return edgeToId},WR:function(){return applyTransition},bF:function(){return isSubgraph},bg:function(){return applyStyle}});var a=r(7514),n=r(3234);function isSubgraph(e,t){return!!e.children(t).length}function edgeToId(e){return escapeId(e.v)+":"+escapeId(e.w)+":"+escapeId(e.name)}var l=/:/g;function escapeId(e){return e?String(e).replace(l,"\\:"):""}function applyStyle(e,t){t&&e.attr("style",t)}function applyClass(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function applyTransition(e,t){var r=t.graph();if(a.Z(r)){var l=r.transition;if(n.Z(l))return l(e)}return e}},3880:function(e,t,r){r.d(t,{diagram:function(){return _}});var a=r(6320),n=r(5625),l=r(8077),i=r(8661),o=r(7452),s=r(3688),d=r(870),c=r(1644),h=r(6225),p={normal:function(e,t,r,a){var n=e.append("marker").attr("id",t).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0");h.bg(n,r[a+"Style"]),r[a+"Class"]&&n.attr("class",r[a+"Class"])},vee:function(e,t,r,a){var n=e.append("marker").attr("id",t).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0");h.bg(n,r[a+"Style"]),r[a+"Class"]&&n.attr("class",r[a+"Class"])},undirected:function(e,t,r,a){var n=e.append("marker").attr("id",t).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0");h.bg(n,r[a+"Style"]),r[a+"Class"]&&n.attr("class",r[a+"Class"])}},u=r(3349);function addLabel(e,t,r){var a,n=t.label,l=e.append("g");"svg"===t.labelType?(l.node().appendChild(t.label),h.bg(l,t.labelStyle)):"string"!=typeof n||"html"===t.labelType?(0,u.a)(l,t):function(e,t){for(var r=e.append("text"),a=(function(e){for(var t,r="",a=!1,n=0;n<e.length;++n)(t=e[n],a)?("n"===t?r+="\n":r+=t,a=!1):"\\"===t?a=!0:r+=t;return r})(t.label).split("\n"),n=0;n<a.length;n++)r.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(a[n]);return h.bg(r,t.labelStyle),r}(l,t);var i=l.node().getBBox();switch(r){case"top":a=-t.height/2;break;case"bottom":a=t.height/2-i.height;break;default:a=-i.height/2}return l.attr("transform","translate("+-i.width/2+","+a+")"),l}var createClusters=function(e,t){var r=t.nodes().filter(function(e){return h.bF(t,e)}),a=e.selectAll("g.cluster").data(r,function(e){return e});h.WR(a.exit(),t).style("opacity",0).remove();var n=a.enter().append("g").attr("class","cluster").attr("id",function(e){return t.node(e).id}).style("opacity",0).each(function(e){var r=t.node(e),a=l.Ys(this);l.Ys(this).append("rect"),addLabel(a.append("g").attr("class","label"),r,r.clusterLabelPos)});return a=a.merge(n),(a=h.WR(a,t).style("opacity",1)).selectAll("rect").each(function(e){var r=t.node(e),a=l.Ys(this);h.bg(a,r.style)}),a};let createEdgeLabels=function(e,t){var r,a=e.selectAll("g.edgeLabel").data(t.edges(),function(e){return h.O1(e)}).classed("update",!0);return a.exit().remove(),a.enter().append("g").classed("edgeLabel",!0).style("opacity",0),(a=e.selectAll("g.edgeLabel")).each(function(e){var r=l.Ys(this);r.select(".label").remove();var a=t.edge(e),n=addLabel(r,t.edge(e),0).classed("label",!0),i=n.node().getBBox();a.labelId&&n.attr("id",a.labelId),o.Z(a,"width")||(a.width=i.width),o.Z(a,"height")||(a.height=i.height)}),r=a.exit?a.exit():a.selectAll(null),h.WR(r,t).style("opacity",0).remove(),a};var g=r(6749),f=r(4379);function intersectNode(e,t){return e.intersect(t)}var createEdgePaths=function(e,t,r){var a,n=e.selectAll("g.edgePath").data(t.edges(),function(e){return h.O1(e)}).classed("update",!0),i=((a=n.enter().append("g").attr("class","edgePath").style("opacity",0)).append("path").attr("class","path").attr("d",function(e){var r=t.edge(e),a=t.node(e.v).elem,n=f.Z(r.points.length).map(function(){var e,t;return e=a.getBBox(),{x:(t=a.ownerSVGElement.getScreenCTM().inverse().multiply(a.getScreenCTM()).translate(e.width/2,e.height/2)).e,y:t.f}});return createLine(r,n)}),a.append("defs"),a);!function(e,t){var r=e.exit();h.WR(r,t).style("opacity",0).remove()}(n,t);var o=void 0!==n.merge?n.merge(i):n;return h.WR(o,t).style("opacity",1),o.each(function(e){var r=l.Ys(this),a=t.edge(e);a.elem=this,a.id&&r.attr("id",a.id),h.$p(r,a.class,(r.classed("update")?"update ":"")+"edgePath")}),o.selectAll("path.path").each(function(e){var r=t.edge(e);r.arrowheadId=g.Z("arrowhead");var a=l.Ys(this).attr("marker-end",function(){var e,t;return"url("+(e=location.href,t=r.arrowheadId,e.split("#")[0]+"#"+t)+")"}).style("fill","none");h.WR(a,t).attr("d",function(e){var r,a,n,l;return r=t.edge(e),a=t.node(e.v),n=t.node(e.w),(l=r.points.slice(1,r.points.length-1)).unshift(intersectNode(a,l[0])),l.push(intersectNode(n,l[l.length-1])),createLine(r,l)}),h.bg(a,r.style)}),o.selectAll("defs *").remove(),o.selectAll("defs").each(function(e){var a=t.edge(e);(0,r[a.arrowhead])(l.Ys(this),a.arrowheadId,a,"arrowhead")}),o};function createLine(e,t){var r=(l.jvg||l.YPS.line)().x(function(e){return e.x}).y(function(e){return e.y});return(r.curve||r.interpolate)(e.curve),r(t)}var y=r(1666),createNodes=function(e,t,r){var a,n=t.nodes().filter(function(e){return!h.bF(t,e)}),i=e.selectAll("g.node").data(n,function(e){return e}).classed("update",!0);return i.exit().remove(),i.enter().append("g").attr("class","node").style("opacity",0),(i=e.selectAll("g.node")).each(function(e){var a=t.node(e),n=l.Ys(this);h.$p(n,a.class,(n.classed("update")?"update ":"")+"node"),n.select("g.label").remove();var i=n.append("g").attr("class","label"),s=addLabel(i,a),d=r[a.shape],c=y.Z(s.node().getBBox(),"width","height");a.elem=this,a.id&&n.attr("id",a.id),a.labelId&&i.attr("id",a.labelId),o.Z(a,"width")&&(c.width=a.width),o.Z(a,"height")&&(c.height=a.height),c.width+=a.paddingLeft+a.paddingRight,c.height+=a.paddingTop+a.paddingBottom,i.attr("transform","translate("+(a.paddingLeft-a.paddingRight)/2+","+(a.paddingTop-a.paddingBottom)/2+")");var p=l.Ys(this);p.select(".label-container").remove();var u=d(p,c,a).classed("label-container",!0);h.bg(u,a.style);var g=u.node().getBBox();a.width=g.width,a.height=g.height}),a=i.exit?i.exit():i.selectAll(null),h.WR(a,t).style("opacity",0).remove(),i};function intersectEllipse(e,t,r,a){var n=e.x,l=e.y,i=n-a.x,o=l-a.y,s=Math.sqrt(t*t*o*o+r*r*i*i),d=Math.abs(t*r*i/s);a.x<n&&(d=-d);var c=Math.abs(t*r*o/s);return a.y<l&&(c=-c),{x:n+d,y:l+c}}function intersectPolygon(e,t,r){var a=e.x,n=e.y,l=[],i=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY;t.forEach(function(e){i=Math.min(i,e.x),o=Math.min(o,e.y)});for(var s=a-e.width/2-i,d=n-e.height/2-o,c=0;c<t.length;c++){var h=t[c],p=t[c<t.length-1?c+1:0],u=function(e,t,r,a){var n,l,i,o,s,d,c,h,p,u,g,f,y;if(n=t.y-e.y,i=e.x-t.x,s=t.x*e.y-e.x*t.y,p=n*r.x+i*r.y+s,u=n*a.x+i*a.y+s,(0===p||0===u||!(p*u>0))&&(l=a.y-r.y,o=r.x-a.x,d=a.x*r.y-r.x*a.y,c=l*e.x+o*e.y+d,h=l*t.x+o*t.y+d,!(0!==c&&0!==h&&c*h>0)&&0!=(g=n*o-l*i)))return f=Math.abs(g/2),{x:(y=i*d-o*s)<0?(y-f)/g:(y+f)/g,y:(y=l*s-n*d)<0?(y-f)/g:(y+f)/g}}(e,r,{x:s+h.x,y:d+h.y},{x:s+p.x,y:d+p.y});u&&l.push(u)}return l.length?(l.length>1&&l.sort(function(e,t){var a=e.x-r.x,n=e.y-r.y,l=Math.sqrt(a*a+n*n),i=t.x-r.x,o=t.y-r.y,s=Math.sqrt(i*i+o*o);return l<s?-1:l===s?0:1}),l[0]):(console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",e),e)}function intersectRect(e,t){var r,a,n=e.x,l=e.y,i=t.x-n,o=t.y-l,s=e.width/2,d=e.height/2;return Math.abs(o)*s>Math.abs(i)*d?(o<0&&(d=-d),r=0===o?0:d*i/o,a=d):(i<0&&(s=-s),r=s,a=0===i?0:s*o/i),{x:n+r,y:l+a}}var b={rect:function(e,t,r){var a=e.insert("rect",":first-child").attr("rx",r.rx).attr("ry",r.ry).attr("x",-t.width/2).attr("y",-t.height/2).attr("width",t.width).attr("height",t.height);return r.intersect=function(e){return intersectRect(r,e)},a},ellipse:function(e,t,r){var a=t.width/2,n=t.height/2,l=e.insert("ellipse",":first-child").attr("x",-t.width/2).attr("y",-t.height/2).attr("rx",a).attr("ry",n);return r.intersect=function(e){return intersectEllipse(r,a,n,e)},l},circle:function(e,t,r){var a=Math.max(t.width,t.height)/2,n=e.insert("circle",":first-child").attr("x",-t.width/2).attr("y",-t.height/2).attr("r",a);return r.intersect=function(e){return intersectEllipse(r,a,a,e)},n},diamond:function(e,t,r){var a=t.width*Math.SQRT2/2,n=t.height*Math.SQRT2/2,l=[{x:0,y:-n},{x:-a,y:0},{x:0,y:n},{x:a,y:0}],i=e.insert("polygon",":first-child").attr("points",l.map(function(e){return e.x+","+e.y}).join(" "));return r.intersect=function(e){return intersectPolygon(r,l,e)},i}};function render(){var fn=function(e,t){t.nodes().forEach(function(e){var r=t.node(e);o.Z(r,"label")||t.children(e).length||(r.label=e),o.Z(r,"paddingX")&&s.Z(r,{paddingLeft:r.paddingX,paddingRight:r.paddingX}),o.Z(r,"paddingY")&&s.Z(r,{paddingTop:r.paddingY,paddingBottom:r.paddingY}),o.Z(r,"padding")&&s.Z(r,{paddingLeft:r.padding,paddingRight:r.padding,paddingTop:r.padding,paddingBottom:r.padding}),s.Z(r,w),d.Z(["paddingLeft","paddingRight","paddingTop","paddingBottom"],function(e){r[e]=Number(r[e])}),o.Z(r,"width")&&(r._prevWidth=r.width),o.Z(r,"height")&&(r._prevHeight=r.height)}),t.edges().forEach(function(e){var r=t.edge(e);o.Z(r,"label")||(r.label=""),s.Z(r,x)});var r=createOrSelectGroup(e,"output"),a=createOrSelectGroup(r,"clusters"),n=createOrSelectGroup(r,"edgePaths"),i=createEdgeLabels(createOrSelectGroup(r,"edgeLabels"),t),u=createNodes(createOrSelectGroup(r,"nodes"),t,b);(0,c.bK)(t),function(e,t){function translate(e){var r=t.node(e);return"translate("+r.x+","+r.y+")"}e.filter(function(){return!l.Ys(this).classed("update")}).attr("transform",translate),h.WR(e,t).style("opacity",1).attr("transform",translate)}(u,t),function(e,t){function translate(e){var r=t.edge(e);return o.Z(r,"x")?"translate("+r.x+","+r.y+")":""}e.filter(function(){return!l.Ys(this).classed("update")}).attr("transform",translate),h.WR(e,t).style("opacity",1).attr("transform",translate)}(i,t),createEdgePaths(n,t,p),function(e,t){var r=e.filter(function(){return!l.Ys(this).classed("update")});function translate(e){var r=t.node(e);return"translate("+r.x+","+r.y+")"}r.attr("transform",translate),h.WR(e,t).style("opacity",1).attr("transform",translate),h.WR(r.selectAll("rect"),t).attr("width",function(e){return t.node(e).width}).attr("height",function(e){return t.node(e).height}).attr("x",function(e){return-t.node(e).width/2}).attr("y",function(e){return-t.node(e).height/2})}(createClusters(a,t),t),d.Z(t.nodes(),function(e){var r=t.node(e);o.Z(r,"_prevWidth")?r.width=r._prevWidth:delete r.width,o.Z(r,"_prevHeight")?r.height=r._prevHeight:delete r.height,delete r._prevWidth,delete r._prevHeight})};return fn.createNodes=function(e){return arguments.length?(createNodes=e,fn):createNodes},fn.createClusters=function(e){return arguments.length?(createClusters=e,fn):createClusters},fn.createEdgeLabels=function(e){return arguments.length?(createEdgeLabels=e,fn):createEdgeLabels},fn.createEdgePaths=function(e){return arguments.length?(createEdgePaths=e,fn):createEdgePaths},fn.shapes=function(e){return arguments.length?(b=e,fn):b},fn.arrows=function(e){return arguments.length?(p=e,fn):p},fn}var w={paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},x={arrowhead:"normal",curve:l.c_6};function createOrSelectGroup(e,t){var r=e.select("g."+t);return r.empty()&&(r=e.append("g").attr("class",t)),r}var v=r(9879);function question(e,t,r){let a=t.width,n=t.height,l=(a+n)*.9,i=[{x:l/2,y:0},{x:l,y:-l/2},{x:l/2,y:-l},{x:0,y:-l/2}],o=insertPolygonShape(e,l,l,i);return r.intersect=function(e){return intersectPolygon(r,i,e)},o}function hexagon(e,t,r){let a=t.height,n=a/4,l=t.width+2*n,i=[{x:n,y:0},{x:l-n,y:0},{x:l,y:-a/2},{x:l-n,y:-a},{x:n,y:-a},{x:0,y:-a/2}],o=insertPolygonShape(e,l,a,i);return r.intersect=function(e){return intersectPolygon(r,i,e)},o}function rect_left_inv_arrow(e,t,r){let a=t.width,n=t.height,l=[{x:-n/2,y:0},{x:a,y:0},{x:a,y:-n},{x:-n/2,y:-n},{x:0,y:-n/2}],i=insertPolygonShape(e,a,n,l);return r.intersect=function(e){return intersectPolygon(r,l,e)},i}function lean_right(e,t,r){let a=t.width,n=t.height,l=[{x:-2*n/6,y:0},{x:a-n/6,y:0},{x:a+2*n/6,y:-n},{x:n/6,y:-n}],i=insertPolygonShape(e,a,n,l);return r.intersect=function(e){return intersectPolygon(r,l,e)},i}function lean_left(e,t,r){let a=t.width,n=t.height,l=[{x:2*n/6,y:0},{x:a+n/6,y:0},{x:a-2*n/6,y:-n},{x:-n/6,y:-n}],i=insertPolygonShape(e,a,n,l);return r.intersect=function(e){return intersectPolygon(r,l,e)},i}function trapezoid(e,t,r){let a=t.width,n=t.height,l=[{x:-2*n/6,y:0},{x:a+2*n/6,y:0},{x:a-n/6,y:-n},{x:n/6,y:-n}],i=insertPolygonShape(e,a,n,l);return r.intersect=function(e){return intersectPolygon(r,l,e)},i}function inv_trapezoid(e,t,r){let a=t.width,n=t.height,l=[{x:n/6,y:0},{x:a-n/6,y:0},{x:a+2*n/6,y:-n},{x:-2*n/6,y:-n}],i=insertPolygonShape(e,a,n,l);return r.intersect=function(e){return intersectPolygon(r,l,e)},i}function rect_right_inv_arrow(e,t,r){let a=t.width,n=t.height,l=[{x:0,y:0},{x:a+n/2,y:0},{x:a,y:-n/2},{x:a+n/2,y:-n},{x:0,y:-n}],i=insertPolygonShape(e,a,n,l);return r.intersect=function(e){return intersectPolygon(r,l,e)},i}function stadium(e,t,r){let a=t.height,n=t.width+a/4,l=e.insert("rect",":first-child").attr("rx",a/2).attr("ry",a/2).attr("x",-n/2).attr("y",-a/2).attr("width",n).attr("height",a);return r.intersect=function(e){return intersectRect(r,e)},l}function subroutine(e,t,r){let a=t.width,n=t.height,l=[{x:0,y:0},{x:a,y:0},{x:a,y:-n},{x:0,y:-n},{x:0,y:0},{x:-8,y:0},{x:a+8,y:0},{x:a+8,y:-n},{x:-8,y:-n},{x:-8,y:0}],i=insertPolygonShape(e,a,n,l);return r.intersect=function(e){return intersectPolygon(r,l,e)},i}function cylinder(e,t,r){let a=t.width,n=a/2,l=n/(2.5+a/50),i=t.height+l,o="M 0,"+l+" a "+n+","+l+" 0,0,0 "+a+" 0 a "+n+","+l+" 0,0,0 "+-a+" 0 l 0,"+i+" a "+n+","+l+" 0,0,0 "+a+" 0 l 0,"+-i,s=e.attr("label-offset-y",l).insert("path",":first-child").attr("d",o).attr("transform","translate("+-a/2+","+-(i/2+l)+")");return r.intersect=function(e){let t=intersectRect(r,e),a=t.x-r.x;if(0!=n&&(Math.abs(a)<r.width/2||Math.abs(a)==r.width/2&&Math.abs(t.y-r.y)>r.height/2-l)){let i=l*l*(1-a*a/(n*n));0!=i&&(i=Math.sqrt(i)),i=l-i,e.y-r.y>0&&(i=-i),t.y+=i}return t},s}function insertPolygonShape(e,t,r,a){return e.insert("polygon",":first-child").attr("points",a.map(function(e){return e.x+","+e.y}).join(" ")).attr("transform","translate("+-t/2+","+r/2+")")}r(7484),r(7967),r(7856),r(9354);let m={addToRender:function(e){e.shapes().question=question,e.shapes().hexagon=hexagon,e.shapes().stadium=stadium,e.shapes().subroutine=subroutine,e.shapes().cylinder=cylinder,e.shapes().rect_left_inv_arrow=rect_left_inv_arrow,e.shapes().lean_right=lean_right,e.shapes().lean_left=lean_left,e.shapes().trapezoid=trapezoid,e.shapes().inv_trapezoid=inv_trapezoid,e.shapes().rect_right_inv_arrow=rect_right_inv_arrow},addToRenderV2:function(e){e({question}),e({hexagon}),e({stadium}),e({subroutine}),e({cylinder}),e({rect_left_inv_arrow}),e({lean_right}),e({lean_left}),e({trapezoid}),e({inv_trapezoid}),e({rect_right_inv_arrow})}},k={},addVertices=function(e,t,r,a,n,o){let s=a?a.select(`[id="${r}"]`):(0,l.Ys)(`[id="${r}"]`),d=n||document,c=Object.keys(e);c.forEach(function(r){let a;let n=e[r],l="default";n.classes.length>0&&(l=n.classes.join(" "));let c=(0,i.k)(n.styles),h=void 0!==n.text?n.text:n.id;if((0,i.m)((0,i.c)().flowchart.htmlLabels)){let e={label:h.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};(a=(0,u.a)(s,e).node()).parentNode.removeChild(a)}else{let e=d.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",c.labelStyle.replace("color:","fill:"));let t=h.split(i.e.lineBreakRegex);for(let r of t){let t=d.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}a=e}let p=0,g="";switch(n.type){case"round":p=5,g="rect";break;case"square":case"group":default:g="rect";break;case"diamond":g="question";break;case"hexagon":g="hexagon";break;case"odd":case"odd_right":g="rect_left_inv_arrow";break;case"lean_right":g="lean_right";break;case"lean_left":g="lean_left";break;case"trapezoid":g="trapezoid";break;case"inv_trapezoid":g="inv_trapezoid";break;case"circle":g="circle";break;case"ellipse":g="ellipse";break;case"stadium":g="stadium";break;case"subroutine":g="subroutine";break;case"cylinder":g="cylinder"}i.l.warn("Adding node",n.id,n.domId),t.setNode(o.db.lookUpDomId(n.id),{labelType:"svg",labelStyle:c.labelStyle,shape:g,label:a,rx:p,ry:p,class:l,style:c.style,id:o.db.lookUpDomId(n.id)})})},addEdges=function(e,t,r){let a,n,o=0;if(void 0!==e.defaultStyle){let t=(0,i.k)(e.defaultStyle);a=t.style,n=t.labelStyle}e.forEach(function(s){o++;let d="L-"+s.start+"-"+s.end,c="LS-"+s.start,h="LE-"+s.end,p={};"arrow_open"===s.type?p.arrowhead="none":p.arrowhead="normal";let u="",g="";if(void 0!==s.style){let e=(0,i.k)(s.style);u=e.style,g=e.labelStyle}else switch(s.stroke){case"normal":u="fill:none",void 0!==a&&(u=a),void 0!==n&&(g=n);break;case"dotted":u="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":u=" stroke-width: 3.5px;fill:none"}p.style=u,p.labelStyle=g,void 0!==s.interpolate?p.curve=(0,i.n)(s.interpolate,l.c_6):void 0!==e.defaultInterpolate?p.curve=(0,i.n)(e.defaultInterpolate,l.c_6):p.curve=(0,i.n)(k.curve,l.c_6),void 0===s.text?void 0!==s.style&&(p.arrowheadStyle="fill: #333"):(p.arrowheadStyle="fill: #333",p.labelpos="c",(0,i.m)((0,i.c)().flowchart.htmlLabels)?(p.labelType="html",p.label=`<span id="L-${d}" class="edgeLabel L-${c}' L-${h}" style="${p.labelStyle}">${s.text.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)}</span>`):(p.labelType="text",p.label=s.text.replace(i.e.lineBreakRegex,"\n"),void 0===s.style&&(p.style=p.style||"stroke: #333; stroke-width: 1.5px;fill:none"),p.labelStyle=p.labelStyle.replace("color:","fill:"))),p.id=d,p.class=c+" "+h,p.minlen=s.length||1,t.setEdge(r.db.lookUpDomId(s.start),r.db.lookUpDomId(s.end),p,o)})},S={setConf:function(e){let t=Object.keys(e);for(let r of t)k[r]=e[r]},addVertices,addEdges,getClasses:function(e,t){return i.l.info("Extracting classes"),t.db.getClasses()},draw:function(e,t,r,a){let o,s;i.l.info("Drawing flowchart");let{securityLevel:d,flowchart:c}=(0,i.c)();"sandbox"===d&&(o=(0,l.Ys)("#i"+t));let p="sandbox"===d?(0,l.Ys)(o.nodes()[0].contentDocument.body):(0,l.Ys)("body"),u="sandbox"===d?o.nodes()[0].contentDocument:document,g=a.db.getDirection();void 0===g&&(g="TD");let f=c.nodeSpacing||50,y=c.rankSpacing||50,b=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:g,nodesep:f,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),w=a.db.getSubGraphs();for(let e=w.length-1;e>=0;e--)s=w[e],a.db.addVertex(s.id,s.title,"group",void 0,s.classes);let x=a.db.getVertices();i.l.warn("Get vertices",x);let v=a.db.getEdges(),k=0;for(k=w.length-1;k>=0;k--){s=w[k],(0,l.td_)("cluster").append("text");for(let e=0;e<s.nodes.length;e++)i.l.warn("Setting subgraph",s.nodes[e],a.db.lookUpDomId(s.nodes[e]),a.db.lookUpDomId(s.id)),b.setParent(a.db.lookUpDomId(s.nodes[e]),a.db.lookUpDomId(s.id))}addVertices(x,b,t,p,u,a),addEdges(v,b,a);let S=new render;m.addToRender(S),S.arrows().none=function(e,t,r,a){let n=e.append("marker").attr("id",t).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),l=n.append("path").attr("d","M 0 0 L 0 0 L 0 0 z");(0,h.bg)(l,r[a+"Style"])},S.arrows().normal=function(e,t){let r=e.append("marker").attr("id",t).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto");r.append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowheadPath").style("stroke-width",1).style("stroke-dasharray","1,0")};let _=p.select(`[id="${t}"]`),T=p.select("#"+t+" g");for(S(T,b),T.selectAll("g.node").attr("title",function(){return a.db.getTooltip(this.id)}),a.db.indexNodes("subGraph"+k),k=0;k<w.length;k++)if("undefined"!==(s=w[k]).title){let e=u.querySelectorAll("#"+t+' [id="'+a.db.lookUpDomId(s.id)+'"] rect'),r=u.querySelectorAll("#"+t+' [id="'+a.db.lookUpDomId(s.id)+'"]'),n=e[0].x.baseVal.value,i=e[0].y.baseVal.value,o=e[0].width.baseVal.value,d=(0,l.Ys)(r[0]),c=d.select(".label");c.attr("transform",`translate(${n+o/2}, ${i+14})`),c.attr("id",t+"Text");for(let e=0;e<s.classes.length;e++)r[0].classList.add(s.classes[e])}if(!c.htmlLabels){let e=u.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of e){let e=t.getBBox(),r=u.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}(0,i.o)(b,_,c.diagramPadding,c.useMaxWidth);let L=Object.keys(x);L.forEach(function(e){let r=x[e];if(r.link){let n=p.select("#"+t+' [id="'+a.db.lookUpDomId(e)+'"]');if(n){let e=u.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===d?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let t=n.insert(function(){return e},":first-child"),a=n.select(".label-container");a&&t.append(function(){return a.node()});let l=n.select(".label");l&&t.append(function(){return l.node()})}}})}},_={parser:a.p,db:a.f,renderer:v.f,styles:v.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,S.setConf(e.flowchart),a.f.clear(),a.f.setGen("gen-1")}}},9879:function(e,t,r){r.d(t,{a:function(){return flowStyles},f:function(){return p}});var a=r(5625),n=r(8077),l=r(8661),i=r(7644),o=r(3349),s=r(1691),d=r(1610),methods_channel=(e,t)=>s.Z.lang.round(d.Z.parse(e)[t]),c=r(1117);let h={},addVertices=function(e,t,r,a,n,i){let s=a.select(`[id="${r}"]`),d=Object.keys(e);d.forEach(function(r){let a;let d=e[r],c="default";d.classes.length>0&&(c=d.classes.join(" ")),c+=" flowchart-label";let h=(0,l.k)(d.styles),p=void 0!==d.text?d.text:d.id;if(l.l.info("vertex",d,d.labelType),"markdown"===d.labelType)l.l.info("vertex",d,d.labelType);else if((0,l.m)((0,l.c)().flowchart.htmlLabels)){let e={label:p.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};(a=(0,o.a)(s,e).node()).parentNode.removeChild(a)}else{let e=n.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",h.labelStyle.replace("color:","fill:"));let t=p.split(l.e.lineBreakRegex);for(let r of t){let t=n.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}a=e}let u=0,g="";switch(d.type){case"round":u=5,g="rect";break;case"square":case"group":default:g="rect";break;case"diamond":g="question";break;case"hexagon":g="hexagon";break;case"odd":case"odd_right":g="rect_left_inv_arrow";break;case"lean_right":g="lean_right";break;case"lean_left":g="lean_left";break;case"trapezoid":g="trapezoid";break;case"inv_trapezoid":g="inv_trapezoid";break;case"circle":g="circle";break;case"ellipse":g="ellipse";break;case"stadium":g="stadium";break;case"subroutine":g="subroutine";break;case"cylinder":g="cylinder";break;case"doublecircle":g="doublecircle"}t.setNode(d.id,{labelStyle:h.labelStyle,shape:g,labelText:p,labelType:d.labelType,rx:u,ry:u,class:c,style:h.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:i.db.getTooltip(d.id)||"",domId:i.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,l.c)().flowchart.padding}),l.l.info("setNode",{labelStyle:h.labelStyle,labelType:d.labelType,shape:g,labelText:p,rx:u,ry:u,class:c,style:h.style,id:d.id,domId:i.db.lookUpDomId(d.id),width:"group"===d.type?500:void 0,type:d.type,dir:d.dir,props:d.props,padding:(0,l.c)().flowchart.padding})})},addEdges=function(e,t,r){let a,i;l.l.info("abc78 edges = ",e);let o=0,s={};if(void 0!==e.defaultStyle){let t=(0,l.k)(e.defaultStyle);a=t.style,i=t.labelStyle}e.forEach(function(r){o++;let d="L-"+r.start+"-"+r.end;void 0===s[d]?s[d]=0:s[d]++,l.l.info("abc78 new entry",d,s[d]);let c=d+"-"+s[d];l.l.info("abc78 new link id to be used is",d,c,s[d]);let p="LS-"+r.start,u="LE-"+r.end,g={style:"",labelStyle:""};switch(g.minlen=r.length||1,"arrow_open"===r.type?g.arrowhead="none":g.arrowhead="normal",g.arrowTypeStart="arrow_open",g.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":g.arrowTypeStart="arrow_cross";case"arrow_cross":g.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":g.arrowTypeStart="arrow_point";case"arrow_point":g.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":g.arrowTypeStart="arrow_circle";case"arrow_circle":g.arrowTypeEnd="arrow_circle"}let f="",y="";switch(r.stroke){case"normal":f="fill:none;",void 0!==a&&(f=a),void 0!==i&&(y=i),g.thickness="normal",g.pattern="solid";break;case"dotted":g.thickness="normal",g.pattern="dotted",g.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":g.thickness="thick",g.pattern="solid",g.style="stroke-width: 3.5px;fill:none;";break;case"invisible":g.thickness="invisible",g.pattern="solid",g.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){let e=(0,l.k)(r.style);f=e.style,y=e.labelStyle}g.style=g.style+=f,g.labelStyle=g.labelStyle+=y,void 0!==r.interpolate?g.curve=(0,l.n)(r.interpolate,n.c_6):void 0!==e.defaultInterpolate?g.curve=(0,l.n)(e.defaultInterpolate,n.c_6):g.curve=(0,l.n)(h.curve,n.c_6),void 0===r.text?void 0!==r.style&&(g.arrowheadStyle="fill: #333"):(g.arrowheadStyle="fill: #333",g.labelpos="c"),g.labelType=r.labelType,g.label=r.text.replace(l.e.lineBreakRegex,"\n"),void 0===r.style&&(g.style=g.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),g.labelStyle=g.labelStyle.replace("color:","fill:"),g.id=c,g.classes="flowchart-link "+p+" "+u,t.setEdge(r.start,r.end,g,o)})},draw=async function(e,t,r,o){let s,d;l.l.info("Drawing flowchart");let c=o.db.getDirection();void 0===c&&(c="TD");let{securityLevel:h,flowchart:p}=(0,l.c)(),u=p.nodeSpacing||50,g=p.rankSpacing||50;"sandbox"===h&&(s=(0,n.Ys)("#i"+t));let f="sandbox"===h?(0,n.Ys)(s.nodes()[0].contentDocument.body):(0,n.Ys)("body"),y="sandbox"===h?s.nodes()[0].contentDocument:document,b=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:u,ranksep:g,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),w=o.db.getSubGraphs();l.l.info("Subgraphs - ",w);for(let e=w.length-1;e>=0;e--)d=w[e],l.l.info("Subgraph - ",d),o.db.addVertex(d.id,{text:d.title,type:d.labelType},"group",void 0,d.classes,d.dir);let x=o.db.getVertices(),v=o.db.getEdges();l.l.info("Edges",v);let m=0;for(m=w.length-1;m>=0;m--){d=w[m],(0,n.td_)("cluster").append("text");for(let e=0;e<d.nodes.length;e++)l.l.info("Setting up subgraphs",d.nodes[e],d.id),b.setParent(d.nodes[e],d.id)}addVertices(x,b,t,f,y,o),addEdges(v,b);let k=f.select(`[id="${t}"]`),S=f.select("#"+t+" g");if(await (0,i.r)(S,b,["point","circle","cross"],"flowchart",t),l.u.insertTitle(k,"flowchartTitleText",p.titleTopMargin,o.db.getDiagramTitle()),(0,l.o)(b,k,p.diagramPadding,p.useMaxWidth),o.db.indexNodes("subGraph"+m),!p.htmlLabels){let e=y.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of e){let e=t.getBBox(),r=y.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}let _=Object.keys(x);_.forEach(function(e){let r=x[e];if(r.link){let a=(0,n.Ys)("#"+t+' [id="'+e+'"]');if(a){let e=y.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===h?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let t=a.insert(function(){return e},":first-child"),n=a.select(".label-container");n&&t.append(function(){return n.node()});let l=a.select(".label");l&&t.append(function(){return l.node()})}}})},p={setConf:function(e){let t=Object.keys(e);for(let r of t)h[r]=e[r]},addVertices,addEdges,getClasses:function(e,t){return t.db.getClasses()},draw},fade=(e,t)=>{let r=methods_channel(e,"r"),a=methods_channel(e,"g"),n=methods_channel(e,"b");return c.Z(r,a,n,t)},flowStyles=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${fade(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`}}]);