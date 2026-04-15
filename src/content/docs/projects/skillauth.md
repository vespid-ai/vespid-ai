---
title: SkillAuth
description: Delegated authorization for agent execution against login-gated platforms.
---

`SkillAuth` is the delegated-authorization layer in the vespid.ai stack. It is a reference CLI and execution model for letting agents act on real platforms without receiving raw passwords, cookies, or long-lived session state.

## Project overview

Most agent integrations still fall back to one of three weak patterns:

- cookie sharing
- overly broad API keys
- browser automation that hides the real authorization problem instead of solving it

SkillAuth exists to prove a tighter model:

`user authorization -> agent execution -> platform control`

The point is not just to authenticate an agent. The point is to make delegated capability explicit, scoped, reviewable, and revocable.

## Snapshot

- Repo: https://github.com/vespid-ai/skillauth
- Visibility: public
- Current stage: reference implementation proving the authorization model
- Scope: scoped delegation for agent-driven execution on login-gated platforms

## What is already real

The current repository already demonstrates:

- user/device handoff for authorization
- short-lived delegated credentials
- draft-safe flows before irreversible actions
- audit separation between delegated intent and platform enforcement
- platform sovereignty over final business authorization

That makes SkillAuth the clearest executable expression of the authorization thesis in the stack so far.

## Trust boundary

SkillAuth makes one boundary explicit:

The user can authorize a scoped capability, but the platform remains the final authority over business actions.

Agents should execute with delegated capability, not borrowed human identity.

This matters because a lot of agent products still confuse "the user once logged in" with "the agent should now be allowed to do everything the user could do." SkillAuth is designed to reject that shortcut.

## Why it matters in the stack

If `vespid` is about what an agent runtime can safely do once execution begins, SkillAuth is about what should be allowed into that runtime in the first place.

It is the authority model behind:

- approvals
- delegated capability
- auditability
- revocation
- platform-level final control

Without it, the rest of the stack risks becoming operationally impressive but authorization-naive.

## Next milestone

1. make the delegated-execution surface easier for builders to understand
2. add stronger platform-facing examples beyond the initial demo path
3. keep architecture, threat model, and audit model tightly aligned

## Builder path

- Read the repo: https://github.com/vespid-ai/skillauth
- Start with the README, then the architecture/threat-model/audit docs
- Use it as a reference implementation for scoped agent access, not as a drop-in universal policy engine

## Public entry points

<div class="vespid-hub-grid">
  <a class="vespid-hub-card" href="https://github.com/vespid-ai/skillauth">
    <div class="vespid-meta">GitHub</div>
    <h3>Inspect the repository</h3>
    <p>Read the public codebase, README, and reference material behind the authorization model.</p>
  </a>
  <a class="vespid-hub-card" href="https://github.com/vespid-ai/skillauth/releases">
    <div class="vespid-meta">Releases</div>
    <h3>Track public milestones</h3>
    <p>Use the releases page to watch when the delegated-execution surface starts shipping versions.</p>
  </a>
  <a class="vespid-hub-card" href="/docs/">
    <div class="vespid-meta">Documentation</div>
    <h3>Read the durable model</h3>
    <p>Use the docs for the shared control path around approvals, authority, and operator-facing behavior.</p>
  </a>
  <a class="vespid-hub-card" href="https://vespid.ai/">
    <div class="vespid-meta">Website</div>
    <h3>Return to the platform overview</h3>
    <p>Move back to the public site to see how delegated authorization fits into the broader stack.</p>
  </a>
</div>

## Related reading

- [vespid](/projects/vespid/): the runtime layer that depends on clear execution authority.
- [Projects](/projects/): the broader stack map around this authorization layer.
- [Documentation](/docs/): the durable reference path for control layers and operating rules.
