import routes from "./routes";
import bodyParser from "body-parser";
import express from "express";
import dbconnect from "./utils/dbconnect";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

const port = process.env.PORT;
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  dbconnect();
  routes(app);
});
