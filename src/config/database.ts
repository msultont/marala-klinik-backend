/* eslint-disable max-len */
import Mongoose from "mongoose";
import Logger from "@utils/logger";

// Database Connect
Mongoose.connect(
    "mongodb://localhost:27017/marala-klinik?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
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
