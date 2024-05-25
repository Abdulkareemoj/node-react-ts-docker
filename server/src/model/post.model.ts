import mongoose from 'mongoose';
import {  UserDocument } from './user.model'

export interface PostDocument extends mongoose.Document{
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string;
    timestamps: Date;
}

const PostSchema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
        valid: {type: Boolean, default: true},
userAgent:{type: String},
    },
    {timestamps: true}
)

const Post = mongoose.model<PostDocument>("Post", PostSchema)

export default Post