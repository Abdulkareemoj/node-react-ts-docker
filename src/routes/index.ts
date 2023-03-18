import { Express, Request, Response } from "express";
import { createShortURL, redirectURL } from "../controllers/shortURL.controller.js";
import validateResource from "../middleware/validator.js";
import createShortURLSchema from "../schema/createShortURL.schema.js";

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    return res.send("bruh");
  });

  app.post("/api/createurl", validateResource(createShortURLSchema), createShortURL);

  app.get("/:shortId", redirectURL);
}

export default routes;
