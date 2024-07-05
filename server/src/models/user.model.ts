import mongoose from "mongoose";

import bcrypt from "bcryptjs";

export interface UserInput {
  email: string;
  name: string;
  password: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  let user = this as UserDocument;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(
    process.env.SALT_WORK_FACTOR as unknown as number
  );

  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

//login schema, compares plaintext password with bcrypt hashed password
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocument;
  return bcrypt
    .compare(candidatePassword, user.password)
    .catch((e: any) => false);
};

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
