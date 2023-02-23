"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[8017],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4542:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i={sidebar_position:6},s="Task execution - tips for using the WDL task command section",c={unversionedId:"Best_practices/task_execution",id:"Best_practices/task_execution",isDocsHomePage:!1,title:"Task execution - tips for using the WDL task command section",description:"Every WDL task has a command section where you can call software tools and specify parameters to help transform your data into meaningful output. This section is like a terminal for whatever environment you\u2019re using to execute your WDL script. That environment can be a virtual computer set up by a Docker container or it can be your local computer. If you\u2019re using Cromwell to execute your WDL (as happens in the cloud-based platform Terra), the command section is run after Cromwell has resolved the task inputs but before it assesses outputs.",source:"@site/docs/Best_practices/task_execution.md",sourceDirName:"Best_practices",slug:"/Best_practices/task_execution",permalink:"/warp/docs/Best_practices/task_execution",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Best_practices/task_execution.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1677172182,formattedLastUpdatedAt:"2/23/2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"WDL formatting tips",permalink:"/warp/docs/Best_practices/suggested_formats"},next:{title:"Welcome",permalink:"/warp/docs/contribution/README"}},l=[{value:"Resources",id:"resources",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"task-execution---tips-for-using-the-wdl-task-command-section"},"Task execution - tips for using the WDL task command section"),(0,a.kt)("p",null,"Every WDL task has a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openwdl/wdl/blob/main/versions/1.0/SPEC.md#command-section"},"command section")," where you can call software tools and specify parameters to help transform your data into meaningful output. This section is like a terminal for whatever environment you\u2019re using to execute your WDL script. That environment can be a virtual computer set up by a Docker container or it can be your local computer. If you\u2019re using Cromwell to execute your WDL (as happens in the cloud-based platform ",(0,a.kt)("a",{parentName:"p",href:"app.terra.bio"},"Terra"),"), the command section is run after Cromwell has resolved the task inputs but before it assesses outputs. "),(0,a.kt)("p",null,"The actual commands you use in the task command section depend on what tools and operating systems are available in the execution environment. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master"},"WARP")," pipelines, for example, often set up virtual machines using Docker containers with Alpine Linux-based operating systems. This means that the command section should contain commands that work in Alpine. If additional software is installed on top of Alpine, that software's commands will also work. WARP workflows often require custom python scripts and that\u2019s why python is installed on top of WARP\u2019s Alpine-based (or other OS) Dockers. Python is one example, but you can install any language on a docker and then use language-specific commands or scripts from the WDL task command section. In addition to these commands, you can also point to paths for software (such as the path to a jar in the Docker) as well as input/output files that are in the Docker container."),(0,a.kt)("p",null,"If a script is small, you can even write scripts in line. The ",(0,a.kt)("a",{parentName:"p",href:"#resources"},"Resources")," section below links to examples of workflow code that use in-line scripting. If you\u2019re using in-line scripting, remember to keep your code tidy (check out the WARP WDL formatting suggestions). And remember, commands will only work if installed on the environment in which the WDL is running; what works on your local machine will not necessarily work in a virtual machine built off a Docker and vice-versa.  "),(0,a.kt)("p",null,"If you read the WDL 1.0 spec\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openwdl/wdl/blob/main/versions/1.0/SPEC.md#command-section"},"Command Section"),", you\u2019ll notice there are two options for specifying a command section: curly brackets ",(0,a.kt)("inlineCode",{parentName:"p"},"{...}")," or angled brackets ",(0,a.kt)("inlineCode",{parentName:"p"},"<<<...>>>"),". This choice impacts how you specify inputs from your WDL inputs section. The curly brackets use ",(0,a.kt)("inlineCode",{parentName:"p"},"${...}")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"~{...}")," to specify a WDL input whereas the angled brackets explicitly use ",(0,a.kt)("inlineCode",{parentName:"p"},"~{...}"),". If you\u2019re familiar with bash, you might recognize a problem with using the dollar sign to specify WDL inputs; bash also uses a dollar sign for inputs. If you specify inputs using ",(0,a.kt)("inlineCode",{parentName:"p"},"${...}"),", it will interpret the input as a WDL input and not a bash variable. For this reason, the Broad Pipeline Development team recommends using the angled brackets option, allowing you to avoid collisions and specify bash variables with dollar signs."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,"Below are some example WDLs that either use scripting languages in-line or call scripts written in particular languages."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/build_indices/BuildIndices.wdl"},"Example of WDL that uses in-line perl script (see line #348 of the Build Indices workflow)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/master/tasks/broad/Utilities.wdl"},"Example of WDL task that uses in-line python script (see line #28 of Utilities WDL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/master/tasks/skylab/RunEmptyDrops.wdl"},"Example of WDL that uses an R script (line 39 of the emptyDrops task)"))))}p.isMDXComponent=!0}}]);