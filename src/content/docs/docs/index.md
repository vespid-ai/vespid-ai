---
title: Documentation
description: Durable reference material for the vespid contract surface, gateway runtime, and ordinary-HTTP demo path.
---

Documentation is the durable reference layer for vespid.ai: the parts of the project that should still make sense after launch notes and one-off debates stop being enough.

<div class="vespid-feature-layout">
  <a class="vespid-featured-project" href="./getting-started/">
    <div class="vespid-meta">Featured guide</div>
    <h2>Vespid quickstart</h2>
    <p>
      Start here if you want the shortest path from clone to a live HTTP demo: install dependencies,
      run the gateway and appointment service, then inspect the discovery, grant, approval, artifact,
      and audit flow end to end.
    </p>
    <div class="vespid-feature-list">
      <span>install</span>
      <span>run demo</span>
      <span>inspect flow</span>
    </div>
  </a>
  <div class="vespid-side-stack">
    <a class="vespid-side-card" href="/projects/vespid/">
      <div class="vespid-meta">Project</div>
      <h3>See the full project surface</h3>
      <p>Move back to the project page when you want the architecture summary and public entry points around the repo.</p>
    </a>
    <a class="vespid-side-card" href="/blog/">
      <div class="vespid-meta">Blog</div>
      <h3>Read the reasoning</h3>
      <p>Use the blog when you want the product and architecture decisions behind the docs, not just the durable mechanics.</p>
    </a>
  </div>
</div>

<div class="vespid-proof-bar">
  <div>
    <strong>3 core references</strong>
    <span>The docs stay intentionally small so every page explains something structural about the contract or gateway model.</span>
  </div>
  <div>
    <strong>1 local demo path</strong>
    <span>Everything routes back to the same ordinary-HTTP quickstart instead of diverging into adapter-specific setup guides.</span>
  </div>
  <div>
    <strong>1 contribution surface</strong>
    <span>Support and feedback should start from reproducible contract or runtime questions, not abstract “agent platform” requests.</span>
  </div>
</div>

<div class="vespid-section">
  <div class="vespid-meta">Core references</div>
  <h2>The current documentation spine</h2>
  <p>
    If you read only three pages, they should tell you how to run the prototype, how the contract and gateway fit together,
    and how to propose work without losing the trust-boundary assumptions behind the project.
  </p>
  <div class="vespid-hub-grid">
    <a class="vespid-hub-card" href="./getting-started/">
      <div class="vespid-meta">Quickstart</div>
      <h3>Run the prototype</h3>
      <p>Clone the repo, start the demo, and inspect the live HTTP flow before debating adapters or packaging.</p>
    </a>
    <a class="vespid-hub-card vespid-hub-card--tall" href="./design-language/">
      <div class="vespid-meta">Contract model</div>
      <h3>Understand the contract and gateway boundary</h3>
      <p>Use the contract model page to understand why the service contract stays canonical and the gateway keeps enforcement in band.</p>
    </a>
    <a class="vespid-hub-card" href="./support/">
      <div class="vespid-meta">Support</div>
      <h3>Propose work that can be reproduced</h3>
      <p>Use the support page for issues, documentation gaps, and new demos that are grounded in the existing HTTP runtime story.</p>
    </a>
  </div>
</div>

<div class="vespid-section">
  <div class="vespid-meta">Reading path</div>
  <div class="vespid-strip">
    <div>
      <span>Start with quickstart</span>
      <p>Read <a href="./getting-started/">Vespid quickstart</a> first for the smallest useful local workflow.</p>
    </div>
    <div>
      <span>Then read the model</span>
      <p>Use <a href="./design-language/">Contract and gateway model</a> to make sure the contract surface and runtime semantics stay aligned.</p>
    </div>
    <div>
      <span>Then return to the repo</span>
      <p>Move back to <a href="/projects/vespid/">vespid</a> whenever you need the public code surface behind the documentation.</p>
    </div>
  </div>
</div>

<div class="vespid-section">
  <div class="vespid-meta">Operating rules</div>
  <div class="vespid-project-grid">
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Rule</div>
        <span class="vespid-status-pill vespid-status-pill--green">Stable</span>
      </div>
      <h3>Ordinary HTTP first</h3>
      <p>The supported v0.1 agent path is generic HTTP through the gateway runtime, not a new framework-specific client surface.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Rule</div>
        <span class="vespid-status-pill vespid-status-pill--blue">Stable</span>
      </div>
      <h3>The contract is canonical</h3>
      <p>The service manifest, OpenAPI document, and <code>x-agent-*</code> extensions define what downstream adapters are allowed to project.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Rule</div>
        <span class="vespid-status-pill vespid-status-pill--amber">Stable</span>
      </div>
      <h3>Gateway enforcement stays in band</h3>
      <p>Authorization, approval, task resume, artifacts, and audit should stay visible in the runtime path instead of being hidden behind adapter magic.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Rule</div>
        <span class="vespid-status-pill vespid-status-pill--purple">Stable</span>
      </div>
      <h3>Adapters come later</h3>
      <p>MCP, skills, actions, A2A, and UI projections can exist later, but they have to inherit the same contract and gateway semantics.</p>
    </div>
  </div>
</div>
