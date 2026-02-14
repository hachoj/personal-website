---
layout: ../layouts/AboutLayout.astro
title: "About"
---

## Profile

<style>
  .about-profile {
    display: grid;
    grid-template-columns: 78px 1fr;
    gap: 1rem;
    align-items: start;
    margin: 0.5rem 0 0.25rem;
  }

  .about-profile img {
    width: 78px;
    height: 78px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid var(--border);
  }

  .about-profile p {
    margin: 0 0 0.45rem;
  }

  @media (max-width: 640px) {
    .about-profile {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
  }
</style>

<div class="about-profile">
  <img src="/profile_picture.png" alt="Harrison Chojnowski" />
  <div>
    <p><strong>Name:</strong> Harrison Chojnowski</p>
    <p><strong>Location:</strong> Gainesville, FL</p>
    <p><strong>Phone:</strong> (702) 355-5729</p>
    <p><strong>Email:</strong> <a href="mailto:chojnowski.h@ufl.edu">chojnowski.h@ufl.edu</a></p>
    <p><strong>GitHub:</strong> <a href="https://github.com/hachoj">https://github.com/hachoj</a></p>
    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harrison-chojnowski/">https://www.linkedin.com/in/harrison-chojnowski/</a></p>
  </div>
</div>

## Highlights

- B.S. Computer Science & Mathematics @ University of Florida (2024-2027)
- Researcher @ MIRTH AI Lab (2024-Present)
- OPS Researcher @ University of Florida (2025-Present)

## Research Interests

- Self-supervised learning.
- Reinforcement learning.
- Geometric constraints and feature representations (manifolds, spectral structure).
- Current focus: image-based SSL in medical imaging and abstract feature extraction from radiological reports.

## Timeline

### Researcher, MIRTH AI Lab
- Period: 2024 - Present
- Location: Gainesville, FL
- Trained diffusion and flow-matching generative models for high-fidelity medical image synthesis.
- Developed implicit neural representations (INRs) for resolution-independent volumetric analysis.

### Paid OPS Researcher, University of Florida
- Period: 2025 - Present
- Location: Gainesville, FL
- Built self supervised abstract feature extraction pipelines across medical imaging modalities including ultrasound.
- Trained semantic embeddings from clinical reports using encoder-decoder architectures.

### B.S. Computer Science, B.S. Mathematics, University of Florida
- Period: Aug 2024 - May 2027
- GPA: 3.95 / 4.00
- Relevant coursework:
  - Deep Learning in Medical Image Analysis
  - Linear Algebra for Data Science
  - Real Analysis with Advanced Calculus I and II

## Publications

### Geometry-Aware Implicit Neural Reconstruction of Oblique Micro-Ultrasound Scans
- Venue: In review at MIDL (2026)
- Code: [https://github.com/mirthAI/GeometryAware-MicroUS-INR](https://github.com/mirthAI/GeometryAware-MicroUS-INR)

### AortaGPT: An Interactive Vision-Language System for Aortic CT Analysis
- Venue: In review at CVPR (2026)
