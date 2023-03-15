import { Request, Response } from "express";
import shortURL from "../models/shortURL.model";

export async function createShortURL(req: Request, res: Response) {
  const { destination } = req.body;
  const newURL = await shortURL.create({ destination });
  return res.send(newURL);
}
