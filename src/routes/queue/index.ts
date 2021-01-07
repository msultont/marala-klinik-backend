import { Router } from "express";

import {
    GetQueues,
    GetCurrentQueue,
    AddQueue,
    NextQueue,
    ResetQueues,
    GetQueuesDB,
    UpdateQueuesDB
} from "@controllers/queue";
import AuthMiddleWare from "@middleware/auth";
import PatientMiddleWare from "@middleware/patient";

const router = Router();

// API queue endpoint to get queue number / position
router.get("/", GetQueues);
router.get("/current", GetCurrentQueue);
router.post("/register", AddQueue);
router.post("/next", NextQueue);
router.post("/reset", ResetQueues);

// API queue endpoint to access the queue mongoDB database
router.get("/db/", AuthMiddleWare, GetQueuesDB);
router.patch("/db/update", AuthMiddleWare, PatientMiddleWare, UpdateQueuesDB)

export default router;
