import { getAllTasks } from "../../database/tasks.js";

export default async function getTasks(req, res) {
    try {
        if (
            req.body.task_id &&
            typeof req.body.task_id === "string"
        ) {
            // const data = ;
        }
        const data = await getAllTasks();
        return res.response = { status:200, data };
    } catch (error) {
        console.log("Error getting tasks " + error);
        return res.response = { message: "Something went wrong" };
    }
}