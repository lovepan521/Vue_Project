import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        AutoImport({
            resolvers: [TDesignResolver({
                library: 'vue-next'
            })],
        }),
        Components({
            resolvers: [TDesignResolver({
                library: 'vue-next'
            })]
        })
    ],
    resolve: {
        alias: {
            '@':  path.resolve(__dirname, 'src') ,
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    server: {
        // 是否开启 https
        https: false,
        // 端口号
        port: 3000,
        // 监听所有地址
        host: '0.0.0.0',
        // 服务启动时是否自动打开浏览器
        open: true,
        // 允许跨域
        cors: true,
        // 自定义代理规则
        proxy: {},
    },
    build: {
        // 设置最终构建的浏览器兼容目标
        target: 'es2015',
        // 构建后是否生成 source map 文件
        sourcemap: false,
        //  chunk 大小警告的限制（以 kbs 为单位）
        chunkSizeWarningLimit: 2000,
        // 启用/禁用 gzip 压缩大小报告
        reportCompressedSize: false,
    },
});
