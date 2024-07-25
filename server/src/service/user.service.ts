import { FilterQuery } from "mongoose";
import User, { UserDocument, UserInput } from "../models/user.model";
import { omit } from "lodash-es";

// Assuming UserInput now includes roles: string[];
export async function createUser(input: UserInput & { roles: string[] }) {
  try {
    // If roles need special handling, do it here before creating the user
    // For example, if you need to validate or modify roles, do that here

    // Then, pass the input (including roles) to User.create
    return await User.create(input);
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
