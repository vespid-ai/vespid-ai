# vespid.ai

Astro + Starlight site for vespid.ai.

It is structured as one public shell for:
- projects
- documentation
- field notes / blog posts

## Local development

```bash
pnpm install
pnpm dev
```

Preview the production build:

```bash
pnpm build
pnpm preview
```

## Content structure

```text
src/content/docs/
├── projects/   # project overviews
├── docs/       # durable reference material
└── blog/       # essays, launch notes, postmortems
```

## GitHub Pages deployment

This repo is preconfigured for GitHub Pages deployment:

- workflow: `.github/workflows/deploy.yml`
- custom domain file: `public/CNAME`
- site URL: `https://vespid.ai` in `astro.config.mjs`

### What to do on GitHub

1. Create a GitHub repository for this project.
2. Push this directory to the `main` branch.
3. In GitHub repo settings:
   - open `Settings -> Pages`
   - set `Source` to `GitHub Actions`
4. Trigger the workflow by pushing to `main`.
5. In the same Pages settings screen, confirm the custom domain is `vespid.ai`.
6. Enable `Enforce HTTPS` after DNS is correct.

### DNS records for the apex domain

For `vespid.ai`, GitHub Pages expects the apex domain to point to these A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optional AAAA records:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

After changing DNS, propagation may take up to 24 hours.

## Notes

- `public/CNAME` ensures GitHub Pages deploys to `vespid.ai` instead of the default `*.github.io` domain.
- The current homepage is a dark-first brand shell; docs, projects, and blog content can now evolve without changing stacks.
