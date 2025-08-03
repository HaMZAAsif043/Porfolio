import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/Porfolio/",
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },
  assetsInclude: ["**/*.hdr", "**/*.exr"],
  plugins: [
    react()
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // allowedHosts is not a valid Vite server option, so it has been removed
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
      // chunkSizeWarningLimit is not a valid Rollup option in Vite, so it has been removed
    },
  },
});
