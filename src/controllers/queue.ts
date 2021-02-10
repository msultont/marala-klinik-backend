import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Counter from "@models/counter";
import Queue from "@models/queue";
import { QueuePositionGenerator } from "@utils/generator";

const { OK, BAD_REQUEST } = StatusCodes;

export const ResetQueuesCounter = async (req: Request, res: Response) => {
    const query = await Counter.findOneAndUpdate(
      { name: "queue" },
      { $set: { count: 0, current: 0 } }
    )
    return res.send(query);
};

export const GetCurrentQueueCounter = async (req: Request, res: Response) => {
    const data = await Counter.findOne({ name: "queue" });
    res.status(OK).json({ message: "success!", currentQueue: data.current });
};

export const GetQueuesCounter = async (req: Request, res: Response) => {
    const data = await Counter.findOne({ name: "queue" });
    const queueDataArr = []
    for (let i = 0; i <= data.count; i++) {
        queueDataArr.push(i)
    }
    
    return res.status(OK).json({ message: "success!", queues: queueDataArr });
};

export const AddQueue = async (req: Request, res: Response) => {
    const { patientId, fullName, clinicType } = req.body;
    let counterObject = await Counter.findOne({ name: "queue" });
    await Counter.findOneAndUpdate(
      { name: "queue" },
      { $set: { count: counterObject.count + 1 } }
    );
    counterObject = await Counter.findOne({ name: "queue" }); 
    await Queue.create({
      patientId: patientId,
      fullName: fullName,
      clinicType: clinicType,
      position: QueuePositionGenerator() + counterObject.count
  });
    return res.status(OK).json({
        message: "success!",
        queue: counterObject.count,
    });
};

export const NextQueue = async (req: Request, res: Response) => {
    let counter = await Counter.findOne({ name: "queue" });
    if (counter.count === counter.current) {
        return res.status(BAD_REQUEST).json({ message: "no more queue!" })
    }
    await Counter.findOneAndUpdate(
      { name: "queue" },
      { $set: { current: counter.current + 1 } }
    )
    counter = await Counter.findOne({ name: "queue" });
    return res.status(OK).json({
        message: "success!",
        currentQueue: counter.current
    });
};

export const GetQueueDocuments = async (req: Request, res: Response) => {
    const docs = await Queue.find({});
    return res.status(OK).json(docs);
};

export const UpdateQueueDocument = async (req: Request, res: Response) => {
    const { patientId, clinicType } = req.body;
    await Queue.findOneAndUpdate({ patientId: patientId }, { $set: { clinicType: clinicType } });
    return res.status(OK).json({ message: "successfull" });
};
// End of controller to access queue database
