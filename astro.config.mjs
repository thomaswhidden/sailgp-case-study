import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://thomaswhidden.github.io',
  base: '/sailgp-case-study',
  integrations: [tailwind()],
});
