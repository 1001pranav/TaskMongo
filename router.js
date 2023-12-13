import { Router, response }  from "express";

/* Importing API routes */
import getTasks from "./routes/Tasks/get.tasks.js";
import insert from "./routes/Tasks/insert.tasks.js";
import insertTodo from "./routes/Todo/insert.todo.js";
import responseHelper from "./middlewares/responseHelper.js";

const router = Router();

router.get('/tasks/get', async (req, res,  next) => {
    await getTasks(req, res);
    responseHelper(req, res, next);
});
router.post('/tasks/insert', async (req, res, next) => {
    await insert(req, res);
    responseHelper(req, res, next);

});
router.post('/todo/insert', async (req, res, next) => {
    await insertTodo(req, res);
    responseHelper(req, res, next);
});

export const Routes = router;