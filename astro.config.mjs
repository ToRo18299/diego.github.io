import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://diego-github-63x10d80j.vercel.app',
  // base: '/diego.github.io',
  integrations: [mdx()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});