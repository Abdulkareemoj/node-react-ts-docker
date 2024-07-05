import { z, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

const validateResource =
  (resourceSchema: ZodSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      resourceSchema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      return res.status(400).send(e.error);
    }
  };

export default validateResource;
