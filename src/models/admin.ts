import mongoose from "mongoose";

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

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;
