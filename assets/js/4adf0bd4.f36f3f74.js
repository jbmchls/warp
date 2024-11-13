"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[1651],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,f=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3838:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return p}});var i=n(3117),a=(n(7294),n(3905));const r={sidebar_position:3},s="Testing Pipelines",o={unversionedId:"About_WARP/TestingPipelines",id:"About_WARP/TestingPipelines",title:"Testing Pipelines",description:"WARP pipelines have accompanying automated tests that run on each Pull Request (PR). These tests compare validated outputs to the new PR outputs. For any changes in code shared between pipelines, the tests also confirm which pipelines could be affected and ensure that the PR makes no unexpected changes to the affected pipelines.",source:"@site/docs/About_WARP/TestingPipelines.md",sourceDirName:"About_WARP",slug:"/About_WARP/TestingPipelines",permalink:"/warp/docs/About_WARP/TestingPipelines",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/About_WARP/TestingPipelines.md",tags:[],version:"current",lastUpdatedBy:"Jessica Way",lastUpdatedAt:1731515385,formattedLastUpdatedAt:"Nov 13, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Pipeline Requirements",permalink:"/warp/docs/About_WARP/PipelineRequirements"},next:{title:"Version and Release Pipelines",permalink:"/warp/docs/About_WARP/VersionAndReleasePipelines"}},l={},p=[{value:"WARP branches and how they relate to testing",id:"warp-branches-and-how-they-relate-to-testing",level:2},{value:"Initiating pipeline tests",id:"initiating-pipeline-tests",level:2},{value:"Contact us with questions about testing",id:"contact-us-with-questions-about-testing",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-pipelines"},"Testing Pipelines"),(0,a.kt)("p",null,"WARP pipelines have accompanying automated tests that run on each Pull Request (PR). These tests compare validated outputs to the new PR outputs. For any changes in code shared between pipelines, the tests also confirm which pipelines could be affected and ensure that the PR makes no unexpected changes to the affected pipelines."),(0,a.kt)("admonition",{title:"NOTICE 9/29/2020",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We have formatted all testing input files for Cromwell 52 or higher. If you are using WARP test input files either directily or as a model of how to configure inputs, these changes may impact you.")),(0,a.kt)("h2",{id:"warp-branches-and-how-they-relate-to-testing"},"WARP branches and how they relate to testing"),(0,a.kt)("p",null,"WARP has three main branches that are used for different stages of pipeline testing: ",(0,a.kt)("strong",{parentName:"p"},"develop"),", ",(0,a.kt)("strong",{parentName:"p"},"staging"),", and ",(0,a.kt)("strong",{parentName:"p"},"master"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Branch"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"develop"),(0,a.kt)("td",{parentName:"tr",align:null},"Code that has passed plumbing tests; pre-releases for testing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"staging"),(0,a.kt)("td",{parentName:"tr",align:null},"Release candidate code that is frozen for longer scientific testing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"master"),(0,a.kt)("td",{parentName:"tr",align:null},"Code that has passed scientific testings; published release artifacts")))),(0,a.kt)("h2",{id:"initiating-pipeline-tests"},"Initiating pipeline tests"),(0,a.kt)("p",null,"A PR will initiate a pipeline test if it contains changes to the main workflow WDL, the WDL dependencies (such as tasks), the options JSON file, the pipeline tests, or the test inputs. Smart plumbing and scientific tests compare PR changes to a specified base branch. They then use the WARP directory structure to dynamically determine which pipelines are affected and run tests for all affected pipelines."),(0,a.kt)("h2",{id:"contact-us-with-questions-about-testing"},"Contact us with questions about testing"),(0,a.kt)("p",null,"If you have questions about the WARP testing process, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/issues"},"file an issue in WARP"),"."))}d.isMDXComponent=!0}}]);