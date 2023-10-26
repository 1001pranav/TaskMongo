import { getAllTasks } from "../database/tasks.js";

export default async function getTasks(req, res) {
    try {
        if (
            req.body.task_id &&
            typeof req.body.task_id === "string"
        ) {
            // const data = ;
        }
        const data = await getAllTasks();
        return await res.send(data);
    } catch (error) {
        console.log("Error getting tasks " + error);
        return res.send({message: "Something went wrong"});
    }
}