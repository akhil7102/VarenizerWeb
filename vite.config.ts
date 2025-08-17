import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
      "figma:asset": fileURLToPath(new URL("./src/assets", import.meta.url))
    },
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Make the build more portable
    rollupOptions: {
      output: {
        // Ensure consistent file names for easier deployment
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    // Generate source maps for easier debugging
    sourcemap: true,
    // Optimize for client-side only deployment
    target: 'esnext',
    minify: 'esbuild'
  },
  // Configure for static deployment
  base: '/VarenizerWeb/',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
})
