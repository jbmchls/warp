version 1.0

import "../../../tasks/skylab/HISAT2.wdl" as HISAT2
import "../../../tasks/skylab/Picard.wdl" as Picard
import "../../../tasks/skylab/RSEM.wdl" as RSEM
import "../../../tasks/skylab/GroupMetricsOutputs.wdl" as GroupQCs
import "../../../tasks/skylab/LoomUtils.wdl" as LoomUtils

workflow SmartSeq2SingleSample {
    meta {
        description: "Process SmartSeq2 scRNA-Seq data, include reads alignment, QC metrics collection, and gene expression quantitication"
    }

    input {
        # cloud provider
        String cloud_provider
        # load annotation
        File genome_ref_fasta
        File rrna_intervals
        File gene_ref_flat
        # load index
        File hisat2_ref_index
        File hisat2_ref_trans_index
        File rsem_ref_index
        # ref index name
        String hisat2_ref_name
        String hisat2_ref_trans_name
        # samples
        String stranded
        String input_id
        String? input_name
        String? input_id_metadata_field
        String? input_name_metadata_field
        String output_name
        File fastq1
        File? fastq2
        Boolean paired_end
    }

    # version of this pipeline
    String pipeline_version = "5.1.20"

    String quality_control_output_basename = output_name + "_qc"

    # choose the correct dockers based on cloud_provider.
    # option 1
    String hisat2_docker = "hisat2:1.0.0-1662998171"
    String picard_docker = "picard-cloud:2.26.10"
    String rsem_docker = "rsem:1.0.0-1663016024"
    # TODO: this is something to think about. Do we need to move this out of quay? Do we not need to move it if azure can pull from quay?
    String group_qcs_docker = "quay.io/humancellatlas/secondary-analysis-sctools:v0.3.4"
    String pytools_dockers = "pytools:1.0.0-1661263730"

    String docker_prefix = if cloud_provider == "gcp" then gcr_docker_prefix else acr_docker_prefix

    String gcr_docker_prefix = "us.gcr.io/broad-gotc-prod/"
    String acr_docker_prefix = "us.acr.io/broad-gotc-prod/"

    String hisat2_docker_path = docker_prefix + hisat2_docker
    String picard_docker_path = docker_prefix + picard_docker
    String rsem_docker_path = docker_prefix + rsem_docker
    String group_qcs_docker_path = group_qcs_docker
    String pytools_dockers_path = docker_prefix + pytools_dockers


    if( paired_end ) {
        call HISAT2.HISAT2PairedEnd {
            input:
                hisat2_ref = hisat2_ref_index,
                fastq1 = fastq1,
                fastq2 = select_first([fastq2]),
                ref_name = hisat2_ref_name,
                input_id = input_id,
                output_basename = quality_control_output_basename,
                hisat2_docker_path = hisat2_docker_path
        }
    }
    if( !paired_end ) {
        call HISAT2.HISAT2SingleEnd {
            input:
                hisat2_ref = hisat2_ref_index,
                fastq = fastq1,
                ref_name = hisat2_ref_name,
                input_id = input_id,
                output_basename = quality_control_output_basename,
                hisat2_docker_path = hisat2_docker_path
        }
    }

    File HISAT2_output_bam = select_first([ HISAT2PairedEnd.output_bam, HISAT2SingleEnd.output_bam] )
    File HISAT2_bam_index = select_first([ HISAT2PairedEnd.bam_index, HISAT2SingleEnd.bam_index] )
    File HISAT2_log_file = select_first([ HISAT2PairedEnd.log_file, HISAT2SingleEnd.log_file] )

    call Picard.CollectMultipleMetrics {
        input:
            aligned_bam = HISAT2_output_bam,
            genome_ref_fasta = genome_ref_fasta,
            output_basename = quality_control_output_basename,
            picard_docker_path = picard_docker_path
    }

    call Picard.CollectRnaMetrics {
        input:
            aligned_bam = HISAT2_output_bam,
            ref_flat = gene_ref_flat,
            rrna_intervals = rrna_intervals,
            output_basename = quality_control_output_basename,
            stranded = stranded,
            picard_docker_path = picard_docker_path
    }

    call Picard.CollectDuplicationMetrics {
        input:
            aligned_bam = HISAT2_output_bam,
            output_basename = quality_control_output_basename,
            picard_docker_path = picard_docker_path
    }

    String data_output_basename = output_name + "_rsem"

    if( paired_end ) {
        call HISAT2.HISAT2RSEM as HISAT2Transcriptome {
            input:
                hisat2_ref = hisat2_ref_trans_index,
                fastq1 = fastq1,
                fastq2 = fastq2,
                ref_name = hisat2_ref_trans_name,
                input_id = input_id,
                output_basename = data_output_basename,
                hisat2_docker_path = hisat2_docker_path

        }
    }

    if( !paired_end ) {
        call HISAT2.HISAT2RSEMSingleEnd as HISAT2SingleEndTranscriptome {
            input:
                hisat2_ref = hisat2_ref_trans_index,
                fastq = fastq1,
                ref_name = hisat2_ref_trans_name,
                input_id = input_id,
                output_basename = data_output_basename,
                hisat2_docker_path = hisat2_docker_path
        }
    }

    File HISAT2RSEM_output_bam = select_first([ HISAT2Transcriptome.output_bam, HISAT2SingleEndTranscriptome.output_bam] )
    File HISAT2RSEM_log_file = select_first([ HISAT2Transcriptome.log_file, HISAT2SingleEndTranscriptome.log_file] )

    call RSEM.RSEMExpression {
        input:
            trans_aligned_bam = HISAT2RSEM_output_bam,
            rsem_genome = rsem_ref_index,
            output_basename = data_output_basename,
            is_paired = paired_end,
            rsem_docker_path = rsem_docker_path
    }

    Array[File] picard_row_outputs = [CollectMultipleMetrics.alignment_summary_metrics,CollectDuplicationMetrics.dedup_metrics,CollectRnaMetrics.rna_metrics,CollectMultipleMetrics.gc_bias_summary_metrics]

    # This output only exists for PE and select_first fails if array is empty
    if ( length(CollectMultipleMetrics.insert_size_metrics) > 0 ) {
        File? picard_row_optional_outputs = select_first(CollectMultipleMetrics.insert_size_metrics)
    }

    Array[File] picard_table_outputs = [
                                       CollectMultipleMetrics.base_call_dist_metrics,
                                       CollectMultipleMetrics.gc_bias_detail_metrics,
                                       CollectMultipleMetrics.pre_adapter_details_metrics,
                                       CollectMultipleMetrics.pre_adapter_summary_metrics,
                                       CollectMultipleMetrics.bait_bias_detail_metrics,
                                       CollectMultipleMetrics.error_summary_metrics,
                                       ]

    call GroupQCs.GroupQCOutputs {
        input:
            picard_row_outputs = picard_row_outputs,
            picard_row_optional_outputs = select_all(CollectMultipleMetrics.insert_size_metrics),
            picard_table_outputs = picard_table_outputs,
            hisat2_stats = HISAT2_log_file,
            hisat2_trans_stats = HISAT2RSEM_log_file,
            rsem_stats = RSEMExpression.rsem_cnt,
            output_name = output_name,
            group_qcs_docker_path = group_qcs_docker_path
    }

    call LoomUtils.SmartSeq2LoomOutput {
        input:
            rsem_gene_results = RSEMExpression.rsem_gene,
            smartseq_qc_files = GroupQCOutputs.group_files,
            input_id=input_id,
            input_name = input_name,
            pipeline_version = "SmartSeq2SingleSample_v~{pipeline_version}",
            input_id_metadata_field = input_id_metadata_field,
            input_name_metadata_field = input_name_metadata_field,
            pytools_dockers_path = pytools_dockers_path
    }

    output {
        # version of this pipeline
        String pipeline_version_out = pipeline_version

        # quality control outputs
        File aligned_bam = HISAT2_output_bam
        File bam_index = HISAT2_bam_index
        File? insert_size_metrics =  picard_row_optional_outputs
        File quality_distribution_metrics = CollectMultipleMetrics.quality_distribution_metrics
        File quality_by_cycle_metrics = CollectMultipleMetrics.quality_by_cycle_metrics
        File bait_bias_summary_metrics = CollectMultipleMetrics.bait_bias_summary_metrics
        File rna_metrics = CollectRnaMetrics.rna_metrics # check this
        Array[File] group_results = GroupQCOutputs.group_files # check this

        # data outputs
        File aligned_transcriptome_bam = HISAT2RSEM_output_bam
        File rsem_gene_results = RSEMExpression.rsem_gene
        File rsem_isoform_results = RSEMExpression.rsem_isoform

        # loom
        File loom_output_files = SmartSeq2LoomOutput.loom_output
    }
}
