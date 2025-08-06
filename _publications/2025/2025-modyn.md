---
title:          "Modyn: Data-Centric Machine Learning Pipeline Orchestration"
date:           2025-06-22 00:01:00 +0800
selected:       true
pub:            "International Conference on Management of Data (SIGMOD)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2025"

abstract: >-
  In real-world machine learning (ML) pipelines, datasets are continuously growing. Models must incorporate this new training data to improve generalization and adapt to potential distribution shifts. The cost of model retraining is proportional to how frequently the model is retrained and how much data it is trained on, which makes the naive approach of retraining from scratch each time impractical.
  We present Modyn, a data-centric end-to-end machine learning platform. Modyn's ML pipeline abstraction enables users to declaratively describe policies for continuously training a model on a growing dataset. Modyn pipelines allow users to apply data selection policies (to reduce the number of data points) and triggering policies (to reduce the number of trainings). Modyn executes and orchestrates these continuous ML training pipelines. The system is open-source and comes with an ecosystem of benchmark datasets, models, and tooling. We formally discuss how to measure the performance of ML pipelines by introducing the concept of composite models, enabling fair comparison of pipelines with different data selection and triggering policies. We empirically analyze how various data selection and triggering policies impact model accuracy, and also show that Modyn enables high throughput training with sample-level data selection. 
cover:          /assets/images/covers/modyn_logo_card.png
authors:
  - Maximilian Böther
  - Ties Robroek
  - Viktor Gsteiger
  - Xianzhe Ma
  - Pınar Tözün
  - Ana Klimovic
links:
  Code: https://github.com/eth-easl/modyn
  Preprint: https://arxiv.org/abs/2312.06254
bibkey:  "Bother2025Modyn"
bibauthor: "{B\\\"{o}ther, Maximilian and Robroek, Ties and Gsteiger, Viktor and Ma, Xianzhe and T\\\"{o}z\\\"{u}n, P{\\i}nar and Klimovic, Ana}"
bibtitle: "{Modyn: Data-Centric Machine Learning Pipeline Orchestration}"
bibbooktitle: "{Proceedings of the Conference on Management of Data (SIGMOD)}"
bibyear: "{2025}"
bibdoi: "{10.1145/3709705}"
biburl: "{https://dl.acm.org/doi/10.1145/3709705}"
---
