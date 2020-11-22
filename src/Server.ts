import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from 'mongoose';
import StatusCodes from "http-status-codes";
import "express-async-errors";

import Router from "./routes";
import logger from "src/utils/Logger";

const app = express();
const { BAD_REQUEST } = StatusCodes;

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(cookieParser());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
    app.use(helmet());
}

// Database Connect
mongoose.connect('mongodb://localhost:27017/marala-klinik', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => logger.info("database connect"))
    .catch(err => logger.err(err));

// Add Base APIs
app.use("/api/mst", Router);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.err(err, true);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});

// Export express instance
export default app;
