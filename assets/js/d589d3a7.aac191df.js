(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(85)),i={title:"Installation and Usage",slug:"/installation"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Installation and Usage",description:"Setup",source:"@site/docs/getting-started.md",slug:"/installation",permalink:"/react-native-bidirectional-infinite-scroll/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/react-native-bidirectional-infinite-scroll/"},next:{title:"How it works",permalink:"/react-native-bidirectional-infinite-scroll/how-it-works"}},l=[{value:"Setup",id:"setup",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("h4",{id:"npm"},"NPM"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ npm i react-native-bidirectional-infinite-scroll @stream-io/flat-list-mvcp\n")),Object(o.b)("h4",{id:"yarn"},"Yarn"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ yarn add react-native-bidirectional-infinite-scroll @stream-io/flat-list-mvcp\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Please check the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/GetStream/react-native-bidirectional-infinite-scroll/tree/main/example"},"example app")," for working demo."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { FlatList } from \"react-native-bidirectional-infinite-scroll\";\n\nexport const App = () => {\n  // All your business logic here\n\n  return (\n    <FlatList\n      data={numbers}\n      renderItem={ListItem}\n      keyExtractor={(item) => item.toString()}\n      onStartReached={onStartReached} // required, should return a promise\n      onEndReached={onEndReached} // required, should return a promise\n      showDefaultLoadingIndicators={true} // optional\n      onStartReachedThreshold={10} // optional\n      onEndReachedThreshold={10} // optional\n      activityIndicatorColor={'black'} // optional\n      HeaderLoadingIndicator={() => { /** Your loading indicator */ }} // optional\n      FooterLoadingIndicator={() => { /** Your loading indicator */ }} // optional\n      enableAutoscrollToTop={false} // optional | default - false\n      // You can use any other prop on react-native's FlatList\n    />\n  )\n}\n")))}u.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);