import { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "node-react-ts-docker API",
      version: "1.0.0",
      description: "API for node-react-ts-docker application",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/docs/swagger.routes.ts", "./src/docs/swagger.components.ts"],
};

export default swaggerOptions;
