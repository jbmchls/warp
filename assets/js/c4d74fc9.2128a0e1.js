"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[4918],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1528:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var i=n(3117),r=(n(7294),n(3905));const o={},a="Creating the Imputation Pipeline's Modified 1000 Genomes Reference",s={unversionedId:"Pipelines/Imputation_Pipeline/references_overview",id:"Pipelines/Imputation_Pipeline/references_overview",title:"Creating the Imputation Pipeline's Modified 1000 Genomes Reference",description:"Background",source:"@site/docs/Pipelines/Imputation_Pipeline/references_overview.md",sourceDirName:"Pipelines/Imputation_Pipeline",slug:"/Pipelines/Imputation_Pipeline/references_overview",permalink:"/warp/docs/Pipelines/Imputation_Pipeline/references_overview",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Imputation_Pipeline/references_overview.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1701896266,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Imputation Overview",permalink:"/warp/docs/Pipelines/Imputation_Pipeline/README"},next:{title:"Multiome Overview",permalink:"/warp/docs/Pipelines/Multiome_Pipeline/README"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Reference modification",id:"reference-modification",level:2},{value:"Acknowledgments and Questions",id:"acknowledgments-and-questions",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-the-imputation-pipelines-modified-1000-genomes-reference"},"Creating the Imputation Pipeline's Modified 1000 Genomes Reference"),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Initial tests of the Imputation workflow followed by assessments of polygenic risk score (PRS) revealed that risk scores for coronary artery disease (CAD) were lower when computed from imputed array data as opposed to whole-genome sequencing data (see figures below)."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(594).Z,width:"672",height:"480"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8214).Z,width:"672",height:"480"})),(0,r.kt)("p",null,"The systematic difference was due to a single site (10:104952499) which had a relatively high effect weight in the CAD weights file used for the PRS analysis. When using ",(0,r.kt)("a",{parentName:"p",href:"https://gnomad.broadinstitute.org/"},"gnomAD V2")," for comparison, the site appears to be incorrectly genotyped in the 1000G reference. Whereas the site's allele frequency is 0.72 in 1000G, it is only 0.086 in gnomAD V2. "),(0,r.kt)("p",null,"This finding suggests that some 1000G sites may be systematically incorrectly genotyped. As a result, the 1000G reference files were modified for the Imputation pipeline as described below. You can view the original, unmodified 1000G VCFs ",(0,r.kt)("a",{parentName:"p",href:"https://ftp.1000genomes.ebi.ac.uk/vol1/ftp/release/20130502/"},"here"),". "),(0,r.kt)("h2",{id:"reference-modification"},"Reference modification"),(0,r.kt)("p",null,"To remove putative incorrect sites from the 1000G reference panel, allele frequencies were compared between it and gnomAD V2. First, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/scripts/BuildAFComparisonTable.wdl"},"BuildAFComparisonTable workflow")," was used to create a table of the allele frequencies for both reference panels. Then, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/scripts/FilterAFComparisonTable.wdl"},"FilterAFComparisonTable workflow")," was applied to compare the observed number of alleles in 1000G to the expected number of alleles set by gnomAD V2 using a two-sided binomial p-value. "),(0,r.kt)("p",null,"Since gnomAD reports non-Finnish European allele frequencies while 1000G reports European allele frequencies, p-values were calculated both including and excluding European samples. If both p-values were less than 1e-10, then the site was flagged as problematic. After identifying the putative problematic sites, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/scripts/RemoveBadSitesById.wdl"},"RemoveBadSitesById workflow")," was used to remove them, generating a cleaned 1000G reference panel. "),(0,r.kt)("p",null,"This cleaning removes 359,369, or about 0.8% of sites from 1000G reference. In the histogram below, only sites that were were flagged as incorrect are shown. The vast majority of flagged sites have p-values that are much lower than the threshold."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2068).Z,width:"672",height:"480"})),(0,r.kt)("p",null,'As can be seen below, using this "cleaned" 1000G removes the systematic difference between imputed and WGS scores.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7427).Z,width:"672",height:"480"}),"\n",(0,r.kt)("img",{src:n(827).Z,width:"672",height:"480"})),(0,r.kt)("p",null,"The comparison below shows that the improvement is due only to the removal of sites that were poorly imputed with the original 1000G reference, the remaining sites are not being imputed at a higher quality than they were with the original 1000G reference. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5919).Z,width:"672",height:"480"})),(0,r.kt)("p",null,"A public copy of the cleaned reference can be found at gs://broad-gotc-test-storage/imputation/1000G_reference_panel/ as shown in the Imputation workflow's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/broad/arrays/imputation/example_inputs.json"},"example configuration file")," (JSON)."),(0,r.kt)("h2",{id:"acknowledgments-and-questions"},"Acknowledgments and Questions"),(0,r.kt)("p",null,"This technical report was contributed by the Methods Team of the Broad Data Sciences Platform. "),(0,r.kt)("p",null,"For questions or additional information about the Imputation pipeline's reference generation, email ",(0,r.kt)("a",{parentName:"p",href:"mailto:ckachuli@broadinstitute.org"},"Chris Kachullis"),"."))}d.isMDXComponent=!0},5919:function(e,t,n){t.Z=n.p+"assets/images/cleaned_vs_original_compare_to_gnomad_af_method_correlations-1-aa7844c7e0c83afa3253e8b0cf2872c1.png"},7427:function(e,t,n){t.Z=n.p+"assets/images/imputed_vs_wgs_scores_cleaned_method_2_1kg-1-e6d82de36159fcdc58e3f08462ccf75d.png"},827:function(e,t,n){t.Z=n.p+"assets/images/imputed_vs_wgs_scores_cleaned_method_2_1kg-2-3180ec787238e08d7613ec0fb2e228b8.png"},594:function(e,t,n){t.Z=n.p+"assets/images/imputed_vs_wgs_scores_original_1kg-1-dd2429888c94f42ab51737423d9b381a.png"},8214:function(e,t,n){t.Z=n.p+"assets/images/imputed_vs_wgs_scores_original_1kg-2-c57bde69e3b7cb889540c5638e77ae95.png"},2068:function(e,t,n){t.Z=n.p+"assets/images/method_2_p-value_histogram-1-d362a5c12ff4c217ee7d75a4f17974b0.png"}}]);