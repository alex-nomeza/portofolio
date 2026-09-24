import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const nodeEnv = (globalThis as { process?: { env?: { NODE_ENV?: string } } }).process?.env
  ?.NODE_ENV;

export default defineConfig({
  site: 'https://alex-nomeza.github.io',
  base: nodeEnv === 'development' ? '/' : '/portofolio',
  trailingSlash: 'always',
  output: 'static',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
