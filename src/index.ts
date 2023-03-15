import express from "express";
import config from "config";
import routes from "./routes";
import bodyParser from "body-parser";

const app = express();
const port = config.get("port");

app.use(bodyParser.json);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  routes(app);
});
