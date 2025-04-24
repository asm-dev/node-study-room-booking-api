import { IncomingMessage, ServerResponse } from "http";
import {
  sendErrorResponse,
  sendJsonResponse,
} from "../../../utils/http-response-handler.js";
import { updateBooking } from "../service/booking-service.js";

export async function putBooking(
  req: IncomingMessage,
  res: ServerResponse,
  id: string
): Promise<void> {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    try {
      const data = JSON.parse(body);
      const updated = await updateBooking(id, data);
      if (!updated) {
        sendErrorResponse(res, 404, "Reserva no encontrada.");
        return;
      }
      sendJsonResponse(res, 200, updated);
    } catch (error) {
      sendErrorResponse(res, 400, "Error al actualizar la reserva.", error);
    }
  });
}
