import { defineConfig } from '@nohejs/core'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
    outputDir: './build',
    vitePlugins: [vue()]
})