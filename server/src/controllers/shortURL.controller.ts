import { Request, Response } from "express";
import shortURL from "../models/shortURL.model";
import analyticsModel from "../models/analytics.model"; // Change the import name to avoid conflict

export async function createShortURL(req: Request, res: Response) {
  const { destination } = req.body;
  const newURL = await shortURL.create({ destination });
  return res.send(newURL);
}

export async function redirectURL(req: Request, res: Response) {
  const { shortId } = req.params;
  const short = await shortURL.findOne({ shortId }).lean();
  if (!short) {
    return res.sendStatus(404);
  }
  
  await analyticsModel.create({ shortURL: short._id }); // Change the usage here

  return res.redirect(short.destination);
}

export async function getAnalytics(req: Request, res: Response) {
  const data = await analyticsModel.find({}).lean(); // Change the usage here
  return res.send(data);
}
