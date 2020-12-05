import { Request, Response } from "express";
// import Authentication from "../utils/Authentication";
// import Admin from "../models/User";

export const GetAll = async (req: Request, res: Response) => {
  const docs = await req.app.locals.credential;
  return res.status(200).json(docs);
};