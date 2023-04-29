import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
      stores: fileURLToPath(new URL("./src/stores", import.meta.url)),
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
      views: fileURLToPath(new URL("./src/views", import.meta.url)),
      vars: fileURLToPath(new URL("./src/assets/index.sass", import.meta.url)),
    },
  },
});
