(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{250:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(8),r=(n(0),n(250)),l=["components"],i={title:"Migration Guide",description:"Updating your app to Apollo Client 2.0 and Angular Apollo 1.0"},p={unversionedId:"migration",id:"version-1.0/migration",isDocsHomePage:!1,title:"Migration Guide",description:"Updating your app to Apollo Client 2.0 and Angular Apollo 1.0",source:"@site/versioned_docs/version-1.0/migration.md",slug:"/migration",permalink:"/docs/1.0/migration",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/migration.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Introduction",permalink:"/docs/1.0/index"},next:{title:"Setup and options",permalink:"/docs/1.0/basics/setup"}},c=[{value:"Why the 2.0",id:"why-the-20",children:[{value:"Goals",id:"goals",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Basic updates",id:"basic-updates",children:[]},{value:"Custom configuration",id:"custom-configuration",children:[]}]},{value:"Cache extraction",id:"cache-extraction",children:[]},{value:"Network Middleware and Afterware",id:"network-middleware-and-afterware",children:[]},{value:"Replacing Redux",id:"replacing-redux",children:[]},{value:"Query Reducers",id:"query-reducers",children:[]},{value:"Observable variables",id:"observable-variables",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,l);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"why-the-20"},"Why the 2.0"),Object(r.b)("h4",{id:"apollo-client"},"Apollo Client"),Object(r.b)("p",null,"The 2.0 version of ApolloClient provides a more customizable experience with GraphQL. It prioritizes features like custom execution chains (using Apollo Link) and custom stores while providing powerful defaults. It is an overall minor change to the API so you shouldn't have to change very much code in your current app at all!"),Object(r.b)("h4",{id:"apollo-angular"},"Apollo Angular"),Object(r.b)("p",null,"The 1.0 version of Angular integration provides a better experience of using it in Angular. Thanks to changes to the API and the new way we create Apollo it is now possible to use it with anything from Angular's Dependency Injection."),Object(r.b)("h3",{id:"goals"},"Goals"),Object(r.b)("h4",{id:"apollo-client-1"},"Apollo Client"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"2.*")," version of Apollo Client builds on the original principles of the project. For reference, those goals are:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Incrementally adoptable"),", so that you can drop it into an existing JavaScript app and start using GraphQL for just part of your UI."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Universally compatible"),", so that Apollo works with any build setup, any GraphQL server, and any GraphQL schema."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Simple to get started with"),", you can start loading data right away and learn about advanced features later."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Inspectable and understandable"),", so that you can have great developer tools to understand exactly what is happening in your app."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Built for interactive apps"),", so your users can make changes and see them reflected in the UI immediately."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Small and flexible"),", so you don't get stuff you don't need"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Community driven"),", Apollo is driven by the community and serves a variety of use cases. Everything is planned and developed in the open.")),Object(r.b)("p",null,"Based on feedback from a wide variety of users, the ",Object(r.b)("inlineCode",{parentName:"p"},"2.*")," version doubles down on being incrementally adoptable and flexible by allowing much stronger extension points. Customization of the client (i.e. data store, execution chain, etc) is a primary feature in the revised API. This version also take steps to reduce the overall size of the default client by 200% and provide the foundations for Apollo powering more of the application experience from development to production with client side state management."),Object(r.b)("p",null,"The goal of the ",Object(r.b)("inlineCode",{parentName:"p"},"2.0")," launch is not to provide all of the new features that have been asked to be built in. Instead, the 2.0 makes a few key changes to both management of the code base (lerna / small modules) and the changes necessary to support custom stores and links ",Object(r.b)("strong",{parentName:"p"},"fully"),". Apollo Client 2.0 is the jumping off point for user-land driven innovation (custom stores, custom links) and internal refactor (moving query manager into links, breaking apart the store / links into packages, etc)."),Object(r.b)("h4",{id:"apollo-angular-1"},"Apollo Angular"),Object(r.b)("p",null,"The goal of the ",Object(r.b)("inlineCode",{parentName:"p"},"1.0")," launch is to improve the experience of using it in Angular."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"One of the largest changes with the new version is the breaking apart of the monolith ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-client")," package into a few small, but isolated modules. This gives way more flexibility, but does require more packages to install."),Object(r.b)("p",null,"To get started with the 2.0, you will change your imports from either ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular"),", or just ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-client")," to use the new packages. A typical upgrade looks like this:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Before")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { ApolloModule } from 'apollo-angular';\nimport { ApolloClient, createNetworkInterface } from 'apollo-client';\nimport gql from 'graphql-tag';\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"After")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { ApolloClient } from 'apollo-client';\nimport { ApolloModule } from 'apollo-angular';\nimport { HttpLink } from 'apollo-angular-link-http';\nimport { InMemoryCache } from 'apollo-cache-inmemory';\nimport gql from 'graphql-tag';\n")),Object(r.b)("h3",{id:"basic-updates"},"Basic updates"),Object(r.b)("p",null,"A simple usage of Apollo Client upgrading to the 2.0 would look like this:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Before")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { NgModule } from '@angular/core';\nimport { ApolloModule } from 'apollo-angular';\nimport { ApolloClient, createNetworkInterface } from 'apollo-client';\n\nconst client = new ApolloClient({\n  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000' }),\n});\n\nfunction provideClient() {\n  return client;\n}\n\n@NgModule({\n  imports: [\n    // ... other modules\n    ApolloModule.forRoot(provideClient)\n  ]\n})\nclass AppModule {}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"After")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { NgModule } from '@angular/core';\nimport { HttpClientModule } from '@angular/common/http';\nimport { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';\nimport { InMemoryCache } from 'apollo-cache-inmemory';\nimport { ApolloModule, Apollo } from 'apollo-angular';\n\n@NgModule({\n  imports: [\n    // ... other modules\n    HttpClientModule,\n    HttpLinkModule,\n    ApolloModule\n  ]\n})\nclass AppModule {\n  constructor(\n    apollo: Apollo,\n    httpLink: HttpLink\n  ) {\n    apollo.create({\n      link: httpLink.create({ uri: 'http://localhost:3000' }),\n      cache: new InMemoryCache()\n    });\n  }\n}\n")),Object(r.b)("p",null,"This is the ",Object(r.b)("strong",{parentName:"p"},"most important part")," of migrating to 2.0.\nTwo things to be explained."),Object(r.b)("h4",{id:"apollocreate"},"Apollo.create"),Object(r.b)("p",null,"We decided to move creation of Apollo Client closer to Angular Framework.\nYou no longer provide an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloClient")," to ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloModule"),".\nNow it is being created when application bootstraps."),Object(r.b)("p",null,"Thanks to the new way of configuring Apollo, it gains the access to Angular's Dependency Injection."),Object(r.b)("p",null,"Just take the same options as you would normally use in ApolloClient's constructor and use them in ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.create")," method."),Object(r.b)("h4",{id:"httplink"},"HttpLink"),Object(r.b)("p",null,"Apollo Client 2.0 by introducing Links has opened up the way to decide how to request data.\nWhile designing 1.0 version of Apollo Angular we took advantage of both, ApolloLink library and new approach of configuring Apollo, and created a Link to fetch data through Angular's ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient"),"."),Object(r.b)("p",null,"Why we recommend it?"),Object(r.b)("p",null,"Besides many benefits of using ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient")," (i.e. interceptors) you get the Server-Side Rendering for free. It also allows to use it in ",Object(r.b)("inlineCode",{parentName:"p"},"NativeScript"),", without any additional work."),Object(r.b)("p",null,"Why is that possible?"),Object(r.b)("p",null,"By using ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient")," in ",Object(r.b)("inlineCode",{parentName:"p"},"HttpLink")," and thanks to DI, the HttpLink does not care about which NgModule provides ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient")," to an application since the API of ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient")," is always the same."),Object(r.b)("h3",{id:"custom-configuration"},"Custom configuration"),Object(r.b)("p",null,"Since everything was baked into the 1.0, custom configuration of the parts, like the network interface or cache, all were done on the constructor. With the 2.0, this is broken up slightly, and uneccessary configurations were removed. The following code snippet shows every possible option with the previous version and how to use it with the 2.0:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Before")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import ApolloClient, { createNetworkInterface } from 'apollo-client';\n\nconst client = new ApolloClient({\n  networkInterface: createNetworkInterface({\n    uri: 'http://api.example.com/'\n  }),\n  initialState: window.__APOLLO_CLIENT__,\n  dataIdFromObject: () => // custom idGetter,\n  ssrMode: true,\n  ssrForceFetchDelay: 100,\n  addTypename: true,\n  customResolvers: {},\n  connectToDevTools: true,\n  queryDeduplication: true,\n  fragmentMatcher: new FragmentMatcher()\n})\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"After")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { Apollo } from 'apollo-angular';\nimport { ApolloLink } from 'apollo-link';\nimport { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';\nimport { HttpLink } from 'apollo-angular-link-http';\n\nclass AppModule {\n  constructor(\n    apollo: Apollo,\n    httpLink: HttpLink\n  ) {\n    const link = httpLink.create({\n      uri: 'http://api.example.com/'\n    });\n\n    const cache = new InMemoryCache({\n      dataIdFromObject: () => // custom idGetter,\n      addTypename: true,\n      cacheResolvers: {},\n      fragmentMatcher: new IntrospectionFragmentMatcher({\n        introspectionQueryResultData: yourData\n      }),\n    });\n\n    apollo.create({\n      link,\n      // use restore on the cache instead of initialState\n      cache: cache.restore(window.__APOLLO_CLIENT__),\n      ssrMode: true,\n      ssrForceFetchDelay: 100,\n      connectToDevTools: true,\n      queryDeduplication: true,\n    });\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note")," If you were using ",Object(r.b)("inlineCode",{parentName:"p"},"customResolvers"),", the name of that has been changed to be ",Object(r.b)("inlineCode",{parentName:"p"},"cacheResolvers")," to be more descriptive of what it does. ",Object(r.b)("inlineCode",{parentName:"p"},"customResolvers")," will still be supported throughout the 2.0 though to be backwards compatible and ease the upgrade path."),Object(r.b)("h2",{id:"cache-extraction"},"Cache extraction"),Object(r.b)("p",null,"If you have previously used ",Object(r.b)("inlineCode",{parentName:"p"},"getInitialState")," for SSR, that API has been moved to the cache itself instead of on the client. You can read more about the recipe for server side rendering ",Object(r.b)("a",{parentName:"p",href:"/docs/1.0/recipes/server-side-rendering"},"here"),". The upgrade path looks like this:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Before")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { ApolloClient } from 'apollo-client';\n\nconst client = new ApolloClient();\n\n// fetch queries\n\nconst state = client.getInitialState();\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"After")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { ApolloClient } from 'apollo-client';\nimport { InMemoryCache } from 'apollo-cache-inmemory';\nimport { HttpLink } from 'apollo-angular-link-http';\n\nclass AppModule {\n  constructor(\n    apollo: Apollo,\n    httpLink: HttpLink\n  ) {\n    const link = httpLink.create();\n    const cache = new InMemoryCache();\n\n    apollo.create({\n      link,\n      cache\n    });\n\n    const state = cache.extract();\n  }\n}\n")),Object(r.b)("h2",{id:"network-middleware-and-afterware"},"Network Middleware and Afterware"),Object(r.b)("p",null,"If you previously used ",Object(r.b)("inlineCode",{parentName:"p"},"use")," or ",Object(r.b)("inlineCode",{parentName:"p"},"useAfter")," on the networkInterface from the 1.0 of Apollo Client, you will need to update to use Apollo Links as the new way to handle ",Object(r.b)("inlineCode",{parentName:"p"},"*wares")," in the 2.0. Apollo Link provides a lot more power for ",Object(r.b)("inlineCode",{parentName:"p"},"*ware")," features and more information is available ",Object(r.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/link"},"here"),". A few examples of migrating custom ",Object(r.b)("inlineCode",{parentName:"p"},"*ware")," methods to Apollo Links are shown below:"),Object(r.b)("h4",{id:"middleware"},"Middleware"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Before")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { createNetworkInterface } from 'apollo-client';\n\nconst networkInterface = createNetworkInterface({ uri: '/graphql' });\n\nnetworkInterface.use([{\n  applyMiddleware(req, next) {\n    if (!req.options.headers) {\n      req.options.headers = {};  // Create the header object if needed.\n    }\n    req.options.headers['authorization'] = localStorage.getItem('token') ? localStorage.getItem('token') : null;\n    next();\n  }\n}]);\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"After")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { setContext } from 'apollo-link-context';\nimport { HttpLink } from 'apollo-angular-link-http';\n\nclass AppModule {\n  constructor(httpLink: HttpLink) {\n    const http = httpLink.create({ uri: '/graphql' });\n\n    const middleware = setContext(() => ({\n      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || null)\n    }));\n\n    // use with Apollo.create()\n    const link = middleware.concat(http);\n  }\n}\n")),Object(r.b)("h4",{id:"afterware-error-handling"},"Afterware (error handling)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Before")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { createNetworkInterface } from 'apollo-client';\nimport { logout } from './logout';\n\nconst networkInterface = createNetworkInterface({ uri: '/graphql' });\n\nnetworkInterface.useAfter([{\n  applyAfterware({ response }, next) {\n    if (response.status === 401) {\n      logout();\n    }\n    next();\n  }\n}]);\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"After")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { HttpLink } from 'apollo-angular-link-http';\nimport { onError } from 'apollo-link-error';\n\nimport { logout } from './logout';\n\nclass AppModule {\n  constructor(httpLink: HttpLink) {\n    const http = httpLink.create({ uri: '/graphql' });\n\n    const error = onError(({ networkError, graphQLErrors }) => {\n      if (networkError.statusCode === 401) {\n        logout();\n      }\n    })\n\n    // use with Apollo.create()\n    const link = error.concat(http);\n  }\n}\n")),Object(r.b)("h4",{id:"afterware-data-manipulation"},"Afterware (data manipulation)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Before")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { createNetworkInterface } from 'apollo-client';\n\nconst networkInterface = createNetworkInterface({ uri: '/graphql' });\n\nnetworkInterface.useAfter([{\n  applyAfterware({ response }, next) {\n    if (response.data.user.lastLoginDate) {\n      response.data.user.lastLoginDate = new Date(response.data.user.lastLoginDate)\n    }\n    next();\n  }\n}]);\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"After")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { ApolloLink } from 'apollo-link';\nimport { httpLink } from 'apollo-angular-link-http';\n\nclass AppModule {\n  constructor(httpLink: HttpLink) {\n    const http = httpLink.create({ uri: '/graphql' });\n    const addDates = new ApolloLink((operation, forward) => {\n      return forward(operation).map((response) => {\n        if (response.data.user.lastLoginDate) {\n          response.data.user.lastLoginDate = new Date(response.data.user.lastLoginDate)\n        }\n        return response;\n      })\n    });\n\n    // use with Apollo.create()\n    const link = addDates.concat(http);\n  }\n}\n")),Object(r.b)("p",null,"For more information on using Apollo Links, check out the ",Object(r.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/link"},"link docs!"),";"),Object(r.b)("h2",{id:"replacing-redux"},"Replacing Redux"),Object(r.b)("p",null,"The 2.0 moves away from using Redux as the caching layer in favor of Apollo maintaining its own store through the provided ",Object(r.b)("inlineCode",{parentName:"p"},"cache")," passed when creating a client. This allows the new version to be more flexible around how data is cached, and opens the storage of data to many new avenues and view integrations. If you were previously using the Redux integration to do something like logging, you can now use an Apollo Link to log whenever a request is sent to the server. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { ApolloLink } from 'apollo-link';\n\nconst logger = new ApolloLink((operation, forward) => {\n  console.log(operation.operationName);\n  return forward(operation).map((result) => {\n    console.log(`received result from ${operation.operationName}`);\n    return result;\n  })\n});\n")),Object(r.b)("p",null,"Ultimately we think the move off Redux will open the door for more powerful cache implementations and further performance gains. If you were using the Redux integration for other uses, please reach out or open an issue so we can help find a solution with the 2.0!"),Object(r.b)("h2",{id:"query-reducers"},"Query Reducers"),Object(r.b)("p",null,"Query reducers have been finally removed in the 2.0, instead we recommend using the more flexible ",Object(r.b)("a",{parentName:"p",href:"/docs/1.0/features/cache-updates#updating-after-a-mutation"},Object(r.b)("inlineCode",{parentName:"a"},"update"))," API instead of reducer."),Object(r.b)("h2",{id:"observable-variables"},"Observable variables"),Object(r.b)("p",null,"Apollo 2.0 doesn't (",Object(r.b)("a",{parentName:"p",href:"https://github.com/kamilkisiela/apollo-angular/issues/425"},"currently"),") support passing observables as query variables. For now you can work around this by using ",Object(r.b)("inlineCode",{parentName:"p"},"switchMap")," on the observable:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Before"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"this.apollo.watchQuery({\n    query: 'foo',\n    variables: { id: id$ },\n  })\n    .valueChanges\n    .subscribe((foo) => {\n      this.foo = foo;\n    });\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"After"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"id$\n  .switchMap((id) => {\n    return this.apollo.watchQuery({\n      query: 'foo',\n      variables: { id: id },\n    })\n      .valueChanges;\n  })\n    .subscribe((foo) => {\n      this.foo = foo;\n    });\n")))}u.isMDXComponent=!0}}]);