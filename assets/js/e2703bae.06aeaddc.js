"use strict";(self.webpackChunkdddd=self.webpackChunkdddd||[]).push([[3102],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(l,".").concat(d)]||m[d]||f[d]||o;return r?n.createElement(b,p(p({ref:t},s),{},{components:r})):n.createElement(b,p({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4695:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7294);const a={yellow:"#feca57",mint:"#25c2a0",blue:"#1877F2",red:"#ff5252"};function o(e,t){let{children:r,color:o,colorName:p}=e;return p&&(o=a[p]),(0,n.useImperativeHandle)(t,(()=>({colorName:p,color:o})),[o,p]),n.createElement("span",{style:{backgroundColor:o,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)}const p=(0,n.forwardRef)(o)},6955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905)),o=r(4695);const p={description:"for...in \u4e0e for...of \u7684\u533a\u522b",keywords:["JavaScript"],image:"https://picgo-1259617372.cos.ap-beijing.myqcloud.com/Picgo/2022/01/19-11-28-23-404Lab.jpeg",tags:["JavaScript"]},i=void 0,l={unversionedId:"JavaScript/\u5173\u4e8e for...in",id:"JavaScript/\u5173\u4e8e for...in",title:"\u5173\u4e8e for...in",description:"for...in \u4e0e for...of \u7684\u533a\u522b",source:"@site/docs/JavaScript/\u5173\u4e8e for...in.mdx",sourceDirName:"JavaScript",slug:"/JavaScript/\u5173\u4e8e for...in",permalink:"/JavaScript/\u5173\u4e8e for...in",draft:!1,editUrl:"https://github.com/HiChen404/MyWikiSite/tree/master/docs/JavaScript/\u5173\u4e8e for...in.mdx",tags:[{label:"JavaScript",permalink:"/tags/java-script"}],version:"current",frontMatter:{description:"for...in \u4e0e for...of \u7684\u533a\u522b",keywords:["JavaScript"],image:"https://picgo-1259617372.cos.ap-beijing.myqcloud.com/Picgo/2022/01/19-11-28-23-404Lab.jpeg",tags:["JavaScript"]},sidebar:"tutorialSidebar",previous:{title:"import assertions",permalink:"/JavaScript/import assertions"},next:{title:"\u5173\u4e8e\u9519\u8bef\u5904\u7406",permalink:"/JavaScript/\u5173\u4e8e\u9519\u8bef\u5904\u7406"}},c={},s=[{value:"for...in",id:"forin",level:2},{value:"\u600e\u4e48\u624d\u80fd\u904d\u5386 rabbit \u81ea\u5df1\u7684\u5c5e\u6027\uff1f",id:"\u600e\u4e48\u624d\u80fd\u904d\u5386-rabbit-\u81ea\u5df1\u7684\u5c5e\u6027",level:3},{value:"1. \u4f7f\u7528 <code>Object.keys(obj)</code>",id:"1-\u4f7f\u7528-objectkeysobj",level:4},{value:"2. \u4f7f\u7528 <code>obj.hasOwnProperty(key)</code> \u8fc7\u6ee4",id:"2-\u4f7f\u7528-objhasownpropertykey-\u8fc7\u6ee4",level:4},{value:"3. <code>getOwnPropertyNames</code>",id:"3-getownpropertynames",level:4},{value:"<strong>for...of</strong>",id:"forof",level:2},{value:"<strong>for...in</strong> \u4e0e <strong>for...of</strong> \u7684\u533a\u522b",id:"forin-\u4e0e-forof-\u7684\u533a\u522b",level:2}],m={toc:s},f="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{className:"Badges",src:"https://picgo-1259617372.cos.ap-beijing.myqcloud.com/logo_chen_%E7%B4%AB%E8%89%B2.svg"}),(0,a.kt)("h2",{id:"forin"},"for...in"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," \u8bed\u53e5\u4ee5",(0,a.kt)("strong",{parentName:"p"},"\u4efb\u610f\u987a\u5e8f"),"\u8fed\u4ee3\u4e00\u4e2a\u5bf9\u8c61\u7684\u9664 Symbol \u4ee5\u5916\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5305\u62ec\u7ee7\u627f\u7684"),"\u53ef\u679a\u4e3e\u5c5e\u6027\u3002"),(0,a.kt)("admonition",{title:"Note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"for in ",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u5e94\u8be5"),"\u7528\u4e8e\u8fed\u4ee3\u4e00\u4e2a\u5173\u6ce8\u7d22\u5f15\u987a\u5e8f\u7684 Array\uff0c\u56e0\u4e3a\u5b83\u4f1a\u628a\u7d22\u5f15\u987a\u5e8f\u7684\u9519\u8bef\u66b4\u9732\u7ed9\u7528\u6237\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u53e6\u5916\uff0cfor in \u4e5f",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u5efa\u8bae"),"\u7528\u4e8e\u8fed\u4ee3\u6570\u7ec4\u3002")),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"animal")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"rabbit")," \u5bf9\u8c61\uff0crabbit ",(0,a.kt)("strong",{parentName:"p"},"\u539f\u578b"),"\u4e3a animal \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let animal = {\n  eats: true,\n}\n\nlet rabbit = {\n  jumps: true,\n  __proto__: animal,\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," \u4f1a",(0,a.kt)("strong",{parentName:"p"},"\u8fed\u4ee3\u7ee7\u627f\u7684\u5c5e\u6027")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (let i in rabbit) {\n  console.log(i)\n}\n//jumps eats\n")),(0,a.kt)("h3",{id:"\u600e\u4e48\u624d\u80fd\u904d\u5386-rabbit-\u81ea\u5df1\u7684\u5c5e\u6027"},"\u600e\u4e48\u624d\u80fd\u904d\u5386 rabbit \u81ea\u5df1\u7684\u5c5e\u6027\uff1f"),(0,a.kt)("h4",{id:"1-\u4f7f\u7528-objectkeysobj"},"1. \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h4"},"Object.keys(obj)")),(0,a.kt)("p",null,"\u4ec5\u8fd4\u56de rabbit \u5bf9\u8c61\u81ea\u5df1\u7684",(0,a.kt)("strong",{parentName:"p"},"\u53ef\u679a\u4e3e"),"\u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Object.keys(rabbit)\n")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u5c5e\u6027\u7684\u987a\u5e8f\u4e0e\u624b\u52a8\u904d\u5386\u8be5\u5bf9\u8c61\u5c5e\u6027\u65f6\u7684\u4e00\u81f4\u3002"),(0,a.kt)("h4",{id:"2-\u4f7f\u7528-objhasownpropertykey-\u8fc7\u6ee4"},"2. \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h4"},"obj.hasOwnProperty(key)")," \u8fc7\u6ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (let i in rabbit) {\n  if (rabbit.hasOwnProperty(i)) {\n    console.log(i)\n  }\n}\n// jumps\n")),(0,a.kt)("h4",{id:"3-getownpropertynames"},"3. ",(0,a.kt)("inlineCode",{parentName:"h4"},"getOwnPropertyNames")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (let i in rabbit) {\n  console.log(Object.getOwnPropertyNames(rabbit))\n}\n// [ 'jumps']\n")),(0,a.kt)("p",null,"\u4f46\u8fd9\u6837\u4f1a\u628a",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u679a\u4e3e\u5bf9\u8c61\u4e5f\u8fd4\u56de"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f8b\u5982\uff1a")),(0,a.kt)("p",null,"\u4e0b\u8fb9\u7684\u4ee3\u7801\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5bf9\u8c61 ",(0,a.kt)("strong",{parentName:"p"},"o"),"\uff0c\u5c5e\u6027 ",(0,a.kt)("strong",{parentName:"p"},"a")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"enumerable")," \u7684\uff0c",(0,a.kt)("strong",{parentName:"p"},"b")," \u4e0d\u662f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\nvar o = { a: 'cat' }\n\n// \u5728\u5bf9\u8c61\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u5c5e\u6027\u4e0e\u6570\u636e\u63cf\u8ff0\u7b26\u7684\u793a\u4f8b\nObject.defineProperty(o, 'b', {\n  value: 'dog',\n  writable: true,\n  enumerable: false,\n  configurable: true,\n})\n")),(0,a.kt)("p",null,"\u5982\u679c\u73b0\u5728\u8fd8\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.getOwnPropertyNames(obj)"),"\uff0c\u5c31\u4f1a\u628a\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\u4e5f\u8fd4\u56de\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Object.getOwnPropertyNames(o))\n// [ 'a', 'b' ]\n// \u8fd9\u91cc\u7684 b \u662f\u4e0d\u53ef\u679a\u4e3e\u7684\u3002\n")),(0,a.kt)("p",null,"\u518d\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const arr = ['a', 'b', 'c']\nconsole.log(Object.getOwnPropertyNames(arr))\n//['0', '1', '2', 'length']\n// \u8fd9\u91cc\u7684 length \u662f\u4e0d\u53ef\u679a\u4e3e\u7684\u3002\n")),(0,a.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u5e76\u4e0d\u9700\u8981\u8fd4\u56de\u90a3\u4e9b\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\uff0c"),(0,a.kt)("p",null,"\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.prototype.propertyIsEnumerable(prop)")," \u8fc7\u6ee4\u6389\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\u3002"),(0,a.kt)("admonition",{title:"Note",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u53ef\u80fd\u4f60\u4f1a\u53d1\u73b0\uff0c\u65e2\u7136 for...in \u4f1a\u8fed\u4ee3\u7ee7\u627f\u7684\u5c5e\u6027\uff0c \u90a3",(0,a.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48 Object.prototype \u7684\u5c5e\u6027\u5374\u6ca1\u6709\u88ab\u904d\u5386"),"\u5462\uff1f"),(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.prototype")," \u4e2d\u7684\u5c5e\u6027\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"enumerable:false")," \u7684\u6807\u5fd7\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\xa0","\xa0",(0,a.kt)(o.Z,{color:"#feca57",mdxType:"Highlight"},"\u57fa\u672c\u5305\u88c5\u7c7b\u578b\u7684\u539f\u578b\u5c5e\u6027\u662f\u4e0d\u53ef\u679a\u4e3e\u7684"))),(0,a.kt)("p",null,"\u6700\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," \u662f\u4e3a\u904d\u5386\u5bf9\u8c61\u5c5e\u6027\u800c\u6784\u5efa\u7684\uff0c\u4e0d\u5efa\u8bae\u4e0e\u6570\u7ec4\u4e00\u8d77\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u8981\u8003\u8651\u5bf9\u8c61\u672c\u8eab\u7684\u5c5e\u6027\uff0c\u800c\u4e0d\u662f\u5b83\u7684\u539f\u578b\uff0c\u90a3\u4e48\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"getOwnPropertyNames()")," \u6216\u6267\u884c\n",(0,a.kt)("strong",{parentName:"p"},"hasOwnProperty()")," \u6765\u786e\u5b9a\u67d0\u5c5e\u6027\u662f\u5426\u662f\u5bf9\u8c61\u672c\u8eab\u7684\u5c5e\u6027\uff08\u4e5f\u80fd\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"propertyIsEnumerable"),"\uff09\u3002"),(0,a.kt)("h2",{id:"forof"},(0,a.kt)("strong",{parentName:"h2"},"for...of")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"for...of")," \u8bed\u53e5\u5728\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff08\u5305\u62ec Array\uff0cMap\uff0cSet\uff0cString\uff0cTypedArray\uff0carguments \u5bf9\u8c61\u7b49\u7b49\uff09\u4e0a\u521b\u5efa\u4e00\u4e2a\u8fed\u4ee3\u5faa\u73af\uff0c\u8c03\u7528\u81ea\u5b9a\u4e49\u8fed\u4ee3\u94a9\u5b50\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u4e0d\u540c",(0,a.kt)("strong",{parentName:"p"},"\u5c5e\u6027\u7684\u503c"),"\u6267\u884c\u8bed\u53e5"),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("strong",{parentName:"p"},"for...of")," \u7684\u5faa\u73af\uff0c\u53ef\u4ee5\u7531 break, throw \u6216 return \u7ec8\u6b62\u3002"),(0,a.kt)("h2",{id:"forin-\u4e0e-forof-\u7684\u533a\u522b"},(0,a.kt)("strong",{parentName:"h2"},"for...in")," \u4e0e ",(0,a.kt)("strong",{parentName:"h2"},"for...of")," \u7684\u533a\u522b"),(0,a.kt)("p",null,"\u5b83\u4eec\u4e4b\u95f4\u7684\u4e3b\u8981\u533a\u522b\u5728\u4e8e\u5b83\u4eec\u7684",(0,a.kt)(o.Z,{color:"#feca57",mdxType:"Highlight"},"\u8fed\u4ee3\u65b9\u5f0f"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," \u4e3a\u4e86\u904d\u5386\u4e00\u4e2a\u5bf9\u8c61\u7684\u6240\u6709\u952e\uff08key\uff09\uff0c\u8bed\u53e5\u4ee5\u4efb\u610f\u987a\u5e8f\u8fed\u4ee3\u5bf9\u8c61\u7684",(0,a.kt)("strong",{parentName:"p"},"\u53ef\u679a\u4e3e\u5c5e\u6027"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"for...of")," \u8bed\u53e5\u904d\u5386\u53ef\u8fed\u4ee3\u5bf9\u8c61\u5b9a\u4e49\u8981\u8fed\u4ee3\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e"),"\u3002"),(0,a.kt)("p",null,"\u5e76\u4e14\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528 for...in \u904d\u5386\u6570\u7ec4\u3002"),(0,a.kt)("admonition",{title:"\u53c2\u8003\uff1a",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/kongxy/p/4618173.html"},"https://www.cnblogs.com/kongxy/p/4618173.html")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://zh.javascript.info/iterable"},"https://zh.javascript.info/iterable")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"},"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"},"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"},"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"))),(0,a.kt)(o.Z,{color:"#feca57",mdxType:"Highlight"},"\ud83d\udc47 \u5982\u679c\u4f60\u6709\u597d\u7684\u60f3\u6cd5\uff0c\u8bf7\u4e00\u8d77\u5b8c\u5584\u5427"))}d.isMDXComponent=!0}}]);