import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // build: {
    //   outDir: 'dist', // Specify the output directory
    // },
    proxy: {
      '/api': 'https://localhost:5000',
      '/upload': 'https://localhost:5000'
    },
  }
})
