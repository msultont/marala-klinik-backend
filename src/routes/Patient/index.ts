import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

import { GetAll, Register } from "@controllers/Patient";
import authMiddleware from "@middleware/Auth";
import { paramMissingError, IRequest } from "@utils/Constants";

const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/******************************************************************************
 *            Get All Patients Information - "GET /api/mst/patients/"
 ******************************************************************************/
router.get("/", authMiddleware, GetAll);

/******************************************************************************
 *                       Register new patient - "POST /api/mst/patients/register"
 ******************************************************************************/

router.post("/register", Register);

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
