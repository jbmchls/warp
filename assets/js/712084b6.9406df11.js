"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[9773],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return h}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),f=u(i),p=a,h=f["".concat(l,".").concat(p)]||f[p]||c[p]||o;return i?n.createElement(h,s(s({ref:t},d),{},{components:i})):n.createElement(h,s({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[f]="string"==typeof e?e:a,s[1]=r;for(var u=2;u<o;u++)s[u]=i[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4913:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return u}});var n=i(3117),a=(i(7294),i(3905));const o={sidebar_position:3},s="Setting default values",r={unversionedId:"Best_practices/setting_defaults",id:"Best_practices/setting_defaults",title:"Setting default values",description:"In WDL, default values are those that allow your workflow to run in the absence of a user-defined attribute. These include primary inputs that you\u2019ve hardcoded to a value, but they can also include inputs that are assigned to dynamically calculated functions (like autosizing functions for setting runtime parameters). If you\u2019re wondering whether a parameter has a default value or not, just ask yourself, \u201cWill the workflow run if I don\u2019t specify an attribute in the WDL\u2019s input JSON?\u201d",source:"@site/docs/Best_practices/setting_defaults.md",sourceDirName:"Best_practices",slug:"/Best_practices/setting_defaults",permalink:"/warp/docs/Best_practices/setting_defaults",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Best_practices/setting_defaults.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1689952469,formattedLastUpdatedAt:"Jul 21, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Autosizing disk for Google Cloud",permalink:"/warp/docs/Best_practices/autosize"},next:{title:"Reusing WDL code",permalink:"/warp/docs/Best_practices/reusing_code"}},l={},u=[{value:"Why set up defaults?",id:"why-set-up-defaults",level:2},{value:"Tip 1: Decide what kinds of inputs you\u2019re using",id:"tip-1-decide-what-kinds-of-inputs-youre-using",level:2},{value:"Tip 2: Decide if default values should be modifiable",id:"tip-2-decide-if-default-values-should-be-modifiable",level:2},{value:"Tip 3: Know which inputs can be modified with a JSON",id:"tip-3-know-which-inputs-can-be-modified-with-a-json",level:2},{value:"Tip 4: Define modifiable defaults at the highest workflow level",id:"tip-4-define-modifiable-defaults-at-the-highest-workflow-level",level:2},{value:"Resources",id:"resources",level:2}],d={toc:u},f="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(f,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-default-values"},"Setting default values"),(0,a.kt)("p",null,"In WDL, default values are those that allow your workflow to run in the absence of a user-defined attribute. These include primary inputs that you\u2019ve hardcoded to a value, but they can also include inputs that are assigned to dynamically calculated functions (",(0,a.kt)("a",{parentName:"p",href:"/warp/docs/Best_practices/autosize"},"like autosizing functions for setting runtime parameters"),"). If you\u2019re wondering whether a parameter has a default value or not, just ask yourself, \u201cWill the workflow run if I don\u2019t specify an attribute in the WDL\u2019s input JSON?\u201d"),(0,a.kt)("h2",{id:"why-set-up-defaults"},"Why set up defaults?"),(0,a.kt)("p",null,"Default values can be used for a variety of reasons. Perhaps you want to hardcode a value because you don\u2019t want others changing parameters while running the workflow. Or maybe you have standard values, like reference files, that you apply consistently across workflow runs regardless of the data you analyze. Overall, defaults can help ensure a workflow won\u2019t keel over across different runs and user hands. "),(0,a.kt)("p",null,"Below, the Broad Pipeline Development team provides some best practices for building flexible workflows with default values."),(0,a.kt)("h2",{id:"tip-1-decide-what-kinds-of-inputs-youre-using"},"Tip 1: Decide what kinds of inputs you\u2019re using"),(0,a.kt)("p",null,"Workflows have multiple input types: samples or files that you want to analyze, parameters you want to use to set up runtime environments, dockers that contain your software, or inputs that are specific to the type of samples you're analyzing, like experimental parameters, information about species, age, etc. When thinking about setting defaults, you might want to consider what inputs change regularly (like sample files that you\u2019re trying to analyze), or those that stay consistent (like reference data if you\u2019re primarily using a particular species). In general, consistent values are good candidates to set to a default value."),(0,a.kt)("h2",{id:"tip-2-decide-if-default-values-should-be-modifiable"},"Tip 2: Decide if default values should be modifiable"),(0,a.kt)("p",null,"While it makes sense to hardcode inputs to a default value if the inputs are consistent, you might still want to build in flexibility to allow those inputs to be modified. Consider scenarios where other workflow users might need to change a default value, but that change won\u2019t necessarily break the workflow. For example, maybe you primarily run your workflow on mouse data using mouse reference files, but your workflow tasks and tools work equally well with human data. In this case, it makes sense to hardcode some input values to reflect mouse analysis, but also to provide flexibility for someone who wants to do human analysis."),(0,a.kt)("p",null,"In contrast, there are some inputs that might be necessary for the workflow to appropriately run, like runtime parameters that set up computational environments. For example, docker image inputs are one type of parameter that could break the pipeline if changed. You\u2019ll often see docker file paths listed as configurable input in the workflow definition. If the wrong docker image is used, it might make the workflow fail, or worse, cause a security concern. These kinds of inputs should not be easily modified from an accompanying JSON file. When possible, the Pipeline Development team recommends that you hardcode paths to docker images into the task runtime attributes. "),(0,a.kt)("h2",{id:"tip-3-know-which-inputs-can-be-modified-with-a-json"},"Tip 3: Know which inputs can be modified with a JSON"),(0,a.kt)("p",null,"Now that we\u2019ve considered our different input types, let\u2019s review which inputs can be modified, meaning they can be specified with an accompanying input JSON. Modifiable inputs include those that are in the workflow definition\u2019s input section AND inputs in a task\u2019s input section when you allow for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openwdl/wdl/blob/main/versions/1.1/SPEC.md#computing-call-inputs"},"nested inputs"),". You can allow nested inputs by using the boolean flag ",(0,a.kt)("inlineCode",{parentName:"p"},"allowNestedInputs")," in your workflow(s) definition\u2019s meta section. This allows you to set up task-level inputs from your WDL\u2019s input JSON.  While this feature works with Cromwell and in the bioinformatics platform Terra, you should note that it\u2019s not fully supported, so use it with caution."),(0,a.kt)("p",null,"Inputs that can\u2019t be modified are those that are outside of the workflow definition inputs section or those that are in the task inputs when nested inputs are not allowed. Keep this information in mind when you have inputs that you don\u2019t want others to easily modify."),(0,a.kt)("h2",{id:"tip-4-define-modifiable-defaults-at-the-highest-workflow-level"},"Tip 4: Define modifiable defaults at the highest workflow level"),(0,a.kt)("p",null,"Once you\u2019ve considered your inputs and decided which ones should have default values, you\u2019ll need to decide where in the workflow (the workflow definition or task) you want to specify the defaults. The Pipeline Development team recommends that you define defaults at the highest workflow level that makes sense, keeping in mind whether you want task inputs to be modifiable. For example, if you want to set a modifiable default value for an input reference file, assign the file to its file path in the workflow definition and pass the corresponding variable into the tasks using the workflow definition call sections. Using defaults at the highest level means that if you need to change the default value, you won\u2019t have to do it for each individual task."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openwdl/wdl/blob/main/versions/1.1/SPEC.md#computing-call-inputs"},"Nested inputs description"))))}c.isMDXComponent=!0}}]);