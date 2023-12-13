import { insertTasks } from "../../database/tasks.js";
import { STATUS, PRIORITY } from "../../constant/constant.js";

export default async function insert(req, res, next) {
    try {
        const taskData = req.body;

        // Title is required
        if (!("title" in taskData)) {
            return res.response = { message: "REQUIRED_TITLE" };
        }

        // If status is present then check if status is either
        if (
            "status" in taskData &&
            !STATUS[taskData.status]
        ) {
            return res.response = {message: "INVALID_STATUS" };
        }

        // If status is not present add the default value
        if (!("status" in taskData)) {
            taskData.status = STATUS[0];
        }

        if (
            taskData.priority != undefined &&
            !STATUS[taskData.priority]
        ) {
            return res.response = {message: "INVALID_PROPERTY" };
        }

        if (taskData.priority === undefined) {
            taskData.priority = PRIORITY[0];
        }

        if (!taskData.description)
        {
            taskData.description = "";
        }

        await insertTasks(taskData);
        return res.response = { message: "Success" };
    } catch (error) {
        console.log("Error inserting tasks: " +error);
        return res.response = {message: "Something went wrong"};
    }
}