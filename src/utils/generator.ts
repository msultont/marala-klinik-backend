import { customAlphabet } from "nanoid";
import { DateConversion } from "@utils/conversion";

export const PatientIdGenerator = () => {
    const custom =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const id = "mc" + customAlphabet(custom, 10)();
    return id;
};

export const QueuePositionGenerator = () => {
    const convertDate = DateConversion(new Date(), "Asia/Jakarta");
    const day = convertDate.toString().slice(0, 3);
    const date =
        convertDate.getDay() < 10
            ? "0" + convertDate.getDay().toString()
            : convertDate.getDay().toString();
    const month =
        convertDate.getMonth() + 1 < 10
            ? "0" + (convertDate.getMonth() + 1).toString()
            : (convertDate.getMonth() + 1).toString();
    const year = convertDate.getFullYear().toString();

    const positionTemplate = day + date + month + year;
    return positionTemplate;
};
