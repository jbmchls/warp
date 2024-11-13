"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[2084],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),o=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),s=o(a),N=n,k=s["".concat(p,".").concat(N)]||s[N]||f[N]||i;return a?r.createElement(k,l(l({ref:e},d),{},{components:a})):r.createElement(k,l({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=N;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[s]="string"==typeof t?t:n,l[1]=m;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},8914:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return o}});var r=a(3117),n=(a(7294),a(3905));const i={sidebar_position:2},l="snm3C Mapping Summary Metrics Overview",m={unversionedId:"Pipelines/snM3C/summary_metrics",id:"Pipelines/snM3C/summary_metrics",title:"snm3C Mapping Summary Metrics Overview",description:"The snm3C pipeline outputs a summary CSV file containing trimming, mapping, deduplication, chromatin contact, and ALLC site statistics.",source:"@site/docs/Pipelines/snM3C/summary_metrics.md",sourceDirName:"Pipelines/snM3C",slug:"/Pipelines/snM3C/summary_metrics",permalink:"/warp/docs/Pipelines/snM3C/summary_metrics",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/snM3C/summary_metrics.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1731514642,formattedLastUpdatedAt:"Nov 13, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Single Nucleus Methyl-Seq and Chromatin Capture (snm3C) Overview",permalink:"/warp/docs/Pipelines/snm3C/README"},next:{title:"Ultima Genomics Whole Genome Germline Overview",permalink:"/warp/docs/Pipelines/Ultima_Genomics_Whole_Genome_Germline_Pipeline/README"}},p={},o=[],d={toc:o},s="wrapper";function f(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"snm3c-mapping-summary-metrics-overview"},"snm3C Mapping Summary Metrics Overview"),(0,n.kt)("p",null,"The snm3C pipeline outputs a summary CSV file containing trimming, mapping, deduplication, chromatin contact, and ALLC site statistics. "),(0,n.kt)("p",null,"The summary file is generated using the ",(0,n.kt)("inlineCode",{parentName:"p"},"smn3c_summary()")," function of a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lhqing/cemba_data/blob/788e83cd66f3b556bdfacf3485bed9500d381f23/cemba_data/hisat3n/summary.py"},"custom python3 script"),"."),(0,n.kt)("p",null,"The snm3C pipeline was adapted from YAP (Yet Another Pipeline) in collaboration with Hanqing Liu, Wei Tian, Wubin Ding, Huaming Chen, Chongyuan Luo, Jingtian Zhou, and the entire laboratory of Joseph Ecker. For more information about the snm3C metrics, please see the ",(0,n.kt)("a",{parentName:"p",href:"https://hq-1.gitbook.io/mc/"},"YAP documentation")," created by Hanqing Liu."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Details"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cell"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The unique identifier for each cell.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"InputReadPairs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of read pairs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"InputReadPairsBP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of base pairs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TrimmedReadPairs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of trimmed read pairs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R1WithAdapters"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of R1 reads trimmed to remove Illumina adapter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R1QualTrimBP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of R1 base pairs trimmed due to low base quality.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R1TrimmedReadsBP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of R1 base pairs remaining after adapter and quality trimming.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R2WithAdapters"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of R2 reads trimmed to remove Illumina adapter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R2QualTrimBP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of R2 base pairs trimmed due to low base quality.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R2TrimmedReadsBP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of R2 base pairs remaining after adapter and quality trimming.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UniqueMappedReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of uniquely mapped reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UniqueMappingRate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rate of unique read mapping.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MultiMappedReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of multimapped reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MultiMappingRate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rate of multimapping.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OverallMappingRate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rate of mapping for all reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R1SplitReadsUniqueMappedReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of uniquely mapped R1 reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R1SplitReadsUniqueMappingRate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rate of unique R1 read mapping.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R1SplitReadsMultiMappedReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of multimapped R1 reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R1SplitReadsMultiMappingRate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rate of R1 read multimapping.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R1SplitReadsOverallMappingRate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rate of mapping for all R1 reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R2SplitReadsUniqueMappedReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of uniquely mapped R2 reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R2SplitReadsUniqueMappingRate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rate of unique R2 read mapping.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R2SplitReadsMultiMappedReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of multimapped R2 reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R2SplitReadsMultiMappingRate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rate of R2 read multimapping.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"R2SplitReadsOverallMappingRate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rate of mapping for all R2 reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UniqueAlignFinalReads"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UniqueAlignDuplicatedReads"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UniqueAlignPCRDuplicationRate"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CisContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of chromatin contacts where the two loci are on the same chromosome.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CisCutContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CisMultiContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CisCutMultiContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TransContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of chromatin contacts where the two loci are on different chromosome.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TransCutContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TransMultiContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TransCutMultiContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ChimericContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NoContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MappedFragments"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DeduppedContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ContactsDeduplicationRate"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TotalCisContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TotalTransContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TotalMultiContacts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CisContactsRatio"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TransContactsRatio"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MultiContactsRatio"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mCCCmC"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total methylated cytosine in the CCC context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mCGmC"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total methylated cytosine in the CG context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mCHmC"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total methylated cytosine in the CH context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mCCCCov"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total covered cytosine in the CCC context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mCGCov"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total covered cytosine in the CG context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mCHCov"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total covered cytosine in the CH context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mCCCFrac"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fraction of methylated cytosine (",(0,n.kt)("inlineCode",{parentName:"td"},"mCCCmC"),") divided by covered cytosine (",(0,n.kt)("inlineCode",{parentName:"td"},"mCCCCov"),") in the CCC context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mCGFrac"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fraction of methylated cytosine (",(0,n.kt)("inlineCode",{parentName:"td"},"mCGmC"),") divided by covered cytosine (",(0,n.kt)("inlineCode",{parentName:"td"},"mCGCov"),") in the CG context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mCHFrac"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fraction of methylated cytosine (",(0,n.kt)("inlineCode",{parentName:"td"},"mCHmC"),") divided by covered cytosine (",(0,n.kt)("inlineCode",{parentName:"td"},"mCHCov"),") in the CH context.")))))}f.isMDXComponent=!0}}]);