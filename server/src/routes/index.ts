import { Express, Request, Response } from "express";
import {
  createShortURL,
  getAnalytics,
  redirectURL,
} from "../controllers/shortURL.controller";
import validateResource from "../middleware/validator";
import shortURLSchema from "../schema/createShortURL.schema";

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    return res.send("bruh");
  });

  app.post("/api/createurl", validateResource(shortURLSchema), createShortURL);

  app.get("/:shortId", redirectURL);

  app.get("/analytics", getAnalytics);
}

export default routes;
