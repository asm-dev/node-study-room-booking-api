import { ServerResponse } from "http";
import {
  sendErrorResponse,
  sendJsonResponse,
} from "../../../utils/http-response-handler";
import { deleteBooking } from "../service/booking-service";

export async function deleteBookingEndpoint(
  res: ServerResponse,
  id: string
): Promise<void> {
  try {
    const deleted = await deleteBooking(id);
    if (!deleted) {
      sendErrorResponse(res, 404, "Reserva no encontrada.");
      return;
    }
    sendJsonResponse(res, 200, { message: "Reserva eliminada correctamente." });
  } catch (error) {
    sendErrorResponse(res, 500, "Error al eliminar la reserva.", error);
  }
}
