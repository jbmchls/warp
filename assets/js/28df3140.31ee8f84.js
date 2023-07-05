"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[6054],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||r;return n?i.createElement(d,a(a({ref:t},c),{},{components:n})):i.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3648:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var i=n(3117),o=(n(7294),n(3905));const r={slug:"Nov21_ReblockedGVCF",title:"WARP Whole Genome and Exome Pipelines Produce Reblocked GVCFs",author:"Liz Kiernan",author_title:"Senior Science Writer, Data Sciences Platform",author_image_url:"https://avatars.githubusercontent.com/u/14366016?v=4",tags:["warp","WDL","genomes","exomes","germline","joint calling","reblock"]},a=void 0,l={permalink:"/warp/blog/Nov21_ReblockedGVCF",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/blog/blog/2021-11-09-blog1.md",source:"@site/blog/2021-11-09-blog1.md",title:"WARP Whole Genome and Exome Pipelines Produce Reblocked GVCFs",description:"November 9, 2021",date:"2021-11-09T00:00:00.000Z",formattedDate:"November 9, 2021",tags:[{label:"warp",permalink:"/warp/blog/tags/warp"},{label:"WDL",permalink:"/warp/blog/tags/wdl"},{label:"genomes",permalink:"/warp/blog/tags/genomes"},{label:"exomes",permalink:"/warp/blog/tags/exomes"},{label:"germline",permalink:"/warp/blog/tags/germline"},{label:"joint calling",permalink:"/warp/blog/tags/joint-calling"},{label:"reblock",permalink:"/warp/blog/tags/reblock"}],readingTime:2.94,hasTruncateMarker:!1,authors:[{name:"Liz Kiernan",title:"Senior Science Writer, Data Sciences Platform",imageURL:"https://avatars.githubusercontent.com/u/14366016?v=4"}],frontMatter:{slug:"Nov21_ReblockedGVCF",title:"WARP Whole Genome and Exome Pipelines Produce Reblocked GVCFs",author:"Liz Kiernan",author_title:"Senior Science Writer, Data Sciences Platform",author_image_url:"https://avatars.githubusercontent.com/u/14366016?v=4",tags:["warp","WDL","genomes","exomes","germline","joint calling","reblock"]}},s={authorsImageUrls:[void 0]},p=[{value:"November 9, 2021",id:"november-9-2021",level:4},{value:"Reblocking \u2013 what is it and why use it?",id:"reblocking--what-is-it-and-why-use-it",level:2},{value:"How is reblocking implemented in the pipelines?",id:"how-is-reblocking-implemented-in-the-pipelines",level:2},{value:"Additional resources",id:"additional-resources",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"november-9-2021"},"November 9, 2021"),(0,o.kt)("p",null,"We are announcing the latest release of the Whole Genome and Exome production pipelines, which now produce reblocked GVCFs, a compressed form of GVCF files, as default outputs. "),(0,o.kt)("p",null,"This is a major release, which in this case means:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The data output from the pipeline is scientifically different than in previous versions."),(0,o.kt)("li",{parentName:"ol"},"Data output from this pipeline should not be co-analyzed with data from previous versions (for example, in joint calling), without first reblocking the GVCFs. "),(0,o.kt)("li",{parentName:"ol"},"Users of the pipeline will see a change in both input and output interfaces.")),(0,o.kt)("h2",{id:"reblocking--what-is-it-and-why-use-it"},"Reblocking \u2013 what is it and why use it?"),(0,o.kt)("p",null,"Reblocking is a process of compressing GVCFs that reduces file storage footprint and facilitates joint genotyping by removing alt alleles that do not appear in the called genotype. Normal GVCFs contain blocks of adjacent homozygous reference (homRef) genotype calls that are stored as a single entry when they have the exact same value up to a Phred-scaled confidence of 60. The vast majority of downstream analyses discard homRef genotypes with a confidence of less than 20, so we can compress that data without losing any fidelity in downstream analysis. "),(0,o.kt)("p",null,"Additionally, because most whole-genome sequencing aims for 30X coverage, most confidences are around 90 or higher. With that, we can represent large intervals of high coverage with a single entry, indicating all high-quality homRef genotypes."),(0,o.kt)("p",null,"The reblocked GVCFs are sufficient for multiple downstream applications. While some applications, like population variation surveys, can establish variant frequency using binary (i.e. good/bad) homRef confidences, other applications, like de novo analysis, require more nuance. For the latter kind of applications where the reference status of the parents is critical, the reblocked GVCFs provide multiple intermediate categories for homRef confidences. "),(0,o.kt)("p",null,"Overall, reblocked GVCFs reduce the storage and I/O required to operate on variant data. This leads to faster, more efficient, and less expensive call sets. It is standard practice at the Broad to reblock GVCFs before joint calling. Now, we are making that step a standard part of the GVCF generation in the single sample pipeline. "),(0,o.kt)("h2",{id:"how-is-reblocking-implemented-in-the-pipelines"},"How is reblocking implemented in the pipelines?"),(0,o.kt)("p",null,"We\u2019ve added reblocking as a default subtask, called \u201cReblock\u201d, in the WARP ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/dna_seq/germline/variant_calling/VariantCalling.wdl"},"VariantCalling WDL script")," which is imported by both the Exome and Whole Genome workflows. The Reblock task performs reblocking by using the GATK tool ",(0,o.kt)("a",{parentName:"p",href:"https://gatk.broadinstitute.org/hc/en-us/articles/360037593171"},"ReblockGVCF"),". "),(0,o.kt)("p",null,"While the reblocking option is turned on by default for any pipeline using the VariantCalling task, you can optionally turn it off by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"skip_reblocking")," input in the workflows input configuration file (JSON). For example, if you\u2019re working with the Exome pipeline, just add the parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-WDL"},'ExomeGermlineSingleSample.BamToGvcf.skip_reblocking": true\n')),(0,o.kt)("p",null,"We recognize that some researchers might want to perform reblocking independent of the Exome or Whole Genome pipelines, so we also created a utility workflow to reblock GVCFs. This pipeline takes in GVCFs produced by the single sample pipelines and outputs equivalently reblocked GVCFs. It is available in both the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/pipelines/broad/dna_seq/germline/joint_genotyping/reblocking"},"WARP repository")," and in a Terra workspace, and costs less than $0.02 per genome to run."),(0,o.kt)("p",null,"If you\u2019re curious as to whether your WARP pipeline output is a reblocked GVCF, just look at the filename suffix; a reblocked GVCF will have the ",(0,o.kt)("inlineCode",{parentName:"p"},".rb.g.vcf")," ending. "),(0,o.kt)("p",null,"As always, if you have any questions about working with the updated workflows, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/issues"},"file an issue in WARP")," or reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team"),"."),(0,o.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,o.kt)("p",null,"Learn more about the reblocking tool on the ",(0,o.kt)("a",{parentName:"p",href:"https://gatk.broadinstitute.org/hc/en-us/articles/4405443600667"},"GATK Support website"),".\nLearn more about the reblocked GVCFs in the ",(0,o.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/Pipelines/Exome_Germline_Single_Sample_Pipeline/README"},"Exome")," and ",(0,o.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/README"},"Whole-Genome")," Overviews."))}h.isMDXComponent=!0}}]);