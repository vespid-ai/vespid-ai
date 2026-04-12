---
title: Launch notes for the first vespid.ai shell
description: Why Astro + Starlight won and how the first public structure was chosen.
---

The first public version of vespid.ai was designed to optimize for three things:

1. a homepage that can carry a stronger platform voice
2. a docs system that will not collapse as content grows
3. a workflow simple enough to keep publishing in public

## Why this mattered

The hard problem was never rendering HTML. The hard problem was building a site that could keep working once projects, docs, and technical notes started accumulating.

A site like this fails in one of two predictable ways:

- it becomes visually polished but structurally fragile
- it becomes easy to update but too generic to carry a real product or platform story

The first shell had to avoid both.

## Why not build from scratch?

Because a custom site would have optimized too early for control and too early against discipline.

At this stage, the site needed:

- a flexible homepage surface
- a durable reading system
- automatic navigation that would not become a maintenance tax immediately
- a writing workflow that stays boring enough to keep using

Building everything from scratch would have increased freedom, but it would also have increased structural drift.

## Why Astro + Starlight won

Astro handles the expressive surface.
Starlight handles the reading discipline.

That split fit the real shape of the site:

- homepage and landing pages need stronger composition freedom
- docs and long-form reading need stable navigation, search, and content structure
- the public shell needs to feel branded without turning the entire site into custom frontend overhead

So the stack choice was not aesthetic first. It was operational first.

## What shipped in the first shell

The first release established:

- a public homepage framing vespid.ai as a systems/platform site rather than a personal site
- a docs spine that can hold stable references
- a projects area for the live stack map
- a blog path for launch notes and engineering context

That was enough to make the site publishable while keeping room for the structure to harden over time.

## What did not ship yet

The first shell was not trying to finish everything. It intentionally left out:

- a polished long-tail page system for every project detail
- a mature editorial system for posts beyond the first notes
- a final visual language for all second-level pages
- the deeper product storytelling that should only come after the structure proves stable

## Immediate implication

The first shell should be judged less like a finished marketing site and more like a correct public substrate.

If the structure holds, future polishing is cheap.
If the structure is wrong, polish only hides the problem.

## Related reading

- [Why this stack fits vespid.ai](/blog/why-this-stack/): the broader reasoning behind Astro + Starlight.
- [Documentation](/docs/): the durable reference layer that this launch was designed to support.
- [Projects](/projects/): the stack map that the first shell needed to make readable in public.
