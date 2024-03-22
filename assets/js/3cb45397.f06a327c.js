"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[8121],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,h=p["".concat(o,".").concat(u)]||p[u]||c[u]||i;return a?n.createElement(h,d(d({ref:t},m),{},{components:a})):n.createElement(h,d({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,d=new Array(i);d[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,d[1]=l;for(var s=2;s<i;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4193:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:2},d="Slide-seq Count Matrix Overview",l={unversionedId:"Pipelines/SlideSeq_Pipeline/count-matrix-overview",id:"Pipelines/SlideSeq_Pipeline/count-matrix-overview",title:"Slide-seq Count Matrix Overview",description:"The Loom matrix is deprecated and the default matrix is now h5ad.",source:"@site/docs/Pipelines/SlideSeq_Pipeline/count-matrix-overview.md",sourceDirName:"Pipelines/SlideSeq_Pipeline",slug:"/Pipelines/SlideSeq_Pipeline/count-matrix-overview",permalink:"/warp/docs/Pipelines/SlideSeq_Pipeline/count-matrix-overview",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/SlideSeq_Pipeline/count-matrix-overview.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1711129453,formattedLastUpdatedAt:"Mar 22, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Slide-seq Overview",permalink:"/warp/docs/Pipelines/SlideSeq_Pipeline/README"},next:{title:"Smart-seq2 Single Nucleus Multi-Sample Overview",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README"}},o={},s=[{value:"Table 1. Global attributes",id:"table-1-global-attributes",level:2},{value:"Table 2. Column attributes (bead barcode metrics)",id:"table-2-column-attributes-bead-barcode-metrics",level:2},{value:"Table 3. Row attributes (gene metrics)",id:"table-3-row-attributes-gene-metrics",level:2},{value:"Definitions",id:"definitions",level:2}],m={toc:s},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"slide-seq-count-matrix-overview"},"Slide-seq Count Matrix Overview"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The Loom matrix is deprecated and the default matrix is now h5ad.")),(0,r.kt)("p",null,"The Slide-seq pipeline's default count matrix output is a h5ad file generated using ",(0,r.kt)("a",{parentName:"p",href:"https://anndata.readthedocs.io/en/latest/index.html"},"AnnData"),".  "),(0,r.kt)("p",null,"It contains the raw bead-by-gene counts, which vary depending on the workflow's ",(0,r.kt)("inlineCode",{parentName:"p"},"count_exons")," parameter. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"count_exons")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and the output h5ad file will contain whole-gene counts with exon counts in an additional layer. "),(0,r.kt)("p",null,"If the workflow is run with ",(0,r.kt)("inlineCode",{parentName:"p"},"count_exons")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the output h5ad file will contain whole-gene counts. Running the workflow in this configuration will cause the h5ad matrix to have fewer columns (bead barcodes) due to the difference in STARsolo counting mode."),(0,r.kt)("p",null,"You can determine which type of counts are in the h5ad file by looking at the unstructured metadata (the ",(0,r.kt)("inlineCode",{parentName:"p"},"anndata.uns")," property of the matrix) ",(0,r.kt)("inlineCode",{parentName:"p"},"expression_data_type")," key (see ",(0,r.kt)("a",{parentName:"p",href:"#table-1-global-attributes"},"Table 1")," below)."),(0,r.kt)("p",null,"The matrix also contains multiple metrics for both individual bead barcodes (the ",(0,r.kt)("inlineCode",{parentName:"p"},"anndata.obs")," property of the matrix; ",(0,r.kt)("a",{parentName:"p",href:"#table-2-column-attributes-bead-barcode-metrics"},"Table 2"),") and individual genes (the ",(0,r.kt)("inlineCode",{parentName:"p"},"anndata.var")," property of the matrix; ",(0,r.kt)("a",{parentName:"p",href:"#table-3-row-attributes-gene-metrics"},"Table 3"),") Table 3. Row attributes (gene metrics)"),(0,r.kt)("h2",{id:"table-1-global-attributes"},"Table 1. Global attributes"),(0,r.kt)("p",null,"The global attributes (unstuctured metadata) in the h5ad apply to the whole file, not any specific part. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expression_data_type")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String describing if the pipeline counted whole transcript (exonic and intronic) or only exonic reads determined by the value of the ",(0,r.kt)("inlineCode",{parentName:"td"},"count_exons")," parameter. By default, ",(0,r.kt)("inlineCode",{parentName:"td"},"count_exons")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"expression_data_type")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"whole_transcript"),"; if ",(0,r.kt)("inlineCode",{parentName:"td"},"count_exons")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," then ",(0,r.kt)("inlineCode",{parentName:"td"},"expression_data_type")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"exonic"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"input_id")," provided to the pipeline as input and listed in the pipeline configuration file. This can be any string, but it's recommended for this to be consistent with any sample metadata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"optimus_output_schema_version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"h5ad file spec version used during creation of the h5ad file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pipeline_version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Version of the Slide-seq pipeline used to generate the h5ad file.")))),(0,r.kt)("h2",{id:"table-2-column-attributes-bead-barcode-metrics"},"Table 2. Column attributes (bead barcode metrics)"),(0,r.kt)("p",null,"The bead barcode metrics below are computed using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/tree/develop/TagSort"},"TagSort")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/tree/develop"},"warp-tools repository"),", with the exception of ",(0,r.kt)("inlineCode",{parentName:"p"},"input_id")," which is an input to the pipeline."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Bead Barcode Metrics"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cell_names")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier for each bead based on bead barcodes; identical to ",(0,r.kt)("inlineCode",{parentName:"td"},"CellID"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CellID")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier for each bead based on bead barcodes; identical to ",(0,r.kt)("inlineCode",{parentName:"td"},"cell_names"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_reads")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads associated with this entity. n_reads, like all metrics, are calculated from the Slide-Seq output BAM. Prior to alignment with STARsolo, reads are checked against the whitelist (1 hamming distance). These CB-corrected reads are the input to the STAR aligner. Then, the reads also get CB correction during STAR. For this reason, almost all reads in the aligned BAM have a CB tag and UB tag. Therefore, n_reads represents CB corrected reads, not all reads in the input FASTQ files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"noise_reads")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Number of reads that are categorized by 10x Genomics Cell Ranger as "noise". Refers to long polymers, or reads with high numbers of N (ambiguous) nucleotides.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"perfect_molecule_barcodes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads whose molecule barcodes contain no errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_exonic")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of unique reads counted as exon; counted when BAM file's ",(0,r.kt)("inlineCode",{parentName:"td"},"sF")," tag is assigned to ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"3")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"NH:i")," tag is ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_exonic_as")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads counted as exon in the antisense direction; counted when the BAM file's ",(0,r.kt)("inlineCode",{parentName:"td"},"sF")," tag is assigned to a ",(0,r.kt)("inlineCode",{parentName:"td"},"2")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"4")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"NH:i")," tag is ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_intronic")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads counted as intron; counted when the BAM file's ",(0,r.kt)("inlineCode",{parentName:"td"},"sF")," tag is assigned to a ",(0,r.kt)("inlineCode",{parentName:"td"},"5")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"NH:i")," tag is ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_intronic_as")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads counted as intron in the antisense direction; counted when the BAM file's ",(0,r.kt)("inlineCode",{parentName:"td"},"sF")," tag is assigned to a ",(0,r.kt)("inlineCode",{parentName:"td"},"6")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"NH:i")," tag is ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_uniquely")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads mapped to a single unambiguous location in the genome; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_multiple")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads mapped to multiple genomic positions with equal confidence; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"duplicate_reads")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of duplicate reads.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"spliced_reads")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads that overlap splicing junctions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"antisense_reads")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads that are mapped to the antisense strand instead of the transcribed strand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_molecules")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of molecules corresponding to this entity (only reflects reads with CB and UB tags).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_fragments")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of fragments corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of fragments associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"molecules_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of molecules associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"perfect_cell_barcodes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads whose bead barcodes contain no errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_intergenic")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads counted as intergenic; counted when the BAM file's ",(0,r.kt)("inlineCode",{parentName:"td"},"sF")," tag is assigned to a ",(0,r.kt)("inlineCode",{parentName:"td"},"7")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"NH:i")," tag is ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_unmapped")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total number of reads that are unmapped; counted when the BAM file's ",(0,r.kt)("inlineCode",{parentName:"td"},"sF")," tag is ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_too_many_loci")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads that were mapped to too many loci across the genome and as a consequence, are reported unmapped by the aligner.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_genes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of genes detected by this bead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genes_detected_multiple_observations")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of genes that are observed by more than one read in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The variance in the fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The variance in the fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_mean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Average quality of base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_variance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Variance in quality of base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_per_molecule")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average number of reads associated with each molecule in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_per_fragment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average number of reads associated with each fragment in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_per_molecule")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average number of fragments associated with each molecule in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cell_barcode_fraction_bases_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average fraction of base calls for the bead barcode sequences that are greater than 30, across molecules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cell_barcode_fraction_bases_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The variance of the fraction of  base calls for the bead barcode sequences that are greater than 30, across molecules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_mitochondrial_genes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of mitochondrial genes detected by this bead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_mitochondrial_molecules")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of molecules from mitochondrial genes detected for this bead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pct_mitochondrial_molecules")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The percentage of molecules from mitochondrial genes detected for this bead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"input_id")," provided to the pipeline as input and listed in the pipeline configuration file. This can be any string, but it's recommended for this to be consistent with any sample metadata.")))),(0,r.kt)("h2",{id:"table-3-row-attributes-gene-metrics"},"Table 3. Row attributes (gene metrics)"),(0,r.kt)("p",null,"The gene metrics below are computed using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/tree/develop/TagSort"},"TagSort")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/tree/develop"},"warp-tools repository")," except where specified."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gene Metrics"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gene_names")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique ",(0,r.kt)("inlineCode",{parentName:"td"},"gene_name")," provided in the ",(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/"},"GENCODE GTF"),"; identical to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Gene")," attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ensembl_ids")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"gene_id")," provided in the ",(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/"},"GENCODE GTF"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Gene")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique ",(0,r.kt)("inlineCode",{parentName:"td"},"gene_name")," provided in the ",(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/"},"GENCODE GTF"),"; identical to the ",(0,r.kt)("inlineCode",{parentName:"td"},"gene_names")," attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n_reads")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads associated with this entity. n_reads, like all metrics, are calculated from the Slide-Seq output BAM. Prior to alignment with STARsolo, reads are checked against the whitelist (1 hamming distance). These CB-corrected reads are the input to the STAR aligner. Then, the reads also get CB correction during STAR. For this reason, almost all reads in the aligned BAM have a CB tag and UB tag. Therefore, n_reads represents CB corrected reads, not all reads in the input FASTQ files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"noise_reads")),(0,r.kt)("td",{parentName:"tr",align:null},'The number of reads that are categorized by 10x Genomics Cell Ranger as "noise". Refers to long polymers, or reads with high numbers of N (ambiguous) nucleotides.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"perfect_molecule_barcodes")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads with molecule barcodes that have no errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_exonic")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of unique reads counted as exon; counted when BAM file's ",(0,r.kt)("inlineCode",{parentName:"td"},"sF")," tag is assigned to ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"3")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"NH:i")," tag is ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_exonic_as")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads counted as exon in the antisense direction; counted when the BAM file's ",(0,r.kt)("inlineCode",{parentName:"td"},"sF")," tag is assigned to a ",(0,r.kt)("inlineCode",{parentName:"td"},"2")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"4")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"NH:i")," tag is ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_intronic")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads counted as intron; counted when the BAM file's ",(0,r.kt)("inlineCode",{parentName:"td"},"sF")," tag is assigned to a ",(0,r.kt)("inlineCode",{parentName:"td"},"5")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"NH:i")," tag is ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_intronic_as")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads counted as intron in the antisense direction; counted when the BAM file's ",(0,r.kt)("inlineCode",{parentName:"td"},"sF")," tag is assigned to a ",(0,r.kt)("inlineCode",{parentName:"td"},"6")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"NH:i")," tag is ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_uniquely")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads mapped to a single unambiguous location in the genome; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_multiple")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads mapped to multiple genomic positions with equal confidence; mitochondrial reads are excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"duplicate_reads")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of duplicate reads.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spliced_reads")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads that overlap splicing junctions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"antisense_reads")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads that are mapped to the antisense strand instead of the transcribed strand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:null},"The average fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:null},"The variance in the fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:null},"The average fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:null},"The variance in the fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_mean")),(0,r.kt)("td",{parentName:"tr",align:null},"Average quality of base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_variance")),(0,r.kt)("td",{parentName:"tr",align:null},"Variance in quality of base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n_molecules")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of molecules corresponding to this entity (only reflects reads with CB and UB tags).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n_fragments")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of fragments corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_per_molecule")),(0,r.kt)("td",{parentName:"tr",align:null},"The average number of reads associated with each molecule in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_per_fragment")),(0,r.kt)("td",{parentName:"tr",align:null},"The average number of reads associated with each fragment in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_per_molecule")),(0,r.kt)("td",{parentName:"tr",align:null},"The average number of fragments associated with each molecule in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of fragments associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"molecules_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of molecules associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number_cells_detected_multiple")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of bead barcodes which observe more than one read of this gene.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number_cells_expressing")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of bead barcodes that detect this gene.")))),(0,r.kt)("h2",{id:"definitions"},"Definitions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bead Barcode: Short nucleotide sequence used to label and distinguish which reads come from each unique bead, allowing for tracking of many beads simultaneously.")))}c.isMDXComponent=!0}}]);