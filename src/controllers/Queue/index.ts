import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import Queue from "@models/Queue";
import { DateConversion } from "@utils/Conversion";

const { NOT_FOUND, UNAUTHORIZED, OK, FORBIDDEN } = StatusCodes;

export const ResetQueues = async (
    req: Request,
    res: Response
): Promise<Response> => {
    await Queue.deleteMany({});
    return res.status(OK).json({ messages: "success!" });
};

export const GetQueues = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const data = await Queue.find();
    return res.status(OK).json(data);
};

export const RegisterQueue = async (
    req: Request,
    res: Response
): Promise<Response> => {
    let query = null;
    const data = await Queue.find();

    if (data.length === 0) {
        query = await Queue.create({
            queueNumber: 1,
            createdAt: DateConversion(new Date(), "Asia/Jakarta"),
        });
    } else {
        const lastQueue = data[data.length - 1];
        query = await Queue.create({
            queueNumber: lastQueue.queueNumber + 1,
            createdAt: DateConversion(new Date(), "Asia/Jakarta"),
        });
    }
    return res.send(query);
};
