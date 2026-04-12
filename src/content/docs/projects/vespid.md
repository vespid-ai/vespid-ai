---
title: vespid
description: Local execution primitives for sandboxing, brokered runtime control, and vault-backed state.
---

# vespid

`vespid` is the lower-level runtime surface in the repository set. It exposes execution primitives that other products can build on top of.

## Snapshot

- Repo: https://github.com/vespid-ai/vespid
- Visibility: public
- Current stage: substrate library with exported runtime/security primitives
- Scope: execution, storage, control boundaries, and vault-backed state handling

## Current surface

The codebase currently exports:

- file event ledger
- session store
- daemon server
- context materialization
- local sandbox runtime
- broker runtime
- vault store
- client SDK

## Positioning

This is not a public brand shell or end-user product page first. It is the substrate layer for local runtime control, brokered execution, and vault-backed state handling.

## Current status

The codebase is already opinionated enough to show its direction:

- local sandbox runtime is present
- brokered secret/runtime access is present
- session and file-event primitives are present
- there is already a client-facing SDK export surface

## Why it matters in the vespid set

If vespid_voice is the product surface and SkillAuth is the delegation model, `vespid` is the systems layer underneath: the place where execution, storage, and control boundaries can become reusable infrastructure.

## Next milestone

Clarify the substrate into a more legible platform layer:

1. tighten the runtime contract around brokered execution and secret access
2. make the SDK and daemon surfaces easier to understand from the outside
3. document how product layers should build on top of these primitives
