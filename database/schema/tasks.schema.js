import mongoose from "mongoose";
const { Schema } = mongoose;

import { DB_CONNECT } from "../../config/dbConnect.js";
import { STATUS, PRIORITY } from "../../constant/constant.js";

const tasksSchema = new Schema({
    Title: String,
    Description: String,
    Status: {
        type: String,
        enum: Object.values(STATUS)
    },
    Priority: {
        type: String,
        enum: Object.values(PRIORITY)
    }
}, {
    autoIndex: true,
    autoCreate: false
});

const conn = DB_CONNECT();
export const Tasks = conn.model('Task', tasksSchema);