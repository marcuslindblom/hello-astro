// @ts-check
import { defineConfig } from 'astro/config';

import Homes from './src/collections/Homes';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import strife from '@strifeapp/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://hello-astro-gold.vercel.app',
  integrations: [strife({
    collections: [Homes],
  }),svelte()],

  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    ssr: { noExternal: ["@strifeapp/strife"] },
  },
});