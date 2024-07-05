import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.model"; // Replace with your User model
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function signIn(req: Request, res: Response) {
  const { identifier, password, token } = req.body; // token is the Google user token // identifier can be either username or email
  //with google
  if (token) {
    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
    const googleId = payload["sub"];
    const email = payload["email"];

    // Find or create the user in your database
    let user = await User.findOne({ googleId });

    if (!user) {
      user = new User({ googleId, email });
      await user.save();
    }

    // Generate your own JWT that includes the user's ID in the payload
    const userToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.json({ token: userToken });
  } else {
    //
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

    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.json({ token });
  }
}

export async function signOut(req: Request, res: Response) {
  // implement sign out functionality here
  res.json({ message: "Sign out successful" });
}
