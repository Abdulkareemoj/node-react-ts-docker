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
    return res.send("bruhh");
  });

  app.post("/api/createurl", validateResource(shortURLSchema), createShortURL);

  app.get("/:shortId", redirectURL);

  app.get("/api/analytics", getAnalytics);

  app.post("/api/signin");

  app.get("/api/test/mod");
  app.get("/api/test/all");
  app.get("/api/test/admin");

  app.get("/api/test/user");
}

export default routes;
