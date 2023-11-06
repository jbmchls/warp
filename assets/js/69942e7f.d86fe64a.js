"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[1595],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,b=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3743:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(3117),r=n(7294),o=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function u(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,r.useRef)(void 0),n=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),s=u(i,{anchorTopOffset:n.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?r.createElement("ul",{className:o?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}var p=r.memo(d);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:c,maxHeadingLevel:d,...b}=e;const h=(0,o.L)(),f=c??h.tableOfContents.minHeadingLevel,k=d??h.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:k});return m((0,r.useMemo)((()=>{if(s&&u)return{linkClassName:s,linkActiveClassName:u,minHeadingLevel:f,maxHeadingLevel:k}}),[s,u,f,k])),r.createElement(p,(0,a.Z)({toc:g,className:n,linkClassName:s},b))}},6077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return L},contentTitle:function(){return O},default:function(){return P},frontMatter:function(){return E},metadata:function(){return S},toc:function(){return V}});var a=n(3117),r=n(7294),o=n(3905),l=n(4334),i=n(2466),s=n(6550),u=n(1980),c=n(7392),m=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[c,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,m.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??c;return b({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),d(e)}),[u,d,o]),tabValues:o}}var k=n(2389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(m(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}var T={tabItem:"tabItem_Ymn6"};function _(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(T.tabItem,a),hidden:n},t)}var I=n(3743),x={tableOfContentsInline:"tableOfContentsInline_prmo"};function C(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return r.createElement("div",{className:x.tableOfContentsInline},r.createElement(I.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null}))}const E={sidebar_position:2},O="Documentation Style Guide",S={unversionedId:"contribution/contribute_to_warp_docs/doc_style",id:"contribution/contribute_to_warp_docs/doc_style",title:"Documentation Style Guide",description:"This guide provides some examples about how to add new documentation that can be properly rendered on this website. Please note most of the Github flavored Markdown syntax should work natrually, this guide just tries to elaboratethe extension syntax to it.",source:"@site/docs/contribution/contribute_to_warp_docs/doc_style.md",sourceDirName:"contribution/contribute_to_warp_docs",slug:"/contribution/contribute_to_warp_docs/doc_style",permalink:"/warp/docs/contribution/contribute_to_warp_docs/doc_style",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/contribution/contribute_to_warp_docs/doc_style.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1699284080,formattedLastUpdatedAt:"Nov 6, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"WARP Documentation Maintenance Guide",permalink:"/warp/docs/contribution/contribute_to_warp_docs/docsite_maintenance"}},L={},V=[{value:"1. Insert code blocks",id:"1-insert-code-blocks",level:2},{value:"2. Insert tables",id:"2-insert-tables",level:2},{value:"3. Cross-reference and anchor",id:"3-cross-reference-and-anchor",level:2},{value:"4. Centered text block",id:"4-centered-text-block",level:2},{value:"5. Text with color backgorund",id:"5-text-with-color-backgorund",level:2},{value:"6. Custom containers",id:"6-custom-containers",level:2},{value:"7. Code groups",id:"7-code-groups",level:2},{value:"8. Footnotes",id:"8-footnotes",level:2},{value:"9. Insert images",id:"9-insert-images",level:2},{value:"10. Insert Table of Contents (ToC)",id:"10-insert-table-of-contents-toc",level:2}],D={toc:V},H="wrapper";function P(e){let{components:t,...r}=e;return(0,o.kt)(H,(0,a.Z)({},D,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"documentation-style-guide"},"Documentation Style Guide"),(0,o.kt)("p",null,"This guide provides some examples about how to add new documentation that can be properly rendered on this website. Please note most of the Github flavored ",(0,o.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"Markdown")," syntax should work natrually, this guide just tries to elaboratethe extension syntax to it."),(0,o.kt)("h2",{id:"1-insert-code-blocks"},"1. Insert code blocks"),(0,o.kt)("p",null,"This site supports inserting code blocks with highlighted lines, for examples, the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'```wdl {3-4,7-11} title="SortBam.wdl"\ntask SortBam {\n    input {\n        File bam_input\n        String sort_order = "coordinate"\n\n        # runtime values\n        String docker = "us.gcr.io/broad-gotc-prod/picard-cloud:2.26.10"\n        Int machine_mem_mb = 8250\n        Int machine_overhead_mb = 500\n        Int cpu = 1\n        Int preemptible = 3\n    }\n\n    Int command_mem_mb = machine_mem_mb - machine_overhead_mb\n    Int disk = ceil(size(bam_input, "Gi") * 6) + 50\n\n    meta {\n        description: "Sorts bam"\n    }\n\n    command {\n        set -e\n\n        java -Xmx${command_mem_mb}m -jar /usr/picard/picard.jar SortSam \\\n              I=${bam_input} \\\n              O=sorted.bam \\\n              SORT_ORDER=${sort_order}\n    }\n\n    runtime {\n        docker: docker\n        memory: "${machine_mem_mb} MiB"\n        disks: "local-disk ${disk} HDD"\n        cpu: cpu\n        preemptible: preemptible\n    }\n\n    output {\n        File bam_output = "sorted.bam"\n    }\n}\n```\n')),(0,o.kt)("p",null,"will result in a rendered code block like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wdl",metastring:'{3-4,7-11} title="SortBam.wdl"',"{3-4,7-11}":!0,title:'"SortBam.wdl"'},'task SortBam {\n    input {\n        File bam_input\n        String sort_order = "coordinate"\n\n        # runtime values\n        String docker = "us.gcr.io/broad-gotc-prod/picard-cloud:2.26.10"\n        Int machine_mem_mb = 8250\n        Int machine_overhead_mb = 500\n        Int cpu = 1\n        Int preemptible = 3\n    }\n\n    Int command_mem_mb = machine_mem_mb - machine_overhead_mb\n    Int disk = ceil(size(bam_input, "Gi") * 6) + 50\n\n    meta {\n        description: "Sorts bam"\n    }\n\n    command {\n        set -e\n\n        java -Xmx${command_mem_mb}m -jar /usr/picard/picard.jar SortSam \\\n              I=${bam_input} \\\n              O=sorted.bam \\\n              SORT_ORDER=${sort_order}\n    }\n\n    runtime {\n        docker: docker\n        memory: "${machine_mem_mb} MiB"\n        disks: "local-disk ${disk} HDD"\n        cpu: cpu\n        preemptible: preemptible\n    }\n\n    output {\n        File bam_output = "sorted.bam"\n    }\n}\n')),(0,o.kt)("h2",{id:"2-insert-tables"},"2. Insert tables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"| Some Table Col 1 | Some Table Col 2 |\n| :--------------: | :--------------: |\n|       Val1       |       Val4       |\n|       Val2       |       Val5       |\n|       Val3       |       Val6       |\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Some Table Col 1"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Some Table Col 2"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Val1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Val4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Val2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Val5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Val3"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Val6")))),(0,o.kt)("admonition",{title:"TIP",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's worth mentioning that ",(0,o.kt)("a",{parentName:"p",href:"https://www.tablesgenerator.com/markdown_tables"},"Tables Generator")," is a great tool for generating and re-formatting markdown tables.")),(0,o.kt)("h2",{id:"3-cross-reference-and-anchor"},"3. Cross-reference and anchor"),(0,o.kt)("p",null,"To link to another section within the same article, you would use ",(0,o.kt)("inlineCode",{parentName:"p"},"[Return to ## 1. Insert code blocks](#1-insert-code-blocks)"),": ",(0,o.kt)("a",{parentName:"p",href:"#1-insert-code-blocks"},"Return to ## 1. Insert code blocks"),"."),(0,o.kt)("p",null,"To link to sections in other articles, use the following syntax (note the relative paths):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Return to Changelog Style Guide](../contribute_to_warp/changelog_style)"),": ",(0,o.kt)("a",{parentName:"li",href:"../contribute_to_warp/changelog_style"},"Return to Changelog Style Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Return to The Documentation](/warp/docs/About_WARP/BestPractices#Best-Practices-for-Building-Data-Processing Pipelines)"),": ",(0,o.kt)("a",{parentName:"li",href:"/warp/docs/About_WARP/BestPractices#Best-Practices-for-Building-Data-Processing-Pipelines"},"Return to The Documentation"))),(0,o.kt)("h2",{id:"4-centered-text-block"},"4. Centered text block"),(0,o.kt)("p",null,"To make a text block centered, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"<center>\nCentered Text Block!\n</center>\n")),(0,o.kt)("center",null,"Centered Text Block!"),(0,o.kt)("admonition",{title:"NOTE",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"For images, you ",(0,o.kt)("strong",{parentName:"p"},"HAVE TO")," insert blank lines to make them work:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-md"},"<center>\n\n![](./some_pic.png)\n\n</center>\n"))),(0,o.kt)("h2",{id:"5-text-with-color-backgorund"},"5. Text with color backgorund"),(0,o.kt)("p",null,"You could use the following to highlight your text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<span id="inline-blue"> Text with blue background </span>,\n<span id="inline-purple"> Text with purple background </span>,\n<span id="inline-yellow"> Text with yellow background </span>,\n<span id="inline-green"> Text with green background </span>\n')),(0,o.kt)("span",{id:"inline-blue"}," Text with blue background "),",",(0,o.kt)("span",{id:"inline-purple"}," Text with purple background "),",",(0,o.kt)("span",{id:"inline-yellow"}," Text with yellow background "),",",(0,o.kt)("span",{id:"inline-green"}," Text with green background "),(0,o.kt)("h2",{id:"6-custom-containers"},"6. Custom containers"),(0,o.kt)("p",null,"As we already saw in this guide several places, we could add custom containers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},":::tip\nThis is a tip without title!\n:::\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This is a tip without title!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},":::tip TITLE\nThis is a tip with a title!\n:::\n")),(0,o.kt)("admonition",{title:"TITLE",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This is a tip with a title!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},":::caution WARNING\nThis is a warning!\n:::\n")),(0,o.kt)("admonition",{title:"WARNING",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is a warning!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},":::danger DANGER\nThis is a danger!\n:::\n")),(0,o.kt)("admonition",{title:"DANGER",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This is a danger!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},":::info INFO\nThis is a info!\n:::\n")),(0,o.kt)("admonition",{title:"INFO",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is a info!")),(0,o.kt)("h2",{id:"7-code-groups"},"7. Code groups"),(0,o.kt)("p",null,"You could also insert tab-based code groups:"),(0,o.kt)(N,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,o.kt)(_,{value:"apple",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print("This is an apple pipeline!")\n'))),(0,o.kt)(_,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,o.kt)(_,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>;\n")),(0,o.kt)("p",null,"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/tabs"},"Docusaurus Docs")),(0,o.kt)("h2",{id:"8-footnotes"},"8. Footnotes"),(0,o.kt)("p",null,"It is important to cite the references, to do so, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"markdown-it"),"'s footnotes syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"This sentence has a footnote[^1]. (See footnote at the bottom of this guide.)\n\n[^1]: I'm a footnote!\n")),(0,o.kt)("p",null,"which results in:"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This sentence has a footnote",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". (See footnote at the bottom of this guide.)"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We could also write in-line footnotes, which is much easier to write without counting back and forth:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"This sentence has another footnote ^[I'm another footnote] (See footnote at the bottom of this page.)\n")),(0,o.kt)("p",null,"which has the same effect:"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This sentence has another footnote ^","[I'm another footnote]"," (See footnote at the bottom of this page.)"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"9-insert-images"},"9. Insert images"),(0,o.kt)("p",null,"Insert images is as straight-forward as using the ordinary markdown syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![terra](./Terra_warp.png)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"terra",src:n(2683).Z,width:"1894",height:"330"})),(0,o.kt)("h2",{id:"10-insert-table-of-contents-toc"},"10. Insert Table of Contents (ToC)"),(0,o.kt)("p",null,"You could use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />;\n")),(0,o.kt)("p",null,"to insert in-line ToC:"),(0,o.kt)(C,{toc:V,mdxType:"TOCInline"}),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"I'm a footnote!",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}P.isMDXComponent=!0},2683:function(e,t,n){t.Z=n.p+"assets/images/Terra_warp-383d77605a5c6872f88d2b82c2a3108f.png"}}]);