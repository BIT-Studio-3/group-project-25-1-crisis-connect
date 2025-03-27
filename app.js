// This should be declared under - import express from "express";
import swaggerJSDoc from "swagger-jsdoc";

// This should be declared under - import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// This should be declared under - app.use(express.json());
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Emergency API",
      version: "1.0.0",
      description: "A emergency response system API",
      contact: {
        name: "Criss-Connect",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

// This should be declared under - const swaggerOptions = { ... };
const swaggerDocs = swaggerJSDoc(swaggerOptions);

// This should be declared under - app.use("/api/institutions", institutionRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));