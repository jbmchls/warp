"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[8032],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5492:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:1,slug:"/Pipelines/snm3C/README"},l="Single Nucleus Methyl-Seq and Chromatin Capture (snm3C) Overview",s={unversionedId:"Pipelines/snM3C/README",id:"Pipelines/snM3C/README",title:"Single Nucleus Methyl-Seq and Chromatin Capture (snm3C) Overview",description:"| Pipeline Version | Date Updated | Documentation Authors | Questions or Feedback |",source:"@site/docs/Pipelines/snM3C/README.md",sourceDirName:"Pipelines/snM3C",slug:"/Pipelines/snm3C/README",permalink:"/warp/docs/Pipelines/snm3C/README",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/snM3C/README.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1719587432,formattedLastUpdatedAt:"Jun 28, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/Pipelines/snm3C/README"},sidebar:"docsSidebar",previous:{title:"What's in the Smart-seq2 Single Sample Pipeline Loom File?",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Sample_Pipeline/Loom_schema"},next:{title:"snm3C Mapping Summary Metrics Overview",permalink:"/warp/docs/Pipelines/snM3C/summary_metrics"}},o={},p=[{value:"Introduction to snm3C",id:"introduction-to-snm3c",level:2},{value:"Quickstart table",id:"quickstart-table",level:2},{value:"Set-up",id:"set-up",level:2},{value:"snm3C installation",id:"snm3c-installation",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Input descriptions",id:"input-descriptions",level:4},{value:"snm3C tasks and tools",id:"snm3c-tasks-and-tools",level:2},{value:"1. Demultiplexes reads",id:"1-demultiplexes-reads",level:4},{value:"2. Sorts, filters, trims, and aligns paired-end reads, and separates unmapped, uniquely aligned, and multi-aligned reads",id:"2-sorts-filters-trims-and-aligns-paired-end-reads-and-separates-unmapped-uniquely-aligned-and-multi-aligned-reads",level:4},{value:"3. Aligns unmapped, single-end reads and removes overlapping reads",id:"3-aligns-unmapped-single-end-reads-and-removes-overlapping-reads",level:4},{value:"4. Merges mapped reads, calls chromatin contacts, and creates ALLC files",id:"4-merges-mapped-reads-calls-chromatin-contacts-and-creates-allc-files",level:4},{value:"6. Creates summary output file",id:"6-creates-summary-output-file",level:4},{value:"Outputs",id:"outputs",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Citing the snm3C Pipeline",id:"citing-the-snm3c-pipeline",level:2},{value:"Consortia support",id:"consortia-support",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"Feedback",id:"feedback",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"single-nucleus-methyl-seq-and-chromatin-capture-snm3c-overview"},"Single Nucleus Methyl-Seq and Chromatin Capture (snm3C) Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Documentation Authors"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases"},"snm3C_v4.0.0")),(0,r.kt)("td",{parentName:"tr",align:"center"},"March, 2024"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"mailto:warp-pipelines-help@broadinsitute.org"},"Kaylee Mathews")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Please file GitHub issues in the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/issues"},"WARP repository"))))),(0,r.kt)("h2",{id:"introduction-to-snm3c"},"Introduction to snm3C"),(0,r.kt)("p",null,"The Single Nucleus Methly-Seq and Chromatin Capture (snm3C) workflow is an open-source, cloud-optimized computational workflow for processing single-nucleus methylome and chromatin contact (snm3C) sequencing data. The workflow is designed to demultiplex and align raw sequencing reads, call chromatin contacts, and generate summary metrics. "),(0,r.kt)("p",null,"The workflow is developed in collaboration with Hanqing Liu, Wei Tian, Wubin Ding, Huaming Chen, Chongyuan Luo, Jingtian Zhou, and the entire laboratory of Joseph Ecker. Please see the ",(0,r.kt)("a",{parentName:"p",href:"#acknowledgements"},"Acknowledgments")," section below."),(0,r.kt)("p",null,"For more information about the snm3C tools and analysis, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://hq-1.gitbook.io/mc/"},"YAP documentation")," or the cemba_data GitHub repositories created by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lhqing/cemba_data"},"Hanqing Liu")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DingWB/cemba_data"},"Wubin Ding"),"."),(0,r.kt)("h2",{id:"quickstart-table"},"Quickstart table"),(0,r.kt)("p",null,"The following table provides a quick glance at the Multiome pipeline features:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pipeline features"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Assay type"),(0,r.kt)("td",{parentName:"tr",align:null},"single-nucleus methylome and chromatin contact (snm3C) sequencing data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6765423/"},"Lee et al. 2019"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Overall workflow"),(0,r.kt)("td",{parentName:"tr",align:null},"Read alignment and chromatin contact calling"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Workflow language"),(0,r.kt)("td",{parentName:"tr",align:null},"WDL 1.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openwdl/wdl"},"openWDL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Genomic Reference Sequence"),(0,r.kt)("td",{parentName:"tr",align:null},"GRCh38 human genome primary sequence"),(0,r.kt)("td",{parentName:"tr",align:null},"GENCODE ",(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/human/release_43.html"},"human reference files"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aligner"),(0,r.kt)("td",{parentName:"tr",align:null},"HISAT-3N"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://genome.cshlp.org/content/31/7/1290"},"Zhang at al. 2021"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data input file format"),(0,r.kt)("td",{parentName:"tr",align:null},"File format in which sequencing data is provided"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/38/6/1767/3112533"},"FASTQ"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data output file format"),(0,r.kt)("td",{parentName:"tr",align:null},"File formats in which snm3C output is provided"),(0,r.kt)("td",{parentName:"tr",align:null},"CSV, ",(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/38/6/1767/3112533"},"FASTQ"),", ",(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/hts-specs/"},"BAM"),", and ",(0,r.kt)("a",{parentName:"td",href:"https://lhqing.github.io/ALLCools/intro.html"},"ALLC"))))),(0,r.kt)("h2",{id:"set-up"},"Set-up"),(0,r.kt)("h3",{id:"snm3c-installation"},"snm3C installation"),(0,r.kt)("p",null,'To download the latest snm3C release, see the release tags prefixed with "snm3C" on the WARP ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page"),". All snm3C pipeline releases are documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/snm3C/snm3C.changelog.md"},"snm3C changelog"),". "),(0,r.kt)("p",null,"To discover and search releases, use the WARP command-line tool ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/wreleaser"},"Wreleaser"),"."),(0,r.kt)("p",null,"If you\u2019re running a version of the snm3C workflow prior to the latest release, the accompanying documentation for that release may be downloaded with the source code on the WARP ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page")," (see the source code folder ",(0,r.kt)("inlineCode",{parentName:"p"},"website/docs/Pipelines/snm3C"),")."),(0,r.kt)("p",null,"The snm3C workflow can be deployed using ",(0,r.kt)("a",{parentName:"p",href:"https://cromwell.readthedocs.io/en/stable/"},"Cromwell"),", a GA4GH-compliant, flexible workflow management system that supports multiple computing platforms. The workflow can also be run in ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio"},"Terra"),", a cloud-based analysis platform. "),(0,r.kt)("h3",{id:"inputs"},"Inputs"),(0,r.kt)("p",null,"The snm3C workflow requires a JSON configuration file specifying the input files and parameters for the analysis. Example configuration files can be found in the snm3C ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/pipelines/skylab/snm3C/test_inputs"},(0,r.kt)("inlineCode",{parentName:"a"},"test_inputs"))," directory in the WARP repository."),(0,r.kt)("h4",{id:"input-descriptions"},"Input descriptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fastq_input_read1"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of multiplexed FASTQ files for read 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fastq_input_read2"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of multiplexed FASTQ files for read 2.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"random_primer_indexes"),(0,r.kt)("td",{parentName:"tr",align:null},"File containing random primer indexes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plate_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String specifying the plate ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tarred_index_files"),(0,r.kt)("td",{parentName:"tr",align:null},"File containing tarred index files for hisat-3 mapping.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"genome_fa"),(0,r.kt)("td",{parentName:"tr",align:null},"File containing the reference genome in FASTA format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chromosome_sizes"),(0,r.kt)("td",{parentName:"tr",align:null},"File containing the genome chromosome sizes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"r1_adapter"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional string describing the adapter sequence for read 1 paired-end reads to be used during adapter trimming with Cutadapt; default is "AGATCGGAAGAGCACACGTCTGAAC".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"r2_adapter"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional string describing the adapter sequence for read 2 paired-end reads to be used during adapter trimming with Cutadapt; default is  "AGATCGGAAGAGCGTCGTGTAGGGA".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"r1_left_cut"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional integer describing the number of bases to be trimmed from the beginning of read 1 with Cutadapt; default is 10.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"r1_right_cut"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional integer describing the number of bases to be trimmed from the end of read 1 with Cutadapt; default is 10.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"r2_left_cut"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional integer describing the number of bases to be trimmed from the beginning of read 2 with Cutadapt; default is 10.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"r2_right_cut"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional integer describing the number of bases to be trimmed from the end of read 2 with Cutadapt; default is 10.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min_read_length"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional integer; if a read length is smaller than ",(0,r.kt)("inlineCode",{parentName:"td"},"min_read_length"),", both paired-end reads will be discarded; default is 30.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_upstr_bases"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional integer describing the number of bases upstream of the C base to include in ALLC file context column created using ALLCools; default is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_downstr_bases"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional integer describing the number of bases downstream of the C base to include in ALLC file context column created using ALLCools; default is 2.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compress_level"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional integer describing the compression level for the output ALLC file; default is 5.")))),(0,r.kt)("h2",{id:"snm3c-tasks-and-tools"},"snm3C tasks and tools"),(0,r.kt)("p",null,"The workflow contains several tasks described below."),(0,r.kt)("p",null,"Overall, the snm3C workflow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Demultiplexes reads."),(0,r.kt)("li",{parentName:"ol"},"Sorts, filters, trims, and aligns paired-end reads, and separates unmapped, uniquely aligned, and multi-aligned reads."),(0,r.kt)("li",{parentName:"ol"},"Aligns unmapped, single-end reads and removes overlapping reads."),(0,r.kt)("li",{parentName:"ol"},"Merges mapped reads, calls chromatin contacts, and creates ALLC files."),(0,r.kt)("li",{parentName:"ol"},"Creates summary output file.")),(0,r.kt)("p",null,"The tools each snm3C task employs are detailed in the table below. "),(0,r.kt)("p",null,"To see specific tool parameters, select the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/snm3C/snm3C.wdl"},"workflow WDL link"),"; then find the task and view the ",(0,r.kt)("inlineCode",{parentName:"p"},"command {}")," section of the task in the WDL script. To view or use the exact tool software, see the task's Docker image which is specified in the task WDL ",(0,r.kt)("inlineCode",{parentName:"p"},"# runtime values")," section as ",(0,r.kt)("inlineCode",{parentName:"p"},"docker: "),". More details about these tools and parameters can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://hq-1.gitbook.io/mc/"},"YAP documentation"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Task name"),(0,r.kt)("th",{parentName:"tr",align:null},"Tool"),(0,r.kt)("th",{parentName:"tr",align:null},"Software"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Demultiplexing"),(0,r.kt)("td",{parentName:"tr",align:null},"Cutadapt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cutadapt.readthedocs.io/en/stable/"},"Cutadapt")),(0,r.kt)("td",{parentName:"tr",align:null},"Performs demultiplexing to cell-level FASTQ files based on random primer indices.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hisat-paired-end"),(0,r.kt)("td",{parentName:"tr",align:null},"Cutadapt, HISAT-3N, ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lhqing/cemba_data/blob/788e83cd66f3b556bdfacf3485bed9500d381f23/cemba_data/hisat3n/hisat3n_general.py"},"hisat3n_general.py"),", ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lhqing/cemba_data/blob/bf6248239074d0423d45a67d83da99250a43e50c/cemba_data/hisat3n/hisat3n_m3c.py"},"hisat3n_m3c.py")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cutadapt.readthedocs.io/en/stable/"},"Cutadapt"),", ",(0,r.kt)("a",{parentName:"td",href:"https://daehwankimlab.github.io/hisat2/hisat-3n/"},"HISAT-3N"),", python3"),(0,r.kt)("td",{parentName:"tr",align:null},"Sorts, filters, and trims reads using the ",(0,r.kt)("inlineCode",{parentName:"td"},"r1_adapter"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"r2_adapter"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"r1_left_cut"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"r1_right_cut"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"r2_left_cut"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"r2_right_cut")," input parameters; performs paired-end read alignment; imports 2 custom python3 scripts developed by Hanqing Liu and calls the ",(0,r.kt)("inlineCode",{parentName:"td"},"separate_unique_and_multi_align_reads()")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"split_hisat3n_unmapped_reads()")," functions to separate unmapped, uniquely aligned, multi-aligned reads from HISAT-3N BAM file, then splits the unmapped reads FASTQ file by all possible enzyme cut sites and output new R1 and R2 FASTQ files; unmapped reads are stored in unmapped FASTQ files and uniquely and multi-aligned reads are stored in separate BAM files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hisat_single_end"),(0,r.kt)("td",{parentName:"tr",align:null},"HISAT-3N, ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lhqing/cemba_data/blob/bf6248239074d0423d45a67d83da99250a43e50c/cemba_data/hisat3n/hisat3n_m3c.py"},"hisat3n_m3c.py")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://daehwankimlab.github.io/hisat2/hisat-3n/"},"HISAT-3N"),", python3"),(0,r.kt)("td",{parentName:"tr",align:null},"Performs single-end alignment of unmapped reads to maximize read mapping, imports a custom python3 script developed by Hanqing Liu, and calls the ",(0,r.kt)("inlineCode",{parentName:"td"},"remove_overlap_read_parts()")," function to remove overlapping reads from the split alignment BAM file produced during single-end alignment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Merge_sort_analyze"),(0,r.kt)("td",{parentName:"tr",align:null},"merge, sort, MarkDuplicates, ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lhqing/cemba_data/blob/bf6248239074d0423d45a67d83da99250a43e50c/cemba_data/hisat3n/hisat3n_m3c.py"},"hisat3n_m3c.py"),", bam-to-allc, extract-allc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.htslib.org/"},"samtools"),", ",(0,r.kt)("a",{parentName:"td",href:"https://broadinstitute.github.io/picard/"},"Picard"),", python3, ",(0,r.kt)("a",{parentName:"td",href:"https://lhqing.github.io/ALLCools/intro.html"},"ALLCools")),(0,r.kt)("td",{parentName:"tr",align:null},"Merges and sorts all mapped reads from the paired-end and single-end alignments; creates a position-sorted BAM file and a name-sorted BAM file; removes duplicate reads from the position-sorted, merged BAM file; imports a custom python3 script developed by Hanqing Liu and calls the ",(0,r.kt)("inlineCode",{parentName:"td"},"call_chromatin_contacts()")," function to call chromatin contacts from the name-sorted, merged BAM file; reads are considered chromatin contacts if they are greater than 2,500 base pairs apart; creates a first ALLC file with a list of methylation points and a second ALLC file containing methylation contexts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Summary"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/lhqing/cemba_data/blob/788e83cd66f3b556bdfacf3485bed9500d381f23/cemba_data/hisat3n/summary.py"},"summary.py")),(0,r.kt)("td",{parentName:"tr",align:null},"python3"),(0,r.kt)("td",{parentName:"tr",align:null},"Imports a custom python3 script developed by Hanqing Liu and calls the ",(0,r.kt)("inlineCode",{parentName:"td"},"snm3c_summary()")," function to generate a single, summary file for the pipeline in CSV format; contains trimming, mapping, deduplication, chromatin contact, and AllC site statistics.")))),(0,r.kt)("h4",{id:"1-demultiplexes-reads"},"1. Demultiplexes reads"),(0,r.kt)("p",null,"In the first step of the pipeline (",(0,r.kt)("inlineCode",{parentName:"p"},"Demultiplexing"),"), raw sequencing reads are demultiplexed by random primer index into cell-level FASTQ files using ",(0,r.kt)("a",{parentName:"p",href:"https://cutadapt.readthedocs.io/en/stable/"},"Cutadapt"),". For more information on barcoding, see the ",(0,r.kt)("a",{parentName:"p",href:"https://hq-1.gitbook.io/mc/tech-background/barcoding#two-round-of-barcoding"},"YAP documentation"),". "),(0,r.kt)("h4",{id:"2-sorts-filters-trims-and-aligns-paired-end-reads-and-separates-unmapped-uniquely-aligned-and-multi-aligned-reads"},"2. Sorts, filters, trims, and aligns paired-end reads, and separates unmapped, uniquely aligned, and multi-aligned reads"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sorts, filters, and trims reads"),"\nAfter demultiplexing, the pipeline uses ",(0,r.kt)("a",{parentName:"p",href:"https://cutadapt.readthedocs.io/en/stable/"},"Cutadapt")," to sort, filter, and trim reads in the ",(0,r.kt)("inlineCode",{parentName:"p"},"hisat-paired-end")," task. The R1 and R2 adapter sequences are removed, along with the number of bases specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"r1_left_cut"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"r1_right_cut"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"r2_left_cut"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"r2_right_cut")," input parameters. Any reads shorter than the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"min_read_length")," are filtered out in this step."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Aligns paired-end reads"),"\nNext, the task uses ",(0,r.kt)("a",{parentName:"p",href:"https://daehwankimlab.github.io/hisat2/hisat-3n/"},"HISAT-3N")," to perform paired-end read alignment to a reference genome FASTA file (",(0,r.kt)("inlineCode",{parentName:"p"},"genome_fa"),") and outputs an aligned BAM file. Additionally, the task outputs a stats file and a text file containing the genomic reference version used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Separates unmapped, uniquely aligned, and multi-aligned reads"),"\nAfter paired-end alignment, the task imports a custom python3 script (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lhqing/cemba_data/blob/788e83cd66f3b556bdfacf3485bed9500d381f23/cemba_data/hisat3n/hisat3n_general.py"},"hisat3n_general.py"),") developed by Hanqing Liu. The task calls the script's ",(0,r.kt)("inlineCode",{parentName:"p"},"separate_unique_and_multi_align_reads()")," function to separate unmapped, uniquely aligned, and multi-aligned reads from the HISAT-3N BAM file. Three new files are output from this step of the pipeline: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A FASTQ file that contains the unmapped reads (",(0,r.kt)("inlineCode",{parentName:"li"},"unmapped_fastq_tar"),")"),(0,r.kt)("li",{parentName:"ol"},"A BAM file that contains the uniquely aligned reads (",(0,r.kt)("inlineCode",{parentName:"li"},"unique_bam_tar"),")"),(0,r.kt)("li",{parentName:"ol"},"A BAM file that contains the multi-aligned reads (",(0,r.kt)("inlineCode",{parentName:"li"},"multi_bam_tar"),")")),(0,r.kt)("p",null,"After separating reads, the task imports a custom python3 script (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lhqing/cemba_data/blob/bf6248239074d0423d45a67d83da99250a43e50c/cemba_data/hisat3n/hisat3n_m3c.py"},"hisat3n_m3c.py"),") developed by Hanqing Liu and calls the script's ",(0,r.kt)("inlineCode",{parentName:"p"},"split_hisat3n_unmapped_reads()")," function. This splits the FASTQ file containing the unmapped reads by all possible enzyme cut sites and outputs new R1 and R2 files. "),(0,r.kt)("h4",{id:"3-aligns-unmapped-single-end-reads-and-removes-overlapping-reads"},"3. Aligns unmapped, single-end reads and removes overlapping reads"),(0,r.kt)("p",null,"In the next step of the pipeline, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hisat_single_end ")," task uses ",(0,r.kt)("a",{parentName:"p",href:"https://daehwankimlab.github.io/hisat2/hisat-3n/"},"HISAT-3N")," to perform single-end read alignment of the previously unmapped reads to maximize read mapping and outputs a single, aligned BAM file."),(0,r.kt)("p",null,"After the second alignment step, the task imports a custom python3 script (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lhqing/cemba_data/blob/bf6248239074d0423d45a67d83da99250a43e50c/cemba_data/hisat3n/hisat3n_m3c.py"},"hisat3n_m3c.py"),") developed by Hanqing Liu. The task calls the script's ",(0,r.kt)("inlineCode",{parentName:"p"},"remove_overlap_read_parts()")," function to remove overlapping reads from the BAM file produced during single-end alignment and output another BAM file."),(0,r.kt)("h4",{id:"4-merges-mapped-reads-calls-chromatin-contacts-and-creates-allc-files"},"4. Merges mapped reads, calls chromatin contacts, and creates ALLC files"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Merged mapped reads"),"\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Merge_sort_analyze")," task uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.htslib.org/"},"samtools")," to merge and sort all of the mapped reads from the paired-end and single-end alignments into a single BAM file. The BAM file is output as both a position-sorted and a name-sorted BAM file."),(0,r.kt)("p",null,"After merging, the task uses Picard's MarkDuplicates tool to remove duplicate reads from the position-sorted, merged BAM file and output a deduplicated BAM file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Calls chromatin contacts"),"\nNext, the pipeline imports a custom python3 script (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lhqing/cemba_data/blob/bf6248239074d0423d45a67d83da99250a43e50c/cemba_data/hisat3n/hisat3n_m3c.py"},"hisat3n_m3c.py"),") developed by Hanqing Liu. The task calls the script's ",(0,r.kt)("inlineCode",{parentName:"p"},"call_chromatin_contacts()")," function to call chromatin contacts from the name-sorted, merged BAM file. If reads are greater than 2,500 base pairs apart, they are considered chromatin contacts. If reads are less than 2,500 base pairs apart, they are considered the same fragment. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creates ALLC files"),"\nAfter calling chromatin contacts, the task uses the ",(0,r.kt)("a",{parentName:"p",href:"https://lhqing.github.io/ALLCools/intro.html"},"ALLCools")," ",(0,r.kt)("inlineCode",{parentName:"p"},"bam-to-allc")," function to create an ALLC file from the deduplicated BAM file that contains a list of methylation points. The ",(0,r.kt)("inlineCode",{parentName:"p"},"num_upstr_bases")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"num_downstr_bases")," input parameters are used to define the number of bases upstream and downstream of the C base to include in the ALLC context column."),(0,r.kt)("p",null,"Next, the task uses the ",(0,r.kt)("a",{parentName:"p",href:"https://lhqing.github.io/ALLCools/intro.html"},"ALLCools")," ",(0,r.kt)("inlineCode",{parentName:"p"},"extract-allc")," function to extract methylation contexts from the input ALLC file and output a second ALLC file that can be used to generate an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lhqing/allcools_doc/blob/master/tech-background/file-formats.md#mcds-file"},"MCDS file"),"."),(0,r.kt)("h4",{id:"6-creates-summary-output-file"},"6. Creates summary output file"),(0,r.kt)("p",null,"In the last step of the pipeline, the ",(0,r.kt)("inlineCode",{parentName:"p"},"summary")," task imports a custom python3 script (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lhqing/cemba_data/blob/788e83cd66f3b556bdfacf3485bed9500d381f23/cemba_data/hisat3n/summary.py"},"summary.py"),") developed by Hanqing Liu. The task calls the script's ",(0,r.kt)("inlineCode",{parentName:"p"},"snm3c_summary()")," function to generate a single, summary file for the pipeline in CSV format; contains trimming, mapping, deduplication, chromatin contact, and AllC site statistics. This is the main output of the pipeline."),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,"The following table lists the output variables and files produced by the pipeline."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output name"),(0,r.kt)("th",{parentName:"tr",align:null},"Filename, if applicable"),(0,r.kt)("th",{parentName:"tr",align:null},"Output format and description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MappingSummary"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<plate_id>_MappingSummary.csv.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"Mapping summary file in CSV format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name_sorted_bams"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<plate_id>.hisat3n_dna.all_reads.name_sort.tar.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of tarred files containing name-sorted, merged BAM files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unique_reads_cgn_extraction_allc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<plate_id>.allc.tsv.tar.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of tarred files containing list of methylation points.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unique_reads_cgn_extraction_tbi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<plate_id>.allc.tbi.tar.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of tarred files containing ALLC index files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reference_version"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<plate_id>.reference_version.txt")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of tarred files containing the genomic reference version used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all_reads_dedup_contacts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<plate_id>.hisat3n_dna.all_reads.dedup_contacts.tar.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of tarred TSV files containing deduplicated chromatin contacts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all_reads_3C_contacts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<plate_id>.hisat3n_dna.all_reads.3C.contact.tar.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of tarred TSV files containing chromatin contacts in Hi-C format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chromatin_contact_stats"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<plate_id>.chromatin_contact_stats.tar.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of tarred files containing chromatin contact statistics.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unique_reads_cgn_extraction_allc_extract"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<plate_id>.extract-allc.tar.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of tarred files containing CGN context-specific ALLC files that can be used to generate an ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lhqing/allcools_doc/blob/master/tech-background/file-formats.md#mcds-file"},"MCDS file"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unique_reads_cgn_extraction_tbi_extract"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<plate_id>.extract-allc_tbi.tar.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of tarred files containing ALLC index files.")))),(0,r.kt)("h2",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"All snm3C pipeline releases are documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/snm3C/snm3C.changelog.md"},"pipeline changelog"),"."),(0,r.kt)("h2",{id:"citing-the-snm3c-pipeline"},"Citing the snm3C Pipeline"),(0,r.kt)("p",null,"If you use the snm3C Pipeline in your research, please identify the pipeline in your methods section using the ",(0,r.kt)("a",{parentName:"p",href:"https://scicrunch.org/resources/data/record/nlx_144509-1/SCR_025041/resolver?q=SCR_025041&l=SCR_025041&i=rrid:scr_025041"},"snm3C SciCrunch resource identifier"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ex: ",(0,r.kt)("em",{parentName:"li"},"snm3C Pipeline (RRID:SCR_025041)"))),(0,r.kt)("p",null,"Please cite the following publications for the snm3C pipeline: "),(0,r.kt)("p",null,"Lee, DS., Luo, C., Zhou, J. et al. Simultaneous profiling of 3D genome structure and DNA methylation in single human cells. Nat Methods 16, 999\u20131006 (2019). ",(0,r.kt)("a",{parentName:"p",href:"https://doi.org/10.1038/s41592-019-0547-z"},"https://doi.org/10.1038/s41592-019-0547-z")),(0,r.kt)("p",null,"Liu, H., Zhou, J., Tian, W. et al. DNA methylation atlas of the mouse brain at single-cell resolution. Nature 598, 120\u2013128 (2021). ",(0,r.kt)("a",{parentName:"p",href:"https://doi.org/10.1038/s41586-020-03182-8"},"https://doi.org/10.1038/s41586-020-03182-8")),(0,r.kt)("p",null,"Please cite the following preprint for the WARP repository and website:"),(0,r.kt)("p",null,"Degatano, K.; Awdeh, A.; Dingman, W.; Grant, G.; Khajouei, F.; Kiernan, E.; Konwar, K.; Mathews, K.; Palis, K.; Petrillo, N.; Van der Auwera, G.; Wang, C.; Way, J.; Pipelines, W. WDL Analysis Research Pipelines: Cloud-Optimized Workflows for Biological Data Processing and Reproducible Analysis. Preprints 2024, 2024012131. ",(0,r.kt)("a",{parentName:"p",href:"https://doi.org/10.20944/preprints202401.2131.v1"},"https://doi.org/10.20944/preprints202401.2131.v1")),(0,r.kt)("h2",{id:"consortia-support"},"Consortia support"),(0,r.kt)("p",null,"This pipeline is supported by the ",(0,r.kt)("a",{parentName:"p",href:"https://braininitiative.nih.gov/"},"BRAIN Initiative")," (BICCN and BICAN). "),(0,r.kt)("p",null,"If your organization also uses this pipeline, we would like to list you! Please reach out to us by contacting the ",(0,r.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"WARP Pipeline Development team"),"."),(0,r.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,r.kt)("p",null,"We are immensely grateful to the members of the BRAIN Initiative (",(0,r.kt)("a",{parentName:"p",href:"https://brainblog.nih.gov/brain-blog/brain-issues-suite-funding-opportunities-advance-brain-cell-atlases-through-centers"},"BICAN")," Sequencing Working Group) and ",(0,r.kt)("a",{parentName:"p",href:"https://nida.nih.gov/about-nida/organization/divisions/division-neuroscience-behavior-dnb/basic-research-hiv-substance-use-disorder/scorch-program"},"SCORCH")," for their invaluable and exceptional contributions to this pipeline. Our heartfelt appreciation goes to our collaborators and the developers of these tools, Hanqing Liu, Wei Tian, Wubin Ding, Huaming Chen, Chongyuan Luo, Jingtian Zhou, and the entire laboratory of Joseph Ecker. "),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"For questions, suggestions, or feedback related to the snm3C pipeline, please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team"),". Your feedback is valuable for improving the pipeline and addressing any issues that may arise during its usage."))}u.isMDXComponent=!0}}]);