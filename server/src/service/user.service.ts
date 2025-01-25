import { FilterQuery } from "mongoose";
import User, { UserDocument, UserInput } from "../models/user.model";
import { omit } from "lodash-es";

export async function createUser(input: UserInput) {
  try {
    // Select the first role from the roles array as the user's role
    const { role, ...rest } = input;

    // Pass the modified input to User.create
    return await User.create({ ...rest, role });
  } catch (error) {
    throw new Error(error as string);
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
  const user = (await User.findOne({ email })) as UserDocument;
  if (!user) {
    return false;
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    return false;
  }
  return omit(user.toJSON(), "password");
}
