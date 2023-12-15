import mongoose, { Document } from "mongoose";

interface User extends Document {
  username: string;
  password: string;
  email: string;
  role: string;
}

const schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "user" },
});
const User = mongoose.model<User>("User", schema);

export default User;
