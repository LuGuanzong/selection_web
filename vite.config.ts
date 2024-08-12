import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin  } from "vite-plugin-svg-icons";
import {fileURLToPath, URL} from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000', // 目标服务器的地址
                changeOrigin: true, // 是否需要改变原始主机头为目标URL
                rewrite: (path) => path.replace(/^\/api/, '') // 路径重写规则
            }
        }
    },

      plugins: [
            vue(),
            AutoImport({resolvers: [ElementPlusResolver()]}),
            Components({resolvers: [ElementPlusResolver()]}),
            createSvgIconsPlugin({
              // 指定需要缓存的svg图标文件目录
              iconDirs: [fileURLToPath(new URL('./src/assets/icons', import.meta.url))],
              // 指定symbolId格式
              symbolId: 'icon-[dir]-[name]'
            })
      ],
      resolve: {
          alias: {
              '@': '/src',
              '~': '/src/assets'
          }
      },

})
