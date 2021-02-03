"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-types */
const logger_1 = __importDefault(require("@utils/logger"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Auth = (req, res, next) => {
    // req.headers.authorization =
    // eslint-disable-next-line max-len
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmIyNzBjZTQzYTMyNTQ0NGY2MGU0MCIsInVzZXJuYW1lIjoiYWRtaW5fa2xpbmlrX21zdCIsImlhdCI6MTYwNjMxMjE3MX0.5lEtOdCMWnqYicJ4kne0ednx19FzyYFCYKO8SqWI4kw";
    if (!req.headers.authorization) {
        logger_1.default.warn("Unauthorized");
        return res.status(401).json({ message: "Unauthorized" });
    }
    const secretKey = process.env.JWT_SECRET_KEY || "secret";
    const token = req.headers.authorization.split(" ")[1];
    try {
        const credential = jsonwebtoken_1.default.verify(token, secretKey);
        if (credential) {
            req.app.locals.credential = credential;
            return next();
        }
        return res.status(400).json("token invalid");
    }
    catch (error) {
        return res.send(error);
    }
};
exports.default = Auth;
