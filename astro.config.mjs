// @ts-check
import { defineConfig } from 'astro/config';

import strife from '@strifeapp/astro';
import Homes from './src/collections/Homes';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    ssr: { noExternal: ["@strifeapp/strife"] },
  },
});