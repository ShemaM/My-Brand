import swaggerJsDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";
import { Router } from "express";

const docRouter = Router();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shema Portfolio",
      version: "1.0.0",
      description: "My brand api Documentation",

      contact: {
        name: "Shema Christian",
        url: "https://shemachristian.netlify.app/ui/",
        email: "azertshema@gmail.com",
      },
    },
    servers: [
      {
        url: "https://shema-brand.herokuapp.com",
      },
    ],
    produces: ["application/json"],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocument = swaggerJsDoc(options);

docRouter.use(
  "/",
  swaggerui.serve,
  swaggerui.setup(swaggerDocument, { explorer: true })
);

export default docRouter;
