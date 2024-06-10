import Session from "../model/session.model";
import UserDocument from "../model/user.model";
import { signJwt, verifyJwt } from "../utils/jwt.utils";
import { get } from "lodash";
import { ObjectId } from "mongoose";
import { findUser } from "./user.service";
import { FilterQuery, UpdateQuery } from "mongoose";

type SessionWithId = Omit<typeof Session, "password"> & { _id: ObjectId };
// const accessToken = config.get<string>("accessTokenttl")
// const refreshToken = config.get<string>("refreshTokenttl")

// console.l/og(accessToken)
export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ user: userId, userAgent });
  return session.toJSON();
}

export function createAccessToken({
  user,
  session,
}: {
  user: Omit<typeof UserDocument, "password"> | typeof UserDocument;
  session: SessionWithId;
}): string {
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: process.env.ACCESS_TOKEN } //15 min
  );
  return accessToken;
}

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  const { decoded } = verifyJwt(refreshToken);
  if (!decoded || !get(decoded, "session")) return false;

  //get session
  const session = await Session.findById(get(decoded, "session"));

  //check if session is valid
  if (!session || !session?.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const accessToken = signJwt({ ...user, session: session._id });

  return accessToken;
}

export async function updateSession(
  query: FilterQuery<typeof Session>,
  update: UpdateQuery<typeof Session>
) {
  return Session.updateOne(query, update);
}

export async function findSessions(query: FilterQuery<typeof Session>) {
  return Session.find(query).lean();
}
