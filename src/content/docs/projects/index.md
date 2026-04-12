---
title: Project Atlas
description: "The open-source map of the vespid.ai stack: runtime, delegated authorization, portability, and product-facing execution surfaces."
---

The projects under vespid.ai are meant to read as one system, not a bag of experiments.

Each repository occupies a distinct layer in the agent stack:

- where agents execute
- how they receive permission
- how operator context moves across machines
- where these ideas meet real product surfaces

<div class="vespid-section">
  <div class="vespid-meta">Open-source stack</div>
  <h2>Four layers, one operating model</h2>
  <p>
    The repo set is converging on a simple thesis: trustworthy agents need runtime boundaries,
    explicit authorization, portable context, and product surfaces that make those constraints legible.
  </p>
  <div class="vespid-project-grid">
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Runtime substrate</div>
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
        <a href="/projects/vespid/">Open project page</a>
      </div>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Delegated authorization</div>
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
        <a href="/projects/skillauth/">Open project page</a>
      </div>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Profile portability</div>
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
        <a href="/projects/hermes-profile-sync/">Open project page</a>
      </div>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Product surface</div>
        <span class="vespid-status-pill vespid-status-pill--green">Working lane</span>
      </div>
      <h3><a href="/projects/vespid-voice/">vespid_voice</a></h3>
      <p>Android-first voice control where realtime orchestration, approvals, and agent bridges have to become understandable to a real user.</p>
      <div class="vespid-feature-list">
        <span>voice UX</span>
        <span>orchestration</span>
        <span>approval policy</span>
      </div>
      <div class="vespid-project-footer">
        <span>The product lane where system ideas meet user reality.</span>
        <a href="/projects/vespid-voice/">Open project page</a>
      </div>
    </div>
  </div>
</div>

## Reading order

If you want the stack in the clearest order, read it like this:

1. `vespid` — what the runtime can safely do
2. `SkillAuth` — how an agent gets scoped authority to do it
3. `hermes-profile-sync` — how operator context moves without leaking secrets
4. `vespid_voice` — where these constraints meet a user-facing product loop

<div class="vespid-section">
  <div class="vespid-meta">System thesis</div>
  <div class="vespid-strip">
    <div>
      <strong>01</strong>
      <span>Authorization before automation</span>
      <p>Agents should execute through explicit capability, not inherited human identity.</p>
    </div>
    <div>
      <strong>02</strong>
      <span>Runtime boundaries matter</span>
      <p>Sandboxing, brokered control, and protected actions are product features, not implementation details.</p>
    </div>
    <div>
      <strong>03</strong>
      <span>Context must travel safely</span>
      <p>Memories, config, skills, and operator state need portability without collapsing into one risky sync artifact.</p>
    </div>
  </div>
</div>

## Current lanes

- `vespid` — lower-level runtime substrate for brokered execution, protected actions, and state handling.
- `SkillAuth` — delegated authorization for agent execution on login-gated platforms.
- `hermes-profile-sync` — portable export and restore for Hermes profiles across machines.
- `vespid_voice` — product-facing voice control, orchestration, and approvals.
- `vespid.ai site` — the public documentation shell and narrative spine tying the stack together.

## What each project page should answer

1. What system layer does this project own?
2. What is already real versus still aspirational?
3. What trust boundary does it make explicit?
4. How does it connect to the rest of the stack?
5. Where should a builder go next?

## Adjacent reading

- [Control Layer Docs](/docs/): durable reference material for runtime control, confirmation policy, and system legibility.
- [Field Notes](/blog/): launch notes, architectural decisions, and in-progress thinking before it hardens into reference docs.
