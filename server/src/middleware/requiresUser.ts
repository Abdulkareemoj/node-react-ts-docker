import { get } from "lodash-es";
import { Request, Response, NextFunction } from "express";

const requiresUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = get(req, "user");
  if (!user) {
    return res.sendStatus(403);
  }
  return next();
};
export default requiresUser;

//need to turn this into more roles
