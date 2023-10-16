import { getAllTasks } from "../database/tasks.js";

export default async function getTasks(req, res) {
    try {
        const data = await getAllTasks();
        console.log(data);
        return await res.send(data);
    } catch (error) {
        console.log("Error getting tasks " + error);
        return res.send({message: "Something went wrong"});
    }
}