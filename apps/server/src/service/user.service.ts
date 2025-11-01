import { FilterQuery } from "mongoose";
import User, { UserDocument, UserInput } from "../models/user.model";
import { omit } from "lodash-es";

export async function createUser(input: UserInput) {
  try {
    return await User.create(input);
  } catch (error: any) {
    // We are throwing the original error, so the controller can handle specific error codes (e.g., 11000 for duplicates)
    throw error;
  }
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return User.findOne(query).lean();
}

export async function validatePassword({
  email,
  password,
}: {
  email: UserDocument["email"];
  password: string;
}) {
  const user = await User.findOne({ email });
  if (!user) {
    return false;
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    return false;
  }
  return omit(user.toJSON(), "password");
}
