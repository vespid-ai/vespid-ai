---
title: SkillAuth
description: Delegated authorization for agent execution against login-gated platforms.
---

# SkillAuth

`SkillAuth` is an open-source reference CLI and delegation toolkit for a specific problem: how agents should execute against login-gated platforms without receiving raw passwords, cookies, or long-lived session state.

## Snapshot

- Repo: https://github.com/vespid-ai/skillauth
- Visibility: public
- Current stage: reference implementation proving the execution model
- Scope: delegated authorization for agent-driven actions on third-party platforms

## Core thesis

The model is:

`user authorization -> agent execution -> platform control`

A trusted user or device authorizes narrowly scoped capability, an agent executes within that delegation, and the platform remains the final authority for business enforcement.

## Current status

The current v0 already demonstrates:

- short-lived, scoped delegated credentials
- draft-safe execution paths before irreversible actions
- audit separation between delegated intent and platform enforcement
- a browser/device handoff instead of credential sharing

## Why it matters in the vespid set

SkillAuth is the clearest expression of the authorization thesis behind agent-first software: agents should work with revocable capability, not borrowed human identity.

## Next milestone

Move from reference proof to a cleaner standard surface:

1. tighten docs around architecture, threat model, and audit model
2. prove more platform-facing examples beyond the initial demo commands
3. sharpen the developer ergonomics for CLI + delegation handoff
