// vite.config.js
import { defineConfig, loadEnv } from "file:///D:/CodeDir/web/whu/ssai/lmad_web/node_modules/vite/dist/node/index.js";
import { createHtmlPlugin } from "file:///D:/CodeDir/web/whu/ssai/lmad_web/node_modules/vite-plugin-html/dist/index.mjs";
import vue from "file:///D:/CodeDir/web/whu/ssai/lmad_web/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/CodeDir/web/whu/ssai/lmad_web/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/CodeDir/web/whu/ssai/lmad_web/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/CodeDir/web/whu/ssai/lmad_web/node_modules/unplugin-vue-components/dist/resolvers.js";
import Icons from "file:///D:/CodeDir/web/whu/ssai/lmad_web/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///D:/CodeDir/web/whu/ssai/lmad_web/node_modules/unplugin-icons/dist/resolver.js";
import path from "path";
var __vite_injected_original_dirname = "D:\\CodeDir\\web\\whu\\ssai\\lmad_web";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("Server API: %o,Current Config File: .env." + env.VITE_PACKAGE + "command: %o", mode, command);
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: "Web Sentinel v1.0"
          }
        },
        entry: "/src/main.js",
        template: "/index.html"
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: "src/auto-import.d.ts",
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: "Icon"
          })
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ["ep"]
          })
        ]
      }),
      Icons({
        autoInstall: true
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src"),
        "~@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    build: {
      outDir: "./dist",
      assetsDir: "assets",
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          }
        }
      }
    },
    server: {
      port: 8602,
      host: "0.0.0.0"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDb2RlRGlyXFxcXHdlYlxcXFx3aHVcXFxcc3NhaVxcXFxsbWFkX3dlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kZURpclxcXFx3ZWJcXFxcd2h1XFxcXHNzYWlcXFxcbG1hZF93ZWJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NvZGVEaXIvd2ViL3dodS9zc2FpL2xtYWRfd2ViL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHtkZWZpbmVDb25maWcsIGxvYWRFbnZ9IGZyb20gJ3ZpdGUnXG5pbXBvcnQge2NyZWF0ZUh0bWxQbHVnaW59IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHtFbGVtZW50UGx1c1Jlc29sdmVyfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSdcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoe2NvbW1hbmQsIG1vZGV9KSA9PiB7XG4gICAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCAnJylcbiAgICBjb25zb2xlLmxvZyhcIlNlcnZlciBBUEk6ICVvLEN1cnJlbnQgQ29uZmlnIEZpbGU6IC5lbnYuXCIgKyBlbnYuVklURV9QQUNLQUdFICsgXCJjb21tYW5kOiAlb1wiLCBtb2RlLCBjb21tYW5kKVxuICAgIHJldHVybiB7XG4gICAgICAgIGRlZmluZToge1xuICAgICAgICAgICAgX19BUFBfRU5WX186IEpTT04uc3RyaW5naWZ5KGVudi5BUFBfRU5WKSxcbiAgICAgICAgfSxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgdnVlKCksXG4gICAgICAgICAgICBjcmVhdGVIdG1sUGx1Z2luKHtcbiAgICAgICAgICAgICAgICBtaW5pZnk6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnV2ViIFNlbnRpbmVsIHYxLjAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudHJ5OiAnL3NyYy9tYWluLmpzJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJy9pbmRleC5odG1sJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgICAgICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ10sXG4gICAgICAgICAgICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0LmQudHMnLFxuICAgICAgICAgICAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAgICAgICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKCksXG4gICAgICAgICAgICAgICAgICAgIEljb25zUmVzb2x2ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiAnSWNvbicsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgSWNvbnNSZXNvbHZlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkQ29sbGVjdGlvbnM6IFsnZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBJY29ucyh7XG4gICAgICAgICAgICAgICAgYXV0b0luc3RhbGw6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAgICAgICAgICAgJ35AJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJ1aWxkOiB7XG4gICAgICAgICAgICBvdXREaXI6ICcuL2Rpc3QnLFxuICAgICAgICAgICAgYXNzZXRzRGlyOiAnYXNzZXRzJyxcbiAgICAgICAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogNTAwLFxuICAgICAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWQudG9TdHJpbmcoKS5zcGxpdCgnbm9kZV9tb2R1bGVzLycpWzFdLnNwbGl0KCcvJylbMF0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2VydmVyOiB7XG4gICAgICAgICAgICBwb3J0OiA4NjAyLFxuICAgICAgICAgICAgaG9zdDogJzAuMC4wLjAnXG4gICAgICAgIH1cbiAgICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UixTQUFRLGNBQWMsZUFBYztBQUNsVSxTQUFRLHdCQUF1QjtBQUMvQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUSwyQkFBMEI7QUFDbEMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sVUFBVTtBQVJqQixJQUFNLG1DQUFtQztBQVd6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFDLFNBQVMsS0FBSSxNQUFNO0FBQzdDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUMzQyxVQUFRLElBQUksOENBQThDLElBQUksZUFBZSxlQUFlLE1BQU0sT0FBTztBQUN6RyxTQUFPO0FBQUEsSUFDSCxRQUFRO0FBQUEsTUFDSixhQUFhLEtBQUssVUFBVSxJQUFJLE9BQU87QUFBQSxJQUMzQztBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsSUFBSTtBQUFBLE1BQ0osaUJBQWlCO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsVUFDSixNQUFNO0FBQUEsWUFDRixPQUFPO0FBQUEsVUFDWDtBQUFBLFFBQ0o7QUFBQSxRQUNBLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNkLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNQLFNBQVMsQ0FBQyxPQUFPLFlBQVk7QUFBQSxRQUM3QixLQUFLO0FBQUEsUUFDTCxXQUFXO0FBQUEsVUFDUCxvQkFBb0I7QUFBQSxVQUNwQixjQUFjO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDWixDQUFDO0FBQUEsUUFDTDtBQUFBLE1BQ0osQ0FBQztBQUFBLE1BQ0QsV0FBVztBQUFBLFFBQ1AsV0FBVztBQUFBLFVBQ1Asb0JBQW9CO0FBQUEsVUFDcEIsY0FBYztBQUFBLFlBQ1Ysb0JBQW9CLENBQUMsSUFBSTtBQUFBLFVBQzdCLENBQUM7QUFBQSxRQUNMO0FBQUEsTUFDSixDQUFDO0FBQUEsTUFDRCxNQUFNO0FBQUEsUUFDRixhQUFhO0FBQUEsTUFDakIsQ0FBQztBQUFBLElBQ0w7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNILEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxRQUNwQyxNQUFNLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDekM7QUFBQSxJQUNKO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCx1QkFBdUI7QUFBQSxNQUN2QixlQUFlO0FBQUEsUUFDWCxRQUFRO0FBQUEsVUFDSixhQUFhLElBQUk7QUFDYixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQzdCLHFCQUFPLEdBQUcsU0FBUyxFQUFFLE1BQU0sZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUztBQUFBLFlBQzFFO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1Y7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
