import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { loadJsonFile } from "../../../utils/data-loader";
import { Room } from "../model/room-model";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getRoomDataService(): Promise<Room[]> {
  const path = join(__dirname, "../../../data/room-data.json");
  return await loadJsonFile<Room[]>(path);
}
