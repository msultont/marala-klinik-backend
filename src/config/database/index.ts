import Mongoose from "mongoose";
import Logger from "@utils/logger";

const uri = "mongodb+srv://marala-master:4-_1tiAGVCi-Zv@cluster0.xzlau.mongodb.net/marala-clinic?retryWrites=true&w=majority";

// Database Connect
Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => Logger.info("database connect"))
    .catch((err) => {
        Logger.err(err);
    });
