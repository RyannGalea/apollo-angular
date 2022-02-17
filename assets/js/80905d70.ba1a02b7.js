(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a(1),n=a(8),o=(a(0),a(250)),i=["components"],l={title:"Developer tools",description:"A list of tools to improve your developer experience when working with GraphQL"},p={unversionedId:"development-and-testing/developer-tools",id:"version-2.0/development-and-testing/developer-tools",isDocsHomePage:!1,title:"Developer tools",description:"A list of tools to improve your developer experience when working with GraphQL",source:"@site/versioned_docs/version-2.0/development-and-testing/developer-tools.md",slug:"/development-and-testing/developer-tools",permalink:"/docs/2.0/development-and-testing/developer-tools",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-2.0/development-and-testing/developer-tools.md",version:"2.0",sidebar:"version-2.0/docs",previous:{title:"Mocking new schema capabilities",permalink:"/docs/2.0/development-and-testing/client-schema-mocking"},next:{title:"Improving performance",permalink:"/docs/2.0/performance/improving-performance"}},s=[{value:"Breaking Change Detection with GraphQL Inspector",id:"breaking-change-detection-with-graphql-inspector",children:[]},{value:"Code Generation with GraphQL Codegen",id:"code-generation-with-graphql-codegen",children:[]},{value:"GraphQL ESLint",id:"graphql-eslint",children:[]},{value:"Collection of GraphQL Scalars",id:"collection-of-graphql-scalars",children:[]},{value:"Generate REST API out of GraphQL",id:"generate-rest-api-out-of-graphql",children:[]},{value:"Turn anything into GraphQL API",id:"turn-anything-into-graphql-api",children:[]},{value:"Develop GraphQL API with GraphQL Modules",id:"develop-graphql-api-with-graphql-modules",children:[]},{value:"Other tools and libraries",id:"other-tools-and-libraries",children:[]}],c={toc:s};function u(e){var t=e.components,a=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Thank you to our amazing community members who have created tools and packages around Apollo Angular! If you\u2019ve built something and would like it to be featured, please send a pull request to add it to the list."),Object(o.b)("h2",{id:"breaking-change-detection-with-graphql-inspector"},"Breaking Change Detection with GraphQL Inspector"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://graphql-inspector.com/"},"GraphQL Inspector")," is a set of tools to help you better maintain and improve GraphQL API as well as GraphQL consumers."),Object(o.b)("p",null,"GraphQL Inspector outputs a list of changes between two GraphQL schemas. Every change is precisely explained and marked as breaking, non-breaking or dangerous. It will help you validate documents and fragments against a schema and even find similar or duplicated types."),Object(o.b)("p",null,"Use GraphQL Inspector however you like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Command Line Tool"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://graphql-inspector.com/docs/products/github"},"GitHub Application")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://graphql-inspector.com/docs/products/action"},"GitHub Action")),Object(o.b)("li",{parentName:"ul"},"Programatic API")),Object(o.b)("p",null,"The way GraphQL Inspector is built enables you to use everything through a CLI or each feature separately using one of many available packages. There's also a GitHub Application that you can install and use within seconds. If you're fan of GitHub Actions, we got you covered too."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://graphql-inspector.com/assets/images/app-action-9766a9df3298b0592a46ce57642cc57f.jpg",alt:"Breaking Change Detection with GraphQL Inspector"})),Object(o.b)("h2",{id:"code-generation-with-graphql-codegen"},"Code Generation with GraphQL Codegen"),Object(o.b)("p",null,"A tool to generate a ready to use in your component, strongly typed Angular services, for every defined query, mutation or subscription."),Object(o.b)("p",null,"To learn more about the tool, please read the ",Object(o.b)("a",{parentName:"p",href:"https://medium.com/the-guild/apollo-angular-code-generation-7903da1f8559"},'"Apollo-Angular 1.2\u200a \u2014 \u200ausing GraphQL in your apps just got a whole lot easier!"')," article."),Object(o.b)("p",null,"More about Query, Mutation, Subscription services in ",Object(o.b)("a",{parentName:"p",href:"/docs/2.0/data/services"},'"Query, Mutation, Subscription services"')," chapter of Apollo Angular documentation."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://graphql-code-generator.com/docs/plugins/typescript-apollo-angular"},"Read documentation")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @graphql-codegen/cli @graphql-codegen/typescript-apollo-angular\n")),Object(o.b)("h2",{id:"graphql-eslint"},"GraphQL ESLint"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/dotansimha/graphql-eslint/"},"GraphQL ESLint")," is a parser, plugin and set rules for GraphQL (for schema and operations). Easily customizable with custom rules. Integrates with IDEs and modern GraphQL tools."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Integrates with ESLint core (as a ESTree parser)."),Object(o.b)("li",{parentName:"ul"},"Works on ",Object(o.b)("inlineCode",{parentName:"li"},".graphql")," files, ",Object(o.b)("inlineCode",{parentName:"li"},"gql")," or ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," usages and ",Object(o.b)("inlineCode",{parentName:"li"},"/* GraphQL */")," magic comments."),Object(o.b)("li",{parentName:"ul"},"Lints both GraphQL schema and GraphQL operations."),Object(o.b)("li",{parentName:"ul"},"Extended type info for more advanced usages"),Object(o.b)("li",{parentName:"ul"},"Supports ESLint directives (for example: ",Object(o.b)("inlineCode",{parentName:"li"},"disable-next-line"),")"),Object(o.b)("li",{parentName:"ul"},"Easily extendable - supports custom rules based on GraphQL's AST and ESLint API."),Object(o.b)("li",{parentName:"ul"},"Validates, lints, prettifies and checks for best practices across GraphQL schema and GraphQL operations."),Object(o.b)("li",{parentName:"ul"},"Integrates with ",Object(o.b)("a",{parentName:"li",href:"https://graphql-config.com"},Object(o.b)("inlineCode",{parentName:"a"},"graphql-config"))),Object(o.b)("li",{parentName:"ul"},"Integrates and visualizes lint issues in popular IDEs (VSCode / WebStorm)")),Object(o.b)("h2",{id:"collection-of-graphql-scalars"},"Collection of GraphQL Scalars"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-scalars/"},"GraphQL Scalars")," is a library of custom GraphQL Scalars for creating precise type-safe GraphQL schemas."),Object(o.b)("h2",{id:"generate-rest-api-out-of-graphql"},"Generate REST API out of GraphQL"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.sofa-api.com/"},"Sofa")," takes your GraphQL Schema, looks for available queries, mutations and subscriptions and turns all of that into REST API."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import sofa from 'sofa-api';\nimport express from 'express';\n\nconst app = express();\n\napp.use(sofa({schema}));\n\napp.listen();\n\n// GET /users\n// GET /messages\n")),Object(o.b)("h2",{id:"turn-anything-into-graphql-api"},"Turn anything into GraphQL API"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://graphql-mesh.com/"},"GraphQL Mesh")," allows you to use GraphQL query language to access data in remote APIs that don't run GraphQL (and also ones that do run GraphQL)."),Object(o.b)("h2",{id:"develop-graphql-api-with-graphql-modules"},"Develop GraphQL API with GraphQL Modules"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://graphql-modules.com"},"GraphQL Modules")," lets you separate your backend implementation to small, reusable, easy-to-implement and easy-to-test pieces."),Object(o.b)("h2",{id:"other-tools-and-libraries"},"Other tools and libraries"),Object(o.b)("p",null,"Packages listed above are specific to Angular but it's possible to use any Apollo related package with Apollo Angular."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.apollographql.com/docs/link/links/community.html"},"Apollo Links created by community")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.apollographql.com/docs/link/#linkslist"},"Official Apollo Links"))))}u.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),c=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return a?n.a.createElement(d,l(l({ref:t},s),{},{components:a})):n.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);