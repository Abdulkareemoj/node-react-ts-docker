import { Request, Response } from "express";
import shortURL from "../models/shortURL.model.js";

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


  return res.redirect(short.destination);
}