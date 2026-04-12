---
title: vespid
description: Local execution primitives for sandboxing, brokered runtime control, and vault-backed state.
---

# vespid

`vespid` is the lower-level runtime surface in the repository set. It exposes execution primitives that other products can build on top of.

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

## Why it matters in the vespid set

If vespid_voice is the product surface and SkillAuth is the delegation model, `vespid` is the systems layer underneath: the place where execution, storage, and control boundaries can become reusable infrastructure.
