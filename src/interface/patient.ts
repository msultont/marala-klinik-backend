import Mongoose from "mongoose";

interface PatientInterface extends Mongoose.Document {
  fullName: string,
  birthPlace: string,
  dateOfBirth: Date,
  age: number,
  currentAddress: string,
  sex: string,
  occupation: string,
  phoneNumber: string
} 

export default PatientInterface