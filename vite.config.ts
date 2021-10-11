import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://example.com',
        changeOrigin: true
      }
    }
  },
  plugins: [vue()]
})
