import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const tokenBlacklist: Set<string> = new Set(); // Shared with signOut

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  if (tokenBlacklist.has(token)) {
    return res.status(401).json({ message: "Token is invalidated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = decoded; // Attach user info to request object
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}
