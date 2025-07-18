import {defineConfig, loadEnv} from 'vite'
import {createHtmlPlugin} from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    console.log("Server API: %o,Current Config File: .env." + env.VITE_PACKAGE + "command: %o", mode, command)
    return {
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
        plugins: [
            vue(),
            createHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        title: 'WAScope v1.0'
                    }
                },
                entry: '/src/main.js',
                template: '/index.html'
            }),
            AutoImport({
                imports: ['vue', 'vue-router'],
                dts: 'src/auto-import.d.ts',
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        prefix: 'Icon',
                    })
                ],
            }),
            Components({
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        enabledCollections: ['ep'],
                    })
                ],
            }),
            Icons({
                autoInstall: true,
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '~@': path.resolve(__dirname, './src'),
            }
        },
        build: {
            outDir: './dist',
            assetsDir: 'assets',
            chunkSizeWarningLimit: 500,
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    }
                }
            }
        },
        server: {
            port: 8602,
            host: '0.0.0.0'
        }
    }
})
