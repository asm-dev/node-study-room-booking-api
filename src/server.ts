import http from "http";
import swaggerSpec from "./docs/swagger";

const swaggerJson = JSON.stringify(swaggerSpec, null, 2);

const server = http.createServer((req, res) => {
  if (req.url === "/docs/swagger.json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(swaggerJson);
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Study Room Booking API is running.");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor levantado en: http://localhost:${PORT}`);
  console.log(
    `Funciona el JSON de la docu: http://localhost:${PORT}/docs/swagger.json`
  );
});
