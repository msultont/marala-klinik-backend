import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

import { Login, Register } from "@controllers/Auth";
import Validator from "@middleware/Validator";
import { paramMissingError, IRequest } from "src/utils/constants";

const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/******************************************************************************
 *            Register - "POST /api/mst/auth/register"
 ******************************************************************************/
router.post("/register", Validator, Register);

/******************************************************************************
 *            Login - "POST /api/mst/auth/login"
 ******************************************************************************/
router.post("/login", Validator, Login);

export default router;
