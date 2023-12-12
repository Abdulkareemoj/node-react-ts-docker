import { ZodSchema } from "zod";
import { NextFunction, Request, Response } from "express";

const validateResource = (resourceSchema: ZodSchema<any>) =>
async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    resourceSchema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (e) {
    return res.status(400).send(e.errors);
  }
};

export default validateResource;
