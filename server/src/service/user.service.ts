import { FilterQuery } from "mongoose"
import User, {UserDocument, UserInput} from '../model/user.model'
import { omit } from "lodash"

export async function createUser(input: UserInput) {
  try {
    return await User.create(input);
  } catch (error) {
    throw new Error(error as string); // Cast error to string
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
    const user = await User.findOne({email})
    if (!user){
        return false
    }
    const isValid = await user.comparePassword(password)
    if (!isValid){
        return false
    }
    return omit(user.toJSON(), "password")
}