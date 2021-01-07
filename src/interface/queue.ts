import Mongoose from "mongoose";

interface QueueInterface extends Mongoose.Document {
  createdAt: Date,
  fullName: string,
  patientId: string,
  clinicType: string,
  position: string
} 

export default QueueInterface