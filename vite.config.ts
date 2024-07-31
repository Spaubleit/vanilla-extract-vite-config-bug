import { defineConfig } from "vite"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

export default defineConfig(({ command }) => {
  console.log("config", command)
  return {
    plugins: [
      vanillaExtractPlugin(),
      {
        name: "other-plugin",
        configResolved: ({ command }) => {
          console.log("plugin", command)
        }
      }
    ]
  }
})