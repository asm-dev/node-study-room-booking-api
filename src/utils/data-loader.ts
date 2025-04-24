import { readFile } from "fs/promises";
import { resolve } from "path";

export async function loadJsonFile<T>(absolutePath: string): Promise<T> {
  const content = await readFile(resolve(absolutePath), "utf-8");
  return JSON.parse(content);
}
