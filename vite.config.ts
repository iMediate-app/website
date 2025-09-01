// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': '/src' } },
  base: '/',
  build: {
    outDir: '.', // Output build files to project root
    emptyOutDir: false, // Do not delete everything in root
  },
});