import express from "express";
import "dotenv/config";

import { DB_CONNECT } from "./config/dbConnect.js";
import { Routes } from "./router.js";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

DB_CONNECT();
app.use(Routes);
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});