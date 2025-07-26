import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
import log from "../logger";

const validateRequest =
  (schema: ZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();

      return next();
    } catch (e: any) {
      log.error(e);
      return res.status(400).send(e.error);
    }
  };
export default validateRequest;
