import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model";

const user = await User.findOne({ username });

const payload = {
  id: user.id,
  username: user.username,
  role: user.role, // Include the user's role in the payload
};

const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

res.json({ token });
