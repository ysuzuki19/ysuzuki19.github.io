"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1946],{1946:function(e,a,o){o.d(a,{Z:function(){return R}});var t=o(3366),c=o(7462),l=o(7294),r=o(512),n=o(8510),i=o(2101),s=o(2921),d=o(5893),p=(0,s.Z)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),v=o(8735),u=o(5228),m=o(8078),b=o(9145),g=o(9262),h=o(1977),C=o(8027);function y(e){return(0,C.ZP)("MuiChip",e)}let f=(0,h.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),Z=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],k=e=>{let{classes:a,disabled:o,size:t,color:c,iconColor:l,onDelete:r,clickable:i,variant:s}=e,d={root:["root",s,o&&"disabled","size".concat((0,u.Z)(t)),"color".concat((0,u.Z)(c)),i&&"clickable",i&&"clickableColor".concat((0,u.Z)(c)),r&&"deletable",r&&"deletableColor".concat((0,u.Z)(c)),"".concat(s).concat((0,u.Z)(c))],label:["label","label".concat((0,u.Z)(t))],avatar:["avatar","avatar".concat((0,u.Z)(t)),"avatarColor".concat((0,u.Z)(c))],icon:["icon","icon".concat((0,u.Z)(t)),"iconColor".concat((0,u.Z)(l))],deleteIcon:["deleteIcon","deleteIcon".concat((0,u.Z)(t)),"deleteIconColor".concat((0,u.Z)(c)),"deleteIcon".concat((0,u.Z)(s),"Color").concat((0,u.Z)(c))]};return(0,n.Z)(d,y,a)},I=(0,g.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:o}=e,{color:t,iconColor:c,clickable:l,onDelete:r,size:n,variant:i}=o;return[{["& .".concat(f.avatar)]:a.avatar},{["& .".concat(f.avatar)]:a["avatar".concat((0,u.Z)(n))]},{["& .".concat(f.avatar)]:a["avatarColor".concat((0,u.Z)(t))]},{["& .".concat(f.icon)]:a.icon},{["& .".concat(f.icon)]:a["icon".concat((0,u.Z)(n))]},{["& .".concat(f.icon)]:a["iconColor".concat((0,u.Z)(c))]},{["& .".concat(f.deleteIcon)]:a.deleteIcon},{["& .".concat(f.deleteIcon)]:a["deleteIcon".concat((0,u.Z)(n))]},{["& .".concat(f.deleteIcon)]:a["deleteIconColor".concat((0,u.Z)(t))]},{["& .".concat(f.deleteIcon)]:a["deleteIcon".concat((0,u.Z)(i),"Color").concat((0,u.Z)(t))]},a.root,a["size".concat((0,u.Z)(n))],a["color".concat((0,u.Z)(t))],l&&a.clickable,l&&"default"!==t&&a["clickableColor".concat((0,u.Z)(t),")")],r&&a.deletable,r&&"default"!==t&&a["deletableColor".concat((0,u.Z)(t))],a[i],a["".concat(i).concat((0,u.Z)(t))]]}})(e=>{let{theme:a,ownerState:o}=e,t="light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300];return(0,c.Z)({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",["&.".concat(f.disabled)]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},["& .".concat(f.avatar)]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:t,fontSize:a.typography.pxToRem(12)},["& .".concat(f.avatarColorPrimary)]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},["& .".concat(f.avatarColorSecondary)]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},["& .".concat(f.avatarSmall)]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},["& .".concat(f.icon)]:(0,c.Z)({marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&(0,c.Z)({color:a.vars?a.vars.palette.Chip.defaultIconColor:t},"default"!==o.color&&{color:"inherit"})),["& .".concat(f.deleteIcon)]:(0,c.Z)({WebkitTapHighlightColor:"transparent",color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.26)"):(0,i.Fq)(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.4)"):(0,i.Fq)(a.palette.text.primary,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:a.vars?"rgba(".concat(a.vars.palette[o.color].contrastTextChannel," / 0.7)"):(0,i.Fq)(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,i.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&"default"!==o.color&&{["&.".concat(f.focusVisible)]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},e=>{let{theme:a,ownerState:o}=e;return(0,c.Z)({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,i.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,i.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&"default"!==o.color&&{["&:hover, &.".concat(f.focusVisible)]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},e=>{let{theme:a,ownerState:o}=e;return(0,c.Z)({},"outlined"===o.variant&&{backgroundColor:"transparent",border:a.vars?"1px solid ".concat(a.vars.palette.Chip.defaultBorder):"1px solid ".concat("light"===a.palette.mode?a.palette.grey[400]:a.palette.grey[700]),["&.".concat(f.clickable,":hover")]:{backgroundColor:(a.vars||a).palette.action.hover},["&.".concat(f.focusVisible)]:{backgroundColor:(a.vars||a).palette.action.focus},["& .".concat(f.avatar)]:{marginLeft:4},["& .".concat(f.avatarSmall)]:{marginLeft:2},["& .".concat(f.icon)]:{marginLeft:4},["& .".concat(f.iconSmall)]:{marginLeft:2},["& .".concat(f.deleteIcon)]:{marginRight:5},["& .".concat(f.deleteIconSmall)]:{marginRight:3}},"outlined"===o.variant&&"default"!==o.color&&{color:(a.vars||a).palette[o.color].main,border:"1px solid ".concat(a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / 0.7)"):(0,i.Fq)(a.palette[o.color].main,.7)),["&.".concat(f.clickable,":hover")]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(a.palette[o.color].main,a.palette.action.hoverOpacity)},["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / ").concat(a.vars.palette.action.focusOpacity,")"):(0,i.Fq)(a.palette[o.color].main,a.palette.action.focusOpacity)},["& .".concat(f.deleteIcon)]:{color:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / 0.7)"):(0,i.Fq)(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})}),S=(0,g.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{let{ownerState:o}=e,{size:t}=o;return[a.label,a["label".concat((0,u.Z)(t))]]}})(e=>{let{ownerState:a}=e;return(0,c.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"outlined"===a.variant&&{paddingLeft:11,paddingRight:11},"small"===a.size&&{paddingLeft:8,paddingRight:8},"small"===a.size&&"outlined"===a.variant&&{paddingLeft:7,paddingRight:7})});function x(e){return"Backspace"===e.key||"Delete"===e.key}var R=l.forwardRef(function(e,a){let o=(0,b.Z)({props:e,name:"MuiChip"}),{avatar:n,className:i,clickable:s,color:u="default",component:g,deleteIcon:h,disabled:C=!1,icon:y,label:f,onClick:R,onDelete:O,onKeyDown:z,onKeyUp:w,size:F="medium",variant:L="filled",tabIndex:P,skipFocusWhenDisabled:N=!1}=o,T=(0,t.Z)(o,Z),V=l.useRef(null),E=(0,v.Z)(V,a),M=e=>{e.stopPropagation(),O&&O(e)},q=!1!==s&&!!R||s,D=q||O?m.Z:g||"div",j=(0,c.Z)({},o,{component:D,disabled:C,size:F,color:u,iconColor:l.isValidElement(y)&&y.props.color||u,onDelete:!!O,clickable:q,variant:L}),W=k(j),K=D===m.Z?(0,c.Z)({component:g||"div",focusVisibleClassName:W.focusVisible},O&&{disableRipple:!0}):{},_=null;O&&(_=h&&l.isValidElement(h)?l.cloneElement(h,{className:(0,r.Z)(h.props.className,W.deleteIcon),onClick:M}):(0,d.jsx)(p,{className:(0,r.Z)(W.deleteIcon),onClick:M}));let A=null;n&&l.isValidElement(n)&&(A=l.cloneElement(n,{className:(0,r.Z)(W.avatar,n.props.className)}));let B=null;return y&&l.isValidElement(y)&&(B=l.cloneElement(y,{className:(0,r.Z)(W.icon,y.props.className)})),(0,d.jsxs)(I,(0,c.Z)({as:D,className:(0,r.Z)(W.root,i),disabled:!!q&&!!C||void 0,onClick:R,onKeyDown:e=>{e.currentTarget===e.target&&x(e)&&e.preventDefault(),z&&z(e)},onKeyUp:e=>{e.currentTarget===e.target&&(O&&x(e)?O(e):"Escape"===e.key&&V.current&&V.current.blur()),w&&w(e)},ref:E,tabIndex:N&&C?-1:P,ownerState:j},K,T,{children:[A||B,(0,d.jsx)(S,{className:(0,r.Z)(W.label),ownerState:j,children:f}),_]}))})}}]);