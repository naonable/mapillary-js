"use strict";(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[9513],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return v}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(t),v=o,u=d["".concat(p,".").concat(v)]||d[v]||l[v]||i;return t?a.createElement(u,r(r({ref:n},m),{},{components:t})):a.createElement(u,r({ref:n},m))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8696:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var a=t(2122),o=t(9756),i=(t(7294),t(3905)),r={id:"component",title:"Working with Components"},c=void 0,p={unversionedId:"main/component",id:"main/component",isDocsHomePage:!1,title:"Working with Components",description:"MapillaryJS comes with a specific set of interaction and visualization components. Each component exposes methods that you can use to programatically change their bahavior and they also fire events. You can also customize the behavior of each component at initialization time.",source:"@site/docs/main/component.md",sourceDirName:"main",slug:"/main/component",permalink:"/mapillary-js/docs/main/component",editUrl:"https://github.com/mapillary/mapillary-js/edit/main/doc/docs/main/component.md",version:"current",frontMatter:{id:"component",title:"Working with Components"},sidebar:"docs",previous:{title:"Event Handling",permalink:"/mapillary-js/docs/main/event"},next:{title:"Extend MapillaryJS",permalink:"/mapillary-js/docs/extension/extend"}},s=[{value:"Activation and Deactivation",id:"activation-and-deactivation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Component API",id:"component-api",children:[]},{value:"Recap",id:"recap",children:[]}],m={toc:s};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"MapillaryJS comes with a specific set of interaction and visualization ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/component#classes"},"components"),". Each component exposes methods that you can use to programatically change their bahavior and they also fire events. You can also customize the ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/component#interfaces"},"behavior")," of each component at initialization time."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"You will learn")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"How to activate and deactivate components"),(0,i.kt)("li",{parentName:"ul"},"How to configure component behavior"),(0,i.kt)("li",{parentName:"ul"},"How to visualize data using component APIs")))),(0,i.kt)("h2",{id:"activation-and-deactivation"},"Activation and Deactivation"),(0,i.kt)("p",null,"You can activate and deactivate all MapillaryJS ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/component#classes"},"components")," at any time by passing the component ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/component#componentname"},"names")," to the Viewer.",(0,i.kt)("a",{parentName:"p",href:"/api/classes/viewer.Viewer#activatecomponent"},"activateComponent")," or Viewer.",(0,i.kt)("a",{parentName:"p",href:"/api/classes/viewer.Viewer#deactivatecomponent"},"deactivateComponent")," methods."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Try activating and deactivating another component by specifying its ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/component#componentname"},"component name")," in the live editor."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function render(props) {\n  let viewer;\n  function dispose() {\n    if (viewer) {\n      viewer.remove();\n    }\n  }\n  const style = {height: '400px'};\n  const imageId = '340458257702273';\n\n  // Create bearing checkbox\n  const checkbox = document.createElement('input');\n  checkbox.setAttribute('type', 'checkbox');\n  checkbox.style.pointerEvents = 'none';\n  checkbox.checked = true;\n  const space = document.createElement('div');\n  space.classList.add('button-space');\n  space.appendChild(checkbox);\n  const toolbar = document.createElement('div');\n  toolbar.classList.add('example-editor-toolbar');\n  toolbar.style.zIndex = 100;\n  toolbar.style.top = '16px';\n  toolbar.style.left = '16px';\n  toolbar.appendChild(space);\n\n  // Listen to bearing checkbox clicks\n  space.addEventListener('click', () => {\n    checkbox.dispatchEvent(new MouseEvent('click', {bubbles: false}));\n  });\n  checkbox.addEventListener('change', (event) => {\n    if (event.target.checked) {\n      viewer.activateComponent('bearing');\n    } else {\n      viewer.deactivateComponent('bearing');\n    }\n  });\n\n  function init(opts) {\n    const {accessToken, container} = opts;\n    const viewerOptions = {accessToken, container};\n    viewer = new Viewer(viewerOptions);\n    viewer.moveTo(imageId).catch(mapillaryErrorHandler);\n    container.appendChild(toolbar);\n  }\n\n  return <ViewerComponent init={init} dispose={dispose} style={style} />;\n}\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Viewer")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/main/init#component-options"},"initialization")," guide we learnt how to configure components at ",(0,i.kt)("inlineCode",{parentName:"p"},"Viewer")," creation time. These ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/component#interfaces"},"configurations")," can be changed at any later point in time too. We can retrieve any component through the Viewer.",(0,i.kt)("a",{parentName:"p",href:"/api/classes/viewer.Viewer#getcomponent"},"getComponent")," method and call the Component.",(0,i.kt)("a",{parentName:"p",href:"/api/classes/component.Component#configure"},"configure")," method with a configuration object specifying the properties we want to change."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function render(props) {\n  let viewer;\n  function dispose() {\n    if (viewer) {\n      viewer.remove();\n    }\n  }\n  const style = {height: '400px'};\n  const imageId = '4165984473444513';\n\n  function init(opts) {\n    const {accessToken, container} = opts;\n    const viewerOptions = {\n      accessToken,\n      container,\n    };\n    viewer = new Viewer(viewerOptions);\n    viewer.moveTo(imageId).catch(mapillaryErrorHandler);\n\n    const pointerComponent = viewer.getComponent('pointer');\n    pointerComponent.configure({\n      dragPan: true,\n      scrollZoom: false,\n      touchZoom: false,\n    });\n  }\n\n  return <ViewerComponent init={init} dispose={dispose} style={style} />;\n}\n")),(0,i.kt)("h2",{id:"component-api"},"Component API"),(0,i.kt)("p",null,"Some components also have their own component specific APIs. Let us take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/component.PopupComponent"},"PopupComponent")," which can be used to add arbitrary HTML content to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Viewer")," anchored to ",(0,i.kt)("a",{parentName:"p",href:"/docs/theory/coordinates#basic-image-coordinates"},"basic image coordinates"),". We can create a ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/component.Popup"},"Popup"),", define its appearance, add it when the user navigates to a specific image, and remove it when the user navigates away from the related image."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Try setting the basic point of the sign to another value and see how it moves in the spherical panorama."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function render(props) {\n  let viewer;\n  function dispose() {\n    if (viewer) {\n      viewer.remove();\n    }\n  }\n  const style = {height: '400px'};\n  const imageId = '300943088210479';\n\n  function init(opts) {\n    const {accessToken, container} = opts;\n    const viewerOptions = {\n      accessToken,\n      component: {popup: true},\n      container,\n    };\n    viewer = new Viewer(viewerOptions);\n    viewer.moveTo(imageId).catch(mapillaryErrorHandler);\n\n    const popupComponent = viewer.getComponent('popup');\n\n    // Parking sign\n    const signText = document.createElement('span');\n    signText.style.color = '#000';\n    signText.textContent = 'parking sign';\n    const sign = new Popup({offset: 10});\n\n    sign.setDOMContent(signText);\n    sign.setBasicPoint([0.546, 0.507]);\n\n    viewer.on('image', (event) => {\n      if (event.image.id === imageId) {\n        popupComponent.add([sign]);\n      } else {\n        popupComponent.removeAll();\n      }\n    });\n  }\n\n  return <ViewerComponent init={init} dispose={dispose} style={style} />;\n}\n")),(0,i.kt)("h2",{id:"recap"},"Recap"),(0,i.kt)("p",null,"Now you know how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Viewer")," and its components to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Activate or deactivate components after initialization"),(0,i.kt)("li",{parentName:"ul"},"Change the behavior of specific components"),(0,i.kt)("li",{parentName:"ul"},"Visualize spatial or semantic data and information using the component APIs")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can view the complete code showing the functionality and APIs of a number of components in the ",(0,i.kt)("a",{parentName:"p",href:"/examples#component"},"component")," examples section."))))}l.isMDXComponent=!0}}]);