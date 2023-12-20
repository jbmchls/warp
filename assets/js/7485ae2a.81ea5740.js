"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[9852],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2018:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var a=n(3117),i=(n(7294),n(3905));const r={sidebar_position:1},o="Welcome to WARP",l={unversionedId:"get-started",id:"get-started",title:"Welcome to WARP",description:"WARP (WDL Analysis Research Pipelines) repository is a collection of cloud-optimized pipelines for processing biological data from the Broad Institute Data Sciences Platform and collaborators.",source:"@site/docs/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/warp/docs/get-started",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/get-started.md",tags:[],version:"current",lastUpdatedBy:"aawdeh",lastUpdatedAt:1703104478,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Best Practices for Building Data Processing Pipelines",permalink:"/warp/docs/About_WARP/BestPractices"}},s={},p=[{value:"WARP Overview",id:"warp-overview",level:2},{value:"Navigating WARP",id:"navigating-warp",level:2},{value:"Dockers and custom tools maintained in warp-tools repository",id:"dockers-and-custom-tools-maintained-in-warp-tools-repository",level:2},{value:"Using WARP",id:"using-warp",level:2},{value:"1. Download the workflow and run on a WDL-compatible execution engine",id:"1-download-the-workflow-and-run-on-a-wdl-compatible-execution-engine",level:3},{value:"2. Run the pipeline in Terra",id:"2-run-the-pipeline-in-terra",level:3},{value:"3. Run or export the pipeline from Dockstore",id:"3-run-or-export-the-pipeline-from-dockstore",level:3},{value:"WARP Versioning and Releasing",id:"warp-versioning-and-releasing",level:2},{value:"Testing in WARP",id:"testing-in-warp",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Citing WARP",id:"citing-warp",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome-to-warp"},"Welcome to WARP"),(0,i.kt)("p",null,"WARP (WDL Analysis Research Pipelines) repository is a collection of cloud-optimized pipelines for processing biological data from the Broad Institute Data Sciences Platform and collaborators."),(0,i.kt)("p",null,"The contents of this repository are open source and released under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/LICENSE"},"BSD 3-Clause license"),"."),(0,i.kt)("h2",{id:"warp-overview"},"WARP Overview"),(0,i.kt)("p",null,"WARP pipelines provide robust, standardized data analysis for the Broad Institute Genomics Platform and large consortia like the Human Cell Atlas and the BRAIN Initiative. You can count on WARP for rigorously scientifically validated, high scale, reproducible and open source pipelines."),(0,i.kt)("p",null,"Our pipelines are written as \u201cworkflows\u201d using the ",(0,i.kt)("a",{parentName:"p",href:"https://openwdl.org/"},"Workflow Description Language (WDL)")," and they process a broad spectrum of \u201comic\u201d and array-related datasets (see the overview table below)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Pipeline Category"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Types"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Germline Variant Discovery"),(0,i.kt)("td",{parentName:"tr",align:null},"Genomes, Exomes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Genotyping Arrays"),(0,i.kt)("td",{parentName:"tr",align:null},"Variant discovery, Chip validation, Joint array analysis")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Single-cell/nuclei Transcriptomics"),(0,i.kt)("td",{parentName:"tr",align:null},"Droplet based (10x Genomics), Smartseq2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Single-cell Epigenomics"),(0,i.kt)("td",{parentName:"tr",align:null},"Single nuclei ATAC-seq, Single nuclei MethylC-seq")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Joint Genotyping"),(0,i.kt)("td",{parentName:"tr",align:null},"Genomes, Exomes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Somatic Alignment (beta)"),(0,i.kt)("td",{parentName:"tr",align:null},"Exomes")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Try our pipelines in ",(0,i.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces?tagsFilter%5B0%5D=warp-pipelines&tab=public"},"Terra"),", a platform for collaborative cloud analysis! Learn how  in the ",(0,i.kt)("a",{parentName:"p",href:"#2-run-the-pipeline-in-terra"},"Using WARP")," section.")),(0,i.kt)("h2",{id:"navigating-warp"},"Navigating WARP"),(0,i.kt)("p",null,"All versioned and released pipelines are in one of the three ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/pipelines"},"pipelines")," subdirectories: broad (pipelines for the Broad Institute\u2019s Genomics Platform), cemba (pipelines for the BRAIN Initiative) or skylab (pipelines for the BRAIN Initiative and Human Cell Atlas Project)."),(0,i.kt)("p",null,"Each pipeline directory hosts a main workflow WDL that includes a pipeline version number and a corresponding changelog file."),(0,i.kt)("p",null,"Workflows may call additional WDLs, referred to as tasks, that are located in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/tasks"},"tasks")," directory."),(0,i.kt)("p",null,"Pipelines that are in progress or have not yet been validated are in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/beta-pipelines"},"beta-pipelines")," folder."),(0,i.kt)("h2",{id:"dockers-and-custom-tools-maintained-in-warp-tools-repository"},"Dockers and custom tools maintained in warp-tools repository"),(0,i.kt)("p",null,"Each WARP workflow uses Docker images that contain the necessary software for the workflow's commands. All Docker images, build scripts for Docker images, and custom tools are maintained in a separate repository, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools"),"."),(0,i.kt)("h2",{id:"using-warp"},"Using WARP"),(0,i.kt)("p",null,"There are three ways to use WARP pipelines:"),(0,i.kt)("h3",{id:"1-download-the-workflow-and-run-on-a-wdl-compatible-execution-engine"},"1. Download the workflow and run on a WDL-compatible execution engine"),(0,i.kt)("p",null,"WDL workflows run on multiple systems, including ",(0,i.kt)("a",{parentName:"p",href:"https://cromwell.readthedocs.io/en/stable/"},"Cromwell"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chanzuckerberg/miniwdl"},"miniWDL"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dnanexus/dxWDL"},"dxWDL")," (see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openwdl/wdl#execution-engines"},"openwdl documentation"),"). "),(0,i.kt)("p",null,"To run a pipeline\u2019s latest release, first navigate to WARP ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page"),", search for your pipeline\u2019s tag, and download the pipeline\u2019s assets (the WDL workflow, the JSON, and the ZIP with accompanying dependencies; see Optimus example below)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"optimus_release",src:n(4549).Z,width:"1356",height:"1130"})),(0,i.kt)("p",null,"You can also discover and search releases using the WARP command-line tool ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/wreleaser"},"Wreleaser"),"."),(0,i.kt)("p",null,"After downloading the pipeline\u2019s assets, launch the workflow following your execution engine\u2019s instructions."),(0,i.kt)("h3",{id:"2-run-the-pipeline-in-terra"},"2. Run the pipeline in ",(0,i.kt)("a",{parentName:"h3",href:"https://app.terra.bio/#workspaces?tagsFilter%5B0%5D=warp-pipelines&tab=public"},"Terra")),(0,i.kt)("p",null,"Several WARP pipelines are available in public workspaces on the Terra cloud platform. These workspaces include both the WDL workflow and downsampled data so that you can test the pipeline at low-cost."),(0,i.kt)("p",null,"If you are new to Terra, you can get started by registering with your Google account and visiting ",(0,i.kt)("a",{parentName:"p",href:"https://support.terra.bio/hc/en-us"},"Terra Support"),". After registration, search for WARP-related workspaces with the \u201cwarp-pipelines\u201d tag."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Terra_warp",src:n(7224).Z,width:"1894",height:"330"})),(0,i.kt)("p",null,"To test the pipeline, clone (make a copy of) the workspace following the instructions in this Terra Support ",(0,i.kt)("a",{parentName:"p",href:"https://support.terra.bio/hc/en-us/articles/360026130851"},"guide"),"."),(0,i.kt)("h3",{id:"3-run-or-export-the-pipeline-from-dockstore"},"3. Run or export the pipeline from Dockstore"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dockstore.org/"},"Dockstore")," is a GA4GH compliant open platform for sharing Docker-based tools like WDL workflows. You can find WARP pipelines in Dockstore and run them on the Dockstore platform or export them to other platforms (including Terra)."),(0,i.kt)("p",null,"To view all available pipelines, just search \u201cwarp\u201d in the Dockstore search and browse the workflow list. See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.dockstore.org/en/develop/index.html"},"Dockstore documentation")," for details on launching the workflow."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dockstore",src:n(7107).Z,width:"1614",height:"1089"})),(0,i.kt)("h2",{id:"warp-versioning-and-releasing"},"WARP Versioning and Releasing"),(0,i.kt)("p",null,"Pipelines in WARP are versioned ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantically")," to support reproducibility in scientific analysis and provide clearer analysis provenance. Version numbers allow researchers to confirm their data has all been processed in a compatible way. Semantic versioning gives immediate insight into the compatibility of pipeline outputs. Read more about ",(0,i.kt)("a",{parentName:"p",href:"/warp/docs/About_WARP/VersionAndReleasePipelines"},"versioning and releasing")," in WARP."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"To discover and search releases, use the WARP command-line tool ",(0,i.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://github.com/broadinstitute/warp/tree/develop/wreleaser"},"Wreleaser"),".")),(0,i.kt)("h2",{id:"testing-in-warp"},"Testing in WARP"),(0,i.kt)("p",null,"Each pipeline in WARP has accompanying continuous integration tests that run on each pull request (PR). These tests help ensure that no unexpected changes are made to each pipeline and confirm that each affected pipeline is tested with any changes to shared code. To support rapid development iteration, only the pipelines affected by a PR are tested and PRs to the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch run \u201cplumbing\u201d tests using small or downsampled inputs. When the ",(0,i.kt)("inlineCode",{parentName:"p"},"staging")," branch is promoted to ",(0,i.kt)("inlineCode",{parentName:"p"},"master"),", the updated pipelines will be tested more rigorously on a larger selection of data that covers more scientific test cases. Read more about our ",(0,i.kt)("a",{parentName:"p",href:"/warp/docs/About_WARP/TestingPipelines"},"testing process"),"."),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"WARP is always evolving! Please file any issues in GitHub or contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP Team")," with suggestions, feedback, or questions. We are always excited to discuss cloud data processing, provenance and reproducibility in scientific analysis, new pipeline features, or potential collaborations. Don\u2019t hesitate to reach out!"),(0,i.kt)("p",null,"Our planned upcoming improvements include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A unified testing infrastructure that eases the overhead for contribution"),(0,i.kt)("li",{parentName:"ol"},"Full contribution guidance"),(0,i.kt)("li",{parentName:"ol"},"Continued additions of pipeline documentation"),(0,i.kt)("li",{parentName:"ol"},"Pre-written methods sections and DOIs to enable easy publication citations"),(0,i.kt)("li",{parentName:"ol"},"More pipelines: bulk RNAseq, SlideSeq, updates to joint genotyping")),(0,i.kt)("h2",{id:"citing-warp"},"Citing WARP"),(0,i.kt)("p",null,"When citing WARP, please use the following:"),(0,i.kt)("p",null,"Degatano K, Grant G, Khajouei F et al. Introducing WARP: A collection of cloud-optimized workflows for biological data processing and reproducible analysis ","[version 1; not peer reviewed]",". F1000Research 2021, 10(ISCB Comm J):705 (slides) (doi: 10.7490/f1000research.1118678.1)"),(0,i.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,i.kt)("p",null,"WARP is maintained by the Broad Institute Data Sciences Platform (DSP) in collaboration with partner organizations. The Lantern Pipelines team maintains the repository with invaluable scientific oversight and pipeline contributions from the DSP Methods group as well as the HCA and BRAIN Initiative Analysis Working Groups. We thank the DSP Customer Delivery team for their help with user-, documentation-, and Terra- support. WARP pipelines have been made in collaboration with or informed by scientists across many institutions, including: labs at the Broad Institute, the European Bioinformatics Institute, Chan Zuckerburg Initiative, NY Genome Center, University of California Santa Cruz, Berkeley, and San Diego, the Allen Institute, Johns Hopkins Medical Institute, and the Baylor College of Medicine."))}u.isMDXComponent=!0},7107:function(e,t,n){t.Z=n.p+"assets/images/Dockstore-72301086e4e435b05e0cd823a6c8b89b.png"},7224:function(e,t,n){t.Z=n.p+"assets/images/Terra_warp-383d77605a5c6872f88d2b82c2a3108f.png"},4549:function(e,t,n){t.Z=n.p+"assets/images/optimus_release-e99bd7be02e9d6137d218b02860ee56f.png"}}]);