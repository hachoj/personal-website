---
title: "Project Note: PixArt/SD3 from Scratch (Full Pipeline)"
description: Temporary project entry. Full technical write-up coming soon.
pubDatetime: 2026-02-14T12:30:00Z
draft: false
featured: false
tags:
  - projects
  - diffusion
  - generative-models
---

This is a temporary project post.

## Stack

- PyTorch
- Transformer Engine
- vLLM
- webdataset

## Summary

Implemented a full MMDiT stack from scratch in both JAX/Equinox and PyTorch, including a 22M-image caption+latent pipeline (Qwen3-VL-8B via vLLM) and multi-stage ImageNet pretraining/finetuning with SD3-style rectified-flow design choices.

Repository: [https://github.com/hachoj/Pixart-Alpha-From-Scratch](https://github.com/hachoj/Pixart-Alpha-From-Scratch)
