import { ServerResponse } from "http";
import {
  sendErrorResponse,
  sendJsonResponse,
} from "../../../utils/http-response-handler";
import { getBookingById } from "../service/booking-service";

export async function getBookingByIdEndpoint(
  res: ServerResponse,
  id: string
): Promise<void> {
  try {
    const booking = await getBookingById(id);
    if (!booking) {
      sendErrorResponse(res, 404, "Reserva no encontrada.");
      return;
    }
    sendJsonResponse(res, 200, booking);
  } catch (error) {
    sendErrorResponse(res, 500, "Error al recuperar la reserva.", error);
  }
}
