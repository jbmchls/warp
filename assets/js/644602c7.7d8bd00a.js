"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[4182],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_position:2},o="CEMBA_v1.1.6 Publication Methods",l={unversionedId:"Pipelines/CEMBA_MethylC_Seq_Pipeline/CEMBA.methods",id:"Pipelines/CEMBA_MethylC_Seq_Pipeline/CEMBA.methods",title:"CEMBA_v1.1.6 Publication Methods",description:"Below we provide a sample methods section for a publication. For the complete pipeline documentation, see the CEMBA README.",source:"@site/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/CEMBA.methods.md",sourceDirName:"Pipelines/CEMBA_MethylC_Seq_Pipeline",slug:"/Pipelines/CEMBA_MethylC_Seq_Pipeline/CEMBA.methods",permalink:"/warp/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/CEMBA.methods",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/CEMBA.methods.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1720704614,formattedLastUpdatedAt:"Jul 11, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"CEMBA Overview",permalink:"/warp/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/README"},next:{title:"Exome Germline Single Sample Overview",permalink:"/warp/docs/Pipelines/Exome_Germline_Single_Sample_Pipeline/README"}},s={},p=[{value:"Methods",id:"methods",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cemba_v116-publication-methods"},"CEMBA_v1.1.6 Publication Methods"),(0,i.kt)("p",null,"Below we provide a sample methods section for a publication. For the complete pipeline documentation, see the ",(0,i.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/README"},"CEMBA README"),"."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("p",null,"Data processing was performed with the CEMBA v1.1.0 Pipeline (RRID:SCR_021219). Sequencing reads were first trimmed to remove adaptors using Cutadapt 1.18 with the following parameters in paired-end mode: ",(0,i.kt)("inlineCode",{parentName:"p"},"-f fastq -quality-cutoff 20 -minimum-length 62 -a AGATCGGAAGAGCACACGTCTGAAC -A AGATCGGAAGAGCGTCGTGTAGGGA"),"."),(0,i.kt)("p",null,"After trimming the adapters, an unaligned BAM (uBAM) for the trimmed R1 FASTQ was created using Picard v2.26.10."),(0,i.kt)("p",null,"Cell barcodes were then extracted from the trimmed R1 FASTQ and tagged to the R1 uBAM with Single Cell Tools (sctools) v0.3.4a using a barcode whitelist as well as configurable barcode start positions and lengths."),(0,i.kt)("p",null,"Next, for multiplexed samples, the random primer index sequence and Adaptase C/T tail were further removed from the adaptor-trimmed R1 and R2 FASTQs using Cutadapt with the following parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"-f fastq -quality-cutoff 16 -quality-cutoff -16 -minimum-length 30"),"."),(0,i.kt)("p",null,"The trimmed R1 and R2 reads were then aligned to mouse (mm10) or human (hg19) genomes separately as single-end reads using Bismark v0.21.0 with the parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"--bowtie2 --icpc --X 2000")," (paired-end mode) and ",(0,i.kt)("inlineCode",{parentName:"p"},"--pbat")," (activated for mapping R1 reads)."),(0,i.kt)("p",null,"After alignment, the output R1 and R2 BAMs were sorted in coordinate order and duplicates removed using the Picard MarkDuplicates REMOVE_DUPLICATE option. Samtools 1.9 was used to further filter BAMs with a minimum map quality of 30 using the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"-bhq 30"),"."),(0,i.kt)("p",null,"Methylation reports were produced for the filtered BAMs using Bismark. The barcodes from the R1 uBAM were then attached to the aligned, filtered R1 BAM with Picard. The R1 and R2 BAMs were merged with Samtools. Readnames were added to the merged BAM and a methylated VCF created using MethylationTypeCaller in GATK 4.5.0.0. The VCF was then converted to an additional ALLC file using a custom python script."),(0,i.kt)("p",null,"Samtools was then used to calculate coverage depth for sites with coverage greater than 1 and to create BAM index files. The final outputs included the barcoded aligned BAM, BAM index, a VCF with locus-specific methylation information, VCF index, ALLC file, and methylation reports."),(0,i.kt)("p",null,"An example of the pipeline and its outputs is available on ",(0,i.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/brain-initiative-bcdc/Methyl-c-seq_Pipeline"},"Terra"),". Examples of genomic reference files and other inputs can be found in the pipeline\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/cemba/cemba_methylcseq/example_inputs/CEMBA.inputs.json"},"example JSON"),"."))}u.isMDXComponent=!0}}]);