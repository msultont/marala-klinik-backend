import { Router } from "express";

import authRouter from "./Auth";
import patientsRouter from "./Patients";
import queueRouter from "./Queue";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/auth", authRouter);
router.use("/patients", patientsRouter);
router.use("/queue", queueRouter);

// Export the base-router
export default router;
