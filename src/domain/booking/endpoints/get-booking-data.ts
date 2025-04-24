import { ServerResponse } from "http";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { loadJsonFile } from "../../../utils/data-loader.js";
import {
  sendErrorResponse,
  sendJsonResponse,
} from "../../../utils/http-response-handler.js";
import { Booking } from "../model/booking-model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getBookingData(res: ServerResponse): Promise<void> {
  try {
    const path = join(__dirname, "../../../data/booking-data.json");
    const bookingData = await loadJsonFile<Booking[]>(path);
    sendJsonResponse(res, 200, bookingData);
  } catch (error) {
    sendErrorResponse(
      res,
      500,
      "Ha habido un error en la recuperación de datos de reservas.",
      error
    );
  }
}
