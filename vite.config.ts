import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    react(),
    legacy({
      targets: ["ie >= 11", "chrome >= 60"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      renderLegacyChunks: true,
      polyfills: [
        "es.symbol",
        "es.array.filter",
        "es.promise",
        "es.promise.finally",
        "es/map",
        "es/set",
        "es.array.for-each",
        "es.object.define-properties",
        "es.object.define-property",
        "es.object.get-own-property-descriptor",
        "es.object.get-own-property-descriptors",
        "es.object.keys",
        "es.object.to-string",
        "web.dom-collections.for-each",
        "esnext.global-this",
        "esnext.string.match-all",
      ],
    }),
  ],
  css: {
    modules: {
      // CSS Modules 配置
      localsConvention: "camelCase", // 支持驼峰命名
      generateScopedName: "[name]_[local]_[hash:base64:5]", // 生成的类名格式
    },
    preprocessorOptions: {
      scss: {
        // SCSS 预处理器选项
        additionalData: `@charset "UTF-8";`,
      },
    },
  },
  publicDir: "public",
  server: {
    port: 5678,
    proxy: {},
  },
  build: {
    target: ["es2015", "chrome60", "firefox60", "safari11.1"],
    cssTarget: "chrome61",
    // 分块大小限制，超过 500KB 的分块会被警告
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // 配置 chunk 文件名
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (/\.(css|scss)$/.test(assetInfo.name || "")) {
            return "css/[name]-[hash].[ext]";
          }
          return "assets/[name]-[hash].[ext]";
        },
      },
    },
  },
});
