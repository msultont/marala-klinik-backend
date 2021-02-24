import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Patient from "@models/patient";

const { OK, MULTIPLE_CHOICES } = StatusCodes;

export const Register = async (
    req: Request,
    res: Response
): Promise<Response> => {
    // const checkDataDuplicate = await Patient.findOne({
    //     fullName: req.body.fullName,
    //     currentAddress: req.body.currentAddress,
    // });
    // if (checkDataDuplicate)
    //     return res
    //         .status(MULTIPLE_CHOICES)
    //         .json({ message: "Data pasien sudah terdaftar" });

    const patientQuery = await Patient.create(req.body);
    return res.send(patientQuery);
};

export const GetAll = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const docs = await Patient.find({});
    return res.status(OK).json(docs);
};

export const GetPatient = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const patientId: string = req.query.patientId as string;
    const birthPlace: string = req.query.birthPlace as string;
    const document = await Patient.findOne({
        _id: patientId,
        birthPlace: birthPlace,
    });
    return res.status(OK).json(document);
};
