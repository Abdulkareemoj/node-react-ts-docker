import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.model"; // Replace with your User model

export async function signIn(req: Request, res: Response) {
  const { identifier, password } = req.body; // identifier can be either username or email

  // Find the user by username or email
  const user = await User.findOne({
    $or: [{ username: identifier }, { email: identifier }],
  });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  // Check if the password is correct
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Generate the JWT
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1h" });

  res.json({ token });
}
