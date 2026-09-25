import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    host: '0.0.0.0',

    proxy: {
      '/api/v3/flows/executor/': { target: 'http://authentik-server:9000' },
      '/api/v3/core/users/me/': { target: 'http://authentik-server:9000' },
      '/api/v3/authenticators/webauthn/': { target: 'http://authentik-server:9000' },
      '/api/v3/authenticators/all/': { target: 'http://authentik-server:9000' },
      '/application/o/': { target: 'http://authentik-server:9000' },
      '/flows/-/': { target: 'http://authentik-server:9000' },
      '/api': {
        target: 'http://backend:8000',
        changeOrigin: true,
      },
    },
  },
})
