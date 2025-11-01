import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables before any other imports
if (process.env.NODE_ENV !== "production") {
  const envPath = path.resolve(__dirname, "../../.env");
  dotenv.config({ path: envPath });
}
import { toNodeHandler } from "better-auth/node";
import { auth } from "./utils/auth";
import routes from "./routes";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import log from "./logger";
import { Dbconnect } from "./utils/dbconnect";

const port = process.env.PORT;
const app = express();

//Database Connection
await Dbconnect();

app.all("/api/auth/*", toNodeHandler(auth));
app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

routes(app);
app.listen(port, () => {
  log.info(`Server is running at http://localhost:${port}`);
  log.info(
    `Scalar is available at http://localhost:${port}/reference and Swagger at http://localhost:${port}/docs`
  );
});
