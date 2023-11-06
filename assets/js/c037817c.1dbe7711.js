"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[8032],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5492:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:1,slug:"/Pipelines/snM3C/README"},l="Single Nucleus Methyl-Seq and Chromatin Capture (snM3C) Overview",o={unversionedId:"Pipelines/snM3C/README",id:"Pipelines/snM3C/README",title:"Single Nucleus Methyl-Seq and Chromatin Capture (snM3C) Overview",description:"| Pipeline Version | Date Updated | Documentation Authors | Questions or Feedback |",source:"@site/docs/Pipelines/snM3C/README.md",sourceDirName:"Pipelines/snM3C",slug:"/Pipelines/snM3C/README",permalink:"/warp/docs/Pipelines/snM3C/README",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/snM3C/README.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1699284080,formattedLastUpdatedAt:"Nov 6, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/Pipelines/snM3C/README"},sidebar:"docsSidebar",previous:{title:"What's in the Smart-seq2 Single Sample Pipeline Loom File?",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Sample_Pipeline/Loom_schema"},next:{title:"Ultima Genomics Whole Genome Germline Overview",permalink:"/warp/docs/Pipelines/Ultima_Genomics_Whole_Genome_Germline_Pipeline/README"}},s={},p=[{value:"Introduction to snM3C",id:"introduction-to-snm3c",level:2},{value:"Set-up",id:"set-up",level:2},{value:"Installation",id:"installation",level:3},{value:"Running the Workflow",id:"running-the-workflow",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Tasks and Tools",id:"tasks-and-tools",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"single-nucleus-methyl-seq-and-chromatin-capture-snm3c-overview"},"Single Nucleus Methyl-Seq and Chromatin Capture (snM3C) Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Documentation Authors"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases"},"snM3C_v1.0.0")),(0,r.kt)("td",{parentName:"tr",align:"center"},"August, 2023"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"mailto:warp-pipelines-help@broadinsitute.org"},"Kaylee Mathews")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Please file GitHub issues in the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/issues"},"WARP repository"))))),(0,r.kt)("h2",{id:"introduction-to-snm3c"},"Introduction to snM3C"),(0,r.kt)("p",null,"The Single Nucleus Methly-Seq and Chromatin Capture (snM3C) workflow is a cloud-based computational workflow for processing single-nucleus methylome and chromatin contact (snM3C) sequencing data. The workflow is designed to demultiplex raw sequencing reads, align them, call chromatin contacts, and generate summary metrics. It is developed in collaboration Hanqing Liu and the laboratory of Joseph Ecker. For more information about the snM3C tools and analysis, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://hq-1.gitbook.io/mc/"},"YAP documentation")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lhqing/cemba_data"},"cemba_data")," GitHub repository created by Hanqing Liu."),(0,r.kt)("h2",{id:"set-up"},"Set-up"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To use the latest release of the snM3C pipeline, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"WARP releases page")," and download the desired version."),(0,r.kt)("h3",{id:"running-the-workflow"},"Running the Workflow"),(0,r.kt)("p",null,'To download the latest release of the snM3C pipeline, see the release tags prefixed with "snM3C" on the WARP ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page"),". All releases of the snM3C pipeline are documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/snM3C/snM3C.changelog.md"},"snM3C changelog"),". "),(0,r.kt)("p",null,"To search releases of this and other pipelines, use the WARP command-line tool ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/wreleaser"},"Wreleaser"),"."),(0,r.kt)("p",null,"The snM3C pipeline can be deployed using ",(0,r.kt)("a",{parentName:"p",href:"https://cromwell.readthedocs.io/en/stable/"},"Cromwell"),", a GA4GH compliant, flexible workflow management system that supports multiple computing platforms. The workflow can also be run in ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio"},"Terra"),", a cloud-based analysis platform. "),(0,r.kt)("h3",{id:"inputs"},"Inputs"),(0,r.kt)("p",null,"The snM3C workflow requires a JSON configuration file specifying the input files and parameters for the analysis. Example configuration files can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/pipelines/skylab/snM3C/test_inputs"},"snM3C ",(0,r.kt)("inlineCode",{parentName:"a"},"test_inputs")," directory")," in the WARP repository."),(0,r.kt)("p",null,"The main input files and parameters include:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fastq_input_read1"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of multiplexed FASTQ files for read 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fastq_input_read2"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of multiplexed FASTQ files for read 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"random_primer_indexes"),(0,r.kt)("td",{parentName:"tr",align:null},"File containing random primer indexes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plate_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String specifying the plate ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output_basename"),(0,r.kt)("td",{parentName:"tr",align:null},"String specifying a basename to be used for naming files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tarred_index_files"),(0,r.kt)("td",{parentName:"tr",align:null},"File containing tarred index files for hisat-3 mapping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mapping_yaml"),(0,r.kt)("td",{parentName:"tr",align:null},"File containing YAML configuration for mapping steps with snakemake")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"snakefile"),(0,r.kt)("td",{parentName:"tr",align:null},"File containing the snakefile for mapping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chromosome_sizes"),(0,r.kt)("td",{parentName:"tr",align:null},"File containing chromosome sizes information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"genome_fa"),(0,r.kt)("td",{parentName:"tr",align:null},"File containing the reference genome in FASTA format")))),(0,r.kt)("h2",{id:"tasks-and-tools"},"Tasks and Tools"),(0,r.kt)("p",null,"The workflow contains two tasks described below. The parameters and more details about these tools can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://hq-1.gitbook.io/mc/"},"YAP documentation"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Task name"),(0,r.kt)("th",{parentName:"tr",align:null},"Tool"),(0,r.kt)("th",{parentName:"tr",align:null},"Software"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Demultiplexing"),(0,r.kt)("td",{parentName:"tr",align:null},"cutadapt"),(0,r.kt)("td",{parentName:"tr",align:null},"cutadapt"),(0,r.kt)("td",{parentName:"tr",align:null},"Performs demultiplexing to cell-level FASTQ files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mapping"),(0,r.kt)("td",{parentName:"tr",align:null},"hisat-3"),(0,r.kt)("td",{parentName:"tr",align:null},"hisat-3"),(0,r.kt)("td",{parentName:"tr",align:null},"Performs trimming, alignment and calling chromatin contacts with a ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/snM3C/Config%20files/Snakemake-file/Snakefile"},"custom snakemake")," file developed by Hanqing Liu.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,"The snM3C workflow produces the following main outputs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mappingSummary"),(0,r.kt)("td",{parentName:"tr",align:null},"Mapping summary file in CSV format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allcFiles"),(0,r.kt)("td",{parentName:"tr",align:null},"Tarred file containing allc files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allc_CGNFiles"),(0,r.kt)("td",{parentName:"tr",align:null},"Tarred file containing CGN context-specific allc files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bamFiles"),(0,r.kt)("td",{parentName:"tr",align:null},"Tarred file containing cell-level aligned BAM files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"detail_statsFiles"),(0,r.kt)("td",{parentName:"tr",align:null},"Tarred file containing detail stats files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hicFiles"),(0,r.kt)("td",{parentName:"tr",align:null},"Tarred file containing Hi-C files")))),(0,r.kt)("h2",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"All snM3C pipeline releases are documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/snM3C/snM3C.changelog.md"},"pipeline changelog"),"."),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"For questions, suggestions, or feedback related to the snM3C pipeline, please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team"),". Your feedback is valuable for improving the pipeline and addressing any issues that may arise during its usage."))}m.isMDXComponent=!0}}]);