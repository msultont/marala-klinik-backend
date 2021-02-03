"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterValidator = exports.LoginValidator = void 0;
const express_validator_1 = require("express-validator");
const http_status_codes_1 = require("http-status-codes");
const admin_1 = __importDefault(require("@models/admin"));
const { UNPROCESSABLE_ENTITY } = http_status_codes_1.StatusCodes;
exports.LoginValidator = [
    express_validator_1.check("username")
        .isString()
        .notEmpty()
        .withMessage("Username is required!"),
    express_validator_1.check("password")
        .isString()
        .notEmpty()
        .withMessage("Password is required!"),
    (req, res, next) => {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(UNPROCESSABLE_ENTITY)
                .send({ errors: errors.array() });
        }
        return next();
    },
];
exports.RegisterValidator = [
    express_validator_1.check("username")
        .isString()
        .custom((value) => {
        return admin_1.default.findOne({ username: value }).then((user) => {
            if (user)
                return Promise.reject("Username already in use!");
        });
    }),
    express_validator_1.check("password")
        .isString()
        .isLength({ min: 4 })
        .withMessage("Password at least 4 characters!"),
    (req, res, next) => {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(UNPROCESSABLE_ENTITY)
                .send({ errors: errors.array() });
        }
        return next();
    },
];
