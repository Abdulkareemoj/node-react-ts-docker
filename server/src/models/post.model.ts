import mongoose from "mongoose";
import { UserDocument } from "./user.model";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789");

export interface PostDocument extends mongoose.Document {
  user: UserDocument["_id"];
  title: string;
  description: string;
  image: string;
  authorName: string;
  href: string;
  timestamps: Date;
}

const PostSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
      unique: true,
      default: () => `product_${nanoid()}`,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    authorName: { type: String, required: true },
    href: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = mongoose.model<PostDocument>("Post", PostSchema);

export default Post;
