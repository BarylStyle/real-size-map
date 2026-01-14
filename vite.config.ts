import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Build paths:
  // - GitHub Pages needs '/real-size-map/'
  // - Vercel/local should use '/'
  base: process.env.GITHUB_ACTIONS ? '/real-size-map/' : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
