import mongoose from "mongoose";
import log from "../logger";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    log.info("Database Connected");
  } catch (err) {
    log.info(err);
    exit(1);
  }
  if (!process.env.MONGO_URI) {
    log.error("MONGO_URI process.environment variable is not set");
    exit(1);
  }
};

export default connect;
