import { Router } from "express";

import { GetQueues, GetCurrentQueue, AddQueue, NextQueue, ResetQueues } from "@controllers/queue";

const router = Router();

/******************************************************************************
 *            Get All Queue Data - "GET /api/mst/queue/"
 ******************************************************************************/
router.get("/", GetQueues);

/******************************************************************************
 *            Get Current Queue - "GET /api/mst/queue/current"
 ******************************************************************************/
router.get("/current", GetCurrentQueue);

/******************************************************************************
 *          Add new queue - "POST /api/mst/queue/register"
 ******************************************************************************/
router.post("/register", AddQueue);

/******************************************************************************
 *          Next queue - "POST /api/mst/queue/next"
 ******************************************************************************/
router.post("/next", NextQueue);


/******************************************************************************
 *          Reset queue - "POST /api/mst/queue/reset"
 ******************************************************************************/
router.post("/reset", ResetQueues);

export default router;
