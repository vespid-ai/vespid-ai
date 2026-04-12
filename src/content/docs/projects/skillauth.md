---
title: SkillAuth
description: Delegated authorization for agent execution against login-gated platforms.
---

# SkillAuth

`SkillAuth` is the delegated-authorization layer in the vespid-ai stack.
It is a reference CLI and execution model for letting agents act on real platforms without receiving raw passwords, cookies, or long-lived session state.

## Snapshot

- Repo: https://github.com/vespid-ai/skillauth
- Visibility: public
- Current stage: reference implementation proving the authorization model
- Scope: scoped delegation for agent-driven execution on login-gated platforms

## Why this exists

Most agent integrations still fall back to one of three bad patterns:

- cookie sharing
- overly broad API keys
- browser automation that hides the real authorization problem

SkillAuth exists to prove a tighter model:

`user authorization -> agent execution -> platform control`

## What is real now

The current repository already demonstrates:

- user/device handoff for authorization
- short-lived delegated credentials
- draft-safe flows before irreversible actions
- audit separation between delegated intent and platform enforcement
- platform sovereignty over final business authorization

## Trust boundary

SkillAuth makes one boundary explicit: the user can authorize a scoped capability,
but the platform remains the final authority over business actions.
Agents should execute with delegated capability, not borrowed human identity.

## Why it matters in the stack

If `vespid` defines safe runtime behavior, SkillAuth defines the authority model that decides what should be allowed to enter that runtime in the first place.
It is the clearest expression of the authorization thesis behind vespid-ai.

## Next milestone

1. make the delegated-execution surface easier for builders to understand
2. add stronger platform-facing examples beyond the initial demo path
3. keep architecture, threat model, and audit model tightly aligned

## Builder path

- Read the repo: https://github.com/vespid-ai/skillauth
- Start with the README, then the architecture/threat-model/audit docs
- Use it as a reference implementation for scoped agent access, not as a drop-in universal policy engine
