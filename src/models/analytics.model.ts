import mongoose, { Document } from "mongoose";
import {ShortURL} fom "./shortURL.model.js"

interface Analytics extends Document{
    shortURL: ShortURL;
}


const schema = new mongoose.Schema({
  shortURL: {
    type: mongoose.Schema.Types.ObjectId,
    ref: ShortURL,
    required: true,
      },

}
{timestamp: true;}
);

const analytics = mongoose.model<Analytics>("analytics", schema);

export default analytics;


