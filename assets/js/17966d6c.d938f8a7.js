"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7387],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77626:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={sidebar_position:6,title:"Custom Deployment",keywords:["Custom"],description:"Custom Deployment"},c=void 0,l={unversionedId:"deployment/deployment-custom",id:"version-2.4.3/deployment/deployment-custom",isDocsHomePage:!1,title:"Custom Deployment",description:"Custom Deployment",source:"@site/versioned_docs/version-2.4.3/deployment/deployment-custom.md",sourceDirName:"deployment",slug:"/deployment/deployment-custom",permalink:"/docs/deployment/deployment-custom",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.3/deployment/deployment-custom.md",version:"2.4.3",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Custom Deployment",keywords:["Custom"],description:"Custom Deployment"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Helm Deployment",permalink:"/docs/deployment/deployment-helm"},next:{title:"Quick start with Dubbo",permalink:"/docs/quick-start/quick-start-dubbo"}},u=[{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Build your own gateway (recommended)",id:"build-your-own-gateway-recommended",children:[]}],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article describes how to build your own gateway based on ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"."),(0,a.kt)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"docker reference docker deployment Apache ShenYu Admin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"liunx/windows reference binary packages deployment Apache ShenYu Admin"))),(0,a.kt)("h3",{id:"build-your-own-gateway-recommended"},"Build your own gateway (recommended)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"first create an empty ",(0,a.kt)("inlineCode",{parentName:"p"},"springboot")," project, you can refer to ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),", or you can create it on ",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/quickstart"},"spring official website"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"introduce the following ",(0,a.kt)("inlineCode",{parentName:"p"},"jar")," package:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n   <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-webflux</artifactId>\n        <version>2.2.2.RELEASE</version>\n   </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n        <version>2.2.2.RELEASE</version>\n   </dependency>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-gateway</artifactId>\n        <version>${current.version}</version>\n   </dependency>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sync-data-websocket</artifactId>\n        <version>${current.version}</version>\n   </dependency>\n</dependencies>\n")),(0,a.kt)("p",null,"among them, ",(0,a.kt)("inlineCode",{parentName:"p"},"${project.version}")," please use the current latest version."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add the following configuration to your ",(0,a.kt)("inlineCode",{parentName:"li"},"application.yaml")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  main:\n    allow-bean-definition-overriding: true\nmanagement:\n  health:\n    defaults:\n      enabled: false\nshenyu:\n  sync:\n    websocket:\n      urls: ws://localhost:9095/websocket  //set to your shenyu-admin address\n")))}d.isMDXComponent=!0}}]);