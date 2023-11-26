import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
async function db() {
  const dbUri = process.env.MONGO_URI as string;
  try {
    await mongoose.connect(`${dbUri}`);
    console.log(dbUri);
    console.log(process.env.MONGO_URI);
    console.log(`Connected to DB at ${dbUri}`);
  } catch (e) {
    console.error(e);
  }
}

export default db;
