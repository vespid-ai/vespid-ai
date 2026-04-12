---
title: hermes-profile-sync
description: Portable profile export, sanitization, sync, and restore for Hermes Agent setups.
---

# hermes-profile-sync

`hermes-profile-sync` is an open-source toolkit for exporting, sanitizing, syncing, and restoring a Hermes Agent profile across machines.

## Snapshot

- Repo status: local incubator, not yet published under the org
- Current stage: real CLI skeleton with tests and v0 plan
- Scope: inspect, export, import, and diff portable Hermes profile layers
- Tooling: Python CLI with pytest-backed validation

## Core thesis

A useful local agent setup is not one blob. It mixes:

- durable profile state
- optional history
- ephemeral machine state
- highly sensitive auth material

This project treats those layers differently so profile portability does not become secret leakage.

## Current status

The project is already past pure ideation:

- a CLI package exists
- exporter/importer/classifier modules exist
- tests cover inspect, export, import, and smoke paths
- the current v0 plan is aimed at a minimal but real portable-profile workflow

## Why it matters in the vespid set

This repo turns agent memory portability from an ad hoc copy problem into an explicit product surface: reviewable, syncable, and safer by default.

## Next milestone

Ship the first user-trustworthy milestone:

1. finish the read-only inspector experience
2. make manifest-driven export/import the default happy path
3. document what is portable, optional, ephemeral, and secret in a way users can trust
