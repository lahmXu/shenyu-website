"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7460],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),o=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=o(t),m=r,d=h["".concat(i,".").concat(m)]||h[m]||c[m]||s;return t?a.createElement(d,p(p({ref:n},u),{},{components:t})):a.createElement(d,p({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,p=new Array(s);p[0]=h;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var o=2;o<s;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7047:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return h}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),p=["components"],l={title:"\u53d1\u5e03\u6307\u5357",description:"Apache ShenYu\u53d1\u5e03\u6307\u5357",cover:"/img/architecture/shenyu-framework.png"},i=void 0,o={unversionedId:"Apache-ShenYu-Release-Guide",id:"Apache-ShenYu-Release-Guide",isDocsHomePage:!1,title:"\u53d1\u5e03\u6307\u5357",description:"Apache ShenYu\u53d1\u5e03\u6307\u5357",source:"@site/i18n/zh/docusaurus-plugin-content-docs-community/current/5-Apache-ShenYu-Release-Guide.md",sourceDirName:".",slug:"/Apache-ShenYu-Release-Guide",permalink:"/zh/community/Apache-ShenYu-Release-Guide",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/5-Apache-ShenYu-Release-Guide.md",version:"current",lastUpdatedBy:"Zhang Yonglun",lastUpdatedAt:1630497641,formattedLastUpdatedAt:"2021/9/1",sidebarPosition:5,frontMatter:{title:"\u53d1\u5e03\u6307\u5357",description:"Apache ShenYu\u53d1\u5e03\u6307\u5357",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"\u63d0\u4ea4\u8005\u6307\u5357",permalink:"/zh/community/Apache-ShenYu-Committer"},next:{title:"\u63d0\u540d\u65b0\u7684Committer",permalink:"/zh/community/How-to-vote-Apache-ShenYu-Committer"}},u=[{value:"GPG\u8bbe\u7f6e",id:"gpg\u8bbe\u7f6e",children:[]},{value:"\u53d1\u5e03Apache Maven\u4e2d\u592e\u4ed3\u5e93",id:"\u53d1\u5e03apache-maven\u4e2d\u592e\u4ed3\u5e93",children:[]},{value:"\u53d1\u5e03Apache SVN\u4ed3\u5e93",id:"\u53d1\u5e03apache-svn\u4ed3\u5e93",children:[]},{value:"\u68c0\u67e5\u53d1\u5e03\u7ed3\u679c",id:"\u68c0\u67e5\u53d1\u5e03\u7ed3\u679c",children:[]},{value:"\u53d1\u8d77\u6295\u7968",id:"\u53d1\u8d77\u6295\u7968",children:[]},{value:"\u5b8c\u6210\u53d1\u5e03",id:"\u5b8c\u6210\u53d1\u5e03",children:[]}],c={toc:u};function h(e){var n=e.components,t=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"gpg\u8bbe\u7f6e"},"GPG\u8bbe\u7f6e"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1. \u5b89\u88c5GPG")),(0,s.kt)("p",null,"\u5728",(0,s.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"GnuPG\u5b98\u7f51"),"\u4e0b\u8f7d\u5b89\u88c5\u5305\u3002\nGnuPG\u76841.x\u7248\u672c\u548c2.x\u7248\u672c\u7684\u547d\u4ee4\u6709\u7ec6\u5fae\u5dee\u522b\uff0c\u4e0b\u5217\u8bf4\u660e\u4ee5",(0,s.kt)("inlineCode",{parentName:"p"},"GnuPG-2.1.23"),"\u7248\u672c\u4e3a\u4f8b\u3002"),(0,s.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u7248\u672c\u53f7\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --version\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2. \u521b\u5efakey")),(0,s.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efakey\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GnuPG-2.x"),"\u53ef\u4f7f\u7528\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --full-gen-key\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GnuPG-1.x"),"\u53ef\u4f7f\u7528\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --gen-key\n")),(0,s.kt)("p",null,"\u6839\u636e\u63d0\u793a\u5b8c\u6210key\uff1a"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8bf7\u4f7f\u7528Apache\u90ae\u7bb1\u751f\u6210GPG\u7684Key\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'gpg (GnuPG) 2.0.12; Copyright (C) 2009 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n  (1) RSA and RSA (default)\n  (2) DSA and Elgamal\n  (3) DSA (sign only)\n  (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n        0 = key does not expire\n     <n>  = key expires in n days\n     <n>w = key expires in n weeks\n     <n>m = key expires in n months\n     <n>y = key expires in n years\nKey is valid for? (0) \nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: ${\u8f93\u5165\u7528\u6237\u540d}\nEmail address: ${\u8f93\u5165\u90ae\u4ef6\u5730\u5740}\nComment: ${\u8f93\u5165\u6ce8\u91ca}\nYou selected this USER-ID:\n   "${\u8f93\u5165\u7684\u7528\u6237\u540d} (${\u8f93\u5165\u7684\u6ce8\u91ca}) <${\u8f93\u5165\u7684\u90ae\u4ef6\u5730\u5740}>"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nYou need a Passphrase to protect your secret key. # \u8f93\u5165\u5bc6\u7801\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3. \u67e5\u770b\u751f\u6210\u7684key")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --list-keys\n")),(0,s.kt)("p",null,"\u6267\u884c\u7ed3\u679c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pub   4096R/700E6065 2019-03-20\nuid                  ${\u7528\u6237\u540d} (${\u6ce8\u91ca}) <{\u90ae\u4ef6\u5730\u5740}>\nsub   4096R/0B7EF5B2 2019-03-20\n")),(0,s.kt)("p",null,"\u5176\u4e2d700E6065\u4e3a\u516c\u94a5ID\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4. \u5c06\u516c\u94a5\u540c\u6b65\u5230\u670d\u52a1\u5668")),(0,s.kt)("p",null,"\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --keyserver hkp://pool.sks-keyservers.net --send-key 700E6065\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"pool.sks-keyservers.net"),"\u4e3a\u968f\u610f\u6311\u9009\u7684",(0,s.kt)("a",{parentName:"p",href:"https://sks-keyservers.net/status/"},"\u516c\u94a5\u670d\u52a1\u5668"),"\uff0c\u6bcf\u4e2a\u670d\u52a1\u5668\u4e4b\u95f4\u662f\u81ea\u52a8\u540c\u6b65\u7684\uff0c\u9009\u4efb\u610f\u4e00\u4e2a\u5373\u53ef\u3002"),(0,s.kt)("h2",{id:"\u53d1\u5e03apache-maven\u4e2d\u592e\u4ed3\u5e93"},"\u53d1\u5e03Apache Maven\u4e2d\u592e\u4ed3\u5e93"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1. \u8bbe\u7f6esettings.xml\u6587\u4ef6")),(0,s.kt)("p",null,"\u5c06\u4ee5\u4e0b\u6a21\u677f\u6dfb\u52a0\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.m2/settings.xml"),"\u4e2d\uff0c\u6240\u6709\u5bc6\u7801\u9700\u8981\u52a0\u5bc6\u540e\u518d\u586b\u5165\u3002\n\u52a0\u5bc6\u8bbe\u7f6e\u53ef\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"http://maven.apache.org/guides/mini/guide-encryption.html"},"\u8fd9\u91cc"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<settings>\n  <servers>\n    <server>\n      <id>apache.snapshots.https</id>\n      <username> \x3c!-- APACHE LDAP \u7528\u6237\u540d --\x3e </username>\n      <password> \x3c!-- APACHE LDAP \u52a0\u5bc6\u540e\u7684\u5bc6\u7801 --\x3e </password>\n    </server>\n    <server>\n      <id>apache.releases.https</id>\n      <username> \x3c!-- APACHE LDAP \u7528\u6237\u540d --\x3e </username>\n      <password> \x3c!-- APACHE LDAP \u52a0\u5bc6\u540e\u7684\u5bc6\u7801 --\x3e </password>\n    </server>\n  </servers>\n</settings>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2. \u66f4\u65b0\u7248\u672c\u8bf4\u660e")),(0,s.kt)("p",null,"\u66f4\u65b0\u5982\u4e0b\u6587\u4ef6\uff0c\u5e76\u63d0\u4ea4PR\u5230\u4e3b\u5e72\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"https://github.com/apache/incubator-shenyu/blob/master/RELEASE-NOTES.md\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3. \u521b\u5efa\u53d1\u5e03\u5206\u652f")),(0,s.kt)("p",null,"\u5047\u8bbe\u4eceGitHub\u4e0b\u8f7d\u7684ShenYu\u6e90\u4ee3\u7801\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"~/shenyu/"),"\u76ee\u5f55\uff1b\u5047\u8bbe\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"${RELEASE.VERSION}"),"\u3002\n\u521b\u5efa",(0,s.kt)("inlineCode",{parentName:"p"},"${RELEASE.VERSION}-release"),"\u5206\u652f\uff0c\u63a5\u4e0b\u6765\u7684\u64cd\u4f5c\u90fd\u5728\u8be5\u5206\u652f\u8fdb\u884c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# ${name}\u4e3a\u6e90\u7801\u6240\u5728\u5206\u652f\uff0c\u5982\uff1amaster\uff0cmain\ngit clone --branch ${name} https://github.com/apache/incubator-shenyu.git ~/shenyu\ncd ~/shenyu/\ngit pull\ngit checkout -b ${RELEASE.VERSION}-release\ngit push origin ${RELEASE.VERSION}-release\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4. \u53d1\u5e03\u9884\u6821\u9a8c")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'mvn release:prepare -Prelease -Darguments="-DskipTests" -DautoVersionSubmodules=true -DdryRun=true -Dusername=${Github\u7528\u6237\u540d}\n')),(0,s.kt)("p",null,"-Prelease: \u9009\u62e9release\u7684profile\uff0c\u8fd9\u4e2aprofile\u4f1a\u6253\u5305\u6240\u6709\u6e90\u7801\u3001jar\u6587\u4ef6\u4ee5\u53caShenYu\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u5305\u3002"),(0,s.kt)("p",null,"-DautoVersionSubmodules=true\uff1a\u4f5c\u7528\u662f\u53d1\u5e03\u8fc7\u7a0b\u4e2d\u7248\u672c\u53f7\u53ea\u9700\u8981\u8f93\u5165\u4e00\u6b21\uff0c\u4e0d\u5fc5\u4e3a\u6bcf\u4e2a\u5b50\u6a21\u5757\u90fd\u8f93\u5165\u4e00\u6b21\u3002"),(0,s.kt)("p",null,"-DdryRun=true\uff1a\u6f14\u7ec3\uff0c\u5373\u4e0d\u4ea7\u751f\u7248\u672c\u53f7\u63d0\u4ea4\uff0c\u4e0d\u751f\u6210\u65b0\u7684tag\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"5. \u51c6\u5907\u53d1\u5e03")),(0,s.kt)("p",null,"\u9996\u5148\u6e05\u7406\u53d1\u5e03\u9884\u6821\u9a8c\u672c\u5730\u4fe1\u606f\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mvn release:clean\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'mvn release:prepare -Prelease -Darguments="-DskipTests" -DautoVersionSubmodules=true -DpushChanges=false -Dusername=${Github\u7528\u6237\u540d}\n')),(0,s.kt)("p",null,"\u548c\u4e0a\u4e00\u6b65\u6f14\u7ec3\u7684\u547d\u4ee4\u57fa\u672c\u76f8\u540c\uff0c\u53bb\u6389\u4e86-DdryRun=true\u53c2\u6570\u3002"),(0,s.kt)("p",null,"-DpushChanges=false\uff1a\u4e0d\u8981\u5c06\u4fee\u6539\u540e\u7684\u7248\u672c\u53f7\u548ctag\u81ea\u52a8\u63d0\u4ea4\u81f3Github\u3002"),(0,s.kt)("p",null,"\u5c06\u672c\u5730\u6587\u4ef6\u68c0\u67e5\u65e0\u8bef\u540e\uff0c\u63d0\u4ea4\u81f3github\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin ${RELEASE.VERSION}-release\ngit push origin --tags\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"6. \u90e8\u7f72\u53d1\u5e03")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'mvn release:perform -Prelease -Darguments="-DskipTests" -DautoVersionSubmodules=true -Dusername=${Github\u7528\u6237\u540d}\n')),(0,s.kt)("p",null,"\u6267\u884c\u5b8c\u8be5\u547d\u4ee4\u540e\uff0c\u5f85\u53d1\u5e03\u7248\u672c\u4f1a\u81ea\u52a8\u4e0a\u4f20\u5230Apache\u7684\u4e34\u65f6\u7b79\u5907\u4ed3\u5e93(staging repository)\u3002\n\u8bbf\u95ee",(0,s.kt)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories"),", \u4f7f\u7528Apache\u7684LDAP\u8d26\u6237\u767b\u5f55\u540e\uff0c\u5c31\u4f1a\u770b\u5230\u4e0a\u4f20\u7684\u7248\u672c\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"Repository"),"\u5217\u7684\u5185\u5bb9\u5373\u4e3a${STAGING.REPOSITORY}\u3002\n\u70b9\u51fb",(0,s.kt)("inlineCode",{parentName:"p"},"Close"),"\u6765\u544a\u8bc9Nexus\u8fd9\u4e2a\u6784\u5efa\u5df2\u7ecf\u5b8c\u6210\uff0c\u53ea\u6709\u8fd9\u6837\u8be5\u7248\u672c\u624d\u662f\u53ef\u7528\u7684\u3002\n\u5982\u679c\u7535\u5b50\u7b7e\u540d\u7b49\u51fa\u73b0\u95ee\u9898\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"Close"),"\u4f1a\u5931\u8d25\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,s.kt)("inlineCode",{parentName:"p"},"Activity"),"\u67e5\u770b\u5931\u8d25\u4fe1\u606f\u3002"),(0,s.kt)("h2",{id:"\u53d1\u5e03apache-svn\u4ed3\u5e93"},"\u53d1\u5e03Apache SVN\u4ed3\u5e93"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1. \u68c0\u51faShenYu\u53d1\u5e03\u76ee\u5f55")),(0,s.kt)("p",null,"\u5982\u65e0\u672c\u5730\u5de5\u4f5c\u76ee\u5f55\uff0c\u5219\u5148\u521b\u5efa\u672c\u5730\u5de5\u4f5c\u76ee\u5f55\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/shenyu_svn/dev/\ncd ~/shenyu_svn/dev/\n")),(0,s.kt)("p",null,"\u521b\u5efa\u5b8c\u6bd5\u540e\uff0c\u4eceApache SVN\u68c0\u51faShenYu\u53d1\u5e03\u76ee\u5f55\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"svn --username=${APACHE LDAP \u7528\u6237\u540d} co https://dist.apache.org/repos/dist/dev/incubator/shenyu\ncd ~/shenyu_svn/dev/shenyu\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2. \u6dfb\u52a0gpg\u516c\u94a5")),(0,s.kt)("p",null,"\u4ec5\u7b2c\u4e00\u6b21\u90e8\u7f72\u7684\u8d26\u53f7\u9700\u8981\u6dfb\u52a0\uff0c\u53ea\u8981",(0,s.kt)("inlineCode",{parentName:"p"},"KEYS"),"\u4e2d\u5305\u542b\u5df2\u7ecf\u90e8\u7f72\u8fc7\u7684\u8d26\u6237\u7684\u516c\u94a5\u5373\u53ef\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg -a --export ${GPG\u7528\u6237\u540d} >> KEYS\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3. \u5c06\u5f85\u53d1\u5e03\u7684\u5185\u5bb9\u6dfb\u52a0\u81f3SVN\u76ee\u5f55")),(0,s.kt)("p",null,"\u521b\u5efa\u7248\u672c\u53f7\u76ee\u5f55\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncd ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\n")),(0,s.kt)("p",null,"\u5c06\u6e90\u7801\u5305\u3001\u4e8c\u8fdb\u5236\u5305\u548cShenYu\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u5305\u6dfb\u52a0\u81f3SVN\u5de5\u4f5c\u76ee\u5f55\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cp -f ~/incubator-shenyu/shenyu-dist/shenyu-src-dist/target/*.zip ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncp -f ~/incubator-shenyu/shenyu-dist/shenyu-src-dist/target/*.zip.asc ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncp -f ~/incubator-shenyu/shenyu-dist/shenyu-bootstrap-dist/target/*.tar.gz ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncp -f ~/incubator-shenyu/shenyu-dist/shenyu-bootstrap-dist/target/*.tar.gz.asc ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncp -f ~/incubator-shenyu/shenyu-dist/shenyu-admin-dist/target/*.tar.gz ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\ncp -f ~/incubator-shenyu/shenyu-dist/shenyu-admin-dist/target/*.tar.gz.asc ~/shenyu_svn/dev/shenyu/${RELEASE.VERSION}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4. \u751f\u6210\u6587\u4ef6\u7b7e\u540d")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"shasum -a 512 apache-shenyu-incubating-${RELEASE.VERSION}-src.zip > apache-shenyu-incubating-${RELEASE.VERSION}-src.zip.sha512\nshasum -b -a 512 apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz > apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz.sha512\nshasum -b -a 512 apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz > apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz.sha512\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"5. \u63d0\u4ea4Apache SVN")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'cd ~/shenyu_svn/dev/shenyu\nsvn add *\nsvn --username=${APACHE LDAP \u7528\u6237\u540d} commit -m "release ${RELEASE.VERSION}"\n')),(0,s.kt)("h2",{id:"\u68c0\u67e5\u53d1\u5e03\u7ed3\u679c"},"\u68c0\u67e5\u53d1\u5e03\u7ed3\u679c"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u68c0\u67e5sha512\u54c8\u5e0c")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"shasum -c apache-shenyu-incubating-${RELEASE.VERSION}-src.zip.sha512\nshasum -c apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz.sha512\nshasum -c apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz.sha512\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u68c0\u67e5gpg\u7b7e\u540d")),(0,s.kt)("p",null,"\u9996\u5148\u5bfc\u5165\u53d1\u5e03\u4eba\u516c\u94a5\u3002\u4ecesvn\u4ed3\u5e93\u5bfc\u5165KEYS\u5230\u672c\u5730\u73af\u5883\u3002\uff08\u53d1\u5e03\u7248\u672c\u7684\u4eba\u4e0d\u9700\u8981\u518d\u5bfc\u5165\uff0c\u5e2e\u52a9\u505a\u9a8c\u8bc1\u7684\u4eba\u9700\u8981\u5bfc\u5165\uff0c\u7528\u6237\u540d\u586b\u53d1\u7248\u4eba\u7684\u5373\u53ef\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://dist.apache.org/repos/dist/dev/incubator/shenyu/KEYS >> KEYS\ngpg --import KEYS\ngpg --edit-key \"${\u53d1\u5e03\u4eba\u7684gpg\u7528\u6237\u540d}\"\n  > trust\n\nPlease decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)\n\n  1 = I don't know or won't say\n  2 = I do NOT trust\n  3 = I trust marginally\n  4 = I trust fully\n  5 = I trust ultimately\n  m = back to the main menu\n\nYour decision? 5\n\n  > save\n")),(0,s.kt)("p",null,"\u7136\u540e\u8fdb\u884cgpg\u7b7e\u540d\u68c0\u67e5\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --verify apache-shenyu-incubating-${RELEASE.VERSION}-src.zip.asc apache-shenyu-incubating-${RELEASE.VERSION}-src.zip\ngpg --verify apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz.asc apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz\ngpg --verify apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz.asc apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u68c0\u67e5\u53d1\u5e03\u6587\u4ef6\u5185\u5bb9")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5bf9\u6bd4\u6e90\u7801\u5305\u4e0eGithub\u4e0atag\u7684\u5185\u5bb9\u5dee\u5f02")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'curl -Lo tag-${RELEASE.VERSION}.zip https://github.com/apache/incubator-shenyu/archive/v${RELEASE.VERSION}.zip\nunzip tag-${RELEASE.VERSION}.zip\nunzip apache-shenyu-incubating-${RELEASE.VERSION}-src.zip\ndiff -r -x "shenyu-dashboard" -x "shenyu-examples" -x "shenyu-integrated-test" -x "static" apache-shenyu-incubating-${RELEASE.VERSION}-src incubator-shenyu-${RELEASE.VERSION}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u6e90\u7801\u5305\u662f\u5426\u5305\u542b\u7531\u4e8e\u5305\u542b\u4e0d\u5fc5\u8981\u6587\u4ef6\uff0c\u81f4\u4f7ftarball\u8fc7\u4e8e\u5e9e\u5927"),(0,s.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5939\u5305\u542b\u5355\u8bcd",(0,s.kt)("inlineCode",{parentName:"li"},"incubating")),(0,s.kt)("li",{parentName:"ul"},"\u5b58\u5728",(0,s.kt)("inlineCode",{parentName:"li"},"LICENSE"),"\u548c",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6"),(0,s.kt)("li",{parentName:"ul"},"\u5b58\u5728",(0,s.kt)("inlineCode",{parentName:"li"},"DISCLAIMER"),"\u6587\u4ef6"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6\u4e2d\u7684\u5e74\u4efd\u6b63\u786e"),(0,s.kt)("li",{parentName:"ul"},"\u53ea\u5b58\u5728\u6587\u672c\u6587\u4ef6\uff0c\u4e0d\u5b58\u5728\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,s.kt)("li",{parentName:"ul"},"\u6240\u6709\u6587\u4ef6\u7684\u5f00\u5934\u90fd\u6709ASF\u8bb8\u53ef\u8bc1"),(0,s.kt)("li",{parentName:"ul"},"\u80fd\u591f\u6b63\u786e\u7f16\u8bd1\uff0c\u5355\u5143\u6d4b\u8bd5\u53ef\u4ee5\u901a\u8fc7 (./mvnw install) (\u76ee\u524d\u652f\u6301JAVA 8)"),(0,s.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u662f\u5426\u6709\u591a\u4f59\u6587\u4ef6\u6216\u6587\u4ef6\u5939\uff0c\u4f8b\u5982\u7a7a\u6587\u4ef6\u5939\u7b49")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305\u7684\u6587\u4ef6\u5185\u5bb9")),(0,s.kt)("p",null,"\u89e3\u538b\u7f29\n",(0,s.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-${RELEASE.VERSION}-bootstrap-bin.tar.gz"),"\uff0c\n",(0,s.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-${RELEASE.VERSION}-admin-bin.tar.gz"),"\n\u8fdb\u884c\u5982\u4e0b\u68c0\u67e5:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5939\u5305\u542b\u5355\u8bcd",(0,s.kt)("inlineCode",{parentName:"li"},"incubating")),(0,s.kt)("li",{parentName:"ul"},"\u5b58\u5728",(0,s.kt)("inlineCode",{parentName:"li"},"LICENSE"),"\u548c",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6"),(0,s.kt)("li",{parentName:"ul"},"\u5b58\u5728",(0,s.kt)("inlineCode",{parentName:"li"},"DISCLAIMER"),"\u6587\u4ef6"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6\u4e2d\u7684\u5e74\u4efd\u6b63\u786e"),(0,s.kt)("li",{parentName:"ul"},"\u6240\u6709\u6587\u672c\u6587\u4ef6\u5f00\u5934\u90fd\u6709ASF\u8bb8\u53ef\u8bc1"),(0,s.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u7b2c\u4e09\u65b9\u4f9d\u8d56\u8bb8\u53ef\u8bc1\uff1a",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684\u8bb8\u53ef\u8bc1\u517c\u5bb9"),(0,s.kt)("li",{parentName:"ul"},"\u6240\u6709\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684\u8bb8\u53ef\u8bc1\u90fd\u5728",(0,s.kt)("inlineCode",{parentName:"li"},"LICENSE"),"\u6587\u4ef6\u4e2d\u58f0\u540d"),(0,s.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u8bb8\u53ef\u8bc1\u7684\u5b8c\u6574\u7248\u5168\u90e8\u5728",(0,s.kt)("inlineCode",{parentName:"li"},"license"),"\u76ee\u5f55"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f9d\u8d56\u7684\u662fApache\u8bb8\u53ef\u8bc1\u5e76\u4e14\u5b58\u5728",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6\uff0c\u90a3\u4e48\u8fd9\u4e9b",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6\u4e5f\u9700\u8981\u52a0\u5165\u5230\u7248\u672c\u7684",(0,s.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6\u4e2d")))),(0,s.kt)("h2",{id:"\u53d1\u8d77\u6295\u7968"},"\u53d1\u8d77\u6295\u7968"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u6295\u7968\u9636\u6bb5")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"ShenYu\u793e\u533a\u6295\u7968\uff0c\u53d1\u8d77\u6295\u7968\u90ae\u4ef6\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"dev@shenyu.apache.org"),"\u3002PPMC\u6210\u5458\u9700\u8981\u5148\u6309\u7167\u6587\u6863\u68c0\u67e5\u7248\u672c\u7684\u6b63\u786e\u6027\uff0c\u7136\u540e\u518d\u8fdb\u884c\u6295\u7968\u3002\n\u7ecf\u8fc7\u81f3\u5c1172\u5c0f\u65f6\u5e76\u7edf\u8ba1\u52303\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"+1 mentor"),"\u7968\u540e\uff0c\u5373\u53ef\u8fdb\u5165\u4e0b\u4e00\u9636\u6bb5\u7684\u6295\u7968\u3002")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u5ba3\u5e03\u6295\u7968\u7ed3\u679c\uff0c\u53d1\u8d77\u6295\u7968\u7ed3\u679c\u90ae\u4ef6\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"dev@shenyu.apache.org"),"\u3002")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Incubator\u793e\u533a\u6295\u7968\uff0c\u53d1\u8d77\u6295\u7968\u90ae\u4ef6\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"general@incubator.apache.org"),"\u3002\n\u7ecf\u8fc7\u81f3\u5c1172\u5c0f\u65f6\u5e76\u7edf\u8ba1\u52303\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"+1 binding"),"\u7968\u540e\uff0c\u5373\u53ef\u5ba3\u5e03\u6295\u7968\u7ed3\u679c\u3002")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u5ba3\u5e03\u6295\u7968\u7ed3\u679c\uff0c\u53d1\u8d77\u6295\u7968\u7ed3\u679c\u90ae\u4ef6\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"general@incubator.apache.org"),"\u3002"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u6295\u7968\u6a21\u677f")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"ShenYu\u793e\u533a\u6295\u7968\u6a21\u677f")),(0,s.kt)("p",null,"\u6807\u9898\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[VOTE] Release Apache ShenYu (incubating) ${RELEASE.VERSION}\n")),(0,s.kt)("p",null,"\u6b63\u6587\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Hello ShenYu Community,\n\nThis is a call for vote to release Apache ShenYu (incubating) version ${RELEASE.VERSION}\n\nRelease notes:\nhttps://github.com/apache/incubator-shenyu/blob/master/RELEASE-NOTES.md\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/shenyu/${RELEASE.VERSION}/\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/${STAGING.REPOSITORY}/org/apache/shenyu/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-shenyu/tree/${RELEASE.VERSION}/\n\nRelease Commit ID:\nhttps://github.com/apache/incubator-shenyu/commit/xxxxxxxxxxxxxxxxxxxxxxx\n\nKeys to verify the Release Candidate:\nhttps://dist.apache.org/repos/dist/dev/incubator/shenyu/KEYS\n\nLook at here for how to verify this release candidate:\nhttps://shenyu.apache.org/community/release/#check-release\n\nGPG user ID:\n${YOUR.GPG.USER.ID}\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve \n\n[ ] +0 no opinion\n \n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n\n[ ] Checksums and PGP signatures are valid.\n\n[ ] Source code distributions have correct names matching the current release.\n\n[ ] LICENSE and NOTICE files are correct for each ShenYu repo.\n\n[ ] All files have license headers if necessary.\n\n[ ] No compiled archives bundled in source archive.\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"\u5ba3\u5e03\u6295\u7968\u7ed3\u679c\u6a21\u677f")),(0,s.kt)("p",null,"\u6807\u9898\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[RESULT][VOTE] Release Apache ShenYu (incubating) ${RELEASE.VERSION}\n")),(0,s.kt)("p",null,"\u6b63\u6587\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"We\u2019ve received 7 +1 votes:\n\n+1, xxx (mentor)\n+1, xxx (mentor)\n+1, xxx (mentor)\n+1, xxx (ppmc)\n+1, xxx (ppmc)\n+1, xxx (ppmc)\n+1, xxx (ppmc)\n\nThank you everyone for taking the time to review the release and help us. \n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Incubator\u793e\u533a\u6295\u7968\u6a21\u677f")),(0,s.kt)("p",null,"\u6807\u9898\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[VOTE] Release Apache ShenYu (incubating) ${RELEASE.VERSION}\n")),(0,s.kt)("p",null,"\u6b63\u6587\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Hello Incubator Community,\n\nThis is a call for vote to release Apache ShenYu (incubating) version ${RELEASE.VERSION}\n\nThe Apache ShenYu community has voted on and approved a proposal to release \nApache ShenYu (incubating) version ${RELEASE.VERSION}.\n\nWe now kindly request the Incubator PMC members review and vote on this\nincubator release.\n\nShenYu community vote thread:\nhttps://lists.apache.org/thread.html/xxxxxxxxxxxxxxxxxxxxxxx\n\nVote result thread:\nhttps://lists.apache.org/thread.html/xxxxxxxxxxxxxxxxxxxxxxx\n\nRelease notes:\nhttps://github.com/apache/incubator-shenyu/blob/master/RELEASE-NOTES.md\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/shenyu/${RELEASE.VERSION}/\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/${STAGING.REPOSITORY}/org/apache/shenyu/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-shenyu/tree/${RELEASE.VERSION}/\n\nRelease Commit ID:\nhttps://github.com/apache/incubator-shenyu/commit/xxxxxxxxxxxxxxxxxxxxxxx\n\nKeys to verify the Release Candidate:\nhttps://dist.apache.org/repos/dist/dev/incubator/shenyu/KEYS\n\nLook at here for how to verify this release candidate:\nhttps://shenyu.apache.org/community/release/#check-release\n\nGPG user ID:\n${YOUR.GPG.USER.ID}\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve \n\n[ ] +0 no opinion\n \n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n\n[ ] Checksums and PGP signatures are valid.\n\n[ ] Source code distributions have correct names matching the current release.\n\n[ ] LICENSE and NOTICE files are correct for each ShenYu repo.\n\n[ ] All files have license headers if necessary.\n\n[ ] No compiled archives bundled in source archive.\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"\u5ba3\u5e03\u6295\u7968\u7ed3\u679c\u6a21\u677f")),(0,s.kt)("p",null,"\u6807\u9898\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[RESULT][VOTE] Release Apache ShenYu (incubating) ${RELEASE.VERSION}\n")),(0,s.kt)("p",null,"\u6b63\u6587\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Hi,\n\nThe vote to release Apache ShenYu (incubating) ${RELEASE.VERSION} has passed with\n6 +1 binding and 1 +1 non-binding votes, no +0 or -1 votes.\n\nBinding votes:\nxxx\nxxx\nxxx\nxxx\nxxx\nxxx\n\nNon-Binding votes:\nxxx\n\nVote thread:\nhttps://lists.apache.org/thread.html/xxxxxxxxxxxxxxxxxxxxxxx\n\nThanks a lot to everyone for taking your time to review our release candidate.\nWe will proceed with publishing the approved artifacts and sending out the\nannouncements in the coming days.\n")),(0,s.kt)("h2",{id:"\u5b8c\u6210\u53d1\u5e03"},"\u5b8c\u6210\u53d1\u5e03"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1. \u5c06\u6e90\u7801\u3001\u4e8c\u8fdb\u5236\u5305\u4ee5\u53caKEYS\u4ecesvn\u7684dev\u76ee\u5f55\u79fb\u52a8\u5230release\u76ee\u5f55")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'svn mv https://dist.apache.org/repos/dist/dev/incubator/shenyu/${RELEASE.VERSION} https://dist.apache.org/repos/dist/release/incubator/shenyu/ -m "transfer packages for ${RELEASE.VERSION}"\nsvn delete https://dist.apache.org/repos/dist/release/incubator/shenyu/KEYS -m "delete KEYS"\nsvn cp https://dist.apache.org/repos/dist/dev/incubator/shenyu/KEYS https://dist.apache.org/repos/dist/release/incubator/shenyu/ -m "transfer KEYS for ${RELEASE.VERSION}"\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2. \u5728Apache Staging\u4ed3\u5e93\u627e\u5230ShenYu\u5e76\u70b9\u51fb",(0,s.kt)("inlineCode",{parentName:"strong"},"Release"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3. \u5408\u5e76Github\u7684release\u5206\u652f\u5230",(0,s.kt)("inlineCode",{parentName:"strong"},"master"),", \u5408\u5e76\u5b8c\u6210\u540e\u5220\u9664release\u5206\u652f")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit merge origin/${RELEASE.VERSION}-release\ngit pull\ngit push origin master\ngit push --delete origin ${RELEASE.VERSION}-release\ngit branch -d ${RELEASE.VERSION}-release\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4. \u53d1\u5e03 Docker")),(0,s.kt)("p",null,"4.1 \u51c6\u5907\u5de5\u4f5c"),(0,s.kt)("p",null,"\u672c\u5730\u5b89\u88c5 Docker\uff0c\u5e76\u542f\u52a8\u670d\u52a1\u3002"),(0,s.kt)("p",null,"4.2 \u7f16\u8bd1 Docker \u955c\u50cf"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout v${RELEASE.VERSION}\ncd ~/shenyu/shenyu-dist/\nmvn clean package -Prelease,docker\n")),(0,s.kt)("p",null,"4.3 \u7ed9\u672c\u5730 Docker \u955c\u50cf\u6253\u6807\u8bb0"),(0,s.kt)("p",null,"\u901a\u8fc7",(0,s.kt)("inlineCode",{parentName:"p"},"docker images"),"\u67e5\u770b\u5230 IMAGE ID\uff0c\u4f8b\u5982\u4e3a\uff1ae9ea51023687\u548ce9ea51023688"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"docker tag e9ea51023687 apache/shenyu-bootstrap:latest\ndocker tag e9ea51023687 apache/shenyu-bootstrap:${RELEASE.VERSION}\ndocker tag e9ea51023688 apache/shenyu-admin:latest\ndocker tag e9ea51023688 apache/shenyu-admin:${RELEASE.VERSION}\n")),(0,s.kt)("p",null,"4.4 \u53d1\u5e03 Docker \u955c\u50cf"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"docker login\ndocker push apache/shenyu-bootstrap:latest\ndocker push apache/shenyu-bootstrap:${RELEASE_VERSION}\ndocker push apache/shenyu-admin:latest\ndocker push apache/shenyu-admin:${RELEASE_VERSION}\n")),(0,s.kt)("p",null,"4.5 \u786e\u8ba4\u53d1\u5e03\u6210\u529f"),(0,s.kt)("p",null,"\u767b\u5f55 Docker Hub \u67e5\u770b ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/shenyu-bootstrap/"},"shenyu-bootstrap")," \u548c ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/shenyu-admin/"},"shenyu-admin")," \u662f\u5426\u6709\u53d1\u5e03\u7684\u955c\u50cf"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"5. GitHub\u7248\u672c\u53d1\u5e03")),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/releases"},"GitHub Releases")," \u9875\u9762\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"${RELEASE_VERSION}")," \u7248\u672c\u4e0a\u70b9\u51fb ",(0,s.kt)("inlineCode",{parentName:"p"},"Edit")),(0,s.kt)("p",null,"\u7f16\u8f91\u7248\u672c\u53f7\u53ca\u7248\u672c\u8bf4\u660e\uff0c\u5e76\u70b9\u51fb ",(0,s.kt)("inlineCode",{parentName:"p"},"Publish release")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"6. \u66f4\u65b0\u4e0b\u8f7d\u9875\u9762")),(0,s.kt)("p",null,"\u7b49\u5f85\u5e76\u786e\u8ba4\u65b0\u7684\u53d1\u5e03\u7248\u672c\u540c\u6b65\u81f3 Apache \u955c\u50cf\u540e\uff0c\u66f4\u65b0\u5982\u4e0b\u9875\u9762\uff1a"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/projects/shenyu/download/"},"https://shenyu.apache.org/projects/shenyu/download/")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/projects/shenyu/download/"},"https://shenyu.apache.org/zh/projects/shenyu/download/")),(0,s.kt)("p",null,"GPG\u7b7e\u540d\u6587\u4ef6\u548c\u54c8\u5e0c\u6821\u9a8c\u6587\u4ef6\u7684\u4e0b\u8f7d\u8fde\u63a5\u5fc5\u987b\u4f7f\u7528\u8fd9\u4e2a\u524d\u7f00\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"https://downloads.apache.org/incubator/shenyu/")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"7. \u90ae\u4ef6\u901a\u77e5\u7248\u672c\u53d1\u5e03\u5b8c\u6210")),(0,s.kt)("p",null,"\u53d1\u9001\u90ae\u4ef6\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"general@incubator.apache.org"),"\u548c",(0,s.kt)("inlineCode",{parentName:"p"},"dev@shenyu.apache.org"),"\u901a\u77e5\u5b8c\u6210\u7248\u672c\u53d1\u5e03"),(0,s.kt)("p",null,"\u901a\u77e5\u90ae\u4ef6\u6a21\u677f\uff1a"),(0,s.kt)("p",null,"\u6807\u9898\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[ANNOUNCE] Apache ShenYu (incubating) ${RELEASE.VERSION} available\n")),(0,s.kt)("p",null,"\u6b63\u6587\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Hi,\n\nApache ShenYu (incubating) Team is glad to announce the new release of Apache ShenYu (incubating) ${RELEASE.VERSION}.\n\nApache ShenYu (incubating) is an asynchronous, high-performance, cross-language, responsive API gateway.\nSupport various languages (http protocol), support Dubbo, Spring-Cloud, Grpc, Motan, Sofa, Tars and other protocols.\nPlugin design idea, plugin hot swap, easy to expand.\nFlexible flow filtering to meet various flow control.\nBuilt-in rich plugin support, authentication, limiting, fuse, firewall, etc.\nDynamic flow configuration, high performance.\nSupport cluster deployment, A/B Test, blue-green release.\n\nDownload Links: https://shenyu.apache.org/projects/shenyu/download/\n\nRelease Notes: https://github.com/apache/incubator-shenyu/blob/master/RELEASE-NOTES.md\n\nWebsite: https://shenyu.apache.org/\n\nShenYu Resources:\n- Issue: https://github.com/apache/incubator-shenyu/issues\n- Mailing list: dev@shenyu.apache.org\n- Documents: https://shenyu.apache.org/projects/shenyu/overview/\n\n\n- Apache ShenYu (incubating) Team\n\n--\n\nDISCLAIMER\n\nApache ShenYu (incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator PMC.\nIncubation is required of all newly accepted projects until a further review indicates that the infrastructure,\ncommunications, and decision making process have stabilized in a manner consistent with other successful ASF projects.\nWhile incubation status is not necessarily a reflection of the completeness or stability of the code,\nit does indicate that the project has yet to be fully endorsed by the ASF.\n")))}h.isMDXComponent=!0}}]);