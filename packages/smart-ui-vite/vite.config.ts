/// <reference types="vitest" />

import { defineConfig, UserConfig } from "vite";
const path = require("path");
import Vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCss from "./config/unocss";

export const config = {
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/entry.ts"),
      name: "SmartyUI",
      formats: ["es", "umd", "iife"],
      fileName: `smarty-ui`,
    },
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: "terser",
    cssCodeSplit: true,
    brotliSize: true,
    sourcemap: true,
    outDir: "./dist",
  },
  plugins: [
    // 添加JSX插件
    vueJsx({}),
    Vue(),
    UnoCss(),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/\.[tj]sx$/],
    },
  },
};

export default defineConfig(config as UserConfig);
