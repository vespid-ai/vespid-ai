---
title: Blog
description: Technical essays, launch notes, and deployment lessons from the vespid.ai agent stack.
---

The blog is the running technical log for vespid.ai: launch notes, architecture decisions, interface tradeoffs, and deployment lessons before they harden into documentation.

<div class="vespid-feature-layout">
  <a class="vespid-featured-project" href="/blog/2026-04-12-launch-notes/">
    <div class="vespid-meta">Featured post</div>
    <h2>Launch notes for the first vespid.ai shell</h2>
    <p>
      Why the first public surface shipped the way it did: structure before polish, platform framing before personal branding, and a docs spine that can keep scaling with the stack.
    </p>
    <div class="vespid-feature-list">
      <span>launch notes</span>
      <span>public surface</span>
      <span>site structure</span>
    </div>
  </a>
  <div class="vespid-side-stack">
    <a class="vespid-side-card" href="/projects/">
      <div class="vespid-meta">Projects</div>
      <h3>Trace each note back to the stack</h3>
      <p>Use the project hub when a post depends on a specific product lane, runtime layer, auth model, or portability concern.</p>
    </a>
    <a class="vespid-side-card" href="/docs/">
      <div class="vespid-meta">Documentation</div>
      <h3>Read the stable reference layer</h3>
      <p>Move from blog posts into docs when a lesson becomes reusable guidance about runtime control, approvals, or system structure.</p>
    </a>
  </div>
</div>

<div class="vespid-proof-bar">
  <div>
    <strong>2 published posts</strong>
    <span>The blog is still small, so each post should carry actual technical context instead of filler updates.</span>
  </div>
  <div>
    <strong>1 job</strong>
    <span>Explain why the stack changed, what held up under deployment pressure, and what should eventually become durable reference material.</span>
  </div>
  <div>
    <strong>2 adjacent hubs</strong>
    <span>Projects show the live system. Documentation keeps the stable model. The blog sits between them and records change.</span>
  </div>
</div>

<div class="vespid-section">
  <div class="vespid-meta">Recent posts</div>
  <h2>The current engineering context</h2>
  <p>
    These are not marketing updates. They are the short public record for why the shell, stack, and writing system are taking their current shape.
  </p>
  <div class="vespid-hub-grid">
    <a class="vespid-hub-card" href="/blog/2026-04-12-launch-notes/">
      <div class="vespid-meta">Launch notes</div>
      <h3>Why the first shell shipped this way</h3>
      <p>The first public surface optimizes for durable navigation, technical clarity, and a structure that can grow with the system.</p>
    </a>
    <a class="vespid-hub-card vespid-hub-card--tall" href="/blog/why-this-stack/">
      <div class="vespid-meta">Stack choice</div>
      <h3>Why Astro and Starlight fit this site</h3>
      <p>Why the expressive surface lives in Astro while the reference spine stays inside Starlight’s reading system.</p>
    </a>
    <a class="vespid-hub-card" href="/projects/">
      <div class="vespid-meta">Project context</div>
      <h3>Follow the live deployment lanes</h3>
      <p>Use the project hub to connect each post back to the product surface, runtime substrate, auth model, or portability layer it affects.</p>
    </a>
  </div>
</div>

## How to use this blog

<div class="vespid-section">
  <div class="vespid-meta">Reading paths</div>
  <div class="vespid-strip">
    <div>
      <strong>01</strong>
      <span>Start with projects when you need system context</span>
      <p>Open <a href="/projects/">Projects</a> first if a post depends on a specific lane or platform layer.</p>
    </div>
    <div>
      <strong>02</strong>
      <span>Move to docs when the lesson stabilizes</span>
      <p>Use <a href="/docs/">Documentation</a> when a post becomes reusable guidance instead of a point-in-time decision log.</p>
    </div>
    <div>
      <strong>03</strong>
      <span>Come here for rationale and pressure</span>
      <p>The blog should explain why choices were made, what tradeoffs appeared, and what changed under real deployment pressure.</p>
    </div>
  </div>
</div>

<div class="vespid-section">
  <div class="vespid-meta">Editorial rule</div>
  <h2>What belongs here</h2>
  <p>
    A post belongs on the blog when it is still carrying decision history, technical context, or deployment pressure that has not yet resolved into a stable reference page.
  </p>
  <div class="vespid-project-grid">
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Good fit</div>
        <span class="vespid-status-pill vespid-status-pill--green">Keep here</span>
      </div>
      <h3>Launch notes and architecture writeups</h3>
      <p>Posts explaining why a release, structural change, or system direction happened the way it did.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Good fit</div>
        <span class="vespid-status-pill vespid-status-pill--blue">Keep here</span>
      </div>
      <h3>Tradeoffs, mistakes, and field lessons</h3>
      <p>Posts that preserve failure modes, pressure points, and interface or runtime lessons worth remembering in public.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Promote later</div>
        <span class="vespid-status-pill vespid-status-pill--amber">Move to docs</span>
      </div>
      <h3>Reusable control-layer guidance</h3>
      <p>When a post becomes stable operational guidance, it should graduate into <a href="/docs/">Documentation</a>.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Point back</div>
        <span class="vespid-status-pill vespid-status-pill--purple">Link to projects</span>
      </div>
      <h3>Project-specific updates</h3>
      <p>If a post is mainly about one product lane, it should clearly point back to the relevant page in <a href="/projects/">Projects</a>.</p>
    </div>
  </div>
</div>

## Promotion rule

If a note explains a reusable control layer, it should eventually become part of [Documentation](/docs/).

If a note explains a product lane, it should point back to [Projects](/projects/).

If a note preserves deployment pressure, tradeoffs, or failure modes, it belongs here until the lesson is stable enough to graduate.
