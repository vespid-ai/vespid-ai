---
title: hermes-profile-sync
description: Portable profile export, sanitization, sync, and restore for Hermes Agent setups.
---

# hermes-profile-sync

`hermes-profile-sync` is an open-source toolkit for exporting, sanitizing, syncing, and restoring a Hermes Agent profile across machines.

## Core thesis

A useful local agent setup is not one blob. It mixes:

- durable profile state
- optional history
- ephemeral machine state
- highly sensitive auth material

This project treats those layers differently so profile portability does not become secret leakage.

## What it is for

- inspect what inside `~/.hermes` is portable vs machine-bound
- export a manifest-driven bundle
- restore into another machine safely
- diff profiles and bundles over time

## Why it matters in the vespid set

This repo turns agent memory portability from an ad hoc copy problem into an explicit product surface: reviewable, syncable, and safer by default.
