/* eslint-disable @typescript-eslint/require-await */
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Hash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 12);
};

export const PasswordCompare = async (
    text: string,
    encrypt: string
): Promise<boolean> => {
    const result = await bcrypt.compare(text, encrypt);
    return result;
};

export const GenerateToken = async (
    id: number,
    username: string
): Promise<string> => {
    const secretKey: string = process.env.JWT_SECRET_KEY || "secret";
    const token: string = jwt.sign({ id, username }, secretKey);
    return token;
};
