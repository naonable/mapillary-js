(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[6261],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8329:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"geo",title:"Geo"},l={unversionedId:"theory/geo",id:"theory/geo",isDocsHomePage:!1,title:"Geo",description:"Geo Coordinates",source:"@site/docs/theory/geo.md",sourceDirName:"theory",slug:"/theory/geo",permalink:"/mapillary-js/docs/theory/geo",editUrl:"https://github.com/mapillary/mapillary-js/edit/main/doc/docs/theory/geo.md",version:"current",frontMatter:{id:"geo",title:"Geo"},sidebar:"docs",previous:{title:"Theory",permalink:"/mapillary-js/docs/theory/theory"},next:{title:"v4.x",permalink:"/mapillary-js/docs/migration/v4"}},p=[{value:"Geo Coordinates",id:"geo-coordinates",children:[{value:"Conversion",id:"conversion",children:[]}]}],c={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"geo-coordinates"},"Geo Coordinates"),(0,a.kt)("p",null,"Throughout MapillaryJS, two 3-dimensional coordinate systems are used; ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Geodetic_datum"},"geodetic (WGS84)")," and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Local_tangent_plane_coordinates"},"local topocentric East, North, Up (ENU)"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"MapillaryJS provides helper functions for conversion through the ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/api#enutogeodetic"},"enuToGeodetic")," and ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/api#geodetictoenu"},"geodeticToEnu")," functions."))),(0,a.kt)("h3",{id:"conversion"},"Conversion"),(0,a.kt)("p",null,"Here, we describe the logic used to ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Geographic_coordinate_conversion"},"convert coordinates")," between the geodetic (WGS84), ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ECEF"},"Earth-Centered, Earth-Fixed (ECEF)")," and local topocentric East, North, Up (ENU) reference frames."),(0,a.kt)("p",null,"The WGS84 has longitude (degrees), latitude (degrees) and altitude (meters) values."),(0,a.kt)("p",null,"The ECEF Z-axis pierces the north pole and the XY-axis defines the equatorial plane. The X-axis extends from the geocenter to the intersection of the Equator and the Greenwich Meridian. All values in meters."),(0,a.kt)("p",null,"The WGS84 parameters are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"a = 6378137\nb = a(1 - f)\nf = 1 / 298.257223563\ne = Math.sqrt((a^2 - b^2) / a^2)\ne' = Math.sqrt((a^2 - b^2) / b^2)\n")),(0,a.kt)("p",null,"The WGS84 to ECEF conversion is performed using the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"X = (N - h)cos(phi)cos(lambda)\nY = (N + h)cos(phi)sin(lambda)\nZ = (b^2N / a^2 + h)sin(phi)\n")),(0,a.kt)("p",null,"where"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"phi = latitude\nlambda = longitude\nh = height above ellipsoid (altitude)\nN = Radius of curvature (meters) = a / Math.sqrt(1 - e^2sin(phi)^2)\n")),(0,a.kt)("p",null,"The ECEF to WGS84 conversion is performed using the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"phi = arctan((Z + e'^2bsin(theta)^3) / (p - e^2acos(theta)^3))\nlambda = arctan(Y / X)\nh = p / cos(phi) - N\n")),(0,a.kt)("p",null,"where"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const p = Math.sqrt(X ^ (2 + Y) ^ 2);\nconst theta = arctan(Za / pb);\n")),(0,a.kt)("p",null,"In the ENU reference frame the x-axis points to the East, the y-axis to the North and the z-axis Up. All values in meters."),(0,a.kt)("p",null,"The ECEF to ENU conversion is performed using the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    |       -sin(lambda_r)          cos(lambda_r)             0      |\nT = | -sin(phi_r)cos(lambda_r)  -sin(phi_r)sin(lambda_r)  cos(phi_r) |\n    |  cos(phi_r)cos(lambda_r)   cos(phi_r)sin(lambda_r)  sin(phi_r) |\n\n    | X - X_r |\nV = | Y - Y_r |\n    | Z - Z_r |\n\n| x |\n| y | = TV\n| z |\n")),(0,a.kt)("p",null,"where"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"phi_r = latitude of reference\nlambda_r = longitude of reference\nX_r, Y_r, Z_r = ECEF coordinates of reference\n")),(0,a.kt)("p",null,"The ENU to ECEF conversion is performed by solving the above equation for X, Y, Z."),(0,a.kt)("p",null,"WGS84 to ENU and ENU to WGS84 are two step conversions with ECEF calculated in the first step for both conversions."))}s.isMDXComponent=!0}}]);