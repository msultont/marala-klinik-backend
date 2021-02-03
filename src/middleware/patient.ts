import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const { NOT_ACCEPTABLE } = StatusCodes;

const PatientMiddleware = (req: Request, res: Response, next: NextFunction): any  => {
  const { accept } = req.headers;
  if (accept === "application/json")
    return next();
  else
    return res.status(NOT_ACCEPTABLE).json({ message: "application not acceptable" });
};


export default PatientMiddleware;