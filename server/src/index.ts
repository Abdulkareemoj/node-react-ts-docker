import config from "config";
import routes from "./routes"
import bodyParser from "body-parser";
import express from "express";
import db from "./utils/db"
import cors from 'cors'

const app = express();
app.use(cors({
  origin: config.get("corsOrigin")}
))

const port = config.get("port")

app.use(bodyParser.json);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
 db(); 
 routes(app);
});
