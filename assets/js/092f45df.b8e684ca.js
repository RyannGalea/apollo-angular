(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{250:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return h}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var r=o.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=p(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=t,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(h,l(l({ref:r},c),{},{components:n})):o.a.createElement(h,l({ref:r},c))}));function h(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return c})),n.d(r,"default",(function(){return u}));var t=n(1),o=n(8),a=(n(0),n(250)),i=["components"],l={title:"Error Handling",description:"Handling errors with Apollo"},s={unversionedId:"features/error-handling",id:"version-1.0/features/error-handling",isDocsHomePage:!1,title:"Error Handling",description:"Handling errors with Apollo",source:"@site/versioned_docs/version-1.0/features/error-handling.md",slug:"/features/error-handling",permalink:"/docs/1.0/features/error-handling",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/features/error-handling.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Local state management",permalink:"/docs/1.0/basics/local-state"},next:{title:"Direct Cache Access",permalink:"/docs/1.0/features/caching"}},c=[{value:"Managing errors",id:"managing-errors",children:[{value:"Error policies",id:"error-policies",children:[]},{value:"Network Errors",id:"network-errors",children:[]}]}],p={toc:c};function u(e){var r=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"managing-errors"},"Managing errors"),Object(a.b)("p",null,"Any application, from simple to complex, can have its fair share of errors. It is important to handle these errors and when possible, report these errors back to your users for information. Using GraphQL brings a new set of possible errors from the actual GraphQL response itself. With that in mind, here are a few different types of errors:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"GraphQL Errors: errors in the GraphQL results that can appear alongside successful data"),Object(a.b)("li",{parentName:"ul"},"Server Errors: server internal errors that prevent a successful response from being formed"),Object(a.b)("li",{parentName:"ul"},"Transaction Errors: errors inside transaction actions like ",Object(a.b)("inlineCode",{parentName:"li"},"update")," on mutations"),Object(a.b)("li",{parentName:"ul"},"UI Errors: errors that occur in your component code"),Object(a.b)("li",{parentName:"ul"},"Apollo Client Errors: internal errors within the core or corresponding libraries")),Object(a.b)("h3",{id:"error-policies"},"Error policies"),Object(a.b)("p",null,"Much like ",Object(a.b)("inlineCode",{parentName:"p"},"fetchPolicy"),", ",Object(a.b)("inlineCode",{parentName:"p"},"errorPolicy")," allows you to control how GraphQL Errors from the server are sent to your UI code. By default, the error policy treats any GraphQL Errors as network errors and ends the request chain. It doesn't save any data in the cache, and renders your UI with the ",Object(a.b)("inlineCode",{parentName:"p"},"error")," prop to be an ApolloError. By changing this policy per request, you can adjust how GraphQL Errors are managed in the cache and your UI. The possible options for ",Object(a.b)("inlineCode",{parentName:"p"},"errorPolicy")," are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"none"),": This is the default policy to match how Apollo Client 1.0 worked. Any GraphQL Errors are treated the same as network errors and any data is ignored from the response."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ignore"),": Ignore allows you to read any data that is returned alongside GraphQL Errors, but doesn't save the errors or report them to your UI."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"all"),": Using the ",Object(a.b)("inlineCode",{parentName:"li"},"all")," policy is the best way to notify your users of potential issues while still showing as much data as possible from your server. It saves both data and errors into the Apollo Cache so your UI can use them.")),Object(a.b)("p",null,"You can set ",Object(a.b)("inlineCode",{parentName:"p"},"errorPolicy")," on each request like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@Component({...})\nclass AppComponent {\n  constructor(apollo: Apollo) {\n    apollo.watchQuery({\n      ..., // options\n      errorPolicy: 'all'\n    });\n  }\n}\n")),Object(a.b)("p",null,"You can also set ",Object(a.b)("inlineCode",{parentName:"p"},"errorPolicy")," globally for the created Apollo Client. Here's an example that uses the ",Object(a.b)("inlineCode",{parentName:"p"},"all")," policy on all ",Object(a.b)("inlineCode",{parentName:"p"},"watchQuery")," requests for a created client:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"apollo.create({\n  link: httpLink.create(),\n  cache: new InMemoryCache(),\n  defaultOptions: {\n    watchQuery: {\n      errorPolicy: 'all'\n    }\n  }\n});\n")),Object(a.b)("p",null,"Any errors reported will come under an ",Object(a.b)("inlineCode",{parentName:"p"},"errors")," property of the query result along side the data returned from the cache or server."),Object(a.b)("h3",{id:"network-errors"},"Network Errors"),Object(a.b)("p",null,"When using Apollo Link, the ability to handle network errors is way more powerful. The best way to do this is to use the ",Object(a.b)("inlineCode",{parentName:"p"},"apollo-link-error")," to catch and handle server errors, network errors, and GraphQL errors."),Object(a.b)("h4",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { onError } from 'apollo-link-error';\n\nconst link = onError(({ graphQLErrors, networkError }) => {\n  if (graphQLErrors)\n    graphQLErrors.map(({ message, locations, path }) =>\n      console.log(\n        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,\n      ),\n    );\n\n  if (networkError) console.log(`[Network error]: ${networkError}`);\n});\n")),Object(a.b)("h4",{id:"options"},"Options"),Object(a.b)("p",null,"Error Link takes a function that is called in the event of an error. This function is called with an object containing the following keys:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"operation"),": The Operation that errored"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"response"),": The response from the server"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"graphQLErrors"),": An array of errors from the GraphQL endpoint"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"networkError"),": any error during the link execution or server response")),Object(a.b)("h4",{id:"ignoring-errors"},"Ignoring errors"),Object(a.b)("p",null,"If you want to conditionally ignore errors, you can set ",Object(a.b)("inlineCode",{parentName:"p"},"response.errors = null;")," within the error handler:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"onError(({ response, operation }) => {\n  if (operation.operationName === 'IgnoreErrorsQuery') {\n    response.errors = null;\n  }\n})\n")))}u.isMDXComponent=!0}}]);