"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[1548],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return h}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(i),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return i?n.createElement(h,o(o({ref:t},p),{},{components:i})):n.createElement(h,o({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1669:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d}});var n=i(3117),r=(i(7294),i(3905));const a={sidebar_position:2},o="RNA with UMIs v1.0.16 Methods",s={unversionedId:"Pipelines/RNA_with_UMIs_Pipeline/rna-with-umis.methods",id:"Pipelines/RNA_with_UMIs_Pipeline/rna-with-umis.methods",title:"RNA with UMIs v1.0.16 Methods",description:"Below we provide an example methods section for publications using the RNA with UMIs pipeline. For the complete pipeline documentation, see the RNA with UMIs Overview.",source:"@site/docs/Pipelines/RNA_with_UMIs_Pipeline/rna-with-umis.methods.md",sourceDirName:"Pipelines/RNA_with_UMIs_Pipeline",slug:"/Pipelines/RNA_with_UMIs_Pipeline/rna-with-umis.methods",permalink:"/warp/docs/Pipelines/RNA_with_UMIs_Pipeline/rna-with-umis.methods",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/RNA_with_UMIs_Pipeline/rna-with-umis.methods.md",tags:[],version:"current",lastUpdatedBy:"Jessica Way",lastUpdatedAt:1731515385,formattedLastUpdatedAt:"Nov 13, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"RNA with UMIs Overview",permalink:"/warp/docs/Pipelines/RNA_with_UMIs_Pipeline/README"},next:{title:"Slide-seq Overview",permalink:"/warp/docs/Pipelines/SlideSeq_Pipeline/README"}},l={},d=[{value:"Methods",id:"methods",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rna-with-umis-v1016-methods"},"RNA with UMIs v1.0.16 Methods"),(0,r.kt)("p",null,"Below we provide an example methods section for publications using the RNA with UMIs pipeline. For the complete pipeline documentation, see the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/RNA_with_UMIs_Pipeline/README"},"RNA with UMIs Overview"),"."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"Data preprocessing, gene counting, and metric calculation were performed using the RNA with UMIs v1.0.16 pipeline, which uses Picard, fgbio v1.4.0, fastp v0.20.1, FastQC v0.11.9, STAR v2.7.10a, Samtools v1.11, UMI-tools v1.1.1, GATK 4.5.0.0, and RNA-SeQC v2.4.2 with default tool parameters unless otherwise specified. Reference files are publicly available in the ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/storage/browser/gcp-public-data--broad-references;tab=objects?pageState=(%22StorageObjectListTable%22:(%22f%22:%22%255B%255D%22))&prefix=&forceOnObjectsSortingFiltering=false"},"Broad References")," Google Bucket and are also listed in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/pipelines/broad/rna_seq/test_inputs"},"example configuration files")," in the in the WARP repository."),(0,r.kt)("p",null,"Paired-end FASTQ files were first converted to an unmapped BAM (uBAM) using Picard's (v3.0.0) FastqToSam tool with SORT_ORDER = unsorted. (If a read group unmapped BAM file is used as input for the pipeline, this step is skipped.) Unique molecular identifiers (UMIs) were extracted from the uBAM using fgbio's ExtractUmisFromBam and stored in the RX read tag."),(0,r.kt)("p",null,"After the extraction of UMIs, reads that failed quality control checks performed by the sequencing platform were filtered and the uBAM was converted to FASTQ files using Picard's FastqToSam tool. Illumina TruSeq adapter and poly(A) sequences were clipped from the reads using fastp. Picard's FastqToSam tool was again used to convert the FASTQ files back to a uBAM. This uBAM was used to calculate quality control metrics using FastQC."),(0,r.kt)("p",null,"Reads were aligned using STAR to the GRCh38 (hg38) reference with HLA, ALT, and decoy contigs removed with gene annotations from GENCODE v34 (or GRCh37 ","[hg19]",' with gene annotations from GENCODE v19). The --readFilesType and --readFilesCommand parameters were set to "SAM PE" and "samtools view -h", respectively, to indicate that the input was a BAM file. To specify that the output was an unsorted BAM that included unmapped reads, --outSAMtype was set to "BAM Unsorted" and --outSAMunmapped was set to "Within". A transcriptome-aligned BAM was also output with --quantMode = TranscriptomeSAM. To match ',(0,r.kt)("a",{parentName:"p",href:"https://www.encodeproject.org/data-standards/rna-seq/long-rnas/"},"ENCODE bulk RNA-seq data standards"),', the alignment was performed with parameters --outFilterType = BySJout, --outFilterMultimapNmax = 20, --outFilterMismatchNmax = 999, --alignIntronMin = 20, --alignIntronMax = 1000000, --alignMatesGapMax = 1000000, --alignSJoverhangMin = 8, and --alignSJDBoverhangMin = 1. The fraction of reads required to match the reference was set with --outFilterMatchNminOverLread = 0.33 and the fraction of allowable mismatches to read length was set with --outFilterMismatchNoverLmax = 0.1. Chimeric alignments were included with --chimSegmentMin = 15, where 15 was the minimum length of each segment, and --chimMainSegmentMultNmax = 1 to prevent main chimeric segments from mapping to multiple sites. To output chimeric segments with soft-clipping in the aligned BAM, --chimOutType was set to "WithinBAM SoftClip". A maximum of 20 protruding bases at the ends of alignments was allowed with --alignEndsProtrude set to "20 ConcordantPair" to prevent reads from small cDNA fragments that were sequenced into adapters from being dropped. '),(0,r.kt)("p",null,'Following alignment, both BAM files were sorted by coordinate with Picard\'s (v2.6.11) SortSam tool. UMI-tools was then used to further divide putative duplicates into subgroups based on UMI and sequencing errors in UMIs were corrected. To specify the tag where the UMIs were stored, --extract-umi-method was set to "tag" and --umi-tag was set to "RX". Unmapped reads were included in the output file with --unmapped-reads = use. Tagged BAM files were output using the option --output-bam. SortSam was used again to sort the BAM files by queryname for Picard\'s (v2.26.11) MarkDuplicates tool. MarkDuplicates was used to mark PCR duplicates and calculate duplicate metrics. After duplicate marking, BAM files were sorted by coordiante using SortSam to facilitate downstream analysis. The transcriptome-aligned, duplicate-marked BAM was sorted and postprocessed using GATK\'s PostProcessReadsForRSEM tool for compatability with RSEM.'),(0,r.kt)("p",null,'The genome-aligned, duplicate-marked BAM file was then used to calculate summary metrics using RNASeQC, Picard\'s (v2.26.11) CollectRNASeqMetrics and (v3.0.0) CollectMultipleMetrics tools, and GATK\'s GetPileupSummaries and CalculateContamination tools. CollectMultipleMetrics was used with the programs \u201cCollectInsertSizeMetrics\u201d and \u201cCollectAlignmentSummaryMetrics\u201d. GetPileupSummaries was run with the read filters, "WellformedReadFilter" and "MappingQualityAvailableReadFilter" disabled.'),(0,r.kt)("p",null,"The final outputs of the RNA with UMIs pipeline included metrics generated before alignment with FastQC, a transcriptome-aligned, duplicate-marked BAM file with duplication metrics, and a genome-aligned, duplicate-marked BAM file with corresponding index, duplication metrics, and metrics generated with RNASeQC, Picard, and GATK tools."))}u.isMDXComponent=!0}}]);