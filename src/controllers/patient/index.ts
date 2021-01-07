import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { QueueDB } from "@models/queue";
import Patient from "@models/patient";
import Logger from "@utils/logger";

const { OK, NOT_FOUND } = StatusCodes;

export const Register = async (req: Request, res: Response): Promise<Response> => {
    const patientQuery = await Patient.create(req.body);
    const queueQuery = await QueueDB.create({
        patientId: patientQuery._id,
        fullName: patientQuery.fullName,
    });
    Logger.info(queueQuery);
    return res.send(patientQuery);
};

export const GetAll = async (req: Request, res: Response): Promise<Response> => {
    const docs = await Patient.find({});
    return res.status(OK).json(docs);
};

export const GetPatient = async (req: Request, res: Response): Promise<Response> => {
    const document = await Patient.find({
        _id: req.body.patientId,
        birthPlace: req.body.birthPlace,
    });
    if (document.length === 0)
        return res.status(NOT_FOUND).json({
            success: false,
            message: "document not found!",
        });
    return res.status(OK).json(document);
};
