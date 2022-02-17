(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(1),l=n(8),r=(n(0),n(250)),a=["components"],i={title:"Multiple clients"},p={unversionedId:"recipes/multiple-clients",id:"version-2.0/recipes/multiple-clients",isDocsHomePage:!1,title:"Multiple clients",description:"With apollo-angular it is possible to use multiple Apollo Clients in your application.",source:"@site/versioned_docs/version-2.0/recipes/multiple-clients.md",slug:"/recipes/multiple-clients",permalink:"/docs/2.0/recipes/multiple-clients",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-2.0/recipes/multiple-clients.md",version:"2.0",sidebar:"version-2.0/docs",previous:{title:"Authentication",permalink:"/docs/2.0/recipes/authentication"},next:{title:"Integrating with NativeScript",permalink:"/docs/2.0/recipes/nativescript"}},c=[{value:"Creating clients",id:"creating-clients",children:[]},{value:"Creating clients using <code>APOLLO_NAMED_OPTIONS</code>",id:"creating-clients-using-apollo_named_options",children:[]},{value:"Using Apollo",id:"using-apollo",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(l.a)(e,a);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"With ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular")," it is possible to use multiple Apollo Clients in your application."),Object(r.b)("h2",{id:"creating-clients"},"Creating clients"),Object(r.b)("p",null,"You are already familiar with how to create a single client so it should be easy to understand it."),Object(r.b)("p",null,"There are few ways of creating named clients."),Object(r.b)("p",null,"One way is to use ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.create"),". Normally, you would use it like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"apollo.create(options);\n")),Object(r.b)("p",null,"This will define a default client but there is one optional argument."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"apollo.create(options, name?)\n")),Object(r.b)("p",null,"An example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"apollo.create(defaultOptions);\napollo.create(extraOptions, 'extra');\n")),Object(r.b)("p",null,"Now you have the default client and one called ",Object(r.b)("inlineCode",{parentName:"p"},"extra"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Important thing to know is if you want to define a default client, simply do not use any ",Object(r.b)("inlineCode",{parentName:"p"},"name")," argument or set it to ",Object(r.b)("inlineCode",{parentName:"p"},"default"),".")),Object(r.b)("p",null,"The other way is to use helper methods."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"apollo.createDefault(options);\n// and\napollo.createNamed(name, options);\n")),Object(r.b)("h2",{id:"creating-clients-using-apollo_named_options"},"Creating clients using ",Object(r.b)("inlineCode",{parentName:"h2"},"APOLLO_NAMED_OPTIONS")),Object(r.b)("p",null,"In our ",Object(r.b)("inlineCode",{parentName:"p"},"app.module.ts")," file use ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloModule")," and ",Object(r.b)("inlineCode",{parentName:"p"},"APOLLO_NAMED_OPTIONS")," token to configure Apollo Client:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import {HttpClientModule} from '@angular/common/http';\nimport {ApolloModule, APOLLO_NAMED_OPTIONS, NamedOptions} from 'apollo-angular';\nimport {HttpLink} from 'apollo-angular/http';\nimport {InMemoryCache} from '@apollo/client/core';\n\n@NgModule({\n  imports: [BrowserModule, ApolloModule, HttpClientModule],\n  providers: [\n    {\n      provide: APOLLO_NAMED_OPTIONS, // <-- Different from standard initialization\n      useFactory(httpLink: HttpLink): NamedOptions {\n        return {\n          default: /* <-- this settings will be saved as default client */ {\n            cache: new InMemoryCache(),\n            link: httpLink.create({\n              uri: 'https://o5x5jzoo7z.sse.codesandbox.io/graphql',\n            }),\n          },\n          newClientName: /* <-- these settings will be saved by name: newClientName */ {\n            cache: new InMemoryCache(),\n            link: httpLink.create({\n              uri: 'https://o5x5jzoo7z.sse.codesandbox.io/graphql',\n            }),\n          },\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nexport class AppModule {}\n")),Object(r.b)("h2",{id:"using-apollo"},"Using Apollo"),Object(r.b)("p",null,"Since we have our clients available in an app, now is the time to see how to use them."),Object(r.b)("p",null,"If a client is defined as the default, you can directly use all methods of the ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service."),Object(r.b)("p",null,"About named clients, simply use the method called ",Object(r.b)("inlineCode",{parentName:"p"},"use(name: string)"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component, OnInit } from '@angular/core';\nimport { Apollo, QueryRef } from 'apollo-angular';\n\n@Component({...})\nexport class AppComponent {\n  feedQuery: QueryRef<any>;\n\n  constructor(apollo: Apollo) {\n    // use default\n    this.feedQuery = apollo.watchQuery({...});\n\n    // use extra client\n    this.feedQuery = apollo.use('extra').watchQuery({...});\n  }\n}\n")))}u.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),l=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),s=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=l.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=o,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||r;return n?l.a.createElement(m,i(i({ref:t},c),{},{components:n})):l.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);