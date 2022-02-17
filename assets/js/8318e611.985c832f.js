(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{128:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(1),a=r(8),o=(r(0),r(250)),i=["components"],c={title:"Angular CLI"},l={unversionedId:"recipes/angular-cli",id:"version-1.0/recipes/angular-cli",isDocsHomePage:!1,title:"Angular CLI",description:"Setup",source:"@site/versioned_docs/version-1.0/recipes/angular-cli.md",slug:"/recipes/angular-cli",permalink:"/docs/1.0/recipes/angular-cli",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/recipes/angular-cli.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Meteor",permalink:"/docs/1.0/recipes/meteor"},next:{title:"Apollo Angular Boost migration",permalink:"/docs/1.0/recipes/boost-migration"}},p=[{value:"Setup",id:"setup",children:[]},{value:"Proxy",id:"proxy",children:[]}],u={toc:p};function s(e){var n=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"To get started with Apollo and Angular run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ng add apollo-angular\n")),Object(o.b)("h2",{id:"proxy"},"Proxy"),Object(o.b)("p",null,"If your GraphQL endpoint lives under different host with Angular CLI you can easily define proxy configuration."),Object(o.b)("p",null,"Take for example ",Object(o.b)("inlineCode",{parentName:"p"},"api.example.com/graphql"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "/graphql": {\n    "target": "http://api.example.com"\n  }\n}\n')),Object(o.b)("p",null,"Create a json file (",Object(o.b)("inlineCode",{parentName:"p"},"proxy.config.json")," for example) with that configuration."),Object(o.b)("p",null,"To run server use ",Object(o.b)("inlineCode",{parentName:"p"},"--proxy-config")," option:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ng serve --proxy-config <path to file>\n")),Object(o.b)("p",null,"An example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ng serve --proxy-config proxy.config.json\n")))}s.isMDXComponent=!0},250:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=t,d=s["".concat(i,".").concat(f)]||s[f]||b[f]||o;return r?a.a.createElement(d,c(c({ref:n},p),{},{components:r})):a.a.createElement(d,c({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);