"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[5060],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1289:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:2},l="ATAC Count Matrix Overview",o={unversionedId:"Pipelines/ATAC/count-matrix-overview",id:"Pipelines/ATAC/count-matrix-overview",title:"ATAC Count Matrix Overview",description:"The ATAC pipeline's default count matrix output is an h5ad file generated using SnapATAC2 and AnnData.",source:"@site/docs/Pipelines/ATAC/count-matrix-overview.md",sourceDirName:"Pipelines/ATAC",slug:"/Pipelines/ATAC/count-matrix-overview",permalink:"/warp/docs/Pipelines/ATAC/count-matrix-overview",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/ATAC/count-matrix-overview.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1711129453,formattedLastUpdatedAt:"Mar 22, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"ATAC Overview",permalink:"/warp/docs/Pipelines/ATAC/README"},next:{title:"BuildIndices Overview",permalink:"/warp/docs/Pipelines/BuildIndices_Pipeline/README"}},p={},s=[{value:"Table 1. Global attributes",id:"table-1-global-attributes",level:2},{value:"Table 2. Cell metrics",id:"table-2-cell-metrics",level:2},{value:"Definitions",id:"definitions",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"atac-count-matrix-overview"},"ATAC Count Matrix Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/ATAC/README"},"ATAC pipeline's")," default count matrix output is an h5ad file generated using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kaizhang/SnapATAC2"},"SnapATAC2")," and ",(0,r.kt)("a",{parentName:"p",href:"https://anndata.readthedocs.io/en/latest/index.html"},"AnnData"),". "),(0,r.kt)("p",null,"The h5ad file contains unstructured metadata (",(0,r.kt)("inlineCode",{parentName:"p"},"h5ad.uns"),"; ",(0,r.kt)("a",{parentName:"p",href:"#table-1-global-attributes"},"Table 1"),") as well as per-barcode quality metrics (",(0,r.kt)("inlineCode",{parentName:"p"},"h5ad.obs"),"; ",(0,r.kt)("a",{parentName:"p",href:"#table-2-cell-metrics"},"Table 2"),"). It also contains an equivalent gene expression barcode for each ATAC barcode. Raw fragments are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"h5ad.obsm['insertion']")," property of the h5ad file. For more information, see the ",(0,r.kt)("a",{parentName:"p",href:"https://kzhang.org/SnapATAC2/api/_autosummary/snapatac2.pp.import_data.html#snapatac2.pp.import_data"},(0,r.kt)("inlineCode",{parentName:"a"},"import_data")," function")," in the SnapATAC2 documentation."),(0,r.kt)("p",null,"The h5ad file does not contain per-gene metrics, meaning the variables/features data frame (",(0,r.kt)("inlineCode",{parentName:"p"},"h5ad.var"),") is empty."),(0,r.kt)("h2",{id:"table-1-global-attributes"},"Table 1. Global attributes"),(0,r.kt)("p",null,"The global attributes (unstuctured metadata) in the h5ad apply to the whole file, not any specific part. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Program"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reference_sequences")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/kaizhang/SnapATAC2"},"SnapATAC2")),(0,r.kt)("td",{parentName:"tr",align:null},"Data frame containing the chromosome sizes for the genome build (i.e., hg38); created using the ",(0,r.kt)("a",{parentName:"td",href:"/warp/docs/Pipelines/ATAC/README"},(0,r.kt)("inlineCode",{parentName:"a"},"chrom_sizes")," pipeline input"),".")))),(0,r.kt)("h2",{id:"table-2-cell-metrics"},"Table 2. Cell metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Cell Metrics"),(0,r.kt)("th",{parentName:"tr",align:null},"Program"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tsse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/kaizhang/SnapATAC2"},"SnapATAC2")),(0,r.kt)("td",{parentName:"tr",align:null},"Transcription start site enrichment (TSSe) score; lower scores suggest poor data quality. Learn more about TSSe in the ",(0,r.kt)("a",{parentName:"td",href:"#definitions"},"Definitions section")," below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n_fragment")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/kaizhang/SnapATAC2"},"SnapATAC2")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of unique fragments corresponding to the ATAC cell barcode. Fragments are stored in the ",(0,r.kt)("inlineCode",{parentName:"td"},"h5ad.obsm")," property of the output h5ad file. Learn more about cell barcodes and fragments in the ",(0,r.kt)("a",{parentName:"td",href:"#definitions"},"Definitions section")," below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"frac_dup")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/kaizhang/SnapATAC2"},"SnapATAC2")),(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of reads associated with the cell barcode that are duplicates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"frac_mito")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/kaizhang/SnapATAC2"},"SnapATAC2")),(0,r.kt)("td",{parentName:"tr",align:null},"Fraction of reads associated with the cell barcode that are mitochondrial.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gex_barcodes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://anndata.readthedocs.io/en/latest/index.html"},"AnnData")),(0,r.kt)("td",{parentName:"tr",align:null},"Gene expression barcode associated with each ATAC cell barcode. This column is only produced when ATAC is run as part of the Multiome pipeline.")))),(0,r.kt)("h2",{id:"definitions"},"Definitions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cell Barcode: Short nucleotide sequence used to label and distinguish which reads come from each unique cell, allowing for tracking of many cells simultaneously."),(0,r.kt)("li",{parentName:"ul"},"Fragment: A distinct segment of a read that aligns to a specific location on the reference genome. "),(0,r.kt)("li",{parentName:"ul"},"Transcription Start Site Enrichment (TSSe): A common quality control metric in ATAC-seq data, indicating increased accessibility around the transcription start sites of genes. High TSSe suggests successful capture of relevant genomic features, while low TSSe may signal data quality or processing issues.")))}u.isMDXComponent=!0}}]);