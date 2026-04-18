---
title: Project
description: "The public project hub for vespid.ai now centers on one repository: vespid."
---

This is the public project hub for vespid: one repository, one gateway model, and one reference demo that shows the full trust path over ordinary HTTP.

<div class="vespid-feature-layout">
  <a class="vespid-featured-project" href="/projects/vespid/">
    <div class="vespid-meta">Featured project</div>
    <h2>vespid</h2>
    <p>
      A contract-first prototype for agent-native web services that keeps discovery, authorization,
      approval, artifacts, and audit evidence inside the same HTTP runtime story.
    </p>
    <div class="vespid-feature-list">
      <span>contract-first</span>
      <span>HTTP runtime</span>
      <span>task resume</span>
    </div>
  </a>
  <div class="vespid-side-stack">
    <a class="vespid-side-card" href="/docs/">
      <div class="vespid-meta">Documentation</div>
      <h3>Understand the model</h3>
      <p>Use the docs for the gateway rules, contract semantics, and quickstart flow behind the prototype.</p>
    </a>
    <a class="vespid-side-card" href="/blog/">
      <div class="vespid-meta">Blog</div>
      <h3>Read the rationale</h3>
      <p>Use the blog for the architectural decisions that explain why the project stays HTTP-first and contract-first.</p>
    </a>
  </div>
</div>

<div class="vespid-proof-bar">
  <div>
    <strong>1 public prototype</strong>
    <span>The site, repository, docs, and blog now all point to vespid instead of splitting across unrelated public stories.</span>
  </div>
  <div>
    <strong>1 reference service</strong>
    <span>The current demo service is appointment booking, used to prove grant, approval, resume, artifact, and audit behavior.</span>
  </div>
  <div>
    <strong>1 gateway runtime</strong>
    <span>The supported v0.1 path is generic HTTP through the local gateway runtime, not a special client or adapter product surface.</span>
  </div>
</div>

<div class="vespid-section">
  <div class="vespid-meta">What the current prototype covers</div>
  <h2>The current vespid execution model</h2>
  <p>
    vespid is not trying to be a complete agent platform yet. The current slice is narrow on purpose:
    make one service contract legible, route execution through one gateway, and prove the highest-value
    trust transitions end to end.
  </p>
  <div class="vespid-project-grid">
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Discover</div>
        <span class="vespid-status-pill vespid-status-pill--green">Live</span>
      </div>
      <h3>Load service capabilities</h3>
      <p>The gateway discovers a service from <code>/.well-known/agent-service.json</code> and derives capabilities from the OpenAPI agent extensions.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Authorize</div>
        <span class="vespid-status-pill vespid-status-pill--blue">Live</span>
      </div>
      <h3>Issue scoped grants</h3>
      <p>Consequential actions require a temporary grant that matches the capability and task binding instead of an unbounded session shortcut.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Approve</div>
        <span class="vespid-status-pill vespid-status-pill--purple">Live</span>
      </div>
      <h3>Resume the original task</h3>
      <p>After grant issuance, the gateway resumes the original task and waits for approval instead of creating a duplicate consequential task.</p>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Audit</div>
        <span class="vespid-status-pill vespid-status-pill--amber">Live</span>
      </div>
      <h3>Persist artifacts and evidence</h3>
      <p>The runtime stores artifacts and audit events so the whole path can be inspected after execution, not merely observed in logs.</p>
    </div>
  </div>
</div>

<div class="vespid-section">
  <div class="vespid-meta">Suggested path</div>
  <div class="vespid-strip">
    <div>
      <span>Start with the project page</span>
      <p>Open <a href="/projects/vespid/">vespid</a> first for the clearest summary of scope, trust boundary, and public entry points.</p>
    </div>
    <div>
      <span>Then read the docs</span>
      <p>Use <a href="/docs/">Documentation</a> for the contract and runtime model that should stay stable after launch notes fade.</p>
    </div>
    <div>
      <span>Then read the rationale</span>
      <p>Use <a href="/blog/">Blog</a> when you want the reasoning behind the HTTP-first and adapter-later posture.</p>
    </div>
  </div>
</div>

## Related reading

- [vespid](/projects/vespid/): the main project page.
- [Documentation](/docs/): the durable reference layer.
- [Blog](/blog/): launch context and architecture rationale.
