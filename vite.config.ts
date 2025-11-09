// FILE-INDEX: vite.config.ts — (commented to avoid errors)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 4000 },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
})
