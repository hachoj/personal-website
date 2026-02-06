# Sharp-Line Style Guide v1

## Purpose and Scope
This document is the canonical visual contract for this site.

Scope:
- Implemented RecArt patterns in `src/pages/recart_demo.astro`.
- Shared style primitives in `src/styles/site.css`.
- Forward rules for upcoming homepage expansion in `src/pages/index.astro`.

Non-goals:
- No glassmorphism.
- No rounded corners.
- No ad-hoc color additions.

## Design Principles
1. Sharp corners only: `border-radius: 0`.
2. Continuous-flow rhythm over floating cards.
3. Structural hierarchy via 1px rules.
4. Single muted blue accent for interaction hierarchy.
5. Serif display typography, mono for technical/meta, readable sans body.

## Token Contract (Normative)
All style work must use the tokens below from `src/styles/site.css`.

### Color Tokens
- `--color-bg`
- `--color-surface`
- `--color-fg`
- `--color-muted`
- `--color-rule`
- `--color-accent`

### Spacing Tokens
- `--space-1`
- `--space-2`
- `--space-3`
- `--space-4`
- `--space-5`
- `--space-6`
- `--space-7`

### Type Tokens
- `--text-xs`
- `--text-sm`
- `--text-md`
- `--text-lg`
- `--text-xl`

### Border Token
- `--rule-1` (`1px solid var(--color-rule)`)

### Hard Rules
- New colors must be tokenized in `:root`; do not add per-component hex values in page templates.
- All structural separators use `--rule-1` through `rule-top` and `rule-bottom`.
- Do not override corner shape per component.

## Typography System
### Role Mapping
- Display/section headings (serif):
  - `.display-title`
  - `.section-title`
  - `.result-title`
- Technical/meta text (mono):
  - `.top-nav`
  - `.meta-item`
  - `.pill-tag`
  - `.detail-toggle summary`
  - `.mono-block`
  - `.kicker`
- Body/readability text (sans):
  - `body.site-body`
  - `.subtitle`
  - `.result-notes`

### Casing and Spacing Rules
- Navigation and technical toggle labels are uppercase with tracked spacing.
- Tags are lowercase monospace pills.
- Kicker text uses uppercase monospace with elevated letter spacing.

## Layout and Rhythm Rules
### Core Wrappers
- `.page-shell`
- `.container`
- `.container.narrow`
- `.container.wide`
- `.section-band`
- `.rule-top`
- `.rule-bottom`

### Rhythm Rules
- Primary content should read as a vertical sequence of bands.
- Avoid isolated floating card composition for major sections.
- Keep section separation explicit with 1px rules.

### RecArt Image Rule (Mandatory)
- RecArt sample outputs are 512x512 and must not stretch full-width.
- `.result-image` is capped and centered:
  - `max-width: 512px`
  - `width: min(100%, 512px)`
  - `margin-inline: auto`

## Component Patterns (Current Canon)
### 1) Static Top Navigation
```astro
<nav class="top-nav" aria-label="Primary">
  <a href="/">Home</a>
  <span> | </span>
  <a href="/recart_demo">recart_demo</a>
  <span> | </span>
  <a href="/resume_temp.pdf" target="_blank" rel="noreferrer">Resume</a>
</nav>
```

### 2) Header Band
```astro
<header class="section-band rule-top rule-bottom">
  <div class="container">
    <p class="kicker">Image Generation Study</p>
    <h1 class="display-title">{demo.title}</h1>
    <p class="subtitle">
      Image generation results from my PixArt/SD3-from-scratch training pipeline.
    </p>
  </div>
</header>
```

### 3) Result Stream (Image Band + Detail Band)
```astro
<article id={result.id} class="result-flow rule-top">
  <div class="result-image-band">
    <div class="container wide">
      <img class="result-image" src={result.image} alt={result.title} loading="lazy" />
    </div>
  </div>
  <div class="result-detail-band rule-top">
    <div class="container narrow">
      <h3 class="result-title">{result.title}</h3>
      <div class="tag-list">
        {result.tags.map((tag) => <span class="pill-tag">{tag}</span>)}
      </div>
      <p class="result-notes">{result.notes}</p>
    </div>
  </div>
</article>
```

