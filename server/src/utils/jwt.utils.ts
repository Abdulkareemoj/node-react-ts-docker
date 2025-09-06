import jwt from "jsonwebtoken";

export function signJwt(payload: object, options?: jwt.SignOptions) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not set");
  }
  return jwt.sign(payload, secret, { algorithm: "HS256", ...options });
}

export function verifyJwt(token: string) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not set");
  }
  try {
    const decoded = jwt.verify(token, secret, { algorithms: ["HS256"] });
    return { valid: true, expired: false, decoded };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message.includes("jwt expired"),
      decoded: null,
    };
  }
}
