"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[1051],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(h,o(o({ref:n},c),{},{components:t})):i.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5930:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var i=t(3117),a=(t(7294),t(3905));const r={sidebar_position:4},o="Version and Release Pipelines",s={unversionedId:"About_WARP/VersionAndReleasePipelines",id:"About_WARP/VersionAndReleasePipelines",title:"Version and Release Pipelines",description:"WARP Pipelines are versioned semantically, allowing you to determine how and when your data was created (provenance). This promotes compatibility across datasets and ensures that analyses can be reproduced by the global scientific community. Semantic version numbers (written as major.minor.patch) are human readable and give immediate insight into the compatibility of pipeline outputs (see the Versioning Guidelines below).",source:"@site/docs/About_WARP/VersionAndReleasePipelines.md",sourceDirName:"About_WARP",slug:"/About_WARP/VersionAndReleasePipelines",permalink:"/warp/docs/About_WARP/VersionAndReleasePipelines",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/About_WARP/VersionAndReleasePipelines.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1711129453,formattedLastUpdatedAt:"Mar 22, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Testing Pipelines",permalink:"/warp/docs/About_WARP/TestingPipelines"},next:{title:"ATAC Overview",permalink:"/warp/docs/Pipelines/ATAC/README"}},l={},p=[{value:"Versioning Requirements",id:"versioning-requirements",level:2},{value:"Versioning Guidelines",id:"versioning-guidelines",level:2},{value:"Major changes",id:"major-changes",level:4},{value:"Minor changes",id:"minor-changes",level:4},{value:"Patch (micro) changes",id:"patch-micro-changes",level:4}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"version-and-release-pipelines"},"Version and Release Pipelines"),(0,a.kt)("p",null,"WARP Pipelines are versioned semantically, allowing you to determine how and when your data was created (provenance). This promotes compatibility across datasets and ensures that analyses can be reproduced by the global scientific community. Semantic version numbers (written as major.minor.patch) are human readable and give immediate insight into the compatibility of pipeline outputs (see the ",(0,a.kt)("a",{parentName:"p",href:"#versioning-guidelines"},"Versioning Guidelines")," below)."),(0,a.kt)("p",null,"Versions of each pipeline are packaged into releases and published on GitHub (see the WARP ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page"),"). A published release of a pipeline version in GitHub has passed scientific tests (read more in ",(0,a.kt)("a",{parentName:"p",href:"/warp/docs/About_WARP/TestingPipelines"},"TestingPipelines"),") and is available to be used in production systems."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"To discover and search releases, use the WARP command-line tool ",(0,a.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://github.com/broadinstitute/warp/tree/develop/wreleaser"},"Wreleaser"),".")),(0,a.kt)("h2",{id:"versioning-requirements"},"Versioning Requirements"),(0,a.kt)("p",null,"All versioned pipelines must have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A release version number in the main workflow WDL. The version number is in the form ",(0,a.kt)("inlineCode",{parentName:"li"},"major.minor.patch")," and is included as a field in the standardized format ",(0,a.kt)("inlineCode",{parentName:"li"},'String pipeline_version = "1.0.0"'),"."),(0,a.kt)("li",{parentName:"ul"},"A cumulative changelog file containing the changes introduced in the PR and all previous changes in reverse chronological order. Changelog entries are to be formatted according to the ",(0,a.kt)("a",{parentName:"li",href:"/warp/docs/contribution/contribute_to_warp/changelog_style"},"changelog style guide")," and will include the version number, date of last commit, and a bulleted list of changes since the last release.")),(0,a.kt)("h2",{id:"versioning-guidelines"},"Versioning Guidelines"),(0,a.kt)("p",null,"In WARP, a pipeline requires a version change when any change is made to the pipeline\u2019s main WDL workflow or any of the WDL workflow dependencies. If a change requires a new pipeline version number, the changes and new version number are demarcated in the pipeline\u2019s changelog."),(0,a.kt)("p",null,"Pipeline version numbers are updated based the following  guidelines:"),(0,a.kt)("h4",{id:"major-changes"},"Major changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any qualitative change to the pipeline\u2019s scientific outputs. If you use the pipeline\u2019s data output, this change indicates a possible need to reprocess data analyzed with a previous release version."),(0,a.kt)("li",{parentName:"ul"},"Any breaking changes to the pipeline, including input/output refactors, renaming of the pipeline, and changes to input/output formats.")),(0,a.kt)("h4",{id:"minor-changes"},"Minor changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Addition of new outputs that don\u2019t impact previous outputs; for example, adding a new md5 checksum output or outputting new QC metrics."),(0,a.kt)("li",{parentName:"ul"},"Changes to the pipeline that do not qualitatively impact the scientific outputs, but may produce slightly different outputs (no data reprocessing needed).")),(0,a.kt)("h4",{id:"patch-micro-changes"},"Patch (micro) changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Memory changes, internal refactor or variable name changes, speed or cost optimizations, comments, metadata."),(0,a.kt)("li",{parentName:"ul"},"Addition of optional inputs.")),(0,a.kt)("p",null,"When pipelines are promoted to the master branch, a script packages the pipeline for release on GitHub. A release contains three components:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A release name comprising the pipeline name and version number listed in the changelog (i.e. SmartSeq2SingleSample_v5.0.0)"),(0,a.kt)("li",{parentName:"ol"},"Release notes comprising the corresponding version changelog entry"),(0,a.kt)("li",{parentName:"ol"},"Artifacts including the main workflow WDL, a zip of all workflow dependencies, and when applicable, an options file")),(0,a.kt)("p",null,"Upon release, the pipeline is automatically pushed to Dockstore based on the WARP ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/.dockstore.yml"},"Dockstore configuration"),"."),(0,a.kt)("p",null,"To support early integration testing of our pipelines, we also maintain a floating \u201cdev\u201d pre-release for each pipeline named \u201cPipelineName_develop\u201d."))}d.isMDXComponent=!0}}]);