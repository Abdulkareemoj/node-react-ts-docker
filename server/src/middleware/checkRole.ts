import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const checkRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.sendStatus(401); // 'Unauthorized'
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // 'Forbidden'
      }

      if (!roles.includes(user.role)) {
        return res.sendStatus(403); // 'Forbidden'
      }

      req.user = user;

      next();
    });
  };
};
