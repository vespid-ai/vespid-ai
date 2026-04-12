// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://vespid.ai';
const description = 'A home for projects, field notes, and operator-grade documentation.';
const socialImage = `${site}/og-default.png`;

export default defineConfig({
  site,
  integrations: [
    starlight({
      title: 'vespid.ai',
      description,
      customCss: ['./src/styles/custom.css'],
      favicon: '/favicon.svg',
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: socialImage,
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: 'vespid.ai — operator-grade systems, documented in public.',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:width',
            content: '1200',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:height',
            content: '630',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: socialImage,
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image:alt',
            content: 'vespid.ai — operator-grade systems, documented in public.',
          },
        },
        {
          tag: 'script',
          content: `try {
  const key = 'starlight-theme';
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, 'dark');
    document.documentElement.dataset.theme = 'dark';
  }
} catch {}`,
        },
      ],
      sidebar: [
        {
          label: 'Projects',
          autogenerate: { directory: 'projects' },
        },
        {
          label: 'Docs',
          autogenerate: { directory: 'docs' },
        },
        {
          label: 'Blog',
          autogenerate: { directory: 'blog' },
        },
      ],
    }),
  ],
});
