import { IncomingMessage, ServerResponse } from "http";
import {
  sendErrorResponse,
  sendJsonResponse,
} from "../../../utils/http-response-handler";
import { createBooking } from "../service/booking-service";

export async function postBooking(
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    try {
      const data = JSON.parse(body);
      const booking = await createBooking(data);
      sendJsonResponse(res, 201, booking);
    } catch (error) {
      sendErrorResponse(res, 400, "Error al crear la reserva.", error);
    }
  });
}
