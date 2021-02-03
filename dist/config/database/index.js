"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("@utils/logger"));
// Database Connect
mongoose_1.default.connect(
// eslint-disable-next-line max-len
"mongodb+srv://marala-master:4-_1tiAGVCi-Zv@cluster0.xzlau.mongodb.net/marala-clinic?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => logger_1.default.info("database connect"))
    .catch((err) => {
    logger_1.default.err(err);
});
