import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body)

  let fName = req.body["street"];
  let sName = req.body["pet"];

  let finalName = fName + sName;

  res.send(finalName);

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
