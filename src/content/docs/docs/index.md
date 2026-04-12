---
title: Control Layer Docs
description: The durable entry point for vespid.ai control layers, runtime, authorization, approvals, and field notes.
---

This is the durable reference spine for vespid.ai: the parts of the agent deployment stack that need to stay legible after the first demo works.

The homepage frames the system from the outside: agent orchestration, deployed in the real world. The docs start one layer deeper. They explain how product surfaces, delegated authorization, runtime control, confirmation policy, and field notes fit into one deployable operating model.

<div class="vespid-section">
  <div class="vespid-meta">Docs hub</div>
  <h2>Read the stack as control layers</h2>
  <p>
    The material here is not organized around generic AI concepts. It is organized around the decisions that make agent systems safe enough, observable enough, and stable enough to run inside real operator workflows.
  </p>
  <div class="vespid-hub-grid">
    <a class="vespid-hub-card" href="./getting-started/">
      <div class="vespid-meta">Control layers</div>
      <h3>Start with the map</h3>
      <p>How the site separates product lanes, durable reference material, and field notes so the stack stays navigable as it grows.</p>
    </a>
    <a class="vespid-hub-card vespid-hub-card--tall" href="/projects/vespid/">
      <div class="vespid-meta">Runtime</div>
      <h3>Execution substrate and state</h3>
      <p>Local sandboxing, brokered runtime control, session storage, vault-backed state, and the primitives product layers build on.</p>
    </a>
    <a class="vespid-hub-card" href="/projects/skillauth/">
      <div class="vespid-meta">Policies</div>
      <h3>Authorization and approvals</h3>
      <p>Delegated capability, short-lived access, audit boundaries, and draft-safe execution before irreversible actions.</p>
    </a>
  </div>
</div>

## Recommended path

1. [Getting Started](./getting-started/): understand the content model and where new reference material should land.
2. [vespid_voice](/projects/vespid-voice/): see the flagship product lane where voice orchestration, confirmations, and agent bridges meet a real interface.
3. [vespid](/projects/vespid/): inspect the lower-level runtime substrate: sandboxing, brokered control, session storage, and vault-backed state.
4. [SkillAuth](/projects/skillauth/): follow the authorization thesis: agents should work through revocable capability, not borrowed human identity.
5. [Design Language](./design-language/): keep the public shell and reading system aligned as the site expands.

<div class="vespid-section">
  <div class="vespid-meta">Operating model</div>
  <div class="vespid-strip">
    <div>
      <strong>01</strong>
      <span>Control before autonomy</span>
      <p>Every useful agent loop needs clear ownership of capability, confirmation boundaries, and rollback paths.</p>
    </div>
    <div>
      <strong>02</strong>
      <span>Runtime is product surface</span>
      <p>Session state, execution routing, sandboxing, and recovery behavior are part of the user experience.</p>
    </div>
    <div>
      <strong>03</strong>
      <span>Field notes become references</span>
      <p>When a deployment lesson survives contact with real workflows, it graduates into the durable docs spine.</p>
    </div>
  </div>
</div>

## Adjacent areas

- [Projects](/projects/): the active stack map: product surface, delegated authorization, runtime substrate, and portability.
- [Field Notes](/blog/): launch notes, architecture decisions, and deployment lessons before they harden into reference pages.
- [Why this stack fits vespid.ai](/blog/why-this-stack/): why Astro carries the expressive surface while Starlight carries the reading system.

## Operating rule

If a page explains a reusable control layer, it belongs here.
If it explains one product lane, it belongs under [Projects](/projects/).
If it is still a lesson from the field, it belongs under [Field Notes](/blog/).
