import jwt from "jsonwebtoken";
const privateKey = process.env.PRIVATE_KEY as string;
const publicKey = process.env.PUBLIC_KEY as string;
console.log(process.env.PRIVATE_KEY); // should log your private key
console.log(process.env.PUBLIC_KEY); // should log your public key

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return { valid: true, expired: false, decoded };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}
