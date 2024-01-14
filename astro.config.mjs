import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [sitemap(), prefetch(), partytown()]
});