"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[6801],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:4},l="Consortia Data Processing",o={unversionedId:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing",id:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing",title:"Consortia Data Processing",description:"Brain Initiative Cell Census Network Processing",source:"@site/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing.md",sourceDirName:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline",slug:"/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/consortia-processing.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1719587432,formattedLastUpdatedAt:"Jun 28, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Smart-seq2 Single Nucleus Multi-Sample Count Matrix Overview",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/count-matrix-overview"},next:{title:"Smart-seq2 Multi-Sample Overview",permalink:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README"}},s={},p=[{value:"Brain Initiative Cell Census Network Processing",id:"brain-initiative-cell-census-network-processing",level:2},{value:"Multi-snSS2 reference files for BICCN data processing",id:"multi-snss2-reference-files-for-biccn-data-processing",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"consortia-data-processing"},"Consortia Data Processing"),(0,a.kt)("h2",{id:"brain-initiative-cell-census-network-processing"},"Brain Initiative Cell Census Network Processing"),(0,a.kt)("p",null,"The Smart-seq2 Single Nucleus Multi-Sample (Multi-snSS2) pipeline supports data processing for the ",(0,a.kt)("a",{parentName:"p",href:"https://biccn.org/"},"BRAIN Initiative Cell Census Network (BICCN)"),". An overview of the BICCN pipeline resources is available on the BICCN's ",(0,a.kt)("a",{parentName:"p",href:"https://biccn.org/tools/biccn-pipelines"},"Pipelines page"),"."),(0,a.kt)("h3",{id:"multi-snss2-reference-files-for-biccn-data-processing"},"Multi-snSS2 reference files for BICCN data processing"),(0,a.kt)("p",null,"The BICCN 2.0 Whole Mouse Brain Working Group uses the Ensembl GRCm38 reference for alignment and a modified GTF for gene annotation (see table below). All Multi-snSS2 pipeline reference inputs were created with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/build_indices"},"BuildIndices workflow"),"."),(0,a.kt)("p",null," BICCN processes single-nucleus data, which is enriched in pre-mRNAs containing introns. To account for this, the Multi-snSS2 workflow counts reads that map to both exonic and intronic regions (any part of a contig that is not exonic nor intergenic). The BuildIndices workflow uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"BuildStarSingleNucleus")," task to add intron annotations to the GTF with a custom ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/blob/develop/3rd-party-tools/build-indices/add-introns-to-gtf.py"},"python script"),". These annotations enable intron counting with the ",(0,a.kt)("a",{parentName:"p",href:"http://subread.sourceforge.net/"},"featureCounts")," software. "),(0,a.kt)("p",null," The custom GTF contains all annotations for any ",(0,a.kt)("inlineCode",{parentName:"p"},"gene_id")," that has at least one transcript. This reduces the number of genes in the GTF to ","~","32,000. "),(0,a.kt)("p",null,"All reference files are available in a public Google bucket (see table below) and are accompanied by a README that details reference provenance (gs://gcp-public-data--broad-references/mm10/v0/README_mm10_singlecell_gencode.txt). "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Multi-snSS2 reference input name"),(0,a.kt)("th",{parentName:"tr",align:null},"Google bucket URI"),(0,a.kt)("th",{parentName:"tr",align:null},"Reference source"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"annotations_gtf")),(0,a.kt)("td",{parentName:"tr",align:null},"gs://gcp-public-data--broad-references/mm10/v0/single_nucleus/modified_gencode.vM23.primary_assembly.annotation.gtf"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_mouse/release_M23/gencode.vM23.annotation.gtf.gzf"},"https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_mouse/release_M23/gencode.vM23.annotation.gtf.gzf")),(0,a.kt)("td",{parentName:"tr",align:null},"Modified GENCODE GTF including intron annotations that can be used for intron counting with featureCounts.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"genome_ref_fasta")),(0,a.kt)("td",{parentName:"tr",align:null},"gs://gcp-public-data--broad-references/mm10/v0/single_nucleus/modified_mm10.primary_assembly.genome.fa"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_mouse/release_M23/GRCm38.p6.genome.fa.gz"},"https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_mouse/release_M23/GRCm38.p6.genome.fa.gz")),(0,a.kt)("td",{parentName:"tr",align:null},"FASTA file used to create the STAR reference files.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tar_star_reference")),(0,a.kt)("td",{parentName:"tr",align:null},"gs://gcp-public-data--broad-references/mm10/v0/single_nucleus/star/modified_star_2.7.9a_primary_gencode_mouse_vM23.tar"),(0,a.kt)("td",{parentName:"tr",align:null},"NA \u2014 built with the BuildIndices workflow."),(0,a.kt)("td",{parentName:"tr",align:null},"Reference files used for alignment with STAR.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"adapter_list")),(0,a.kt)("td",{parentName:"tr",align:null},"gs://broad-gotc-test-storage/MultiSampleSmartSeq2SingleNucleus/adapters/Illumina_adapters_list.fa"),(0,a.kt)("td",{parentName:"tr",align:null},"See Illumina's overview on ",(0,a.kt)("a",{parentName:"td",href:"https://support.illumina.com/bulletins/2016/12/what-sequences-do-i-use-for-adapter-trimming.html"},"adapter sequences"),"."),(0,a.kt)("td",{parentName:"tr",align:null},"List of adapter sequences used for trimming.")))))}d.isMDXComponent=!0}}]);