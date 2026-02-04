export const profile = {
  name: 'Harrison Chojnowski',
  email: 'chojnowski.h@ufl.edu',
  phone: '(702) 355-5729',
  location: 'Gainesville, FL',
  github: 'https://github.com/hachoj'
} as const;

// Keep these factual and sourced from resume/GitHub. Avoid personal narrative here.
export const highlights = [
  'B.S. Computer Science & Mathematics @ University of Florida (2024–2027)',
  'Researcher @ MIRTH AI Lab (2024–Present)',
  'OPS Researcher @ University of Florida (2025–Present)'
] as const;

export const areas = [
  'diffusion / flow matching',
  'implicit neural representations (INRs)',
  'medical imaging',
  'image-text alignment'
] as const;

export const updates = [
  'TODO: Add a real update item (e.g., paper status change, new repo write-up).',
  'TODO: Add another update item.'
] as const;

export const employment = [
  {
    role: 'Researcher',
    org: 'MIRTH AI Lab',
    period: '2024 - Present',
    location: 'Gainesville, FL',
    highlights: [
      'Trained diffusion and flow-matching generative models for high-fidelity medical image synthesis.',
      'Developed implicit neural representations (INRs) for resolution-independent volumetric analysis.',
      'Implemented GRPO pipelines to align model reasoning with expert clinical reports.'
    ]
  },
  {
    role: 'Paid OPS Researcher',
    org: 'University of Florida',
    period: '2025 - Present',
    location: 'Gainesville, FL',
    highlights: [
      'Built feature extraction pipelines across medical imaging modalities including ultrasound.',
      'Trained semantic embeddings from clinical reports using LLMs for image-text alignment.'
    ]
  }
] as const;

export const education = [
  {
    degree: 'B.S. Computer Science, B.S. Mathematics',
    school: 'University of Florida',
    period: 'Aug 2024 - May 2027',
    gpa: '3.95 / 4.00',
    details: [
      'Deep Learning in Medical Image Analysis',
      'Linear Algebra for Data Science',
      'Real Analysis with Advanced Calculus I and II'
    ]
  }
] as const;

export const projects = [
  {
    name: 'PixArt/SD3 from Scratch (Full Pipeline)',
    stack: 'PyTorch, vLLM',
    detail: 'Implemented full 5-stage training pipeline and full model stack end-to-end.',
    href: 'https://github.com/hachoj/Pixart-Alpha-From-Scratch',
    featured: true
  },
  {
    name: 'Geometry-Aware-MicroUS-INR',
    stack: 'Python',
    detail: 'TODO: Add 1-2 factual sentences describing what this repo does and your contribution.',
    href: 'https://github.com/mirthAI/GeometryAware-MicroUS-INR',
    featured: true
  },
  {
    name: 'GRPO-From-Scratch',
    stack: 'Python',
    detail: 'TODO: Add 1-2 factual sentences describing what this repo implements.',
    href: 'https://github.com/hachoj/GRPO-From-Scratch',
    featured: true
  },
  {
    name: 'PixArt Stage-1 POC (JAX Stack)',
    stack: 'Flax, Optax, Equinox, Grain',
    detail: 'Proof-of-concept implementation for stage 1 to demonstrate JAX ecosystem proficiency.',
    href: 'https://github.com/hachoj/PixelArt-Alpha-Equinox-Grain',
    featured: true
  },
  {
    name: 'Triton',
    stack: 'Python',
    detail: 'TODO: Add 1-2 factual sentences describing what this repo contains.',
    href: 'https://github.com/hachoj/Triton',
    featured: false
  }
] as const;

export const publications = [
  {
    title: 'Geometry-Aware Implicit Neural Reconstruction of Oblique Micro-Ultrasound Scans',
    venue: 'In review at MIDL',
    year: '2026',
    links: {
      pdf: null,
      code: null
    }
  },
  {
    title: 'AortaGPT: An Interactive Vision-Language System for Aortic CT Analysis',
    venue: 'In review at CVPR',
    year: '2026',
    links: {
      pdf: null,
      code: null
    }
  }
] as const;

