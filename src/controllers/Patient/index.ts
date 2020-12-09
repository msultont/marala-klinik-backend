import { Request, Response } from "express";

import Logger from "@utils/Logger";
import Patient from "@models/Patient";

export const Register = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const {
        fullName,
        birthPlace,
        dateOfBirth,
        currentAddress,
        sex,
        occupation,
    } = req.body;
    const patientObject = {
        fullName,
        birthPlace,
        dateOfBirth,
        currentAddress,
        sex,
        occupation,
    };
    const query = await Patient.create(req.body);
    return res.send(query);
};

export const GetAll = async (req: Request, res: Response) => {
    const docs = await req.app.locals.credential;
    return res.status(200).json(docs);
};
