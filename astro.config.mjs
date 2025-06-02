// @ts-check
import { defineConfig } from 'astro/config';

import strife from '@strifeapp/astro';
import Homes from './src/collections/Homes';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [strife({
    collections: [Homes]
  })],

  output: 'server',
  adapter: vercel(),
  vite: {
    ssr: {
      external: ['@strifeapp/astro'],
    },
  },
});