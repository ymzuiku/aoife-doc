import { defineConfig } from "vite";

export default defineConfig({
  build: {
    polyfillDynamicImport: false,
    assetsInlineLimit: 512,
    // target: "es",
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
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["aoife"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          aoife: "aoife",
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["monaco-editor", "vscode"],
  },
  esbuild: {
    jsxFactory: "aoife",
    jsxFragment: "aoife.Frag",
  },
});
