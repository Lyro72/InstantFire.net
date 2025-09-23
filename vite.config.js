import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/InstantFire.net/', // <- Aquí pon el nombre de tu repo con slash al final
  plugins: [react()],
})

