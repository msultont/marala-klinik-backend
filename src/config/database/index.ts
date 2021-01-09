import Mongoose from "mongoose";
import Logger from "@utils/logger";

// Database Connect
Mongoose.connect(
    // eslint-disable-next-line max-len
    "mongodb+srv://marala-master:4-_1tiAGVCi-Zv@cluster0.xzlau.mongodb.net/<dbname>?retryWrites=true&w=majority",
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
