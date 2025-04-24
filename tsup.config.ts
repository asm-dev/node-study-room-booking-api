import { cpSync } from "fs";
import { join } from "path";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/server.ts", "src/docs/swagger.ts"],
  format: ["esm"],
  outDir: "dist",
  clean: true,
  splitting: true,
  bundle: false,
  sourcemap: true,
  dts: false,
  onSuccess: async () => {
    cpSync(join("src", "data"), join("dist", "data"), { recursive: true });
  },
});
