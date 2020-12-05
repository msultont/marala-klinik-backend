/* eslint-disable @typescript-eslint/ban-types */
import Logger from "@utils/Logger";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const Auth = (req: Request, res: Response, next: NextFunction): any => {
    // req.headers.authorization =
        // eslint-disable-next-line max-len
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmIyNzBjZTQzYTMyNTQ0NGY2MGU0MCIsInVzZXJuYW1lIjoiYWRtaW5fa2xpbmlrX21zdCIsImlhdCI6MTYwNjMxMjE3MX0.5lEtOdCMWnqYicJ4kne0ednx19FzyYFCYKO8SqWI4kw";
    if (!req.headers.authorization) {
        Logger.warn("Unauthorized");
        return res.status(401).json({ message: "Unauthorized" });
    }

    const secretKey = process.env.JWT_SECRET_KEY || "secret";
    const token: string = req.headers.authorization.split(" ")[1];

    try {
        const credential: string | object = jwt.verify(token, secretKey);
        if (credential) {
            req.app.locals.credential = credential;
            return next();
        }
        return res.status(400).json("token invalid");
    } catch (error) {
        return res.send(error);
    }
};

export default Auth;
