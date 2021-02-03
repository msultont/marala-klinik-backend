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
exports.Login = exports.Register = void 0;
const http_status_codes_1 = require("http-status-codes");
const auth_1 = require("@utils/auth");
const admin_1 = __importDefault(require("@models/admin"));
const { NOT_FOUND, UNAUTHORIZED, OK, FORBIDDEN } = http_status_codes_1.StatusCodes;
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const hashedPassword = yield auth_1.Hash(password);
    const query = yield admin_1.default.create({ username, password: hashedPassword });
    return res.send(query);
});
exports.Register = Register;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const query = yield admin_1.default.findOne({ username: username });
    if (!query)
        return res.status(NOT_FOUND).json({
            success: false,
            message: "Account not found!",
        });
    else {
        //@ts-ignore
        if (query.status === "active") {
            //@ts-ignore
            const compare = yield auth_1.PasswordCompare(password, query.password);
            if (compare) {
                //@ts-ignore
                const token = yield auth_1.GenerateToken(query.id, query.username);
                return res.status(OK).json({
                    tokenType: "Bearer",
                    accessToken: token,
                    user: query,
                });
            }
        }
        else
            return res
                .status(FORBIDDEN)
                .json({ message: "Please contact the admin!" });
    }
    return res.status(UNAUTHORIZED).json({ message: "Unauthorized!" });
});
exports.Login = Login;
