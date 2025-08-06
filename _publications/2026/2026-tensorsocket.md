---
title:          "TensorSocket: Shared Data Loading for Deep Learning Training"
date:           2026-05-31 00:01:00 +0800
selected:       true
pub:            "International Conference on Management of Data (SIGMOD)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2026"

abstract: >-
  Training deep learning models is a repetitive and resource-intensive process. Data scientists often train several models before landing on a set of parameters (e.g., hyper-parameter tuning) and model architecture (e.g., neural architecture search), among other things that yield the highest accuracy. The computational efficiency of these training tasks depends highly on how well the training data is supplied to the training process. The repetitive nature of these tasks results in the same data processing pipelines running over and over, exacerbating the need for and costs of computational resources. In this paper, we present TensorSocket to reduce the computational needs of deep learning training by enabling simultaneous training processes to share the same data loader. TensorSocket mitigates CPU-side bottlenecks in cases where the collocated training workloads have high throughput on GPU, but are held back by lower data-loading throughput on CPU. TensorSocket achieves this by reducing redundant computations and data duplication across collocated training processes and leveraging modern GPU-GPU interconnects. While doing so, TensorSocket is able to train and balance differently-sized models and serve multiple batch sizes simultaneously and is hardware- and pipeline-agnostic in nature. Our evaluation shows that TensorSocket enables scenarios that are infeasible without data sharing, increases training throughput by up to 100%, and when utilizing cloud instances, achieves cost savings of 50% by reducing the hardware resource needs on the CPU side. Furthermore, TensorSocket outperforms the state-of-the-art solutions for shared data loading such as CoorDL and Joader; it is easier to deploy and maintain and either achieves higher or matches their throughput while requiring fewer CPU resources. 
cover:          /assets/images/covers/tensorsocket_logo_card.png
authors:
  - Ties Robroek
  - Neil Kim Nielsen
  - Pınar Tözün
links:
  Code: https://github.com/itu-rad/tensorsocket
  Preprint: https://arxiv.org/abs/2409.18749
bibkey:  "Robroek2026TensorSocket"
bibauthor: "{Robroek, Ties and Nielsen, Neil Kim and T\\\"{o}z\\\"{u}n, P{\\i}nar}"
bibtitle: "{TensorSocket: Shared Data Loading for Deep Learning Training}"
bibbooktitle: "{Proceedings of the Conference on Management of Data (SIGMOD)}"
bibyear: "{2026}"
bibdoi: "{10.1145/3749185}"
biburl: "{https://dl.acm.org/doi/10.1145/3749185}"
---
