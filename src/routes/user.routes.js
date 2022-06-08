import { Router } from "express";
const router = Router()

import * as userCtrl from "../controllers/user.controller"
import { authJwt, verifySignUp } from "../middlewares";

router.post('/create', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignUp.checkRolesExisted
], userCtrl.createUser)

export default router;