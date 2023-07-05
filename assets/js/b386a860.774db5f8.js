"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[5928],{1510:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"Nov21_ReblockedGVCF","metadata":{"permalink":"/warp/blog/Nov21_ReblockedGVCF","editUrl":"https://github.com/broadinstitute/warp/edit/develop/website/blog/blog/2021-11-09-blog1.md","source":"@site/blog/2021-11-09-blog1.md","title":"WARP Whole Genome and Exome Pipelines Produce Reblocked GVCFs","description":"November 9, 2021","date":"2021-11-09T00:00:00.000Z","formattedDate":"November 9, 2021","tags":[{"label":"warp","permalink":"/warp/blog/tags/warp"},{"label":"WDL","permalink":"/warp/blog/tags/wdl"},{"label":"genomes","permalink":"/warp/blog/tags/genomes"},{"label":"exomes","permalink":"/warp/blog/tags/exomes"},{"label":"germline","permalink":"/warp/blog/tags/germline"},{"label":"joint calling","permalink":"/warp/blog/tags/joint-calling"},{"label":"reblock","permalink":"/warp/blog/tags/reblock"}],"readingTime":2.94,"hasTruncateMarker":false,"authors":[{"name":"Liz Kiernan","title":"Senior Science Writer, Data Sciences Platform","imageURL":"https://avatars.githubusercontent.com/u/14366016?v=4"}],"frontMatter":{"slug":"Nov21_ReblockedGVCF","title":"WARP Whole Genome and Exome Pipelines Produce Reblocked GVCFs","author":"Liz Kiernan","author_title":"Senior Science Writer, Data Sciences Platform","author_image_url":"https://avatars.githubusercontent.com/u/14366016?v=4","tags":["warp","WDL","genomes","exomes","germline","joint calling","reblock"]}},"content":"#### November 9, 2021  \\n\\nWe are announcing the latest release of the Whole Genome and Exome production pipelines, which now produce reblocked GVCFs, a compressed form of GVCF files, as default outputs. \\n\\nThis is a major release, which in this case means:\\n\\n\\n1. The data output from the pipeline is scientifically different than in previous versions.\\n2. Data output from this pipeline should not be co-analyzed with data from previous versions (for example, in joint calling), without first reblocking the GVCFs. \\n3. Users of the pipeline will see a change in both input and output interfaces.\\n\\n## Reblocking \u2013 what is it and why use it?\\nReblocking is a process of compressing GVCFs that reduces file storage footprint and facilitates joint genotyping by removing alt alleles that do not appear in the called genotype. Normal GVCFs contain blocks of adjacent homozygous reference (homRef) genotype calls that are stored as a single entry when they have the exact same value up to a Phred-scaled confidence of 60. The vast majority of downstream analyses discard homRef genotypes with a confidence of less than 20, so we can compress that data without losing any fidelity in downstream analysis. \\n\\nAdditionally, because most whole-genome sequencing aims for 30X coverage, most confidences are around 90 or higher. With that, we can represent large intervals of high coverage with a single entry, indicating all high-quality homRef genotypes.\\n\\nThe reblocked GVCFs are sufficient for multiple downstream applications. While some applications, like population variation surveys, can establish variant frequency using binary (i.e. good/bad) homRef confidences, other applications, like de novo analysis, require more nuance. For the latter kind of applications where the reference status of the parents is critical, the reblocked GVCFs provide multiple intermediate categories for homRef confidences. \\n\\nOverall, reblocked GVCFs reduce the storage and I/O required to operate on variant data. This leads to faster, more efficient, and less expensive call sets. It is standard practice at the Broad to reblock GVCFs before joint calling. Now, we are making that step a standard part of the GVCF generation in the single sample pipeline. \\n\\n## How is reblocking implemented in the pipelines?\\nWe\u2019ve added reblocking as a default subtask, called \u201cReblock\u201d, in the WARP [VariantCalling WDL script](https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/dna_seq/germline/variant_calling/VariantCalling.wdl) which is imported by both the Exome and Whole Genome workflows. The Reblock task performs reblocking by using the GATK tool [ReblockGVCF](https://gatk.broadinstitute.org/hc/en-us/articles/360037593171). \\n\\nWhile the reblocking option is turned on by default for any pipeline using the VariantCalling task, you can optionally turn it off by setting the `skip_reblocking` input in the workflows input configuration file (JSON). For example, if you\u2019re working with the Exome pipeline, just add the parameter:\\n\\n```WDL\\nExomeGermlineSingleSample.BamToGvcf.skip_reblocking\\": true\\n```\\n\\nWe recognize that some researchers might want to perform reblocking independent of the Exome or Whole Genome pipelines, so we also created a utility workflow to reblock GVCFs. This pipeline takes in GVCFs produced by the single sample pipelines and outputs equivalently reblocked GVCFs. It is available in both the [WARP repository](https://github.com/broadinstitute/warp/tree/develop/pipelines/broad/dna_seq/germline/joint_genotyping/reblocking) and in a Terra workspace, and costs less than $0.02 per genome to run.\\n\\nIf you\u2019re curious as to whether your WARP pipeline output is a reblocked GVCF, just look at the filename suffix; a reblocked GVCF will have the `.rb.g.vcf` ending. \\n\\nAs always, if you have any questions about working with the updated workflows, [file an issue in WARP](https://github.com/broadinstitute/warp/issues) or reach out to [the WARP team](mailto:warp-pipelines-help@broadinstitute.org ).\\n\\n## Additional resources\\nLearn more about the reblocking tool on the [GATK Support website](https://gatk.broadinstitute.org/hc/en-us/articles/4405443600667). \\nLearn more about the reblocked GVCFs in the [Exome](https://broadinstitute.github.io/warp/docs/Pipelines/Exome_Germline_Single_Sample_Pipeline/README) and [Whole-Genome](https://broadinstitute.github.io/warp/docs/Pipelines/Whole_Genome_Germline_Single_Sample_Pipeline/README) Overviews."}]}')}}]);