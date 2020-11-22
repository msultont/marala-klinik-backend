import mongoose from "mongoose";

export interface IAdmin extends mongoose.Document {
    username: string,
    password: string
}

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "admin",
    },
    status: {
        type: String,
        default: "pending",
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    deleted_at: {
        type: Date,
        default: null,
    },
});

AdminSchema.pre<IAdmin>("save", (next) => {
    next();
});

const Admin = mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin;
