// @ts-check
import { defineConfig } from 'astro/config';

import strife from '@strifeapp/astro';
import Homes from './src/collections/Homes';

//import vercel from '@astrojs/vercel';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [strife({
    collections: [Homes]
  })],

  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});