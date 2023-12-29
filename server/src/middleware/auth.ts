import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function logout(req: Request, res: Response) {
}

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Bearer <token>

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

export const checkRole = (permissions: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;
    if (userRole && permissions.includes(userRole)) {
      next();
    } else {
      return res.status(401).json("You do not have authorization");
    }
  };
};
