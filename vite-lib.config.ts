import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "modules",
    lib: {
      name: "aoifeDoc",
      entry: "lib/index.ts",
      formats: ["es"],
    },
    minify: "terser",
    emptyOutDir: true,
    outDir: "es",
    brotliSize: false,
    manifest: false,
  },
  optimizeDeps: {
    exclude: ["monaco-editor", "vscode"],
  },
  esbuild: {
    jsxFactory: "aoife",
    jsxFragment: "aoife.Frag",
  },
});
