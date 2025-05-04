import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    publicDir: 'public',
    resolve: {
        alias: {
          vue: '@vue/compat',
        }
      },
      plugins: [
        createVuePlugin({
          template: {
            compilerOptions: {
              compatConfig: {
                MODE: 2
              }
            }
          }
        })
      ],
})
