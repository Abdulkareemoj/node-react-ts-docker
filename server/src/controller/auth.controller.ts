import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.model"; // Replace with your User model
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const tokenBlacklist: Set<string> = new Set(); // Temporary in-memory storage for blacklisted tokens

export async function signIn(req: Request, res: Response) {
  try {
    const { identifier, password, token } = req.body;

    if (token) {
      // Google Sign-In flow
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      if (!payload || !payload.sub || !payload.email) {
        return res.status(401).json({ message: "Invalid or expired token" });
      }

      const { sub: googleId, email } = payload;

      let user = await User.findOne({ googleId });

      if (!user) {
        user = new User({ googleId, email });
        await user.save();
      }

      const userToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });

      return res.json({ token: userToken, user });
    } else {
      // Username/Email and Password flow
      const user = await User.findOne({
        $or: [{ username: identifier }, { email: identifier }],
      });

      if (!user || !user.password) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });

      return res.json({ token, user });
    }
  } catch (err) {
    console.error("Sign-in error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function signUp(req: Request, res: Response) {
  try {
    const { username, email, password, token } = req.body;

    if (token) {
      // Google Sign-Up Flow
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      if (!payload || !payload.sub || !payload.email) {
        return res.status(401).json({ message: "Invalid or expired token" });
      }

      const { sub: googleId, email: googleEmail } = payload;

      // Check if the user already exists
      let user = await User.findOne({ googleId });

      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Create a new user
      user = new User({ googleId, email: googleEmail });
      await user.save();

      const userToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });

      return res.status(201).json({ token: userToken, user });
    } else {
      // Traditional Sign-Up Flow
      if (!username || !email || !password) {
        return res
          .status(400)
          .json({ message: "Username, email, and password are required" });
      }

      // Check if the user already exists
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      const user = new User({
        username,
        email,
        password: hashedPassword,
      });

      await user.save();

      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });

      res.status(201).json({ token, user });
    }
  } catch (err) {
    console.error("Sign-up error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function signOut(req: Request, res: Response) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(400).json({ message: "Invalid authorization format" });
  }

  // Add token to the blacklist (if using in-memory)
  tokenBlacklist.add(token);

  // Respond with success
  res.json({ message: "Sign out successful" });
}
