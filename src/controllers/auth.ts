/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Hash, PasswordCompare, GenerateToken } from "@utils/auth";
import Admin from "@models/admin";

const { NOT_FOUND, UNAUTHORIZED, OK, FORBIDDEN } = StatusCodes;

export const Register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const hashedPassword: string = await Hash(password);
    const query = await Admin.create({ username, password: hashedPassword });
    return res.send(query);
};

export const Login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const query = await Admin.findOne({ username: username });

    if (!query)
        return res.status(NOT_FOUND).json({
            success: false,
            message: "Account not found!",
        });
    else {
        //@ts-ignore
        if (query.status === "active") {
            //@ts-ignore
            const compare = await PasswordCompare(password, query.password);

            if (compare) {
                //@ts-ignore
                const token = await GenerateToken(query.id, query.username);
                return res.status(OK).json({
                    tokenType: "Bearer",
                    accessToken: token,
                    user: query,
                });
            }
        } else
            return res
                .status(FORBIDDEN)
                .json({ message: "Please contact the admin!" });
    }
    return res.status(UNAUTHORIZED).json({ message: "Unauthorized!" });
};