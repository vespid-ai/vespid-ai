---
title: GEO quickstart
description: The shortest practical path to auditing, generating, and publishing AI-search-friendly public surfaces.
---

GEO quickstart is the smallest useful workflow for improving how a public site or repository shows up in AI-native search.

## What to inspect first

Start with the public surface as it already exists:

1. homepage and core landing pages
2. product or project detail pages
3. docs hub and key reference pages
4. repository README, description, homepage, and releases
5. `robots.txt`, sitemap, `llms.txt`, and structured data candidates

Do not start by adding random GEO artifacts. Start by checking whether the current public story is already clear.

## Minimum useful workflow

1. audit the current surface with `geo-skill`
2. identify missing or contradictory public facts
3. generate or repair the machine-readable artifacts that reinforce the right URLs
4. update the human-readable pages so the same story appears in visible copy and metadata
5. compare before/after reports instead of assuming the change helped

## Minimum artifact set

For most sites, the first useful artifact set is:

- clear homepage and project pages
- valid sitemap and `robots.txt`
- an `llms.txt` that points at the right URLs
- stable repo metadata and release notes
- structured data where it clarifies the page role instead of adding noise

## Common mistakes

### Publishing artifacts without a page model
If the homepage, docs, and repo each tell a different story, `llms.txt` will not save you.

### Treating GEO like copywriting only
Copy matters, but AI search systems also depend on structure, page role, metadata, links, and machine-readable artifacts.

### Claiming wins without comparison
You need before/after evidence. GEO should behave like operational work, not vibes-based SEO.

## Suggested next step

- Open the project page: [geo-skill](/projects/geo-skill/)
- Then read: [GEO surface model](/docs/design-language/)
