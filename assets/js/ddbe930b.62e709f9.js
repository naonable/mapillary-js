(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[1896],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=o,d=u["".concat(p,".").concat(y)]||u[y]||m[y]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4231:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"component.pointsgeometry",title:"Class: PointsGeometry",sidebar_label:"PointsGeometry",custom_edit_url:null},s=void 0,p={unversionedId:"classes/component.pointsgeometry",id:"classes/component.pointsgeometry",isDocsHomePage:!1,title:"Class: PointsGeometry",description:"component.PointsGeometry",source:"@site/api/classes/component.pointsgeometry.md",sourceDirName:"classes",slug:"/classes/component.pointsgeometry",permalink:"/mapillary-js/api/classes/component.pointsgeometry",editUrl:null,version:"current",frontMatter:{id:"component.pointsgeometry",title:"Class: PointsGeometry",sidebar_label:"PointsGeometry",custom_edit_url:null},sidebar:"api",previous:{title:"PointGeometry",permalink:"/mapillary-js/api/classes/component.pointgeometry"},next:{title:"PolygonGeometry",permalink:"/mapillary-js/api/classes/component.polygongeometry"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"points",id:"points",children:[]}]}],c={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component"},"component"),".PointsGeometry"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"classdesc"))," Represents a point set in the 2D basic image coordinate system."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var points = [[0.5, 0.3], [0.7, 0.3], [0.6, 0.5]];\nvar pointsGeometry = new PointsGeometry(points);\n")),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.geometry"},"Geometry")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},"PointsGeometry")))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new PointsGeometry"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"points"),")"),(0,a.kt)("p",null,"Create a points geometry."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"throws"))," {GeometryTagError} Point coordinates must be valid basic coordinates."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"points")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"),"[][]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Array of 2D points on the basic coordinate system. The number of points must be greater than or equal to two.")))),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"Geometry.constructor"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/c268f851/src/component/tag/geometry/PointsGeometry.ts#L18"},"component/tag/geometry/PointsGeometry.ts:18")),(0,a.kt)("h2",{id:"accessors"},"Accessors"),(0,a.kt)("h3",{id:"points"},"points"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"points"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[][]"),(0,a.kt)("p",null,"Get points property."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[][]"),(0,a.kt)("p",null,"Array of 2d points."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/c268f851/src/component/tag/geometry/PointsGeometry.ts#L53"},"component/tag/geometry/PointsGeometry.ts:53")))}m.isMDXComponent=!0}}]);