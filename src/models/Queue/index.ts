import mongoose from "mongoose";

export interface IQueue extends mongoose.Document {
    queueNumber: number;
    createdAt: Date;
}

const QueueSchema = new mongoose.Schema({
    queueNumber: {
        type: Number,
    },
    createdAt: {
        type: Date,
    },
});

const Queue = mongoose.model<IQueue>("Queue", QueueSchema);

export default Queue;
