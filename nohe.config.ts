import { defineConfig } from '@nohejs/core'
import react from '@vitejs/plugin-react'

export default defineConfig({
    outputDir: './build',
    plugins: [react()]
})