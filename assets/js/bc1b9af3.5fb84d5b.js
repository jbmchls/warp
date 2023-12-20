"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[3893],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return g}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(i),u=n,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return i?a.createElement(g,l(l({ref:t},d),{},{components:i})):a.createElement(g,l({ref:t},d))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},2299:function(e,t,i){i.r(t),i.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return c}});var a=i(3117),n=(i(7294),i(3905));const r={sidebar_position:2},l="Whole Genome Germline Single Sample v3.1.17 Methods (Default workflow)",o={unversionedId:"Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/wgs.methods",id:"Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/wgs.methods",title:"Whole Genome Germline Single Sample v3.1.17 Methods (Default workflow)",description:"The following contains a detailed methods description outlining the pipeline\u2019s process, software, and tools that can be modified for a publication methods section.",source:"@site/docs/Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/wgs.methods.md",sourceDirName:"Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline",slug:"/Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/wgs.methods",permalink:"/warp/docs/Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/wgs.methods",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/wgs.methods.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1703084290,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Whole Genome Germline Single Sample Overview",permalink:"/warp/docs/Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/README"},next:{title:"WDL cost optimization: Tips and tricks when working with Google Cloud in Terra",permalink:"/warp/docs/Best_practices/GC_cost_optimization"}},s={},c=[{value:"Detailed methods for the default Whole Genome Germline Single Sample workflow",id:"detailed-methods-for-the-default-whole-genome-germline-single-sample-workflow",level:2},{value:"Pre-processing and quality control metrics",id:"pre-processing-and-quality-control-metrics",level:3},{value:"Variant calling",id:"variant-calling",level:3},{value:"Detailed methods for the Functional Equivalence mode of the Whole Genome Germline Single Sample workflow",id:"detailed-methods-for-the-functional-equivalence-mode-of-the-whole-genome-germline-single-sample-workflow",level:2},{value:"Pre-processing and quality control metrics",id:"pre-processing-and-quality-control-metrics-1",level:3},{value:"Variant calling",id:"variant-calling-1",level:3},{value:"Previous methods documents",id:"previous-methods-documents",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"whole-genome-germline-single-sample-v3117-methods-default-workflow"},"Whole Genome Germline Single Sample v3.1.17 Methods (Default workflow)"),(0,n.kt)("p",null,"The following contains a detailed methods description outlining the pipeline\u2019s process, software, and tools that can be modified for a publication methods section."),(0,n.kt)("h2",{id:"detailed-methods-for-the-default-whole-genome-germline-single-sample-workflow"},"Detailed methods for the default Whole Genome Germline Single Sample workflow"),(0,n.kt)("p",null,"Preprocessing and variant calling was performed using the WholeGenomeGermlineSingleSample v3.1.17 pipeline using Picard v2.26.10, GATK v4.3.0.0, and Samtools v1.11 with default tool parameters unless otherwise specified. All reference files are available in the public ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/storage/browser/gcp-public-data--broad-references/hg38/v0"},"Broad References Google Bucket"),". The pipeline follows GATK Best Practices as previously described (",(0,n.kt)("a",{parentName:"p",href:"https://www.oreilly.com/library/view/genomics-in-the/9781491975183/"},"Van der Auwera & O'Connor, 2020"),") as well as the Functional Equivalence specification (",(0,n.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41467-018-06159-4"},"Regier et al., 2018"),")."),(0,n.kt)("h3",{id:"pre-processing-and-quality-control-metrics"},"Pre-processing and quality control metrics"),(0,n.kt)("p",null,'Whole genome paired-end reads in unmapped BAM (uBAM) format were first scattered to perform QC and alignment in parallel. Quality metrics were calculated using Picard CollectQualityYieldMetrics. uBAMs were converted to FASTQ using Picard SamToFastq and aligned to the Hg38 reference genome using BWA mem v0.7.15 with batch size set using -K 100000000. Metadata from the uBAMs was then merged with the aligned BAMs using Picard MergeBamAlignment with the parameters --SORT_ORDER="unsorted", allowing the data to be grouped by read name for efficient downstream marking of duplicates, and --UNMAP_CONTAMINANT_READS=true, to remove cross-species contamination.'),(0,n.kt)("p",null,"QC metrics (base distribution by cycle, insert size metrics, mean quality by cycle, and quality score distribution) were collected for the aligned, unsorted read-groups using Picard CollectMultipleMetrics. The read-group specific aligned BAMs were then aggregated and duplicate reads were flagged using Picard MarkDuplicates assuming queryname-sorted order and the parameter --OPTICAL_DUPLICATE_PIXEL_DISTANCE=2500, which is appropriate for patterned flowcells."),(0,n.kt)("p",null,"The aggregated BAM file was then sorted using Picard SortSam with coordinate sort order. The fingerprints of separate read groups were verified using Picard CrosscheckFingerprints (",(0,n.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41467-020-17453-5"},"Javed et al., 2020"),") with a LOD threshold of -20. Cross-sample contamination was checked using verifyBamID2."),(0,n.kt)("p",null,"The aligned BAM was then scattered for parallelization during base recalibration. A Base Quality Score Recalibration (BQSR) table was created with GATK BaseRecalibrator using the original base qualities (under the OQ Sam tag). The model was applied using ApplyBQSR with the static-quantized-quals option used according to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CCDG/Pipeline-Standardization/blob/master/PipelineStandard.md"},"Functional Equivalence specification")," (",(0,n.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41467-018-06159-4"},"Regier et al., 2018"),"). Recalibrated BAM files were then merged using Picard GatherBamFiles."),(0,n.kt)("p",null,"QC metrics were calculated for the base-recalibrated BAM using Picard CollectMultipleMetrics. Fingerprints were verified using Picard CheckFingerprint and high duplication levels and chimerism were checked using the calculated summary metrics."),(0,n.kt)("p",null,"To evaluate the coverage and performance of the whole genome sequencing experiment, the BAM was assessed using the Picard tools CollectWGSMetrics and CollectRawWgsMetrics."),(0,n.kt)("p",null,"The final base-recalibrated BAM was converted to CRAM using Samtools view and validated using Picard ValidateSamFile."),(0,n.kt)("h3",{id:"variant-calling"},"Variant calling"),(0,n.kt)("p",null,"Prior to variant calling, the variant calling interval list was split to enable parallelization. Using the GATK PrintReads tool, the WellformedReadFilter was applied to reads. Variant calling was then applied to reads that passed the filter using GATK (v3.5) HaplotypeCaller with the parameters --max_alternate_alleles 3 (sufficient for human data),  --ERC GVCF, and --read_filter OverclippedRead (to reduce false positives resulting from contamination). The resulting GVCFs were merged using Picard MergeVcfs and then reblocked using GATK ReblockGVCF with -GQB 20 -GQB 30 -GQB 40. The final reblocked GVCF file was validated using GATK ValidateVariants. Variant metrics were calculated using Picard CollectVariantCallingMetrics."),(0,n.kt)("p",null,"The pipeline\u2019s final outputs included metrics, validation reports, an aligned CRAM with index, and a reblocked GVCF containing variant calls with an accompanying index."),(0,n.kt)("h2",{id:"detailed-methods-for-the-functional-equivalence-mode-of-the-whole-genome-germline-single-sample-workflow"},"Detailed methods for the Functional Equivalence mode of the Whole Genome Germline Single Sample workflow"),(0,n.kt)("p",null,"Preprocessing and variant calling was performed using the WholeGenomeGermlineSingleSample v3.1.17 pipeline using v2.26.10, GATK v4.3.0.0, and Samtools v1.11 with default tool parameters unless otherwise specified. All reference files are available in the public ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/storage/browser/gcp-public-data--broad-references/hg38/v0"},"Broad References Google Bucket"),". The pipeline is functionally equivalent (as described in GATK Support: ",(0,n.kt)("a",{parentName:"p",href:"https://gatk.broadinstitute.org/hc/en-us/articles/4410456501915"},"https://gatk.broadinstitute.org/hc/en-us/articles/4410456501915"),") to DRAGEN v3.4.12. "),(0,n.kt)("h3",{id:"pre-processing-and-quality-control-metrics-1"},"Pre-processing and quality control metrics"),(0,n.kt)("p",null,"Whole genome paired-end reads in unmapped BAM (uBAM) format were first scattered to perform QC and alignment in parallel. Quality metrics were calculated using Picard CollectQualityYieldMetrics. uBAMs were converted to FASTQ using Picard SamToFastq and aligned to a masked version of the hg38 reference genome (reference files available at gs://gcp-public-data--broad-references/hg38/v0/dragen_reference/) using the DRAGMAP aligner. Metadata from the uBAMs was then merged with the aligned BAMs using Picard MergeBamAlignment with the parameter --UNMAP_CONTAMINANT_READS=false to maintain functional equivalence to the DRAGEN hardware."),(0,n.kt)("p",null,"QC metrics (base distribution by cycle, insert size metrics, mean quality by cycle, and quality score distribution) were collected for the aligned, unsorted read-groups using Picard CollectMultipleMetrics. The read-group specific aligned BAMs were then aggregated and duplicate reads were flagged using Picard MarkDuplicates assuming queryname-sorted order and the parameter --OPTICAL_DUPLICATE_PIXEL_DISTANCE=2500, which is appropriate for patterned flowcells."),(0,n.kt)("p",null,"The aggregated BAM file was then sorted using Picard SortSam with coordinate sort order. The fingerprints of separate read groups were verified using Picard CrosscheckFingerprints (",(0,n.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41467-020-17453-5"},"Javed et al., 2020"),") with a LOD threshold of -20. Cross-sample contamination was checked using verifyBamID2."),(0,n.kt)("p",null,"QC metrics were calculated for the BAM using Picard CollectMultipleMetrics. Fingerprints were verified using Picard CheckFingerprint and high duplication levels and chimerism were checked using the calculated summary metrics."),(0,n.kt)("p",null,"To evaluate the coverage and performance of the whole genome sequencing experiment, the BAM was assessed using the Picard tools CollectWGSMetrics and CollectRawWgsMetrics."),(0,n.kt)("p",null,"The BAM was converted to CRAM using Samtools view and validated using Picard ValidateSamFile."),(0,n.kt)("h3",{id:"variant-calling-1"},"Variant calling"),(0,n.kt)("p",null,"Prior to variant calling, the DRAGEN STR model was calibrated using the CalibrateDragstrModel tool with a ",(0,n.kt)("a",{parentName:"p",href:"gs://gcp-public-data--broad-references/hg38/v0/Homo_sapiens_assembly38.str"},"public STR table"),". The variant calling interval list was then split to enable parallelization. Variant calling was applied to reads using GATK4 HaplotypeCaller with the parameters --dragen-mode --disable-spanning-event-genotyping (to maintain functional equivalence to the DRAGEN hardware), and --ERC GVCF. The resulting GVCFs were merged using Picard MergeVcfs and then reblocked using GATK ReblockGVCF with -GQB 20 -GQB 30 -GQB 40. The final reblocked GVCF file was validated using GATK ValidateVariants. Variant metrics were calculated using Picard CollectVariantCallingMetrics."),(0,n.kt)("p",null,"The pipeline\u2019s final outputs included metrics, validation reports, an aligned CRAM with index, and a reblocked GVCF containing variant calls with an accompanying index."),(0,n.kt)("h2",{id:"previous-methods-documents"},"Previous methods documents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/WholeGenomeGermlineSingleSample_v3.1.8/website/docs/Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/wgs.methods.md"},"WholeGenomeGermlineSingleSample_v3.1.6")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/WholeGenomeGermlineSingleSample_v3.0.0/website/docs/Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/wgs.methods.md"},"WholeGenomeGermlineSingleSample_v3.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/WholeGenomeGermlineSingleSample_v2.5.0/website/docs/Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/wgs.methods.md"},"WholeGenomeGermlineSingleSample_v2.5.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/WholeGenomeGermlineSingleSample_v2.3.7/website/docs/Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/wgs.methods.md"},"WholeGenomeGermlineSingleSample_v2.3.7"))))}m.isMDXComponent=!0}}]);