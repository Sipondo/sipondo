---
title:          "Profiling and Monitoring Deep Learning Training Tasks"
date:           2023-05-08 00:01:00 +0800
selected:       false
pub:            "European Workshop on Machine Learning and Systems (EuroMLSys)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Best Presentation</span>'
pub_date:       "2023"

abstract: >-
  The embarrassingly parallel nature of deep learning training tasks makes CPU-GPU co-processors the primary commodity hardware for them. The computing and memory requirements of these tasks, however, do not always align well with the available GPU resources. It is, therefore, important to monitor and profile the behavior of training tasks on co-processors to understand better the requirements of different use cases. In this paper, our goal is to shed more light on the variety of tools for profiling and monitoring deep learning training tasks on server-grade NVIDIA GPUs. In addition to surveying the main characteristics of the tools, we analyze the functional limitations and overheads of each tool by using a both light and heavy training scenario. Our results show that monitoring tools like nvidia-smi and dcgm can be integrated with resource managers for online decision making thanks to their low overheads. On the other hand, one has to be careful about the set of metrics to correctly reason about the GPU utilization. When it comes to profiling, each tool has its time to shine; a framework-based or system-wide GPU profiler can first detect the frequent kernels or bottlenecks, and then, a lower-level GPU profiler can focus on particular kernels at the micro-architectural-level.
cover:          /assets/images/covers/rad_logo_card.png
authors:
  - Ehsan Yousefzadeh-Asl-Miandoab
  - Ties Robroek
  - Pınar Tözün
links:
  Paper: https://dl.acm.org/doi/10.1145/3578356.3592589
  Preprint: https://itu-dasyalab.github.io/RAD/publication/papers/euromlsys2023.pdf
bibkey:  "Yousefzadeh2023Profiling"
bibauthor: "{Yousefzadeh-Asl-Miandoab, Ehsan and Robroek, Ties and T\\\"{o}z\\\"{u}n, P{\\i}nar}"
bibtitle: "{Profiling and Monitoring Deep Learning Training Tasks}"
bibbooktitle: "{Proceedings of the 4th Workshop on Machine Learning and Systems (EuroMLSys)}"
bibyear: "{2023}"
bibdoi: "{10.1145/3578356.3592589}"
biburl: "{https://dl.acm.org/doi/10.1145/3578356.3592589}"
---
