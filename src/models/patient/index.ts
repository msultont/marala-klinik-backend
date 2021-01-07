import mongoose from "mongoose";
import IPatient from "@interface/patient";
import { PatientIdGenerator } from "@utils/generator";

const PatientSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => PatientIdGenerator()
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

const Patient = mongoose.model<IPatient>("Patient", PatientSchema);

export default Patient;
