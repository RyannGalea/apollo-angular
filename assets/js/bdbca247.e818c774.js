(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(8),o=(t(0),t(250)),l=["components"],c={title:"Webpack loader"},p={unversionedId:"recipes/webpack",id:"version-2.0/recipes/webpack",isDocsHomePage:!1,title:"Webpack loader",description:"You can load GraphQL queries over .graphql files using Webpack. The package @graphql-tools/webpack-loader comes with a loader easy to setup and with some benefits:",source:"@site/versioned_docs/version-2.0/recipes/webpack.md",slug:"/recipes/webpack",permalink:"/docs/2.0/recipes/webpack",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-2.0/recipes/webpack.md",version:"2.0",sidebar:"version-2.0/docs",previous:{title:"Angular CLI",permalink:"/docs/2.0/recipes/angular-cli"},next:{title:"Authentication",permalink:"/docs/2.0/recipes/authentication"}},i=[{value:"Optional: Install and configure a custom Webpack configuration (when using Angular CLI)",id:"optional-install-and-configure-a-custom-webpack-configuration-when-using-angular-cli",children:[]},{value:"Jest",id:"jest",children:[]},{value:"Fragments",id:"fragments",children:[]}],s={toc:i};function u(e){var n=e.components,t=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can load GraphQL queries over ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files using Webpack. The package ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@graphql-tools/webpack-loader"},Object(o.b)("inlineCode",{parentName:"a"},"@graphql-tools/webpack-loader"))," comes with a loader easy to setup and with some benefits:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Do not process GraphQL ASTs on client-side"),Object(o.b)("li",{parentName:"ol"},"Enable queries to be separated from logic")),Object(o.b)("p",null,"In the example below, we create a new file called ",Object(o.b)("inlineCode",{parentName:"p"},"currentUser.graphql"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"query CurrentUserForLayout {\n  currentUser {\n    login\n    avatar_url\n  }\n}\n")),Object(o.b)("p",null,"You can load this file adding a rule in your webpack config file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"rules: [\n  {\n    test: /\\.(graphql|gql)$/,\n    exclude: /node_modules/,\n    loader: '@graphql-tools/webpack-loader'\n  }\n]\n")),Object(o.b)("p",null,"As you can see, ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," or ",Object(o.b)("inlineCode",{parentName:"p"},".gql")," files will be parsed whenever imported:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@angular/core';\nimport { Apollo } from 'apollo-angular';\n\nimport currentUserQuery from './currentUser.graphql';\n\n@Component({ ... })\nclass ProfileComponent {\n  constructor(\n    apollo: Apollo\n  ) {\n    apollo.query({ query: currentUserQuery })\n      .subscribe(result => { ... });\n  }\n}\n")),Object(o.b)("h3",{id:"optional-install-and-configure-a-custom-webpack-configuration-when-using-angular-cli"},"Optional: Install and configure a custom Webpack configuration (when using Angular CLI)"),Object(o.b)("p",null,"Install ",Object(o.b)("inlineCode",{parentName:"p"},"@angular-builders/custom-webpack")," with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm i -d @angular-builders/custom-webpack\n")),Object(o.b)("p",null,"(Or alternative command when using yarn or another package-manager)"),Object(o.b)("p",null,"Then create a Webpack-configuration file ",Object(o.b)("inlineCode",{parentName:"p"},"webpack.config.js")," in your application root containing your Webpack configuration (as listed above):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"module.exports = {\n    module: {\n        rules: [\n            {\n                test: /\\.(graphql|gql)$/,\n                exclude: /node_modules/,\n                loader: '@graphql-tools/webpack-loader'\n            }\n        ]\n    }\n}\n")),Object(o.b)("p",null,"After that, create your type-definition for your ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files, so TypeScript will transform them into importable objects with ",Object(o.b)("inlineCode",{parentName:"p"},"src/@types/graphql.d.ts"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"declare module '*.graphql' {\n    import { DocumentNode } from 'graphql'\n    const schema: DocumentNode\n\n    export = schema\n}\n")),Object(o.b)("p",null,"Next, update your TSConfig (",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  ...\n  "files": [\n    ...\n    "src/@types/graphql.d.ts"\n  ],\n  "compilerOptions": {\n    "typeRoots": [\n      ...\n      "src/@types"\n    ]\n  }\n}\n')),Object(o.b)("p",null,"Finally you have to manipulate your ",Object(o.b)("inlineCode",{parentName:"p"},"angular.json")," to accept your customized Webpack configuration:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  ...\n  "projects": {\n    "<Your project name here>": {\n      ...\n      "architect": {\n        "build": {\n          ...\n          "builder": "@angular-builders/custom-webpack:browser",\n          "options": {\n            "customWebpackConfig": {\n              "path": "./webpack.config.js",\n              "replaceDuplicatePlugins": true\n            },\n          }\n        }\n        "serve": {\n          ...\n          "builder": "@angular-builders/custom-webpack:dev-server",\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"(Based on ",Object(o.b)("a",{parentName:"em",href:"https://dev.to/open-graphql/how-to-resolve-import-for-the-graphql-file-with-typescript-and-webpack-35lf"},"How to resolve import for the .graphql file with typescript and webpack"),")")),Object(o.b)("h3",{id:"jest"},"Jest"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://facebook.github.io/jest/"},"Jest")," can't use the Webpack loaders. To make the same transformation work in Jest, use ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@graphql-tools/jest-transform"},Object(o.b)("inlineCode",{parentName:"a"},"@graphql-tools/jest-transform")),"."),Object(o.b)("h2",{id:"fragments"},"Fragments"),Object(o.b)("p",null,"You can use and include fragments in ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files and have webpack include those dependencies for you, similar to how you would use fragments and queries with the gql tag in plain JS."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},'#import "./UserInfoFragment.graphql"\n\nquery CurrentUserForLayout {\n  currentUser {\n    ...UserInfo\n  }\n}\n')),Object(o.b)("p",null,"See how we import the UserInfo fragment from another ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file (same way you'd import modules in JS)."),Object(o.b)("p",null,"And here's an example of defining the fragment in another ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"fragment UserInfo on User {\n  login\n  avatar_url\n}\n")))}u.isMDXComponent=!0},250:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),s=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(d,c(c({ref:n},i),{},{components:t})):a.a.createElement(d,c({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);