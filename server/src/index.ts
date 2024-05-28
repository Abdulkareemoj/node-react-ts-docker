// import cors from "cors"
import express from "express";
import log from "./logger";
import connect from "./utils/dbconnect";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const app = express();
const port = process.env.PORT;
const base = process.env.BASE;

console.log(process.env.PORT); // should log '4000'
console.log(process.env.MONGO_URI); // should log your MongoDB connection string
console.log(process.env.BASE); // should log '/api/'
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(deserializeUser);

app.listen(port, () => {
  log.info(`[INFO] Server Started on PORT: ${port}`);
  log.info(`[INFO] Server Listening at ${base}`);

  connect();
  routes(app);
});
