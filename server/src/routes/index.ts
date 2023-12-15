import { Express, Request, Response } from "express";
import {
  createShortURL,
  getAnalytics,
  redirectURL,
} from "../controllers/shortURL.controller";
import validateResource from "../middleware/validator";
import shortURLSchema from "../schema/createShortURL.schema";
import { checkRole } from "../middleware/checkRole";

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    return res.send("bruhh");
  });

  app.post("/api/createurl", validateResource(shortURLSchema), createShortURL);

  app.get("/:shortId", redirectURL);

  app.get("/api/analytics", getAnalytics);

  app.post("/api/login");

  app.get("/admin", checkRole(["admin"]), (req: Request, res: Response) => {
    // Only authenticated admins can reach this
  });

  app.get(
    "/user",
    checkRole(["user", "admin"]),
    (req: Request, res: Response) => {
      // Both authenticated users and admins can reach this
    },
  );
}

export default routes;
