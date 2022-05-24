import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const vuetify = require('@vuetify/vite-plugin')
// If there is an error here, you might need to `npm install @types/node -D`
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      i18n: path.resolve(__dirname, 'src/i18n'),
      components: path.resolve(__dirname, 'src/components'),
      plugins: path.resolve(__dirname, 'src/plugins'),
    },
    // https://vitejs.dev/config/#resolve-extensions
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx' /*'.vue'*/],
  },
})