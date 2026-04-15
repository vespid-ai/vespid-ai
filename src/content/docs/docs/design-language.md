---
title: GEO surface model
description: How homepage, docs, repository, metadata, and machine-readable artifacts should reinforce the same GEO story.
---

The GEO surface model is the rule that keeps public discoverability work coherent.

## The public surface is one system

A site is not just the homepage. A discoverable public system usually includes:

- homepage
- project or product detail pages
- documentation hubs and key reference pages
- blog or changelog pages
- repository README, description, topics, homepage link, and releases
- machine-readable artifacts such as `llms.txt`, sitemap, and structured data

If those layers disagree, AI-native search systems see a fuzzy story.

## Page-role hierarchy

### 1. Homepage
The homepage should state what the project is in one sentence and route people and machines to the right deeper pages.

### 2. Project page
The project page should answer scope, status, why it exists, what is already real, and where to go next.

### 3. Documentation
Docs should carry the durable reference layer: workflows, rules, and stable explanations that do not depend on one launch moment.

### 4. Blog or changelog
Blog posts should explain rationale, tradeoffs, and field pressure. They should not become the only place where key facts live.

### 5. Repository surface
GitHub description, README, homepage link, releases, and tags must reinforce the same URLs and same story as the site.

## Machine-readable artifacts

### `llms.txt`
Use it to highlight the URLs and resources that matter most. It should reflect the real page model, not a speculative sitemap.

### Structured data
Use schema when it clarifies page role, project identity, releases, or organization facts. Do not add markup that the page itself does not support.

### Sitemap and robots
Make sure important pages are crawlable, canonical, and easy to discover.

## Editorial rule

A GEO surface is healthy when:

- the most important pages are obvious
- the same facts repeat consistently across visible copy and metadata
- machine-readable artifacts reinforce the same URL hierarchy
- repo and site surfaces point to each other cleanly

If any of those fail, AI search usually gets noisier instead of better.
