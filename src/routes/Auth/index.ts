import { Router } from "express";

import { Login, Register } from "@controllers/Auth";
import { LoginValidator, RegisterValidator } from "@middleware/Validator";

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
