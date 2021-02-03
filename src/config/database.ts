/* eslint-disable max-len */
import Mongoose from "mongoose";
import Logger from "@utils/logger";

// Database Connect
Mongoose.connect(
    "mongodb+srv://marala-master:4-_1tiAGVCi-Zv@cluster0.xzlau.mongodb.net/marala-clinic?authSource=admin&replicaSet=atlas-ypx6w4-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)
    .then(() => Logger.info("database connect"))
    .catch((err) => {
        Logger.err(err);
    });
