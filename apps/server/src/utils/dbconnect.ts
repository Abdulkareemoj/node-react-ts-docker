import { MongoClient } from "mongodb";
import log from "../logger";

const client = new MongoClient(process.env.MONGO_URI!);

const Dbconnect = async () => {
  try {
    await client.connect();
    log.info("Database Connected");
  } catch (err) {
    log.error(err);
    process.exit(1);
  }
  if (!process.env.MONGO_URI) {
    log.error("MONGO_URI process.environment variable is not set");
    process.exit(1);
  }
};

export { client, Dbconnect };
