import mongoose from "mongoose";
const { Schema } = mongoose;

import { DB_CONNECT } from "../../config/dbConnect.js";
import { STATUS, PRIORITY, TASK_TYPE } from "../../constant/constant.js";

const tasksSchema = new Schema({
    Title: String,
    Description: String,
    Status: {
        type: String,
        enum: STATUS
    },
    Priority: {
        type: String,
        enum: PRIORITY
    },
    Order: {
        type: Number,
        default: 0,
    },
    TaskType: {
        type: String,
        enum: TASK_TYPE,
        default: TASK_TYPE[0]
    },
    Notes: {
        type: String,
        default: ""
    }
    }, {
        autoIndex: true,
        autoCreate: false
    }
);

const ToDoTasks = new Schema({
    Name: String,
    Steps: [String],
    Tasks: [tasksSchema]
})
const conn = DB_CONNECT();

export default conn.model('ToDoTasks', ToDoTasks);
