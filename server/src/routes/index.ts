import { Express, Request, Response } from "express";
import {
  createShortURL,
  getAnalytics,
  redirectURL,
} from "../controllers/shortURL.controller";
import validateResource from "../middleware/validator";
import shortURLSchema from "../schema/createShortURL.schema";
import { checkRole } from "../middleware/checkRole";
import { login, logout } from "../middleware/auth.contoller";

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    return res.send("bruhh");
  });

  app.post("/api/createurl", validateResource(shortURLSchema), createShortURL);

  app.get("/:shortId", redirectURL);

  app.get("/api/analytics", getAnalytics);

  app.post("/login", login);

  app.post("/logout", logout);

  app.get("/admin", checkRole(["admin"])); // Only authenticated admins can reach this;

  app.get(
    "/user",
    checkRole(["user", "admin"]),
    // Both authenticated users and admins can reach this
  );
}

export default routes;
