import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface PostDocument extends mongoose.Document {
  user: UserDocument["_id"];
  title: string;
  desc: string;
  img: string;
  authorLogo: string;
  authorName: string;
  href: string;
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    authorLogo: { type: String, required: true },
    authorName: { type: String, required: true },
    href: { type: String, required: true },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  { timestamps: true }
);

const Post = mongoose.model<PostDocument>("Post", PostSchema);

export default Post;
