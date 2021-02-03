import { Router } from "express";

import {
    GetQueuesCounter,
    GetCurrentQueueCounter,
    AddQueue,
    NextQueue,
    ResetQueuesCounter,
    GetQueueDocuments,
    UpdateQueueDocument
} from "@controllers/queue";
import AuthMiddleWare from "@middleware/auth";
import PatientMiddleWare from "@middleware/patient";

const router = Router();

// API queue endpoint to get queue number / position
router.get("/", GetQueuesCounter);
router.get("/current", GetCurrentQueueCounter);
router.put("/register", AddQueue);
router.put("/next", NextQueue);
router.put("/reset", ResetQueuesCounter);

// API queue endpoint to access the queue mongoDB database
router.get("/db/", AuthMiddleWare, GetQueueDocuments);
router.patch("/db/update", AuthMiddleWare, PatientMiddleWare, UpdateQueueDocument)

export default router;
