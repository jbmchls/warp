"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[275],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=s(a),h=r,c=u["".concat(p,".").concat(h)]||u[h]||d[h]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5288:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const l={sidebar_position:1,slug:"/Pipelines/Imputation_Pipeline/README"},i="Imputation Overview",o={unversionedId:"Pipelines/Imputation_Pipeline/README",id:"Pipelines/Imputation_Pipeline/README",title:"Imputation Overview",description:"| Pipeline Version | Date Updated | Documentation Author | Questions or Feedback |",source:"@site/docs/Pipelines/Imputation_Pipeline/README.md",sourceDirName:"Pipelines/Imputation_Pipeline",slug:"/Pipelines/Imputation_Pipeline/README",permalink:"/warp/docs/Pipelines/Imputation_Pipeline/README",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Imputation_Pipeline/README.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1699284080,formattedLastUpdatedAt:"Nov 6, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/Pipelines/Imputation_Pipeline/README"},sidebar:"docsSidebar",previous:{title:"VCF Overview: Illumina Genotyping Array",permalink:"/warp/docs/Pipelines/Illumina_Genotyping_Arrays_Pipeline/Illumina_genotyping_array_spec"},next:{title:"Creating the Imputation Pipeline's Modified 1000 Genomes Reference",permalink:"/warp/docs/Pipelines/Imputation_Pipeline/references_overview"}},p={},s=[{value:"Introduction to the Imputation pipeline",id:"introduction-to-the-imputation-pipeline",level:2},{value:"Set-up",id:"set-up",level:2},{value:"Workflow installation and requirements",id:"workflow-installation-and-requirements",level:3},{value:"Input descriptions",id:"input-descriptions",level:3},{value:"Imputation reference panel",id:"imputation-reference-panel",level:3},{value:"Generation of the modified 1000 Genomes reference",id:"generation-of-the-modified-1000-genomes-reference",level:4},{value:"Workflow tasks and tools",id:"workflow-tasks-and-tools",level:2},{value:"Workflow outputs",id:"workflow-outputs",level:2},{value:"Important notes",id:"important-notes",level:2},{value:"Price estimates",id:"price-estimates",level:2},{value:"Contact us",id:"contact-us",level:2},{value:"Licensing",id:"licensing",level:2}],m={toc:s},u="wrapper";function d(t){let{components:e,...l}=t;return(0,r.kt)(u,(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"imputation-overview"},"Imputation Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Documentation Author"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases?q=Imputation_v1.0.0&expanded=true"},"Imputation_v1.0.0")),(0,r.kt)("td",{parentName:"tr",align:"center"},"August, 2021"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"mailto:ekiernan@broadinstitute.org"},"Elizabeth Kiernan")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Please file GitHub issues in warp or contact ",(0,r.kt)("a",{parentName:"td",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team"))))),(0,r.kt)("h2",{id:"introduction-to-the-imputation-pipeline"},"Introduction to the Imputation pipeline"),(0,r.kt)("p",null,"The Imputation pipeline imputes missing genotypes from either a multi-sample VCF or an array of single sample VCFs using a large genomic reference panel. It is based on the ",(0,r.kt)("a",{parentName:"p",href:"https://imputationserver.readthedocs.io/en/latest/pipeline/"},"Michigan Imputation Server pipeline"),". Overall, the pipeline filters, phases, and performs imputation on a multi-sample VCF. It outputs the imputed VCF along with key imputation metrics."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5077).Z,width:"1820",height:"1112"})),(0,r.kt)("h2",{id:"set-up"},"Set-up"),(0,r.kt)("h3",{id:"workflow-installation-and-requirements"},"Workflow installation and requirements"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/arrays/imputation/Imputation.wdl"},"Imputation workflow")," is written in the Workflow Description Language (WDL) and can be deployed using a WDL-compatible execution engine like  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/cromwell"},"Cromwell"),", a GA4GH compliant, flexible workflow management system that supports multiple computing platforms."),(0,r.kt)("p",null,"To identify the latest workflow version and release notes, please see the Imputation workflow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/arrays/imputation/Imputation.changelog.md"},"changelog"),". "),(0,r.kt)("p",null,"The latest release of the workflow, example data, and dependencies are available from the WARP releases page. To discover and search releases, use the WARP command-line tool ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/wreleaser"},"Wreleaser"),"."),(0,r.kt)("admonition",{title:"Try the Imputation pipeline in Terra",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can run the pipeline in the ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/warp-pipelines/Imputation"},"Imputation workspace")," on ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio"},"Terra"),", a cloud-optimized scalable bioinformatics platform. The workspace contains a preconfigured workflow, example inputs, instructions, and cost-estimates. ")),(0,r.kt)("h3",{id:"input-descriptions"},"Input descriptions"),(0,r.kt)("p",null,"The table below describes each of the Imputation pipeline inputs. The workflow requires ",(0,r.kt)("strong",{parentName:"p"},"either")," a multi-sample VCF or an array of single sample VCFs. These samples must be from the same species and genotyping chip."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You must have two or more samples to run the pipeline.")," "),(0,r.kt)("p",null,"However, the pipeline is cost-optimized for between 100 and 1,000 samples. After 1,000 samples, the cost per sample no longer decreases (see the ",(0,r.kt)("a",{parentName:"p",href:"#price-estimates"},"Price estimates")," section). "),(0,r.kt)("p",null,"For examples of how to specify each input in a configuration file, as well as cloud locations for different example input files, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/arrays/imputation/example_inputs.json"},"example input configuration file (JSON)"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChunkLength"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of chunks; default set to 25 MB."),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chunkOverlaps"),(0,r.kt)("td",{parentName:"tr",align:null},"Padding adding to the beginning and end of each chunk to reduce edge effects; default set 5 MB."),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"multi_sample_vcf"),(0,r.kt)("td",{parentName:"tr",align:null},"Merged VCF containing multiple samples; can also use an array of individual VCFs."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"multi_sample_vcf_index"),(0,r.kt)("td",{parentName:"tr",align:null},"Merged index for the merged VCF; can also use an array of index files if using an array of VCFs."),(0,r.kt)("td",{parentName:"tr",align:null},"Index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"single_sample_vcfs"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of VCFs, one for each sample; can be used in lieu of a merged VCF containing all samples."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"single_sample_vcf_indices"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of indices, one for each sample; can be used in lieu of a merged index for a multi-sample VCF."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of index files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"perform_extra_qc_steps"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean to indicate if additional QC steps should be performed before imputing; when true, sites with call rates below 95% or low Hardy Weinberg Equilibrium (HWE) p-value are removed before imputation. Default is set to false."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"optional_qc_max_missing"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional float used for the additional QC steps that sets a max threshold for the maximum rate of missing data allowed for sites; default set to 0.05."),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"optional_qc_hwe"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional HWE p-value when performing additional QC steps; default set to 0.000001."),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ref_dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference dictionary."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contigs"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings defining which contigs (chromsomes) should be used for the reference panel."),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reference_panel_path"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the cloud storage containing the reference panel files for all contigs."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"genetics_maps_eagle"),(0,r.kt)("td",{parentName:"tr",align:null},"Genetic map file for phasing."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output_callset_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Output callset name."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"split_output_to_single_sample"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean to split out the final combined VCF to individual sample VCFs; set to false by default."),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merge_ssvcf_mem_gb"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory allocation for MergeSingleSampleVcfs (in GB)."),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frac_well_imputed_threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Threshold for the fraction of well-imputed sites; default set to 0.9."),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chunks_fail_threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum threshold for the number of chunks allowed to fail; default set to 1."),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vcf_suffix"),(0,r.kt)("td",{parentName:"tr",align:null},"File extension used for the VCF in the reference panel."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vcf_index_suffix"),(0,r.kt)("td",{parentName:"tr",align:null},"File extension used for the VCF index in the reference panel."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bcf_suffix"),(0,r.kt)("td",{parentName:"tr",align:null},"File extension used for the BCF in the reference panel."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bcf_index_suffix"),(0,r.kt)("td",{parentName:"tr",align:null},"File extension used for the BCF index in the reference panel."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"m3vcf_suffix"),(0,r.kt)("td",{parentName:"tr",align:null},"File extension used for the M3VCF in the reference panel."),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h3",{id:"imputation-reference-panel"},"Imputation reference panel"),(0,r.kt)("p",null,"The Imputation workflow's reference panel files are hosted in a ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/storage/browser/gcp-public-data--broad-references/hg19/v0/1000G_reference_panel;tab=objects?prefix=&forceOnObjectsSortingFiltering=false"},"public Google Bucket"),". For the cloud-path (URI) to the files, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/arrays/imputation/example_inputs.json"},"example input configuration"),"."),(0,r.kt)("h4",{id:"generation-of-the-modified-1000-genomes-reference"},"Generation of the modified 1000 Genomes reference"),(0,r.kt)("p",null,"Initial tests of the Imputation workflow followed by assessments of polygenic risk score revealed that disease risk scores were lower when computed from imputed array data as opposed to whole-genome sequencing data. This was found to be due to incorrectly genotyped sites in the 1000G reference panel. As a result, the 1000G reference files were modified for the Imputation pipeline as described in the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Imputation_Pipeline/references_overview"},"references overview"),". You can view the original, unmodified 1000G VCFs ",(0,r.kt)("a",{parentName:"p",href:"https://ftp.1000genomes.ebi.ac.uk/vol1/ftp/release/20130502/"},"here"),"."),(0,r.kt)("admonition",{title:"X-chromosome not imputed",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Currently, the pipeline does not perform imputation on the X-chromosome and no reference panels are needed for the X-chromosome. Any sites identified on the X-chromosome after array analysis are merged back into the VCF after the imputation steps. ")),(0,r.kt)("h2",{id:"workflow-tasks-and-tools"},"Workflow tasks and tools"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/arrays/imputation/Imputation.wdl"},"Imputation workflow")," imports a series of tasks from the ImputationTasks WDL, which is hosted in the Broad ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/tasks/broad"},"tasks library"),". The table below describes each workflow task, including the task name, tools, relevant software and non-default parameters. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Task name (alias) in WDL"),(0,r.kt)("th",{parentName:"tr",align:null},"Tool"),(0,r.kt)("th",{parentName:"tr",align:null},"Software"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MergeSingleSampleVcfs"),(0,r.kt)("td",{parentName:"tr",align:null},"merge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,r.kt)("td",{parentName:"tr",align:null},"If an array of single sample VCFs are pipeline input, the task merges them into a single VCF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetIDs (SetIdsVcfToImpute)"),(0,r.kt)("td",{parentName:"tr",align:null},"annotate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools"),", bash"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds variant IDs to the combined input VCF to create a new VCF. Sorts the alleles for a given variant ID so that REF:ALT is lexicographically consistent across IDs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExtractIDs (ExtractIdsVcfToImpute)"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,r.kt)("td",{parentName:"tr",align:null},"Extracts the variant IDs from the SortIDs output VCF to a new \u201c.ids\u201d file so that any missing variants can be added back to the final VCF after imputation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CountSamples"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,r.kt)("td",{parentName:"tr",align:null},"Uses the merged input VCF file to count the number of samples and output a TXT file containing the count.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CalculateChromsomeLength"),(0,r.kt)("td",{parentName:"tr",align:null},"grep"),(0,r.kt)("td",{parentName:"tr",align:null},"bash"),(0,r.kt)("td",{parentName:"tr",align:null},"Reads chromosome lengths from the reference dictionary and uses these to generate chunk intervals for the GenerateChunk task.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GenerateChunk"),(0,r.kt)("td",{parentName:"tr",align:null},"SelectVariants"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,r.kt)("td",{parentName:"tr",align:null},"Performs site filtering by selecting SNPs only and excluding InDels, removing duplicate sites from the VCF, selecting biallelic variants, excluding symbolic/mixed variants, and removing sites with a maximum fraction of samples with no-call genotypes greater than 0.1. Also subsets to only a specified chunk of the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptionalQCSites"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://vcftools.sourceforge.net/"},"vcftools"),", ",(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,r.kt)("td",{parentName:"tr",align:null},"If the boolean extra_qc_steps is true, performs additional QC steps; excludes sites with more than 95% missing data and assesses sites for Hardy Weinberg Equilibrium, excluding any site with a p-value less than 0.000001.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CountVariantsInChunks"),(0,r.kt)("td",{parentName:"tr",align:null},"CountVariants"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,r.kt)("td",{parentName:"tr",align:null},"Counts variants in the filtered VCF file; Returns the number of chunks in the array and in the reference file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CheckChunks"),(0,r.kt)("td",{parentName:"tr",align:null},"convert, index"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,r.kt)("td",{parentName:"tr",align:null},"Confirms that there are no chunks where less than 3 sites or less than 50% of the sites in the array are also in the reference panel; if valid, creates a new VCF output.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PhaseVariantsEagle"),(0,r.kt)("td",{parentName:"tr",align:null},"eagle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://alkesgroup.broadinstitute.org/Eagle/Eagle_manual.html"},"Eagle2")),(0,r.kt)("td",{parentName:"tr",align:null},"Performs phasing on the filtered, validated VCF using the phased reference panel; allows for REF/ALT swaps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Minimac4"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimac4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://genome.sph.umich.edu/wiki/Minimac4_Documentation"},"minimac4"),", ",(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,r.kt)("td",{parentName:"tr",align:null},"Performs imputation on the prephased VCF; parameterized to include variants that were genotyped but NOT in the reference panel and to specify a minRatio of 0.00001.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AggregateImputationQCMetrics"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"R"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses an R script to take calculate metrics from minimac4 output info file, including total sites, total sites with variants, and sites with an ",(0,r.kt)("a",{parentName:"td",href:"https://genome.sph.umich.edu/wiki/Minimac3_Info_File"},"R2 metric")," of 0.3 (total_sites_r2_gt_0.3); adds the metrics to a new TSV output.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UpdateHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"UpdateVCFSequenceDictionary"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,r.kt)("td",{parentName:"tr",align:null},"Updates the header of the imputed VCF; adds contig lengths")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SeparateMultiallelics"),(0,r.kt)("td",{parentName:"tr",align:null},"norm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,r.kt)("td",{parentName:"tr",align:null},"Splits multiallelic sites in the imputed VCF into biallelic records.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoveSymbolicAlleles"),(0,r.kt)("td",{parentName:"tr",align:null},"SelectVariants"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes SYMBOLIC alleles from the output VCF of the SeparateMultiallelics.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetIds"),(0,r.kt)("td",{parentName:"tr",align:null},"annotate, index"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,r.kt)("td",{parentName:"tr",align:null},"Sorts the alleles in the variant ID from the RemoveSymbolicAllele output VCF so that REF:ALT is lexicographically consistent across IDs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GatherVcfs"),(0,r.kt)("td",{parentName:"tr",align:null},"GatherVCFs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,r.kt)("td",{parentName:"tr",align:null},"Gathers the array of imputed VCFs and merges them into one VCF output.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExtractIDs"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,r.kt)("td",{parentName:"tr",align:null},"Extracts the variant IDs from the imputed VCF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FindSitesUniqueToFileTwoOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses the IDs extracted from imputed VCF and those extracted from original VCF to identify missing variant sites from the original VCF; outputs the IDs to a file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SelectVariantsByIds"),(0,r.kt)("td",{parentName:"tr",align:null},"SelectVariants"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,r.kt)("td",{parentName:"tr",align:null},"Selects from the original input VCF any sites which were not included in the imputed VCF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoveAnnotations"),(0,r.kt)("td",{parentName:"tr",align:null},"annotate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes the FORMAT and INFO annotations from the new VCF generated by the SelectVariantsbyIds task that contains the missing variants.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InterleaveVariants"),(0,r.kt)("td",{parentName:"tr",align:null},"MergeVCFs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK")),(0,r.kt)("td",{parentName:"tr",align:null},"Combines the missing variants from the original VCF and the imputed variants into a new VCF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MergeImputationQCMetrics"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"R"),(0,r.kt)("td",{parentName:"tr",align:null},'Uses an R script to calculate the fraction of well-imputed sites and outputs them to a TXT file; the fraction of "well-imputed" sites is based on the minimac reported R2 metric, with R2>0.3 being "well-imputed." Since homomorphic sites lead to an R2 value of 0, we report the fraction of sites with any variation which are well-imputed in addition to the fraction of total sites.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StoreChunksInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"R"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses an R script to record the coordinates of each imputation chunk, number of sites in the original array, and number of sites in the original array which are also in the reference panel, for each imputation chunk.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SplitMultiSampleVcf"),(0,r.kt)("td",{parentName:"tr",align:null},"split"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/bcftools/bcftools.html"},"bcftools")),(0,r.kt)("td",{parentName:"tr",align:null},"If boolean is set to true, will split the interleave variants VCF into single sample VCFs.")))),(0,r.kt)("h2",{id:"workflow-outputs"},"Workflow outputs"),(0,r.kt)("p",null,"The table below summarizes the workflow outputs. If running the workflow on Cromwell, these outputs are found in the task execution directory."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"imputed_single_sample_vcfs"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of imputed single sample VCFs from the SplitMultiSampleVcf task."),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"imputed_single_sample_vcf_indices"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of indices for the imputed VCFs from the SplitMultiSampleVcf task"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"imputed_multisample_vcf"),(0,r.kt)("td",{parentName:"tr",align:null},"VCF from the InterleaveVariants task; contains imputed variants as well as missing variants from the input VCF."),(0,r.kt)("td",{parentName:"tr",align:null},"VCF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"imputed_multisample_vcf_index"),(0,r.kt)("td",{parentName:"tr",align:null},"Index file for VCF from the InterleaveVariants task."),(0,r.kt)("td",{parentName:"tr",align:null},"Index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aggregated_imputation_metrics"),(0,r.kt)("td",{parentName:"tr",align:null},'Aggregated QC metrics from the MergeImputationQcMetrics task; reports the fraction of sites well-imputed and outputs to TXT file; fraction of "well-imputed" is based on the minimac reported R2 metric, with R2>0.3 being "well-imputed." Since homomorphic sites lead to an R2 value of 0, we report the fraction of sites with any variation which are well-imputed in addition to the fraction of total sites.'),(0,r.kt)("td",{parentName:"tr",align:null},"TXT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chunks_info"),(0,r.kt)("td",{parentName:"tr",align:null},"TSV from StoreChunksInfo task; contains the chunk intervals as well as the number of variants in the array."),(0,r.kt)("td",{parentName:"tr",align:null},"TSV")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"failed_chunks"),(0,r.kt)("td",{parentName:"tr",align:null},"File with the failed chunks from the StoreChunksInfo task."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n_failed_chunks"),(0,r.kt)("td",{parentName:"tr",align:null},"File with the number of failed chunks from the StoreChunksInfo task."),(0,r.kt)("td",{parentName:"tr",align:null},"File")))),(0,r.kt)("h2",{id:"important-notes"},"Important notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Runtime parameters are optimized for Broad's Google Cloud Platform implementation.")),(0,r.kt)("h2",{id:"price-estimates"},"Price estimates"),(0,r.kt)("p",null,"The pipeline is cost-optimized for between 100 and 1,000 samples, where the cost per sample continues to decrease until 1,000 samples are run. Cost estimates per sample are provided below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Cohort size ( # samples)"),(0,r.kt)("th",{parentName:"tr",align:null},"Cost per sample ($)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"0.8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"0.11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"0.024")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13.5 K"),(0,r.kt)("td",{parentName:"tr",align:null},"0.025")))),(0,r.kt)("h2",{id:"contact-us"},"Contact us"),(0,r.kt)("p",null,"Help us make our tools better by contacting ",(0,r.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team")," for pipeline-related suggestions or questions."),(0,r.kt)("h2",{id:"licensing"},"Licensing"),(0,r.kt)("p",null,"Copyright Broad Institute, 2020 | BSD-3"),(0,r.kt)("p",null,"The workflow script is released under the ",(0,r.kt)("strong",{parentName:"p"},"WDL open source code license (BSD-3)")," (full license text at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/LICENSE"},"https://github.com/broadinstitute/warp/blob/master/LICENSE"),"). However, please note that the programs it calls may be subject to different licenses. Users are responsible for checking that they are authorized to run all programs before running this script."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/gatk/blob/master/LICENSE.TXT"},"GATK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/picard/blob/master/LICENSE.txt"},"Picard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alkesgroup.broadinstitute.org/Eagle/#x1-340007"},"Eagle2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/statgen/Minimac4/blob/master/LICENSE"},"minimac4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/samtools/bcftools/blob/develop/LICENSE"},"bcftools"),"\n-",(0,r.kt)("a",{parentName:"li",href:"http://vcftools.sourceforge.net/license.html"},"vcftools"))))}d.isMDXComponent=!0},5077:function(t,e,a){e.Z=a.p+"assets/images/imputation-fa25d2e8cbb65cb07b1da17932ca6be7.png"}}]);