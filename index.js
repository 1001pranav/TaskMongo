/* Importing external libraries */
import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";

/* Importing local files */
import { DB_CONNECT } from "./config/dbConnect.js";
import { Routes } from "./router.js";
import responseHelper from "./middlewares/responseHelper.js";
import requestHelper from "./middlewares/requestHelper.js";

const app = express();
const PORT = process.env.PORT || 3000;

/* Using Middlewares for body parser */
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

/* Mongo DB connection */
await DB_CONNECT();

/* Middlewares to read all the input and move it to body */
app.use(requestHelper)

/* API routes */
app.use(Routes);

console.log("Calling responseHelper middleware");
/* Middleware for handling response */
app.use(responseHelper);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});