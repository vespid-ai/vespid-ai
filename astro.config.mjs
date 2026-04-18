// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://vespid.ai';
const description = 'vespid is a contract-first prototype for discoverable, authorized, approvable, and auditable agent-native web services over ordinary HTTP.';
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
        PageFrame: './src/components/starlight/PageFrame.astro',
        Sidebar: './src/components/starlight/Sidebar.astro',
        PageSidebar: './src/components/starlight/PageSidebar.astro',
        Footer: './src/components/starlight/Footer.astro',
        Pagination: './src/components/starlight/Pagination.astro',
        TwoColumnContent: './src/components/starlight/TwoColumnContent.astro',
        ContentPanel: './src/components/starlight/ContentPanel.astro',
        PageTitle: './src/components/starlight/PageTitle.astro',
      },
      favicon: '/favicon.svg',
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#121317',
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
            content: 'vespid.ai — contract-first agent-native services over ordinary HTTP.',
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
            content: 'vespid.ai — contract-first agent-native services over ordinary HTTP.',
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
          label: 'Project',
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
