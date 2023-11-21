"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[2024],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?i.createElement(f,o(o({ref:t},m),{},{components:n})):i.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var i=n(3117),r=(n(7294),n(3905));const a={sidebar_position:2},o="Smart-seq2 Multi-Sample v2.2.1 Publication Methods",l={unversionedId:"Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods",id:"Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods",title:"Smart-seq2 Multi-Sample v2.2.1 Publication Methods",description:"Below we provide an example methods section for a publication. For the complete pipeline documentation, see the Smart-seq2 Multi-Sample Overview.",source:"@site/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods.md",sourceDirName:"Pipelines/Smart-seq2_Multi_Sample_Pipeline",slug:"/Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods",permalink:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods.md",tags:[],version:"current",lastUpdatedBy:"Nikelle Petrillo",lastUpdatedAt:1700574385,formattedLastUpdatedAt:"Nov 21, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Smart-seq2 Multi-Sample Overview",permalink:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README"},next:{title:"What's in the Smart-seq2 Multi Sample Pipeline Loom File?",permalink:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/Loom_schema"}},s={},p=[{value:"Methods",id:"methods",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-seq2-multi-sample-v221-publication-methods"},"Smart-seq2 Multi-Sample v2.2.1 Publication Methods"),(0,r.kt)("p",null,"Below we provide an example methods section for a publication. For the complete pipeline documentation, see the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README"},"Smart-seq2 Multi-Sample Overview"),"."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"Data preprocessing and count matrix construction for a sample batch (or plate) were performed using the Smart-seq2 Multi-Sample v2.2.0 Pipeline (RRID:SCR_018920). For each cell in the batch, paired- or single-end FASTQ files were first processed with the Smart-seq2 Single Sample v5.1.1 Pipeline (RRID:SCR_021228). Reads were aligned to the GENCODE mouse (M21) or human (V27) reference genome using HISAT2 v2.1.0 with default parameters in addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"--k 10")," options. Metrics were collected and duplicate reads marked using the Picard v.2.10.10 ",(0,r.kt)("inlineCode",{parentName:"p"},"CollectMultipleMetrics")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CollectRnaSeqMetrics"),", and MarkDuplicates functions with validation_stringency=silent. For transcriptome quantification, reads were aligned to the GENCODE transcriptome using HISAT2 v2.1.0 with ",(0,r.kt)("inlineCode",{parentName:"p"},"--k 10 --no-mixed  --no-softclip  --no-discordant --rdg 99999999,99999999 --rfg 99999999,99999999 --no-spliced-alignment")," options. Gene expression was calculated using RSEM v1.3.0\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"rsem-calculate-expression --calc-pme --single-cell-prior"),". QC metrics, RSEM TPMs and RSEM estimated counts were exported to a single Loom file for each cell. All individual Loom files for the entire batch were aggregated into a single Loom file for downstream processing. The final output included the unfiltered Loom and the tagged, unfiltered individual BAM files."),(0,r.kt)("p",null,"An example of the pipeline and outputs can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA%20Smart-seq2%20Multi%20Sample%20Pipeline"},"Terra")," and additional documentation can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README"},"Smart-seq2 Multi-Sample Overview"),". Examples of genomic references, whitelists, and other inputs are available in the warp repository (see the *_example.json files at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_multisample/human_single_example.json"},"human_single_example"),"."))}u.isMDXComponent=!0}}]);