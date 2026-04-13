// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://vespid.ai';
const description = 'Agent deployment systems: orchestration, authorization, runtime control, and field notes from shipping agents into real workflows.';
const socialImage = `${site}/og-default.png`;

export default defineConfig({
  site,
  integrations: [
    starlight({
      title: 'vespid.ai',
      description,
      customCss: ['./src/styles/custom.css'],
      components: {
        Header: './src/components/Header.astro',
      },
      favicon: '/favicon.svg',
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#f7f9fc',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        },
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
            content: 'vespid.ai — agent orchestration, deployed in the real world.',
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
            content: 'vespid.ai — agent orchestration, deployed in the real world.',
          },
        },
        {
          tag: 'script',
          content: `try {
  const key = 'starlight-theme';
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, 'light');
    document.documentElement.dataset.theme = 'light';
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
