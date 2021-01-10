import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Queue, { QueueDB } from "@models/queue";

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
        return res.status(OK).json({
            message: "success!",
            currentQueue: Queue.getCurrentQueue(),
        });
    }
};

// Controller to access queue database
export const GetQueuesDB = async (req: Request, res: Response) => {
    const docs = await QueueDB.find({});
    return res.status(OK).json(docs);
};

export const UpdateQueuesDB = async (req: Request, res: Response) => {
    const { patientId, clinicType } = req.body;
    await QueueDB.findOneAndUpdate({ patientId: patientId }, { $set: { clinicType: clinicType } });
    return res.status(OK).json({message: "success"});
};
// End of controller to access queue database
