import { Request, Response } from "express";
import analytics from "../models/analytics.model";
import ShortURL from "../models/shortURL.model";
export async function createShortURL(req: Request, res: Response) {
  const { destination } = req.body;
  const newURL = await ShortURL.create({ destination });
  return res.status(201).json(newURL);
}

export async function redirectURL(req: Request, res: Response) {
  const { shortId } = req.params;
  const short = await ShortURL.findOne({ shortId }).lean();
  if (!short) {
    return res.status(404).json("URL not found");
  }
  analytics.create({ ShortURL: short._id });
  return res.redirect(short.destination);
}

export async function getAnalytics(req: Request, res: Response) {
  const data = await analytics.find().populate("shortURL").lean();
  return res.status(200).json(analytics);
}
