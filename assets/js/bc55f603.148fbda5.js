"use strict";(self.webpackChunkicepkg_site=self.webpackChunkicepkg_site||[]).push([[148],{8570:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var l=t(79);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},k=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),k=u(t),c=a,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||i;return t?l.createElement(d,o(o({ref:n},s),{},{components:t})):l.createElement(d,o({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=k;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var u=2;u<i;u++)o[u]=t[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var l=t(7583),a=(t(79),t(8570));const i={},o="\u5f00\u53d1\u63d2\u4ef6",r={unversionedId:"plugins-development",id:"plugins-development",title:"\u5f00\u53d1\u63d2\u4ef6",description:"ICE PKG \u57fa\u4e8e build-scripts \u63d2\u4ef6\u7cfb\u7edf\u3002\u901a\u8fc7 build-scripts \u63d2\u4ef6\uff0c\u53ef\u4ee5\u6781\u5927\u5730\u6269\u5c55 ICE PKG \u7684\u80fd\u529b\u3002",source:"@site/docs/plugins-development.md",sourceDirName:".",slug:"/plugins-development",permalink:"/plugins-development",draft:!1,editUrl:"https://github.com/ice-lab/icepkg/tree/main/website/docs/docs/plugins-development.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6784\u5efa\u914d\u7f6e",permalink:"/guide/config"},next:{title:"FAQ",permalink:"/faq"}},p={},u=[{value:"\u63d2\u4ef6\u793a\u4f8b",id:"\u63d2\u4ef6\u793a\u4f8b",level:2},{value:"\u63d2\u4ef6 API",id:"\u63d2\u4ef6-api",level:2},{value:"context",id:"context",level:3},{value:"onGetConfig",id:"ongetconfig",level:3},{value:"entry",id:"entry",level:4},{value:"define",id:"define",level:4},{value:"sourcemap",id:"sourcemap",level:4},{value:"alias",id:"alias",level:4},{value:"modifyRollupOptions",id:"modifyrollupoptions",level:4},{value:"babelPlugins",id:"babelplugins",level:4},{value:"swcCompileOptions",id:"swccompileoptions",level:4},{value:"outputDir",id:"outputdir",level:4},{value:"modifyStylesOptions",id:"modifystylesoptions",level:4},{value:"extensions",id:"extensions",level:4},{value:"name",id:"name",level:4},{value:"modes",id:"modes",level:4},{value:"externals",id:"externals",level:4},{value:"minify",id:"minify",level:4},{value:"development\uff08\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528 modes\uff09",id:"development\u5df2\u5e9f\u5f03\u8bf7\u4f7f\u7528-modes",level:4},{value:"onHook",id:"onhook",level:3},{value:"registerTask",id:"registertask",level:3},{value:"getAllTask",id:"getalltask",level:3},{value:"modifyUserConfig",id:"modifyuserconfig",level:3},{value:"registerUserConfig",id:"registeruserconfig",level:3}],s={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5f00\u53d1\u63d2\u4ef6"},"\u5f00\u53d1\u63d2\u4ef6"),(0,a.kt)("p",null,"ICE PKG \u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ice-lab/build-scripts"},"build-scripts")," \u63d2\u4ef6\u7cfb\u7edf\u3002\u901a\u8fc7 build-scripts \u63d2\u4ef6\uff0c\u53ef\u4ee5\u6781\u5927\u5730\u6269\u5c55 ICE PKG \u7684\u80fd\u529b\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u793a\u4f8b"},"\u63d2\u4ef6\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="plugin.mjs"',title:'"plugin.mjs"'},"/**\n * @type {import('@ice/pkg').Plugin}\n */\nconst plugin = (api, options) => {\n  console.log('api: ', api);\n};\n\nexport default plugin;\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"build.config.mts")," \u4e2d\u5f15\u5165\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"import { defineConfig } from '@ice/pkg';\n\nexport default defineConfig({\n+ plugins: [\n+   './plugin.mjs',\n+ ],\n});\n")),(0,a.kt)("h2",{id:"\u63d2\u4ef6-api"},"\u63d2\u4ef6 API"),(0,a.kt)("h3",{id:"context"},"context"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u5305\u542b\u6784\u5efa\u65f6\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"command"),"\uff1a\u5f53\u524d\u8fd0\u884c\u547d\u4ee4\uff0cstart/build/test"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"commandArgs"),"\uff1ascript \u547d\u4ee4\u6267\u884c\u65f6\u63a5\u53d7\u5230\u7684\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rootDir"),"\uff1a\u9879\u76ee\u6839\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userConfig"),"\uff1a\u7528\u6237\u5728\u6784\u5efa\u914d\u7f6e\u6587\u4ef6 build.config.mts \u4e2d\u914d\u7f6e\u7684\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pkg"),"\uff1a\u9879\u76ee package.json \u4e2d\u7684\u5185\u5bb9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  console.log(api.context);\n}\n")),(0,a.kt)("h3",{id:"ongetconfig"},"onGetConfig"),(0,a.kt)("p",null,"ICE PKG \u4f1a\u6839\u636e\u7528\u6237\u914d\u7f6e transform \u548c bundle \u6a21\u5f0f\u7684\u8f93\u51fa\u4ea7\u7269\u683c\u5f0f\uff0c\u5206\u522b\u4f1a\u6ce8\u518c\u4ee5\u4e0b\u4efb\u52a1\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transform-esm"),"\uff1a\u9ed8\u8ba4\u542f\u52a8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transform-es2017"),"\uff1a\u9ed8\u8ba4\u542f\u52a8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transform-cjs"),"\uff1a\u5f53 transform \u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"formats: ['cjs']")," \u542f\u52a8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bundle-es5"),"\uff1a\u5f53 bundle \u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"formats: ['esm']")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"formats: ['cjs']")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"formats: ['umd']")," \u65f6\u542f\u52a8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bundle-es2017"),"\uff1a\u5f53 bundle \u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"formats: ['es2017']")," \u65f6\u542f\u52a8")),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"onGetConfig")," API\uff0c\u53ef\u4ee5\u4fee\u6539\u6bcf\u4e2a Task \u4efb\u52a1\u7684\u914d\u7f6e\u9879\u3002"),(0,a.kt)("p",null,"\u5f53\u4e0d\u6307\u5b9a\u4efb\u52a1\u540d\u65f6\uff0c\u4fee\u6539\u7684\u914d\u7f6e\u4f1a\u5bf9\u6240\u6709\u4efb\u52a1\u751f\u6548\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  // \u4e0d\u6307\u5b9a Task name\n  onGetConfig((config) => {\n    return {\n      ...config,\n      entry: './component/index',\n    };\n  });\n};\n")),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4fee\u6539\u67d0\u4e2a\u4efb\u52a1\u7684\u914d\u7f6e\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  // \u4ec5\u4ec5\u4fee\u6539 transform-esm \u4efb\u52a1\u7684\u914d\u7f6e\n  onGetConfig('transform-esm', config => {\n    return ({\n      ...config,\n      entry: './component/index',\n    });\n  });\n};\n")),(0,a.kt)("p",null,"\u6709\u4ee5\u4e0b\u53c2\u6570\u53ef\u4ee5\u914d\u7f6e\uff1a"),(0,a.kt)("h4",{id:"entry"},"entry"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string | string[] | { [entryAlias: string]: string }")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"'./src/index'"))),(0,a.kt)("p",null,"\u6307\u5b9a\u6784\u5efa\u5165\u53e3\u3002\u652f\u6301\u914d\u7f6e\u5355\u5165\u53e3\u6216\u8005\u591a\u4e2a\u5165\u53e3\u3002"),(0,a.kt)("p",null,"\u6307\u5b9a\u5355\u4e2a\u5165\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig(config => {\n    return ({\n      ...config,\n      entry: './component/index',\n    });\n  });\n};\n")),(0,a.kt)("p",null,"\u6307\u5b9a\u591a\u4e2a\u5165\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig(config => {\n    return ({\n      ...config,\n      // 1. \u6570\u7ec4\u5f62\u5f0f\n      entry: ['./src/foo', './src/bar'],\n      // 2. \u5bf9\u8c61\u5f62\u5f0f\uff0ckey \u503c\u4f5c\u4e3a chunk name\n      entry: {\n        foo: './src/foo',\n        bar2: './src/bar'\n      }\n    });\n  });\n};\n")),(0,a.kt)("h4",{id:"define"},"define"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Record<string, string>")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"{ 'process.env.NODE_ENV': 'development' | 'production', __DEV__: true | false }"))),(0,a.kt)("p",null,"\u5b9a\u4e49\u7f16\u8bd1\u65f6\u73af\u5883\u53d8\u91cf\uff0c\u4f1a\u5728\u7f16\u8bd1\u65f6\u88ab\u66ff\u6362\u3002\u6ce8\u610f\uff1a\u5c5e\u6027\u503c\u4f1a\u7ecf\u8fc7\u4e00\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," \u8f6c\u6362\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig(config => {\n    return ({\n      ...config,\n      define: {\n        VERSION: '1.0.0'\n      },\n    });\n  });\n};\n")),(0,a.kt)("h4",{id:"sourcemap"},"sourcemap"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | 'inline'")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1astart \u9636\u6bb5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0cbuild \u9636\u6bb5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"\u914d\u7f6e\u662f\u5426\u751f\u6210\u6e90\u7801\u8c03\u8bd5\u6620\u5c04\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig(config => {\n    return ({\n      ...config,\n      sourcemap: true,\n    });\n  });\n};\n")),(0,a.kt)("h4",{id:"alias"},"alias"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Record<string, string>")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"{}"))),(0,a.kt)("p",null,"\u914d\u7f6e\u6a21\u5757\u5f15\u5165\u7684\u522b\u540d\u3002\u6bd4\u5982\uff0c\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," \u6307\u5411 ",(0,a.kt)("inlineCode",{parentName:"p"},"./src")," \u76ee\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig(config => {\n    return ({\n      ...config,\n      alias: {\n        '@': './src',\n      },\n    });\n  });\n};\n")),(0,a.kt)("p",null,"\u7136\u540e\u4ee3\u7801\u91cc ",(0,a.kt)("inlineCode",{parentName:"p"},"import '@/foo'")," \u4f1a\u88ab\u6539\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"import '/path/to/your/project/foo'"),"\u3002"),(0,a.kt)("h4",{id:"modifyrollupoptions"},"modifyRollupOptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Array<(rollupOptions: RollupOptions) => RollupOptions>")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"[]"))),(0,a.kt)("p",null,"\u4fee\u6539\u9ed8\u8ba4\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/#rolluprollup"},"Rollup \u9009\u9879"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import svelte from 'rollup-plugin-svelte';\n\nconst plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig(config => {\n    config.modifyRollupOptions ??= [];\n    config.modifyRollupOptions.push((rollupOptions) => {\n      rollupOptions.plugins.push(svelte({}));\n      return rollupOptions;\n    })\n  });\n};\n")),(0,a.kt)("h4",{id:"babelplugins"},"babelPlugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"babel.PluginItem[] | undefined")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"\u914d\u7f6e\u989d\u5916\u7684 babel \u63d2\u4ef6\u3002\u5f53\u914d\u7f6e\u6b64\u9009\u9879\u540e\uff0c\u5c06\u4f1a\u5148\u4f7f\u7528 babel \u5bf9\u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1\uff0c\u7136\u540e\u518d\u7ecf\u8fc7 swc \u7f16\u8bd1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig(config => {\n    config.babelPlugins = [];\n  });\n};\n")),(0,a.kt)("h4",{id:"swccompileoptions"},"swcCompileOptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"swc.Config")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"{}"))),(0,a.kt)("p",null,"swc \u7f16\u8bd1\u9009\u9879\uff0c\u4f1a\u4e0e\u9ed8\u8ba4\u7684\u9009\u9879\u5408\u5e76\u3002\u5177\u4f53\u7f16\u8bd1\u9009\u9879\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://swc.rs/docs/configuration/swcrc"},"swc \u914d\u7f6e"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig(config => {\n    config.swcCompileOptions = {\n      // config\n    };\n  });\n};\n")),(0,a.kt)("h4",{id:"outputdir"},"outputDir"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ec5\u5bf9 bundle \u6a21\u5f0f\u751f\u6548\u3002transform \u6a21\u5f0f\u6309\u7167\u914d\u7f6e\u7684 format \u503c\u5206\u522b\u8f93\u51fa\u5230\u5bf9\u5e94\u76ee\u5f55\uff0c\u6bd4\u5982 esm\u3001cjs\u3001es2017")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"dist"))),(0,a.kt)("p",null,"\u914d\u7f6e bundle \u6a21\u5f0f\u4e0b\u7ec4\u4ef6\u7f16\u8bd1\u4ea7\u7269\u7684\u8f93\u51fa\u76ee\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig('bundle-es5', config => {\n    return ({\n      ...config,\n      outputDir: 'build',\n    });\n  });\n};\n")),(0,a.kt)("h4",{id:"modifystylesoptions"},"modifyStylesOptions"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ec5\u5bf9 Bundle \u6a21\u5f0f\u751f\u6548")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"li"},"Array<(options: StylesRollupPluginOptions) => StylesRollupPluginOptions>")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"[]"))),(0,a.kt)("p",null,"ICE PKG \u9ed8\u8ba4\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/rollup-plugin-styles"},"rollup-plugin-styles")," \u5904\u7406\u6837\u5f0f\u6587\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"modifyStylesOptions")," \u65b9\u5f0f\u4fee\u6539\u63d2\u4ef6\u7684\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import PostcssPluginRpxToVw from 'postcss-plugin-rpx2vw';\n\nconst plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig('bundle-es5', (config) => {\n    config.modifyStylesOptions ??= [];\n    config.modifyStylesOptions.push((stylesOptions) => {\n      stylesOptions.plugins ||= [];\n      (stylesOptions.plugins).push(PostcssPluginRpxToVw());\n      return stylesOptions;\n    })\n    return config;\n  });\n};\n")),(0,a.kt)("h4",{id:"extensions"},"extensions"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ec5\u5bf9 Bundle \u6a21\u5f0f\u751f\u6548")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"['.mjs', '.js', '.json', '.node', '.jsx', '.ts', '.tsx', '.mts', '.cjs', '.cts']"))),(0,a.kt)("p",null,"\u914d\u7f6e\u89e3\u6790\u7684\u6587\u4ef6\u540e\u7f00\u540d\uff0c\u8fd9\u6837\u5728\u5f15\u5165\u6a21\u5757\u65f6\u4e0d\u9700\u8981\u5e26\u540e\u7f00\u540d\uff0c\u914d\u7f6e\u540e\u4f1a\u4e0e\u9ed8\u8ba4\u503c\u5408\u5e76\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig('bundle-es5', (config) => {\n    config.extensions = ['.xtpl'];\n    return config;\n  });\n};\n")),(0,a.kt)("h4",{id:"name"},"name"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ec5\u5bf9 Bundle \u6a21\u5f0f\u751f\u6548")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"package.name"))),(0,a.kt)("p",null,"bundle \u5bfc\u51fa\u540d\u79f0\u3002\u4e00\u822c\u7528\u4e8e umd \u4ea7\u7269\u4e2d\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"window[name]")," \u62ff\u5230\u4ea7\u7269\u6a21\u5757\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig('bundle-es5', (config) => {\n    config.name = \"ICEPKG\";\n    return config;\n  });\n};\n")),(0,a.kt)("h4",{id:"modes"},"modes"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ec5\u5bf9 Bundle \u6a21\u5f0f\u751f\u6548")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Array<'development' | 'production' | string>")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"['production']"))),(0,a.kt)("p",null,"\u6307\u5b9a\u8f93\u51fa\u7684\u4ea7\u7269\u662f\u5426\u7ecf\u8fc7\u538b\u7f29\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8f93\u51fa\u7684\u4ea7\u7269\u662f\u538b\u7f29\u8fc7\u7684\uff08\u4e5f\u5c31\u662f\u5f00\u542f\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"production"),"\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig('bundle-es5', (config) => {\n    // \u540c\u65f6\u751f\u6210\u4e00\u4efd\u672a\u538b\u7f29\u7684\u4ea7\u7269\u548c\u4e00\u4efd\u538b\u7f29\u4ea7\u7269\n    config.modes = ['development', 'production'];\n    return config;\n  });\n};\n")),(0,a.kt)("h4",{id:"externals"},"externals"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ec5\u5bf9 Bundle \u6a21\u5f0f\u751f\u6548")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | Record<string, string>")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"{}"))),(0,a.kt)("p",null,"\u8bbe\u7f6e\u54ea\u4e9b\u6a21\u5757\u4e0d\u6253\u5305\uff0c\u8f6c\u800c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," \u6216\u5176\u4ed6\u65b9\u5f0f\u5f15\u5165\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig('bundle-es5', (config) => {\n    return {\n      ...config,\n      externals: {\n        react: 'React',\n        'react-dom': 'ReactDOM',\n      },\n    };\n  });\n};\n")),(0,a.kt)("h4",{id:"minify"},"minify"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ec5\u5bf9 Bundle \u6a21\u5f0f\u751f\u6548")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1astart \u9636\u6bb5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\uff0cbuild \u9636\u6bb5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"\u662f\u5426\u538b\u7f29 JS \u548c CSS \u4ea7\u7269\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onGetConfig } = api;\n  onGetConfig('bundle-es5', (config) => {\n    return {\n      ...config,\n      minify: false,\n    };\n  });\n};\n")),(0,a.kt)("h4",{id:"development\u5df2\u5e9f\u5f03\u8bf7\u4f7f\u7528-modes"},"development\uff08\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528 modes\uff09"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ec5\u5bf9 Bundle \u6a21\u5f0f\u751f\u6548")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"\u662f\u5426\u751f\u6210 development \u7684\u4ea7\u7269\u3002"),(0,a.kt)("h3",{id:"onhook"},"onHook"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"onHook")," \u76d1\u542c\u547d\u4ee4\u6784\u5efa\u65f6\u4e8b\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"onHook")," \u6ce8\u518c\u7684\u51fd\u6570\u6267\u884c\u5b8c\u6210\u540e\u624d\u4f1a\u6267\u884c\u540e\u7eed\u64cd\u4f5c\uff0c\u53ef\u4ee5\u7528\u4e8e\u5728\u547d\u4ee4\u8fd0\u884c\u4e2d\u9014\u63d2\u5165\u63d2\u4ef6\u60f3\u505a\u7684\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { onHook } = api;\n  onHook('after.build.compile', (args) => {\n    console.log(args.taskName, '\u7f16\u8bd1\u7ed3\u675f');\n  });\n};\n")),(0,a.kt)("p",null,"ICE PKG \u63d2\u4ef6\u63d0\u4f9b\u4ee5\u4e0b\u751f\u547d\u5468\u671f\u94a9\u5b50\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"build \u547d\u4ee4\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u751f\u547d\u5468\u671f"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8c03\u7528\u65f6\u673a"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"before.build.load"),(0,a.kt)("td",{parentName:"tr",align:null},"{ args: CommandArgs; config: PkgConfig[] }"),(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6240\u6709\u4efb\u52a1\u914d\u7f6e\u540e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"before.build.run"),(0,a.kt)("td",{parentName:"tr",align:null},"{ args: CommandArgs; config: PkgConfig[]  }"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7f16\u8bd1\u6267\u884c\u4e4b\u524d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"after.build.compile"),(0,a.kt)("td",{parentName:"tr",align:null},"{ taskName: string; outputFiles: OutputFile[]; outputs?: Array<rollup.RollupOutput","['output']",">; modules?: rollup.RollupCache","['modules']"," }"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7f16\u8bd1\u7ed3\u675f")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"start \u547d\u4ee4")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u751f\u547d\u5468\u671f"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8c03\u7528\u65f6\u673a"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"before.start.load"),(0,a.kt)("td",{parentName:"tr",align:null},"{ args: CommandArgs; config: PkgConfig[] }"),(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6240\u6709\u4efb\u52a1\u914d\u7f6e\u540e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"before.start.run"),(0,a.kt)("td",{parentName:"tr",align:null},"{ args: CommandArgs; config: PkgConfig[]  }"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7f16\u8bd1\u6267\u884c\u4e4b\u524d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"after.start.compile"),(0,a.kt)("td",{parentName:"tr",align:null},"{ taskName: string; outputFiles: OutputFile[]; modules?: rollup.ModuleJSON[] }"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7f16\u8bd1\u7ed3\u675f")))),(0,a.kt)("h3",{id:"registertask"},"registerTask"),(0,a.kt)("p",null,"\u6dfb\u52a0\u81ea\u5b9a\u4e49 Task \u4efb\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { registerTask } = api;\n  registerTask('transform-cjs', {\n    type: 'transform', // \u5fc5\u586b\n  }); \n};\n")),(0,a.kt)("h3",{id:"getalltask"},"getAllTask"),(0,a.kt)("p",null,"\u83b7\u53d6\u6240\u6709 Task \u4efb\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { getAllTask } = api;\n  const tasks = getAllTask(); \n};\n")),(0,a.kt)("h3",{id:"modifyuserconfig"},"modifyUserConfig"),(0,a.kt)("p",null,"\u4fee\u6539\u7528\u6237\u914d\u7f6e\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { modifyUserConfig } = api;\n  modifyUserConfig(key, value);\n};\n")),(0,a.kt)("h3",{id:"registeruserconfig"},"registerUserConfig"),(0,a.kt)("p",null,"\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"build.config.mts")," \u914d\u7f6e\u6587\u4ef6\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (api) => {\n  const { registerUserConfig } = api;\n  registerUserConfig({\n    name: 'custom-key',\n    validation: 'boolean' // \u53ef\u9009\uff0c\u652f\u6301\u7c7b\u578b\u6709 string, number, array, object, boolean\n    setConfig: () => {\n      // \u8be5\u5b57\u6bb5\u5bf9\u4e8e\u914d\u7f6e\u7684\u5f71\u54cd\uff0c\u901a\u8fc7 onGetConfig \u8bbe\u7f6e\n    },\n  });\n};\n")))}m.isMDXComponent=!0}}]);