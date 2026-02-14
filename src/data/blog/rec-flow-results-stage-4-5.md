---
title: "Rec-Flow Results: Stage 5 Highlights"
description: Selected Stage 5 rec-flow generations with shared settings and short observations across style categories.
pubDatetime: 2026-02-14T12:00:00Z
draft: false
featured: true
tags:
  - rec-flow
  - diffusion
  - image-generation
---

This post is a compact record of representative outputs from my rec-flow experiments.

## Setup

Runs in this set share the same settings:

- CFG: 4.0
- Steps: 24
- Alpha: 1.75
- Stage: 5

## Examples

### Red Girl with Kite

Painterly scene with warm directional light and strong red color control. This run is useful as a composition test for human pose + architecture + calligraphic texture.

![Red Girl with Kite](/figures/red_girl.png)

### Weathered Marble Statue

Material and lighting study of a marble bust. The output preserves erosion detail and directional shadows with strong local contrast.

![Weathered Marble Statue](/figures/statue.png)

### Low-Poly Pancakes in Kelp Forest

A deliberate style-constrained prompt. The model keeps faceted geometry and flat shading while still producing readable food shapes.

![Low-Poly Pancakes in Kelp Forest](/figures/pancakes.png)

### Anime Girl on Rainy Tokyo Street

Good atmosphere consistency: cool ambient palette, wet reflections, and soft distant lights. This run was mainly used to evaluate mood stability.

![Anime Girl on Rainy Tokyo Street](/figures/anime_girl_rainy.png)

### Low-Poly Darth Vader

Another geometry-style check. The render keeps simplified forms and limited palette under a character-centric prompt.

![Low-Poly Darth Vader](/figures/low_poly_vader.png)

### Misty Ink Mountain Forest

Minimal ink-style composition with empty-space emphasis. This was useful for testing brush-density and fog layering behavior.

![Misty Ink Mountain Forest](/figures/ink.png)

### Expanse

Panoramic landscape focused on depth cues and atmospheric perspective. The result is strong on scale, horizon separation, and long-range structure.

![Expanse](/figures/expanse.png)

## Notes

- All results in this post are Stage 5 outputs.
- Next pass: expand with per-run prompt variants and failure cases.
