import { Express, Request, Response } from "express";
import {
  createShortUrl,
  getAnalytics,
  getShortUrl,
  handleRedirect,
} from "../controller/shortUrl.controller";
import { createShortURLSchema } from "../schema/createShortUrl.schema";

function routes(app: Express) {
  app.get("/api/healthcheck", (req: Request, res: Response) => {
    return res.send("bruhh");
  });

  app.post("/api/url", createShortUrl);

  app.get("/api/:shortId", handleRedirect);

  app.get("/api/url/:shortId", getShortUrl);

  app.get("/api/analytics", getAnalytics);
}

export default routes;
