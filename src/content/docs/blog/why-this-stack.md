---
title: Why ordinary HTTP comes before adapters
description: Why vespid keeps the gateway HTTP runtime primary and defers MCP, skills, plugins, and other adapters until the canonical contract is credible.
---

A lot of agent infrastructure work immediately jumps to adapters.

Build the MCP server.
Ship the skill pack.
Generate the SDK.
Wrap the service in a client surface.

vespid is intentionally not doing that first.

## Post overview

The current v0.1 path is generic HTTP through the local gateway runtime.

That means a generic agent should be able to:

- discover a service contract
- list capabilities
- invoke a low-risk operation
- create a draft
- hit `awaiting_auth`
- receive a scoped grant
- resume the original task
- hit `awaiting_approval`
- approve and inspect artifacts plus audit evidence

All of that should happen through ordinary HTTP before we add more product surfaces.

## Why this order matters

If the HTTP contract is weak, every adapter built on top of it becomes a second source of truth.

You end up with:

- contract drift between the docs and the adapter
- hidden authorization logic inside clients
- approval steps that exist socially but not in the runtime path
- artifact and audit expectations that differ by surface

That is exactly the kind of ambiguity vespid is trying to eliminate.

## What adapters are still for

This is not an anti-adapter argument.

MCP, skills, OpenAI Actions, A2A wrappers, and UI projections may all be useful later.

But they should be generated or projected from the canonical contract after the service manifest, OpenAPI extensions, and gateway semantics are strong enough to survive translation.

## The real thesis

The real thesis is simple:

- keep the service contract canonical
- keep the gateway runtime explicit
- make generic HTTP sufficient for the core flow
- treat adapters as downstream projections, not the primary product boundary

That gives the project a chance to stay coherent as it grows.

## What would change this decision later

The decision changes later only if the HTTP model is already credible and there is a clear adapter surface that can be shown to inherit, not replace, the same enforcement rules.

Until then, ordinary HTTP is the most honest place to prove the system.

## Related reading

- [Why vespid.ai now centers on vespid](/blog/2026-04-12-launch-notes/)
- [Vespid quickstart](/docs/getting-started/)
- [Contract and gateway model](/docs/design-language/)
