// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rainerb.com',
  trailingSlash: 'never',
  integrations: [vue(), sitemap()],
  security: {
    csp: true,
  },
  // Pre-bundle the animation libraries so the dev server doesn't re-optimise them mid-load.
  vite: {
    optimizeDeps: {
      include: ['three', 'gsap', 'gsap/ScrollTrigger', 'gsap/SplitText'],
    },
  },
});
