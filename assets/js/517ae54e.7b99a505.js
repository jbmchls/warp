"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[6430],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7547:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=n(3117),r=(n(7294),n(3905));const i={},a="Contributing to Existing Pipelines",s={unversionedId:"contribution/contribute_to_warp/contribution-guidelines",id:"contribution/contribute_to_warp/contribution-guidelines",title:"Contributing to Existing Pipelines",description:"We encourage the community to make contributions to our existing pipelines, such as updates to workflow code, Docker images and code, and accompanying documentation.",source:"@site/docs/contribution/contribute_to_warp/contribution-guidelines.md",sourceDirName:"contribution/contribute_to_warp",slug:"/contribution/contribute_to_warp/contribution-guidelines",permalink:"/warp/docs/contribution/contribute_to_warp/contribution-guidelines",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/contribution/contribute_to_warp/contribution-guidelines.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1730291220,formattedLastUpdatedAt:"Oct 30, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"WDL Task Runtime Style Guide Overview",permalink:"/warp/docs/contribution/contribute_to_warp/wdl_task_runtime_style"},next:{title:"Example Contribution",permalink:"/warp/docs/contribution/contribute_to_warp/contribution-tutorial"}},u={},p=[{value:"Contributor agreement",id:"contributor-agreement",level:3},{value:"Contribution Guidelines",id:"contribution-guidelines",level:2},{value:"1. Scope the work.",id:"1-scope-the-work",level:4},{value:"2. Read guidelines for versioning, changelog syntax, and WARP Documentation style.",id:"2-read-guidelines-for-versioning-changelog-syntax-and-warp-documentation-style",level:4},{value:"3. Make a branch or fork off the WARP develop branch.",id:"3-make-a-branch-or-fork-off-the-warp-develop-branch",level:4},{value:"4. Make your updates on your WARP branch or fork.",id:"4-make-your-updates-on-your-warp-branch-or-fork",level:4},{value:"5. Assess and make updates to accompanying pipeline files.",id:"5-assess-and-make-updates-to-accompanying-pipeline-files",level:4},{value:"6. Make a pull request to the WARP <strong>develop</strong> branch.",id:"6-make-a-pull-request-to-the-warp-develop-branch",level:4},{value:"7. Revise the PR as necessary for the review process.",id:"7-revise-the-pr-as-necessary-for-the-review-process",level:4},{value:"8. Merge updates to the WARP <strong>develop</strong> branch.",id:"8-merge-updates-to-the-warp-develop-branch",level:4},{value:"Review Process",id:"review-process",level:2},{value:"WARP review process and requirements",id:"warp-review-process-and-requirements",level:3},{value:"Troubleshooting WARP testing",id:"troubleshooting-warp-testing",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Still have questions?",id:"still-have-questions",level:2}],l={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing-to-existing-pipelines"},"Contributing to Existing Pipelines"),(0,r.kt)("p",null,"We encourage the community to make contributions to our existing pipelines, such as updates to workflow code, Docker images and code, and accompanying documentation. "),(0,r.kt)("p",null,"Guidelines for contributing differ slightly depending on the size of the update and whether the contributor has WARP repository permissions. "),(0,r.kt)("p",null,"To get started, read the following ",(0,r.kt)("a",{parentName:"p",href:"#contribution-guidelines"},"Contribution Guidelines")," and the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/contribution/contribute_to_warp/contribution-tutorial"},"Example Contribution"),". "),(0,r.kt)("p",null,"If you have remaining questions about your contribution, reach out to the WARP team by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/issues/new"},"filing a new issue"),"."),(0,r.kt)("admonition",{title:"What if I want to contribute a new pipeline?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Contribution guidelines for new pipelines are in development, but to contribute a new pipeline, reach out to the WARP team first by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/issues/new"},"filing an issue"),". Additionally, read our ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/About_WARP/BestPractices"},"Best Practices")," for pipeline development.")),(0,r.kt)("h3",{id:"contributor-agreement"},"Contributor agreement"),(0,r.kt)("p",null,"All user contributions fall under a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/LICENSE"},"BSD 3-Clause License"),", are not copyright, and are open source. When you make a contribution, you attest that all contributions are your own and not copyrighted by another party."),(0,r.kt)("h2",{id:"contribution-guidelines"},"Contribution Guidelines"),(0,r.kt)("h4",{id:"1-scope-the-work"},"1. Scope the work."),(0,r.kt)("p",null,"Contributions can range from tiny syntax changes to large task, workflow, or Docker updates. Often changes to a single task WDL or Dockerfile can affect multiple workflows that import those same task WDLs or Docker images. This is why it's important to scope updates before proceeding."),(0,r.kt)("admonition",{title:"File an issue for large changes",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If an update is large, or if you're unsure how a change affects multiple workflows, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/broadinstitute/warp/issues/new"},"file an issue")," in WARP first"),". ")),(0,r.kt)("p",null,"Filing an issue allows our team to provide valuable feedback before starting a large effort and appropriately prioritize the review work. "),(0,r.kt)("p",null,"Additionally, there are multiple requirements for our ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/About_WARP/TestingPipelines"},"testing")," infrastructure. By filing an issue for large updates, we can work with you right away to flag any potential testing-related issues. "),(0,r.kt)("h4",{id:"2-read-guidelines-for-versioning-changelog-syntax-and-warp-documentation-style"},"2. Read guidelines for versioning, changelog syntax, and WARP Documentation style."),(0,r.kt)("p",null,"Our testing infrastructure relies on specific ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/About_WARP/VersionAndReleasePipelines"},"versioning")," and ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/contribution/contribute_to_warp/changelog_style"},"changelog syntax"),". Pipeline changes must be documented in the changelog with the appropriate syntax."),(0,r.kt)("p",null,"Similarly, if you plan to contribute to WARP Documentation, read the ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/contribution/contribute_to_warp_docs/doc_style"},"WARP Documentation style guide")," first, as it contains helpful formatting tips."),(0,r.kt)("h4",{id:"3-make-a-branch-or-fork-off-the-warp-develop-branch"},"3. Make a branch or fork off the WARP develop branch."),(0,r.kt)("p",null,"If you have WARP repository permissions, GitHub will allow you to make a branch off the WARP ",(0,r.kt)("strong",{parentName:"p"},"develop")," branch when you\u2019re ready to contribute. For more information on how to make a branch, read the GitHub Docs ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches#creating-a-branch"},"instructions for branching"),". "),(0,r.kt)("p",null,"If you ",(0,r.kt)("strong",{parentName:"p"},"do not")," have WARP permissions (i.e. you can\u2019t make a branch off of the develop branch), make a fork of the WARP repository following the GitHub Docs ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"instructions for forking"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7330).Z,width:"661",height:"360"})),(0,r.kt)("h4",{id:"4-make-your-updates-on-your-warp-branch-or-fork"},"4. Make your updates on your WARP branch or fork."),(0,r.kt)("p",null,"As your work progresses, make commits to your WARP branch or fork. "),(0,r.kt)("h4",{id:"5-assess-and-make-updates-to-accompanying-pipeline-files"},"5. Assess and make updates to accompanying pipeline files."),(0,r.kt)("p",null,"Updates to pipeline code, Docker images, or reference files might require coordinating additional updates both in WARP, such as modifying accompanying changelogs and pipeline overviews, or outside of WARP, such as uploading Docker images or reference files to public cloud repositories.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All changes that affect pipeline workflows must be recorded in the pipeline(s) changelog(s) using semantic versioning. An explanation of this can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/contribution/contribute_to_warp/changelog_style"},"changelog style guide"),". ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you update the changelog, the pipeline\u2019s WDL workflow version number must also match the changelog entry to ensure the updates pass the WARP testing process (this is shown in the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/contribution/contribute_to_warp/contribution-tutorial"},"Example Contribution"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you make any changes to files hosted in cloud repositories, like pipeline Docker images or reference files, coordinate with the WARP team during or before the review process to push the updated files to cloud storage. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remember to make necessary updates to the accompanying pipeline documentation such as the pipeline ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/"},"overviews in WARP Documentation"),".  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you\u2019re updating WARP documentation, read the ",(0,r.kt)("a",{parentName:"li",href:"https://broadinstitute.github.io/warp/docs/contribution/contribute_to_warp_docs/doc_style"},"documentation style guide")," for helpful formatting tips.")))),(0,r.kt)("h4",{id:"6-make-a-pull-request-to-the-warp-develop-branch"},"6. Make a pull request to the WARP ",(0,r.kt)("strong",{parentName:"h4"},"develop")," branch."),(0,r.kt)("p",null,"When updates are ready, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"make a pull request (PR)")," using WARP's ",(0,r.kt)("strong",{parentName:"p"},"develop")," branch as a base. In the comments section of the PR, notify the WARP team to review the PR and start the necessary repository ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/About_WARP/TestingPipelines"},"tests"),". You can do this by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"test and review @broadinstitute/warp-admins"),"."),(0,r.kt)("h4",{id:"7-revise-the-pr-as-necessary-for-the-review-process"},"7. Revise the PR as necessary for the ",(0,r.kt)("a",{parentName:"h4",href:"#review-process"},"review process"),"."),(0,r.kt)("h4",{id:"8-merge-updates-to-the-warp-develop-branch"},"8. Merge updates to the WARP ",(0,r.kt)("strong",{parentName:"h4"},"develop")," branch."),(0,r.kt)("p",null,"If you have permission to merge to the WARP repository, you can merge the PR once it's approved. You\u2019ll receive a reminder to perform a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squash-and-merge-your-pull-request-commits"},"\u201csquash merge\u201d"),". Please delete individual commit comments and make one summary comment for all commits. "),(0,r.kt)("p",null,"If you don\u2019t have WARP permissions, the WARP team will merge the PR for you when it\u2019s ready."),(0,r.kt)("h2",{id:"review-process"},"Review Process"),(0,r.kt)("h3",{id:"warp-review-process-and-requirements"},"WARP review process and requirements"),(0,r.kt)("p",null,"After contributing a PR, a WARP team member will start a series of ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/About_WARP/TestingPipelines"},"tests"),", usually by making an \u201cok to test\u201d comment."),(0,r.kt)("p",null,"For each PR, WARP requires approval from a minimum of two developer reviewers. Additionally, depending on the changes, a review from a scientific owner or a clinical owner is also required, unless the developer is already the scientific or clinical owner. All comments and requests for changes are made directly in the GitHub PR. "),(0,r.kt)("p",null,"Comments will be likely be made within ",(0,r.kt)("strong",{parentName:"p"},"3 business days")," of the PR submission. If no review is started by that time, tag @Kylee Degatano in the PR. "),(0,r.kt)("p",null,"If a PR is abandoned after starting the review process, the WARP team will either take ownership of it or close the PR."),(0,r.kt)("h3",{id:"troubleshooting-warp-testing"},"Troubleshooting WARP testing"),(0,r.kt)("p",null,"All pipelines must pass syntax, scientific and Smart-tests, as described in the ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/About_WARP/TestingPipelines"},"testing overview"),". The WARP team will help troubleshoot testing for new contributions. "),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"To learn more about how to apply these contribution guidelines to an example small pipeline update, see the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/contribution/contribute_to_warp/contribution-tutorial"},"Example Contribution"),"."),(0,r.kt)("h2",{id:"still-have-questions"},"Still have questions?"),(0,r.kt)("p",null,"Contact us by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/issues/new"},"filing an issue"),"."))}d.isMDXComponent=!0},7330:function(e,t,n){t.Z=n.p+"assets/images/fork-859918a3b8000026d02e337cdfedd1fa.png"}}]);