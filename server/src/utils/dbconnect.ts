import mongoose from "mongoose";
import log from "../logger";
// dotenv.config();

// function connect(){
//     const dbUri = process.env.MONGO_URI as string

//     return mongoose.connect(dbUri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => {
//         log.info("Database connected")
//     })
//     .catch((error) => {
//         log.error("db error", error)
//         process.exit(1)
//     })

// }

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
