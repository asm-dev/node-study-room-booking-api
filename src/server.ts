import http, { IncomingMessage, ServerResponse } from "http";
import swaggerSpec from "./docs/swagger";
import { deleteBookingEndpoint } from "./domain/booking/endpoints/delete-booking";
import { getBookingByIdEndpoint } from "./domain/booking/endpoints/get-booking-by-id";
import { getBookingData } from "./domain/booking/endpoints/get-booking-data";
import { postBooking } from "./domain/booking/endpoints/post-booking";
import { putBooking } from "./domain/booking/endpoints/put-booking";
import { getRoomData } from "./domain/room/endpoints/get-room-data";

const swaggerJson = JSON.stringify(swaggerSpec, null, 2);

const server = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    const { url, method } = req;

    if (url === "/docs/swagger.json" && method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(swaggerJson);
      return;
    }

    if (url === "/bookings" && method === "GET") {
      return getBookingData(res);
    }

    if (url === "/rooms" && method === "GET") {
      return getRoomData(res);
    }

    if (url?.startsWith("/bookings/") && method === "GET") {
      const id = url.split("/")[2];
      return getBookingByIdEndpoint(res, id);
    }

    if (url === "/bookings" && method === "POST") {
      return postBooking(req, res);
    }

    if (url?.startsWith("/bookings/") && method === "PUT") {
      const id = url.split("/")[2];
      return putBooking(req, res, id);
    }

    if (url?.startsWith("/bookings/") && method === "DELETE") {
      const id = url.split("/")[2];
      return deleteBookingEndpoint(res, id);
    }

    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("La API está en funcionamiento.");
  }
);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor levantado en: http://localhost:${PORT}`);
  console.log(
    `Swagger JSON disponible en: http://localhost:${PORT}/docs/swagger.json`
  );
});
