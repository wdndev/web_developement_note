import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import eslint from 'vite-plugin-eslint'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    VueSetupExtend(),
    // eslint()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '*': resolve('')
    }
  }
})
