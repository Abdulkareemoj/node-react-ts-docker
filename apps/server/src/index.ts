import dotenv from "dotenv";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./utils/auth";
import routes from "./routes";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import log from "./logger";
import { Dbconnect } from "./utils/dbconnect";

dotenv.config({ path: "../../.env" });
const port = process.env.PORT;
const app = express();

await Dbconnect();

app.all("/api/auth/*splat", toNodeHandler(auth));
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
});

// // graceful shutdown
// process.on('SIGINT', () => {
//   server.close((err: any) => {
//     if (err) {
//       log.error(err);
//       process.exit(1);
//     }
//     log.info('Server shut down gracefully');
//     process.exit(0);
//   });
// });

// process.on('SIGTERM', () => {
//   server.close((err: any) => {
//     if (err) {
//       log.error(err);
//       process.exit(1);
//     }
//     log.info('Server shut down gracefully');
//     process.exit(0);
//   });
// });
