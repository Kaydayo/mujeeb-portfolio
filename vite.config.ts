import { defineConfig } from "vite";

// base "./" keeps every asset path relative, so the built site works from any folder or host.
export default defineConfig({
  base: "./",
  build: { target: "es2022", assetsInlineLimit: 0, chunkSizeWarningLimit: 1200 },
});
