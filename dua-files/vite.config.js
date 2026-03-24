import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment, set base to your repo name
  // e.g., base: '/rahman/' if your repo is github.com/username/rahman
  // For custom domain or root deployment, use '/'
  base: '/rahman/',
})
