"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("@controllers/auth");
const validator_1 = require("@middleware/validator");
const router = express_1.Router();
/******************************************************************************
 *            Register - "POST /api/mst/auth/register"
 ******************************************************************************/
router.post("/register", validator_1.RegisterValidator, auth_1.Register);
/******************************************************************************
 *            Login - "POST /api/mst/auth/login"
 ******************************************************************************/
router.post("/login", validator_1.LoginValidator, auth_1.Login);
exports.default = router;
