"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[870],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,b=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return r?n.createElement(b,i(i({ref:t},d),{},{components:r})):n.createElement(b,i({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6351:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905));const l={sidebar_position:5},i="Optimus Library-level metrics",o={unversionedId:"Pipelines/Optimus_Pipeline/Library-metrics",id:"Pipelines/Optimus_Pipeline/Library-metrics",title:"Optimus Library-level metrics",description:"The following table describes the library level metrics of the produced by the Optimus workflow. These are calcuated using custom python scripts available in the warp-tools repository. The Optimus workflow aligns files in shards to parallelize computationally intensive steps. This results in multiple matrix market files and shard-level library metrics.",source:"@site/docs/Pipelines/Optimus_Pipeline/Library-metrics.md",sourceDirName:"Pipelines/Optimus_Pipeline",slug:"/Pipelines/Optimus_Pipeline/Library-metrics",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Library-metrics",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Optimus_Pipeline/Library-metrics.md",tags:[],version:"current",lastUpdatedBy:"Elizabeth Kiernan",lastUpdatedAt:1730307350,formattedLastUpdatedAt:"Oct 30, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Optimus Count Matrix Overview",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Loom_schema"},next:{title:"Consortia Data Processing",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/consortia-processing"}},s={},p=[],d={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"optimus-library-level-metrics"},"Optimus Library-level metrics"),(0,a.kt)("p",null,"The following table describes the library level metrics of the produced by the Optimus workflow. These are calcuated using custom python scripts available in the warp-tools repository. The Optimus workflow aligns files in shards to parallelize computationally intensive steps. This results in multiple matrix market files and shard-level library metrics. "),(0,a.kt)("p",null,"To produce the library-level metrics here, the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/blob/develop/3rd-party-tools/star-merge-npz/scripts/combined_mtx.py"},"combined_mtx.py script")," combines all the shard-level matrix market files into one raw mtx file. Then, STARsolo is run to filter this matrix to only those barcodes that meet STARsolo's criteria of cells (using the Emptydrops_CR parameter). This matrix is then used as input during h5ad generation, and metrics are calculated from the final h5ad using the custom ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/tree/develop/tools/scripts"},"add_library_tso_doublets.py")," script."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nhash_id"),(0,a.kt)("td",{parentName:"tr",align:null},"The first line of of the metrics CSV echos the NHash ID if specified in the workflow run")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number_of_reads"),(0,a.kt)("td",{parentName:"tr",align:null},"Total number of reads.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sequencing_saturation"),(0,a.kt)("td",{parentName:"tr",align:null},"Proportion of unique molecular identifiers (UMIs) observed relative to the total number of possible UMIs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fraction_of_unique_reads_mapped_to_genome"),(0,a.kt)("td",{parentName:"tr",align:null},"Fraction of unique reads that map to the genome.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fraction_of_unique_and_multiple_reads_mapped_to_genome"),(0,a.kt)("td",{parentName:"tr",align:null},"Fraction of both unique and multiple reads that map to the genome.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fraction_of_reads_with_Q30_bases_in_rna"),(0,a.kt)("td",{parentName:"tr",align:null},"Fraction of reads with base quality score \u2265 Q30 in RNA sequences.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fraction_of_reads_with_Q30_bases_in_cb_and_umi"),(0,a.kt)("td",{parentName:"tr",align:null},"Fraction of reads with base quality score \u2265 Q30 in cell barcode (CB) and unique molecular identifier (UMI).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fraction_of_reads_with_valid_barcodes"),(0,a.kt)("td",{parentName:"tr",align:null},"Fraction of reads with valid cell barcodes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reads_mapped_antisense_to_gene"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of reads mapped antisense to gene regions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reads_mapped_confidently_exonic"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of reads mapped confidently to exonic regions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reads_mapped_confidently_to_genome"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of reads mapped confidently to the genome.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reads_mapped_confidently_to_intronic_regions"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of reads mapped confidently to intronic regions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reads_mapped_confidently_to_transcriptome"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of reads mapped confidently to the transcriptome.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"estimated_cells"),(0,a.kt)("td",{parentName:"tr",align:null},"Estimated number of cells from STARsolo using the Emptydops_CR parameter.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"umis_in_cells"),(0,a.kt)("td",{parentName:"tr",align:null},"Total number of unique molecular identifiers (UMIs) in cells.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mean_umi_per_cell"),(0,a.kt)("td",{parentName:"tr",align:null},"Average number of UMIs per cell.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"median_umi_per_cell"),(0,a.kt)("td",{parentName:"tr",align:null},"Median number of UMIs per cell.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"unique_reads_in_cells_mapped_to_gene"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of unique reads in cells mapped to genes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fraction_of_unique_reads_in_cells"),(0,a.kt)("td",{parentName:"tr",align:null},"Fraction of unique reads in cells.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mean_reads_per_cell"),(0,a.kt)("td",{parentName:"tr",align:null},"Average number of reads per cell.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"median_reads_per_cell"),(0,a.kt)("td",{parentName:"tr",align:null},"Median number of reads per cell.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mean_gene_per_cell"),(0,a.kt)("td",{parentName:"tr",align:null},"Average number of genes per cell.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"median_gene_per_cell"),(0,a.kt)("td",{parentName:"tr",align:null},"Median number of genes per cell.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"total_genes_unique_detected"),(0,a.kt)("td",{parentName:"tr",align:null},"Total number of unique genes detected.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"percent_target"),(0,a.kt)("td",{parentName:"tr",align:null},"Percentage of target cells. Calculated as: estimated_number_of_cells / barcoded_cell_sample_number_of_expected_cells")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"percent_intronic_reads"),(0,a.kt)("td",{parentName:"tr",align:null},"Percentage of intronic reads. Calculated as: reads_mapped_confidently_to_intronic_regions / number_of_reads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"percent_doublets"),(0,a.kt)("td",{parentName:"tr",align:null},"Percentage of cells flagged as doublets based on doublet scores calculated from a modified ",(0,a.kt)("a",{parentName:"td",href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6853612/"},"DoubletFinder")," algorithm.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keeper_mean_reads_per_cell"),(0,a.kt)("td",{parentName:"tr",align:null},"Mean reads per cell for cells with >1500 genes or nuclei with >1000 genes, and doublet_score < 0.3.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keeper_median_genes"),(0,a.kt)("td",{parentName:"tr",align:null},"Median genes per cell for cells with >1500 genes or nuclei with >1000 genes, and doublet_score < 0.3>.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keeper_cells"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of cells with >1500 genes or nuclei with >1000 genes, and doublet score < 0.3.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"percent_keeper"),(0,a.kt)("td",{parentName:"tr",align:null},"Percentage of keeper cells. Calculated as: keeper_cells / estimated_cells")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"percent_usable"),(0,a.kt)("td",{parentName:"tr",align:null},"Percentage of usable cells. Calculated as: keeper_cells / expected_cells")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"frac_tso"),(0,a.kt)("td",{parentName:"tr",align:null},"Fraction of reads containing TSO sequence. Calculated as the number of reads that have 20 bp or more of TSO Sequence clipped from 5' end/ total number of reads.")))))}u.isMDXComponent=!0}}]);