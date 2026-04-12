---
title: Field Notes
description: Technical essays, launch notes, and deployment lessons from the vespid.ai agent stack.
---

This blog is not meant to be a marketing feed.

It is the field log for the parts of the agent deployment stack that are still being shaped in public: architecture decisions, launch notes, runtime lessons, interface tradeoffs, and mistakes worth keeping visible.

<div class="vespid-section">
  <div class="vespid-meta">Field notes hub</div>
  <h2>Read the notes as deployment evidence</h2>
  <p>
    Projects show the active lanes. Docs explain the durable control layers. Field notes capture the pressure in between: what changed, what held up, and what should become public system knowledge.
  </p>
  <div class="vespid-hub-grid">
    <a class="vespid-hub-card" href="/blog/2026-04-12-launch-notes/">
      <div class="vespid-meta">Launch notes</div>
      <h3>Why the first shell shipped this way</h3>
      <p>The first public surface optimizes for brand expression, durable navigation, and a writing system that can keep growing.</p>
    </a>
    <a class="vespid-hub-card vespid-hub-card--tall" href="/blog/why-this-stack/">
      <div class="vespid-meta">Stack choice</div>
      <h3>Astro for expression, Starlight for structure</h3>
      <p>The site needs a stronger public surface without giving up the boring discipline that keeps docs useful after the first launch.</p>
    </a>
    <a class="vespid-hub-card" href="/projects/">
      <div class="vespid-meta">Project context</div>
      <h3>Follow the live deployment lanes</h3>
      <p>Use the project hub to connect each note back to the product surface, runtime substrate, security model, or portability layer it affects.</p>
    </a>
  </div>
</div>

## Reading paths

<div class="vespid-section">
  <div class="vespid-meta">How to read</div>
  <div class="vespid-strip">
    <div>
      <strong>01</strong>
      <span>Start with the stack map</span>
      <p>Open <a href="/projects/">Projects</a> first when a note depends on a specific lane or runtime layer.</p>
    </div>
    <div>
      <strong>02</strong>
      <span>Then check the docs spine</span>
      <p>Move to <a href="/docs/">Control Layer Docs</a> when a field lesson has become reusable guidance.</p>
    </div>
    <div>
      <strong>03</strong>
      <span>Return for decision history</span>
      <p>Use field notes to understand why the public shell, docs model, and deployment stack took their current shape.</p>
    </div>
  </div>
</div>

## What belongs here

The running log is for:

- stack decisions
- interface decisions
- architecture notes
- lessons from shipping
- mistakes worth remembering

If a note is not useful to future builders, it probably does not belong here.

## Promotion rule

If a note explains a reusable control layer, it should eventually become part of [Control Layer Docs](/docs/).

If a note explains a product lane, it should point back to [Projects](/projects/).

If a note preserves deployment pressure, tradeoffs, or failure modes, it belongs here until the lesson is stable enough to graduate.
