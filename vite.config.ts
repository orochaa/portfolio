/* eslint-disable import/no-default-export */
/* eslint-disable import/no-nodejs-modules */
import path from 'node:path'
import tailwind from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * https://vitejs.dev/config/
 */

export default defineConfig({
  plugins: [react(), tailwind()],
  server: {
    host: '0.0.0.0',
    port: 4000,
    strictPort: true,
    cors: false,
  },
  build: {
    target: 'ES6',
    outDir: 'dist',
    minify: 'esbuild',
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    cors: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
})
