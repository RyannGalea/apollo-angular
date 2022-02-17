(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{250:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,f=u["".concat(l,".").concat(b)]||u[b]||d[b]||o;return a?r.a.createElement(f,i(i({ref:t},s),{},{components:a})):r.a.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(8),o=(a(0),a(250)),l=["components"],i={title:"Managing local state",sidebar_title:"Overview",description:"Interacting with local data in Apollo Client"},c={unversionedId:"local-state/management",id:"version-2.0/local-state/management",isDocsHomePage:!1,title:"Managing local state",description:"Interacting with local data in Apollo Client",source:"@site/versioned_docs/version-2.0/local-state/management.md",slug:"/local-state/management",permalink:"/docs/2.0/local-state/management",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-2.0/local-state/management.md",version:"2.0",sidebar:"version-2.0/docs",previous:{title:"Advanced topics on caching",permalink:"/docs/2.0/caching/advanced-topics"},next:{title:"Managing local state",permalink:"/docs/2.0/local-state/managing-state-with-field-policies"}},s=[],p={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"At its core, Apollo Client is a ",Object(o.b)("strong",{parentName:"p"},"state management")," library that happens to use GraphQL to interact with a remote server. Naturally, some application state doesn't require a remote server because it's entirely local."),Object(o.b)("p",null,"Apollo Client enables you to manage local state alongside remotely fetched state, meaning you can interact with all of your application's state with a single API."),Object(o.b)("h1",{id:"how-it-works"},"How it works"),Object(o.b)("p",null,"Please read the ",Object(o.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/local-state/local-state-management/#how-it-works"},'"How it works"')," chapter on Apollo Client documentation."),Object(o.b)("h1",{id:"field-policies-and-local-only-fields"},"Field policies and local-only fields"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Field policies")," enable you to define what happens when you query a particular field, including fields that aren't defined in your GraphQL server's schema. By defining field policies for these ",Object(o.b)("strong",{parentName:"p"},"local-only fields"),", you can populate them with data that's stored anywhere, such as in ",Object(o.b)("inlineCode",{parentName:"p"},"localStorage")," or ",Object(o.b)("a",{parentName:"p",href:"#reactive-variables"},"reactive variables"),"."),Object(o.b)("p",null,"A single GraphQL query can include both local-only fields and remotely fetched fields. In the field policy for each local-only field, you specify a function that defines how that field's value is populated."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/2.0/local-state/managing-state-with-field-policies"},"Get started with local-only fields")),Object(o.b)("h1",{id:"reactive-variables"},"Reactive variables"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Reactive variables")," enable you to read and write local data anywhere in your application, without needing to use a GraphQL operation to do so. The field policy of a local-only field can use a reactive variable to populate the field's current value."),Object(o.b)("p",null,"Reactive variables aren't stored in the Apollo Client cache, so they don't need to conform to the strict structure of a cached type. You can store anything you want in them."),Object(o.b)("p",null,"Whenever the value of a reactive variable changes, Apollo Client automatically detects that change. Every active query with a field that depends on the changed variable automatically updates."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/2.0/local-state/reactive-variables"},"Get started with reactive variables")),Object(o.b)("h1",{id:"local-resolvers-deprecated"},"Local resolvers (deprecated)"),Object(o.b)("p",null,"In earlier versions of Apollo Client, you define local resolvers to populate and modify local-only fields. These resolvers are similar in structure and purpose to the resolvers that your GraphQL server defines."),Object(o.b)("p",null,"This functionality is still available in Apollo Client 3, but it is deprecated."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/local-state/local-resolvers/"},"Learn more about local resolvers")))}u.isMDXComponent=!0}}]);