import { Router, response }  from "express";

/* Importing API routes */
import getTasks from "./routes/Tasks/get.tasks.js";
import insert from "./routes/Tasks/insert.tasks.js";
import insertTodo from "./routes/Todo/insert.todo.js";

const router = Router();
router.get('/tasks/get', async (req, res) => {
    return await getTasks(req, res);
});
router.post('/tasks/insert', async (req, res) => {
    return await insert(req, res);
});
router.post('/todo/insert', async (req, res) => {
    return await insertTodo(req, res)
});

router.all('*', async(req, res, next)=> {
    console.log("API not found");
    res.response = { message: 'ROUTE_NOT_FOUND' };
    next();
});
export const Routes = router;