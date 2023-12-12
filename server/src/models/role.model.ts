import mongoose, { Document } from "mongoose";

interface Role extends Document {
  name: string;
}

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});
const Role = mongoose.model<Role>("Role", schema);

export default Role;
