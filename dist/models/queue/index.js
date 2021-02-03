"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const generator_1 = require("@utils/generator");
class Queue {
    static getAllQueues() {
        return this.QueuesDatabase;
    }
    static getCurrentQueue() {
        return this.currentQueue;
    }
    static getLastQueue() {
        if (this.QueuesDatabase.length === 0)
            return 0;
        else {
            const totalQueue = this.QueuesDatabase.length;
            return this.QueuesDatabase[totalQueue - 1];
        }
    }
    static nextQueue() {
        this.currentQueue++;
    }
    static addQueue() {
        if (this.getAllQueues().length === 0)
            this.QueuesDatabase.push(1);
        else
            this.QueuesDatabase.push(this.getLastQueue() + 1);
    }
    static resetQueue() {
        this.QueuesDatabase = [];
        this.currentQueue = 0;
    }
}
Queue.QueuesDatabase = new Array();
Queue.currentQueue = 0;
exports.default = Queue;
exports.QueueDB = mongoose_1.default.model("Queues", new mongoose_1.default.Schema({
    createdAt: {
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
        default: () => generator_1.QueuePositionGenerator() + Queue.getLastQueue().toString()
    }
}));
