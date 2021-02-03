"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const patient_1 = __importDefault(require("./patient"));
const queue_1 = __importDefault(require("./queue"));
// Init router and path
const router = express_1.Router();
// Add sub-routes
router.use("/auth", auth_1.default);
router.use("/patients", patient_1.default);
router.use("/queue", queue_1.default);
// Export the base-router
exports.default = router;
