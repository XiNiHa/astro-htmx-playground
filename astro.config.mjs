import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    resolve: {
      alias: {
        "@": "/src"
      }
    }
  },
  integrations: [solidJs()],
  adapter: cloudflare()
});