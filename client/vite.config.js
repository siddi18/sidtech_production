import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'https://sparktech.onrender.com',
      '/upload': 'https://sparktech.onrender.com'
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist') // Specify the correct output directory
  }
})
