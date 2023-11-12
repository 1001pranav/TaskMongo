import ToDoTask from './schema/ToDoTasks.schema.js';
import { ObjectId } from 'mongoose';

export async function createToDo(toDoData) {
    return await ToDoTask.create({
        Steps: toDoData.steps,
        Name: toDoData.name
    });
}

export async function deleteToDo(todoID) {
    return await ToDoTask.deleteOne({
        _id: new ObjectId(todoID)
    })
}

export async function findOneToDo(findData) {
    return await ToDoTask.findOne(findData);
}

export async function updateToDo(todoID, updateFields) {
    return await ToDoTask.updateOne({
        _id: new ObjectId(todoID)
    }, {
        $set: updateFields
    });
}