import { Express, Request, Response } from "express";
import { createShortURL, redirectURL, analytics } from "../controllers/shortURL.controller.js";
import validateResource from "../middleware/validator.js";
import shortURLSchema from "../schema/createShortURL.schema.js";

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    return res.send("bruh");
  });

  app.post("/api/createurl", validateResource(shortURLSchema), createShortURL);

  app.get("/:shortId", redirectURL);

  app.get("/analytics", analytics);
}

export default routes;
