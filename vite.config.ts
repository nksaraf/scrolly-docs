import { defineConfig } from "vite";
import { remarkCodeHike } from "@code-hike/mdx";
import react from "@vitejs/plugin-react";
import fs from "fs";
import windicss from "vite-plugin-windicss";
export default defineConfig(async () => ({
  plugins: [
    windicss(),
    (await import("@mdx-js/rollup")).default({
      remarkPlugins: [
        [
          remarkCodeHike,
          {
            theme: JSON.parse(
              fs.readFileSync(
                "./node_modules/shiki/themes/material-palenight.json",
                "utf8"
              )
            ),
          },
        ],
      ],
    }),
    react({
      jsxRuntime: "classic",
    }),
  ],
}));
