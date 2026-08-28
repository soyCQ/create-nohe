import { defineConfig } from '@nohejs/core'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    outputDir: './build',
    vitePlugins: [vue()]
})