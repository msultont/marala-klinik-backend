import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
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
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;
