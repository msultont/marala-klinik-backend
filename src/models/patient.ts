import mongoose from "mongoose";
import { PatientIdGenerator } from "@utils/generator";

export interface IPatient extends mongoose.Document {
    fullName: string,
    birthPlace: string,
    dateOfBirth: Date,
    age: number,
    currentAddress: string,
    sex: string,
    occupation: string,
    phoneNumber: string
} 

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
            "Freelancer",
            "Karyawan Swasta",
            "Mahasiswa",
            "Pelajar",
            "Pengusaha",
            "Pegawai Negeri Sipil",
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
