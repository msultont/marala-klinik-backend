"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueuePositionGenerator = exports.PatientIdGenerator = void 0;
const nanoid_1 = require("nanoid");
const conversion_1 = require("@utils/conversion");
const PatientIdGenerator = () => {
    const custom = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const id = "mc" + nanoid_1.customAlphabet(custom, 10)();
    return id;
};
exports.PatientIdGenerator = PatientIdGenerator;
const QueuePositionGenerator = () => {
    const convertDate = conversion_1.DateConversion(new Date(), "Asia/Jakarta");
    const day = convertDate.toString().slice(0, 3);
    const date = convertDate.getDay() < 10
        ? "0" + convertDate.getDay().toString()
        : convertDate.getDay().toString();
    const month = convertDate.getMonth() + 1 < 10
        ? "0" + (convertDate.getMonth() + 1).toString()
        : (convertDate.getMonth() + 1).toString();
    const year = convertDate.getFullYear().toString();
    const positionTemplate = day + date + month + year;
    return positionTemplate;
};
exports.QueuePositionGenerator = QueuePositionGenerator;
