import { defineConfig } from 'vite' // 动态配置函数
import { createVuePlugin } from 'vite-plugin-vue2'
// import { resolve } from 'path'

export default () =>
    defineConfig({
      plugins: [createVuePlugin()],
      server: {
        open: true,  //自动打开浏览器
        port: 2103  //端口号
      },
      resolve: {
        // 别名
        alias: [
          {
            find: '@',
            replacement: '/src'
          },
          { find: /ant-design-vue$/, replacement: 'ant-design-vue/dist/antd.min' }
        ]
      }
    })
