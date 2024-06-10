import { Express, Request, Response } from "express";
import {
  createShortURL,
  getAnalytics,
  redirectURL,
} from "../controllers/shortURL.controller";
import validateResource from "../middleware/validator";
import shortURLSchema from "../schema/createShortURL.schema";
import { authenticate, checkRole } from "../middleware/auth";
import { signIn, signOut } from "../controllers/auth.controller";

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    return res.send("bruhh");
  });

  app.post("/api/createurl", validateResource(shortURLSchema), createShortURL);

  app.get("/:shortId", redirectURL);

  app.get("/api/analytics", getAnalytics);

  app.post("/api/signin", signIn);

  app.post("/api/signout", signOut);
}

export default routes;
