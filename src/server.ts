import http, { IncomingMessage, ServerResponse } from "http";
import swaggerSpec from "./docs/swagger.js";
import { getBookingData } from "./domain/booking/endpoints/get-booking-data.js";
import { getRoomData } from "./domain/room/endpoints/get-room-data.js";

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
