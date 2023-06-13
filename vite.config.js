import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CorgiSHOP',
  server: [
    {
      host: true,
      port: 80, // Configuração para a AWS
    },
  ],
  plugins: [react()],
})
