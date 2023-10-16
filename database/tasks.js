import { Tasks } from './schema/tasks.schema.js'

export async function insertTasks(insertTasks) {
    try {
        console.log(insertTasks);
        const insertData = {
            Title: insertTasks.title,
            Description: insertTasks.description,
            Status: insertTasks.status,
            Priority: insertTasks.priority
        }
        return await Tasks.create(insertData);
    } catch (error) {
        console.log("Error Insert Tasks "+error );
    }
}

export async function getAllTasks() {
    try {
        return await Tasks.find();
    } catch (error) {
        console.log("Error Get all tasks "+error);
    }
}
