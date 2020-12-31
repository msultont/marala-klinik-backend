import { Router } from "express";

import { Login, Register } from "@controllers/auth";
import { LoginValidator, RegisterValidator } from "@middleware/validator";

const router = Router();

/******************************************************************************
 *            Register - "POST /api/mst/auth/register"
 ******************************************************************************/
router.post("/register", RegisterValidator, Register);

/******************************************************************************
 *            Login - "POST /api/mst/auth/login"
 ******************************************************************************/
router.post("/login", LoginValidator, Login);

export default router;
