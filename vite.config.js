import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Automatically use root path for Netlify, or repo name for GitHub Pages
  base: process.env.GITHUB_ACTIONS ? '/My-Portfolio/' : '/',
})

