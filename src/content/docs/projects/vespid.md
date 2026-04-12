---
title: vespid
description: Managed-agent runtime substrate for brokered sessions, sandboxes, and protected actions.
---

`vespid` is the runtime substrate in the vespid.ai stack. It is where execution boundaries become real: local sandboxes, protected actions, brokered resource access, session state, replay, and vault-backed handling.

## Overview

A lot of agent systems are still built as orchestration loops with broad ambient authority. `vespid` exists to make the runtime contract explicit instead:

- where code executes
- what stays inside the sandbox path
- how protected actions cross trust boundaries
- how state is stored, replayed, and materialized
- how sensitive material avoids leaking into the wrong layer

This is the systems layer that tries to turn runtime control from vague architecture language into a concrete programmable surface.

## Snapshot

- Repo: https://github.com/vespid-ai/vespid
- Visibility: public
- Current stage: early substrate library with real exported primitives and tests
- Scope: execution control, session state, broker mediation, and protected runtime behavior

## What is already real

The codebase already exports a concrete runtime surface:

- `FileEventLedger`
- `SessionStore`
- `createDaemonServer`
- `materializeContext`
- `HarnessRuntime`
- `LocalSandboxRuntime`
- `BrokerRuntime`
- `VaultStore`
- `VespidClient`

Tests already exercise wake/replay behavior, protected HTTP flows, secret isolation, and daemon/SDK behavior as actual boundary surfaces.

## Trust boundary

`vespid` draws a line between ordinary local execution and protected actions.

That boundary is the point. Sandbox work, broker-mediated resource access, and vault-backed handling should not collapse into one undifferentiated runtime.

If that separation is weak, then authorization, approvals, and product-layer safety all become harder to reason about.

## Why it matters in the stack

If SkillAuth is about who may authorize an agent, `vespid` is about what that agent can safely do once execution begins.

It is the systems layer underneath:

- product surfaces like `vespid_voice`
- delegated-execution patterns
- stateful operator workflows
- protected actions that need explicit runtime handling

## Next milestone

1. make the runtime contract easier to understand from the outside
2. expand boundary-verification coverage around secret isolation and protected actions
3. document how product layers should build on top of the current primitive set

## Builder path

- Read the repo: https://github.com/vespid-ai/vespid
- Start with the runtime README for the current surface area
- Treat this as infrastructure, not a polished end-user product layer

## Related reading

- [SkillAuth](/projects/skillauth/): the authority model that decides what enters the runtime.
- [vespid_voice](/projects/vespid-voice/): the product surface that depends on the runtime being legible and safe.
- [Documentation](/docs/): the stable reference layer for control and execution semantics.
