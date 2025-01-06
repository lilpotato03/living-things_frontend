import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/nodejs': {
        target: 'http://localhost:3000', 
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/nodejs/, ''), 
      },
      '/django': {
        target: 'http://127.0.0.1:8000/api', 
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/django/, ''), 
      },
    },
  },
})
