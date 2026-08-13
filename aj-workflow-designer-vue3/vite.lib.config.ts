import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  build: {
    outDir: "dist-lib",
    lib: {
      entry: fileURLToPath(new URL("./src/lib.ts", import.meta.url)),
      name: "AjWorkflowDesigner",
      formats: ["es", "umd"],
      fileName: (format) =>
        format === "umd" ? "aj-workflow-designer.umd.cjs" : "aj-workflow-designer.es.js",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: { vue: "Vue" },
        assetFileNames: "aj-workflow-designer.[ext]",
      },
    },
  },
});
