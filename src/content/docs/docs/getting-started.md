---
title: Vespid quickstart
description: Run the local vespid HTTP demo and inspect discovery, grant, approval, task resume, artifact, and audit behavior.
---

Vespid quickstart is the smallest useful workflow for understanding the project: run one local service contract, one local gateway runtime, and inspect the full enforcement path over ordinary HTTP.

## What you need

- Node.js and npm
- the public repo: https://github.com/vespid-ai/vespid
- a terminal that can run `curl`

## Install and run

```bash
git clone https://github.com/vespid-ai/vespid.git
cd vespid
npm install
npm run demo:http
```

`npm run demo:http` builds the project, starts a local appointment service, starts the gateway runtime, and prints both local URLs.

## What the demo gives you

The demo is not just “hello world.” It shows this path end to end:

```text
discover -> capabilities -> searchSlots -> createBookingDraft
-> confirmBooking awaiting_auth -> grant -> resume same task
-> awaiting_approval -> approve -> booking_confirmation artifact -> audit evidence
```

The important invariant is that grant issuance resumes the original task by `taskId`. It must not create a second consequential task.

## The shortest useful HTTP flow

Once the local URLs are printed, the shortest useful inspection path is:

1. `POST /gateway/discover` with the appointment service URL
2. `GET /gateway/capabilities`
3. `POST /gateway/invoke` for `searchSlots`
4. `POST /gateway/invoke` for `createBookingDraft`
5. `POST /gateway/invoke` for `confirmBooking` and observe `awaiting_auth`
6. `POST /gateway/grants` with the capability and draft/task binding
7. `POST /gateway/invoke` with the original `taskId` to resume
8. `POST /gateway/approvals/{approvalId}/approve`
9. `GET /gateway/tasks/{taskId}`
10. `GET /gateway/artifacts/{artifactId}` and `GET /gateway/audit`

## Verify the project after the demo

Run the full test suite if you want proof that the behavior is not just manual demo wiring:

```bash
npm test
```

The tests cover manifest validation, HTTP discovery, draft creation, task resume, approval rejection, and fail-closed handling for invalid grants.

## Common mistakes

### Treating the gateway like a thin proxy

The gateway is the point of the prototype. If you skip it and call the demo service directly, you are no longer exercising the authorization, approval, artifact, or audit model that vespid is trying to prove.

### Adding adapters before the HTTP contract is credible

The current v0.1 posture is deliberate: ordinary HTTP first, adapters later. If the HTTP contract is weak, generating more surfaces from it only spreads the ambiguity further.

## Related reading

- Open the project page: [vespid](/projects/vespid/)
- Then read: [Contract and gateway model](/docs/design-language/)
- Then read: [Why ordinary HTTP comes before adapters](/blog/why-this-stack/)
