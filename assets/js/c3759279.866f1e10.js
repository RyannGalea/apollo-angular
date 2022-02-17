(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(8),r=(n(0),n(250)),i=["components"],l={title:"Queries",description:"Fetch data with the Apollo service"},s={unversionedId:"data/queries",id:"data/queries",isDocsHomePage:!1,title:"Queries",description:"Fetch data with the Apollo service",source:"@site/docs/data/queries.md",slug:"/data/queries",permalink:"/docs/data/queries",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/data/queries.md",version:"current",sidebar:"docs",previous:{title:"Get started",permalink:"/docs/get-started"},next:{title:"Mutations",permalink:"/docs/data/mutations"}},p=[{value:"Basic Queries",id:"basic-queries",children:[{value:"What is QueryRef",id:"what-is-queryref",children:[]}]},{value:"Providing <code>options</code>",id:"providing-options",children:[]},{value:"Using with AsyncPipe",id:"using-with-asyncpipe",children:[]},{value:"Updating cached query results",id:"updating-cached-query-results",children:[{value:"Polling",id:"polling",children:[]},{value:"Refetching",id:"refetching",children:[]}]},{value:"Inspecting error states",id:"inspecting-error-states",children:[]},{value:"Loading state",id:"loading-state",children:[]}],c={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"On this page, you can learn how to use Apollo to attach GraphQL query results to\nyour Angular UI. This guide assumes some familiarity with GraphQL itself. You\ncan read about GraphQL queries themselves in detail at\n",Object(r.b)("a",{parentName:"p",href:"http://graphql.org/docs/queries/"},"graphql.org"),"."),Object(r.b)("p",null,"One of our core values is \"it's just GraphQL.\" When using Apollo Client, you\ndon't have to learn anything special about the query syntax, since everything is\njust standard GraphQL. Anything you can type into the GraphQL query IDE, you\ncan also put into your Apollo Client code."),Object(r.b)("h2",{id:"basic-queries"},"Basic Queries"),Object(r.b)("p",null,"When we are using a basic query, we can use the ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery")," method in a\nvery simple way. We simply need to parse our query into a GraphQL document using\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," tag from ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular")," library."),Object(r.b)("p",null,"For instance, ",Object(r.b)("a",{parentName:"p",href:"https://graphql-voter-app.herokuapp.com/"},"in our example"),", we want to display a list of posts in ",Object(r.b)("inlineCode",{parentName:"p"},"Posts")," component:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component, OnInit, OnDestroy } from '@angular/core';\nimport { Subscription } from 'rxjs';\nimport { Apollo, gql } from 'apollo-angular';\n\n// We use the gql tag to parse our query string into a query document\nconst GET_POSTS = gql`\n  query GetPosts {\n    posts {\n      id\n      title\n    }\n  }\n`;\n\n@Component({ ... })\nclass PostsComponent implements OnInit, OnDestroy {\n  loading: boolean;\n  posts: any;\n\n  private querySubscription: Subscription;\n\n  constructor(private apollo: Apollo) {}\n\n  ngOnInit() {\n    this.querySubscription = this.apollo.watchQuery<any>({\n      query: GET_POSTS\n    })\n      .valueChanges\n      .subscribe(({ data, loading }) => {\n        this.loading = loading;\n        this.posts = data.posts;\n      });\n  }\n\n  ngOnDestroy() {\n    this.querySubscription.unsubscribe();\n  }\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"watchQuery")," method returns a ",Object(r.b)("inlineCode",{parentName:"p"},"QueryRef")," object which has the ",Object(r.b)("inlineCode",{parentName:"p"},"valueChanges"),"\nproperty that is an ",Object(r.b)("inlineCode",{parentName:"p"},"Observable"),"."),Object(r.b)("p",null,"We can see that the result object contains ",Object(r.b)("inlineCode",{parentName:"p"},"loading"),', a Boolean indicating if\nthe query is "in-flight." The observable will only emit once when the query is\ncomplete, and ',Object(r.b)("inlineCode",{parentName:"p"},"loading")," will be set to false unless you set the ",Object(r.b)("inlineCode",{parentName:"p"},"watchQuery"),"\nparameters ",Object(r.b)("inlineCode",{parentName:"p"},"notifyOnNetworkStatusChange")," to true. Once\nthe query has completed, it will also contain a ",Object(r.b)("inlineCode",{parentName:"p"},"data")," object with\n",Object(r.b)("inlineCode",{parentName:"p"},"posts"),", the field we've picked out in ",Object(r.b)("inlineCode",{parentName:"p"},"GetPosts")," operation."),Object(r.b)("p",null,"It's also possible to fetch data only once. The ",Object(r.b)("inlineCode",{parentName:"p"},"query")," method of ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo"),"\nservice returns an ",Object(r.b)("inlineCode",{parentName:"p"},"Observable")," that also resolves with the same result as\nabove."),Object(r.b)("p",null,"Imagine you have two views (routes), one of them has the ",Object(r.b)("inlineCode",{parentName:"p"},"Posts")," component. When you switch between views, you'll notice that the list of posts loads instantly the second time. This is the Apollo cache at work!"),Object(r.b)("h3",{id:"what-is-queryref"},"What is QueryRef"),Object(r.b)("p",null,"As you know, ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.query")," method returns an Observable that emits a result,\njust once. ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery")," also does the same, except it can emit multiple\nresults. (The GraphQL query itself is still only sent once, but the ",Object(r.b)("inlineCode",{parentName:"p"},"watchQuery"),"\nobservable can also update if, for example, another query causes the object to\nbe updated within Apollo Client's global cache.)"),Object(r.b)("p",null,"So why doesn't ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery")," expose an Observable?"),Object(r.b)("p",null,"Apollo service and ApolloClient share pretty much the same API. It makes things\neasy to understand and use. No reason to change it."),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloClient.watchQuery")," returns an Observable, but not a standard one, it\ncontains many useful methods (like ",Object(r.b)("inlineCode",{parentName:"p"},"refetch()"),") to manipulate the watched query.\nA normal Observable, has only one method, ",Object(r.b)("inlineCode",{parentName:"p"},"subscribe()"),"."),Object(r.b)("p",null,"To use that Apollo's Observable in RxJS, we would have to drop those methods.\nSince they are necessary to use Apollo to its full potential, we had to come up\nwith a solution."),Object(r.b)("p",null,"This is why we created ",Object(r.b)("inlineCode",{parentName:"p"},"QueryRef"),"."),Object(r.b)("p",null,"The API of ",Object(r.b)("inlineCode",{parentName:"p"},"QueryRef")," is very simple. It has the same methods as the Apollo\nObservable we talked about. To subscribe to query results, you have to access its\n",Object(r.b)("inlineCode",{parentName:"p"},"valueChanges")," property which exposes a clean RxJS Observable."),Object(r.b)("p",null,"It's worth mentioning that ",Object(r.b)("inlineCode",{parentName:"p"},"QueryRef")," accepts two generic types."),Object(r.b)("h2",{id:"providing-options"},"Providing ",Object(r.b)("inlineCode",{parentName:"h2"},"options")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"watchQuery")," and ",Object(r.b)("inlineCode",{parentName:"p"},"query")," methods expect one argument, an object with options. If\nyou want to configure the query, you can provide any available option in the\nsame object where the ",Object(r.b)("inlineCode",{parentName:"p"},"query")," key lives."),Object(r.b)("p",null,"If your query takes variables, this is the place to pass them in:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"// Suppose our profile query took an avatar size\nconst GET_POSTS_OF_AUTHOR = gql`\n  query GetPostsOfAuthor($authorId: Int!) {\n    postsOf(authorId: $authorId) {\n      id\n      title\n    }\n  }\n`;\n\n@Component({ ... })\nclass PostsOfUserComponent implements OnInit, OnDestroy {\n  posts: any;\n\n  private querySubscription: Subscription;\n\n  ngOnInit() {\n    this.querySubscription = this.apollo\n      .watchQuery({\n        query: GET_POSTS_OF_AUTHOR,\n        variables: {\n          authorId: 12,\n        },\n      })\n      .valueChanges.subscribe(({data}) => {\n        this.posts = data.postsOf;\n      });\n  }\n  ngOnDestroy() {\n    this.querySubscription.unsubscribe();\n  }\n}\n")),Object(r.b)("h2",{id:"using-with-asyncpipe"},"Using with AsyncPipe"),Object(r.b)("p",null,"In Angular, the simplest way of displaying data that comes from Observable is to\nput ",Object(r.b)("inlineCode",{parentName:"p"},"AsyncPipe")," on top of the property inside the UI. You can also achieve this\nwith Apollo."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Using async pipe more than once in your template will trigger the query for each pipe. To avoid this situation, subscribe to the data in the component, and display the data from the component's property.")),Object(r.b)("p",null,"An Observable returned by ",Object(r.b)("inlineCode",{parentName:"p"},"watchQuery().valueChanges")," holds the actual result\nunder the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," field, so you can not directly access one of the properties of\nthat object."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import {Component, OnInit} from '@angular/core';\nimport {Apollo, gql} from 'apollo-angular';\nimport {Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\nconst GET_FEED = gql`\n  query GetFeed {\n    authors {\n      id\n      firstName\n      lastName\n    }\n    posts {\n      it\n      title\n    }\n  }\n`;\n\n@Component({\n  template: `\n    <ul>\n      <li *ngFor=\"let post of posts | async\">\n        {{ post.title }}\n      </li>\n    </ul>\n  `,\n})\nclass FeedComponent implements OnInit {\n  posts: Observable<any>;\n\n  constructor(private apollo: Apollo) {}\n\n  ngOnInit() {\n    this.posts = this.apollo\n      .watchQuery({query: GET_FEED})\n      .valueChanges.pipe(map((result) => result.data.posts));\n  }\n}\n")),Object(r.b)("p",null,"The result of the query has this structure:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescripton"},'{\n  "data": {\n    "authors": [ ... ],\n    "posts": [ ... ]\n  }\n}\n')),Object(r.b)("p",null,"Without using the ",Object(r.b)("inlineCode",{parentName:"p"},"map")," operator, you would get the whole object instead of only the\n",Object(r.b)("inlineCode",{parentName:"p"},"data.posts"),"."),Object(r.b)("h2",{id:"updating-cached-query-results"},"Updating cached query results"),Object(r.b)("p",null,"Caching query results is handy and easy to do, but sometimes you want to make sure that cached data is up to date with your server. Apollo Client supports two strategies for this: ",Object(r.b)("strong",{parentName:"p"},"polling")," and ",Object(r.b)("strong",{parentName:"p"},"refetching"),"."),Object(r.b)("h3",{id:"polling"},"Polling"),Object(r.b)("p",null,"Polling provides near-real-time synchronization with your server by causing a query to execute periodically at a specified interval. To enable polling for a query, pass a ",Object(r.b)("inlineCode",{parentName:"p"},"pollInterval")," configuration option to the ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery")," with an interval in milliseconds:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component, OnInit, OnDestroy } from '@angular/core';\nimport { Subscription } from 'rxjs';\nimport { Apollo, gql } from 'apollo-angular';\n\n// We use the gql tag to parse our query string into a query document\nconst GET_POSTS = gql`\n  query GetPosts {\n    posts {\n      id\n      title\n    }\n  }\n`;\n\n@Component({ ... })\nclass PostsComponent implements OnInit, OnDestroy {\n  loading: boolean;\n  posts: any;\n\n  private querySubscription: Subscription;\n\n  constructor(private apollo: Apollo) {}\n\n  ngOnInit() {\n    this.querySubscription = this.apollo.watchQuery<any>({\n      query: GET_POSTS,\n      pollInterval: 500,\n    })\n      .valueChanges\n      .subscribe(({ data, loading }) => {\n        this.loading = loading;\n        this.posts = data.posts;\n      });\n  }\n\n  ngOnDestroy() {\n    this.querySubscription.unsubscribe();\n  }\n}\n")),Object(r.b)("p",null,"By setting the ",Object(r.b)("inlineCode",{parentName:"p"},"pollInterval")," to ",Object(r.b)("inlineCode",{parentName:"p"},"500"),", you'll fetch the list of posts from the server every 0.5 seconds. Note that if you set ",Object(r.b)("inlineCode",{parentName:"p"},"pollInterval")," to ",Object(r.b)("inlineCode",{parentName:"p"},"0"),", the query will ",Object(r.b)("strong",{parentName:"p"},"not")," poll."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can also start and stop polling dynamically with the ",Object(r.b)("inlineCode",{parentName:"p"},"startPolling")," and ",Object(r.b)("inlineCode",{parentName:"p"},"stopPolling")," functions that are available in the ",Object(r.b)("inlineCode",{parentName:"p"},"QueryRef")," object returned by ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery()"))),Object(r.b)("h3",{id:"refetching"},"Refetching"),Object(r.b)("p",null,"Refetching enables you to refresh query results in response to a particular user action, as opposed to using a fixed interval."),Object(r.b)("p",null,"Let's add a button to our ",Object(r.b)("inlineCode",{parentName:"p"},"Posts")," component that calls our query's refetch function whenever it's clicked."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can optionally provide a new ",Object(r.b)("inlineCode",{parentName:"p"},"variables")," object to the refetch function. If you don't (as is the case in the following example), the query uses the same variables that it used in its previous execution.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component, OnInit, OnDestroy } from '@angular/core';\nimport { Subscription } from 'rxjs';\nimport { Apollo, QueryRef, gql } from 'apollo-angular';\n\n// We use the gql tag to parse our query string into a query document\nconst GET_POSTS = gql`\n  query GetPosts {\n    posts {\n      id\n      title\n    }\n  }\n`;\n\n@Component({ ... })\nclass PostsComponent implements OnInit, OnDestroy {\n  loading: boolean;\n  posts: any;\n  postsQuery: QueryRef<any>;\n\n  private querySubscription: Subscription;\n\n  constructor(private apollo: Apollo) {}\n\n  ngOnInit() {\n    this.postsQuery = this.apollo.watchQuery<any>({\n      query: GET_POSTS,\n      pollInterval: 500,\n    });\n    this.querySubscription = this.postsQuery\n      .valueChanges\n      .subscribe(({ data, loading }) => {\n        this.loading = loading;\n        this.posts = data.posts;\n      });\n  }\n\n  refresh() {\n    this.postsQuery.refetch()\n  }\n\n  ngOnDestroy() {\n    this.querySubscription.unsubscribe();\n  }\n}\n")),Object(r.b)("p",null,"Call the ",Object(r.b)("inlineCode",{parentName:"p"},"refresh")," method and notice that the UI updates with a new dog photo. Refetching is an excellent way to guarantee fresh data, but it introduces some complexity with loading state. In the next section, we'll cover strategies for handling complex loading and error state."),Object(r.b)("h2",{id:"inspecting-error-states"},"Inspecting error states"),Object(r.b)("p",null,"You can customize your query error handling by providing the ",Object(r.b)("inlineCode",{parentName:"p"},"errorPolicy")," configuration option to ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.query"),". The default value is ",Object(r.b)("inlineCode",{parentName:"p"},"none"),", which tells Apollo Angular to treat all GraphQL errors as runtime errors. In this case, Apollo Angular discards any query response data returned by the server and sets the error property in the result object to true."),Object(r.b)("p",null,"If you set ",Object(r.b)("inlineCode",{parentName:"p"},"errorPolicy")," to ",Object(r.b)("inlineCode",{parentName:"p"},"all"),", Apollo Angular does not discard query response data, allowing you to render partial results."),Object(r.b)("h2",{id:"loading-state"},"Loading state"),Object(r.b)("p",null,"Every response you get from ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery()")," contains ",Object(r.b)("inlineCode",{parentName:"p"},"loading")," property. By default, it's always ",Object(r.b)("inlineCode",{parentName:"p"},"false")," and the first result is emitted with the response from the ApolloLink execution chain. In order to correct it you can enable ",Object(r.b)("inlineCode",{parentName:"p"},"useInitialLoading")," flag in configuration."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import {HttpClientModule} from '@angular/common/http';\nimport {ApolloModule, APOLLO_OPTIONS, APOLLO_FLAGS} from 'apollo-angular';\nimport {HttpLink} from 'apollo-angular/http';\nimport {InMemoryCache} from '@apollo/client/core';\n\n@NgModule({\n  imports: [BrowserModule, ApolloModule, HttpClientModule],\n  providers: [\n    {\n      provide: APOLLO_FLAGS,\n      useValue: {\n        useInitialLoading: true, // enable it here\n      },\n    },\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory: (httpLink: HttpLink) => {\n        return {\n          cache: new InMemoryCache(),\n          link: httpLink.create({\n            uri: 'https://48p1r2roz4.sse.codesandbox.io',\n          }),\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nexport class AppModule {}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"useInitialLoading")," is disabled to avoid any breaking changes, this may be enabled in next major version.")))}u.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(h,l(l({ref:t},p),{},{components:n})):a.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);