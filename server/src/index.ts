import routes from "./routes";
import bodyParser from "body-parser";
import express from "express";
import dbconnect from "./utils/dbconnect";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import deserializeUser from "./middleware/deserializeUser";
import log from "./logger";
import morgan from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const envPath = path.resolve(__dirname, "../../.env");

// dotenv.config({ path: envPath });

if (process.env.NODE_ENV !== "production") {
  const envPath = path.resolve(__dirname, "../../.env");
  dotenv.config({ path: envPath });
}

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(deserializeUser);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  log.info(`Server is running at http://localhost:${port}`);
  log.info(`Swagger UI available at http://localhost:${port}/api-docs`);
  dbconnect();
  routes(app);
});
