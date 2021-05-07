import "./database";

import express from "express";
import env from "./config/environments";
import cors from "cors";

import { router } from "./routes";

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

app.listen(env.port, () => {
  console.log(`Server is Running on port: ${env.port}`);
});
