import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CorgiSHOP',
  server: [
    {
      host: true,
      port: 80, // Configuração para a AWS
    },
    {
      host: true,
      port: 8080, // Configuração para sua máquina local
    },
  ],
  plugins: [react()],
})
