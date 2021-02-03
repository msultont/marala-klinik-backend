import mongoose from "mongoose";

export interface IQueue extends mongoose.Document {
  createdAt: Date,
  fullName: string,
  patientId: string,
  clinicType: string,
  position: string
} 

const QueueSchema = new mongoose.Schema({
    createdAt : {
        type: Date,
        default: Date.now
    },
    patientId: {
        type: String
    },
    fullName: {
        type: String
    },
    clinicType: {
        type: String,
        default: () => "",
        enum: [
            "",
            "Praktek Dokter Umum",
            "Praktek Dokter Gigi",
            "Konsultasi Dokter Bedah",
            "Konsultasi Psikolog"
        ]
    },
    position: {
        type: String,
    }
});

const Queue = mongoose.model<IQueue>("Queue", QueueSchema);
export default Queue;
