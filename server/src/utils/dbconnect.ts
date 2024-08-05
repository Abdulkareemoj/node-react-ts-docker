import mongoose from "mongoose";
import log from "../logger";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    log.info("Database Connected");
  } catch (err) {
    log.info(err);
    process.exit(1);
  }
  if (!process.env.MONGO_URI) {
    log.error("MONGO_URI environment variable is not set");
    process.exit(1);
  }
};

export default connect;
