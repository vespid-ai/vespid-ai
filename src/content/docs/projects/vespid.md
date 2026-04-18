---
title: vespid
description: Contract-first prototype for discoverable, authorized, approvable, and auditable agent-native web services over ordinary HTTP.
---

`vespid` is the public core of vespid.ai: a contract-first prototype for making web services discoverable, understandable, authorized, approvable, callable, and auditable by agents through ordinary HTTP.

## Project overview

The canonical service interface in v0.1 is:

```text
/.well-known/agent-service.json
+ OpenAPI 3.1 / JSON Schema
+ x-agent-* extensions
+ gateway HTTP runtime semantics
```

The point is not to add one more special agent client. The point is to prove that a generic agent can use normal HTTP against a service and a gateway runtime without bypassing the real enforcement boundary.

## Snapshot

- Repository: https://github.com/vespid-ai/vespid
- Current posture: public experimental prototype
- Language/runtime: TypeScript + Node.js
- Local demo: `npm run demo:http`
- Current reference service: appointment booking
- Current boundary: local HTTP demo and gateway hardening, not production SaaS infrastructure

## What is already real

- schema validation for the agent service manifest and OpenAPI agent extensions
- a demo appointment service that publishes `/.well-known/agent-service.json`
- a gateway runtime that handles discovery, grants, approvals, task state, artifacts, and audit events
- HTTP routes for discovery, invocation, grant issuance, approval, artifact inspection, and audit inspection
- tests that verify task resume, approval reject, and fail-closed behavior for revoked, expired, mismatched, or invalid grants

That means the prototype already proves gateway semantics in code; it is not only a concept note about future agent infrastructure.

## Trust boundary

The critical boundary in v0.1 is between a generic HTTP client and the gateway-enforced runtime.

The service contract can advertise capabilities, but consequential actions must still pass through gateway checks for:

- policy and capability registration
- scoped temporary grants
- approval requirements
- task resume semantics
- artifact creation and audit evidence

Adapters such as MCP, skills, OpenAI Actions, or UI projections may exist later, but they are downstream surfaces. They are not allowed to weaken gateway enforcement.

## Why it matters

A lot of agent tooling still assumes the product surface is the client surface. vespid is trying to invert that:

- keep the service contract canonical
- keep the gateway runtime explicit
- let generic agents use ordinary HTTP
- make authorization and approval visible instead of implicit
- leave behind artifacts and audit evidence that a human can inspect later

That is a more credible path to agent-native web services than replacing every website with a new custom control plane.

## Next milestone

The next useful step is not “more demos” in the abstract. It is to harden the contract and runtime enough that future adapters can be generated from the same canonical model without drifting away from the gateway boundary.

Concretely, that means:

1. expanding contract coverage and reference docs
2. hardening more fail-closed and task-resume cases
3. documenting how future adapters can project from the HTTP contract without bypassing enforcement

## Public entry points

<div class="vespid-hub-grid">
  <a class="vespid-hub-card" href="https://github.com/vespid-ai/vespid">
    <div class="vespid-meta">GitHub</div>
    <h3>Open the repository</h3>
    <p>Read the public codebase, README, tests, and docs for the current prototype.</p>
  </a>
  <a class="vespid-hub-card" href="/docs/getting-started/">
    <div class="vespid-meta">Quickstart</div>
    <h3>Run the HTTP demo</h3>
    <p>Use the quickstart when you want the shortest path from clone to discovery, grant, approval, and artifact inspection.</p>
  </a>
  <a class="vespid-hub-card" href="/docs/">
    <div class="vespid-meta">Documentation</div>
    <h3>Read the durable model</h3>
    <p>Use the docs for the contract surface, gateway rules, and contribution path.</p>
  </a>
  <a class="vespid-hub-card" href="https://vespid.ai/">
    <div class="vespid-meta">Website</div>
    <h3>Return to the site</h3>
    <p>Use the homepage to see how the project, docs, and blog fit into one public narrative.</p>
  </a>
</div>

## Related reading

- [Projects](/projects/): the public project map.
- [Documentation](/docs/): the durable reference layer.
- [Blog](/blog/): launch context and architecture rationale.
