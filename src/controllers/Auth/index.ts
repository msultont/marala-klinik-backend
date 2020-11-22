import { Request, Response } from "express";
import { Hash, PasswordCompare, GenerateToken } from "@utils/Auth";
import Admin from "@models/Admin";
import logger from "@utils/Logger";

export const Register = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { username, password } = req.body;
    const hashedPassword: string = await Hash(password);
    const query = await Admin.create({ username, password: hashedPassword });
    return res.send(query);
};

export const Login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const query = await Admin.findOne({ username: username });

    if (!query)
        return res.status(404).json({
            success: false,
            message: "Account not found!",
        });
    else {
        const compare = await PasswordCompare(password, query.password);

        if (compare) {
            const token = await GenerateToken(query.id, query.username);
            return res.status(200).json({
                tokenType: "Bearer",
                access_token: token,
                user: query,
            });
        }
    }
    return res.status(401).json("Unauthorized");
};
