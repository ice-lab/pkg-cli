"use strict";(self.webpackChunkicepkg_site=self.webpackChunkicepkg_site||[]).push([[197],{8570:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(79);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7583),a=(t(79),t(8570));const o={},i="\u524d\u7aef\u7c7b\u5e93",l={unversionedId:"scenarios/web",id:"scenarios/web",title:"\u524d\u7aef\u7c7b\u5e93",description:"\u524d\u7aef\u7c7b\u5e93\u6307\u7684\u662f\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u7684 JavaScript \u6a21\u5757\uff0c\u4f7f\u7528\u7684\u573a\u666f\u6709\uff1a",source:"@site/docs/scenarios/web.md",sourceDirName:"scenarios",slug:"/scenarios/web",permalink:"/scenarios/web",draft:!1,editUrl:"https://github.com/ice-lab/icepkg/tree/main/website/docs/docs/scenarios/web.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Node \u6a21\u5757",permalink:"/scenarios/node"},next:{title:"JSX+",permalink:"/guide/jsx-plus"}},s={},p=[{value:"\u521d\u59cb\u5316\u524d\u7aef\u7c7b\u5e93\u9879\u76ee",id:"\u521d\u59cb\u5316\u524d\u7aef\u7c7b\u5e93\u9879\u76ee",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u524d\u7aef\u7c7b\u5e93"},"\u524d\u7aef\u7c7b\u5e93"),(0,a.kt)("p",null,"\u524d\u7aef\u7c7b\u5e93\u6307\u7684\u662f\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u7684 JavaScript \u6a21\u5757\uff0c\u4f7f\u7528\u7684\u573a\u666f\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c React\u3001lodash\u3001moment \u7b49\u9700\u8981\u5bf9\u5916\u63d0\u4f9b UMD \u4ea7\u7269"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u65f6\u63d0\u4f9b\u672a\u538b\u7f29\u7684\u7248\u672c\uff0c\u6ee1\u8db3\u5f00\u53d1\u6001\u9700\u6c42"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u65f6\u9700\u8981\u63d0\u4f9b NPM \u5305\u6d88\u8d39\u7684\u4ea7\u7269")),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u524d\u7aef\u7c7b\u5e93\u9879\u76ee"},"\u521d\u59cb\u5316\u524d\u7aef\u7c7b\u5e93\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init @ice/pkg web-project\n")),(0,a.kt)("p",null,"\u9879\u76ee\u7c7b\u578b\u9009\u62e9\u300e\u524d\u7aef\u7c7b\u5e93\u300f\uff0c\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u65b0\u5efa web-project \u6587\u4ef6\u5939\u5e76\u5728\u5176\u4e2d\u521d\u59cb\u5316\u524d\u7aef\u7c7b\u5e93\u9879\u76ee\uff0c\u5176\u6587\u4ef6\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 abc.json\n\u251c\u2500\u2500 build.config.mts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.ts\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 ICE PKG \u7684 ",(0,a.kt)("a",{parentName:"p",href:"../#%E5%8F%8C%E6%A8%A1%E5%BC%8F"},"transform \u6a21\u5f0f")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"../#%E5%8F%8C%E6%A8%A1%E5%BC%8F"},"bundle \u6a21\u5f0f")," \u8fdb\u884c\u5f00\u53d1\u3002\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=build.config.mts",title:"build.config.mts"},"import { defineConfig } from '@ice/pkg';\n\nexport default defineConfig({\n  bundle: {\n    formats: ['umd', 'es2017'],\n    externals: false,\n  },\n  transform: {\n    formats: ['esm', 'es2017'],\n  },\n});\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u524d\u7aef\u7c7b\u5e93\u7684 bundle \u4ea7\u7269\u800c\u8a00\uff0cexternals \u914d\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff08\u5373\u6253\u5165\u6240\u6709\u4f9d\u8d56\uff0c\u4e5f\u662f ICE PKG \u7684\u9ed8\u8ba4\u8868\u73b0\uff09 \u662f ICE PKG \u63a8\u8350\u7684\u65b9\u5f0f\u3002")),(0,a.kt)("p",null,"\u6b64\u914d\u7f6e\u4e0b\u8f93\u51fa\u4ee5\u4e0b\u4ea7\u7269\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"- dist\n  - index.umd.production.js\n  - index.umd.development.js\n  - index.umd.es2017.production.js\n  - index.umd.es2017.development.js\n- esm\n- es2017\n")),(0,a.kt)("p",null,"\u5bfc\u51fa\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "type": "module",\n  "module": "./esm/index.js",\n  "exports": {\n    "es2017": "./es2017/index.js",\n    "import": "./esm/index.js"\n  }\n}\n')))}u.isMDXComponent=!0}}]);