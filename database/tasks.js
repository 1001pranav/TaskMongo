import { ObjectId } from 'mongoose';

import ToDoTask from './schema/ToDoTasks.schema.js'

export async function insertTasks(insertTasks, objectID) {
    try {
        console.log(insertTasks);
        const insertData = {
            Title: insertTasks.title,
            Description: insertTasks.description,
            Status: insertTasks.status,
            Priority: insertTasks.priority,
            TaskType: insertTasks.task_type,
            Notes: insertTasks.notes
        }
        return await ToDoTask.updateOne({ _id: ObjectId(objectID)}, {
            $push: {
                Tasks: insertData
            }
        });
    } catch (error) {
        console.log("Error Insert Tasks "+error );
    }
}

export async function getAllTasks() {
    try {
        return await ToDoTask.find();
    } catch (error) {
        console.log("Error Get all tasks "+error);
    }
}

export async function pickTask(taskID, todoID) {
    try {
        return await ToDoTask.findOne({
            "Tasks._id": new ObjectId(taskID),
            _id: new ObjectId(todoID)
        });
    } catch (error) {
        console.log("Error Picking tasks "+ error);
    }
}

export async function updateTask(todoID, taskID, updateField) {
    try {
        const updates = {
            $set: {}
        }

        for (const field of updateField) {
            updates.$set[`Tasks.$.${Object.keys(field)[0]}`] = Object.values(field)[0];
        }

        return await ToDoTask.updateMany(
            {
                _id: new ObjectId(todoID),
                "Tasks._id": new ObjectId(taskID)
            },
            updates
        )
    } catch (error) {
        console.log("Error Updating tasks: " + error);
    }
}

export async function deleteTask(taskID, todoID) {
    try {

        return await ToDoTask.updateOne({
            _id: new ObjectId(todoID)
        }, {
            $pull: {
                Tasks: {
                    _id: new ObjectId(taskID)
                }
            }
        })
        // return await Tasks.deleteOne({ _id: ObjectId(taskID)});
    } catch (error) {
        console.log("Error Deleting tasks: "+ error);
    }
}
