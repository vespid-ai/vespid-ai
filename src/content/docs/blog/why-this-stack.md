---
title: Why this stack fits vespid.ai
description: Why Astro carries the surface while Starlight carries the reading system.
---

A public engineering site usually dies in one of two ways:

- it becomes visually polished but hard to maintain
- it becomes easy to maintain but too generic to carry a real technical identity

Astro + Starlight is the compromise that still feels ambitious without becoming operationally fragile.

## The actual site problem

vespid.ai is not a pure docs site and not a pure marketing site.
It needs to do at least four jobs at once:

- present a stronger public platform surface
- explain live projects as one stack
- hold durable documentation
- publish engineering notes without collapsing navigation

A single tool optimized only for docs or only for landing pages would have forced the wrong tradeoff too early.

## What Astro handles well

Astro gives the site freedom where freedom actually matters:

- homepage composition
- custom landing pages
- visual differentiation between sections
- future product-surface storytelling
- tighter control over branded presentation

This is what lets the site avoid feeling like a generic documentation skin.

## What Starlight handles well

Starlight gives the site discipline where discipline matters more than freedom:

- navigation
- content organization
- search
- code-friendly reading
- the boring mechanics that should stay boring

That matters because once the site starts accumulating pages, the real challenge becomes legibility, not expressiveness.

## Why the split is useful

The important point is not just that Astro and Starlight are both good tools. The important point is that they divide the problem correctly.

- Astro controls the surface
- Starlight controls the reading system

That means the site can evolve its platform/homepage identity without rebuilding the structural parts every time the narrative sharpens.

## Why this is better than a full custom build right now

A full custom build would give more control, but it would also demand more editorial and navigation maintenance from day one.

At the current stage, the better move is to keep:

- custom effort focused on the public surface
- structural effort delegated to a boring, proven reading system
- writing effort directed toward actual pages instead of infrastructure churn

That is a better tradeoff for a growing stack site than prematurely owning every part of the frontend.

## What would change this decision later

This stack should keep winning until one of these becomes true:

- the content model outgrows Starlight’s structure
- the public surface needs interaction patterns that no longer fit cleanly around the docs shell
- maintaining the split becomes more expensive than replacing it

Until then, the split remains the correct default.

## Related reading

- [Launch notes for the first vespid.ai shell](/blog/2026-04-12-launch-notes/): why the initial release was scoped the way it was.
- [Documentation](/docs/): the durable reading layer this stack is meant to protect.
- [Projects](/projects/): the stack map that depends on this site structure staying legible.
