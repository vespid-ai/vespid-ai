---
title: SkillAuth
description: Delegated authorization for agent execution against login-gated platforms.
---

# SkillAuth

`SkillAuth` is an open-source reference CLI and delegation toolkit for a specific problem: how agents should execute against login-gated platforms without receiving raw passwords, cookies, or long-lived session state.

## Core thesis

The model is:

`user authorization -> agent execution -> platform control`

A trusted user or device authorizes narrowly scoped capability, an agent executes within that delegation, and the platform remains the final authority for business enforcement.

## What it demonstrates today

- short-lived, scoped delegated credentials
- draft-safe execution paths before irreversible actions
- audit separation between delegated intent and platform enforcement
- a browser/device handoff instead of credential sharing

## Why it matters in the vespid set

SkillAuth is the clearest expression of the authorization thesis behind agent-first software: agents should work with revocable capability, not borrowed human identity.
