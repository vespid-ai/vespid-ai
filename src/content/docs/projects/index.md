---
title: Project Atlas
description: The active map of product surfaces, runtime substrate, delegated authorization, and portability work under vespid.ai.
---

The project set is the current shape of the vespid.ai agent deployment stack.

These are not isolated experiments. Each lane carries one part of the operating model: where agents meet users, how delegated access is granted, where execution runs, and how local agent state becomes portable without becoming unsafe.

<div class="vespid-section">
  <div class="vespid-meta">Project hub</div>
  <h2>Read the work as deployment layers</h2>
  <p>
    The durable docs explain the control layers. The project pages show where those layers are being forced into real product surfaces, runtime primitives, security boundaries, and portability workflows.
  </p>
  <div class="vespid-project-grid">
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Flagship</div>
        <span class="vespid-status-pill vespid-status-pill--green">Working lane</span>
      </div>
      <h3><a href="/projects/vespid-voice/">vespid_voice</a></h3>
      <p>Android-first voice control where realtime orchestration, confirmation policy, and agent bridges meet a user-facing loop.</p>
      <div class="vespid-feature-list">
        <span>voice surface</span>
        <span>orchestration</span>
        <span>approval policy</span>
      </div>
      <div class="vespid-project-footer">
        <span>Start here for the product lane.</span>
        <a href="/projects/vespid-voice/">Open project page</a>
      </div>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Runtime</div>
        <span class="vespid-status-pill vespid-status-pill--purple">Public core</span>
      </div>
      <h3><a href="/projects/vespid/">vespid</a></h3>
      <p>Execution substrate for local sandboxing, brokered runtime control, session storage, and vault-backed state.</p>
      <div class="vespid-feature-list">
        <span>sandbox runtime</span>
        <span>broker control</span>
        <span>state</span>
      </div>
      <div class="vespid-project-footer">
        <span>The systems layer under product surfaces.</span>
        <a href="/projects/vespid/">Open project page</a>
      </div>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Security</div>
        <span class="vespid-status-pill vespid-status-pill--blue">Reference v0</span>
      </div>
      <h3><a href="/projects/skillauth/">SkillAuth</a></h3>
      <p>Delegated authorization for agent execution against login-gated platforms without handing agents raw identity.</p>
      <div class="vespid-feature-list">
        <span>delegation</span>
        <span>audit boundary</span>
        <span>revocable access</span>
      </div>
      <div class="vespid-project-footer">
        <span>The authorization thesis in executable form.</span>
        <a href="/projects/skillauth/">Open project page</a>
      </div>
    </div>
    <div class="vespid-project-card">
      <div class="vespid-project-topline">
        <div class="vespid-meta">Portability</div>
        <span class="vespid-status-pill vespid-status-pill--amber">Incubating</span>
      </div>
      <h3><a href="/projects/hermes-profile-sync/">hermes-profile-sync</a></h3>
      <p>Portable export, sanitization, sync, and restore for Hermes profiles without treating local agent state as one unsafe blob.</p>
      <div class="vespid-feature-list">
        <span>profile export</span>
        <span>manifest diff</span>
        <span>safer restore</span>
      </div>
      <div class="vespid-project-footer">
        <span>Portability as a trust surface.</span>
        <a href="/projects/hermes-profile-sync/">Open project page</a>
      </div>
    </div>
  </div>
</div>

## Current lanes

- `vespid_voice` — Android-first voice control, realtime orchestration, and agent-facing UX.
- `SkillAuth` — delegated authorization for agent execution on login-gated platforms.
- `hermes-profile-sync` — portable export and restore for Hermes profiles across machines.
- `vespid` — lower-level runtime substrate for brokered execution, session state, and vault-backed control.
- `vespid.ai site` — the public shell, docs spine, and brand system tying the repo set together.

<div class="vespid-section">
  <div class="vespid-meta">Operating model</div>
  <div class="vespid-strip">
    <div>
      <strong>01</strong>
      <span>Start from the surface</span>
      <p>Product lanes show where orchestration, approvals, and runtime behavior have to be understandable to users.</p>
    </div>
    <div>
      <strong>02</strong>
      <span>Make capability explicit</span>
      <p>Security work belongs beside product work because delegated authorization changes what an agent is allowed to do.</p>
    </div>
    <div>
      <strong>03</strong>
      <span>Keep the system portable</span>
      <p>Runtime state, profile material, and public documentation all need clear boundaries before the stack can travel.</p>
    </div>
  </div>
</div>

## What each project page should answer

1. What problem is this trying to solve?
2. Who is it for?
3. What is already working?
4. What remains risky or unresolved?
5. Where do the deeper docs live?

## Adjacent reading

- [Control Layer Docs](/docs/): the durable reference spine for authorization, runtime control, confirmation policy, and public system legibility.
- [Field Notes](/blog/): launch notes and architecture decisions before they harden into reference pages.
