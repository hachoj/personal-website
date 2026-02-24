---
title: "Evaluating Modern LLM Optimizations on ViT"
description: This blog recounts my testing on the impact of modern LLM optimizations on ViT-based models, such as SwiGLU, removing bias, and the Muon optimizer.
pubDatetime: 2026-02-19
draft: false
featured: false
---

## The Task

As almost everyone in the ML community knows by now, the transformer architecture has been pulling away from architectures like CNNs for some time, with increased ability to model long-range dependencies and better scaling laws.
However, within vision, the techniques used in research to boost the default performance of ViTs (not including their own training innovations) seem to still be using the same ViT and optimizer as the original paper.
The goal of this blog is to show the effect of transformer innovations that (mm)LLMs have been using for some time, or in some cases things that are still new even there.
The innovations I chose to test are SwiGLU activations, removing bias terms from all layers, and swapping AdamW for the Muon optimizer.
There are many vision tasks I could have tested this on, but I am particularly fond of SSL (Self-Supervised Learning), so I chose to train ViT-S/16 on an MAE task with the ImageNet-1K dataset.

### Default Parameters

**Encoder / Decoder**

$$
\begin{array}{lcc}
\hline
\textbf{Parameter} & \textbf{Encoder} & \textbf{Decoder} \\
\hline
\text{dim} & 384 & 384 \\
\text{num\_blocks} & 12 & 8 \\
\text{num\_heads} & 6 & 16 \\
\text{mlp\_ratio} & 4 & 4 \\
\text{input\_size} & 224\times224 & 224\times224 \\
\text{patch\_kernel} & 16\times16 & - \\
\text{patch\_stride} & 16\times16 & 16\times16 \\
\text{patch\_padding} & 0\times0 & - \\
\text{drop\_path\_p} & 0.0 & 0.0 \\
\hline
\end{array}
$$

**Training**

$$
\begin{array}{lc}
\hline
\textbf{Parameter} & \textbf{Value} \\
\hline
\text{mask\_ratio} & 0.6 \\
\text{batch\_size} & 2048 \\
\text{num\_epochs} & 400 \\
\text{warmup\_epochs} & 40 \\
\text{weight\_decay} & 0.05 \\
\text{adamw\_betas} & (0.9,\ 0.95) \\
\text{grad\_accum} & 2 \\
\hline
\end{array}
$$


**Muon Parameters**

$$
\begin{array}{lc}
\hline
\textbf{Parameter} & \textbf{Value} \\
\hline
\text{weight\_decay} & 0.1 \\
\text{adjust\_lr\_fn} & \text{match\_rms\_adamw} \\
\text{ns\_steps} & 5 \\
\text{nesterov} & \text{True} \\
\text{momentum} & 0.95 \\
\hline
\end{array}
$$

## Results

![Val losses](public/figures/val_loss.png)

$$
\begin{array}{lc}
\hline
\textbf{Model} & \textbf{Best Val Loss} \\
\hline
\text{AdamW, bias, GELU} & 0.34891 \\
\text{Muon, bias, GELU} & 0.34571 \\
\text{Muon, no bias, GELU} & 0.34579 \\
\text{Muon, bias, SwiGLU} & \mathbf{0.34484} \\
\hline
\end{array}
$$

Interpreting the results, the largest change came from moving from AdamW to Muon for the 2D weight matrices[^1].
Surprisingly, challenging a lot of history in machine learning, removing the bias has very little effect vs the Muon baseline.
My theory for why removing biases from all layers didn't hurt performance is because of the learned shift in LayerNorm. TODO: elaborate when RMSNorm experiments are done.

Another note, which to some isn't surprising, is replacing GELU with a SwiGLU style FFN with equivalent parameters (scale the hidden dim by $2/3$) further improved performance of the model.

![Train Losses](public/figures/train_loss_early.png)

Looking at the train losses where I logged more data, you can see that AdamW actually did start off better, but that effect only lasted for a few epochs, after which, AdamW never was better than Muon.

My theory on this is that Muon has no bias correction like AdamW with its
$$
\begin{align*}
\hat{m}_t &\leftarrow m_t/(1-B_1^t) \\
\hat{v}_t &\leftarrow v_t/(1-B_2^t)
\end{align*}
$$
Muon initializes its momentum with $M_t = 0, t = 0$, so early on the momentum is weighted towards a zero matrix. 

[^1]: Muon relies on orthogonalization via Newton-Schulz iterations, which cannot be performed on 1D vectors. As a result, it is only applied to 2D weight matrices, while embeddings, biases, and other 1D parameters are updated with AdamW.

### Summary

From this simple testing, it becomes quite clear that modern transformer optimizations are generally applicable to ViT architectures as well.
Muon showed no evident standout downsides, while SwiGLU did produce a few loss spikes, though the overall trajectory of the losses seemed unchanged.
Future testing on downstream tasks is worth looking into, including linear probing, k-NN classification, and fine-tuning for classification.

Repository: [https://github.com/hachoj/iSSL](https://github.com/hachoj/iSSL)