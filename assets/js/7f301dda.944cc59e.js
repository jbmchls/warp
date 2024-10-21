"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[3369],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9937:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:5},o="WDL formatting tips",l={unversionedId:"Best_practices/suggested_formats",id:"Best_practices/suggested_formats",title:"WDL formatting tips",description:"There are multiple WDL resources on how to keep scripts clean and easy to read. The Broad Pipeline Development team suggests checking out the BioWDL style guide for tips and tricks. The team follows most of the BioWDL guidelines, with a few exceptions and additions detailed in the table below:",source:"@site/docs/Best_practices/suggested_formats.md",sourceDirName:"Best_practices",slug:"/Best_practices/suggested_formats",permalink:"/warp/docs/Best_practices/suggested_formats",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Best_practices/suggested_formats.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1729514961,formattedLastUpdatedAt:"Oct 21, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Reusing WDL code",permalink:"/warp/docs/Best_practices/reusing_code"},next:{title:"Task execution - tips for using the WDL task command section",permalink:"/warp/docs/Best_practices/task_execution"}},s={},p=[{value:"Resources",id:"resources",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wdl-formatting-tips"},"WDL formatting tips"),(0,a.kt)("p",null,"There are multiple WDL resources on how to keep scripts clean and easy to read. The Broad Pipeline Development team suggests checking out the ",(0,a.kt)("a",{parentName:"p",href:"https://biowdl.github.io/styleGuidelines.html"},"BioWDL style guide")," for tips and tricks. The team follows most of the BioWDL guidelines, with a few exceptions and additions detailed in the table below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Style attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"BioWDL recommendation"),(0,a.kt)("th",{parentName:"tr",align:null},"Pipeline Development team WDL practice"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Indentation spacing"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://biowdl.github.io/styleGuidelines.html#1-indentation"},"Indent 4 spaces")),(0,a.kt)("td",{parentName:"tr",align:null},"Indent 2 spaces.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Blank lines"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://biowdl.github.io/styleGuidelines.html#2-blank-lines"},"Add blank lines between workflow sections"),"."),(0,a.kt)("td",{parentName:"tr",align:null},"No particular convention for blank lines. In general, do not add blank lines between the closing braces of a parent and child block.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Line breaks"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://biowdl.github.io/styleGuidelines.html#4-line-length-and-line-breaks"},"Adhere to line break limits"),"."),(0,a.kt)("td",{parentName:"tr",align:null},"Do not follow specific formatting for line breaks.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Naming conventions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://biowdl.github.io/styleGuidelines.html#5-naming-conventions"},"Use the listed naming standards"),"."),(0,a.kt)("td",{parentName:"tr",align:null},"Do not follow specific naming conventions. In general, variables are lowercase underscore (python style) and alias calls use UpperCamelCase.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Task command section input arguments"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A. No guidelines provided on formatting input arguments."),(0,a.kt)("td",{parentName:"tr",align:null},"Use one input argument per code line. For an example, see the STAR parameters in the ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/tasks/skylab/StarAlign.wdl"},"StarAlign task WDL"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Filenames"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A. No guidelines provided."),(0,a.kt)("td",{parentName:"tr",align:null},"Recommends renaming files to meet tool requirements, including adding or removing necessary file extensions. For example, some tools require a \u201c.gz\u201d extension).")))),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://biowdl.github.io/styleGuidelines.html"},"BioWDL Styleguide"))))}u.isMDXComponent=!0}}]);