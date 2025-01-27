import { defineConfig } from '@nohe/core'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    outputDir: './build',
    vitePlugins: [vue()]
})