import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
  ],
  server: {
    port: 5173, // Ensure Vite's dev server runs on 5173
    hmr: {
      host: "localhost", // Use localhost for HMR
      port: 5173, // Force HMR WebSocket to use 5173
    },
  },});
