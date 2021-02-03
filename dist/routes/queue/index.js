"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const queue_1 = require("@controllers/queue");
const auth_1 = __importDefault(require("@middleware/auth"));
const patient_1 = __importDefault(require("@middleware/patient"));
const router = express_1.Router();
// API queue endpoint to get queue number / position
router.get("/", queue_1.GetQueues);
router.get("/current", queue_1.GetCurrentQueue);
router.post("/register", queue_1.AddQueue);
router.post("/next", queue_1.NextQueue);
router.post("/reset", queue_1.ResetQueues);
// API queue endpoint to access the queue mongoDB database
router.get("/db/", auth_1.default, queue_1.GetQueuesDB);
router.patch("/db/update", auth_1.default, patient_1.default, queue_1.UpdateQueuesDB);
exports.default = router;
