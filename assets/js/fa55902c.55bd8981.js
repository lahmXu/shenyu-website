"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7272],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?i.createElement(g,l(l({ref:t},c),{},{components:n})):i.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4377:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],o={title:"JWT plugin",keywords:["JWT"],description:"JWT plugin"},u=void 0,p={unversionedId:"plugin-center/authority-and-certification/jwt-plugin",id:"plugin-center/authority-and-certification/jwt-plugin",isDocsHomePage:!1,title:"JWT plugin",description:"JWT plugin",source:"@site/docs/plugin-center/authority-and-certification/jwt-plugin.md",sourceDirName:"plugin-center/authority-and-certification",slug:"/plugin-center/authority-and-certification/jwt-plugin",permalink:"/docs/next/plugin-center/authority-and-certification/jwt-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/docs/plugin-center/authority-and-certification/jwt-plugin.md",version:"current",frontMatter:{title:"JWT plugin",keywords:["JWT"],description:"JWT plugin"},sidebar:"tutorialSidebar",previous:{title:"Sentinel Plugin",permalink:"/docs/next/plugin-center/fault-tolerance/sentinel-plugin"},next:{title:"OAuth2 Plugin",permalink:"/docs/next/plugin-center/authority-and-certification/oauth2-plugin"}},c=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Use",id:"plugin-use",children:[]},{value:"Situation",id:"situation",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"jwt")," plug-in is for the ",(0,a.kt)("inlineCode",{parentName:"li"},"token")," attribute or ",(0,a.kt)("inlineCode",{parentName:"li"},"authorization")," of the http request header to carry the attribute value for authentication judgment and judge ",(0,a.kt)("inlineCode",{parentName:"li"},"OAuth2.0")," .")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," document, choose a way to start ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),". For example, through ",(0,a.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"Local Deployment")," to start the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," management system ."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," BasicConfig --\x3e plugin -> ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt")," set to enable. If you don't want to use this function, please disable this plugin in the ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"."),(0,a.kt)("img",{src:"/img/shenyu/plugin/jwt/jwt_open_en.jpg",width:"80%",height:"80%"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add configuration mode in plugin editing."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},'{"secretKey":"","filterPath":[]}'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"secretKey"),": The private key when using ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt")," to generate ",(0,a.kt)("inlineCode",{parentName:"p"},"token"),", it is required.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"filterPath"),"\uff1aAuthentication whitelist list, fill in the API path of the request interface.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/cloud/shenyu")," , filterPath just add ",(0,a.kt)("inlineCode",{parentName:"p"},"/cloud/shenyu"),"."))))),(0,a.kt)("h2",{id:"plugin-use"},"Plugin Use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add support for ",(0,a.kt)("inlineCode",{parentName:"li"},"jwt")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu jwt plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-jwt</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu jwt plugin end--\x3e\n  \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For more instructions on selector and rule configuration, please refer to: ",(0,a.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),".")),(0,a.kt)("h2",{id:"situation"},"Situation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Requires unified authentication at the gateway.")))}d.isMDXComponent=!0}}]);