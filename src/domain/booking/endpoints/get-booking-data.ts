import { ServerResponse } from "http";
import {
  sendErrorResponse,
  sendJsonResponse,
} from "../../../utils/http-response-handler.js";
import { getAllBookings } from "../service/booking-service.js";

export async function getBookingData(res: ServerResponse): Promise<void> {
  try {
    const bookingData = await getAllBookings();
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
