// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://vespid.ai',
  integrations: [
    starlight({
      title: 'vespid.ai',
      description: 'A home for projects, field notes, and operator-grade documentation.',
      customCss: ['./src/styles/custom.css'],
      favicon: '/favicon.svg',
      head: [
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
