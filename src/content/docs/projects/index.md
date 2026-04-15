---
title: Projects
description: "The open-source map of the vespid.ai stack: product surface, delegated authorization, runtime control, and operator portability."
---

The projects under vespid.ai are meant to read as one operating stack, not a bag of disconnected experiments.

<div class="vespid-feature-layout">
  <a class="vespid-featured-project" href="/projects/vespid-voice/">
    <div class="vespid-meta">Featured project</div>
    <h2>vespid_voice</h2>
    <p>
      The clearest product surface in the stack: an Android-first voice interface where realtime orchestration,
      approval policy, and agent routing have to work in a real user loop.
    </p>
    <div class="vespid-feature-list">
      <span>voice interface</span>
      <span>approval policy</span>
      <span>runtime routing</span>
    </div>
  </a>
  <div class="vespid-side-stack">
    <a class="vespid-side-card" href="/docs/">
      <div class="vespid-meta">Documentation</div>
      <h3>Understand the control model</h3>
      <p>Read the durable reference material for runtime control, delegated access, operator state, and approval boundaries.</p>
    </a>
    <a class="vespid-side-card" href="/blog/">
      <div class="vespid-meta">Blog</div>
      <h3>Follow technical decisions</h3>
      <p>Use the blog for launch notes, architecture writeups, and the deployment lessons that have not hardened into docs yet.</p>
    </a>
  </div>
</div>

<div class="vespid-proof-bar">
  <div>
    <strong>1 featured product</strong>
    <span>vespid_voice is where the stack is forced to become understandable, responsive, and operationally safe for a user.</span>
  </div>
  <div>
    <strong>4 public systems</strong>
    <span>Runtime control, delegated authorization, operator portability, and discovery tooling form the public support layers underneath the product surface.</span>
  </div>
  <div>
    <strong>1 public reading path</strong>
    <span>Projects, documentation, and blog posts are meant to explain the same system from different entry points.</span>
  </div>
</div>

<div class="vespid-section">
  <div class="vespid-meta">Core systems</div>
  <h2>The platform layers behind the product</h2>
  <p>
    These projects are the parts of the stack that make agent systems controllable in real operator workflows: runtime boundaries,
    explicit authorization, portable context, and a user-facing surface where those constraints actually matter.
  </p>
  <div class="vespid-project-grid">
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Runtime</div>
        <span class="vespid-status-pill vespid-status-pill--purple">Public core</span>
      </div>
      <h3><a href="/projects/vespid/">vespid</a></h3>
      <p>Brokered sessions, local sandboxes, protected actions, session storage, and vault-backed state for agent execution with real control boundaries.</p>
      <div class="vespid-feature-list">
        <span>runtime</span>
        <span>sandboxing</span>
        <span>protected actions</span>
      </div>
      <div class="vespid-project-footer">
        <span>The systems layer underneath the rest of the stack.</span>
        <a href="/projects/vespid/">Open project</a>
      </div>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Authorization</div>
        <span class="vespid-status-pill vespid-status-pill--blue">Reference v0</span>
      </div>
      <h3><a href="/projects/skillauth/">SkillAuth</a></h3>
      <p>Delegated authorization for agent execution against login-gated platforms without handing over passwords, cookies, or long-lived session state.</p>
      <div class="vespid-feature-list">
        <span>scoped access</span>
        <span>audit boundary</span>
        <span>revocable capability</span>
      </div>
      <div class="vespid-project-footer">
        <span>The authorization thesis in executable form.</span>
        <a href="/projects/skillauth/">Open project</a>
      </div>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Portability</div>
        <span class="vespid-status-pill vespid-status-pill--amber">Incubating</span>
      </div>
      <h3><a href="/projects/hermes-profile-sync/">hermes-profile-sync</a></h3>
      <p>Portable export, sanitization, sync, and restore for Hermes Agent setups without treating local state as one unsafe blob.</p>
      <div class="vespid-feature-list">
        <span>profile export</span>
        <span>manifest import</span>
        <span>safe sync</span>
      </div>
      <div class="vespid-project-footer">
        <span>Portability as an operator trust surface.</span>
        <a href="/projects/hermes-profile-sync/">Open project</a>
      </div>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Discovery</div>
        <span class="vespid-status-pill vespid-status-pill--green">Released CLI</span>
      </div>
      <h3><a href="/projects/geo-skill/">geo-skill</a></h3>
      <p>Generative Engine Optimization skill pack and Python CLI for AI search, ChatGPT Search, llms.txt, and machine-readable project discovery.</p>
      <div class="vespid-feature-list">
        <span>AI search</span>
        <span>llms.txt</span>
        <span>structured data</span>
      </div>
      <div class="vespid-project-footer">
        <span>The discovery/distribution layer for public site and repo legibility.</span>
        <a href="/projects/geo-skill/">Open project</a>
      </div>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Public site</div>
        <span class="vespid-status-pill vespid-status-pill--green">Live shell</span>
      </div>
      <h3><a href="/">vespid.ai</a></h3>
      <p>The documentation and narrative shell that makes the stack readable to builders, operators, and future contributors.</p>
      <div class="vespid-feature-list">
        <span>site shell</span>
        <span>docs path</span>
        <span>public narrative</span>
      </div>
      <div class="vespid-project-footer">
        <span>The public reading layer tying the rest of the stack together.</span>
        <a href="/">Open homepage</a>
      </div>
    </div>
  </div>
