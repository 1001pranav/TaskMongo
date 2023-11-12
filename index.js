import express from "express";
import "dotenv/config";

import { DB_CONNECT } from "./config/dbConnect.js";
import { Routes } from "./router.js";
import responseHelper from "./middlewares/responseHelper.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

/* Mongo DB connection */
await DB_CONNECT();
app.use(Routes);

console.log("Calling responseHelper middleware");
/* Middleware for handling response */
app.use(responseHelper);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});