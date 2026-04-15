---
title: geo-skill
description: Generative Engine Optimization skill pack and Python CLI for AI search, ChatGPT Search, and llms.txt.
---

`geo-skill` is the discovery and distribution layer in the wider vespid-ai public stack. It is an open-source skill pack and Python CLI for improving how products, docs, and OSS repositories get discovered by AI search systems such as ChatGPT Search, Bing-facing AI search flows, and other machine-readable retrieval paths.

## Project overview

A lot of teams now understand that AI search matters, but the work still lands as vague advice:

- write more content
- add some schema
- make the homepage clearer
- hope LLMs cite the right page

`geo-skill` exists to turn that fuzzy area into something operational:

- reusable GEO skills for agents
- a CLI for audits, generators, and before/after comparison
- explicit support for llms.txt, structured data, machine-readable page models, and AI-search-facing content hygiene

## Snapshot

- Repo: https://github.com/vespid-ai/geo-skill
- Visibility: public
- Current stage: released CLI and reusable skill pack
- Latest release: `v0.4.0`
- Scope: GEO audits, generators, and agent-ready skill distribution for AI search/discovery work

## What is already real

The public repository already includes:

- Hermes / Claude Code / Codex-ready GEO skills
- a Python CLI for audit, generation, benchmark inspection, and report comparison
- support for llms.txt, robots.txt, schema generation, and page-outline workflows
- practical coverage for docs sites, product pages, changelogs, pricing pages, comparisons, trust pages, and OSS repo discoverability
- tagged public releases and a real GitHub distribution surface

That makes `geo-skill` different from a content thesis deck. It is already a runnable toolchain for teams that need GEO work to be repeatable.

## Trust boundary

The key boundary here is between discoverability work that is explicit and inspectable versus "AI SEO" that becomes hand-wavy or manipulative.

`geo-skill` is meant to improve:

- factual clarity
- machine-readable structure
- retrieval paths
- documentation legibility
- durable public artifacts such as release notes, docs, and repository surfaces

It is not trying to turn search/discovery into prompt-hacking folklore.

## Why it matters in the stack

If `vespid` handles runtime control, `SkillAuth` handles delegated authority, and `hermes-profile-sync` handles operator continuity, `geo-skill` handles how the public system gets found, read, and evaluated by both humans and AI-native discovery systems.

That matters because a public stack can be technically strong and still remain invisible if:

- docs are not machine-legible
- project pages do not describe the real system layers clearly
- AI search crawlers cannot extract the right facts
- GitHub and site surfaces do not reinforce the same narrative

## Next milestone

1. keep expanding benchmark and regression coverage for real-world GEO work
2. make before/after comparison surfaces stronger for migration and content-upgrade workflows
3. push the public site + repo + release surfaces into a more coherent GEO distribution system

## Builder path

- Read the repo: https://github.com/vespid-ai/geo-skill
- Start with the README and CLI examples
- Use the built-in skills and audit/generate flows to improve public site discoverability, docs legibility, and OSS distribution surfaces

## Public entry points

<div class="vespid-hub-grid">
  <a class="vespid-hub-card" href="https://github.com/vespid-ai/geo-skill">
    <div class="vespid-meta">GitHub</div>
    <h3>Inspect the repository</h3>
    <p>Read the public codebase, README, skills, and CLI examples for discovery work.</p>
  </a>
  <a class="vespid-hub-card" href="https://github.com/vespid-ai/geo-skill/releases">
    <div class="vespid-meta">Releases</div>
    <h3>Track public milestones</h3>
    <p>Use the releases page to follow CLI batches, tagged versions, and distribution updates.</p>
  </a>
  <a class="vespid-hub-card" href="/docs/">
    <div class="vespid-meta">Documentation</div>
    <h3>Read the durable model</h3>
    <p>Use the docs for the shared public-system narrative around structure, legibility, and operator-facing surfaces.</p>
  </a>
  <a class="vespid-hub-card" href="https://vespid.ai/">
    <div class="vespid-meta">Website</div>
    <h3>Return to the platform overview</h3>
    <p>Move back to the public site to see how discovery tooling reinforces the rest of the stack.</p>
  </a>
</div>

## Related reading

- [Projects](/projects/): the wider public map for how discovery tooling connects to the rest of the stack.
- [Documentation](/docs/): stable reference material for system structure and public control surfaces.
- [Blog](/blog/): launch notes and field lessons that may later become GEO guidance.
