import { Request, Response } from "express";
import Patient from "@models/patient";
import { QueueDB } from "@models/queue";

import Logger from "@utils/logger";

export const Register = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const patientQuery = await Patient.create(req.body);
    const queueQuery = await QueueDB.create({ patientId: patientQuery._id });
    Logger.info(queueQuery);
    return res.send(patientQuery);
};

export const GetAll = async (req: Request, res: Response) => {
    const docs = await req.app.locals.credential;
    return res.status(200).json(docs);
};
