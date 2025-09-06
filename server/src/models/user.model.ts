import mongoose from "mongoose";

import bcrypt from "bcryptjs";

export interface UserInput {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  role: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      required: true,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  let user = this as unknown as UserDocument;

  if (!user.isModified("password")) {
    return next();
  }

  const saltRounds = parseInt(process.env.SALT_WORK_FACTOR || "10", 10);
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;

  return next();
});

//login schema, compares plaintext password with bcrypt hashed password
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocument;
  return bcrypt.compare(candidatePassword, user.password);
};

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
