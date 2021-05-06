import "./database";

import express from "express";
import env from "./config/environments";

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(env.port, () => {
  console.log(`Server is Running on port: ${env.port}`);
});
