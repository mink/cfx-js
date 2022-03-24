import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        client: path.resolve(__dirname, 'client/resource.js'),
        server: path.resolve(__dirname, 'server/resource.js'),
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
})
