---
title: hermes-profile-sync
description: Portable profile export, sanitization, sync, and restore for Hermes Agent setups.
---

# hermes-profile-sync

`hermes-profile-sync` is the profile-portability layer in the vespid-ai stack.
It is an open-source toolkit for moving a Hermes operator profile across machines without treating local agent state as one unsafe blob.

## Snapshot

- Repo: https://github.com/vespid-ai/hermes-profile-sync
- Visibility: public
- Current stage: early Python CLI with inspect/export/import in place
- Scope: profile classification, manifest-driven export/import, and safer operator continuity

## Why this exists

A useful Hermes setup is not one thing. It mixes:

- durable profile material
- optional history
- ephemeral machine state
- highly sensitive auth material

This project exists so profile portability does not collapse into either unsafe full-folder copying or brittle manual migration.

## What is real now

The repo already has:

- a working CLI package
- `inspect`, `export`, and `import`
- manifest-driven bundle behavior
- merge / overwrite / dry-run restore paths
- tests covering the initial portability workflow

## Trust boundary

The key boundary here is between what is portable and what is merely present.
Memories, config, and user-authored skills should move differently from logs, checkpoints, browser profiles, and credentials.

## Why it matters in the stack

If `vespid` handles execution and `SkillAuth` handles authority, `hermes-profile-sync` handles operator continuity.
It turns local agent setup from an ad hoc copy problem into an explicit, reviewable system surface.

## Next milestone

1. finish the most trustworthy inspect-first workflow
2. add better diff and review surfaces around restore decisions
3. design the encrypted secret-layer path without weakening safe defaults

## Builder path

- Read the repo: https://github.com/vespid-ai/hermes-profile-sync
- Start with the README and current CLI behavior
- Treat it as portability infrastructure for serious agent operators, not generic backup tooling
