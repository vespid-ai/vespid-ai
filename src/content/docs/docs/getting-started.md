---
title: Getting Started
description: How the vespid.ai site is organized and where new material should live.
---

Getting Started explains the content model behind vespid.ai: how homepage surfaces, project pages, documentation pages, and blog posts fit together without collapsing into one mixed stream.

## Page overview

This site is not a pure docs site and not a pure marketing site.
It needs a simple publishing model that keeps four different things legible at the same time:

- a platform-style homepage
- project pages for the live stack
- documentation for durable reference material
- blog posts for rationale, launch notes, and deployment pressure

If those content types are not separated clearly, the site becomes harder to navigate every time a new page is added.

## Content model

Use these directories as the first rule of placement:

- `src/content/docs/projects/` for project overviews and project detail pages
- `src/content/docs/docs/` for durable reference material
- `src/content/docs/blog/` for dated technical posts and launch notes

The point is not just file organization. The point is to keep readers from having to guess whether a page is a stable reference, a live project surface, or a point-in-time engineering note.

## How to decide where a page belongs

### Put it in Projects when
- the page explains one concrete system or product lane
- the page needs status, scope, current stage, or next milestone framing
- the page is best understood as part of the live stack map

### Put it in Documentation when
- the page explains a reusable control layer or stable operating rule
- the content should remain true across multiple releases
- the goal is to teach a model, not narrate a moment

### Put it in Blog when
- the page records why a decision was made
- the lesson is still stabilizing
- the value is in the rationale, pressure, or tradeoff rather than a finished reference model

## Design principle

The homepage should feel like a modern product and platform site.
The reading pages should feel like high-signal technical documentation.

That means the visual shell can evolve, but the reading system should remain boring in the best sense: clear navigation, stable structure, and pages that are easy to scan months later.

## Publishing workflow

1. Write content in Markdown or MDX.
2. Keep titles and descriptions tight enough to work in navigation, cards, and search.
3. Put the page in the correct directory before polishing the prose.
4. Build locally before publishing.
5. If the page still reads like decision history, move it to Blog instead of forcing it into Documentation.

## Related reading

- [Documentation](/docs/): the hub this page belongs to.
- [Projects](/projects/): the stack map for live product and system layers.
- [Blog](/blog/): the place for technical context before it hardens into reference guidance.
