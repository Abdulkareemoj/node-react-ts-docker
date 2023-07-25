import { Request, Response } from "express";
import shortURL from "../models/shortURL.model.js";
import analytics from "../models/analytics.model.js"

export async function createShortURL(req: Request, res: Response) {
  const { destination } = req.body;
  const newURL = await shortURL.create({ destination });
  return res.send(newURL);
}

export async function redirectURL (req: Request, res: Response) {
  const {shortId} =req.params;
  const short = await shortURL.findOne({ shortId}).lean();
  if (!short){
    return res.sendStatus(404); 
  }
analytics.create(shortURL: short._id)

  return res.redirect(short.destination);
}

export async function analytics (req: Request, res: Response) {
const data = analytics.find({}).lean()
return res.send(data); 
}
