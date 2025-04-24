# API REST para Reserva de Salas de Estudio

Este proyecto consiste en el desarrollo de una API REST utilizando **Node.js** como tal, es decir, sin frameworks tales como Express. Esta API permite gestionar las reservas de salas en una biblioteca o espacio de coworking. La aplicación está diseñada siguiendo principios de arquitectura limpia, separando responsabilidades en dominios, servicios, validadores y endpoints.

## Principales funcionalidades

- Listado de salas disponibles (`GET /rooms`)
- Consulta de todas las reservas (`GET /bookings`)
- Consulta de una reserva específica (`GET /bookings/:id`)
- Creación de reservas (`POST /bookings`)
- Modificación de reservas (`PUT /bookings/:id`)
- Cancelación de reservas (`DELETE /bookings/:id`)
- Documentación automática con Swagger (OpenAPI 3.0)

## Instrucciones para Ejecutar el Proyecto

1. Clonar el repositorio `git clone https://github.com/tu-usuario/node-study-room-booking-api.git`
2. Ir al directorio del proyecto `cd node-study-room-booking-api`
3. Instalar dependencias `npm install`
4. Compilar TS `npm run build`
5. Levantar el servidor `npm start`

> El servidor quedará disponible en: `http://localhost:3000`
> (Opcional) Para ver la documentación del Swagger puedes copiar la URL `http://localhost:3000/docs/swagger.json` en este [visualizador online](https://editor.swagger.io/) Swagger UI.

## Reflexiones sobre el desarrollo

Este proyecto ha sido una gran oportunidad para consolidar conocimientos clave de desarrollo backend:

- Entendimiento profundo de cómo funcionan los servidores HTTP a bajo nivel con Node.js
- Uso de `fs/promises` para persistencia de datos en archivos
- Principios de diseño limpio: separación de lógica en endpoints, servicios y validadores
- Validaciones de negocio reales (capacidad de salas, conflictos de horario)
- Generación de documentación con Swagger/OpenAPI desde comentarios en código
- Modularización de código para facilitar escalabilidad y mantenimiento

Todo ello sin frameworks adicionales, lo que me ha permitido apreciar lo que hacen por debajo herramientas como Express, y sobre todo ganar comprensión real de cómo se estructura una API desde cero.
