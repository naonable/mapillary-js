(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[5164],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?i.createElement(f,a(a({ref:n},s),{},{components:t})):i.createElement(f,a({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5089:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var i=t(2122),r=t(9756),o=(t(7294),t(3905)),a={id:"component.directionconfiguration",title:"Interface: DirectionConfiguration",sidebar_label:"DirectionConfiguration",custom_edit_url:null},l=void 0,p={unversionedId:"interfaces/component.directionconfiguration",id:"interfaces/component.directionconfiguration",isDocsHomePage:!1,title:"Interface: DirectionConfiguration",description:"component.DirectionConfiguration",source:"@site/api/interfaces/component.directionconfiguration.md",sourceDirName:"interfaces",slug:"/interfaces/component.directionconfiguration",permalink:"/mapillary-js/api/interfaces/component.directionconfiguration",editUrl:null,version:"current",frontMatter:{id:"component.directionconfiguration",title:"Interface: DirectionConfiguration",sidebar_label:"DirectionConfiguration",custom_edit_url:null},sidebar:"api",previous:{title:"ComponentTagModeEvent",permalink:"/mapillary-js/api/interfaces/component.componenttagmodeevent"},next:{title:"ExtremePointTagOptions",permalink:"/mapillary-js/api/interfaces/component.extremepointtagoptions"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"distinguishSequence",id:"distinguishsequence",children:[]},{value:"highlightId",id:"highlightid",children:[]},{value:"maxWidth",id:"maxwidth",children:[]},{value:"minWidth",id:"minwidth",children:[]}]}],s={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component"},"component"),".DirectionConfiguration"),(0,o.kt)("p",null,"Interface for configuration of direction component."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"interface"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"example"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var viewer = new Viewer({\n    ...\n    component: {\n        direction: {\n            minWidth: 140,\n            maxWidth: 340,\n        },\n    },\n    ...\n});\n")),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ComponentConfiguration")),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},"DirectionConfiguration")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"distinguishsequence"},"distinguishSequence"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"distinguishSequence"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Determines if the sequence arrow appearance should be different from\nthe non sequence arrows."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"description"))," Needs to be set to true for the sequence suffixed classes\nto be applied to the navigation elements. Additional calculations will be\nperformed resulting in a performance cost."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"default"))," false"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/c268f851/src/component/interfaces/DirectionConfiguration.ts#L32"},"component/interfaces/DirectionConfiguration.ts:32")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"highlightid"},"highlightId"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"highlightId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The image id representing the direction arrow to be highlighted."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"description"))," The arrow pointing towards the image corresponding to the\nhighlight id will be highlighted."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"default"))," undefined"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/c268f851/src/component/interfaces/DirectionConfiguration.ts#L42"},"component/interfaces/DirectionConfiguration.ts:42")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"maxwidth"},"maxWidth"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"maxWidth"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"The max width of the non transformed container element holding\nthe navigation arrows."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"description"))," Set max width of the non transformed\ncontainer element holding the navigation arrows.\nIf the min width is larger than the max width the\nmin width value will be used."),(0,o.kt)("p",null,"The container element is automatically resized when the resize\nmethod on the Viewer class is called."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"default"))," 460"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/c268f851/src/component/interfaces/DirectionConfiguration.ts#L74"},"component/interfaces/DirectionConfiguration.ts:74")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"minwidth"},"minWidth"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"minWidth"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"The min width of the non transformed container element holding\nthe navigation arrows."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"description"))," Set min width of the non transformed\ncontainer element holding the navigation arrows.\nIf the min width is larger than the max width the\nmin width value will be used."),(0,o.kt)("p",null,"The container element is automatically resized when the resize\nmethod on the Viewer class is called."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"default"))," 260"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/c268f851/src/component/interfaces/DirectionConfiguration.ts#L58"},"component/interfaces/DirectionConfiguration.ts:58")))}u.isMDXComponent=!0}}]);