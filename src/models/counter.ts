import mongoose from "mongoose";

export interface ICounter extends mongoose.Document {
  count: number;
  current: number;
  name: string;
}

const CounterSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: () => 0
  },
  current: {
    type: Number,
    default: () => 0
  },
  name: {
    type: String
  }
})

const Counter = mongoose.model<ICounter>("counter", CounterSchema);
export default Counter;