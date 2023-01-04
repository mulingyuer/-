/*
 * @Author: mulingyuer
 * @Date: 2023-01-04 11:01:22
 * @LastEditTime: 2023-01-04 15:41:58
 * @LastEditors: mulingyuer
 * @Description: vite 配置文件
 * @FilePath: \denglong\vite.config.ts
 * 怎么可能会有bug！！！
 */
import { resolve } from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import autoprefixer from "autoprefixer";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/main.ts"),
      name: "denglong",
      fileName: "denglong",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {},
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["> 1%", "last 2 versions", "not ie <= 8", "android >= 4.4"],
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/styles/color.scss';",
      },
    },
  },
  plugins: [cssInjectedByJsPlugin()],
});
