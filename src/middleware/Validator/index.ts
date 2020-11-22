/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const Validator = [
    check("username").isString(),
    check("password").isString().isLength({ min: 4 }),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }
        return next();
    },
];

export default Validator;
