import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/trusty-bot/',
  server: {
    host: true,
    allowedHosts: true,
    cors: true
  }
}) 