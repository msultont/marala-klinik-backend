import { Router } from "express";

import authRouter from "./Auth";
import patientsRouter from "./Patient";
import queueRouter from "./Queue";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/auth", authRouter);
router.use("/patient", patientsRouter);
router.use("/queue", queueRouter);

// Export the base-router
export default router;
