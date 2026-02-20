---
title: "Evaluating Modern LLM Optimizations on ViT"
description: This blog recounts my testing on the impact of modern LLM optimizations on ViT-based models, such as SwiGLU, removing bias, and the Muon optimizer.
pubDatetime: 2026-02-19
draft: false
featured: false
---

This post summarizes my experiments evaluating the impact of modern LLM optimizations on ViT-based models. I tested techniques like SwiGLU activations, removing bias terms, and using the Muon optimizer to see how they affect training stability and performance.

### The Task

To evaluate the effect of these changes in an efficent time frame, I chose ViT-S/16 MAE pretraining on ImageNet-1K. 

$$
\begin{aligned}
&\textbf{Input: } f, \alpha, x_0 \\
&x \leftarrow x_0 \\
&\textbf{while } \|\nabla f(x)\| > \varepsilon \textbf{ do} \\
&\quad x \leftarrow x - \alpha \nabla f(x) \\
&\textbf{return } x
\end{aligned}
$$


## Stack

- PyTorch
- INRs

## Summary

Geometry-aware implicit neural reconstruction for oblique micro-ultrasound: replaced linear interpolation with a learned model (+9% SSIM over baselines), reconstructed coherent 3D volumes from oblique slices, and introduced a HAT-encoder-based INR design for inter-slice modeling.

Repository: [https://github.com/mirthAI/GeometryAware-MicroUS-INR](https://github.com/mirthAI/GeometryAware-MicroUS-INR)
