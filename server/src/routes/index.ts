import { Express, Request, Response } from "express";
import {
  createShortUrl,
  getAnalytics,
  getShortUrl,
  handleRedirect,
} from "../controller/shortUrl.controller";
import validateResource from "../middleware/validator";
import shortUrlSchema from "../schema/createShortURL.schema";
// import { authenticate, checkRole } from "../middleware/auth";
import { signIn, signOut } from "../controller/auth.controller";

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    return res.send("bruhh");
  });

  app.post("/api/url", validateResource(shortUrlSchema), createShortUrl);

  app.get("/:shortId", handleRedirect);

  app.get("/api/url/:shortId", getShortUrl);

  app.get("/api/analytics", getAnalytics);

  app.post("/api/signin", signIn);

  app.post("/api/signout", signOut);
}

export default routes;
