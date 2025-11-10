import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://diego.github.io',
  base: '/diego.github.io',
  integrations: [mdx()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});