---
title:          "An Analysis of Collocation on GPUs for Deep Learning Training"
date:           2024-04-22 00:01:00 +0800
selected:       false
pub:            "European Workshop on Machine Learning and Systems (EuroMLSys)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Best Presentation</span>'
pub_date:       "2024"

abstract: >-
  Deep learning training is an expensive process that extensively uses GPUs, but not all model training saturates modern powerful GPUs. Multi-Instance GPU (MIG) is a new technology introduced by NVIDIA that can partition a GPU to better-fit workloads that do not require all the memory and compute resources of a full GPU. In this paper, we examine the performance of a MIG-enabled A100 GPU under deep learning workloads containing various sizes and combinations of models. We contrast the benefits of MIG to older workload collocation methods on GPUs: naïvely submitting multiple processes on the same GPU and utilizing Multi-Process Service (MPS). Our results demonstrate that collocating multiple model training runs may yield significant benefits. In certain cases, it can lead up to four times training throughput despite increased epoch time. On the other hand, the aggregate memory footprint and compute needs of the models trained in parallel must fit the available memory and compute resources of the GPU. MIG can be beneficial thanks to its interference-free partitioning, especially when the sizes of the models align with the MIG partitioning options. MIG's rigid partitioning, however, may create sub-optimal GPU utilization for more dynamic mixed workloads. In general, we recommend MPS as the best performing and most flexible form of collocation for model training for a single user submitting training jobs. 
cover:          /assets/images/covers/analysis_logo_card.png
authors:
  - Ties Robroek
  - Ehsan Yousefzadeh-Asl-Miandoab
  - Pınar Tözün
links:
  Paper: https://dl.acm.org/doi/10.1145/3642970.3655827
  Preprint: https://arxiv.org/abs/2209.06018
bibkey:  "Robroek2024Analysis"
bibauthor: "{Robroek, Ties and Yousefzadeh-Asl-Miandoab, Ehsan and T\\\"{o}z\\\"{u}n, P{\\i}nar}"
bibtitle: "{An Analysis of Collocation on GPUs for Deep Learning Training}"
bibbooktitle: "{Proceedings of the 4th Workshop on Machine Learning and Systems (EuroMLSys)}"
bibyear: "{2024}"
bibdoi: "{10.1145/3642970.3655827}"
biburl: "{https://dl.acm.org/doi/10.1145/3642970.3655827}"
---
