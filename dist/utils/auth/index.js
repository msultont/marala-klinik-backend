"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateToken = exports.PasswordCompare = exports.Hash = void 0;
/* eslint-disable @typescript-eslint/require-await */
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Hash = (password) => {
    return bcrypt_1.default.hash(password, 12);
};
exports.Hash = Hash;
const PasswordCompare = (text, encrypt) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bcrypt_1.default.compare(text, encrypt);
    return result;
});
exports.PasswordCompare = PasswordCompare;
const GenerateToken = (id, username) => __awaiter(void 0, void 0, void 0, function* () {
    const secretKey = process.env.JWT_SECRET_KEY || "secret";
    const token = jsonwebtoken_1.default.sign({ id, username }, secretKey);
    return token;
});
exports.GenerateToken = GenerateToken;
