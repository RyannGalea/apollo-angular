(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{250:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||h[d]||a;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(8),a=(n(0),n(250)),i=["components"],l={title:"Authentication"},s={unversionedId:"recipes/authentication",id:"version-1.0/recipes/authentication",isDocsHomePage:!1,title:"Authentication",description:"Unless all of the data you are loading is completely public, your app has some sort of users, accounts and permissions systems. If different users have different permissions in your application, then you need a way to tell the server which user is associated with each request.",source:"@site/versioned_docs/version-1.0/recipes/authentication.md",slug:"/recipes/authentication",permalink:"/docs/1.0/recipes/authentication",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/recipes/authentication.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Pagination",permalink:"/docs/1.0/recipes/pagination"},next:{title:"Prefetching data",permalink:"/docs/1.0/recipes/prefetching"}},c=[{value:"Cookie",id:"cookie",children:[]},{value:"Header",id:"header",children:[{value:"Waiting for a refreshed token",id:"waiting-for-a-refreshed-token",children:[]}]},{value:"Reset store on logout",id:"reset-store-on-logout",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Unless all of the data you are loading is completely public, your app has some sort of users, accounts and permissions systems. If different users have different permissions in your application, then you need a way to tell the server which user is associated with each request."),Object(a.b)("p",null,"Apollo Client uses the ultra flexible ",Object(a.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/link"},"Apollo Link")," that includes several options for authentication."),Object(a.b)("h2",{id:"cookie"},"Cookie"),Object(a.b)("p",null,"If your app is browser based and you are using cookies for login and session management with a backend, it is very easy to tell your network interface to send the cookie along with every request."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { Apollo } from 'apollo-angular';\nimport { HttpLink } from 'apollo-angular-link-http';\n\n@NgModule({ ... })\nclass AppModule {\n  constructor(\n    apollo: Apollo,\n    httpLink: HttpLink\n  ) {\n    const link = httpLink.create({\n      uri: '/graphql',\n      withCredentials: true\n    });\n\n    apollo.create({\n      link,\n      // other options like cache\n    });\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"withCredentials")," is simply passed to the ",Object(a.b)("a",{parentName:"p",href:"https://angular.io/api/common/http/HttpClient"},Object(a.b)("inlineCode",{parentName:"a"},"HttpClient"))," used by the ",Object(a.b)("inlineCode",{parentName:"p"},"HttpLink")," when sending the query."),Object(a.b)("p",null,"Note: the backend must also allow credentials from the requested origin. e.g. if using the popular 'cors' package from npm in node.js."),Object(a.b)("h2",{id:"header"},"Header"),Object(a.b)("p",null,"Another common way to identify yourself when using HTTP is to send along an authorization header. Apollo Links make creating middlewares that lets you modify requests before they are sent to the server. It's easy to add an ",Object(a.b)("inlineCode",{parentName:"p"},"Authorization")," header to every HTTP request. In this example, we'll pull the login token from ",Object(a.b)("inlineCode",{parentName:"p"},"localStorage")," every time a request is sent."),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"graphql.module.ts"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { NgModule } from '@angular/core';\nimport { HttpClientModule } from '@angular/common/http';\nimport { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';\nimport { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';\nimport { InMemoryCache } from 'apollo-cache-inmemory';\nimport { ApolloLink } from 'apollo-link';\nimport { setContext } from 'apollo-link-context';\n\nconst uri = '/graphql';\n\nexport function provideApollo(httpLink: HttpLink) {\n  const basic = setContext((operation, context) => ({\n    headers: {\n      Accept: 'charset=utf-8'\n    }\n  }));\n\n  // Get the authentication token from local storage if it exists\n  const token = localStorage.getItem('token');\n  const auth = setContext((operation, context) => ({\n    headers: {\n      Authorization: `Bearer ${token}`\n    },\n  }));\n\n  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);\n  const cache = new InMemoryCache();\n\n  return {\n    link,\n    cache\n  }\n}\n\n@NgModule({\n  exports: [\n    HttpClientModule,\n    ApolloModule,\n    HttpLinkModule\n  ],\n  providers: [{\n    provide: APOLLO_OPTIONS,\n    useFactory: provideApollo,\n    deps: [HttpLink]\n  }]\n})\nexport class GraphQLModule {}\n\n")),Object(a.b)("p",null,"The server can use that header to authenticate the user and attach it to the GraphQL execution context, so resolvers can modify their behavior based on a user's role and permissions."),Object(a.b)("h3",{id:"waiting-for-a-refreshed-token"},"Waiting for a refreshed token"),Object(a.b)("p",null,"In the case that you need to a refresh a token, for example when using the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/AzureAD/azure-activedirectory-library-for-js"},"adal.js")," library, you can use an observable wrapped in a promise to wait for a new token:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { setContext } from 'apollo-link-context';\n\nconst auth = setContext(async(_, { headers }) => {\n  // Grab token if there is one in storage or hasn't expired\n  let token = this.auth.getCachedAccessToken();\n\n  if (!token) {\n    // An observable to fetch a new token\n    // Converted .toPromise()\n    await this.auth.acquireToken().toPromise();\n\n    // Set new token to the response (adal puts the new token in storage when fetched)\n    token = this.auth.getCachedAccessToken();\n  }\n  // Return the headers as usual\n  return {\n    headers: {\n      Authorization: `Bearer ${token}`,\n    },\n  };\n});\n")),Object(a.b)("h2",{id:"reset-store-on-logout"},"Reset store on logout"),Object(a.b)("p",null,"Since Apollo caches all of your query results, it's important to get rid of them when the login state changes."),Object(a.b)("p",null,"The easiest way to ensure that the UI and store state reflects the current user's permissions is to call ",Object(a.b)("inlineCode",{parentName:"p"},"Apollo.getClient().resetStore()")," after your login or logout process has completed. This will cause the store to be cleared and all active queries to be refetched."),Object(a.b)("p",null,"Another option is to reload the page, which will have a similar effect."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { Apollo } from \'apollo-angular\';\nimport gql from \'graphql-tag\';\n\nconst PROFILE_QUERY = gql`\n  query CurrentUserForLayout {\n    currentUser {\n      login\n      avatar_url\n    }\n  }\n`;\n\n@Injectable()\nclass AuthService {\nconstructor(private apollo: Apollo) {}\n  logout() {\n    // some app logic\n\n    // reset the store after that\n    this.apollo.getClient().resetStore();\n  }\n}\n\n@Component({\n  template: `\n    <ng-template *ngIf="loggedIn">\n      <user-card [user]="user"></user-card>\n      <button (click)="logout()">Logout</button>\n    </ng-template>\n\n    <button *ngIf="!loggedIn" (click)="goToLoginPage()">Go SignIn</button>\n  `\n})\nclass ProfileComponent {\n  apollo: Apollo;\n  auth: Auth;\n  user: any;\n  loggedIn: boolean;\n\n  ngOnInit() {\n    this.apollo.query({\n      query: PROFILE_QUERY,\n      fetchPolicy: \'network-only\'\n    }).subscribe(({data}) => {\n      this.user = data.currentUser;\n    });\n  }\n\n  logout() {\n    this.loggedIn = false;\n    this.auth.logout();\n  }\n}\n')))}u.isMDXComponent=!0}}]);