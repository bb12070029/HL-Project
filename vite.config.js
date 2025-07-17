import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [uni()],
  root: process.cwd(),
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/uni.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './')
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}) 