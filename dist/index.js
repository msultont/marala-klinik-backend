"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@config/initial");
require("@config/database");
const express_1 = __importDefault(require("@config/express"));
const logger_1 = __importDefault(require("@utils/logger"));
// Start the server
const port = Number(process.env.PORT || 3000);
express_1.default.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log("\n\n"); // Adding spacing to the console
    logger_1.default.info("Express server started on port: " + port);
});
