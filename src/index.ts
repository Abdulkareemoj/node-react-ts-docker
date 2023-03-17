// import config from "config";
import routes from "./routes"
import bodyParser from "body-parser";
import express from "express";


const app = express();
const port = 3000;

app.use(bodyParser.json);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  routes(app);
});
