import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de reserva de salas",
      version: "1.0.0",
      description:
        "API REST para la gestión de reserva de salas de una biblioteca ficticia",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
  apis: [
    "./src/domain/booking/endpoints/*.ts",
    "./src/domain/room/endpoints/*.ts",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

console.log("Swagger cargado correctamente");
