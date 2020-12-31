/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

import Admin from "@models/admin";

const { UNPROCESSABLE_ENTITY } = StatusCodes;

export const LoginValidator = [
    check("username")
        .isString()
        .notEmpty()
        .withMessage("Username is required!"),
    check("password")
        .isString()
        .notEmpty()
        .withMessage("Password is required!"),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(UNPROCESSABLE_ENTITY)
                .send({ errors: errors.array() });
        }
        return next();
    },
];

export const RegisterValidator = [
    check("username")
        .isString()
        .custom((value) => {
            return Admin.findOne({ username: value }).then((user) => {
                if (user) return Promise.reject("Username already in use!");
            });
        }),
    check("password")
        .isString()
        .isLength({ min: 4 })
        .withMessage("Password at least 4 characters!"),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(UNPROCESSABLE_ENTITY)
                .send({ errors: errors.array() });
        }
        return next();
    },
];
