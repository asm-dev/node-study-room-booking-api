// copy-static.ts
import { cpSync, existsSync } from "fs";
import { join } from "path";

const srcDir = join("src", "data");
const distDir = join("dist", "data");

if (existsSync(srcDir)) {
  cpSync(srcDir, distDir, { recursive: true });
  console.log("Archivos JSON copiados a dist/data");
} else {
  console.warn("src/data no existe");
}
