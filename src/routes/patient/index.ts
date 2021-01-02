import { Router } from "express";

import { GetAll, GetPatient, Register } from "@controllers/patient";
import AuthMiddleware from "@middleware/auth";
import PatientMiddleware from "@middleware/patient";

const router = Router();

/******************************************************************************
 *            Get All Patients Information - "GET /api/mst/patients/"
 ******************************************************************************/
router.get("/", AuthMiddleware, GetAll);

/******************************************************************************
 *            Get Patient by user Id and birth place - "GET /api/mst/patients/patient"
 ******************************************************************************/
router.get("/patient", PatientMiddleware, GetPatient);

/******************************************************************************
 *            Register new patient - "POST /api/mst/patients/register"
 ******************************************************************************/

router.post("/register", PatientMiddleware, Register);

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

export default router;
