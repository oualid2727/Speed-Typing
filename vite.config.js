// speed/vite.config.js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001', // Assuming your server is running on port 3001
    },
  },
  build: {
    outDir: 'dist', // Output directory for both client-side and server-side code
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Adjust the path based on your project structure
    },
  },
})