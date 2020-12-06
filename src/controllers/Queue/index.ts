import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import Queue from "@models/Queue";
import { DateConversion } from "@utils/Conversion";

const { OK, BAD_REQUEST } = StatusCodes;

export const ResetQueues = (req: Request, res: Response) => {
    Queue.resetQueue();
    return res.status(OK).json({ message: "success!" });
};

export const GetCurrentQueue = (req: Request, res: Response) => {
    const data = Queue.getCurrentQueue();
    res.status(OK).json({ message: "success!", currentQueue: data });
};

export const GetQueues = (req: Request, res: Response) => {
    const data = Queue.getAllQueues();
    return res.status(OK).json({ message: "success!", queues: data });
};

export const AddQueue = (req: Request, res: Response) => {
    Queue.addQueue();
    return res.status(OK).json({
        message: "success!",
        queue: Queue.getLastQueue(),
    });
};

export const NextQueue = (req: Request, res: Response) => {
    if (Queue.getCurrentQueue() >= Queue.getLastQueue())
        return res
            .status(BAD_REQUEST)
            .json({ message: "failed! no more users." });
    else {
        Queue.nextQueue();
        return res
            .status(OK)
            .json({
                message: "success!",
                currentQueue: Queue.getCurrentQueue(),
            });
    }
};
