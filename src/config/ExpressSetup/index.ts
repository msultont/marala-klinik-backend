import Cors from "cors";
import Compression from "compression";
import CookieParser from "cookie-parser";
import Express, { NextFunction, Request, Response } from "express";
import Helmet from "helmet";
import Morgan from "morgan";
import StatusCodes from "http-status-codes";
import "express-async-errors";

import Router from "@routes/index";
import Logger from "@utils/Logger";

const App = Express();
const { BAD_REQUEST } = StatusCodes;

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

App.use(CookieParser());
App.use(Compression());
App.use(Cors());
App.use(Express.json());
App.use(Express.urlencoded({ extended: true }));

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
    App.use(Morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
    App.use(Helmet());
}

// Add Base APIs
App.use("/api/mst", Router);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
App.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    Logger.err(err, true);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});

// Export express instance
export default App;
