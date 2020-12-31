import { Router } from "express";

import authRouter from "./auth";
import patientsRouter from "./patient";
import queueRouter from "./queue";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/auth", authRouter);
router.use("/patient", patientsRouter);
router.use("/queue", queueRouter);

// Export the base-router
export default router;
