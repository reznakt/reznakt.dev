import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import ogPlugin from "vite-plugin-open-graph";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    svgr({ svgrOptions: { icon: true } }),
    ogPlugin({
      basic: {
        description: "My personal website",
        siteName: "Tomáš Režňák",
        title: "Tomáš Režňák",
        type: "website",
        url: "https://reznakt.dev",
      },
    }),
  ],
});
