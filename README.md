# Study room booking REST API

This project consists of developing a REST API using plain **Node.js**, that is, without frameworks such as Express. This API allows managing room bookings in a library or coworking space. The application is designed following clean architecture principles, separating responsibilities into domains, services, validators and endpoints.

## Main features

- List of available rooms (`GET /rooms`)
- Retrieve all bookings (`GET /bookings`)
- Retrieve a specific booking (`GET /bookings/:id`)
- Create bookings (`POST /bookings`)
- Update bookings (`PUT /bookings/:id`)
- Cancel bookings (`DELETE /bookings/:id`)
- Automatic documentation with Swagger (OpenAPI 3.0)

## Instructions to run the API

1. Clone the repository `git clone https://github.com/tu-usuario/node-study-room-booking-api.git`
2. Go to the project directory `cd node-study-room-booking-api`
3. Install dependencies `npm install`
4. Compile TS `npm run build`
5. Start the server `npm start`

> The server will be available at: `http://localhost:3000`
> (Optional) To view the Swagger documentation you can copy the URL `http://localhost:3000/docs/swagger.json` into this [online viewer](https://editor.swagger.io/) Swagger UI.

## Reflections on the development

This project has been a great opportunity to consolidate key backend development knowledge:

- Deep understanding of how HTTP servers work at a low level with Node.js
- Use of `fs/promises` for data persistence in files
- Clean design principles: separation of logic into endpoints, services and validators
- Real business validations (room capacity, schedule conflicts)
- Documentation generation with Swagger/OpenAPI from code comments
- Code modularization to facilitate scalability and maintenance

All of this without additional frameworks, which has allowed me to appreciate what tools like Express do under the hood, and above all to gain a real understanding of how an API is structured from scratch.
