import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // 👇 Important: set this to match your GitHub repo name
  base: "/Porfolio/",

  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"], // optional
  },

  assetsInclude: ["**/*.hdr", "**/*.exr"],

  plugins: [
    react(),
  ],

  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    // optional server configs (e.g. port, proxy)
  },

  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
