---
title: Getting Started
description: How this site is organized and how new content should be added.
---

# Getting Started

This project uses Astro + Starlight for one reason: it gives a durable documentation shell without forcing the entire site into a generic docs aesthetic.

## Content model

- `src/content/docs/projects/` for project overviews
- `src/content/docs/docs/` for durable reference material
- `src/content/docs/blog/` for dated technical posts and launch notes

## Design principle

The homepage should feel like a modern product site.
The reading pages should feel like high-signal technical documentation.

## Publishing workflow

1. Write content in Markdown or MDX.
2. Keep titles and descriptions tight.
3. Add new pages in the correct directory so sidebar autogeneration stays clean.
4. Build locally before publishing.
