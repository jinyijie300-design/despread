import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// 处理 Figma Make 专属的 figma:asset/* 虚拟模块
// 在 Vercel / 标准 Vite 构建时，将其解析为透明占位图，避免构建报错
const figmaAssetPlugin: Plugin = {
  name: 'figma-asset',
  resolveId(id: string) {
    if (id.startsWith('figma:asset/')) {
      return '\0figma-asset:' + id.slice('figma:asset/'.length);
    }
  },
  load(id: string) {
    if (id.startsWith('\0figma-asset:')) {
      // 返回一个透明 1×1 PNG 的 base64，防止图片报错
      return `export default 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='`;
    }
  },
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetPlugin,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})