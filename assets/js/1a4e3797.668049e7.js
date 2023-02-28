"use strict";(self.webpackChunkicepkg_site=self.webpackChunkicepkg_site||[]).push([[920],{6124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var r=n(79),a=n(3295),l=n(8470),s=n(9969),c=n(3374),o=n(2971);const u=["zero","one","two","few","many","other"];function m(e){return u.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function h(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function p(){const e=h();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}var g=n(4309),d=n(2073);const f=function(){const e=(0,g.k6)(),t=(0,g.TH)(),{siteConfig:{baseUrl:n}}=(0,a.Z)(),r=d.Z.canUseDOM?new URLSearchParams(t.search):null,l=r?.get("q")||"",s=r?.get("ctx")||"",c=r?.get("version")||"",o=e=>{const n=new URLSearchParams(t.search);return e?n.set("q",e):n.delete("q"),n};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const n=o(t);e.replace({search:n.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${n}search?${t.toString()}`}}};var E=n(2679),y=n(4070),S=n(2393),w=n(8302),b=n(9776),P=n(9580),k=n(1293),v=n(7485);const I="searchQueryInput_bn2V",R="searchResultItem_tjme",_="searchResultItemPath_KW8s",$="searchResultItemSummary_ktAu";function x(){const{siteConfig:{baseUrl:e}}=(0,a.Z)(),{selectMessage:t}=p(),{searchValue:n,searchContext:l,searchVersion:c,updateSearchPath:u}=f(),[m,i]=(0,r.useState)(n),[h,g]=(0,r.useState)(),[d,S]=(0,r.useState)(),w=`${e}${c}`,b=(0,r.useMemo)((()=>m?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:m}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[m]);(0,r.useEffect)((()=>{u(m),h&&(m?h(m,(e=>{S(e)})):S(void 0))}),[m,h]);const k=(0,r.useCallback)((e=>{i(e.target.value)}),[]);return(0,r.useEffect)((()=>{n&&n!==m&&i(n)}),[n]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,E.w)(w,l);g((()=>(0,y.v)(e,t,100)))}()}),[l,w]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,b)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,b),r.createElement("input",{type:"search",name:"q",className:I,"aria-label":"Search",onChange:k,value:m,autoComplete:"off",autoFocus:!0}),!h&&m&&r.createElement("div",null,r.createElement(P.Z,null)),d&&(d.length>0?r.createElement("p",null,t(d.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:d.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,d&&d.map((e=>r.createElement(C,{key:e.document.i,searchResult:e}))))))}function C(e){let{searchResult:{document:t,type:n,page:a,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:a.b).slice(),i=u?t.s:t.t;o||m.push(a.t);let h="";if(v.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);h=`?${e.toString()}`}return r.createElement("article",{className:R},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+h+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,S.C)(i,l):(0,w.o)(i,(0,b.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:_},(0,k.e)(m)),u&&r.createElement("p",{className:$,dangerouslySetInnerHTML:{__html:(0,w.o)(t.t,(0,b.m)(s,"t"),l,100)}}))}const F=function(){return r.createElement(l.Z,null,r.createElement(x,null))}}}]);