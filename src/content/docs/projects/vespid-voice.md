---
title: vespid_voice
description: Voice orchestration for operator workflows, confirmations, and agent bridges.
---

# vespid_voice

`vespid_voice` is the current product lane in the repo set: an Android-first voice control system that routes spoken intent through realtime orchestration, confirmation policy, and agent backends.

## Snapshot

- Surface: Android voice product with orchestrator + agent bridge
- Repo visibility: private implementation repo
- Current emphasis: user usability and runtime stability over demo theatrics
- Product angle: reliable spoken control for operator workflows

## Current status

The live path already covers a meaningful end-to-end loop:

- Android joins a realtime voice session
- Volc handles ASR, VAD, interruption, subtitle events, and TTS
- the orchestrator forwards turns into an agent backend
- the session can run against OpenClaw or a local Codex backend

That makes this more than a concept page. It is a working product lane with verified device/runtime behavior.

## Why it matters

- human-to-agent interface, not just text chat
- structured confirmations and risk-aware control
- realtime orchestration instead of static request/response wrappers
- operational polish as a product requirement

## Next milestone

Push the product from "working lane" toward "consumer-stable lane":

1. login/session recovery
2. voice session recovery across network issues
3. state sync between Android and orchestrator
4. more durable end-to-end stability on the main user path
