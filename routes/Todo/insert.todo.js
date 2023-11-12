import { createToDo } from '../../database/todo.js';
export default async function(req, res) {
    try {
        if (
            !("name" in req.body) ||
            req.name === ""
        ) {
            return res.response = { message: "REQUIRED_NAME" };
        }

        const insertedData = await createToDo(
            req.body
        );
        return res.response = { status: 200, data: insertedData };
    } catch (error) {
        console.log("Error on creating ToDo"+ error);
        return res.response = {
            message: "SERVER_ERROR",
            data: error
        };
    }
}