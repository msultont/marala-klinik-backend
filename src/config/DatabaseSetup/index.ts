import Mongoose from "mongoose";
import Logger from "@utils/Logger";

// Database Connect
Mongoose.connect("mongodb://localhost:27017/marala-klinik", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => Logger.info("database connect"))
    .catch((err) => {
        Logger.err(err);
        process.exit(1);
    });
