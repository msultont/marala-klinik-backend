"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
require("express-async-errors");
const index_1 = __importDefault(require("@routes/index"));
const logger_1 = __importDefault(require("@utils/logger"));
const App = express_1.default();
const { BAD_REQUEST } = http_status_codes_1.default;
/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/
App.use(cookie_parser_1.default());
App.use(compression_1.default());
App.use(cors_1.default());
App.use(express_1.default.json());
App.use(express_1.default.urlencoded({ extended: true }));
// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
    App.use(morgan_1.default("dev"));
}
// Security
if (process.env.NODE_ENV === "production") {
    App.use(helmet_1.default());
}
// Add Base APIs
App.use("/api/mst", index_1.default);
// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
App.use((err, req, res, next) => {
    logger_1.default.err(err, true);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});
// Export express instance
exports.default = App;