### 4) Technical Details Disclosure
```astro
<details class="detail-toggle">
  <summary>Technical Details</summary>
  <div class="meta-row">
    {getMetaItems(result).map((item) => <span class="meta-item">{item}</span>)}
  </div>
  <pre class="mono-block">{result.prompt}</pre>
</details>
```

### Technical Details Policy (Mandatory)
- `stage`, `cfg`, `steps`, and `alpha` are technical metadata.
- They must appear only inside `Technical Details`.
- Keep title, tags, and notes visible outside the disclosure.

## Content and Information Hierarchy Rules
- Use the header subtitle to establish context once.
- Avoid duplicate intro sections when the header already explains the page.
- Keep high-signal content visible (title, tags, notes).
- Keep verbose/low-level technical content collapsed by default.

## Interaction and Motion
- Subtle-only transitions (short and linear).
- No decorative animation.
- Interactive state changes should remain in accent/foreground color space only.

## Responsive Rules
- Single-column flow across breakpoints.
- Preserve band rhythm on mobile.
- Maintain text readability via `.container.narrow`.
- Preserve 512px image cap behavior across viewport sizes.

## Do / Don't
| Do | Don't |
| --- | --- |
| Use tokens from `:root` | Hardcode random colors in templates |
| Keep `border-radius: 0` everywhere | Add rounded UI elements |
| Build sections from band + rule primitives | Use floating glass cards |
| Keep technical params inside disclosure | Expose stage/cfg/steps/alpha in header rows |
| Keep 512 outputs capped and centered | Stretch 512 images to full layout width |
| Use concise header context text | Duplicate intro copy in extra sections |

## Forward Mapping for Homepage (`src/pages/index.astro`)
Use the same primitives when redesigning the homepage:

- Hero/header:
  - Reuse header band pattern (`section-band`, `rule-top`, `rule-bottom`, `kicker`, `display-title`, `subtitle`).
- Main sections (profile, research interests, projects, publications, timeline, contact):
  - Use `section-band` + `rule-*` for spacing and separation.
  - Use `container`/`container.narrow` for line-length control.
- Project/publication rows:
  - Reuse result-detail analogs (`result-title`, `meta-row`, `mono-block` where needed) without forcing gallery image-band layout.

### Reusable vs RecArt-Specific Classes
- Reusable primitives:
  - `page-shell`, `container*`, `section-band`, `rule-*`, `top-nav`, `kicker`, `display-title`, `section-title`, `meta-row`, `meta-item`, `mono-block`.
- RecArt-specific:
  - `result-flow`, `result-image-band`, `result-image`, `result-detail-band`, `tag-list`, `pill-tag`, `result-notes`, `detail-toggle`.

## Manual Style Compliance Checklist
Use this checklist for every UI change:

1. Tokens only: colors, spacing, and type sizes come from `:root`.
2. Shape policy: no radius, blur, or glass effects introduced.
3. Line system: structural separators use `--rule-1` via rule primitives.
4. Typography roles: serif for display headings, mono for technical/meta, sans for body.
5. Information hierarchy: technical density is collapsed when verbose.
6. Image policy: 512x512 assets are capped and centered, not stretched.
7. Responsive behavior: single-column flow remains readable on mobile.
8. Copy hygiene: no redundant section intros if header context already covers it.

## Validation Scenarios
- Traceability: every token/class referenced in this guide maps to `src/styles/site.css` and/or `src/pages/recart_demo.astro`.
- Conformance: RecArt page satisfies mandatory rules above.
- Extension: new homepage sections can be built from the reusable primitives without ad-hoc style drift.
- Drift detection: checklist catches radius additions, color drift, and exposed technical metadata.
