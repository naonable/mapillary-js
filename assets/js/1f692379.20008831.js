(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[4386],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4462:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var i=t(2122),r=t(9756),a=(t(7294),t(3905)),o={id:"component.sequenceconfiguration",title:"Interface: SequenceConfiguration",sidebar_label:"SequenceConfiguration",custom_edit_url:null},l=void 0,p={unversionedId:"interfaces/component.sequenceconfiguration",id:"interfaces/component.sequenceconfiguration",isDocsHomePage:!1,title:"Interface: SequenceConfiguration",description:"component.SequenceConfiguration",source:"@site/api/interfaces/component.sequenceconfiguration.md",sourceDirName:"interfaces",slug:"/interfaces/component.sequenceconfiguration",permalink:"/mapillary-js/api/interfaces/component.sequenceconfiguration",editUrl:null,version:"current",frontMatter:{id:"component.sequenceconfiguration",title:"Interface: SequenceConfiguration",sidebar_label:"SequenceConfiguration",custom_edit_url:null},sidebar:"api",previous:{title:"PopupOptions",permalink:"/mapillary-js/api/interfaces/component.popupoptions"},next:{title:"SimpleMarkerOptions",permalink:"/mapillary-js/api/interfaces/component.simplemarkeroptions"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"direction",id:"direction",children:[]},{value:"maxWidth",id:"maxwidth",children:[]},{value:"minWidth",id:"minwidth",children:[]},{value:"playing",id:"playing",children:[]},{value:"visible",id:"visible",children:[]}]}],u={toc:c};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component"},"component"),".SequenceConfiguration"),(0,a.kt)("p",null,"Interface for configuration of sequence component."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"interface"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const viewer = new Viewer({\n    ...\n    component: {\n        sequence: {\n            minWidth: 40,\n            maxWidth: 80,\n            visible: false,\n        },\n    },\n    ...\n});\n")),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ComponentConfiguration")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},"SequenceConfiguration")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"direction"},"direction"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"direction"),": ",(0,a.kt)("a",{parentName:"p",href:"/mapillary-js/api/enums/viewer.navigationdirection"},"NavigationDirection")),(0,a.kt)("p",null,"Set the direction to follow when playing."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"default"))," EdgeDirection.Next"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/c268f851/src/component/interfaces/SequenceConfiguration.ts#L29"},"component/interfaces/SequenceConfiguration.ts:29")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxwidth"},"maxWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"maxWidth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The max width of the sequence container."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"description"))," Set max width of the container element holding\nthe sequence navigation elements. If the min width is larger than the\nmax width the min width value will be used."),(0,a.kt)("p",null,"The container element is automatically resized when the resize\nmethod on the Viewer class is called."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"default"))," 117"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/c268f851/src/component/interfaces/SequenceConfiguration.ts#L56"},"component/interfaces/SequenceConfiguration.ts:56")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"minwidth"},"minWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"minWidth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The min width of the sequence container."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"description"))," Set min width of the container element holding\nthe sequence navigation elements. If the min width is larger than the\nmax width the min width value will be used."),(0,a.kt)("p",null,"The container element is automatically resized when the resize\nmethod on the Viewer class is called."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"default"))," 70"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/c268f851/src/component/interfaces/SequenceConfiguration.ts#L70"},"component/interfaces/SequenceConfiguration.ts:70")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"playing"},"playing"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"playing"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Indicating wheter the component is playing."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"default"))," false"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/c268f851/src/component/interfaces/SequenceConfiguration.ts#L77"},"component/interfaces/SequenceConfiguration.ts:77")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"visible"},"visible"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"visible"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Determine whether the sequence UI elements\nshould be visible."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"default"))," true"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/c268f851/src/component/interfaces/SequenceConfiguration.ts#L85"},"component/interfaces/SequenceConfiguration.ts:85")))}s.isMDXComponent=!0}}]);