import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'claude-code-blueprint'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
