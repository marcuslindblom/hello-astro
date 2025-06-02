// @ts-check
import { defineConfig } from 'astro/config';

import strife from '@strifeapp/astro';
import Homes from './src/collections/Homes';

// https://astro.build/config
export default defineConfig({
  integrations: [strife({
    collections: [Homes]
  })],
  output: 'server',
});