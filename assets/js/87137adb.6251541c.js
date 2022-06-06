"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[85885],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18523:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],p={title:"Code Analysis For Param-Mapping Plugin",author:"Kunshuai Zhu",author_title:"Apache ShenYu Contributor",author_url:"https://github.com/JooKS-me",author_image_url:"https://avatars1.githubusercontent.com/u/62384022?v=4",tags:["Param-Mapping","Apache ShenYu"]},l=void 0,s={permalink:"/blog/Plugin-SourceCode-Analysis-Param-Mapping-Plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/blog/Plugin-SourceCode-Analysis-Param-Mapping-Plugin.md",source:"@site/blog/Plugin-SourceCode-Analysis-Param-Mapping-Plugin.md",title:"Code Analysis For Param-Mapping Plugin",description:"Before starting, you can refer to this article to start the gateway",date:"2022-06-06T14:08:13.200Z",formattedDate:"June 6, 2022",tags:[{label:"Param-Mapping",permalink:"/blog/tags/param-mapping"},{label:"Apache ShenYu",permalink:"/blog/tags/apache-shen-yu"}],readingTime:4.72,truncated:!1,prevItem:{title:"Code Analysis For Divide Plugin",permalink:"/blog/Plugin-SourceCode-Analysis-Divide-Plugin"},nextItem:{title:"Register Center Source Code Analysis of Http Register",permalink:"/blog/RegisterCenter-SourceCode-Analysis-Http-Register"}},u=[{value:"Body",id:"body",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:u};function c(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Before starting, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"./start-demo"},"this article")," to start the gateway")),(0,o.kt)("h3",{id:"body"},"Body"),(0,o.kt)("p",null,"Let's take a look at the structure of this plugin first, as shown in the figure below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"param-mapping-structure",src:n(75678).Z})),(0,o.kt)("p",null,"Guess: handler is used for data synchronization; strategy may be adapted to various request bodies, which should be the focus of this plugin; ",(0,o.kt)("inlineCode",{parentName:"p"},"ParamMappingPlugin")," should be the implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"ShenyuPlugin"),"."),(0,o.kt)("p",null,"First, take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"ParamMappingPlugin"),", the focus is on the override of the ",(0,o.kt)("inlineCode",{parentName:"p"},"doExecute")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public Mono<Void> doExecute(final ServerWebExchange exchange, final ShenyuPluginChain chain, final SelectorData selector, final RuleData rule) {\n    ... // judge whether paramMappingHandle is null\n    // Determine the request body type according to the contentType in the header line\n    HttpHeaders headers = exchange.getRequest().getHeaders();\n    MediaType contentType = headers.getContentType();\n    // *\n    return match(contentType).apply(exchange, chain, paramMappingHandle);\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The match method returns the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"Operator")," according to contentType"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private Operator match(final MediaType mediaType) {\n    if (MediaType.APPLICATION_JSON.isCompatibleWith(mediaType)) {\n        return operatorMap.get(MediaType.APPLICATION_JSON.toString());\n    } else if (MediaType.APPLICATION_FORM_URLENCODED.isCompatibleWith(mediaType)) {\n        return operatorMap.get(MediaType.APPLICATION_FORM_URLENCODED.toString());\n    } else {\n        return operatorMap.get(Constants.DEFAULT);\n    }\n}\n")),(0,o.kt)("p",{parentName:"li"},"As can be seen from the code of the match method, there are currently three types of ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultOperator"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"FormDataOperator"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonOperator"),", which support the request body in two formats: ",(0,o.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),"."))),(0,o.kt)("p",null,"So let's take a look at what the above three operators are like."),(0,o.kt)("h4",{id:"1-defaultoperator"},"1. DefaultOperator"),(0,o.kt)("p",null,"Nothing happens, its apply method just continues to execute the plug-in chain, and has no real function. When the request body does not match the Operator, it will be skipped by ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultOperator"),"."),(0,o.kt)("h4",{id:"2-formdataoperator"},"2. FormDataOperator"),(0,o.kt)("p",null,"This class is used to process the request body in the format of ",(0,o.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded"),"."),(0,o.kt)("p",null,"Mainly depends on the ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," method, but it looks a bit strange."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public Mono<Void> apply(final ServerWebExchange exchange, final ShenyuPluginChain shenyuPluginChain, final ParamMappingHandle paramMappingHandle) {\n    return exchange.getFormData()\n            .switchIfEmpty(Mono.defer(() -> Mono.just(new LinkedMultiValueMap<>())))\n            .flatMap(multiValueMap -> {\n                ...\n            });\n}\n")),(0,o.kt)("p",null,"The code in the ellipsis is the processing of the request body, as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// judge whether it is empty\nif (Objects.isNull(multiValueMap) || multiValueMap.isEmpty()) {\n    return shenyuPluginChain.execute(exchange);\n}\n// convert form-data to json\nString original = GsonUtils.getInstance().toJson(multiValueMap);\nLOG.info("get from data success data:{}", original);\n// *modify request body*\nString modify = operation(original, paramMappingHandle);\nif (StringUtils.isEmpty(modify)) {\n    return shenyuPluginChain.execute(exchange);\n}\n...\n// Convert the modified json into LinkedMultiValueMap. Pay attention to this line, it will be mentioned later!\nLinkedMultiValueMap<String, String> modifyMap = GsonUtils.getInstance().toLinkedMultiValueMap(modify);\n...\nfinal BodyInserter bodyInserter = BodyInserters.fromValue(modifyMap);\n...\n// modify the request body in the exchange, and then continue to execute the plugin chain\nreturn bodyInserter.insert(cachedBodyOutputMessage, new BodyInserterContext())\n        .then(Mono.defer(() -> shenyuPluginChain.execute(exchange.mutate()\n                .request(new ModifyServerHttpRequestDecorator(httpHeaders, exchange.getRequest(), cachedBodyOutputMessage))\n                .build())\n        )).onErrorResume((Function<Throwable, Mono<Void>>) throwable -> release(cachedBodyOutputMessage, throwable));\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"PS: The omitted part is to set the request first and other operations.")),(0,o.kt)("p",null,"The more important thing above should be the modification request body of the star, that is, the call of the ",(0,o.kt)("inlineCode",{parentName:"p"},"operation")," method. Here, because of the parameter type, the default method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Operator")," interface will be called first (instead of being overridden by the ",(0,o.kt)("inlineCode",{parentName:"p"},"FormDataOperator"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"default String operation(final String jsonValue, final ParamMappingHandle paramMappingHandle) {\n    DocumentContext context = JsonPath.parse(jsonValue);\n    // call the override operation method and add addParameterKey\n    operation(context, paramMappingHandle);\n    // replace the related replacedParameterKey\n    if (!CollectionUtils.isEmpty(paramMappingHandle.getReplaceParameterKeys())) {\n        paramMappingHandle.getReplaceParameterKeys().forEach(info -> {\n            context.renameKey(info.getPath(), info.getKey(), info.getValue());\n        });\n    }\n    // Delete the related removeParameterKey\n    if (!CollectionUtils.isEmpty(paramMappingHandle.getRemoveParameterKeys())) {\n        paramMappingHandle.getRemoveParameterKeys().forEach(info -> {\n            context.delete(info);\n        });\n    }\n    return context.jsonString();\n}\n")),(0,o.kt)("p",null,"After sorting it out, we can find that the json tool ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/json-path/JsonPath"},"JsonPath")," imported here makes the processing of the request body much simpler and clearer."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In addition, we can notice that the ",(0,o.kt)("inlineCode",{parentName:"strong"},"FormDataOperator")," overrides the ",(0,o.kt)("inlineCode",{parentName:"strong"},"operation(DocumentContext, ParamMappingHandle)")," method.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why override it?")," There is a default method for handling addParameterKey in the interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Default method in Operator interface\ndefault void operation(final DocumentContext context, final ParamMappingHandle paramMappingHandle) {\n    if (!CollectionUtils.isEmpty(paramMappingHandle.getAddParameterKeys())) {\n        paramMappingHandle.getAddParameterKeys().forEach(info -> {\n            context.put(info.getPath(), info.getKey(), info.getValue()); //\u4e0d\u540c\u4e4b\u5904\n        });\n    }\n}\n\n// method overridden by FormDataOperator\n@Override\npublic void operation(final DocumentContext context, final ParamMappingHandle paramMappingHandle) {\n    if (!CollectionUtils.isEmpty(paramMappingHandle.getAddParameterKeys())) {\n        paramMappingHandle.getAddParameterKeys().forEach(info -> {\n            context.put(info.getPath(), info.getKey(), Arrays.asList(info.getValue()));\n        });\n    }\n}\n")),(0,o.kt)("p",null,"In fact, there is such a line in ",(0,o.kt)("inlineCode",{parentName:"p"},"FormDataOperator#apply")," (mentioned earlier):\n",(0,o.kt)("inlineCode",{parentName:"p"},"LinkedMultiValueMap<String, String> modifyMap = GsonUtils.getInstance().toLinkedMultiValueMap(modify);")),(0,o.kt)("p",null,"This line converts the modified json into ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkedMultiValueMap"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GsonUtils#toLinkedMultiValueMap")," is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public LinkedMultiValueMap<String, String> toLinkedMultiValueMap(final String json) {\n    return GSON.fromJson(json, new TypeToken<LinkedMultiValueMap<String, String>>() {\n    }.getType());\n}\n")),(0,o.kt)("p",null,"The attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"targetMap")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkedMultiValueMap")," class is defined as: ",(0,o.kt)("inlineCode",{parentName:"p"},"private final Map<K, List<V>> targetMap")),(0,o.kt)("p",null,"Therefore, the value in the json string must be in the form of a list, otherwise Gson will throw a conversion error exception, which is why the ",(0,o.kt)("inlineCode",{parentName:"p"},"FormDataOperator")," must override the operator method."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"But why use ",(0,o.kt)("inlineCode",{parentName:"strong"},"LinkedMultiValueMap"),"?")),(0,o.kt)("p",null,"Go back to the first line ",(0,o.kt)("inlineCode",{parentName:"p"},"exchange.getFormData")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"FormDataOperator#apply")," method. In SpringMVC, the return value type of ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultServerWebExchange#getFormData")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Mono<MultiValueMap<String, String>>"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkedMultiValueMap")," is a subclass of ",(0,o.kt)("inlineCode",{parentName:"p"},"MultiValueMap"),". And, the ",(0,o.kt)("inlineCode",{parentName:"p"},"getFormData")," method is for the request body in the format of ",(0,o.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"param-mapping-getFormData",src:n(60425).Z})),(0,o.kt)("h4",{id:"\u4e09jsonoperator"},"\u4e09\u3001JsonOperator"),(0,o.kt)("p",null,"Obviously, this class is used to process the request body in Json format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public Mono<Void> apply(final ServerWebExchange exchange, final ShenyuPluginChain shenyuPluginChain, final ParamMappingHandle paramMappingHandle) {\n    ServerRequest serverRequest = ServerRequest.create(exchange, MESSAGE_READERS);\n    Mono<String> mono = serverRequest.bodyToMono(String.class).switchIfEmpty(Mono.defer(() -> Mono.just(""))).flatMap(originalBody -> {\n        LOG.info("get body data success data:{}", originalBody);\n        // call the default operation method to modify the request body\n        String modify = operation(originalBody, paramMappingHandle);\n        return Mono.just(modify);\n    });\n    BodyInserter bodyInserter = BodyInserters.fromPublisher(mono, String.class);\n    ... //process the header line\n    CachedBodyOutputMessage outputMessage = new CachedBodyOutputMessage(exchange, headers);\n    // modify the request body in the exchange, and then continue to execute the plugin chain\n    return bodyInserter.insert(outputMessage, new BodyInserterContext())\n            .then(Mono.defer(() -> {\n                ServerHttpRequestDecorator decorator = new ModifyServerHttpRequestDecorator(headers, exchange.getRequest(), outputMessage);\n                return shenyuPluginChain.execute(exchange.mutate().request(decorator).build());\n            })).onErrorResume((Function<Throwable, Mono<Void>>) throwable -> release(outputMessage, throwable));\n}\n')),(0,o.kt)("p",null,"The processing flow of ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonOperator")," is roughly similar to that of ",(0,o.kt)("inlineCode",{parentName:"p"},"FormDataOperator"),"."),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Finally, use a picture to briefly summarize."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"param-mapping-summary",src:n(24534).Z})))}c.isMDXComponent=!0},60425:function(e,t,n){t.Z=n.p+"assets/images/param-mapping-getFormData-04b664908cd5f52d149eb1098d5648c9.png"},75678:function(e,t,n){t.Z=n.p+"assets/images/param-mapping-structure-1d2b4243e835eeff74fc6ea114dcbee7.png"},24534:function(e,t,n){t.Z=n.p+"assets/images/param-mapping-summary-490cf9ee499bf9efc03d0c963b39118c.jpg"}}]);