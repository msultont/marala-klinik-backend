"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patient_1 = require("@controllers/patient");
const auth_1 = __importDefault(require("@middleware/auth"));
const patient_2 = __importDefault(require("@middleware/patient"));
const router = express_1.Router();
router.get("/", auth_1.default, patient_1.GetAll);
router.get("/patient", patient_2.default, patient_1.GetPatient);
router.post("/register", patient_2.default, patient_1.Register);
/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/
// router.put("/update", async (req: IRequest, res: Response) => {
//     const { user } = req.body;
//     if (!user) {
//         return res.status(BAD_REQUEST).json({
//             error: paramMissingError,
//         });
//     }
//     user.id = Number(user.id);
//     await userDao.update(user);
//     return res.status(OK).end();
// });
/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/
// router.delete("/delete/:id", async (req: IRequest, res: Response) => {
//     const { id } = req.params;
//     await userDao.delete(Number(id));
//     return res.status(OK).end();
// });
/******************************************************************************
 *                                     Export
 ******************************************************************************/
exports.default = router;
