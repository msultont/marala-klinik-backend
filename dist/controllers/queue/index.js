"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQueuesDB = exports.GetQueuesDB = exports.NextQueue = exports.AddQueue = exports.GetQueues = exports.GetCurrentQueue = exports.ResetQueues = void 0;
const http_status_codes_1 = require("http-status-codes");
const queue_1 = __importStar(require("@models/queue"));
const { OK, BAD_REQUEST } = http_status_codes_1.StatusCodes;
const ResetQueues = (req, res) => {
    queue_1.default.resetQueue();
    return res.status(OK).json({ message: "success!" });
};
exports.ResetQueues = ResetQueues;
const GetCurrentQueue = (req, res) => {
    const data = queue_1.default.getCurrentQueue();
    res.status(OK).json({ message: "success!", currentQueue: data });
};
exports.GetCurrentQueue = GetCurrentQueue;
const GetQueues = (req, res) => {
    const data = queue_1.default.getAllQueues();
    return res.status(OK).json({ message: "success!", queues: data });
};
exports.GetQueues = GetQueues;
const AddQueue = (req, res) => {
    queue_1.default.addQueue();
    return res.status(OK).json({
        message: "success!",
        queue: queue_1.default.getLastQueue(),
    });
};
exports.AddQueue = AddQueue;
const NextQueue = (req, res) => {
    if (queue_1.default.getCurrentQueue() >= queue_1.default.getLastQueue())
        return res
            .status(BAD_REQUEST)
            .json({ message: "failed! no more users." });
    else {
        queue_1.default.nextQueue();
        return res.status(OK).json({
            message: "success!",
            currentQueue: queue_1.default.getCurrentQueue(),
        });
    }
};
exports.NextQueue = NextQueue;
// Controller to access queue database
const GetQueuesDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docs = yield queue_1.QueueDB.find({});
    return res.status(OK).json(docs);
});
exports.GetQueuesDB = GetQueuesDB;
const UpdateQueuesDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { patientId, clinicType } = req.body;
    yield queue_1.QueueDB.findOneAndUpdate({ patientId: patientId }, { $set: { clinicType: clinicType } });
    return res.status(OK).json({ message: "successfull" });
});
exports.UpdateQueuesDB = UpdateQueuesDB;
// End of controller to access queue database
