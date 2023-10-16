import { Router }  from "express";

import getTasks from "./routes/get.tasks.js";
import insert from "./routes/insert.tasks.js";

const router = Router();
router.get('/tasks/get', async (req, res) => {
    return await getTasks(req, res);
});
router.post('/tasks/insert', async (req, res) => {
    return await insert(req, res);
});

export const Routes = router;