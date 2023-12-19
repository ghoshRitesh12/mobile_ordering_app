import express from "express";
import { config } from "dotenv";

import errorHandler from "./src/config/errorHandler.js";
import notFoundHandler from "./src/config/notFoundHandler.js";

config();
const app = express()
const PORT = process.env.PORT || 2000;

(async function () {
  app.get("/", (req, res) => {
    res.sendStatus(200);
  })


  app.use(notFoundHandler);
  app.use(errorHandler);
})()

app.listen(PORT, function () {
  console.log(`Server @ http://localhost:${PORT}`)
})

