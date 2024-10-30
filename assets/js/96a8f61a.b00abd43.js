"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[183],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3112:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:2},o="ATAC Library Metrics Overview",l={unversionedId:"Pipelines/ATAC/library-metrics",id:"Pipelines/ATAC/library-metrics",title:"ATAC Library Metrics Overview",description:"The ATAC pipeline uses SnapATAC2 to generate library-level metrics in CSV format.",source:"@site/docs/Pipelines/ATAC/library-metrics.md",sourceDirName:"Pipelines/ATAC",slug:"/Pipelines/ATAC/library-metrics",permalink:"/warp/docs/Pipelines/ATAC/library-metrics",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/ATAC/library-metrics.md",tags:[],version:"current",lastUpdatedBy:"Elizabeth Kiernan",lastUpdatedAt:1730307350,formattedLastUpdatedAt:"Oct 30, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"ATAC Count Matrix Overview",permalink:"/warp/docs/Pipelines/ATAC/count-matrix-overview"},next:{title:"BuildIndices Overview",permalink:"/warp/docs/Pipelines/BuildIndices_Pipeline/README"}},c={},s=[],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"atac-library-metrics-overview"},"ATAC Library Metrics Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/ATAC/README"},"ATAC pipeline")," uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kaizhang/SnapATAC2"},"SnapATAC2")," to generate library-level metrics in CSV format.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NHash_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique identifier used to track and reference the specific sample or dataset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequenced_reads"),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of reads generated from the sequencing process, which includes both reads that are mapped and unmapped.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequenced_read_pairs"),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of read pairs (two reads per pair) generated from the sequencing process. This is typically half of the total sequenced reads if all reads are paired.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_valid_barcode"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of reads that contain a valid barcode, indicating the proportion of reads that are correctly assigned to a specific cell or sample.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_Q30_bases_in_read_1"),(0,r.kt)("td",{parentName:"tr",align:null},"The proportion of bases in Read 1 that have a Phred quality score of 30 or higher, indicating high-confidence base calls.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_Q30_bases_in_read_2"),(0,r.kt)("td",{parentName:"tr",align:null},"The proportion of bases in Read 2 that have a Phred quality score of 30 or higher, indicating high-confidence base calls.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_of_cells"),(0,r.kt)("td",{parentName:"tr",align:null},"The estimated number of cells captured and sequenced in the experiment, based on the barcodes identified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mean_raw_read_pairs_per_cell"),(0,r.kt)("td",{parentName:"tr",align:null},"The average number of raw read pairs associated with each cell, providing an indication of the sequencing depth per cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"median_high-quality_fragments_per_cell"),(0,r.kt)("td",{parentName:"tr",align:null},"The median number of high-quality (e.g., confidently mapped) fragments associated with each cell, representing typical fragment quality across cells.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction of high-quality fragments in cells"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of high-quality fragments that are associated with identified cells, indicating the proportion of good-quality data that is cell-associated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_of_transposition_events_in_peaks_in_cells"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of transposition events within identified cells that occur within peaks, which are regions of accessible chromatin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_duplicates"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of sequenced fragments that are duplicates, which can result from PCR amplification or other factors, indicating the redundancy in the sequencing data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_confidently_mapped"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of sequenced fragments that are confidently mapped to the reference genome, indicating the proportion of reads that align well to the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_unmapped"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of sequenced fragments that could not be mapped to the reference genome, which can indicate sequencing errors, contamination, or regions not covered by the reference.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_nonnuclear"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of sequenced fragments that are mapped to non-nuclear (e.g., mitochondrial or other organellar) DNA, providing insight into contamination or organellar activity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_fragment_in_nucleosome_free_region"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of sequenced fragments that map to nucleosome-free regions, which are indicative of accessible chromatin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_fragment_flanking_single_nucleosome"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of sequenced fragments that map to regions flanking single nucleosomes, indicating regions with partial chromatin accessibility.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tss_enrichment_score"),(0,r.kt)("td",{parentName:"tr",align:null},"A measure of the enrichment of transposition events at transcription start sites (TSS), indicating the accessibility of promoters across the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_of_high-quality_fragments_overlapping_TSS"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of high-quality fragments that overlap transcription start sites (TSS), providing insight into promoter accessibility.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number_of_peaks"),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of peaks, or regions of accessible chromatin, identified in the dataset, representing potential regulatory elements.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_of_genome_in_peaks"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of the genome that is covered by identified peaks, indicating the extent of chromatin accessibility across the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraction_of_high-quality_fragments_overlapping_peaks"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of high-quality fragments that overlap with identified peaks, providing an indication of the efficiency of the assay in capturing accessible regions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"percent_target"),(0,r.kt)("td",{parentName:"tr",align:null},"Percent of cells recovered; value is calculated as estimated_cells/expected_cells.")))))}m.isMDXComponent=!0}}]);