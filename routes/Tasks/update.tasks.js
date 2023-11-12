import { RESPONSE } from "../../constant/response";
import { updateTask } from "../../database/tasks";
export default async function updateTasks(req, res) {
    try {
        if (!("task_id" in req.body)) {
            return res.response = {
                message: RESPONSE.REQUIRED_TASK_ID
            }
        }

        const taskID = req.body.task_id;
        delete req.body.task_id;

        // await updateTask()
    } catch (error) {
        console.log("Error: onUpdateTask", error);
        return res.response = {
            message: "SERVER_ERROR",
            data: error
        }
    }
}