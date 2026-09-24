import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://alex-nomeza.github.io',
  base: '/alex-portfolio',
  trailingSlash: 'always',
  output: 'static',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
