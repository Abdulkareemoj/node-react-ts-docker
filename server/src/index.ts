import routes from "./routes";
import bodyParser from "body-parser";
import express from "express";
import db from "./utils/db";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

const port = process.env.PORT;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  db();
  routes(app);
});