</div>

## Start with the right project

<div class="vespid-hub-grid">
  <a class="vespid-hub-card" href="/projects/vespid-voice/">
    <div class="vespid-meta">Product</div>
    <h3>See the user-facing surface</h3>
    <p>Start with vespid_voice if you want to understand how the stack behaves when a real operator is in the loop.</p>
  </a>
  <a class="vespid-hub-card vespid-hub-card--tall" href="/projects/vespid/">
    <div class="vespid-meta">Platform</div>
    <h3>Inspect runtime and control primitives</h3>
    <p>Open vespid and SkillAuth if you want the lower-level execution model behind runtime control and delegated access.</p>
  </a>
  <a class="vespid-hub-card" href="/projects/hermes-profile-sync/">
    <div class="vespid-meta">Operator state</div>
    <h3>Follow portability work</h3>
    <p>Read hermes-profile-sync if you care about how memory, skills, and configuration move safely across machines.</p>
  </a>
</div>

<div class="vespid-section">
  <div class="vespid-meta">Reading order</div>
  <div class="vespid-strip">
    <div>
      <strong>01</strong>
      <span>Start with the product</span>
      <p>Open <a href="/projects/vespid-voice/">vespid_voice</a> first if you want the shortest path to the stack in practice.</p>
    </div>
    <div>
      <strong>02</strong>
      <span>Then inspect the platform</span>
      <p>Move to <a href="/projects/vespid/">vespid</a> and <a href="/projects/skillauth/">SkillAuth</a> to see runtime control and delegated authorization underneath the surface.</p>
    </div>
    <div>
      <strong>03</strong>
      <span>Finish with operator portability</span>
      <p>Use <a href="/projects/hermes-profile-sync/">hermes-profile-sync</a> to understand how operator state and profile movement fit into the trust model.</p>
    </div>
    <div>
      <strong>04</strong>
      <span>Then improve discovery</span>
      <p>Open <a href="/projects/geo-skill/">geo-skill</a> if you care about how the public stack gets found, cited, and distributed across AI-search surfaces.</p>
    </div>
  </div>
</div>

## What each project page should answer

1. What system layer does this project own?
2. What is already real versus still aspirational?
3. What trust boundary does it make explicit?
4. How does it connect to the rest of the stack?
5. Where should a builder go next?

## Adjacent reading

- [Documentation](/docs/): durable reference material for runtime control, confirmation policy, and system legibility.
- [Blog](/blog/): launch notes, architectural decisions, and in-progress thinking before it hardens into reference docs.
