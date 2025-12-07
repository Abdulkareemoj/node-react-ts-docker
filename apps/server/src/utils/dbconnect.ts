import dotenv from "dotenv";
import { MongoClient, Db } from "mongodb";
import log from "../logger";
dotenv.config({ path: "../../../.env" });
let client: MongoClient;
let db: Db;

const Dbconnect = async () => {
  if (!process.env.MONGO_URI) {
    log.error("MONGO_URI process.environment variable is not set");
    process.exit(1);
  }

  client = new MongoClient(process.env.MONGO_URI!);

  try {
    await client.connect();
    db = client.db(); // Get the database instance
    log.info("Database Connected");
  } catch (err) {
    log.error(err);
    process.exit(1);
  }
};

export { client, db, Dbconnect };
