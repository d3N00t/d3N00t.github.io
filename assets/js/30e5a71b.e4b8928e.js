"use strict";(self.webpackChunkdddd=self.webpackChunkdddd||[]).push([[698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,p={unversionedId:"CTF/CTF-WriteUp/\u5e73\u53f0\u5237\u9898/NSSCTF",id:"CTF/CTF-WriteUp/\u5e73\u53f0\u5237\u9898/NSSCTF",title:"NSSCTF",description:"[ZJCTF 2019]NiZhuanSiWei",source:"@site/docs/CTF/CTF-WriteUp/\u5e73\u53f0\u5237\u9898/NSSCTF.md",sourceDirName:"CTF/CTF-WriteUp/\u5e73\u53f0\u5237\u9898",slug:"/CTF/CTF-WriteUp/\u5e73\u53f0\u5237\u9898/NSSCTF",permalink:"/CTF/CTF-WriteUp/\u5e73\u53f0\u5237\u9898/NSSCTF",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u534e\u4e3a\u676f",permalink:"/CTF/CTF-WriteUp/2023/\u534e\u4e3a\u676f"},next:{title:"CTFd\u5e73\u53f0\u90e8\u7f72",permalink:"/\u5e73\u53f0\u90e8\u7f72/CTFd\u5e73\u53f0\u90e8\u7f72"}},l={},c=[{value:"ZJCTF 2019NiZhuanSiWei",id:"zjctf-2019nizhuansiwei",level:2},{value:"\u9e64\u57ce\u676f 2021EasyP",id:"\u9e64\u57ce\u676f-2021easyp",level:3},{value:"\u9e64\u57ce\u676f 2021Middle magic",id:"\u9e64\u57ce\u676f-2021middle-magic",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"zjctf-2019nizhuansiwei"},"[ZJCTF 2019]","NiZhuanSiWei"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PHP"},'<?php  \n$text = $_GET["text"];\n$file = $_GET["file"];\n$password = $_GET["password"];\nif(isset($text)&&(file_get_contents($text,\'r\')==="welcome to the zjctf")){\n    echo "<br><h1>".file_get_contents($text,\'r\')."</h1></br>";\n    if(preg_match("/flag/",$file)){\n        echo "Not now!";\n        exit(); \n    }else{\n        include($file);  //useless.php\n        $password = unserialize($password);\n        echo $password;\n    }\n}\nelse{\n    highlight_file(__FILE__);\n}\n?>\n')),(0,a.kt)("p",null,"\u5ba1\u8ba1\u6e90\u7801\u5f97\u77e5text\u53c2\u6570\u9700\u8981\u5b8c\u5168\u7b49\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"welcome to the zjctf"),"\u76f4\u63a5\u4f7f\u7528\u4f2a\u534f\u8baeinput\u8fdb\u53bb\u5c31\u597d\uff0c\u4f20\u53c2file\u67e5\u770b\u4e00\u4e0b\u63d0\u793a\u7684php\u6e90\u7801\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"php://filter/read=convert.iconv.utf8.utf16/resource=useless.php"),"\nburp\u53d1\u5305\n",(0,a.kt)("img",{parentName:"p",src:"en-resource://database/687:1",alt:"b6a50e46dc32f187e898480f48334021.png"}),"\n\u9996\u9875\u4ee3\u7801\u5ba1\u8ba1\u53d1\u73b0\u5bf9password\u53c2\u6570\u8fdb\u884c\u4e86\u53cd\u5e8f\u5217\u5316\uff0c\u4e14useless\u6587\u4ef6\u6709\u4e2a\u8bfb\u53d6\u6587\u4ef6\u7684\u7c7b\uff0c\u76f4\u63a5\u6784\u9020\u53cd\u5e8f\u5217\u5316payload\u5373\u53ef\u3002\n",(0,a.kt)("img",{parentName:"p",src:"en-resource://database/689:1",alt:"582124771c170d17c3a481ad23230e25.png"})),(0,a.kt)("p",null,"\u7136\u540e\u8fdb\u884c\u53d1\u5305\u83b7\u53d6\u5230flag\u3002\n",(0,a.kt)("img",{parentName:"p",src:"en-resource://database/691:1",alt:"160b49f550ec4d010f4e8b04adf0ada8.png"})),(0,a.kt)("h3",{id:"\u9e64\u57ce\u676f-2021easyp"},"[\u9e64\u57ce\u676f 2021]","EasyP"),(0,a.kt)("p",null,"\u4ee3\u66ff\u4e0b\u5212\u7ebf\uff1a\n\u7ed5\u8fc7\u4e0b\u5212\u7ebf\u7684\u8bdd\u53ef\u4ee5\u8003\u8651\u7528 \u52a0\u53f7\uff08+\uff09 \u5de6\u4e2d\u62ec\u53f7\uff08[\uff09 \u7a7a\u683c\uff08 \uff09 \u70b9\u53f7\uff08.\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PHP"},"/index.php/utils.php/%80?show[source\n")),(0,a.kt)("h3",{id:"\u9e64\u57ce\u676f-2021middle-magic"},"[\u9e64\u57ce\u676f 2021]","Middle magic"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"en-resource://database/755:1",alt:"27fd84be6af574bbe05d65195e993fb3.png"})))}d.isMDXComponent=!0}}]);