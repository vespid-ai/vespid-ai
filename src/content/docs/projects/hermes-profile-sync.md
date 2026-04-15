---
title: hermes-profile-sync
description: Portable profile export, sanitization, sync, and restore for Hermes Agent setups.
---

`hermes-profile-sync` is the profile-portability layer in the vespid.ai stack. It is an open-source toolkit for moving a Hermes operator profile across machines without treating local agent state as one unsafe blob.

## Project overview

A useful Hermes setup is not one thing. It mixes:

- durable profile material
- optional history
- ephemeral machine state
- highly sensitive auth material

This project exists so profile portability does not collapse into either unsafe full-folder copying or brittle manual migration.

Instead, it tries to turn operator continuity into an explicit, reviewable system surface.

## Snapshot

- Repo: https://github.com/vespid-ai/hermes-profile-sync
- Visibility: public
- Current stage: early Python CLI with inspect/export/import in place
- Scope: profile classification, manifest-driven export/import, and safer operator continuity

## What is already real

The repo already has:

- a working CLI package
- `inspect`, `export`, and `import`
- manifest-driven bundle behavior
- merge / overwrite / dry-run restore paths
- tests covering the initial portability workflow

That is enough to prove the basic direction: portability can be structured, inspectable, and safer than copying entire local agent folders by hand.

## Trust boundary

The key boundary here is between what is portable and what is merely present.

Memories, config, and user-authored skills should move differently from:

- logs
- checkpoints
- browser profiles
- credentials
- other machine-specific or high-risk artifacts

If those categories blur together, operator convenience becomes a security liability.

## Why it matters in the stack

If `vespid` handles execution and `SkillAuth` handles authority, `hermes-profile-sync` handles operator continuity.

It matters because real agent systems are not only about runtime and authorization. They are also about whether an operator can move to a new machine, recover a setup, or collaborate across environments without rebuilding everything from scratch or leaking sensitive state.

## Next milestone

1. finish the most trustworthy inspect-first workflow
2. add better diff and review surfaces around restore decisions
3. design the encrypted secret-layer path without weakening safe defaults

## Builder path

- Read the repo: https://github.com/vespid-ai/hermes-profile-sync
- Start with the README and current CLI behavior
- Treat it as portability infrastructure for serious agent operators, not generic backup tooling

## Public entry points

<div class="vespid-hub-grid">
  <a class="vespid-hub-card" href="https://github.com/vespid-ai/hermes-profile-sync">
    <div class="vespid-meta">GitHub</div>
    <h3>Inspect the repository</h3>
    <p>Read the public codebase, README, and CLI surface for portability workflows.</p>
  </a>
  <a class="vespid-hub-card" href="https://github.com/vespid-ai/hermes-profile-sync/releases">
    <div class="vespid-meta">Releases</div>
    <h3>Track public milestones</h3>
    <p>Use the releases page to follow when portability flows turn into versioned public milestones.</p>
  </a>
  <a class="vespid-hub-card" href="/docs/">
    <div class="vespid-meta">Documentation</div>
    <h3>Read the durable model</h3>
    <p>Use the docs for the broader operator-state and control-story context behind this portability layer.</p>
  </a>
  <a class="vespid-hub-card" href="https://vespid.ai/">
    <div class="vespid-meta">Website</div>
    <h3>Return to the platform overview</h3>
    <p>Move back to the public site to see how portability fits into the wider trust model.</p>
  </a>
</div>

## Related reading

- [Projects](/projects/): the wider stack context around portability.
- [Documentation](/docs/): stable guidance for where operator state belongs in the reading system.
- [Blog](/blog/): field lessons and rationale that may later become portability references.
