import mongoose, { Document } from "mongoose";
import { ShortURL } from "./shortURL.model";

interface Analytics extends Document {
  shortURL: ShortURL;
}

const schema = new mongoose.Schema(
  {
    shortURL: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShortURL", // Change 'ShortURL' to a string
      required: true,
    },
  },
  { timestamps: true },
);

const analytics = mongoose.model<Analytics>("Analytics", schema); // Change the model name to 'Analytics'

export default analytics;
