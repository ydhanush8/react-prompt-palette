import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/prompt-palette/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  outDir: "dist",
});
