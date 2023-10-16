import { insertTasks } from "../database/tasks.js";
import { STATUS, PRIORITY } from "../constant/constant.js";

export default async function insert(req, res) {
    try {
        const taskData = req.body;

        if (!taskData.title) {
            return res.send({ message: "Required Title" });
        }

        if (
            taskData.status != undefined &&
            !STATUS[taskData.status]
        ) {
            return res.send({ message: "Invalid Status" });
        }

        if (taskData.status === undefined) {
            taskData.status = STATUS[0];
        }

        if (
            taskData.priority != undefined &&
            !STATUS[taskData.priority]
        ) {
            return res.send({ message: "Invalid Priority" });
        }

        if (taskData.priority === undefined) {
            taskData.priority = PRIORITY[0];
        }

        if (!taskData.description)
        {
            taskData.description = "";
        }

        await insertTasks(taskData);
        return res.send({ message: "Success" });
    } catch (error) {
        console.log("Error inserting tasks: " +error);
        return res.send({message: "Something went wrong"});
    }
}