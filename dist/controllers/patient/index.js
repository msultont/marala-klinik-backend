"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPatient = exports.GetAll = exports.Register = void 0;
const http_status_codes_1 = require("http-status-codes");
const queue_1 = require("@models/queue");
const patient_1 = __importDefault(require("@models/patient"));
const logger_1 = __importDefault(require("@utils/logger"));
const { OK, MULTIPLE_CHOICES } = http_status_codes_1.StatusCodes;
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const checkDataDuplicate = yield patient_1.default.findOne({
        fullName: req.body.fullName,
        currentAddress: req.body.currentAddress,
    });
    if (checkDataDuplicate)
        return res
            .status(MULTIPLE_CHOICES)
            .json({ message: "Data pasien sudah terdaftar" });
    const patientQuery = yield patient_1.default.create(req.body);
    const queueQuery = yield queue_1.QueueDB.create({
        patientId: patientQuery._id,
        fullName: patientQuery.fullName,
    });
    logger_1.default.info(queueQuery);
    return res.send(patientQuery);
});
exports.Register = Register;
const GetAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docs = yield patient_1.default.find({});
    return res.status(OK).json(docs);
});
exports.GetAll = GetAll;
const GetPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const patientId = req.query.patientId;
    const birthPlace = req.query.birthPlace;
    const document = yield patient_1.default.findOne({
        _id: patientId,
        birthPlace: birthPlace,
    });
    return res.status(OK).json(document);
});
exports.GetPatient = GetPatient;
