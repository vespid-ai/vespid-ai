---
title: vespid_voice
description: Voice orchestration for operator workflows, confirmations, and agent bridges.
---

# vespid_voice

`vespid_voice` is the clearest product surface in the current vespid.ai stack: an Android-first voice system where spoken intent, confirmation policy, realtime orchestration, and agent execution have to work in a real user loop.

## Overview

This project exists to answer a concrete product question:

How should an agent system behave when the interface is voice, the operator is mobile, and execution still has to stay legible, interruptible, and safe?

That makes `vespid_voice` more than a demo shell. It is the place where the stack stops being abstract and starts dealing with user expectations, session continuity, approval friction, and runtime behavior that has to feel understandable in use.

## Snapshot

- Surface: Android voice product with orchestrator + agent bridge
- Repo visibility: private implementation repo
- Current emphasis: user usability and runtime stability over demo theatrics
- Product angle: reliable spoken control for operator workflows

## What is already real

The current product lane already covers a meaningful end-to-end loop:

- Android joins a realtime voice session
- Volc handles ASR, VAD, interruption, subtitle events, and TTS
- the orchestrator forwards turns into an agent backend
- the session can run against OpenClaw or a local Codex backend

That means the page is describing a working product path with verified device/runtime behavior, not a speculative interface concept.

## Why it matters

A lot of agent products still assume text chat is the natural UI. `vespid_voice` pushes on the opposite problem:

- voice is faster but harder to control cleanly
- confirmations have to feel natural, not bureaucratic
- interruptions and retries are part of the product experience
- runtime decisions become user-facing the moment latency or failure shows up

In other words, this project is where the stack proves whether orchestration, approvals, and runtime control can survive contact with actual product constraints.

## Trust boundary

The key boundary in `vespid_voice` is not just technical; it is experiential.

The user should be able to:
- understand when the system is listening
- notice when execution is being routed elsewhere
- recognize when confirmation is required
- recover when network or backend state becomes unstable

That makes product clarity part of the trust model. If the runtime is invisible or the approval path is confusing, the rest of the stack is not really deployable.

## Next milestone

Push the product from "working lane" toward "consumer-stable lane":

1. login/session recovery
2. voice session recovery across network issues
3. state sync between Android and orchestrator
4. more durable end-to-end stability on the main user path

## Related reading

- [Projects](/projects/): see how this product surface fits into the broader stack.
- [Documentation](/docs/): read the durable model behind runtime control and approvals.
- [Blog](/blog/): follow launch notes and field lessons before they harden into references.
