import { ServerResponse } from "http";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { loadJsonFile } from "../../../utils/data-loader";
import {
  sendErrorResponse,
  sendJsonResponse,
} from "../../../utils/http-response-handler";
import { Room } from "../model/room-model";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getRoomData(res: ServerResponse): Promise<void> {
  try {
    const path = join(__dirname, "../../../data/room-data.json");
    const roomData = await loadJsonFile<Room[]>(path);
    sendJsonResponse(res, 200, roomData);
  } catch (error) {
    sendErrorResponse(
      res,
      500,
      "Ha habido un error en la recuperación de datos de salas.",
      error
    );
  }
}
