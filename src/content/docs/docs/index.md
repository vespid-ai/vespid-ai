---
title: Documentation
description: The durable entry point for vespid.ai control layers, runtime, authorization, approvals, and technical notes.
---

Documentation is the durable reference layer for vespid.ai: the parts of the stack that should stay legible after launch notes and one-off implementation choices stop being enough.

<div class="vespid-feature-layout">
  <a class="vespid-featured-project" href="./getting-started/">
    <div class="vespid-meta">Featured guide</div>
    <h2>Getting Started</h2>
    <p>
      The fastest way to understand how this site is organized: where project pages belong, what should graduate into docs, and how the public reading system is meant to scale.
    </p>
    <div class="vespid-feature-list">
      <span>content model</span>
      <span>reading system</span>
      <span>publishing path</span>
    </div>
  </a>
  <div class="vespid-side-stack">
    <a class="vespid-side-card" href="/projects/">
      <div class="vespid-meta">Projects</div>
      <h3>See the live system first</h3>
      <p>Use the project hub when you need the current product surface, runtime layer, delegated auth model, or portability work behind a doc page.</p>
    </a>
    <a class="vespid-side-card" href="/blog/">
      <div class="vespid-meta">Blog</div>
      <h3>Read the unstable technical context</h3>
      <p>Use the blog for launch notes, architecture rationale, and deployment pressure that has not yet resolved into stable guidance.</p>
    </a>
  </div>
</div>

<div class="vespid-proof-bar">
  <div>
    <strong>2 live reference pages</strong>
    <span>The docs are intentionally small so every page carries reusable guidance instead of generic AI explanation.</span>
  </div>
  <div>
    <strong>1 job</strong>
    <span>Capture the stable operating model behind runtime control, delegated access, approval boundaries, and public system legibility.</span>
  </div>
  <div>
    <strong>2 adjacent hubs</strong>
    <span>Projects show the running system. Blog posts explain changing context. Documentation keeps the durable model in the middle.</span>
  </div>
</div>

<div class="vespid-section">
  <div class="vespid-meta">Core references</div>
  <h2>The current documentation spine</h2>
  <p>
    These pages explain the parts of the stack that should survive beyond individual launches: how content is organized, how the site reads, and how control layers stay understandable as the system grows.
  </p>
  <div class="vespid-hub-grid">
    <a class="vespid-hub-card" href="./getting-started/">
      <div class="vespid-meta">Getting started</div>
      <h3>Understand the structure</h3>
      <p>Learn where project pages, docs pages, and blog posts belong so the site stays coherent as new material is added.</p>
    </a>
    <a class="vespid-hub-card vespid-hub-card--tall" href="./design-language/">
      <div class="vespid-meta">Design language</div>
      <h3>Keep the public shell consistent</h3>
      <p>Use the design language page to keep layout, voice, and interface decisions aligned as the site evolves.</p>
    </a>
    <a class="vespid-hub-card" href="/projects/vespid/">
      <div class="vespid-meta">Runtime context</div>
      <h3>Connect docs back to the stack</h3>
      <p>Jump into vespid and SkillAuth when a reference page depends on concrete runtime or authorization mechanics.</p>
    </a>
  </div>
</div>

## Start in this order

<div class="vespid-section">
  <div class="vespid-meta">Reading path</div>
  <div class="vespid-strip">
    <div>
      <strong>01</strong>
      <span>Start with the content model</span>
      <p>Read <a href="./getting-started/">Getting Started</a> first to understand where stable reference material should live.</p>
    </div>
    <div>
      <strong>02</strong>
      <span>Then align the public shell</span>
      <p>Use <a href="./design-language/">Design Language</a> to keep the site readable, consistent, and recognizably part of one system.</p>
    </div>
    <div>
      <strong>03</strong>
      <span>Jump back to projects when needed</span>
      <p>Move to <a href="/projects/">Projects</a> whenever a doc page needs current runtime, product, or authorization context.</p>
    </div>
  </div>
</div>

<div class="vespid-section">
  <div class="vespid-meta">Operating model</div>
  <div class="vespid-project-grid">
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Principle</div>
        <span class="vespid-status-pill vespid-status-pill--green">Stable rule</span>
      </div>
      <h3>Control before autonomy</h3>
      <p>Every useful agent loop needs explicit ownership of capability, confirmation boundaries, and rollback paths.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Principle</div>
        <span class="vespid-status-pill vespid-status-pill--blue">Stable rule</span>
      </div>
      <h3>Runtime is product surface</h3>
      <p>Session state, execution routing, sandboxing, and recovery behavior are part of the user experience, not hidden implementation detail.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Principle</div>
        <span class="vespid-status-pill vespid-status-pill--amber">Editorial rule</span>
      </div>
      <h3>Blog posts become references</h3>
      <p>When a deployment lesson survives contact with real workflows, it should graduate from the blog into documentation.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Principle</div>
        <span class="vespid-status-pill vespid-status-pill--purple">Navigation rule</span>
      </div>
      <h3>Projects keep docs grounded</h3>
      <p>Reference pages should stay abstract enough to reuse, but always point back to the running systems they describe.</p>
    </div>
  </div>
</div>

## Publishing rule

If a page explains a reusable control layer, it belongs here.

If it explains one product lane, it belongs under [Projects](/projects/).

If it is still a lesson from the field, it belongs under [Blog](/blog/).