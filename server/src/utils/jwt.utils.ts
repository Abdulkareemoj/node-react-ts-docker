import jwt from "jsonwebtoken";

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

export function signJwt(payload: object, options?: jwt.SignOptions) {
  return jwt.sign(payload, privateKey, { algorithm: "RS256", ...options });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey, { algorithms: ["RS256"] });
    return { valid: true, expired: false, decoded };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message.includes("jwt expired"),
      decoded: null,
    };
  }
}
