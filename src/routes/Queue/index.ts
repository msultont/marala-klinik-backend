import { Router } from "express";

import { GetQueues, RegisterQueue, ResetQueues } from "@controllers/Queue";

const router = Router();

/******************************************************************************
 *            Get Queue Data - "GET /api/mst/queue/"
 ******************************************************************************/
router.get("/", GetQueues);

/******************************************************************************
 *          Register queue - "POST /api/mst/queue/register"
 ******************************************************************************/
router.post("/register", RegisterQueue);

/******************************************************************************
 *          Reset queue - "POST /api/mst/queue/reset"
 ******************************************************************************/
router.delete("/reset", ResetQueues);

export default router;
