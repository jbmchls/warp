"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[8601],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,h=u["".concat(o,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},848:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:1,slug:"/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README"},l="Smart-seq2 Multi-Sample Overview",p={unversionedId:"Pipelines/Smart-seq2_Multi_Sample_Pipeline/README",id:"Pipelines/Smart-seq2_Multi_Sample_Pipeline/README",title:"Smart-seq2 Multi-Sample Overview",description:"| Pipeline Version | Date Updated | Documentation Author | Questions or Feedback |",source:"@site/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README.md",sourceDirName:"Pipelines/Smart-seq2_Multi_Sample_Pipeline",slug:"/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README",permalink:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1704397687,formattedLastUpdatedAt:"Jan 4, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README"},sidebar:"docsSidebar",previous:{title:"Consortia Data Processing",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing"},next:{title:"Smart-seq2 Multi-Sample v2.2.1 Publication Methods",permalink:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods"}},o={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Sample and Reference Inputs",id:"sample-and-reference-inputs",level:3},{value:"Additional Input",id:"additional-input",level:3},{value:"Smart-seq2 Multi-Sample Task Summary",id:"smart-seq2-multi-sample-task-summary",level:3},{value:"Outputs",id:"outputs",level:3},{value:"Validation",id:"validation",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Citing the Smart-seq2 Multi-Sample Pipeline",id:"citing-the-smart-seq2-multi-sample-pipeline",level:2},{value:"Consortia Support",id:"consortia-support",level:2},{value:"Have Suggestions?",id:"have-suggestions",level:2}],m={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-seq2-multi-sample-overview"},"Smart-seq2 Multi-Sample Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Documentation Author"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases"},"MultiSampleSmartSeq2_v2.2.1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"May, 2021"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"mailto:ekiernan@broadinstitute.org"},"Elizabeth Kiernan")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Please file GitHub issues in WARP or contact ",(0,r.kt)("a",{parentName:"td",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team"))))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Smart-seq2 Multi-Sample (Multi-SS2) Pipeline is a wrapper around the ",(0,r.kt)("a",{parentName:"p",href:"../Smart-seq2_Single_Sample_Pipeline/README"},"Smart-seq2 Single Sample")," pipeline. It is developed by the Data Coordination Platform of the Human Cell Atlas to process single-cell RNAseq (scRNAseq) data generated by Smart-seq2 assays. The workflow processes multiple cells by importing and running the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_sample/SmartSeq2SingleSample.wdl"},"Smart-seq2 Single Sample workflow")," for each cell (sample) and then merging the resulting Loom matrix output into a single Loom matrix containing raw counts and TPMs."),(0,r.kt)("p",null,"Full details about the Smart-seq2 Pipeline can be read in the ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/Pipelines/Smart-seq2_Single_Sample_Pipeline/README"},"Smart-seq2 Single Sample Overview")," in GitHub."),(0,r.kt)("p",null,"The Multi-SS2 workflow can also be run in ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio"},"Terra"),", a cloud-based analysis platform. The Terra ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA%20Smart-seq2%20Multi%20Sample%20Pipeline"},"Smart-seq2 public workspace")," contains the Smart-seq2 workflow, workflow configurations, required reference data and other inputs, and example testing data."),(0,r.kt)("admonition",{title:"Want to use the Multi-SS2 Pipeline for your publication?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods"},"Smart-seq2 Publication Methods")," to get started!")),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("p",null,"There are two example configuration (JSON) files available for testing the Multi-SS2 workflow. Both examples are also preloaded in the Terra ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA%20Smart-seq2%20Multi%20Sample%20Pipeline"},"Smart-seq2 public workspace"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_multisample/human_single_example.json"},"human_single_example.json"),": Configurations for an example single-end human dataset consisting of two samples (cells)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_multisample/mouse_paired_example.json"},"mouse_paired_example.json"),": Configurations for an example paired-end mouse dataset consisting of two samples (cells)")),(0,r.kt)("h3",{id:"sample-and-reference-inputs"},"Sample and Reference Inputs"),(0,r.kt)("p",null,"The workflow\u2019s sample inputs are listed in the table below. Reference inputs are identical to those\nspecified in the ",(0,r.kt)("a",{parentName:"p",href:"../Smart-seq2_Single_Sample_Pipeline/README"},"Smart-seq2 Single Sample Overview"),"."),(0,r.kt)("p",null,"The workflow processes both single- and paired-end samples; however, these samples can not be mixed in the same run."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fastq1_input_files"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud locations for each read1 file"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fastq2_input_files"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional cloud locations for each read2 file if running paired-end samples"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input_ids"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifiers or names for each cell; can be a UUID or human-readable name"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input_names"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional unique identifiers/names to further describe each cell. If ",(0,r.kt)("inlineCode",{parentName:"td"},"input_id")," is a UUID, the ",(0,r.kt)("inlineCode",{parentName:"td"},"input_name")," could be used as a human-readable identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifier for the batch of multiple samples"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional string to describe the batch or biological sample"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input_name_metadata_field"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional input describing, when applicable, the metadata field containing the ",(0,r.kt)("inlineCode",{parentName:"td"},"input_names")),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input_id_metadata_field"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional string describing, when applicable, the metadata field containing the ",(0,r.kt)("inlineCode",{parentName:"td"},"input_ids")),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional project identifier; usually a number"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project_name")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional project identifier; usually a human-readable name"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"library")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional description of the sequencing method or approach"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"organ")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional description of the organ from which the cells were derived"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"species")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional description of the species from which the cells were derived"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"paired-end")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean for whether samples are paired-end or not"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")))),(0,r.kt)("h3",{id:"additional-input"},"Additional Input"),(0,r.kt)("p",null,'The reference inputs are identical to those specified in the "Additional Reference Inputs" section of the ',(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/Pipelines/Smart-seq2_Single_Sample_Pipeline/README#inputs"},"Smart-seq2 Single Sample Overview"),"."),(0,r.kt)("h3",{id:"smart-seq2-multi-sample-task-summary"},"Smart-seq2 Multi-Sample Task Summary"),(0,r.kt)("p",null,"The Multi-SS2 Pipeline calls two tasks:"),(0,r.kt)("p",null,"1) ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_sample/SmartSeq2SingleSample.wdl"},"SmartSeq2SingleSample"),": a task that runs the Smart-seq2 Single Sample workflow\n2) ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/tasks/skylab/LoomUtils.wdl"},"SmartSeq2PlateAggregation"),": the wrapper pipeline that aggregates the results"),(0,r.kt)("h3",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output file name"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bam_files"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of genome-aligned BAM files (one for each sample) generated with HISAT2"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bam_index_files"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of BAM index files generated with HISAT2"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loom_output"),(0,r.kt)("td",{parentName:"tr",align:null},"A single Loom cell-by-gene matrix containing raw counts and TPMs for every cell"),(0,r.kt)("td",{parentName:"tr",align:null},"File")))),(0,r.kt)("p",null,"The final Loom matrix is an aggregate of all the individual Loom matrices generated using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_sample/SmartSeq2SingleSample.wdl"},"Smart-seq2 Single Sample workflow"),"."),(0,r.kt)("p",null,"The aggregated Loom filename contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"batch_id")," prefix, which is the string specified in the input configuration. The ",(0,r.kt)("inlineCode",{parentName:"p"},"batch_id")," is also set as a global attribute in the Loom."),(0,r.kt)("p",null,"Both the individual sample Loom files and individual BAM files are described in the ",(0,r.kt)("a",{parentName:"p",href:"../Smart-seq2_Single_Sample_Pipeline/README"},"Smart-seq2 Single Sample Overview"),"."),(0,r.kt)("admonition",{title:"Zarr Array Deprecation Notice June 2020",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Please note that we have deprecated the previously used Zarr array output. The pipeline now uses the Loom file format as the default output.")),(0,r.kt)("h2",{id:"validation"},"Validation"),(0,r.kt)("p",null,"The Multi-SS2 Pipeline has been validated for processing human and mouse, stranded or unstranded, paired- or single-end, and plate- or fluidigm-based Smart-seq2 datasets (see links to validation reports in the table below)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Workflow Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Link to Report"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mouse paired-end"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.google.com/document/d/12zGTFROrcXEByt9z0h06qjSqb9vWutn28Tx6YiND1Ds/edit"},"Report"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Human and mouse single-end"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.google.com/document/d/1MonsTG8UnROHZ_XpulrSZNTxO988KEH6T6h45plFYQg/edit#heading=h.ixoqmhbabdvh"},"Report"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Human stranded fluidigm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.google.com/document/d/1FEg86Tlu657j9Kjw_v3keFQRXcBIs8gOqCwLbPSP-C0/edit#heading=h.wjr8otl7zg14"},"Report"))))),(0,r.kt)("h2",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"Release information for the Multi-SS2 Pipeline can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_multisample/MultiSampleSmartSeq2.changelog.md"},"changelog"),". Please note that any major changes to the Smart-seq2 pipeline will be documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_sample/SmartSeq2SingleSample.changelog.md"},"Smart-seq2 Single Sample changelog"),"."),(0,r.kt)("h2",{id:"citing-the-smart-seq2-multi-sample-pipeline"},"Citing the Smart-seq2 Multi-Sample Pipeline"),(0,r.kt)("p",null,"Please identify the pipeline in your methods section using the Smart-seq2 Multi-Sample Pipeline's ",(0,r.kt)("a",{parentName:"p",href:"https://scicrunch.org/scicrunch/Resources/record/nlx_144509-1/SCR_018920/resolver?q=Smart-seq2&l=Smart-seq2"},"SciCrunch resource identifier"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ex: ",(0,r.kt)("em",{parentName:"li"},"Smart-seq2 Multi-Sample Pipeline (RRID:SCR_018920)"))),(0,r.kt)("h2",{id:"consortia-support"},"Consortia Support"),(0,r.kt)("p",null,"This pipeline is supported and used by the ",(0,r.kt)("a",{parentName:"p",href:"https://www.humancellatlas.org/"},"Human Cell Atlas")," (HCA) project. "),(0,r.kt)("p",null,"If your organization also uses this pipeline, we would love to list you! Please reach out to us by contacting ",(0,r.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team"),"."),(0,r.kt)("h2",{id:"have-suggestions"},"Have Suggestions?"),(0,r.kt)("p",null,"Please help us make our tools better by contacting ",(0,r.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team")," for pipeline-related suggestions or questions."))}d.isMDXComponent=!0}}]);