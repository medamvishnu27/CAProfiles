import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
    minify: 'esbuild', // Use esbuild for minification
    sourcemap: true, // Generate source maps for easier debugging
  },
  base: '/', // Set the base path for deployment
});
