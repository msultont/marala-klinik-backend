"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDateConversion = exports.DateConversion = void 0;
const DateConversion = (date, tzString) => {
    return new Date(date.toLocaleString("en-US", { timeZone: tzString }));
};
exports.DateConversion = DateConversion;
const CustomDateConversion = (format, tzString) => {
    return new Date(new Date(format).toLocaleString("en-GB", {
        timeZone: tzString,
    }));
};
exports.CustomDateConversion = CustomDateConversion;
