import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
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
    // you can add options like port, proxy, open, etc.
  },
  build: {
    chunkSizeWarningLimit: 1000, // ✅ put it here instead
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
