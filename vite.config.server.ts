/**
 * Konfiguracja Vite dla bundla SSR (używana tylko przez prerender.mjs).
 * Wynik trafia do dist-ssr/ (gitignored).
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist-ssr',
    rollupOptions: {
      output: { format: 'esm' },
    },
  },
  ssr: {
    // CJS-only pakiety muszą być wbundlowane, bo Node.js nie potrafi
    // importować ich jako named ESM exports.
    noExternal: ['react-helmet-async'],
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
