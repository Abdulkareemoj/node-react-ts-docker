// import cors from "cors"
import express from "express";
import log from "./logger";
import connect from "./utils/dbconnect";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";

const app = express();
const port = process.env.PORT as unknown as number;
const base = process.env.BASE as unknown as number;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(deserializeUser);

app.listen(port, () => {
  log.info(`[INFO] Server Started on PORT: ${port}`);
  log.info(`Server listening at ${base}`);

  connect();
  routes(app);
});
