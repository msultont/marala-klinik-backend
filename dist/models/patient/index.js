"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const generator_1 = require("@utils/generator");
const PatientSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        default: () => generator_1.PatientIdGenerator()
    },
    fullName: {
        type: String,
        required: true,
    },
    birthPlace: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    currentAddress: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        enum: ["Pria", "Wanita"],
        required: true
    },
    occupation: {
        type: String,
        enum: [
            "Pengusaha",
            "PNS",
            "Karyawan Swasta",
            "Freelancer",
            "Pedagang",
        ],
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Patient = mongoose_1.default.model("Patient", PatientSchema);
exports.default = Patient;
