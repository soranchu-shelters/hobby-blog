import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import taillwind from "@astrojs/tailwind"
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    svelte(),
    taillwind(),
    mdx(),
  ],
  legacy: {
    astroFlavoredMarkdown: true,
  },
})
