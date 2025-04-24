import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { loadJsonFile } from "../../../utils/data-loader.js";
import { Booking } from "../model/booking-model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getBookingDataService(): Promise<Booking[]> {
  const path = join(__dirname, "../../../data/booking-data.json");
  return await loadJsonFile<Booking[]>(path);
}
