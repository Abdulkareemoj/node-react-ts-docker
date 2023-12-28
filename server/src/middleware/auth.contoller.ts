import { auth } from "../lucia";
import { LuciaError } from "lucia";
import { Request, Response } from "express";

export async function logout(req: Request, res: Response) {
  const authRequest = auth.handleRequest(req, res);
  const session = await authRequest.validate(); // or `authRequest.validateBearerToken()`
  if (!session) {
    return res.sendStatus(401);
  }
  await auth.invalidateSession(session.sessionId);

  authRequest.setSession(null); // for session cookie

  // redirect back to login page
  return res.status(302).setHeader("Location", "/login").end();
}

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  // basic check
  if (
    typeof username !== "string" ||
    username.length < 1 ||
    username.length > 31
  ) {
    return res.status(400).send("Invalid username");
  }
  if (
    typeof password !== "string" ||
    password.length < 1 ||
    password.length > 255
  ) {
    return res.status(400).send("Invalid password");
  }
  try {
    // find user by key
    // and validate password
    const key = await auth.useKey(
      "username",
      username.toLowerCase(),
      password,
    );
    const session = await auth.createSession({
      userId: key.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest(req, res);
    authRequest.setSession(session);
    // redirect to profile page
    return res.status(302).setHeader("Location", "/").end();
  } catch (e) {
    // check for unique constraint error in user table
    if (
      e instanceof LuciaError &&
      (e.message === "AUTH_INVALID_KEY_ID" ||
        e.message === "AUTH_INVALID_PASSWORD")
    ) {
      // user does not exist
      // or invalid password
      return res.status(400).send("Incorrect username or password");
    }

    return res.status(500).send("An unknown error occurred");
  }
}
