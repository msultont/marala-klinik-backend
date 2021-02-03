"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const { NOT_ACCEPTABLE } = http_status_codes_1.StatusCodes;
const PatientMiddleware = (req, res, next) => {
    const { accept } = req.headers;
    if (accept === "application/json")
        return next();
    else
        return res.status(NOT_ACCEPTABLE).json({ message: "application not acceptable" });
};
exports.default = PatientMiddleware;
