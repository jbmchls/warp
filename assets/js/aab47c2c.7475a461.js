"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[8872],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},118:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:1,slug:"/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README"},l="Smart-seq2 Single Nucleus Multi-Sample Overview",o={unversionedId:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README",id:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README",title:"Smart-seq2 Single Nucleus Multi-Sample Overview",description:"| Pipeline Version | Date Updated | Documentation Author | Questions or Feedback |",source:"@site/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README.md",sourceDirName:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline",slug:"/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1696355065,formattedLastUpdatedAt:"Oct 3, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README"},sidebar:"docsSidebar",previous:{title:"Slide-seq Count Matrix Overview",permalink:"/warp/docs/Pipelines/SlideSeq_Pipeline/count-matrix-overview"},next:{title:"Smart-seq2 Single Nucleus Multi-Sample v1.2.0 Publication Methods",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/multi_snss2.methods"}},s={},p=[{value:"Introduction to the Smart-seq2 Single Nucleus Multi-Sample pipeline",id:"introduction-to-the-smart-seq2-single-nucleus-multi-sample-pipeline",level:2},{value:"Quick start table",id:"quick-start-table",level:2},{value:"Set-Up",id:"set-up",level:2},{value:"Installation",id:"installation",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Sample data and reference inputs",id:"sample-data-and-reference-inputs",level:4},{value:"Multi-snSS2 tasks and tools",id:"multi-snss2-tasks-and-tools",level:2},{value:"1. Trimming adapters",id:"1-trimming-adapters",level:4},{value:"2. Aligning reads",id:"2-aligning-reads",level:4},{value:"3. Removing duplicate reads",id:"3-removing-duplicate-reads",level:4},{value:"4. Collecting metrics",id:"4-collecting-metrics",level:4},{value:"5. Counting genes",id:"5-counting-genes",level:4},{value:"6. Creating the Loom cell by gene matrix",id:"6-creating-the-loom-cell-by-gene-matrix",level:4},{value:"7. Outputs",id:"7-outputs",level:4},{value:"Validation",id:"validation",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Citing the Multi-snSS2 Pipeline",id:"citing-the-multi-snss2-pipeline",level:2},{value:"Consortia Support",id:"consortia-support",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-seq2-single-nucleus-multi-sample-overview"},"Smart-seq2 Single Nucleus Multi-Sample Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Documentation Author"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases"},"MultiSampleSmartSeq2SingleNuclei_v1.2.14")),(0,r.kt)("td",{parentName:"tr",align:"center"},"November, 2022"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"mailto:ekiernan@broadinstitute.org"},"Elizabeth Kiernan")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Please file GitHub issues in WARP or contact ",(0,r.kt)("a",{parentName:"td",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team"))))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6644).Z,width:"884",height:"1246"})),(0,r.kt)("h2",{id:"introduction-to-the-smart-seq2-single-nucleus-multi-sample-pipeline"},"Introduction to the Smart-seq2 Single Nucleus Multi-Sample pipeline"),(0,r.kt)("p",null,"The Smart-seq2 Single Nucleus Multi-Sample (Multi-snSS2) pipeline was developed in collaboration with the ",(0,r.kt)("a",{parentName:"p",href:"https://biccn.org/"},"BRAIN Initiative Cell Census Network")," (BICCN) to process single-nucleus RNAseq (snRNAseq) data generated by ",(0,r.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/nmeth.2639"},"Smart-seq2 assays"),". The pipeline's workflow is written in WDL, is freely available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_nucleus_multisample/MultiSampleSmartSeq2SingleNucleus.wdl"},"WARP repository")," on GitHub, and can be run by any compliant WDL runner (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/cromwell"},"Crowmell"),"). "),(0,r.kt)("p",null,"The pipeline is designed to process snRNA-seq data from multiple cells. Overall, the workflow trims paired-end FASTQ files, aligns reads to the genome using a modified GTF, ",(0,r.kt)("a",{parentName:"p",href:"#6-creating-the-loom-cell-by-gene-matrix"},"counts intronic and exonic reads"),", and calculates quality control metrics."),(0,r.kt)("p",null,"The pipeline has been scientifically validated by the BRAIN Institute. Read more in the ",(0,r.kt)("a",{parentName:"p",href:"#validation"},"validation section"),"."),(0,r.kt)("admonition",{title:"Try the Multi-snSS2 workflow in Terra",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can run the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_nucleus_multisample/MultiSampleSmartSeq2SingleNucleus.wdl"},"Smart-seq2 Single Nucleus Multi-Sample workflow")," in ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio"},"Terra"),", a cloud-based analysis platform. The Terra ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/warp-pipelines/Smart-seq2_Single_Nucleus_Muti-Sample"},"Smart-seq2 Single Nucleus Multi-Sample public workspace")," is preloaded with the Multi-snSS2 workflow, example testing data, and all the required reference data.")),(0,r.kt)("h2",{id:"quick-start-table"},"Quick start table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pipeline features"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Assay type"),(0,r.kt)("td",{parentName:"tr",align:null},"Smart-seq2 Single Nucleus"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nature.com/articles/nprot.2014.006"},"Smart-seq2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Overall workflow"),(0,r.kt)("td",{parentName:"tr",align:null},"Quality control and transcriptome quantification."),(0,r.kt)("td",{parentName:"tr",align:null},"Code available from the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/develop/pipelines/skylab/smartseq2_single_nucleus/SmartSeq2SingleNucleus.wdl"},"WARP repository")," in GitHub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Workflow language"),(0,r.kt)("td",{parentName:"tr",align:null},"WDL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openwdl/wdl"},"openWDL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Genomic reference sequence (for validation)"),(0,r.kt)("td",{parentName:"tr",align:null},"GRCm38 mouse genome primary sequence."),(0,r.kt)("td",{parentName:"tr",align:null},"GENCODE GRCm38 ",(0,r.kt)("a",{parentName:"td",href:"http://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_mouse/release_M23/GRCm38.primary_assembly.genome.fa.gz"},"mouse reference files"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transcriptomic reference annotation (for validation)"),(0,r.kt)("td",{parentName:"tr",align:null},"Modified M23 GTF built with the  ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/build_indices/BuildIndices.wdl"},"BuildIndices workflow"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"GENCODE ",(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/mouse/release_M23.html"},"M23 GTF"),"; modified version available ",(0,r.kt)("a",{parentName:"td",href:"gs://gcp-public-data--broad-references/mm10/v0/single_nucleus/modified_gencode.vM23.primary_assembly.annotation.gtf"},"Broad references"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aligner"),(0,r.kt)("td",{parentName:"tr",align:null},"STAR"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QC metrics"),(0,r.kt)("td",{parentName:"tr",align:null},"Picard"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://broadinstitute.github.io/picard/"},"Broad Institute"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transcript quantification"),(0,r.kt)("td",{parentName:"tr",align:null},"featureCounts (utilities for counting reads to genomic features)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://subread.sourceforge.net/"},"featureCounts"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data input file format"),(0,r.kt)("td",{parentName:"tr",align:null},"File format in which sequencing data is provided."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/38/6/1767/3112533"},"FASTQ"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data output file formats"),(0,r.kt)("td",{parentName:"tr",align:null},"File formats in which Smart-seq2 output is provided."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/hts-specs/"},"BAM"),", Loom (counts and metrics; generated with ",(0,r.kt)("a",{parentName:"td",href:"http://loompy.org/"},"Loompy v.3.0.6)"),", TSV (counts)")))),(0,r.kt)("h2",{id:"set-up"},"Set-Up"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,'To download the latest release of the Multi-snSS2 pipeline along with example data and dependencies, see the release tags prefixed with "MultiSampleSmartSeq2SingleNucleus" on the WARP ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page"),". All releases of the Multi-snSS2 pipeline are documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_nucleus_multisample/MultiSampleSmartSeq2SingleNucleus.changelog.md"},"Multi-snSS2 changelog"),"."),(0,r.kt)("p",null,"To search releases of this and other pipelines, use the WARP command-line tool ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/wreleaser"},"Wreleaser"),"."),(0,r.kt)("p",null,"The workflow is deployed using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/cromwell"},"Cromwell"),", a GA4GH compliant, flexible workflow management system that supports multiple computing platforms."),(0,r.kt)("h3",{id:"inputs"},"Inputs"),(0,r.kt)("p",null,"There is an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_nucleus_multisample/mouse_example.json"},"example configuration (JSON) file")," available that you can use to test the Multi-snSS2 workflow. It points to publicly available reference files and sample paired-end FASTQs."),(0,r.kt)("h4",{id:"sample-data-and-reference-inputs"},"Sample data and reference inputs"),(0,r.kt)("p",null,"The table below details the Multi-snSS2 inputs. The pipeline is designed to take in an array of paired-end reads in the form of two FASTQ files per cell. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The example mouse reference inputs are created using the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/build_indices"},"BuildIndices Pipeline"),"."),(0,r.kt)("li",{parentName:"ul"},"The pipeline modifies a given GTF downloaded from GENCODE to only include biotypes that are listed in a tab separated file (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp-tools/blob/develop/3rd-party-tools/build-indices/Biotypes.tsv"},"biotypes.tsv"),")."),(0,r.kt)("li",{parentName:"ul"},"The example references do not include the pseudogene biotype. Learn more about Ensembl biotypes in the ",(0,r.kt)("a",{parentName:"li",href:"https://m.ensembl.org/info/genome/genebuild/biotypes.html"},"Ensembl overview"),"."),(0,r.kt)("li",{parentName:"ul"},"To enable intron counting, the workflow calls a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/develop/dockers/skylab/build-indices/add-introns-to-gtf.py"},"python script")," to create a custom GTF with intron annotations. Introns are considered any part of a contig that is not exonic nor intergenic. ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"genome_ref_fasta"),(0,r.kt)("td",{parentName:"tr",align:null},"FASTA file used for metric collection by ",(0,r.kt)("a",{parentName:"td",href:"https://broadinstitute.github.io/picard/"},"Picard"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tar_star_reference"),(0,r.kt)("td",{parentName:"tr",align:null},"TAR file containing genome indices used for the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR aligner"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"annotations_gtf"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom GTF file containing annotations for exon and intron tagging; must match ",(0,r.kt)("inlineCode",{parentName:"td"},"tar_star_reference"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adapter_list"),(0,r.kt)("td",{parentName:"tr",align:null},"FASTA file containing adapter sequences used in the library preparation (i.e. Illumina adapters for Illumina sequencing)."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input_ids"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifiers or names for each cell; can be a UUID or human-readable name."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input_names"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional unique identifiers/names to further describe each cell. If ",(0,r.kt)("inlineCode",{parentName:"td"},"input_ids")," is a UUID, the ",(0,r.kt)("inlineCode",{parentName:"td"},"input_names")," could be used as a human-readable identifier."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fastq1_input_files"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud path to FASTQ files containing forward paired-end sequencing reads for each cell (sample); order must match the order in input_id."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fastq2_input_files"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud path to FASTQ files containing reverse paired-end sequencing reads for each cell (sample); order must match the order in input_id."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifier for the batch of multiple samples."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional string to describe the batch or biological sample."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional project identifier; usually a number."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional project identifier; usually a human-readable name."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"library"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional description of the sequencing method or approach."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"organ"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional description of the organ from which the cells were derived."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"species"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional description of the species from which the cells were derived."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input_name_metadata_field"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional input describing, when applicable, the metadata field containing the ",(0,r.kt)("inlineCode",{parentName:"td"},"input_names"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input_id_metadata_field"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional string describing, when applicable, the metadata field containing the ",(0,r.kt)("inlineCode",{parentName:"td"},"input_ids"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h2",{id:"multi-snss2-tasks-and-tools"},"Multi-snSS2 tasks and tools"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_nucleus_multisample/MultiSampleSmartSeq2SingleNucleus.wdl"},"Multi-snSS2 workflow"),' imports individual "tasks" (written in WDL script) from the WARP ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/tasks/skylab/"},"tasks folder"),"."),(0,r.kt)("p",null,"Overall, the Multi-snSS2 workflow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Trims adapters."),(0,r.kt)("li",{parentName:"ol"},"Aligns reads."),(0,r.kt)("li",{parentName:"ol"},"Removes duplicate reads."),(0,r.kt)("li",{parentName:"ol"},"Calculates metrics."),(0,r.kt)("li",{parentName:"ol"},"Quantifies gene counts."),(0,r.kt)("li",{parentName:"ol"},"Merges exon counts, intron counts, and metrics into a Loom-formatted matrix.")),(0,r.kt)("p",null,"The tools each task employs in the Multi-snSS2 workflow are detailed in the table below. "),(0,r.kt)("p",null,"To see specific tool parameters, select the task WDL link in the table; then view the ",(0,r.kt)("inlineCode",{parentName:"p"},"command {}")," section of the task WDL script. To view or use the exact tool software, see the task's Docker image which is specified in the task WDL ",(0,r.kt)("inlineCode",{parentName:"p"},"# runtime values")," section as ",(0,r.kt)("inlineCode",{parentName:"p"},"String docker ="),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Task name and WDL link"),(0,r.kt)("th",{parentName:"tr",align:null},"Tool"),(0,r.kt)("th",{parentName:"tr",align:null},"Software"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/master/tasks/skylab/CheckInputs.wdl"},"CheckInputs.checkInputArrays")),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"Bash"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks the inputs and initiates the per cell processing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/master/tasks/skylab/TrimAdapters.wdl"},"TrimAdapters.TrimAdapters")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/ExpressionAnalysis/ea-utils/tree/master/clipper"},"fastq-mcf")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/ExpressionAnalysis/ea-utils"},"ea-utils")),(0,r.kt)("td",{parentName:"tr",align:null},"Trims adapter sequences from the FASTQ inputs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/master/tasks/skylab/StarAlign.wdl"},"StarAlign.StarAlignFastqMultisample")),(0,r.kt)("td",{parentName:"tr",align:null},"STAR"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR")),(0,r.kt)("td",{parentName:"tr",align:null},"Aligns reads to the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/master/tasks/skylab/Picard.wdl"},"Picard.RemoveDuplicatesFromBam")),(0,r.kt)("td",{parentName:"tr",align:null},"MarkDuplicates, AddOrReplaceReadGroups"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://broadinstitute.github.io/picard/"},"Picard")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes duplicate reads, producing a new BAM output; adds regroups to deduplicated BAM.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/master/tasks/skylab/Picard.wdl"},"Picard.CollectMultipleMetricsMultiSample")),(0,r.kt)("td",{parentName:"tr",align:null},"CollectMultipleMetrics"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://broadinstitute.github.io/picard/"},"Picard")),(0,r.kt)("td",{parentName:"tr",align:null},"Collects QC metrics on the deduplicated BAM files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/master/tasks/skylab/FeatureCounts.wdl"},"CountAlignments.CountAlignments")),(0,r.kt)("td",{parentName:"tr",align:null},"FeatureCounts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://subread.sourceforge.net/"},"Subread"),", Python 3"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses a custom GTF with featureCounts and Python to mark introns, create a BAM that has alignments spanning intron-exon junctions removed, and counts exons using the custom BAM and by excluding intron tags.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/master/tasks/skylab/LoomUtils.wdl"},"LoomUtils.SingleNucleusSmartSeq2LoomOutput")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom script: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/dockers/skylab/pytools/tools/ss2_loom_merge.py"},"ss2_loom_merge.py")),(0,r.kt)("td",{parentName:"tr",align:null},"Python 3"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates the matrix files (Loom format) for each sample.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/master/tasks/skylab/LoomUtils.wdl"},"LoomUtils.AggregateSmartSeq2Loom")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom script: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/dockers/skylab/pytools/tools/ss2_loom_merge.py"},"ss2_loom_merge.py")),(0,r.kt)("td",{parentName:"tr",align:null},"Python 3"),(0,r.kt)("td",{parentName:"tr",align:null},"Aggregates the matrix files (Loom format) for each sample to produce one final Loom output.")))),(0,r.kt)("h4",{id:"1-trimming-adapters"},"1. Trimming adapters"),(0,r.kt)("p",null,"The TrimAdapters task uses the adapter list reference file to run the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpressionAnalysis/ea-utils/tree/master/clipper"},"fastq-mcf")," tool. This tool identifies the adapters in the input FASTQ files and performs clipping by using a subsampling parameter of 200,000 reads. The task outputs the trimmed FASTQ files which are then used for alignment. "),(0,r.kt)("h4",{id:"2-aligning-reads"},"2. Aligning reads"),(0,r.kt)("p",null,"The StarAlignFastq task runs the STAR aligner on the trimmed FASTQ files. The STAR quantMode parameter is set to GeneCounts, which counts the number of reads per gene while mapping. The task outputs a coordinate-sorted aligned BAM file. "),(0,r.kt)("h4",{id:"3-removing-duplicate-reads"},"3. Removing duplicate reads"),(0,r.kt)("p",null,"The RemoveDuplicatesFromBam task removes multi-mapped reads, optical duplicates, and PCR duplicates from the aligned BAM. It then adds readgroup information and creates a new, coordinate-sorted aligned BAM output."),(0,r.kt)("h4",{id:"4-collecting-metrics"},"4. Collecting metrics"),(0,r.kt)("p",null,"The CollectMultipleMetrics task uses the Picard tool CollectMultipleMetrics to perform QC on the deduplicated BAM file. These metrics are copied to the final cell-by-gene matrix output (Loom file). A detailed list of these metrics can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/count-matrix-overview"},"Multi-snSS2 Count Matrix Overview"),"."),(0,r.kt)("h4",{id:"5-counting-genes"},"5. Counting genes"),(0,r.kt)("p",null,"The CountAlignments task uses the featureCounts package to count introns and exons. First, the featureCounts tool counts intronic alignments in the deduplicated BAM using a custom GTF with annotated introns. The tool flags intronic alignments if they overlap an annotated intron by a minimum of 3 bp. "),(0,r.kt)("p",null,"Next, following pipeline processes established by the BICCN Whole Mouse Brain Working Group, a custom Python script (\u201c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/dockers/skylab/featureCounts/remove-reads-on-junctions.py"},"remove-reads-on-junctions.py"),"\u201d) removes all alignments in the deduplicated BAM that cross only one intron-exon junction and produces an intermediate BAM file for exon counting. This removes a negligible amount of putative intronic alignments that did not meet the 3 bp intron overlap criteria. "),(0,r.kt)("p",null,"Lastly, featureCounts uses the intermediate BAM with junctions removed to count exons. The final outputs of this step include a cell-by-gene matrix of intronic counts, a cell-by-gene matrix of exonic counts, and summary metrics for the different count types."),(0,r.kt)("h4",{id:"6-creating-the-loom-cell-by-gene-matrix"},"6. Creating the Loom cell by gene matrix"),(0,r.kt)("p",null,"The LoomUtils task combines the Picard metrics (alignment_summary_metrics, deduplication metrics, and the G/C bias summary metrics) with the featureCount exon and intron counts to create a Loom formatted cell-by-gene count matrix. "),(0,r.kt)("p",null,"Read full details for all the metrics in the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/count-matrix-overview"},"Multi-snSS2 Count Matrix Overview"),"."),(0,r.kt)("p",null,"The cell-by-gene matrix can be examined using ",(0,r.kt)("a",{parentName:"p",href:"https://linnarssonlab.org/loompy/index.html"},"Loompy software"),". Exonic counts are stored in the main Loom matrix which is unnamed by default. They are the default return value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"loompy.connect()")," command. Intronic counts are stored in the Loom as an additional layer which is named ",(0,r.kt)("inlineCode",{parentName:"p"},"intron_counts"),"."),(0,r.kt)("p",null,"You can also access exonic and intronic counts using Loompy's ",(0,r.kt)("inlineCode",{parentName:"p"},"layers()")," method. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"loompy.connect.layers[\u201c\u201d]")," will return the exonic counts from the output Loom file. Similarly, ",(0,r.kt)("inlineCode",{parentName:"p"},"loompy.connect.layers[\u201cintron_counts\u201d]")," will return the intronic counts from the output Loom. "),(0,r.kt)("p",null,"Whole gene counts (which include both intronic and exonic counts) can be accessed by adding the intronic and exonic counts together. "),(0,r.kt)("p",null,"Below is example Loompy code for accessing the Loom's exonic, intronic, and whole gene counts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import loompy\nds = loompy.connect("/PATH/TO/File.loom")\ncount_exons = ds[:,:] #geneXcell table for the exonic read counts\ncount_introns = ds.layer["intron_counts"] #geneXcell table for the intronic read counts\ngene_counts = count_exons + count_introns\n')),(0,r.kt)("p",null,"To read more about the Loom file format and use of layers, see the ",(0,r.kt)("a",{parentName:"p",href:"https://linnarssonlab.org/loompy/index.html"},"Loompy documentation"),"."),(0,r.kt)("h4",{id:"7-outputs"},"7. Outputs"),(0,r.kt)("p",null,"The table below details the final outputs of the Multi-snSS2 workflow.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output variable name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loom_output"),(0,r.kt)("td",{parentName:"tr",align:null},"Cell-by-gene count matrix that includes the raw exon counts (in matrix), intron counts (in matrix layer), cell metrics (column attributes) and gene IDs (row attributes)."),(0,r.kt)("td",{parentName:"tr",align:null},"Loom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exon_intron_count_files"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of TXT files (one per cell) that contain intronic and exonic counts."),(0,r.kt)("td",{parentName:"tr",align:null},"Array ","[TXT]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bam_files"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of genome-aligned BAM files (one for each cell) generated with STAR."),(0,r.kt)("td",{parentName:"tr",align:null},"Array ","[BAM]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pipeline_version_out"),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the processing pipeline run on this data."),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("p",null,"The Loom matrix is the default output. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/blob/develop/tools/scripts/create_loom_snss2.py"},"create_loom_snss2.py")," script for the detailed code. This matrix contains the count matrices, as well as the gene and cell metrics detailed in the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/count-matrix-overview"},"Multi-snSS2 Count Matrix Overview"),"."),(0,r.kt)("p",null,"To facilitate downstream analysis, the output Loom file contains both gene names and gene IDs."),(0,r.kt)("p",null,"The output Loom matrix can be converted to an H5AD file using a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/blob/develop/tools/scripts/loom_to_h5ad.py"},"custom script")," available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools GitHub repository"),"."),(0,r.kt)("h2",{id:"validation"},"Validation"),(0,r.kt)("p",null,"The Multi-snSS2 pipeline was scientifically validated by the BRAIN Initiatives Cell Census Network (BICCN) 2.0 Whole Mouse Brain Working Group. "),(0,r.kt)("h2",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"All Multi-snSS2 release notes are documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_nucleus_multisample/MultiSampleSmartSeq2SingleNucleus.changelog.md"},"Multi-snSS2 changelog"),"."),(0,r.kt)("h2",{id:"citing-the-multi-snss2-pipeline"},"Citing the Multi-snSS2 Pipeline"),(0,r.kt)("p",null,"To cite the Multi-snSS2 pipeline, use the ",(0,r.kt)("a",{parentName:"p",href:"https://scicrunch.org/scicrunch/Resources/record/nlx_144509-1/SCR_021312/resolver"},"SciCrunch resource identifier"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ex: ",(0,r.kt)("em",{parentName:"li"},"Smart-seq2 Single Nucleus Multi-Sample Pipeline (RRID:SCR_021312)"))),(0,r.kt)("p",null,"To view an example of this citation as well as a publication-style methods section, see the Multi-snSS2 ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/multi_snss2.methods"},"Example Methods"),". "),(0,r.kt)("h2",{id:"consortia-support"},"Consortia Support"),(0,r.kt)("p",null,"This pipeline is supported and used by the ",(0,r.kt)("a",{parentName:"p",href:"https://biccn.org/"},"BRAIN Initiative Cell Census Network")," (BICCN). "),(0,r.kt)("p",null,"Each consortia may use slightly different reference files for data analysis or have different post-processing steps. Learn more by reading the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing"},"Consortia Processing")," overview."),(0,r.kt)("p",null,"If your organization also uses this pipeline, we would love to list you! Please reach out to us by contacting the ",(0,r.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"WARP Pipeline Development team"),"."),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"Please help us make our tools better by contacting the ",(0,r.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"WARP Pipeline Development team")," for pipeline-related suggestions or questions."))}d.isMDXComponent=!0},6644:function(e,t,a){t.Z=a.p+"assets/images/snSS2-49fa29b5c051bd785b5af73abd3bfd35.png"}}]);