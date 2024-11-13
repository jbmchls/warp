"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[4385],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1438:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return d}});var n=a(3117),r=(a(7294),a(3905));const l={},i="STAR Aligner Metrics",o={unversionedId:"Pipelines/Optimus_Pipeline/starsolo-metrics",id:"Pipelines/Optimus_Pipeline/starsolo-metrics",title:"STAR Aligner Metrics",description:"The STAR aligner produces multiple text files containing library-level summary metrics, cell-level metrics, and UMI metrics. The Optimus workflow compresses these files into a single TAR. These outputs are directly from the aligner as different batches of the data are analyzed in parallel.",source:"@site/docs/Pipelines/Optimus_Pipeline/starsolo-metrics.md",sourceDirName:"Pipelines/Optimus_Pipeline",slug:"/Pipelines/Optimus_Pipeline/starsolo-metrics",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/starsolo-metrics",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Optimus_Pipeline/starsolo-metrics.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1731514642,formattedLastUpdatedAt:"Nov 13, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Consortia Data Processing",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/consortia-processing"},next:{title:"Paired-Tag Overview",permalink:"/warp/docs/Pipelines/PairedTag_Pipeline/README"}},s={},d=[{value:"Align Features Metrics",id:"align-features-metrics",level:2},{value:"Cell Read Metrics",id:"cell-read-metrics",level:2},{value:"Summary.txt",id:"summarytxt",level:2},{value:"UMI per cell",id:"umi-per-cell",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"star-aligner-metrics"},"STAR Aligner Metrics"),(0,r.kt)("p",null,"The STAR aligner produces multiple text files containing library-level summary metrics, cell-level metrics, and UMI metrics. The Optimus workflow compresses these files into a single TAR. These outputs are directly from the aligner as different batches of the data are analyzed in parallel. "),(0,r.kt)("p",null,"The STAR aligner metrics are supplemental to the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Optimus_Pipeline/Library-metrics"},"library-level metrics CSV")," that is also produced by Optimus. Several of the calculations produced in the library metrics are directly based on the STAR aligner metrics. "),(0,r.kt)("p",null,"The following sections describe these outputs. "),(0,r.kt)("h2",{id:"align-features-metrics"},"Align Features Metrics"),(0,r.kt)("p",null,"The Align feature text file contains library-level metrics produced by the STARsolo alignment detailing the alignment of reads to genomic features during single-cell RNA-seq analysis. These metrics indicate how well reads map to specific genomic features or whether they failed to map due to various reasons. For example:\n",(0,r.kt)("strong",{parentName:"p"},"noUnmapped")," represents the number of reads that were not aligned to any feature in the genome.\n",(0,r.kt)("strong",{parentName:"p"},"noNoFeature")," reflects reads that were aligned but did not map to any specific feature such as exons or genes.\n",(0,r.kt)("strong",{parentName:"p"},"MultiFeature")," counts reads that were aligned to multiple features.\n",(0,r.kt)("strong",{parentName:"p"},"yesWLmatch")," and ",(0,r.kt)("strong",{parentName:"p"},"yesCellBarcodes")," track how well reads match the barcode whitelist, an important step in identifying valid cell barcodes, which helps demultiplex the single-cell RNA-seq data\u200b."),(0,r.kt)("p",null,"Each of the table metrics gives insights into different stages of read alignment, from barcode matching to gene feature mapping, allowing you to assess the quality and accuracy of the alignment step in the pipeline."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metrics name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"noUnmapped"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of unmapped reads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"noNoFeature"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads not mapped to a feature.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MultiFeature"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads aligned to multiple features.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subMultiFeatureMultiGenomic"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads mapping to multiple genomic loci and multiple features.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"noTooManyWLmatches"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads not counted because their barcoded pair has too many matches to the whitelist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"noMMtoWLwithoutExact"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads not counted because their barcoded pair has mismatches to the whitelist and there's no more reads supporting that barcode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yesWLmatch"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads whose barcoded pair has a match to the whitelist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yessubWLmatchExact"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads with cell barcode exactly matched to the whitelist (a subset of yesWLmatch).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yessubWLmatch_UniqueFeature"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads matched to the WL and unique feature (a subset of yesWLmatch).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yesCellBarcodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads associated with a valid cell barcode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yesUMIs"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads associated with a valid UMI.")))),(0,r.kt)("h2",{id:"cell-read-metrics"},"Cell Read Metrics"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"cell read metrics")," text file provides cell barcode-level information about the reads; for instance:\n",(0,r.kt)("strong",{parentName:"p"},"cbMatch")," counts the number of reads that successfully matched the cell barcode.\n",(0,r.kt)("strong",{parentName:"p"},"cbPerfect")," gives the number of reads with a perfect match to a cell barcode, while ",(0,r.kt)("strong",{parentName:"p"},"cbMMunique")," and ",(0,r.kt)("strong",{parentName:"p"},"cbMMmultiple")," measure mismatches that still align uniquely or to multiple barcodes, respectively.\n",(0,r.kt)("strong",{parentName:"p"},"genomeU")," and ",(0,r.kt)("strong",{parentName:"p"},"genomeM")," count reads mapped to one or multiple loci in the genome, respectively.\n",(0,r.kt)("strong",{parentName:"p"},"exonic")," and ",(0,r.kt)("strong",{parentName:"p"},"intronic")," track reads mapping to annotated exons or introns, helping distinguish between different gene regions in the analysis."),(0,r.kt)("p",null,"These metrics are important for assessing the quality of individual cell barcodes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metrics"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CB"),(0,r.kt)("td",{parentName:"tr",align:null},"Cell barcode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cbMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads that matched the cell barcode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cbPerfect"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of perfect matches on cell barcode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cbMMunique"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads with cell barcodes that map with mismatches to one barcode in the passlist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cbMMmultiple"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads with cell barcodes that map with mismatches to multiple barcodes in the passlist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"genomeU"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads mapping to one locus in the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"genomeM"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads mapping to multiple loci in the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"featureU"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads mapping to one feature (Gene, GeneFull, etc).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"featureM"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads mapping to multiple features.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exonic"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads mapping to annotated exons.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intronic"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads mapping to annotated introns; these are only calculated for --soloFeatures GeneFull_Ex50pAS and/or GeneFull_ExonOverIntron.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exonicAS"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads mapping antisense to annotated exons.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intronicAS"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads mapping antisense to annotated introns; these are only calculated for --soloFeatures GeneFull_Ex50pAS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mito"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads mapping to the mitochondrial genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"countedU"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of unique-gene reads whose UMIs contributed to counts in the matrix.mtx (eads with valid CB/UMI/gene).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"countedM"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of multi-gene reads whose UMIs contributed to counts in the matrix.mtx.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nUMIunique"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of counted UMI for unique-gene reads.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nGenesUnique"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of genes for unique-gene reads.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nUMImulti"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of counted UMI for multi-gene reads.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nGenesMulti"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of genes for multi-gene reads.")))),(0,r.kt)("h2",{id:"summarytxt"},"Summary.txt"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"summary")," text file contains additional library-level metrics produced by the STARsolo aligner, such as:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Number of reads"),", which reflects the total reads processed, and ",(0,r.kt)("strong",{parentName:"p"},"reads with valid barcodes"),", which indicates how many reads matched the barcode whitelist.\n",(0,r.kt)("strong",{parentName:"p"},"Sequencing saturation")," shows the completeness of sequencing, where higher values indicate fewer additional reads are needed to capture new UMIs.\nMetrics like ",(0,r.kt)("strong",{parentName:"p"},"Q30 Bases in CB+UMI")," and ",(0,r.kt)("strong",{parentName:"p"},"Q30 Bases in RNA read")," give insights into sequencing quality, showing how many reads had high-quality base calls.\nOther key metrics, such as ",(0,r.kt)("strong",{parentName:"p"},"reads mapped to the genome: Unique+Multiple")," and ",(0,r.kt)("strong",{parentName:"p"},"estimated number of cells"),", provide a sense of how well reads were mapped to the genome and how many cells were identified.\nThese summary metrics help users assess the overall quality and completeness of their single-cell RNA-seq data, serving as a useful checkpoint for determining whether the data is suitable for further analysis. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of Reads"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of reads in the library.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reads With Valid Barcodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of reads with valid barcodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sequencing Saturation"),(0,r.kt)("td",{parentName:"tr",align:null},"Proportion of unique molecular identifiers (UMIs) that have been sequenced at least once compared to the total number of possible UMIs in the sample; calculated as: 1-(yesUMIs/yessubWLmatch_UniqueFeature).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q30 Bases in CB+UMI"),(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of high-quality reads in the cell barcode and UMI read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q30 Bases in RNA read"),(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of high-quality reads in the RNA read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reads Mapped to Genome: Unique+Multiple"),(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of unique and multimapped reads that mapped to the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reads Mapped to Genome: Unique"),(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of unique reads that mapped to the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reads Mapped to genes: Unique+Multiple"),(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of reads that mapped to genes as defined by the \u2013solo-feature parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reads Mapped to Genes: Unique"),(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of unique reads that mapped to genes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Estimated Number of Cells"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of barcodes that STARsolo flagged as cells based on UMIs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unique Reads in Cells Mapped to genes"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of unique reads that mapped to genes across all cells")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of Unique Reads in Cells"),(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of unique reads across all cells.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mean Reads per Cell"),(0,r.kt)("td",{parentName:"tr",align:null},"Mean number of reads per cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Median Reads per Cell"),(0,r.kt)("td",{parentName:"tr",align:null},"Median number of reads per cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UMIs in Cells"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of UMIs per cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mean UMI per Cell"),(0,r.kt)("td",{parentName:"tr",align:null},"Mean number of UMIs per cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Median UMI per Cell"),(0,r.kt)("td",{parentName:"tr",align:null},"Median number of UMI per cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mean Genes per Cell"),(0,r.kt)("td",{parentName:"tr",align:null},"Mean number of genes expressed per cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Median Genes per Cell"),(0,r.kt)("td",{parentName:"tr",align:null},"Median number of genes per cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Total Genes Detected"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of genes detected in the overall library.")))),(0,r.kt)("h2",{id:"umi-per-cell"},"UMI per cell"),(0,r.kt)("p",null,"The UMI per cell text file is a list of UMI counts per every cell. It contains two columns. The first column contains the number of UMIs per each barcode entry. The second column indicates whether a barcode was flagged as a cell. A 1 indicates that it passed filtering criteria to be considered a cell and 0 indicates that it did not pass."))}u.isMDXComponent=!0}}]);