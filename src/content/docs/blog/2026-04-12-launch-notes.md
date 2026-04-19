---
title: Why vespid.ai now centers on vespid
description: Why the public site now introduces one concrete repository and one HTTP runtime story instead of multiple disconnected project narratives.
template: splash
---

The public site is better when it introduces the actual public project.

That sounds obvious, but the failure mode is common: a site starts collecting themes, side projects, and conceptual lanes, and the visitor has to guess which repository is real, which idea is current, and where the implementation actually lives.

That was the wrong public shape for vespid.ai.

## What changed

The site now introduces one project only: `vespid`.

That means:

- the homepage points to one repository and one docs spine
- the project hub no longer tries to explain unrelated lanes
- the blog now exists to explain decisions around the same public prototype
- the GitHub repository is part of the main reading path instead of a secondary surface

## Why this is better

A technical site becomes easier to trust when the public story is narrow enough to inspect.

For vespid, the important questions are concrete:

- what is the service contract?
- where does authorization happen?
- how does approval work?
- how is the original task resumed?
- where do artifacts and audit evidence show up?

Those questions all belong to the same repository and the same runtime story. Splitting them across multiple public narratives only makes the site feel less serious.

## What the site should do now

The homepage should route visitors to three places only:

1. the project page for scope and trust boundary
2. the docs for the durable contract/runtime model
3. the blog for short rationale and launch context

That is enough public surface for the current stage of the project.

## What this does not mean

This does not mean the project is “finished,” or that there will never be more public surfaces.

It means the current public posture should match the current implementation reality:

- one public prototype
- one ordinary-HTTP gateway story
- one canonical repository

Future adapters, demos, or distribution surfaces can appear later, but they should extend the current contract-first story rather than competing with it.

## Related reading

- [vespid](/projects/vespid/): the project the public site now centers on.
- [Documentation](/docs/): the durable contract and runtime model.
- [Why ordinary HTTP comes before adapters](/blog/why-this-stack/): the architecture choice behind the current posture.
