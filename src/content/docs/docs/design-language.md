---
title: Contract and gateway model
description: How the vespid service contract and gateway runtime reinforce the same agent-native execution story.
---

The contract and gateway model is the rule that keeps vespid coherent.

The service tells an agent what exists. The gateway decides how it may be used.

## Page overview

The current model has four layers:

1. the service manifest at <code>/.well-known/agent-service.json</code>
2. the OpenAPI document and <code>x-agent-*</code> extensions
3. the gateway runtime for discovery, grants, approval, task state, artifacts, and audit
4. downstream adapters that may exist later but must inherit the same semantics

If those layers disagree, the project stops being a trustworthy contract-first system and turns back into adapter-specific glue.

## What the contract surface should describe

A healthy contract surface describes:

- service identity and purpose
- capability namespaces
- operation type and risk
- approval requirements
- task mode
- idempotency expectations
- authorization details and output artifacts where needed

The goal is not to hide complexity. The goal is to make the complexity machine-readable before any agent tries to execute against it.

## What the gateway runtime must enforce

The gateway runtime is where the contract becomes operational.

It should be able to:

- discover a service from the manifest
- register capabilities from the OpenAPI extensions
- block consequential actions until a valid grant exists
- request approval when the capability requires it
- resume the original task after grant issuance
- create artifacts and append audit evidence after execution

If an adapter can bypass those steps, that adapter is out of contract.

## Why adapters are downstream, not primary

The current project explicitly defers MCP, skills, OpenAI Actions, A2A wrappers, and UI projections.

That is not because adapters do not matter. It is because adapters should project from the canonical contract after the underlying HTTP model is credible enough to survive translation.

Otherwise every new adapter becomes a second source of truth.

## Failure modes to avoid

A weak vespid surface usually looks like this:

- the service manifest is vague about capabilities
- OpenAPI exists but the agent metadata is inconsistent or incomplete
- a client or plugin embeds hidden authorization logic outside the gateway
- approval exists socially but not in the runtime path
- artifacts or audit evidence are missing after consequential actions

From the perspective of a generic agent, that is not a trustworthy execution surface.

## Healthy signs

The project is healthy when:

- the same capability story appears in the manifest, OpenAPI, docs, and tests
- grants fail closed when task binding, actor, resource, or expiry does not match
- approval is an explicit runtime step, not a comment in a README
- artifacts and audit logs are retrievable after execution
- future adapters can be described as projections from the contract instead of custom products

## Related reading

- [Vespid quickstart](/docs/getting-started/)
- [vespid project page](/projects/vespid/)
- [Why ordinary HTTP comes before adapters](/blog/why-this-stack/)
