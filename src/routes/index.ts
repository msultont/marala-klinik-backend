import { Router } from "express";

import authRouter from "./Auth";
import patientsRouter from "./Patients";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/auth", authRouter);
router.use("/patients", patientsRouter);

// Export the base-router
export default router;
